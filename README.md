# uniwind issue #341 repro

Reproduction for [uni-stack/uniwind#341](https://github.com/uni-stack/uniwind/issues/341): `expo export -p web` intermittently fails with a `SyntaxError` whose hint is the `:not(:where(.light, .light *, .dark, .dark *, ...))` selector that uniwind generates into `node_modules/uniwind/uniwind.css`.

The fix is [uni-stack/uniwind#532](https://github.com/uni-stack/uniwind/pull/532): route `buildCSS` and `buildDtsFile` through an atomic `writeFile + renameSync` helper instead of the non-atomic `fs.writeFileSync`.

## Root cause

`uniwind`'s Metro transformer calls `buildCSS` from every transform of `components/web/metro-injected.js` and the user's CSS entry file. Each call does a non-atomic `fs.writeFileSync('node_modules/uniwind/uniwind.css', ...)` — truncate then write. While that's in flight, another Metro worker can read the same file (through Tailwind compiling `@import 'uniwind'` from `generateCSSForThemes`/`compileVirtual`). The reader observes a partial CSS file and produces the `Missing closing }` parse error. The race window is microseconds, which is why local macOS builds almost never hit it and Linux CI does.

## Reproduction

```
pnpm install
node scripts/stress-race.mjs
```

The script forks N writer processes that each call uniwind's own `buildCSS` in a tight loop (the same code path Metro hits when transforming `metro-injected.js`), plus one reader process that re-reads `uniwind.css` and parses it with `lightningcss` (the same parser Tailwind/uniwind use). Any failed parse is a torn read.

Sample output without the fix:

```
{
  "parseFailures": 4,
  "cleanReads": 567,
  "firstSample": {
    "msg": "Unexpected token CloseParenthesis",
    "length": 20047,
    "tail": "...\n    --space-7: unset;\n}"
  }
}
writers: 16/16 clean exits
reader: OBSERVED RACE
```

After applying the fix (`node scripts/apply-fix.mjs` patches the installed bundle with the same atomic-write helper from PR #532), the reader runs through the same window with `parseFailures: 0`.

## CI

`.github/workflows/stress.yml` runs the stress test on `ubuntu-latest` with Node 24:

1. Pristine `uniwind@1.6.4` — runs the stress up to 3 times, exits success as soon as the race is observed.
2. Applies the PR #532 atomic-write patch to the installed bundle.
3. Re-runs the stress 3 times — fails if the race is still observed.

## What didn't reproduce

Before isolating the race to `buildCSS`, the same repro repo tried many full-Expo-build configurations (matrix below). None triggered the bug via normal Metro behavior, because Metro processes `metro-injected.js` and the CSS entry exactly once per build — only two concurrent `buildCSS` invocations, and the write window is microseconds. The direct stress test in `scripts/stress-race.mjs` is needed to expose the race reliably.

| variant | result |
| --- | --- |
| 100 screens, npm, hosted runner | pass |
| 500 diverse screens × 10 cold iterations × `maxWorkers=8` | pass |
| `expo export -p web --dev` (matches reported flag) | pass |
| `container: node:22` + `npm ci` (matches original report) | pass |
| pnpm workspace (deep `node_modules/.pnpm/` symlinked store) | pass |
| `react-native-reanimated` + `gesture-handler` + `@shopify/react-native-skia` + `react-native-svg` | pass |
| Sentry metro wrapper, custom babel transformer, `resolveRequest` passthrough | pass |
| 1,400 generated screens + 4,200 generated helper/data modules | pass |
| Exact Expo / RN / Metro / Tailwind / Uniwind versions from a failing downstream stack | pass |
| Generic extension-like Metro resolver mode (`REPRO_EXTENSION_MODE=true`) | pass |
| Expo Router entry with `src/app` root | pass |
| Imported Uniwind CSS entry + generic package-exported CSS subpath | pass |
| 1,400 screens importing `uniwind/components`, `withUniwind`, `useCSSVariable`, `useResolveClassNames` + extra CSS import | pass |
| Direct stress against `buildCSS` (`scripts/stress-race.mjs`) | **fail (= race observed)** |

## Versions

- expo `54.0.31`
- @expo/metro-config `54.0.13`
- expo-router `6.0.23`
- react-native `0.81.5`
- uniwind `1.6.4`
- tailwindcss `4.2.2`
- ubuntu-latest, node 24
