#!/bin/bash
# Run N concurrent `expo export -p web` builds against the same uniwind
# install. Each build is a regular Metro build using `withUniwindConfig`,
# so each calls uniwind's transformer's `transform` (which fans out into
# the `injectThemes` -> `buildCSS` -> non-atomic `fs.writeFileSync` chain)
# on `metro-injected.js` and the CSS entry. Across N processes, that
# becomes 2N concurrent writers on the shared
# `node_modules/uniwind/uniwind.css` file — enough to widen the race
# window into something Metro itself observes as a parse error during
# the Tailwind compile step in `compileVirtual`, producing the same
# `Missing closing }` / `unexpected token` failure reported on #341.

set -uo pipefail

N=${N:-6}
APP_DIR=${APP_DIR:-apps/myapp}

cd "$(dirname "$0")/.."
cd "$APP_DIR"

rm -rf dist-* build-*.log

pids=()
for i in $(seq 1 "$N"); do
  EXPO_UNSTABLE_TREE_SHAKING=1 \
  EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH=1 \
  EXPO_USE_FAST_RESOLVER=1 \
    pnpm exec expo export -p web --output-dir "dist-$i" --no-minify >"build-$i.log" 2>&1 &
  pids+=($!)
done

# Wait for all builds. Some may fail (the bug); collect exit codes.
codes=()
for pid in "${pids[@]}"; do
  wait "$pid"
  codes+=($?)
done

fails=0
race_observed=0
for i in $(seq 1 "$N"); do
  code=${codes[$((i-1))]}
  if [ "$code" -ne 0 ]; then
    fails=$((fails+1))
    if grep -qE "Missing closing|Unexpected token|SyntaxError.*metro-injected|Web Bundling failed" "build-$i.log"; then
      race_observed=$((race_observed+1))
      echo "=== build $i: RACE ==="
      grep -E "SyntaxError|Missing closing|Unexpected token|Web Bundling failed" "build-$i.log" | head -3
      echo
    else
      echo "=== build $i: failed (other) ==="
      tail -10 "build-$i.log"
      echo
    fi
  fi
done

echo
echo "summary: $fails/$N builds failed; $race_observed produced the #341 race signature"
if [ "$race_observed" -gt 0 ]; then
  exit 0   # race observed = repro success
fi
exit 1     # no race observed
