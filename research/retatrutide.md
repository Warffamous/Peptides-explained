# Research notes: retatrutide (Tier 1, investigational)

Prepared 20 October 2026 for `compounds/retatrutide`. Files:
`src/data/compounds/retatrutide.yaml`, `src/content/compounds/en/retatrutide.mdx`,
`src/data/sources/retatrutide.yaml` (56 entries after the fact-check: 55 cited in the MDX, plus the SMILES record used by the data file), `src/i18n/en/glossary/retatrutide.json` (34 terms), plus one page photo
(`human-pancreatic-islet`: `src/assets/media/human-pancreatic-islet.jpg`, entries added to
`src/data/media.yaml`, `src/data/heroes.yaml`, `src/i18n/en/media.json`).

An interrupted earlier run left `drafts/compounds/retatrutide.yaml` and a sources file, with no notes.
Every value and source in them was treated as unverified and re-checked against its primary record (§2).
The draft was then deleted.

Validator: `npx tsx scripts/validate-content.ts --only retatrutide` → **0 errors, 0 warnings**. Full run:
0 errors (21 warnings, none in my files). The page renders on the dev server (HTTP 200; At-a-glance tiles:
"No / Yes, large trials / No, banned S0 / biggest risk"). Body length with `src/lib/readability.ts`:
4,139 words including tables, **3,827 words excluding tables** (before the fact-check). After the fact-check the page cites
78 distinct sources (55 of its own, 23 reused from other groups' files); the FAMHP item was removed (see the Fact-check log).

---

## 1. Key facts and their sources

### Identity and chemistry
| Fact | Source id |
|---|---|
| 39-residue sequence YAQGTFTSDYSILLDKKAQAAFIEYLLEGGPSSGAPPPS; systematic name gives Aib at 2 and 20, 2-methyl-L-leucine at 13, Lys17 N6-[N-(19-carboxy-1-oxononadecyl)-γGlu-AEEA], C-terminal serinamide; INN, USAN, LY3437943; CAS 2381089-83-2; UNII NOP2Y096GV | `gsrs-retatrutide` (GSRS API, full view) |
| Formula C221H342N46O68, MW 4731, exact mass 4730.478; PubChem compound title "Triple G"; substances deposited as "retatrutide" (30 SIDs) map to CID 171390338 | `pubchem-retatrutide` (PUG REST) |
| Isomeric SMILES with all stereocentres defined | `pubchem-retatrutide-cid-171934787` (connectivity SMILES identical to CID 171390338; draft SMILES identical character for character) |
| ChEMBL CHEMBL5095485: three curated agonist mechanisms (GCGR, GLP-1R, GIPR), max phase 3, USAN 2022 | `chembl-retatrutide` |
| Cryo-EM structures with each receptor coupled to Gs; acylation at Lys17 | `li-2024-retatrutide-structure` (PMC full text) |
| Relative potency vs native ligands: 0.3 (GCGR), 0.4 (GLP-1R), 8.9 (GIPR), cell studies | `sanyal-2024-retatrutide-masld` (PMC full text) |
| Half-life about 6 days in people | `urva-2022-ly3437943-phase-1b` (abstract), also in Sanyal 2024 |

The draft's sequence and residues list matched GSRS. I added a position-39 "C-terminal amide"
modification and "-NH2" to the display string, as on the tirzepatide page. The "Triple G" nickname is
PubChem's compound title; "reta" is the grey-market name used by regulators' warnings and the media.

### Clinical evidence (all Lilly-sponsored)
| Trial | n | Design / duration | Key results used | Source |
|---|---|---|---|---|
| Phase 1 SAD (NCT03841630) | 45 (registry) | double-masked, placebo, single doses | safety like other incretins; weight lower to day 43 | `coskun-2022-ly3437943-discovery`, `ctgov-nct03841630` |
| Phase 1b (NCT04143802) | 72 | 12 wk, T2D | HbA1c/glucose fell at top 3 doses; up to −8.96 kg vs placebo; t½ ≈ 6 d; 29 discontinued | `urva-2022-ly3437943-phase-1b` |
| Phase 2 obesity (NCT04881760) | 338 | 48 wk | −24.2% top dose vs −2.1%; GI dose-related; HR rose with dose, peaked wk 24 | `jastreboff-2023-retatrutide-phase-2`, registry AE tables |
| Phase 2 T2D (NCT04867785) | 281 | 36 wk; placebo + dulaglutide 1.5 mg | HbA1c up to −2.02 vs −0.01 / −1.41 at wk 24; weight up to −16.94% at wk 36 | `rosenstock-2023-retatrutide-t2d-phase-2`, registry AE tables |
| Liver-fat substudy | 98 | phase 2a | LF −82.4% at wk 24 top dose; 86% normal LF; no hepatotoxicity; βHB ×2–3 | `sanyal-2024-retatrutide-masld` |
| Body-composition substudy | 189 (103 complete DXA) | 36 wk | fat mass −26.1% (8 mg pooled), −23.2% (12 mg) | `coskun-2025-retatrutide-body-composition` |
| TRANSCEND-T2D-1 (NCT06354660) | 537 | 40 wk, monotherapy | HbA1c −1.69/−1.86/−1.94 vs −0.81; weight −11.5/−13.9/−15.3 vs −2.6; AE discontinuation 2–5% vs 0% | `bajaj-2026-transcend-t2d-1` |
| TRIUMPH-2 (NCT05929079) | 1,152 | 80 wk, obesity + T2D | weight −11.9/−16.8/−18.8 vs −5.1; diarrhoea 27–34% vs 13%; nausea 14–28% vs 8%; hypotension 1–6% vs <1%; dysaesthesia 4–7% vs 1%; discontinuation 4/12/8% vs 5%; deaths 6 vs 1 | `bellido-2026-triumph-2` |
| TRIUMPH-1 (NCT05929066) | 2,339 randomised | 80 wk, obesity, no diabetes | weight −17.6/−23.7/−25.0 vs −3.9; WOMAC pain and AHI benefits (ITT AHI −22.8/−34.3/−32.1 vs −9.6) | `jastreboff-2026-triumph-1` |

Unpublished on 20 October 2026 (PubMed searched by NCT number and acronym): TRIUMPH-3 (1,946, primary
completion 16 April 2026, study completion 14 May 2026), TRIUMPH-4 (445, completed November 2025), TRANSCEND-T2D-2 (vs semaglutide; primary completion
27 August 2026), the energy-expenditure phase 1 (NCT06313528), the oral-contraceptive study (NCT06039826)
and the CYP probe-drug study (NCT05445232). The only PubMed hit for "TRIUMPH-3"/"TRIUMPH-4" is the TRIUMPH
design paper (PMID 41090431), not results.

### Regulatory status (checked 20 October 2026)
| Jurisdiction | Status | Evidence |
|---|---|---|
| EU | Not authorised; no application under evaluation | EMA medicines JSON re-downloaded (2,754 records): 0 hits for retatrutide/LY3437943. EMA "applications under evaluation" xlsx dated 5 Oct 2026 (EMA/222468/2026), 99 rows: no retatrutide; orforglipron and three semaglutide rows present (positive control). |
| NL | Not authorised; no CUP | CBG `metadata.csv` (19,514 lines): 0 hits (tirzepatide/Mounjaro present as a control). Geneesmiddelenwet art. 40(1)–(3) read on wetten.overheid.nl: (3)(b) exempts "geneesmiddelen voor onderzoek", (3)(f) compassionate use per art. 83 Reg. 726/2004. CBG list of approved CUPs (page dated 10 Jul 2026): no retatrutide. NL trial sites: NCT06383390, NCT07165028. |
| DE | Not authorised | AMG § 21 (reused id); BfArM site search "Retatrutid": 0 results. DE sites: NCT06383390, NCT06662383, NCT07165028. |
| BE | Not authorised | 1964 Act art. 6 § 1 (reused); BE trial sites in NCT06383390 and NCT07165028. (A FAMHP news item of 19 Oct 2026 was cited by the writer but removed by the fact-checker: the page could not be re-fetched past a bot check, so it is unverified.) |
| UK | Not authorised | MHRA 24 Oct 2025 (factory raid), 24 Jul 2026 (social-media warning), 15 Oct 2026 (12,000 pens); HMR 2012 reg. 46. |
| US | Not approved; no BLA yet | FDA GLP-1 concerns page (content current 1 Oct 2026): "Retatrutide and cagrilintide cannot be used in compounding under federal law"; warnings to telehealth companies, API distributors, outsourcing facilities and "research purposes" sellers. Lilly 8-K 5 Aug 2026: BLA planned Q1 2027. EDGAR submissions index: no later 8-K/10-Q up to 20 Oct 2026. Expanded access NCT07629401 "available". Not among the seven PCAC peptides (meeting page fetched; 0 mentions). |
| WADA | Prohibited (S0), not named | 2026 and 2027 List PDFs re-downloaded and grepped: no "retatrutide", no "GLP-1" anywhere in either List. S0 text (both years) covers any pharmacological substance not addressed elsewhere and with no approval anywhere, "e.g. drugs under pre-clinical or clinical development". S4.4 (metabolic modulators) lists insulins and insulin-mimetics only. 2026 and 2027 Monitoring Programs name only semaglutide and tirzepatide. |

---

## 2. Verification log

**PubMed metadata.** All 30 scholarly sources were re-fetched (PubMed MCP `get_article_metadata` and NCBI
E-utilities `efetch`/`esummary`); authors, title, journal, year, volume, pages, DOI, PMID and PMCID were
compared with the draft. All matched; no DOI errors were found. Abstracts were read in full via `efetch`
(the MCP returns only the background section). Full texts read in PMC: Sanyal 2024, Pasqualotto 2024, Li
2024, Elmendorf 2026, Kaczynski 2026, Sehgal 2026, Neumann 2025 and 2026 (methods/funding), Takahashi 2026,
Carneiro 2026, Buzzi 2026 (funding), Piatkowski 2026 (PMC article page; MCP returned empty text).
New sources added after verification: `takahashi-2026-af-mice`, `rubin-2026-jama-news`,
`urva-2023-retatrutide-gastric-emptying`, `famhp-2026-glp1-misuse` (removed at fact-check, unverifiable), `cbg-compassionate-use-list`,
`pubmed-retatrutide-count-2026-10-20`, `ctgov-retatrutide-search-2026-10-20`.

**Registry.** ClinicalTrials.gov API v2 for every NCT cited: status, dates, enrolment, masking, arms,
locations, official titles (registry titles in the sources file were corrected to the official titles).
Adverse-event tables of the two phase 2 trials read from the posted results (5% reporting threshold).
TRIUMPH-1 eligibility read in full (diabetes, MTC/MEN-2 history and previous pancreatitis excluded).
A full search (intervention "retatrutide OR LY3437943") returned 34 records; no type 1 diabetes condition.

**Regulators and filings.** Every URL fetched on 20 October 2026 with curl (dates from page metadata or the
GOV.UK content API). SEC documents fetched with an SEC-style User-Agent. The FDA PCAC meeting page was
fetched and searched (0 mentions of retatrutide).

**Reused sources.** Ids from other groups were reused, not re-registered. Before relying on them I
re-checked the WADA 2027 explanatory note (S0 peptide wording), the UKAD 2027 summary ("not all
experimental peptides prohibited under Section 0 are specifically listed") and the MHRA GLP-1 page
(tirzepatide: add a barrier method for four weeks after starting and after each dose increase). Claims
cited to `ema-epar-mounjaro`, `ema-epar-wegovy`, `fda-label-mounjaro`, `neeland-2024-lean-mass`,
`knudsen-2010-thyroid-c-cells`, `wilding-2022-step-1-extension` and `aronne-2024-surmount-4` repeat exactly what
the tirzepatide and semaglutide pages already state from those sources.

**Preclinical count.** `(retatrutide[tiab] OR LY3437943[tiab]) AND (mice OR mouse OR rats OR rat OR rodent*
OR hamster*)[tiab] NOT review[pt]` → 19 records. Classified by hand from affiliations: 17 primary animal
studies (two non-primary: 42768195 review, 42527705 Lab Animal highlight); 1 with a Lilly affiliation
(35985340). Plus in-vitro/tissue: Li 2024 (independent), Neumann 2026 human atria (independent), Wen 2025
hepatocytes (Lilly), Regmi 2023 adipocyte protocol (Lilly, 37178114), Wang 2025 J Med Chem design paper
using retatrutide as comparator (independent, 40958513). Total about 20–22 → **moderate**.

**Independence count.** RCT records: 10, all with a Lilly affiliation (`NOT lilly[ad]` → 0). Lilly
primary output ≈ 20 records (trials, post hoc analyses, 3–4 preclinical); independent ≈ 22 (17 animal, 2
tissue/structure, social-media study, detection study, product test, 2 case reports) from about 15 groups,
none larger than 2–3 papers. Rubric fit: not single-group-dominant (Lilly < 70%); not broadly-replicated
(no independent human trial; the key human findings are not replicated). Graded **few-groups** as the
nearest honest cell — **judgement call for the reviewer** (see §4).

---

## 3. Conflicts between sources and how they were resolved

- **MHRA October 2025 raid.** The 2025 release says "more than 2,000" retatrutide and tirzepatide pens
  were seized; the October 2026 release describes the same raid as "5,000 unauthorised ... pens". The
  page gives no number for the 2025 raid.
- **TRIUMPH-1 enrolment.** Paper: 2,339 randomised; registry: 2,335 actual enrolment. Used the paper.
- **TRIUMPH-1 abstract typo.** Hybrid-estimand AHI change printed as "31.7" (positive) for 12 mg; used the
  ITT figures (−22.8, −34.3, −32.1 vs −9.6), which are internally consistent.
- **Pasqualotto 2024 pooled pulse rate.** Printed with exactly the same numbers as the LDL result
  (WMD 2.65, 95% CI −0.95 to 6.25, I² 79%) → likely a copy error; not used.
- **Dysaesthesia in TRIUMPH-2.** The Lancet abstract gives 4%, 6%, 7% vs 1% (counts 13, 16, 21 vs 2); the
  Kaczynski review quotes company topline 4.5%, 5.6%, 7.3% vs 0.7%. The page uses the published counts.
- **Glucagon receptors in the heart.** Neumann 2025 (mouse: GCGR-mediated rate increase) and Neumann 2026
  (human atria: force increase reduced by GLP-1R, GIPR and GCGR antagonists) vs Aranda-Domene 2023 (no
  GCGR detected and no glucagon effect in human heart tissue). Both are reported; the page treats a
  rhythm effect as an open hypothesis.
- **Energy expenditure.** Coskun 2022 (mice: GCGR-mediated increase) vs Briand 2026 (obese mice: no
  significant change) and Hitaka 2026 (MC4R-KO mice: decrease). Reported in the uncertain callout.
- **WADA S0.** The List text (2026 and 2027) is unconditional for unapproved substances; UKAD's summary
  paraphrases the 2027 change as "prohibited if they also fulfil the ... criteria". The page follows the
  List text and says the status rests on the wording of S0, not on a named entry.
- **Draft errors corrected.** The NL regulatory row cited `igj-2026-webshop-order-glp1`, which the
  semaglutide fact-checker had removed (it names a seller); replaced. `us-fdca-505` duplicated the URL of
  `usc-21-355` (legal-b.yaml); dropped and the existing id reused. `hitaka` funding "undisclosed" kept (no
  statement found); `takahashi` funding corrected to government (JSPS, AMED); `neumann-2026` n set to 29
  (from full text). The draft's `briand` and `piatkowski` notes were checked and partly rewritten
  (Piatkowski funding: author-level NHMRC/QMHC support, not a study grant).

---

## 4. Decisions, false positives and open questions for the reviewer

**Editorial decisions**
- **No dose figures for trial arms.** Trial results are reported as "three dose levels / low, middle,
  high" rather than in mg, because retatrutide is the grey-market compound most likely to be dosed from
  trial publications. The guide (§6) would allow mg values inside study descriptions; I judged the risk
  not worth it. The only quantity in `<Q>` is the 10 mg label of the tested Australian products
  (descriptive, from the product study).
- **Company results.** TRIUMPH-3 and TRIUMPH-4 are mentioned only as "announced by the company", without
  numbers. The one company-reported figure on the page (TRIUMPH-4 dysaesthesia "up to about one in five")
  is explicitly labelled as not peer-reviewed and cited to a peer-reviewed review that quotes it.
- **Explainers.** `glp1-action` and `insulin-glp1-hypo` were not reused: their captions are written about
  semaglutide ("Semaglutide travels in the blood ...") and would mislead on this page. A retatrutide
  version of the backlog explainer `incretin-multi-agonism` is proposed instead (see the summary).
- **Diagram.** `retatrutide-three-receptors` (table text equivalent in the mechanism section).

**Validator warnings:** none remaining. Two were fixed during writing (summary item over 18 words; the word
"proven").

**Open questions for the medical reviewer**
1. Independence grade (few-groups vs broadly-replicated) — see §2.
2. Heart rate: the size of the rise is not in any abstract we could read (NEJM/Lancet full texts are
   paywalled). Please add the magnitude from the full papers if available.
3. TRIUMPH-1 and TRIUMPH-2 side-effect tables (dysaesthesia, arrhythmia, gallbladder, pancreatitis,
   hypoglycaemia with sulfonylureas in TRIUMPH-2) could not be read; the page says so.
4. "Who should not use it" includes heart-rhythm disease/heart failure and type 1 diabetes on mechanistic
   grounds; please confirm the wording.
5. Liver tests in the checklist rest on the Australian liver-toxicity reports (JAMA news, see §5).
6. A letter (Koufakis et al., Eur J Intern Med 2026, PMID 42493254) refers to a "urinary tract infection
   signal" with retatrutide; no abstract or full text was available, so the page does not mention it.
7. NCT07467447: a phase 2 retatrutide trial in China sponsored by "Hudson Biotech" (not Lilly), recruiting
   since February 2026. Its provenance is unclear; not cited on the page.

**Open questions for the legal reviewer**
1. Is there any EU or Dutch compassionate-use or named-patient route for retatrutide that the CBG CUP list
   would not show (e.g. an individual artsenverklaring for an unauthorised medicine still in trials)?
2. The US expanded-access programme says availability "will depend on geography"; whether it extends to
   EU patients is unknown.

---

## 5. Sources we could not use (host not on the allowlist)

- **Victoria Department of Health health alert**, 19 June 2026: "six cases of acute liver injury in
  Victoria in people who have used an unapproved peptide product, labelled as Retatrutide" since January
  2026; "possibly associated with a contaminant"; advice to have liver function tests.
  `https://www.health.vic.gov.au/health-alerts/toxicity-linked-to-unapproved-peptide-retatrutide`
  (fetched; host not allowlisted). The page cites the JAMA Medical News report of it instead.
- **TGA** (tga.gov.au) testing of a product sold as retatrutide that contained semaglutide: known only via
  JAMA Medical News; the TGA page itself was not fetched (host not allowlisted).
- **NVIC annual report 2025** (nvic.umcutrecht.nl): "In 2025 werden ook de eerste 6 meldingen ontvangen
  over retatrutide", all obtained informally or online. Press reports add 12 reports in the first five
  months of 2026 (not verified on the NVIC site). Highly relevant for Dutch readers.
- **Sport Integrity Australia** retatrutide page (sportintegrity.gov.au): timed out; not allowlisted.

---

## 6. Media

`human-pancreatic-islet` — Wikimedia Commons "File:Human pancreatic islet.jpg", CC BY-SA 3.0, author
Afferent; double immunostaining (red = glucagon antibody, blue = insulin antibody). Registered with
`npm run media:commons`; focal point set to 57% 47% after viewing the image; caption sources
`coskun-2022-ly3437943-discovery`, `chembl-retatrutide`. No people, no product. Hero line added to
`src/data/heroes.yaml`; alt text and caption in `src/i18n/en/media.json`.

---

## 7. Fact-check log (independent fact-check, 20 October 2026)

Scope: every file in the group (`src/data/compounds/retatrutide.yaml`, `src/content/compounds/en/retatrutide.mdx`,
`src/data/sources/retatrutide.yaml`, `src/i18n/en/glossary/retatrutide.json`, this file; the deleted
`drafts/compounds/retatrutide.yaml` was compared with the published data file) plus this group's entries in
`src/data/media.yaml`, `src/data/heroes.yaml` and `src/i18n/en/media.json`. Validator after the fixes:
`npx tsx scripts/validate-content.ts --only retatrutide` → 0 errors, 0 warnings; `--only media` → 0 / 0;
full run → 0 errors (warnings only in other groups' files).

### What was checked, and how

- **Scholarly metadata (31 PMIDs).** NCBI esummary for all 31 in one batch: authors, title, journal, year,
  volume, pages, DOI and PMCID compared with every entry. All matched; no DOI or PMID errors. Elocation ids
  for Takahashi (6616), Kaczynski (1957) and Buzzi (e276106) confirmed in the XML.
- **Abstracts (31).** efetch text read in full for every PMID, and each finding, limitation, number and n on
  the page compared with it.
- **Full texts (21 PMC articles)** downloaded with efetch db=pmc and searched for the cited figures: Sanyal
  (0.3/0.4/8.9 potency, half-life, no hepatotoxicity signal, β-hydroxybutyrate +93%, +78%, +181%, no
  multiplicity control, 56.1% missing 48-week MRI), Pasqualotto (RR 3.79 and 3.41; pulse-rate/LDL duplicate
  confirmed), Li (cryo-EM resolutions, Chinese public funding), Elmendorf (lean-mass catabolism quote),
  Kaczynski (TRIUMPH-4 dysaesthesia 8.8% and 20.9% vs 0.7%; TRIUMPH-1 up to 12.5%; mostly mild to moderate;
  mechanism unknown), Sehgal (denominators), Neumann 2025 and 2026, Takahashi, Carneiro, Buzzi, Branine,
  Briand, Hitaka, Piatkowski (PMC article page).
- **Registry (17 NCT records + search).** ClinicalTrials.gov API v2: titles, status, dates, enrolment,
  masking, countries, sites, arms, eligibility; posted adverse-event tables of NCT04881760 and NCT04867785
  (allodynia 4/62 vs 0; pancreatitis 1 + 2; cholecystitis 1 + 1; atrial fibrillation 1/26). Search
  `query.intr=retatrutide OR LY3437943`: 34 records, 33 Lilly + 1 Hudson Biotech, no type 1 diabetes.
- **Identity.** GSRS full record (sequence, systematic name, CAS, INN 12350), PubChem PUG REST (both CIDs,
  formula, MW 4731, exact mass; data-file SMILES identical to CID 171934787), ChEMBL API (three agonist
  mechanisms, max phase 3, USAN 2022).
- **Regulators and law (fetched today).** EMA medicines JSON (0 hits) and the 5 October 2026 under-evaluation
  xlsx (EMA/222468/2026; orforglipron and semaglutide present, retatrutide absent); CBG compassionate-use list
  (modified 10 July 2026; no retatrutide); Geneesmiddelenwet art. 40(1)–(3); AMG § 21(1); HMR 2012 reg. 46;
  Belgian Medicines Act art. 6 § 1; 21 U.S.C. § 355(a); FDA GLP-1 concerns page (content current 1 October
  2026: retatrutide cannot be compounded, is not a component of approved drugs, and was sold falsely labelled
  "for research purposes"); FDA PCAC meeting page (seven peptides on the agenda, no retatrutide); MHRA
  releases of 24 October 2025, 24 July 2026 and 15 October 2026 (quotes confirmed); MHRA GLP-1 page
  (tirzepatide pill advice: barrier method for four weeks after starting and after each dose increase); WADA
  2026 and 2027 List PDFs (S0 text confirmed; retatrutide and GLP-1 absent); Lilly 8-Ks of 4 February and
  5 August 2026 (BLA planned Q1 2027) and the EDGAR submissions index (no later 8-K or 10-Q to 20 October
  2026); EMA product information for Wegovy and Mounjaro (dysaesthesia listed in both; Mounjaro 5.1: the C20
  fatty diacid "enables albumin binding and prolongs half-life").
- **JAMA Medical News (Rubin 2026).** The article page was read: six Victorian liver-toxicity reports, the TGA
  finding of semaglutide and no retatrutide, and 21 FDA warning letters since December 2024 all confirmed.
  The article names a seller in passing; our page does not.
- **PubMed counts re-run.** 207 records; 10 RCT records, 0 after `NOT lilly[ad]`. The animal-term search now
  returns 20 records (PMID 42878930, a rat study, appeared on 20 October). Classified: 2 non-primary
  (42768195, 42527705), 1 human atrial tissue (40613938), 1 Lilly (35985340), about 16 independent primary
  animal studies.
- **Hero photo.** Commons API: "File:Human pancreatic islet.jpg", CC BY-SA 3.0, author Afferent, "red =
  glucagon antibody, blue = insulin antibody". Image viewed: stained tissue only; no people, product, vial or
  injecting. Alt text accurate.

### Errors found and fixed

1. **FAMHP source unverifiable, so removed.** `famhp-2026-glp1-misuse` (dated 19 October 2026) could not be
   re-fetched: www.famhp.be and www.fagg-afmps.be return a bot-check page to every automated request, and no
   other copy could be found. The quote in "Why so many people have heard of it", the FAMHP sentence in the
   Belgium section, the BE regulatory note and the BE row source were removed, and the source entry was
   deleted. Replaced by verified material: the MHRA July 2026 "online hype" warning and the FDA "for research
   purposes" warning (what-it-is), and Belgian trial sites (BE section and row). **A human editor should
   re-check the FAMHP page in a browser and restore the item if it says what the writer quoted.**
2. **Self-report percentages had the wrong denominator.** Sehgal 2026: 4.8% (heart rate) and about 2% (skin)
   are shares of the 7,823 users who named a symptom, not of all 13,589. The study finding and the risks
   bullet now say so; "increased energy" (third most common) and "food craving" were added so the list is not
   selectively negative.
3. **"One injection lasts a week" was wrong.** A half-life of about six days means about half a dose is still
   present after six days; the mechanism paragraph and the harm-reduction line were rewritten. The Carneiro
   detection figure now says the four users injected twice, a week apart (from the full text).
4. **Mouse-atria blocker overstated.** Neumann 2025: adomeglivant "significantly reduced" (not "stopped") the
   raised rate; GLP-1R and GIPR blockers did not. Fixed in the study finding and in risks item 2.
5. **Indirect comparison overstated.** "Weight loss with retatrutide was larger than with GLP-1 or GIP/GLP-1
   drugs" was replaced by the network meta-analysis numbers (22.1% vs 19.3% beyond placebo) with the overlap
   of their confidence intervals; the diagram row was softened the same way.
6. **Dutch law incomplete.** Geneesmiddelenwet art. 40(3)(c) also allows an IGJ exemption (the named-patient
   route under art. 5 of Directive 2001/83). The callout, the NL section and the NL note now mention it and say
   "in practice" legal only in a trial; the harm-reduction line now says "In the EU ... in practice".
7. **US expanded-access criteria incomplete.** The registry requires obesity that has not responded to the
   highest available dose of approved weight-management therapy; added.
8. **Lead finding unbalanced.** Piatkowski: the lead trace was 0.14% of the injectable permitted daily
   exposure; the page now says it was well below safety limits.
9. **Case report wording.** Buzzi: she was admitted after five days of symptoms (not "five days of hospital
   care").
10. **Ketone rise.** "Two- to threefold" became "by about 80% to 180% at the three higher dose levels, without
    ketoacidosis" (Sanyal Table 2).
11. **TRIUMPH-3 completion.** Study completion was 14 May 2026 (primary completion 16 April); the table now
    says "Completed May 2026".
12. **Independent animal count.** "About 17" became "about 16" independent animal studies (the writer's 17
    included Lilly's discovery paper; one of the primary records is human tissue).
13. **Liver/animal claim.** "Retatrutide lowered weight and liver fat in obese mice and hamsters" was cited to
    two studies, but only Briand measured liver fat; the Hitaka MC4R-mouse study is now described separately.
14. **Type 1 diabetes.** "None of the 34 studies includes people with type 1 diabetes" became "is about type 1
    diabetes" (only conditions were checked, not every eligibility list). The established part of the ketone
    chain (vomiting plus missed insulin) is now cited to the case report, and only the drug effect is labelled
    a hypothesis.
15. **Gastric-emptying report.** We have only its title and MeSH terms; the page now says so and labels the
    tablet-absorption consequence as a hypothesis.
16. **Dysaesthesia context.** The page said only the highest-strength semaglutide pen lists altered skin
    sensation. The Wegovy SmPC lists it at 2.4 mg too, and the Mounjaro SmPC lists dysaesthesia; the page now
    says it may not be unique to retatrutide, and that most cases were mild to moderate.
17. **Balance added.** Thyroid: Knudsen 2010 found few GLP-1 receptors on human and monkey C-cells. Lean
    mass: Neeland's note that MRI studies suggest the muscle change fits the weight lost. Heart: the
    Aranda-Domene vs Neumann disagreement is now stated instead of presenting one side as settled.
18. **Unsourced nickname.** No checked source uses "reta" as the grey-market name. The prose, table header,
    description and summary no longer rely on it; it stays only in `names.other` as an informal short form.
19. **Funding codes.** Takahashi: government → mixed (JSPS and AMED plus the Japanese Circulation Society,
    Takeda Science Foundation and Sakakibara grants). Piatkowski: academic → mixed (author-level NHMRC,
    Queensland government and NGO support; no study grant). Briand: industry → undisclosed (no funding
    statement; now consistent with Hitaka).
20. **Smaller wording fixes.** TRIUMPH-1 apnoea-hypopnoea index described as "breathing pauses and shallow
    breaths"; "lower HbA1c in people with diabetes" (TRIUMPH-1 enrolled no one with diabetes); kidney and lipid
    post hoc analyses described as "by or with Lilly scientists" (the first kidney author is from Groningen);
    "Most people ... cannot get the drug legally outside a trial" (US expanded access exists); "the phase 2
    obesity trial" for the no-hepatotoxicity statement; "at one site in Singapore" for the phase 1 study; the
    semaglutide/tirzepatide receptor statement is now cited to their EPARs; "impossible to trace" became
    "harder to trace".
21. **Glossary.** `biologics-license-application` no longer says a BLA covers "a large peptide" (the FDA treats
    peptides of 40 amino acids or fewer as drugs; we only report that Lilly said BLA). `expanded-access` is
    marked as a US term. `investigational-medicine` no longer says EU use is limited to trials and programmes.
22. **Beginner layer.** Summary items rewritten to 18 words or fewer, without "copies" and without "online 'reta'
    is illegal" (selling is illegal; personal possession was not assessed). The hero caption was rewritten
    (18 words or fewer, reading ease 60+) and no longer says retatrutide "copies" glucagon.

### Checked and found correct (no change)

Category `investigational`; evidence grades (phase-3, moderate, few-groups as a flagged judgement call,
partial); WADA row (S0, at all times, inferred from the S0 wording and stated openly); every trial number on
the page (phase 1b, both phase 2 trials, all three phase 3 trials, NMA, Pasqualotto, Kanu, Salem, Coskun 2025);
all registry statuses and dates except TRIUMPH-3; sequence, modifications, formula, mass, SMILES and
identifiers; MHRA quotes; S0 quotes; SEC quotes; the TRIUMPH-1 exclusion criteria; the stop-now callout;
glance.main_risk (supported by the risks section); internal links (all on the planned route list); no `#` or
`##` headings in the body; no dose guidance (the only `<Q>` is the 10 mg label of the tested products); no
commerce words; no seller named. PCAC: the page mentions the July 2026 meeting only to say retatrutide was
not on the agenda (verified on the FDA meeting page); it does not report the vote, so the five-element
framing is not triggered.

### Remaining concerns for the reviewers

- FAMHP item (above) needs a human re-check in a browser.
- The size of the heart-rate rise is still not on the page; no accessible source gives it (the NEJM and
  Lancet full texts are paywalled, the registry outcome lists do not include it, and a preprint figure seen
  in a web search is not peer-reviewed and was not used).
- Legal reviewer: whether an IGJ exemption (art. 40(3)(c)) could in practice be granted for a medicine that is
  still only in trials, and whether personal import of an unauthorised medicine is itself an offence for the
  buyer in NL (the page says only that selling and supplying are illegal).
- Lilly calls its planned US filing a Biologics License Application, although the FDA treats peptides of 40
  amino acids or fewer as drugs (NDA route). The page reports Lilly's wording without comment; check the
  filing route when it happens.
- The Halle group's 2025 paper on glucagon and human atria (Int J Mol Sci 26:698, cited inside Neumann 2026)
  was not added as a source; if the medical reviewer wants the glucagon-receptor disagreement documented
  further, it should be verified and registered.

---

## 8. Restructure into the "less text, more visuals" layout (21 October 2026)

Files changed: `src/content/compounds/en/retatrutide.mdx` and this section. Model: `semaglutide.mdx` and the
restructured `tirzepatide.mdx`, `bpc-157.mdx`, `kpv.mdx`, `tb-500.mdx`; CONTENT-GUIDE §5.2 and §9.1. This is a
restructure, not a rewrite: the existing text moved into `<InDetail>` folds, and each section now opens with a
`<Lead>` and one figure built from facts and sources already on the page. The data file, the sources file, the
glossary and the shared media files were not touched. The hero (`compounds/retatrutide: human-pancreatic-islet`)
already existed with alt text and a caption, so no media was registered. No new source was registered.

### 8.1 What changed, section by section

| Section | Lead (question → answer) | The one figure | Open prose (outside the figure) | Folds |
|---|---|---|---|---|
| what-it-is | What is retatrutide? → a drug still in testing that acts like three hormones at once; no country has approved it | `<Compare>` "Retatrutide in a trial" vs "Sold online as 'retatrutide'", 5 rows (HEAD's table, now with verdicts and cell cites); HEAD's block cite line kept under it | the dated status paragraph (investigational; not on the EMA list of 5 Oct 2026; Lilly plans an FDA filing in Q1 2027) | the developer and the legal callout; the molecule and where it came from; why so many people have heard of it |
| mechanism | What does it do in the body? → acts like three hormones; people feel less hungry; in mice the body also burned more energy | the existing `<Diagram id="retatrutide-three-receptors">` (unchanged) with its cite line | the three-sentence intro | step by step (`<Mechanism />` and "What each step rests on"); the open glucagon question (uncertain callout and the "costs" paragraph) |
| evidence | Does it work? → in large trials weight fell a lot and blood sugar improved; the maker paid for every trial | 3 `<KeyNumber>`: TRIUMPH-1 17.6–25.0% vs 3.9%; TRIUMPH-2 11.9–18.8% vs 5.1%; TRANSCEND-T2D-1 HbA1c −1.69 to −1.94 points vs −0.81 (all `human-controlled`) | "Weight is a surrogate …" and the funding paragraph ("All 10 randomised-trial records …"), so both caveats sit next to the numbers | study table and trial-status table; early and phase 3 results and the unpublished trials; substudies and independent research; the indirect comparison and "promising / what the wait costs" |
| unknowns | What is still not known? → what longer use does, whether the faster heartbeat matters, what products sold online contain | `<TimeStrip>` years of use: longest published trials 80 weeks (about 1.5 years); longer use "Not known" | none | all ten open questions |
| regulatory | Is it legal? → approved nowhere and banned in sport; in the EU, in practice, legal only in a trial | `<Compare>` Netherlands and the EU vs United States, 5 rows (approved? applied? legal to sell? legal route outside a trial? allowed in sport?) | none | status table and WADA; EU and the Netherlands; Germany, Belgium, UK, US |
| risks | What are the risks? → many feel sick or get diarrhoea; some get a faster heartbeat or odd skin feelings | 4 `<KeyNumber>` from TRIUMPH-2: diarrhoea 27–34% vs 13%; nausea 14–28% vs 8%; dysaesthesia 4–7% vs 1%; permanent stopping for side effects or death 4–12% vs 5% | the "Faster heartbeat" item (moved out of the list, wording unchanged) | everything the trials reported; why a heart-rhythm effect is theorised; muscle, low blood sugar, thyroid and pregnancy; outside trials and sport |
| harm-reduction | How can someone lower the risk? → ask about a trial or an approved medicine; treat any online product as unchecked; know when to stop | the stop callout (now `id="stop-now"`) and `<WarningSigns only="general,injection,allergic,cardiovascular,metabolic" />`, moved up and never folded | "The legal routes" (both paragraphs) and the skin-sensation sentence after the stop list | what you cannot know about an online product; checks (checklist); interactions and who should not use it |

**Frontmatter.** Added `lede` (18 words, reading ease 71): "A drug still in trials, approved nowhere. Tested
products sold as retatrutide held wrong amounts or another drug." ("Tested products", not "online products": the
three Piatkowski products were "sold in Australia", and the letter does not say they were bought online.) Added
`glance.stop_signs` (3) and `glance.facts` (4). Every other frontmatter key is identical to HEAD (checked by
script after parsing both with gray-matter): the frontmatter was assembled from `git show HEAD:…` with only the
additions inserted. `glance.main_risk` was already present and is unchanged.

**Stop strip.** (1) `sign-belly-pain` "Severe belly pain, often spreading to your back": sources
`nhs-acute-pancreatitis` (call 999 for sudden severe tummy pain spreading to the back), `ctgov-nct04881760`,
`ctgov-nct04867785` (the serious pancreatitis cases in the phase 2 results), `ema-epar-mounjaro` (class risk).
(2) `sign-heart` "Racing heartbeat with chest pain or fainting": `nhs-heart-palpitations` (call 999 if
palpitations come with chest pain, shortness of breath, or feeling faint or fainting), `jastreboff-2023-retatrutide-phase-2`
(heart rate rose with dose), `pasqualotto-2024-retatrutide-meta-analysis` (rhythm problems more frequent, not
significant). (3) `sign-allergic` "Swollen lips or throat, or trouble breathing": `nhs-anaphylaxis` (lips, mouth,
throat or tongue suddenly swollen; struggling to breathe), `pasqualotto-2024-retatrutide-meta-analysis`
(allergic-type reactions RR 3.79). All three condense items of the page's own stop list. The other three stop
items (liver injury, dehydration, ketoacidosis in type 1 diabetes) have no matching pictogram and stay in the
full list. The NHS ids are reused from `safety-a.yaml`, not re-registered; the four NHS pages (the three above
plus `nhs-jaundice`) were re-fetched today and say what they are cited for. They were also added to the stop
callout's own citation line, so the "get help now" advice has a general medical source as well as the
retatrutide trial sources (the semaglutide and tirzepatide pages cite the label for this; there is no label here).

**Fact sheet.** How it is taken: "Injection under the skin (in the trials)" (TRIUMPH-1, TRIUMPH-2 and
TRANSCEND-T2D-1 abstracts: "once-weekly subcutaneous injection"; registry NCT05929066: "Administered SC"). How
long it lasts: "Half-life about six days" (Urva 2022). What it acts on: "Three receptors: GIP, GLP-1 and glucagon"
(ChEMBL, Coskun 2022). Developer: "Eli Lilly (development code LY3437943)" (Coskun 2022 and Urva 2022, both
Lilly papers with LY3437943 in the title). **Decision:** the weekly injection schedule is left out of the fact
sheet on purpose. Semaglutide and tirzepatide state "how often" because it is label information for an authorised
medicine; for an unapproved compound that is dosed from trial reports, a frequency row reads like part of a
protocol (§4 already explains why trial arms are not given in mg). "Under the skin" is new to the page as a
detail (the body says "injectable"); it is sourced and not a dose.

**Emergency number.** HEAD already wrote "call your local emergency number" twice in the stop callout and never
printed 112. The rendered page's only "112" strings are SVG coordinates in the sequence figure. The stop strip
adds the locale's emergency line itself.

### 8.2 Verification of the new figure, lead and fact-sheet text (21 October 2026)

Every statement on the new figures condenses a sentence already on the page and cites that sentence's own
source, except the few cell cites listed below. Re-checked against the primary records today:

- **PubMed abstracts** (NCBI efetch, PMIDs 42814954, 42810372, 42250575, 36354040, 37366315). TRIUMPH-1: 2,339
  randomised, −17.6/−23.7/−25.0% vs −3.9% at 80 weeks, adults with obesity without diabetes, once-weekly
  subcutaneous injection. TRIUMPH-2: 1,152 randomised, −11.9/−16.8/−18.8% vs −5.1% at 80 weeks; diarrhoea 27%,
  34%, 34% vs 13%; nausea 14%, 21%, 28% vs 8%; dysesthesia 4%, 6%, 7% vs 1%; hypotension 1%, 5%, 6% vs <1%;
  permanent discontinuation for adverse events or death 4% (4 mg), 12% (9 mg), 8% (12 mg) vs 5%; deaths 2 + 3 + 1
  vs 1, all judged unrelated. TRANSCEND-T2D-1: 537 randomised, HbA1c −1.69/−1.86/−1.94 vs −0.81 at 40 weeks; weight
  −11.5/−13.9/−15.3 vs −2.6%; no severe hypoglycaemia. All key-number values and labels match.
- **ClinicalTrials.gov API v2, NCT05929066** (fetched today): sponsor Eli Lilly; `oversightHasDmc: true` (a data
  monitoring committee); three retatrutide dose arms and placebo, "Administered SC"; secondary outcomes include
  blood measures (HbA1c, triglycerides, non-HDL cholesterol, fasting insulin, hsCRP, eGFR) at baseline and week
  80. This supports the comparison cells "Fixed by the trial" and "Visits, blood tests, a safety committee".
- **FDA "concerns with unapproved GLP-1 drugs" page** (fetched today): retatrutide "cannot be used in
  compounding under federal law", is not a component of any FDA-approved drug, and was sold falsely labelled "for
  research purposes". Supports "Not FDA-approved".
- **NHS pages** (fetched today): acute pancreatitis, heart palpitations, anaphylaxis, jaundice (wording above).
- Every other figure cell repeats a sentence already on the page with that sentence's cite (EMA list of 5 October
  2026, CBG database, CBG compassionate-use list, Geneesmiddelenwet art. 40, 21 U.S.C. § 355, SEC 8-K, expanded
  access NCT07629401, WADA 2026 List S0). Those sources were verified on 20 October (§2 and §7) and not re-fetched.

### 8.3 Nothing lost: the check against git HEAD

A script in the session scratchpad (not committed) compared `git show HEAD:src/content/compounds/en/retatrutide.mdx`
with the new file:

- `<Cite>` tags: HEAD 145, now 162, **0 uses lost**; 78 distinct ids before, 82 now. The four new ids are the
  NHS pages on the stop callout's citation line (above); the other extra tags put existing ids on figure cells.
- `<Claim>` (level and exact text): 29 → 29, **0 lost, 0 changed**. `<Q>` 2 → 2, `<Seq>` 1 → 1, internal links
  11 → 11. Data components unchanged in number: `Mechanism`, `StudyTable`, `RegulatoryTable`, the `Diagram`,
  `Checklist`, `WarningSigns`, and the legal, uncertain and stop callouts.
- Body sentences: **276 of 276 found verbatim**. No sentence was reworded. One sentence was added in the fold
  "Why so many people have heard of it": "The comparison at the top of this section sets out the differences row
  by row." (navigation only, as on the tirzepatide page).
- Headings: 31 of 32 `###` headings survive as a heading or a fold title. "How it compares, and who paid" was
  split: the comparison paragraph keeps the heading "How it compares with other medicines" in a fold, and the
  funding paragraph is now open in the evidence section.
- Stop callout: the six items are identical to HEAD; `id="stop-now"` was added, the citation line gained the four
  NHS ids, and the callout moved to the top of the section with `<WarningSigns />`.
- Tables: the trial-status table and the diagram table are unchanged. The what-it-is table became the first
  `<Compare>` figure, so its rows no longer exist as plain rows. Cells kept verbatim: "Made and tested by the
  developer", "Fixed by the trial", "Depends on the label and your own measuring", "Required", "Visits, blood
  tests, a safety committee", "None", "Illegal to sell or supply". Reworded to fit a yes/no figure: the row heads
  became questions ("Contents known?", "Amount per dose fixed?", "Sterile?", "Safety follow-up?", "Legal to
  supply?"); "Unknown: tested products held …" lost its "Unknown:" (the `No` verdict carries it); the sterility
  cell "Unknown" became `Unknown` + "No published study has tested this" (the page's own sentence, Piatkowski);
  the trial-side "Legal" became "Medicines for research are an exception in the law" (Geneesmiddelenwet art.
  40(3)(b), as the NL section says).

### 8.4 Visible words (the formula in `src/pages/[locale]/compounds/[slug].astro`)

| | Before (HEAD, no folds) | After |
|---|---|---|
| Visible with folds closed (includes the fixed 150 At-a-glance and evidence-card words) | 6,533 | **1,574** |
| Whole page, everything open | 6,533 | 7,368 (+835: figures, leads, fold titles, stop strip, fact sheet, lede, the 150) |
| Visible body words per section (after; leads and figures included) | | what-it-is 199, mechanism 195, evidence 181, unknowns 74, regulatory 188, risks 159, harm-reduction 261 |

The running dev server (`localhost:4321/en/compounds/retatrutide/`, HTTP 200) says "About 8 minutes for the short
version; 37 with every detail open". It renders 7 leads, 20 folds, 2 comparisons, 7 key numbers, 1 time strip,
the diagram, the stop strip with three signs, `id="stop-now"`, the fact sheet (4 rows plus the data rows) and the
lede. No horizontal page scroll at 375 px (scrollWidth = clientWidth = 375). Harm-reduction is the longest open
section because the stop list, which must never be folded, is long (six items).

### 8.5 Editorial decisions for the reviewer

1. **Explainers not reused.** `glp1-action` and `insulin-glp1-hypo` name semaglutide in their titles and step
   captions, and the low-sugar explainer tells the reader that "your prescriber may lower your dose", which does
   not fit an unapproved drug with no prescriber. Placing either here would mislabel the medicine. Proposed
   instead (not built): the backlog `incretin-multi-agonism` explainer (EXPLAINERS.md §6) and a
   `retatrutide-heart-rate` explainer (see the summary returned with this run).
2. **Risk figure as key numbers, not an icon array.** `<IconArray>` takes one value per group; TRIUMPH-2 reports
   three dose groups, and the page reports ranges. Picking one dose would add a dose-specific figure the page does
   not otherwise give (§4: no mg values for trial arms). The ranges are shown as key numbers instead.
3. **Funding and surrogate caveats stay open** in the evidence section, next to the numbers (as on tirzepatide).
4. **The "Faster heartbeat" item is open** in the risks section: the raised heart rate is the retatrutide-specific
   signal and has no number to put in a figure.
5. **"Up to 12 in 100 stopped for good"**: the highest stopping rate was in the middle dose group (12% at 9 mg,
   8% at 12 mg, 4% at 4 mg, 5% placebo); the label says "depending on the dose", and the key number does not claim
   a dose trend.

### 8.6 Validator and checks

- `npx tsx scripts/validate-content.ts --only retatrutide`: **0 errors, 0 warnings**. Draft wordings fixed on the
  way: regulatory lead (20 → 18 words), the regulatory comparison title (reading ease 54 → 82), the diarrhoea key
  number title (6 → 72; "diarrhoea" alone scores very low) and label (57 → 63), the skin key-number label (60 → 77).
- Whole repository: 0 errors, 26 warnings, none in retatrutide files. `--only media`: 0 / 0.
- The page renders on the dev server with every new part present (checked in the browser: leads, key-number
  titles, both comparisons, the time strip, the fact sheet and the stop strip).

### 8.7 Open questions (new)

1. **Two comparison cells have no source of their own** (inherited from HEAD's table, where the block citation
   did not cover them either): trial side "Made and tested by the developer" and "Sterile? Required". Both are true
   under EU law (investigational medicinal products must be made and released under GMP: Regulation (EU)
   536/2014, art. 61–63), but no such source is registered and this assignment could not add one. Register the
   Clinical Trials Regulation (eur-lex.europa.eu is on the allowlist) and cite it on these two cells.
2. **Heart stop sign wording.** The strip says "Racing heartbeat with chest pain or fainting" (NHS wording); the
   full list also names pounding or irregular beats, dizziness and breathlessness. Confirm the condensation.
3. Open questions in §4 and the remaining concerns in §7 (FAMHP item, size of the heart-rate rise, IGJ exemption,
   BLA vs NDA route) still stand.

---

## 9. Fact-check log: the restructured page (independent fact-check, 21 October 2026)

Scope: `src/content/compounds/en/retatrutide.mdx` (the restructure in §8) and this file. The data file, the
sources file, the glossary and the shared media files were read and checked but not edited (outside this
assignment). Every check below was made today against the primary record, not against §2, §7 or §8.

### What was checked, and how

- **Scholarly metadata (35 PMIDs).** NCBI esummary in one batch for the 31 PMIDs in `retatrutide.yaml` and the
  four reused scholarly ids (`neeland-2024-lean-mass`, `knudsen-2010-thyroid-c-cells`, `wilding-2022-step-1-extension`,
  `aronne-2024-surmount-4`). Authors, title, journal, year, volume, pages, DOI and PMCID match every entry. No DOI
  or PMID error. Publication dates confirmed in the XML: TRANSCEND-T2D-1 online 6 June 2026, TRIUMPH-1 and
  TRIUMPH-2 online 29 September 2026 (TRIUMPH-2 print issue 10 October), so "published June / September 2026" is right.
- **Abstracts read in full (efetch):** TRIUMPH-1, TRIUMPH-2, TRANSCEND-T2D-1, both phase 2 trials, phase 1b, the
  liver-fat and body-composition substudies, Kanu, Salem, Wen, Chen, Briand, Hitaka, Carneiro, Buzzi. Every number
  in the seven key numbers, the time strip and the study findings matches: TRIUMPH-1 2,339 randomised,
  -17.6/-23.7/-25.0% vs -3.9%, AHI (ITT) -22.8/-34.3/-32.1 vs -9.6, 574 and 243 in the subgroups; TRIUMPH-2 1,152,
  -11.9/-16.8/-18.8% vs -5.1%, diarrhoea 27/34/34% vs 13%, nausea 14/21/28% vs 8%, dysaesthesia 4/6/7% vs 1%,
  hypotension 1/5/6% vs <1%, permanent stopping for adverse events or death 4/12/8% vs 5%, deaths 2+3+1 vs 1;
  TRANSCEND-T2D-1 537, HbA1c -1.69/-1.86/-1.94 vs -0.81, weight -11.5/-13.9/-15.3% vs -2.6%, stopping 2-5% vs 0%;
  Chen 58 trials, 24,214 people, retatrutide -22.10% (-25.60 to -18.60), tirzepatide -19.28% (-20.39 to -18.16),
  so the intervals overlap.
- **Full texts (PMC, efetch db=pmc):** Pasqualotto (RR 3.79, 1.20-11.96; RR 3.41, 0.86-13.55), Sehgal (13,589 users,
  7,823 with a mapped symptom, heart rate increased 374 = 4.8%, allodynia and hyperaesthesia 2.1% each; list order
  increased appetite, fatigue, increased energy, nausea, food craving, insomnia), Neumann 2026 (24 men and 5 women,
  aged 52-84, severe coronary disease; "No external funding"), Neumann 2025 (adomeglivant, H89, propranolol), Hitaka
  (21 days; 24.1/19.7/31.6%), Takahashi (LY3437943 every third day for 3 weeks), Carneiro (injections at 0 h and
  168 h, so a week apart; all four still positive at 1,344 h = 56 days; nothing in urine), Piatkowski (PMC article
  page: 51.3/165.0/190.0%; lead 0.14% of the injectable PDE; "Sterility and endotoxin contamination were not
  assessed").
- **Registry (ClinicalTrials.gov API v2, today).** NCT05929066, NCT05929079, NCT05882045, NCT05931367, NCT06260722,
  NCT06662383, NCT06383390, NCT07165028, NCT06313528, NCT06039826, NCT05445232, NCT07629401, NCT03841630, NCT06354660:
  statuses, dates and enrolments unchanged and as on the page. NCT05929066: data monitoring committee yes, both arms
  "Administered SC", inclusion BMI 30 or more, or 27 or more with hypertension, dyslipidaemia, sleep apnoea or
  cardiovascular disease. NCT07629401 criteria as on the page. Search `retatrutide OR LY3437943`: still 34 records;
  Netherlands sites only in NCT06383390 and NCT07165028 (so "Dutch hospitals and practices take part in two" is
  right); German sites in NCT06383390, NCT06662383, NCT07165028 and one phase 1 study (NCT06982859).
- **PubMed counts re-run today:** 207 records; 10 RCT records, 0 after `NOT lilly[ad]`; animal-term search 20. Unchanged.
- **Regulators and law (fetched today).** EMA under-evaluation xlsx (EMA/222468/2026, 5 October 2026: orforglipron
  present, retatrutide and LY3437943 absent); EMA medicines JSON (0 hits for retatrutide or LY3437943, tirzepatide
  present); FDA unapproved-GLP-1 page (content current 1 October 2026: retatrutide "cannot be used in compounding under
  federal law", not a component of FDA-approved drugs, sold falsely "for research purposes"); FDA PCAC meeting page
  (seven peptides including emideltide/DSIP; no retatrutide); MHRA releases of 24 October 2025, 24 July 2026 and
  15 October 2026 and the MHRA GLP-1 page (quotes and the tirzepatide barrier-method advice confirmed); WADA 2026 and
  2027 List PDFs (S0 wording as quoted; no "retatrutide" or "GLP-1"); NHS acute pancreatitis, heart palpitations,
  jaundice and anaphylaxis pages (the stop-strip and stop-list wording is supported); Geneesmiddelenwet art. 18,
  27 and 40 (text read on wetten.overheid.nl). A web search found no report of a regulatory submission for
  retatrutide anywhere by 21 October 2026; Lilly's next quarterly report is not yet out.
- **Structured studies (data file).** Species, n, design, funding, group, blinding and control of all 22 entries
  agree with the abstracts and full texts above. No change needed.
- **Hero photo.** Commons API: "File:Human pancreatic islet.jpg", CC BY-SA 3.0, author Afferent, "red = glucagon
  antibody, blue = insulin antibody". Stained tissue only; licence allowed; alt text accurate.

### Errors found and fixed

1. **Two unsourced comparison cells (§8.7 item 1) now have a source.** The Geneesmiddelenwet requires a licence to
   prepare or import medicines for research (art. 18(1), first sentence) and requires the licence holder to prepare
   medicines under good manufacturing practice (art. 27(1); "fabrikant" is defined as the art. 18 licence holder).
   Trial side, "Contents known?": "Made and tested by the developer" became "The developer's own drug, made under a
   licence to strict manufacturing rules" (registry NCT05929066 for the drug and sponsor, Geneesmiddelenwet for the
   rules). "Sterile?": "Required" became "Required: trial medicines must follow good manufacturing practice"
   (Geneesmiddelenwet). The statute says GMP, not "sterile" in so many words; GMP for an injectable includes sterile
   manufacture. If the reviewer wants that step explicit, register EU GMP Annex 1 or Regulation 536/2014 art. 63.
2. **Summary item 5 said "Products bought online".** No cited source says the tested products were bought online
   (Piatkowski: "sold as retatrutide", submitted anonymously to a testing service; JAMA: one product tested in
   Australia). Now "Tested products held wrong amounts, and one held a different drug", matching the lede.
3. **TRIUMPH-1 key number "who" narrowed the population.** The registry includes BMI 27 or more with a weight-related
   condition, not only obesity. Now "adults with obesity, or overweight with a related condition, without diabetes",
   with the registry added to the key number's sources (the guide's STEP 1 example uses the same qualifier).
4. **TRIUMPH-2 "who" (evidence and risks key numbers).** The abstract enrolled adults with type 2 diabetes and a
   BMI of 27 or more. Now "adults with type 2 diabetes and a BMI of 27 or more". Prose elsewhere keeps the paper's
   own title wording ("obesity and type 2 diabetes").
5. **Phase 2 obesity prose.** "338 adults with obesity" became "338 adults with obesity or overweight" (abstract:
   BMI 30 or more, or 27 to under 30 with a weight-related condition), matching the study-table finding.
6. **This file, §1.** TRIUMPH-3 "completed April 2026" corrected to primary completion 16 April and study completion
   14 May 2026, as on the page.

### Checked and found correct (no change)

Lede; `glance.main_risk`; the three stop signs (each condenses an item of the stop list and is supported by the NHS
page and the trial sources it cites); the fact sheet (route from all three phase 3 abstracts and the registry,
half-life from Urva 2022, receptors from ChEMBL and Coskun 2022, developer code); all seven leads; both Compare
figures (every other cell matches its cited source; "Safety follow-up? None" for online products is definitional);
the time strip (80 weeks = 1.53 years); the "Faster heartbeat" paragraph (no accessible source gives the size of
the rise: searched again in the Sanyal, Elmendorf, Kaczynski and Heerspink full texts and the phase 2 abstracts);
the stop callout and `id="stop-now"`; `<WarningSigns />` not folded; no fold nested. Claim levels: animal and
cell findings are badged as such, human trials as human-controlled, the glucagon-energy share and the rhythm risk
as hypotheses. Guardrails: no dose guidance (the only quantity in `<Q>` is the 10 mg label of the tested products;
trial arms are never given in mg), no "safe" or "proven" about use, no superlatives, no seller, no sourcing hint,
no testimonial (the Reddit study is reported as posts, with its limits), no commerce words; internal links only to
planned routes (compounds/semaglutide, compounds/tirzepatide, legal/research-use-only, legal/nl,
legal/sport-and-doping, talking-to-your-doctor, legal-routes, safety/product-risk, safety/sterile-technique); no `#`
or `##` heading; no emergency number printed (rendered page checked: no "112"). PCAC: the page mentions the July
2026 meeting only to say retatrutide was not among the seven peptides (confirmed on the FDA page today); it does not
report the vote, so the five-element framing is not triggered. Balance: the promising evidence (three published,
placebo-controlled phase 3 trials in more than 4,000 people) and the real cost of the wait are stated plainly; the
risk section reports the counter-arguments on heart rhythm. Not scaremongering.

Validator after the fixes: `npx tsx scripts/validate-content.ts --only retatrutide` gives 0 errors, 0 warnings. The
page renders on the dev server (HTTP 200) with the new cell text and "who" lines.

### Open questions added for the reviewers

- **Legal reviewer:** Geneesmiddelenwet art. 18(6)(a) exempts importing a medicine "clearly intended for own use" from
  the licence requirement of art. 18, but art. 40(2) forbids importing a medicine without a marketing authorisation,
  and none of the exceptions in art. 40(3) covers personal use. Whether a buyer who imports retatrutide for themselves
  commits an offence in the Netherlands is therefore a real question for the legal pages; this page says only that
  selling and supplying are illegal. Art. 40(3)(f) also allows a compassionate-use programme while trials are
  ongoing, so a programme for retatrutide would be legally possible; none is approved (CBG list).
- **Medical reviewer, optional additions:** the registry also lists a completed metoprolol interaction study
  (NCT06808802) and an active weight-maintenance phase 3 trial (NCT06859268). Neither is on the page; both would need
  registering as sources first.
- The §8.7 heart-stop-sign question and the open points in §4 and §7 (FAMHP item, size of the heart-rate rise, BLA
  versus NDA route) still stand. The header of this file still gives the pre-restructure source count (78 distinct
  ids); after §8 the page cites 82 (the four NHS ids added).
