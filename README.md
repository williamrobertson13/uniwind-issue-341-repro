# uniwind issue #341 repro

Minimal reproduction for [uni-stack/uniwind#341](https://github.com/uni-stack/uniwind/issues/341): `expo export -p web` fails on `ubuntu-latest` with a `SyntaxError` parsing `node_modules/uniwind/dist/{common,module}/components/web/metro-injected.js`.

## Failing log

```
Web Bundling failed XXXms index.web.tsx (XXXX modules)
SyntaxError: node_modules/uniwind/dist/module/components/web/metro-injected.js:
  Missing closing } at &:not(:where(.light, .light *, .dark, .dark *,
    .purple-dark, .purple-dark *, .purple-light, .purple-light *,
    ...))
```

## Theory

`uniwind`'s Metro transformer writes `node_modules/uniwind/uniwind.css` non-atomically via `fs.writeFileSync` from multiple workers. On Linux CI runners with multiple Metro workers, one worker truncates+rewrites the file while another reads it through `@import 'uniwind'` during the Tailwind compile, producing a partial CSS file and the syntax error above. Local macOS rarely hits it because of filesystem timing.

## How to repro

GitHub Actions workflow (`.github/workflows/repro.yml`) runs `expo export -p web` four ways on `ubuntu-latest`:

| scenario        | flags                                                              |
| --------------- | ------------------------------------------------------------------ |
| default         | (none)                                                             |
| tree-shaking    | `EXPO_UNSTABLE_TREE_SHAKING=1`                                     |
| graph-optimize  | `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1`                             |
| both            | both flags set                                                     |

The `default` run mirrors the original issue. The other three test whether the new SDK 54 bundler optimizations widen the race window — that's the configuration that hit the same error in the slush wallet ([MystenLabs/slush#2441](https://github.com/MystenLabs/slush/pull/2441)).

## Versions

- expo `~54.0.31`
- react-native `~0.81.5`
- uniwind `^1.6.4`
- tailwindcss `^4.2.1`
- ubuntu-latest, node 22

## Related

- [uni-stack/uniwind#341](https://github.com/uni-stack/uniwind/issues/341) — original bug report
- [MystenLabs/slush#2588](https://github.com/MystenLabs/slush/pull/2588) — attempted fix in slush via `maxWorkers=1` + uniwind 1.6.3 (closed; "didn't work")
- [MystenLabs/slush#2441](https://github.com/MystenLabs/slush/pull/2441) — slush PR that re-triggered the issue when enabling `EXPO_UNSTABLE_TREE_SHAKING=1`
