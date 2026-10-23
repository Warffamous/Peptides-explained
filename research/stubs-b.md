# Research notes: stubs-b (GHK-Cu, AOD-9604, hexarelin, SS-31 / elamipretide, NAD+ precursors)

Tier 2 stub pages, written 23 October 2026 from scratch (no earlier draft of these files existed). Files:
`src/data/compounds/{ghk-cu,aod-9604,hexarelin,ss-31,nad-precursors}.yaml`,
`src/content/compounds/en/{…}.mdx`, `src/data/sources/stubs-b.yaml`, `src/i18n/en/glossary/stubs-b.json`.
Shared files touched (entries added only): `src/data/media.yaml` and `src/assets/media/` (five Commons images via
`npm run media:commons`), `src/data/heroes.yaml`, `src/i18n/en/media.json`.

Every page follows the semaglutide / stubs-a shape: each section opens with `<Lead>`, then one figure (`<Compare>`,
`<KeyNumber>`, `<IconArray>`, `<TimeStrip>` or `<Mechanism />`), a short visible paragraph, and depth in `<InDetail>`
folds. Stop-now content (`<Callout type="stop" id="stop-now">`, `<WarningSigns />`) is never folded; each page has
`<ProductCheck />`. Sections: what-it-is, mechanism, evidence, regulatory, risks, harm-reduction (the optional
mechanism and harm-reduction sections are included because the brief asks for ProductCheck and stop signs).
Approximate words in the body (folds closed / everything open): GHK-Cu 595 / 1,137; AOD-9604 612 / 1,172;
hexarelin 537 / 946; SS-31 559 / 1,221; NAD+ precursors 639 / 1,268.

---

## 1. The headline finding: SS-31 is now an approved medicine (in the US)

- **FDA accelerated approval of Forzinity (elamipretide) injection on 19 September 2025**, for Barth syndrome in
  patients weighing at least 30 kg; holder Stealth BioTherapeutics; NDA 215244 (type 1 NME, priority, orphan);
  rare paediatric disease priority review voucher (`fda-2025-forzinity-approval`, `fda-drugsatfda-forzinity`,
  `fda-2025-forzinity-approval-letter`).
- History from the approval letter: NDA submitted 29 January 2024; FDA action letter (complete response) 15 May 2025;
  resubmission 15 August 2025; approval under 21 CFR 314.510. Postmarketing requirement 4802-1: randomised,
  double-blind, placebo-controlled trial in patients aged 5 and over (registered as NCT07531251, recruiting from
  2 July 2026, 48 planned, primary completion 30 September 2029).
- Advisory committee (CRDAC) 10 October 2024: 10 yes, 6 no on "effective for Barth syndrome" (`fda-crdac-2024-10-elamipretide-minutes`).
- Label (9/2025; DailyMed SPL v10 of 12 December 2025 identical in the sections checked): the randomised crossover
  (12 males) was "not superior to placebo" on both primary endpoints; knee-extensor strength rose only in the open-label
  extension (median +63 N at week 168, n = 8). Injection-site reactions 12/12 vs 8/12; serious hypersensitivity;
  eosinophilia; benzyl alcohol (neonates); renal excretion. No carcinogenicity studies.
- Consequences in the data: `category: authorised-elsewhere`, `human_clinical: authorised`, `authorised_products:
  forzinity` (FDA label PDF), brand Forzinity, US row `authorised` since 2025-09-19, `<AuthorisedProducts />` on the page.
- EU: orphan designations only (EU/3/21/2430 Barth, 20 May 2021, sponsor now Atnahs Pharma Netherlands B.V.;
  EU/3/22/2614 myopathic mtDNA depletion, 16 May 2022); not in the EMA medicines JSON; not in the October 2026 CHMP
  under-evaluation list.
- An FDA warning letter of 24 August 2026 (MARCS-CMS 735067) named SS-31 (elamipretide) sold online as a research
  product (from legal-b's `fda-warning-letters-index` note; the page cites the index, as legal-b does).

## 2. Key facts and their sources

### GHK-Cu

| Fact | Source id |
|---|---|
| Serum factor 1973; identified as Gly-His-Lys 1977; co-isolates with copper, forms Cu(II) complexes, raises copper uptake 1980 | `pickart-1973-ghk-serum`, `schlesinger-1977-ghk-sequence`, `pickart-1980-ghk-copper` |
| PubChem: prezatide copper, copper tripeptide-1 [INCI], CAS 89030-95-5, UNII 6BJQ43T1I9; C14H23CuN6O4+ 402.92; GHK alone C14H24N6O4 340.38 | `pubchem-ghk-cu` |
| Collagen in fibroblasts; rat wound chambers | `maquart-1988-ghk-collagen`, `maquart-1993-ghk-rat-wounds` |
| Topical trials: diabetic ulcers (positive, n not in abstract), venous ulcers (86, null), laser resurfacing (13, null objectively) | `mulder-1994-ghk-diabetic-ulcers`, `bishop-1992-venous-ulcers-copper-cream`, `miller-2006-ghk-laser-resurfacing` |
| Skin permeation limited; isolated-skin penetration; low irritation in keratinocytes | `ogorek-2025-ghk-cu-skin-permeation`, `hostynek-2011-copper-tripeptide-skin`, `li-2016-copper-compounds-skin-irritation` |
| CosIng: COPPER TRIPEPTIDE-1, ID 55687, function skin conditioning, no restriction | `cosing-copper-tripeptide-1` |
| EU Cosmetics Regulation art. 2(1)(a) and 2(2): injected products are not cosmetics | `eu-regulation-1223-2009-cosmetics` |
| FDA: injectable GHK-Cu previously category 2 (withdrawn); non-injectable GHK-Cu back in 503A category 1 (14 May 2026); PCAC meeting before end of February 2027 | `fda-category-2-safety-risks`, `fda-503a-categories-2026-05`, `fda-pcac-2027-early-announcement` |
| Iamin Gel wound dressing 510(k) K953853, 5 February 1996 (device, not drug) | `fda-510k-k953853-iamin` |
| Phase 2 topical gel trial recruiting (60) | `ctgov-nct07437586` |

### AOD-9604

| Fact | Source id |
|---|---|
| Tyr + hGH 177-191, disulfide 7-14, C78H123N23O23S2 1,815.1; UNII 7UP768IP4M; CAS 221231-10-3 | `fda-pcac-2024-aod9604-briefing`, `pubchem-aod-9604` |
| Developed by Metabolic Pharmaceuticals (late 1990s); OPTIONS 536 enrolled / 502 randomised, 24 weeks, primary endpoint missed; development for obesity terminated 21 February 2007; never published | `fda-pcac-2024-aod9604-briefing` |
| Six company RCTs, safety summary (Stier 2013, not in PubMed; DOI verified) | `stier-2013-aod9604-safety` |
| No GH-receptor binding; target unknown; rodent lipolysis; beta-3 knockout | `fda-pcac-2024-aod9604-briefing`, `heffernan-2001-aod9604-mice`, `ng-2000-aod9604-rats` |
| Rabbit OA (32) | `kwon-2015-aod9604-rabbit-oa` |
| Safety signals: severe chest tightness (IV, possibly related), euphoria 5 vs 0, four cancers in the 12-week trial (judged unrelated; FDA: insufficient info), rat osteocalcin, monkey liver vacuolation, equivocal genotoxicity | `fda-pcac-2024-aod9604-briefing` |
| PCAC 4 December 2024: single vote agreed 12-0; then 0 yes / 12 no on listing both forms | `fda-pcac-2024-12-minutes` (minutes read in full; the existing source note only mentions CJC-1295) |
| Category 2 (withdrawn nominations) | `fda-category-2-safety-risks` |
| GRAS: no AOD-9604 entry in the FDA GRAS notice inventory | `fda-gras-inventory-search-2026-10-23` |
| WADA S2.2.3 by name; German AntiDopG Anlage by name | `wada-2026-list-en`, `wada-2027-list-en`, `de-antidopg-anlage`, `de-antidopg-2` |
| Seized products (Belgium), confiscated vials (US) | `vanhee-2014-aod9604-seized`, `cox-2015-aod9604-detection` |

### Hexarelin

| Fact | Source id |
|---|---|
| His-D-2-Me-Trp-Ala-Trp-D-Phe-Lys-NH2, C47H58N12O6 887.0; INN examorelin; CAS 140703-51-1; UNII 09QF37C617; CHEMBL108335 | `pubchem-hexarelin` |
| GH release by four routes, 12 volunteers | `ghigo-1994-hexarelin-routes` |
| 16 weeks, 12 healthy elderly: GH response about halved, recovered 4 weeks after stopping; IGF-1 unchanged; cortisol response lower | `rahim-1998-hexarelin-long-term`, `rahim-1998-hexarelin-desensitisation`, `rahim-1999-hexarelin-adrenal` |
| 8 short children, nasal, up to 8 months | `laron-1995-hexarelin-children` |
| Acute LVEF rise in 7 men (GH-independent); 13 heart-failure patients | `bisi-1999-hexarelin-heart`, `imazio-2002-hexarelin-cardiomyopathy` |
| CD36 binding and coronary vasoconstriction in rat/mouse hearts; animal cardioprotection; review | `bodart-2002-hexarelin-cd36`, `tivesten-2000-hexarelin-rat-mi`, `mao-2014-hexarelin-cardiovascular-review` |
| Did not change glucose acutely (vs ghrelin) | `broglio-2001-ghrelin-glucose` (ipamorelin group) |
| rhGH label risks (class) | `fda-pcac-2024-cjc1295-briefing` (cjc-1295 group; text re-read 23 October 2026) |
| WADA S2.2.4 "examorelin (hexarelin)"; German AntiDopG Anlage | `wada-2026-list-en`, `wada-2027-list-en`, `de-antidopg-anlage` |

### NAD+ precursors

| Fact | Source id |
|---|---|
| Structures (no amino acids): NAD+ CID 5892, NR 439924, NMN 14180 | `pubchem-nad` |
| NR chloride authorised novel food (Implementing Regulation 2020/16, 10 January 2020); later amendments 2021/418, 2022/1160, 2023/439, 2023/1065 | `eu-regulation-2020-16-nr` |
| EFSA NR 2019 (safe for adults, excl. pregnancy/lactation at full level); EFSA 2021 (possible adverse pathways at high nicotinamide intakes; UL re-evaluation may be warranted) | `efsa-2019-nr-novel-food`, `efsa-2021-nr-extension` |
| EFSA NMN opinion May 2026 (safe for adults excl. pregnant/lactating; rat reproductive-organ effects; MoE 93) | `efsa-2026-nmn-novel-food` |
| NMN not on the Union list consolidated 10 August 2026; no EU act on NMN found | `eu-union-list-novel-foods-2026-08-10` |
| EU food = ingested; medicines and cosmetics excluded | `eu-regulation-178-2002-food-law` |
| FDA 29 September 2025: NMN not excluded from the dietary-supplement definition (marketed from 2017); still an NDI | `fda-2025-nmn-petition-response` |
| GRN 635 NR chloride, "no questions", 3 August 2016 (food use) | `fda-grn-635-nicotinamide-riboside` |
| NAD and NAD disodium in 503A category 1; NR chloride and beta-NAD in 503B category 1 | `fda-503a-categories-2026-05`, `fda-503b-categories-2025-03` (503B not cited on the page) |
| NOPARK phase 3 (JAMA, 8 October 2026): 410 randomised, NR worse than placebo by 2.72 MDS-UPDRS points; SAE 8.3% vs 14.1% | `brakedal-2026-nopark` |
| Other trials: Martens 2018 (30), Dollerup 2018 (40, null), Yoshino 2021 (25, positive), NADPARK 2022 (30) | as named |
| IV NAD+: Grant 2019 (11), Yu 2026 (180), Godic 2026 review | as named |
| Cancer signals in mice/cells | `maric-2023-nr-metastasis-mice`, `nakazzi-2026-b3-pancreatic-cancer` |
| WADA M2.2 (>100 mL/12 h); USADA: applies even to permitted substances and boutique IV clinics | `wada-2026-list-en`, `usada-iv-infusions` |
| NMN EU orphan designation EU/3/23/2786 (sickle cell disease, 20 June 2023) | `ema-orphan-designations-json` (tb-500 group; re-downloaded 23 October 2026) |

---

## 3. Verification log

- **PubMed**: every article's authors, title, journal, year, volume, pages, DOI, PMID and PMCID copied from NCBI
  E-utilities esummary/efetch output on 23 October 2026 (author lists truncated with "et al." where long). Abstracts
  read for every cited article; full texts (PMC efetch) read for funding/numbers: Martens 2018 (30 randomised, 24
  completed), Yoshino 2021 (13 vs 12; patent disclosures), NOPARK (funding, ChromaDex supplied NR/placebo, patents),
  Grant 2019 (11 men; funding by NAD+ Research Inc.; clinic director co-author), MMPOWER-3 and TAZPOWER (Stealth
  funding), Ogórek 2025 (university funding).
- **Not in PubMed**: Stier 2013 (J Endocrinol Metab 3(1-2):7-15) — metadata from Crossref and the DOI landing page
  (jofem.org), `verified: doi`.
- **FDA documents** read in full with pdftotext: AOD-9604 briefing (media/183584), PCAC minutes 4 Dec 2024 (185642),
  CRDAC minutes 10 Oct 2024 (187179), Forzinity label and approval letter, NMN petition response (regulations.gov
  FDA-2023-P-0872-2754; header date misprinted "2029", digital signature 29 September 2025), 503A (14 May 2026) and
  503B (21 March 2025) category PDFs, category-2 page (current as of 22 April 2026), 503A bulks page (14 May 2026),
  PCAC 2027 early-announcement page (still no date or FR notice on 23 October 2026), Forzinity press release.
- **openFDA** Drugs@FDA queries (generic, brand, active ingredient) for every name: only elamipretide found.
- **GRAS inventory** searched for 9604, AOD, mononucleotide, riboside, copper.
- **Federal Register API**: no document for GHK-Cu, NMN or NR; AOD-9604 only in the 2024 PCAC notice; hexarelin only in
  horse-racing (HISA) rules; elamipretide in the 2024 CRDAC notice and the 2025 priority-voucher notice.
- **EMA**: medicines JSON (2,754 records) and orphan JSON (3,310 records), both timestamped 23 October 2026; October 2026
  under-evaluation spreadsheet; orphan page EU/3/21/2430 fetched.
- **CBG** `metadata.csv` (19,553 lines): no active ingredient matching elamipretide, GHK/copper tripeptide, AOD,
  hexarelin/examorelin, nicotinamide riboside, NMN or NAD; nicotinamide (vitamin B3) appears only in multivitamin
  infusions and as an excipient; copper only in trace-element infusions and radiopharmaceuticals.
- **EU law**: EUR-Lex returns empty pages to scripts, so texts were read through the CELLAR resolver
  (`publications.europa.eu/resource/celex/…`): 32009R1223 (art. 2), 32020R0016, 32002R0178 (art. 2), consolidated
  02017R2470-20260810 (Union list: NR present, NMN absent). Publications Office SPARQL search of act titles for
  "mononucleotide" / "nicotinamide riboside" (only NR acts) and for 2026 novel-food acts (latest July 2026).
- **CosIng** entry read through the Commission's search API (`api.tech.ec.europa.eu`) and the details page fetched.
- **WADA**: 2026 and 2027 Lists and 2026/2027 Monitoring Programs downloaded and grepped (AOD-9604 in S2.2.3;
  examorelin (hexarelin) in S2.2.4; no GHK, copper, elamipretide, nicotinamide or NAD; M2.2 text). USADA IV page fetched.
- **German AntiDopG Anlage** fetched: lists AOD-9604 (Wachstumshormon-Fragmente) and Hexarelin (GHRP).
- **FDA 510(k)** record K953853 fetched (device classification; no ingredient list).
- **PubChem** PUG REST for formulas, masses, SMILES and synonyms.
- **ClinicalTrials.gov**: NCT01572909, NCT07531251, NCT06373731, NCT07437586 and searches for GHK-Cu, AOD-9604, hexarelin.
- **Images**: licences read by `npm run media:commons`; previews viewed before choosing. Rejected: a skin micrograph with
  English text labels (Epidermis, papillary dermis and reticular dermis.png); `Somatotropine.GIF` (refused by the tool:
  no author); `Somatotropin 1HGU.png` (author given only as "own work", portrait two-panel layout); `Af3
  human-growth-hormone-open-use.webp` (provenance doubtful: looks like a stock render); tesamorelin's adipose image
  (already a hero).

---

## 4. Judgement calls and conflicts (for the editor)

1. **SS-31 WADA row = unclear** (changed from `not-listed` by the fact-checker, see the log below). Not named in the
   2026/2027 Lists or Monitoring Programs; S0 covers only substances without any government approval, and elamipretide
   is FDA-approved since 19 September 2025, but the 2027 explanatory note says unnamed peptides may fall under other
   classes (S2, S4), and CONTENT-GUIDE §5.1 allows `not-listed` only when the sources say it is allowed. Before that
   date it would have fallen under S0. No WADA statement found.
2. **GHK-Cu WADA row = unclear** (changed from `not-authorised` by the fact-checker: the vocabulary has had an
   `unclear` status since commit 0cbda51, and the guide forbids `not-authorised` as a stand-in). Not named; no
   medicine approval found (S0 would apply on a literal reading, as for KPV and epitalon), but GHK-Cu is a lawful EU
   cosmetic ingredient and a GHK-Cu wound gel was cleared in the US as a device in 1996. WADA has not ruled. The
   page tells athletes to ask.
3. **NAD+ precursors WADA row = unclear** (changed from `not-authorised` by the fact-checker). `not-listed` would make
   the tile say "Not banned" while IV drips over 100 mL / 12 h are banned under M2.2 whatever they contain; the
   page explains M2.2 separately.
4. **NAD+ precursors EU row = not-authorised** in the medicines sense of the vocabulary, although NR chloride is an
   authorised novel food. The tile therefore says "It is not a peptide, and it is not an approved medicine in the EU",
   which is correct; the food status is explained in the regulatory note and on the page.
5. **NAD+ human_clinical = phase-3** because NOPARK (phase 3, 410 randomised) was published on 8 October 2026 — and it
   was negative. The tile will say "Yes — large trials in many people have been published". Accurate, but readers
   should not read "tested" as "works"; the page says so.
6. **GHK-Cu human_clinical = phase-2** from small randomised trials of topical products; there is no human study of
   injection. Rationale says so explicitly.
7. **AOD-9604 human_clinical = phase-2**: six company RCTs incl. a 502-person 24-week trial; only a safety summary was
   published; efficacy known from the company's filing quoted by the FDA. AOD category `experimental` (development
   stopped), matching ipamorelin's treatment.
8. **AOD-9604 terminal tyrosine**: the FDA briefing says "N-terminal" in its introduction and chemical name but
   "C-terminal" once in the pharmacology section; PubChem SMILES and Stier ("Tyr-hGH 177-191") confirm N-terminal.
   hGH residue 176 is Phe, so "hGH 176-191 with Tyr" in sellers' names is a loose description.
9. **PubChem errors**: AOD-9604 synonyms include "Tyr-somatostatin (177-191)" (should be somatotropin) — flagged on the
   page. CAS discrepancy (221231-10-3 vs 386264-39-7) noted by the FDA.
10. **Hexarelin residue code**: 2-methyl-D-tryptophan has no code in `NONSTANDARD_RESIDUES` (vocab.ts is not this
    group's file), so position 2 is entered as `D-Trp` with a modification label. Suggest adding a code (e.g. `2MeTrp`)
    to vocab.ts. *Resolved 23 October 2026: `2MeTrp` added; hexarelin's residues read `D-2MeTrp` (see §7.6).*
11. **GHK-Cu molecular block left empty**: PubChem gives a charged formula (C14H23CuN6O4+) that the page template's
    formula renderer rejects; formula and masses are given in the page text instead.
12. **Bishop 1992** does not name the tripeptide in its abstract; the page says "a copper-tripeptide cream" and notes this.
13. **Mulder 1994** abstract gives no patient number or funder; n left null; "lamin Gel" (abstract spelling) vs the
    FDA 510(k) "Iamin Gel" — the page reports both names rather than asserting they are the same product.
14. **EMBRACE STEMI n = 300** from the registry enrolment; the paper's abstract gives no total.
15. **DE/BE/UK rows** were left out for all five: we could not check national registers (PharmNet, FAMHP, MHRA
    products are not machine-readable for us). The German Anti-Doping Act listing of AOD-9604 and hexarelin is in the
    page text. 

## 5. Validator warnings and false positives

`npx tsx scripts/validate-content.ts --only <file>`: 0 errors and 0 warnings for each of the five MDX files, the five
data files, `stubs-b.yaml` and `stubs-b.json` (23 October 2026). Warnings fixed along the way: reading ease of leads,
key-number titles and labels, captions over 18 words, a 5-word fact label, a 9-word stop sign, one guideline-type
source without DOI (re-typed as `web`). The full-site run shows 0 errors; the 16 remaining warnings are in other
groups' files.

## 6. Open questions for the medical and legal reviewers

1. SS-31: is "authorised" on the human-clinical axis right when the approval rests on a failed 12-patient randomised
   phase and open-label follow-up? (Rubric says yes; the page explains the weakness.)
2. SS-31 in sport after FDA approval: worth confirming with the Dopingautoriteit/WADA (also relevant to PT-141).
3. GHK-Cu in sport: does S0 reach a substance that is a lawful cosmetic ingredient and part of a 1996 US device?
4. NAD+ drips and M2.2: confirm the Dutch reading with the Dopingautoriteit.
5. NAD+ legal status of injectable NAD+ in the Netherlands: food law clearly does not cover injections; whether
   injectable NAD+ is a medicine by function was not checked against IGJ/CBG positions (none found).
6. Watch: EU authorisation of beta-NMN (positive EFSA opinion May 2026) — update the NAD page when the implementing
   regulation appears; PCAC GHK-Cu meeting (by end of February 2027) — update GHK-Cu; Forzinity confirmatory trial and
   any label change; MHRA/EMA filings for elamipretide.
7. AOD-9604 cancers in the 12-week trial: the page suggests checking new lumps, moles or bleeding with a doctor; the
   reviewer should confirm that this is proportionate.
8. Add aifa/anzctr/mhra-products hosts? Not needed for these pages; noted only.

---

## 7. Fact-check log (independent fact-checker, 23 October 2026)

Scope: all 13 files of this group plus the five hero entries this group added to `src/data/media.yaml`,
`src/data/heroes.yaml` and `src/i18n/en/media.json`. Method: every source re-looked-up from the primary record (not
from the writer's notes); every structured study re-checked against the abstract or full text; every number, date
and regulatory statement re-checked against its cited source; guardrails and readability re-checked; validator and a
scratch build re-run.

### 7.1 Sources (79 in `stubs-b.yaml`, plus 26 shared ids the pages cite)

- **PubMed (46 records)**: authors, title, journal, year, volume, pages, DOI, PMID and PMCID compared field by field
  with NCBI esummary output (one batch call). All 46 match. Abstracts re-read for all 46 (efetch).
- **Full texts re-read** (PMC efetch): Martens 2018, Yoshino 2021, NOPARK 2026, Grant 2019, TAZPOWER 2021. Funding of
  Zhao 2004, Birk 2013 and Bodart 2002 from the PubMed/Europe PMC grant lists (all NIH).
- **Stier 2013** (not in PubMed): Crossref record and DOI landing page (jofem.org) re-fetched; authors Stier, Vos,
  Kenley; vol 3(1-2):7-15; the DOI resolves. Affiliations added to the note.
- **FDA PDFs re-downloaded and read with pdftotext**: AOD-9604 briefing (media/183584), PCAC minutes 4 Dec 2024
  (media/185642; AOD vote 2: single vote Yes 12 / No 0, then "should both be placed on the list?" Yes 0 / No 12),
  CRDAC minutes 10 Oct 2024 (Yes 10 / No 6 / Abstain 0), Forzinity label (9/2025), NDA 215244 approval letter,
  503A categories (updated 14 May 2026). FDA web pages re-fetched: Forzinity press release, category-2 page
  (GHK-Cu injectable and AOD-9604 both under "nominated but withdrawn"; "limited data in humans" is verbatim),
  503A bulks page (interim-policy wording for category 1), PCAC 2027 early announcement (GHK-Cu on the agenda; still
  no date; content current as of 15 April 2026). NMN petition response downloaded from regulations.gov (attachment 1):
  letterhead "September 29, 2029", digital signature 29 September 2025, the "not excluded" conclusion, footnote 44 and
  the 11 October 2022 letter to Inner Mongolia Kingdomway all confirmed. GRN 635 page re-fetched; the whole GRAS
  inventory downloaded (last updated 21 October 2026) and searched. 510(k) K953853 re-fetched (applicant Procyte
  Corp.). openFDA re-queried (only elamipretide / NDA 215244 found; one ORIG submission, priority, type 1 NME).
- **EU**: Reg. 1223/2009 art. 2(1)(a) and 2(2), Reg. 178/2002 art. 2 and Implementing Reg. 2020/16 recital 1 re-read
  through the CELLAR resolver (178/2002 only as text/html); consolidated Union list 02017R2470-20260810: "Nicotinamide
  riboside" present; no "mononucleotide", no "adenine dinucleotide", no NADH. Publications Office SPARQL: the newest
  novel-food act indexed is 2026/1749 (20 July 2026); none on NMN. CosIng search API: substance 55687, COPPER
  TRIPEPTIDE-1, skin conditioning, no annex, status active. EFSA abstracts (2019, 2021, 2026) re-read.
- **EMA**: medicines JSON (2,754 records, timestamp 23 October 2026) and orphan JSON (3,310) re-downloaded: no product
  for any of the five; orphan designations EU/3/21/2430 and EU/3/22/2614 (elamipretide) and EU/3/23/2786 (NMN, sickle
  cell disease) confirmed; orphan page EU/3/21/2430 (sponsor Atnahs since April 2024) re-fetched; October 2026
  under-evaluation spreadsheet re-downloaded: no elamipretide.
- **CBG** `metadata.csv` (19,553 lines) re-downloaded: no elamipretide, hexarelin/examorelin, AOD, GHK, NR, NMN, nadide.
- **WADA** 2026 and 2027 Lists and Monitoring Programs re-downloaded: AOD-9604 in S2.2.3, "examorelin (hexarelin)" in
  S2.2.4, nothing on GHK-Cu, copper, nicotinamide, NAD or elamipretide; S0 and M2.2 wording confirmed. USADA IV page
  re-fetched. German AntiDopG Anlage, section 2 and section 4 re-fetched (AOD-9604 and Hexarelin listed by name).
- **ClinicalTrials.gov API v2**: NCT07531251, NCT06373731, NCT07437586 and NCT01572909 re-read (all notes correct);
  searches: 0 records for hexarelin, examorelin and AOD-9604/AOD9604; GHK-Cu 4 records, all topical or a patch.
- **PubChem PUG REST**: formulas, masses, SMILES, CAS, UNII and synonyms for all seven CIDs match the data files.
- **PubMed counts** re-run: GHK-Cu 189/171/64, Pickart 6, Maquart 6; hexarelin 316/279/137/158, Turin 111, Milan 41,
  Montreal 16; NR/NMN 2,297/2,036/1,091/45; AOD 34. The elamipretide animal count (253/31) could not be reproduced;
  the reproducible query gives 258/32, now used on the page and in the note.

**Sources wrong or incomplete, and fixed (notes only; no DOI, PMID or title was wrong):** `ng-2000-aod9604-rats` (19
days, not 21: the abstract wins over the FDA summary); `martens-2018-nr-older-adults` (ChromaDex supplied the pills
and part of the funding; the note said NIH only); `grant-2019-iv-nad-pilot` (funding and supplier wording);
`fda-510k-k953853-iamin` ("Iamin" vs the abstract's "lamin"); `fda-drugsatfda-forzinity` (the vial is
single-patient-use, not "multi-dose"); `pubmed-elamipretide-count-2026-10-23` (counts); verification details added
to `fda-gras-inventory-search-2026-10-23`, `stier-2013-aod9604-safety`, `birk-2013-ss31-cardiolipin`,
`bodart-2002-hexarelin-cd36` and `zhao-2004-ss31-mitochondria`.

### 7.2 Structured studies changed

| Compound | Study | Change | Why |
|---|---|---|---|
| hexarelin | bisi-1999 | design rct → phase-1 | the abstract does not say the order of GH and hexarelin was randomised |
| hexarelin | bodart-2002 | funding mixed → government | NIH grant list; no industry funder found |
| SS-31 | birk-2013 | funding mixed → government | NIH grant list |
| NAD | martens-2018 | funding government → mixed; group independent → mixed | ChromaDex pills and partial funding (full text) |
| NAD | nadpark-2022 | group independent → mixed | two authors filed an NR patent application (PubMed COI) |
| NAD | nopark-2026 | funding mixed → government | public funders only; ChromaDex supplied the product (group stays mixed) |
| NAD | grant-2019 | funding industry → mixed | NAD+ Research Inc. and the Australasian Research Institute |

All other species, n, design, blinding and control values were confirmed. Left as is, flagged: Mulder 1994 and
Maquart 1993 `group: independent` is provisional (co-author Patt LM's affiliation could not be checked); Dollerup 2018
funding stays `undisclosed` (no full text available here).

### 7.3 Claims fixed in the pages

- **WADA rows**: GHK-Cu and NAD+ precursors used `not-authorised` as a stand-in, which CONTENT-GUIDE §5.1 forbids; the
  vocabulary has had `unclear` since commit 0cbda51. Both are now `unclear`. SS-31 used `not-listed`, but §5.1 allows
  that only when sources say the substance is allowed, and the 2027 explanatory note says unnamed peptides may fall
  under other classes, so SS-31 is now `unclear` too (as thymosin alpha-1). The tiles now read "Unclear … Ask your
  anti-doping organisation", which matches the page text. PT-141 (not this group's file) still uses `not-listed` on
  the same reasoning; flagged for the editor.
- **AOD-9604**: Ng 2000 "21 days" → 19 days; removed "hGH fragment 176-191 (Tyr)" from other names (WADA and the
  AntiDopG list it as a separate fragment); the "GRAS" paragraph asserted without a source that AOD-9604 is called
  GRAS online → rewritten as a conditional; euphoria "5 people" → "5 times" (the FDA counts reports); the Kwon 2015
  rabbit result (less cartilage damage than saline) added, for balance; summary "The maker only published a short
  safety summary" → "The full trial results were never published" (a meeting abstract and a review also exist);
  German law "a crime" → what section 2(3) forbids (the cited sources are the Anlage and section 2).
- **Hexarelin**: "The longest study lasted 16 weeks" was wrong (Laron 1995 ran up to 8 months) → corrected; "Milan
  and Montreal account for most of the rest" was wrong (they add about 20%) → corrected in the fold and the grade
  rationale; Ghigo 1994 "more GH than GHRH by all four routes" overstated (only the IV comparison was tested) →
  "about twice as much as GHRH when given into a vein"; KeyNumber value "about half" → the source's own numbers
  (19.1 → 10.5); "never approved" (anywhere) narrowed to what was checked; "Any lasting benefit was never tested" →
  "No controlled trial has shown a lasting benefit"; German law wording as for AOD-9604.
- **SS-31**: "inherited" now also cited to TAZPOWER; "rejection letter" → a letter that did not approve it (the
  approval letter calls it an action letter, answered by a complete response); the TimeStrip no longer labels a
  planned trial "Not known: started July 2026" (now a solid "recruiting since July 2026" span plus a hatched "Not
  known: the outcome" span); "use beyond about four years has not been studied" is not in the label → "the longest
  use in the trials was 192 weeks, in 3 patients"; added that the FDA requires carcinogenicity studies (PMRs 4802-2
  and 4802-3); the kidney bullet said the drug "builds up", but the label reports minimal accumulation → "blood levels
  are higher"; the ProductCheck extra listed positive identification signs (colour; brand name on the vial, unsourced)
  → a negative-only line (CONTENT-GUIDE §1a); "approved in the US only" (UK not checked) → "a US medicine … not in the
  EU"; PubMed counts updated.
- **NAD+ precursors**: "EFSA's conclusions exclude pregnant and breastfeeding women" was wrong for NR (EFSA 2019
  accepted a lower intake for them) → corrected in the risks fold and the harm-reduction list; "EFSA asked for a review
  of the upper limit" overstated ("may be warranted") → corrected; NAD+ "not allowed in EU food supplements" was an
  inference (no EU decision found) → verdict "unknown"; "NMN may be sold as a dietary supplement" → "is not excluded
  from dietary supplements; a new-ingredient notice is still needed"; the summary said NR and NMN are sold as
  injections (unsourced) → "NAD+ is also given as drips and injections"; Martens n now "30 randomised, 24 finished";
  Grant 2019 limitation reworded to what the full text says; "an injection is not a food, whatever its label says" →
  "a product meant for injection is not a food" (the EU definition turns on intended use); "where it goes was not
  measured" → "which tissues take it up was not measured" (urine was measured).
- **GHK-Cu**: summary and lede "never tested / no study" → "no published study" (only publications were searched);
  main_risk "Vials are not checked" (a generalisation) → "Vials may carry germs"; the "effects depend on dose and
  tissue" inference removed; US cosmetics cell "Not covered on this page" → "We did not check US cosmetic rules";
  WADA explanatory note cited for "unnamed peptides may still be banned".
- **Image alt text**: the GHK-Cu skin micrograph shows a benign intradermal naevus (Commons description); the alt
  text now says so.

### 7.4 Checked and left unchanged

All other numbers (OPTIONS 536/502, 24 weeks, 21 February 2007; CRDAC 10-6; label IconArray 100/25, 75/42, 67/17,
67/17; +63 N from 124 N; MMPOWER-3 −3.2 m; NOPARK 2.72, 4.22, 8.3% vs 14.1%; Yu 45.44% vs 42.44%; Laron 5.3 → 8.3
cm/year; Bisi 70.7% vs 64.0%; Imazio 26.2% from 22.6%; Mulder 98.5% vs 60.8%, infections 7% vs 34%; Bishop 86;
Miller 13; formulas and masses) match their sources. No July 2026 PCAC vote appears on these pages, so the five
canonical elements are not needed; the GHK-Cu page's description of the planned 2027 PCAC meeting and of a 503A
listing ("advice only", "not a marketing authorisation", "changes nothing in the EU") is correct. Licences of the five
Commons images re-checked through the Commons API (three CC0, one public domain, one CC BY-SA 4.0); none shows a
product, vial, needle or person; alt texts match the pictures. Guardrails: no doses, protocols, schedules, sourcing
hints, superlatives, testimonials, emergency numbers or commerce link text; all internal links are planned routes; no
`# ` headings. Not overly negative: the positive Mulder trial, the animal wound and cartilage results, the NADPARK
signal, the IV NAD+ heart-failure trial and the FDA's reasons for accelerated approval are all reported.

### 7.5 Validation

`npx tsx scripts/validate-content.ts --only <file>` for each of the five compounds, `stubs-b` and `media`: 0 errors and
0 warnings in this group's files (the one `media.json` warning is another group's caption). Full-site run: 0 errors,
16 warnings, none in this group's files. Scratch `astro build` (138 pages), `check-no-commerce` passed, `check-html`
0 errors; the rendered sport tiles now read "Unclear" for GHK-Cu, SS-31 and NAD+ precursors.

### 7.6 Still open (for the editor and reviewers)

1. *Resolved 23 October 2026.* PT-141 used `not-listed` on the same reasoning that was changed to `unclear` for
   SS-31 here; its WADA row is now `unclear` too (research/pt-141.md §9).
2. *Resolved 23 October 2026.* The generic "tested in people" tile for `human_clinical: authorised` overstated SS-31's
   evidence (a 12-patient crossover that missed both primary endpoints). A sourced page override, `glance.tested`
   (CONTENT-GUIDE §5.2), now reads "Some. Approved on a 12-patient trial that missed its main goals. Bigger trials in
   other diseases found no benefit." (grey ring). NAD+ precursors had the same problem with `phase-3` ("Large
   trials in many people have been published" for one negative trial): "Yes. Many trials, mostly of pills. The
   biggest one, in 410 people with Parkinson's, found no benefit." Its sport tile adds the M2.2 drip rule
   (`glance.sport`).
3. *Resolved 23 October 2026.* Hexarelin position 2 (2-methyl-D-tryptophan) has the residue code `2MeTrp` in
   `vocab.ts`; the data file reads `D-2MeTrp` instead of `D-Trp`.
4. Dollerup 2018 funding and the Mulder 1994 / Maquart 1993 author affiliations need the full texts.
5. The MHRA (UK) status of elamipretide was not checked; the pages no longer say "US only".
