/**
 * Controlled vocabularies. These are the only values the content layer may use.
 *
 * Why a closed vocabulary: the site's honesty depends on claims being classified
 * the same way everywhere. Free text drifts ("animal study", "rodent data",
 * "preclinical"); an enum cannot. Every enum value has a human label per locale
 * in src/i18n/<locale>/vocab.json — translation changes words, never categories.
 */

/** The four evidence axes. Never collapsed into one score (see /evidence/evidence-grading). */
export const HUMAN_CLINICAL = ['none', 'case-reports', 'phase-1', 'phase-2', 'phase-3', 'authorised'] as const;
export const PRECLINICAL_VOLUME = ['minimal', 'moderate', 'extensive'] as const;
export const INDEPENDENCE = ['single-group-dominant', 'few-groups', 'broadly-replicated'] as const;
export const SAFETY = ['uncharacterised', 'partial', 'well-characterised'] as const;

export const EVIDENCE_AXES = {
  human_clinical: HUMAN_CLINICAL,
  preclinical_volume: PRECLINICAL_VOLUME,
  independence: INDEPENDENCE,
  safety: SAFETY,
} as const;
export type EvidenceAxis = keyof typeof EVIDENCE_AXES;

/**
 * Inline claim levels for <Claim level="…">. Ordered from weakest to strongest
 * kind of support. "hypothesis" means: proposed, not demonstrated in any system.
 */
export const CLAIM_LEVELS = [
  'hypothesis',
  'in-vitro',
  'animal',
  'human-limited',
  'human-controlled',
  'established',
] as const;
export type ClaimLevel = (typeof CLAIM_LEVELS)[number];

/** Mechanism steps: where in the body the step happens (drives the diagram zone). */
export const MECHANISM_KINDS = ['binding', 'signal', 'cellular', 'tissue', 'effect'] as const;
/** Mechanism steps use a subset of claim levels: how well the link INTO this step is established. */
export const MECHANISM_LEVELS = ['hypothesis', 'in-vitro', 'animal', 'human'] as const;

/**
 * Overall regulatory/epistemic category. Not a score — a category of situation. It says nothing
 * about any one country: where a medicine is approved comes from its regulatory rows, and each
 * locale answers "approved?" for its own jurisdictions (src/lib/jurisdictions.ts, approvalFor).
 */
export const COMPOUND_CATEGORIES = [
  /**
   * An official product label exists from at least one regulator the site tracks (JURISDICTIONS):
   * at least one authorised or discontinued row, and the products in authorised_products.
   */
  'authorised',
  /**
   * Authorised only by countries outside every tracked set (their own national regulators), so
   * with no row authorised anywhere and no label on an allowlisted host. The countries are listed,
   * with sources, in national_authorisations (e.g. thymosin alpha-1: Italy, India, Hong Kong).
   */
  'authorised-nationally',
  'investigational', // in formal clinical development (registered trials), no authorisation
  'experimental', // little or no formal human development
  'not-a-peptide', // included because it is sold alongside peptides
] as const;

export const COMPOUND_CLASSES = [
  'incretin',
  'gh-axis',
  'melanocortin',
  'tissue-repair',
  'immunomodulatory',
  'mitochondrial',
  'neuroactive',
  'dermal',
  'metabolic',
  'longevity-claimed',
  'non-peptide',
] as const;

export const BODY_SYSTEMS = [
  'metabolic',
  'cardiovascular',
  'gastrointestinal',
  'musculoskeletal',
  'nervous',
  'endocrine',
  'immune',
  'skin',
  'sexual',
  'renal',
  'cellular',
] as const;

/**
 * Every jurisdiction the data may describe. Which ones a reader sees, and in which order, comes from
 * the locale (config/locales.json: jurisdictions.full and .notes), never from this array; WADA is
 * shown in every locale.
 */
export const JURISDICTIONS = ['EU', 'NL', 'DE', 'BE', 'UK', 'US', 'CA', 'AU', 'IE', 'NZ', 'WADA'] as const;
export type Jurisdiction = (typeof JURISDICTIONS)[number];

/** Jurisdictions an authorised product (authorised_products) can be authorised in: the regulators whose labels we link. */
export const PRODUCT_JURISDICTIONS = ['US', 'UK', 'CA', 'AU', 'EU', 'NL', 'DE', 'BE'] as const;

export const REGULATORY_STATUSES = [
  'authorised', // marketing authorisation / FDA approval exists for at least one product
  /**
   * Authorised and marketed, then the holder stopped and the authorisation was cancelled for
   * non-safety reasons (e.g. tesamorelin in Canada: approved 2014, cancelled 2022). The row gives
   * authorised_since (the approval) and since (the cancellation).
   */
  'discontinued',
  'not-authorised', // no authorisation; nothing submitted or decided
  'refused', // an application was refused
  'withdrawn', // authorisation or application withdrawn
  'under-review', // an application is formally under assessment
  'investigational', // only available within registered clinical trials
  'prohibited', // WADA: on the Prohibited List
  'not-listed', // WADA: not on the list (rare; state carefully)
  /**
   * WADA only: not named on the Prohibited List, and whether a catch-all section (S0, S2 …) covers
   * it is unclear, with no ruling from an anti-doping body. Never a guess at "allowed".
   */
  'unclear',
] as const;
/** Statuses that only the WADA row may have, and the only ones it may have. */
export const WADA_STATUSES = ['prohibited', 'not-listed', 'unclear'] as const;

/** Kinds of help service on a jurisdiction's contacts card (src/data/jurisdictions.yaml, help). */
export const HELP_KINDS = ['urgent-advice', 'poisons', 'drugs-advice', 'mental-health'] as const;

export const WADA_SECTIONS = ['S0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'M1', 'M2', 'M3', 'P1'] as const;

export const STUDY_SPECIES = [
  'human',
  'rat',
  'mouse',
  'rabbit',
  'dog',
  'pig',
  'sheep',
  'horse',
  'primate',
  'zebrafish',
  'other-animal',
  'in-vitro',
  'in-silico',
  'mixed',
  'not-applicable',
] as const;

export const STUDY_DESIGNS = [
  'in-vitro',
  'animal',
  'case-report',
  'case-series',
  'open-label',
  'phase-1',
  'phase-2',
  'phase-3',
  'rct',
  'pk',
  'observational',
  'post-marketing',
  'systematic-review',
  'meta-analysis',
  'narrative-review',
  'regulatory-assessment',
  'analytical', // product-testing / purity studies
] as const;

export const FUNDING = ['academic', 'government', 'industry', 'mixed', 'undisclosed', 'not-applicable'] as const;
/** Relative to the compound's originating or dominant research group. */
export const STUDY_GROUPS = ['originating', 'independent', 'mixed', 'not-applicable'] as const;

export const SOURCE_TYPES = [
  'article',
  'review',
  'meta-analysis',
  'trial',
  'preprint',
  'book',
  'chapter',
  'regulator',
  'law',
  'guideline',
  'label', // SmPC, EPAR, US prescribing information
  'registry', // trial registration
  'dataset',
  'report',
  'web',
] as const;

export const PAGE_SECTIONS = [
  'home',
  'start',
  'basics',
  'history',
  'compounds',
  'evidence',
  'legal',
  'safety',
  'guides',
  'reform',
  'reference',
  'about',
  'news',
] as const;

export const PAGE_TEMPLATES = ['reference', 'safety', 'opinion', 'landing', 'index'] as const;
export const READING_LEVELS = ['B1', 'B2', 'C1'] as const;

/** The fixed section order of every complete compound page (section 1 and 9 are rendered by the layout). */
export const COMPOUND_SECTIONS = [
  'what-it-is',
  'mechanism',
  'evidence',
  'unknowns',
  'regulatory',
  'risks',
  'harm-reduction',
] as const;

/** Sections a stub compound page must have (Tier 2 until v1.1). */
export const STUB_SECTIONS = ['what-it-is', 'evidence', 'regulatory', 'risks'] as const;

export const CALLOUT_TYPES = ['note', 'tip', 'warning', 'stop', 'legal', 'uncertain'] as const;

/** Pictograms for the "Stop and get help" strip (glance.stop_signs): what the person notices. */
export const STOP_SIGN_ICONS = ['sign-belly-pain', 'sign-low-sugar', 'sign-allergic', 'sign-vision', 'sign-infection', 'sign-bleeding', 'sign-heart', 'sign-mole', 'sign-clock', 'sign-fever'] as const;

/** The three answers of a <Compare> cell (<Verdict is="…" />): always a word plus a glyph, never colour alone. */
export const VERDICTS = ['yes', 'no', 'unknown'] as const;

/** Amino-acid residue codes accepted in sequence data. D- prefix marks D-isomers. */
export const STANDARD_RESIDUES = [
  'Ala', 'Arg', 'Asn', 'Asp', 'Cys', 'Gln', 'Glu', 'Gly', 'His', 'Ile',
  'Leu', 'Lys', 'Met', 'Phe', 'Pro', 'Ser', 'Thr', 'Trp', 'Tyr', 'Val',
] as const;
/** Non-standard residues found in this site's compounds. Extend with a comment when needed. */
export const NONSTANDARD_RESIDUES = [
  'Aib', // 2-aminoisobutyric acid (semaglutide, tirzepatide, retatrutide, ipamorelin)
  'Nle', // norleucine (melanotan II, bremelanotide)
  '2Nal', // 3-(2-naphthyl)alanine (ipamorelin as D-2Nal)
  'αMeLeu', // alpha-methyl-leucine (retatrutide)
  'αMePhe', // alpha-methyl-phenylalanine
  'Orn', // ornithine
  'Hyp', // hydroxyproline
  'Sar', // sarcosine
  'Dab', // 2,4-diaminobutyric acid
  'Dmt', // 2',6'-dimethyltyrosine (SS-31)
  '2MeTrp', // 2-methyltryptophan, methyl on the indole ring (hexarelin as D-2MeTrp)
] as const;
