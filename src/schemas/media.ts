/**
 * Media pipeline schemas: the image registry (src/data/media.yaml), page heroes
 * (src/data/heroes.yaml), labelled infographic plates (src/data/infographics/<id>.yaml) and their
 * localised text (src/i18n/<locale>/media.json, src/i18n/<locale>/infographics.json).
 *
 * Imported by src/lib/media.ts (Astro build) and scripts/lib/validate-media.ts (validator), so the
 * build and the validator can never disagree. Policy lives in docs/MEDIA-GUIDE.md.
 *
 * The registry is the licence record: every image file in src/assets/media/ has exactly one entry
 * saying what it is, where it came from, who made it and under which licence we use it. Only
 * public domain, CC0, CC BY and CC BY-SA are accepted from third parties (never NC, ND, "free to
 * view" or all-rights-reserved). Files are always self-hosted; nothing is hotlinked.
 */
import { z } from 'zod';
import { MECHANISM_LEVELS } from './vocab';

const isoDate = z.coerce.date();
const kebab = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be kebab-case (a-z, 0-9, hyphens)');
const nonEmpty = z.string().trim().min(1);

export const MEDIA_KINDS = ['photo', 'illustration', 'infographic-art', 'figure'] as const;
export const MEDIA_ORIGINS = ['public-domain', 'cc0', 'cc-by', 'cc-by-sa', 'ai-generated', 'own'] as const;
export type MediaOrigin = (typeof MEDIA_ORIGINS)[number];

/** Licence id accepted for each origin. Anything else (NC, ND, GFDL-only, "unknown") is refused. */
export const LICENSE_PATTERNS: Record<MediaOrigin, RegExp> = {
  'public-domain': /^public-domain$/,
  cc0: /^CC0-1\.0$/,
  'cc-by': /^CC-BY-(?:1\.0|2\.0|2\.5|3\.0|4\.0)(?:-[A-Z]{2,3})?$/,
  'cc-by-sa': /^CC-BY-SA-(?:1\.0|2\.0|2\.5|3\.0|4\.0)(?:-[A-Z]{2,3})?$/,
  // Made for the site (by a person, or generated with AI). The owner chose CC BY 4.0 on
  // 20 October 2026 (anyone may reuse with credit); a LicenseRef- id remains possible for exceptions.
  'ai-generated': /^(?:CC-BY-4\.0|LicenseRef-[a-z0-9-]+)$/,
  own: /^(?:CC-BY-4\.0|LicenseRef-[a-z0-9-]+)$/,
};
/** Anything that restricts commercial use or derivatives, or is not a licence at all. */
export const FORBIDDEN_LICENSE = /(?:^|[-\s])(?:NC|ND)(?:[-\s]|$)|non-?commercial|no-?deriv|all rights reserved|unknown|fair use|free to view|editorial use/i;
export const THIRD_PARTY_ORIGINS: readonly MediaOrigin[] = ['public-domain', 'cc0', 'cc-by', 'cc-by-sa'];

/** object-position, as two percentages "x% y%" measured on the unmirrored image. */
const focal = z.string().regex(/^(?:100|\d{1,2}(?:\.\d+)?)% (?:100|\d{1,2}(?:\.\d+)?)%$/, 'focal must be "x% y%" (0–100%)');

export const aiInfoSchema = z.object({
  /** Exact model id used, e.g. gpt-image-1. */
  model: nonEmpty,
  /** The writer's prompt (the fixed style preamble is added by the tool and named in `preamble`). */
  prompt: nonEmpty,
  /** Version of the style preamble in scripts/media/generate-image.ts that was prepended. */
  preamble: z.string().default('v1'),
  generated: isoDate,
  /** pending until a person has checked the image for scientific/anatomical errors and stray text. */
  review: z.enum(['pending', 'ok']),
  review_note: z.string().default(''),
  reviewed_by: kebab.optional(),
  /** Made with the edits endpoint from this registered image (e.g. its dark-scheme version). */
  edited_from: kebab.optional(),
});

export const mediaEntrySchema = z
  .object({
    /** File name in src/assets/media/ (originals; the build makes AVIF/WebP/JPEG variants). */
    file: z.string().regex(/^[a-z0-9][a-z0-9._-]*\.(?:jpe?g|png|webp|avif|tiff?)$/, 'file must be a lower-case file name in src/assets/media/ (jpg, png, webp, avif, tif)'),
    kind: z.enum(MEDIA_KINDS),
    origin: z.enum(MEDIA_ORIGINS),
    /** SPDX-style licence id: public-domain, CC0-1.0, CC-BY-4.0, CC-BY-SA-2.0-FR, LicenseRef-… */
    license: nonEmpty,
    /** Deed of the licence (creativecommons.org); optional for public domain and site-made images. */
    license_url: z.string().url().optional(),
    /** Creator as the source states it (photographer, illustrator, institution). */
    author: nonEmpty,
    /** Institution or collection credited by the source, if different from the author. */
    credit: z.string().optional(),
    /** Title of the work at the source (e.g. the Commons file title). */
    title: z.string().optional(),
    /** Human-readable source page (e.g. the Commons file page). Never the file URL itself. */
    source_url: z.string().url().optional(),
    retrieved: isoDate.optional(),
    /** Identifiable real people in the image. Only allowed for public-domain sources, never in a patient or testimonial context. */
    people: z.boolean().default(false),
    /** Where the subject is, for cropping (CSS object-position on the unmirrored image). */
    focal: focal.default('50% 50%'),
    /** Changes we made beyond resizing/cropping/colour treatment (shown in the credits). */
    changes: z.string().optional(),
    /** Source ids that support factual claims made in the caption. */
    sources: z.array(kebab).default([]),
    ai: aiInfoSchema.optional(),
    notes: z.string().optional(),
  })
  .superRefine((m, ctx) => {
    const add = (path: string, message: string) => ctx.addIssue({ code: 'custom', path: [path], message });
    if (FORBIDDEN_LICENSE.test(m.license)) add('license', `licence "${m.license}" is not allowed (no NC, ND, unknown or view-only licences)`);
    else if (!LICENSE_PATTERNS[m.origin].test(m.license)) add('license', `licence "${m.license}" does not match origin "${m.origin}" (expected ${LICENSE_PATTERNS[m.origin]})`);
    const thirdParty = THIRD_PARTY_ORIGINS.includes(m.origin);
    if (thirdParty && !m.source_url) add('source_url', 'third-party images need the human-readable source page (source_url)');
    if (thirdParty && !m.retrieved) add('retrieved', 'third-party images need the date they were retrieved');
    if ((m.origin === 'cc-by' || m.origin === 'cc-by-sa' || m.origin === 'cc0' || m.license.startsWith('CC')) && !m.license_url) add('license_url', 'Creative Commons images need the licence deed URL');
    if (m.origin === 'ai-generated') {
      if (!m.ai) add('ai', 'AI-generated images need ai: { model, prompt, generated, review }');
      if (m.kind === 'photo') add('kind', 'AI-generated images are illustrations or infographic art, never "photo" (a photo claims a real scene)');
      if (m.people) add('people', 'AI-generated images must never depict an identifiable real person');
    } else if (m.ai) add('ai', 'only origin: ai-generated may carry an ai block');
    if (m.people && m.origin !== 'public-domain') add('people', 'identifiable people are only allowed from public-domain sources (and never in a patient or testimonial context)');
    if (/servier/i.test(`${m.author} ${m.credit ?? ''} ${m.source_url ?? ''}`)) add('author', 'no pharmaceutical-company image sources (independence): Servier Medical Art is not allowed');
  });
export type MediaEntry = z.infer<typeof mediaEntrySchema>;
export const mediaFileSchema = z.record(kebab, mediaEntrySchema);

/** Route key ("" = landing, "compounds/semaglutide", "history/the-croatian-lab") -> media id. */
export const heroesFileSchema = z.record(z.string().regex(/^(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/, 'route key: path without locale or slashes at the ends'), kebab);

export const infographicSchema = z
  .object({
    /** Media id of the text-free artwork (kind: infographic-art). */
    art: kebab,
    /**
     * Optional media id of the dark-scheme version of the same artwork (kind: infographic-art):
     * same composition and proportions, so the markers land on the same spots. Shown instead of
     * `art` when the page is dark; without it the light art is dimmed on a light panel.
     */
    art_dark: kebab.optional(),
    /** Numbered markers on the art, in reading order. x/y are percentages of the unmirrored artwork. */
    markers: z
      .array(
        z.object({
          key: kebab,
          x: z.number().min(0).max(100),
          y: z.number().min(0).max(100),
          /** How well the labelled effect is shown (design B colours demonstrated cyan, hypothesis amber). */
          level: z.enum(MECHANISM_LEVELS).optional(),
          /** Marker size relative to the default (e.g. 0.7 to keep a small structure visible). */
          scale: z.number().min(0.5).max(1.5).optional(),
        }),
      )
      .min(1)
      .max(9),
    /** Source ids the labels and text equivalent are based on. */
    sources: z.array(kebab).min(1),
  })
  .superRefine((g, ctx) => {
    const keys = g.markers.map((m) => m.key);
    if (new Set(keys).size !== keys.length) ctx.addIssue({ code: 'custom', path: ['markers'], message: 'duplicate marker key' });
  });
export type Infographic = z.infer<typeof infographicSchema>;

/** src/i18n/<locale>/media.json */
export const mediaTextSchema = z.record(kebab, z.object({ alt: nonEmpty, caption: z.string().optional() }));
/** src/i18n/<locale>/infographics.json */
export const infographicTextSchema = z.record(
  kebab,
  z.object({
    title: nonEmpty,
    markers: z.record(kebab, z.object({ label: nonEmpty, detail: z.string().optional() })),
    /** Full text equivalent: everything the plate shows, in words. */
    text: nonEmpty,
  }),
);
