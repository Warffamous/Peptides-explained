/**
 * Builds the four deployable variants into one dist/ folder:
 *   dist/        switchable site (all three design systems, ?theme= and saved preference)
 *   dist/a/      design A only    dist/b/  design B only    dist/c/  design C only
 * Each variant gets its own Pagefind index. Run the checks on all of them afterwards.
 *   node scripts/build-all.mjs [--only a,b]
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1].split(',') : null;
const variants = [
  { theme: 'switchable', base: '/', out: 'dist' },
  { theme: 'a', base: '/a', out: 'dist-a' },
  { theme: 'b', base: '/b', out: 'dist-b' },
  { theme: 'c', base: '/c', out: 'dist-c' },
].filter((v) => !only || only.includes(v.theme === 'switchable' ? 'root' : v.theme));

const run = (cmd, env = {}) => execSync(cmd, { stdio: 'inherit', env: { ...process.env, ...env } });

for (const v of variants) {
  console.log(`\n▶ building ${v.theme} (base ${v.base})`);
  fs.rmSync(v.out, { recursive: true, force: true });
  run(`npx astro build --outDir ${v.out}`, { THEME: v.theme, BASE: v.base });
  run(`npx pagefind --site ${v.out} --output-subdir pagefind --silent`);
}
// Assemble: review builds live under dist/a, dist/b, dist/c.
for (const v of variants.filter((x) => x.out !== 'dist')) {
  const target = path.join('dist', v.base.replace(/^\//, ''));
  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(v.out, target, { recursive: true });
  fs.rmSync(v.out, { recursive: true, force: true });
}
console.log('\n✓ build-all complete: dist/ (switchable), dist/a, dist/b, dist/c');
