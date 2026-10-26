/**
 * Animated explainers (<Explainer id="…" />). Two halves, like every other piece of content:
 *   - src/data/explainers.yaml            locale-independent: timing, evidence level per step, sources, review
 *   - src/i18n/<locale>/explainers.json   localised: title, one caption per step, summary, overlay labels
 * The artwork is src/components/explainers/<id>.astro (inline SVG, no text inside it).
 * Used by the build (src/lib/explainers.ts) and the validator (scripts/lib/explainers.ts).
 */
import { z } from 'zod';
import { MECHANISM_LEVELS, JURISDICTIONS } from './vocab';

const kebab = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be kebab-case (a-z, 0-9, hyphens)');
const nonEmpty = z.string().trim().min(1);

/** Total length of one run, in seconds. Shorter is a flicker, longer loses the reader. */
export const EXPLAINER_MIN_S = 10;
export const EXPLAINER_MAX_S = 30; // owner, 21 Oct 2026: about 5 s per scene so the large caption can be read

export const explainerStepSchema = z.object({
  /**
   * How well each causal link drawn in this step is shown (same scale as the <Mechanism> chain):
   * human = solid line, animal / in-vitro = long dashes, hypothesis = short dashes (drawn amber).
   * Usually one; a step that draws two links with different support lists both, in drawing order.
   */
  levels: z.array(z.enum(MECHANISM_LEVELS)).min(1).max(3),
});

export const explainerSchema = z.object({
  /** Seconds for one run (10–15). Each step gets an equal share. */
  duration: z.number().min(EXPLAINER_MIN_S).max(EXPLAINER_MAX_S),
  steps: z.array(explainerStepSchema).min(4).max(6),
  /** Source ids the artwork and captions rest on. Rendered as the "Based on" line and numbered with the page's citations. */
  sources: z.array(kebab).min(1),
  /**
   * A country's own sources (a label), keyed by jurisdiction: cited after `sources` only on pages of a
   * locale that shows that jurisdiction (src/lib/jurisdictions.ts, visibleSources), e.g. the US labels on
   * English and the EU product information on Dutch pages.
   */
  local_sources: z.record(z.enum(JURISDICTIONS), z.array(kebab).min(1)).default({}),
  /** true only when the artwork is a direction-neutral flow (e.g. a time axis) that may mirror in RTL. Anatomy never mirrors. */
  mirror: z.boolean().default(false),
  /**
   * Optional raster backdrop: media ids (src/data/media.yaml, text-free art) drawn UNDER the SVG
   * overlay. The overlay keeps every word, ring, arrow and moving mark (docs/EXPLAINERS.md §3.6).
   * `art_dark` is the same picture for the dark scheme (same proportions; the build checks it).
   * Only the picture the reader's scheme shows is downloaded (both are lazy; the other is display: none).
   */
  art: kebab.optional(),
  art_dark: kebab.optional(),
  /** Route keys where the explainer is placed (documentation; the validator checks each use is listed). */
  pages: z.array(z.string()).default([]),
  /** Scientific/anatomical review of the artwork and captions. Starts pending; a notice is shown until ok. */
  review: z.object({
    status: z.enum(['pending', 'ok']),
    by: kebab.optional(),
    on: z.coerce.date().optional(),
    note: z.string().optional(),
  }),
}).superRefine((x, ctx) => {
  if (x.art_dark && !x.art) ctx.addIssue({ code: 'custom', path: ['art_dark'], message: 'art_dark needs art (the light picture) as well' });
  if (x.art_dark && x.art_dark === x.art) ctx.addIssue({ code: 'custom', path: ['art_dark'], message: 'art_dark is the same image as art: give the dark version its own media entry, or leave art_dark out' });
});
export type Explainer = z.infer<typeof explainerSchema>;
export const explainerRegistrySchema = z.record(kebab, explainerSchema);

export const explainerTextSchema = z.object({
  title: nonEmpty,
  /** One caption per step, CEFR B1: short sentences, everyday words, one idea each. */
  steps: z.array(nonEmpty).min(4).max(6),
  /** One or two sentences: the takeaway, shown under the step list. */
  summary: nonEmpty,
  /**
   * The still's caption: one sentence (B1, at most 18 words) shown large under the final frame —
   * at rest, without JavaScript and with reduced motion. It may say nothing the summary does not.
   */
  caption: nonEmpty.optional(),
  /** Short words overlaid on the artwork as real HTML text (the SVG itself contains none). */
  labels: z.record(z.string(), nonEmpty).default({}),
});
export type ExplainerText = z.infer<typeof explainerTextSchema>;
export const explainerTextFileSchema = z.record(kebab, explainerTextSchema);
