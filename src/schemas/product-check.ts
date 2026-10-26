/**
 * <ProductCheck />: the "check before you use it" list for readers whose product did not come from a
 * pharmacy (docs/CONTENT-GUIDE.md §1a and §9). Locale-independent data (the order of the checks,
 * their pictograms, sources and links) lives in src/data/product-check.yaml; the words live in
 * src/i18n/<locale>/product-check.json. Used by the component (src/lib/product-check.ts), the
 * remark plugin that numbers its sources with the page's citations
 * (src/plugins/remark-product-check-sources.mjs) and the validator (scripts/lib/product-check.ts).
 */
import { z } from 'zod';
import { JURISDICTIONS } from './vocab';

const kebab = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be kebab-case');
/** A route key with an optional anchor: "safety/sterile-technique#storage-and-the-cold-chain". */
const routeLink = z.string().regex(/^[a-z0-9-]+(?:\/[a-z0-9-]+)*(?:#[a-z0-9-]+)?$/, 'a route key without locale, optionally with #anchor');
/**
 * A country's own sources, keyed by jurisdiction ({ US: [...], NL: [...] }): cited after `sources` only
 * on pages of a locale that shows that jurisdiction (src/lib/jurisdictions.ts, visibleSources). The words
 * of each locale (product-check.json) rest on its own countries' sources, so a Dutch help page or an EU
 * law stays in the data for the Dutch pages and never reaches an English reference list.
 */
const localSources = z.record(z.enum(JURISDICTIONS), z.array(kebab).min(1)).default({});

export const productCheckItemSchema = z.object({
  id: kebab,
  /** A name from src/components/ui/pictograms.ts. The words always carry the meaning. */
  icon: z.string().min(1),
  /** Source ids from src/data/sources/*.yaml for every locale; numbered with the page's citations. */
  sources: z.array(kebab).default([]),
  /** Sources cited only in the locales that show that jurisdiction, after `sources`. */
  local_sources: localSources,
  /** Internal pages that explain the check; the link text is in the i18n file, in the same order. */
  links: z.array(routeLink).default([]),
  /** Append the locale's emergency line (common.emergency.ifSevere). Components never hard-code a number. */
  emergency: z.boolean().default(false),
});
export const productCheckDataSchema = z
  .object({
    intro_sources: z.array(kebab).default([]),
    /** The intro's country sources, as local_sources on a check. */
    intro_local_sources: localSources,
    items: z.array(productCheckItemSchema).min(3),
  })
  .superRefine((d, ctx) => {
    const none = (s: string[], l: Record<string, string[]>) => s.length === 0 && Object.keys(l).length === 0;
    if (none(d.intro_sources, d.intro_local_sources)) ctx.addIssue({ code: 'custom', path: ['intro_sources'], message: 'the intro needs sources (intro_sources or intro_local_sources)' });
    d.items.forEach((it, i) => {
      if (none(it.sources, it.local_sources)) ctx.addIssue({ code: 'custom', path: ['items', i, 'sources'], message: `check "${it.id}" needs sources (sources or local_sources)` });
    });
  });
export type ProductCheckData = z.infer<typeof productCheckDataSchema>;

export const productCheckItemTextSchema = z.object({
  /** The check itself, in a few words (bold). */
  title: z.string().min(1),
  /** What it means, or what to do if it fails: short sentences, one idea each. */
  text: z.string().min(1),
  /** Optional sub-points (a list under the title), before the text. */
  points: z.array(z.string().min(1)).default([]),
  /** Link texts, one per link in the data file, saying where each goes. */
  links: z.array(z.string().min(1)).default([]),
});
export const productCheckTextSchema = z.object({
  title: z.string().min(1),
  intro: z.string().min(1),
  /** "For {name}" before the optional compound-specific line; {name} is the compound's common name. */
  extra: z.string().min(1),
  /** The same label when the page is not a compound page. */
  extraGeneric: z.string().min(1),
  /** Printed above the list only on paper: "Tick each box when you have checked it." */
  print: z.string().min(1),
  items: z.record(kebab, productCheckItemTextSchema),
});
export type ProductCheckText = z.infer<typeof productCheckTextSchema>;
