/**
 * Media pipeline at build time: the image registry, page heroes, infographic plates, localised
 * alt text/captions, and responsive <picture> sources (AVIF + WebP + JPEG fallback) made with
 * astro:assets getImage() from the self-hosted originals in src/assets/media/.
 *
 * Crops are planned here: a band-shaped hero is cut from the original around its focal point
 * (the registry `focal`, measured on the unmirrored image) so a phone downloads only the band.
 * sharp crops with a gravity (top/centre/bottom or left/centre/right); we pick the gravity whose
 * window keeps the focal point nearest its centre and re-express the focal point inside the crop,
 * so CSS object-position can keep fine-tuning on screens whose shape differs from the crop.
 */
import YAML from 'yaml';
import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import { mediaFileSchema, heroesFileSchema, infographicSchema, type MediaEntry, type Infographic } from '../schemas/media';
import { tr, has, isFallback } from './i18n';
import { SOURCE_LOCALE, getLocale } from './config';
import type { z, ZodTypeAny } from 'zod';

const raw = import.meta.glob<string>(['/src/data/media.yaml', '/src/data/heroes.yaml', '/src/data/infographics/*.yaml'], {
  eager: true,
  query: '?raw',
  import: 'default',
});
const originals = import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/*.{jpg,jpeg,png,webp,avif,tif,tiff}', { eager: true });

function parse<S extends ZodTypeAny>(path: string, schema: S, fallback: z.input<S>): z.output<S> {
  const text = raw[path];
  const data = text === undefined ? fallback : (YAML.parse(text) ?? fallback);
  const r = schema.safeParse(data);
  if (!r.success) throw new Error(`[media] ${path} is invalid:\n` + r.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`).join('\n'));
  return r.data;
}

export type Media = MediaEntry & { id: string; image: ImageMetadata };

export const MEDIA = new Map<string, Media>();
for (const [id, entry] of Object.entries(parse('/src/data/media.yaml', mediaFileSchema, {}))) {
  const mod = originals[`/src/assets/media/${entry.file}`];
  if (!mod) throw new Error(`[media] "${id}": file src/assets/media/${entry.file} not found`);
  MEDIA.set(id, { ...entry, id, image: mod.default });
}

export const HEROES = parse('/src/data/heroes.yaml', heroesFileSchema, {});

export const INFOGRAPHICS = new Map<string, Infographic>();
for (const path of Object.keys(raw).filter((p) => p.startsWith('/src/data/infographics/'))) {
  const id = path.replace(/^.*\//, '').replace(/\.ya?ml$/, '');
  INFOGRAPHICS.set(id, parse(path, infographicSchema, {} as never));
}

export function getMedia(id: string): Media {
  const m = MEDIA.get(id);
  if (!m) throw new Error(`[media] unknown media id "${id}" (register it in src/data/media.yaml)`);
  return m;
}

export function getInfographic(id: string): Infographic {
  const g = INFOGRAPHICS.get(id);
  if (!g) throw new Error(`[media] no infographic data src/data/infographics/${id}.yaml`);
  return g;
}

/**
 * The hero for a route key ("" = landing) in a locale, or null when the page has none there. A
 * per-locale entry uses the locale's own id, else its default; without either the page has no hero.
 */
export function heroFor(routeKey: string, locale: string): Media | null {
  const v = HEROES[routeKey.replace(/^\/+|\/+$/g, '')];
  const id = typeof v === 'string' ? v : v ? (v[locale] ?? v.default) : undefined;
  return id ? getMedia(id) : null;
}

/** Alt text and caption in the reader's language (preview locales fall back to English, marked). */
export function mediaText(locale: string, id: string): { alt: string; caption?: string; lang?: string; dir?: 'ltr' | 'rtl' } {
  const key = `media.${id}`;
  if (!has(locale, `${key}.alt`) && !has(SOURCE_LOCALE, `${key}.alt`)) throw new Error(`[media] missing alt text for "${id}" in src/i18n/${SOURCE_LOCALE}/media.json`);
  const v = tr<{ alt: string; caption?: string }>(locale, key);
  const fallback = isFallback(locale, `${key}.alt`);
  // Fallback text keeps its own language and direction (e.g. English inside an Arabic page).
  return { ...v, lang: fallback ? SOURCE_LOCALE : undefined, dir: fallback ? getLocale(SOURCE_LOCALE).dir : undefined };
}

// ---------------------------------------------------------------- responsive pictures

export type PictureSource = { type: string; srcset: string; sizes: string; media?: string; width: number; height: number };
export type BuiltPicture = { sources: PictureSource[]; img: { src: string; srcset: string; sizes: string; width: number; height: number }; focal: string };

/** Encoders and quality per format. AVIF first (smallest), WebP second; JPEG is the <img> fallback. */
const FORMATS = [
  { format: 'avif', type: 'image/avif', quality: 52 },
  { format: 'webp', type: 'image/webp', quality: 72 },
] as const;
const FALLBACK = { format: 'jpg', quality: 76 } as const;

type Gravity = 'top' | 'bottom' | 'left' | 'right' | 'centre';

/** Plan a cover-crop of a w×h original to `ratio` (width / height) that keeps `focal` in frame. */
export function cropPlan(w: number, h: number, ratio: number | undefined, focal: string): { crop: boolean; position?: Gravity; focal: string; ratio: number } {
  const native = w / h;
  if (!ratio || Math.abs(native - ratio) / native < 0.02) return { crop: false, focal, ratio: native };
  const [fx, fy] = focal.split(/\s+/).map((v) => parseFloat(v) / 100);
  const pick = (f: number, keep: number, names: [Gravity, Gravity, Gravity]) => {
    const windows = [0, (1 - keep) / 2, 1 - keep].map((start, i) => ({ start, name: names[i], d: Math.abs(start + keep / 2 - f) }));
    const best = windows.sort((a, b) => a.d - b.d)[0];
    const inside = Math.min(100, Math.max(0, ((f - best.start) / keep) * 100));
    return { name: best.name, inside: Math.round(inside) };
  };
  if (ratio > native) {
    const keep = native / ratio; // fraction of the height that survives
    const p = pick(fy, keep, ['top', 'centre', 'bottom']);
    return { crop: true, position: p.name, focal: `${Math.round(fx * 100)}% ${p.inside}%`, ratio };
  }
  const keep = ratio / native; // fraction of the width that survives
  const p = pick(fx, keep, ['left', 'centre', 'right']);
  return { crop: true, position: p.name, focal: `${p.inside}% ${Math.round(fy * 100)}%`, ratio };
}

/**
 * Responsive sources for one image at one shape. `ratio` crops (width / height); `media` makes
 * the sources art-directed (used by the hero's wide band). Widths beyond the original are dropped.
 */
export async function buildPicture(
  m: Media,
  opts: { widths: number[]; sizes: string; ratio?: number; media?: string; quality?: Partial<Record<'avif' | 'webp' | 'jpg', number>> },
): Promise<BuiltPicture> {
  const { width: W, height: H } = m.image;
  const plan = cropPlan(W, H, opts.ratio, m.focal);
  // Largest crop the original allows at this ratio.
  const maxW = plan.crop ? Math.floor(Math.min(W, H * plan.ratio)) : W;
  const widths = [...new Set(opts.widths.map((w) => Math.min(w, maxW)))].sort((a, b) => a - b);
  const base = widths[widths.length - 1];
  const dims = { width: base, height: Math.round(base / plan.ratio) };
  const shape = plan.crop ? { ...dims, fit: 'cover' as const, position: plan.position } : { width: base };
  const sources: PictureSource[] = [];
  for (const f of FORMATS) {
    const r = await getImage({ src: m.image, ...shape, widths, format: f.format, quality: opts.quality?.[f.format] ?? f.quality });
    sources.push({ type: f.type, srcset: r.srcSet.attribute, sizes: opts.sizes, media: opts.media, ...dims });
  }
  const fb = await getImage({ src: m.image, ...shape, widths, format: FALLBACK.format, quality: opts.quality?.jpg ?? FALLBACK.quality });
  // The <img> src is a mid-size candidate: good enough for the rare browser without srcset.
  const mid = fb.srcSet.values[Math.min(1, fb.srcSet.values.length - 1)]?.url ?? fb.src;
  return { sources, img: { src: mid, srcset: fb.srcSet.attribute, sizes: opts.sizes, ...dims }, focal: plan.focal };
}

// ---------------------------------------------------------------- credits

/** Licence id -> display name: CC-BY-SA-2.0-FR -> "CC BY-SA 2.0 FR"; CC0-1.0 -> "CC0 1.0". */
export function licenceName(id: string): string {
  if (id === 'public-domain') return 'public-domain';
  const m = id.match(/^CC-(BY(?:-SA)?)-(\d\.\d)(?:-([A-Z]{2,3}))?$/);
  if (m) return `CC ${m[1]} ${m[2]}${m[3] ? ` ${m[3]}` : ''}`;
  if (id === 'CC0-1.0') return 'CC0 1.0';
  return id;
}

const KNOWN_HOSTS: Record<string, string> = {
  'commons.wikimedia.org': 'Wikimedia Commons',
  'phil.cdc.gov': 'CDC Public Health Image Library',
  'www.niaid.nih.gov': 'NIAID',
  'bioart.niaid.nih.gov': 'NIH BioArt',
  'visualsonline.cancer.gov': 'NCI Visuals Online',
};
export function sourceHost(url: string): string {
  const host = new URL(url).hostname;
  return KNOWN_HOSTS[host] ?? host.replace(/^www\./, '');
}

export function isAi(m: MediaEntry): boolean {
  return m.origin === 'ai-generated';
}
