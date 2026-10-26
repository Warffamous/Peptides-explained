/**
 * Validator checks for <ProductCheck /> ("If your product did not come from a pharmacy: check before
 * you use it"; docs/CONTENT-GUIDE.md §1a and §9), called from validate-content.ts.
 *  - data (src/data/product-check.yaml): schema, pictograms exist, every source exists (also the
 *    per-jurisdiction local_sources), every linked route exists, and the intro and every check have at
 *    least one source in each locale that is built (published or preview)
 *  - words (src/i18n/<locale>/product-check.json): text for every check, one link text per link,
 *    plain language (short sentences, reading ease) like summaries and captions
 *  - uses in MDX: self-closing; an extra="…" line needs its own extraSources="id,id" that exist and is
 *    plain; extraAfter names a check; never inside an <InDetail> fold (it holds the emergency line);
 *    once per page
 * The English emergency-number rule (never 112) is enforced for this namespace by the general i18n
 * scan in validate-content.ts (the stop check sits under a "stop" key, which counts as safety text).
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, walk, readYaml, readJson, readMdx, loadLocales } from './load.ts';
import { visibleSources } from '../../src/lib/jurisdictions.ts';
import { productCheckDataSchema, productCheckTextSchema, type ProductCheckData } from '../../src/schemas/product-check.ts';
import { PICTOGRAM_NAMES } from '../../src/components/ui/pictograms.ts';

type Report = (file: string, msg: string) => void;
type Ctx = {
  err: Report;
  warn: Report;
  hasSource: (id: string) => boolean;
  routeExists: (key: string) => boolean;
  /** validate-content's plain-language check (word limits; reading ease for English). */
  checkPlain: (file: string, where: string, text: string, locale: string, names?: string[]) => void;
  localeCodes: string[];
  sourceLocale: string;
};

const USE_RE = /<ProductCheck\b((?:[^>"'{]|"[^"]*"|'[^']*')*?)(\/?)>/g;
const ATTR_RE = /\b([A-Za-z]+)=(["'])([\s\S]*?)\2/g;
const ALLOWED_ATTRS = new Set(['extra', 'extraSources', 'extraAfter', 'extraIcon']);
/** One idea per sentence (B1): word limits and reading ease apply to each sentence. */
const sentences = (s: string) => s.split(/(?<=[.!?;:])\s+/).map((x) => x.trim()).filter(Boolean);

export function checkProductCheck(ctx: Ctx): number {
  const { err, warn } = ctx;
  const dataFile = path.join(ROOT, 'src/data/product-check.yaml');
  let data: ProductCheckData | null = null;
  if (fs.existsSync(dataFile)) {
    const r = productCheckDataSchema.safeParse(readYaml(dataFile) ?? {});
    if (!r.success) for (const i of r.error.issues) err(dataFile, `${i.path.join('.') || '(root)'}: ${i.message}`);
    else data = r.data;
  }
  const ids = new Set<string>();
  if (data) {
    const intro = { sources: data.intro_sources, local_sources: data.intro_local_sources };
    [...data.intro_sources, ...Object.values(data.intro_local_sources).flat()].forEach((s) => ctx.hasSource(s) || err(dataFile, `intro: unknown source id "${s}"`));
    // every built locale cites something for the intro and for each check (its own countries' sources)
    const built = loadLocales().locales.filter((l) => l.status !== 'planned');
    for (const l of built) {
      if (!visibleSources(intro, l).length) err(dataFile, `intro: no source for locale "${l.code}" (intro_sources, or intro_local_sources for ${l.jurisdictions.full.join('/')})`);
      for (const it of data.items) if (!visibleSources(it, l).length) err(dataFile, `${it.id}: no source for locale "${l.code}" (sources, or local_sources for ${l.jurisdictions.full.join('/')})`);
    }
    for (const it of data.items) {
      if (ids.has(it.id)) err(dataFile, `duplicate check id "${it.id}"`);
      ids.add(it.id);
      if (!PICTOGRAM_NAMES.includes(it.icon)) err(dataFile, `${it.id}: unknown pictogram "${it.icon}" (src/components/ui/pictograms.ts)`);
      for (const s of [...it.sources, ...Object.values(it.local_sources).flat()]) if (!ctx.hasSource(s)) err(dataFile, `${it.id}: unknown source id "${s}"`);
      for (const l of it.links) {
        const route = l.split('#')[0];
        if (!ctx.routeExists(route)) err(dataFile, `${it.id}: link to "${l}", but no page has the route "${route}"`);
      }
    }
    if (!data.items.some((it) => it.emergency)) warn(dataFile, 'no check has emergency: true — the list should end with the warning signs and the emergency line');
  }

  // words per locale
  const locales = [ctx.sourceLocale, ...ctx.localeCodes.filter((l) => l !== ctx.sourceLocale)];
  for (const loc of locales) {
    const file = path.join(ROOT, `src/i18n/${loc}/product-check.json`);
    if (!fs.existsSync(file)) {
      if (loc === ctx.sourceLocale && data) err(file, 'missing: the words for <ProductCheck /> (src/data/product-check.yaml)');
      continue;
    }
    const r = productCheckTextSchema.safeParse(readJson(file));
    if (!r.success) {
      for (const i of r.error.issues) err(file, `${i.path.join('.') || '(root)'}: ${i.message}`);
      continue;
    }
    const tx = r.data;
    ctx.checkPlain(file, 'title', tx.title, loc);
    sentences(tx.intro).forEach((s, i) => ctx.checkPlain(file, `intro, sentence ${i + 1}`, s, loc));
    if (!/\{name\}/.test(tx.extra)) err(file, 'extra: must contain {name} (the compound\'s common name)');
    if (!data) continue;
    for (const it of data.items) {
      const t = tx.items[it.id];
      if (!t) {
        (loc === ctx.sourceLocale ? err : warn)(file, `items.${it.id}: no text for this check`);
        continue;
      }
      if (t.links.length !== it.links.length) err(file, `items.${it.id}: ${t.links.length} link text(s) for ${it.links.length} link(s) in src/data/product-check.yaml`);
      ctx.checkPlain(file, `items.${it.id}.title`, t.title.replace(/:$/, ''), loc);
      t.points.forEach((p, i) => ctx.checkPlain(file, `items.${it.id}.points[${i + 1}]`, p.replace(/[;.]$/, ''), loc));
      sentences(t.text).forEach((s, i) => ctx.checkPlain(file, `items.${it.id}.text, sentence ${i + 1}`, s, loc));
    }
    for (const id of Object.keys(tx.items)) if (!ids.has(id)) warn(file, `items.${id}: not a check in src/data/product-check.yaml`);
  }

  // uses in content
  let uses = 0;
  for (const file of walk('src/content', ['.mdx'])) {
    const { body } = readMdx(file);
    const locale = path.relative(path.join(ROOT, 'src/content'), file).split(path.sep)[1];
    const found = [...body.matchAll(USE_RE)];
    if (!found.length) continue;
    uses += found.length;
    if (found.length > 1) warn(file, `<ProductCheck /> is used ${found.length} times; once per page is enough`);
    for (const m of found) {
      if (m[2] !== '/') err(file, '<ProductCheck /> must be self-closing: its checks live in src/data/product-check.yaml and product-check.json');
      const attrs = new Map([...m[1].matchAll(ATTR_RE)].map((a) => [a[1], a[3]]));
      for (const k of attrs.keys()) if (!ALLOWED_ATTRS.has(k)) err(file, `<ProductCheck ${k}="…">: unknown attribute (allowed: ${[...ALLOWED_ATTRS].join(', ')})`);
      const extra = attrs.get('extra');
      const extraSources = attrs.get('extraSources');
      if (extra !== undefined) {
        if (!extra.trim()) err(file, '<ProductCheck extra=""> is empty');
        else sentences(extra).forEach((s, i) => ctx.checkPlain(file, `<ProductCheck extra>, sentence ${i + 1}`, s, locale));
        if (!extraSources?.trim()) err(file, '<ProductCheck extra="…"> needs extraSources="id,id": the sources on this page that support the line');
      } else if (extraSources || attrs.has('extraAfter') || attrs.has('extraIcon')) {
        err(file, '<ProductCheck>: extraSources, extraAfter and extraIcon only go with extra="…"');
      }
      for (const id of (extraSources ?? '').split(',').map((s) => s.trim()).filter(Boolean)) {
        if (!ctx.hasSource(id)) err(file, `<ProductCheck extraSources>: unknown source id "${id}"`);
      }
      const after = attrs.get('extraAfter');
      if (after && !ids.has(after)) err(file, `<ProductCheck extraAfter="${after}">: no check with that id (${[...ids].join(', ')})`);
      const icon = attrs.get('extraIcon');
      if (icon && !PICTOGRAM_NAMES.includes(icon)) err(file, `<ProductCheck extraIcon="${icon}">: unknown pictogram`);
    }
    for (const f of body.matchAll(/<InDetail\b[\s\S]*?<\/InDetail>/g)) {
      if (/<ProductCheck\b/.test(f[0])) err(file, '<ProductCheck /> must never sit inside an <InDetail> fold: it is the practical checklist and ends with the emergency line');
    }
  }
  return uses;
}
