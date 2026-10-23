# Research notes: stubs-a (MOTS-c, epitalon, Semax, Selank, thymosin alpha-1)

Tier 2 stub pages, written 22 October 2026. Files: `src/data/compounds/{mots-c,epitalon,semax,selank,thymosin-alpha-1}.yaml`,
`src/content/compounds/en/{…}.mdx`, `src/data/sources/stubs-a.yaml`, `src/i18n/en/glossary/stubs-a.json`. Shared files
touched (entries added only): `src/data/media.yaml` and `src/assets/media/` (five Commons images via `npm run media:commons`),
`src/data/heroes.yaml`, `src/i18n/en/media.json`.

Every page follows the semaglutide/BPC-157 shape: each section opens with `<Lead>`, then one figure (`<Compare>`,
`<KeyNumber>`, `<Mechanism />`), a short visible paragraph, and depth in `<InDetail>` folds. Stop-now content
(`<Callout type="stop" id="stop-now">`, `<WarningSigns />`) is never folded. Each page has `<ProductCheck />`.
Word counts (body incl. tables and folds / visible with folds closed): MOTS-c 1,121 / 437; epitalon 1,083 / 421;
Semax 1,090 / 427; Selank about 790 / 390; thymosin alpha-1 about 1,000 / 425.

---

## 1. Key facts and their sources

### Shared (all five)

| Fact | Source id |
|---|---|
| PCAC 23–24 July 2026 considered seven peptides; MOTS-c reviewed for obesity and osteoporosis, epitalon for insomnia, Semax for cerebral ischaemia, migraine, trigeminal neuralgia (FR notice re-read via the federalregister.gov API, 22 Oct) | `fr-2026-07361-pcac-notice`, `fda-pcac-2026-07-meeting` |
| Separate votes for free base and acetate of each (questions doc re-read) | `fda-pcac-2026-questions` |
| FDA staff proposed NOT listing MOTS-c, epitalon, Semax (both forms each) | `fda-pcac-2026-briefing-intro` |
| Meeting page "Content current as of 08/06/2026"; no minutes on 22 Oct 2026 | `fda-pcac-2026-07-meeting` |
| BPC-157 8–6–1 and the six-of-seven outcome: "as reported from the public meeting" (CONTENT-GUIDE §1) | — |
| FDA category 2 page (current 22 Apr 2026): MOTs-C, epitalon, Semax (heptapeptide), Selank acetate (TP-7), thymosin-alpha 1 all "previously in category 2", nominations withdrawn, each with its risk text | `fda-category-2-safety-risks` |
| EMA medicines JSON (2,754 records, 22 Oct 2026): 0 hits for mots, epitalon, epithal, semax, selank, thymalfasin, thymosin, zadaxin, timalfasin | `ema-medicines-json`, `ema-orphan-thymalfasin-eu-3-02-110` (note) |
| CBG metadata.csv (19,553 lines, 22 Oct 2026): 0 hits for all names incl. Dutch spellings; control: 33 rows for semaglutide; no L03AX thymalfasin product | `cbg-geneesmiddeleninformatiebank` |
| openFDA Drugs@FDA: no matches for selank, semax, epitalon, MOTS-c, thymalfasin, thymosin (control: semaglutide found) | `openfda-drugsfda-search-2026-10-22` |
| WADA 2026 and 2027 lists: MOTS-c in S4.4.1; no mention of epitalon, Semax, Selank, thymosin alpha-1 (thymosin-β4/TB-500 in S2) | `wada-2026-list-en`, `wada-2027-list-en` |

### MOTS-c

| Fact | Source id |
|---|---|
| 16 aa, H-Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg-OH, C101H152N28O22S2, 2174.6 | `fda-pcac-2026-mots-c-briefing`, `pubchem-mots-c` |
| Discovered 2015 (USC); folate cycle → AICAR → AMPK in cells; prevents diet- and age-related insulin resistance and diet-induced obesity in mice; Cohen stockholder/consultant, Lee consultant for CohBar | `lee-2015-mots-c` |
| ~20% lower weight after 8 weeks HFD (FDA summary of Lee 2015); glucose ~50% lower in obese mice (Kim 2019, via FDA) | `fda-pcac-2026-mots-c-briefing` |
| Exercise capacity and late-life healthspan in mice; 10 young men's own MOTS-c rose with cycling; authors consult for CohBar | `reynolds-2021-mots-c-exercise` |
| Independent replication: ovariectomised mice (Xi'an) | `lu-2019-mots-c-ovariectomy` |
| Rapid breakdown in human blood in vitro; ELISA levels (45.9–218.5 ng/mL in 20 people) not confirmed by LC/MS | `knoop-2019-mots-c-detection` |
| FDA: no tox studies of any kind, no in-vivo PK, molecular target unknown, no human exposure data, FAERS 0 to Mar 2025 | `fda-pcac-2026-mots-c-briefing` |
| CB4211 "analog of MOTS-c"; phase 1a 65 + phase 1b 20 (11 vs 9); liver fat −5.03% vs −4.88%; no SAEs | `sec-cohbar-2021-cb4211-topline` |
| Study paused to modify formulation ("persistent local deposition"); ISR 79% vs 33% | `sec-cohbar-2021-cb4211-slides` |
| Registry: completed 19 Apr 2021, enrolment 88, no results posted | `ctgov-nct03998514` |
| Formulation "not suitable for further development" (S-4, 3 Jul 2023); merger terminated and intention to liquidate and dissolve (8-K, 1 Nov 2023); Nasdaq delisting (8-K 27 Nov, Form 25 27 Dec 2023, seen in EDGAR list) | `sec-cohbar-2023-s4`, `sec-cohbar-2023-11-8k` |
| Phase 2a MOTS-MET recruiting (Shenzhen, 120, 12 weeks, from 2 Feb 2026) | `ctgov-nct07505745` |
| WADA: added as an example in S4.4.1 in the 2025 List (not in 2024 List) | `wada-2025-list-explanatory-note`, `wada-2025-list-en` |
| PubMed: 260 / 193 non-review / 89–105 with mice or rats / 27 "Lee C" or "Cohen P" (recounted 23 Oct) | `pubmed-mots-c-count-2026-10-22` |

### Epitalon

| Fact | Source id |
|---|---|
| Ala-Glu-Asp-Gly, C14H22N4O9, 390.35; late 1980s, Khavinson; putative active part of epithalamin (bovine pineal extract) | `fda-pcac-2026-epitalon-briefing`, `pubchem-epitalon` |
| "Most pharmacological studies … by Dr. Khavinson's research group" | `fda-pcac-2026-epitalon-briefing` |
| Three human studies (2 sublingual night-shift, 1 parabulbar retinitis pigmentosa); Ivko: 75 women, 40 randomised, 20 days, 6-SMT ×1.7, blinding not specified, no sleep outcomes, no safety data | `fda-pcac-2026-epitalon-briefing`, `ivko-2020-aedg-circadian`, `khavinson-2002-epitalon-retinitis` |
| US orphan designation 2 Sep 2010, withdrawn 6 Jan 2016 | `fda-pcac-2026-epitalon-briefing` |
| No approved product in 10 named countries or EU | `fda-pcac-2026-epitalon-briefing` |
| Telomerase in fetal fibroblasts (originating) | `khavinson-2003-epitalon-telomerase` |
| Independent: telomere lengthening in normal cells (telomerase) and in 2 breast-cancer lines (ALT); correction replaced figs 2–3 | `al-dulaimi-2025-epitalon-telomeres` |
| SHR mice: 54/group; mean lifespan unchanged; last 10% +13.3%; max +12.3%; leukaemia less; total tumours unchanged | `anisimov-2003-epitalon-shr-mice` |
| Old monkeys: evening melatonin >4-fold (FDA detail); rat pineal in vitro: no melatonin release (Djeridane 2003, via FDA) | `goncharova-2001-epitalon-monkeys`, `fda-pcac-2026-epitalon-briefing` |
| FDA: "potential to be carcinogenic" (telomerase, long telomeres linked to cancer); tumour studies one group, fixed dose, female mice, ≤5.5 months exposure; no 2-year study | `fda-pcac-2026-epitalon-briefing` |
| Identified in two illegal preparations (Belgium) | `vanhee-2015-epitalon-illegal` |
| Not in Deigin's table of 14 peptide drugs registered in Russia | `deigin-2022-russian-peptides` |
| PubMed: 164 / 146 non-review / 100 Khavinson, Anisimov or Linkova (68%; recounted 23 Oct, the earlier 109 was not reproducible) | `pubmed-epitalon-count-2026-10-22` |

### Semax

| Fact | Source id |
|---|---|
| Met-Glu-His-Phe-Pro-Gly-Pro, C37H51N9O10S, 813.9 (FDA 813.93) | `fda-pcac-2026-semax-briefing`, `pubchem-semax` |
| "Semax is a registered drug in Russia and is available as 0.1% and 1% nasal drops" (strengths not printed on the page) | `fda-pcac-2026-semax-briefing` |
| Registered in Russia (Table 1), made at IMG RAS under Ashmarin and Myasoedov | `deigin-2022-russian-peptides` |
| FDA: insufficient evidence for cerebral ischaemia, migraine, trigeminal neuralgia; Russian-language references not evaluated; ~33–47 healthy adults, 69 adults, 451 children exposed; AEs mostly not discussed; no human PK; no safety data for SC; FAERS: 1 report (eye pain/burning after online-bought nasal drops, hospitalised, unresolved a year later); anticoagulant/antithrombotic in rats → bleeding concern; potentiates amphetamine-induced striatal dopamine → "concerning"; no acute/repeat-dose/reproductive tox; immunogenicity | `fda-pcac-2026-semax-briefing` |
| Rat stroke: infarct ~20% smaller (Romanova 2006, via FDA) | `fda-pcac-2026-semax-briefing` |
| BDNF 1.4-fold in rat hippocampus | `dolotov-2006-semax-bdnf` |
| Specific binding in rat basal forebrain (KD ~2.4 nM), receptor unidentified | `dolotov-2006-semax-binding` |
| Stroke: 30 vs 80 (1997); 110 in rehabilitation (2018) | `gusev-1997-semax-stroke`, `gusev-2018-semax-stroke` |
| Migraine 12 (4 headache stopped), facial pain 25; no control | `koroleva-1996-semax-analgesia` (via FDA) |
| Amphetamine potentiation 261% vs 182% | `eremin-2004-semax-amphetamine` |
| Seized products with Semax and Selank (Belgium) | `vanhee-2020-nootropic-peptides` |
| PubMed: 215 / 197 non-review / 114 core-group | `pubmed-semax-selank-count-2026-10-22` |

### Selank

| Fact | Source id |
|---|---|
| Thr-Lys-Pro-Arg-Pro-Gly-Pro, C33H57N11O9, 751.9, TP-7 | `pubchem-selank` |
| Tuftsin = Thr-Lys-Pro-Arg from IgG heavy chain, acts on phagocytes | `fridkin-1989-tuftsin` |
| "synthetic tuftsin analogue Selank"; spleen gene expression in mice (34 of 84) | `kolomin-2011-selank-spleen` |
| Registered in Russia as anxiolytic (Table 1) | `deigin-2022-russian-peptides` |
| 62 patients vs medazepam | `zozulia-2008-selank-gad` |
| 70 patients, Selank added to phenazepam vs phenazepam alone (largest patient study; added in fact-check) | `medvedev-2015-selank-add-on` |
| 60 patients vs phenazepam | `medvedev-2014-selank-phenazepam` |
| Enkephalinase inhibition in plasma (IC50 15 µM) | `zozulya-2001-selank-enkephalinase` |
| BDNF in rat hippocampus (title only) | `inozemtseva-2008-selank-bdnf` |
| Slower clotting in thromboelastography | `rogozinskaya-2017-selank-anticoagulant` |
| FDA category 2 text: immunogenicity risk; "lacks important information regarding any safety issues" | `fda-category-2-safety-risks` |
| PubMed: 65 non-review; 38 core-group; about 50 cell/animal | `pubmed-semax-selank-count-2026-10-22` |

### Thymosin alpha-1

| Fact | Source id |
|---|---|
| 28 aa, N-acetylated, sequence, C129H215N33O55, 3108.3; isolated from calf thymus fraction 5 (1977); thymalfasin [USAN:INN]; CAS 62304-98-7 | `fda-pcac-2024-thymosin-alpha-1-briefing`, `pubchem-thymalfasin` |
| Authorised in Italy (flu-vaccine adjuvant in immunocompromised); approved in Asia-Pacific, Latin America, Eastern Europe, Middle East (company 2014 report, via FDA), India, Hong Kong, Indonesia | `fda-pcac-2024-thymosin-alpha-1-briefing` |
| "In the European Union thymalfasin is authorised in Italy"; EU orphan designation EU/3/02/110 for HCC (30 Jul 2002) | `ema-orphan-thymalfasin-eu-3-02-110` |
| Italian label cautions (children, atopy, autoimmune case by case, immunomodulators); Indonesian label (ALT flares; contraindicated in deliberate immunosuppression) | `fda-pcac-2024-thymosin-alpha-1-briefing` |
| PCAC 4 Dec 2024: single-vote question 20–1 → separate votes; free base 4 yes / 17 no; acetate 4 / 17; minutes approved 21 Feb 2025 | `fda-pcac-2024-12-minutes`, `fda-pcac-2024-12-meeting` |
| TESTS: 1,106 randomised; 28-day mortality 23.4% vs 24.1%, HR 0.97 after the 2025 correction (0.99 before); AEs 66.4 vs 67.6%; SAEs 26.8 vs 29.3%; funding incl. SciClone | `wu-2025-tests-sepsis` |
| Sepsis meta-analysis 11 RCTs (967 vs 960): OR 0.73 overall; not in high-quality (0.82) or multicentre (0.86) | `gu-2025-thymosin-sepsis-meta` |
| HBV: Mutchnick 97 pts, 14% vs 4% (P = 0.084), "do not confirm"; Chien 98 pts, 40.6% / 26.5% vs 9.4% at 18 months, no placebo | `mutchnick-1999-thymosin-hbv`, `chien-1998-thymosin-hbv` |
| TLR/MyD88 activation of dendritic cells; protects transplanted mice from aspergillosis | `romani-2004-thymosin-dendritic` |
| 19 active/recruiting trials (mostly China, cancer) | `ctgov-thymalfasin-search-2026-10-22` |
| PubMed: 887 (890 on 23 Oct) records; 64 RCT-tagged; 261 non-review indexed under mice or rats; 159 Goldstein/Garaci/Romani | `pubmed-thymosin-alpha-1-count-2026-10-22` |
| Named-patient route in NL (artsenverklaring) | `igj-leveren-op-artsenverklaring` (guides.yaml) |

---

## 2. Verification log

- **PubMed**: every article's authors, title, journal, year, volume, pages, DOI, PMID and PMCID copied from NCBI esummary/efetch output (22 Oct 2026). Full author lists checked against efetch for all entries with full lists; TESTS kept as "et al." after 10 names. Full texts read (Europe PMC or PMC efetch) for: Lee 2015 (disclosure, N=10 HFD), Reynolds 2021 (10 men, competing interests, funding), Al-Dulaimi 2025 (funding, cell lines) and its correction (figures 2–3 replaced), TESTS (funding, AEs), Deigin 2022 (Table 1, "14 products are registered in the Russian Federation").
- **FDA PDFs** (media 193345 epitalon, 193347 MOTS-c, 193348 Semax, 193342 intro, 193711 questions, 183820 thymosin alpha-1, 185642 minutes) downloaded with curl and read with pdftotext; quotes copied from the text.
- **Federal Register**: notice 2026-07361 raw text fetched through the API; use per peptide confirmed. FR search for "bulk drug substances" since 24 Jul 2026: 2 notices, neither a 503A rule (re-run 22 Oct 2026; same as legal-b's search).
- **WADA**: 2024, 2025, 2026, 2027 Lists and the 2025 explanatory note downloaded from wada-ama.org and grepped (MOTS-c absent in 2024, present from 2025; no epitalon/Semax/Selank/thymosin alpha-1). USADA site search (RSS) for each name: only TB-500/thymosin β4 pages; no ruling on the others.
- **EMA**: medicines JSON and orphan-designation JSON downloaded (22 Oct 2026 timestamps); orphan page EU/3/02/110 fetched.
- **AIFA** (not cited; host not allowlisted): the AIFA medicines API returned Zadaxin 1.6 mg/ml, AIC 028364026, holder SciClone Pharmaceuticals Italy S.r.l., state "AUTORIZZATA", authorised 16 May 1996, marketed, prescription (RR), class C, IM/SC. This is the basis for saying the Italian authorisation is current; the page cites EMA and FDA for it.
- **SEC EDGAR** (sec.gov is on the .gov allowlist): CohBar filings list from data.sec.gov; 8-K exhibits 99.2/99.3 (10 Aug 2021), S-4 (3 Jul 2023) and 8-K (1 Nov 2023) fetched and grepped.
- **ClinicalTrials.gov**: NCT03998514, NCT07505745 via the API tool; searches for thymalfasin (status filter) and for MOTS-c/epitalon/Semax/Selank.
- **PubChem** PUG REST for formula, mass, SMILES, synonyms (CAS, UNII).
- **CBG** metadata.csv and **openFDA** queries as listed above.
- **Images**: licences read by `npm run media:commons` (public domain, CC BY 2.0, CC BY-SA 3.0); thumbnails viewed before choosing; two candidates rejected (an olfactory diagram with English labels; a student drawing of the thymus; a thymus micrograph with numbered markers).

---

## 3. Judgement calls and conflicts (for the editor)

1. **Thymosin alpha-1 category.** It is authorised nationally in Italy (EMA, FDA; AIFA database) and in non-EU countries, not centrally, not in NL/UK/US. No category fits: `authorised` puts "Approved in the EU" on the tile; `authorised-elsewhere` needs an EU/US/UK label on an allowlisted host (Zadaxin's SmPC is on aifa.gov.it). Used `investigational` (19 active trials) and explained it in the data file and on the page; the tile's "Not approved. It is still being tested in trials." is therefore partly wrong for this compound. **EU regulatory row set to `authorised`** with a note saying "nationally in Italy only"; NL row `not-authorised`.
2. **Thymosin alpha-1 human_clinical = authorised** (rubric: a regulator has granted an MA somewhere), with published phase 3 trials behind it. Brand list holds Zadaxin (authorised in Italy).
3. **Semax and Selank human_clinical = phase-2, not authorised.** Both are registered in Russia, which a literal reading of the rubric would grade "authorised". We graded the published human evidence instead, because the registration dossiers and most trials cannot be checked (Russian-language, FDA could not evaluate them; the Russian register is not reachable for us), and the "authorised" tile text ("Large trials in many people, checked by regulators") would be false. This differs from thymosin alpha-1, whose authorisation we verified in an EU regulator's own database and whose trial record includes large, English-language phase 3 trials. Needs editor sign-off.
4. **Epitalon human_clinical = phase-2 "only just".** The only randomised study (Ivko, 40 randomised, placebo, Russian-language, from the originating institute) measured a urinary melatonin metabolite. A stricter reading would give "case-reports"; the rubric counts completed, published trials, so phase 2.
5. **WADA rows.** MOTS-c: prohibited S4 (named since 2025; no `since` date because WADA calls it an added example). Epitalon: prohibited S0 by the KPV logic (not named; no approval found anywhere: FDA's 10 countries + EU; absent from Deigin's Russian list). Semax, Selank, thymosin alpha-1: not named and registered/authorised somewhere, so S0 may not apply; no ruling found. The status vocabulary has no "unclear" value; `not-authorised` was used so the At-a-glance tile says "See below" rather than guessing; the table then reads "Not authorised" in the sport row (cautious, but odd wording). The pages tell athletes to ask their anti-doping organisation.
6. **CB4211 study in the StudyTable.** Included as a human phase-1 study with source = the company's press release (SEC), clearly labelled "company-reported, never in a journal" and "a different molecule". It does not count towards human_clinical (unpublished; analogue).
7. **Ivko year.** PubMed record 2020 (Russian); FDA cites "Ivko et al. 2021" (probably the English translation). Page cites the PubMed record and the FDA description.
8. **PubChem epitalon synonyms** list "Epithalamin" (an extract): flagged on the page as wrong.
9. **MOTS-c independence = broadly replicated** for animal work only (originating group ≤ about 20% of records); human evidence nil. Thymosin alpha-1 independence = broadly replicated, with the caveat that key clinical claims did not replicate in larger blinded trials.
10. **Selank preclinical volume = moderate** (about 50 primary cell/animal studies, at the band's edge).

---

## 4. Validator warnings and false positives

`npx tsx scripts/validate-content.ts --only <file>`: 0 errors and 0 warnings for each of the five MDX files, the five data files, `stubs-a.yaml` and `stubs-a.json` (22 Oct 2026). Earlier warnings fixed: "cycling" (guardrail false positive for exercise cycling, reworded to "exercise bike"), several reading-ease items. Full run: 0 errors site-wide at the time of writing.

---

## 5. Open questions for the medical and legal reviewers

1. Is the Italian Zadaxin authorisation enough to call thymosin alpha-1 "authorised" on the evidence axis while its category is "investigational"? Should the vocabulary get a category for "authorised in another EU country / outside the EU without an allowlisted label"?
2. Semax/Selank/thymosin alpha-1 in sport: worth a written query to the Dopingautoriteit or WADA (also raised in research/legal-b.md).
3. MOTS-c stop sign "blood sugar may be low" rests on mouse data (glucose about halved in obese mice) and the company's 6% fall in fasting glucose; is it proportionate as a stop-now sign? It is framed for people who also use insulin or diabetes tablets.
4. Semax bleeding and stimulant interactions (rat/mouse data via FDA): listed as plausible, untested interactions. Reviewer to confirm wording.
5. Add aifa.gov.it to the allowlist so the Italian product information can be cited directly?
6. The PCAC July 2026 minutes: when posted, check the MOTS-c, Semax and epitalon counts and whether free-base and acetate votes differed; update the three pages.
7. NCT07505745 (MOTS-c phase 2a, primary completion Feb 2027): revisit the MOTS-c category and grade when it reports.

---

## 6. Fact-check log (independent fact-checker, 23 October 2026)

Scope: the five data files, the five English pages, `src/data/sources/stubs-a.yaml`, `src/i18n/en/glossary/stubs-a.json`,
this file, and the five image entries in the shared media files. Method: every record re-fetched, never taken from the
draft.

### What was checked, and how

- **PubMed (31 records plus 2 corrections).** NCBI esummary/efetch for every PMID: authors, title, journal, year, volume,
  pages, DOI and PMCID all match the records. One cosmetic difference was kept on purpose: PubMed's typing error
  "tretament" in Gusev 2018 is corrected in the title (noted in the entry). Abstracts read for every study claim; full
  texts read for Lee 2015 (disclosure, N = 10 per group, NIH and Glenn funding), Reynolds 2021 (10 sedentary young men,
  NIA and AFAR funding), Al-Dulaimi 2025 (funding statement), TESTS (funding, adverse events, subgroups, correction),
  Gu 2025 (funding, conflicts) and Deigin 2022 (Table 1: Semax and Selank listed; epitalon absent).
- **FDA documents.** Briefings for MOTS-c (media/193347), epitalon (193345), Semax (193348) and thymosin alpha-1
  (183820), the July 2026 introduction (193342) and voting questions (193711), and the December 2024 minutes (185642):
  downloaded and read with pdftotext. Every number and quote on the pages was matched to the text. The meeting page still
  shows "Content current as of 08/06/2026" and no minutes (re-fetched 23 October 2026). The Federal Register notice
  2026-07361 was re-read through the API: uses evaluated are "Obesity and osteoporosis" (MOTS-c), "Insomnia" (epitalon)
  and cerebral ischaemia, migraine and trigeminal neuralgia (Semax). The category 2 page (current 22 April 2026) lists
  MOTs-C, epitalon, Semax (heptapeptide), Selank acetate (TP-7) and thymosin-alpha 1 with the risk texts quoted.
- **PCAC framing.** All five canonical elements checked on the three PCAC pages. Added: emideltide (DSIP) as the one not
  recommended, the separate free-base and acetate votes (voting questions), and the "as reported from the public
  meeting" qualifier for the outcome as well as the counts. The FDA's proposal not to list MOTS-c, epitalon and Semax
  (both forms each) is confirmed in the introduction document.
- **WADA.** 2024, 2025, 2026 and 2027 Lists and the 2025 and 2027 explanatory notes downloaded and searched. MOTS-c is
  absent from the 2024 List and named in S4.4.1 from 2025; epitalon, Semax, Selank and thymosin alpha-1 are not named in
  any of them. S0 wording checked. No USADA, WADA or Dopingautoriteit ruling on the four unnamed peptides was found.
- **Other regulators and registries.** EMA orphan page EU/3/02/110 fetched; SEC filings (two 8-K exhibits, the S-4 and
  the November 2023 8-K) fetched and their EDGAR filing dates checked (10 August 2021; 3 July 2023, accepted 30 June;
  1 November 2023); ClinicalTrials.gov API for NCT03998514 and NCT07505745 and the thymalfasin search; openFDA queries
  re-run (no matches for all six names; semaglutide control found); PubChem formula, mass, isomeric SMILES (identical to
  the data files), CAS and UNII for all five; Commons licence metadata for the five images (public domain, CC BY 2.0,
  CC BY-SA 3.0, all allowed).
- **PubMed counts.** All re-run with E-utilities and, for the epitalon and MOTS-c author shares, counted from the author
  lists of every record.

### Errors found and fixed

1. **Epitalon group share was wrong.** "109 of 146 (75%)" could not be reproduced: counting the author lists of all 146
   non-review records gives 100 (68%; about 72% after removing about eight unrelated hits). Fixed in the KeyNumber,
   the fact sheet ("about 2 in 3 papers"), the independence rationale, the source note and the table above. The grade
   (single-group-dominant) still holds.
2. **Selank: a larger patient study was missed.** Medvedev 2015 (PMID 26356395, 70 patients, Selank added to phenazepam
   against phenazepam alone, no placebo) is larger than the 62-patient study the page called the biggest. Registered as
   `medvedev-2015-selank-add-on` (metadata from PubMed), added to the data file and study texts, and used for the
   KeyNumber and fact sheet. The lead now says "no patient study used a dummy drug", because a 2020 brain-scan study in
   52 healthy people (Panikratova et al.) did use a placebo.
3. **TESTS correction missed.** BMJ 2025;389:r1098 changed the hazard ratio to 0.97 (0.76 to 1.24); the percentages on
   the page are unchanged. Source note updated. The subgroup hints point both ways (possibly better with diabetes,
   possibly worse under 60: HR 1.67, 1.04 to 2.67); the page said only "older people, diabetes". Fixed in the study
   limitation and the evidence fold.
4. **Unverified "only" and "nowhere" claims.** "A medicine only in Russia" (Semax, Selank) and "approved nowhere"
   (epitalon) are not established by any source we can cite: the FDA checked ten countries and the EU for epitalon, and
   nobody checked other countries for Semax and Selank. Reworded to "a medicine in Russia" and "no country is known to
   have approved it"; the epitalon sport fold now explains why S0 is applied.
5. **Company claims stated as fact (thymosin alpha-1).** The approvals in "Asia, Latin America, Eastern Europe and the
   Middle East" come from the maker's 2014 annual report, which the FDA says it could not verify. The page now names
   Italy, India and Hong Kong (official databases cited by the FDA) and attributes the rest to the maker. "Authorised
   nationally in Italy only" lost the word "only" for the same reason.
6. **One consumer report scored as "shown in people".** The Semax eye-pain row was "Yes"; a single FAERS report does not
   show causation (the page itself said so). Changed to "Unknown".
7. **Over-specific product claims.** "Unlabelled seized products" (Semax, Selank) is not in Vanhee 2020, which says the
   two preparations were unknown until analysed. Reworded.
8. **Small number and wording errors.** CB4211 study n 85 to 88 (65 + 23 randomised; 20 finished phase 1b); Ivko n 75 to
   40 (the randomised comparison; 35 were a reference group); "compounders do not have to report" to "generally do not
   report" (FDA wording); Semax exposure "about 550" to "about 550 to 570"; Semax core-group records "114" to "about
   115"; MOTS-c rodent records "92" to "about 90 to 105"; thymosin alpha-1 rodent records to "more than 250"; Gu 2025
   funding "undisclosed" to mixed (NSFC, university, provincial enterprise-joint foundation); Eremin 2004: the rat finding
   used Semax before amphetamine, the mouse finding used them together, and the record does not support "Finnish
   co-authors" (removed); Al-Dulaimi correction dated as published online 15 November 2025 (volume 27).
9. **Fairness (the opposite failure).** Added what the sources report in favour: the other 8 of 12 migraine patients
   reported less pain and 6 of 9 with dental nerve pain reported pain stopping (Semax, FDA review); the Ivko authors'
   reported well-being gain (83% against 25%, method not described); the meta-analysis authors' possible benefit in
   people with cancer (thymosin alpha-1).
10. **Glossary.** `insulin-resistance` removed: "insulin resistance" is already an alias of `insulin-sensitivity`
    (tirzepatide.json), so the two would compete in auto-linking. Added `orphan-designation`, `senescence`, `brown-fat`,
    `neurasthenia` and `trigeminal-neuralgia` (used on the pages, not defined elsewhere).
11. **B1 and readability.** Rewrote the thymosin alpha-1 immune-suppression bullet and the named-patient sentence (which
    now also matches the IGJ page: the doctor signs a statement, a pharmacy applies, the IGJ decides). Validator
    readability warnings created by the fixes were resolved.
12. **Image alt text.** The rat hippocampus alt said the gold bands were "nerve cells"; the Commons description says gold
    is DNA, so the alt now says "tightly packed cell nuclei".

### Checked and found correct (no change)

All 31 original PubMed records' metadata; MOTS-c ~20% weight and ~50% glucose figures (FDA summary of Lee 2015 and
Kim 2019); FAERS results for MOTS-c (none to 9 March 2025), epitalon (none to 8 December 2025) and Semax (one report);
the epitalon orphan dates (2 September 2010, withdrawn 6 January 2016); the ten countries; the FDA's carcinogenicity
reasoning and quote; monkey melatonin (more than 4-fold, 10 days, no change in young monkeys); Djeridane 2003 via the
FDA; Anisimov 2003 (54 per group, 13.3%, 12.3%, leukaemia, total tumours unchanged); Semax binding (KD 2.4 nM) and BDNF
(1.4-fold); the Semax bleeding and dopamine concerns; Koroleva via the FDA; the 2024 thymosin alpha-1 votes (single-vote
question 20 to 1; 4 to 17 for each form; minutes approved 21 February 2025); Italian and Indonesian label points
(including "contraindicated during pregnancy and lactation"); TESTS adverse events (66.4% vs 67.6%; 26.8% vs 29.3%);
Mutchnick and Chien figures; CohBar figures (liver fat -5.03% vs -4.88%; injection-site reactions 79% vs 33%;
formulation and liquidation statements); NCT07505745 (120, 1:1, under the skin, 12 weeks, Shenzhen, primary completion
February 2027); WADA statuses. Guardrails: no doses, sourcing hints, testimonials or superlatives; studied regimens
appear only inside study descriptions and without amounts; English pages print no emergency number; internal links only
to planned routes; no `#` headings.

### Still open for the editor and reviewers

- The contract issues listed in sections 3 and 5 stand: the "investigational" category for thymosin alpha-1 makes the
  approval tile wrong, the WADA vocabulary has no "unclear" value, and the Semax, Selank and epitalon `human_clinical`
  grades are judgement calls. Epitalon's phase-2 grade rests on a randomised comparison of 40 women (20 per group).
- The Italian authorisation is current per the FDA (AIFA accessed June 2024) and the writer's AIFA check; the EMA
  sentence dates from 2003. aifa.gov.it is still not on the allowlist.
- Selank `preclinical_volume: moderate` sits on the boundary (52 to 53 cell or animal records by our count).
- Panikratova 2020 (52 healthy people, placebo, brain connectivity after Semax or Selank) is not on either page; a
  reviewer may want it in the Semax and Selank evidence folds.
- The summaries of the three PCAC pages say advisers "backed" pharmacy compounding, as the BPC-157 page does; the outcome
  is "as reported from the public meeting" and is qualified that way in the body. Revisit when the minutes appear.
