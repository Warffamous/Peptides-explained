/**
 * Zod schemas for every piece of content. Imported by src/content.config.ts (Astro build)
 * and scripts/validate-content.ts (fast standalone check). One definition, two consumers,
 * so the validator can never disagree with the build.
 *
 * Rule of thumb for where content lives:
 *   - locale-independent facts (codes, numbers, dates, DOIs)  -> YAML in src/data/
 *   - short localised strings keyed by id                     -> JSON in src/i18n/<locale>/
 *   - long-form prose                                         -> MDX in src/content/<collection>/<locale>/
 * Translators only ever touch the second and third kind. Facts cannot drift by translation.
 */
import { z } from 'zod';
import * as V from './vocab';

const isoDate = z.coerce.date();
/** Words a reader has to read (same rule as src/lib/readability.ts). */
const maxWords = (s: string, n: number) => s.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length <= n;
const kebab = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be kebab-case (a-z, 0-9, hyphens)');
const nonEmpty = z.string().trim().min(1);

// ---------------------------------------------------------------- sources

export const sourceSchema = z
  .object({
    type: z.enum(V.SOURCE_TYPES),
    authors: z.string().optional(), // "Sikiric P, Seiwerth S, et al." or organisation
    title: nonEmpty,
    container: z.string().optional(), // journal, publisher, gazette
    year: z.number().int().min(1800).max(2100),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z
      .string()
      .regex(/^10\.\d{4,9}\/\S+$/, 'DOI must look like 10.xxxx/yyyy (no https://doi.org/ prefix)')
      .optional(),
    pmid: z.string().regex(/^\d+$/).optional(),
    pmcid: z.string().regex(/^PMC\d+$/).optional(),
    url: z.string().url().optional(),
    accessed: isoDate.optional(),
    lang: z.string().default('en'),
    /** How the author verified this source exists and says what we cite it for. */
    verified: z.enum(['pubmed', 'doi', 'url', 'registry']),
    note: z.string().optional(),
  })
  .refine((s) => s.doi || s.url || s.pmid, { message: 'a source needs a doi, pmid or url' })
  .refine((s) => !(s.url && !s.doi && !s.accessed), { message: 'url-only sources need an accessed date' });
export type Source = z.infer<typeof sourceSchema>;
export const sourceFileSchema = z.record(kebab, sourceSchema);

// ---------------------------------------------------------------- people (authors, reviewers)

export const personSchema = z.object({
  kind: z.enum(['person', 'organisation', 'placeholder']),
  name: nonEmpty,
  role: z.enum(['medical-reviewer', 'legal-reviewer', 'editor', 'translator', 'editorial-board']),
  credentials: z.string().optional(), // e.g. "Physician, BIG 19012345601"
  big_number: z.string().optional(),
  url: z.string().url().optional(),
  /** Only active real people are emitted as schema.org reviewedBy. Placeholders never are. */
  active: z.boolean(),
});
export const peopleFileSchema = z.record(kebab, personSchema);

// ---------------------------------------------------------------- compound data (locale-independent)

const residue = z.string().refine(
  (r) => {
    const base = r.replace(/^D-/, '');
    return (V.STANDARD_RESIDUES as readonly string[]).includes(base) || (V.NONSTANDARD_RESIDUES as readonly string[]).includes(base);
  },
  { message: 'unknown residue code (use three-letter codes, D- prefix, or a code from NONSTANDARD_RESIDUES)' },
);

export const sequenceSchema = z.object({
  display: nonEmpty, // human notation exactly as it should be shown
  residues: z.array(residue).min(1),
  n_terminus: z.string().default('H'), // H (free amine), Ac (acetyl), or a short label
  c_terminus: z.string().default('OH'), // OH (free acid), NH2 (amide), or a short label
  modifications: z
    .array(z.object({ position: z.number().int().min(1), label: nonEmpty }))
    .default([]),
  bridges: z
    .array(z.object({ from: z.number().int().min(1), to: z.number().int().min(1), kind: z.enum(['disulfide', 'lactam', 'thioether', 'other']) }))
    .default([]),
  source: kebab, // source id supporting the sequence (INN document, PubChem, ChEMBL)
});

export const evidenceGradeSchema = z.object({
  human_clinical: z.enum(V.HUMAN_CLINICAL),
  preclinical_volume: z.enum(V.PRECLINICAL_VOLUME),
  independence: z.enum(V.INDEPENDENCE),
  safety: z.enum(V.SAFETY),
});
export type EvidenceGrade = z.infer<typeof evidenceGradeSchema>;

export const regulatoryEntrySchema = z.object({
  jurisdiction: z.enum(V.JURISDICTIONS),
  status: z.enum(V.REGULATORY_STATUSES),
  wada_section: z.enum(V.WADA_SECTIONS).optional(),
  wada_scope: z.enum(['at-all-times', 'in-competition']).optional(),
  since: isoDate.optional(), // date the status took effect, when known
  as_of: isoDate, // date we last confirmed it
  sources: z.array(kebab).min(1),
});

export const studySchema = z.object({
  id: kebab,
  source: kebab,
  year: z.number().int(),
  species: z.enum(V.STUDY_SPECIES),
  /** Number of subjects (humans or animals) actually studied. null = not reported / not applicable. */
  n: z.number().int().positive().nullable(),
  design: z.enum(V.STUDY_DESIGNS),
  funding: z.enum(V.FUNDING),
  group: z.enum(V.STUDY_GROUPS),
  blinded: z.boolean().nullable().default(null),
  controlled: z.boolean().nullable().default(null),
});

export const authorisedProductSchema = z.object({
  id: kebab,
  name: nonEmpty, // trade name
  holder: nonEmpty, // marketing-authorisation holder (factual identification only)
  jurisdiction: z.enum(['EU', 'US', 'UK']),
  authorised: isoDate,
  route: z.enum(['subcutaneous', 'oral', 'intranasal', 'intravenous', 'topical']),
  /** Official product information: EMA EPAR / CBG / FDA label. Never a seller. */
  label_url: z.string().url(),
  label_source: kebab,
});

export const compoundDataSchema = z
  .object({
    slug: kebab,
    tier: z.union([z.literal(1), z.literal(2)]),
    status: z.enum(['complete', 'stub']),
    category: z.enum(V.COMPOUND_CATEGORIES),
    class: z.enum(V.COMPOUND_CLASSES),
    body_systems: z.array(z.enum(V.BODY_SYSTEMS)).min(1),
    names: z.object({
      common: nonEmpty,
      full: z.string().optional(),
      inn: z.string().optional(),
      other: z.array(z.string()).default([]),
      brands: z.array(z.string()).default([]),
    }),
    identifiers: z
      .object({
        pubchem_cid: z.number().int().optional(),
        chembl: z.string().regex(/^CHEMBL\d+$/).optional(),
        cas: z.string().optional(),
        unii: z.string().optional(),
      })
      .default({}),
    molecular: z
      .object({
        formula: z.string().optional(),
        mass_da: z.number().positive().optional(),
        smiles: z.string().optional(),
        smiles_source: kebab.optional(),
      })
      .default({}),
    /** null only for non-peptides (category not-a-peptide). */
    sequence: sequenceSchema.nullable(),
    /** REQUIRED. A compound without an evidence grade fails the build. */
    evidence: evidenceGradeSchema,
    regulatory: z.array(regulatoryEntrySchema).min(1),
    studies: z.array(studySchema).default([]),
    authorised_products: z.array(authorisedProductSchema).default([]),
    /**
     * category authorised-nationally only: the countries whose own medicines regulator has
     * authorised it, as far as the sources show (ISO 3166-1 alpha-2 codes, e.g. IT, IN, HK). They
     * fill the "approved?" tile ("Approved in Italy, India and Hong Kong for some uses …").
     */
    national_authorisations: z
      .array(z.object({ country: z.string().regex(/^[A-Z]{2}$/, 'ISO 3166-1 alpha-2 code, e.g. IT'), as_of: isoDate, sources: z.array(kebab).min(1) }))
      .default([]),
    related: z.array(kebab).default([]),
    /** REQUIRED. Date of last substantive review. */
    last_reviewed: isoDate,
    /** REQUIRED. Person id from src/data/people.yaml. */
    reviewed_by: kebab,
    edited_by: kebab.default('editorial-board'),
  })
  .superRefine((c, ctx) => {
    if (c.category !== 'not-a-peptide' && !c.sequence) {
      ctx.addIssue({ code: 'custom', path: ['sequence'], message: 'peptides need a sequence' });
    }
    if ((c.category === 'authorised' || c.category === 'authorised-elsewhere') && c.authorised_products.length === 0) {
      ctx.addIssue({ code: 'custom', path: ['authorised_products'], message: 'authorised compounds must list at least one authorised product with its official label' });
    }
    if (c.category === 'authorised' && c.evidence.human_clinical !== 'authorised') {
      ctx.addIssue({ code: 'custom', path: ['evidence', 'human_clinical'], message: 'EU-authorised compounds have human_clinical: authorised' });
    }
    if (c.category === 'authorised-nationally') {
      if (c.national_authorisations.length === 0) {
        ctx.addIssue({ code: 'custom', path: ['national_authorisations'], message: 'authorised-nationally compounds list at least one country, with sources' });
      }
      if (c.evidence.human_clinical !== 'authorised') {
        ctx.addIssue({ code: 'custom', path: ['evidence', 'human_clinical'], message: 'authorised-nationally compounds have human_clinical: authorised (a regulator has granted a marketing authorisation)' });
      }
      // The tile says "Not approved for the whole EU or in the US": a US or UK approval makes it authorised-elsewhere.
      if (c.regulatory.some((r) => (r.jurisdiction === 'US' || r.jurisdiction === 'UK') && r.status === 'authorised') || c.authorised_products.length > 0) {
        ctx.addIssue({ code: 'custom', path: ['category'], message: 'authorised in the US or UK, or with an authorised product label: use authorised-elsewhere (or authorised for the EU)' });
      }
    } else if (c.national_authorisations.length > 0) {
      ctx.addIssue({ code: 'custom', path: ['national_authorisations'], message: 'national_authorisations is only used with category authorised-nationally' });
    }
    for (const r of c.regulatory) {
      if (r.status === 'unclear' && r.jurisdiction !== 'WADA') {
        ctx.addIssue({ code: 'custom', path: ['regulatory'], message: `status unclear is for the WADA row only (${r.jurisdiction})` });
      }
      if (r.status === 'unclear' && r.wada_scope) {
        ctx.addIssue({ code: 'custom', path: ['regulatory'], message: 'an unclear WADA status has no wada_scope (nothing is prohibited yet)' });
      }
    }
    if (c.status === 'complete' && c.tier === 1 && c.studies.length < 3) {
      ctx.addIssue({ code: 'custom', path: ['studies'], message: 'complete Tier 1 pages need at least 3 structured studies' });
    }
    const juris = new Set(c.regulatory.map((r) => r.jurisdiction));
    for (const j of ['EU', 'NL', 'US', 'WADA'] as const) {
      if (!juris.has(j)) ctx.addIssue({ code: 'custom', path: ['regulatory'], message: `regulatory status missing for ${j}` });
    }
    const ids = c.studies.map((s) => s.id);
    if (new Set(ids).size !== ids.length) ctx.addIssue({ code: 'custom', path: ['studies'], message: 'duplicate study id' });
  });
export type CompoundData = z.infer<typeof compoundDataSchema>;

// ---------------------------------------------------------------- shared page metadata

const summarySchema = z.array(nonEmpty).min(2).max(6);

const translationMetaSchema = z
  .object({
    /** source = written in this language; translated = from another locale; adapted = rewritten per jurisdiction */
    method: z.enum(['source', 'translated', 'adapted', 'native']),
    from: z.string().optional(),
    /** Human review of the translation. Until 'reviewed', a notice is shown. */
    review: z.enum(['pending', 'reviewed']),
    reviewed_by: kebab.optional(),
    reviewed_on: isoDate.optional(),
  })
  .default({ method: 'source', review: 'reviewed' });

// ---------------------------------------------------------------- compound page (localised MDX)

/**
 * A sourced override of a derived At a glance answer: short (at most 4 words) and text (at most 18
 * words, the B1 limit of the beginner layer), with the registered sources it condenses.
 */
const glanceOverride = z.object({
  short: nonEmpty.refine((s) => maxWords(s, 4), { message: 'at most 4 words' }),
  text: nonEmpty.refine((s) => maxWords(s, 18), { message: 'at most 18 words' }),
  sources: z.array(kebab).min(1),
});

export const compoundPageSchema = z.object({
  slug: kebab,
  title: nonEmpty,
  description: z.string().min(50).max(170),
  /** "The 30-second version". B1 reading level. 3–5 short sentences. */
  summary: summarySchema,
  /**
   * The "At a glance" strip above the summary. Three of its four tiles are derived from the data
   * file (category and national_authorisations, evidence.human_clinical, the WADA row); only the
   * risk tile needs words. The derived "tested" and "sport" answers may be overridden, with sources,
   * where the generic words would mislead for this compound (CONTENT-GUIDE §5.2).
   */
  glance: z
    .object({
      /**
       * Override of the "tested in people?" answer (otherwise derived from evidence.human_clinical):
       * only where the generic words would mislead, e.g. an authorisation that rests on a trial that
       * missed its goals. short = the answer (also the fact sheet's "Tested in people"), text = one
       * plain line, both condensed from this page's own sources; tone = the ring (default: derived).
       */
      tested: glanceOverride
        .extend({ tone: z.enum(['yes', 'partial', 'no']).optional() })
        .optional(),
      /** Override of the "allowed in sport?" words (otherwise derived from the WADA row); same rules. */
      sport: glanceOverride.optional(),
      /**
       * "Biggest risk" tile: at most 12 words, B1, condensed from this page's own risk section
       * (no claim that is not made there). Without it the tile links to the warning-signs page.
       */
      main_risk: nonEmpty
        .refine((s) => s.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length <= 12, { message: 'at most 12 words' })
        .optional(),
      /**
       * "Stop and get help" strip, rendered directly after At a glance: exactly three signs, each at
       * most 8 words, B1, with a pictogram (the word always carries the meaning). Condensed from this
       * page's own stop-now content and the label; every sign names its sources. Without it the strip
       * is not rendered and the warning-signs link in the header is the only route.
       */
      stop_signs: z
        .array(
          z.object({
            icon: z.enum(V.STOP_SIGN_ICONS),
            text: nonEmpty.refine((s) => maxWords(s, 8), { message: 'at most 8 words' }),
            sources: z.array(kebab).min(1),
          }),
        )
        .length(3)
        .optional(),
      /**
       * Compound-specific rows of the fact sheet beside the title (label/value, each value at most
       * 10 words): how it is taken, how often, how long it lasts. Class, EU status and human testing
       * are added from the data file. Facts only; label facts from the SmPC, never a dose.
       */
      facts: z
        .array(
          z.object({
            label: nonEmpty.refine((s) => maxWords(s, 4), { message: 'at most 4 words' }),
            value: nonEmpty.refine((s) => maxWords(s, 10), { message: 'at most 10 words' }),
            sources: z.array(kebab).min(1),
          }),
        )
        .max(4)
        .default([]),
    })
    .default({}),
  /** One sentence under the title (22–24 px): what it is and the one thing to know. B1, at most 25 words. */
  lede: nonEmpty.refine((s) => maxWords(s, 25), { message: 'at most 25 words' }).optional(),
  grade_rationale: z.object({
    human_clinical: nonEmpty,
    preclinical_volume: nonEmpty,
    independence: nonEmpty,
    safety: nonEmpty,
  }),
  mechanism: z
    .array(
      z.object({
        kind: z.enum(V.MECHANISM_KINDS),
        level: z.enum(V.MECHANISM_LEVELS),
        title: nonEmpty,
        detail: nonEmpty,
      }),
    )
    .default([]),
  /** Localised text for each study in the data file, keyed by study id. */
  studies: z.record(kebab, z.object({ finding: nonEmpty, limitation: nonEmpty })).default({}),
  /** Localised one-line notes per jurisdiction for the regulatory table. */
  regulatory_notes: z.record(z.enum(V.JURISDICTIONS), nonEmpty).default({}),
  /** Localised indication per authorised product id. */
  indications: z.record(kebab, nonEmpty).default({}),
  translation: translationMetaSchema,
});
export type CompoundPage = z.infer<typeof compoundPageSchema>;

// ---------------------------------------------------------------- generic page (localised MDX)

export const pageSchema = z
  .object({
    title: nonEmpty,
    /** Optional shorter label for navigation and breadcrumbs. */
    nav_title: z.string().optional(),
    description: z.string().min(50).max(170),
    /** "In short" box, B1 reading level, rendered first on the page. */
    summary: summarySchema,
    section: z.enum(V.PAGE_SECTIONS),
    order: z.number().int().default(100),
    template: z.enum(V.PAGE_TEMPLATES).default('reference'),
    reading_level: z.enum(V.READING_LEVELS).default('B1'),
    jurisdiction: z.enum(V.JURISDICTIONS).optional(),
    last_reviewed: isoDate,
    reviewed_by: kebab,
    edited_by: kebab.default('editorial-board'),
    related: z.array(z.string()).default([]), // route keys, e.g. "safety/sterile-technique"
    further_reading: z.array(kebab).default([]), // source ids not cited inline
    opinion: z
      .object({ signed_by: kebab, published: isoDate, updated: isoDate.optional() })
      .optional(),
    translation: translationMetaSchema,
    noindex: z.boolean().default(false),
  })
  .superRefine((p, ctx) => {
    if (p.template === 'opinion' && !p.opinion) {
      ctx.addIssue({ code: 'custom', path: ['opinion'], message: 'opinion pages must be signed and dated (opinion.signed_by, opinion.published)' });
    }
    if (p.template !== 'opinion' && p.opinion) {
      ctx.addIssue({ code: 'custom', path: ['opinion'], message: 'only template: opinion may carry an opinion block' });
    }
    if ((p.section === 'safety' || p.section === 'legal') && p.reading_level !== 'B1') {
      ctx.addIssue({ code: 'custom', path: ['reading_level'], message: 'safety and legal content must be written at B1' });
    }
  });
export type Page = z.infer<typeof pageSchema>;

// ---------------------------------------------------------------- glossary (localised JSON)

export const glossaryEntrySchema = z.object({
  term: nonEmpty,
  /** Other surface forms that should auto-link to this entry (plurals, abbreviations). */
  aliases: z.array(z.string()).default([]),
  /** B1 definition, one or two sentences. */
  definition: nonEmpty,
  category: z.enum(['chemistry', 'biology', 'pharmacology', 'evidence', 'regulation', 'safety', 'law', 'sport']),
  see_also: z.array(kebab).default([]),
  /** Set false for very common words that should be defined but not auto-linked. */
  autolink: z.boolean().default(true),
});
export const glossaryFileSchema = z.record(kebab, glossaryEntrySchema);

// ---------------------------------------------------------------- timeline, tracker, corrections

export const timelineEventSchema = z.object({
  id: kebab,
  year: z.number().int(),
  date: isoDate.optional(),
  category: z.enum(['discovery', 'chemistry', 'regulation', 'approval', 'market', 'sport', 'safety']),
  compounds: z.array(kebab).default([]),
  sources: z.array(kebab).min(1),
});
export const timelineFileSchema = z.array(timelineEventSchema);
export const timelineTextSchema = z.record(kebab, z.object({ title: nonEmpty, text: nonEmpty }));

export const trackerItemSchema = z.object({
  id: kebab,
  jurisdiction: z.enum(V.JURISDICTIONS),
  status: z.enum(['proposed', 'consultation', 'advisory-vote', 'rulemaking', 'adopted', 'in-force', 'stalled', 'watching']),
  updated: isoDate,
  next_milestone: isoDate.optional(),
  compounds: z.array(kebab).default([]),
  sources: z.array(kebab).min(1),
});
export const trackerFileSchema = z.array(trackerItemSchema);
export const trackerTextSchema = z.record(kebab, z.object({ title: nonEmpty, summary: nonEmpty, next: z.string().optional() }));

export const correctionSchema = z.object({
  id: kebab,
  date: isoDate,
  kind: z.enum(['publication', 'substantive', 'clarification', 'regulatory-update', 'minor']),
  routes: z.array(z.string()).min(1), // route keys affected, e.g. "compounds/bpc-157"
  locales: z.array(z.string()).min(1),
});
export const correctionsFileSchema = z.array(correctionSchema);
export const correctionsTextSchema = z.record(kebab, z.object({ summary: nonEmpty, detail: z.string().optional() }));

// ---------------------------------------------------------------- news feeds

export const feedSchema = z.object({
  id: kebab,
  name: nonEmpty,
  kind: z.enum(['rss', 'atom', 'pubmed', 'europepmc']),
  url: z.string().url(), // feed URL, or E-utilities base for pubmed
  homepage: z.string().url(),
  query: z.string().optional(), // PubMed query for kind: pubmed
  category: z.enum(['regulator', 'research', 'preprint', 'public-health', 'anti-doping']),
  peer_reviewed: z.boolean(),
  lang: z.string().default('en'),
  /** Keep only items matching at least one of these (case-insensitive). Empty = keep all. */
  require_any: z.array(z.string()).default([]),
  max_items: z.number().int().positive().default(15),
  why: nonEmpty, // why this source is trustworthy and non-commercial
});
export const feedsFileSchema = z.object({ keywords: z.array(z.string()), feeds: z.array(feedSchema) });

export const newsItemSchema = z.object({
  id: z.string(),
  feed: kebab,
  title: nonEmpty,
  url: z.string().url(),
  published: isoDate,
  summary: z.string().default(''),
  lang: z.string().default('en'),
  study_hint: z.enum(['animal', 'in-vitro', 'human-trial', 'review', 'regulatory', 'preprint', 'unknown']).default('unknown'),
});
export const newsFileSchema = z.object({ generated: isoDate, items: z.array(newsItemSchema) });

// ---------------------------------------------------------------- jurisdictions

export const jurisdictionSchema = z.object({
  code: z.enum(V.JURISDICTIONS),
  // The jurisdiction's emergency number, as data. Pages never print it directly: they use the
  // locale's common.emergency.* strings (English: "your local emergency number"; Dutch: 112).
  emergency: z.string(),
  urgent_care: z.string().optional(), // e.g. "huisartsenpost" — localised label key in i18n
  regulator: z.object({ name: nonEmpty, url: z.string().url() }).optional(),
  inspectorate: z.object({ name: nonEmpty, url: z.string().url() }).optional(),
  reporting: z.object({ name: nonEmpty, url: z.string().url() }).optional(), // adverse-event reporting for the public
  anti_doping: z.object({ name: nonEmpty, url: z.string().url() }).optional(),
  medicines_law: z.object({ name: nonEmpty, url: z.string().url() }).optional(),
});
export const jurisdictionsFileSchema = z.array(jurisdictionSchema);

// ---------------------------------------------------------------- warning signs (localised JSON, single source of truth)

export const WARNING_GROUPS = ['general', 'injection', 'allergic', 'cardiovascular', 'metabolic', 'neurological'] as const;
export const warningSignSchema = z.object({
  id: kebab,
  /** What the person notices, in plain words. */
  sign: nonEmpty,
  /** One sentence: why this matters (the mechanism or the danger). */
  why: nonEmpty,
  /** emergency = call the emergency number now (common.emergency.now); urgent = same-day doctor/out-of-hours service; stop = stop and contact a doctor soon */
  action: z.enum(['emergency', 'urgent', 'stop']),
});
export const warningSignsFileSchema = z.object(
  Object.fromEntries(WARNING_GROUPS.map((g) => [g, z.array(warningSignSchema).default([])])) as Record<
    (typeof WARNING_GROUPS)[number],
    z.ZodDefault<z.ZodArray<typeof warningSignSchema>>
  >,
);
