/**
 * Validator checks for organ-by-organ cards (<OrganCards id="…" />, docs/CONTENT-GUIDE.md §9),
 * called from validate-content.ts.
 *  - data (src/data/organ-cards/<id>.yaml) and the organ pictures (_organs.yaml) match their schemas;
 *    every picture is registered text-free art; every organ on a card has a picture; sources exist
 *  - words (src/i18n/<locale>/organ-cards.json): the shared "ui" strings, and for every figure a
 *    title, a detail line, the medicine's word and one effect line per card (plus its note when the
 *    card has one), all plain: at most 18 words is the aim, 30 the limit, reading ease checked in English
 *  - uses: <OrganCards id="…" /> is self-closing, registered, placed on the page its data names, and
 *    every source it cites is also cited on that page (the card marks are numbered from the page's own
 *    source list, so a source cited nowhere else would have no number)
 *  - pending AI art used by a figure is listed (a page must not ship with it)
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, walk, readYaml, readJson, readMdx } from './load.ts';
import { organCardsSchema, organArtSchema, organCardsTextSchema, type OrganCards, type OrganArt } from '../../src/schemas/organ-cards.ts';
import { mediaFileSchema } from '../../src/schemas/media.ts';

type Report = (file: string, msg: string) => void;
type Ctx = {
  err: Report;
  warn: Report;
  hasSource: (id: string) => boolean;
  hasPerson: (id: string) => boolean;
  checkPlain: (file: string, where: string, text: string, locale: string, names?: string[]) => void;
  localeCodes: string[];
  sourceLocale: string;
};

const DIR = 'src/data/organ-cards';
const USE_RE = /<OrganCards\b([^>]*?)(\/?)>/g;
const CITE_RE = /<Cite\s+id=["']([^"']+)["']/g;
const UI_KEYS = ['kicker', 'notApproved', 'notApprovedShort', 'cardsTitle', 'closeUp', 'noReceptor', 'legend', 'pictures', 'artNote', 'reviewPending'];
const UI_GROUPS: Record<string, string[]> = {
  cell: ['title', 'outside', 'surface', 'inside', 'camp', 'responds', 'stepsLabel', 'dockOne', 'dockMany', 'signalOne', 'signalMany', 'respond'],
  receptors: ['glp1', 'gip', 'glucagon'],
  receptorsList: ['glp1', 'gip', 'glucagon'],
  organs: ['brain', 'pancreas', 'stomach', 'liver', 'fat', 'muscle'],
  cells: ['beta-cell', 'nerve-cell', 'stomach-wall', 'liver-cell', 'fat-cell', 'muscle-fibre'],
  levels: ['human', 'animal', 'in-vitro', 'hypothesis', 'unknown'],
  lines: ['human', 'lab', 'hypothesis', 'unknown'],
};

export function checkOrganCards(ctx: Ctx): number {
  const { err, warn } = ctx;
  const issues = (file: string, r: { success: boolean; error?: { issues: { path: (string | number)[]; message: string }[] } }) => {
    if (!r.success) for (const i of r.error!.issues) err(file, `${i.path.join('.') || '(root)'}: ${i.message}`);
  };

  // ---------------------------------------------------------------- media registry (for the pictures)
  const mediaFile = path.join(ROOT, 'src/data/media.yaml');
  const mr = mediaFileSchema.safeParse(readYaml(mediaFile) ?? {});
  const media = mr.success ? mr.data : {};

  // ---------------------------------------------------------------- organ pictures
  const artFile = path.join(ROOT, DIR, '_organs.yaml');
  let organArt: OrganArt | null = null;
  if (fs.existsSync(artFile)) {
    const r = organArtSchema.safeParse(readYaml(artFile) ?? {});
    issues(artFile, r);
    if (r.success) organArt = r.data;
  }
  if (organArt) {
    for (const [key, a] of Object.entries(organArt.art)) {
      for (const [field, mid] of [['light', a.light], ['dark', a.dark]] as const) {
        if (!mid) continue;
        const m = media[mid];
        if (!m) err(artFile, `art ${key}: ${field} "${mid}" is not registered in src/data/media.yaml`);
        else if (m.kind !== 'infographic-art' && m.kind !== 'illustration') err(artFile, `art ${key}: ${field} "${mid}" must be text-free art (kind: infographic-art or illustration), not ${m.kind}`);
      }
      if (a.dark && a.dark === a.light) err(artFile, `art ${key}: dark is the same image as light`);
    }
    for (const [organ, o] of Object.entries(organArt.organs)) {
      if (!organArt.art[o.art]) err(artFile, `organ ${organ}: unknown art "${o.art}" (define it under art:)`);
    }
  }

  // ---------------------------------------------------------------- figures
  const figures = new Map<string, { file: string; data: OrganCards }>();
  for (const file of walk(DIR, ['.yaml', '.yml'])) {
    const id = path.basename(file).replace(/\.ya?ml$/, '');
    if (id.startsWith('_')) continue;
    const r = organCardsSchema.safeParse(readYaml(file) ?? {});
    issues(file, r);
    if (!r.success) continue;
    const x = r.data;
    figures.set(id, { file, data: x });
    const all = [...x.cell.sources, ...x.status_sources, ...x.cards.flatMap((c) => [...c.sources, ...(c.note?.sources ?? [])])];
    for (const s of new Set(all)) if (!ctx.hasSource(s)) err(file, `unknown source id "${s}"`);
    for (const c of x.cards) if (organArt && !organArt.organs[c.organ]) err(file, `card "${c.organ}": no picture for this organ in ${DIR}/_organs.yaml`);
    if (x.review.status === 'ok') {
      if (!x.review.by || !x.review.on) err(file, 'review.status ok needs review.by (person id) and review.on (date)');
      else if (!ctx.hasPerson(x.review.by)) err(file, `review.by "${x.review.by}" is not in src/data/people.yaml`);
    }
    // pictures still waiting for their scientific review
    if (organArt) {
      const used = new Set(x.cards.flatMap((c) => {
        const a = organArt!.art[organArt!.organs[c.organ]?.art ?? ''];
        return a ? [a.light, ...(a.dark ? [a.dark] : [])] : [];
      }));
      const pending = [...used].filter((mid) => media[mid]?.ai?.review === 'pending');
      if (pending.length) warn(file, `uses AI art still awaiting scientific review on ${x.page}: ${pending.join(', ')} (a page must not ship with it; set ai.review: ok after checking)`);
    }
  }

  // ---------------------------------------------------------------- words
  for (const loc of [ctx.sourceLocale, ...ctx.localeCodes.filter((l) => l !== ctx.sourceLocale)]) {
    const file = path.join(ROOT, `src/i18n/${loc}/organ-cards.json`);
    if (!fs.existsSync(file)) {
      if (loc === ctx.sourceLocale && figures.size) err(file, 'missing: words for the organ-card figures');
      continue;
    }
    let raw: Record<string, unknown>;
    try {
      raw = readJson(file) as Record<string, unknown>;
    } catch {
      continue; // reported by the JSON parse check
    }
    const ui = (raw.ui ?? {}) as Record<string, unknown>;
    if (loc === ctx.sourceLocale) {
      for (const k of UI_KEYS) if (typeof ui[k] !== 'string') err(file, `ui.${k}: missing`);
      for (const [g, keys] of Object.entries(UI_GROUPS)) {
        const grp = (ui[g] ?? {}) as Record<string, unknown>;
        for (const k of keys) if (typeof grp[k] !== 'string') err(file, `ui.${g}.${k}: missing`);
      }
    }
    for (const [id, v] of Object.entries(raw)) {
      if (id === 'ui') continue;
      const fig = figures.get(id);
      if (!fig) {
        warn(file, `"${id}" has words but no ${DIR}/${id}.yaml`);
        continue;
      }
      const r = organCardsTextSchema.safeParse(v);
      if (!r.success) {
        for (const i of r.error.issues) err(file, `${id}.${i.path.join('.')}: ${i.message}`);
        continue;
      }
      const tx = r.data;
      ctx.checkPlain(file, `${id}.title`, tx.title, loc, [tx.drug]);
      ctx.checkPlain(file, `${id}.detail`, tx.detail, loc, [tx.drug]);
      for (const c of fig.data.cards) {
        const w = tx.cards[c.organ];
        if (!w) {
          err(file, `${id}: no effect line for card "${c.organ}"`);
          continue;
        }
        ctx.checkPlain(file, `${id}.cards.${c.organ}.effect`, w.effect, loc, [tx.drug]);
        if (c.note && !w.note) err(file, `${id}.cards.${c.organ}: the data has a note (level ${c.note.level}) but there is no note text`);
        if (!c.note && w.note) err(file, `${id}.cards.${c.organ}: note text without a note (level and sources) in ${DIR}/${id}.yaml`);
        if (w.note) ctx.checkPlain(file, `${id}.cards.${c.organ}.note`, w.note, loc, [tx.drug]);
      }
      for (const k of Object.keys(tx.cards)) if (!fig.data.cards.some((c) => c.organ === k)) warn(file, `${id}.cards.${k}: no card for this organ in ${DIR}/${id}.yaml`);
    }
    if (loc === ctx.sourceLocale) for (const id of figures.keys()) if (!(id in raw)) err(file, `${id}: no words for this figure`);
  }

  // ---------------------------------------------------------------- uses in content
  let uses = 0;
  const placed = new Set<string>();
  for (const file of walk('src/content', ['.mdx'])) {
    const { data: fm, body } = readMdx(file);
    const relp = path.relative(path.join(ROOT, 'src/content'), file).split(path.sep);
    const route = relp[0] === 'compounds' ? `compounds/${relp.slice(2).join('/').replace(/\.mdx$/, '')}` : relp.slice(2).join('/').replace(/\.mdx$/, '').replace(/(^|\/)index$/, '');
    for (const m of body.matchAll(USE_RE)) {
      uses++;
      const id = /\bid=["']([a-z0-9-]+)["']/.exec(m[1])?.[1];
      if (!id) {
        err(file, '<OrganCards> needs id="kebab-case-id"');
        continue;
      }
      const other = m[1].replace(/\bid=["'][^"']*["']/, '').trim();
      if (other) err(file, `<OrganCards id="${id}">: unexpected attributes "${other}" — levels and sources belong in ${DIR}/${id}.yaml, words in organ-cards.json`);
      if (m[2] !== '/') err(file, `<OrganCards id="${id}"> must be self-closing (<OrganCards id="${id}" />)`);
      const fig = figures.get(id);
      if (!fig) {
        err(file, `<OrganCards id="${id}">: no data file ${DIR}/${id}.yaml`);
        continue;
      }
      placed.add(id);
      if (fig.data.page !== route) err(fig.file, `page is "${fig.data.page}" but the figure is placed on "${route}"`);
      // Every source must be on the page's source list, so each mark on a card has a number.
      const cited = new Set<string>();
      for (const c of body.matchAll(CITE_RE)) c[1].split(',').map((s) => s.trim()).forEach((s) => cited.add(s));
      const glance = (fm.glance ?? {}) as { stop_signs?: { sources?: string[] }[]; facts?: { sources?: string[] }[]; tested?: { sources?: string[] }; sport?: { sources?: string[] } };
      [...(glance.stop_signs ?? []), ...(glance.facts ?? []), ...(glance.tested ? [glance.tested] : []), ...(glance.sport ? [glance.sport] : [])].forEach((g) => (g.sources ?? []).forEach((s) => cited.add(s)));
      if (relp[0] === 'compounds') {
        const dataFile = path.join(ROOT, `src/data/compounds/${relp[relp.length - 1].replace(/\.mdx$/, '')}.yaml`);
        const cd = (fs.existsSync(dataFile) ? readYaml(dataFile) : null) as {
          studies?: { source?: string }[]; regulatory?: { sources?: string[] }[]; authorised_products?: { label_source?: string }[]; sequence?: { source?: string };
        } | null;
        cd?.studies?.forEach((s) => s.source && cited.add(s.source));
        cd?.regulatory?.forEach((r) => (r.sources ?? []).forEach((s) => cited.add(s)));
        cd?.authorised_products?.forEach((p) => p.label_source && cited.add(p.label_source));
        if (cd?.sequence?.source) cited.add(cd.sequence.source);
      }
      const x = fig.data;
      const all = [...x.cell.sources, ...x.status_sources, ...x.cards.flatMap((c) => [...c.sources, ...(c.note?.sources ?? [])])];
      const missing = [...new Set(all)].filter((s) => !cited.has(s));
      if (missing.length) err(file, `<OrganCards id="${id}">: cites ${missing.join(', ')}, which the page does not cite anywhere else; cite it where the page makes the same claim (the cards are numbered from the page's own source list)`);
    }
  }
  for (const [id, fig] of figures) if (!placed.has(id)) warn(fig.file, `<OrganCards id="${id}"> is not placed on any page (data says ${fig.data.page})`);
  return uses;
}
