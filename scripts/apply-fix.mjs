#!/usr/bin/env node
// Apply the uni-stack/uniwind#532 atomic-write fix to the installed
// uniwind bundle (dist/shared/uniwind.<hash>.cjs). Used by the
// stress test workflow to verify the fix closes the race.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const APP_DIR = join(import.meta.dirname ?? dirname(new URL(import.meta.url).pathname), '..', 'apps', 'myapp');
const UNIWIND_PKG_JSON = require.resolve('uniwind/package.json', { paths: [APP_DIR] });
const UNIWIND_ROOT = dirname(UNIWIND_PKG_JSON);
const sharedDir = join(UNIWIND_ROOT, 'dist', 'shared');

const ATOMIC_HELPER = `
const __atomicWriteFileSync = (filePath, content) => {
  const tmpPath = filePath + '.' + process.pid + '.' + Date.now() + '.' + Math.random().toString(36).slice(2) + '.tmp';
  fs__default.writeFileSync(tmpPath, content);
  try { fs__default.renameSync(tmpPath, filePath); }
  catch (err) { try { fs__default.unlinkSync(tmpPath); } catch {} throw err; }
};
`;

let patched = 0;
for (const f of readdirSync(sharedDir)) {
  if (!f.endsWith('.cjs')) continue;
  const path = join(sharedDir, f);
  let src = readFileSync(path, 'utf-8');
  if (!src.includes('exports.buildCSS')) continue;
  if (src.includes('__atomicWriteFileSync')) {
    console.log('already patched:', f);
    patched++;
    continue;
  }
  // Insert helper before buildCSS definition
  src = src.replace(/const buildCSS =/, ATOMIC_HELPER + '\nconst buildCSS =');
  // Replace both writeFileSync call sites (buildCSS + buildDtsFile)
  src = src.replace(
    /fs__default\.writeFileSync\(\s*cssFilePath,\s*newCssFile\s*\)/,
    '__atomicWriteFileSync(cssFilePath, newCssFile)',
  );
  src = src.replace(
    /fs__default\.writeFileSync\(dtsPath, dtsContent\)/,
    '__atomicWriteFileSync(dtsPath, dtsContent)',
  );
  writeFileSync(path, src);
  console.log('patched:', f);
  patched++;
}

if (patched === 0) {
  console.error('No shared bundle with exports.buildCSS found under', sharedDir);
  process.exit(1);
}
