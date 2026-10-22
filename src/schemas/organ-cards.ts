/**
 * Organ-by-organ cards (<OrganCards id="…" />, docs/CONTENT-GUIDE.md §9). A static figure: first a
 * "How it works in a cell" panel (the medicine docking on its receptor types, the cAMP signal, the
 * cell responding), then one card per organ or tissue: the organ picture, a small labelled cell
 * close-up (which cell carries which receptor), ONE plain effect line and its evidence level as a
 * word plus the site's line style. Two halves, like every other piece of content:
 *   - src/data/organ-cards/<id>.yaml        locale-independent: receptors, organs, cells, levels, sources
 *   - src/i18n/<locale>/organ-cards.json    localised: titles, effect lines, notes and every word on the figure
 * The organ pictures are crops of registered text-free art, set in src/data/organ-cards/_organs.yaml.
 * Used by the build (src/lib/organ-cards.ts) and the validator (scripts/lib/organ-cards.ts).
 */
import { z } from 'zod';

const kebab = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be kebab-case (a-z, 0-9, hyphens)');
const nonEmpty = z.string().trim().min(1);

/** The receptor types a card can show. Each has its own shape AND word (never colour alone). */
export const OC_RECEPTORS = ['glp1', 'gip', 'glucagon'] as const;
/** Organs and tissues with a picture in _organs.yaml. */
export const OC_ORGANS = ['brain', 'pancreas', 'stomach', 'liver', 'fat', 'muscle'] as const;
/** Cell close-ups drawn by src/components/organ-cards/CellCloseUp.astro. */
export const OC_CELLS = ['beta-cell', 'nerve-cell', 'stomach-wall', 'liver-cell', 'fat-cell', 'muscle-fibre'] as const;
/**
 * How well a line on a card is shown, drawn in the site's line style: human = solid (cyan),
 * animal / in-vitro = long dashes (cyan), hypothesis = short dashes (amber),
 * unknown = short dashes in neutral grey ("not known": nothing measured).
 */
export const OC_LEVELS = ['human', 'animal', 'in-vitro', 'hypothesis', 'unknown'] as const;
export type OcLevel = (typeof OC_LEVELS)[number];
export type OcReceptor = (typeof OC_RECEPTORS)[number];
export type OcOrgan = (typeof OC_ORGANS)[number];
export type OcCell = (typeof OC_CELLS)[number];

const level = z.enum(OC_LEVELS);
const sources = z.array(kebab).min(1);

export const organCardSchema = z.object({
  /** The organ picture (a crop listed in _organs.yaml) and the key of its words in organ-cards.json. */
  organ: z.enum(OC_ORGANS),
  /** The cell close-up drawn on the card. */
  cell: z.enum(OC_CELLS),
  /** Receptor types drawn on that cell: only the medicine's own receptors that act here. [] = none drawn. */
  receptors: z.array(z.enum(OC_RECEPTORS)).max(3).default([]),
  /** How well the ONE effect line is shown. */
  level,
  sources,
  /** Optional second line (e.g. "which brain cells: shown in animals"), with its own level and sources. */
  note: z.object({ level, sources }).optional(),
});
export type OrganCard = z.infer<typeof organCardSchema>;

export const organCardsSchema = z
  .object({
    /** Route key of the page the figure is placed on (documentation; the validator checks each use). */
    page: z.string().min(1),
    /** false: "not approved" is shown in the figure head and on the molecule's word. */
    approved: z.boolean(),
    /** The medicine's receptor types, drawn side by side in the cell panel. */
    receptors: z.array(z.enum(OC_RECEPTORS)).min(1).max(3),
    /** The cell panel: docking and the cAMP signal, and how well that is shown. */
    cell: z.object({ level, sources }),
    /** Sources for the "not approved" line (required when approved is false). */
    status_sources: z.array(kebab).default([]),
    cards: z.array(organCardSchema).min(2).max(9),
    /** Scientific review of the figure (drawings, levels, words). A notice is shown until ok. */
    review: z.object({
      status: z.enum(['pending', 'ok']),
      by: kebab.optional(),
      on: z.coerce.date().optional(),
      note: z.string().optional(),
    }),
  })
  .superRefine((x, ctx) => {
    const seen = new Set<string>();
    x.cards.forEach((c, i) => {
      if (seen.has(c.organ)) ctx.addIssue({ code: 'custom', path: ['cards', i, 'organ'], message: `organ "${c.organ}" appears twice` });
      seen.add(c.organ);
      for (const r of c.receptors) {
        if (!x.receptors.includes(r)) ctx.addIssue({ code: 'custom', path: ['cards', i, 'receptors'], message: `"${r}" is not one of this medicine's receptors (${x.receptors.join(', ')})` });
      }
    });
    if (!x.approved && !x.status_sources.length) ctx.addIssue({ code: 'custom', path: ['status_sources'], message: 'a medicine that is not approved needs status_sources for the "not approved" line' });
  });
export type OrganCards = z.infer<typeof organCardsSchema>;

/** _organs.yaml: where each organ picture is cut from. Windows are 4:3, in pixels of the original art. */
const hex = z.string().regex(/^#[0-9a-f]{6}$/i, 'a #rrggbb colour');
export const organArtSchema = z.object({
  art: z.record(
    kebab,
    z.object({
      /** Registered text-free art (src/data/media.yaml) and its dark-scheme version (same composition). */
      light: kebab,
      dark: kebab.optional(),
      /** The art's own plain ground, light and dark: fills the tile where a window runs past the edge. */
      ground: hex,
      ground_dark: hex.optional(),
    }),
  ),
  organs: z.record(
    z.enum(OC_ORGANS),
    z.object({
      art: kebab,
      /** The 4:3 window: left and top edge and width, in pixels of the original (the height is width × 3/4). */
      window: z.tuple([z.number(), z.number(), z.number().positive()]),
      /** Neighbouring specimens inside the window, cropped out (clip-path): [x, y, width, height] each. */
      hide: z.array(z.tuple([z.number(), z.number(), z.number().positive(), z.number().positive()])).default([]),
    }),
  ),
});
export type OrganArt = z.infer<typeof organArtSchema>;

/** organ-cards.json: one entry per figure id, plus the shared words in "ui". */
export const organCardsTextSchema = z.object({
  /** Takeaway title: one sentence that states the finding (B1). */
  title: nonEmpty,
  /** One short line under the title: what the cards show. */
  detail: nonEmpty,
  /** The molecule's word in the cell panel (e.g. "Retatrutide"). */
  drug: nonEmpty,
  /** One line per card: the effect (B1, ≤ 18 words) and, when the card has one, its note. */
  cards: z.record(z.string(), z.object({ effect: nonEmpty, note: nonEmpty.optional() })),
});
export type OrganCardsText = z.infer<typeof organCardsTextSchema>;
