# Research notes: tesamorelin (group `tesamorelin`)

Written 22 October 2026 for `compounds/tesamorelin` (Tier 1, complete). Files owned:
`src/data/compounds/tesamorelin.yaml`, `src/content/compounds/en/tesamorelin.mdx`,
`src/data/sources/tesamorelin.yaml`, `src/i18n/en/glossary/tesamorelin.json`, this file.
Shared files touched (entries added with Edit only): `src/data/media.yaml` (`adipose-tissue-micrograph`),
`src/data/heroes.yaml` (`compounds/tesamorelin`), `src/i18n/en/media.json` (alt text and caption).

No earlier draft existed (no tesamorelin files in `git status` at the start), so this is a first write.

## 1. Key facts and where they come from

| Fact | Source id |
|---|---|
| Human GHRH(1-44)-NH2, 44 amino acids, first isolated in 1982 from a pancreatic tumour that caused acromegaly; sequence Tyr-Ala-Asp-…-Arg-Leu-NH2 | `guillemin-1982-ghrh-tumour` |
| Tesamorelin = the same 44 amino acids + a hexenoyl group (C6, double bond at position 3) on Tyr1; acetate salt; C221H366N72O67S; 5135.9 Da (free base) | `dailymed-egrifta-sv-label`, `dailymed-egrifta-wr-label`; PubChem CID 16137828 (`pubchem-tesamorelin`: formula, MW 5136, SMILES with CC/C=C/CC(=O) start and Leu-NH2 end); ChEMBL CHEMBL1237026 (`chembl-tesamorelin`) |
| Hexenoyl group resists DPP-4; slower degradation in rat, dog and human plasma; GH and IGF-1 up in pigs, rats, dogs; dogs: reversible liver/kidney/anaemia findings with sustained high GH/IGF-1 | `ferdinandi-2007-th9507-nonclinical` (developer) |
| Half-life 8 min (Egrifta SV) and 11 min (Egrifta WR) in healthy people; bioavailability < 4% | `dailymed-egrifta-sv-label`, `dailymed-egrifta-wr-label` |
| In vitro: binds and stimulates human GRF receptors with potency similar to endogenous GRF; no clinically significant change in TSH, LH, ACTH, prolactin | labels |
| 13 healthy men, 2 weeks: pulsatile and basal GH up, IGF-I +181 µg/L, clamp unchanged | `stanley-2011-tesamorelin-gh-pulsatility` |
| Most prominent metabolic effect of GH = lipolysis; GH antagonises insulin via FFA flux | `moller-2009-gh-metabolism` (also registered by cjc-1295, see §6) |
| Approval: Egrifta 10 Nov 2010 (NDA 22-505, Theratechnologies); 2 mg vial renamed Egrifta SV 5 Jul 2019 (S-012); Egrifta WR (new formulation, multiple-dose presentation) 25 Mar 2025 (S-020); "This Former NDA Was Deemed To Be a BLA on March 23, 2020" | `fda-drugsatfda-egrifta`, `fda-2010-egrifta-approval-letter`, `fda-2019-egrifta-sv-name-letter`, `fda-2025-egrifta-wr-approval-letter` |
| FDA advisory committee (EMDAC) 27 May 2010: 16-0 for approval; several cited testimonials and lack of approved therapy; FDA: "data are absent on the long-term clinical benefits … and the long-term risks of elevated IGF-1" | `fda-2010-egrifta-summary-review` |
| FDA postmarketing requirements: 10-year observational safety study (malignancy primary) and 3-year RCT of diabetic retinopathy with MACE adjudication; FDA also named "microbial contamination possibly resulting in soft tissue infections which can occur during product reconstitution" | `fda-2010-egrifta-approval-letter` |
| Both PMR studies TERMINATED (NCT01579695: 391 enrolled; NCT01591902: 129 enrolled), primary completion May 2018, no results posted, no reason in the record | `ctgov-nct01579695`, `ctgov-nct01591902` |
| EU: application EMEA/H/C/002427 (Ferrer Internacional) withdrawn 21 June 2012; CHMP provisional view negative (clinical meaningfulness, representativeness, IGF-1 a "major safety concern", no long-term data) | `ema-egrifta-withdrawal`, `ema-medicines-json` |
| Phase 3 Study 1 (NCT00123253): 412; VAT −15.2% vs +5.0%; IGF-1 +81%; more withdrawals for AEs on tesamorelin | `falutz-2007-nejm-tesamorelin` |
| Study 2 (NCT00435136): 404; VAT −10.9% vs −0.6% | `falutz-2010-tesamorelin-jaids` |
| Pooled 806: treatment effect −15.4%; no meaningful glucose change | `falutz-2010-tesamorelin-pooled` |
| Extension: VAT −18% at 52 weeks with continued use; "Upon discontinuation … VAT reaccumulated"; label Table 4: T-P +22% (Study 1, n = 50) and +16% (Study 2, n = 85) | `falutz-2008-tesamorelin-extension`, labels |
| Weight −0.4 vs 0.0 kg (Study 1); label: "weight neutral", not for weight loss | labels |
| Label Table 1 (26 weeks, 543 vs 263): injection-site reaction 17 vs 6; arthralgia 13 vs 11; pain in extremity 6 vs 5; myalgia 6 vs 2; peripheral oedema 6 vs 2; paraesthesia 5 vs 2; hypoaesthesia 4 vs 2; rash 4 vs 2; vomiting 3 vs 0; carpal tunnel 1 vs 0 | `dailymed-egrifta-sv-label` (table read from the SPL XML: three cells, terms / placebo column / tesamorelin column) |
| Warnings: injection-site reactions 25% vs 14% (section 5.6); hypersensitivity 4%; HbA1c ≥ 6.5% 5% vs 1% (HR 3.3, CI 1.4–9.6); IGF-1 > 2 SDS 47%, > 3 SDS 36% at 26 weeks; antibodies 50% (26 wk), cross-reactive with GHRH in ~60% of them, neutralising 10%/5% at 52 wk, 18% still positive 6 months after stopping (of those positive at 26 weeks); rats: hydrocephaly at ~2–4× exposure, delayed skull ossification at 0.1–1×; no lifetime rodent carcinogenicity; no info > 65 years; children with open epiphyses; critical illness | labels |
| Liver: JAMA 2014 (50): VAT −42 cm², liver fat net −2.9%; Lancet HIV 2019 (61): HFF −4.1% (−37%), 35% vs 4% < 5%, fibrosis progression 2/19 (10.5%) vs 9/24 (37.5%), no improvement of existing fibrosis, 2 hyperglycaemia withdrawals; drug at reduced cost from Theratechnologies | `stanley-2014-tesamorelin-liver-fat`, `stanley-2019-tesamorelin-nafld` (full text, PMC6981288) |
| Outside HIV: obesity (60, 12 months), type 2 diabetes (53, 12 weeks), cognition (152, 20 weeks; 73 HIV, 6 months; 22 pilot, 10 weeks) | `makimura-2012-tesamorelin-obesity`, `clemmons-2017-tesamorelin-type-2-diabetes`, `baker-2012-ghrh-cognition`, `ellis-2025-tesamorelin-cognition`, `stewart-2026-ghrh-cognition-pilot` |
| Anti-ageing: TH9507 was "being developed for … age-associated conditions" (2004); 2003 review: results "do not yet support the routine use of GHRH or GHS in normal aging"; no trial measured ageing or survival; label: no information > 65 | `jansen-2004-th9507-dog`, `merriam-2003-ghrh-aging`, labels, `badran-2026-tesamorelin-meta-analysis` |
| US: biological products deemed BLAs on 23 March 2020 "will not be eligible for the exemptions for compounded drugs under sections 503A and 503B"; a protein = > 40 amino acids | `fda-2020-notice-compounders-biologics`, `ecfr-21-600-3-protein` |
| FDA warning letters (24 August 2026) to online sellers named tesamorelin among products; RUO labels do not stop them being unapproved new drugs | `fda-warning-letters-index` (letters read by legal-a/legal-b; a web search on 22 October 2026 also showed letters 735067, 734884, 733652, 735063 and 735127 of 24 August 2026 naming tesamorelin) |
| Not discussed at the PCAC meeting of 23–24 July 2026 (seven peptides: BPC-157, KPV, TB-500, MOTS-c, emideltide, Semax, epitalon) | `fda-pcac-2026-07-meeting` (fetched 22 October 2026) |
| WADA 2026 and 2027 Lists: S2.2.4 "growth hormone-releasing hormone (GHRH) and its analogues (e.g. CJC-1293, CJC-1295, sermorelin and tesamorelin)", prohibited at all times | `wada-2026-list-en`, `wada-2027-list-en` (PDFs downloaded and searched) |
| Germany: AntiDopG Anlage II.2.4 lists tesamorelin as a GHRH example | `de-antidopg-anlage` (fetched; the tb-500 note mentions only TB-500, but the page says what we cite it for) |
| UK: MHRA Products: "There are no search results for tesamorelin" / "egrifta" | `mhra-products-search-tesamorelin` |
| NL: CBG data file (metadata.csv, 19,553 lines, downloaded 22 October 2026): 0 rows for tesamorelin or Egrifta (control: 33 rows for semaglutide); no H01AC06 product | `cbg-geneesmiddeleninformatiebank` |

## 2. Verification log

- **PubMed** (MCP tools, 22 October 2026). Searches: `tesamorelin[tiab] AND (Clinical Trial[pt] OR RCT[pt])` → 23 records; `(tesamorelin OR TH9507 OR "TH 9507") NOT (Clinical Trial OR RCT)` → 100 records; animal/in-vitro filters → 3 and 10 records. Metadata of every cited article (authors, title, journal, year, volume, pages, DOI, PMID, PMCID) copied from `get_article_metadata`. Full texts read for funding and key numbers: PMC6981288 (Stanley 2019), PMC4363137, PMC3764914, PMC10901320, PMC13316082 (funding statements).
- **Preclinical count** for the grade: primary animal/laboratory studies naming tesamorelin/TH9507 = Ferdinandi 2007, Jansen 2004, Chege 2024, Chege 2026 (ECG, same rats), Knoop 2016 (detection in rat plasma), Memdouh 2021 (in-vitro metabolism for doping control). ≤ 6 → **minimal**.
- **Labels**: openFDA `drug/label.json?search=openfda.generic_name:tesamorelin` → 2 labels (EGRIFTA SV set 3d783378…, EGRIFTA WR set 839334d3…, both effective 29 July 2026, BLA022505). SV SPL XML downloaded from DailyMed to check the adverse-reaction table layout. Drugs@FDA overview and the PDFs of letters S-000, S-011, S-012/013, S-020, labels S-018 (Feb 2024) and S-020 (Mar 2025) and the 2010 Summary Review downloaded and read (pdftotext).
- **EMA**: medicines JSON (2,754 records) searched: one hit, Egrifta, "Application withdrawn", withdrawal 21/06/2012, applicant Ferrer Internacional S.A.; EPAR page (withdrawal Q&A) fetched and read.
- **ClinicalTrials.gov**: intervention search → 24 records; API v2 status modules for NCT01591902 and NCT01579695 (no `whyStopped` field, last update September 2018, no results). NCT07481734 is titled "(Mock Study)" (sponsor "Hudson Biotech") and was ignored.
- **ChEMBL**: compound search and API molecule record; biotherapeutic sequence reversed and compared programmatically with the Guillemin sequence (identical, 44 residues).
- **MHRA**: products.mhra.gov.uk loads results with JavaScript; searched in the built-in browser for "tesamorelin" and "egrifta" (both "no search results"). We did not use the site's embedded search-API key.
- **FDA compounding notice**, **eCFR 600.3** (reused id, text re-read via the versioner API), **IGJ artsenverklaring** page (re-read), **NHS high blood sugar** (re-read; id registered by the ipamorelin group), **WADA PDFs** (downloaded with a browser user agent; plain curl returned 0 bytes).
- **Page render**: `astro dev` on port 4399; `/en/compounds/tesamorelin/` returned 200; At a glance, stop strip, fact sheet, AuthorisedProducts, RegulatoryTable, StudyTable and ProductCheck (with the "For Tesamorelin" extra line) rendered; no "undefined"/"NaN". MDX also compiled with `@mdx-js/mdx`.

## 3. Conflicts and how they were resolved

- **Half-life**: SV label 8 minutes (1.4 mg of the SV formulation), WR label 11 minutes. Page says "about 8 to 11 minutes" and cites both.
- **Injection-site reactions**: label Table 1 gives 17% vs 6% (pooled preferred terms, ≥ 1% and more frequent than placebo); section 5.6 gives 25% vs 14%. Both are on the page, each attributed (IconArray uses Table 1; the allergy fold names the warnings-section figure). The reason for the difference is not stated in the label; we do not guess.
- **VAT effect size**: Study 1 −15.2% vs +5.0% (paper); label Table 2 gives LSM −18% vs +2% (Study 1) and −14% vs −2% (Study 2) from a log model; pooled treatment effect −15.4%. The page uses the published paper's figure for the KeyNumber and the pooled figure in the fold.
- **Glucose**: phase 3 papers report "no clinically meaningful" glucose change, but the label reports HbA1c ≥ 6.5% in 5% vs 1% (HR 3.3) and the 2019 trial withdrew two people for hyperglycaemia. The page reports all three and explains the mechanism (GH antagonises insulin).
- **"Every human study"**: the page lists every published *controlled* trial naming tesamorelin that we found, plus the uncontrolled mechanism study (Stanley 2011). Secondary analyses of the same trials (Stanley 2011 AIDS, Stanley 2012 CID, Mangili 2015, Braun 2017, Adrian 2019, Fourman 2020, Stanley 2021, Russo 2024, Makimura 2011/2013, Friedman 2013, Winston 2018) and the phase 1 population-PK analyses (González-Sales 2015 ×2) are not listed as separate studies. Vitiello 2006 (89 older adults, "GHRH") does not name the GHRH product in its abstract, so it was not counted.
- **Independence classification**: MGH studies are NIH-funded and investigator-led, but S. Grinspoon is senior author of the phase 3 reports and the developer supplied drug at reduced cost for the 2019 trial. Marked `group: mixed` in the data file; the prose explains why.
- **Safety grade**: rubric "well-characterised = large trials plus post-marketing surveillance". Tesamorelin has two phase 3 trials (816 randomised; 740 exposed, ≤ 52 weeks) and US marketing since 2010, but the FDA itself found spontaneous reporting insufficient, the two required long-term studies were terminated without results, and the label says long-term CV safety and the effects of prolonged IGF-1 elevation are unknown. Graded **partial**. Flagged for the reviewer (§5).
- **PCAC framing**: tesamorelin was not discussed; the page says so in one sentence and links to the BPC-157 page instead of restating the vote, so the canonical five-point framing does not apply here.
- **"US only"**: not verified (Canada and other countries not checked), so the page says "in the US" and "authorised outside the EU", never "only in the US".

## 4. Validator log

`npx tsx scripts/validate-content.ts --only tesamorelin`: **0 errors, 1 warning** (22 October 2026, last run):

- `duplicate source id "moller-2009-gh-metabolism" (also in src/data/sources/cjc-1295.yaml)`. Both groups registered the same PMID/DOI with identical metadata in parallel (ours was written first, 21:18 vs 21:25). The validator merges them. One of the two groups should delete its copy at merge time; do not delete both.

Earlier warnings fixed: lede length, two Lead answers (length, reading ease), three figure titles (reading ease, length), the ProductCheck extra line (reading ease) and the hero caption length.

Full-site validation shows 2 errors in `cjc-1295` files (another group's work in progress), none in ours.

## 5. Open questions for the medical and legal reviewers

1. **Safety grade** (partial vs well-characterised): see §3. Is 740 people over ≤ 52 weeks plus 16 years of US marketing "large trials plus post-marketing surveillance" when the required long-term studies were terminated?
2. **Why were NCT01579695 and NCT01591902 terminated?** The registry gives no reason; FDA's PMR database only shows open or recently closed requirements. If the FDA released or the company was allowed to stop these PMRs, the page should say so (we found no public record).
3. **Belgium**: the FAMHP medicines database answers automated requests with a CAPTCHA, so the Belgian national register was not searched directly; "not authorised" rests on the 1964 Act plus the absence of any EU authorisation. Please confirm on the FAMHP site.
4. **Germany**: national authorisation was inferred from AMG § 21 and the EU record; PharmNet.Bund/AMIce was not searched (JavaScript application). Please confirm.
5. **Netherlands**: is a tesamorelin artsenverklaring realistic in practice (art. 3.17(b): "no adequate alternative available in NL")? The page only describes the route and says it can be refused.
6. **Hypothesis wording on cancer**: the page says the worry is promotion of an existing tumour, not initiation, and that standard genotoxicity tests cannot detect promotion. Medical reviewer to confirm the phrasing.
7. **Stop-now list**: high-blood-sugar symptoms are taken from the NHS page (`nhs-high-blood-sugar`, registered by the ipamorelin group). Check the actions ("Stop and have your blood sugar checked soon"; "If you also vomit, breathe fast, feel very sleepy or confused, get urgent help", added by the fact-checker from the same NHS page) fit Dutch practice.
8. **Checks list** (fact-checker): "The cancer screening due for your age, and any unexplained lump checked first" is a mechanistic inference from the label's malignancy warnings (5.1), not a label instruction. Medical reviewer to confirm or soften.
9. **Egrifta SV `authorised` date** (fact-checker): the data file gives 10 November 2010 (the BLA's original approval). The 2 mg vial itself was approved later (label S-010, "Revised: 11/2018"; Drugs@FDA lists no action date for S-010) and renamed Egrifta SV on 5 July 2019. Editor to decide whether the AuthorisedProducts box should show the 2010 date.

## 6. Contract notes

- **Shared ids from uncommitted parallel work**: `nhs-high-blood-sugar` lives in `src/data/sources/ipamorelin.yaml` (untracked at the time of writing). If that file changes, the stop-now citation breaks.
- **Hero**: the obvious choice, an anterior pituitary micrograph, was registered and used by the ipamorelin group (`anterior-pituitary-histology`) minutes before; tesamorelin uses a CC0 adipose-tissue micrograph (Berkshire Community College Bioscience Image Library, `adipose-tissue-micrograph`), which matches its one tested effect (deep belly fat). A CC BY-SA CT pair of a normal-weight and an obese abdomen (`File:FatCT2008.JPG`) was rejected because it reads as a before/after.
- **Diagram**: `<Diagram id="tesamorelin-gh-axis">` is a table text-equivalent of the GH-axis chain; the backlog explainer `gh-axis-feedback` (docs/EXPLAINERS.md) would replace it.
- **Glossary**: 20 new ids; checked against all glossary files, including the parallel `ipamorelin.json` (which defines `somatotroph`, `pulsatile-secretion`, `oedema`, `hyperglycaemia`, `cortisol`; we did not redefine those).

## 7. Fact-check log (independent fact-checker, 22 October 2026)

Brief date 20 October 2026; system date and all checks 22 October 2026 (as the writer noted).

### What was checked, and how

- **Every scholarly source (21 PMIDs)** re-fetched with PubMed `get_article_metadata`: authors, title, journal, year, volume, pages, DOI and PMID match the records for all of them (Guillemin 1982, Ferdinandi 2007, Jansen 2004, Chege 2024, Stanley 2011, Møller 2009, Falutz 2007/2008/2010 ×2, Stanley 2014, Stanley 2019, Makimura 2012, Clemmons 2017, Baker 2012, Ellis 2025, Stewart 2026, Merriam 2003, Badran 2026, Memdouh 2021). No fabricated or mismatched DOI found. Stanley 2011 is e-published October 2010 but in the 2011 issue (vol 96); year 2011 kept.
- **Full texts** (PMC, via WebFetch) read for funding, drug supply and key numbers: PMC10901320 (Chege), PMC6981288 (Stanley 2019), PMC4363137 (Stanley 2014), PMC3513535 (Makimura), PMC3038486 (Stanley 2011), PMC5472315 (Clemmons), PMC3764914 (Baker), PMC13316082 (Stewart).
- **Registry** (ClinicalTrials.gov API v2): NCT01579695 and NCT01591902 (terminated, 391 and 129 enrolled, primary completion May 2018, no results, no `whyStopped`; the "not studied for longer than 1 year" quote confirmed), NCT06554717 (phase 2, recruiting, 100 estimated, primary completion 16 June 2028), NCT01264497 (Clemmons; February–November 2002), NCT02553603 (Stewart; 22 enrolled), NCT00257712 (Baker), NCT02572323 (Ellis; sponsor UCSD, phase 2, 73).
- **Labels**: openFDA JSON for both current SPLs (Egrifta SV set 3d783378…, Egrifta WR set 839334d3…, both effective 29 July 2026) read section by section: indication and limitations, contraindications, warnings 5.1–5.7, Table 1 (column order placebo then Egrifta: 17/6, 13/11, 6/5, 6/2, 6/2, 5/2 …), mean baseline HbA1c 5.3%, HbA1c ≥ 6.5% 5% vs 1% (HR 3.3), IGF-1 SDS (47%/36% at 26 weeks), immunogenicity (50%, ~60% cross-reactive, 18% persistent, 10%/5% neutralising), clinical studies (inclusion 18–65; exclusion of type 1/2 diabetes on medicines; Study 1 weight −0.4 vs 0.0 kg, n 273/137; Table 4 T-P +22% (n 50) and +16% (n 85)), PK (8 min SV, 11 min WR, bioavailability < 4%), drug interactions (simvastatin, ritonavir, 11βHSD-1), pregnancy (hydrocephaly at ~2 and ~4× exposure; skull ossification at 0.1–1×), paediatric, geriatric, nonclinical (no lifetime rodent studies; genotoxicity negative), how supplied (two boxes; the medication box contains the Patient Instructions for Use).
- **FDA documents** (PDFs downloaded fresh and read with pdftotext): Drugs@FDA overview (approval 10 November 2010; "This Former NDA Was Deemed To Be a BLA on March 23, 2020"; S-018 27 February 2024; S-020 25 March 2025; S-012/S-013 5 July 2019), 2010 approval letter (505(o) findings incl. "microbial contamination … during product reconstitution"; PMR 1708-1 single 2 mg vial; 1708-2 ≥ 10-year observational study; 1708-3 RCT on retinopathy "after a minimum of three years", with glucose and MACE), S-012/S-013 letter (renaming to Egrifta SV), S-020 letter (new formulation, multiple-dose presentation), Division Director Summary Review (Mary H. Parks, 5 November 2010; EMDAC 27 May 2010, "All 16 voting members voted 'yes'"; testimonials and absence of approved therapy; "not accompanied by robust or consistent changes"; "similar side-effects (albeit attenuated)"; "data are absent on the long-term clinical benefits … and the long-term risks of elevated IGF-1 levels"; "the FDA did not require evidence of CV risk reduction"), FDA compounding notice (content current as of 5 March 2020; 503A/503B exemptions not available to transitioning biologics), PCAC meeting page (seven peptides; tesamorelin not mentioned).
- **Europe and UK**: EMA EPAR page (withdrawal 21 June 2012 by Ferrer Internacional; CHMP provisional opinion "could not have been approved"; lower BMI and "smaller amounts of abdominal fat" in European patients; IGF-1 "major safety concern"; "no long-term safety data"; 816 patients) and EMA medicines JSON (Egrifta, EMEA/H/C/002427, "Application withdrawn", withdrawal 21/06/2012). CBG metadata.csv re-downloaded (19,553 lines; 0 rows for tesamorelin/Egrifta; 33 for semaglutide). MHRA Products search for "tesamorelin" re-run in the built-in browser: "There are no search results for tesamorelin". AntiDopG Anlage fetched: section 2.4 lists Tesamorelin. Legal notes for Gnw art. 40, Regeling Gnw 3.17, IGJ artsenverklaring, AMG §§ 21 and 73, Belgian 1964 Act art. 6/6quater and HMR 2012 reg. 46/167 were read in the other groups' fact-checked registry entries and the page wording compared with them.
- **WADA**: 2026 and 2027 List PDFs downloaded fresh (browser user agent): S2.2.4 names tesamorelin in both; S2 is under "prohibited at all times".
- **Molecule**: PubChem CID 16137828 (formula, MW 5136, synonyms; data-file SMILES identical to PubChem's), ChEMBL CHEMBL1237026 (protein, phase 4, first approval 2010, ATC H01AC06); sequence in the data file identical to the Guillemin 1982 abstract.
- **Hero image**: Commons file page API: CC0 (Berkshire Community College Bioscience Image Library); image viewed; alt text accurate; no product, vial, needle or person.
- **Canada** (not cited, for the record): Health Canada DPD lists two Egrifta DINs, both cancelled (post-market 30 September 2022; pre-market 13 July 2023). So "in the US" remains the right wording; other countries were not checked.

### What was changed

1. **Chege 2024 (data + study text + source note)**: the study did not feed all 120 rats high-calorie diets (40 had standard chow; the tesamorelin effect was shown on the two high-calorie diets). Finding rewritten. Funding was not "undisclosed": the paper states "The author(s) received no specific funding for this work". `funding: undisclosed` → `academic`; limitation and note corrected.
2. **Baker 2012**: "half with mild memory problems" was wrong (66 of 152 = 43%); now "66 of them". "A small benefit … not repeated in later trials" replaced with what the paper says (combined-score benefit, mainly executive function; single-test gains ~0.25 SD, the authors' own words) and what later trials did (two later, smaller trials in other groups found no clear benefit). "Planning and attention" → "executive function (planning, switching between tasks and self-control)". Drug supplied free by Theratechnologies added (full text). The anti-ageing fold's closing sentence rewritten to match.
3. **Makimura 2012**: full text says "Partial research funding and study drug was provided by Theratechnologies". `funding: government` → `mixed`; limitation and note updated.
4. **Who paid / independence**: added, from the full texts, that the MGH senior author has been a consultant to the developer and (2019 paper) a member of its scientific advisory board, and that the developer supplied the drug for the MGH trials (donated 2011 and 2014; reduced cost 2019) and part-funded the 2012 trial; the developer also supplied the drug free for two of the three thinking trials (Baker, Stewart). Grade rationale for independence and the data-file comment updated. The `few-groups` grade stands.
5. **"About a third" with IGF-1 > 3 SDS** → "more than a third" (36%) in three places (mechanism step, feedback fold, checks list).
6. **Pregnancy unknown**: "no data in human pregnancy" is not a label statement; replaced with "the label forbids it, based on findings in rats". Children: "safety and effect … have not been established" (label 8.4).
7. **Genotoxicity sentence**: the claim that such tests "detect the start of a cancer, not the growth of one" was unsourced; now stated as a hypothesis-level claim (tests look for gene damage and are not designed to show tumour promotion), separate from the sourced "tests were negative".
8. **Critical illness**: reworded to the label's population (critically ill after open-heart or abdominal surgery, multiple trauma, or acute respiratory failure, given pharmacological growth hormone).
9. **Interactions**: "barely changed" → "lowered … only slightly (by 15% or less)" (label 12.3: simvastatin AUC −8%, simvastatin acid −15%, ritonavir −9%); glucocorticoid item reworded to "steroid replacement", cortisone and prednisone most affected (label 7.2).
10. **"Does not act on fat directly"** → "is not known to act on fat directly" (no source shows absence).
11. **"No muscle or strength benefit"** contradicted the 1.4 kg lean-mass gain; now "No strength benefit was shown", with lean mass defined (includes water) and its loss after stopping (label: T-P group −1.8 and −1.7 kg, weeks 26–52).
12. **Callout "Why this page looks different"**: "a known safety profile … an unauthorised product everywhere else" overstated both the safety knowledge and the geography; now "known short-term risks for one use in the US, and an unauthorised product in Europe".
13. **Two regulators**: "People in Europe … have no authorised option" was unsourced; now "cannot get tesamorelin as an authorised medicine" (EMA).
14. **AntiDopG**: "the national criminal law on doping substances" → "Germany's law against doping in sport" (avoids implying personal use is criminal).
15. **AMG § 73(3)**: "outside the EU" → "outside the EU or the EEA" (statute).
16. **FDA contamination point**: "a risk it wanted studied" → "a possible serious risk, and required work on a simpler single-vial product" (PMR 1708-1).
17. **Stop-now callout**: added the NHS urgent signs for high blood sugar (vomiting, fast breathing, very sleepy, confused → urgent help), already sourced to `nhs-high-blood-sugar`.
18. **ProductCheck extra line**: "A loose vial with only a name on it is a different product. No regulator has checked it" read as a positive authenticity test and claimed more than the sources show; now describes the two-box pack and says "The pack alone does not prove a product is real" (negative-only, §1a); sources changed to the two labels.
19. **Mechanism step 2**: "did not change" → "did not change in a clinically significant way" (label 12.2).
20. **Preclinical rationale**: PubMed count "about 120" → 128 (esearch, 22 October 2026).
21. **Summary and Lead**: "lab-made copy" → "lab-made version" (tesamorelin is modified GHRH, not an exact copy).
22. **Source notes** updated with verified funding/drug-supply facts for Stanley 2011, Stanley 2014, Stanley 2019, Makimura 2012, Clemmons 2017, Baker 2012 and Stewart 2026.

### Confirmed without change

All other numbers on the page (VAT −15.2% vs +5.0%; −10.9% vs −0.6%; pooled −15.4%; +22%/+16% regain; weight −0.4 vs 0.0 kg; liver fat −4.1 points, 35% vs 4%, fibrosis 2/19 vs 9/24; Table 1 rows; HbA1c 5% vs 1%; hypersensitivity 4%; injection-site 25% vs 14%; antibodies; half-lives; bioavailability; formula and mass), every regulatory date (10 November 2010, 5 July 2019, 25 March 2025, 23 March 2020, 21 June 2012, 27 May 2010), the 16–0 committee vote and the EMA reasons. Doses: none on the page (only "low dose" for the Stewart pilot, without a number). No commerce words in link text; all internal links are planned routes; no `# ` heading in the body. The July 2026 PCAC vote is not described (tesamorelin was not discussed), so the five canonical elements do not apply; the page links to the BPC-157 page.

### Validator

`npx tsx scripts/validate-content.ts --only tesamorelin` after the changes: **0 errors, 1 warning** (the known duplicate `moller-2009-gh-metabolism`, also in `cjc-1295.yaml`, identical metadata; one copy to be removed at merge, not both). MDX body compiles with `@mdx-js/mdx`.

### Remaining concerns

- `nhs-high-blood-sugar` still lives only in the untracked `ipamorelin.yaml`.
- Ellis 2025 funding is recorded as `academic` from the registry sponsor (UCSD); the paper's funding statement was not available.
- Belgian and German national registers still not searched directly (see §5).
- Safety grade `partial` and the cancer-screening check remain reviewer questions (§5, items 1 and 8).
