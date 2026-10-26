/**
 * Locale residue check: words that belong to another locale's readers (config/locale-residue.json,
 * scripts/lib/residue.ts, docs/CONTENT-GUIDE.md §1b). On English: Dutch, Belgian, German and EU reader
 * framing, which left the English site in the refocus on the US, the UK, Canada and Australia.
 *
 *   npx tsx scripts/check-locale-residue.ts                  # the sources of every configured locale
 *   npx tsx scripts/check-locale-residue.ts --dist dist      # also the built HTML in dist/<locale>/
 *   npx tsx scripts/check-locale-residue.ts --only legal/    # only files whose path contains "legal/"
 *   npx tsx scripts/check-locale-residue.ts --details        # every hit (default: a summary per file, 3 hits each)
 *   npx tsx scripts/check-locale-residue.ts --strict         # fail on error and frame hits now
 *
 * Exit code: 1 when there are error or frame hits and STRICT_RESIDUE (scripts/lib/residue.ts) is true
 * or --strict is given; otherwise 0, with every hit reported as a warning. The validator runs the
 * same source scan (npm run validate).
 */
import path from 'node:path';
import { loadLocales } from './lib/load.ts';
import { STRICT_RESIDUE, loadResidueConfig, scanLocaleSources, scanDist, describeHit, type ResidueHit } from './lib/residue.ts';

const args = process.argv.slice(2);
const opt = (name: string) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const distArg = args.includes('--dist') ? (opt('--dist') && !opt('--dist')!.startsWith('--') ? opt('--dist')! : 'dist') : null;
const only = opt('--only')?.split(path.sep).join('/');
const details = args.includes('--details');
const strict = STRICT_RESIDUE || args.includes('--strict');

const { locales } = loadLocales();
const configs = loadResidueConfig();
const hits: ResidueHit[] = [];
let scanned = 0;
for (const l of locales) {
  const cfg = configs.get(l.code);
  if (!cfg) continue;
  scanned++;
  hits.push(...scanLocaleSources(l, cfg));
  if (distArg && l.status !== 'planned') hits.push(...scanDist(path.resolve(distArg), l, cfg));
}
const shown = only ? hits.filter((h) => h.file.includes(only)) : hits;

const failing = (h: ResidueHit) => h.level === 'error' || h.level === 'frame';
const byFile = new Map<string, ResidueHit[]>();
for (const h of shown) byFile.set(h.file, [...(byFile.get(h.file) ?? []), h]);
const files = [...byFile.keys()].sort((a, b) => byFile.get(b)!.filter(failing).length - byFile.get(a)!.filter(failing).length || a.localeCompare(b));
for (const f of files) {
  const list = byFile.get(f)!;
  const n = (lv: string) => list.filter((h) => h.level === lv).length;
  const bad = list.some(failing) && strict;
  console.log(`\n${bad ? '\x1b[31merror\x1b[0m' : '\x1b[33mwarn\x1b[0m'} ${f}  (${n('error')} error, ${n('frame')} frame, ${n('warn')} warn)`);
  const sorted = [...list].sort((a, b) => (failing(b) ? 1 : 0) - (failing(a) ? 1 : 0));
  for (const h of details ? sorted : sorted.slice(0, 3)) console.log(`  - ${describeHit(h)}`);
  if (!details && list.length > 3) console.log(`  … ${list.length - 3} more (--details${f.startsWith('src/') ? `, or npm run validate -- --only ${f}` : ''})`);
}
const errorish = shown.filter(failing).length;
const warns = shown.length - errorish;
console.log(
  `\nlocale residue: ${scanned} locale(s)${distArg ? ` + built pages in ${distArg}/` : ''} · ${errorish} error/frame hit(s), ${warns} warn hit(s) in ${files.length} file(s)` +
    (strict ? '' : ' · reported as warnings while STRICT_RESIDUE is false (scripts/lib/residue.ts)') +
    (only ? ` (filtered by "${only}")` : ''),
);
if (strict && errorish) process.exit(1);
