# Melanotan II: research notes

Page: `src/content/compounds/en/melanotan-ii.mdx`. Data: `src/data/compounds/melanotan-ii.yaml`. Sources:
`src/data/sources/melanotan-ii.yaml` plus ids reused from other groups (listed in that file's header). Glossary:
`src/i18n/en/glossary/melanotan-ii.json`. Page photo: `compounds/melanotan-ii: dysplastic-nevus-micrograph` in
`src/data/heroes.yaml` (registered with `npm run media:commons`, alt text and caption in `src/i18n/en/media.json`).

Written 22 October 2026 (no earlier draft existed; `git status` showed none of these files). Status checks are
dated 22 October 2026.

## 1. Key facts and their sources

| Fact | Source id(s) |
|---|---|
| Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2; C50H69N15O9; 1024.2 Da; CID 92432; CAS 121062-08-6; UNII UPF5CJ93X7; lactam between Asp (2) and Lys (7) | `pubchem-melanotan-ii` (PUG REST, synonyms), ChEMBL CHEMBL430239 (HELM), `dorr-1996-mt2-phase-1`, `wessells-2003-mt2-spinal-erection` |
| Designed at the University of Arizona; ~90× alpha-MSH potency in lizard skin; prolonged action of the 23-membered ring | `al-obeidi-1989-cyclic-lactam` |
| Acts on MC1, MC3, MC4 and MC5 receptors (MC2 mainly ACTH) | `hruby-1995-melanocortin-antagonists` |
| 86% still bound to hMC1R at 6 h (MT-I 65%, alpha-MSH 25%); MT-I = [Nle4,D-Phe7]alpha-MSH | `haskell-luevano-1996-mc1r-dissociation` |
| MC1R → Gs → cAMP → melanin; enhances NER DNA repair; loss of function = melanoma-prone | `wolf-horrell-2016-mc1r` |
| alpha-MSH is mitogenic (cell number +50–270%) and melanogenic (tyrosinase +70–450%) in cultured human melanocytes | `abdel-malek-1995-melanocyte-mitogenic` |
| alpha-MSH reduces UV DNA damage and apoptosis in melanocytes | `kadekaro-2005-msh-dna-repair` |
| Pilot phase 1: 3 healthy men, single-blind, alternating saline days, 2 weeks; 2 tanned; nausea; somnolence in one; erections 1–5 h | `dorr-1996-mt2-phase-1` |
| Crossover trial, 10 men psychogenic ED: 8/10 erections; 38.0 vs 3.0 min tip rigidity >80% | `wessells-1998-mt2-psychogenic-ed` |
| Crossover trial, 10 men organic ED: 12/19 vs 1/21 injections; 45.3 vs 1.9 min; severe nausea 4/19 | `wessells-2000-mt2-organic-ed` |
| Pooled 20 men: 17/20 erections; desire 13/19 vs 4/21; severe nausea 12.9% | `wessells-2000-mt2-review-20-men` |
| Sexual effects "discovered accidentally" during tanning work | `hadley-2005-discovery` |
| MT-I linear (tanning), MT-II cyclic (ED); PT-141 "a new MTII analog" | `hadley-2006-melanocortin-therapeutics` |
| PT-141 is "the carboxylate derivative of MT-II" | `king-2007-melanocortin-erection` (pt-141 group) |
| MTII in the brain stops overeating in 4 mouse models; SHU9119 blocks | `fan-1997-melanocortin-feeding` |
| IV MT-II reduces eating in rats with negligible brain penetration; acts at circumventricular organs | `trivedi-2003-mt2-anorectic-site` |
| MTII causes conditioned taste aversion in rats (single and 7-day) | `benoit-2003-mt2-taste-aversion` |
| Erections in rats via brain and lumbosacral spinal MC receptors, not the penis | `wessells-2003-mt2-spinal-erection` |
| MC4R agonist raised BP 9.3/6.6 mm Hg in 28 people; MC4R-deficient people less hypertension (24% vs 53%) | `greenfield-2009-mc4r-blood-pressure` (pt-141 group) |
| Bremelanotide: BP up to +6/+3 mm Hg, peak 2–4 h, resolves within 12 h; contraindicated in uncontrolled hypertension or known CVD; nausea 40%; focal hyperpigmentation 1% (≤8 doses/month) and 38% after 8 days daily; slows gastric emptying; lowers oral naltrexone exposure; stop if pregnancy suspected | `dailymed-vyleesi-label` |
| Afamelanotide (Scenesse) EU-authorised 22/12/2014 for EPP, exceptional circumstances; specialist centres only; US 8/10/2019 | `ema-epar-scenesse`, `ema-medicines-json`, `fda-drugsatfda-scenesse` |
| Bremelanotide (Vyleesi) FDA 21/06/2019; no EU product | `fda-drugsatfda-vyleesi`, `ema-medicines-json` |
| Setmelanotide (Imcivree) EU-authorised 16/07/2021 (obesity and hunger in rare genetic and hypothalamic conditions) | `ema-medicines-json` |
| MT-I (afamelanotide) RCT, 65 completers: sunburn cells −>50% and thymine dimers −59% in low-MED volunteers | `barnetson-2006-afamelanotide-photoprotection` |
| Natural tan on light skin = modest protection | `young-2020-pigmentation-sunscreens` |
| UVA-induced tans < SPF 1.5 | `coelho-2015-uva-tan` |
| Sunbed ever use RR 1.20; first use <35 y RR 1.87 | `boniol-2012-sunbed-melanoma` |
| Eruptive naevi review: 179 patients, 41% immunosuppressants/chemo/melanotan, 16% dysplastic, 5 melanomas, risk not estimable | `burian-2019-eruptive-naevi-review` |
| Four melanoma case reports by 2017; conclusive evidence lacking; national warnings | `habbema-2017-melanotan-review` (safety-b) |
| Case reports: eruptive naevi (Cousen 2009), new/darker naevi within 24 h (Schulze 2014), dermoscopy confusion (Mang 2012), melanoma (Paurobally 2011; Ong 2012 in situ; Hjuler 2014; Yassin Alsabbagh 2025 oral, nasal spray; Vadner 2026 five in situ), oral pigmentation (Bonchev 2026), alpha-MSH peptide eruptive naevi in a melanoma survivor (Cardones 2009) | ids in the sources file |
| Priapism case reports (Dreyer 2019; Devlin 2013; Mallory 2021 with surgery and lasting ED) | `dreyer-2019-melanotan-priapism`, `devlin-2013-melanotan-priapism`, `mallory-2021-melanotan-priapism` |
| Sympathomimetic toxicity and rhabdomyolysis (Nelson 2012, Chicago; Eijmael 2022, Gouda) | `nelson-2012-melanotan-rhabdomyolysis`, `eijmael-2022-barbie-drug` |
| PRES case (Kaski 2013); PRES and BP fluctuation (Fugate 2015) | `kaski-2013-melanotan-pres`, `fugate-2015-pres` |
| Renal infarction "most likely attributed to Melanotan II" | `peters-2020-melanotan-renal-infarction` |
| Products: 43–88% of label, 4.1–5.9% impurities (three online shops); Belgian vial 30% pure; insulin in Belgian seizures; Italian police seizures with MT-II and bremelanotide | `breindahl-2015-melanotan-products`, `deville-2024-barbie-drug-identification`, `fagg-melanotan-warning`, `mestria-2021-seized-melanotan-bremelanotide` |
| Forum users: tan before holidays and fitness competitions; sunbeds; polypharmacy | `gilhooley-2021-forum-study` |

## 2. Evidence grade (guide §7) and why

- **human_clinical: phase-2.** Highest completed and published human evidence: two double-blind, placebo-controlled
  crossover efficacy trials in patients with ED (n = 10 each, 1998 and 2000). They are efficacy studies in the target
  population with a placebo control, which is what the rubric calls phase 2, although the papers do not use the
  word and the 1998 abstract does not say the order was randomised (the 2000 paper is tagged RCT in PubMed). The
  At-a-glance tile will read "Some". This is a judgement call at the floor of the category; a reviewer could
  argue for phase-1 because of the tiny size and the absence of any formal development label. Flagged below.
- **preclinical_volume: extensive.** 189 non-review PubMed records with "melanotan II" in title/abstract; 364
  including MTII in melanocortin contexts; 351 of those mention animals or cells (re-run 23 October 2026).
- **independence: broadly-replicated** — for the laboratory pharmacology. The Arizona group wrote 10/189 (5%) and
  45/364 (12%). Independent groups (Merck: Trivedi 2003; Cincinnati: Benoit 2003; Florida: Li 2004, PMID 15225137,
  read but not cited) reproduced the appetite effect; MTII is a standard tool compound. All human trials are from
  the originating group; the rationale says so explicitly so the grade is not read as "the human findings are
  replicated".
- **safety: partial.** 23 trial participants for ≤ 2 weeks, plus case reports and spontaneous reports (MHRA: 13
  reports 2011–2021; 16 reports 2012–2022). No toxicology, carcinogenicity or reproductive study of MT-II found
  (PubMed search below).

## 3. Verification log (22 October 2026)

All downloads went to the session scratchpad; nothing but the hero image was saved in the repository.

- **PubMed** (MCP `get_article_metadata` and E-utilities `esummary`): every scholarly source's authors, title,
  journal, year (issue year), volume, pages, DOI and PMID were copied from the record. PMIDs: 2555512, 7658432,
  8558511, 15996790, 16412534, 7878059, 27303435, 15899821, 16763547, 33022206, 25417821, 22833605, 8990120,
  12834882, 12704398, 12710982, 26184985, 8637402, 9679884, 11018622, 11035391, 19575725, 21564053, 22724573,
  24355990, 24334249, 23052015, 42328529, 40210573, 41752902, 31119650, 23648958, 23537392, 33460908, 31953620,
  35736369, 34464955, 24771717, 39302005. Records without a DOI in PubMed (Wessells 1998, Young 2020, Eijmael
  2022) are registered with PMID only; no DOI was constructed from the PII.
- **Full texts** (Europe PMC `fullTextXML`): Mallory 2021 (PMC7930850) for the 55-year-old, 30 hours, surgery,
  15-week erectile dysfunction and "only 2 case reports" before; Vadner 2026 (PMC13279914) for age, skin type,
  sunbeds, MT-II then MT-I, testosterone, family history, five melanomas in situ in severely dysplastic naevi;
  Bonchev 2026 (PMC12942211) for gum and cheek pigmentation and its course. Peters 2020 and Dreyer 2019 full texts
  were not available through the API; their abstracts are used. The doses in case reports are not repeated.
- **Letters without abstracts** (Cousen 2009, Paurobally 2011, Schulze 2014, Kaski 2013, Devlin 2013): cited only
  for what their titles state, with the PubMed index terms in the source note; `n: null` in the data file where
  the patient count could not be confirmed.
- **PubChem PUG REST**: CID 92432 properties (formula, MW 1024.2, isomeric SMILES) and synonyms (CAS, UNII, the
  "cyclic (2-7)-peptide" name). Bremelanotide CID 9941379 (C50H68N14O10, 1025.2, C(=O)O end) and afamelanotide CID
  16197727 (C78H111N21O19, 13 residues) checked for the comparison. ChEMBL CHEMBL430239: no mechanism record,
  max_phase null; HELM confirms the Asp–Lys side-chain bond.
- **EMA medicines JSON** (2,754 records, timestamp 2026-10-22T18:06:18Z): 0 records for melanotan or
  bremelanotide; Scenesse (afamelanotide) Authorised, MA 22/12/2014, exceptional circumstances, indication
  "Prevention of phototoxicity in adult patients with erythropoietic protoporphyria (EPP)"; Imcivree (setmelanotide)
  Authorised, MA 16/07/2021. **EMA Scenesse EPAR page** fetched: how it works (eumelanin blocks light), "only
  prescribed by specialist doctors in recognised centres", authorised 22/12/2014.
- **CBG `metadata.csv`** (19,553 lines): 0 rows for melanotan; Scenesse (EU/1/14/969) and Imcivree (EU/1/21/1564)
  present.
- **WADA 2026 and 2027 Prohibited List PDFs** re-downloaded (curl with a browser user agent; the first attempt
  returned empty files) and searched with `pdftotext`: no hit for melanotan, melanocortin, bremelanotide,
  afamelanotide or setmelanotide; S0 wording copied. WADA 2027 explanatory note and UKAD 2027 summary: reused
  from legal-b (their notes state that not every prohibited peptide is named).
- **FDA "Certain Bulk Drug Substances … Significant Safety Risks"** page (content current as of 04/22/2026):
  melanotan II is in the table "Bulk drug substances nominated but withdrawn" (previously category 2); risk text
  quoted on the page. **FDA 503A categories PDF** (media/94155, updated 14 May 2026): melanotan II in none of the
  three categories. **FDA PCAC early-announcement page** (content current as of 04/15/2026): meeting before the end
  of February 2027 on LL-37, GHK-Cu, dihexa acetate, melanotan II and PEG-MGF; "Advisory committees make
  non-binding recommendations". **July 23–24, 2026 PCAC meeting page** (content current as of 08/06/2026):
  melanotan II not on either day's agenda.
- **Federal Register API**: one document mentioning melanotan, the 14 November 2016 debarment order (2016-27244);
  text read through the API ("MII, an unapproved new drug, as an injectable tanning product"). The page names the
  person and company; the site does not. No PCAC 2027 notice found (latest PCAC-related documents are committee
  renewals).
- **BfArM** press release 14/10 (28 October 2010) fetched and read in German.
- **FAGG** "Nagemaakte en illegale geneesmiddelen: opgepast!" (news_melanotan; last updated 29/01/2013) fetched
  and read in Dutch: experimental, not authorised, distribution illegal, also sold as MT2, insulin found.
- **MHRA**: FOI 21/1237 (20 December 2021) and FOI 24/274 (17 April 2024) PDFs downloaded from
  assets.publishing.service.gov.uk and read with `pdftotext`.
- **DailyMed Vyleesi label** fetched; sections 4, 5.1, 5.2, 5.3, 7, 8.3, 12.1 read (revision shown on the page:
  3/2024; the registry note from safety-a gives an effective date of 13 November 2025).
- **ClinicalTrials.gov** (MCP): intervention "melanotan OR melanotan II OR melanotan-II OR MT-II" → 1 record,
  NCT07437560. Details read; the record calls itself an "example" and shares sponsor (Hudson Biotech), site
  (Peking University Shenzhen Hospital), contact and all dates with NCT07437547 (BPC-157, hamstring).
- **Counts** (E-utilities `rettype=count`): see `pubmed-melanotan-ii-count-2026-10-22`. An earlier count that
  included `MTII[tiab]` on its own (686) was discarded: MTII also matches metallothionein-II papers. Toxicity search
  `(melanotan terms OR MTII) AND (toxicity OR toxicology OR carcinogenic* OR pregnancy OR gestation OR teratogen*
  OR genotox*)`: 59 hits (re-run 23 October 2026; an earlier note said 57), none a toxicology, carcinogenicity or
  reproductive study of melanotan II (the melanocortin ones are case reports, product analyses, a 2026 review and
  one mouse melanoma-treatment study; the rest are metallothionein or unrelated papers). Dawson 1993 (PMID 8382846) is a gestation study of MT-I, not MT-II.
- **Not reachable from this machine**: tga.gov.au and sportintegrity.gov.au timed out (curl and WebFetch); their
  melanotan pages (TGA safety alert of 17 August 2026 reported in search results; Sport Integrity Australia's
  peptides page) are therefore not cited. hpra.ie and laegemiddelstyrelsen.dk are not on the allowlist.

## 4. Conflicts and how they were resolved

- **"Metabolite" vs "carboxylate derivative".** The brief calls bremelanotide melanotan II's metabolite. No primary
  source verified that it is formed in the body from melanotan II. The page says only what is verified: same ring,
  free acid instead of amide (PubChem; King 2007: "the carboxylate derivative of MT-II").
- **MHRA classification.** 2021: injectables "not automatically medicines" (case by case). 2024: injectables and
  pens "are classified as medicines". The page reports both and treats the 2024 letter as current.
- **Priapism threshold.** The shared warning list (`warning-signs.json`, cardiovascular/priapism) says "more than 3
  hours"; the NHS page cited here says "more than 3 to 4 hours"; Mallory uses the 4-hour definition. The stop list
  on this page follows the NHS wording. Safety editor may want to align the shared list.
  **Resolved 23 October 2026 (site-wide consistency fix):** every page now uses the stricter "more than 3 hours",
  as `warning-signs.json` does: this page's stop strip, risks fold and stop-now list, and the PT-141 risks section
  (which had said "the NHS says … more than 3 to 4 hours"). The NHS page (re-fetched 23 October 2026, last reviewed
  5 December 2023) says to call 999 or go to A&E for "an erection that lasts more than 3 to 4 hours"; "more than
  3 hours" is the conservative end of that range, so `nhs-priapism` still supports it. The pages no longer attribute a
  number to the NHS, so nothing misquotes it. (The NHS gives 1 hour for a painful erection in sickle cell disease;
  no page here addresses that group.)
- **PCAC framing.** Melanotan II was not in the July 2026 review, so the page does not report that vote (it links to
  the US law page instead) and states the general points for the 2027 meeting. If the editor prefers the full
  canonical five-point block on every page that mentions the July meeting, it can be copied from bpc-157.mdx.
- **Hadley 2005** claims effects in women; no trial in women was found in PubMed, so the page says no trial
  included women and uses Hadley 2005 only for the accidental discovery.
- **Tanning protection, both directions.** MC1R signalling can enhance DNA repair (Kadekaro; Wolf Horrell) and
  afamelanotide reduced sunburn cells (Barnetson), but a UVA tan gave < SPF 1.5 (Coelho) and a light-skin tan is
  modest (Young). The page states both and that nothing was measured for melanotan II.

## 5. Open questions for the medical and legal reviewers

1. **human_clinical = phase-2** for two n = 10 crossover efficacy trials (see §2). Confirm or downgrade to phase-1.
2. **WADA**: melanotan II is not named; the S0 reading (same as KPV and retatrutide) is ours plus WADA/UKAD's
   statements that unnamed peptides can be prohibited. No anti-doping body text naming melanotan II was verified
   (the Australian page was unreachable). Legal reviewer to confirm.
3. **Netherlands**: no IGJ, CBG, NVWA or RIVM page on melanotan was found on allowlisted sites (searches in English
   and Dutch). If the reviewer knows a Dutch warning, it should be added to the NL row.
4. **NCT07437560**: the record looks like a template ("example" wording) and is a near-copy of the BPC-157 record
   NCT07437547 cited on the BPC-157 page. The BPC-157 group may want to re-check how much weight that record gets.
5. **Stop-now list**: priapism wording vs the shared list (§4; aligned on "more than 3 hours", 23 October 2026). The PRES sign ("sudden severe headache, a fit or
   blurred sight") is condensed from Fugate 2015 and the NHS headaches page, not from the Kaski letter, whose
   symptoms could not be read.
6. **Interactions** (PDE5 inhibitors, stimulants, oral naltrexone) are theoretical or borrowed from the
   bremelanotide label and say so; reviewer to confirm the framing.

## 6. Validator notes

`npx tsx scripts/validate-content.ts --only melanotan`: 0 errors, 0 warnings. Full run: no error or warning in the
files of this group. A duplicate-id warning for `greenfield-2009-mc4r-blood-pressure` (registered at the same time by
the pt-141 group with identical metadata) was resolved by removing it from this group's file and reusing the pt-141
entry. This page also depends on three other ids from the pt-141 group's uncommitted file
(`pubchem-melanotan-ii`, `king-2007-melanocortin-erection`, `mestria-2021-seized-melanotan-bremelanotide`).

Body length: about 4,200 words of prose in the body (folds open, figures excluded), slightly above the 2,500–4,000
target; visible text with folds closed is about 950 words plus figures. Every section opens with a `<Lead>` and one
figure (Compare, Diagram, KeyNumbers, TimeStrip, Compare, Compare, ProductCheck/stop list).

## 7. Media and visuals

- Hero: `dysplastic-nevus-micrograph` (Commons "Dysplastic nevus - intermed mag", Nephron, CC BY-SA 3.0, H&E stain,
  no text, no person). Caption sources in the registry: Burian 2019, Habbema 2017.
- No explainer reused: `glp1-action` and `insulin-glp1-hypo` do not fit; `contamination-infection` fits the
  injection risk but its `pages` list (explainers.yaml, not owned) does not include this page, so the page links to
  safety/sterile-technique instead.
- Two `<Diagram>` text equivalents were written for designers: `melanotan-ii-receptor-map` (mechanism) and
  `melanotan-ii-mole-question` (risks). The planned explainer `melanocortin-receptors` (EXPLAINERS.md backlog) would
  replace the first; outline in the structured summary.

## 8. Fact-check log (independent fact-check, 23 October 2026)

An earlier fact-check run on 22 October 2026 was interrupted. Before stopping it added `wu-2020-topical-mtii-melanoma`
and `ema-epar-imcivree`, confirmed the FAGG text on the Internet Archive copy and re-ran the PubMed counts. It left
no log. This run re-checked everything from scratch.

### What was checked, and how

- **All 40 PubMed-indexed sources in this group's file**: E-utilities `esummary` and `efetch` (XML and abstracts).
  A script compared authors, title, journal, year, volume, pages, DOI, PMID and PMCID with each record. All match.
  The only differences are page ranges written out in full (2555-2561 for 2555-61) and the record's garbled author
  name for Young 2020 ("Antony R Y"; the affiliation line gives A.R.Y., King's College London). The entry already
  explains the Young name.
- **Reused sources from other groups** (pt-141, safety-a, safety-b, history, bpc-157, legal-b, shared): abstracts for
  Dreyer 2019, Nelson 2012, Cardones 2009, Habbema 2017, Greenfield 2009, King 2007 and Mestria 2021 read against the
  page's wording. The DailyMed Vyleesi SPL (structured label) was fetched and sections 5.1, 5.2, 5.3, 7, 8.1 and 12.1
  checked:
  - BP +6/+3 mm Hg, peaking at 2-4 h.
  - Nausea 40% vs 1%.
  - Focal hyperpigmentation in 1% at up to 8 doses a month and 38% after 8 daily doses, not always resolved.
  - Slower gastric emptying; the naltrexone interaction.
  - "Discontinue if pregnancy is suspected".
  - Receptor order MC1R > MC4R.

  PubChem CID 92432 matches on formula, mass 1024.2, SMILES (identical to the data file), CAS, UNII and ChEMBL id.
  The NHS priapism, moles and headaches pages were fetched.
- **Full texts** (Europe PMC, NCBI BioC):
  - Mallory 2021: 55-year-old; 30 hours; surgery; ED with fibrosis at 15 weeks; earlier uses gave erections of a few
    minutes; "only 2 case reports" before.
  - Vadner 2026: Fitzpatrick II; numerous naevi; paternal grandmother with melanoma; testosterone from an unregulated
    online source; moles "turned black" within about a week; melanoma in situ in severely dysplastic naevi in all 5;
    the authors' remarks on confounding and possibly pre-existing lesions.
  - Bonchev 2026: 42-year-old man; long-term tobacco use; sunbeds; slight gum pigment two years earlier; smoking and
    sunbeds named as confounders.
  - Coelho 2015: 12 subjects (5 women, 7 men).
  - Wu 2020: see change 1 below.
- **Structured studies (24)**: species, n, design, funding, group, blinding and control checked against abstracts,
  PubMed publication types and grant tags, and against full texts where available. Funding codes: `government` =
  U.S. Gov't P.H.S. support only; `mixed` = Non-U.S. Gov't support as well.
- **Regulators and law, all fetched 23 October 2026**:
  - BfArM press release 14/10 (28 October 2010).
  - MHRA FOI 24/274 and FOI 21/1237 PDFs.
  - Federal Register debarment order (API text). A Federal Register search found 1 document mentioning melanotan and
    no 2027 PCAC notice yet.
  - FDA Category 2 page (content current as of 22 April 2026): melanotan II is in the "nominated but withdrawn"
    table.
  - FDA 503A categories PDF (updated 14 May 2026): no melanotan.
  - PCAC early announcement (content current as of 15 April 2026): melanotan II is on the agenda; "non-binding
    recommendations".
  - July 23-24, 2026 PCAC page (content current as of 6 August 2026): melanotan II is not on the agenda.
  - FDA PCAC day-1 slides: compounded drugs are "not reviewed by FDA for safety, efficacy, or manufacturing quality".
  - EMA medicines JSON (2,754 records, timestamp 2026-10-23T06:01:58Z): 0 melanotan, 0 bremelanotide; Scenesse
    authorised 22/12/2014; Imcivree authorised 16/07/2021. EMA Scenesse and Imcivree EPAR pages also fetched.
  - ClinicalTrials.gov API for NCT07437560 and NCT07437547: same sponsor, site, contact, start, primary-completion and
    first-submitted dates; the first calls itself "This example interventional study record".
  - WADA 2026 and 2027 List PDFs: S0 wording confirmed; no melanotan, melanocortin, bremelanotide or afamelanotide.
  - Geneesmiddelenwet art. 1 definition and art. 40(1)-(3); AMG § 21(1); HMR 2012 reg. 46(1).
- **FAGG**: the live page again returned a bot-verification script, which was not bypassed. The text was re-read on
  the Internet Archive copy of 10 July 2026, used only for checking and not linked. It says: experimental, not
  authorised, distribution illegal, also sold as MT2, insulin found in the most recent investigation, last updated
  29/01/2013.
- **PubMed counts** re-run with E-utilities: 189, 10, 364, 45, 351 (animals or cells) and 59 (toxicity search). All
  match the source entry. A search for other human studies (humans[mh], excluding case reports, reviews and letters)
  found no fourth published trial of melanotan II.
- **Hero image**: the Commons API for File:Dysplastic_nevus_-_intermed_mag.jpg gives CC BY-SA 3.0, own work by
  Nephron. It is an H&E micrograph with no person and no product. The alt text matches the picture.
- **Guardrails**:
  - no doses or schedules (doses in case reports are left out);
  - no "safe" or "proven", no superlatives, no seller named, no commerce words in link text;
  - no 112;
  - internal links only to planned routes, and no `# ` heading.

### What was changed

1. **Wu 2020 was overstated.** The page said the mouse tumour slowed "through MC1R". The full text shows the MC1R
   antibody test was done only in cells in a dish.
   - Rewritten in the risks fold and the study finding.
   - The n (12 mice, 6 per group) added in the prose and the data file.
   - Funding corrected from `undisclosed` to `government` (Taiwan's Ministry of Science and Technology and a
     veterans' hospital).
   - Source note updated.
2. **Barnetson 2006**: the >50% fall in sunburn cells was in low-MED volunteers (people who burn easily), not in
   "fair-skinned volunteers" in general. Fixed in two places and in the source note.
3. **Hadley 2006**: the "therapeutic tan" that might lower skin-cancer risk is what the developers wrote about
   melanotan I in 2006. It was not the stated aim of the 1989 work, so the sentence now says who wrote it.
4. **Priapism fold**: "starts erections from the brain and spinal cord" is a rat finding. It now says "In rats" and
   gives the human finding (erections without sexual stimulation) separately.
5. **Mechanism step 4**: the brain MC3/MC4 appetite effect was shown in mice with brain injection. The rat
   intravenous study showed the peptide barely enters the brain. The step is now split, so the rat result is no
   longer described as acting through brain MC3/MC4 receptors.
6. **WADA**: "falls under S0" was stated as fact in three places: the regulatory prose, the comparison table and
   the "who should not use it" fold. No anti-doping body names melanotan II, so all three now say "by our reading".
   This matches the data-file comment and the regulatory note.
7. **Smaller accuracy fixes**:
   - Hjuler 2014: "Danish woman" changed to "woman in Denmark" (nationality not given).
   - Cardones 2009: "injecting" changed to "using" (the abstract says self-administered).
   - Deville 2024: "one submission" changed to "two vials sent to one laboratory".
   - Vyleesi nausea: "large US trials" changed to "large trials behind its US approval".
   - The FDA immunogenicity sentence no longer says peptides clump "during storage". The FDA says "aggregation or
     peptide-related impurities".
   - The label contraindication now says "known heart or blood vessel disease", as the label does ("known
     cardiovascular disease").
8. **Sun-protection fold title**: "Why a melanotan tan is not sun protection" changed to "...cannot be counted as sun
   protection". Its protection has never been measured either way.
9. **Harm reduction (B1 and §1a)**:
   - Long sentences split, and "baseline" replaced.
   - The subheading "Talk to a doctor first" changed to "A doctor can help you keep watch" (the doctor as an ally,
     not a gatekeeper).
   - "pushes the pigment cells" changed to "stimulates".
   - MedlinePlus added as the source for muscle breakdown harming the kidneys.
10. **Federal Register source**: the URL is now the Federal Register's own short link (`/d/2016-27244`), which
    redirects to the full document. The rendered source list therefore does not show the seller's name. The note
    explains the descriptive title.
11. **Glossary**: removed the alias "C-terminal amide" from `amide-end`. It clashed with the tirzepatide group's
    `c-terminal-amide` term.
12. **Hero caption** (src/i18n/en/media.json): the old caption gave two validator warnings (19 words, reading ease
    53). It is now 17 words, with reading ease 62.

### Conflicts found in this check

- **Dreyer 2019 vs Mallory 2021.** Mallory's discussion says the Glasgow patient needed a Winter's shunt. Dreyer's
  own abstract says the patient "avoided requiring surgical shunting" after aspiration, irrigation and phenylephrine.
  The page follows the primary source (Dreyer).

### Left as is, with reasons

- **The July 2026 PCAC vote** is not described on this page, only linked, because melanotan II was not on that
  agenda. The page gives the non-binding, not-an-approval and nothing-changes-in-the-EU points for the planned 2027
  meeting, each with an FDA source.
- **human_clinical: phase-2** stays as the writer's flagged judgement call (open question 1). The evidence is two
  n = 10 double-blind, placebo-controlled crossover efficacy trials in patients. PubMed tags the 2000 trial as an
  RCT but not the 1998 one.
- **Visible length** is below the 1,500-2,000-word aim with folds closed. That is acceptable: nothing is missing,
  and the guide asks for less visible text.
- **Breindahl 2015 funding** stays `undisclosed`: PubMed has no support tags and no free full text was available.
