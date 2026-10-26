# compounds-e: English refocus of eight compound pages (24 October 2026)

Pages: `src/content/compounds/en/{mots-c,epitalon,semax,selank,thymosin-alpha-1,aod-9604,ss-31,nad-precursors}.mdx`.
Also: `src/i18n/en/glossary/stubs-a.json`, `stubs-b.json`. Manifest of everything European that was cut:
`research/for-nl-site/MANIFEST-compounds-e.md`.

Inputs: `research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md`, `research/refocus/status/<slug>.yaml` (each
`factcheck:` block applied), `research/refocus/{canada-legal,australia-legal,us-uk-routes}.md`,
`research/refocus-notes/merge.md`, the merged source files `src/data/sources/refocus-*.yaml`.

**Interrupted run.** An earlier run had drafted six pages (mots-c, epitalon, semax, selank, thymosin-alpha-1, aod-9604);
ss-31 and nad-precursors were untouched, and there was no manifest, no notes file and no `en-compounds-e.yaml`. I reviewed
the six drafts line by line against the status research and the source notes, kept what held, and fixed what did not
(list below); ss-31 and nad-precursors were rewritten in this run.

**Data files** (`src/data/compounds/<slug>.yaml`): not changed. I compared every UK, CA and AU row with
`research/refocus/status/<slug>.yaml` and the merge notes; no error found. EU/NL/DE/BE rows untouched.

**Sources:** no new source was needed, so `src/data/sources/en-compounds-e.yaml` was not created. All new citations reuse
existing ids (mostly `refocus-*.yaml`). One existing id was re-verified for a new use: `usc-21-321` (Cornell LII,
21 U.S.C. § 321), fetched 24 October 2026; § 321(ff)(2)(A)(i): a dietary supplement "is intended for ingestion". Its
registry note covers § 321(g) and (p) only; the owner of `legal-b.yaml` may add (ff).

## 1. What changed, per page

Common to all eight (the brief's elements):
- `regulatory_notes`: only US, UK, CA, AU, WADA (EU/NL/DE/BE moved to the manifest with their text).
- The status comparison in the regulatory section is one row per country (US, UK, Canada, Australia); the sport line
  sits under the figure (WADA is the same everywhere).
- New fold "The UK, Canada and Australia" (MHRA register, Misuse of Drugs Act; DIN, Health Canada's position on
  injectable peptides, Health Canada seizures; ARTG, Poisons Standard, s 19B, the TGA's June 2026 priority), with links
  to the four country law pages.
- The PCAC item 5 now reads: none is an approved medicine in the US, the UK, Canada or Australia; a 503A listing
  changes nothing outside the US (mots-c, epitalon, semax; thymosin-alpha-1 and aod-9604 were 2024 votes, selank was
  not voted on, NAD+ is category 1: a one-line equivalent was added on nad-precursors).
- New fold "Legal routes, and reporting a side effect" (thymosin-alpha-1: merged into its existing legal-routes fold):
  country-neutral, links all eight treatment-route anchors on `/en/legal-routes/`, and names and links FDA MedWatch,
  the Yellow Card scheme, the Canada Vigilance Program and the TGA.
- Review fixes to the earlier draft (all six pages): (a) the Canadian DIN sentence also cited
  `ca-hc-2026-04-think-twice-peptides`, which does not name Semax, Selank, thymosin alpha-1 or AOD-9604: removed from that
  sentence (it stays on the next sentence, Health Canada's "generally regulated as prescription drugs" position);
  (b) the Australian Compare cell "Not in the national register of approved goods" was loose (the ARTG also holds listed
  goods that are not evaluated): now "Not in Australia's register of therapeutic goods (ARTG)"; (c) the UK cell "UK
  law forbids supplying a medicine without a UK licence" now adds "with narrow exceptions" (HMR 2012 reg 46 re-read on
  legislation.gov.uk on 24 October 2026; the exceptions, such as specials, are elsewhere in the Regulations).

Per page:
- **mots-c**: frontmatter had no EU wording besides the notes. Compare row "Approved anywhere?" now four-country.
- **epitalon**: study `vanhee-2015-illegal-products` "Belgian" → "national public-health laboratory" (also in the
  What-it-is paragraph). The FDA's ten-country list now names Canada, Australia and the UK. Draft fix: "a small US study"
  → "an early-stage US study" (NCT07888595 is early phase 1, by invitation; "small" was not in our source; the record,
  read through the API on 24 October 2026, gives an estimated 48 participants, not quoted on the page).
- **semax**: description, summary, lede four-country; the UK row and fold use the FSA guidance (MHRA treats Semax as a
  medicine); "Belgium" removed from the `vanhee-2020-seized` finding.
- **selank**: as semax (no FSA statement exists for Selank, so none is claimed); "Belgian" removed in three places.
- **thymosin-alpha-1**: description, summary item 2 and lede four-country (lede shortened in this run to 18 words:
  "Approved in some countries, not the US, UK, Canada or Australia. A big sepsis trial found no benefit."; consistent with
  the derived tile "Only in other countries"); the duplicate glance.facts row "Approved in" dropped; the Dutch
  named-patient paragraph replaced by the four-country routes paragraph. "Eastern Europe" (the maker's list of approvals,
  quoted from the FDA briefing) kept with a `residue-ok` marker.
- **aod-9604**: new subsection "Australia, where it began" from the status research (history), Schedule 4 + Appendix D
  from 1 June 2015, NSW S4D and Victoria s 36B as examples; the German Anti-Doping Act sentence and the EU food-law
  sentence cut. Draft fix: the NSW sentence now also cites `au-nsw-health-s4d` (the list in force now), not only the
  list for the law that starts on 5 November 2026.
- **ss-31** (this run): description, summary item 4, regulatory Lead four-country; What-it-is Compare row "Approved for
  any use in the EU?" → "Approved in the UK, Canada or Australia?"; glance.facts "Approved for" now gives the approved
  use only ("Barth syndrome, in people weighing at least 30 kg"; country and year are in the derived row); regulatory
  section: a four-country Compare (approved? / being tested there in a trial?) is the figure; the US TimeStrip moved into
  the fold "How the US approval happened, and what is still due"; new country fold; new routes-and-reporting fold.
- **nad-precursors** (this run): description, summary item 3, glance.facts "EU food status" → "Rules for pills";
  grade_rationale "Europe, North America and Asia" → "on three continents"; What-it-is Compare four-country; fold "Why
  the category confusion matters" rewritten on US, UK, Canadian and Australian law, EFSA kept as safety evidence with a
  `residue-ok` marker; regulatory Compare one row per country with three questions (medicine? NR in pills? NMN in
  pills?); new country fold; ProductCheck extra line country-neutral; Australian pregnancy restriction for NMN added to the
  checks fold; routes-and-reporting fold.
- **Glossary**: see the manifest table. Added `listed-medicine` (Australia, AUST L) to `stubs-b.json`. A
  `natural-health-product` entry I added clashed with the new `legal-en.json` (legal group): removed mine, theirs is used.

## 2. New facts and their sources

Status facts common to the six unapproved peptides (each from `research/refocus/status/<slug>.yaml` page_facts and rows):
- Not in the MHRA's licensed-medicines database: `mhra-products-search-status-d-2026-10-23`. UK supply rule:
  `uk-hmr-2012-reg-46`. Not a controlled drug: `uk-mda-1971-sch-2`.
- No DIN: `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24`. New-drug/DIN rule:
  `ca-food-and-drug-regulations`. Health Canada's position "generally regulated as prescription drugs":
  `ca-hc-2026-04-think-twice-peptides` (stated as Health Canada's position, per the brief).
- Health Canada seizures (advisories summarised in `ca-hc-recalls-search-status-d-2026-10-23`): MOTS-c RA-77218,
  RA-81403, and named in RA-81874 (`ca-hc-2026-04-think-twice-peptides`); epitalon RA-77218, RA-77807, RA-81403, RA-81874;
  Semax RA-77807; Selank RA-77218, RA-77807; thymosin alpha-1 RA-77218, RA-77807, RA-81403; AOD-9604 RA-77807, RA-81403;
  SS-31 RA-77807, RA-81403, RA-81874. The page text for each matches its own list (only epitalon, MOTS-c and SS-31 are
  said to be in the April 2026 warning).
- Not in the ARTG: `au-artg-search-status-d-2026-10-23`; not named in the Poisons Standard: `au-poisons-standard-2026-10`;
  s 19B offence unless exempt: `au-tg-act-s19b-19d-offences`, `au-tga-2026-04-peptide-responsibilities`; June 2026
  priority: `au-tga-2026-06-peptide-compliance-priority`.
- Trials: `ctgov-search-status-d-2026-10-23`, `ctgov-us-uk-peptide-search-2026-10-23`, `au-anzctr-search-status-d-2026-10-23`,
  `ca-hc-ctdb-search-status-d-2026-10-24`.
- Reporting: `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`,
  `au-tga-report-adverse-event`.

Page-specific:
- mots-c: Sport Integrity Australia lists MOTS-c among peptides banned in sport (`au-sia-peptides`); the only MOTS-c
  trial is in China (`ctgov-nct07505745`).
- epitalon: FDA found no approved product in Canada, Australia, the UK or seven other countries
  (`fda-pcac-2026-epitalon-briefing`); NCT07888595 (`ctgov-search-status-d-2026-10-23`, `ctgov-us-uk-peptide-search-2026-10-23`).
- semax: the MHRA treats Semax as a medicine, so it may be supplied only with a UK marketing authorisation
  (`uk-fsa-2018-importing-food-supplements`); US new-drug rule (`usc-21-355`).
- thymosin-alpha-1: wellness clinics in the UK market it (`fda-pcac-2024-thymosin-alpha-1-briefing`); a 2014
  Health Canada-authorised Zadaxin sepsis trial lists no Canadian site and is "not yet recruiting"
  (`ca-hc-ctdb-search-status-d-2026-10-24`); not in the Poisons Standard, unlike thymosin beta-4 (`au-poisons-standard-2026-10`);
  the TGA's 2020 infringement notices for COVID-19 claims, company not named (`au-tga-search-status-d-2026-10-23`); one
  US thymalfasin trial recruiting, none with a UK, Canadian or Australian site (`ctgov-us-uk-peptide-search-2026-10-23`,
  `ctgov-search-status-d-2026-10-23`).
- aod-9604: Home Office FEWS found it once in Border Force samples, 2017-18, "not controlled" (`uk-home-office-fews-2017-18`);
  developer and the 2005 ANZCTR trial (`anzctr-actrn12605000067673`, `fda-pcac-2024-aod9604-briefing`); 2007 end of
  obesity work ("commercial viability", `fda-pcac-2024-aod9604-briefing`); ACC February 2013 report
  (`au-acc-2013-organised-crime-drugs-sport`); WADA statement of 22 April 2013, S0 (`wada-2013-04-aod9604-statement`);
  Schedule 4 + Appendix D from 1 June 2015 and in the October 2026 edition, proposed in 2014 (`au-poisons-standard-2015-06`,
  `au-poisons-standard-2015-02`, `au-tga-2014-09-scheduling-consultation`, `au-poisons-standard-2026-10`); Victoria s 36B
  (`au-vic-dpcs-act-1981`); NSW S4D list (`au-nsw-health-s4d`, `au-nsw-health-s4d-2026`); never in the ARTG
  (`au-artg-search-status-d-2026-10-23`, `au-tga-search-status-d-2026-10-23`).
- ss-31: approved 19 September 2025, accelerated approval, Barth syndrome, at least 30 kg (`fda-drugsatfda-forzinity`,
  `fda-2025-forzinity-approval-letter`, `fda-label-forzinity-2025`); three open US trials on 23 October 2026
  (`ctgov-us-uk-peptide-search-2026-10-23`); UK: NCT07531251 recruiting (Bristol) and NCT06373731 (UK sites, not
  recruiting) (`ctgov-nct07531251`, `ctgov-nct06373731`, `ctgov-search-status-d-2026-10-23`; sites re-read through the
  API on 24 October 2026); no MHRA decision or alert (`uk-govuk-search-status-d-2026-10-23`); Canada: trial authorised
  19 March 2026, recruiting in Calgary (`ca-hc-ctdb-search-status-d-2026-10-24`); MMPOWER-3 had Canadian sites, ended 2020
  (`ctgov-nct03323749`); Australia: not in the ARTG, no TGA page, not in the Poisons Standard; NuPOWER (Sydney, Parkdale)
  ended December 2024 (`au-artg-search-status-d-2026-10-23`, `au-tga-search-status-d-2026-10-23`,
  `au-poisons-standard-2026-10`, `ctgov-nct05162768`).
- nad-precursors: UK: no licensed medicine (`mhra-products-search-status-d-2026-10-23`); NR chloride authorised novel food
  for adult food supplements in Great Britain (`uk-fsa-gb-novel-96-nr-chloride`); NMN and NAD+ not on the GB register
  (`uk-fsa-novel-food-register-search-status-d-2026-10-23`); no MHRA borderline decision found
  (`uk-govuk-search-status-d-2026-10-23`). Canada: no DIN; NHPs need a product licence (`ca-nhpr-definition`,
  `ca-nhpr-schedule-1`); NMN monograph of 2024, currency unconfirmed (`ca-nhpid-nmn-monograph`); nothing injected is an
  NHP (`ca-nhpr-schedule-2`); the September 2025 recall incl. an NAD+ drip and the April 2026 seizure list
  (`ca-hc-recalls-search-status-d-2026-10-23`, `ca-hc-2026-04-think-twice-peptides`). Australia: no AUST R medicine
  (`au-artg-search-status-d-2026-10-23`); oral NR and (from 10 December 2025) oral NMN permitted in listed medicines, with
  limits, NMN not in pregnancy or breastfeeding (`au-permissible-ingredients-determination-2026-3`,
  `au-tga-2025-04-nad-nmn-safety-alert`); listed medicines are not evaluated before listing; no permitted indication for
  NAD+ (`au-tga-2026-08-nad-nmn-representations-guidance`); NAD+ not permitted, NAD+ ARTG entries export only; products
  without an ARTG entry likely breach the law (`au-tga-2025-04-nad-nmn-safety-alert`, `au-artg-search-status-d-2026-10-23`);
  not scheduled (`au-poisons-standard-2026-10`); no TGA statement on clinic drips found (`au-tga-search-status-d-2026-10-23`).
  US: a dietary supplement is intended for ingestion (`usc-21-321`, see above).

## 3. Removed sections

All listed, with their text or a pointer, in `research/for-nl-site/MANIFEST-compounds-e.md`. Nothing non-European was
removed; one non-European sentence was replaced by a better-sourced one (aod-9604: "Australia controls it as a
performance- and image-enhancing drug" → the Poisons Standard history; `fda-pcac-2024-aod9604-briefing` is still cited
on the page).

## 4. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working tree)

Ids counted from `<Cite id>`, `source=`, `extraSources=` and frontmatter `sources: [...]`.

| Page | Before | After | Removed (all European framing, all in the manifest) |
|---|---|---|---|
| mots-c | 31 | 50 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet |
| epitalon | 32 | 48 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, de-amg-21, be-medicines-law-1964 |
| semax | 27 | 48 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet |
| selank | 26 | 44 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet |
| thymosin-alpha-1 | 24 | 40 | ema-orphan-thymalfasin-eu-3-02-110, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, ema-medicines-json, igj-leveren-op-artsenverklaring |
| aod-9604 | 22 | 47 | ema-medicines-json, eu-regulation-178-2002-food-law, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning, de-antidopg-anlage, de-antidopg-2 |
| ss-31 | 29 | 46 | ema-medicines-json, ema-orphan-elamipretide-eu-3-21-2430, ema-under-evaluation-2026-10, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning |
| nad-precursors | 32 | 52 | eu-regulation-2020-16-nr, eu-union-list-novel-foods-2026-08-10, ema-medicines-json, cbg-geneesmiddeleninformatiebank, eu-regulation-178-2002-food-law, ema-orphan-designations-json |

Component counts before/after (KeyNumber, IconArray, TimeStrip, `<Q>`, Compare, Callout, WarningSigns, ProductCheck)
are equal on every page, except ss-31 Compare 1 → 2 (the new four-country figure). No study, number or caveat was dropped.
`ema-orphan-thymalfasin-eu-3-02-110` still appears in the thymosin-alpha-1 reference list because the data file's
`national_authorisations` (IT) cites it.

## 5. Validation and residue

- `npx tsx scripts/validate-content.ts`: **0 errors** in my files (the 11 remaining errors are in other groups' files).
- Warnings in my files, explained:
  - 4 per page "inline outbound link … prefer <Cite id>": the four reporting links. The brief asks for the reporting
    services to be named and linked; all four hosts are on the allowlist, and each has its `<Cite>` beside it
    (CONTENT-GUIDE §10 allows a genuinely needed link to a reporting form). Same pattern as the other compound groups.
  - "no regulatory row for BE (shown on preview locale nl)" on seven data files: for the Dutch site; I add no European
    rows (merge.md §9).
  - `stubs-b.json` efsa alias "European Food Safety Authority" (warn level): EFSA is cited as safety evidence on
    nad-precursors. JSON cannot carry the marker; if the lead wants it silent, add an `allowStrings` entry (file
    `glossary/stubs-b.json`, key `efsa.aliases`, pattern europe, reason "EFSA cited as evidence").
- The brief's residue grep over my ten files: **0 real hits**. The raw grep reports two false positives only: `nada\b`
  matches "Canada", and `epar` matches "separate(ly)". With "Canada" excluded, the only hits are "separate". Marked
  lines: thymosin-alpha-1 ("Eastern Europe", maker's list of approvals) and nad-precursors (EFSA as evidence).
- Rendered pages (dev server, 24 October 2026): all eight return 200; tile and fact sheet agree with the text (MOTS-c,
  epitalon, Semax, Selank, AOD-9604, NAD+: "No. Not approved as a medicine in the US, the UK, Canada or Australia";
  thymosin alpha-1: "Only in other countries. Approved in Italy, India and Hong Kong …"; SS-31: "Only in the US …").
  European words still reach my pages through parts I do not own: `product-check.json` ("In the EU, a medicine must show
  all four"; "In the Netherlands, your doctor must keep what you say private"), glossary tooltips from `guides.json`
  (medicines regulator: "the EMA in the EU, the CBG in the Netherlands") and `final-qa.json` (DSIP: "not approved as a
  medicine in the EU, the UK or the US"), and cited titles in the reference lists (Belgian and EMA papers, EFSA Journal).

## 6. Open questions for the medical and legal reviewers

1. **Seller rule, `fda-grn-635-nicotinamide-riboside`** (owner: `stubs-b.yaml` sources, not mine): its title names the
   notifier company. It is cited (pre-existing) on nad-precursors for "The FDA had no questions about its use in foods
   (2016)". Keep (it is the FDA's record), or retitle neutrally in the registry ("GRAS Notice Inventory: GRN No. 635,
   nicotinamide riboside chloride")?
2. **NAD+ in Canada:** whether oral NR is sold under an NHP licence cannot be cited (the licence record was dropped for
   naming the company; the LNHPD was down), and whether the 2024 NMN monograph is current is unresolved. Both are written
   as unknown. Re-check the LNHPD with a neutral search record when it is back.
3. **NAD+ "approved medicine" wording:** the page says none is an approved medicine in the four countries, and calls
   Australian AUST L products "listed medicines … not evaluated before listing". This follows the lead's drug-sense rows
   (merge.md); a reviewer should confirm the wording is fair to Australian readers who see "AUST L" on NR capsules.
4. **NAD+ clinic drips in Australia:** no TGA statement found; the page says only that, never whether they are lawful.
5. **SS-31, UK trial:** sites come from ClinicalTrials.gov; whether the Bristol arm has an MHRA trial authorisation was not
   checked (the page says so). The US trial cell ("three open trials with a US site") counts "open" as the source does
   (recruiting, not yet recruiting, active not recruiting, by invitation): on 24 October 2026 the API showed NCT07531251
   (overall recruiting, but its only US site, Needham, "terminated"), NCT06373731 (active, not recruiting) and
   NCT07275424 (a University of Washington phase 2a pilot in older adults, recruiting in Seattle; not cited, no registry
   entry). The page does not say the confirmatory trial recruits in the US.
6. **AOD-9604, NSW:** S4D lists (current and from 5 November 2026) both include AOD-9604; the page states it without a
   date. Other states and territories not checked (the page says so).
7. **Canada:** "Health Canada says injectable peptides are generally regulated as prescription drugs" is stated as Health
   Canada's position (merge.md §7 item 7); the legal basis rests on the DIN/new-drug rules cited beside it.
8. **MOTS-c, "we found no approval elsewhere":** rests on the FDA briefing (EMA lists no product) and our four-country
   searches; no wider search was made.
9. **Before publishing:** the Health Canada NOC database was never searched for these compounds (merge.md §8).
10. **Glossary:** `listed-medicine` is new in `stubs-b.json`; if the legal group later adds the same id or the alias
    "AUST L" in `legal-en.json`, keep one.
