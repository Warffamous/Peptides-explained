/**
 * Pictogram vocabulary (design system C, Isotype logic: one symbol, one meaning, in every
 * language). Each entry is SVG markup on a 48×48 grid, drawn as flat filled shapes.
 * The full set is designed in docs/DESIGN-SYSTEMS.md §C; names are stable API.
 */
export const PICTOGRAM_NAMES = [
  // evidence levels
  'level-hypothesis', 'level-in-vitro', 'level-animal', 'level-human-limited', 'level-human-controlled', 'level-established',
  // mechanism levels
  'mech-hypothesis', 'mech-in-vitro', 'mech-animal', 'mech-human',
  // compound classes
  'class-incretin', 'class-gh-axis', 'class-melanocortin', 'class-tissue-repair', 'class-immunomodulatory', 'class-mitochondrial',
  'class-neuroactive', 'class-dermal', 'class-metabolic', 'class-longevity-claimed', 'class-non-peptide',
  // categories / legal status
  'status-authorised', 'status-authorised-elsewhere', 'status-investigational', 'status-experimental', 'status-not-a-peptide',
  'reg-authorised', 'reg-not-authorised', 'reg-refused', 'reg-withdrawn', 'reg-under-review', 'reg-investigational', 'reg-prohibited', 'reg-not-listed',
  // body systems
  'body-metabolic', 'body-cardiovascular', 'body-gastrointestinal', 'body-musculoskeletal', 'body-nervous', 'body-endocrine', 'body-immune',
  'body-skin', 'body-sexual', 'body-renal', 'body-cellular',
  // risk types and safety
  'risk-infection', 'risk-contamination', 'risk-dosing-error', 'risk-interaction', 'risk-unknown-long-term', 'risk-hormonal',
  'risk-cardiovascular', 'risk-cancer-theory', 'risk-injection-site', 'risk-allergic',
  'action-emergency', 'action-urgent', 'action-stop',
  // callouts
  'callout-note', 'callout-tip', 'callout-warning', 'callout-stop', 'callout-legal', 'callout-uncertain',
  // evidence axes
  'axis-human_clinical', 'axis-preclinical_volume', 'axis-independence', 'axis-safety',
] as const;
export type PictogramName = (typeof PICTOGRAM_NAMES)[number];

/** Placeholder glyphs until design system C replaces them. */
export const PICTOGRAMS: Record<string, string> = Object.fromEntries(
  PICTOGRAM_NAMES.map((n) => [n, '<circle cx="24" cy="24" r="18"/>']),
);
