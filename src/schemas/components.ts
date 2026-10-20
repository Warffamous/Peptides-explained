/**
 * The MDX component vocabulary. Content may use exactly these components; the validator
 * rejects anything else so a typo cannot silently render nothing. Documented with examples
 * in docs/CONTENT-GUIDE.md.
 */
export const INLINE_COMPONENTS = ['Cite', 'Claim', 'Q', 'Seq', 'Term'] as const;
export const BLOCK_COMPONENTS = [
  'Callout',
  'Diagram',
  'Checklist',
  'Faq',
  'FaqItem',
  'EvidenceGrade',
  'WarningSigns',
  'PageList',
  'CompoundIndex',
  'Timeline',
  'GradeRubric',
  'GradeMatrix',
  'CorrectionsLog',
  'ChangeTracker',
  'NewsList',
  'GlossaryIndex',
  'SourcesIndex',
  'JurisdictionCard',
  'Explainer',
  // media pipeline (docs/MEDIA-GUIDE.md)
  'Photo',
  'Infographic',
  'MediaCredits',
] as const;
/** Valid only inside src/content/compounds/**. They read the compound from the page context. */
export const COMPOUND_ONLY_COMPONENTS = ['Section', 'Mechanism', 'StudyTable', 'RegulatoryTable', 'AuthorisedProducts', 'SequenceView'] as const;
export const ALLOWED_COMPONENTS = [...INLINE_COMPONENTS, ...BLOCK_COMPONENTS, ...COMPOUND_ONLY_COMPONENTS] as const;
