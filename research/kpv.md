# KPV: research notes

Page: `src/content/compounds/en/kpv.mdx`. Data: `src/data/compounds/kpv.yaml` (not edited). Sources: `src/data/sources/kpv.yaml` plus shared ids (not edited; no new source registered). Glossary: `src/i18n/en/glossary/kpv.json` (not edited). Page photo: `compounds/kpv: lab-mouse` in `src/data/heroes.yaml` (already registered, CC BY-SA 2.0 FR, alt text and caption in `src/i18n/en/media.json`; no change needed).

There was no `research/kpv.md` in the repository before this pass, although `kpv.yaml` refers to one. This file starts with the facts and checks behind the page, then records the restructure of 21 October 2026.

## 1. Key facts and their sources

| Fact | Source id(s) |
|---|---|
| Lys-Pro-Val, free ends (H-…-OH), C16H30N4O4, 342.43 Da; CAS 67727-97-3 used for free base and acetate | `kpv-pubchem`, `fda-pcac-2026-kpv-briefing` |
| KPV = residues 11–13 of alpha-MSH | `cody-1984-c-terminal-tripeptide`, `fda-pcac-2026-kpv-briefing` |
| Keeps the anti-inflammatory action of alpha-MSH, not the pigment action | `brzoska-2008-review`, `brzoska-2010-terminal-signal`, `luger-2007-review` |
| No INN, no USAN; free base and acetate evaluated as two bulk drug substances; not well characterised | `fda-pcac-2026-kpv-briefing` |
| Promoted as injectable, oral, topical and nasal-spray products, also in blends with BPC-157 and TB-500 | `fda-pcac-2026-kpv-briefing` (section II.B.3) |
| Does not bind MC1R or raise cAMP; MC receptors unlikely targets; true target unknown | `mandrika-2001-nfkb-no`, `getting-2003-dissection`, `kannengiesser-2008-colitis`, `fda-pcac-2026-kpv-briefing` |
| PepT1 uptake; nanomolar KPV blocks NF-κB and MAP kinase in human gut cells and T cells; oral KPV reduced DSS and TNBS colitis in mice | `dalmasso-2008-pept1` |
| KPV blocks nuclear import of p65 in bronchial cells | `land-2012-bronchial` |
| Packed in targeted nanoparticles, a 12,000-fold lower concentration had similar efficacy | `laroui-2010-nanoparticles` |
| In PepT1-knockout mice, KPV did not protect against colitis-associated tumours | `viennois-2016-cac` |
| Independent colitis replication (Münster), including MC1R-defective mice | `kannengiesser-2008-colitis` |
| Rabbit corneas: all KPV- or nitroprusside-treated corneas closed by 60 h, none on placebo; L-NAME blocked the effect | `bonfiglio-2006-cornea` |
| Plain KPV did not measurably cross human cadaver skin | `pawar-2017-iontophoresis` |
| No human study by any route, no case reports; FAERS and HFCS searched to 3 December 2025, no reports; no PK, toxicology, genotoxicity, reproductive or carcinogenicity studies; immunogenicity and aggregation never assessed | `fda-pcac-2026-kpv-briefing` |
| FDA staff recommended not listing; PCAC (23 July 2026) recommended KPV; vote 8–6–1 as reported from the public meeting; no minutes | `fda-pcac-2026-kpv-briefing`, `fda-pcac-2026-briefing-intro`, `fda-pcac-2026-07-meeting`, `fda-pcac-2026-questions` |
| 503A compounding is for an identified patient on a valid prescription | `usc-21-353a` |
| Not named on the WADA list, prohibited under S0; 2027 List adds "peptides" to S0 examples | `wada-2026-list-en`, `wada-2027-list-en` |

## 2. Verification log (21 October 2026)

All downloads went into the session scratchpad; nothing was saved in the repository.

- **FDA KPV briefing** (`fda-pcac-2026-kpv-briefing`, media/193346): re-downloaded (HTTP 200, 2.15 MB) and converted with `pdftotext`. Text-searched for every statement used in the new figures, stop strip and fact sheet: solid-phase synthesis; "KPV is a common name and not a United States Adopted Name"; naming outside INN, IUPAC and USAN; promoted "as injectable, oral, topical and nasal spray"; "MC receptors are unlikely to be the molecular targets"; "the molecular targets … remain unknown"; no PK or toxicokinetic studies; no genotoxicity, reproductive or carcinogenicity studies; FAERS to 3 December 2025 and HFCS to 3 December 2025, no reports; no human exposure data by any route; immunogenicity concerns "also relevant to peptides (such as KPV)"; "Peptides with as few as two amino acids have been shown to aggregate"; aggregates, impurities and "microbiological tests … were not found"; the acetate CoA has "no testing results … on aggregates and microbiological testing levels".
- **What the briefing does not say** (see section 4): it never uses the word "endotoxin"; it does not frame the immunogenicity risk as "injected or sprayed"; it does not state that no country has approved KPV (it reports no EMA product and no European or Japanese Pharmacopoeia monograph, after searching databases that include GlobalEdge.com).
- **FDA PCAC meeting page** (`fda-pcac-2026-07-meeting`): fetched; still "Content current as of: 08/06/2026"; seven briefing documents, questions, agenda, roster and day-1 presentations; **no minutes, vote results or transcript**. The vote counts stay "as reported from the public meeting".
- **FDA Category 2 page** (`fda-category-2-safety-risks`): fetched; the KPV entry says FDA has not identified any human exposure data and lacks information on whether it would cause harm.
- **21 U.S.C. § 353a** (`usc-21-353a`, Cornell LII): fetched; the text includes "identified individual patient based on the receipt of a valid prescription order". Used for "on prescription", which no cited FDA page states.
- **EMA medicines JSON** (`ema-medicines-json`): re-downloaded (2,754 records, timestamp 2026-10-21T06:02:10Z). 0 hits for kpv, lys-pro-val, lysyl-prolyl-valine, lysine-proline-valine, msh(11-13).
- **CBG** `metadata.csv` (`cbg-geneesmiddeleninformatiebank`): re-downloaded (19,553 lines). 0 hits for the same terms.
- **ClinicalTrials.gov** (MCP search, today): 0 records for intervention "KPV OR Lys-Pro-Val OR lysine-proline-valine OR alpha-MSH(11-13)", and 0 for the free-text query "KPV".
- **PubMed records** (MCP `get_article_metadata`), for every study used in a new figure: PMIDs 18061177 (Dalmasso 2008), 19909746 (Laroui 2010), 27458604 (Viennois 2016), 28143741 (Xiao 2017), 18092346 (Kannengiesser 2008), 16965771 (Bonfiglio 2006). Titles, journals, years, DOIs and author lists match `kpv.yaml`. Merlin D is the last author of Dalmasso, Laroui, Viennois and Xiao (Emory University or Georgia State University, Atlanta); Kannengiesser is from the University of Münster. That is the basis of the "4 of 5" key number.
- **Viennois 2016 full text** (PMC4957955) read for the knockout result: KPV-treated PepT1-KO mice showed no significant change in tumour number, size, burden or body weight, with a non-significant trend to a lower tumour burden; the authors conclude KPV "acts at least in part through PepT1".
- **Dalmasso 2008**: PMC full text is not downloadable as XML (publisher restriction); the abstract does not report knockout mice.

## 3. Restructure into the "less text, more visuals" layout (21 October 2026)

Model: `semaglutide.mdx` and the restructured `bpc-157.mdx`; CONTENT-GUIDE §5.2 and §9.1. This was a restructure, not a rewrite: the existing text moved into `<InDetail>` folds, and each section now opens with a `<Lead>` and one figure built from facts and sources already on the page.

### 3.1 What changed, section by section

| Section | Lead (question → answer) | The one figure | Open prose kept | Folds |
|---|---|---|---|---|
| what-it-is | What is KPV? → three amino acids, the tail of a hormone, approved nowhere | `<Compare>`, 6 rows: made in a lab, part of a hormone, colour effect, official name, one substance, approved | "promoted online …" paragraph (was "Why people have heard of it") | the molecule and its origin; natural ≠ harmless and naming |
| mechanism | How does it work? → turns down NF-κB in cells and mice; first target unknown | `<Compare>` "In cells or animals" vs "In people", one row per chain step, levels as in the `mechanism` frontmatter | the two-sentence intro (promising, and the missing first link) | `<Mechanism />` and four step explanations; the weak joints |
| evidence | Does it work? → unknown in people; calms inflammation in cells and mice | 3 `<KeyNumber>`: 0 human studies (FDA); 4 of 5 mouse gut studies from one lab (animal); 12,000× (Laroui, animal) | "It would be wrong to dismiss this biology …" and "Promising cell and mouse data are a reason to run a good trial …" (both directions stay open) | study table and evidence map; cell and animal studies; studies in people; reviewers' case and counterpoint |
| unknowns | What is still not known? | `<Compare>` "Studied?": 6 open questions | none | all nine open questions |
| regulatory | Is it legal? → approved nowhere, banned in sport, US vote only advice | `<Compare>` "Netherlands and the EU" vs "United States", 5 rows, all five PCAC elements visible | none | status table and WADA; EU, NL (legal callout), DE, BE, UK; US and the vote point by point |
| risks | What are the risks? → unknown in people; products and immune reactions the main worries | `<Compare>` "Shown in people?": 5 possible harms, all "Unknown", each with its basis | the sport sentence | reported in people; product and immune reactions; "small and natural"; mechanism-based risk and other gaps |
| harm-reduction | How can someone lower the risk? | the new stop callout (`id="stop-now"`) and `<WarningSigns only="general,injection,allergic" />`, never folded | the no-advice intro; "Talk to a doctor first" | product unknowns; checks (checklist); who should not use it, interactions |

**Frontmatter.** Added `lede` (18 words), `glance.stop_signs` (3) and `glance.facts` (4). `glance.main_risk`, `title`, `description` and `mechanism`/`studies` text are unchanged. Summary items 3 and 5 were shortened to clear the 18-word warning (22 and 23 words before): item 3 drops "mainly by turning down a switch called NF-κB" (the mechanism lead now carries it); item 5 now uses the BPC-157 page's wording of the US vote.

**The stop callout is new.** The page had no stop-now list of its own, only `<WarningSigns />` at the end of the section, and `glance.stop_signs` requires a stop callout with `id="stop-now"`. The callout condenses content already on the page: checklist item 1 (heat, redness, swelling or pain at the site), the product-risk paragraph (non-sterile product, infection, fever) and the immune-reaction paragraph (allergic reactions), plus the canonical warning signs "fever-after-injection" and "anaphylaxis". It cites the FDA briefing (no microbiological tests found; immunogenicity concern). It ends with "If it is severe, call your local emergency number." (no 112 anywhere on the page). `<WarningSigns />` moved up to sit directly after it, outside any fold, as on the BPC-157 and semaglutide pages.

**Stop strip.** (1) "Hot, red, swollen or painful injection site", (2) "Fever or chills after you inject it", (3) "Swollen face or throat, or trouble breathing". Infection and contamination come first because the product is the page's main risk; the allergic reaction is the most plausible harm of the molecule itself. Signs 1 and 2 share `sign-infection`, whose definition in `pictograms.ts` is "infected injection site or fever". "Shivering" became "chills" because the validator scored "Fever or shivering after an injection" at reading ease 32.

**Fact sheet.** Made of (`kpv-pubchem`); comes from (`cody-1984-…`, FDA); forms promoted online, worded as in the FDA briefing ("injection, by mouth, on the skin, nasal spray"); main gut research (the four Merlin-group papers). Testing in people, class and EU status are not repeated, because the layout adds them from the data file.

### 3.2 Corrections made while restructuring (each against a primary source)

1. **Wrong link.** "[TB-500](/en/compounds/bpc-157/)" pointed at the BPC-157 page. Now "[BPC-157](/en/compounds/bpc-157/) and [TB-500](/en/compounds/tb-500/)".
2. **"or for microbial and endotoxin contamination" became "or for microbial contamination".** The KPV briefing names microbiological tests but never endotoxin (whole-text search; the BPC-157 briefing does name endotoxin, which is probably where the word came from).
3. **"The FDA concluded that, as an injected or sprayed peptide, KPV could carry a risk of immunogenicity … and that this has never been studied" became "The FDA concluded that KPV could carry a risk of immunogenicity, raised further by aggregation and impurities, and found no study that assessed it."** The briefing does not tie the risk to injection or spraying (it evaluates a topical cream or gel), and it says the nominators did not provide, and FDA did not identify, any study. The unknowns bullet lost "for an injected or sprayed peptide" for the same reason, and so did the `grade_rationale.safety` line ("immune reactions to an injected peptide" became "immune reactions").
4. **`regulatory_notes.EU`: "no application in EMA records" became "no record in EMA's medicines data".** The EMA JSON lists EPARs (authorised, refused, withdrawn, suspended), not applications under evaluation. This is the same correction the BPC-157 fact-check made (research/bpc-157.md §10.3 item 9).
5. **Added citations to an uncited sentence.** The PCAC element-5 bullet ("would only let US pharmacies compound KPV on prescription …") now cites `usc-21-353a` and `fda-pcac-2026-presentations-day1`.

### 3.3 Nothing lost: the check against git HEAD

A script in the session scratchpad (not committed) compares `git show HEAD:src/content/compounds/en/kpv.mdx` with the working copy:

- `<Cite>` tags: 61 → 96, **0 lost**; every cite id is used at least as often as before. New ids: `usc-21-353a`, `fda-pcac-2026-presentations-day1` (both registered and verified, see section 2).
- `<Claim>` (level and exact text): 12 → 12, **0 lost, 0 changed**. `<Q>` 2 → 2, `<Seq>` 1 → 1, `<Term>` 7 → 7. Data components all present (`Mechanism`, `StudyTable`, `RegulatoryTable`, `Diagram`, `Checklist`, `WarningSigns`, legal callout), plus the new stop callout. Table rows: all 7 of HEAD's kept.
- Body sentences: 183 in HEAD (after removing structural lines). **179 are present verbatim.** The 4 others are the deliberate changes of section 3.2 (items 1–3: the link sentence, the endotoxin sentence, the two immunogenicity sentences).
- Frontmatter: `slug`, `title`, `description`, `mechanism`, `studies`, `indications` identical; `grade_rationale` and `regulatory_notes` differ only by items 3 and 4 of section 3.2; summary items 3 and 5 as described.
- `###` headings removed: they became fold titles, or the stop callout's place ("Why people have heard of it" is now open prose without a heading; the risk section's "Sport" heading went because its sentence is now open, so the sentence is not duplicated).

### 3.4 Visible words (the formula in `src/pages/[locale]/compounds/[slug].astro`)

| | Before (HEAD, no folds) | After |
|---|---|---|
| Visible with folds closed (includes the fixed 150 At-a-glance and evidence-card words) | 5,097 | **1,763** |
| Whole page, everything open | 5,097 | 6,383 (+1,286: the new figures, leads, fold titles, stop callout, strip and fact sheet) |
| Visible body words per section (after; figures and leads included) | | what-it-is 242, mechanism 229, evidence 198, unknowns 135, regulatory 260, risks 181, harm-reduction 194 |
| Open running prose per section (outside leads, figures, headings and the stop callout) | | 75, 45, 58, 0, 0, 23, 101 |

The rendered `<WarningSigns />` list comes from i18n and is in neither count. Harm-reduction is about 20 words over the ~80-word budget: the "no amounts, schedules or sources" framing and the doctor paragraph both stay open, as on BPC-157. The regulatory figure is long because CONTENT-GUIDE §1 requires all five PCAC elements wherever the vote is mentioned.

### 3.5 Validator and rendering

- `npx tsx scripts/validate-content.ts --only kpv`: **0 errors, 4 warnings**, all present in HEAD and all false positives:
  - "safe", line ~37: "says nothing about whether an injected product is safe" (it denies the claim);
  - "safe", line ~306: "Three points are often used to argue KPV must be safe … None of them holds up." (it refutes the claim);
  - "superlative", line ~89: "the strongest animal evidence is for the gut" (within one compound, not a comparison between compounds);
  - "superlative", line ~129: "The cell evidence is KPV's strongest suit" (same).
- Whole repository: 0 errors, 26 warnings (the 22 others are in other groups' files).
- The dev server (`localhost:4321/en/compounds/kpv/`) renders the page (HTTP 200): 7 leads, 22 folds (19 on the page plus the layout's technical, grade-reasons and sources folds), 5 comparison figures, 3 key numbers, the stop strip with all three signs, `id="stop-now"`, the fact sheet and the new TB-500 link. "112" appears only inside a DOI (10.1124/jpet…).
- Plain language: lede reading ease 76; every lead, figure title, key-number label and stop sign passes the validator. Figure row questions were reworded where my own Flesch check scored them low ("Did ill or injured animals get better faster?", "Has it been tested for harm in animals?").

## 4. Conflicts between sources, and how they were resolved

- **Endotoxin.** Page (HEAD) vs FDA KPV briefing: the briefing only speaks of microbiological tests. Followed the briefing (section 3.2 item 2).
- **"Injected or sprayed" immunogenicity.** Page (HEAD) vs briefing: not in the briefing. Followed the briefing (item 3).
- **PepT1 knockout.** Page Claim (HEAD, kept verbatim): "In mice bred without PepT1, KPV lost its effect on colitis and on colitis-driven tumours … strong evidence that, in that system, PepT1 is needed." Viennois 2016 full text: in knockout mice KPV did not significantly change tumours or body weight (a non-significant trend remained), and the authors say KPV acts "at least in part" through PepT1; colitis itself was not scored separately in knockout mice given KPV, and the Dalmasso abstract reports no knockout mice. My new figure cell says only what Viennois shows ("no longer clearly reduced bowel tumours"). **The Claim text is left for the reviewer** (open question 1), because claims are kept word for word in a restructure.

## 5. Open questions for the medical reviewer (and the next fact-check)

1. The PepT1-knockout Claim and the matching `mechanism` and `studies.viennois-2016-cac` texts ("KPV stops working", "it did nothing, confirming that KPV needs PepT1") may overstate Viennois 2016 (section 4). Suggested wording: "In mice bred without PepT1, KPV no longer clearly reduced colitis-driven tumours, which suggests PepT1 is needed for much of its effect in that model."
2. "No country has authorised a medicine containing KPV" (body, summary item 2 and the At a glance tile from `category`). The FDA briefing reports no EMA product and no pharmacopoeia monograph; it does not state "no country". EMA and CBG searches today found nothing, but other countries were not searched. Keep it, or narrow it to "the EU, the UK or the US"?
3. "as a cream, a capsule, an injection and a nasal spray": the FDA says injectable, oral, topical and nasal spray. "Capsule" is more specific than "oral". The fact sheet uses the FDA's terms.
4. Unknowns bullet: "products sold as KPV, which carry no verified impurity, sterility or identity testing". The nominator's acetate CoA did report identification, assay and related substances (impurities), but not aggregates or microbiological tests; for the free base there was no CoA. "Verified" carries the sentence, but it may need narrowing to "no published sterility or aggregation testing".
5. "An injected product that is not sterile can cause infection; bacterial endotoxin survives sterilisation and can cause fever and shock." This sentence has no `<Cite>`. It is general microbiology, but it should cite a registered source (for example from the safety-a group's sterile-technique sources) once one that says this is verified.
6. Grade rationale: "roughly 40 to 50 primary cell and animal studies" and "over 35 years" have no source id, so they could not become key numbers. A dated PubMed-count dataset source (like `pubmed-bpc157-count-2026-10-20`) would let the evidence section show the count.
7. "The FDA searched … in 2026": the searches ran to 3 December 2025 and the evaluation is dated 12 May 2026. Wording is acceptable but could say "in its 2026 review".

## 6. For other owners

- **Glossary (owner of `src/i18n/en/glossary/kpv.json`):** no entry exists for *macrophage*, *solid-phase peptide synthesis*, *pharmacokinetics* or *monograph*, all used on this page (macrophage and solid-phase synthesis now also in visible figures). *Interleukin*, *TNF* and *cytokine* exist.
- **Explainer proposal** (`kpv-pept1-nfkb`, for `compounds/kpv`; anatomy and cell schematic, no mirror; mostly long dashes, last step short dashes):
  1. KPV is the last three amino acids of the hormone alpha-MSH. It does not fit that hormone's receptors (in-vitro).
  2. A doorway protein in the gut lining, PepT1, carries it into gut and immune cells. Inflamed colon has more PepT1 (in-vitro; animal).
  3. Inside the cell it stops the inflammation switch NF-κB from reaching the cell's control centre, the nucleus (in-vitro).
  4. The cell makes fewer inflammation signals (in-vitro).
  5. In mice with an inflamed gut, the gut recovered faster. Mice without PepT1 got much less benefit (animal).
  6. In people: never tested (hypothesis, hatched "Not known").
  Sources: `dalmasso-2008-pept1`, `land-2012-bronchial`, `mandrika-2001-nfkb-no`, `viennois-2016-cac`, `kannengiesser-2008-colitis`, `fda-pcac-2026-kpv-briefing`.
- **Stop-strip pictograms:** two of the three signs share `sign-infection`. A separate fever pictogram (a thermometer) would let infection at the site and fever look different.
- **Evidence map** (`<Diagram id="kpv-evidence-map">`, unchanged): its text equivalent is a five-row table (cells, animal anti-inflammation, animal gut disease, cadaver skin, living humans) with amount, producer and limitation per row; the design pass could draw it as the dot-grid evidence map of DESIGN-DIRECTIONS §3.2.

---

## 7. Fact-check log (independent pass, 21 October 2026)

An adversarial fact-check of `src/content/compounds/en/kpv.mdx` and this file. Everything below was
looked up again from the primary record (PubMed MCP, PubChem PUG REST, the FDA PDFs, the statutes, the
WADA PDFs, the EMA and CBG downloads); nothing was taken from the writer's notes or from memory. Both
files were edited; `src/data/compounds/kpv.yaml`, the sources file and the glossary were not (not
owned in this assignment), so issues found there are listed in 7.7 for their owners.

### 7.1 Sources: every entry in `src/data/sources/kpv.yaml` re-verified

**Scholarly (19), checked with `get_article_metadata` on the PMID.** Authors, title, journal, year,
volume, pages, DOI and PMID match the PubMed record for every one: cody-1984-c-terminal-tripeptide
(6332195), hiltz-1989-cooh-fragment (2550304, no DOI in the record, which the note states),
mandrika-2001-nfkb-no (11239505), getting-2003-dissection (12750433), land-2012-bronchial (22837805,
no DOI, PMC3403564), bonfiglio-2006-cornea (16965771), pawar-2017-iontophoresis (28343991),
sung-2025-keratinocyte (40073467), dalmasso-2008-pept1 (18061177), kannengiesser-2008-colitis
(18092346), laroui-2010-nanoparticles (19909746), viennois-2016-cac (27458604),
xiao-2017-nanoparticles (28143741), luger-2007-review (17934097), brzoska-2008-review (18612139),
brzoska-2010-terminal-signal (21222263), bohm-2019-wound-review (30661264),
gravina-2023-melanocortin-ibd (37508552) and coutinho-2026-doping-review (41880199, DOI
10.23736/S0022-4707.26.17773-1, J Sports Med Phys Fitness 66:880-885 - after the model's training
data, so looked up rather than recalled). **No wrong or fabricated identifier was found.** Page ranges
in the file are the expanded forms of PubMed's abbreviations ("613-621" for "613-21"); Kannengiesser's
"Boehm M" is PubMed's "Bohm M" with the diacritic restored. Both are acceptable.

**Databases, regulators and law.** `kpv-pubchem`: PUG REST for CID 125672 returns C16H30N4O4,
MW 342.43, the same isomeric SMILES as the data file, CAS 67727-97-3 and the synonyms claimed, and an
IUPAC name ending in "butanoic acid" (the free acid, as the note says). `fda-pcac-2026-kpv-briefing`:
re-downloaded (HTTP 200, 2.15 MB), converted to text and searched statement by statement (7.2).
`fda-pcac-2026-07-meeting`, `fda-pcac-2026-questions` (media/193711), `fda-pcac-2026-briefing-intro`
(media/193342), `fda-category-2-safety-risks`, `usc-21-353a`, `uk-hmr-2012-reg-46`, `de-amg-21`,
`nl-geneesmiddelenwet`, `wada-2026-list-en`, `wada-2027-list-en`, `ema-medicines-json`,
`cbg-geneesmiddeleninformatiebank` and `fda-1993-lyophilization-guide`: all fetched today, all contain
what they are cited for (7.3, 7.4). `be-medicines-law-1964` could not be fetched today
(ejustice.just.fgov.be refused the connection); the claim it carries is limited to the wording in its
source note, which the BPC-157 pass verified on 20 October 2026.

### 7.2 Where the page did not match the primary record

Verified word for word in the FDA KPV briefing (evaluation dated 5/12/2026, meeting 23-24 July 2026):
no USP/NF monograph and not a component of an approved drug; "KPV is a common name and not a United
States Adopted Name"; the four-step solid-phase synthesis; the same CAS for both forms, MW 342.43 and
402.5, UNII "Not available" for both; promoted "as injectable, oral, topical and nasal spray" and in
multi-API products with BPC-157, TB-500, AOD-9604 and Follistatin-344; promoted for inflammatory bowel
disease, colitis and Crohn's, mast cell activation syndrome, histamine intolerance, gut health, wounds
and skin health; European Pharmacopoeia 11.8 and Japanese Pharmacopoeia 18 have no monograph and EMA
lists no authorised KPV product; "MC receptors are unlikely to be the molecular targets" and "the
molecular targets ... remain unknown"; no pharmacokinetic or toxicokinetic, acute, repeat-dose,
genotoxicity, developmental and reproductive or carcinogenicity studies; FAERS searched to 3 December
2025 and HFCS from 1/1/2004 to 12/3/2025, no reports; "Compounders under section 503A ... generally do
not report adverse events"; immunogenicity concerns "also relevant to peptides (such as KPV ...)",
consequences that "may range from antibody responses with no apparent clinical manifestations to
life-threatening and catastrophic reactions", "Peptides with as few as two amino acids have been shown
to aggregate", and "insufficient data to conclude that KPV ... do not present these risks"; Pawar 2017
used "human cadaver skin" (so "cadaver" is the FDA's own word, not an embellishment); and "we propose
not adding KPV (free base) or KPV acetate to the 503A Bulks List".

Four mismatches were found and fixed:

1. **"No country has authorised a medicine containing KPV"** (body) was cited to the FDA briefing,
   which never says it. Unlike the BPC-157 and TB-500 briefings, the KPV briefing names no country at
   all (searched for Canada, Australia, United Kingdom, Germany, Ireland, France, Norway, Spain,
   Italy: none appears). The body sentence now reads "No medicine containing KPV is authorised in the
   EU, the Netherlands or the US" with the three sources that show it; summary item 2 was narrowed the
   same way; and the regulatory fold now opens with what was actually checked (EMA data, the Dutch
   register, and the FDA's pharmacopoeia and EMA searches), says plainly that the German, Belgian and
   UK registers were not searched, and gives the reason the page still answers "approved nowhere": no
   study of KPV in people has ever been published, and no regulator authorises a medicine without
   clinical data. The bare "No KPV product holds either/one/is authorised" assertions under Germany,
   Belgium and the United Kingdom were narrowed to what the EMA data actually shows. (Writer's open
   question 2, resolved.)
2. **The PepT1-knockout claim.** HEAD said "In mice bred without PepT1, KPV lost its effect on colitis
   and on colitis-driven tumours ... strong evidence that PepT1 is needed". The Viennois 2016 full text
   (PMC4957955, read today) says that in PepT1-KO mice "tumor numbers, sizes, tumor burdens, and mouse
   body weights ... were not changed significantly", that "Despite the statistical nonsignificance, a
   trend for a decreased tumor burden index was seen", and that the authors conclude "KPV acts at least
   in part through PepT1" and that "KPV also might be transported by other peptide transporters";
   colitis in knockout mice given KPV is not scored, and Dalmasso 2008 used no knockout mice. The
   `<Claim>`, the `mechanism` step and `studies.viennois-2016-cac` now say exactly that, and note that
   the colitis answer in those mice was not reported. (Writer's open question 1, resolved.)
3. **The cytokine list.** "less TNF-alpha, interleukin-1beta, interleukin-6 and interleukin-8" was
   cited to Dalmasso, Mandrika and Land. None of the three reports IL-6; Land uses TNF-alpha as the
   stimulus, not the readout; and Getting 2003 in fact found macrophage IL-1beta release *not*
   inhibited by KPV. The claim now names what each cited study measured (IL-8 and eotaxin in airway
   cells, IL-1beta in skin cells, nitric oxide in macrophages, cytokine output in gut and T cells) and
   adds sung-2025-keratinocyte; TNF-alpha is now attributed to the mouse work, where Xiao 2017 reports
   it. The mechanism figure row lost "Less TNF-alpha" for the same reason.
4. **Impurity and sterility testing.** "no verified impurity, sterility or identity testing" and "no
   reliable testing for impurities, for peptide aggregation, or for microbial contamination" overstate
   the briefing: the nominator's acetate certificate did report identification, amino acid composition,
   assay, related substances, water content and acetate content, and lacked only aggregates and
   microbiological testing; for the free base there was no certificate in the nomination, and the ones
   the FDA found elsewhere "only contain purity testing result". Both passages now say that. (Writer's
   open question 4, resolved.)

Six further corrections of overstatement or attribution:

5. **"It has no International Non-proprietary Name"** - the briefing says only that KPV is not a USAN,
   and that naming which does not follow INN, IUPAC or USAN standards is a safety risk. Reworded to
   that, both in the fold and in the figure row.
6. **Hiltz and Lipton 1989.** "injected into the belly" is not in the record (the abstract gives no
   route); removed. Added the fact that the FDA counts this study as being of an **N-acetylated** form
   of KPV rather than the free peptide and set it aside - a material limitation that was missing from
   the page. "Fever" was dropped from the list of animal effects: the abstract attributes antipyretic
   activity to alpha-MSH, not to a KPV experiment.
7. **Bonfiglio 2006.** "L-NAME prevented the effect" is the paper's wording for the nitroprusside arm;
   for KPV, L-NAME "inhibited" the effect. Softened in both places.
8. **Sung 2025.** "one of the authors works for a cosmetic-ingredient company" cannot be verified from
   the paper; the declared affiliation is a company research institute. Reworded, and "aimed at
   cosmetics, not a treatment" replaced with the authors' own framing (a cosmetic or skin-protective
   ingredient).
9. **Immunogenicity consequences.** The page said "antibodies with no symptoms to allergic reactions";
   the FDA says "life-threatening and catastrophic reactions", often unpredictable. The page now
   matches the source - a correction that makes the page less reassuring, not more.
10. **Grade rationale.** `independence` said the NF-kappaB finding had been reported "over 35 years";
    that work starts with Mandrika 2001. Split into "reported since 1989" (the anti-inflammatory action
    of the fragment) and "since 2001" (the NF-kappaB mechanism). `human_clinical` now says "in its 2026
    review" rather than "in 2026", because the searches ran to 3 December 2025 (writer's question 7).

### 7.3 The PCAC vote: all five canonical elements re-checked

The FDA meeting page was fetched again today: fourteen event materials, **no minutes, no transcript
and no vote results**, still "Content current as of: 08/06/2026". The questions document
(media/193711) puts **two** voting questions for KPV, one for the free base and one for the acetate
salt. The introduction (media/193342) lists the seven peptide groups and states "FDA is proposing that
KPV (free base) NOT be included on the 503A Bulks List". So: the date (23 July 2026) holds; seven
peptides considered holds; advisory, non-binding and against staff advice holds; compounding remains
prohibited pending rulemaking holds (21 U.S.C. 353a: the list is "developed by the Secretary through
regulations"); and "not an approval" holds. The 8-6-1 count and the six-of-seven outcome remain
**unconfirmed by any FDA document**; the page says so, and the fold bullet that previously asserted
the six-of-seven outcome flatly now carries the "as reported from the meeting" hedge, as the BPC-157
page does. Added from the briefing: the single nomination was later withdrawn and the FDA evaluated
both forms on its own initiative, and the KPV vote was put as two questions.

### 7.4 Law, registers and sport (all fetched 21 October 2026)

- **21 U.S.C. 353a** (Cornell LII): "compounded for an identified individual patient based on the
  receipt of a valid prescription order"; bulk substances must have a USP/NF monograph, be components
  of approved drugs, or "appear on a list developed by the Secretary through regulations". Supports
  "on prescription" and "through rulemaking"; now also cited on the figure row that says US pharmacies
  may not legally compound it yet.
- **Human Medicines Regulations 2012, reg. 46(1)**: "A person may not sell or supply, or offer to sell
  or supply, an unauthorised medicinal product", subject to Part 10 and a clinical-trial exception.
  Quoted more exactly on the page.
- **AMG section 21(1)**: finished medicinal products may be placed on the market only if authorised by
  the competent federal higher authority or by the EU under Regulation 726/2004. Matches the page.
- **Geneesmiddelenwet** (version in force since 09-09-2025): art. 1(1)(b) definition; art. 40(1) no
  placing on the market without a handelsvergunning; art. 40(2) "in voorraad te hebben, te koop aan te
  bieden, te verkopen, af te leveren, ter hand te stellen, in te voeren"; art. 40(3)(a) the
  small-scale pharmacy-preparation exception. Matches the page.
- **WADA**: the 2026 List's S0 text matches the page's quotation word for word; the 2027 List (in
  force 1 January 2027) adds "peptides" to the S0 parenthetical. KPV, Lys-Pro-Val and "melanocyte"
  appear **nowhere** in either List, so "not named on the List but prohibited under S0" is right.
- **EMA medicines JSON** re-downloaded today: 2,754 records, timestamp 2026-10-21T06:02:10Z, 0 hits
  for kpv, lys-pro-val, lysyl-prolyl, lysine-proline, msh(11 or melanocyte. **CBG metadata.csv**
  re-downloaded: 19,553 lines, 0 hits (semaglutide returns 33, so the search works).
  **ClinicalTrials.gov** (API v2 through the MCP tool): 0 trials for KPV, Lys-Pro-Val,
  lysine-proline-valine or alpha-MSH(11-13).
- **FDA Category 2 page** (current as of 22 April 2026): KPV sits in the table "Bulk drug substances
  nominated but withdrawn", introduced as "bulk drug substances previously in category 2 of the
  interim policies [that] were withdrawn by the nominators", with the stated reasons "FDA has not
  identified any human exposure data ... lacks important information regarding any safety issues
  raised by KPV, including whether it would cause harm if administered to humans". The page's sentence
  is accurate.

### 7.5 Unsourced claims given a source, and claims left as the site's own reasoning

- The stop strip and the stop callout cited only the FDA briefing, which never mentions injection-site
  infection, fever or anaphylaxis. Each sign now also cites the NHS condition page that describes it
  (`nhs-cellulitis`, `nhs-sepsis`, `nhs-anaphylaxis`, all already registered in `safety-a.yaml`), with
  the briefing kept for the testing gap that creates the risk. The stop-now wording itself is
  unchanged, and it stays outside every fold.
- "bacterial endotoxin survives sterilisation and can cause fever and shock" was uncited (writer's
  question 5). Replaced with two sourced sentences: infection from a non-sterile product
  (`nhs-cellulitis`, `nhs-sepsis`), and, from the FDA lyophilisation inspection guide, that microbial
  growth before filtration raises endotoxin ("The concern with any microbiological level is the
  possible increase in endotoxins that may develop") and that bioburden testing "does not provide any
  information regarding the potential formation or presence of endotoxins". The
  `<Term id="endotoxin">` link is kept, and the glossary entry carries "fever or shock".
- "most immediate harm from these products comes from infection and contamination, not from the
  molecule" was an unsourced ranking; replaced with "injecting carries a risk of infection whatever is
  in the vial, and that risk you can lower" (`nhs-cellulitis`,
  `cdc-2024-safe-injection-practices`).
- Citations added to: the promotion sentence and the "approved treatments exist" sentence in
  harm-reduction, the pregnancy bullet, the anti-doping bullet and the US rulemaking sentence.
- Left deliberately as the site's own reasoning, flagged as such and not as findings: the
  chronic-immune-damping risk, the tripeptide-breakdown paragraph (with "within minutes" softened to
  "quickly", since no source gives a figure), "allergic reactions are the most mechanistically
  plausible harm", and "KPV has a clearer proposed mechanism than many experimental peptides". The
  last is a cross-compound comparison; it is immediately qualified ("but the chain has never been
  shown in a person") and makes no claim of benefit.
- The evidence map's "Who produced it" row for animal anti-inflammation named the "Munster group",
  whose KPV work is in fact the colitis study in the row below; corrected to the Lipton group in
  Dallas and the London and Catania groups, which are the studies the page cites.

### 7.6 Balance check (the opposite failure)

The promising side is still stated plainly and is accurate: a coherent mechanism reproduced by
unrelated cell groups, consistent benefit in rodent colitis, an independent replication from Munster,
the tumour result that points the opposite way to the usual "growth peptide" fear, and reviewers'
reasonable call for a trial. Two balancing facts were **added** from the primary sources rather than
removed: the non-significant trend in the knockout mice (which favours KPV), and the negative APC-Min
result in the same paper (KPV cut gut inflammation but did not reduce tumours in a genetic,
non-inflammatory model), which marks the honest limit of the tumour finding. Nothing scaremongering
was found; the only move in the harsher direction was matching the FDA's own "life-threatening"
wording on immunogenicity. No dosing guidance, protocol, stack, cycle, sourcing hint, testimonial or
commerce word appears anywhere on the page; the only quantities are the molecular mass and the
12,000-fold delivery comparison, both inside `<Q>`.

### 7.7 Still open, for the named reviewer and for other owners

1. **`src/data/compounds/kpv.yaml` (not owned here): `funding` looks too pessimistic on six studies.**
   PubMed's support tags are: Hiltz 1989 "Research Support, U.S. Gov't, P.H.S." and "Non-U.S. Gov't";
   Mandrika 2001, Getting 2003, Bonfiglio 2006 and Kannengiesser 2008 "Research Support, Non-U.S.
   Gov't"; Pawar 2017 "Research Support, U.S. Gov't, Non-P.H.S." - yet all six are coded
   `funding: undisclosed`. On the guide's vocabulary they are `government` (or `mixed`). Land 2012 has
   no support tag, so `undisclosed` is right there. Conversely `sung-2025-keratinocyte` is coded
   `industry` and `xiao-2017-nanoparticles` `mixed` on the strength of affiliations alone (no funding
   statement in the record), and `viennois-2016-cac` is coded `government` with no support tag in the
   record. The study table shows these values, so an editor should re-derive them from the papers'
   own funding statements.
2. `bonfiglio-2006-cornea` has `n: null`. The abstract gives "eight out of eight (100%) corneas
   treated with KPV or SP", that is corneas, pooled across two treatments, with the number of rabbits
   not stated. Left as null, and the "8 of 8" figure deliberately not used as a `<KeyNumber>`.
3. The vote counts (7.3) stay provisional until the FDA posts minutes. Re-check then whether the
   free-base and acetate votes differed.
4. Glossary gaps stand (macrophage, solid-phase peptide synthesis, pharmacokinetics, monograph), and
   this pass put one more term in visible text: **eotaxin** (a chemokine released by airway cells).
   The glossary file is owned elsewhere.
5. `kpv-gsrs-unii` is registered but cited nowhere on the page. Either cite it where the UNII and the
   naming problem are discussed, or drop it (the sources file is not owned here).
6. The page is dated "checked on 20 October 2026" throughout, matching `last_reviewed` in the data
   file. This fact-check re-ran the EMA, CBG, ClinicalTrials.gov, FDA meeting-page and FDA briefing
   checks on **21 October 2026** with identical results, so the dates were left alone rather than
   split across two days.
7. Page photo re-checked: `compounds/kpv: lab-mouse` resolves to the Wikimedia Commons file
   `File:Lab_mouse_mg_3263.jpg`, whose file page shows CC BY-SA 2.0 France (dual-licensed with
   CeCILL), author Rama, own work, described as "Laboratory mouse" and categorised under human hands
   holding mammals - which matches the registered alt text. An allowed licence, no product, no vial,
   no needle, no identifiable person.

### 7.8 Validation after the fact-check

`npx tsx scripts/validate-content.ts --only kpv`: **0 errors, 4 warnings** - the same four as before,
all false positives ("safe" inside a denial and inside a refutation; "strongest" used within this one
compound, not as a comparison between compounds). Whole repository: 0 errors. The page renders HTTP
200 on the dev server with 23 folds, three key numbers, the five comparison figures, the stop strip,
the `id="stop-now"` callout and 41 numbered sources; "112" appears only inside the DOI
10.1124/jpet.103.051623, and "call your local emergency number" is used throughout. Visible words with
the folds closed are about 1,500, inside the 1,500-2,000 target band; with everything open, about
4,850.

## Funding codes, 21 October 2026

Checked against PubMed publication-type and grant tags (efetch, 21 October 2026):
- hiltz-1989: 'Research Support, U.S. Gov't, P.H.S.' (NINDS) plus non-US-government support -> funding: mixed (was undisclosed).
- pawar-2017: 'Research Support, U.S. Gov't, Non-P.H.S.' -> funding: government (was undisclosed).
- mandrika-2001, getting-2003, bonfiglio-2006, kannengiesser-2008: tagged 'Research Support, Non-U.S. Gov't' only. That tag covers charities, foundations and companies, so the kind of funder is not known without the acknowledgements; left as undisclosed for now. Open for the reviewer: read the acknowledgements and recode (academic / government / industry / mixed).
- sung-2025: no support tag; first author's affiliation is a company research institute (T&L Co., Ltd.); competing interests declared none; coded industry (unchanged).
