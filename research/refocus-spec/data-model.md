# Spec: per-locale jurisdictions (English refocus, step 1)

Owner decision, 23 October 2026: the English site is for readers in the **US, UK, Canada (CA) and Australia (AU)** (full
coverage) with short **notes for Ireland (IE) and New Zealand (NZ)**. All European material (NL, EU, BE, DE) leaves the
English site **but the data stays** in `src/data/` for the Dutch site: every component shows a locale only its own
jurisdictions. The emergency number is never printed on English ("call your local emergency number").

Research for CA/AU/UK rows, products and help services runs in parallel and lands later in `research/refocus/`
(do not touch that folder or `research/for-nl-site/snapshot-*`). Until it is merged, compounds lack CA and AU rows (and 9
lack a UK row): the code must cope (treat a missing visible row as **unknown**: leave it out of approval sentences, never
say "not approved" for it) and the required-row check must report **warnings** for now (one constant to flip to errors later).

## A1 `config/locales.json` + `src/lib/config.ts` + `scripts/lib/load.ts`
- Replace each locale's unused `"jurisdiction": "NL"` with
  `"jurisdictions": { "full": [...], "notes": [...] }` and add `"printsEmergencyNumbers": <bool>`.
  - en: full `["US","UK","CA","AU"]`, notes `["IE","NZ"]`, printsEmergencyNumbers false.
  - nl: full `["NL","EU","BE"]`, notes `[]`, true (placeholder until the Dutch site is designed).
  - de: full `["DE","EU"]`, true. pl, tr, ar: full `["NL","EU"]`, true.
- Validate locales.json with a new `localeFileSchema` (codes from JURISDICTIONS, never WADA; full and notes disjoint; full
  non-empty unless status planned). `src/lib/config.ts`: export `fullJurisdictions(code)`, `noteJurisdictions(code)`,
  `visibleJurisdictions(code)` (= full + WADA, WADA last, in the locale's order). Update the LocaleConfig type in
  scripts/lib/load.ts. Update README "How to add a locale" lines about `jurisdiction`.

## A2 `src/schemas/vocab.ts`
- `JURISDICTIONS` += `CA, AU, IE, NZ` (display order comes from the locale, not this array).
- `REGULATORY_STATUSES` += `'discontinued'`: authorised and marketed, then the holder stopped and the authorisation was
  cancelled for non-safety reasons. (Tesamorelin in Canada: approved 2014, cancelled 2022.)
- `COMPOUND_CATEGORIES`: fold `authorised-elsewhere` into `authorised`, which now means "an official product label exists
  from at least one regulator the site tracks". `authorised-nationally` = authorised only by countries outside every tracked
  set (national_authorisations). Migrate data (pt-141, ss-31, tesamorelin and any other `authorised-elsewhere`).
- New `PRODUCT_JURISDICTIONS = ['US','UK','CA','AU','EU','NL','DE','BE']`.

## A3 `src/schemas/index.ts` (keep validation strict)
- `regulatoryEntrySchema`: add `authorised_since: isoDate.optional()` (required for `discontinued`, with `since` = the
  cancellation date) and optional `schedule: { code, note?, sources }` (e.g. Australian Poisons Standard "S4").
- compound superRefine:
  - Remove the hard-coded required EU/NL/US/WADA rows from the zod schema; the validator enforces required rows from the
    locales (below). WADA stays required always.
  - `prohibited`, `not-listed`, `unclear` only on WADA; `discontinued` needs since + authorised_since.
  - `authorised` category: ≥1 product and ≥1 non-WADA row `authorised` or `discontinued`; human_clinical authorised.
  - Any authorised row or product forces category `authorised` unless `not-a-peptide`.
  - `authorised-nationally`: national_authorisations non-empty, no products, no authorised row in any jurisdiction.
    (Thymosin alpha-1's EU row currently says authorised but means Italy's national authorisation: change it to
    `not-authorised` and keep the Italy fact in national_authorisations; note it in research/for-nl-site/MANIFEST-data.md.)
- `authorisedProductSchema.jurisdiction` → `z.enum(PRODUCT_JURISDICTIONS)`; add `marketed_until: isoDate.optional()`.
- Timeline events: `jurisdictions: z.array(z.enum(JURISDICTIONS)).default([])` ([] = global). Tag existing events
  (Dutch laws → NL, EU directives/EMA → EU, FDA → US, etc.; global science/history → []).
- Feeds: optional `jurisdiction`; tag ema → EU, fda → US, wada/who/pubmed → none.
- `jurisdictions.yaml` schema: `emergency` becomes a string array; replace `urgent_care` with
  `help: [{ kind: 'urgent-advice'|'poisons'|'drugs-advice'|'mental-health', name, url }]` (optional, default []).
  Convert the existing entries. (CA/AU/IE/NZ entries are added later from research; until then the validator warns.)
- `src/schemas/media.ts` heroes: a value may be `kebab | { default?: kebab, <locale>: kebab }`; `heroFor(routeKey, locale)`
  in `src/lib/media.ts`; `scripts/lib/validate-media.ts` checks per locale.

## A4 new `src/lib/jurisdictions.ts` (pure functions, used by components and the validator)
- `visibleRows(data, locale)` (full ∪ WADA in locale order), `visibleProducts(data, locale)`, `isVisible(codes, locale)`
  ([] = global → visible).
- `approvalFor(data, locale)` →
  `{ key: 'all'|'some'|'former'|'elsewhere'|'trials'|'none', peptide, approved: J[], former: J[], notApproved: J[], unknown: J[], national: string[] }`.
  approved = visible full rows `authorised`; former = `discontinued`; notApproved = other statuses; unknown = missing rows.
  all = every full jurisdiction approved; some = ≥1 approved; former = only discontinued ones; elsewhere = category
  authorised/authorised-nationally but nothing visible approved (name national_authorisations countries; never name a
  jurisdiction outside the locale's set — say "other countries"); trials = investigational category; none otherwise.
  `not-a-peptide` sets peptide false (a lead sentence "It is not a peptide." in the tile).
- Sentences are built from whole-sentence i18n strings (translators get full sentences) with `Intl.ListFormat`
  (conjunction "and" / disjunction "or") over `vocab.jurisdictionInSentence.*` ("the US", "the UK", "Canada", "Australia",
  "Ireland", "New Zealand"). Target English results:
  - tesamorelin → short "Only in the US"; text "Approved in the US. Canada approved it, but it is no longer sold there.
    Not approved in the UK or Australia. Only with a prescription."
  - all four → short "Yes"; text "Approved in the US, the UK, Canada and Australia. Only with a prescription."
  - experimental → short "No"; text "Not approved as a medicine in the US, the UK, Canada or Australia."
  - investigational → short "No"; text "Not approved. It is still being tested in trials."
  - thymosin alpha-1 (national) → short "Only in other countries"; text "Approved in Italy, India and Hong Kong for some
    uses. Not approved in the US, the UK, Canada or Australia."
  Short answers at most 4 words.

## A5 components
- `AtAGlance.astro`: approval tile from `approvalFor` (remove NON_EU); pictogram by key (all → status-authorised;
  some/former → status-authorised-elsewhere; elsewhere → status-authorised-nationally; trials → status-investigational;
  none → status-experimental; not-a-peptide keeps status-not-a-peptide unless approved); tone yes/partial/no with frac
  (all 1, some = share approved, former 0.4, elsewhere 0.5, trials 0.33, none 0). "Checked" date = latest as_of of the
  visible rows + national_authorisations. Update the doc comment.
- `FactSheet.astro`: replace "Status in the EU" with "Approved in" (e.g. "US since 2010; Canada 2014–2022" or "Not in the
  US, the UK, Canada or Australia"); remove statusNational.
- `RegulatoryTable.astro`: `visibleRows` in locale order; discontinued rows read "Approved {authorised_since} · no longer
  sold since {since}"; show `schedule` when present.
- `AuthorisedProducts.astro`: badge and explanation from the approval (no EU wording, no Netherlands); products =
  `visibleProducts`, with a "No longer sold" tag when `marketed_until` is set; keep the link to the legal-routes page
  (it will be rewritten as treatment routes for the four countries).
- `src/pages/[locale]/compounds/[slug].astro`: badge text and a `data-approval` attribute from approvalFor; move the CSS
  selectors in `src/styles/design/components.css` (~40-46) from data-category to data-approval. JSON-LD Drug: keep valid.
- `Section.astro`: authorised when category === 'authorised'.
- `CompoundIndex.astro`: group by approval key: "Approved in at least one of: {list}" (all/some/former), "Approved only in
  other countries" (elsewhere), "In clinical development" (trials), "Experimental: not approved in {list}" (none), "Other"
  (not-a-peptide not approved); each card gets an "Approved in" line.
- `ChangeTracker.astro`, `Timeline.astro`, `NewsList.astro`: filter with isVisible (tracker item jurisdiction; event
  jurisdictions; feed jurisdiction).
- `JurisdictionCard.astro`: fail the build when the code is not in the locale's full + notes; render help services; never
  print emergency numbers when `printsEmergencyNumbers` is false. New `JurisdictionCards.astro` (`which="full|notes|all"`),
  registered in `src/schemas/components.ts` and `src/components/mdx/index.ts`.
- `SourcesIndex.astro` and `MediaCredits.astro`: list only what this locale uses (new `usedSourceIds(locale)` /
  `usedMediaIds(locale)` in `src/lib/content.ts`, collecting Cite/source= / Photo / Infographic / Explainer uses in the
  locale's page bodies, visible data rows/studies/products/national authorisations, visible timeline/tracker items,
  product-check data, hero photos of built routes). Look first for an existing citation collector to reuse.
- Preview fallback: when an English page is shown as fallback in a preview locale, filter by the CONTENT locale (en) so
  tables match the text (carry contentLocale in Astro.locals.compound or similar).

## A6 English strings
- `vocab.json`: names for CA/AU/IE/NZ; `jurisdictionInSentence.*`; `regStatus.discontinued` ("Approved, no longer sold");
  `category.authorised` "Authorised medicine"; remove `authorised-elsewhere`.
- `beginner.json`: rebuild `glance.approved.*` as the sentence parts above; `facts.approvedIn`; remove `facts.status` and
  `facts.statusNational`.
- `compound.json`: `authorised.*` country-neutral (no EU, no Netherlands, no artsenverklaring); `index.*` group labels.
- Before changing or removing any English string, copy the old key/value into
  `research/for-nl-site/i18n-replaced-en.json` (one object per file name) — it is source material for the Dutch site.
- Dutch strings (`src/i18n/nl/*`) are not required now (fallback to English is fine).

## Validator (`scripts/validate-content.ts`), this step only
- Load locales through `localeFileSchema`.
- Required rows: WADA always (error); plus the union of `full` sets of PUBLISHED locales — today US, UK, CA, AU — as
  WARNINGS while `const STRICT_LOCALE_ROWS = false` (a clearly named constant near the top; will be set to true after the
  research merge). Preview locales' sets: warnings only.
- A visible `authorised` or `discontinued` row needs a product for that jurisdiction (warning while not strict, then error).
- `regulatory_notes` keys in compound page frontmatter outside visible + WADA → warning for now (content rewrite removes them).
- A page's `jurisdiction` frontmatter and `<JurisdictionCard code>` must be in the locale's full + notes (warning for now;
  pages legal/nl, eu, be, de are removed later in the content rewrite).
- Every code in a locale's full/notes needs a `jurisdictions.yaml` entry (warning for now).

## Done means
- `npm run validate`: 0 errors (warnings expected for missing CA/AU rows and NL pages/notes not yet rewritten).
- `npm run build` passes; `npx tsx scripts/check-html.ts dist` 0 errors.
- The tesamorelin page shows the new tile ("Only in the US" … until the CA row is merged, the Canada sentence simply
  does not appear), semaglutide shows its approval correctly from its rows, an experimental compound shows the four-country
  sentence, and no English compound page shows "EU" in the tile, fact sheet, badge or index groups.
- Commit nothing (the lead will review and commit).
