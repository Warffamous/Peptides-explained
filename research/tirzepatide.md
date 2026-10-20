# Research notes: tirzepatide (Tier 1, authorised-medicine template)

Prepared 20 October 2026 for `compounds/tirzepatide`. Files:
`src/data/compounds/tirzepatide.yaml`, `src/content/compounds/en/tirzepatide.mdx`,
`src/data/sources/tirzepatide.yaml` (49 entries, all cited), `src/i18n/en/glossary/tirzepatide.json` (42 terms),
plus one page photo (`duodenum-villi`: `src/assets/media/duodenum-villi.jpg`, entries added to
`src/data/media.yaml`, `src/data/heroes.yaml`, `src/i18n/en/media.json`).
The interrupted earlier run left a data-only draft (`drafts/compounds/tirzepatide.yaml`); every value in
it was re-checked against its primary record (§2) and the draft was then deleted.

Validator: `npx tsx scripts/validate-content.ts --only tirzepatide` gives **0 errors, 0 warnings**;
`--only duodenum` and `--only media` also give 0/0, and the full run has 0 errors. The MDX body also
compiles with `@mdx-js/mdx`. Body length: about 4,000 words counted with `src/lib/readability.ts`
(outside tags, excluding tables); about 3,700 words of running prose excluding tables, callouts and the
checklist.

---

## 1. Key facts and their sources

### Identity and chemistry
| Fact | Source id |
|---|---|
| PubChem CID 166567236; formula C225H348N48O68; isomeric SMILES (copied from PUG REST, identical to the draft's); synonyms include Mounjaro, Zepbound, CAS 2023788-19-2 | `pubchem-tirzepatide` |
| ChEMBL CHEMBL4297839, max phase 4, first approval 2022, ATC A10BX16, synonym LY3298176 | `chembl-tirzepatide` |
| UNII OYN3CCI6QE (GSRS API, `_name` Tirzepatide, class protein) — stored in the data file only; the GSRS source was dropped because nothing in the prose cites it | — |
| Based on the GIP sequence; Aib at 2 and 13; C-terminal amide; Lys20 attached to 1,20-eicosanedioic acid via a linker; MW 4813.53 Da | `fda-label-mounjaro` (section 11) |
| 39 amino acids; GIPR Ki 0.135 nM (comparable to GIP), GLP-1R Ki 4.23 nM (about 5-fold weaker than GLP-1); minimal glucagon-receptor activity; human t½ about 5 days (116.7 h); 142 people dosed | `coskun-2018-ly3298176` (PMC full text) |
| t½ about 5 days, albumin binding 99%, bioavailability 80%, metabolism by proteolysis, beta-oxidation of the diacid and amide hydrolysis | `ema-epar-mounjaro` (SmPC 5.2) |

**Sequence.** Read from the PubChem IUPAC name (N-terminus outward to Lys20, then the Lys20 substituent
chain read inward from the C-terminal serinamide): Tyr-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Tyr-Ser-Ile-Aib-Leu-
Asp-Lys-Ile-Ala-Gln-**Lys**-Ala-Phe-Val-Gln-Trp-Leu-Ile-Ala-Gly-Gly-Pro-Ser-Ser-Gly-Ala-Pro-Pro-Pro-Ser-NH2.
Aib appears as "2-methylpropanoyl" at positions 2 and 13. The Lys20 side chain in the IUPAC name is
20-oxo-icosanoic acid (C20 diacid) → (1S)-1-carboxy-4-oxobutyl (gamma-Glu) → two
[2-(2-aminoethoxy)ethoxy]acetyl units → Lys ε-NH. This matches the FDA label and Coskun 2018. The draft's
SMILES was compared character for character with the PUG REST SMILES (identical).

**Mass conflict.** FDA label 4813.53 Da; PubChem computed 4813; Coskun 2018 states 4810.52 Da. The data
file uses the label value and records the others in a comment.

**Aib and DPP-4.** No tirzepatide source I read (FDA label, EU SmPC, Coskun, Willard) states why the Aib
residues are there. The page says so, and only notes that semaglutide has Aib at the same position for
DPP-4 resistance (`lau-2015-semaglutide-discovery`, `ema-epar-wegovy`, as registered by the semaglutide group).
The draft's modification label "protects the N-terminus against DPP-4 cleavage" was removed as unsourced.

### Authorisations (checked 20 October 2026)
| Product / event | Jurisdiction | Date | Source |
|---|---|---|---|
| Mounjaro (CHMP opinion 21 Jul 2022) | EU | 15 Sep 2022 | `ema-epar-mounjaro` |
| Weight management (II/0007; opinion 9 Nov 2023) | EU | Commission decision 11 Dec 2023 | `ema-mounjaro-procedural-steps-archive` |
| KwikPen multidose (X/0015) | EU | 19 Apr 2024 | `ema-mounjaro-procedural-steps-archive` |
| OSA data in SmPC, no new indication (II/0027) | EU | opinion 12 Dec 2024, CD 14 Feb 2025; Q&A 13 Dec 2024 | `ema-mounjaro-procedural-steps-archive`, `ema-2024-mounjaro-osa-outcome` |
| Children ≥10 y, T2D (EMA/VR/0000281937) | EU | opinion 11 Dec 2025, CD 22 Jan 2026 | `ema-mounjaro-procedural-steps` |
| HFpEF data in SmPC, no new indication (II/0038) | EU | opinion 29 Jan 2026; Q&A 30 Jan 2026 | `ema-mounjaro-procedural-steps-archive`, `ema-2026-mounjaro-hfpef-outcome` |
| SURPASS-CVOT data in SmPC, no new indication (EMA/VR/0000310637) | EU | outcome 25 Jun 2026; Q&A 26 Jun 2026 | `ema-mounjaro-procedural-steps`, `ema-2026-mounjaro-cvot-outcome` |
| EU product information last updated | EU | 21 Sep 2026 (EPAR page) | `ema-epar-mounjaro` |
| Mounjaro NDA 215866 | US | 13 May 2022 | `fda-drugsatfda-mounjaro` |
| Mounjaro paediatric (S-39) | US | 19 Dec 2025 | `fda-drugsatfda-mounjaro` |
| Mounjaro MACE indication (S-44) and new dosing regimen (S-45) | US | 27 Aug 2026 | `fda-drugsatfda-mounjaro`, `fda-label-mounjaro` |
| Zepbound NDA 217806 | US | 8 Nov 2023 | `fda-drugsatfda-zepbound` |
| Zepbound OSA (S-13) | US | 20 Dec 2024 | `fda-drugsatfda-zepbound` |
| Zepbound label with SURPASS-CVOT data (S-41, revised 08/2026) | US | 26 Aug 2026 | `fda-drugsatfda-zepbound`, `fda-label-zepbound` |

Label versions used: Mounjaro `215866s044s045lbl.pdf` (Revised 08/2026; newer by approval date than
`215866Orig1s052lbl.pdf`, which was approved 22 Apr 2026 for a storage change and shows Revised 04/2026);
Zepbound `217806Orig1s041correctedlbl.pdf` (Revised 08/2026; newer than s050, Revised 04/2026). The
S-052/S-050 approval letter (storage/temperature cycling) was read to confirm this.

### EU product information (read in full with `pdftotext`)
- 4.3 Contraindications: hypersensitivity only.
- 4.4: pancreatitis (not studied after previous pancreatitis; stop if suspected, do not restart if confirmed;
  enzymes alone not predictive); hypoglycaemia with insulin secretagogue or insulin; GI effects → dehydration
  → deterioration of renal function incl. acute renal failure, elderly more susceptible; severe GI disease
  incl. severe gastroparesis not studied; diabetic retinopathy (rapid improvement in glucose control);
  aspiration with general anaesthesia/deep sedation.
- 4.5: delayed gastric emptying, largest at initiation; monitor narrow-therapeutic-index drugs (warfarin,
  digoxin). Oral contraceptive after a single 5 mg dose: ethinyl estradiol Cmax −59%, norelgestromin −55%,
  norgestimate −66% (AUC −20 to −23%); "not considered clinically relevant. No dose adjustment of oral
  contraceptives is required."
- 4.6: contraception recommended; not recommended in pregnancy; stop at least 1 month before a planned
  pregnancy (long half-life); breast-feeding "could be considered" (not used in the prose).
- 4.8: 15,169 adults exposed in 14 completed phase 3 studies; weight trial without T2D: GI 55.6–60.8% vs
  30.3%, nausea 24.6–33.3% vs 9.5%, permanent discontinuation for GI events 1.9–4.4% vs 0.5%; hypoglycaemia
  with SU 10–14%, with basal insulin 14–19%; cholecystitis 0.6% vs 0.2% (pooled weight trials), acute
  gallbladder disease 2.0/0.9/4.4% vs 1.6/0.9/2.7% (weight/OSA/HFpEF), positively associated with weight
  reduction; ADA 45.1–65.1%; heart rate +2 to +6 bpm across programmes; amylase +23–38%, lipase +31–42%;
  acute pancreatitis, cholelithiasis, cholecystitis in the "uncommon" column; anaphylaxis and angioedema rare
  (post-marketing); paediatric hypoglycaemia higher with basal insulin.
- 5.1: mechanism text (GIPR activity similar to native GIP, GLP-1R lower; receptors on pancreatic alpha and
  beta cells, heart, vasculature, immune cells, gut, kidney; GIPR on adipocytes; brain); clamp data;
  gastric-emptying delay diminishes; SURPASS-CVOT (median 4.0 years); SURMOUNT-5 (SmPC figures −21.6% vs
  −15.4%); DEXA substudy (fat mass fell more than lean mass); SURMOUNT-OSA (469); SUMMIT table.
- 5.3: rat 2-year study, C-cell tumours at all doses (0.12–1.02× MRHD by AUC), human relevance unknown;
  rasH2 mice negative; malformations in rats and growth reductions in rats and rabbits at maternally toxic doses.
- Package leaflet (Annex III) wording used for the stop-now callout: pancreatitis "severe pain in the stomach
  and back which does not go away"; allergic reactions; hypoglycaemia signs; dehydration.

### US labels
- Mounjaro (08/2026): indications incl. MACE risk reduction in adults with T2D at high risk; boxed warning
  (rat C-cell tumours); contraindication MTC/MEN 2; 6.2 post-marketing incl. haemorrhagic and necrotising
  pancreatitis sometimes fatal, ileus, acute renal failure; 8.3 oral hormonal contraceptives: switch to
  non-oral or add barrier method for 4 weeks after initiation and after each dose escalation; 12.6 ADA 51%
  (2,570/5,025), more hypersensitivity and injection-site reactions in ADA-positive patients; 14.6
  SURPASS-CVOT table (all randomised and treated, N = 6,647 per arm): MACE 803 (12.1%) vs 863 (13.0%),
  all-cause death 567 (8.5%) vs 670 (10.1%), HR 0.84 (0.75–0.94), "not controlled for family-wise type I
  error rate".
- Zepbound (08/2026): weight reduction and maintenance; OSA; "Coadministration with other
  tirzepatide-containing products or with any GLP-1 receptor agonist is not recommended";
  "Suicidal Behavior and Ideation (Removed) 02/2026"; same contraception advice.

### Netherlands
- FK preparaattekst: Mounjaro Bijlage 2 + aanvullende monitoring; vials and KwikPen listed; NHG-Standaard
  Diabetes mellitus type 2 (2024) advises against tirzepatide without very high CV risk ("nauwelijks
  ervaring", "kosten zeer hoog"); NHG-Standaard Obesitas (2025) "in de eerstelijnszorg ontraden"; obesity
  medicines can be considered in tweedelijnszorg from moderately raised GGR; interactions incl. reports of
  lithium toxicity; stop ≥1 month before planned pregnancy. Source: `fk-tirzepatide`.
- Bijlage 2 item 194 (tirzepatide), conditions copied in the source note. Source: `fk-regeling-zorgverzekering-bijlage-2-tirzepatide`.
- ZIN werkagenda: obesity assessment, getrapte aanpak; dossier complete March 2026; first WAR 5 Oct 2026;
  technical consultation "naar verwachting begin november 2026" (was 12–18 Oct 2026); later steps "nog niet
  bekend". Source: `zin-tirzepatide-obesity-assessment`.
- ZIN news 6 Nov 2025: assessment of Wegovy and Mounjaro to start; 4.1 million people meet EMA criteria;
  costs "in theorie oplopen tot 10 miljard euro per jaar". Source: `zin-2025-obesity-staged-approach`
  (registered by the semaglutide group; content re-read today).
- CBG position statement names Mounjaro among GLP-1 RAs and advises against buying online without a
  prescription. Source: `cbg-glp1-position`.

### Germany, Belgium, UK
- SGB V § 34(1) text re-read today (exclusion of medicines "zur Abmagerung oder zur Zügelung des Appetits,
  zur Regulierung des Körpergewichts"). No BfArM page specific to tirzepatide (shortage, falsification,
  Rote-Hand-Brief) was found in a web search on 20 Oct 2026.
- Belgium: only the EU authorisation and the 1964 medicines law (shared source). FAMHP pages on tirzepatide
  were not found; RIZIV/INAMI reimbursement could not be checked (host not on the allowlist), so the page
  says it is not covered.
- MHRA "GLP-1 medicines … what you need to know" (updated 5 Feb 2026): tirzepatide (Mounjaro) licensed for
  diabetes and weight management; powder-in-vial products not authorised; Mounjaro + oral contraceptive:
  add barrier method for four weeks after starting and after each dose increase, or switch to a non-oral method.
- MHRA Drug Safety Update 24 Feb 2026: falsified Mounjaro KwikPen 15 mg (batch of a genuine 7.5 mg pen),
  faulty dose knob, tirzepatide present but sterility not assured, no harm needing treatment reported.
- MHRA news 15 Oct 2026: >12,000 fake retatrutide and tirzepatide pens seized (`mhra-2026-10-counterfeit-pens`,
  registered by legal-b; content re-read today).

### US compounding and grey market
- FDA compounding page (current as of 1 Apr 2026): tirzepatide shortage declared resolved 2 Oct 2024;
  remanded and re-evaluated, resolved again 19 Dec 2024; 503A grace period ended (court denied PI on
  5 Mar 2025); 503B until 19 Mar 2025. Source: `fda-glp1-compounding-policy`.
- FDA concerns page (current as of 1 Oct 2026): "more than 730 reports of adverse events associated with
  compounded tirzepatide" as of 31 May 2026; fraudulent compounded tirzepatide labels; doses beyond the label;
  warnings to companies selling tirzepatide "for research purposes"/"not for human consumption"; 28-day
  multi-dose-vial advice. Source: `fda-unapproved-glp1-concerns`.
- 503B exclusion proposal (press release 30 Apr 2026; FR 2026-08552; comment extension to 30 Jul 2026,
  FR 2026-12937). Federal Register API search for "tirzepatide" from 1 Jan 2026 returned only those two
  notices and an unrelated product-specific-guidance notice → no final determination as of 20 Oct 2026.
- PCAC July 2026: the FDA meeting page lists BPC-157, KPV, TB-500, MOTS-c, emideltide, Semax and epitalon
  substances; tirzepatide is not among them, so the canonical PCAC framing is not needed on this page beyond
  one sentence stating it was not considered.

### WADA
- 2026 and 2027 Prohibited Lists (PDFs downloaded, full-text grep): no "tirzepatide", "GLP-1" or "glucagon".
  2027 List "shall come into effect on 1 January 2027". S0 does not apply to an approved medicine.
- Monitoring Program: 2025 item 6 "Semaglutide" only; 2026 item 6 "Markers of Semaglutide and Tirzepatide",
  in and out of competition; 2027 item 6 "GLP-1 Agonists — In and Out-of-Competition: Semaglutide and
  tirzepatide". So `status: not-listed` is verified, and "added in 2026" is supported.

---

## 2. Verification log

- **Scholarly sources (29).** Metadata for every PMID came from NCBI E-utilities esummary (authors, title,
  journal, volume, pages, DOI, PMCID) and efetch abstracts; all matched the draft. New since the draft:
  `horn-2026-surmount-maintain` (PMID 42119587) and `loomba-2024-synergy-nash` (PMID 38856224). Every DOI
  (29 checked) returned HTTP 200 from the DOI handle API. All trial numbers on the page and in the study
  findings come from the PubMed abstracts, the EU SmPC or the US label.
- **Full texts read:** Coskun 2018 (PubMed MCP full text: structure, Ki, half-life, n = 142, "GIP is secreted
  from K cells in the upper small intestine"); Willard 2020 (BioC + Europe PMC: imbalance, bias,
  hypothesis-generating occupancy; NIH/ADA funding of academic co-authors); Borner 2021 (Europe PMC: NIDDK
  grants plus an investigator-initiated sponsored agreement from Lilly); Zhang 2021 (Helmholtz/Humboldt
  funding; Novo Nordisk and Boehringer co-authors); Rodriguez 2024 (Truveta authors; no funding statement found).
- **Funding fields.** Lilly trials: abstract "Funded/Supported by Eli Lilly" → `industry`, `originating`.
  Killion 2018/2020: Amgen → `industry`, `independent`. Samms 2021: all authors Lilly employees.
  Willard, Borner, Zhang: `mixed` (as above). Rodriguez, McCall: `undisclosed`.
- **Regulator/label pages** fetched with curl on 20 Oct 2026 and read as text: EMA EPAR page, EU product
  information PDF, both procedural-steps PDFs, three EMA outcome Q&As, PRAC highlights April and July 2024,
  Drugs@FDA overview pages for NDA 215866 and 217806, four FDA label PDFs and two approval letters, FDA
  compounding and concerns pages, FDA 503B press release, FDA PCAC meeting page, Federal Register API,
  FK preparaattekst and Regeling zorgverzekering page, ZIN werkagenda page and 2025 news item, CBG position
  statement, SGB V § 34, three MHRA GOV.UK pages, WADA 2025/2026/2027 Monitoring Program PDFs and 2026/2027
  List PDFs. Every one is on the link allowlist.
- **PRAC suicidality review (April 2024)** covered dulaglutide, exenatide, liraglutide, lixisenatide and
  semaglutide; Mounjaro was not among the products. The page says this explicitly instead of implying the
  conclusion covers tirzepatide. The July 2024 aspiration review does name tirzepatide.
- **PubMed counts** (E-utilities esearch, 20 Oct 2026): `tirzepatide[tiab] AND randomized controlled trial[pt]`
  134; the same `NOT lilly[ad]` 13; rodent terms `NOT review[pt]` 2018–2026: 147 (134 without Lilly
  affiliation); cohort/observational `NOT review NOT lilly[ad]`: 262; all `tirzepatide[tiab]`: 2,644.
  Registered as `pubmed-tirzepatide-rct-count-2026-10-20`. These are crude: affiliation fields are incomplete.
- **Page photo.** `File:Duodenal biopsy, low mag.jpg` (CoRus13, CC BY-SA 4.0, own work, normal duodenal
  mucosa, H&E) fetched with `npm run media:commons`; no person identifiable; focal 45% 42% checked on the
  thumbnail. Caption source: `coskun-2018-ly3298176` (K cells in the upper small intestine release GIP).

### Changes from the interrupted draft
- Dropped sources not cited: `gsrs-tirzepatide`; `wada-2027-prohibited-list` (same URL as the existing
  `wada-2027-list-en`, reused instead).
- Kept `wada-2027-monitoring-program` (also named as reused by `legal-b.yaml`).
- Structured studies: removed `heise-2023-energy-intake` (same 117 participants as Heise 2022; still cited in
  prose); added `surmount-maintain`. 23 structured studies (6 cell/animal, 15 trials, 1 cohort, 1 post-marketing).
- Regulatory WADA row now cites the 2026 and 2027 List PDFs (`wada-2026-list-en`, `wada-2027-list-en`).
- BE row now also cites `be-medicines-law-1964`.
- Modification labels: removed the unsourced DPP-4 claim for Aib2.

---

## 3. Conflicts between sources and how they were resolved

1. **SURMOUNT-5 effect size.** NEJM abstract: −20.2% vs −13.7%. EU SmPC 5.1: −21.6% vs −15.4% (difference
   −6.2%). The SmPC does not state the estimand; the difference is most likely the efficacy estimand versus
   the treatment-regimen estimand. The page reports the published paper's figures only.
2. **SUMMIT cardiovascular deaths.** NEJM: 8 (2.2%) vs 5 (1.4%), HR 1.58. EU SmPC table 14: 10 (2.7%) vs 5
   (1.4%), HR 1.99 (0.68–5.81). Both are given on the page; the reason for the difference is not stated in
   either source (possibly later adjudication or a different data cut) — open question below.
3. **SURPASS-CVOT counts.** NEJM (modified ITT, 6,586 vs 6,579): 801 (12.2%) vs 862 (13.1%). US label (all
   randomised and treated, 6,647 per arm): 803 (12.1%) vs 863 (13.0%). The page uses the NEJM figures for the
   primary outcome and the US label for all-cause death (8.5% vs 10.1%, not multiplicity-controlled).
4. **Oral contraceptives.** EU SmPC: reduction "not considered clinically relevant", no change needed. US
   labels and MHRA: barrier method or non-oral method for 4 weeks after starting and after each dose increase.
   The page reports both and, in harm reduction, tells readers to ask their prescriber and names the UK/US advice.
5. **CVOT interpretation.** SURPASS-CVOT met non-inferiority only (superiority p = 0.09). The EU SmPC says
   this "demonstrated the benefit of cardiovascular risk reduction" (through dulaglutide's proven benefit);
   the EMA Q&A "acknowledged" risk reduction; the FDA added a MACE indication. The page reports the trial
   result as "not worse, not shown better" and then the regulators' inference, labelled as an inference.
6. **Molecular mass**: see §1.
7. **Heise 2022 design.** The paper calls it a "phase 1 clinical trial"; it is a 28-week randomised,
   double-blind mechanistic trial. Coded `design: rct` (as the semaglutide page codes Friedrichsen 2021).

---

## 4. Decisions and notes for the editors

- **Evidence grade.** `human_clinical: authorised` (schema-required for EU-authorised). `preclinical_volume:
  extensive` (147 > 50). `independence: broadly-replicated`: the RCT base is almost entirely Lilly's (13/134
  RCT records without a Lilly author), but the core effects are reproduced in independent cohorts and many
  independent laboratory groups (134/147 rodent records without Lilly affiliation). This is a judgement call;
  `few-groups` would be defensible if the reviewer weighs RCTs only. `safety: well-characterised` (large
  trials, a 4-year outcome trial, post-marketing since 2022).
- **Explainers not reused.** `glp1-action` and `insulin-glp1-hypo` both name semaglutide in their titles and
  captions ("How semaglutide works in the body"), so placing them on this page would mislabel the medicine.
  A `<Diagram id="tirzepatide-two-receptors">` with a full text equivalent is used instead; a new
  `incretin-multi-agonism` explainer is proposed (backlog item in docs/EXPLAINERS.md), and generalising the
  `insulin-glp1-hypo` captions to "GLP-1 medicines" would let it be reused here.
- **WarningSigns.** `<WarningSigns only="general,injection,allergic,metabolic" />`. `src/i18n/en/warning-signs.json`
  did not exist when this page was written, so the rendered list could not be checked.
- **MHRA Drug Safety Update** names the online pharmacy involved in its body text (not in its title or URL).
  The page cites it but never names the pharmacy. Flagged for the editor in case the semaglutide precedent
  (IGJ page removed because URL, title and body named the seller) should apply.
- **Validator false positives:** none; no guardrail warnings were raised. "Highest tolerated dose" is used
  descriptively for SURMOUNT-5 and is not a superlative comparison between compounds.

---

## 5. Open questions for the named medical/legal reviewer

1. Oral contraceptives: is "ask your prescriber about a barrier method; the UK and US regulators advise one
   for four weeks" the right advice for Dutch readers when the EU SmPC says no change is needed?
2. SUMMIT: why does the EU SmPC count 10 cardiovascular deaths on tirzepatide when the NEJM paper counts 8?
3. Should the page mention the EU SmPC change that breast-feeding "could be considered"? (Left out; FK
   advises weighing the risk.)
4. Independence grade: `broadly-replicated` or `few-groups`?
5. Germany: the G-BA Arzneimittel-Richtlinie (Anlage II, lifestyle medicines) could not be checked
   (g-ba.de is not on the allowlist); the page states only the § 34 SGB V exclusion and does not say whether
   type 2 diabetes use is covered.
6. Belgium: reimbursement (RIZIV/INAMI) not verified; host not on the allowlist.
7. Lithium: the only source is the FK interaction note (reports of lithium toxicity with GIP/GLP-1 agonists);
   is a stronger primary source (Lareb or a case series) wanted?
8. The page says "we found no study in people that separates the two receptors' contributions". A reviewer
   with domain knowledge should confirm there is no human mechanistic study (e.g. with a GIP receptor
   antagonist) that does so.

---

## 6. Fact-check log (independent fact-checker, 20 October 2026)

Scope: `src/data/compounds/tirzepatide.yaml`, `src/content/compounds/en/tirzepatide.mdx`,
`src/data/sources/tirzepatide.yaml`, `src/i18n/en/glossary/tirzepatide.json`, this file, and
`drafts/compounds/tirzepatide.yaml` (confirmed deleted from the worktree; its HEAD version was compared with
the data file: same identifiers, sequence, grades, regulatory rows and studies, apart from the changes listed
in §2). Also the page photo entries in the shared media files.

### What was checked, and how
- **All 29 scholarly sources** re-fetched from NCBI E-utilities (esummary + efetch abstracts) by PMID:
  authors, title, journal, year, volume, pages/e-locator, DOI and PMCID all match the registry. No wrong or
  fabricated DOI found. Full texts read where a claim needed more than the abstract: Coskun 2018 (PMC; 142
  people = 56 SAD + 33 MAD + 53 POC, Ki values, ~5-fold, minimal glucagon-receptor activity, t½ 116.7 h, K
  cells, "trial design did not enable discerning the contribution of GIP versus GLP-1"), Willard 2020 (Europe
  PMC; mouse islets, NIH/ADA funding, occupancy "mainly for generating hypotheses"), Zhang 2021 (Europe PMC;
  the co-agonist was MAR709, not tirzepatide; Helmholtz/DFG/ERC funding plus Novo Nordisk co-authors),
  Borner 2021 (Europe PMC; NIDDK + SNF grants and a Lilly investigator-initiated agreement), Rodriguez 2024
  (Europe PMC; no funding statement, "obtained funding: Stucky" of Truveta), SURMOUNT-OSA (PMC; 469 = 234 +
  235, type 2 diabetes excluded, 7-day PAP suspension in trial 2).
- **Reused sources** (knudsen-2010, neeland-2024, he-2022, lau-2015) re-read in PubMed for the specific claim.
- **All 23 structured studies**: species, n, design, funding, group, blinded and controlled checked against
  the abstracts/full texts above. No field changed.
- **Regulator and law pages fetched with curl on 20 Oct 2026**: EMA EPAR page and EU product information PDF
  (pdftotext), both procedural-steps PDFs, the three EMA outcome Q&As, PRAC April and July 2024 highlights,
  Drugs@FDA overviews (NDA 215866, 217806), both US label PDFs, FDA compounding-policy and concerns pages,
  FDA 503B press release, Federal Register API (no final 503B notice after FR 2026-12937), FDA PCAC July 2026
  page (agenda does not include tirzepatide), FK preparaattekst, FK Regeling zorgverzekering (item 194), ZIN
  werkagenda and 6 Nov 2025 news, CBG position, SGB V § 34, MHRA GLP-1 guidance, MHRA DSU 24 Feb 2026, MHRA
  news 15 Oct 2026, WADA 2025/2026/2027 Monitoring Programs and 2026/2027 Lists (PDFs; tirzepatide not on
  either List; Monitoring Program item 6 in 2026 and 2027, not in 2025).
- **Identifiers**: PubChem CID 166567236 (formula, SMILES identical to the data file, CAS synonym), ChEMBL
  CHEMBL4297839 (max phase 4, first approval 2022, A10BX16, LY3298176), GSRS UNII OYN3CCI6QE.
- **PubMed counts** re-run (134 / 13 RCT records; 147 / 134 rodent records): reproduced exactly.
- **Page photo**: Commons API confirms CC BY-SA 4.0, own work by CoRus13, "normal mucosa, H&E"; no person;
  alt text matches the image.

### What was changed
Claims and wording (MDX):
1. Mechanism step 1: "one injection a week keeps a steady level" → "which is why it is injected once a week".
2. Mechanism step 3 and body: "in mouse islets this bias was linked to / went with more insulin release" was
   stronger than Willard 2020 ("suggesting"); now "suggests ... may help insulin release", wrapped in
   `<Claim level="animal">`. "call their estimates hypothesis-generating" → the paper's own wording.
3. Mechanism step 6: "the early slowing explains much of the nausea" (overstatement; the risks section gives
   two proposed mechanisms) → "is one proposed cause of the nausea".
4. "Staying in the blood": the causal chain implied clearance by kidney filtration; the EU SmPC says
   tirzepatide is eliminated by metabolism (no intact drug in urine). Rewritten: albumin binding prolongs the
   half-life; the drug is removed mainly by being broken down.
5. Coskun study finding: "142 people dosed in a 4-week phase 1 study" was inaccurate (142 received
   tirzepatide, dulaglutide or placebo; part of the study was single doses). Corrected.
6. Zhang study finding: added that mice lacking brain GIP receptors were also protected from diet-induced
   weight gain (the paradox the page discusses) and that the co-agonist was not tirzepatide.
7. SURPASS-PEDS limitation: "low blood sugar was more frequent than in adults when added to insulin" is not
   what the SmPC says; it reports more vomiting, abdominal pain and hypoglycaemia than adults "when added to
   metformin alone". Corrected.
8. Semaglutide Aib sentence: Lau 2015 and the Wegovy SmPC do not say in so many words that Aib was "put
   there to resist DPP-4"; rewritten to what the two sources state.
9. Maridebart cafraglutide result now carries `<Claim level="human-controlled">`; the GIP section intro
   no longer calls all results "animal" (one is a human trial).
10. Diagram: the EU SmPC lists both receptors on gut, immune cells, heart, vessels and kidney, and GIP
    receptors also on fat cells; the GIP row had omitted gut. Fixed both rows.
11. SURPASS-CVOT: "Reading this result through dulaglutide's earlier benefit, the EMA accepted…" attributed a
    line of reasoning the EMA Q&A does not state. Now: the regulators went further than the trial's own
    conclusion; that conclusion leans on dulaglutide's earlier benefit (page's inference, labelled).
12. US approvals sentence: "Zepbound for weight and sleep apnoea (approved 8 November 2023)" implied OSA was
    approved in 2023; OSA was added on 20 December 2024. "sold" → "marketed".
13. Netherlands: the NHG reasons ("little experience, very high costs") belong to the diabetes advice only;
    the FK hospital-care sentence names liraglutide, naltrexone/bupropion and semaglutide, not tirzepatide.
    Bijlage 2 conditions made precise (metformin + sulfonylurea or metformin + basal insulin; or very high
    CV risk with SGLT2i + metformin).
14. Netherlands costs (fairness): the 4.1 million / €10 billion figures come from the 2024 Wegovy assessment
    and are explicitly theoretical; the same ZIN source gives a practical estimate of €1.3 billion a year and
    "ruim 1 miljoen" people in the two groups now assessed. Both added, with the Wegovy context.
15. Risks: "intestinal blockage (ileus)" conflated two listed events; now ileus and bowel obstruction
    separately, attributed to the US label's post-approval list (not "in the US"). Haemorrhagic/necrotising
    pancreatitis likewise attributed to the US label rather than "reported in the US".
16. Gallbladder: "these events were linked to the amount of weight lost" was applied to the HFpEF figure too;
    the SmPC states it for the weight-management trials only. Fixed. Added that gallstones and cholecystitis
    are uncommon (SmPC table), which the summary item ("gallstones") needed for support.
17. Pancreatic enzymes: "roughly 25% to 40% ... in people without pancreatitis" → the SmPC range 23% to 42%;
    the "without pancreatitis" qualifier was not in the source.
18. Mood (balance): added the MHRA conclusion that the data do not support a causal link between GLP-1
    medicines and depression or suicidal thoughts.
19. Anti-drug antibodies: "about half" → "between about half and two-thirds" (EU 45.1–65.1%, US 51%);
    "hypersensitivity" → allergic and injection-site reactions (US label 12.6).
20. Unknowns, "How to stop": rewritten (the old wording said no trial had "tested coming off entirely", but
    SURMOUNT-4 and -MAINTAIN did, with regain).
21. Interactions: "Other GLP-1 medicines: do not combine" was stronger than the cited US label ("not
    recommended"); fixed and split the citations. Contraception advice now gives both options the MHRA and
    US labels give (barrier method or a non-pill method).
22. FDA concerns page: "likely an undercount" → the FDA's own wording; "doses higher or raised faster than
    the label allows" now describes the reports accurately.
23. Guardrails: removed mg amounts from frontmatter strings (where `<Q>` cannot be used) in the mechanism
    detail, Heise and SURPASS-2 findings and the UK regulatory note; body pen strengths now in `<Q>`.
24. B1 rewrites in harm reduction (prescriber sentence, contraceptive pill, interactions).

Glossary: `ileus` redefined (the bowel stops moving; not a mechanical blockage) and its alias "intestinal
blockage" removed; `gs-protein` lost the aliases "G protein(s)" (Gs is one kind of G protein);
`acute-kidney-injury` lost the alias "kidney failure", which would have auto-linked chronic kidney failure on
the semaglutide page (FLOW) to the acute-injury definition.

Shared media file: `src/i18n/en/media.json` caption for `duodenum-villi`: "Cells here release GIP" → "Some
cells here release GIP" (K cells are a minority of the lining).

### Not changed, flagged
- `mhra-2026-falsified-mounjaro` names the pharmacy in its body text (not in its URL or title, and lists no
  web domain). It is a regulator warning about a falsified medicine, and the page never names the pharmacy,
  so it was kept. Editor to confirm against the IGJ precedent.
- Independence grade `broadly-replicated` vs `few-groups` (see §4); left for the reviewer.
- SURMOUNT-1 prediabetes (1,032) is a subgroup of SURMOUNT-1 and is listed as a separate structured study,
  while Heise 2023 was removed for the same reason. Kept because it reports a separate pre-specified 3-year
  outcome; the StudyTable counts studies, not participants. Reviewer may prefer consistency.
- `rodriguez` and `mccall` funding kept as `undisclosed` (no funding statement in the abstract or full text).
- Validator: `--only tirzepatide`, `--only duodenum`, `--only media`: 0 errors, 0 warnings. Full run: 0
  errors (21 warnings, none in these files). MDX body compiles with `@mdx-js/mdx`.

## Editor decision, 20 October 2026

- mhra-2026-falsified-mounjaro is kept. It is an official MHRA safety communication on gov.uk; the seller is named only in its body text (not in the URL or title), and this page never names the seller. The IGJ source dropped from semaglutide was a different case. Rule going forward: a regulator warning that mentions a seller may be cited; our own text, link text and URLs never name or point to a seller.
