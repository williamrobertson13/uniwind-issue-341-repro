#!/usr/bin/env node
// Stress test for uni-stack/uniwind#341
//
// Spawns N writer processes that each call uniwind's internal `buildCSS`
// in a tight loop. `buildCSS` does a non-atomic `fs.writeFileSync` on
// `node_modules/uniwind/uniwind.css`. In Metro, this is called once per
// transform of `components/web/metro-injected.js` and once per transform
// of the CSS entry file; here we exercise the same code path directly to
// widen the race window into something reliably observable.
//
// A reader process repeatedly reads `uniwind.css` and parses it with
// `lightningcss` (the same parser Tailwind/uniwind use). Any failed parse
// is a torn read — the same root cause as the bundle errors reported on
// #341:
//
//   SyntaxError: ...uniwind.css: Missing closing }
//   at &:not(:where(.light, .light *, .dark, ...))
//
// Exits 0 (= "race observed") when the reader catches at least one torn
// read. Exits 2 (= "no race observed") if the reader's full window
// completes without any parse failure.

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const APP_DIR = join(__dirname, '..', 'apps', 'myapp');
const CSS_ENTRY = join(APP_DIR, 'src', 'styles.css');
const UNIWIND_PKG_JSON = require.resolve('uniwind/package.json', { paths: [APP_DIR] });
const UNIWIND_ROOT = dirname(UNIWIND_PKG_JSON);
const UNIWIND_CSS = join(UNIWIND_ROOT, 'uniwind.css');

// Bypass the `oldCSSFile === newCssFile` short-circuit so each writer
// actually performs `writeFileSync`. We re-prime with a sentinel that's
// guaranteed to differ from uniwind's generated output.
const PRIMER = '/* race-test primer */\n';

function loadUniwindBuildCSS() {
  const sharedDir = join(UNIWIND_ROOT, 'dist', 'shared');
  for (const f of readdirSync(sharedDir)) {
    if (!f.endsWith('.cjs')) continue;
    const src = readFileSync(join(sharedDir, f), 'utf-8');
    if (src.includes('exports.buildCSS')) {
      return require(join(sharedDir, f)).buildCSS;
    }
  }
  throw new Error('Could not locate uniwind buildCSS in dist/shared/*.cjs');
}

const THEMES = [
  'light', 'dark',
  'purple-dark', 'purple-light',
  'blue-dark', 'blue-light',
  'orange-dark', 'orange-light',
  'yellow-dark', 'yellow-light',
];

const ROLE = process.argv[2];
const ITERATIONS = Number(process.env.STRESS_ITERATIONS ?? 200);
const WORKERS = Number(process.env.STRESS_WORKERS ?? 16);
const DURATION_MS = Number(process.env.STRESS_DURATION_MS ?? 10000);

if (ROLE === 'writer') {
  const buildCSS = loadUniwindBuildCSS();
  for (let i = 0; i < ITERATIONS; i++) {
    try {
      writeFileSync(UNIWIND_CSS, PRIMER);
      await buildCSS(THEMES, CSS_ENTRY);
    } catch {
      // best-effort: ignore transient errors so the race surface stays open
    }
  }
  process.exit(0);
} else if (ROLE === 'reader') {
  const { transform } = require('lightningcss');
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
      transform({ code: Buffer.from(content), filename: 'uniwind.css' });
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
