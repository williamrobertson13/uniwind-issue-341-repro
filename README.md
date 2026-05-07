# uniwind issue #341 repro

Reproduction scaffold for [uni-stack/uniwind#341](https://github.com/uni-stack/uniwind/issues/341): `expo export -p web` fails on `ubuntu-latest` with a `SyntaxError` parsing `node_modules/uniwind/dist/{common,module}/components/web/metro-injected.js`.

> **Status**: scaffold only — does not yet reproduce. 500 generated screens × 10 iterations × 3 flag scenarios × `maxWorkers=8` all pass on `ubuntu-latest`. PRs welcome to push the failure rate up.

## Failing log (from the original report and downstream observations)

```
Web Bundling failed XXXms index.web.tsx (XXXX modules)
SyntaxError: node_modules/uniwind/dist/module/components/web/metro-injected.js:
  Missing closing } at &:not(:where(.light, .light *, .dark, .dark *, ...))
```

## Theory

`uniwind`'s Metro transformer writes `node_modules/uniwind/uniwind.css` non-atomically via `fs.writeFileSync` from multiple workers. On Linux CI runners with multiple Metro workers, one worker truncates+rewrites the file while another reads it through `@import 'uniwind'` during the Tailwind compile, producing a partial CSS file and the syntax error above. Local macOS rarely hits it because of filesystem timing.

## How to repro

GitHub Actions workflow (`.github/workflows/repro.yml`) runs `expo export -p web --dev` three ways on `ubuntu-latest`:

| scenario        | flags                                                              |
| --------------- | ------------------------------------------------------------------ |
| default         | (none)                                                             |
| graph-optimize  | `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1`                             |
| tree-shaking    | both `EXPO_UNSTABLE_TREE_SHAKING=1` + `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1` |

Each scenario runs 10 iterations with full cache clear (`dist`, `.expo`, `node_modules/.cache`) between each. `metro.config.js` forces `maxWorkers=8` to widen the race window.

## Versions

- expo `~54.0.31`
- react-native `~0.81.5`
- uniwind `^1.6.4`
- tailwindcss `^4.2.1`
- ubuntu-latest, node 22
