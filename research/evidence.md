# Research notes: Evidence section (group evidence)

Written 22 October 2026 for the pages `evidence` (index), `evidence/how-to-read-a-study`,
`evidence/the-translation-gap`, `evidence/evidence-grading` and `evidence/conflicts-of-interest`.
New sources are in `src/data/sources/evidence.yaml`; glossary terms in
`src/i18n/en/glossary/evidence.json`. `git status` showed no earlier draft of these files, so this
is a first run. Page heroes were registered in `src/data/media.yaml`, `src/data/heroes.yaml` and
`src/i18n/en/media.json` (entries added with Edit, nothing rewritten).

## 1. Key facts and their sources

### How to read a study

| Fact on the page | Source id | Where it was read |
|---|---|---|
| GRADE: 4 levels; RCTs start high, observational low; downgraded for limitations, inconsistency, indirectness, imprecision, reporting bias | `guyatt-2008-grade` | PMC article page (PMC2335261) |
| Evidence pyramid; systematic reviews as a "lens" on the studies below | `murad-2016-evidence-pyramid` | PubMed abstract |
| 15 of 16 prospective studies found lower coronary risk with oestrogen; RR 0.56; "unlikely to be explained by confounding" | `stampfer-1991-oestrogen-heart` | PubMed abstract |
| WHI: 16,608 women aged 50–79; stopped after mean 5.2 years; CHD HR 1.29 (1.02–1.63); "should not be initiated or continued for primary prevention of CHD" | `rossouw-2002-whi` | PubMed abstract |
| 250 trials / 33 meta-analyses; ORs exaggerated 41% (inadequate concealment), 30% (unclear), 17% (not double-blind) | `schulz-1995-empirical-bias` | PubMed abstract |
| 102 trials, 122 papers; 62% had a primary outcome changed, introduced or omitted; significant outcomes more often fully reported (OR 2.4 efficacy) | `chan-2004-outcome-reporting` | PubMed abstract |
| ICMJE: registration required as condition of consideration; trials enrolling after 1 July 2005; ongoing trials by 13 September 2005 | `de-angelis-2004-trial-registration` | NEJM paywalled (403); wording read in the simultaneous CMAJ copy, PMC516198 |
| Low power: misses effects, lowers probability that a significant result is true, inflates effect sizes | `button-2013-power-failure` | PubMed abstract |
| Small studies, small effects, flexible designs → findings less likely true | `ioannidis-2005-false-findings` (existing, bpc-157.yaml) | — |
| ≥50 publications of drugs extending SOD1(G93A) mouse life; none but riluzole worked clinically; 8 retested, none worked; 5,429 mice; "measurements of noise" | `scott-2008-als-mouse` | PubMed abstract |
| 8 rats per group split 4 + 4 for each test (BPC-157 tendon study); blinded pathologist; no funding; strength and Bonar score not significant; type I collagen higher | `bicer-2026-achilles` (existing) | Existing source note (bpc-157 group read the full text) |
| CAST: 1,498 patients; mean 10 months; 43 vs 16 arrhythmic deaths (P = 0.0004); drugs stopped; mechanism unknown | `echt-1991-cast` | PubMed abstract |
| Surrogate end points can mislead | `fleming-1996-surrogate-endpoints` | PubMed record (no abstract; cited only for the concept, which is the paper's title question) |
| 25 misinterpretations; selecting analyses by P values | `greenland-2016-p-values` | PubMed abstract |
| Spin in conclusions of 42 of 72 abstracts (58.3%) with non-significant primary outcome | `boutron-2010-spin` | PubMed abstract |
| SELECT: 569/8,803 (6.5%) vs 701/8,801 (8.0%); HR 0.80 (0.72–0.90); mean follow-up 39.8 months | `lincoff-2023-select` (existing) | PubMed abstract re-read 22 October 2026 |
| Mammography "25%" = 1 fewer death in 1,000; recommend absolute risks and natural frequencies | `gigerenzer-2007-health-statistics` | PubMed abstract |
| Preprint conclusions changed in 7.2% (non-COVID) and 17.2% (COVID) of later-published papers; mostly not qualitatively | `brierley-2022-preprints` | PubMed abstract |
| 607 BMJ reviewers found on average 2.58 of 9 planted major errors | `schroter-2008-peer-review-errors` | PubMed abstract |
| 462 press releases; 36% exaggerated animal-to-human inference; 86% vs 10% of news followed | `sumner-2014-press-releases` | PubMed abstract |
| Spin in 47% of press releases; associated with spin in abstract conclusions (RR 5.6) | `yavchitz-2012-spin-press` | PubMed abstract |
| Online semaglutide vials: amount of semaglutide above the label; semaglutide 7.7–14.37% of the powder; sellers claimed ≥99% purity | `ashraf-2024-online-semaglutide` (existing) | Existing source note (safety-b group read PMC full text) |

Arithmetic on the page that is ours, not a source's: the coin example (P(6 or more heads in 8 fair
tosses) = 37/256 = 14.5%, "about 1 in 7"); SELECT per 1,000 (64.6 → 65, 79.6 → 80, difference 15);
NNT ≈ 1,000/15 ≈ 67 over a mean 39.8 months; "a rarer problem: 8 in 1,000 → 1.6 fewer". The page
labels the NNT as our arithmetic.

### The translation gap

| Fact on the page | Source id | Where it was read |
|---|---|---|
| 122 systematic reviews, 54 diseases, 367 therapies; 281 with >10 years since first animal study: 50% any human study, 40% RCT, 5% approved; median 5/7/10 years; concordance: 79% of 1,496 animal studies, 62% of 515 clinical studies, 50% of 220 RCTs positive (RR 0.86 = "86% concordance") | `ineichen-2024-animal-to-human` | PMC full text (BioC), results section and Table 2 |
| 76 highly cited animal studies; "only just over a third translated at the level of human randomised trials"; "only eight of the 113 animal studies on thrombolysis for stroke reported a sample size calculation" | `hackam-2007-translating-animal-research` | PMC article page |
| Same study: about one-third translated at RCT level, one-tenth approved; median citation count 889 | `van-der-worp-2010-animal-models` | PMC full text |
| Phase transitions 66.4% / 58.3% / 59.0%; 13.8% overall; 3.4% oncology; 41,040 paths | `wong-2019-clinical-trial-success` (existing, guides.yaml) | PMC full text (BioC), section 4.1, Tables 1–2 |
| Rodent C-cells carry GLP-1R; human and monkey low; 20 months liraglutide no hyperplasia in monkeys | `knudsen-2010-thyroid-c-cells` (existing) | Wording mirrors the semaglutide page |
| Mouse vs human immune differences (leucocyte balance, TLRs, cytokines, costimulation) | `mestas-2004-mice-not-men` | PubMed abstract |
| Mouse models' genomic responses close to random vs human (R² 0.0–0.1) | `seok-2013-mouse-inflammation` | PubMed abstract |
| Drugs unlikely to suit simple allometric scaling (protein-bound, extensively metabolised, actively transported, target differences); transport/metabolism/dose-response "can override the effect of size alone" | `sharma-2009-dose-extrapolation` | PubMed abstract (PMC full text not retrievable through BioC) |
| Semaglutide >99% albumin bound | `ema-epar-wegovy` (existing) | As on the semaglutide page |
| Lab rats live about 2–3.5 years; sexual maturity ~6 weeks; adult rat month ≈ 3 human years | `sengupta-2013-rat-age` | PMC full text (BioC), "Laboratory rats live about 2-3.5 years (average 3 years)" |
| Stroke: ~500 neuroprotective strategies vs aspirin and early thrombolysis; young healthy animals; >95% rats and mice; ~10% hypertensive, <1% diabetic animals; up to 75% / 68% of patients hypertensive / hyperglycaemic; median 10 min to treatment; infarct volume at 1–3 days vs function at 3 months; randomisation ≤ about a third, sample size 0–3% | `van-der-worp-2010-animal-models` | PMC full text |
| BPC-157 tendon (Staresinic 2003) and fistula (Klicek 2008) studies gave the first dose 30 minutes after surgery | `staresinic-2003-achilles`, `klicek-2008-fistula` (existing) | PubMed abstracts via efetch, 22 October 2026 |
| 290 animal studies: OR 3.4 (no randomisation), 3.2 (no blinding), 5.2 (neither vs both) | `bebarta-2003-randomisation-blinding` | PubMed abstract |
| 2% of 525 animal stroke publications reported no significant effect; publication bias ≈ one-third of efficacy | `sena-2010-publication-bias` (existing); the "one-third" figure re-read in `van-der-worp-2010-animal-models` | — |
| FDA first-dose guidance: starting dose for healthy volunteers "regardless of the projected clinical use"; starts from NOAEL; "does not address dose escalation"; safety factor reasons (sensitivity; toxicities hard to detect "e.g., headache, myalgias, mental disturbances"; receptor densities or affinities; unexpected toxicities; ADME); "human bioavailability and metabolism may differ significantly" | `fda-2005-starting-dose-guidance` | PDF downloaded and read (pdftotext) |
| EMA FIH guideline Rev. 1: exposure "considered more relevant than the relative dose levels between animals and humans"; MABEL / PAD / NOAEL; species relevance; "a cautious approach" for human-specific products; sentinel dosing | `ema-2017-first-in-human-guideline` | Page fetched and PDF read |
| TGN1412: 6 healthy young men; reaction within 90 minutes; critically ill at 12–16 hours; organ support 8 and 16 days in two; all survived | `suntharalingam-2006-tgn1412` | PubMed abstract |
| CD28 not expressed on CD4+ effector memory T cells of the species used for safety testing; storm "not predicted by pre-clinical safety testing" | `eastwood-2010-tgn1412-cd28` | PubMed abstract |
| KPV: no human study by any route | `fda-pcac-2026-kpv-briefing` (existing) | As on the KPV page |
| BPC-157: developer's human studies only as abstracts; human safety information insufficient; no human dose–response data | `fda-pcac-2026-bpc157-briefing` (existing) | As on the BPC-157 and Croatian lab pages |
| No BPC-157 controlled trial published in full (3 studies, n = 30, very low certainty) | `poolton-2026-human-sr` (existing) | — |

**Dose scaling: what the page deliberately leaves out.** The FDA guidance contains a body-surface-area
conversion table, a default safety factor and worked examples; the EMA guideline and Sharma &
McNeill discuss allometric exponents. None of these numbers, factors or formulas appears on the
page (CONTENT-GUIDE §6 and the brief). The page describes the process in words and explains why it
yields a cautious first test dose under observation, not a dose that works or a dose safe for use
outside a trial.

### Evidence grading

The rubric table mirrors CONTENT-GUIDE §7 exactly (values, thresholds, "assign by"). The display names
come from `src/i18n/en/evidence.json` (used by `<GradeRubric />`), and the claim-level and
mechanism-level wording from the same file. Examples rest on existing sources:
`pubmed-bpc157-count-2026-10-20` (≈160 primary studies, ≈85% Zagreb; 2024–2026: 52 records, 18 with
Sikirić, 19 of the other 34 tagged review/comment/letter/editorial, per research/bpc-157.md),
`fda-pcac-2026-bpc157-briefing` (phase 2 trial in 53 patients only as a 2005 abstract),
`poolton-2026-human-sr`, `pubmed-retatrutide-count-2026-10-20` (the retatrutide judgement call),
`hathaway-2024-naion`, `pasternak-2024-thyroid-cancer`, `ema-prac-2024-04-suicidal-thoughts`
(semaglutide's independent safety checks), `ema-epar-ozempic` (EU authorisation 2018) and
`ema-prac-2025-06-naion` (NAION very rare, June 2025; "up to 1 in 10,000" as on the semaglutide page).

### Conflicts of interest

| Fact on the page | Source id | Where it was read |
|---|---|---|
| 75 papers; RR 1.27 (1.17–1.37) favourable efficacy results (25 papers, moderate quality); RR 1.34 (1.19–1.51) favourable conclusions (29 papers, low quality); blinding more often low risk; results–conclusions agreement RR 0.83; "industry bias that cannot be explained by standard 'Risk of bias' assessments" | `lundh-2017-industry-sponsorship` (registered by the about group in about.yaml) | PubMed abstract |
| 202 rosiglitazone articles; 108 (53%) with a COI statement; RR 3.38 (diabetes-drug makers), 4.29 (rosiglitazone makers) | `wang-2010-rosiglitazone-coi` | PubMed abstract |
| Rofecoxib litigation documents; 22 of 24 trial articles disclosed support, 36 of 72 reviews | `ross-2008-rofecoxib-ghostwriting` | PubMed abstract |
| 630 of 896 authors responded; 21.0% honorary or ghost; 17.6% honorary; 7.9% ghost (down from 11.5% in 1996) | `wislar-2011-ghost-authorship` | PubMed abstract |
| Predatory vs OA vs subscription: spelling errors 66/6/3%; images 63/5/1%; bogus metric 33/3/0%; unverified editors 73/2/1%; median fee $100 / $1,865 / $3,000; 13 characteristics | `shamseer-2017-predatory-journals` | PubMed abstract |
| Scholars and publishers from ten countries agreed a definition | `grudniewicz-2019-predatory-definition` | Nature page description (full text paywalled) |
| 242 papers, 675 citations, 220,553 paths; citation bias, amplification, invention | `greenberg-2009-citation-distortion` | PubMed abstract |
| 279,669 physicians; 63,524 payments; 95% meals, mean <$20; ORs 1.18–2.18; association not causation | `dejong-2016-industry-meals` | PubMed abstract |
| Open Payments: public database of payments from drug and device companies to physicians | `cms-open-payments` | cms.gov page fetched (curl) |
| Influencer drug promotion: 12 articles; three themes | `gell-2026-influencer-drug-promotion` | PubMed abstract (published 2 March 2026, after training cut-off; verified on PubMed) |
| ICMJE uniform COI form | `drazen-2010-icmje-coi-form` | PubMed record |
| Sikirić inventor on a 1998 patent application for salts of the peptide | `jozwiak-2025-review` (existing) | As on the Croatian lab page |

## 2. Verification log

- **PubMed metadata.** All new scholarly sources were looked up with `get_article_metadata` (PubMed MCP)
  on 22 October 2026, after `lookup_article_by_citation` or `search_articles` to find the PMID.
  Authors, titles, journals, years, volumes, pages, DOIs, PMIDs and PMCIDs were copied from the
  records. Journal names are written out in full. `sengupta-2013-rat-age` has no DOI in PubMed and is
  PMID/PMCID-only.
- **Duplicates.** Before writing, every DOI was grepped across `src/data/sources/`; none was
  registered. During the run the about group registered `lundh-2017-industry-sponsorship` with the
  same DOI; the validator flagged the duplicate id, so I removed mine and reuse theirs. My extra check
  on that source: Crossref lists pub3 (16 February 2017) as the new version of pub2, `doi.org` returns
  404 for `MR000033.pub4`, and PubMed has no later version, so pub3 is the current version as of
  22 October 2026 (the Cochrane Library page itself returned 403).
- **Full texts read.** PMC BioC JSON for Ineichen 2024, Wong 2019, van der Worp 2010 and Sengupta 2013;
  PMC article pages (WebFetch) for Hackam 2007 and GRADE 2008; CMAJ copy of the ICMJE registration
  statement (PMC516198). FDA 2005 guidance and EMA FIH guideline PDFs were downloaded and converted
  with `pdftotext` (kept in the session scratchpad, not committed).
- **Regulator pages.** fda.gov (guidance PDF), ema.europa.eu (guideline page and PDF) and cms.gov were
  fetched. All three hosts are on the allowlist (`.gov` suffix, `www.ema.europa.eu`).
- **Re-reads of existing sources.** SELECT abstract re-read; Staresinic 2003, Klicek 2008 and Demirtaş
  2025 abstracts re-read with efetch for treatment timing ("first application 30 min following
  surgery").
- **Validator.** `npx tsx scripts/validate-content.ts --only evidence`: 0 errors, 0 warnings. `--only
  media`, `--only heroes` and `--only glossary`: no errors or warnings in my entries. Full run: 0 errors.
- **MDX.** All five pages compiled with `@mdx-js/mdx` + `remark-gfm` (syntax check only; no full Astro
  build was run).
- **Readability.** Every summary item, Lead answer, figure title, KeyNumber label and caption was
  scored with `src/lib/readability.ts` and rewritten until Flesch ≥ 60 and ≤ 18 words.

## 3. Conflicts between sources, and how I resolved them

1. **Hackam & Redelmeier 2006 numbers.** The JAMA research letter is paywalled (403). Widely quoted
   figures (37% replicated, 18% contradicted, 45% untested) could not be read in the primary text. The
   page therefore uses only what two open sources state: the first author's own BMJ editorial ("76
   highly cited ... only just over a third translated at the level of human randomised trials") and
   van der Worp 2010 ("about one-third ... and one-tenth ... approved"; median 889 citations). The
   18% figure is not used. **Reviewer: confirm from the JAMA letter if you have access.**
2. **Ineichen 2024 "86% concordance".** The 86% is a relative risk (0.86) of the proportion of
   positive animal studies to positive clinical studies, not 86% of therapies agreeing. The page
   gives the underlying proportions (79% / 62% / 50%) and attributes "86% concordance" to the authors.
3. **Ineichen's headline 5% vs Table 1.** Across all 367 therapies (no time restriction) Table 1
   gives 45% / 36% / 4%; the 50% / 40% / 5% figures apply to the 281 therapies with more than 10 years
   since the first animal study. The page uses the 281-therapy figures and says so.
4. **BPC-157 human grade.** The brief describes BPC-157 as having "no human data". The data file
   grades `human_clinical: case-reports` (four small uncontrolled reports; the phase 2 trial exists
   only as an abstract). The pages follow the data file ("case reports only", "almost no data in
   people").
5. **Lead syntax.** The brief writes `<Lead question="…" answer="…" />`; the validator and the
   semaglutide page use the answer as children (`<Lead question="…">answer</Lead>`). I followed the
   validator.
6. **Lundh duplicate.** See verification log. The about group's entry is typed `review`; I would have
   typed it `meta-analysis`. Left as theirs.

## 4. Editorial decisions

- **No numbers for dose scaling.** Explained in §1. The diagram "first-dose-in-people" lists the steps
  in words only.
- **No `<ProductCheck />`.** These are evidence pages; none discusses using a product beyond a
  one-line pointer to the safety pages (translation gap, last section; index). Placing the shared
  checklist here would duplicate the safety pages. The pointer links to `safety/product-risk`,
  `safety/monitoring` and `safety/warning-signs`.
- **Both directions.** The translation-gap page reports Ineichen's argument that translation may be
  better than often claimed, and says animal research is how leads are found and dangers caught. The
  COI page says conflicts do not make results false and uses semaglutide as a company-funded result
  that held up under independent checks.
- **Sellers.** No seller, site or brand of research chemical is named. Ashraf 2024 names sellers; we
  do not.
- **"Citation laundering".** This is our own term (glossary says so). The evidence for the phenomenon
  is Greenberg 2009 ("citation distortion": bias, amplification, invention).
- **Word counts.** Counted with folds open (body text plus figure text and tables): how-to-read-a-study
  ≈ 2,950, the-translation-gap ≈ 2,850, evidence-grading ≈ 2,200, conflicts-of-interest ≈ 2,600,
  index ≈ 220. With folds closed: ≈ 1,600, 1,470, 780 and 1,310. The first two exceed the 2,500 target
  because the brief asks for eight and seven distinct topics; most of the overrun is in folds and
  tables.
- **Heroes.** wooden-ladder (evidence ladder; CC BY-SA 4.0), coin-toss (chance; CC BY-SA 2.0),
  hooded-lab-rat (a Lister hooded laboratory rat; CC BY 3.0), three-measuring-scales (three rulers,
  separate scales; CC BY 2.0; incidental scale markings only, no brand), handshake-drawing (line
  drawing, `kind: illustration`; CC BY-SA 2.0). No people, products, vials or needles. Caption sources
  added to each registry entry where the caption states a fact.

## 5. Validator warnings

None remain in my files. False positives that I reworded rather than kept: "starting dose" and
"effective dose" (dose-recommendation pattern) in the dose-scaling fold; "is safe" in negative
sentences; "best-looking" and "at best" (superlative pattern).

## 6. Open questions for the named medical and methods reviewer

1. Confirm the Hackam & Redelmeier 2006 figures against the JAMA letter (see §3.1).
2. The SELECT worked example: is it acceptable to present NNT ≈ 67 from crude percentages, labelled
   as our arithmetic, given that the trial reports a hazard ratio?
3. The rubric's "few groups" for retatrutide and "broadly replicated" for semaglutide are judgement
   calls described on the grading page; please confirm they read fairly.
4. The TGN1412 section states the animal tests "missed" the danger. The Eastwood 2010 explanation is
   in vitro; the page labels it as such. Is "the likely reason" the right strength?
5. The conflicts page describes influencers who earn from a sale ("a discount code, an affiliate link
   or their own shop") as advertising. Please check that this wording is acceptable under the site's
   own commerce rules (it is prose, not link text; the commerce check only covers links and calls to
   action).
6. Should the Dutch Transparantieregister Zorg be mentioned next to US Open Payments? I left it out:
   its host (and officielebekendmakingen.nl) is not on the link allowlist, and its current legal
   status (a 2020 bill to make reporting mandatory) could not be verified on an allowlisted page.

## 7. Fact-check log (independent fact-checker, 22 October 2026)

Scope: the five evidence pages, `src/data/sources/evidence.yaml`, `src/i18n/en/glossary/evidence.json`,
this file, and the five evidence entries in `src/data/media.yaml`, `src/data/heroes.yaml` and
`src/i18n/en/media.json`.

### 7.1 What was checked, and how

- **All 41 original sources in `evidence.yaml`.** Every PMID re-fetched with PubMed
  `get_article_metadata`; authors (order and initials), title, journal, year, volume, pages, DOI and
  PMCID compared with the record. All matched. No fabricated or mismatched DOI was found.
- **Reused sources from other groups** whose claims these pages depend on: SELECT (`lincoff-2023-select`),
  Lundh 2017, Sena 2010, Macleod 2015, Errington 2021, Begley 2012, Knudsen 2010, Ioannidis 2005,
  Hathaway 2024, Pasternak 2024 (PubMed abstracts); Staresinic 2003 and Klicek 2008 (efetch abstracts:
  "first application 30 min following surgery" and "firstly applied at 30 min after surgery",
  confirmed); EMA PRAC NAION page (fetched: "may affect up to 1 in 10,000 people taking semaglutide");
  BPC-157 counts against research/bpc-157.md §1 (140 of 163 primary experimental papers, 86%;
  2024–2026: 52 records, 34 without Sikirić, 19 of those tagged review/comment/letter/editorial).
- **Full texts read for numbers:** Ineichen 2024 (PMC BioC: 50/40/5% for the 281 therapies with more
  than 10 years since the first animal study; approval means FDA approval; 79/62/50% positive; RR 0.86),
  van der Worp 2010 (Table 2 and text), Macleod 2015 (24.8% randomisation, 0.7% sample size in 2,671
  publications), Sengupta 2013 ("Laboratory rats live about 2-3.5 years"), Sumner 2014, Brierley 2022,
  Wong 2019 (13.8%, 3.4% oncology, 41,040 paths), ICMJE statement (CMAJ copy, PMC516198).
- **Regulator documents re-fetched:** FDA 2005 starting-dose guidance PDF (every quoted phrase found
  verbatim; the fda.gov guidance page still lists it as the final July 2005 guidance); EMA first-in-human
  guideline page and Rev. 1 PDF (quotes found; legal effective date 1 February 2018; first version
  effective 1 September 2007); CMS Open Payments page (quotes found); Nature page for Grudniewicz 2019
  (page description: "Leading scholars and publishers from ten countries have agreed a definition of
  predatory publishing", confirmed).
- **Arithmetic re-done:** P(6 or more heads in 8 tosses) = 37/256 = 14.5%; SELECT 701/8,801 = 79.6 and
  569/8,803 = 64.6 per 1,000, difference 15, NNT about 67; 15/80 = 18.75% ("close to the 20%"); 8 in
  1,000 × 20% = 1.6.
- **Images:** licences of all five Commons files re-checked through the Commons API (CC BY-SA 4.0,
  CC BY-SA 2.0, CC BY 3.0, CC BY 2.0, CC BY-SA 2.0: all allowed); the images were viewed. No people,
  products, vials or needles; the coin-toss photo shows an unidentifiable hand.
- **Guardrails:** no doses, conversion factors or formulas; no sellers or sourcing hints; no
  superlatives or hype words; no emergency number; no "# " headings; every internal link goes to a
  planned route. The July 2026 PCAC vote is not mentioned on these pages, so the five-element rule does
  not apply here.
- **MDX:** all five pages compile with `@mdx-js/mdx` + `remark-gfm` (checker script kept in the session
  scratchpad; nothing written to the repo).

### 7.2 What was changed

Factual corrections:

1. **Stampfer 1991 KeyNumber.** The "counted" line said the 16 prospective studies had a combined
   relative risk of 0.56. The 0.56 is the overview of all study types (case-control, cross-sectional and
   prospective). Corrected. The label "followed women for years" was not in the source; now "of these
   studies found less heart disease in women who took oestrogen".
2. **Oestrogen versus oestrogen plus progestin.** The fold implied the WHI trial tested the same thing
   as the observational studies. Added that most earlier studies were of oestrogen alone and the WHI arm
   tested oestrogen plus progestin in women with a womb; the confidence interval is now called
   "nominal", as in the abstract.
3. **Randomisation in animal studies.** Both pages said "about a third or fewer" reported randomisation
   in systematic reviews. van der Worp Table 2 ranges from 2% to 67% (under half in most reviews);
   Macleod 2015 gives 25% in 2,671 publications. Rewritten with both figures.
4. **Sumner 2014.** "36% of university press releases stretched animal results to people" was wrong:
   the 36% is of press releases on studies in animals, cells or simulations. Corrected in the Compare
   and the fold; source note updated.
5. **Schroter 2008.** "Fewer than 3 of 9" errors: reviewers found 2.58, 2.71 and 3.0 on the three
   papers. Now "about 3 of 9", with 2.58 attributed to the first paper.
6. **Brierley 2022.** "Early-2020 preprints" was too narrow: the non-COVID sample ran from
   September 2019. Corrected.
7. **Errington 2021.** "Positive effects, in the middle of the range, 85% smaller" garbled the median.
   Now "the typical (median) positive effect was 85% smaller".
8. **Index: "studied mainly in rats and mice".** Wrong for TB-500, which has about 8 primary cell or
   animal studies of the fragment itself (tb-500 grade rationale; FDA briefing). Now "almost only in
   cells and animals. Some have hardly been studied at all."; the same nuance was added on the other
   two pages.
9. **EMA guideline.** The page said MABEL is estimated "for medicines that act on risky targets" and
   that the first-dose calculation is "built from what harmed animals, not from what helped them".
   Rev. 1 asks for MABEL/PAD estimates generally and says the starting dose for healthy volunteers
   should give an exposure below the pharmacologically active dose. The diagram, the prose and the
   glossary entry `mabel` were corrected; the added fact supports the page's own point that a first
   dose is not a dose that works.
10. **TGN1412 paragraph.** It had no citations; "The cause" overstated Eastwood's "likely" explanation;
    "Regulators then changed how first doses are chosen" implied a cause that the cited EMA page does
    not state. Now cited, "The likely cause", and "The next year, the EU medicines agency issued its
    first guideline on first trials in people" (sequence only, from the EMA document history).
11. **Ioannidis 2005 mis-cited** on the grading page for "a second laboratory is unlikely to make the
    same mistake". The abstract says nothing of the sort (it says more teams chasing significance make
    findings less likely to be true). The sentence is now reasoning plus Begley 2012 and Errington 2021
    (independent repeats often fail).
12. **Semaglutide "core effects reproduced" claim** on the grading page was cited only to safety
    sources. Now attributed explicitly to the compound page's own grade reason (see open question 7).
13. **Conflicts page, semaglutide.** "A company-funded result can hold up ... examined the main
    questions" was cited only to safety studies, one of which found a new harm. Now says what the
    sources show: independent groups and regulators examined the main safety questions, found one new
    very rare harm (NAION) and did not confirm two other concerns. Pasternak 2024 is described as a
    study of GLP-1 medicines as a group, with about four years of follow-up.
14. **Lundh 2017.** "Current (third) version" is not supported (the record says only "an update of a
    previous Cochrane review"); now "updated in 2017". The clause "some of it has been confirmed by
    independent work" was cited to Lundh, which does not say that; split from the citation. RR 0.83 now
    says "from six papers".
15. **Ashraf 2024.** Added that the semaglutide amount was 29–39% above the label, so "8–14% of the
    powder" is not misread as an underdosed product.
16. **BPC-157 human data** on the grading page: "the only human data are a few small reports" ignored
    the phase 1 and phase 2 conference abstracts; now "the only published human data are a few small
    reports ... plus trials known only from short conference abstracts". The 2024–2026 PubMed figure now
    gives 34 of 52 and says "did not list the Zagreb group's leader as an author" (the count was by
    Sikirić authorship, not "outside Zagreb"); the unsourced "largely summarising the Zagreb data" was
    replaced with the arithmetic reason (about 85 in 100 primary studies are from Zagreb).
17. **Translation-gap summary.** "You cannot turn an animal dose into a safe human dose" contradicted
    the FDA guidance's own purpose (a maximum safe starting dose). Now "Scaling an animal dose does not
    give a dose that works in people. Only human trials can." The fold title changed the same way.
18. **Rodent thyroid tumours.** "That this applies to people has not been shown" now follows the EU
    label: "regulators judge the risk to people low, but not ruled out" (`ema-epar-wegovy` added to the
    diagram's citations).
19. **Rat lifespan.** "A four-week rat study is not a short version of years of human use" was
    confusing next to "one rat month is about three human years"; rewritten as "time does not carry over
    simply".
20. **DeJong 2016.** "279,669 US doctors received 63,524 payments" (abstract wording, but misleading)
    now says the payments were made among those doctors, August to December 2013; the fold label "Paid
    experts" became "Payments to doctors" (the study is about meals, not paid experts); the visible
    paragraph gained its citations (DeJong, Gell).
21. **Ghost authorship.** "Has become less common" was uncited and unqualified; now "In top medical
    journals ... between 1996 and 2008", cited to Wislar 2011.
22. **BPC-157 Compare cells.** "No human dose–response data" was not what the FDA briefing says (its
    dose–response criticism is about the animal studies). Replaced with what the sources support.
23. **Smaller precision fixes:** Schulz label (odds ratios); Bebarta label ("positive result",
    abstracts at US meetings); Scott 2008 (the 5,429 mice were the design analysis, not the retests);
    SELECT population ("aged 45 or over"; manufacturer-funded, double-blind); ICMJE ("at or before the
    start of enrolment"); p-value diagram and glossary ("if the study's methods and assumptions hold");
    randomisation ("tends to make the groups alike", text and glossary); Sena (the one-third correction
    stated); Ineichen ("more than 10 years", FDA approval, median time among those approved); "many
    peptide medicines" to "some"; "simply not been checked" to "may not have been properly checked";
    "honest" study to "blinded" study; surrogate sentence cited and softened; glossary
    `first-in-human-trial` ("often", not "usually", healthy volunteers) and `allometric-scaling`
    ("never" softened).
24. **Diagram row 7** (how to read a study): "A vial bought online" became "A product from outside the
    legal supply chain" (CONTENT-GUIDE §1a).

Opposite failure (unfair negativity), addressed:

- **Seok 2013** was presented as settled. Added Takao & Miyakawa 2015 (PNAS, PMID 25092317, metadata
  from PubMed), which re-analysed the same data and found much closer mouse–human agreement; the page
  now says the question is still argued over. New source `takao-2015-mouse-inflammation-reanalysis`.
- Ineichen's "translation may be better than often claimed" and the semaglutide independent checks
  (including the two concerns not confirmed) stay visible.

Media: alt text of `three-measuring-scales` corrected (the middle scale is a pale blue tape marked in
centimetres, not a metal ruler).

### 7.3 Not changed, with reasons

- Hackam & Redelmeier 2006 remains cited alongside Hackam 2007 and van der Worp 2010. It is the primary
  source of the "76 studies" figure and its metadata is verified, but its text was not read (paywalled).
- `lundh-2017-industry-sponsorship` (about.yaml, not this group's file) is typed `review`; PubMed tags
  it Meta-Analysis and Systematic Review. Left for the about group.
- Retatrutide wording ("published phase 3 results") follows its data file (`human_clinical: phase-3`).

### 7.4 Validator

`npx tsx scripts/validate-content.ts --only evidence`: 0 errors, 0 warnings. `--only glossary` and
`--only heroes`: 0 and 0. `--only media`: 0 errors, 2 warnings, both on `human-pancreatic-islet`
(another group's entry). The full run has 4 errors, all in `history/how-we-got-here.mdx` (unknown source
`us-fdc-act-1938`, another group's file).

### 7.5 New open questions for the reviewer

7. The semaglutide page states that its core effects "have been reproduced in many studies without
   company authors" but cites no independent efficacy study for it. The grading page now attributes the
   statement to the compound page; the semaglutide group should add a source.
8. Whether the WHI oestrogen-plus-progestin result is the best single contrast with Stampfer's mostly
   oestrogen-alone overview, or whether the WHI oestrogen-alone arm (2004) should be added.
