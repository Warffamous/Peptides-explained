# Refocus notes: compounds-b (tesamorelin, CJC-1295, ipamorelin, hexarelin), 24 October 2026

Group `compounds-b` of the English refocus (US, UK, Canada, Australia; notes for Ireland and New Zealand). Inputs:
`research/refocus-spec/content-brief.md`, `docs/CONTENT-GUIDE.md` (§1, §1a, §1b, §5), the fact-checked research
(`research/refocus/status/{tesamorelin,cjc-1295,ipamorelin,hexarelin}.yaml`, `australia-legal.md`, `canada-legal.md`,
`us-uk-routes.md`, each with its fact-check section) and `research/refocus-notes/merge.md` (lead decisions and
legal-review questions). An earlier run of this assignment was cut off; its unverified draft was reviewed line by line
against those inputs, kept where it held, and corrected where listed below.

## Files

| File | What |
|---|---|
| `src/content/compounds/en/tesamorelin.mdx` | rewritten without European framing (below) |
| `src/content/compounds/en/cjc-1295.mdx` | same |
| `src/content/compounds/en/ipamorelin.mdx` | same |
| `src/content/compounds/en/hexarelin.mdx` | same |
| `src/i18n/en/glossary/tesamorelin.json` | `chmp` entry removed (manifest) |
| `src/i18n/en/glossary/ipamorelin.json` | `macimorelin` and `anamorelin` definitions without EU framing (manifest) |
| `src/i18n/en/glossary/cjc-1295.json` | unchanged (no European term) |
| `src/data/sources/en-compounds-b.yaml` | one new source, `fda-drugsatfda-macrilen` |
| `src/data/compounds/{tesamorelin,cjc-1295,ipamorelin,hexarelin}.yaml` | **not changed by this group** (the merge's rows were checked against the status files; no error found) |
| `research/for-nl-site/MANIFEST-compounds-b.md` | everything cut, with old line numbers and the cite ids that left |

Not touched: `src/data/media.yaml`, `heroes.yaml`, `src/i18n/en/media.json`, `config/link-allowlist.json` (no new host
needed: Drugs@FDA is on `www.accessdata.fda.gov`, already allowlisted).

## What changed, per page

Common to all four pages:
- Frontmatter: `regulatory_notes` only for US, UK, CA, AU and WADA (EU/NL/DE/BE texts in the manifest); new CA and
  AU notes from the data rows and status files; `summary`, `description`, `lede` and Leads without "Europe"/"EU".
- The regulatory Compare ("Netherlands and the EU vs United States") is now one row per country, US, UK, Canada,
  Australia, with "Approved as a medicine?" and "Legal to sell or supply?" columns, each cell sourced from the row's
  sources or the status file. Sport moved to a sentence under the grid (WADA row unchanged).
- The fold "The European Union, the Netherlands, Germany, Belgium and the United Kingdom" became "The UK, Canada and
  Australia" (UK, Canada, Australia subsections); the US fold stays where it was. "US decisions do not apply here" now
  names the UK, Canada and Australia.
- Harm reduction: the legal-routes paragraph is country-neutral and links all eight anchors on `/en/legal-routes/`
  (`#prescription`, `#off-label`, `#us-compounding`, `#uk-specials`, `#canada-special-access`, `#australia-sas`,
  `#personal-import`, `#trials`). Following CONTENT-GUIDE §1b (Canada caution: describe the SAP neutrally, on the
  routes page only), the routes are **named and linked, not described**; the earlier draft's one-line descriptions
  of the UK specials, the SAP and the SAS were removed (their cite ids `uk-hmr-2012-reg-167`, `mhra-specials-guidance`,
  `ca-hc-sap-drugs`, `au-tga-sas-individual-patients` were draft additions, not in the nl-source pages, except
  `uk-hmr-2012-reg-167`/`mhra-specials-guidance`, which stay in the tesamorelin UK fold). Same wording as the other
  refocused compound pages ("Each has strict conditions, and none turns an unapproved product into an approved one").
- "Report side effects" names and links FDA MedWatch, the Yellow Card scheme, Health Canada's Canada Vigilance
  Program and the TGA, plus one sentence linking `/en/legal/ireland-and-new-zealand/` (added in this run).
- Science sections (mechanism, evidence, unknowns, risks) unchanged except where a European name was the frame.

### Tesamorelin
- Status everywhere as in the data: US approved (Egrifta 10 November 2010; Egrifta SV name July 2019; Egrifta WR
  25 March 2025); **Canada approved 29 April 2014 (2 mg vial), 1 mg vial 27 March 2015, sold from 23 June 2015,
  not sold since 30 September 2022** (DIN cancelled that day; the never-sold 2 mg DIN cancelled 13 July 2023); not
  approved in the UK or Australia. Summary, lede, `grade_rationale.human_clinical`, both Compares, the callout "Why
  this page looks different", the regulatory Lead and the harm-reduction opening say the same, consistent with the
  derived tile ("Approved in the US. Canada approved it, but it is no longer sold there. Not approved in the UK or
  Australia.") and the fact sheet ("US since 2010; Canada 2014–2022").
- **"Business reasons" is not stated** (lead decision, merge.md 3.2 and 12.4: the company's Drug Shortages Canada report
  could be read only in an Internet Archive copy). The page says that both cancellations followed the company's own
  notice that it had stopped selling, that they were not a safety action, and that Health Canada's recalls and
  alerts database lists none for Egrifta. This run removed the draft's clause "Health Canada's records do not give
  the company's reason" (the company's mandatory discontinuation report, posted on the site designated under
  C.01.014.8, does give one, so the clause was not safe).
- Canada review history (negative first decision, notice of non-compliance-withdrawal of 1 March 2013, external
  panel 23 August 2013, approval with the IGF-1 SDS > 2 stopping rule) in "Three regulators, the same trials,
  different answers" (was "Two regulators").
- EMA committee doubts kept as evidence with `residue-ok` markers (mechanism step 7, diagram cite, unknowns, the
  "Three regulators" fold, eyes, checks); the UK fold explains, as history (marked), that the 2012 EU-wide
  application would have covered the UK, and that whether a separate UK application was made is not known.
- Australia: not on the ARTG, no TGA record of an application; **no schedule stated**: "may be covered, without
  being named, by the group entry for growth hormone releasing hormones (Schedule 4, Appendix D) … not confirmed";
  the GHRH import-permit rule is likewise "no official document says whether this covers tesamorelin".
- Artsenverklaring/IGJ, AMG § 73, Belgian art. 6quater and Lareb removed (manifest).
- This run: the "Contents" Compare date now "22 and 23 October 2026"; "no manufacturer may sell one" (was "none
  may be sold", too broad: the DPD footnote allows the sale of remaining stock until lot expiry after a non-safety
  cancellation); the diagram's step 7 now reads "No trial measured this" instead of "Not tested", so that no line
  can be read as "tesamorelin was not tested in people"; harm-reduction trial sentence added (no open trial with a
  UK, Canadian or Australian site).

### CJC-1295
- Four-country grid; "The UK, Canada and Australia" fold: UK (MHRA search, GOV.UK, HMR reg. 46, not a controlled
  drug); Canada (never authorised; not on the PDL; Health Canada's position that "peptides are generally regulated as
  prescription drugs", written as its position; seized; DIN rule; personal import; developer in Montreal); Australia
  (not on the ARTG; the Poisons Standard names "CJC-1295" in Schedule 4 and Appendix D since 1 June 2015, with the CAS
  caveat: the CAS number is the form without DAC, so the route by which the DAC molecule is caught is a legal-review
  question; NSW S4D list and Victoria's any-S4 rule; import permit not settled; TGA notices of April, June and
  August 2026). Sport Integrity Australia names it among peptides prohibited in sport.
- No AU `schedule` field (lead's decision); the regulatory note quotes the entry name "'CJC-1295'" and points to the
  page for the caveat.
- This run: restored "with sites that included Germany" in the trial history (a trial fact from the EU trial register,
  `euctr-2005-003797-25`, kept as evidence with a marker); the Canada cell now says "Health Canada says unauthorised
  drug products are illegal" (RA-81874's wording) instead of "calls unauthorised peptide products illegal".

### Ipamorelin
- Same structure. Macimorelin: the EU authorisation (Ghryvelin) replaced by the US approval (Macrilen, 20 December
  2017, a single oral dose test for adult growth hormone deficiency; now listed as discontinued), new source
  `fda-drugsatfda-macrilen`. The anamorelin refusal (EMA, 2017) stays as evidence (marked).
- July 2026 PCAC bullets follow CONTENT-GUIDE §1 element 5 (none of the six recommended peptides is approved in the
  US, the UK, Canada or Australia; Semax registered in Russia; a US listing changes nothing outside the US).
- This run: Canada enforcement sentence corrected to what `ca-hc-recalls-database` supports ("an online seller, a
  wellness clinic, a fitness business and two shops; some products seized from the shops carried falsified DINs"; the
  draft said "online sellers" and "false"); trials sentence made exact (ClinicalTrials.gov: no open trial; the only
  active record, US, is observational; ANZCTR: none); the laboratories "in Denmark, Germany and Norway" restored in
  the evidence table and the product-quality fold (evidence, marked; the draft had "three countries").

### Hexarelin
- Same structure; the UK row is new in the data (merge). Canada: not authorised (NOC database since 1994), not on
  the PDL, listed in Health Canada's August 2025 seizure advisory; Australia: Schedule 4 and Appendix D since
  1 June 2015, NSW S4D list, Victoria, import permit not settled, Personal Importation Scheme.
- New fold "Legal routes, and reporting side effects" (the old page had none).
- This run: the `description` (171 characters, a schema error in the draft) restored to the nl-source text, which had
  no European framing; import sentence gets the same "not settled" caveat as ipamorelin (legal-review question 6);
  ClinicalTrials.gov sentence also cites `ctgov-search-status-b-2026-10-23`.

### Third pass (the "try again" run of this assignment)

The second run's draft (committed in the checkpoint `1b7304f`) was reviewed again against the brief, the status
files, the merge notes and the registered source notes; the no-loss check was re-run (same result, table below). It
held; these small corrections were made:
- **Australia, state law (CJC-1295, ipamorelin, hexarelin).** "The other states and territories were not checked"
  was not exact: `australia-legal.md` §5 also checked Queensland. Now "Other states and territories have their own
  rules, and we did not check them all" (the wording semaglutide and tirzepatide use). The NSW sentence now adds that
  the peptide stays on the S4D list under the new NSW law from 5 November 2026 (`au-nsw-health-s4d-2026`, whose
  2026 list names CJC-1295, hexarelin and ipamorelin), so the page does not go stale on 5 November.
- **CJC-1295, Australia.** "either way the result would be Schedule 4 with Appendix D" could be read as stating the
  schedule of the DAC molecule as fact; now "If either applies, the result is the same: Schedule 4 and Appendix D."
  The AU regulatory note's "(see the page)" (the note is shown on the page itself) became "whether the entry covers
  the version with DAC is not confirmed".
- **Ipamorelin, Canada.** "products sold as ipamorelin by … a wellness clinic" became "ipamorelin products seized
  from …": RA-77218 describes products seized from the clinic, not sold by it (`ca-hc-recalls-database` note).
- **Ipamorelin, unknowns Lead.** "a jab under the skin" became "an injection under the skin" (no UK-only words).
- **CJC-1295 and ipamorelin, first Compare.** Detail "checked on 22 October 2026" became "22 and 23 October 2026":
  the "Approved as a medicine?" row cites the UK, Canadian and Australian searches of 23 October.
- **Tesamorelin, "Three regulators".** "Its first decision was negative: in 2013 it found the file did not meet the
  requirements" put the first (undated) notice of non-compliance in 2013. Now: the first decision was negative; in
  March 2013, after the company's reply, three of the four major objections remained (benefit-risk, the indication,
  raised IGF-1), as the SBD records (`ca-sbd-egrifta` note: NON, then NON/W of 1 March 2013 "with three of the four
  major objections still remaining").
- Re-checked with curl on this run: the Drugs@FDA overview for NDA 205598 (HTTP 200; MACRILEN, "Discontinued",
  ORIG-1 12/20/2017), the openFDA record (last updated 2026-10-23; S-005 approved 2026-07-23) and both labels (2017
  and 2026: "indicated for the diagnosis of adult growth hormone deficiency", "a single oral dose"). The
  `fda-drugsatfda-macrilen` entry stands as written.
- **Not changed, on purpose.** "Business reasons" stays out of every tesamorelin sentence (lead decision, merge.md
  3.2; the company's report was read only in an archive copy and its source was dropped by the merge); the pages say
  only that both cancellations followed the company's notice that it had stopped selling and were not a safety
  action. No new Ireland sentence: the status files did not search Ireland, so the pages only link the notes page.
  The four inline reporting links stay (same pattern on all 21 compound pages, including the style reference).
- The data files were checked again row by row against the status files: no error found, not edited.

## New facts and their sources

All ids except `fda-drugsatfda-macrilen` were registered by the research and the merge (`src/data/sources/refocus-*.yaml`),
fact-checked there, and their notes were read for this run against each sentence.

| Fact (page) | Source ids |
|---|---|
| Canada: NOC 29 April 2014 (2 mg) and 27 March 2015 (1 mg) (T) | ca-noc-egrifta, ca-sbd-egrifta |
| Canada: first sale 23 June 2015; DIN 02438712 cancelled post market 30 September 2022; DIN 02423677 cancelled pre market 13 July 2023; both at the manufacturer's notice, C.01.014.6(1)(a) (T) | ca-sbd-egrifta, ca-dpd-egrifta-din-02438712, ca-dpd-egrifta-din-02423677, ca-food-and-drug-regulations |
| No recall or safety alert for Egrifta in Health Canada's database (T) | ca-hc-recalls-database (merge note: 'egrifta' returned no alert) |
| Canada's review: NON, NON/W 1 March 2013, reconsideration panel 23 August 2013, SDS > 2 stopping rule (US label 3) (T) | ca-sbd-egrifta, ca-pm-egrifta-2015 |
| No tesamorelin DIN since 13 July 2023; no manufacturer may sell a drug without a DIN (T, C, I, H) | ca-dpd-extract-search-status-b-2026-10-23, ca-food-and-drug-regulations |
| Tesamorelin on the PDL since 25 April 2014; CJC-1295, ipamorelin, hexarelin not on it (T, C, I, H) | ca-pdl-human |
| Health Canada seizure advisories naming each peptide (RA-77807 1 Aug 2025, RA-81403 24 Dec 2025 for tesamorelin; RA-81874 for CJC-1295 and ipamorelin; RA-77218, RA-77807, RA-81403, RA-81404 for ipamorelin; RA-77807 for hexarelin) (T, C, I, H) | ca-hc-recalls-database, ca-hc-2026-04-think-twice-peptides |
| "peptides are generally regulated as prescription drugs"; unauthorised drug products "are illegal"; RUO label does not make them legal (C, I, H) | ca-hc-2026-04-think-twice-peptides, ca-hc-recalls-database |
| Residents generally may not bring prescription drugs into Canada, by hand or mail (T, C, I) | ca-hc-gui-0116-personal-import |
| Not on the ARTG (all four); no TGA record of a tesamorelin application (T) | au-artg-search-status-b-2026-10-23, au-tga-search-status-b-2026-10-23 |
| Peptide products must be on the ARTG before supply (T, H) | au-tga-how-we-regulate-peptides |
| Poisons Standard: CJC-1295, ipamorelin, hexarelin in Schedule 4 and Appendix D since 1 June 2015; tesamorelin not named (GHRH group entry, our reading) (T, C, I, H) | au-poisons-standard-2026-10, au-poisons-standard-2015-06, au-poisons-standard-2015-02, au-tga-2014-09-scheduling-consultation |
| TGA advertising guidance names "Ipamorelin" and "CJC 1295" as prescription medicines (C, I) | au-tga-2026-06-advertising-prescription-medicines-guidance |
| CJC-1295 entry's CAS is the form without DAC (C) | au-poisons-standard-2026-10, pubchem-cjc-1295-without-dac |
| NSW S4D list includes CJC-1295, ipamorelin, hexarelin, also the list for the new law from 5 November 2026; Victoria: any S4 without authority is an offence; not every other state checked (C, I, H) | au-nsw-health-s4d, au-nsw-health-s4d-2026, au-vic-dpcs-act-1981 |
| GHRH import permit (Customs Sch. 7A, ODC): may apply to tesamorelin and CJC-1295 (not named); ipamorelin and hexarelin not named, broader entry not settled (T, C, I, H) | au-customs-prohibited-imports-regs, au-odc-growth-hormones-import-permit |
| Personal Importation Scheme: prescription needed for a prescription-only medicine; coded or unlabelled peptides not released; RUO label does not make import lawful (C, I, H) | au-tga-personal-importation-scheme, au-tga-2026-04-peptide-responsibilities |
| TGA April 2026 advisory, June 2026 joint statement (liver damage, severe allergic reactions, inflammation), August 2026 NSW seizure incl. CJC-1295 (C) | au-tga-2026-04-peptide-responsibilities, au-tga-2026-06-cmo-peptide-statement, au-tga-2026-08-peptide-seizure |
| Sport Integrity Australia names CJC-1295 and ipamorelin among peptides prohibited in sport (C, I) | au-sia-peptides |
| MHRA: no product for tesamorelin (also Egrifta, TH9507), CJC-1295, ipamorelin (also NNC 26-0161), hexarelin/examorelin; GOV.UK: no MHRA item names them (T, C, I, H) | mhra-products-search-tesamorelin, mhra-products-search-cjc-1295-ipamorelin, mhra-products-search-hexarelin, uk-govuk-search-status-b-2026-10-23 |
| Not controlled under the Misuse of Drugs Act (T, C, I, H) | uk-mda-1971-sch-2 |
| The 2012 EU-wide application would have covered the UK (exit day 31 January 2020); whether a separate UK application existed is not known (T) | ema-egrifta-withdrawal, ie-hpra-licensing-procedures, uk-euwa-2018-s20-exit-day, mhra-products-search-tesamorelin |
| FDA's 2024 review: no approved CJC-1295 product in the UK, Canada, Australia (C) | fda-pcac-2024-cjc1295-briefing |
| Trials: no open trial with a UK, Canadian or Australian site; ANZCTR none; ipamorelin's only active record is observational (T, C, I, H) | ctgov-search-status-b-2026-10-23, au-anzctr-search-status-b-2026-10-23, ctgov-nct07717866 |
| Off-label: FDA has not judged the unapproved use (T, C, I, H) | fda-off-label-use |
| Macimorelin (Macrilen) approved 20 December 2017, single oral dose test for adult GHD, now discontinued (I) | fda-drugsatfda-macrilen (new; Drugs@FDA overview and openFDA read 24 October 2026; 2026 label read) |
| Reporting routes (T, C, I, H) | fda-medwatch, mhra-yellow-card, ca-hc-medeffect-reporting, ca-hc-canada-vigilance, au-tga-report-adverse-event |

(T = tesamorelin, C = CJC-1295, I = ipamorelin, H = hexarelin.)

URL spot-check, 24 October 2026 (curl): HTTP 200 for the SBD (dhpp.hpfb-dgpsa.ca), the recalls index and RA-81874,
the Food and Drug Regulations, the PDL, NSW Health S4D, the Customs regulations (legislation.gov.au), the GOV.UK
search API, the ClinicalTrials.gov API, MedWatch, the Yellow Card site, EUWA s. 20 and the Egrifta monograph PDF.
No answer to curl (timeouts or bot screens, as the research recorded): the ODC entry, two canada.ca pages (Canada
Vigilance reporting, SAP) and sportintegrity.gov.au; all were read in a browser by the research and its fact-check on
23–24 October 2026. tga.gov.au does not answer curl from this machine (research note); not re-tested.

## Removed sections

All in `research/for-nl-site/MANIFEST-compounds-b.md`: the EU/NL/DE/BE regulatory notes (with their text), the
"Netherlands and the EU vs United States" grids, the European folds (EU, Netherlands, Germany, Belgium), the Dutch
named-patient route (artsenverklaring, IGJ), German and Belgian import routes, the German Anti-Doping Act mentions,
Lareb reporting, the EU authorisation of macimorelin, the "Europe"/"EU" phrases in summaries, leads and descriptions,
and the glossary entry CHMP.

## No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working copy)

Script: every `<Cite id>`, `source=`/`sources=` attribute and frontmatter `sources: [...]` list.

| Page | Ids that left the page | All European framing? |
|---|---|---|
| tesamorelin | be-medicines-law-1964, be-medicines-law-1964-art-6quater, cbg-geneesmiddeleninformatiebank, de-amg-21, de-amg-73, de-antidopg-anlage, ema-medicines-json, igj-leveren-op-artsenverklaring, lareb-home, nl-gmw-art-40-handelsvergunning, nl-regeling-gnw-art-3-17 | yes, each listed in the manifest |
| cjc-1295 | be-medicines-law-1964, cbg-geneesmiddeleninformatiebank, de-amg-21, de-antidopg-2, de-antidopg-anlage, de-dmmv-2023, ema-medicines-json, lareb-home, nl-geneesmiddelenwet, nl-gmw-art-40-handelsvergunning | yes |
| ipamorelin | be-medicines-law-1964, cbg-geneesmiddeleninformatiebank, de-amg-21, de-antidopg-2, de-antidopg-anlage, ema-epar-ghryvelin, ema-medicines-json, ema-medicines-search, nl-geneesmiddelenwet, nl-gmw-art-1-geneesmiddel, nl-gmw-art-40-handelsvergunning | yes (ema-epar-ghryvelin = the EU authorisation of macimorelin, replaced by the FDA approval) |
| hexarelin | cbg-geneesmiddeleninformatiebank, de-antidopg-2, de-antidopg-anlage, ema-medicines-json, nl-gmw-art-40-handelsvergunning | yes |

Every other id of the nl-source pages is still cited (studies, labels, FDA documents, WADA, the EMA evidence ids
`ema-egrifta-withdrawal` and `ema-epar-adlumiz`, the EU trial register `euctr-2005-003797-25`). No `<Claim>`, study,
number or caveat outside the European framing was dropped. Every id now cited exists in `src/data/sources/`.
The data files keep every row, product, study and source (EU/NL/DE/BE rows byte-identical to nl-source).

## Validator and residue

- `npx tsx scripts/validate-content.ts --only <tesamorelin|cjc-1295|ipamorelin|hexarelin|glossary/…|en-compounds-b>`:
  **0 errors**. Warnings: on each page, 4 "inline outbound link … prefer <Cite id>" for the four reporting links
  (MedWatch, Yellow Card, Canada Vigilance, TGA). They are kept on purpose: the brief asks for the reporting
  routes to be "linked", the hosts are allowlisted, the same sentence carries the `<Cite>` of the registered
  sources, and the other refocused compound pages do the same. hexarelin also: "no regulatory row for BE (shown on
  preview locale nl)", a Dutch-site data gap recorded by the merge (not for English). The "no DOI or PMID" warnings
  belong to other groups' source files.
- `npx tsx scripts/check-locale-residue.ts --details --only <file>`: **0 hits** in all owned files.
- The brief's grep on the owned files: the only hits are (a) "nada\b" inside "Canada" (false positive of the pattern,
  meant for the German NADA), (b) "epar" inside "separate(ly)", (c) the cite id `ema-egrifta-withdrawal` / `ema-epar-adlumiz`
  (ids, not text), (d) the `residue-ok` marker lines themselves and the marked lines (EMA evidence; "European Union"
  in the marked UK-history sentence), and (e) the source note of `fda-drugsatfda-macrilen`, which names the id it
  replaces (`ema-epar-ghryvelin`; notes are not rendered). Allowed, marked lines only.
- Third pass: validator again 0 errors on all owned files (pages, data files, glossary files, sources file); the
  same four reporting-link warnings per page and the hexarelin BE warning. `check-locale-residue --only` on every owned
  file: 0 hits. A scratch build (`astro build --outDir <scratchpad>`, nothing written to `dist/`) and
  `check-locale-residue --dist`: the At-a-glance tiles, fact sheets and status tables render as the notes say
  (tesamorelin: "Only in the US. Approved in the US. Canada approved it, but it is no longer sold there. Not approved
  in the UK or Australia."; "Approved in: US since 2010; Canada 2014–2022"). The built pages still carry Dutch/EU
  words, **all from shared files this group does not own**: `src/i18n/en/product-check.json` ("In the Netherlands,
  your doctor must keep what you say private"; "In the EU, a medicine must show all four"), and glossary tooltips
  from `src/i18n/en/glossary/guides.json` / `final-qa.json` (the "regulator" entry: "the EMA in the EU, the CBG in the
  Netherlands"; the prescription-only entry: "In the Netherlands, a pharmacist may not hand it over without one"; the
  DSIP entry: "not approved as a medicine in the EU, the UK or the US"), plus the cited sources that `<ProductCheck />`
  brings (IGJ, KNMG, Thuisarts). For the owners of those files.

## Open questions for the medical and legal reviewers

1. **Tesamorelin, Canada `since` date** (research UNRESOLVED; lead chose 30 September 2022, the end of marketing). The
   page says both dates. The page does not give the company's reason (the "business reasons" in the company's
   discontinuation report could be read only in an archive copy); re-check `ca-dsc-egrifta-discontinuation-170025`
   when the live page answers.
2. **Tesamorelin, Australia:** whether the Poisons Standard's GHRH group entry (Schedule 4, Appendix D item 18) and
   Customs Schedule 7A item 3 ("growth hormone releasing hormones (somatorelin and synthetic analogues)") cover it.
   The page writes "may be covered … not confirmed". (The status file and the earlier data comment call the Customs
   item "item 4"; australia-legal.md's fact-check corrected it to item 3. No page states the item number.)
3. **CJC-1295, Australia:** the entry's CAS number is the form without DAC; is the DAC molecule caught as a derivative
   or by the GHRH group entry (either gives S4 + Appendix D)? Customs Sch. 7A as for tesamorelin.
4. **Ipamorelin and hexarelin, Australia:** can Customs Schedule 7A item 1A/1 ("anabolic or androgenic substances",
   undefined) reach a growth hormone secretagogue? Pages say "not named … whether a broader entry could still apply
   is not settled".
5. **Canada:** the legal basis of Health Canada's "peptides are generally regulated as prescription drugs" for
   peptides not on the PDL (CJC-1295, ipamorelin, hexarelin). Pages present it as Health Canada's position and rest
   the legal point on the DIN rule (C.01.014) and the seizures.
6. **Hexarelin and Canada "ever":** the NOC extract begins in 1994 and hexarelin was studied in people from 1994; the
   page says "approvals since 1994".
7. **FDA warning letters (US):** two August 2026 letters (733652, 734884) list tesamorelin-ipamorelin blends, and five
   name tesamorelin, but the registered index note (`fda-warning-letters-index`, legal-b.yaml, not this group's
   file) names only 735067. The tesamorelin page cites the index for "In 2026 the FDA warned online sellers"; the
   ipamorelin page does not mention the blends. The owner of legal-b.yaml could add the four letters to the note.
8. **Medical:** the "Approved for" fact-sheet row reads "Extra belly fat in adults with HIV", the use shared by the US
   label and the Canadian monograph (the Canadian one adds "treatment-experienced", "when diet and exercise have not
   worked"; in the `egrifta-ca` indication line).
9. **Lead/UI:** the hard-coded "statuses were checked on …" lines under the four status tables now give both dates
   (US and sport 22 October, UK/CA/AU 23 October; hexarelin all 23 October). The schedule string ("Schedule S4",
   "Schedule Prescription Drug List") is the UI group's (merge.md 10).
10. **Legal (Canada):** every page links `#canada-special-access` in the neutral list of routes that the brief
   requires ("Each has strict conditions, and none turns an unapproved product into an approved one"), and says that
   Health Canada has not authorised the product. Whether linking the SAP anchor from a page about an unauthorised
   product could be read under Health Canada's 2023 advertising guidance as suggesting it is available through the
   SAP is a question for the legal reviewer (CONTENT-GUIDE §1).

## Adversarial fact-check (fact-checker run, 26 October 2026; workflow date 24 October 2026)

Method: every sentence that differs from `git show nl-source-2026-10-23:<path>` (word diff of all four pages) was
checked against the note of each cited source (`src/data/sources/*.yaml`) and against the status files and their
"Fact-check (independent)" sections; the not-authorised claims against `research/refocus/status/<slug>.yaml`
(rows, notes, UNRESOLVED points) and the lead decisions in `merge.md` (3.2, 3.3, 12.4). Re-fetched live on this run:
openFDA `drugsfda` for NDA 205598 (MACRILEN, "Discontinued"; ORIG-1 approved 2017-12-20, S-003 2019-11-27, S-005
2026-07-23; data last updated 2026-10-23); Health Canada RA-81874 ("In Canada, peptides are generally regulated as
prescription drugs", "Unauthorized drug products are illegal in Canada …", the research-use labelling sentence, and
the list naming CJC-1295 and ipamorelin: all confirmed); the two NSW Health S4D pages, current and from 5 November
2026 (both list CJC-1295, hexarelin and ipamorelin; "Current as at" 9 and 7 July 2026); ClinicalTrials.gov API v2
(tesamorelin: open records only NCT07481734 China, NCT03150511 and NCT06554717 US; CJC-1295: one closed record;
ipamorelin: NCT07717866, observational, active not recruiting, US; hexarelin and examorelin: none); GOV.UK search API
(tesamorelin, egrifta, ipamorelin, hexarelin, examorelin, "CJC-1295": total 0). The Drug Shortages Canada report
170025 still answers HTTP 403 (bot check), so "business reasons" stays out (lead decision unchanged).

### Fixed in place

1. **Tesamorelin, Canada: an UNRESOLVED point was stated as fact.** The status file says it is not established
   whether Egrifta stock was still sold or dispensed in Canada after 30 September 2022 (the DPD footnote allows
   remaining stock to be sold until lot expiry, here 31 January 2023): "Do not write that it was or was not". Five
   places did: `grade_rationale.human_clinical` ("it has not been sold there since 30 September 2022"), the first
   Compare ("it has not been sold there since 2022"), the callout "Why this page looks different" (same), the
   regulatory Compare's Canada cell ("Not sold since 30 September 2022") and the Canada fold ("Sales stopped on
   30 September 2022"). All now say what the SBD/PAAT and the DPD record: **the company stopped selling it** on
   30 September 2022 (in 2022). "No longer sold" (summary, Lead, harm reduction, derived tile) is true today and stays.
2. **Tesamorelin, harm reduction:** "In the UK, Canada and Australia no tesamorelin product is approved or sold now"
   implied it is not (or was never) approved in Canada; the NOC stands as the historical approval and the DINs are
   cancelled. Now: "In the UK and Australia no tesamorelin product is approved, and in Canada none is sold now."
3. **Tesamorelin, callout:** "a product without a licence in the other countries this site covers" was wrong for
   Canada (it was licensed). Now "a product that is not approved, or no longer sold, in the other countries …".
4. **Tesamorelin, UK history:** "after the European Medicines Agency's committee said it could not be approved"
   dropped "provisional" (`ema-egrifta-withdrawal`: the CHMP was "of the provisional opinion that Egrifta could not
   have been approved"). Now "gave its provisional view that it could not be approved". The `residue-ok` comment above
   it said "the only application that would have covered the UK", which the status fact-check had rejected as
   unsupported; the comment now reads "the 2012 EU-wide application, which would have covered the UK".
5. **Tesamorelin, "Three regulators":** "Both positions have a cost", after three regulators' answers, became "Each
   answer has a cost" (wording only).
6. **CJC-1295 and ipamorelin, Australia, import:** "The TGA will not release … peptides labelled only with codes, or
   without the active ingredient and strength" overstated and blurred the source (`au-tga-2026-04-peptide-responsibilities`:
   products identified only by codes "or those that do not clearly state the active ingredient, strength or dosage"
   cannot be assessed "and will not be considered for release"). Now "The TGA says it will not consider releasing
   imported peptides that are labelled only with codes, or that do not clearly state the active ingredient or its
   strength".
7. **Hexarelin, US cell:** "A new drug may not be sold without FDA approval" overstated 21 U.S.C. 355(a)
   (introduction into interstate commerce, `usc-21-355`). Now "may not be sold across state lines without FDA
   approval", as the retatrutide page says.
8. **CJC-1295, the 2006 trial (honest in both directions):** after the FDA's anecdotal "192 people had enrolled" the
   page now adds "the trial registry gives 120" (`ctgov-nct00267527`: enrolment 120, type not stated; the same in
   `ctgov-search-status-b-2026-10-23`). No other change to the science.
9. **Glossary `anamorelin` (ipamorelin.json):** the earlier run's replacement "In trials its effect on muscle was
   small" was looser than its source; now "In trials it added only a little lean body mass, and no effect on grip
   strength was shown" (`ema-epar-adlumiz`: "a marginal effect … on lean body mass", "no proven effect on hand grip
   strength").

### Checked and held (no change)

- Tesamorelin, Canada: NOC 15555 (29 April 2014, 2 mg), NOC 16731 (27 March 2015, 1 mg), first sale 23 June 2015, DIN
  02438712 cancelled post market 30 September 2022, DIN 02423677 cancelled pre market 13 July 2023, both at the
  manufacturer's notice (C.01.014.6(1)(a)); NON, then NON/W of 1 March 2013 "with three of the four major objections
  still remaining", reconsideration panel of external Canadian experts on 23 August 2013, the IGF-1 SDS > 2 stopping
  rule; PDL since 25 April 2014; no recall or alert for Egrifta; RA-77807 and RA-81403 name tesamorelin. All match
  `ca-sbd-egrifta`, `ca-noc-egrifta`, `ca-pm-egrifta-2015`, `ca-food-and-drug-regulations`, `ca-pdl-human`,
  `ca-hc-recalls-database`.
- Canada, personal import: GUI-0116 ("Generally, residents of Canada are not allowed to bring prescription drugs into
  Canada … whether you carry them across the border or have them delivered by mail or courier") supports the sentence.
- Australia: the Poisons Standard entries and dates (CJC-1295 with the CAS caveat; hexarelin; ipamorelin; the GHRH group
  entry for tesamorelin written as "may be covered … not confirmed"); Victoria s 36B(2); NSW S4D (both laws); Customs
  reg 5G and the ODC entry (written as "not settled" / "no official document says"); the Personal Importation Scheme;
  the TGA's April, June and August 2026 notices and its June 2026 advertising guidance; Sport Integrity Australia.
- UK: MHRA searches (with TH9507 and NNC 26-0161), GOV.UK (re-run), HMR regs 46 and 167, the MHRA specials guidance,
  MDA 1971 Sch. 2, EUWA s 20 and the HPRA central-procedure page.
- US: Macrilen (re-fetched); the PCAC 2024 votes; the July 2026 framing (CONTENT-GUIDE §1 element 5, all five elements
  on the ipamorelin page); the FDA briefing's "no approved products containing any form of CJC-1295" in Australia,
  Canada or the UK.
- Ipamorelin, Canada enforcement (online seller RA-77807, wellness clinic RA-77218, fitness business RA-81403, two shops
  RA-81404 with falsified DINs, all 2025) and hexarelin (RA-77807 only; not in RA-81874).
- Tesamorelin: no sentence says or implies that it was not tested in people (diagram step 7 "No trial measured
  this"; the only "never tested" is about an online vial).

### No-loss, residue, guardrails, links, validator

- No-loss re-run after the fixes (cite ids, `source(s)=`, frontmatter lists, `<Claim>`s, number tokens): the ids that
  left each page are exactly the European-framing ids in the table above and in the manifest; no `<Claim>` removed;
  the only number tokens lost are European (21 June 2012 EU withdrawal, AMG § 21 and § 73, the 1964 Belgian Act, the
  old sport cell "S2."). Manifest unchanged (nothing new cut).
- Residue: `check-locale-residue --only` 0 hits on all owned files. The brief's grep: only false positives
  ("canada"/"Canada" for `nada\b`, "separate" for `epar`, cite ids) and marked lines. Markers: the tesamorelin
  `residue-ok: EMA evidence` markers all sit on sentences about the EMA committee's assessment (evidence or history,
  never the reader's legal frame). Two markers sit on non-regulator evidence and are kept under "keep the science":
  CJC-1295's trial site ("sites that included Germany", from the EU trial register, `euctr-2005-003797-25`) and
  ipamorelin's forensic laboratories "in Denmark, Germany and Norway" (`gajda-2019-glycine-ghs`: Copenhagen;
  `krug-2018-black-market-gh`: Cologne and Oslo). Neither is European legal framing.
- Guardrails: no dose, schedule or reconstitution; the only amounts are the authorised product's vial strengths in
  regulatory history and laboratory values; no seller help; no emergency number ("call your local emergency number");
  commerce words only in body text ("sale, supply and possession", "on the order of a prescriber"), never in headings,
  labels or link texts; stop-now callouts not folded.
- Links: internal links only to the brief's routes; the eight `/en/legal-routes/` anchors match that page's headings
  (github-slugger: prescription, off-label, us-compounding, uk-specials, canada-special-access, australia-sas,
  personal-import, trials). Outbound hosts unchanged and allowlisted (validator).
- `npx tsx scripts/validate-content.ts --only` on every owned file: **0 errors**; warnings as before (4 inline
  reporting links per page; hexarelin "no BE row").

### Remaining for the reviewers (in addition to questions 1–10)

11. The derived fact-sheet row "Approved in: … Canada 2014–2022" (data `since: 2022-09-30`) can read as if the
    approval ended in 2022; the pages now say the company stopped selling it then. A UI/lead choice, not changed here.
12. The `fda-warning-letters-index` note (legal-b.yaml) still names only letter 735067; the tesamorelin page's
    "online sellers" (plural) rests on the five letters recorded in the status file (question 7).
