# Refocus notes: group safety-en-b (24 October 2026)

Pages and files: `safety/product-risk`, `safety/monitoring`, `safety/before-you-consider`, `safety/injection-safety`,
`safety/sterile-technique`; `src/data/product-check.yaml`, `src/i18n/en/product-check.json`,
`src/i18n/en/glossary/safety-b.json`; new sources in `src/data/sources/en-safety-en-b.yaml`; one allowlist host
(`www.iso.org`). Manifest of what left: `research/for-nl-site/MANIFEST-safety-en-b.md`.

Run history: an earlier run of this assignment was cut off before it saved anything (all owned files were identical to
`nl-source-2026-10-23` and no sources file, manifest or notes existed), so this run did the whole assignment. Workflow
date 24 October 2026 (this machine's clock showed 26 October 2026; `accessed` dates are the workflow date). Nothing in
`src/data/sources/refocus-*.yaml`, `src/data/jurisdictions.yaml` or another group's file was edited.

## 1. What changed, per page

### safety/product-risk
- **New section "What a lab report can and cannot tell you"** (anchor `#what-a-lab-report-can-and-cannot-tell-you`;
  the ProductCheck certificate check now links here). Lead answers the reader's claim "we know what is in the vial and
  that it is clean": "A report shows what was in the sample tested. 'Clean' needs germ and toxin tests for that batch."
  Figure: `<Diagram id="lab-report-ladder">`, four rungs from most to least informative, exactly as the brief:
  (1) independent ISO/IEC 17025-accredited lab, that exact batch (batch numbers match), identity (mass spectrometry),
  amount per vial (assay), purity (HPLC), ideally endotoxin and sterility; (2) the seller's own report or a lab you
  cannot identify, check or verify; (3) no report; (4) not evidence at all ("the seller uses it himself", reviews,
  "third-party tested" without a readable report). Every rung says what it can show and what it leaves unknown
  (sterility, the amount in your vial, whether your vial is from the tested batch and the empty batch field, whether the
  report is genuine, storage and shipping). Under the figure: accredited reports must say results relate only to the
  items tested (ISO/IEC 17025:2017 7.8.2.1 l, via NIST); "clean" needs sterility and endotoxin results for that batch and
  neither covers what happens after; the closing line on the pharmacy supply chain (GMP, every batch approved by a
  responsible person before release, regulator inspection; no report replaces that). Folds: "What each step leaves
  unknown, and why" (sample vs vial, batch number, sterility incl. the FDA's 20-of-10,000 example, genuineness, storage);
  "Why '99% pure' can mislead" (kept, EU wording removed); "Who made the report" (ISO/IEC 17025 scope page, NVLAP, who
  paid). No seller or lab named; no "trusted/reputable/legit/reliable"; no commerce words in headings, captions or labels
  (validator and `check:commerce` pass).
- **New section "What a medicine maker must test"**: the old Compare column "What EU guidance asks for a peptide
  medicine" is now "What a medicine maker must test" (21 CFR 211.165 and 211.167, ICH Q6B from the FDA, USP <71> and
  <85> through the FDA's aseptic-processing and endotoxin guidance). Fold "How the pharmacy supply chain checks every
  batch, by country": US (quality control unit 211.22; 211.165/167; FDA inspects), UK (qualified person, HMR 2012 Sch. 7;
  MHRA inspects), Canada (C.02.018, C.02.014, C.02.029), Australia (licence, GMP, TGA inspection); plus the ICH Q6B
  scope caveat (it covers peptides made in living cells, not synthetic peptides).
- Opening paragraph: IGJ cites replaced (batch testing: 21 CFR 211.165, Canada C.02.018; "not checked by any
  regulator": MHRA, Health Canada).
- Belgian, German and Dutch nationality words removed from the study descriptions (the studies, numbers and cites stay):
  "a national public-health lab", "an anti-doping lab", "A 2026 case report". The Cologne row now reads "Of what the lab
  found, 12.8% …" to match the source note (the abstract does not give the base). The EudraVigilance study stays as
  evidence with `{/* residue-ok: … */}`.
- Fake-pen fold: the Germany/Austria 2023 bullet (BfArM, EMA alerts) and the Dutch stolen-insulin bullet (IGJ, 20 October
  2026) removed (manifest); diagram step 1 now cites the Italian case and WHO.
- Warning-signs table: IGJ cites removed; "No information about where the product was made" (IGJ only) replaced by "Is not
  a licensed pharmacy" (FDA BeSafeRx); the closing sentence now rests on FDA "Facts About CGMP" (you cannot tell by
  sight, smell or touch).
- Summary item 4 and the description now point to the ladder; `last_reviewed` 2026-10-24.

### safety/monitoring
- "Getting checks in the Netherlands" became **"Getting checks where you live"**: Lead "Ask your own doctor …";
  `<Diagram id="getting-checks">` (book an appointment and bring questions; say what you use and bring the label and a list;
  agree which checks fit; ask about cost first; ask for your results, with the four countries' record-access sources);
  visible privacy sentence for the four countries with a link to `talking-to-your-doctor#your-rights-privacy-and-consent`.
  Fold "Who pays for the tests, by country" (only where sourced: England NHS Constitution; Canada's provincial plans;
  Australia's Medicare and bulk billing; the US: "depends on your insurance", no rule claimed). Fold "If your doctor does
  not want to do the tests" (GMC paras 48–49; "we did not find a clinical guideline … searched 24 October 2026"; second
  opinion in the UK, Canada, Australia; FDA on direct-to-consumer tests; Victoria and Alberta).
- EU product-information cites replaced by the US labels and Canadian monographs (kidneys, hypoglycaemia, gallstones,
  blood fats, pulse, pregnancy, contraception). The pulse numbers changed to the US labels' figures (see section 2).
  The EPAR's body-scan study of 140 people stays (evidence, no reader framing).
- Summary item 5 and description country-neutral.

### safety/before-you-consider
- **Tesamorelin tumour row**: "Never studied" was wrong for tesamorelin. Now: "Not known. A 10-year US safety study of
  tesamorelin, meant to look at cancer, was stopped in 2018 with no results posted. The others were never studied."
  The Claim below it was rewritten: the `hypothesis` badge now sits on "These peptides could, in theory, help a hidden or
  treated tumour grow"; then "never studied in people" for BPC-157, TB-500, CJC-1295 and ipamorelin, and for tesamorelin
  the FDA-required 10-year study (approval letter 1708-2) whose primary outcome was time to a cancer diagnosis in people
  with HIV using Egrifta versus a comparable unexposed group; 391 enrolled; terminated 2018, no reason, no results
  (research/refocus/status/tesamorelin.yaml: "write 'time to a cancer diagnosis' or 'how soon cancers appeared'").
  "An authorised growth hormone booster" became "a growth hormone booster approved in the US" (consistent with the
  derived tile: US approved; Canada approved but no longer sold; not UK or Australia).
- "The EU label" defaults replaced: pregnancy (US and Canadian Wegovy: 2 months; Canadian Mounjaro: 1 month; the US
  Mounjaro label gives no time, and the TimeStrip detail says so), teenagers (US from 12 with obesity; Canada also > 60 kg),
  diabetes (US labels; Canadian "not a substitute for insulin"), kidneys (Canadian monograph and US label), thyroid
  (Compare is now US labels vs the Canadian label, both forbid use with MTC/MEN 2; "we did not check how the UK and
  Australian labels treat it"), pancreatitis (Canadian monographs' caution), INR (Canadian monograph), rules for everyone
  (US labels, WHO, NHS).
- Melanotan II "Not in the EU" → not approved in the US, the UK, Canada or Australia (FDA debarment order calling it an
  unapproved new drug; MHRA FOI; Health Canada advisory; TGA alert).
- Dutch medical-secrecy text removed; new country-neutral confidentiality sentence ("In the US, the UK, Canada and
  Australia, privacy rules protect what you tell your doctor, with a few exceptions set by law") with the four countries'
  sources and the link to talking-to-your-doctor.

### safety/injection-safety
- Dutch GP insulin advice (sites, 1 cm, soap and water), Dutch harm-reduction lines (vein warning, alcohol swab, "do not
  inject alone") removed. Technique content kept: sites, rotation, skin to avoid, recapping, normal vs not normal,
  allergy. Wegovy sites and "not into a vein or muscle" now cite the US label (Medication Guide). The "not alone" idea is
  kept as reasoning from a sourced fact ("A severe reaction usually starts within minutes", NHS).
- Action column: "Call your GP or the out-of-hours GP service straight away" → "Get medical help straight away: your
  doctor, or a health advice line or urgent care when your doctor is closed" (same urgency as before; consistent with
  the warning-signs page of group safety-en-a); healthdirect cellulitis replaces Thuisarts.

### safety/sterile-technique
- RIVM, Trimbos and Mainline cites removed; WHO covers every "Before you start" step (re-read in the WHO IRIS text
  bitstream: hand hygiene incl. wrists and between fingers for at least 30 s; clutter-free surface cleaned with 70%
  alcohol; assemble sterile single-use needles and syringes, swabs, sharps container; discard packs that are punctured,
  torn, damp or expired). "A reused needle is blunter" (Trimbos only) replaced by the insulin study's finding on needle
  reuse and lumps (Blanco 2013, already on the site). Storage now from the US Wegovy label.

### ProductCheck (`product-check.yaml`, `en/product-check.json`)
- The schema has no per-locale sources, so the Dutch/EU sources were replaced by country sources (manifest). Label check:
  "In the US, for example, a prescription medicine must show all four, on the vial or its box" (21 CFR 201.100(b)(4),(6);
  201.17). Certificate check aligned with the ladder (batch number or empty batch field; a lab you can find and check, date,
  signature; purity only, no identity or amount; no sterility or endotoxin test) and links to the ladder anchor. Doctor
  check: "What you tell your doctor is kept private, with a few exceptions set by law" (four countries' sources).

### Glossary (`safety-b.json`)
Removed `seh`, `nvic`, `landelijk-meldpunt-zorg`, `eigen-risico`, `bfarm` (manifest). Added `sterility-test`, `assay`
(general: also covers "cell assays" on compound pages), `qualified-person` (UK, named).

## 2. New facts and their sources

All new ids are in `src/data/sources/en-safety-en-b.yaml` unless marked [existing].

| Fact | Source id | How verified (24 October 2026) |
|---|---|---|
| Quality control unit approves or rejects every batch | `ecfr-21-211-22` | eCFR versioner API (text 15 Oct 2026) |
| Rx label: quantity of active ingredient, established name, lot number tracing manufacturing history | `ecfr-21-201-100` | eCFR API |
| Expiry date on the immediate container and outer package (or the carton) | `ecfr-21-201-17` | eCFR API |
| Each batch tested for identity and strength before release; sterile/pyrogen-free batches tested | [existing] `ecfr-21-211-165`, `ecfr-21-211-167` | notes of group legal-en-b; text re-seen quoted in the FDA aseptic guidance |
| USP <71> is the principal US method for sterility tests; sterility tests sample few units; 20 units of a 10,000-unit lot with 0.1% contamination pass 98% of the time | `fda-2004-aseptic-processing-guidance` | PDF with curl + pdftotext (section XI.A, XI.B) |
| USP <85> bacterial endotoxins test; finished products tested for endotoxins | `fda-2026-pyrogen-endotoxins-qa` | FDA page (18 Mar 2026) + PDF |
| ICH Q6B: identity highly specific, sometimes more than one test; impurities determined against criteria; quantity by assay; sterility and endotoxin; scope excludes synthetic peptides | `fda-1999-ich-q6b` | PDF (Aug 1999) |
| Certificate of analysis: per batch, batch number, each test with limits and results, dated and signed, the lab's name | `fda-2016-ich-q7-gmp-api` | PDF (Sept 2016, Rev. 1), section 11.4 |
| You cannot tell by sight, smell or touch whether a medicine is safe; testing alone is not enough (small samples); FDA inspects worldwide | `fda-cgmp-facts` | curl (modified 21 Nov 2025) |
| UK qualified person secures that each batch was made and checked per the regulations and the licence | `uk-hmr-2012-sch-7-qualified-person` | legislation.gov.uk data.xml, Sch. 7 paras 12, 12A, 15 |
| Canada: no batch sold until the head of quality control approves | `ca-fdr-c02-014` | Justice Laws (current to 2026-09-30) |
| UK MHRA inspection; Australian licence and TGA inspection; Canada batch testing and sterile manufacture | [existing] `mhra-gmp-gdp-guidance`, `au-tga-manufacturing`, `ca-fdr-c02-018`, `ca-fdr-c02-029` | notes of group legal-en-b |
| What ISO/IEC 17025 is (competence, impartiality, consistent operation; 2017 edition confirmed 2023) | `iso-iec-17025-2017` | built-in browser, own tab (curl 403) |
| Accredited reports must state results relate only to the items tested; must name the lab and the authorising person | `nist-2018-iso17025-crosswalk-reporting` | PDF with curl + pdftotext |
| Australia: Medicare covers most pathology tests with a medical reason; bulk billed = nothing to pay; ask your doctor | `au-healthdirect-paying-for-diagnostic-testing` | curl (last reviewed Nov 2025) |
| Canada: each province and territory has its own plan covering medically necessary physician and hospital services | `ca-hc-health-care-system` | WebFetch (curl timed out; page details 2025-06-25) |
| England: NHS services free apart from limited exceptions | [existing] `nhs-constitution-england` | GOV.UK content API (re-read: "NHS services are free of charge, except in limited circumstances sanctioned by Parliament") |
| US direct-to-consumer tests often not FDA-reviewed; discuss results with a provider first | `fda-dtc-tests` | curl (content current 20 Dec 2019) |
| Do not stop a prescribed medicine without first talking to your doctor | `nhs-herbal-medicines-complementary` | curl (last reviewed 1 May 2026) |
| Wegovy (US): pregnancy (stop when found if used for weight loss; stop ≥ 2 months before planned); age 12+ with obesity; hypoglycaemia with insulin/secretagogues, type 1 or with insulin not evaluated; acute kidney injury; kidney side effects more frequent with a history of kidney impairment; no PK change for eGFR 30–<90; gallbladder disease; pancreatitis; heart rate +1 to 4 bpm vs placebo; fat lost more than lean; lipid table; sites (abdomen, thigh, upper arm), not IM/IV, rotate; visual inspection; storage 2–8 °C, not next to the cooling element, no freezing, protect from light; alcohol swab or soap and water | [existing] `fda-label-wegovy` | PDF (218316s007lbl.pdf) with curl + pdftotext |
| Mounjaro (US): no pregnancy washout given; hypoglycaemia monotherapy 40 weeks 0% vs 1% placebo (475 adults with type 2 diabetes), more with insulin or a sulfonylurea; heart rate +2 to 4 vs +1 placebo; contraception advice; hypersensitivity: stop; never share a KwikPen | [existing] `fda-label-mounjaro` | PDF (215866s044s045lbl.pdf) |
| Ozempic (US): boxed thyroid warning; contraindication MTC/MEN 2; glucose-dependent insulin secretion; never share a pen | [existing] `fda-label-ozempic` | PDF (209637s038lbl.pdf) |
| Wegovy (Canada): contraindicated in pregnancy/breastfeeding and with MTC/MEN 2; stop ≥ 2 months before; 12–<18 with obesity and > 60 kg; not a substitute for insulin, not for type 1; renal insufficiency (mild to severe, dialysis) no clinically relevant PK change (single dose); limited experience in severe renal impairment, not recommended in end-stage renal disease; caution with chronic or recent pancreatitis; INR monitoring with coumarins (acenocoumarol cases) | [existing] `ca-pm-wegovy-2026-10-02` | PDF (pdf.hres.ca 00086293, authorised 2026-10-02) |
| Mounjaro (Canada): contraindicated in pregnancy; stop ≥ 1 month before; contraception advice as US; not evaluated with prior pancreatitis, caution | [existing] `ca-pm-mounjaro-2026-06-23` | PDF (00085122, authorised 2026-06-23) |
| Tesamorelin NCT01579695: primary outcome time to malignancies, 10 years, 391 enrolled, terminated 2018, no results, no reason; FDA PMR 1708-2 (≥ 10-year observational study) | [existing] `ctgov-nct01579695`, `fda-2010-egrifta-approval-letter` | research/refocus/status/tesamorelin.yaml (fact-checked) and the existing source notes |
| Melanotan II not approved in US/UK/CA/AU | [existing] `fr-2016-melanotan-debarment`, `mhra-2024-foi-melanotan-ii`, `ca-hc-2026-04-think-twice-peptides`, `au-tga-2026-08-melanotan-ii-safety-alert` | existing (fact-checked) notes; the same rows as `src/data/compounds/melanotan-ii.yaml` |
| No regulator has checked products from outside the system | [existing] `mhra-2026-01-seizures-2025`, `ca-hc-2026-04-think-twice-peptides` | existing notes (quotations) |
| Alberta regulator asks doctors to ask about non-prescribed injectables and watch for complications | [existing] `ca-cpsa-2026-04-injectable-peptides` | existing note |
| Privacy, record access, second opinion, "doctor need not provide care that would not serve you" | [existing] `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`, `gmc-confidentiality-framework`, `opc-privacy-laws-summary`, `oaic-health-information`, `ecfr-45-164-524`, `oaic-access-health-information`, `cpsa-cma-code-of-ethics`, `mba-good-medical-practice-2020`, `gmc-2020-consent-paras-48-49`, `au-healthdirect-questions-to-ask-your-doctor` | existing notes (groups safety-en-a, guides-en) |

Changed numbers (not new facts, but different label figures): resting pulse was "3 bpm (semaglutide), 3 to 5
(tirzepatide)" from the EU labels; now the US labels' "1 to 4 bpm more than placebo (Wegovy)" and "2 to 4 vs 1 with
placebo (Mounjaro)".

Not used: the UK SmPCs. The MHRA Products site shows the SmPC only after ticking "I understand that this information is
a copy of the Summary of Product Characteristics …"; the agent did not accept that acknowledgement, so UK label wording
was not read (question 2 below). ICH Q6B's scope excludes synthetic peptides: the page says so and keeps the EMA
synthetic-peptide guideline (evidence, no reader framing) for the synthetic-peptide chemistry.

## 3. Removed sections

All listed with their cite ids in `research/for-nl-site/MANIFEST-safety-en-b.md`. Summary: monitoring's "Getting checks
in the Netherlands" (GP route, eigen risico, WGBO, KNMG, Thuisarts, Zorginstituut) and its fold; product-risk's
Germany/Austria and Dutch stolen-pens bullets and the IGJ cites; every "EU label"/"EU guidance" default; before-you-
consider's Dutch medical-secrecy sentence and the EU thyroid column; injection-safety's and sterile-technique's Dutch GP,
RIVM, Trimbos and Mainline lines; the Dutch/EU sources and words of ProductCheck; five Dutch/German glossary entries.

## 4. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` vs now)

| File | Before | After | Removed (all European framing; each in the manifest) |
|---|---|---|---|
| safety/product-risk | 42 | 56 | bfarm-ozempic-falsification, ema-2023-falsified-ozempic, ema-epar-wegovy, igj-2025-illegal-online-medicines, igj-2026-10-stolen-medicines, igj-online-medicijnen |
| safety/monitoring | 36 | 45 | ema-2025-synthetic-peptides-guideline, ema-epar-mounjaro, igj-online-medicijnen, knmg-2024-second-opinion, knmg-beroepsgeheim, nl-wgbo-art-453-good-care, nl-wgbo-art-454-456-records, nl-wgbo-art-457-confidentiality, thuisarts-gezondheidstest, thuisarts-naar-de-huisarts, zin-huisarts-zvw |
| safety/before-you-consider | 34 | 43 | drugsinfo-injecteren, ema-epar-mounjaro, ema-epar-wegovy, ema-medicines-search, knmg-beroepsgeheim, mainline-steroids-safe-injecting, thuisarts-dikke-ogen-lippen |
| safety/injection-safety | 25 | 21 | drugsinfo-injecteren, ema-epar-wegovy, mainline-steroids-safe-injecting, thuisarts-dikke-ogen-lippen, thuisarts-insuline-spuiten, thuisarts-sepsis, thuisarts-wondroos |
| safety/sterile-technique | 22 | 21 | drugsinfo-injecteren, ema-epar-wegovy, mainline-steroids-safe-injecting, rivm-hygiene-piercing |
| product-check.yaml | 25 | 29 | ema-2025-synthetic-peptides-guideline, ema-epar-wegovy, ema-ich-q7-gmp-api (same ICH Q7 text now cited from the FDA copy), eu-directive-2001-83, igj-online-medicijnen, knmg-beroepsgeheim, thuisarts-naar-de-huisarts |

Every fact those ids supported is either kept with a source from the four countries (listed in section 2) or listed in
the manifest as European framing that left. Kept although European, as evidence: `ema-2025-synthetic-peptides-guideline`
(peptide impurity chemistry, two orthogonal identity methods, co-eluting impurities; on product-risk),
`ema-epar-wegovy` (the body-scan study of 140 people; on monitoring), `janvier-2018-*`, `vanhee-2017-egf-not-igf1`,
`krug-2014-black-market-germany`, `stammers-2026-insulin-falsified-semaglutide` (studies; the nationality words left the
text), `zinzi-2026-counterfeit-semaglutide-eudravigilance` (marked `residue-ok`).

## 5. Validation

- `npx tsx scripts/validate-content.ts --only <each owned file>`: **0 errors, 0 warnings** for safety/product-risk,
  safety/monitoring, safety/before-you-consider, safety/injection-safety, safety/sterile-technique, product-check,
  glossary/safety-b, en-safety-en-b. Full run: 0 errors, 159 warnings, none in owned files.
- Residue grep from the brief: the only raw hits in owned files are cite ids (`ema-2025-…`, `janvier-2018-falsified-
  peptides-belgium`, `krug-2014-black-market-germany`; the residue script masks ids), "Canada" (`nada\b`), "prepare",
  "department" (`epar`). Text hits after stripping ids: one, "Europe's side-effect database" on product-risk, marked
  `{/* residue-ok: evidence … */}`.
- Full `astro build` into the scratchpad: 136 pages, complete. On that build: `check-html` 0 errors, 0 warnings;
  `check-no-commerce` passed; `check-locale-residue --only safety` 0 error and 0 frame hits on the owned pages; warn hits
  only in reference lists and citation tooltips (EMA guideline, Janvier "Belgian market" title, the explainer's EMA EPARs)
  and the marked sentence.
- No emergency number printed (only "call your local emergency number").

## 6. Open questions for the medical and legal reviewers

1. **Per-locale ProductCheck sources.** `src/schemas/product-check.ts` has one source list per check for all locales.
   The Dutch/EU sources (Thuisarts, KNMG, IGJ, Directive 2001/83, EMA) were replaced by US/UK/CA/AU sources. When the
   Dutch ProductCheck words are written, the schema needs per-locale sources (or the Dutch page will number English-
   country sources). Owner of the schema: consider `sources: { default: [...], nl: [...] }`.
2. **UK labels not read.** The MHRA Products site requires ticking a disclaimer before showing an SmPC; the agent did not
   do that. So the thyroid (MTC/MEN 2), kidney and pregnancy points cite the US labels and Canadian monographs only, and
   the thyroid fold says "We did not check how the UK and Australian labels treat it". A reviewer could add the UK SmPC
   and Australian PI wording (they may follow the EU wording: no formal contraindication).
3. **Lab-report ladder wording** (legal): the rungs rank kinds of evidence, never sellers or labs, as CONTENT-GUIDE §1a
   allows; please confirm "an independent lab accredited to ISO/IEC 17025" and the link to the ISO standard page (a
   catalogue page that also sells the standard) are acceptable under the advertising rules.
4. **ICH Q6B scope.** The Compare column cites ICH Q6B for identity, impurity and quantity tests; Q6B covers peptides made
   in living cells, not synthetic peptides (the page says so in the fold). Medical/quality reviewer: is a US or ICH source
   for synthetic peptide specifications preferable? (A web search summary said the FDA's 2021 synthetic-peptide ANDA
   guidance has been withdrawn; not verified on fda.gov and not used.)
5. **Urgency in the injection-safety table**: "Get medical help straight away: your doctor, or a health advice line or
   urgent care when your doctor is closed" for spreading redness, red lines and fever (was "call your GP or the
   out-of-hours GP service straight away"). Same question as safety-en-a no. 2 (fever: medical help vs emergency).
6. **Monitoring costs**: the US line gives no rule ("depends on your insurance"); Scotland, Wales and Northern Ireland and
   individual Canadian provinces were not checked. Reviewer: add sourced detail if wanted.
7. **"We did not find a clinical guideline … on which checks fit people who use unapproved peptides (searched 24 October
   2026)"**: based on one web search (only commercial pages and news came up). A reviewer who knows of a professional
   society statement should replace it.
8. **Explainer `glp1-class-hypo`** (owned by another group, `src/data/explainers.yaml`) still cites the EU product
   information of Mounjaro and Ozempic; it is shown on before-you-consider and monitoring, so their reference lists show
   "European Medicines Agency" (a warn hit in the dist residue check). The US labels support the same steps (Mounjaro
   hypoglycaemia table and 5.3; Ozempic 12.1). Owner: consider switching.
9. **Infographic `online-vial-risks`** (not owned) is still titled "What may be wrong with a vial bought online"; "bought"
   is not a commerce token, but the brief prefers "a product that did not come from a pharmacy". Owner may want to align.
10. **Krug 2014 row** now says "Of what the lab found, 12.8% was peptide hormones or growth factors" (the source note says
    the base of the percentage is not given in the abstract); the previous "12.8% held …" overstated it.

## 7. Adversarial fact-check (26 October 2026, machine clock; workflow date 24 October 2026)

Method: every owned file diffed against `git show nl-source-2026-10-23:<path>` (cite ids, `<Claim>`s, KeyNumbers and
every number); every new or changed fact opened in its source. Fetched and read again today: the US labels of Wegovy
(218316s007lbl.pdf), Mounjaro (215866s044s045lbl.pdf) and Ozempic (209637s038lbl.pdf) and the Canadian monographs of
Wegovy (00086293) and Mounjaro (00085122), all with curl + pdftotext; FDA aseptic-processing guidance (2004), FDA
pyrogen/endotoxin Q&A (Edition 2, March 2026), ICH Q6B and ICH Q7 (FDA copies), the NIST ISO/IEC 17025 reporting
crosswalk, FDA "Facts about CGMP", FDA direct-to-consumer tests, FDA "concerns with unapproved GLP-1 drugs" (the
"arrived warm" complaints), FDA BeSafeRx, healthdirect "Paying for diagnostic testing", NHS "Herbal medicines", Health
Canada "Canada's health care system" (WebFetch), Food and Drug Regulations C.02.014, HMR 2012 Sch. 7 (data.xml), eCFR
211.22, 201.100, 201.17 and 211.160 (versioner API, text as of 15 October 2026), the ISO/IEC 17025:2017 page (built-in
browser, own tab, closed after), the WHO injection toolkit (IRIS text bitstream: hand hygiene incl. wrists and between
the fingers for at least 30 s, single-use paper towels; surfaces cleaned with 70% alcohol; packs punctured, torn,
damp or expired are discarded; sharps container within arm's reach) and Krug 2014 (PubMed 25168622, DOI
10.1007/s00228-014-1743-5: the 337 products were "confiscated materials" analysed in cooperation with the customs
investigation bureau, so "seized by customs" holds). Checked through their existing, fact-checked notes: the MHRA
seizures release, Health Canada RA-81874, NVLAP, MHRA GMP, TGA manufacturing, C.02.018/C.02.029, 21 CFR 211.165/167,
Janvier 2018, Blanco 2013, NCT01579695 and the 2010 Egrifta approval letter (against research/refocus/status/
tesamorelin.yaml), the privacy, record-access and second-opinion sources, the Victorian alert, CPSA, the three
melanotan II status sources, the Egrifta, sterile-water and FITTER notes.

Confirmed as written (selection): Wegovy US +1 to 4 bpm vs placebo (5.9 and 6.1); Mounjaro US +2 to 4 vs +1 (6.1);
Mounjaro monotherapy table 0% below 54 mg/dL on every dose, 115+121+119+120 = 475 adults; the US Mounjaro label gives
no washout before a planned pregnancy (8.1, 17); Wegovy US 8.3 "at least 2 months"; Canadian Wegovy contraindicated
in pregnancy and breastfeeding, 2 months, 12 to <18 with obesity and > 60 kg, not a substitute for insulin, renal
PK single 0.5 mg dose in mild, moderate, severe and dialysis, ESRD not recommended, caution after chronic or recent
pancreatitis, INR with acenocoumarol; Canadian Mounjaro contraindicated in pregnancy, 1 month, contraception as in the
US, "used with caution" after pancreatitis; Wegovy US: renal adverse reactions increased with a history of renal
impairment, PK unchanged for eGFR 30 to <90, fat mass lost more than lean mass, lipid table, sites, not IM/IV, rotate,
"alcohol swab or soap and water", storage (not adjacent to the cooling element, do not use if frozen, carton against
light); Ozempic: pen-sharing risk even with a new needle; FDA aseptic guidance: 20 units of a 10,000-unit lot at 0.1%
pass 98% of the time; NIST 7.8.2.1 l "results relate only to measured items"; ICH Q6B scope excludes synthetic
peptides; tesamorelin row and Claim match the status file (primary outcome "time to development of malignancies",
391 enrolled, terminated 2018, no results, no reason).

### Fixed in place
1. **product-risk, opening paragraph**: "has not been checked by any regulator" overstated the sources (the MHRA says
   such a product "will not have been assessed by the MHRA"; Health Canada "have not been assessed"). Now "has not been
   checked by your country's medicines regulator for safety, quality or how it was made".
2. **product-risk, lab-report ladder**: rung 4 had no "stays unknown" list (the brief: every rung lists what stays
   unknown). Added ("what is in the vial, how much, how pure, whether it holds germs or toxins from germs, and how it
   was stored and shipped. It is no better than no report."); rung 3 now also names storage and shipping.
3. **product-risk, Compare "What a medicine maker must test", impurities row**: rested only on ICH Q6B, whose scope
   excludes synthetic peptides (the very products in the left column). Added 21 CFR 211.160(b) (laboratory controls
   must assure "appropriate standards of identity, strength, quality, and purity"); new source `ecfr-21-211-160` in
   `src/data/sources/en-safety-en-b.yaml` (eCFR API, read 26 October 2026; host already allowlisted). Cell now:
   "Purity must meet set limits, and impurities are measured."
4. **before-you-consider, kidney fold**: "tested with a single dose in people with mild to severe kidney disease and on
   dialysis" was also cited to the US label, which says only "no clinically significant differences ... eGFR 30 to <90".
   Split: the general sentence keeps both labels; the single-dose/dialysis detail is now attributed to, and cited
   only to, the Canadian monograph.
5. **before-you-consider, Lead "Should I tell my doctor?"**: "must keep what you say private" had no exceptions,
   although every cited privacy source has them. Now "What you say stays private, with few exceptions." (17 words.)
6. **monitoring, fold "If your doctor does not want to do the tests"**: GMC para 49 speaks of "treatment or care",
   not "a treatment or test". Now "a doctor who thinks the care you ask for would not serve you should not provide it".
7. **monitoring, bold list label "Tests you buy yourself"**: "buy" is a commerce token (config/commerce-tokens.json;
   the brief bars commerce words in labels). Back to the nl-source wording "Tests you pay for yourself".
8. **ProductCheck certificate text** (`src/i18n/en/product-check.json`): the rewrite had dropped "It cannot show that
   your vial is clean" (nl-source), the core of the ladder rule. Restored: "It cannot show that your vial is clean, or
   how it was stored and shipped."
9. **Residue markers**: no unmarked hit in owned text (the brief's grep: only cite ids, "Canada", "separate",
   "prepare", "department"; the source residue scan: 0 hits in owned files). The existing marker on "Europe's
   side-effect database" (a peer-reviewed study of EudraVigilance) is genuine evidence. Added end-of-line
   `residue-ok: EMA evidence` markers on the seven product-risk lines that cite the EMA synthetic-peptide guideline
   (impurity chemistry, metals, breakdown, HPLC, two identity methods, co-eluting impurities, the Q6B scope line) and
   on the monitoring line citing the Wegovy EPAR body-scan substudy, as the brief asks for EMA evidence.

### No-loss check (repeated)
Every removed cite id per file is in the manifest as Dutch, Belgian, German or EU framing (product-risk 6,
monitoring 11, before-you-consider 7, injection-safety 7, sterile-technique 4, product-check 7, matching section 4).
`<Claim>`s: unchanged except the tesamorelin hypothesis Claim rewritten per the brief. KeyNumbers: 4/0/0/2/2, as
before. Numbers that left: only the EU pulse figure "3 to 5" (tirzepatide; replaced by the US label's figures), the
old search date and `last_reviewed` dates. Not in the manifest's detail but covered by its row: monitoring's "Ask
about your symptoms" list changed from "feeling sick for days, yellow skin or a racing heart" (Thuisarts) to the
Victorian alert's "yellow skin, dark urine or belly pain".

### Validation after the fixes
`validate-content --only` each owned path: 0 errors, 0 warnings. Full validator: 0 errors, 159 warnings (none in owned
files). Full `astro build` into the scratchpad (136 pages); `check-no-commerce` passed; `check-html` 0/0;
`check-locale-residue --dist`: 0 error and 0 frame hits on the five pages, warn hits only in reference lists
(citation titles: the EMA guideline, the Janvier "Belgian market" title, a journal named "European Journal of Hospital
Pharmacy", and the Mounjaro EPAR from the glp1-class-hypo explainer, not owned). No emergency number, no doses.

### Open points for the reviewers (added by the fact-checker)
11. **UK label on MTC/MEN 2.** The UK Wegovy SmPC on emc (medicines.org.uk, not allowlisted per CONTENT-GUIDE, so not
    cited; last updated on emc 22 September 2026) lists only hypersensitivity in 4.3: the UK label does **not**
    formally forbid use with MTC/MEN 2 (the US and Canadian labels do), and it gives the same "at least 2 months
    before a planned pregnancy". The page honestly says "We did not check how the UK and Australian labels treat
    it"; a reviewer with access to the MHRA Products SmPC (disclaimer page) should add the UK column, which would
    also restore the regulatory difference the EU column used to show.
12. **Fake pens in the licensed supply chain.** The removed Germany/Austria 2023 bullet (BfArM, EMA alert) was also
    evidence that falsified pens with insulin reached wholesalers and patients; reviewers may want a neutral evidence
    sentence with the residue-ok marker, next to the closing line "Only the pharmacy supply chain has these checks".
13. **Record access, UK**: monitoring step 5 says "in all four countries"; the UK source (NHS Constitution) covers
    England only.
14. **EU judgement on tirzepatide and the pill** ("not considered clinically relevant", SmPC 4.5) left with the EU
    label (manifest); if the UK SmPC says the same, the UK column of a future revision should say so.
