# uniwind issue #341 repro

Reproduction scaffold for [uni-stack/uniwind#341](https://github.com/uni-stack/uniwind/issues/341): `expo export -p web` fails on `ubuntu-latest` with a `SyntaxError` parsing `node_modules/uniwind/dist/{common,module}/components/web/metro-injected.js`.

> **Status**: scaffold only — does not yet reproduce. The matrix below varies the parts of a real-world Expo SDK 54 setup that seemed most likely to trigger the race, while keeping this repository generic and free of downstream app code. Latest CSS-entry + package-exported CSS run: https://github.com/williamrobertson13/uniwind-issue-341-repro/actions/runs/25519784709

## What's been tried (all green)

| variant | result |
| --- | --- |
| 100 screens, npm, hosted runner | pass |
| 500 diverse screens × 10 cold iterations × `maxWorkers=8` | pass |
| `expo export -p web --dev` (matches reported flag) | pass |
| `container: node:22` + `npm ci` (matches original report) | pass |
| pnpm workspace (deep `node_modules/.pnpm/` symlinked store) | pass |
| `react-native-reanimated` + `gesture-handler` + `@shopify/react-native-skia` + `react-native-svg` | pass |
| Sentry metro wrapper (`getSentryExpoConfig`), custom babel transformer wrapping default, `resolveRequest` passthrough | pass |
| 1,400 generated screens + 4,200 generated helper/data modules | pass |
| exact Expo/RN/Metro/Tailwind/Uniwind versions from a failing downstream stack | pass |
| generic extension-like Metro resolver mode (`REPRO_EXTENSION_MODE=true`) | pass |
| Expo Router entry with `src/app` root | pass |
| imported Uniwind CSS entry + generic package-exported CSS subpath | pass |

## Failing log (from the original report and downstream observations)

```
Web Bundling failed XXXms index.web.tsx (XXXX modules)
SyntaxError: node_modules/uniwind/dist/module/components/web/metro-injected.js:
  Missing closing } at &:not(:where(.light, .light *, .dark, .dark *, ...))
```

## Theory

`uniwind`'s Metro transformer writes `node_modules/uniwind/uniwind.css` non-atomically via `fs.writeFileSync` from multiple workers. On Linux CI runners with multiple Metro workers, one worker truncates+rewrites the file while another reads it through `@import 'uniwind'` during the Tailwind compile, producing a partial CSS file and the syntax error above. Local macOS rarely hits it because of filesystem timing.

## How to repro

GitHub Actions workflow (`.github/workflows/repro.yml`) runs `expo export -p web --dev` three ways on `ubuntu-latest` with Node 24:

| scenario        | flags                                                              |
| --------------- | ------------------------------------------------------------------ |
| default         | (none)                                                             |
| graph-optimize  | `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1`                             |
| tree-shaking    | both `EXPO_UNSTABLE_TREE_SHAKING=1` + `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1` |

Each scenario runs 5 iterations with full cache clear (`dist`, `.expo`, `node_modules/.cache`) between each. `metro.config.js` forces `maxWorkers=8`, disables package exports by default, selectively re-enables them for generic Uniwind-related packages, and enables a generic extension-like resolver mode via `REPRO_EXTENSION_MODE=true`. The Expo Router root imports both the app's Uniwind CSS entry (`src/styles.css`) and a generic local package CSS export (`@repro/layered-css/layered-styles.css`), so CI exercises Metro's CSS transforms and CSS asset emission for app and package CSS.

## Versions

- expo `54.0.31`
- @expo/metro-config `54.0.13`
- expo-router `6.0.23`
- react-native `0.81.5`
- uniwind `1.6.4`
- tailwindcss `4.2.2`
- ubuntu-latest, node 24
