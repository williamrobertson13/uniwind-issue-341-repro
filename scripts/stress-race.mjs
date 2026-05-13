#!/usr/bin/env node
// Stress test for uni-stack/uniwind#341
//
// Spawns N writer processes that each call uniwind's public Metro
// transformer entry point:
//
//   require('uniwind/dist/metro/metro-transformer.cjs').transform(
//     config, projectRoot, filePath, data, options,
//   )
//
// — exactly what Metro itself calls after `withUniwindConfig` sets
// `transformerPath` in `dist/metro/index.cjs`. We pass `filePath` ending
// in `/components/web/metro-injected.js`, which is the canonical path
// uniwind's transformer matches to write `node_modules/uniwind/uniwind.css`
// via non-atomic `fs.writeFileSync` (the bug).
//
// In parallel, a reader process repeatedly reads `uniwind.css` and parses
// it with `lightningcss` (the same parser Tailwind/uniwind use). Any
// failed parse is a torn read — the same root cause as the `Missing
// closing }` bundle errors reported on #341.
//
// The transformer's final step (`worker.transform` on the injected JS)
// may fail in a minimal harness without a fully wired Metro config; we
// swallow that error since the buggy code path — `injectThemes` →
// `buildCSS` → `fs.writeFileSync` — runs first and is what we're
// exercising.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const APP_DIR = join(__dirname, '..', 'apps', 'myapp');
const CSS_ENTRY_REL = './src/styles.css';
const CSS_ENTRY_ABS = join(APP_DIR, 'src', 'styles.css');
const DTS_FILE = join(APP_DIR, 'uniwind-types.d.ts');

const UNIWIND_PKG_JSON = require.resolve('uniwind/package.json', { paths: [APP_DIR] });
const UNIWIND_ROOT = dirname(UNIWIND_PKG_JSON);
const UNIWIND_CSS = join(UNIWIND_ROOT, 'uniwind.css');
const METRO_INJECTED = join(UNIWIND_ROOT, 'dist', 'module', 'components', 'web', 'metro-injected.js');
const TRANSFORMER_PATH = join(UNIWIND_ROOT, 'dist', 'metro', 'metro-transformer.cjs');

const THEMES = [
  'light', 'dark',
  'purple-dark', 'purple-light',
  'blue-dark', 'blue-light',
  'orange-dark', 'orange-light',
  'yellow-dark', 'yellow-light',
];

// Bypass uniwind's `oldCSSFile === newCssFile` short-circuit so each
// iteration actually performs a `writeFileSync`. Without this, only the
// very first writer in the system writes; everyone else sees identical
// content and skips.
const PRIMER = '/* race-test primer */\n';

const ROLE = process.argv[2];
const ITERATIONS = Number(process.env.STRESS_ITERATIONS ?? 200);
const WORKERS = Number(process.env.STRESS_WORKERS ?? 16);
const DURATION_MS = Number(process.env.STRESS_DURATION_MS ?? 15000);

if (ROLE === 'writer') {
  // process.cwd() must contain the relative cssEntryFile path because
  // uniwind's transformer joins them with process.cwd().
  process.chdir(APP_DIR);
  const { transform } = require(TRANSFORMER_PATH);
  const config = {
    uniwind: { themes: THEMES, cssEntryFile: CSS_ENTRY_REL, dtsFile: DTS_FILE },
  };
  const options = { type: 'module', platform: 'web', dev: false, minify: false };
  for (let i = 0; i < ITERATIONS; i++) {
    try {
      writeFileSync(UNIWIND_CSS, PRIMER);
    } catch {}
    try {
      await transform(config, APP_DIR, METRO_INJECTED, Buffer.from(''), options);
    } catch {
      // worker.transform may fail in this harness — irrelevant, the
      // buggy buildCSS call already ran before we got here.
    }
  }
  process.exit(0);
} else if (ROLE === 'reader') {
  const { transform: lightningTransform } = require('lightningcss');
  let parseFailures = 0;
  let cleanReads = 0;
  let firstSample = null;
  const deadline = Date.now() + DURATION_MS;
  while (Date.now() < deadline) {
    let content;
    try {
      content = readFileSync(UNIWIND_CSS, 'utf-8');
    } catch {
      continue;
    }
    if (content.length === 0 || content === PRIMER) continue;
    try {
      lightningTransform({ code: Buffer.from(content), filename: 'uniwind.css' });
      cleanReads++;
    } catch (err) {
      parseFailures++;
      if (!firstSample) {
        firstSample = {
          msg: String(err.message || err),
          length: content.length,
          tail: content.slice(-180),
        };
      }
    }
  }
  process.stdout.write(JSON.stringify({ parseFailures, cleanReads, firstSample }, null, 2) + '\n');
  process.exit(parseFailures > 0 ? 1 : 0);
} else {
  console.log('Stress: WORKERS=' + WORKERS + ' ITERATIONS=' + ITERATIONS + ' DURATION_MS=' + DURATION_MS);
  if (!existsSync(UNIWIND_CSS)) writeFileSync(UNIWIND_CSS, PRIMER);
  const children = [];
  for (let i = 0; i < WORKERS; i++) children.push(forkRole('writer'));
  const reader = forkRole('reader');
  const writerCodes = await Promise.all(children);
  const readerCode = await reader;
  const raceObserved = readerCode !== 0;
  process.stdout.write('\nwriters: ' + writerCodes.filter(c => c === 0).length + '/' + WORKERS + ' clean exits\n');
  process.stdout.write('reader: ' + (raceObserved ? 'OBSERVED RACE' : 'no race observed') + '\n');
  process.exit(raceObserved ? 0 : 2);
}

function forkRole(role) {
  return new Promise(resolve => {
    const child = fork(__filename, [role], { stdio: 'inherit' });
    child.on('exit', code => resolve(code));
  });
}
