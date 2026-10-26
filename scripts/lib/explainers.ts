/**
 * Validator checks for animated explainers (docs/EXPLAINERS.md), called from validate-content.ts.
 *  - registry schema (src/data/explainers.yaml): 10–15 s, 4–6 steps, evidence levels, sources, review
 *  - artwork exists and contains NO text (no <text>, <tspan>, <textPath>, <foreignObject>, <title>, <desc>)
 *  - captions: every registered explainer has en text with one caption per step; translations keep
 *    the step count and the overlay label keys
 *  - every <Explainer id="…" /> in MDX is self-closing, registered, and its page is listed in `pages`
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, walk, readYaml, readJson, readMdx } from './load.ts';
import { explainerRegistrySchema, explainerTextFileSchema, type Explainer } from '../../src/schemas/explainers.ts';

type Report = (file: string, msg: string) => void;
type Ctx = {
  err: Report;
  warn: Report;
  hasSource: (id: string) => boolean;
  hasPerson: (id: string) => boolean;
  localeCodes: string[];
  sourceLocale: string;
};

const ART_TEXT_RE = /<(text|tspan|textPath|foreignObject|title|desc)\b/;
const USE_RE = /<Explainer\b([^>]*?)(\/?)>/g;
const ART_BUDGET = 10 * 1024;

export function checkExplainers(ctx: Ctx): number {
  const { err, warn } = ctx;
  const regFile = path.join(ROOT, 'src/data/explainers.yaml');
  let registry: Record<string, Explainer> = {};
  if (fs.existsSync(regFile)) {
    const r = explainerRegistrySchema.safeParse(readYaml(regFile) ?? {});
    if (!r.success) for (const i of r.error.issues) err(regFile, `${i.path.join('.') || '(root)'}: ${i.message}`);
    else registry = r.data;
  }

  for (const [id, x] of Object.entries(registry)) {
    const art = path.join(ROOT, `src/components/explainers/${id}.astro`);
    if (!fs.existsSync(art)) err(regFile, `${id}: no artwork at src/components/explainers/${id}.astro`);
    else {
      const src = fs.readFileSync(art, 'utf8');
      const m = ART_TEXT_RE.exec(src.replace(/<!--[\s\S]*?-->/g, ''));
      if (m) err(art, `<${m[1]}> inside explainer artwork — the SVG must contain no text; overlay words from explainers.json labels instead`);
      if (Buffer.byteLength(src) > ART_BUDGET) warn(art, `artwork source is ${(Buffer.byteLength(src) / 1024).toFixed(1)} KB; aim for ≤ ${ART_BUDGET / 1024} KB of SVG`);
    }
    for (const s of [...x.sources, ...Object.values(x.local_sources).flat()]) if (!ctx.hasSource(s)) err(regFile, `${id}: unknown source id "${s}"`);
    if (x.review.status === 'ok') {
      if (!x.review.by || !x.review.on) err(regFile, `${id}: review.status ok needs review.by (person id) and review.on (date)`);
      else if (!ctx.hasPerson(x.review.by)) err(regFile, `${id}: review.by "${x.review.by}" is not in src/data/people.yaml`);
    }
  }

  // captions per locale
  let enLabels: Record<string, string[]> = {};
  const locales = [ctx.sourceLocale, ...ctx.localeCodes.filter((l) => l !== ctx.sourceLocale)];
  for (const loc of locales) {
    const file = path.join(ROOT, `src/i18n/${loc}/explainers.json`);
    if (!fs.existsSync(file)) {
      if (loc === ctx.sourceLocale && Object.keys(registry).length) err(file, 'missing: captions for the registered explainers');
      continue;
    }
    const r = explainerTextFileSchema.safeParse(readJson(file));
    if (!r.success) {
      for (const i of r.error.issues) err(file, `${i.path.join('.') || '(root)'}: ${i.message}`);
      continue;
    }
    for (const [id, text] of Object.entries(r.data)) {
      const x = registry[id];
      if (!x) {
        err(file, `"${id}" is not registered in src/data/explainers.yaml`);
        continue;
      }
      if (text.steps.length !== x.steps.length) err(file, `${id}: ${text.steps.length} captions but ${x.steps.length} steps in the registry`);
      const keys = Object.keys(text.labels).sort();
      if (loc === ctx.sourceLocale) enLabels[id] = keys;
      else if (enLabels[id] && keys.join() !== enLabels[id].join()) warn(file, `${id}: overlay labels (${keys.join(', ')}) differ from ${ctx.sourceLocale} (${enLabels[id].join(', ')})`);
    }
    if (loc === ctx.sourceLocale) for (const id of Object.keys(registry)) if (!r.data[id]) err(file, `${id}: no captions`);
  }

  // uses in content
  let uses = 0;
  for (const file of walk('src/content', ['.mdx'])) {
    const { body } = readMdx(file);
    const relp = path.relative(path.join(ROOT, 'src/content'), file).split(path.sep);
    const route = relp[0] === 'compounds' ? `compounds/${relp.slice(2).join('/').replace(/\.mdx$/, '')}` : relp.slice(2).join('/').replace(/\.mdx$/, '').replace(/(^|\/)index$/, '');
    for (const m of body.matchAll(USE_RE)) {
      uses++;
      const attrs = m[1];
      const id = /\bid=["']([a-z0-9-]+)["']/.exec(attrs)?.[1];
      if (!id) {
        err(file, '<Explainer> needs id="kebab-case-id"');
        continue;
      }
      const other = attrs.replace(/\bid=["'][^"']*["']/, '').trim();
      if (other) err(file, `<Explainer id="${id}">: unexpected attributes "${other}" — timing, levels and sources belong in src/data/explainers.yaml`);
      if (m[2] !== '/') err(file, `<Explainer id="${id}"> must be self-closing (<Explainer id="${id}" />); its text lives in explainers.json`);
      const x = registry[id];
      if (!x) err(file, `<Explainer id="${id}"> is not registered in src/data/explainers.yaml`);
      else if (!x.pages.includes(route)) warn(regFile, `${id}: used on "${route}" but that route is not in pages`);
    }
  }
  return uses;
}
