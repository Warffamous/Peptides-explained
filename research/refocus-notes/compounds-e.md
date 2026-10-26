# compounds-e: English refocus of eight compound pages (24 October 2026)

Pages: `src/content/compounds/en/{mots-c,epitalon,semax,selank,thymosin-alpha-1,aod-9604,ss-31,nad-precursors}.mdx`.
Also: `src/i18n/en/glossary/stubs-a.json`, `stubs-b.json`. Manifest of everything European that was cut:
`research/for-nl-site/MANIFEST-compounds-e.md`.

Inputs: `research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md`, `research/refocus/status/<slug>.yaml` (each
`factcheck:` block applied), `research/refocus/{canada-legal,australia-legal,us-uk-routes}.md`,
`research/refocus-notes/merge.md`, the merged source files `src/data/sources/refocus-*.yaml`.

**Second run (24 October 2026), after an interrupted first run.** The first run had drafted six pages (mots-c,
epitalon, semax, selank, thymosin-alpha-1, aod-9604); ss-31 and nad-precursors were untouched, and there was no
manifest, no notes file and no `en-compounds-e.yaml`. The second run reviewed the six drafts line by line against the
status research and the source notes, kept what held, and fixed what did not (list below); ss-31 and nad-precursors
were rewritten in that run.

**Third run (review pass, 26 October 2026 by the machine's clock; the brief says 24 October).** The second run's
work was committed in the checkpoint `1b7304f` and was complete. This run reviewed all eight pages, both glossary
files and the eight data files line by line against the brief, the status research and the source registry, kept
nearly everything, and fixed five points (section 1, "Third-run fixes"). All third-run changes are listed there; the
rest of this file is the second run's log, updated where the fixes change it.

**Data files** (`src/data/compounds/<slug>.yaml`): I compared every UK, CA and AU row with
`research/refocus/status/<slug>.yaml` and the merge notes; no status error found. EU/NL/DE/BE rows untouched. **One
change (third run):** `nad-precursors.yaml`, US row: the source `fda-grn-635-nicotinamide-riboside` was replaced by
`fda-gras-inventory-search-2026-10-23` (same fact, see section 1), because the GRN 635 registry title names the
notifier company, which sells NR (brief, "Sources naming businesses"); data-row sources are printed in the page's
reference list. The row's comment says why.

**Sources:** `src/data/sources/en-compounds-e.yaml` (new in the third run) holds one entry,
`ctgov-elamipretide-us-sites-2026-10-26` (ClinicalTrials.gov API, run with curl on 26 October 2026; grep of all source
files found no earlier record of this search or of NCT07275424). All other citations reuse existing ids (mostly
`refocus-*.yaml`). One existing id was re-verified for a new use: `usc-21-321` (Cornell LII, 21 U.S.C. § 321), fetched
24 October and again 26 October 2026; § 321(ff)(2)(A)(i): a dietary supplement "is intended for ingestion". Its
registry note covers § 321(g) and (p) only; the owner of `legal-b.yaml` may add (ff). `fda-gras-inventory-search-2026-10-23`
(registered by stubs-b) was re-fetched on 26 October 2026: the inventory search for "riboside" shows nicotinamide
riboside chloride, 3 August 2016, "FDA has no questions", and names no company in its title or URL.

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

Third-run fixes (26 October 2026):
1. **epitalon**, routes fold: NCT07888595 was described as "a study of a skin serum". Re-read through the API on
   26 October 2026: it is an early phase 1 "geroprotective" study (oral agents such as metformin, and/or a topical
   serum) whose serum lists epitalon among five peptides. Now: "an early-stage US study of anti-ageing treatments, by
   invitation only. Epitalon is one of several peptides in its skin serum." `au-anzctr-search-status-d-2026-10-23` added
   to the cite, because the sentence also says no epitalon trial has an Australian site.
2. **nad-precursors**, What-it-is Compare: NMN "Not in the UK" → "Not in Great Britain", and NAD+ "as a UK novel food"
   → "as a novel food in Great Britain": both sources (`uk-fsa-novel-food-register-search-status-d-2026-10-23`,
   `uk-fsa-gb-novel-96-nr-chloride`) cover England, Scotland and Wales only (Northern Ireland follows other rules,
   which the English site no longer describes). The regulatory Compare and the fold already said Great Britain.
3. **nad-precursors**, UK/Canada/Australia fold: "The TGA does not evaluate these before they are listed" now adds what
   the TGA's own pages say happens instead: the sponsor certifies the product meets the rules, and its ingredients must
   come from a list the TGA has assessed as low risk (`au-tga-2026-08-nad-nmn-representations-guidance`,
   `au-tga-2025-04-nad-nmn-safety-alert`, both already cited there). Fairer to readers who see AUST L on NR capsules
   (open question 3).
4. **nad-precursors**, seller rule: `fda-grn-635-nicotinamide-riboside` (registry title "… (ChromaDex, Inc.)") replaced
   by the neutral `fda-gras-inventory-search-2026-10-23` in the frontmatter fact "Rules for pills", the What-it-is
   Compare and the regulatory Compare (and in the data file's US row). Same fact: "FDA has no questions", 2016.
   Rendered page checked: the company name no longer appears. The registry entry itself stays (owner: stubs-b.yaml).
5. **ss-31**, regulatory Compare, US trial cell: "ClinicalTrials.gov listed three open trials with a US site" could be
   read as "you can join the confirmatory trial in the US". The API on 26 October 2026 shows that the Barth syndrome
   trial's only US site (Needham) is "Terminated", the macular degeneration trial is active but not recruiting, and the
   third (NCT07275424, a University of Washington pilot in adults aged 65 to 80) is listed as recruiting but was last
   verified in December 2025. Now: "Three trials with a US site were listed as open in October 2026. The Barth syndrome
   trial's US site is marked as closed." (`ctgov-us-uk-peptide-search-2026-10-23`, new
   `ctgov-elamipretide-us-sites-2026-10-26`). Nothing on the page says a US site is recruiting.

Checked in the third run and left as written (each against its status file and source notes): the Health Canada
seizure wording on every page (RA-77218 clinic; RA-77807 online seller; RA-81403 gym, sold online; RA-81874 warning),
"Health Canada says injectable peptides are generally regulated as prescription drugs" (the brief's wording; RA-77807
says "Injectable peptides are regulated as prescription drugs in Canada", RA-81874 "peptides are generally regulated
as prescription drugs"), the Australian s 19B sentence, the AOD-9604 history (ACC 2013, WADA 22 April 2013, Schedule 4
and Appendix D from 1 June 2015, Victoria s 36B, NSW S4D), the TGA 2020 infringement notices on thymosin alpha-1
(company not named), the 2014 Zadaxin trial in Health Canada's portal, the SS-31 site cities (NCT05162768 re-read:
Sydney, New South Wales and Parkdale, Victoria; NCT07531251: Calgary and Bristol recruiting). Deliberately not added:
the 2013 Essendon investigation (status page fact) on aod-9604: the page keeps its length, the ACC report and WADA's
statement carry the history, and the court judgment's title names a club.

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
  (`ctgov-us-uk-peptide-search-2026-10-23`); the Barth syndrome trial's US site marked terminated
  (`ctgov-elamipretide-us-sites-2026-10-26`, new, third run); UK: NCT07531251 recruiting (Bristol) and NCT06373731 (UK sites, not
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
  Listed medicines: the sponsor certifies, ingredients pre-assessed as low risk (`au-tga-2026-08-nad-nmn-representations-guidance`,
  `au-tga-2025-04-nad-nmn-safety-alert`; third run). US: a dietary supplement is intended for ingestion (`usc-21-321`,
  see above); NR chloride GRAS notice, "FDA has no questions", 2016 (`fda-gras-inventory-search-2026-10-23`, replacing
  `fda-grn-635-nicotinamide-riboside`; third run).

## 3. Removed sections

All listed, with their text or a pointer, in `research/for-nl-site/MANIFEST-compounds-e.md`. Nothing non-European was
removed; one non-European sentence was replaced by a better-sourced one (aod-9604: "Australia controls it as a
performance- and image-enhancing drug" → the Poisons Standard history; `fda-pcac-2024-aod9604-briefing` is still cited
on the page). One non-European cite id was replaced, not dropped (third run, seller rule): nad-precursors
`fda-grn-635-nicotinamide-riboside` → `fda-gras-inventory-search-2026-10-23`, same fact (section 1, fix 4). It is the
only removed id in the table below that is not European framing; it is not in the manifest because nothing European
was cut.

## 4. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working tree)

Ids counted from `<Cite id>`, `source=`, `extraSources=` and frontmatter `sources: [...]`.

| Page | Before | After | Removed (all European framing, all in the manifest) |
|---|---|---|---|
| mots-c | 31 | 50 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet |
| epitalon | 32 | 49 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, de-amg-21, be-medicines-law-1964 |
| semax | 27 | 48 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet |
| selank | 26 | 44 | ema-medicines-search, ema-medicines-json, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet |
| thymosin-alpha-1 | 24 | 40 | ema-orphan-thymalfasin-eu-3-02-110, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, ema-medicines-json, igj-leveren-op-artsenverklaring |
| aod-9604 | 22 | 47 | ema-medicines-json, eu-regulation-178-2002-food-law, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning, de-antidopg-anlage, de-antidopg-2 |
| ss-31 | 29 | 47 | ema-medicines-json, ema-orphan-elamipretide-eu-3-21-2430, ema-under-evaluation-2026-10, cbg-geneesmiddeleninformatiebank, nl-gmw-art-40-handelsvergunning |
| nad-precursors | 32 | 52 | eu-regulation-2020-16-nr, eu-union-list-novel-foods-2026-08-10, ema-medicines-json, cbg-geneesmiddeleninformatiebank, eu-regulation-178-2002-food-law, ema-orphan-designations-json; and, not European, fda-grn-635-nicotinamide-riboside (replaced by fda-gras-inventory-search-2026-10-23, seller rule) |

Counts re-made in the third run with a script over the page source (26 October 2026): epitalon +1
(`au-anzctr-search-status-d-2026-10-23`), ss-31 +1 (`ctgov-elamipretide-us-sites-2026-10-26`), nad-precursors one
swap; the other five unchanged.

Component counts before/after (KeyNumber, IconArray, TimeStrip, `<Q>`, Compare, Callout, WarningSigns, ProductCheck)
are equal on every page, except ss-31 Compare 1 → 2 (the new four-country figure). No study, number or caveat was dropped.
`ema-orphan-thymalfasin-eu-3-02-110` still appears in the thymosin-alpha-1 reference list because the data file's
`national_authorisations` (IT) cites it.

## 5. Validation and residue

- `npx tsx scripts/validate-content.ts` (third run, 26 October 2026): **0 errors** in the whole project, so 0 in my
  files (the second run saw 11 errors in other groups' files; their owners have since fixed them). Run with `--only`
  for each slug, `stubs` and `en-compounds-e`: 0 errors each.
- Warnings in my files, explained:
  - 4 per page "inline outbound link … prefer <Cite id>": the four reporting links. The brief asks for the reporting
    services to be named and linked; all four hosts are on the allowlist, each URL is the url of its registry entry
    (`fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `au-tga-report-adverse-event`), and each has its
    `<Cite>` beside it (CONTENT-GUIDE §10 allows a genuinely needed link to a reporting form). Same pattern as the other
    compound groups. Third run: the FDA and Yellow Card pages answered HTTP 200 to curl on 26 October 2026; canada.ca and
    tga.gov.au did not answer curl within 40 seconds (both slow or block scripts); their entries were read by the
    research runs on 23 and 24 October 2026.
  - "no regulatory row for BE (shown on preview locale nl)" on seven data files: for the Dutch site; I add no European
    rows (merge.md §9).
  - `stubs-b.json` efsa alias "European Food Safety Authority" (warn level): EFSA is cited as safety evidence on
    nad-precursors. JSON cannot carry the marker; if the lead wants it silent, add an `allowStrings` entry (file
    `glossary/stubs-b.json`, key `efsa.aliases`, pattern europe, reason "EFSA cited as evidence").
- The brief's residue grep over my eleven files (eight pages, two glossary files, `en-compounds-e.yaml`; third run):
  **0 real hits**. The raw grep reports two false positives only: `nada\b` matches "Canada" (222 times) and `epar`
  matches "separate" (6 times). Marked lines: thymosin-alpha-1 ("Eastern Europe", maker's list of approvals) and
  nad-precursors (EFSA as evidence). All files are UTF-8 with LF line endings.
- Rendered pages (dev server, third run, 26 October 2026): all eight return 200; tile and fact sheet agree with the text
  (MOTS-c, epitalon, Semax, Selank, AOD-9604, NAD+: "Not in the US, the UK, Canada or Australia"; thymosin alpha-1:
  "Authorised only in other countries … Approved in Italy, India and Hong Kong for some uses. Not approved in the US,
  the UK, Canada or Australia."; SS-31: "Approved in the US. Not approved in the UK, Canada or Australia. Only with a
  prescription.", fact sheet "US since 2025"). The NR notifier company's name no longer appears on the NAD+ page.
  European words still reach my pages through parts I do not own: `src/i18n/en/product-check.json` ("In the EU, a
  medicine must show all four"; "In the Netherlands, your doctor must keep what you say private"), glossary tooltips
  from `src/i18n/en/glossary/guides.json` (medicines regulator: "the EMA in the EU, the CBG in the Netherlands";
  prescription-only medicine: "In the Netherlands, a pharmacist may not hand it over without one") and
  `src/i18n/en/glossary/final-qa.json` (DSIP: "not approved as a medicine in the EU, the UK or the US"), and the
  reference-list entries those components bring (KNMG "Medisch beroepsgeheim", Directive 2001/83/EC, the EMA Wegovy
  EPAR and synthetic-peptides guideline, a Talanta paper on the "Belgian market"), besides my pages' own cited titles
  (the Belgian seized-product papers, EFSA Journal).

## 6. Open questions for the medical and legal reviewers

1. **Seller rule, `fda-grn-635-nicotinamide-riboside`** (owner: `stubs-b.yaml` sources): its registry title names the
   notifier company, which sells NR. Third run: no longer cited on nad-precursors or in its data file (replaced by the
   neutral inventory search, same fact). The entry is still in the registry; its owner may retitle it neutrally
   ("GRAS Notice Inventory: GRN No. 635, nicotinamide riboside chloride") if another page needs it. Related, left as
   they were: the SEC filings cited on mots-c (`sec-cohbar-*`, URLs contain the developer's name; a dissolved drug
   developer, not a seller) and the SS-31 approval letter (titled with the maker of the approved medicine, as on every
   approved-medicine page). The reviewer may decide the rule's reach.
2. **NAD+ in Canada:** whether oral NR is sold under an NHP licence cannot be cited (the licence record was dropped for
   naming the company; the LNHPD was down), and whether the 2024 NMN monograph is current is unresolved. Both are written
   as unknown. Re-check the LNHPD with a neutral search record when it is back.
3. **NAD+ "approved medicine" wording:** the page says none is an approved medicine in the four countries, and calls
   Australian AUST L products "listed medicines", which the TGA does not evaluate before listing (third run: now with
   what happens instead, sponsor certification and pre-assessed low-risk ingredients). This follows the lead's
   drug-sense rows (merge.md); a reviewer should confirm the wording is fair to Australian readers who see "AUST L" on
   NR capsules.
4. **NAD+ clinic drips in Australia:** no TGA statement found; the page says only that, never whether they are lawful.
5. **SS-31, UK trial:** sites come from ClinicalTrials.gov; whether the Bristol arm has an MHRA trial authorisation was not
   checked (the page says so). US trial cell: resolved in the third run (section 1, fix 5); NCT07275424 is described in
   the new registry entry but not named on the page (its record was last verified in December 2025 and its estimated
   primary completion, March 2026, has passed, so its "recruiting" status may be stale).
6. **AOD-9604, NSW:** S4D lists (current and from 5 November 2026) both include AOD-9604; the page states it without a
   date. Other states and territories not checked (the page says so).
7. **Canada:** "Health Canada says injectable peptides are generally regulated as prescription drugs" is stated as Health
   Canada's position (merge.md §7 item 7); the legal basis rests on the DIN/new-drug rules cited beside it.
8. **MOTS-c, "we found no approval elsewhere":** rests on the FDA briefing (which notes that EMA lists no product) and our
   four-country searches; no wider search was made.
9. **Before publishing:** the Health Canada NOC database was never searched for these compounds (merge.md §8).
10. **Glossary:** `listed-medicine` is new in `stubs-b.json`; if the legal group later adds the same id or the alias
    "AUST L" in `legal-en.json`, keep one. The `efsa` definition says what EFSA does but, because of the residue rule,
    not that it is European; the page text says so (marked). The lead may prefer "Europe's food-safety agency" with an
    `allowStrings` entry.
11. **Dates:** the brief says today is 24 October 2026; this machine's clock said 26 October 2026 during the third run,
    so the two records fetched in that run carry accessed 2026-10-26 (`ctgov-elamipretide-us-sites-2026-10-26`) or say
    so in these notes (the GRAS inventory and NCT records re-read).

## 7. Adversarial fact-check (26 October 2026, machine date; the brief's date is 24 October)

Scope: all eight pages, the eight data files, `stubs-a.json`, `stubs-b.json`, `en-compounds-e.yaml`, the manifest and this
file. Method: every page diffed against `git show nl-source-2026-10-23:<path>`; every changed sentence checked against
its cited registry entry and against `research/refocus/status/<slug>.yaml` (rows, page_facts, factcheck block); a
script compared cite ids, numbers and component counts before and after (results below); the brief's residue grep; a
guardrail scan (doses, commerce tokens from `config/commerce-tokens.json`, UK-only words, emergency numbers); links and
the eight legal-routes anchors (headings on `src/content/pages/en/legal-routes.mdx` produce all eight); validator.

Primary sources re-opened in this pass (all said what the page says):
- ClinicalTrials.gov API, records NCT07888595 (early phase 1, enrolling by invitation, US only; the topical serum lists
  epitalon among five peptides), NCT07505745 (China, recruiting, 120 estimated, primary completion 14 February 2027),
  NCT07531251 (phase 4 in the registry, 48 estimated; Calgary and Bristol recruiting; the one US site is named "Trial Not
  Offered in the U.S" and marked terminated), NCT06373731 (active, not recruiting; UK and US sites), NCT05162768
  (completed 4 December 2024; Sydney and Parkdale, Victoria), NCT03323749 (terminated 2020; Vancouver and Hamilton),
  NCT07275424 (SHAPE, phase 2a pilot, last verified December 2025), NCT06821100 (thymalfasin, Houston, recruiting); and
  the US-site query of `ctgov-elamipretide-us-sites-2026-10-26` (3 records, same three).
- Health Canada RA-81874 (WebFetch): list includes epitalon, MOTS-C, NAD+ and SS-31, not Semax, Selank, thymosin
  alpha-1 or AOD-9604; "In Canada, peptides are generally regulated as prescription drugs"; published 2026-04-09.
- FSA "Importing food supplements and health foods": the Semax paragraph (MHRA: a medicine, not a food; sale only with a
  marketing authorisation), word for word.
- WADA statement of 22 April 2013 (browser): AOD-9604 not approved by any government health authority, so S0 of the
  2013 List.
- NSW Health S4D page (WebFetch): AOD-9604 (CAS No. 221231-10-3) is listed; possession prohibited unless authorised.
- TGA guidance of 12 August 2026 on NAD/NMN representations (browser): listed medicines "are not evaluated by the TGA
  prior to entry on the ARTG. Instead, sponsors certify ..."; NAD, NAD+ and NADH not permitted ingredients; NMN permitted
  from 10 December 2025; no permitted indication references NAD or NMN ("boost NAD+ levels" not permitted).
- TGA media release of 10 June 2026 (browser): unapproved peptide products added to the TGA's priority focus areas.
- Sport Integrity Australia peptides page (browser): MOTS-C among the examples of unapproved peptides prohibited in sport.
- 21 U.S.C. § 321(ff) on Cornell LII (curl): "intended for ingestion".
- Reporting links: the Canada.ca side-effect page ("Anyone can report a side effect to a health or cannabis product",
  WebFetch) and the TGA page "Report an adverse event or safety problem" (browser, last updated 2 September 2026) both
  load and say what the link text says; curl still times out on both hosts. FDA MedWatch and Yellow Card were checked by
  the third run.

Fixes made in place (8):
1. **mots-c, What-it-is Compare row label** "Lab-made for sale?" → "Made in a lab and sold?". "for sale" is a commerce
   token (`config/commerce-tokens.json`; CONTENT-GUIDE §1: no commerce words in any label). Pre-existing, but on a page
   this group owns. The validator checks Compare titles, not table row labels, so it did not flag it (suggestion for the
   validator owner: also scan the first cell of Compare rows).
2. **mots-c, Canada bullet**: "It seized MOTS-c from a clinic and from sellers in 2025" overstated the count: MOTS-c is in
   RA-77218 (a Calgary clinic) and RA-81403 (a Vancouver gym whose products were sold online) only, not in RA-77807 (the
   online seller). Now "In 2025 it seized MOTS-c from a clinic and from a gym that sold peptides online, and it named
   MOTS-c in its April 2026 warning ..." (`ca-hc-recalls-search-status-d-2026-10-23`, `ca-hc-2026-04-think-twice-peptides`).
3. **mots-c, routes fold**: "ClinicalTrials.gov lists no MOTS-c trial with a site in these four countries" was not quite
   right: `ctgov-search-status-d-2026-10-23` records MOTS-c studies that measure the body's own MOTS-c, one of them in
   the US. Now "no trial that gives MOTS-c to people at a site in these four countries" (the intervention search in
   `ctgov-us-uk-peptide-search-2026-10-23` found 0 in the US and the UK; the status search found no CA, UK or AU site).
4. **ss-31, regulatory Compare, US trial cell**: "The Barth syndrome trial's US site is marked as closed" → "The Barth
   syndrome trial says it is not offered in the US." The registry's one US location is literally named "Trial Not Offered
   in the U.S" (status terminated); clearer for US readers. The note of `ctgov-elamipretide-us-sites-2026-10-26` now
   records the facility name.
5. **nad-precursors, What-it-is Compare, NR and NMN cells**: "In the US, the UK and Australia, under food or supplement
   rules" cited a Great Britain-only source (`uk-fsa-gb-novel-96-nr-chloride`) and put Australia's listed medicines under
   "food or supplement rules", which they are not (they are therapeutic goods). Now "In the US and Great Britain under
   food or supplement rules, and in Australia in listed medicines"; NMN: "In US supplements and Australian listed
   medicines, with conditions. Not in Great Britain." Same sources.
6. **nad-precursors, fold "Why the category confusion matters" and the ProductCheck extra line**: "Supplement rules cover
   only what is swallowed" / "Rules for supplements cover only what you swallow" was too broad for Canada, where natural
   health products include creams and other topical products; the cited NHPR Schedule 2 item 5 excludes only what is
   "administered by puncturing the dermis". Now "Supplement rules do not cover injections or drips", which all four
   countries' cited rules support (`usc-21-321`, `ca-nhpr-schedule-2`, `au-permissible-ingredients-determination-2026-3`).
7. **nad-precursors, Australia bullet**: "The TGA says products that refer to NAD+ or NMN and are not in its register are
   likely to break the law" dropped the TGA's condition. Now "... supplying or advertising a product that refers to NAD+
   or NMN is likely to break the law if the product is not in its register and not exempt" (`au-tga-2025-04-nad-nmn-safety-alert`:
   "not included in the ARTG nor exempted or otherwise authorised, you are likely breaching the law").
8. **aod-9604, Australian history**: "From 1 June 2015 the Poisons Standard lists AOD-9604 ..." implied every edition
   since was read; the status fact-check (change 1) says only the June 2015 and October 2026 editions were read. Now "The
   Poisons Standard first listed AOD-9604 as a prescription-only medicine (Schedule 4) in the edition in force from
   1 June 2015"; the next sentence ("still there in the October 2026 edition") is unchanged.

Checked and left as written: every other changed sentence on the eight pages (status rows and page_facts match the
status files; Health Canada seizure wording per advisory: epitalon RA-77218/77807/81403/81874, Semax RA-77807, Selank
RA-77218/77807, thymosin alpha-1 RA-77218/77807/81403, AOD-9604 RA-77807/81403, SS-31 RA-77807/81403/81874, NAD+
RA-78029/81874), the thymosin alpha-1 TGA 2020 infringement notices and 2014 Zadaxin trial, the AOD-9604 history (ACC
February 2013 wording, ANZCTR 2005 registration and 12 Australian postcodes, 21 February 2007 announcement, 2014
consultation, Victoria s 36B, NSW S4D), the SS-31 sites and dates, and the NAD+ Australian, Canadian and UK facts. Data
files: UK, CA and AU rows match the status files; EU, NL, DE and BE rows intact; no data change in this pass.

No-loss check (script over `<Cite id>`, `source=`, `extraSources=` and `sources: [...]`, before vs after): the removed
ids per page are exactly those in section 4's table (all European framing and in the manifest, plus the
`fda-grn-635-nicotinamide-riboside` swap); this pass added and removed no cite id. Numbers that disappeared are only
European ones (AMG § 21, the 1964 Belgian Act, EU/3/02/110, EU orphan years 2021 and 2022, Regulation 2020/16 and
178/2002) and the old "22 October 2026" checked-date (now "22 and 23 October 2026"). Component counts: equal except
InDetail (the new country and routes folds) and ss-31 Compare 1 → 2. Every study entry, KeyNumber, IconArray, TimeStrip,
`<Q>` and stop-now list is unchanged.

Residue: the brief's grep over the eleven files gives only the known false positives ("Canada" for `nada\b`, "separate"
and "Separately" for `epar`). Two `residue-ok` markers, both on regulator or agency evidence: thymosin-alpha-1 ("Eastern
Europe" in the maker's list of approvals as quoted in the FDA's 2024 briefing; same-line marker, which
`scripts/lib/residue.ts` accepts) and nad-precursors (EFSA's NR safety assessment). Guardrails: no doses (the only
amount is WADA's 100 mL infusion limit), no seller help, no emergency number ("call your local emergency number"), no
commerce token left in a heading or label, no UK-only words. Links: only routes from the brief; all eight
`/en/legal-routes/` anchors exist.

Validator after the fixes: 0 errors project-wide (`npx tsx scripts/validate-content.ts`), 0 errors with `--only` for each
edited slug and `en-compounds-e`; the warnings are the ones explained in section 5. Rendered on the dev server (started
for this check and stopped after): mots-c, nad-precursors, ss-31 and aod-9604 return 200, show the new text, and their
At-a-glance "Approved in" tiles still agree with the page text.

Open points added by this pass:
- The validator does not scan Compare table row labels for commerce tokens (fix 1 was found by hand).
- `vanhee-2014-aod9604-seized`'s paper title ("... seized by the Belgian authorities ...") is printed in the AOD-9604
  reference list. It is a paper title and cannot be changed; the reviewer may accept it as evidence context.
- Canada NR: the research found one licensed oral NR natural health product (licence 80142882), but its record names the
  company, so the page states the Canadian NR cell as unknown. Re-check the LNHPD with a neutral search record later.
