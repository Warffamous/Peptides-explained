# Research notes: Basics section (group basics)

Written 22 October 2026 for the pages `basics` (index), `basics/what-is-a-peptide`,
`basics/how-signalling-works`, `basics/pharmacokinetics` and `basics/why-not-a-pill`.
New sources are in `src/data/sources/basics.yaml`; glossary terms in
`src/i18n/en/glossary/basics.json`. No earlier draft of these files existed (git status showed
none), so this is a first run.

## Key facts and their sources

### What a peptide is

| Fact | Source id |
|---|---|
| Peptide typically 2–50 amino acids; 51+ is a polypeptide | `nhgri-glossary-peptide` |
| 20 different amino acids; protein sequence encoded in a gene (fact-check: moved here, the Peptide page does not say this) | `nhgri-glossary-amino-acids` |
| US rule: protein = more than 40 amino acids, chains counted together | `ecfr-21-600-3-protein` |
| Insulin moved to biologics rules on 23 March 2020 (press release 20 Feb 2020) | `fda-2020-insulin-transition` |
| 1958 Nobel speech calls insulin "a protein", 51 amino acids in two chains | `nobel-1958-sanger-speech` |
| Review: therapeutic peptides usually 500–5000 Da; calls insulin a peptide | `wang-2022-therapeutic-peptides` |
| Review: peptides < 50 amino acids and < 10 kDa | `diao-2013-peptide-pharmacokinetics` |
| Review: insulin (51) is "confused to define" as peptide or protein | `zhu-2021-oral-delivery` |
| Amino group + acid group make a dipeptide; per-step yield arithmetic (90% → 0.003%, 99.5% → 61% over 100 steps) | `nobel-1984-merrifield-press` |
| Structure levels (secondary = hydrogen bonds; tertiary = side-chain fold; quaternary = several chains); natural L-configuration; N- and C-termini must be shown; SPPS steps; deletion, truncated, insertion sequences; epimerisation | `ema-2025-synthetic-peptides-guideline` (PDF re-read for this group) |
| Molecular weights: orforglipron 883.0, BPC-157 1419.5, semaglutide 4114, insulin human 5808 | `pubchem-orforglipron`, `pubchem-bpc-157`, `pubchem-semaglutide`, `pubchem-insulin-human` |
| Rule of 5: poor absorption more likely above MW 500 | `lipinski-2001-rule-of-5` |
| Glomerular barrier size- and charge-selective; little albumin filtered | `haraldsson-2008-glomerular-barrier` |
| Peptides freely filtered; proteases ubiquitous; volume of distribution ≈ extracellular fluid; ADA reported for some peptides | `diao-2013-peptide-pharmacokinetics` |
| Octreotide = D-Phe…D-Trp…Thr(ol), ring, resists enzymes (rats, rhesus monkeys) | `bauer-1982-octreotide` |
| Octreotide plasma half-life 1.5 h vs minutes for somatostatin | `werle-2006-half-life` |
| Leuprolide = synthetic GnRH nonapeptide with D-Leu and N-ethylprolinamide; flare then castrate testosterone within 2–4 weeks | `lupron-depot-label` |
| Semaglutide affinity three-fold lower than liraglutide, albumin affinity higher; Aib8, Arg34, Lys26 side chain | `lau-2015-semaglutide-discovery` |
| Recombinant human insulin first commercial product of rDNA | `johnson-1983-recombinant-insulin` |
| Semaglutide made in *S. cerevisiae* by rDNA | `ema-epar-wegovy`, `fda-label-ozempic` |
| Alpha-amanitin: bicyclic octapeptide ~900 g/mol, resists heat, acid, enzymes; death cap in most fatal mushroom poisonings | `le-dare-2021-amanitins`, `garcia-2015-amanita` |
| GnRH pulses restore gonadotropins, constant infusion does not (rhesus monkeys) | `belchetz-1978-gnrh-pulses` |

### How signalling works

| Fact | Source id |
|---|---|
| 475 drugs (~34% of FDA-approved) act at 108 GPCRs | `hauser-2017-gpcr-drugs` |
| Nearly 50 approved GPCR peptide drugs; most are agonists from modified natural peptides | `davenport-2020-peptide-gpcr` |
| Definitions: affinity, efficacy, full/partial agonist, antagonist, inverse agonist, selectivity falls with concentration, potency, tolerance | `santiago-2021-core-concepts`, `berg-2018-inverse-agonism` |
| cAMP principal second messenger of GPCRs; amplification on the way to the nucleus | `paramonov-2015-camp` |
| GLP-1R → adenylate cyclase → cAMP → PKA/Epac2 in beta cells | `muller-2019-glp1-review` (existing) |
| GLP-1R sites: beta cells, nervous system, heart, vessels, kidneys, lungs, gut mucosa | `wang-2022-therapeutic-peptides` |
| Desensitisation: minutes (beta-arrestin) to days (internalisation, degradation); overstimulation can cause uncontrolled growth | `rajagopal-2018-gpcr-desensitisation` |
| Bremelanotide nonselective at MC1R, MC4R, MC3R, MC5R, MC2R; MC1R on melanocytes; hyperpigmentation 1% (phase 3, 1,247 premenopausal women, ≤ 8 doses a month) vs 38% (daily for 8 days) | `dailymed-vyleesi-label` (existing id; label re-fetched 22 Oct 2026 for 5.2, 6.1, 12.1) |
| GH feedback loops at pituitary and hypothalamus | `desousa-2025-gh-feedback`, `veldhuis-2001-gh-pulsatility` |
| Higher IGF-1 modestly associated with prostate and premenopausal breast cancer (case-control) | `renehan-2004-igf1-cancer` |
| Sustained proliferative signalling and angiogenesis are hallmarks of cancer | `hanahan-2011-hallmarks` (existing) |
| CJC-1295 single injection raised IGF-1 for 9–11 days; half-life 5.8–8.1 days (two RCTs, healthy adults) | `teichman-2006-cjc1295` (existing) |
| Semaglutide gastric-emptying effect fades, "probably due to a tolerance effect" | `ema-epar-wegovy` |
| Rodent C-cell tumours, GLP-1R mediated, human relevance low but not excluded | `ema-epar-wegovy`, `knudsen-2010-thyroid-c-cells` |

### Pharmacokinetics

| Fact | Source id |
|---|---|
| Native GLP-1 half-life 1.5–2 min; dulaglutide Fc fusion, 4.7 days | `ema-epar-trulicity` |
| Liraglutide: self-association, albumin, DPP-4/NEP stability; sc bioavailability ~55%; t½ ~13 h; once daily | `ema-epar-victoza` |
| Exenatide: renal filtration then proteolysis (nonclinical); t½ 2.4 h; twice daily; EU authorisation withdrawn 1 Jan 2026 | `ema-epar-byetta` |
| Semaglutide sc: t½ ~1 week; absolute bioavailability 89%; >99% albumin-bound; NEP; ~3% intact in urine; ~7 weeks in circulation after last 2.4 mg dose; tablets: steady state after 4–5 weeks | `ema-epar-wegovy` |
| Rybelsus: bioavailability ~1–2% (CV ~100%); 2–4% no exposure; ~5 weeks after last dose; overdose needs prolonged observation | `ema-epar-rybelsus` |
| Lymphatic absorption rises with MW; > 16,000 mainly lymphatic (sheep) | `supersaxo-1990-lymphatic` |
| PEGylation: larger, shielded from proteases | `harris-2003-pegylation` |
| CJC-1295 bonds to albumin Cys34; on albumin within 15 min, in plasma > 72 h (rats) | `jette-2005-cjc1295-albumin` |
| BPC-157 t½ 5.3 min (dogs) and 15.2 min (rats) IV; no human PK by oral, SC, nasal, transdermal; not detected in blood after enemas; absolute bioavailability unknown in animals | `fda-pcac-2026-bpc157-briefing` (PDF re-read 22 Oct 2026) |
| TB-500 and KPV: FDA found no human PK studies by any route | `fda-pcac-2026-tb500-briefing`, `fda-pcac-2026-kpv-briefing` (PDFs re-read) |

### Why not a pill

| Fact | Source id |
|---|---|
| Pepsin pH 2–3, inactive > 5; pancreatic proteases; brush-border peptidases; tight junctions; size and hydrophilicity; inter-individual variability; insulin gone in 30 min in SGF; cyclosporin cyclic, MW 1202 | `zhu-2021-oral-delivery` (Europe PMC full text) |
| Oral cyclosporin (Sandimmune solution) FDA-approved 14 November 1983; capsules 2 March 1990 (fact-check: Zhu's "1990, first oral formulation" is wrong) | `fda-drugsatfda-sandimmune-oral` |
| Oral peptide formulations with enhancers: ~1% bioavailability; oral semaglutide, octreotide, calcitonin reached phase III; macrocycles may be more orally available | `brayden-2020-oral-peptides` |
| Barriers of the GI tract; oral semaglutide approval | `drucker-2020-oral-peptides` |
| SNAC: local buffering, transient, transcellular, stomach, no tight-junction effect (dogs and people) | `buckley-2018-oral-semaglutide` (existing) |
| Rybelsus administration rules (fasting ≥ 8 h, ≤ 120 mL water, wait ≥ 30 min) | `ema-epar-rybelsus` (PDF read) |
| Desmopressin tablets: ~0.16% of IV, ~5% of intranasal | `fda-label-desmopressin-tablets` |
| Orforglipron = LY3502970 = OWL833; MW 883 | `pubchem-orforglipron` |
| Orforglipron nonpeptide partial agonist, G-protein biased | `kawai-2020-orforglipron-structure` |
| Orforglipron phase 2: 272 adults, 36 weeks, −9.4% to −14.7% vs −2.3% | `wharton-2023-orforglipron-phase2` |
| FDA approval 1 April 2026 (Foundayo, weight management) | `fda-2026-foundayo-approval` |
| US label rev. 07/2026: bioavailability 77%, with or without food, t½ 29–49 h, CYP3A4, inactive in rodents, boxed warning | `fda-label-foundayo` |
| EMA CHMP positive opinion adopted 15 October 2026 (announced 16 October), EC decision pending; "small, non-peptide molecule" | `ema-epar-foundayo-opinion`, `ema-2026-foundayo-chmp` |
| BPC-157 oral phase 1 (NCT02637284) registered, no results | `ctgov-nct02637284` (existing), `fda-pcac-2026-bpc157-briefing` |
| Semax registered in Russia as nasal drops | `fda-pcac-2026-semax-briefing` (existing) |

## Verification log

- **PubMed metadata** (authors, title, journal, year, volume, pages, DOI, PMID, PMCID) copied from
  `get_article_metadata` for every new scholarly source: PMIDs 34522593, 35165272, 6337396, 26375431,
  34208167, 11259830, 18391170, 16622600, 6128648, 33536635, 29075003, 32494050, 34817122, 30085126,
  26441653, 28137506, 40908533, 11527085, 15110491, 2137911, 12612647, 15817669, 25366889, 31848464,
  32479930, 33177239, 37351564, 16183910, 100883. Existing ids re-checked against PubMed for what we
  cite them for: 16352683 (Teichman), 26308095 (Lau), 30429357 (Buckley), 23719681 (Diao).
- **Full texts read** through Europe PMC (fullTextXML) for Zhu 2021, Wang 2022, Santiago 2021, Berg
  2018, Paramonov 2015 and Le Daré 2021; claims taken from those texts are listed in each source note.
- **Regulator and label documents fetched and read** (PDFs converted with pdftotext): EMA product
  information for Rybelsus, Wegovy, Trulicity, Victoza, Byetta; the EMA synthetic-peptide guideline;
  FDA briefing documents for BPC-157 (media/193343), TB-500 (193349) and KPV (193346); the Foundayo
  label (220934s003); the desmopressin tablet label (021795s006). Web pages fetched: FDA press
  releases (20 Feb 2020; 1 Apr 2026), EMA news (16 Oct 2026), the Byetta EPAR page (withdrawal date),
  DailyMed Lupron Depot and Vyleesi labels, NHGRI glossary, Nobel Prize pages (1958 speech, 1984
  press release), PubChem PUG REST (molecular weights and orforglipron synonyms).
- **eCFR**: the www.ecfr.gov page redirects automated requests; the text of 21 CFR 600.3(h)(6) was
  taken from the eCFR versioner API (version of 1 August 2026; later dates returned HTTP 503). The
  definition has not changed since the 2020 rule, as far as we can tell; the cited URL is the
  official current-text page.
- **EMA list of applications under evaluation** (October 2026 xlsx, data of 5 October 2026)
  downloaded and parsed: orforglipron listed (EMEA/H/C/006632, "Chemicals"). Superseded on 16 October
  by the CHMP positive opinion, which is what the page states.
- **Hero images**: five Commons files fetched with `npm run media:commons` (licences CC BY 2.0,
  CC BY 3.0, CC BY 4.0, CC BY-SA 3.0 ×2, read by the tool from the Commons API); thumbnails inspected
  for products, brands, people and needles. The CSIRO molecular model is a computer graphic, so its
  registry `kind` was changed to `illustration` and its author/credit tidied to "CSIRO" /
  "CSIRO ScienceImage". A peptide-synthesiser photo was rejected because reagent bottles with vendor
  labels are in view (MEDIA-GUIDE §2). A public-domain fluorescence image was refused by the tool for
  lack of an author.
- **Validator**: `npx tsx scripts/validate-content.ts --only basics` → 0 errors, 1 warning (see below).
  All five MDX files also compiled with @mdx-js/mdx + remark-gfm.

## Conflicts between sources and how they were resolved

1. **Where a peptide becomes a protein.** NHGRI: 2–50 peptide, 51+ polypeptide; FDA rule: > 40 =
   protein; Diao 2013: < 50 amino acids and < 10 kDa; Wang 2022: 500–5000 Da and calls insulin a
   peptide; the 1958 Nobel speech calls insulin a protein. Not resolved on purpose: the page presents
   the disagreement as the point (the line is a convention).
2. **Native GLP-1 half-life.** Müller 2019 gives about 1–2 minutes; the Trulicity SmPC 1.5–2 minutes.
   The basics pages use the SmPC figure (a regulator document, human data).
3. **Oral semaglutide bioavailability.** The Rybelsus SmPC gives "approximately 1–2%" for the current
   tablets and "approximately 1%" (3/7/14 mg) "up to 2%" (25/50 mg) for the original formulation; the
   Wegovy SmPC gives 1–2% for Wegovy tablets. Pages say "about 1–2%".
4. **How long semaglutide stays after the last dose.** Rybelsus SmPC: about 5 weeks; Wegovy SmPC:
   about 7 weeks after the last 2.4 mg dose. Pages say "about five to seven weeks", citing both.
5. **1958 Nobel speech chain lengths** ("31 resp. 20") differ from the modern A/B chain lengths; the
   speech is cited only for calling insulin a protein and for "two chains"; no chain lengths are given.
6. **Wang 2022** contains two slips (GLP-1 "a 37-amino acid peptide"; GLP-1 "an endogenous growth
   hormone"); neither is used.
7. **Steady state "4–5 half-lives".** No general pharmacology source with this exact rule could be
   read (NCBI Bookshelf is behind a reCAPTCHA). The page derives it as arithmetic (each half-life
   closes half the gap) and anchors it to the Wegovy SmPC sentence ("half-life approximately 1 week
   indicating that steady-state exposure will be reached after 4–5 weeks").

## Dropped or left unverified

- **"One receptor → thousands of cAMP molecules"** (from the brief): no accessible source with a
  number (textbooks on NCBI Bookshelf could not be fetched; open reviews state amplification only
  qualitatively). The page states amplification without a number (`paramonov-2015-camp`).
- **Tachyphylaxis**: not used as a term; the pages use desensitisation and tolerance, which the
  sources define.
- **"DAC" (drug affinity complex)**: no source naming it was found; the mechanism is described from
  Jetté 2005 (reactive group bonding to albumin, rats) without the brand-like name.
- **Condensation gives off water** and **one dalton ≈ one hydrogen atom**: textbook chemistry stated
  without a direct citation (hydrolysis, the reverse reaction, is cited). Reviewer may want a
  textbook citation if an accessible one is found.
- **Insulin A and B chain lengths (21/30), somatostatin length (14), albumin mass, GLP-1R as a class B
  GPCR**: not stated, as no fetched source supports them.
- **Sublingual absorption** of any unapproved peptide: no human data found; the page says so.
- **ProductCheck** was not placed on these pages: they explain mechanisms, not use of a product.
  `why-not-a-pill` and `pharmacokinetics` link to `/en/safety/product-risk/`, where the checklist is.

## Validator warnings noted as acceptable

- `how-signalling-works`: related route `evidence/the-translation-gap` does not exist yet (planned
  route, written by another group). The page also links to it in the body.
- `glp1-action` is used on `basics/how-signalling-works` but `src/data/explainers.yaml` lists only
  `compounds/semaglutide` in `pages`. That file is outside this group's ownership: the explainer owner
  should add `basics/how-signalling-works` to `pages` (warning only).

## Open questions for the named medical reviewer

1. Is the GLP-1 receptor table on the signalling page (pancreas, brain, stomach, rodent thyroid) a
   fair simplification, and is "Mixed: feeling sick is the most common side effect" correctly worded?
2. The GH-axis diagram simplifies the loop to GHRH → GH → IGF-1 → somatostatin/GHRH feedback. Is the
   level of detail right for B2 readers?
3. The pharmacokinetics page shows label dosing intervals (once a day, once a week) in the GLP-1
   half-life ladder to explain half-life. Acceptable under CONTENT-GUIDE §6, or should the column go?
4. Bremelanotide hyperpigmentation numbers (1% vs 38%) come from the US label; the 38% study
   population is not described in the label text we read. Keep as `human-limited`?
5. The CJC-1295 and IGF-1/cancer paragraph is marked as a hypothesis. Is the framing balanced (no
   scaremongering, but the open question stated)?
6. Should the BPC-157 animal half-lives (5.3 and 15.2 minutes, IV) be shown at all, given that the
   FDA itself warns they cannot be used to estimate human exposure? We show them with that caveat.

## Open questions for the legal reviewer

1. Orforglipron status wording (as of 22 October 2026): FDA-approved 1 April 2026 for weight
   management; EU CHMP positive opinion adopted 15 October 2026 (announced 16 October), European
   Commission decision pending. Please re-check before publication, as an EC decision is expected
   within weeks; when it comes, update the Compare row on `basics/why-not-a-pill`.
2. The insulin "deemed to be a licence" transition is described in one sentence; is it accurate
   enough for a non-US audience?

## Media and visuals

- Heroes: `basics` → `protein-model-csiro`; `basics/what-is-a-peptide` → `ball-and-stick-model`;
  `basics/how-signalling-works` → `endothelial-cells-fluorescent`; `basics/pharmacokinetics` →
  `wooden-hourglass`; `basics/why-not-a-pill` → `gastric-mucosa-he`. Caption sources added to the
  registry where captions state a fact (`wooden-hourglass`: santiago-2021-core-concepts;
  `gastric-mucosa-he`: zhu-2021-oral-delivery).
- Explainer reused: `glp1-action` on the signalling page (one receptor, many organs).
- Explainers proposed (already outlined in docs/EXPLAINERS.md §6): `receptor-signalling`,
  `half-life-steady-state`, `why-not-a-pill`. The `<Diagram>` text equivalents on these pages follow
  the same step order and can serve as the scene list.

## Fact-check log (independent fact-checker, 22 October 2026)

Scope: the five Basics pages, `src/data/sources/basics.yaml`, `src/i18n/en/glossary/basics.json`,
this file, and the five hero images registered for these routes. Every document was fetched
again into a separate scratch folder rather than re-using the writer's downloads.

### What was checked, and how

- **All 29 PubMed sources in `basics.yaml`**: `get_article_metadata` by PMID. Authors, title,
  journal, year, volume, pages, DOI and PMID match the records for all 29. No fabricated or
  mismatched DOI. (Rajagopal 2018, Di 2015 and Drucker 2020 were published online the year
  before their issue year; the issue year is used, which is correct.)
- **Externally registered sources these pages cite** (other groups' files, not edited): Lau 2015,
  Teichman 2006, Buckley 2018, Diao 2013, Aroda 2019 (PIONEER 1), Knudsen 2010, Zvereva 2016,
  Manning 2010, Rosenberg 2006, Stammers 2026, Hanahan 2011, Eng 1992, He 2022, D'Hondt 2014 and
  Schneier 2020 were re-read on PubMed for the specific claim each supports here.
- **Full texts** (Europe PMC) re-read for Zhu 2021, Wang 2022, Santiago 2021, Berg 2018,
  Paramonov 2015, Le Daré 2021, Kawai 2020 and Müller 2019. Every claim cited to them was located,
  except the ones listed under "Errors found and fixed".
- **Regulator documents re-downloaded and read**: EMA product information for Wegovy, Rybelsus,
  Trulicity, Victoza, Byetta and Ozempic; the Byetta EPAR page (authorised 20/11/2006, withdrawn
  01/01/2026); the EMA synthetic-peptide guideline; the FDA briefing documents 193343 (BPC-157),
  193349 (TB-500), 193346 (KPV) and 193348 (Semax); the Foundayo label (220934s003); the
  desmopressin tablet label (021795s006); the Lupron Depot and Vyleesi labels (DailyMed SPL XML);
  FDA press releases of 20 February 2020 and 1 April 2026; the EMA news item of 16 October 2026;
  the EMA Foundayo opinion page; Drugs@FDA for Sandimmune; openFDA for NDA 220934 (no type 2
  diabetes approval; last action a labelling supplement on 4 August 2026); 21 CFR 600.3(h)(6) via
  the eCFR versioner API (version of 1 October 2026, unchanged since 24 March 2020);
  ClinicalTrials.gov NCT02637284 (oral tablets, phase 1, status unknown, no results).
- **Web sources**: NHGRI Peptide and Amino Acids glossary pages; Nobel Prize 1958 presentation
  speech and 1984 press release (the 90%/0.003% and 99.5%/61% figures are verbatim).
- **PubChem** (PUG REST): insulin human 5808, orforglipron 883.0 (synonyms LY3502970, OWL833),
  BPC-157 1419.5, semaglutide 4114, octreotide (CID 448601, disulfide ring in the IUPAC name).
- **Arithmetic**: 89/2 to 89/1 (45–90 times less), 0.16/5 (about 3%), the half-life staircase
  (1−0.5ⁿ and 0.5ⁿ), 883/4114 (about a fifth): all correct.
- **Images**: Commons licence metadata re-read for all five files (CC BY 3.0, CC BY 2.0, CC BY 4.0,
  CC BY-SA 3.0 twice: all allowed); a contact sheet was inspected: no products, vials, needles,
  people or brand marks. Alt text matches what is shown; the two captions that state facts are
  supported by their registry sources (Santiago 2021 for half-life; Zhu 2021 for pepsin from the
  stomach lining).
- **Guardrails**: no amounts, schedules, reconstitution or sourcing; no commerce words in link
  text; no hype or superlatives; no emergency number printed; studied doses appear nowhere. The
  label dosing intervals in the GLP-1 half-life ladder (once a day, once a week) are attributed to
  the labels, as CONTENT-GUIDE §6 allows; the open question for the medical reviewer stands.
- **Validator**: `npx tsx scripts/validate-content.ts --only basics` gives 0 errors and 1 warning
  (planned route `evidence/the-translation-gap` not written yet). The full run also warns that
  `glp1-action` is used on `basics/how-signalling-works` but `src/data/explainers.yaml` does not list
  that route (file outside this group). All five MDX files compile with @mdx-js/mdx and remark-gfm.

### Errors found and fixed

1. **Orforglipron EU date** (why-not-a-pill, Compare): "Recommended by the EMA on 16 October 2026".
   The CHMP opinion was adopted on **15 October 2026** (EMA opinion page); 16 October is the
   announcement. The verdict changed from "unknown" to "no" ("Not yet"), because the status is
   known. New source `ema-epar-foundayo-opinion`.
2. **Cyclosporin date** (why-not-a-pill): "approved in the US as an oral medicine in 1990" was
   copied from Zhu 2021, which is wrong. Drugs@FDA: the Sandimmune oral solution was approved on
   14 November 1983, the capsules on 2 March 1990. Rewritten and cited to new source
   `fda-drugsatfda-sandimmune-oral`; the error is flagged in the Zhu registry note.
3. **Mis-citation** (what-is-a-peptide): "20 standard amino acids … order written in a gene" was
   cited to the NHGRI Peptide page, which says neither. Re-cited to new source
   `nhgri-glossary-amino-acids`, which says both.
4. **Unsupported detail** (why-not-a-pill): trypsin "next to arginine and lysine", chymotrypsin
   "next to phenylalanine and tyrosine" is not in Zhu 2021, the only source cited. Removed; the
   glossary's matching clause was removed too.
5. **Peptide/protein table** (what-is-a-peptide): the NHGRI row said insulin is "a polypeptide";
   NHGRI does not classify insulin and counts one chain at a time, so the cell now says so. The Diao
   row said insulin is "one amino acid too long"; with a limit of fewer than 50, 51 is two too many,
   so it now says "too many amino acids in total".
6. **Case report misdescribed** (what-is-a-peptide): "Fake weight-loss pens that contained insulin
   have put people into a coma." Stammers 2026 describes two patients without diabetes or obesity
   who injected semaglutide obtained without a prescription; no pens are mentioned. Rewritten with
   the design and n.
7. **CJC-1295** (how-signalling-works): "In two randomised … trials … a single injection raised
   IGF-1 for 9 to 11 days". Only the first trial used single injections; now "In the first of two
   …", with the developer's authorship and the missing n stated. The hypothesis claim was narrowed
   to *unapproved* peptides (long-term growth-hormone therapy has been studied for cancer risk, so
   "has not been studied" was too broad). Renehan 2004 now carries its design and n (21 case-control
   studies, 3,609 cases, 7,137 controls) and "a link, not cause and effect".
8. **Overstatements corrected**:
   - Vyleesi pigmentation "did not clear in everyone" → the label's "may not clear completely".
   - GnRH monkeys: "shut the signals down" / "desensitised it" → "could desensitise" (the abstract
     says "can result in"); the hypothalamic-lesion model is now named.
   - Semaglutide and albumin "which the kidneys cannot filter" → "the kidneys clear it slowly" (the
     SmPC says "decreased renal clearance"; Haraldsson: small amounts of albumin are filtered). Same
     fix in the stabilising-tricks table.
   - "Peptides … disappear from the blood within minutes" was cited to Diao, which does not say it;
     replaced by Werle's "fast renal clearance and enzymatic degradation" as the common cause of
     short half-lives.
   - Lipinski "predicts poor absorption" → "says poor absorption is more likely" (both pages).
   - "Natural GLP-1 lasts 1.5–2 minutes" and the summary and KeyNumber "semaglutide lasts a week"
     → half-life wording (semaglutide stays in the circulation 5–7 weeks, so "lasts a week" was
     wrong).
   - "Most unapproved peptides have no human data" (heading, lead, description, two summaries,
     index) → "many", naming BPC-157, TB-500 and KPV: the cited FDA documents cover those three only.
   - The BPC-157 half-life sentence now says "in rats and dogs"; the KeyNumber says no human value
     "has been published" instead of "exists"; the enema studies are reported as "the authors
     reported that it was not detected", with the FDA's note that one abstract said "most" levels
     were below the limit of measurement.
   - "The FDA reviewed several peptides sold without approval" → evaluated peptides "put forward for
     use in US pharmacy compounding"; "routes being sold" → "proposed routes".
   - The Zagreb attribution for the drinking-water rat studies was removed (the FDA briefing does
     not say which group did them).
   - Orforglipron binding: "a different pocket from GLP-1" → "its own pocket … touching different
     parts of the receptor than GLP-1 does" (Kawai: a "unique binding pocket"; the contacts differ).
     "77% in a single-dose study" → "about 77% … says the US label".
   - "Each tablet must hold far more semaglutide than an injection delivers" was removed: it is not
     true for every strength (a 1.5 mg tablet against a 2 mg injection) and drifted into dose
     comparison.
   - Growth hormone "acts on its own receptor … not every peptide hormone uses a GPCR": Veldhuis
     supports only the STAT 5b route, so the sentence now says not every hormone signals through
     cAMP.
   - "Desmopressin … a synthetic copy of vasopressin" → "synthetic, modified version" (label:
     analogue); "first approved in the US in 1978" (label highlights).
   - Immunogenicity: "low immunogenicity" → fewer antibodies than larger protein medicines (Wang
     compares peptides with biologics; Diao says "usually limited").
   - "Peptides also break down over time, by reacting with air or water", cited only to Manning's
     general abstract → "for example by oxidation or by reacting with water (hydrolysis)", now also
     cited to the EMA guideline, which lists both.
9. **Claim levels**: the octreotide sentence wrapped an in-vitro result (pure enzymes, tissue
   extracts) in an `animal` badge; it is now split into `in-vitro` and `animal`. The ring and sulfur
   bridge now cite `pubchem-octreotide` (new source).
10. **Study details added** where the guide requires species, n and design: the sheep study (three
    per substance, four substances); Jetté 2005 (rats, numbers not given); STEP 1–4 (68 weeks) for
    the nausea figures; PIONEER 1 (randomised, double-blind, manufacturer authors); Wharton 2023
    (randomised, double-blind; population "with overweight and a weight-related condition").
11. **Structure**: the "How peptides are made" section had two figures (KeyNumber and Diagram); the
    KeyNumber moved into the fold. Its label now says "overall yield", which is what the Nobel press
    release computes.
12. **Glossary**: clearance (plasma, per unit of time, as Santiago defines it); volume of
    distribution (unsupported clause about protein binding removed); neutral endopeptidase
    (unsupported "on the surface of cells" removed); trypsin (unsupported cleavage clause removed);
    kinase ("PKA is a kinase", not "the"); N-terminus ("unless it has been changed").
13. **Registry notes corrected**: eCFR version and amendment date; Jetté (Western blot of one rat's
    plasma at 15 minutes; numbers not given); Belchetz ("can result in"); Wang (D-amino acids
    "rarely exhibit effective biological activity"; immunogenicity relative to biologics; Gila
    monster); Foundayo label (no type 2 diabetes approval in openFDA); EMA news (study numbers);
    desmopressin (initial US approval 1978); NHGRI Peptide page (does not mention 20 amino acids).

### Checked and confirmed (no change needed)

Wegovy SmPC: 89% bioavailability, half-life about 1 week, more than 99% albumin bound, NEP, 3%
intact in urine, about 7 weeks after the last 2.4 mg dose, tablets 1–2% and steady state after
4–5 weeks, 2-month pregnancy washout, "probably due to a tolerance effect", injection sites, yeast,
rodent C-cell relevance. Rybelsus SmPC: fasting at least 8 hours, up to half a glass (120 mL), wait
at least 30 minutes, CV about 100%, 2–4% no exposure, about 5 weeks, prolonged observation after
overdose, no antidote, switching unpredictable, SNAC in vitro, absorption in the stomach. Trulicity:
two disulfide-linked chains, native GLP-1 1.5–2 minutes, 4.7 days, immunogenicity design. Victoza:
55%, about 13 hours, self-association, albumin, DPP-4 and NEP. Byetta: 2.4 hours, nonclinical
glomerular filtration then proteolysis, twice daily, withdrawn 1 January 2026. Lupron: nonapeptide,
D-leucyl, N-ethyl-L-prolinamide, castrate testosterone within two to four weeks. Vyleesi:
nonselective (MC1R, MC4R and others), MC1R on melanocytes, 1% in 1,247 premenopausal women at up to
8 doses a month, 38% after 8 daily doses. FDA BPC-157 briefing: 5.3 minutes (dogs) and 15.2 minutes
(rats) after one IV dose, gastric-juice resistance, no human PK by oral, SC, nasal or transdermal
routes, products marketed as capsule, injection, oral spray and nasal spray, no absolute
bioavailability in animals for the proposed routes. TB-500 and KPV briefings: no human PK studies by
any route. Semax briefing: registered in Russia as 0.1% and 1% nasal drops. FDA 1 April 2026
(Foundayo, weight management, "partial agonist pill", no empty stomach, boxed warning). EMA
16 October 2026 (4,740 and 3,765 adults). Hauser: 475 drugs, 34%, 108 GPCRs. Davenport: nearly 50
GPCR peptide drugs. Santiago's definitions, including "the higher the drug dose, the lower the
selectivity, and the greater the chance of harm".

### Left as is, with a note

- Three textbook statements remain without a direct citation: a condensation gives off water; one
  dalton is roughly one hydrogen atom; the side chain is what makes each amino acid different. The
  glycine exception *is* in the EMA guideline ("with the exception of glycine, all natural …").
- `<ProductCheck />` is not placed on these mechanism pages; `pharmacokinetics` and
  `why-not-a-pill` link to `/en/safety/product-risk/`. Reasonable, but the owner may want the
  checklist in the "Capsules, sprays and drops" section of `why-not-a-pill`.
- The `glp1-action` explainer's sources (Ozempic SmPC, Kapitza 2017, Gabery 2020, Friedrichsen
  2021) are not cited in the text of `how-signalling-works`. The validator does not require it for
  explainers, but the explainer owner should add the route to `glp1-action.pages`.
- Teichman 2006 "with authors from the developer" rests on the safety-b registry note (publisher's
  author list); PubMed gives only the first author's affiliation.

### Open questions added for the reviewers

- Medical: is "Mixed. Stomach and gut problems, such as feeling sick, are the most common side
  effects" the right wording in the GLP-1 receptor table? It no longer implies that nausea comes
  from the stomach receptor, because much of it may be central.
- Legal: none new. The orforglipron Compare row must be updated when the European Commission
  decides.
