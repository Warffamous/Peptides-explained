/**
 * Media checks for the content validator (called from scripts/validate-content.ts).
 *
 * Errors: unregistered image file · image referenced (hero, <Photo>, <Infographic>, plate art) but
 * not registered · registered file missing · missing alt text in the source locale · disallowed
 * licence (NC/ND/unknown, or not matching the origin) · source_url/license_url host not on the
 * link allowlist · AI entry without model/prompt/date · infographic without data, text or labels ·
 * an explainer backdrop (explainers.yaml art / art_dark) that is not registered text-free art.
 * Warning: AI artwork whose scientific review is still pending (a page must not ship with it).
 */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, walk, readYaml, readJson, readMdx, hostAllowed, type Allowlist } from './load.ts';
import { mediaFileSchema, heroesFileSchema, infographicSchema, mediaTextSchema, infographicTextSchema, THIRD_PARTY_ORIGINS, type MediaEntry } from '../../src/schemas/media.ts';

type Ctx = {
  err: (file: string, msg: string) => void;
  warn: (file: string, msg: string) => void;
  zodIssues: (file: string, r: { success: boolean; error?: { issues: { path: (string | number)[]; message: string }[] } }) => void;
  hasSource: (id: string) => boolean;
  allow: Allowlist;
  localeCodes: string[];
  sourceLocale: string;
  routeExists: (key: string) => boolean;
};

const IMAGE_EXT = /\.(?:jpe?g|png|webp|avif|gif|tiff?|svg)$/i;
const PHOTO_RE = /<Photo\b([^>]*)\/?>/g;
const INFOGRAPHIC_RE = /<Infographic\b([^>]*)\/?>/g;
const ID_ATTR = /\bid=["']([^"']+)["']/;

export function validateMedia(ctx: Ctx): { images: number; infographics: number; pendingAi: string[] } {
  const { err, warn, zodIssues } = ctx;
  const regFile = path.join(ROOT, 'src/data/media.yaml');
  const mediaDir = path.join(ROOT, 'src/assets/media');
  const media = new Map<string, MediaEntry>();

  // ---------------------------------------------------------------- registry
  if (fs.existsSync(regFile)) {
    const r = mediaFileSchema.safeParse(readYaml(regFile) ?? {});
    zodIssues(regFile, r);
    if (r.success) for (const [id, e] of Object.entries(r.data)) media.set(id, e);
  }
  const files = new Map<string, string>(); // file name -> id
  for (const [id, m] of media) {
    if (files.has(m.file)) err(regFile, `"${id}": file ${m.file} is already registered as "${files.get(m.file)}"`);
    files.set(m.file, id);
    if (!fs.existsSync(path.join(mediaDir, m.file))) err(regFile, `"${id}": file src/assets/media/${m.file} does not exist`);
    for (const [field, url] of [['source_url', m.source_url], ['license_url', m.license_url]] as const) {
      if (url && !hostAllowed(url, ctx.allow)) err(regFile, `"${id}": ${field} host not on config/link-allowlist.json: ${url}`);
      if (url && !url.startsWith('https://')) err(regFile, `"${id}": ${field} must be https: ${url}`);
    }
    if (m.license_url && /^CC/.test(m.license) && new URL(m.license_url).hostname.replace(/^www\./, '') !== 'creativecommons.org') {
      err(regFile, `"${id}": a Creative Commons licence_url must point to creativecommons.org`);
    }
    if (THIRD_PARTY_ORIGINS.includes(m.origin) && m.source_url && /\/\/upload\.wikimedia\.org\//.test(m.source_url)) {
      err(regFile, `"${id}": source_url must be the human-readable file page, not the file itself (no hotlinking)`);
    }
    for (const s of m.sources) if (!ctx.hasSource(s)) err(regFile, `"${id}": sources: unknown source id "${s}"`);
  }
  // every file on disk is registered
  if (fs.existsSync(mediaDir)) {
    for (const f of fs.readdirSync(mediaDir)) {
      if (f.startsWith('.') || !IMAGE_EXT.test(f)) continue;
      if (!files.has(f)) err(path.join(mediaDir, f), `unregistered image file: add an entry to src/data/media.yaml (npm run media:commons / media:generate write it for you)`);
    }
  }

  // ---------------------------------------------------------------- alt text and captions
  for (const loc of ctx.localeCodes) {
    const file = path.join(ROOT, `src/i18n/${loc}/media.json`);
    if (!fs.existsSync(file)) {
      if (loc === ctx.sourceLocale && media.size) err(file, `missing: every registered image needs alt text in ${loc}`);
      continue;
    }
    const r = mediaTextSchema.safeParse(readJson(file));
    zodIssues(file, r);
    if (!r.success) continue;
    for (const id of Object.keys(r.data)) if (!media.has(id)) warn(file, `"${id}" has text but is not registered in src/data/media.yaml`);
    for (const [id, v] of Object.entries(r.data)) {
      if (/^(?:an?\s+)?(?:image|picture|photo(?:graph)?|illustration)\s+of\b/i.test(v.alt)) warn(file, `"${id}": alt text should describe the content, not start with "image of"/"photo of"`);
      if (v.alt.length > 250) warn(file, `"${id}": alt text is long (${v.alt.length} chars); put detail in the caption`);
      if (v.caption && v.caption.trim() === v.alt.trim()) warn(file, `"${id}": caption repeats the alt text; the caption should add context`);
    }
    if (loc === ctx.sourceLocale) for (const id of media.keys()) if (!r.data[id]?.alt) err(file, `"${id}": missing alt text in ${loc}`);
  }

  // ---------------------------------------------------------------- where images are used
  const usedOn = new Map<string, string[]>(); // media id -> places
  const use = (id: string, where: string) => usedOn.set(id, [...(usedOn.get(id) ?? []), where]);
  const requireMedia = (file: string, id: string, ctxMsg: string) => {
    if (!media.has(id)) err(file, `${ctxMsg}: image "${id}" is not registered in src/data/media.yaml`);
  };

  const heroesFile = path.join(ROOT, 'src/data/heroes.yaml');
  if (fs.existsSync(heroesFile)) {
    const r = heroesFileSchema.safeParse(readYaml(heroesFile) ?? {});
    zodIssues(heroesFile, r);
    if (r.success) {
      for (const [route, id] of Object.entries(r.data)) {
        requireMedia(heroesFile, id, `hero for "${route}"`);
        if (media.get(id)?.kind === 'infographic-art') err(heroesFile, `hero for "${route}": "${id}" is infographic art; heroes are photos or illustrations`);
        if (!ctx.routeExists(route)) warn(heroesFile, `hero for "${route}": no such page (yet)`);
        use(id, `hero ${route || '(landing)'}`);
      }
    }
  }

  const infographics = new Map<string, { file: string; markers: string[] }>();
  for (const file of walk('src/data/infographics', ['.yaml', '.yml'])) {
    const id = path.basename(file).replace(/\.ya?ml$/, '');
    const r = infographicSchema.safeParse(readYaml(file));
    zodIssues(file, r);
    if (!r.success) continue;
    infographics.set(id, { file, markers: r.data.markers.map((m) => m.key) });
    requireMedia(file, r.data.art, 'art');
    if (media.has(r.data.art) && media.get(r.data.art)!.kind !== 'infographic-art') err(file, `art "${r.data.art}" must be kind: infographic-art (text-free artwork)`);
    for (const s of r.data.sources) if (!ctx.hasSource(s)) err(file, `sources: unknown source id "${s}"`);
    use(r.data.art, `infographic ${id}`);
    if (r.data.art_dark) {
      // the dark-scheme version of the same art (<Infographic> checks at build time that the proportions match)
      requireMedia(file, r.data.art_dark, 'art_dark');
      if (media.has(r.data.art_dark) && media.get(r.data.art_dark)!.kind !== 'infographic-art') err(file, `art_dark "${r.data.art_dark}" must be kind: infographic-art (text-free artwork)`);
      if (r.data.art_dark === r.data.art) err(file, 'art_dark is the same image as art: give the dark version its own media entry, or leave art_dark out');
      use(r.data.art_dark, `infographic ${id} (dark)`);
    }
  }
  // Explainer backdrops (src/data/explainers.yaml art / art_dark): text-free art under the overlay.
  // <Explainer> checks at build time that both pictures and the overlay share their proportions.
  const xpFile = path.join(ROOT, 'src/data/explainers.yaml');
  if (fs.existsSync(xpFile)) {
    const reg = (readYaml(xpFile) ?? {}) as Record<string, { art?: string; art_dark?: string; pages?: string[] }>;
    for (const [xid, x] of Object.entries(reg)) {
      for (const field of ['art', 'art_dark'] as const) {
        const mid = x?.[field];
        if (!mid) continue;
        requireMedia(xpFile, mid, `explainer ${xid}: ${field}`);
        const kind = media.get(mid)?.kind;
        if (kind && kind !== 'infographic-art' && kind !== 'illustration') err(xpFile, `explainer ${xid}: ${field} "${mid}" must be text-free art (kind: infographic-art or illustration), not ${kind}`);
        use(mid, `explainer ${xid}${field === 'art_dark' ? ' (dark)' : ''}${x.pages?.length ? ` on ${x.pages.join(', ')}` : ''}`);
      }
    }
  }

  for (const loc of ctx.localeCodes) {
    const file = path.join(ROOT, `src/i18n/${loc}/infographics.json`);
    if (!fs.existsSync(file)) {
      if (loc === ctx.sourceLocale && infographics.size) err(file, `missing: infographic titles, labels and text equivalents for ${loc}`);
      continue;
    }
    const r = infographicTextSchema.safeParse(readJson(file));
    zodIssues(file, r);
    if (!r.success) continue;
    for (const [id, g] of infographics) {
      const text = r.data[id];
      if (!text) {
        if (loc === ctx.sourceLocale) err(file, `"${id}": missing title, labels and text equivalent`);
        continue;
      }
      for (const k of g.markers) if (!text.markers[k]) err(file, `"${id}": missing label for marker "${k}"`);
      for (const k of Object.keys(text.markers)) if (!g.markers.includes(k)) warn(file, `"${id}": label "${k}" has no marker in ${path.relative(ROOT, g.file)}`);
    }
    for (const id of Object.keys(r.data)) if (!infographics.has(id)) warn(file, `"${id}" has text but no src/data/infographics/${id}.yaml`);
  }

  for (const file of walk('src/content', ['.mdx'])) {
    const { body } = readMdx(file);
    const where = path.relative(ROOT, file).replace(/\\/g, '/');
    for (const m of body.matchAll(PHOTO_RE)) {
      const id = ID_ATTR.exec(m[1])?.[1];
      if (!id) { err(file, '<Photo> needs id="media-id"'); continue; }
      requireMedia(file, id, '<Photo>');
      if (media.get(id)?.kind === 'infographic-art') warn(file, `<Photo id="${id}">: infographic art has no labels on its own; use <Infographic>`);
      use(id, where);
    }
    for (const m of body.matchAll(INFOGRAPHIC_RE)) {
      const id = ID_ATTR.exec(m[1])?.[1];
      if (!id) { err(file, '<Infographic> needs id="infographic-id"'); continue; }
      if (!infographics.has(id)) err(file, `<Infographic id="${id}">: no data file src/data/infographics/${id}.yaml`);
      const g = readYaml(path.join(ROOT, `src/data/infographics/${id}.yaml`)) as { art?: string; art_dark?: string } | null;
      if (g?.art) use(g.art, where);
      if (g?.art_dark) use(g.art_dark, where);
    }
  }

  // ---------------------------------------------------------------- AI review
  const pendingAi = [...media].filter(([, m]) => m.ai?.review === 'pending').map(([id]) => id);
  if (pendingAi.length) {
    warn(
      regFile,
      `AI artwork awaiting scientific review (a page must not ship with these; set ai.review: ok after checking):\n` +
        pendingAi.map((id) => `      · ${id} — used on: ${(usedOn.get(id) ?? ['(not used yet)']).join(', ')}${media.get(id)!.ai!.review_note ? `\n        note: ${media.get(id)!.ai!.review_note}` : ''}`).join('\n'),
    );
  }
  return { images: media.size, infographics: infographics.size, pendingAi };
}
