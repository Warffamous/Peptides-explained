# Ipamorelin: research notes

Group: ipamorelin (Tier 1, status complete). Written 22 October 2026 from scratch: there was no earlier
draft of any of this group's files (`git status` at the start showed none).

Files:

- `src/data/compounds/ipamorelin.yaml` (data)
- `src/content/compounds/en/ipamorelin.mdx` (page)
- `src/data/sources/ipamorelin.yaml` (42 new sources)
- `src/i18n/en/glossary/ipamorelin.json` (22 new terms)
- shared files, entries added with Edit only: `src/data/media.yaml` (`anterior-pituitary-histology`),
  `src/data/heroes.yaml` (`compounds/ipamorelin`), `src/i18n/en/media.json` (alt text and caption);
  new image `src/assets/media/anterior-pituitary-histology.jpg`.

Validator: `npx tsx scripts/validate-content.ts --only ipamorelin` → 0 errors, 0 warnings (22 October
2026). The page also renders on the running dev server (`/en/compounds/ipamorelin/`, HTTP 200; At a
glance, stop strip, summary, fact sheet, key numbers, icon array, time strip and ProductCheck checked
in the HTML).

## 1. Key facts and their sources

| Fact | Source id(s) |
|---|---|
| Pentapeptide Aib-His-D-2Nal-D-Phe-Lys-NH2; C38H49N9O5; 711.9 g/mol; CAS 170851-70-4; UNII Y9M3S784Z6; NNC 26-0161 | `pubchem-ipamorelin`, `raun-1998-ipamorelin`, `fda-pcac-2024-ipamorelin-briefing`, `chembl-ipamorelin` |
| "ipamorelin" is an INN (WHO proposed INN list 78), stem -morelin | `who-2014-inn-biological-review` (PubChem also lists "Ipamorelin [INN]") |
| Free base and acetate are distinct substances to the FDA; free base barely soluble (0.0032 mg/mL), acetate soluble | `fda-pcac-2024-ipamorelin-briefing`; acetic acid needed to dissolve the free base: `greenwood-2012-ipamorelin-gastric` |
| Discovered at Novo Nordisk mid-1990s; "the first selective growth hormone secretagogue" (1998) | `fda-pcac-2024-ipamorelin-briefing`, `raun-1998-ipamorelin` |
| Rat pituitary cells: EC50 1.3 nmol/l, like GHRP-6; acts via a GHRP-like receptor, not GHRH; pigs: no ACTH/cortisol rise even >200× ED50; no FSH, LH, PRL or TSH change for any GHS | `raun-1998-ipamorelin` |
| Ghrelin receptor cloned in pituitary and hypothalamus (swine and human) | `howard-1996-ghs-receptor` |
| Ghrelin: 28-aa octanoylated stomach peptide | `kojima-1999-ghrelin` |
| Ghrelin raises ACTH, cortisol and prolactin as well as GH in 4 men | `takaya-2000-ghrelin-humans` |
| Ghrelin raises food intake 28% (9 volunteers, double-blind crossover) | `wren-2001-ghrelin-appetite` |
| Ghrelin raises glucose and lowers insulin in 11 volunteers; hexarelin does not | `broglio-2001-ghrelin-glucose` |
| Ghrelin actions (gut motility, acid, reward, sleep, glucose) | `muller-2015-ghrelin-review` |
| Receptor signals via Gq/11 and phospholipase; receptor in many organs incl. VTA | `fda-pcac-2024-ipamorelin-briefing` |
| GH pulsatility and feedback (GHRH, somatostatin, IGF-1) | `veldhuis-2001-gh-pulsatility`, `desousa-2025-gh-feedback` (basics group) |
| Human PK/PD: healthy men, 5 dose levels × 8 (6 active, 2 placebo); t½ 2 h; one GH peak at 0.67 h, negligible by 6 h | `gobburu-1999-ipamorelin-pkpd`, `fda-pcac-2024-ipamorelin-briefing` |
| Rat PK: clearance 5× lower than GHRP-6, urine, 60–80% intact; nasal F ≈ 20%; t½ ≈ 27 min (FDA) | `johansen-1998-ipamorelin-pk`, `fda-pcac-2024-ipamorelin-briefing` |
| Rats 15 days: bone growth up to 52 vs 42 µm/day, weight gain; total IGF-I unchanged; GH response marginally reduced | `johansen-1999-ipamorelin-bone` |
| Rats IV with methylprednisolone: IGF-I increased with repeated ipamorelin | `malmlof-1999-ipamorelin-igf1` |
| Rats 12 weeks: BMC up only through bigger bones | `svensson-2000-ipamorelin-bone` |
| Rats 3 months with glucocorticoid: muscle tetanic tension up, periosteal bone formation 4× | `andersen-2001-ipamorelin-glucocorticoid` |
| Mice: body weight +15%, fat up (also GH-deficient mice), food intake and leptin up | `lall-2001-ghs-adiposity` |
| Rat pancreas fragments: more insulin release | `adeghate-2004-ipamorelin-insulin` |
| Rats after surgery: earlier first bowel movement; stomach emptying 52% vs 78% retained | `venkova-2009-ipamorelin-ileus`, `greenwood-2012-ipamorelin-gastric` |
| Beck 2014 (NCT00672074): 117 enrolled, 114 treated; 25.3 vs 32.6 h (p = 0.15); no significant differences; Helsinn-funded | `beck-2014-ipamorelin-ileus`, `ctgov-nct00672074` |
| Beck 2014 safety per FDA: hypokalaemia 12.5 vs 3.4%, insomnia 10.7 vs 5.2%, hyperglycaemia at discharge 14.3 vs 8.6%, SAEs 17.9 vs 15.5%, 2 deaths on ipamorelin (anastomotic leaks after colon cancer surgery), relation unclear | `fda-pcac-2024-ipamorelin-briefing` |
| Second phase 2 trial, 320 patients, completed May 2014, no results | `ctgov-nct01280344` |
| Development discontinued (FDA, citing Ishida 2020) | `fda-pcac-2024-ipamorelin-briefing` |
| No ongoing or planned trial; one observational veterans' study lists ipamorelin among supplements | `ctgov-ipamorelin-search-2026-10-22`, `ctgov-nct07717866` |
| Nasal spray in one volunteer: extensive metabolism; ipamorelin (1-4) free acid detectable after parent gone | `semenistaya-2015-ghrp-nasal` |
| Gly-ipamorelin in seized (Denmark) and black-market (Germany/Norway) material | `gajda-2019-glycine-ghs`, `krug-2018-black-market-gh` |
| MK-677 2-year RCT (65 older adults): glucose +0.3 mmol/L, insulin sensitivity down, cortisol up, oedema, muscle pain, appetite; fat-free mass +1.1 kg; no strength/function gain | `nass-2008-mk677-older-adults` |
| MK-677 hip-fracture trial stopped for CHF signal | `adunsky-2011-mk677-hip-fracture` |
| Macimorelin (Ghryvelin) EU-authorised 11 January 2019, single-dose GHD diagnostic | `ema-epar-ghryvelin` (and EMA JSON) |
| Anamorelin (Adlumiz) refused in the EU, 16 November 2017 | `ema-epar-adlumiz` |
| FDA 2024: no USP monograph, not in an approved drug; CoAs purity only; no tox/genotox/repro/carc studies; GH/IGF-1 class risks from rhGH labels; QT with macimorelin; reward and reproduction concerns (ghrelin data); immunogenicity | `fda-pcac-2024-ipamorelin-briefing` |
| Nominations withdrawn 19 September 2024; FDA presented anyway | `fda-pcac-2024-presentations-pm` |
| PCAC 29 October 2024: grouping vote 12–1, so separate votes; free base 0–12–1; acetate 0–12–1 | `fda-pcac-2024-minutes` |
| Advisory committees' recommendations are non-binding | `fda-pcac-2024-10-meeting` |
| Ipamorelin acetate in 503B category 2 since 29 September 2023 | `fda-category-2-safety-risks`, `fda-503b-categories-2025-03` |
| Not on the 503A categories list (14 May 2026) | `fda-503a-categories-2026-05` (checked; not cited in the page) |
| Not among the seven peptides of the July 2026 PCAC | `fda-pcac-2026-briefing-intro` |
| No rule proposed | `federalregister-ipamorelin-search-2026-10-22` |
| WADA S2.2.4 (2026, 2027), prohibited at all times, non-Specified; named since 2015 | `wada-2026-list-en`, `wada-2027-list-en`, `wada-2015-list-en`, `wada-2015-list-modifications` |
| Germany: AntiDopG Anlage 2.4 names ipamorelin (GHS); § 2(3) | `de-antidopg-anlage`, `de-antidopg-2` |
| EU/NL/DE/BE/UK: not authorised | `ema-medicines-json`, `ema-medicines-search`, `cbg-geneesmiddeleninformatiebank`, `nl-gmw-art-40-handelsvergunning`, `de-amg-21`, `be-medicines-law-1964`, `uk-hmr-2012-reg-46`, `chembl-ipamorelin` |

## 2. Verification log (22 October 2026)

All downloads went to the session scratchpad (`scratchpad/ipa/`), nothing into the repository.

- **PubMed**: `search_articles("ipamorelin")` returned 55 records; metadata for all 55 retrieved with
  `get_article_metadata` and classified (primary preclinical, analytical/anti-doping, review, human).
  Every scholarly source in `ipamorelin.yaml` has authors, title, journal, volume, pages, DOI and PMID
  copied from the record. Journal issue years checked through E-utilities for Gajda (2019, epub 2018:
  id renamed `gajda-2019-glycine-ghs`) and Adunsky (2011, epub 2010). Beck 2014's author list includes
  the collective "Ipamorelin 201 Study Group" (E-utilities XML).
- Ghrelin-system papers (Howard 1996, Kojima 1999, Takaya 2000, Wren 2001, Broglio 2001, Müller
  2015, Nass 2008, Adunsky 2011) matched with `lookup_article_by_citation`, then metadata pulled.
- **Full texts read**: Greenwood-Van Meerveld 2012 (PMC4863553: compound supplied by Helsinn,
  acetic acid needed, group sizes). Beck 2014 publisher page: funding statement ("This study was
  supported by Helsinn Therapeutics (US), Inc.") and authors' institutions received grants; the
  results section is paywalled, so the adverse-event numbers come from the FDA briefing. Gobburu 1999
  publisher page: affiliations (SUNY Buffalo; Novo Nordisk pharmacokinetics); body paywalled.
- **ClinicalTrials.gov**: MCP `search_trials(intervention="ipamorelin")` → 3 records;
  `get_trial_details` for each; API v2 for arms/masking of NCT01280344 and the intervention text of
  NCT07717866. PubMed has no publication of NCT01280344.
- **FDA**: October 2024 meeting page (content current as of 7 February 2025); briefing document 4
  (media/182088, read in full with pdftotext); PM presentations (media/183017: withdrawal dates);
  final summary minutes (media/185412: vote counts); category 2 page (current as of 22 April 2026:
  ipamorelin acetate 503B, 29 September 2023, and the safety text); 503B categories PDF (media/94164,
  updated 21 March 2025: ipamorelin acetate in category 2); 503A categories PDF (media/94155, updated
  14 May 2026: no ipamorelin); July 2026 briefing introduction (media/193342: seven peptides, no
  ipamorelin) and meeting page (no ipamorelin; still no minutes).
- **Federal Register** API search "ipamorelin": 4 documents, none a rule.
- **EMA** medicines JSON (2,754 records, timestamp 2026-10-22T18:06:18Z): 0 hits for ipamorelin,
  NNC 26-0161, "aib-his", naphthylalanine; Ghryvelin (macimorelin) Authorised 11/01/2019; Adlumiz
  (anamorelin) Refused 16/11/2017. EPAR pages for both fetched.
- **CBG** `metadata.csv` (19,553 lines): 0 hits for ipamorelin.
- **WHO INN** review 2014 (PDF): "ipamorelin (78)", "numbers in parentheses indicate the Proposed list
  number". The allowlisted www.who.int URL redirects to cdn.who.int.
- **ChEMBL** (MCP): CHEMBL58547, max phase 2, no first approval, no curated mechanism.
- **PubChem** PUG REST: properties and synonyms; SMILES copied into the data file.
- **WADA**: 2026 and 2027 Lists (S2.2.4 text, "PROHIBITED AT ALL TIMES", "non-Specified"); 2015 List
  (S2.5 names ipamorelin) and 2014 List (no named examples) and the 2015 summary of modifications.
- **Germany**: AntiDopG Anlage (section 2.4 names Ipamorelin) and § 2 (text of (3)) on
  gesetze-im-internet.de.
- **NHS**: high blood sugar (reviewed 17 March 2026) and oedema (reviewed 26 February 2026) fetched.

## 3. Conflicts and how they were resolved

1. **Phase 1 sample size.** The Gobburu 1999 abstract says eight healthy men at each of five dose
   levels (= 40); the FDA briefing says 48 were enrolled, then describes five groups of 6 active plus
   2 placebo (= 40). The page says "eight at each of five dose levels", notes the FDA's 48, and the data
   file uses n = 40. **For the reviewer:** the full paper (paywalled) should settle this.
2. **IGF-1 in rats.** Johansen 1999 (15 days, subcutaneous): total IGF-I unchanged. Malmlöf 1999 (10
   days intravenous, rats on a steroid): IGF-I increased. Both reported; the mechanism step is graded
   animal with "mixed results".
3. **Blood sugar direction.** Ghrelin raises glucose in people (Broglio); ipamorelin increased insulin
   release from rat pancreas pieces (Adeghate); the patient trial had more hyperglycaemia on
   ipamorelin (FDA); MK-677 raised fasting glucose over a year (Nass). Presented as "mixed", with the
   human signals given more weight in the risk and harm-reduction sections.
4. **Category.** Ipamorelin had a formal programme (phase 1, two phase 2) but development stopped and
   nothing is running. `investigational` would render "still being tested in trials" (false), so
   `experimental` was used; the vocabulary has no "development discontinued" value (contract issue).
5. **"Selective".** Raun 1998 showed selectivity for pituitary hormones in pigs; no human data on
   cortisol or prolactin exist. The page explains the gap rather than repeating the marketing claim.
6. **Gly-ipamorelin products.** Gajda: "unknown pharmaceutical preparations" seized by Danish customs;
   the abstract does not say they were labelled ipamorelin, so the page says "powders containing", not
   "mislabelled".
7. **WADA "since".** Named from the 2015 List, but WADA states named examples were already prohibited
   (2014 S2.4 "GH and its releasing factors"). No `since` date in the data; prose says "named since".

## 4. Editorial choices

- **No human doses printed.** The FDA briefing and the trial abstracts give mg/kg and nmol/kg doses
  for intravenous use; the page describes designs ("five dose levels", "twice a day for up to 7 days")
  without numbers, because ipamorelin is self-injected and a human trial dose would read as guidance
  (CONTENT-GUIDE §1, §6). No animal doses are printed either.
- **No promotion of combinations.** The FDA quotes a clinic website claiming a large synergy with
  CJC-1295; it is not repeated. The page says only that mixtures are sold and never tested together.
- **Class evidence clearly labelled.** MK-677, macimorelin and anamorelin data are used only to show
  what the mechanism can do, always named as other drugs.
- **Both directions.** The page states what is solid (GH release in people; gut effects in rats; the
  class has an EU-authorised diagnostic) and the cost of the gap (an unpublished 320-patient trial,
  discontinued development, then use in clinics for untested purposes).

## 5. Figures and media

- One figure per section: Compare (what it is), Diagram `ipamorelin-gh-axis` (mechanism), three
  KeyNumbers (evidence), TimeStrip (unknowns), Compare (regulatory), IconArray (risks; Beck 2014
  adverse events via the FDA), ProductCheck with a free-base/acetate extra line (harm reduction).
- No existing explainer fits (`glp1-action`, `insulin-glp1-hypo` are GLP-1 specific). The backlog
  explainer `gh-axis-feedback` (docs/EXPLAINERS.md) would fit this page; requested in the summary.
- The `online-vial-risks` plate was not reused: its key names BPC-157, KPV, TB-500 and retatrutide.
- Hero: `anterior-pituitary-histology` (Mikael Häggström, CC0, Wikimedia Commons; non-annotated
  version, checked for text: none). Commons' author field was trimmed to the name. Caption sourced to
  `desousa-2025-gh-feedback`.

## 6. Validator notes

- 0 errors, 0 warnings for `--only ipamorelin`. Readability warnings on the first pass (summary item,
  lede, leads, figure titles, a "proven" quote from the EMA) were all fixed by rewording.
- `related` lists `cjc-1295` and `tesamorelin` (data files exist). `hexarelin` was removed because its
  data file does not exist yet; add it when it does.
- Glossary ids added here (`ghrelin`, `ghrelin-receptor`, `acth`, `cortisol`, `prolactin`,
  `somatotroph`, `growth-hormone-deficiency`, `hyperglycaemia`, `oedema`, `ibutamoren`, `macimorelin`,
  `anamorelin` …) did not exist on 22 October 2026. The CJC-1295, tesamorelin and hexarelin groups are
  likely to need the same terms: they should reuse these ids, not redefine them.

## 7. Open questions for the medical reviewer

1. Gobburu 1999: 40 or 48 participants (see §3.1)?
2. Beck 2014: the two deaths and the hypokalaemia/hyperglycaemia rates are taken from the FDA's
   reading of the full paper; please check against the paper's tables if available.
3. Is the stop-now item on swollen legs with breathlessness (based on MK-677 oedema and a heart-failure
   signal, and GH-label fluid retention) proportionate for a class extrapolation?
4. The checks list includes IGF-1 "as a safety check, not a target". Is that framing right, given that
   lab reference ranges are age-specific and the page must not invite dose adjustment?
5. Should people with eating disorders be added to "who should not use it" (ghrelin-receptor agonists
   increase appetite and food intake)? No direct source for ipamorelin, so it was left out.

## 8. Open questions for the legal reviewer

1. UK: the MHRA products database is client-rendered and could not be searched automatically; the UK
   row rests on the HMR 2012 regulation 46 and the absence of any approval in ChEMBL. A manual check of
   products.mhra.gov.uk would make the row firmer.
2. Belgium and Germany: national product databases (FAMHP, PharmNet.Bund) were not searched; the rows
   rest on the absence of an EU authorisation and of any approval in ChEMBL.
3. EU Clinical Trials Register: the search page rejected automated requests ("Request Rejected"), so
   EU trials were not checked there; ClinicalTrials.gov lists only US trials.

## 9. Fact-check log (independent fact-checker, 22 October 2026)

All downloads went to the session scratchpad (`scratchpad/fc/ipa/`), nothing into the repository.
Validator after the fixes: `npx tsx scripts/validate-content.ts --only ipamorelin` gives 0 errors and 0
warnings. The page renders on the dev server (`/en/compounds/ipamorelin/`, HTTP 200).

### What was checked

- **All 23 PubMed sources** (`get_article_metadata` by PMID, two batches): authors, title, journal,
  year, volume, pages, DOI and PMID match the records for every entry. Ahnfelt-Rønne's Novo Nordisk
  affiliation confirmed on PMID 11322495 (supports `group: mixed` for Svensson 2000).
- **Greenwood-Van Meerveld 2012 full text** (PMC4863553): compound supplied by Helsinn, acetic acid
  needed, groups of 5 to 10 rats, Helsinn co-author. Confirmed.
- **FDA October 2024 package, re-read independently**: briefing document 4 (media/182088, memo dated
  19 August 2024), final minutes (media/185412), PM slides (media/183017), 503B categories PDF
  (media/94164, updated 21 March 2025), meeting page (current as of 7 February 2025, "non-binding").
  Every number on the page that cites them was checked: Beck 2014 adverse events (12.5/3.4, 10.7/5.2,
  14.3/8.6, 17.9/15.5; 56 vs 58; 3 discontinuations per arm; two deaths), votes 12–1 on grouping, then
  0–12–1 for each form, withdrawals on 19 September 2024, rhGH label risks, QT with macimorelin,
  reward and fertility data, immunogenicity (SC more than IV), CoAs with purity only, alvimopan.
- **FDA category 2 page** (current as of 22 April 2026): ipamorelin acetate 503B, 29 September 2023;
  it is also on the list of substances "previously in category 2" whose (503A) nominations were
  withdrawn. **July 2026 briefing introduction** (media/193342): seven peptide groups, no ipamorelin.
  **July 2026 meeting page** (current as of 6 August 2026): still no minutes.
- **ClinicalTrials.gov API v2**: NCT00672074 (117, Helsinn, completed December 2009, 19 sites, no
  results), NCT01280344 (320, completed May 2014, quadruple-masked, 45 sites, no results; the arms are
  three IV dosing schedules, not three dose levels), NCT07717866 (observational, 52, ipamorelin listed
  under "Physiological Supplementation", given before the other interventions). Search: 3 records.
- **Federal Register API**: 4 documents for "ipamorelin", none a rule. **EMA JSON** (re-downloaded):
  0 hits. **CBG metadata.csv** (re-downloaded): 0 hits. **EMA EPARs**: Ghryvelin (diagnosis of GHD in
  adults, authorised 11 January 2019); Adlumiz (refused 16 November 2017; re-examination 14 September
  2017; applicant Helsinn Birex). **WHO INN review 2014**: "ipamorelin (78)" under -morelin.
  **ChEMBL**: CHEMBL58547, max phase 2. **PubChem**: formula, mass and SMILES match the data file.
- **WADA** 2026 and 2027 Lists (S2.2.4 names ipamorelin; class non-Specified), the 2015 List (S2.5)
  and the 2015 summary of modifications. **AntiDopG Anlage** 2.4 names ipamorelin.
- **NHS** high blood sugar (reviewed 17 March 2026) and oedema (26 February 2026) pages re-fetched.
- **Hero image**: the Commons API shows CC0; the image has no text or annotation (viewed), and no
  product, needle or person. Alt text and caption match the picture and the cited source.

### What was changed

Page (`src/content/compounds/en/ipamorelin.mdx`):

1. NCT01280344 tested **three dosing schedules** (two dose levels, two frequencies), not "three dose
   levels" (study finding and the human-studies fold).
2. Gobburu 1999: removed "at every dose" and added the conflict (abstract: GH rose at all dose levels;
   FDA: the lowest-dose group had too little GH to analyse). Removed "young" from the limitation (not
   in the source). The diagram and mechanism fold now say GH was "very low" by 6 hours, not "gone"
   (the FDA wording).
3. Lall 2001: the abstract says "GHS" (not specifically ipamorelin) raised food intake and leptin, and
   the mice were GH-deficient (lit/lit), not "without growth hormone". Reworded in four places.
4. Adeghate 2004: the blockers "inhibited", not "stopped", the insulin release.
5. Semenistaya 2015: the abstract says "nasal administration", not a spray (page and source note).
6. "Development was discontinued" now says "reportedly", quoting a 2020 review, as the FDA does.
7. "How it is used now": the FDA says websites offer mostly injections and **oral troches**
   (lozenges), not tablets; the nasal spray is one FAERS report.
8. The FDA evaluated only GHD and postoperative ileus, so "no effectiveness data for any use" was
   narrowed to what the FDA looked at. "Would not work" in total GH deficiency became "would likely not
   help" (FDA: "may not be expected").
9. "Reliably released growth hormone" (one PK study) became "in healthy men … released"; "no study has
   tested the uses it is promoted for" now says "in people" (Lall tested body fat in mice).
10. Beck 2014 balance: added that most adverse events were mild to moderate and linked to surgery, that
    the authors reported it was well tolerated, that most serious events happened after treatment
    ended, and the overall 87.5% vs 94.8% figure beside the IconArray. "No statistical tests were
    reported" became "the FDA's summary gives no statistical tests" (the paper itself is paywalled).
    "Side effect" for all adverse events became "health problem (an adverse event)".
11. MK-677 (Nass 2008): added that the authors say the trial was too small to judge strength and
    function. "What more growth hormone can do" became "what pushing this system for months can do"
    (MK-677 acts on the ghrelin receptor, not only through GH).
12. Cancer chain: "especially in people who have had cancer" is not in the FDA briefing (removed); the
    "existing tumour could grow" step is now wrapped in `<Claim level="hypothesis">`.
13. Gly-ipamorelin: Krug 2018 found it in black-market products (Cologne and Oslo), not only "powders"
    from Denmark and Germany; and Krug ran in-vitro metabolism experiments, so "never been tested"
    became "its effects and safety have never been studied".
14. Immunogenicity: "life-threatening allergy" became "life-threatening reactions" (FDA wording).
15. Reward: "drug-seeking" made specific ("heroin-seeking in rats", the FDA citing Maric 2012).
16. Stop-now list: the high-blood-sugar item now matches the NHS 999 criteria (thirst and urination
    plus feeling sick, drowsy, confused or fast breathing), and the palpitations item matches the NHS
    (does not settle, or comes with chest pain, breathlessness or fainting). Thirst alone is not
    stop-now.
17. Unknowns: "No study has measured" blood sugar on repeated use was wrong (Beck recorded
    hyperglycaemia over up to 7 days); now "no study has looked beyond one week in hospital". The
    selectivity and combination items now say "in the published studies" and "we found no study".
18. Regulatory: the EU Compare cell said "no EU or Dutch regulator has assessed it", which the data
    cannot show; now "EMA and Dutch records show no application". Germany: "has neither in EMA's data"
    was a non sequitur (EMA data cannot show German national licences); it now says what was and was
    not searched (DE and BE regulatory notes adjusted to match). NL art. 1 wording aligned with the
    statute ("can be used … to change body functions"). US note: the 2024 vote was on the 503A list,
    not on "pharmacy compounding" in general.
19. **PCAC canonical framing**: the page mentions the July 2026 meeting, so the US fold now states all
    five elements (8–6 with one abstention for BPC-157, as reported from the public meeting; seven
    considered and six recommended, emideltide not; advisory and against FDA staff; compounding stays
    prohibited until rulemaking; none approved in the EU, UK or US, Semax registered in Russia, and a
    503A listing is not an authorisation and changes nothing in the EU or NL). Also added that
    ipamorelin acetate was in 503A category 2 until the nominations were withdrawn.
20. Summary item 3: "tested in over 150 people" counted placebo patients as tested; it now reads
    "About 150 people took part in two published studies". Fact sheet: "Into a vein only" became "Into
    a vein; no published data under the skin" (one volunteer took it nasally). Unknowns lead: animals
    were studied for 3 months, so "Nobody has tested it for months" now says "No study in people…".
21. Smaller fixes: the Aib-in-semaglutide claim is now cited (`pubchem-semaglutide`); anamorelin is
    described by its indication (weight loss and muscle wasting in lung cancer); the evidence-map "who"
    column; the "Talk to a doctor first" heading became "How a doctor can help" (CONTENT-GUIDE §1a);
    "adult" not "young adult" rats; the Johansen 1999 limitation (adult rats' growth plates stay open);
    a citation added to the diabetes-medicine interaction.

Glossary (`src/i18n/en/glossary/ipamorelin.json`): removed the aliases "anastomosis" and "anastomoses"
from `anastomotic-leak` (an anastomosis is the join, not the leak; any page using the word would have
linked to the wrong definition). Replaced the alias "QT interval" on `qt-prolongation` with "prolong
the QT interval".

Sources (`src/data/sources/ipamorelin.yaml`): Semenistaya note (nasal administration, device not
named); Gobburu note (the FDA's lowest-dose exclusion and the publication types). No metadata errors
were found.

Data (`src/data/compounds/ipamorelin.yaml`): all 13 structured studies confirmed (species, n, design,
funding, group, blinding, control); only a comment was added. Grades confirmed: phase-2 (Beck 2014),
moderate (at least 10 primary preclinical papers verified here), few-groups, partial.

### Still open (for the reviewers)

- Gobburu 1999: 40 or 48 participants, and whether the lowest dose released GH (abstract versus FDA).
  The full paper is paywalled.
- The Beck 2014 adverse-event figures still come only from the FDA's reading of the full paper.
- The `experimental` category is kept: it renders "Not approved as a medicine in the EU, the UK or the
  US", which is accurate. A vocabulary value for "development stopped" remains a contract issue.
- The stop sign "Swollen legs and short of breath" is a class extrapolation (MK-677 oedema and a
  heart-failure signal; NHS oedema 999 criteria). Proportionate, but for the medical reviewer.
