# Notes: compounds-a (English refocus): semaglutide, tirzepatide, retatrutide

Written 24 October 2026 (workflow date) for the fact-checker and the medical/legal reviewers. Files:
`src/content/compounds/en/{semaglutide,tirzepatide,retatrutide}.mdx`, `src/i18n/en/glossary/{semaglutide,tirzepatide,retatrutide}.json`,
`src/data/sources/en-compounds-a.yaml`; manifest `research/for-nl-site/MANIFEST-compounds-a.md`. The data files
`src/data/compounds/{semaglutide,tirzepatide,retatrutide}.yaml` were **not changed** (no error found; see "Data files").

## How this run started

An earlier run of this assignment was cut off. Its draft was committed in `1b7304f` ("first content groups drafted (not
yet fact-checked)"): the three pages, the two glossary edits and `en-compounds-a.yaml`; there was no manifest and no
notes file. This run reviewed that draft line by line against the content brief, the CONTENT-GUIDE and the fact-checked
research (`research/refocus/status/{semaglutide,tirzepatide,retatrutide}.yaml`, `canada-legal.md`, `australia-legal.md`,
`us-uk-routes.md`, `research/refocus-notes/merge.md`), kept what was right, fixed the rest and wrote the manifest and these
notes. Every country fact on the pages was checked against the status files' `page_facts` (with their fact-check
corrections) and against the source notes in `src/data/sources/refocus-*.yaml`.

## What changed per page (compared with `nl-source-2026-10-23`)

### Semaglutide
- Frontmatter: `summary[0]` (also the index card) "approved in the US, UK, Canada and Australia"; `grade_rationale.human_clinical`
  now US/UK/CA/AU dates; `regulatory_notes` for US, UK, CA, AU and WADA only (NL/EU/DE/BE notes in the manifest); new
  CA and AU notes. `description`, `lede`, `glance.main_risk`, `glance.facts` contain no EU framing; no fact row duplicates
  the derived "Approved in" row. Indications lines added by the merge kept as written.
- What it is: Compare rows re-sourced to FDA, MHRA, TGA and Health Canada warnings; products fold gives the approval
  dates in all four countries, Wegovy tablets (US and UK only), "Ozempic tablets" (US), Canada's generics.
- Unknowns: Zorginstituut items replaced by the trials' own durations, a PubMed search for stopping trials, and CADTH 2022.
- Regulatory: TimeStrip of the first approval in each of the four countries (plus Canada's generics); folds "The United
  States" and "The UK, Canada and Australia" (status, scheduling, compounding, import, possession, enforcement); new fold
  "Who pays: cost and coverage in each country" (replaces the Dutch Bijlage 2 / Zorginstituut text).
- Risks: "EU product information" became "the Wegovy product information assessed by the EMA" (marked); this run
  restored the PRAC's aspiration conclusion (no causal link established, but a warning asked for), which had been
  dropped with the EU fold (`ema-prac-2024-07-aspiration`, marked as EMA evidence).
- Harm reduction: country-neutral legal route linking `#prescription`, `#off-label`, `#us-compounding`,
  `#personal-import`, `#trials`, and saying why `#uk-specials`, `#canada-special-access`, `#australia-sas` do not fit an
  approved medicine; the four reporting routes, linked; MTC/MEN 2 line now cites the US and Canadian labels.

### Tirzepatide
- Frontmatter as for semaglutide (US/UK/CA/AU notes; summary; grade rationale; facts unchanged and neutral).
- Regulatory: new four-country Compare (approved? / do public plans pay for weight loss?), US fold, "The UK, Canada and
  Australia" fold, "Who pays" fold (replaces Bijlage 2, NHG, GLI, § 34 SGB V and the Zorginstituut cost paragraph).
- Risks: EMA product information marked as evidence; lithium line re-sourced (two PubMed records, below). This run:
  wording "an emerging safety signal, based on uncontrolled reports" (closer to the review's abstract than the draft's
  "unconfirmed"); added the Canadian contraindication in pregnancy and the Australian dispensing-label warning.
- Harm reduction: as semaglutide; reporting routes; Canadian seizure of counterfeit Mounjaro (no business named).

### Retatrutide
- Frontmatter: `regulatory_notes` CA and AU new; WADA note names the Sport Integrity Australia wording.
- What it is: Compare rows re-sourced to US, UK, Canadian and Australian law (trial authorisation and ethics review;
  supply offences); legal callout rewritten per country.
- Regulatory: four-country Compare (approved? / applied? / legal to sell?), Sport fold explains the SIA "not listed"
  wording against the S0 reading (the merge's open conflict, `merge.md` §10), US fold, "The UK, Canada and Australia" fold.
- This run: "German" (the human-tissue lab) removed; "given under the trial's protocol" reworded (validator
  protocol-vocabulary warning); the harm-reduction section cut to about 60 visible words, with the legal routes moved into
  a new fold "The legal routes: trials, expanded access and approved medicines"; a neutral sentence that neither Canada's
  SAP nor Australia's SAS is shown to supply retatrutide (Canada caution: never suggest SAP availability); **the four
  reporting routes added** (the page had none; the brief requires them), in the fold "What you cannot know about a
  product, and how to report harm".
- Glossary `investigational-medicine`: "In the EU …" became "In the US, the UK, Canada and Australia …" (old text in the manifest).

## New facts and their sources

All ids are existing registry entries unless marked NEW (`en-compounds-a.yaml`). Country facts are the status files'
`page_facts` (fact-checked 24 October 2026), worded for B1.

**Semaglutide.** US: approvals 5 Dec 2017 / 20 Sep 2019 / 4 Jun 2021 / 22 Dec 2025 (`fda-drugsatfda-*`); Ozempic tablets =
Rybelsus R2, not interchangeable mg for mg (`fda-label-rybelsus-ozempic-tablets`, `fda-letter-213051-s030`); 7.2 mg dose
March 2026 (`fda-letter-215256-s029`); no generic, one tentative approval (`fda-drugsatfda-search-status-a-2026-10-24`);
503B exclusion proposal, comment period to 30 July 2026, no final decision by 23 October (`fda-2026-503b-glp1-exclusion-proposal`,
`fr-2026-12937-503b-comment-extension`, `federalregister-fda-search-2026-10-23`). UK: authorised for the UK since February 2018
under the EU-wide authorisation, GB licence 1 January 2021 (`ema-epar-ozempic`, `uk-euwa-2018-s20-exit-day`,
`uk-mhra-uk-wide-licensing`, `uk-mhra-substance-index-status-a-2026-10-24`; sentence marked as UK licensing history); Wegovy
licences 2021–2026 (`uk-mhra-ma-granted-2021`, `uk-mhra-2024-07-wegovy-cv`, `uk-mhra-2026-01-wegovy-7-2mg-dose`,
`uk-mhra-2026-04-wegovy-7-2mg-pen`, `uk-mhra-2026-06-wegovy-tablets`, `uk-mhra-2026-07-wegovy-mash`); personal import and
supply (`uk-hmr-2012-reg-17`, `uk-hmr-2012-reg-214`, `mhra-foi-22-431-personal-import-seizures`). Canada: Ozempic NOC 4 Jan 2018,
Rybelsus 30 Mar 2020, Wegovy 23 Nov 2021 (sold from March 2024), PDL since March 2018 (`ca-sbd-ozempic`, `ca-rds-rybelsus-2020`,
`ca-rds-wegovy-2021`, `ca-dpd-extract-search-status-a-2026-10-24`, `ca-pdl-human`); generics from 28 April 2026, chemically
synthesised (`ca-rds-semaglutide-injection-drreddys-2026`, `ca-rds-apo-semaglutide-2026`, `ca-rds-sevmia-2026`,
`ca-dhpp-semaglutide-product-pages-2026-10-24`); August 2026 generic-pen recall (`ca-hc-2026-08-generic-semaglutide-recall`,
kept by the merge: names only the authorised generic's holder); compounding position June 2025 and the January 2025
compounded-product recall, described without names (`ca-hc-2025-glp1-compounding-position`, `ca-hc-recalls-database`);
personal import (`ca-hc-gui-0116-personal-import`, `ca-cbsa-d19-9-1`); MASH approvals in Canada (Dec 2025), Australia
(Mar 2026), UK (Jul 2026) (`ca-rds-wegovy-mash-2025`, `au-tga-pmr-search-status-a-2026-10-24`, `uk-mhra-2026-07-wegovy-mash`).
Australia: ARTG dates (`au-artg-search-status-a-2026-10-24`, `au-tga-pmr-search-status-a-2026-10-24`, `au-artg-ozempic-308324`);
S4 (`au-poisons-standard-2026-10`); advertising (`au-tga-advertising-glp1-prohibited`); compounding ban from 1 Oct 2024
(`au-tg-amendment-2024-measures-2-glp1`, `au-tga-compounded-medicines-guidance`, `au-tga-2024-06-glp1-compounding-update`);
lapsed s19A approvals; personal import (`au-tga-personal-importation-scheme`); possession: Victoria all S4, NSW only
Appendix D (`au-vic-dpcs-act-1981`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d`); counterfeit pens 2024 (corrected wording) and
2023 vials (`au-tga-2024-09-counterfeit-ozempic-pens`, `au-tga-2023-05-counterfeit-semaglutide-vials`). Cost and coverage:
US (`us-usc-42-1395w-102-e`, `us-usc-42-1396r-8-d`, `us-medicare-gov-weight-loss-drugs`, `us-cms-medicare-glp1-bridge`,
`us-cms-balance-model`), UK (`nice-ta875-semaglutide`, `nice-ta1152-semaglutide-mace`, `nice-id6699-semaglutide-obesity-review`,
`smc-2497-semaglutide-wegovy`, `smc-2988-semaglutide-wegovy-tablets`), Canada (`ca-pcpa-negotiations-2026-10-24`,
`ca-pcpa-role-system`, `ca-cda-amc-2022-wegovy`, `ca-cda-amc-2025-wegovy`), Australia (`au-pbs-semaglutide-2026-10-24`,
`au-pbs-dusc-2024-06-semaglutide`, `au-pbs-medicine-status-wegovy`, `au-pbac-2025-11-obesity-treatments-advice`). Canadian
boxed warning and MTC/MEN 2 contraindication (`ca-pm-ozempic-2026-07-13`, `ca-pm-wegovy-2026-10-02`): **verified by this run**
in the monograph PDFs (pdf.hres.ca 00085314 and 00086293, section 3 "Serious Warnings and Precautions Box: Risk of Thyroid
C-cell Tumours" and section 2), 26 October 2026 machine date. Pregnancy and contraception: NEW `drummond-2024-glp1-pregnancy-review`.
"How to stop": PubMed searches (title words taper/deprescrib/dose reduction/after discontinuation/cessation with
semaglutide or GLP-1, 2023 onwards, 23 records; and semaglutide + discontinuation/withdrawal + weight maintenance limited
to trials, 3 records) found no published trial of a way to stop that keeps the benefit; the page says "We found no
published trial … (PubMed search, 24 October 2026)".

**Tirzepatide.** US: Mounjaro 13 May 2022, Zepbound 8 Nov 2023, sleep apnoea 20 Dec 2024, CV indication 27 Aug 2026
(`fda-drugsatfda-*`, `fda-label-mounjaro`); no generic; shortage history; 503B proposal; warning letters to online sellers
(`fda-warning-letters-index`). UK: first GB licence 26 Sep 2022, weight 8 Nov 2023, KwikPen 25 Jan 2024, no Zepbound
(`uk-mhra-ma-granted-2022`, `uk-mhra-2023-11-mounjaro-weight`, `uk-mhra-2024-01-mounjaro-kwikpen`); seizures May and October 2026
(`mhra-2026-05-largest-seizure`: "unlicensed" medicines, per the fact-check; `mhra-2026-10-counterfeit-pens`). Canada: NOC
24 Nov 2022 (sold from Oct 2023), KwikPen Sep 2024, Zepbound 13 May 2025 (sold from Jul 2025), children 10+ Jun 2026, PDL
since Mar 2023, HFpEF supplement withdrawn Nov 2025 (`ca-sbd-mounjaro`, `ca-rds-mounjaro-kwikpen-2024`, `ca-pm-zepbound`,
`ca-dpd-extract-search-status-a-2026-10-24`, `ca-rds-mounjaro-paediatric-2026`, `ca-pdl-human`, `ca-soc-mounjaro-hfpef-2025`);
counterfeit Mounjaro seized March 2026 at an Ontario business (RA-81792, Mississauga, summarised without names in
`ca-hc-recalls-database`). Australia: ARTG 23 Dec 2022, weight Sep 2024, OSA 2025; S4 with the Appendix L pregnancy warning
(`au-poisons-standard-2026-10`); compounding ban coverage of a dual agonist unstated (UNRESOLVED, said so); s19A UK KwikPens to
March 2025; two Victorians fined for importing Mounjaro pens (`au-tga-2026-10-prescription-import-infringements`, cited only for
the individual-importer facts; the companies it names are not named). Cost and coverage: US Bridge covers only the Zepbound
KwikPen; BALANCE; NICE TA1026 (BMI 35+, up to 12 years' phased NHS England rollout, Wales specialist service), TA924; SMC2653;
pCPA "under consideration for negotiation"; CDA-AMC August 2026 (`ca-cda-amc-2026-mounjaro`, `ca-cda-amc-2026-zepbound`); PBS
not listed, PBAC history (`au-pbs-tirzepatide-2026-10-24`, `au-pbs-medicine-status-tirzepatide`). Canadian pregnancy
contraindication (this run): `ca-pm-mounjaro-2026-06-23`, verified in PDF 00085122 ("MOUNJARO is contraindicated … during
pregnancy"; "Date of Authorization: 2026-06-23"), also the boxed warning and MTC/MEN 2 contraindication. Lithium: NEW
`burson-2026-tirzepatide-lithium`, NEW `cotrik-2026-lithium-glp1-review` (PubMed metadata re-read this run: PMIDs 41646202
and 42542974; authors, titles, journals, volumes and pages match the entries).

**Retatrutide.** Canada and Australia rows and facts from `status/retatrutide.yaml` page_facts (DPD extract, submissions under
review, ten Lilly trials with Canadian sites incl. the Health Canada trial portal, RA-81874; ARTG/TGA databases, the TGA's
September 2026 counterfeit alert, its advertising page wording, NSW Police seizure, four completed phase 3 trials with
Australian sites); NICE ID6644 scoping; the clinical-trial authorisation rules (`ecfr-21-312-20`, `ecfr-21-56-103`,
`uk-si-2004-1031-reg-12`, `ca-fdr-c05-clinical-trials`, `au-tg-regs-sch-5a-item-3-clinical-trials`) and supply offences
(`usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences`); Canadian border
powers (`ca-cbsa-d19-9-1`, `ca-fda-s27-2-removal-destruction`); SIA's "not listed" page (`au-sia-retatrutide`); the Victorian
liver-injury advisory (`vic-health-2026-retatrutide-liver`); SAP and SAS descriptions (`ca-hc-sap-drugs`,
`au-tga-sas-individual-patients`); reporting (`fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`,
`ca-hc-canada-vigilance`, `au-tga-report-adverse-event`, `mhra-2026-10-counterfeit-pens`).

## Removed sections

All in `research/for-nl-site/MANIFEST-compounds-a.md` with old line numbers: the EU/NL/DE/BE `regulatory_notes`; the folds
"The European Union and the Netherlands" and "Germany, Belgium, the United Kingdom and the United States" (UK and US parts
kept and expanded) on all three pages; "The legal route in the Netherlands" (semaglutide, tirzepatide); the Dutch
reimbursement text (Bijlage 2, Zorginstituut, €) and the Dutch guideline text (NHG, GLI); "Report side effects to Lareb";
the Zorginstituut unknowns; the CBG, BfArM, IGJ and EMA falsification sources; the retatrutide Dutch-law Compare and callout;
the glossary entries `gvs`, `nhg-standaard`, `combined-lifestyle-intervention` and the old `investigational-medicine` definition.

## No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working tree)

Ids collected from `<Cite id>`, `source=`, `extraSources=` and frontmatter `sources:`.

| Page | Before | After | Removed (every one European framing, every one listed in the manifest) |
|---|---|---|---|
| semaglutide | 73 | 136 | bfarm-glp1-shortage-archive, bfarm-ozempic-falsification, cbg-2024-glp1-shortage-recommendations, cbg-glp1-position, cbg-ozempic-shortage, ema-2023-falsified-ozempic, ema-wegovy-procedural-steps, fk-regeling-zorgverzekering-bijlage-2, fk-semaglutide, igj-2023-falsified-ozempic, lareb-home, zin-2024-wegovy-not-reimbursed, zin-2024-wegovy-pharmacotherapeutic-report, zin-2025-obesity-staged-approach, zin-wegovy-reassessment |
| tirzepatide | 74 | 125 | be-medicines-law-1964, cbg-glp1-position, de-sgb5-34, ema-mounjaro-procedural-steps, ema-mounjaro-procedural-steps-archive, fk-regeling-zorgverzekering-bijlage-2-tirzepatide, fk-tirzepatide, lareb-home, zin-2025-obesity-staged-approach, zin-tirzepatide-obesity-assessment |
| retatrutide | 84 | 116 | be-medicines-law-1964, cbg-compassionate-use-list, cbg-geneesmiddeleninformatiebank, de-amg-21, ema-2026-10-under-evaluation, ema-medicines-json, nl-geneesmiddelenwet |

`<Claim>` counts: semaglutide 21 → 21, tirzepatide 25 → 26, retatrutide 30 → 30; `<KeyNumber>` unchanged (4, 7, 7); no
study row, TimeStrip figure, IconArray or explainer removed. Facts that had a European source but are not European
framing were kept with a new source: the fertility/unplanned-pregnancy line (Drummond 2024), the lithium interaction
(Burson 2026, Cotrik 2026), the PRAC aspiration conclusion (kept as EMA evidence). Two Dutch-sourced lines were dropped
without a replacement because they were about Dutch practice only: the EU label's statement that the original Rybelsus
tablet is bioequivalent to the current EU tablet (PIONEER 1 limitation; the page now gives the US label's "not
substitutable mg for mg" for the newer US tablet), and the retatrutide row "trial medicines must follow good
manufacturing practice" (sourced to the Geneesmiddelenwet; the Compare row now says a trial needs the regulator's
permission and an ethics committee's approval, sourced to the four countries' rules).

Data files: EU, NL, DE and BE rows and the EU products are byte-identical to `nl-source-2026-10-23` (checked by diff).

## Validator and residue check

- `npx tsx scripts/validate-content.ts --only <slug>` for semaglutide, tirzepatide, retatrutide and en-compounds-a:
  **0 errors**. Remaining warnings: 4 per page, "inline outbound link … prefer `<Cite id>`", for the four side-effect
  reporting forms (FDA MedWatch, Yellow Card, Canada Vigilance, TGA). These are the "genuinely needed" reporting-form
  links that CONTENT-GUIDE §10 allows (all hosts allowlisted), the brief asks for them "linked", and every other compound
  page has the same four links; each is also cited (`fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`,
  `ca-hc-canada-vigilance`, `au-tga-report-adverse-event`).
- The validator's residue scan (scripts/lib/residue.ts) reports no hit in any of my files.
- The brief's raw grep: **0 real hits**. Every EMA/EPAR/PRAC/"European" sentence has `{/* residue-ok: EMA evidence */}` on
  the line before (semaglutide 11 lines, tirzepatide 9, two of them as `# residue-ok` in YAML study limitations; retatrutide none, it has
  no EMA sentence left), and the
  UK licensing-history sentence has `{/* residue-ok: UK licensing history … */}`. The raw pattern's false positives that
  remain: `nada\b` in "Canada", `epar` in "separate", "preparation" and "Department", and `ema-`/`epar-` inside source ids
  (`ema-epar-wegovy` etc.), as the CONTENT-GUIDE notes for "separate".

## Open questions for the medical and legal reviewers

1. **Australian labels and the UK SmPCs on the MTC/MEN 2 contraindication** were not read (the AU product information PDFs
   on ebs.tga.gov.au returned a licence page to curl; emc is not allowlisted). Both pages say so ("we did not check the UK and
   Australian labels on this point"). A reviewer with access could close it.
2. **Retatrutide in Australia**: whether it is in law a Schedule 4 "derivative" (only the TGA's advertising page says so) and
   whether the 2024 compounding ban on "GLP-1 receptor agonist analogues" covers retatrutide or tirzepatide. The pages state
   both as unsettled (merge.md §7.3).
3. **Retatrutide and sport**: the page reads S0 as prohibiting it (data row: prohibited, S0) and explains SIA's "not
   listed" wording as "not named". A WADA or anti-doping-body ruling would settle it.
4. **Canada (advertising guidance 2023)**: the retatrutide page says Health Canada has not authorised it and that its
   safety and effectiveness have not been established; the routes fold says nothing shows SAP availability. Legal review
   of that wording against `ca-hc-advertising-distinction-2023`.
5. **Not owned by this group, for the lead or the sweep group**: `src/data/organ-cards/retatrutide.yaml` `status_sources`
   still lists `ema-medicines-json` and `ema-2026-10-under-evaluation` as the sources of the figure's "not approved" head
   (the validator accepts them because the data file's EU row cites them). Suggested replacement, all cited on the page:
   `fda-unapproved-glp1-concerns, mhra-2026-10-counterfeit-pens, ca-dpd-extract-search-status-a-2026-10-24, au-artg-search-status-a-2026-10-24`.
6. **Medicare negotiated price** (Ozempic/Rybelsus/Wegovy from 2027) left out: its only CMS source has a commerce token in
   the URL (merge.md §1.3).
7. Still unresearched and not stated: US private insurance, PMPRB, NICE NG28 (semaglutide in type 2 diabetes),
   Northern Ireland and NHS Wales funding for semaglutide; why the Plosbrio and Poviztra brands exist (the page says the
   documents do not say).
8. **UI string** (merge.md §10): the status table renders "Schedule Prescription Drug List" and "Schedule S4"; owned by the
   UI-string group.

## Adversarial fact-check (26 October 2026 machine date; workflow date 24 October 2026)

Scope: the three pages, the three glossary files, `en-compounds-a.yaml`, the manifest and these notes, checked against the
content brief, CONTENT-GUIDE, `research/refocus/status/{semaglutide,tirzepatide,retatrutide}.yaml` (page_facts, fact-check and
UNRESOLVED notes), the merged source notes, and the primary documents listed below.

### Primary documents re-read by the fact-checker
- PubMed records of the three NEW sources (PMIDs 39181497, 41646202, 42542974): authors, title, journal, year, volume, pages
  and DOI match `en-compounds-a.yaml`; the notes' summaries match the abstracts.
- CDA-AMC recommendations through PubMed E-utilities (PMIDs 38620354, 41021710, 42771745, 42771753): every Canadian
  "who pays" sentence on both pages matches (2022 do not reimburse; July 2025 BMI 27+ with CVD and a price reduction; August
  2026 Mounjaro with metformin-based combinations; Zepbound only BMI 27+ with prediabetes).
- MHRA "GLP-1 medicines for weight loss and diabetes: what you need to know" (GOV.UK content API, updated 5 February 2026):
  consultation before a private prescription, powder-in-vial products not authorised, fakes that "closely mimic" licensed
  pens, Yellow Card for suspected fakes, NAION, the depression/suicidal-thoughts conclusion, strengthened pancreatitis
  warnings, the Mounjaro barrier-contraception advice, the pregnancy wash-out table. One sentence corrected (below).
- US labels on accessdata.fda.gov (pdftotext): Ozempic 209637s038 (12.1; 12.2 "During induced hypoglycemia, semaglutide
  did not alter the counter regulatory responses of increased glucagon ... and did not impair the decrease of C-peptide"),
  Wegovy 218316s007 (94% homology, half-life, 5 to 7 weeks, fat vs lean mass, "exact mechanism ... has not been
  established", reducing the insulin/secretagogue dose, stop 2 months before pregnancy, dysesthesia in 6.1), Mounjaro
  215866s044s045 (boxed warning, MTC/MEN 2, C20 diacid "prolongs the half-life", 80% bioavailability, 99% albumin, gastric
  emptying "largest after the first dose", warfarin monitoring, all-cause death 8.5% vs 10.1%, dysesthesia), Zepbound
  217806Orig1s041corrected (suicidal behaviour removed 02/2026, "greater fat mass loss than lean mass loss",
  coadministration with GLP-1 RAs not recommended, dysesthesia). The retatrutide page's new claim that the US labels of
  Wegovy, Mounjaro and Zepbound also list dysaesthesia is confirmed.
- Canadian monographs on pdf.hres.ca: Mounjaro 00085122 (2026-06-23: Serious Warnings box, MTC/MEN 2 and "during pregnancy"
  contraindications), Ozempic 00085314 (2026-07-13) and Wegovy 00086293 (2026-10-02) (boxed warning, MTC/MEN 2
  contraindication), Zepbound 00084997 (2026-06-11: obstructive sleep apnoea indication, not in the May 2025 monograph).
- PubMed search for stopping trials repeated (22 records with taper/deprescribing/discontinuation/cessation/stopping in the
  title, plus an RCT-limited search): still no published trial of a way to stop semaglutide that keeps the benefit (the
  Japanese "time-limited cap" study, PMID 42552238, is an observational cohort and shows regain).
- Every other new country fact was compared with the status files' fact-checked page_facts and the merged source notes
  (FDA Drugs@FDA/openFDA search, 503B proposal and comment extension, Federal Register search; MHRA licences and releases;
  NICE TA875, TA1152, ID6699, TA1026, TA924, ID6644; SMC2497, SMC2988, SMC2653; pCPA export; DPD extract; Health Canada
  advisories RA-81518, RA-81874 and the recalls index incl. RA-76830 and RA-81792; GUI-0116; CBSA D19-9-1; ARTG, TGA
  registrations, Poisons Standard incl. Appendix L, compounding amendment and guidance, Personal Importation Scheme,
  infringement-notice release, counterfeit alerts of 2023, 2024 and 2026; PBS, PBAC status pages and the November 2025 PBAC
  advice; CMS Bridge and BALANCE pages, medicare.gov, 42 USC 1395w-102(e) and 1396r-8(d); Sport Integrity Australia;
  ClinicalTrials.gov country searches; the Victorian liver alert). All confirmed except the points fixed below.

### Fixes made in place
Semaglutide (`src/content/compounds/en/semaglutide.mdx`):
1. `summary[3]`: restored the rare eye condition that the rewrite had dropped ("Gallstones, pancreas and eye problems are
   rarer"; 18 words; the validator passes).
2. Mechanism step "More insulin and less glucagon": restored "insulin release still falls" during low blood glucose (lost
   when "EU label" became "labels"); confirmed in the US Ozempic label 12.2 (C-peptide) and the EMA product information.
3. UK fold: the MHRA does not say that selling "without a prior consultation is against the law"; it says a consultation
   must come before a private prescription and that selling through unregulated sellers (beauty salons, social media) is
   against the law. Reworded to match. "Border Force seizes" became "can seize" (the FOI source is from 2022).
4. UK fold, licensing history: "the European authorisation that covered the UK while it was a member" implied that cover
   ended in January 2020, a year before the GB licence (the transition period is not sourced; the status file says to state
   only EU-wide authorisation in 2018 and the GB licence in 2021). Now "through a European authorisation granted while the
   UK was a member of the EU" (still marked residue-ok as UK licensing history).
5. Canada fold: the August 2026 generic-pen recall was a recall posted by Health Canada, not one it carried out, and the
   January 2025 recall (RA-76830) was of compounded semaglutide products recalled at Health Canada's request (the position
   paper says "two ... products"); both sentences reworded accordingly.
6. ProductCheck extra: "Does the pen look different from one a pharmacy gave you?" assumed an earlier pharmacy pen (brief:
   never assume where a product came from). Now: fakes can look very like real pens (MHRA, added to extraSources); check
   the pack, label and expiry date; if anything looks wrong or damaged, do not use it.
Tirzepatide (`src/content/compounds/en/tirzepatide.mdx`):
7. Regulatory Compare, US row: the "No" verdict sat next to a sentence saying that a programme pays; now "Not as a rule:
   ..." and the BALANCE Medicaid route is named (`us-cms-balance-model` added), so the row matches the "Who pays" fold.
8. Canada: added that by June 2026 Zepbound's Canadian uses include moderate to severe obstructive sleep apnoea in adults
   with obesity (`ca-pm-zepbound-2026-06-11`, read in PDF 00084997; the decision date itself was not read, hence "by June
   2026"); `regulatory_notes.CA` updated to match. This gives Canada the detail the US and Australian text already had.
Retatrutide (`src/content/compounds/en/retatrutide.mdx`):
9. Sport: the research marks WADA's reading as UNRESOLVED (Sport Integrity Australia says "not listed"). The fold no longer
   tells athletes to ask "before using it" (now: an athlete who is unsure should ask their anti-doping organisation); the
   "who should not use it" bullet and `regulatory_notes.WADA` now say "on the wording of S0" and that no WADA ruling was
   found, instead of stating "covered by S0" as settled.
10. Harm-reduction routes fold: removed the description of the conditions of Canada's SAP and Australia's SAS (brief:
   describe the SAP neutrally on the routes page only; never suggest SAP availability on Canadian content). The fold keeps
   the eight route links and says that nothing we found shows availability through either special access route and that
   Lilly's expanded-access record lists no locations (`ctgov-nct07629401`; the status file notes that Health Canada does not
   publish SAP authorisations). `ca-hc-sap-drugs` and `au-tga-sas-individual-patients` are no longer cited on this page.
Manifest: added the semaglutide sentence "The indication is not in the EU label" (MASH), which the rewrite removed without
a manifest row.

### Checks that passed without change
- No-loss (`git show nl-source-2026-10-23:<path>` against the working tree, after the fixes): cite ids semaglutide 73 to
  136, tirzepatide 74 to 126, retatrutide 84 to 116; every removed id is Dutch, Belgian, German or EU framing and is in the
  manifest (the same lists as in "No-loss check" above). `<Claim>` 21/21, 25/26, 30/30; `<KeyNumber>` 4/4, 7/7, 7/7; all 18,
  23 and 22 structured studies kept. Removed non-European content was searched line by line in a word diff: apart from the
  items restored above (eye risk in the summary, the insulin half of the hypoglycaemia mechanism, the advice to check the
  pen, now phrased without a European source), every removal is European framing listed in the manifest.
- Residue: the brief's grep on all seven owned files leaves only false positives (`Canada`, `separate`, `preparation`,
  `Department`, source ids, and `for-nl-site` inside internal source notes, which are not rendered) and lines marked
  residue-ok; `scripts/check-locale-residue.ts --only` reports 0 hits for every owned file. Each residue-ok marker sits on a
  genuine EMA/PRAC assessment point (trial frequencies, label science, PRAC conclusions, a regulator's doubt) or, once, on
  UK licensing history.
- Guardrails: no new dose, protocol, seller or emergency number; the commerce check passes (the fold title "Who pays: cost
  and coverage in each country" uses no commerce token); no seller or company is named in a cited title or URL except
  authorised medicines and their holders (the Canadian generic recall names an authorised generic product, as the
  AuthorisedProducts table does).
- Links: only brief routes; all eight `/en/legal-routes/#...` anchors exist as headings on `legal-routes.mdx`; every outbound
  host is allowlisted.
- Validator: `npx tsx scripts/validate-content.ts --only semaglutide|tirzepatide|retatrutide|en-compounds-a`: 0 errors;
  the 4 warnings per page are the four reporting-form links (allowed by CONTENT-GUIDE §10, also cited by id).

### Remaining points for the lead and the reviewers
- `src/data/organ-cards/retatrutide.yaml` (not owned): its `status_sources` still lists EMA ids for the "not approved" head
  (see open question 5 above).
- `src/content/pages/en/safety/monitoring.mdx` (not owned) has an unmarked "The EU labels say to stop at least 2 months ..."
  residue hit.
- Retatrutide "What it is" Compare: the old row "trial medicines must follow good manufacturing practice" stays dropped (its
  only source was Dutch law). It is not European in substance; a reviewer could restore it with US, UK, Canadian and
  Australian sources (for example 21 CFR 210.2 and part 211, SI 2004/1031 Part 6, Food and Drug Regulations C.05.010), none
  of which is in the registry yet.
- OASIS 4: PubMed indexes the NEJM paper with publication type "Clinical Trial, Phase II", while the EMA (marked sentence)
  calls it phase 3; a ClinicalTrials.gov source for NCT05564117 would settle the phase without the EMA.
- Australia, Mounjaro in children: the data indication `mounjaro-au` (merge check, ARTG public summary) includes children
  from 10, while `status/tirzepatide.yaml` lists the paediatric extension as under evaluation (published September 2025).
  The page text does not mention it; the data owner should reconcile.
- Canada, Zepbound sleep apnoea: the monograph shows the indication by 11 June 2026; the decision date itself was not read.
