# Research notes: semaglutide (Tier 1, authorised-medicine template)

Prepared 20 October 2026 for `compounds/semaglutide`. Files:
`src/data/compounds/semaglutide.yaml`, `src/content/compounds/en/semaglutide.mdx`,
`src/data/sources/semaglutide.yaml` (70 sources after the fact-check; see §8), `src/i18n/en/glossary/semaglutide.json` (28 terms).
Validator: `npx tsx scripts/validate-content.ts --only semaglutide` gives 0 errors and 0 warnings.
The MDX body also compiles with `@mdx-js/mdx` (the validator does not compile MDX).
Body length is about 3,990 words, counting every token outside tags and excluding the comparison table.

---

## 1. Key facts and their sources

### Identity and chemistry
| Fact | Source id |
|---|---|
| PubChem CID 56843331; formula C187H291N45O59; CAS 910463-68-2; UNII 53AXN4NNHX; isomeric SMILES (copied from PUG REST) | `pubchem-semaglutide` |
| ChEMBL CHEMBL2108724, max phase 4, mechanism "Glucagon-like peptide 1 receptor agonist" (target CHEMBL1784) | `chembl-semaglutide` |
| MW 4113.58 g/mol; position 8 modified against DPP-4; Lys26 with "hydrophilic spacer and a C18 fatty di-acid"; position 34 modified "to ensure the attachment of only one fatty di-acid"; peptide backbone produced by yeast fermentation | `fda-label-ozempic` (section 11) |
| Two substitutions versus human GLP-1 (Aib8, Arg34) and derivatisation at Lys26; GLP-1R affinity 0.38 nM, three-fold lower than liraglutide; i.v. half-life 46.1 h in mini-pigs | `lau-2015-semaglutide-discovery` |
| 94% sequence homology to human GLP-1; half-life of about 1 week; albumin binding above 99%; DPP-4 stabilisation; present in the circulation about 7 weeks (Wegovy) or 5 weeks (Rybelsus) after the last dose | `ema-epar-wegovy`, `ema-epar-rybelsus` |

**Sequence.** I derived the sequence by walking the PubChem isomeric SMILES residue by residue and checked it against PubChem's systematic name: "L-Histidyl-2-methylalanyl-L-α-glutamylglycyl-…-N6-(N-(17-carboxy-1-oxoheptadecyl)-L-γ-glutamyl-2-(2-(2-aminoethoxy)ethoxy)acetyl-2-(2-(2-aminoethoxy)ethoxy)acetyl)-L-lysyl-…-L-arginylglycyl-L-arginylglycine". I then compared it with human GLP-1(7–37) (HAEGTFTSDVSSYLEGQAAKEFIAWLVKGRG): the differences are A8→Aib and K34→R. Twenty-nine of 31 residues are identical (93.5%, which matches the label's "94%").

**Numbering.** In `sequence.modifications`, `position` is the 1-based index into `residues` (Aib = 2, Lys = 20, Arg = 28). Each label gives the GLP-1(7–37) position used by the sources (8, 26, 34). The prose uses GLP-1 numbering and says so.

### Authorisations
| Product | Jurisdiction | Date | Source |
|---|---|---|---|
| Ozempic | EU | 8 Feb 2018 | `ema-epar-ozempic` |
| Rybelsus | EU | 3 Apr 2020 | `ema-epar-rybelsus` |
| Wegovy injection | EU | 6 Jan 2022 | `ema-epar-wegovy` |
| Wegovy tablets (1.5/4/9/25 mg) and Wegovy 7.2 mg pen | EU | CHMP opinion 21 May 2026; Commission decision 14 Jul 2026 | `ema-wegovy-procedural-steps`, `ema-2026-wegovy-tablets` |
| Ozempic | US | 5 Dec 2017 (NDA 209637); kidney indication 28 Jan 2025 (S-025) | `fda-drugsatfda-ozempic` |
| Rybelsus | US | 20 Sep 2019 (NDA 213051); new indication 17 Oct 2025 (S-024) | `fda-drugsatfda-rybelsus` |
| Wegovy injection | US | 4 Jun 2021 (NDA 215256); CV indication 8 Mar 2024 (S-011); MASH 15 Aug 2025 (S-024, accelerated) | `fda-drugsatfda-wegovy`, `fda-label-wegovy` |
| Wegovy tablets | US | 22 Dec 2025 (NDA 218316) | `fda-drugsatfda-wegovy-tablets` |

I confirmed the S-011 and S-025 indications by downloading those label versions and reading "Recent Major Changes": "Indications and Usage 03/2024" (MACE risk reduction) and "Indication and Usage 1/2025" (sustained eGFR decline).

### Netherlands (status on 20 Oct 2026)
- Farmacotherapeutisch Kompas lists Ozempic and Rybelsus as **Bijlage 2** (conditional reimbursement) and Wegovy as **XGVS** (not in the GVS). Source: `fk-semaglutide`.
- Bijlage 2, item 146 ("Dulaglutide en Semaglutide") limits reimbursement to type 2 diabetes in three situations: BMI ≥ 30 after metformin plus sulfonylurea; BMI ≥ 30 as an add-on to metformin plus basal insulin; or very high CV risk (prior CVD and/or CKD) as an add-on to an SGLT2 inhibitor plus metformin, or when an SGLT2 inhibitor is contraindicated. Source: `fk-regeling-zorgverzekering-bijlage-2`.
- Zorginstituut advised on 16 Jul 2024 not to reimburse Wegovy for obesity. Its reasons: "bewezen effectief" for weight, but uncertain health gain, unknown long-term effectiveness and no studies on tapering; a budget impact of up to €1.3 billion per year; and the global shortage. Source: `zin-2024-wegovy-not-reimbursed`.
- In its farmacotherapeutisch rapport of 18 Jun 2024, Zorginstituut found that Wegovy meets "stand van wetenschap en praktijk" as an add-on to GLI. It also noted that no data exist beyond 2 years and that weight returns on stopping. Source: `zin-2024-wegovy-pharmacotherapeutic-report`.
- A reassessment is running under the "getrapte aanpak" (BMI ≥ 30 with related disease, or BMI ≥ 35). The first WAR discussion was on 5 Oct 2026. Technical consultation is "naar verwachting begin november 2026", moved from 12–18 Oct 2026. Later steps are "nog niet bekend". Sources: `zin-wegovy-reassessment`, `zin-2025-obesity-staged-approach`.
- CBG warned about the Ozempic shortage on 17 Mar 2023. Its updates say the shortage was resolved on 2 Dec 2024, and also say it is unclear whether off-label use caused it. Source: `cbg-ozempic-shortage`.
- CBG's position statement is that these medicines should be used only for their authorised indications. Its line on online purchase: "Het is onduidelijk wat erin zit, hoe je het moet gebruiken…". Source: `cbg-glp1-position`.
- ~~IGJ news of 24 Aug 2026 (order against a webshop)~~ — **removed by the fact-checker**: the IGJ URL, title and body name the seller and list its domains (see §8).

### Pharmacovigilance (EMA)
- PRAC, April 2024: "the available evidence does not support a causal association" between GLP-1 RAs and suicidal or self-injurious thoughts. No product-information update was needed (CBG's Dutch summary says the same). Sources: `ema-prac-2024-04-suicidal-thoughts`, `cbg-ozempic-shortage`.
- PRAC, July 2024: "could not establish a causal association between GLP-1 analogues and aspiration", but recommended wording on residual gastric content. Source: `ema-prac-2024-07-aspiration`. The wording is now in SmPC section 4.4 (`ema-epar-wegovy`).
- PRAC, 6 Jun 2025 (revised 13 Jun 2025): NAION is a "very rare" side effect (up to 1 in 10,000). Epidemiological studies in type 2 diabetes show about a two-fold relative risk, about 1 extra case per 10,000 person-years. Sources: `ema-prac-2025-06-naion`, and the same text in SmPC section 4.8.

### US compounding and shortage
- The FDA declared the semaglutide shortage resolved on 21 Feb 2025. Enforcement discretion for 503A ended after the court denied a preliminary injunction on 24 Apr 2025; for 503B it ended on 22 May 2025. The page is current as of 1 Apr 2026. Source: `fda-glp1-compounding-policy`.
- FDA dosing-error alert of 26 Jul 2024: patients took 5–20× the intended dose; providers miscalculated by 5–10×; confusion between units, mL and mg; U-100 syringes. Source: `fda-2024-compounded-semaglutide-dosing-errors`.
- FDA "concerns" page, current as of 1 Oct 2026: 990 adverse-event reports for compounded semaglutide as of 31 May 2026; salt forms; fraudulent labels; counterfeit Ozempic; products "falsely labeled 'for research purposes' or 'not for human consumption'"; the 28-day multi-dose-vial advice. Source: `fda-unapproved-glp1-concerns`.
- On 30 Apr 2026 the FDA proposed excluding semaglutide, tirzepatide and liraglutide from the 503B bulks list. The press release said comments by 29 Jun 2026, the Federal Register notice (2026-08552) 30 Jun 2026, and a 26 Jun 2026 notice (2026-12937) **extended the deadline to 30 Jul 2026** (corrected by the fact-checker). No final notice in the Federal Register as of 20 Oct 2026. Sources: `fda-2026-503b-glp1-exclusion-proposal`, `fr-2026-12937-503b-comment-extension`.

### WADA
- Semaglutide is not named in the 2026 Prohibited List PDF; I checked the full text with grep. S0 covers only substances with "no current approval by any governmental regulatory health authority", so it does not apply.
- **Monitoring Program:** "Markers of Semaglutide and Tirzepatide", in and out of competition (2026). "Semaglutide" appears in the 2024 and 2025 programmes and is absent from 2023. Source: `wada-2026-monitoring-program`. `status: not-listed` is therefore verified.

---

## 2. Verification log

- **Scholarly sources (30).** Metadata come from PubMed: PubMed MCP `get_article_metadata`, then NCBI E-utilities `efetch` once the MCP was rate-limited. I copied authors, title, journal, volume, pages, DOI, PMID and PMCID from the record. Every trial number in the prose and in the `studies.finding` text comes from the PubMed abstract.
- **Funding fields.**
  - Pasternak 2024: checked in the PMC full text (Swedish Cancer Society and Swedish Research Council → `academic`). One author also holds a Novo Nordisk **Foundation** grant, which is not the company.
  - Hathaway 2024: PMC page, "funded in part by a grant from Research to Prevent Blindness" → `academic`.
  - Bezin 2023: the Europe PMC grant list shows ANSM grant 2019S015 → `government`.
  - Kreymann 1987 and Nauck 1993: `undisclosed`, because funding is not stated in the records I could access (PubMed tags them only "Research Support, Non-U.S. Gov't").
  - All company trials: the abstract says "Funded by Novo Nordisk" → `industry`.
- **Labels.** I downloaded the EMA product-information PDFs for Ozempic, Wegovy and Rybelsus on 20 Oct 2026 and read sections 4.3–4.9 and 5.1–5.3 with `pdftotext`. I also downloaded the FDA labels:
  - Ozempic 209637s038 (revised 05/2026)
  - Wegovy 215256s033 (02/2026) and 218316s007 (06/2026)
  - Rybelsus/Ozempic tablets 213051Orig1s030 (1/2026)
  - the historic labels S-011 and S-025, used only to confirm indication dates.
- **Regulator pages.** Every one was fetched on 20 Oct 2026, with WebFetch or with curl plus an HTML-to-text pass where WebFetch returned 401 (fda.gov), and read for the specific statement cited (see the `note:` field in the sources file).
- **Commerce and allowlist.** No seller is named anywhere. The IGJ page title names the seller, so the `title` field is paraphrased and the change is flagged in its `note`. All URLs are on allowlisted hosts.

---

## 3. Conflicts between sources and how I resolved them

1. **NAION size.**
   - Hathaway 2024 (single-centre neuro-ophthalmology registry): HR 4.28 (type 2 diabetes) and 7.64 (overweight or obesity).
   - EMA/PRAC (several large epidemiological studies): about 2× relative risk, about 1 extra case per 10,000 person-years.
   - I lead with the EMA figure and present Hathaway as an earlier study in a referral population that can inflate risk. Naming the referral population is my interpretation; Hathaway's own abstract says only "observational… future study is required to assess causality".
2. **Thyroid cancer.** Bezin 2023 (France, nested case-control) found adjusted HR 1.58 for all thyroid cancer and 1.78 for medullary cancer after 1–3 years of use. Pasternak 2024 (Scandinavia, active comparator) found HR 0.93 (0.66–1.31) and, for medullary cancer, 1.19 (0.37–3.86). I present both, note that neither studied semaglutide alone, and label detection bias as a hypothesis.
3. **Whether off-label use caused the shortage.** The CBG 2023 page says "Het is niet duidelijk of het off-labelgebruik het tekort aan Ozempic veroorzaakt". The CBG June 2024 page, reporting the EMA MSSG, says shortages "lopen sterk op door het gebruik … als afslankmiddel door mensen die géén obesitas hebben". I give both, attributed and dated.
4. **When the US suicidality warning was removed.** The Wegovy label revised 02/2026 says "(Removed) 02/2026"; the label revised 06/2026 says "(Removed) 01/2026". Drugs@FDA lists labelling supplements on 29 Jan 2026 (S-030) and 25 Feb 2026 (S-033). The page says "early 2026".
5. **OASIS 4 phase.** PubMed publication type is "Clinical Trial, Phase II"; the EMA news item calls the 307-person, 64-week trial "a phase 3 clinical trial". The numbers match (EMA −13.61% vs −2.18%; NEJM −13.6% vs −2.2%). *Fact-check resolution:* ClinicalTrials.gov NCT05564117 lists PHASE3 (307 enrolled), so the PubMed tag is an indexing error; the prose now says the EMA cites it as phase 3.
6. **EU vs US labels.** These are differences between regulators, not errors:
   - Contraindications: the EU SmPC lists only hypersensitivity; the US label also contraindicates personal or family history of MTC and MEN 2, with a boxed warning.
   - NAION is in the EU label but not in the US labels checked (Ozempic 05/2026, Wegovy 06/2026).
   - The page reports both.
7. **Gastric emptying.** The SmPC describes a "minor delay… in the early postprandial phase" and paracetamol AUC0–60 min −27% with 1 mg. It also says there is no clinically relevant effect at 2.4 mg ("probably due to a tolerance effect"). Friedrichsen 2021 found no delay at week 20. The mechanism step is graded `human`, and the detail says the effect fades.

---

## 4. Editorial decisions worth reviewing

- **Doses.** No dose ranges or titration steps appear (guide §6 permits SmPC ranges but does not require them). The only quantities are studied trial doses inside `<Q>`, plus the 7.2 mg and 2.4 mg strengths named because label findings depend on them. "Your prescriber decides the dose" is stated.
- **Wegovy as two products.** Wegovy appears as two `authorised_products` entries (`wegovy` subcutaneous 2022-01-06, `wegovy-tablets` oral 2026-07-14), because `route` is a single value. Both point to the same EPAR.
- **Mechanism levels.** Steps 2 and 3 (receptor binding, Gs/cAMP) are `in-vitro`; the other five are `human`.
- **Claim levels for large observational studies.** NAION epidemiology and the lean-mass ranges are marked `human-limited` for want of a better level (see contract issues).
- **Study designs.**
  - Kreymann 1987 and Nauck 1993 are marked `rct`, following their PubMed publication types (RCT; Controlled Clinical Trial). They are really small physiological infusion studies, and the limitation text says so.
  - The STEP 1 extension is `rct` (randomised arms followed off-treatment, exploratory).
  - Buckley 2018 is `pk`.
- **The "lumping misleads in both directions" argument** sits in `what-it-is`, with a comparison table, so it is visible near the top. The harm-reduction section repeats it in practical terms.
- **Regulatory lag.** In the NL subsection, the cost of the Wegovy reimbursement gap is stated both ways: unequal access and a pull towards the grey market, against Zorginstituut's legitimate concerns. The grey-market pull is an inference and is worded as such; I found no data on it.

---

## 5. Open questions for the medical reviewer

1. **Stop callout, hypoglycaemia line.** "Take something sugary if you can swallow safely; call 112 if…" is standard first aid, not from a cited source. Please confirm, or align it with `warning-signs.json`.
2. **Retinopathy.** Should the page advise an eye examination before starting for everyone with diabetic retinopathy? The label says "monitored closely".
3. **Lean mass.** The only source is a narrative review (Neeland 2024, in a journal supplement). Is a primary DXA/MRI source preferred? STEP 1 had a DXA substudy, but its numbers are in the NEJM full text, which I could not access, so they are not used.
4. **Ozempic Bijlage 2 summary.** Is the paraphrase of item 146 acceptable at B1?
5. **Who prescribes in NL.** I wrote "usually your GP (huisarts) or a specialist". Should verpleegkundig specialisten or physician assistants be mentioned? Should online consultations be addressed (IGJ rules)?
6. **Oral contraceptives.** The SmPC says no clinically relevant change with semaglutide. MHRA advice on barrier contraception concerns tirzepatide (Mounjaro) and was deliberately **not** transferred to this page. Please confirm.
7. **The 7.2 mg strength** (EU, July 2026): is the dysaesthesia mention (21.6% vs 0.3% in STEP UP) proportionate?

## 6. Open questions for the legal reviewer

1. **Trade names and holder.** Ozempic, Wegovy and Rybelsus, and the holder Novo Nordisk A/S, are used for identification only (guide §1). Please confirm the "fewest unknowns" framing of the legal route is not promotional.
2. **IGJ webshop source.** The title is paraphrased to avoid naming the seller. Is linking a URL whose slug contains the seller's name acceptable?
3. **FDA enforcement page not cited.** The FDA's 6 Feb 2026 statement names a telehealth company in its body. I relied on other FDA pages instead.

## 7. Items not verified, so left out or stated as unknown

- **Belgium.** FAMHP/AFMPS pages returned a bot-check (captcha) to both WebFetch and curl, so Belgian shortage measures and royal decrees could not be verified. RIZIV/INAMI pages loaded (they mention prior authorisation from 1 Feb 2026), but riziv.fgov.be is not on the link allowlist. The page says Belgian specifics are not covered.
- **UK authorisation dates.** These were not established (Ozempic was EU-authorised before Brexit), so the UK entry has no `since`.
- **"Kayshild".** It appears in PubChem synonyms; I could not identify the product and did not mention it.
- **STEP 1 DXA lean-mass percentages.** Not used (full text not accessed).
- **Detailed cardiovascular, renal and anti-inflammatory mechanisms.** Not asserted beyond the label's "not established".
- **The grey-market pull of non-reimbursement.** No data found; worded as an inference.
