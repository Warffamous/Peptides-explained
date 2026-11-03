# Notes: group guides (Dutch site, 27 October 2026)

Pages written (all new, `review: pending`):

| File | Method | Base |
|---|---|---|
| `src/content/pages/nl/start-here.mdx` | adapted | current English page (24 October) + saved Dutch text of 23 October (snapshot, MANIFEST-guides-en.md), every Dutch/EU fact re-checked against `research/nl/` |
| `src/content/pages/nl/talking-to-your-doctor.mdx` | adapted | same |
| `src/content/pages/nl/index.mdx` | translated | current English page; Dutch/EU rows from the merged NL and EU data |
| `src/content/pages/nl/compounds/index.mdx` | translated | current English page; NL/EU status from the merged rows (as_of 2026-10-27) |

Other files: `src/i18n/nl/glossary/nl-guides.json` (1 new term). No new source (every id I needed was already
registered, most in `nl-research-*.yaml`, `guides.yaml`, `legal-a.yaml`, `semaglutide.yaml`), so no
`src/data/sources/nl-guides.yaml` was created. No new host for `config/link-allowlist.json` (all body links are
internal `/nl/` routes; every cited source is on an allowlisted host already).

Checked today, for wording I rely on: the Dutch Wegovy SmPC and leaflet (EMA PDF `ema-pi-wegovy-nl`, read with
pdftotext: 4.1 indications, 4.3 only hypersensitivity, 4.4 hypoglycaemia with insulin or a sulfonylurea, pancreatitis,
4.8 "zeer vaak" list, leaflet "mag niet worden gebruikt tijdens de zwangerschap"), and the Thuisarts page
`thuisarts-naar-de-huisarts` (curl, 27 October 2026: "Slikt u medicijnen van uw arts, apotheek of zelf gekocht? Schrijf
ze allemaal op", "Samen onthoudt u meer", "Maak dan een langere afspraak (20 minuten)", "Begrijpt u iets niet helemaal?
Zeg het gerust", "uw huisarts gewend is om over zulke dingen te praten. U bent niet de eerste die zoiets vertelt. Vaak
helpt erover vertellen u al", "Alle artsen in Nederland hebben een beroepsgeheim", "U kunt ook zeggen wat u van uw arts
verwacht", "Vertel ook wat u zelf al heeft bedacht", "U hoeft niet direct te beslissen"). Everything else rests on the
fact-checked research and the registered source notes.

Validation (27 October 2026): `npx tsx scripts/validate-content.ts --only <file>` gives **0 errors, 0 warnings** for each
of the four pages and the glossary file; `npx tsx scripts/check-locale-residue.ts --only <file> --details` gives **0
error, 0 frame, 0 warn** for each. Every line that names the FDA or the 503A list as evidence or in the PCAC framing
carries `{/* residue-ok: FDA evidence */}` or `{/* residue-ok: FDA PCAC framing */}`. The Australian and Canadian
regulators are named "de Australische / Canadese medicijnautoriteit" (world evidence, no residue word).

---

## 1. start-here (adapted)

**Structure kept:** stop callout, intro Lead, the six sections in English order, the same figures (Compare ×2,
Infographic `online-vial-risks`, KeyNumber, Diagrams `evidence-ladder-start-here` and `what-a-doctor-can-do`,
Checklist, ProductCheck, WarningSigns general), the folds, the FAQ with the same seven questions. Headings lost their
English numbers ("1. …"): STYLE-NL §4.3 says no numbering; the order is unchanged. The English diagram
`law-four-countries` became `law-nl-eu` (two rows: Nederland, Europese Unie; a new id because its content differs; the
designers need Dutch artwork for it).

**Came back from the saved material (re-checked):** the CBG position on "research semaglutide" (`cbg-glp1-position`,
modified 3 March 2026, wording unchanged per nl-care fact 19); the IGJ on online medicines (`igj-online-medicijnen`,
modified 23 March 2026); the Dutch law fold (Gnw arts. 1, 40, 61, 67); the Wegovy insurance passage (ZIN July 2024
advice; reassessment still open, publication "nog niet bekend"); WGBO art. 7:448; Lareb (anyone may report, also for
products from outside the pharmacy; not shared with the doctor); KNMG secrecy and its exceptions ("onder meer", as the
fact-checker of 22 October required); Thuisarts ("als je zelf een manier hebt bedacht…"); the CBG compassionate-use list
(no programme for retatrutide, list of 10 July 2026).

**Rewritten for the Netherlands (not in the saved text, or corrected):**
- §3 diagram and folds: the Dutch and EU short answers; art. 67 is no longer written as an absolute "no": since April 2023
  the minister does not enforce when no physical examination is needed and the prescriber has the medication history
  (nl-care §2 item 7; `nl-beleidsregel-voorschrijven-via-internet`, `igj-medicijnen-voorschrijven-via-internet`).
- The "research use only" point now rests on Gnw art. 1 and Customs' handbook ch. 7 (presentation and function decide),
  as nl-law facts 31–32 recommend, instead of the Canadian and Australian guidance.
- FAQ "Is het legaal om peptiden via internet te krijgen?": import from outside the EU (art. 40(2); the traveller
  exemption of art. 18(6)(a) lifts only the art. 18 licence and never covers a parcel: Rb Den Haag 2019, Customs);
  what can happen to a parcel (held, seized, IGJ informed; what happens to a given parcel is not public); intra-EU
  (art. 40(2) "anderszins binnen … te brengen"); possession for own use written as unknown. One line points Belgian
  readers to `/nl/legal/be/` (art. 12quater differs).
- §2 fold: added the IGJ warning of 20 October 2026 on stolen insulin pens that may be presented as obesity medicine
  (`igj-2026-10-stolen-medicines`, the id the merge kept).
- §4: the advertising test (brief, "Added after step 1", item 1). The STEP 1 result now stands next to the Dutch SmPC's
  indication (gewichtsbeheersing, BMI limits, adolescents from 12), the "zeer vaak" side effects, pancreatitis and the
  pregnancy contraindication (`ema-pi-wegovy-nl`); "Well-tested peptide medicines can do a lot" became the neutral "Van
  goed geteste peptidemedicijnen weten we wat ze doen, bij wie, en met welke bijwerkingen". The retatrutide result now
  carries its risks and uncertainty (stomach and gut side effects, raised heart rate, 80 weeks the longest; sources from
  the English retatrutide page: `jastreboff-2023-retatrutide-phase-2`, `bellido-2026-triumph-2`).
- §4 fold: NICE (UK) replaced by the Dutch reimbursement facts: Wegovy not in the GVS (`fk-semaglutide`, Regeling
  zorgverzekering bijlage 2), ZIN 2024 advice (uncertain health gain, up to € 1,3 miljard a year), ZIN reassessment of
  Wegovy and Mounjaro open, and liraglutide reimbursable for severe obesity under strict conditions (nl-care §2 item 10:
  readers must not be told that no obesity medicine is ever reimbursed). The retatrutide line uses the EMA list of
  October 2026 (`ema-under-evaluation-2026-10`; the saved id `ema-2026-10-under-evaluation` was merged away).
- §5: reporting is Lareb (with `lareb-2021-illegal-medicines`), information duty WGBO 7:448, secrecy KNMG/WGBO 7:457.
- FAQ PCAC answer: all five points of CONTENT-GUIDE §1 in the STYLE-NL §5.4 wording; point 5 is the NL/EU rows ("Geen van
  deze peptiden is een goedgekeurd medicijn in Nederland of de EU. … Een Amerikaanse lijst verandert niets buiten de VS.").
- FAQ side effects: Lareb (fixed phrase), plus "In België meld je een bijwerking bij het FAGG."

**Dropped citations (all US/UK/CA/AU/IE/NZ framing; replacement in brackets):**
- Four-country approval and status searches: `fda-drugsatfda-wegovy`, `fda-drugsatfda-mounjaro`,
  `uk-mhra-substance-index-status-a-2026-10-24`, `uk-mhra-substance-index-status-c-2026-10-23`,
  `mhra-products-search-status-d-2026-10-23`, `ca-pm-wegovy-2026-10-02`, `ca-sbd-mounjaro`,
  `ca-dpd-search-status-c-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`, `au-artg-wegovy-356286`,
  `au-artg-mounjaro-439430`, `au-artg-search-status-c-2026-10-23`, `au-artg-search-status-d-2026-10-23`
  (→ `ema-epar-wegovy`, `ema-epar-mounjaro`, `eu-regulation-726-2004`, `ema-medicines-json`,
  `cbg-gib-search-status-2026-10-27`).
- Four-country law (§3 diagram and fold, FAQ): `usc-21-355`, `usc-21-353`, `usc-21-331`, `ecfr-21-216-23`,
  `uk-hmr-2012-reg-46`, `uk-hmr-2012-reg-214`, `uk-hmr-2012-reg-17`, `ca-food-and-drug-regulations`,
  `ca-fdr-c08-001-new-drug`, `ca-fdr-c01-041-rx-sale`, `ca-fda-s2-definitions`, `au-tga-how-we-regulate-peptides`,
  `au-tga-2026-04-peptide-responsibilities`, `au-poisons-standard-2026-10`, `au-vic-dpcs-act-1981`,
  `au-nsw-ptg-act-1966`, `au-nsw-health-s4d`, `au-tg-act-s19b-19d-offences`, `au-tga-prescription-medicines-overview`,
  `ie-hpra-buying-prescription-medicines-online`, `ie-hpra-licensing-procedures`, `nz-gazette-2026-sl4278-classification`
  (→ `nl-gmw-art-1-geneesmiddel`, `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-61-prescription`,
  `nl-gmw-art-67-internet-prescribing`, `nl-beleidsregel-voorschrijven-via-internet`,
  `igj-medicijnen-voorschrijven-via-internet`, `eu-directive-2001-83`, `douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel`,
  `be-medicines-law-1964-art-12quater` for the Belgian pointer).
- Four-country personal import (FAQ): `fda-personal-importation`, `mhra-foi-22-431-personal-import-seizures`,
  `ca-hc-gui-0116-personal-import`, `au-tga-personal-importation-scheme`, `au-tg-regulations-1990-sch-5-item-1`
  (→ `nl-gnw-art-18-licence`, `nl-rbdha-2019-4817-postzending-eigen-gebruik`, `douane-invoer-geneesmiddelen-2026`,
  `douane-hvgem-geneesmiddelen-h12-fysiek-toezicht`).
- US expanded access for retatrutide (a US route): `fda-expanded-access-patients`, `ctgov-nct07629401`
  (→ `cbg-compassionate-use-list`, `ctis-2025-522674-36-00`).
- UK funding: `nice-ta1026-tirzepatide` (→ the Zorginstituut and GVS sources above).
- Four-country consent and privacy: `medlineplus-informed-consent-adults`, `gmc-2020-consent-seven-principles`,
  `cpsa-cma-code-of-ethics`, `mba-good-medical-practice-2020`, `hhs-hipaa-your-rights`, `gmc-confidentiality-duties`,
  `gmc-confidentiality-framework`, `oaic-handling-health-information`, `ecfr-45-164-506`, `ecfr-45-164-508`,
  `ecfr-45-164-512`, `gmc-2021-deciding-safe-to-prescribe` (→ `nl-wgbo-art-448-information`,
  `nl-wgbo-art-457-confidentiality`, `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`, `thuisarts-naar-de-huisarts`).
- Four-country side-effect reporting: `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`,
  `au-tga-report-adverse-events-consumers`, `ie-hpra-report-side-effect`, `nz-medsafe-report-a-problem`
  (→ `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `fagg-melden-bijwerking-patient`).
- UK regulator statements used as the reader's frame: `mhra-glp1-what-you-need-to-know` (→ `cbg-glp1-position`),
  `mhra-2026-01-seizures-2025` (→ `igj-online-medicijnen`, `cbg-glp1-position`).
- The US label used as "the official label": `fda-label-wegovy` (side-effect frequencies; semaglutide with insulin →
  hypoglycaemia) → the Dutch SmPC `ema-pi-wegovy-nl`, which says the same (read today). The FDA label is evidence and
  could stay; I replaced it because the brief asks for the Dutch SmPC wherever an authorised medicine's effects or risks
  are stated. Reviewer may restore it beside the SmPC if wanted.
- Kept as evidence (not framing): every FDA PCAC briefing, the PCAC meeting and voting sources, `fda-503a-bulks-page`,
  `usc-21-353a` (what a 503A listing means), `fda-pcac-2026-semax-briefing`, `fda-pcac-2026-presentations-day1`,
  `fda-unapproved-glp1-concerns`, `fda-label-ozempic` (never share pens), `nhs-low-blood-sugar`, `nhs-cellulitis`
  (medical facts; Thuisarts added beside cellulitis), `au-tga-2024-09-counterfeit-ozempic-pens` (a real counterfeit-pen
  example), `au-tga-2026-09-retatrutide-counterfeit` (world context: no comparable regulator had approved retatrutide),
  `ca-hc-2026-04-think-twice-peptides` (only for the contaminants it lists), `piatkowski-2026-…`, `smith-2013-…`, all
  science.

## 2. talking-to-your-doctor (adapted)

**Structure kept:** the eight English sections in order, the Checklist, both word tables, the Compare (one column, "Je
arts in Nederland", with the four English rows), the Diagrams `who-can-find-out` and `prescribing-routes` (three columns
as on English, "Lees meer" linking the brief's fixed anchors), all four folds, the steps table for professionals.

**Came back from the saved material (re-checked):** Thuisarts throughout (list of medicines, bring someone, longer
appointment, GPs used to difficult subjects, you need not decide at once, tell what you thought of and what you expect;
re-read today, page last changed 19 April 2024); WGBO arts. 7:448, 450, 452, 453, 454–456, 457 (version from 8 October
2026); KNMG secrecy, verschoningsrecht and the exceptions ("onder meer"); KNMG second opinion (refuse only for weighty
reasons; most insurers pay only with a referral); Gnw arts. 40, 61, 67, 68; the IGJ artsenverklaring route; CBG
compassionate use; Wet BIG arts. 35–36; Lareb; the Dopingautoriteit's value-free information and the 2010
"anabolenpoli".

**Rewritten or corrected for 27 October 2026:**
- Prescribing diagram: "online prescription from a doctor you never met: No" (saved) is now "only under strict
  conditions" with the 2023 policy rule (nl-care §2 item 7); the IGJ's term is "ontheffing" (nl-care §2 item 5);
  compassionate use names the CBG programme, manufacturer-only, and no programme for any compound on this site (CBG list
  of 10 July 2026); the pharmacy-preparation row adds the IGJ's pharmacopoeia rule (a raw material not in an official
  pharmacopoeia "kan niet zomaar worden gebruikt"), which replaces the US 503A and UK specials rows.
- New Dutch answers where English had country examples: a doctor need not prescribe (WGBO 7:453) and the NHG-Standaard
  Obesitas makes prescribing weight-loss medicines "facultatief" for GPs (nl-care facts 8, 53); the off-label step plan of
  the IGJ (May 2026); the WGBO 7:460 line (a provider may end the treatment relationship only for weighty reasons) in the
  WGBO fold; the IGJ's papers for an artsenverklaring (product information, otherwise an IB/IMPD, and GMP proof when the
  medicine has no authorisation in its country of origin) with our reading that a research-labelled product does not
  have them (nl-care §5 item 11: never say the route can work).
- Professionals: "We vonden geen richtlijn van het NHG of de KNMG … (gezocht op 27 oktober 2026)" (nl-care §5 item 9,
  the research's search) and the NHG text of October 2025 on weight-loss medicines obtained elsewhere (nl-care fact 12),
  said to be about authorised medicines.
- Trainers fold: the advertising line now follows the 2026 case law and the IGJ ("iedereen kan reclame maken, ook wie het
  middel zelf niet verkoopt"; `igj-geneesmiddelenreclame-wat-is`, `nl-gnw-art-84-85-advertising`), replacing the
  Australian and Canadian advertising guidance; "gratis aan iemand geven telt mee" rests on art. 40(2) and the art. 1
  definition of "ter hand stellen" (nl-law fact 42).

**Dropped citations (framing; replacement in brackets):**
- `au-healthdirect-questions-to-ask-your-doctor` (→ `thuisarts-naar-de-huisarts`, `nl-wgbo-art-448-information`).
- `ca-hc-2026-04-think-twice-peptides`, `mhra-2026-01-seizures-2025` in the label rows (→ `igj-online-medicijnen`).
- `fda-label-wegovy` (GLP-1 with insulin; → `ema-pi-wegovy-nl`, same fact, see start-here).
- Four-country consent, secrecy, records and second-opinion rules: `gmc-2020-consent-seven-principles`,
  `gmc-2020-consent-paras-48-49`, `gmc-confidentiality-duties`, `gmc-confidentiality-framework`, `cpsa-cma-code-of-ethics`,
  `mba-good-medical-practice-2020`, `medlineplus-informed-consent-adults`, `hhs-hipaa-your-rights`, `ecfr-45-164-506`,
  `ecfr-45-164-508`, `ecfr-45-164-510`, `ecfr-45-164-512`, `ecfr-45-164-524`, `nhs-constitution-england`,
  `opc-privacy-laws-summary`, `oaic-health-information`, `oaic-handling-health-information`, `oaic-access-health-information`,
  `au-ahpra-prescribing-unapproved-guidance` (→ WGBO arts. 7:448–460, `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`,
  `knmg-2024-second-opinion`, `thuisarts-naar-de-huisarts`, `nhg-standaard-obesitas-2025`,
  `thuisarts-obesitas-medicijnen-huisarts`).
- "Doctors are being asked" examples: `gmc-2021-deciding-safe-to-prescribe`, `ca-cpsa-2026-04-injectable-peptides`,
  `au-ahpra-2026-09-peptide-prescribing` (→ `nhg-2025-gewichtsreducerende-medicatie`, `dopingautoriteit-2025-harm-reduction-chair`).
- Four-country prescribing routes: `usc-21-353`, `usc-21-353a`, `usc-21-355`, `ecfr-21-216-23`, `uk-hmr-2012-reg-46`,
  `uk-hmr-2012-reg-214`, `mhra-gn14-specials`, `ca-fdr-c01-041-rx-sale`, `ca-food-and-drug-regulations`,
  `ca-hc-2019-investigational-use-marketed-drugs`, `fda-off-label-use`, `gmc-2021-prescribing-unlicensed`,
  `fda-expanded-access-patients`, `au-tga-sas-individual-patients`, `au-tga-peptides-health-practitioners`,
  `au-tga-prescription-medicines-overview`, `au-artg-search-status-c-2026-10-23`, `au-tga-how-we-regulate-peptides`,
  `au-tg-act-s19b-19d-offences`, `uk-mhra-substance-index-status-c-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`
  (→ `nl-gmw-art-61-prescription`, `nl-gmw-art-68-off-label`, `igj-2026-off-label-standpunt`, `nl-gmw-art-40-handelsvergunning`,
  `igj-eigen-bereidingen-apotheek`, `igj-leveren-op-artsenverklaring`, `igj-qa-zonder-handelsvergunning`,
  `ccmo-achtergrond-meedoen`, `cbg-compassionate-use-criteria`, `cbg-cup-vragen-en-antwoorden`, `cbg-compassionate-use-list`,
  `nl-gmw-art-67-internet-prescribing`, `nl-beleidsregel-voorschrijven-via-internet`, `igj-medicijnen-voorschrijven-via-internet`,
  `cbg-gib-search-status-2026-10-27`, `ema-medicines-json`).
- Four-country reporting: `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`,
  `au-tga-report-adverse-events-consumers`, and the "regulators also ask for reports about unapproved products" line with
  `fda-unapproved-glp1-concerns` (→ `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `fagg-melden-bijwerking-patient`).
- Trainers: `ca-fda-s2-definitions` ("sell includes giving away"; → `nl-gnw-art-1-lidstaat-werkzame-stof`, art. 1 "ter
  hand stellen"), `uk-hmr-2012-reg-214` (injections; → `nl-wet-big-art-35-36`), `au-tga-how-we-regulate-peptides`,
  `ca-hc-advertising-distinction-2023` (advertising; → `nl-gnw-art-84-85-advertising`, `igj-geneesmiddelenreclame-wat-is`).
- Kept: `pope-2014-ped-endocrine-statement` (world context, "een Amerikaanse medische vereniging"), `nhs-cellulitis`,
  `wada-2026-list-en`.

## 3. index (translated)

Same three sections, the Compare, the audience table, the stop callout. The Compare's three rows now answer for the EU
and the Netherlands: approval (EPARs of Ozempic, Rybelsus and Wegovy; `eu-regulation-726-2004`; prescription only,
`cbg-afslankmedicijnen`), benefits and risks weighed (EPAR; "de voordelen groter dan de risico’s", STYLE-NL §2.5), what is
inside checked (EPAR quality assessment; the EU unique identifier and anti-tampering device, `eu-regulation-2016-161`).
The audience row for "readers in the US, UK, Canada or Australia" became "Je wilt weten wat de wet in Nederland zegt"
(legal/nl, legal/eu, the Belgian notes).

**Dropped citations:** `fda-drugsatfda-wegovy`, `uk-mhra-substance-index-status-a-2026-10-24`, `ca-pm-wegovy-2026-10-02`,
`au-artg-wegovy-356286`, `usc-21-353`, `uk-mhra-substance-index-status-c-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`,
`au-artg-search-status-c-2026-10-23` (four-country status → EPARs, `ema-medicines-json`, `cbg-gib-search-status-2026-10-27`);
`ca-fdr-c08-004-notice-of-compliance`, `au-tga-prescription-medicines-overview`, `fda-label-wegovy` (how the four
regulators assess → `ema-epar-wegovy`); `ecfr-21-211-165`, `ecfr-21-211-167` (US batch testing → EPAR,
`eu-regulation-2016-161`); `mhra-glp1-what-you-need-to-know` (→ `cbg-glp1-position`); `ca-hc-2026-04-think-twice-peptides`,
`mhra-2026-01-seizures-2025` (→ `cbg-glp1-position`, `igj-online-medicijnen`). `fda-unapproved-glp1-concerns` stays
(evidence; written "de Amerikaanse medicijnautoriteit").

## 4. compounds/index (translated)

Same Compare (three groups) and the evidence-profile table, with STYLE-NL's group and axis words ("Goedgekeurd medicijn",
"Nog in klinisch onderzoek", "Experimenteel"; "Onderzoek bij mensen", "Lab- en dieronderzoek", "Onafhankelijkheid",
"Kennis van de risico’s"). The paragraph on medicines approved only elsewhere follows what `<CompoundIndex />` does on
Dutch (`approvalFor` with NL and EU rows: tesamorelin, bremelanotide, SS-31 and thymosin alpha-1 fall in "Alleen in
andere landen goedgekeurd"; semaglutide and tirzepatide in the approved group).

**Dropped citations:** `fda-drugsatfda-wegovy`, `fda-drugsatfda-mounjaro`, `ca-fdr-c08-004-notice-of-compliance`,
`au-tga-prescription-medicines-overview` (→ `ema-epar-wegovy`, `ema-epar-mounjaro`); `au-tga-2026-09-retatrutide-counterfeit`,
`uk-mhra-substance-index-status-a-2026-10-24` (retatrutide not approved → EMA list of October 2026 and `ema-medicines-json`;
the TGA world-context line stays on start-here); `uk-mhra-substance-index-status-c-2026-10-23`,
`ca-dpd-search-status-c-2026-10-23`, `au-artg-search-status-c-2026-10-23` (→ `cbg-gib-search-status-2026-10-27`,
`ema-medicines-json`); `usc-21-353`, `uk-hmr-2012-reg-214`, `ca-fdr-c01-041-rx-sale` (→ `nl-gmw-art-61-prescription`);
`fda-expanded-access-patients`, `ctgov-nct07629401` (→ `nl-gmw-art-40-handelsvergunning`, `cbg-compassionate-use-list`);
`usc-21-355`, `uk-hmr-2012-reg-46`, `ca-food-and-drug-regulations`, `au-tga-how-we-regulate-peptides`
(→ `nl-gmw-art-40-handelsvergunning`, `eu-directive-2001-83`); `mhra-glp1-what-you-need-to-know` (→ `cbg-glp1-position`).

---

## UNRESOLVED points and how the pages handle them

| Point (research) | Page | Handling |
|---|---|---|
| Possession of a few vials for own use, "in voorraad hebben" (nl-law §5.1) | start-here FAQ | Written as unknown: "we vonden geen uitspraak van een rechter of de IGJ daarover". |
| Which parcels Customs reports, local OM agreements, release of own-use parcels (nl-law §5.3, §5.4, §6.4) | start-here FAQ | Only what can happen (held, seized, IGJ informed) and "wat er met een bepaald pakket gebeurt, staat nergens openbaar". Release is not mentioned (no hint, CONTENT-GUIDE §1a). |
| Enforcement against the recipient of an intra-EU parcel (nl-law §5.5) | start-here FAQ | Only the law (art. 40(2)); enforcement left out. |
| Fines or prosecution of a private person for own-use import (nl-law §5.2) | – | Left out. |
| The IGJ's August 2026 order against a peptide webshop, and its February 2026 peptide warning (not citable) | – | Not mentioned. |
| Whether an artsenverklaring can work for a substance authorised nowhere (nl-care §5.11) | talking-to-your-doctor | States the IGJ's papers and "een product met ‘alleen voor onderzoek’ heeft die papieren niet. Dat is onze lezing"; never says the route works. |
| ZIN advice on Wegovy/Mounjaro and any 2027 reimbursement (nl-care §5.2, §5.3) | start-here fold | "Wanneer het advies komt, is nog niet bekend"; nothing about 2027. |
| No NHG/KNMG guidance on unlicensed peptides (nl-care §5.9) | talking-to-your-doctor | "We vonden geen richtlijn … (gezocht op 27 oktober 2026)", from the research's search. |
| Whether SYNERGY-Outcomes recruits in the Netherlands (nl-care fact-check) | start-here diagram | Not claimed; the row says "in de praktijk krijg je het bijna alleen binnen een klinisch onderzoek" and cites the CTIS record (trial authorised and started in NL). |
| KNMG exceptions are five grounds (fact-check 22 October) | start-here FAQ, talking | Written "onder meer". |

## Open questions for the medical or legal reviewer

1. **Legal, start-here TL;DR "Zelf invoeren mag ook niet."** It condenses art. 40(2) (no own-use exception; nl-law fact 38).
   It assumes the product is a medicine in law (presentation or function), which the body explains. Strong enough, or too
   strong for a TL;DR?
2. **Legal, start-here FAQ "Thuis hebben".** Is stating that possession of a few vials is legally unsettled acceptable, or
   could it read as a hint (CONTENT-GUIDE §1a)? Alternative: leave the line out and link `/nl/legal/nl/`.
3. **Legal, traveller exemption.** "Ook dan blijft een geneesmiddel zonder handelsvergunning verboden": our reading of
   art. 18(6)(a) against art. 40(2) (nl-law facts 7, 43a). Please confirm.
4. **Legal, art. 67 in B1** ("De wet verbiedt het, maar de minister treedt sinds april 2023 niet op als …"; nl-care §6.1),
   in the start-here law fold and the talking prescribing diagram.
5. **Legal, WGBO 7:460** ("Je arts mag de behandeling niet zomaar stoppen. Opzeggen mag alleen om gewichtige redenen."),
   in the talking WGBO fold (nl-care §6.2). Keep or drop?
6. **Legal and owner, advertising test.** start-here names one effect of an authorised medicine (STEP 1, Wegovy) with the
   Dutch SmPC indication, the "zeer vaak" side effects, pancreatitis and the pregnancy contraindication, and the ZIN's
   "werkt voor gewichtsverlies" in the reimbursement fold with a pointer to them. Enough under RvS 25 February 2026 and
   Rb Amsterdam 10 April 2026? The retatrutide result (not authorised) carries its evidence level, risks and unknowns.
7. **Legal, trainers fold.** "Volgens de IGJ kan iedereen reclame maken, ook wie het middel zelf niet verkoopt" uses the
   IGJ page and art. 84–85, in line with the brief's publisher line (an owner decision, not on these pages).
8. **Medical, NHG texts.** The NHG's "facultatief" (GPs need not prescribe weight-loss medicines) and its October 2025
   text (no responsibility for periodic checks of medication obtained elsewhere; a role in spotting side effects) are
   quoted on talking-to-your-doctor (nl-care §6.7, nl-help §6.7). Wording kept as an ally ("De huisarts let dan op
   bijwerkingen en complicaties"); the "no responsibility for periodic checks" part only in the section for professionals.
9. **Medical, world evidence on a Dutch page.** The Australian counterfeit-pen example (insulin in fake Ozempic pens), the
   Australian retatrutide statement, Health Canada's list of contaminants and the Endocrine Society statement stay as
   evidence. Acceptable, or replace with Dutch/EU sources only?
10. **Medical, "Iemand die je vertrouwt … en vitamines of andere supplementen".** Thuisarts names "medicijnen van uw arts,
    apotheek of zelf gekocht"; vitamins and supplements are our illustration of "zelf gekocht" (English cited
    healthdirect for them).
11. **Owner, Belgium.** start-here has two one-line pointers to `/nl/legal/be/` (law fold, FAQ on own use) and the FAGG line
    once (FAQ); talking-to-your-doctor has the FAGG line once. Within "a short line where the answer really differs"?

## Style terms (STYLE-NL lacks these; the word I used)

| English | Nederlands used | Note |
|---|---|---|
| (the right to stay silent towards police and courts) | verschoningsrecht | KNMG's term; explained in the sentence; new glossary entry `verschoningsrecht` |
| medical confidentiality | beroepsgeheim | Thuisarts, KNMG; glossary `medical-confidentiality` exists |
| named-patient exemption (IGJ) | ontheffing | IGJ since 9 September 2025 (nl-care §4 conflict 5 asks STYLE-NL for: ontheffing = IGJ named-patient route; vrijstelling = shortages; machtiging = insurer) |
| second opinion | second opinion | KNMG and insurers use it; glossary `second-opinion` exists |
| referral · to refer | verwijzing · verwijzen | |
| brushed off | afgescheept | heading "Als je je afgescheept voelt" |
| professional standard (WGBO 7:453) | de professionele standaard | |
| informed consent | geïnformeerde toestemming | glossary `informed-consent` exists |
| medical record | medisch dossier | glossary `medical-file` exists |
| placebo injection | nepinjectie | with "nepmiddel (placebo)" on first use, STYLE §2.3 |
| fair (randomised) trial, B1 | een studie met loting (en een nepmiddel) | STYLE §2.3 gives "loting bepaalt wie wat krijgt" |
| drug programme (Wong 2019) | medicijnprogramma | KeyNumber |
| human data | gegevens bij mensen | |
| TGA · Health Canada (as evidence) | de Australische medicijnautoriteit · de Canadese medicijnautoriteit | as STYLE §2.7 does for the FDA; no residue word |
| counterfeit pens | nep-pennen | STYLE §2.4 "nep-pen" |
| germ-free (TL;DR) | bacterievrij | |
| anabolic-steroid clinic | "anabolenpoli" | the Dopingautoriteit's word, in quotes |
| numbered chapter headings | no numbers | STYLE §4.3; English start-here numbers its six headings |

## For the final sweep (files I do not own)

1. **`/nl/legal-routes/`** must have exactly the brief's headings; these pages link `#recept`, `#off-label`,
   `#artsenverklaring`, `#magistrale-bereiding`, `#klinisch-onderzoek`, `#compassionate-use`, `#zelf-invoeren`.
2. **`/nl/safety/product-risk/`** must have `## Wat een labrapport wel en niet zegt` (linked twice from start-here). The
   home page links product-risk **without** the English anchor `#if-you-already-have-a-product`: if the Dutch page has a
   section for people who already have a product, add its heading slug to the link in `src/content/pages/nl/index.mdx`.
3. **Pages of other groups linked without an anchor** (check they exist when all groups are done): legal/nl, legal/eu,
   legal/be, legal/research-use-only, legal/sport-and-doping, safety/before-you-consider, safety/sterile-technique,
   safety/injection-safety, safety/monitoring, safety/sharps-disposal, safety/if-something-goes-wrong,
   safety/warning-signs, evidence/the-translation-gap, evidence/evidence-grading, history/the-croatian-lab,
   about/editorial-policy, the-case-for-reform, news, compounds/bpc-157, compounds/tb-500, compounds/kpv,
   compounds/retatrutide.
4. **Internal anchors in my own files:** `#de-flacon-is-niet-het-molecuul` (start-here) and
   `#je-rechten-geheimhouding-en-toestemming` (talking-to-your-doctor, linked from start-here too). If a heading changes,
   update both links.
5. **`docs/STYLE-NL.md`**: merge the "Style terms" table above (at least ontheffing / vrijstelling / machtiging,
   verschoningsrecht, afgescheept, nepinjectie).
6. **Diagram artwork:** the Dutch start-here uses a new id `law-nl-eu` (two rows, Netherlands and EU) instead of
   `law-four-countries`; the other diagram ids are the English ones with Dutch text equivalents.
7. **Glossary:** `verschoningsrecht` is in `src/i18n/nl/glossary/nl-guides.json`; `basispakket` (used on start-here) is
   already defined by `nl-about.json`. If another group later adds either term, keep one.
8. **`src/data/sources/semaglutide.yaml`, `ema-epar-wegovy` note** says "Product information last updated 21 September
   2026"; eu-status fact 12 and `ema-pi-wegovy-nl` say the product information was last updated on 26 October 2026 (the 21
   September date is the renewal). Owner of semaglutide.yaml may correct the note.

---

## Check (independent, 27 October 2026)

Adversarial check of the four pages and `src/i18n/nl/glossary/nl-guides.json` against the current English pages, the
brief (incl. "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §9–§13, and the fact-checked research
(`research/nl/*.md`, Fact-check sections first; `research/nl/status/*.yaml`; merged rows in `src/data/compounds/`).
All 105 cited ids (plus `fda-label-wegovy`, restored) were looked up in `src/data/sources/` and their notes read
against the sentence that cites them. Fetched today: the Dutch Wegovy SmPC (EMA PDF, `pdftotext`: 4.1, 4.3, 4.4, 4.6,
4.8 table), the Geneesmiddelenwet (art. 40(3)(f) "gebruik in schrijnende gevallen"), the Dopingautoriteit news item of
4 July 2025, the Thuisarts page `thuisarts-naar-de-huisarts`, the IGJ news item of 20 October 2026, and the KNMG page
`knmg-beroepsgeheim-doorbreken` ("De patiënt kan bezwaar maken tegen de gegevensverstrekking"). No new source, no new
host, no file outside this group edited. (A download was briefly written to the repo root by mistake and moved to my
scratchpad at once; nothing in the repo changed from it.)

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| start-here §3 diagram, EU row | "Het Europees Geneesmiddelenbureau (EMA) heeft geen handelsvergunning voor BPC-157 gegeven." | "BPC-157 heeft geen Europese handelsvergunning. Het staat niet in de lijst van het Europees Geneesmiddelenbureau (EMA) met alle beoordeelde medicijnen." | Fact: the EMA does not grant authorisations (the Commission does, on the CHMP's opinion); the source shows only that no EPAR record exists | `ema-medicines-json`, `eu-regulation-726-2004` |
| start-here §4 fold | "Het Zorginstituut beoordeelt Wegovy en Mounjaro (tirzepatide) bij obesitas opnieuw. Wanneer het advies komt …" | "Mounjaro (tirzepatide) wordt bij obesitas ook niet vergoed. Het Zorginstituut beoordeelt nu of Wegovy en Mounjaro bij obesitas vergoed kunnen worden. Voor Wegovy is dat een tweede beoordeling, na het advies van 2024. Wanneer de adviezen komen …" | Fact: only Wegovy had an earlier advice (2024); Mounjaro's obesity assessment is not a re-assessment; Mounjaro is reimbursed only for diabetes (nl-care facts 57, 59, 60) | `zin-wegovy-reassessment`, `zin-tirzepatide-obesity-assessment`, `nl-regeling-zorgverzekering-bijlage-2-glp1` |
| start-here §4 fold | "De meest voorkomende bijwerkingen waren klachten van maag en darmen, en de hartslag ging omhoog." | "In de studies waren klachten van maag en darmen de meest voorkomende bijwerkingen. In een eerdere studie ging ook de hartslag omhoog, meer bij een hogere dosis." | Fact: the heart-rate rise is from the phase 2 trial; the TRIUMPH-1 abstract gives only stomach and gut problems (English retatrutide page) | `jastreboff-2023-retatrutide-phase-2`, `jastreboff-2026-triumph-1` |
| start-here §4 | "Een ontstoken alvleesklier (pancreatitis) is een ernstige bijwerking, en in de zwangerschap mag je het niet gebruiken." (and one 33-word indication sentence) | SmPC frequency added: "Soms (bij minder dan 1 op de 100 gebruikers) ontstaat een ontstoken alvleesklier (pancreatitis): een ernstige bijwerking."; indication split into 3 sentences; "gewichtsbeheersing" explained as "afvallen en op gewicht blijven" | Advertising test (balanced, SmPC wording); B1. Very common list (hoofdpijn, braken, diarree, constipatie, nausea, buikpijn, vermoeidheid), "Acute pancreatitis" under "Soms", 4.6 "mag … niet tijdens de zwangerschap worden gebruikt" all confirmed in the Dutch PDF today | `ema-pi-wegovy-nl` |
| start-here §1 KeyNumber title | "De meeste medicijnen die bij mensen worden getest, worden nooit goedgekeurd" | "De meeste pogingen die tot onderzoek bij mensen komen, leiden nooit tot een goedgekeurd medicijn" | Science parity: Wong 2019 counts programmes (one drug for one indication), not medicines; English says "attempts" | `wong-2019-clinical-trial-success` |
| start-here §4 Lead | "Veel andere zijn alleen bij dieren getest." | "Bij veel andere is de belofte alleen bij dieren gezien." | Science parity: English "the promise is only in animals"; BPC-157 has small human reports, so "only tested in animals" overstated | English page |
| start-here §1 Compare, §5 diagram; talking (2 places) | `ema-pi-wegovy-nl` alone for side-effect frequencies and semaglutide + insulin → low blood sugar | `ema-pi-wegovy-nl,fda-label-wegovy` | Science parity: a US label's warnings are evidence and stay (brief, "What stays"); the Dutch SmPC remains the reader's frame | `fda-label-wegovy` |
| start-here §4 diagram, tirzepatide | "Grote studies bij mensen …" cited only to the EPAR | adds `jastreboff-2022-surmount-1` | The "large trials" claim needs the trial | `jastreboff-2022-surmount-1` |
| start-here §4 fold title | "Trage regels kosten iets, en overgeslagen onderzoek ook" (body "echte kosten", "kost ook iets") | "Trage regels hebben nadelen, en overgeslagen onderzoek ook" ("echte nadelen", "heeft ook nadelen") | Rule: "kosten/kost" are STYLE-NL §7 words, never in a fold title | STYLE-NL §7 |
| start-here §4 diagram | "maar geen medicijnautoriteit heeft de resultaten al beoordeeld. In de praktijk krijg je het …" | "maar nog geen medicijnautoriteit heeft de resultaten beoordeeld. In de praktijk is het bijna alleen binnen een klinisch onderzoek te krijgen." | Dutch grammar ("geen … al") | – |
| start-here §4 fold | "Op de lijst van oktober 2026 stond geen aanvraag voor retatrutide bij het EMA." | "Op de lijst van aanvragen die het EMA in oktober 2026 beoordeelde, stond retatrutide niet." | Says what the list is (eu-status fact 5) | `ema-under-evaluation-2026-10` |
| start-here §4 (2 Claims) | One 36- and one 31-word sentence with the Claim inside | Population and design first ("Een studie met loting … volgde 1.961 volwassenen …"), then the Claim; same level, same numbers | B1 (sentence length); CONTENT-GUIDE §1 qualifiers kept | `wilding-2021-step-1`, `jastreboff-2026-triumph-1` |
| start-here §3 law fold | One 29-word art. 1 sentence, "farmacologisch effect" unexplained | Three sentences; "een effect als medicijn (farmacologisch)" | B1, term explained on first use | `nl-gmw-art-1-geneesmiddel` |
| start-here §2 fold | "In juli 2013 waren 749 mensen ziek geworden" | "Op 1 juli 2013 …" | The source's date ("as of 1 July 2013") | `smith-2013-fungal-methylprednisolone` |
| start-here §2 fold, FAQ | "gaven weinig meer dan een zuiverheid" (2×) | "gaven weinig meer dan een uitslag voor de zuiverheid" | Unidiomatic Dutch | – |
| start-here (first mentions) | "Het Zorginstituut vond …"; "WADA houdt …"; "Voor KPV vond de FDA …" | "Zorginstituut Nederland vond …"; "Het Wereld Anti-Doping Agentschap (WADA) …"; "de Amerikaanse medicijnautoriteit FDA" | STYLE-NL §2.7 first mention | – |
| start-here (numbers) | zes dingen, twee kleine studies, deze drie peptiden, vier kleine verslagen, In twee ervan, drie tests, zes peptiden, zeven peptiden, er zes aan | digits | STYLE-NL §3 (digits from 2 up, not sentence-initial) | – |
| start-here (2 links) | "de kloof tussen lab en mens" | "de kloof tussen dier en mens" | The Dutch target page's own name (`/nl/evidence/the-translation-gap/`) | – |
| start-here FAQ "Is het legaal …" | link `/nl/legal/nl/` | `/nl/legal/nl/#zelf-invoeren-uit-het-buitenland` | Parity with the English deep link; heading checked in the Dutch file | – |
| start-here (small Dutch fixes) | "Eén studie naar gewicht had alleen al"; "Ongeveer 1 op de 7"; "Het zegt niets over of ze werken"; "Vinden ze een verboden stof"; "Thuisarts … zegt het zo:" | "Alleen al één studie naar afvallen had"; "Maar ongeveer 1 op de 7" (English "Only"); "over de vraag of ze werken"; "Vindt een dopingcontrole een verboden stof"; "schrijft ook:" (a new point, not a restatement) | Word order, clear subject, meaning | – |
| talking TL;DR | "Je arts mag weigeren de politie te antwoorden." | "Je arts mag weigeren om vragen van de politie te beantwoorden." | Unidiomatic Dutch | `knmg-beroepsgeheim-doorbreken` |
| talking checklist | "… middelen die je zelf hebt gekocht, en vitamines of andere supplementen.<Cite thuisarts>" | "… en middelen die je zelf hebt gekocht.<Cite thuisarts> Zet er ook vitamines en andere supplementen op." | Source: Thuisarts names "medicijnen van uw arts, apotheek of zelf gekocht", not vitamins or supplements (page read today); the advice stays, uncited, as advice | `thuisarts-naar-de-huisarts` |
| talking §"schaamt" fold | "Huisartsen krijgen er ook vaker mee te maken. … Die tekst gaat over goedgekeurde medicijnen, niet over peptiden zonder handelsvergunning." | "Huisartsen krijgen er ook mee te maken. … ergens anders hebben gekregen, bijvoorbeeld via internet. … Die tekst gaat over afslankmedicijnen, niet over peptiden in het algemeen." | "vaker" is not in the source; the source is about weight-loss medicines obtained by other (commercial) routes, such as the internet, and does not say "authorised only" | `nhg-2025-gewichtsreducerende-medicatie` |
| talking §professionals | "De Dopingautoriteit ziet het liefst helemaal geen dopinggebruik. Maar voor mensen die toch gebruiken, noemt ze voorlichting zonder oordeel onmisbaar." | Quoted as the chair's words ("Het liefst zien we helemaal geen dopinggebruik."), scope "mensen in de sport buiten de sportbonden", "zulke preventie … 'onmisbaar'" | Source read today: the chair (Vincent Egbers) said it about "de anders-georganiseerde sport", not all users; fold bullet "Een voorbeeld uit de antidopingwereld" repeated the body and became "Wat de Dopingautoriteit doet" | `dopingautoriteit-2025-harm-reduction-chair` |
| talking §prescribing | "… volgens de GMP-regels is gemaakt." | adds "Dat zijn de kwaliteitsregels voor het maken van medicijnen." | B1: term explained (STYLE-NL §2.6) | `igj-qa-zonder-handelsvergunning` |
| talking (B1) | KNMG/NHG search sentence (29 words), Endocrine Society sentence (26), Dopingautoriteit fold sentence (30), art. 67 row (26) | each split; "We zochten op 27 oktober 2026 … We vonden er geen." | B1 sentence length | – |
| index Compare, row 3 | "een uniek nummer en een verzegeling tegen vervalsing" | "een uniek nummer en een zegel die laat zien of het doosje al open is geweest" | The anti-tampering device shows opening, it does not stop counterfeiting | `eu-regulation-2016-161` |
| index audience table | `/nl/safety/product-risk/` | `/nl/safety/product-risk/#als-je-al-een-product-hebt` | English links the section; the Dutch page has `## Als je al een product hebt` (checked) | – |
| index | "twee heel verschillende dingen" | "2 …" | STYLE-NL §3 | – |
| compounds/index Compare | "In geregistreerde studies." | "In studies die in een onderzoeksregister staan." | STYLE-NL §2.4: "geregistreerd" reads as "approved" | – |

### Checked and left as written

- Science parity: every English `<Cite>` not in the Dutch pages is US/UK/CA/AU/IE/NZ framing and is listed by the writer
  above, except `fda-label-wegovy` (now restored). All three English `<Claim>` levels, all numbers (1.961; 17.604;
  13,8%; 41.040; 6 van 53; 32 and 53; 33; 749 and 61; 2.339; 17,6–25,0% vs 3,9%; 15% vs 2,4%; 28 dagen) and every
  figure (Compare ×2, KeyNumber, Infographic, Diagrams, Checklist, ProductCheck, WarningSigns, FAQ with 7 items) are
  present with the same meaning. talking and the two index pages have no Claims; their figures are all there.
- Dutch and EU facts (all match the Fact-check sections): Gnw arts. 1, 18(6)(a), 40(2)–(3), 61(9), 67, 68 and the 2023
  policy rule (nl-law facts 2–10, 38–43; nl-care §2 item 7); Rb Den Haag 2019; Customs (parcel can be held, seized, IGJ
  informed; which parcels is not public); possession written as unknown (nl-law 5.1); WGBO 7:448, 450, 452, 453,
  454–456, 457, 460; KNMG secrecy (five grounds, written "onder meer"), presumed consent with the right to object; KNMG
  second opinion; NHG-Standaard Obesitas "facultatief" and referral; IGJ off-label standpunt (exception only "in
  uitzonderlijke individuele situaties"); IGJ artsenverklaring and Q&A ("uiterste gevallen", "terughoudend", papers);
  CBG CUP criteria and list (none of the site's compounds, nl-care fact 39); Lareb (anyone, for someone else, products
  bought online, "waarschijnlijk veroorzaakt", not shared with the doctor, professionals must report serious ones, nl-help
  facts 19–22); FAGG line; ZIN 2024 (€ 1,3 miljard, uncertain health gain); NHG "op eigen kosten"; liraglutide bijlage 2
  item 141c; retatrutide investigational in NL and EU (status file; CTIS start in NL, recruitment not claimed); CBG GLP-1
  standpunt quote; IGJ 20 October 2026 (insulin pens possibly presented as obesity medicine; page read today);
  Belgian art. 12quater (be-notes, law unchanged).
- Rules: no `/en/` link, no link to legal/us, uk, ca, au or ireland-and-new-zealand; every `/nl/` target exists; anchors
  `#recept`, `#off-label`, `#artsenverklaring`, `#magistrale-bereiding`, `#klinisch-onderzoek`, `#compassionate-use`,
  `#zelf-invoeren` match the headings of `src/content/pages/nl/legal-routes.mdx`; `#wat-een-labrapport-wel-en-niet-zegt`
  matches `/nl/safety/product-risk/`; the two self-anchors match their headings. Bel 112 in both stop callouts and the
  home TL;DR; no US/UK/CA/AU help, reporting, routes or insurance; Belgium only in one-line pointers and the FAGG line.
  PCAC FAQ has all five points (STYLE-NL §5.4 wording). No dose, schedule, seller hint, "u", or §5.6 word; no commerce
  word in any title, heading, Lead question, fold title, figure title, label or link text (scan after the fixes).
- Frontmatter: translation blocks, `reviewed_by: pending-medical-review`, `reading_level: B1`, related keys (all Dutch
  routes), `last_reviewed: 2026-10-27`. Glossary `verschoningsrecht`: B1, country named, ≤ 400 characters, `see_also`
  `medical-confidentiality` exists (`src/i18n/nl/glossary/safety-a.json`); no duplicate id in `src/i18n/nl/glossary/`.
- Validation after the fixes: `validate-content.ts --only` gives 0 errors, 0 warnings for each page and the glossary
  file (one Lead warning of 19 words was fixed); `check-locale-residue.ts --only … --details` gives 0 error, 0 frame,
  0 warn for each.

### Remaining concerns for the reviewer

1. **IGJ news of 20 October 2026** (`igj-2026-10-stolen-medicines`, start-here §2 fold): title and URL name no company,
   but the page's "Meer over dit onderwerp" box links a media item whose title names the manufacturer. CONTENT-GUIDE §11
   bars titles and URLs only; please confirm the citation may stay.
2. **`fda-label-wegovy` restored** beside the Dutch SmPC in four cells (brief: a US label's warnings stay as evidence).
   If the medical reviewer prefers the Dutch SmPC alone where the cell says "officiële productinformatie", drop it from
   the start-here §1 Compare cell only.
3. **"Wie Wegovy gebruikt, betaalt het dus zelf."** rests on the basispakket facts and the NHG's "op eigen kosten";
   whether any supplementary insurance (aanvullende verzekering) pays was not researched.
4. The writer's open questions 1–11 above still stand (TL;DR "Zelf invoeren mag ook niet."; the "thuis hebben" line;
   the traveller exemption reading; art. 67 in B1; WGBO 7:460; the advertising test; the trainers' advertising line; NHG
   wording; world evidence on Dutch pages; Belgium pointers). Item 10 is resolved: vitamins and supplements are no
   longer attributed to Thuisarts.
5. The PCAC FAQ keeps "Zoals gemeld vanuit de openbare vergadering, stemde de commissie met 8 stemmen voor, 6 tegen en
   1 onthouding …" as one 27-word sentence, so the canonical qualifier stays attached to the counts.
6. **Style term for the final sweep:** "GLP-1-middelen" (talking-to-your-doctor, 2×) for GLP-1 products in general,
   approved or not; STYLE-NL §2.5 has only "GLP-1-medicijnen" (B1) and "GLP-1-agonisten", and "medicijn" may not name an
   unapproved product (§5.6). Merge one line, or change both to "GLP-1-medicijnen" if the sweep decides the examples are
   approved medicines only.
7. `src/i18n/nl/glossary/guides.json` (untracked, not in this group's file list) defines `informed-consent`,
   `medical-file` and `second-opinion` that these pages auto-link; its owner should confirm it ships.
