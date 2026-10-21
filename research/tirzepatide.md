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

---

## 7. Restructure into the "less text, more visuals" layout (21 October 2026)

Files changed: `src/content/compounds/en/tirzepatide.mdx` and this section. Model: `semaglutide.mdx`
(the authorised-medicine template) and the restructured `bpc-157.mdx`, `kpv.mdx` and `tb-500.mdx`;
CONTENT-GUIDE §5.2 and §9.1. This is a restructure, not a rewrite: the existing text moved into
`<InDetail>` folds, and each section now opens with a `<Lead>` and one figure built from facts and
sources already on the page. The data file, sources file, glossary and the shared media files were
not touched; the hero (`compounds/tirzepatide: duodenum-villi`) already existed with alt text and a
caption. No new source was registered.

### 7.1 What changed, section by section

| Section | Lead (question → answer) | The one figure | Open prose (outside the figure) | Folds |
|---|---|---|---|---|
| what-it-is | What is tirzepatide? → a prescription medicine that copies two gut hormones; online vials are a different product | `<Compare>` authorised (Mounjaro, Zepbound) vs outside the legal supply chain, 5 rows (the HEAD table, now with verdicts and cites) | the "Why this page looks different" note | the authorised products and their approval dates (with `<AuthorisedProducts />`); the molecule and where it came from; pens, vials and why "tirzepatide" is not one thing |
| mechanism | What does it do in the body? → acts on two gut-hormone receptors; more insulin when sugar is high, less hunger | the existing `<Diagram id="tirzepatide-two-receptors">` (unchanged) | the two-sentence intro | step by step (`<Mechanism />` and "What each step rests on"); the open GIP question with the `uncertain` callout |
| evidence | Does it work? → yes for blood sugar and weight, in large trials; much of the weight returns after stopping | 4 `<KeyNumber>`: SURMOUNT-1 15.0–20.9% (established); SURPASS-1 HbA1c 1.87–2.07 points lower (established); SURPASS-CVOT 12.2 vs 13.1 in 100, "not more often than" dulaglutide (human-controlled); SURMOUNT-4 14.0% regained vs a further 5.5% lost (human-controlled) | "Who paid for the evidence" (open, so the funding caveat sits next to the numbers) | study table; type 2 diabetes and the heart trial; weight, stopping and the comparison with semaglutide; sleep apnoea, heart failure and the liver |
| unknowns | What is still not known? → many years of use, how to stop, muscle, thyroid, pregnancy | `<TimeStrip>` years of use: SURPASS-CVOT median about 4 years, SURMOUNT-1 prediabetes 176 weeks, longer use "Not known" | none | all seven open questions |
| regulatory | Is it legal? → yes on prescription in the EU, UK and US; Dutch basic insurance pays only for some diabetes use | `<TimeStrip>` of five authorisations (EU 15 Sep 2022, 11 Dec 2023, 22 Jan 2026; US 13 May 2022, 8 Nov 2023), checked 20 October 2026 | none | status table and WADA; EU and the Netherlands; Germany, Belgium, UK, US |
| risks | What are the risks? → many feel sick at first; gallbladder and pancreas problems are rarer | 3 `<KeyNumber>` from the EU SmPC weight trial: stomach or gut problems 55.6–60.8% vs 30.3%; nausea 24.6–33.3% vs 9.5%; stopped 1.9–4.4% vs 0.5% | the source sentence and the low-blood-sugar paragraph (the risk a reader can act on) | stomach and gut details; gallbladder and pancreas; thyroid tumours in rats; anaesthesia and tablets; muscle, eyes, mood, pregnancy and other effects |
| harm-reduction | How do I use it safely? → only on prescription, from a pharmacy; tell your doctor about other medicines; know when to get help | the stop callout (now `id="stop-now"`) and `<WarningSigns only="general,injection,allergic,metabolic" />`, both moved to the top of the section and never folded | HEAD's opening paragraph (legal route; no doses) | the legal route and why an online vial is different; fake pens and the checklist; who should not use it, interactions and checks |

**Frontmatter.** Added `lede` (18 words, reading ease 66): "A weekly injection on prescription for type 2
diabetes and weight. Online “research” vials are not the same." Added `glance.stop_signs` (3) and
`glance.facts` (4). Every other frontmatter key (`title`, `description`, `summary`, `glance.main_risk`,
`grade_rationale`, `mechanism`, `studies`, `regulatory_notes`, `indications`) is byte-identical to HEAD:
the frontmatter was assembled by script from `git show HEAD:…` with only the additions inserted.

**Stop strip.** (1) `sign-belly-pain` "Severe belly pain, often spreading to your back"; (2) `sign-low-sugar`
"Sweaty, confused or drowsy (low blood sugar)"; (3) `sign-allergic` "Swollen lips or throat, or trouble
breathing". All cite `ema-epar-mounjaro`. The wording follows the Mounjaro package leaflet, re-read today
from the product-information PDF (pancreatitis: "severe pain in the stomach and back which does not go
away"; low-sugar signs include drowsiness, confusion and sweating; allergic reaction: "breathing problems,
rapid swelling of the lips, tongue and/or throat"). The semaglutide strip says "Shaky" and "face"; those
words are not in the Mounjaro leaflet, so they were not copied. The other two stop items (dehydration;
infection after a product from outside a pharmacy) have no matching label stop sign or pictogram and stay
in the full list.

**Fact sheet.** How it is taken: injection under the skin (SmPC 4.2: abdomen, thigh or upper arm); how often:
once a week (SmPC 4.2, 5.2); how long it lasts: half-life about five days (SmPC 5.2: "approximately 5 days,
enabling once weekly administration"); what it acts on: two receptors, GIP and GLP-1 (SmPC 5.1;
`coskun-2018-ly3298176`). No dose.

**Emergency number.** HEAD already used "call your local emergency number" twice in the stop callout and
never printed 112 as a phone number. The only "112" in the file is "at week 112" (SURMOUNT-MAINTAIN), twice,
which the validator leaves alone. The stop strip adds the locale's standard emergency line itself.

### 7.2 Verification of the new figure, lead and fact-sheet text (21 October 2026)

Every statement on the new figures condenses a sentence already on the page and cites that sentence's own
source ids. Re-checked against the primary records today:

- **PubMed abstracts** (NCBI efetch, PMIDs 35658024, 34186022, 41406444, 38078870, 39536238): SURMOUNT-1
  −15.0/−19.5/−20.9% vs −3.1% at 72 weeks, 2,539 adults without diabetes; SURPASS-1 HbA1c −1.87/−1.89/−2.07%
  vs +0.04% at 40 weeks, 478 adults, no clinically significant hypoglycaemia; SURPASS-CVOT 13,299 randomised,
  801 (12.2%) vs 862 (13.1%), HR 0.92 (95.3% CI 0.83–1.01), non-inferiority only; SURMOUNT-4 670 randomised
  after a mean 20.9% loss in 36 weeks, −5.5% vs +14.0% over 52 weeks; SURMOUNT-1 prediabetes 176 weeks.
- **EU product information** (PDF downloaded from ema.europa.eu today and converted with pdftotext): weight
  trial without T2DM, gastrointestinal disorders 55.6/60.8/59.2% vs 30.3%, nausea 24.6/33.3/31.0% vs 9.5%,
  permanent discontinuation for GI events 1.9/4.4/4.1% vs **0.5%**; SURPASS-CVOT "median follow-up time was
  4.0 years" (so `ema-epar-mounjaro` was added to the CVOT key number and the unknowns time strip);
  half-life, route, albumin binding and mechanism text as above; package-leaflet wording for the stop strip.
- **EMA EPAR page**: "Marketing authorisation issued 15/09/2022". **Drugs@FDA** overview pages: Mounjaro
  05/13/2022; Zepbound 11/08/2023 (and 12/20/2024 for sleep apnoea). Both EMA procedural-steps PDFs, re-downloaded
  today: II/0007 (extension to chronic weight management) opinion 09/11/2023, decision 11/12/2023;
  EMA/VR/0000281937 (C.I.6, new indication, children from 10) opinion 11/12/2025, decision 22/01/2026.
- **CBG position page** (fetched today): "je weet niet wat je koopt. Het is onduidelijk wat erin zit" and
  "het is belangrijk dat een arts en apotheker de behandeling begeleiden" (supports two comparison cells).
- **MHRA** (both pages fetched today): over 12,000 fake retatrutide and tirzepatide pens seized on
  14 October 2026; the falsified 15 mg KwikPen contained tirzepatide but "we cannot be sure that the pen is
  sterile".

### 7.3 Nothing lost: the check against git HEAD

A script in the session scratchpad (not committed) compares `git show HEAD:src/content/compounds/en/tirzepatide.mdx`
with the new file:

- `<Cite>` tags: HEAD 126, now 132, **0 lost**; 71 distinct ids before and after, none used less often,
  no new ids on the page (the six extra tags put existing ids on the comparison figure's cells).
- `<Claim>` (level and exact text): 24 → 24, **0 lost, 0 changed**. `<Q>` 7 → 7, `<Seq>` 1 → 1, internal
  links 3 → 3. Data components 10 → 10 (`AuthorisedProducts`, `Mechanism`, `StudyTable`, `RegulatoryTable`,
  the `Diagram`, `Checklist`, `WarningSigns`, and the note, uncertain and stop callouts).
- Body sentences: **250 of 250 found verbatim**. No sentence was reworded.
- Stop callout: the five items are identical to HEAD; only `id="stop-now"` was added, and it moved up.
- Tables: the diagram's rows are unchanged. The what-it-is comparison table became the `<Compare>` figure
  (as on the semaglutide page), so its 5 rows no longer exist as plain rows. Of its 15 cells, 12 are in the
  figure verbatim. Three were reworded to fit a yes/no figure: "Content" → "Contents known?"; its
  outside-the-chain cell "Unknown; fake pens have been seized" → `No` + "You do not know what is in it; fake
  pens have been seized" (the CBG wording the page already quotes); "Sterility" / "Unknown" → "Made sterile?"
  / `Unknown` + "For fake pens found in the UK, sterility could not be assured" (the MHRA Drug Safety Update
  the page already cites). The other row heads became questions ("Amount per dose known?", "Risk
  information?", "Medical follow-up?").
- `###` headings no longer used as headings (10): they became fold titles ("Pens, vials and why
  “tirzepatide” is not one thing", "The open question: what does the GIP half do?", "Sleep apnoea, heart
  failure and the liver", "Stomach and gut: the details", "Gallbladder and pancreas", "Thyroid tumours in
  rats, and why they may not carry over", "Anaesthesia, the contraceptive pill and other tablets", "Fake pens,
  and how to check yours"), or were dropped because the text is now open prose ("Who paid for the evidence",
  "Low blood sugar").
- **One number is new on the page**: the 0.5% placebo discontinuation in the third risks key number. It is in
  the SmPC sentence the folded text already cites for 1.9–4.4%, and was read in the PDF today.

### 7.4 Visible words (the formula in `src/pages/[locale]/compounds/[slug].astro`)

| | Before (HEAD, no folds) | After |
|---|---|---|
| Visible with folds closed (includes the fixed 150 At-a-glance and evidence-card words) | 6,757 | **1,420** |
| Whole page, everything open (includes the 150) | 6,757 | 7,518 (+761: figures, leads, fold titles, stop strip, fact sheet, lede) |
| Visible body words per section (after; leads and figures included) | | what-it-is 172, mechanism 163, evidence 237, unknowns 80, regulatory 100, risks 169, harm-reduction 181 |

The rendered page (the running dev server, `localhost:4321/en/compounds/tirzepatide/`, HTTP 200) says "About 8
minutes for the short version; 37 with every detail open". It renders 7 leads, 21 folds, 1 comparison, 7 key
numbers, 2 time strips, the diagram, the stop strip with three signs, `id="stop-now"`, the fact sheet and the
lede. No horizontal page scroll at 375 px; the diagram's four-column table scrolls inside its own frame (as
before). The short version is under the 1,500–2,000 aim because the figures carry most of the content and only
four short passages stay open; more prose could be opened if the owner wants it.

### 7.5 Editorial decisions for the reviewer

1. **Explainers not reused.** `insulin-glp1-hypo` names semaglutide in its title, step 1 and still caption
   ("Semaglutide alone lowers high blood sugar…"), and `glp1-action` is drawn and captioned for semaglutide.
   Placing either here would mislabel the medicine. Proposed instead (not built): a medicine-neutral variant
   of the low-sugar explainer and the backlog `incretin-multi-agonism` explainer (EXPLAINERS.md §6).
2. **The heart key number** says "not more often than with an older medicine", the trial's own
   non-inferiority result; the regulators' wider conclusion stays in the fold with its caveat.
3. **"Who paid for the evidence" stays open** in the evidence section, so the funding caveat sits next to
   the numbers (CONTENT-GUIDE §1: uncertainty in both directions). Semaglutide folds it.
4. **The Netherlands cost-and-access paragraph stays folded**, as on the semaglutide page; the regulatory
   lead carries the one-line access fact.

### 7.6 Validator and checks

- `npx tsx scripts/validate-content.ts --only tirzepatide`: **0 errors, 0 warnings**. Draft wordings fixed on
  the way: lede (22 words → 18; reading ease 66), regulatory time-strip title (reading ease 49 → 89), the
  stomach key-number label (57 → 70).
- Whole repository: 0 errors, 26 warnings, none in tirzepatide files.
- The MDX body compiles with `@mdx-js/mdx` + `remark-gfm`.
- The regulatory time strip first had one tick per year, which crowded the axis at 375 px; it now has one
  every two years.

### 7.7 Open questions (new)

1. The stop callout (unchanged from HEAD) says "Shaking" and "Swelling of the face"; the Mounjaro leaflet lists
   drowsiness, confusion and sweating, and swelling of the lips, tongue or throat. Both are standard signs,
   but neither word is in the cited label. Add a general hypoglycaemia source (e.g. the registered
   `ada-2026-hypoglycaemia`) and an anaphylaxis source (e.g. `nhs-anaphylaxis`), or align the wording?
2. Should "Who paid for the evidence" be open on every authorised-medicine page (semaglutide folds it)?
3. A medicine-neutral low-blood-sugar explainer would serve this page, semaglutide and retatrutide alike.

---

## 8. Fact-check log: the restructured page (independent fact-checker, 21 October 2026)

Scope: `src/content/compounds/en/tirzepatide.mdx` after the §7 restructure, and this file. Focus on what
the restructure added (lede, stop strip, fact sheet, 7 leads, the comparison figure, 7 key numbers, 2 time
strips) plus a full re-check of every source the page cites. The data file, sources file and glossary
were not edited (not in this assignment).

### What was checked, and how
- **All 29 scholarly sources in `tirzepatide.yaml` plus the 4 reused PubMed sources** (knudsen-2010,
  lau-2015, neeland-2024, he-2022): one NCBI esummary call, compared field by field by script with the
  registry (authors in order, title, year, volume, pages, DOI, PMCID). All match; the only differences are
  PubMed's abbreviated page ranges (e.g. 301-7 vs 301-307) and e-locators PubMed leaves blank. All 29 DOIs
  return HTTP 200 from the DOI handle API. No wrong or fabricated DOI.
- **Abstracts** (NCBI efetch, 20 PMIDs) for every trial number on the page and in the study findings:
  SURMOUNT-1, SURPASS-1, SURPASS-CVOT, SURMOUNT-4, SURMOUNT-1 prediabetes, SURMOUNT-MAINTAIN, SURPASS-2,
  SURPASS-4, SURPASS-PEDS, phase 2 (Frias 2018), Heise 2022 and 2023, SURMOUNT-OSA, SUMMIT, SURMOUNT-5,
  SYNERGY-NASH, Rodriguez 2024, McCall 2026, maridebart cafraglutide, Nauck 1993. Every number matches.
- **All 23 structured studies**: species, n, design, funding, group, blinded and controlled re-read
  against those abstracts. No field needed changing (SURPASS-2, SURPASS-4 and SURMOUNT-5 open-label;
  SURMOUNT-4 and -MAINTAIN double-blind after an open-label lead-in; n = randomised).
- **EU product information PDF** (downloaded today, pdftotext): weight-trial GI figures 55.6/60.8/59.2% vs
  30.3%, nausea 24.6/33.3/31.0% vs 9.5%, permanent stops 1.9/4.4/4.1% vs 0.5% (all three risk key numbers
  correct; one study, "patients without T2DM"); hypoglycaemia 10-14% with a sulphonylurea, 14-19% with
  basal insulin; CVOT median follow-up 4.0 years; half-life about 5 days "enabling once weekly
  administration"; subcutaneous route; 5.1 receptor locations (diagram rows correct); insulin secretion
  "in a glucose dependent manner"; 15 169 adults in 14 completed phase 3 studies; ADA 45.1-65.1%; heart
  rate +2 to +6 bpm; amylase 23-38%, lipase 28-42%; SUMMIT CV deaths 10 vs 5; DEXA substudy; rat C-cell
  tumours; Annex IIA batch release; package-leaflet stop signs. EPAR page: authorisation 15/09/2022,
  product information last updated 21/09/2026 (no newer procedure).
- **EMA procedural-steps PDFs** (both re-downloaded): II/0007 opinion 09/11/2023, decision 11/12/2023;
  EMA/VR/0000281937 opinion 11/12/2025, decision 22/01/2026; EMA/VR/0000310637 outcome 25/06/2026.
- **Drugs@FDA** (both overviews re-fetched): Mounjaro ORIG-1 05/13/2022, S-39 12/19/2025, S-44/S-45
  08/27/2026; Zepbound ORIG-1 11/08/2023, S-13 (OSA) 12/20/2024, S-42 02/25/2026, S-41 08/26/2026.
- **Status checks today**: Federal Register API (tirzepatide, from 1 Jan 2026) still returns only the 503B
  proposal (2026-08552), the comment extension (2026-12937) and an unrelated guidance notice, so no final
  503B decision. FDA concerns page (current as of 10/01/2026: more than 730 compounded-tirzepatide reports
  to 31 May 2026; dosing errors from patients measuring doses; 28-day vial advice). FDA compounding page
  (2 Oct and 19 Dec 2024; 5 and 19 Mar 2025). FDA PCAC July 2026 page: seven substances, tirzepatide not
  among them (the page says only that it was not considered, so the five-element PCAC framing is not
  needed). ZIN werkagenda: first WAR 5 Oct 2026, consultation "naar verwachting begin november 2026". FK
  Regeling zorgverzekering item 194 and FK preparaattekst unchanged. MHRA DSU (24 Feb 2026) and MHRA news
  (15 Oct 2026: more than 12,000 pens, one raid in Birmingham). CBG position page. WADA 2026 and 2027 Lists
  (no tirzepatide; 2027 List in effect 1 January 2027) and Monitoring Programs (2025: semaglutide only;
  2026: "Markers of Semaglutide and Tirzepatide"; 2027: "GLP-1 Agonists: Semaglutide and tirzepatide").
- **Reused sources newly cited** (see changes): `ada-2026-hypoglycaemia` (esummary matches; PMC HTML:
  symptoms "include ... shakiness, irritability, confusion, tachycardia, sweating, and hunger";
  recommendation 6.15, glucose for the conscious individual) and `sola-2015-sulfonylureas` (esummary
  matches; Europe PMC full text: "the release of insulin induced by sulfonylureas is independent of glucose
  levels").
- **Page photo**: Commons file page confirms CC BY-SA 4.0, own work by CoRus13, "normal mucosa, H&E"; no
  person, no product. Alt text and caption accurate.
- **Explainers**: confirmed that `glp1-action` and `insulin-glp1-hypo` name semaglutide in their titles and
  step captions, so not reusing them here is correct.
- **Guardrails**: no dosing guidance (studied doses only in `<Q>` inside study descriptions; the fact sheet
  gives label route, frequency and half-life, which CONTENT-GUIDE §9.1 allows); no superlatives, hype
  words, testimonials or sourcing hints; no commerce words in link text; internal links only to
  `/en/talking-to-your-doctor/`, `/en/safety/product-risk/` and `/en/safety/sterile-technique/`; no `# `
  heading; no emergency phone number (only "week 112").

### What was changed (MDX)
1. **Comparison figure, three cells without a source.** "Amount per dose known? No: depends on your own
   measuring" now adds that the FDA has had reports of measuring errors (`fda-unapproved-glp1-concerns`;
   worded as reports, because the FDA says the events "may be related" to dosing errors). "Made sterile?
   Yes: a condition of the authorisation" had no source and the EU product information does not say it;
   now "made by a manufacturer named in the authorisation, which releases each batch" (Annex IIA,
   `ema-epar-mounjaro`). "Risk information? No: none" now carries the CBG's own reason ("onduidelijk ...
   hoe je het moet gebruiken en dus ook wat de gevolgen voor je gezondheid zijn", `cbg-glp1-position`).
2. **SURMOUNT-4 key number.** The `who` line dropped the trial's population qualifier: SURMOUNT-4
   excluded diabetes. Now "adults with obesity or overweight, without diabetes, who had first lost 20.9%
   on average". The label said "body weight regained", which can be read as 14% of the lost weight; the
   14.0% is the change in body weight from week 36, so it now says "weight gain in 52 weeks after
   switching to placebo".
3. **Stop callout (resolves open question 7.7.1).** "Swelling of the face, lips or throat" became
   "Swelling of the lips, tongue or throat" (the leaflet's words, and the site's own warning-signs list).
   "Shaking" is kept, because the site's warning-signs list uses it and the ADA Standards list shakiness;
   `ada-2026-hypoglycaemia` was added to the callout's citation line, which also supports "take something
   sugary if you can swallow safely".
4. **Low-blood-sugar paragraph (open in the risks section).** "Insulin and sulfonylureas act regardless
   of glucose" had no source of its own; it now cites the SmPC (tirzepatide's glucose-dependent insulin
   secretion) and `sola-2015-sulfonylureas`. That insulin itself lowers glucose regardless of the level is
   basic pharmacology and is not separately sourced.
5. **Netherlands (fairness, the opposite failure).** The page reported that Dutch GP guidance advises
   against tirzepatide, but not two qualifiers in the same FK text: the multidisciplinary obesity
   guideline (2023) was written before tirzepatide was on the market, and guidance in other countries
   leaves more room to prescribe it. Added one sentence (`fk-tirzepatide`).

Validator after the changes: `--only tirzepatide` 0 errors, 0 warnings (one key-number label went to 20
words during editing and was shortened). The page renders (HTTP 200 on the dev server) and shows the new
cells, the callout wording and the two added sources in the source list.

### Checked and left as they are
- **Heart key number** ("not more often than with an older medicine"): a fair plain reading of a
  non-inferiority result with HR 0.92 (95.3% CI 0.83-1.01); the fold explains "not worse, not shown better".
- **Unknowns time strip** ("followed people for about four years"): the median follow-up was 4.0 years,
  so some people were followed longer; "about" covers it, and the fold says "a median of about four
  years". SURPASS-CVOT is the longest tirzepatide trial (SURMOUNT-1 prediabetes: 176 + 17 weeks).
- **Stop strip, fact sheet, lede, leads, risk key numbers, regulatory time strip**: all supported by the
  page's own text and the sources above.
- **"Made sterile? Yes: a condition of the authorisation"** is also the semaglutide page's wording; the
  semaglutide fact-checker may want the same change.

### Remaining concerns for the reviewer
- Visible words with folds closed are about 1,450, still a little under the 1,500-2,000 aim; opening one
  short fold (for example the approval dates) would close the gap.
- The UK row says "licensed" from the MHRA guidance page; no MHRA product-licence page is cited.
- Open questions 5.1-5.8 and 7.7.2-7.7.3 still stand.
