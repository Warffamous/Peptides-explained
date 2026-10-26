# Manifest: compounds-a (English refocus, 24 October 2026)

Pages: semaglutide, tirzepatide, retatrutide (`src/content/compounds/en/<slug>.mdx`) and the glossary files
`src/i18n/en/glossary/{semaglutide,tirzepatide,retatrutide}.json`. Everything below was European framing on the English
pages and is cut from them. The full text is in `git show nl-source-2026-10-23:src/content/compounds/en/<slug>.mdx`
(the line numbers below are lines of that file) and in
`research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx`; the glossary entries in
`git show nl-source-2026-10-23:src/i18n/en/glossary/<file>.json`.

Nothing was cut from the data files: the EU, NL, DE and BE rows and the EU products of
`src/data/compounds/{semaglutide,tirzepatide,retatrutide}.yaml` are unchanged (the components hide them on English).
Re-check every legal, status and reimbursement fact before reuse on the Dutch site: most were last checked on
20 October 2026.

Kept on the English pages as evidence, each line marked `{/* residue-ok: EMA evidence */}` (or `# residue-ok` in YAML):
the EMA product information (Wegovy, Rybelsus, Mounjaro EPARs) as the source of trial frequencies and label science; the
PRAC conclusions on suicidal thoughts (2024), aspiration (2024) and NAION (2025); the EMA's view on SUMMIT (HFpEF) and
SURPASS-CVOT; label differences (the European label lists only hypersensitivity as a contraindication; it considers the
pill interaction not clinically relevant). Kept as UK licensing history (marked): Ozempic was authorised for the UK from
February 2018 under the EU-wide authorisation, before its own Great Britain licence of 1 January 2021.

## Frontmatter `regulatory_notes` (removed from the English pages; text as it was)

| Page | Code | Text |
|---|---|---|
| semaglutide | EU | "Authorised (centralised): Ozempic 8 Feb 2018, Rybelsus 3 Apr 2020, Wegovy injection 6 Jan 2022, Wegovy tablets 14 Jul 2026. Prescription only." |
| semaglutide | NL | "Authorised via the EU. Ozempic and Rybelsus reimbursed only for type 2 diabetes under Bijlage 2 conditions; Wegovy not reimbursed, reassessment under way. Ozempic shortage resolved 2 Dec 2024." |
| semaglutide | DE | "Authorised via the EU. Supply-shortage recommendation for Ozempic lifted on 18 Mar 2026. Falsified Ozempic pens containing insulin found in 2023." |
| semaglutide | BE | "Authorised via the EU; prescription only." |
| tirzepatide | EU | "Authorised (centralised): Mounjaro 15 Sep 2022; weight management added 11 Dec 2023; children 10+ with type 2 diabetes 22 Jan 2026. Prescription only." |
| tirzepatide | NL | "Authorised via the EU. Reimbursed only for type 2 diabetes under Bijlage 2 conditions; not reimbursed for weight management, assessment under way." |
| tirzepatide | DE | "Authorised via the EU. Statutory insurance excludes medicines used mainly for weight loss (§ 34 SGB V)." |
| tirzepatide | BE | "Authorised via the EU; prescription only. Belgian reimbursement rules not verified here." |
| retatrutide | EU | "Not authorised; not on the EMA list of applications under evaluation (5 October 2026). Phase 3 trials run at EU sites." |
| retatrutide | NL | "Not authorised; no approved compassionate-use programme. In practice legal only inside an approved trial." |
| retatrutide | DE | "Not authorised; a licence is required under AMG § 21. Phase 3 trial sites in Germany." |
| retatrutide | BE | "Not authorised; a licence is required under the 1964 Medicines Act. Phase 3 trial sites in Belgium." |

## Semaglutide (`src/content/compounds/en/semaglutide.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| `summary[0]` (6) | "Semaglutide is an authorised EU medicine. Ozempic and Rybelsus treat type 2 diabetes. Wegovy helps manage weight." | – |
| `grade_rationale.human_clinical` (39) | "Authorised in the EU since 2018 (Ozempic), with Rybelsus (2020) and Wegovy (2022; tablets 2026)." | – |
| frontmatter comments (14, 27), mechanism details (59, 67), study limitation PIONEER 1 (93) | "the EU label"; PIONEER 1 used the original tablet formulation, "which the EU label states is bioequivalent to the current tablets" (now: the US label says the newer tablet cannot be swapped mg for mg) | – |
| What it is: Compare (150, 153, 154) | "You do not know what is in it"; "how to use it, and what it does to your health, is unclear"; "Prescriber and pharmacist" (the CBG's position); fake pens with insulin (BfArM) | cbg-glp1-position, bfarm-ozempic-falsification |
| Approved products fold (160) | EU authorisation dates: Ozempic 8 February 2018, Rybelsus 3 April 2020, Wegovy injection 6 January 2022, Wegovy tablets 14 July 2026; holder Novo Nordisk A/S | ema-wegovy-procedural-steps |
| Fold "Newer uses, and a negative result" (308) | "The indication is not in the EU label" (Wegovy for MASH; the EU authorised semaglutide for MASH as Kayshild on 26 March 2026, see ema-epar-kayshild in src/data/sources/refocus-ireland-nz.yaml; re-check before reuse). Now: Canada, Australia and the UK approved Wegovy for MASH with conditions (added by the fact-checker to this manifest, 26 October 2026) | – (ema-epar-wegovy stays on the page for other facts) |
| Unknowns TimeStrip (326, 328) and list (334, 335, 341) | "Weight-loss evidence checked in the Netherlands (2024): no data beyond 2 years" (Zorginstituut, June 2024); no trial of tapering off (Zorginstituut report); "Who benefits most: Zorginstituut could not determine which patients with obesity gain the most health" (now: Canada's drug agency 2022 on health gain beyond weight) | zin-2024-wegovy-pharmacotherapeutic-report, zin-2024-wegovy-not-reimbursed |
| Regulatory Lead (349) and TimeStrip (351–356) | "Yes, on prescription, in the EU, UK and US. Dutch basic insurance covers only diabetes use, with conditions."; the EU authorisation timeline (four bars from 8 February 2018 to 14 July 2026) | ema-wegovy-procedural-steps |
| Fold "The European Union and the Netherlands" (370–387) | EU: centralised procedure, Wegovy tablets and the higher-strength pen added July 2026; the PRAC findings (suicidal thoughts April 2024, aspiration July 2024, NAION June 2025; these three stay on the page as evidence in the risks section). Netherlands: prescription-only; Ozempic and Rybelsus reimbursed for type 2 diabetes only under Bijlage 2 of the Regeling zorgverzekering; Wegovy not reimbursed (Zorginstituut July 2024: effective, but unclear health gain, long-term effect and way of stopping, up to €1.3 billion a year); reassessment (first scientific discussion 5 October 2026, consultation early November 2026); "This gap has real costs" paragraph with the CBG on slimming use without a prescription; CBG on the Ozempic shortage (March 2023, ended 2 December 2024) and the June 2024 shortage recommendations. | fk-semaglutide, fk-regeling-zorgverzekering-bijlage-2, zin-2024-wegovy-not-reimbursed, zin-wegovy-reassessment, zin-2025-obesity-staged-approach, cbg-glp1-position, cbg-ozempic-shortage, cbg-2024-glp1-shortage-recommendations, ema-wegovy-procedural-steps |
| Fold "Germany, Belgium, the United Kingdom and the United States" (389–397) | Germany: EU procedure; the BfArM's shortage board lifted its Ozempic recommendation on 18 March 2026; falsified German-labelled Ozempic pens (2023) contained insulin. Belgium: EU procedure, prescription-only, Belgian rules not verified. (UK and US paragraphs kept and expanded.) | bfarm-glp1-shortage-archive, bfarm-ozempic-falsification |
| US paragraph (407) | "The US and EU labels differ … EU labels list only hypersensitivity" (kept as evidence, marked) | – |
| Risks intro (426) | "risks and frequencies come from the EU product information" (now: the Wegovy product information assessed by the EMA, marked) | – |
| Pregnancy (484) | "Weight loss can improve fertility and so raise the chance of an unplanned pregnancy" sourced to the Farmacotherapeutisch Kompas (now: drummond-2024-glp1-pregnancy-review) | fk-semaglutide |
| ProductCheck extra (500) | "Compare it with the picture in the package leaflet." | ema-2023-falsified-ozempic, bfarm-ozempic-falsification |
| Harm reduction "The legal route in the Netherlands" (520–522) | Prescription from a doctor, "usually your GP (huisarts)"; Ozempic or Rybelsus reimbursed for diabetes under conditions; Wegovy not paid by basic insurance (20 October 2026); Dutch prescribing advice adds obesity medicines to a combined lifestyle programme (GLI); a prescription brings checks by doctor and pharmacist (CBG) | fk-semaglutide, zin-wegovy-reassessment, cbg-glp1-position |
| Online vial (526) | "The CBG's summary: you do not know what is in it, how to use it, or what it will do to your health." | cbg-glp1-position |
| Fake pens fold (534–545) | "Falsified Ozempic pens have been found in the EU, the UK and elsewhere since 2023" (EMA, BfArM); checklist "The EU and Dutch regulators advise getting them only through a doctor and a pharmacy"; "Compare your pen with the picture and description in the package leaflet"; "Report side effects to Lareb" | ema-2023-falsified-ozempic, bfarm-ozempic-falsification, igj-2023-falsified-ozempic, lareb-home |
| Who should not use it (556) | MTC/MEN 2: "not a formal EU contraindication, so discuss it" (now: a contraindication on the US and Canadian labels; discuss it wherever you live) | – |

## Tirzepatide (`src/content/compounds/en/tirzepatide.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| `summary[0]` (6) | "Tirzepatide is an approved EU medicine called Mounjaro. It treats type 2 diabetes and helps manage weight." | – |
| `grade_rationale.human_clinical` (46) | "Authorised in the EU since 15 September 2022 (Mounjaro, type 2 diabetes; weight management added in December 2023) and in the US since 13 May 2022." | – |
| frontmatter comments (15, 31), mechanism detail (74), study limitations (118, 139), molecule (200), pens (210), mechanism folds (252), unknowns (352, 353), KeyNumbers (432, 434), risks intro (436), thyroid (464) | "the EU label" / "EU product information" / "In the EU, Mounjaro comes as single-dose pens, single-dose vials … and multi-dose KwikPens" (now US labels where they say the same, or the EMA product information as evidence, marked) | – |
| What it is: Compare (170, 173, 174) | The CBG's position: "You do not know what is in it"; "how to use it … is unclear"; "Prescriber and pharmacist" | cbg-glp1-position |
| Approved products fold (184) | EU: Mounjaro since 15 September 2022 (type 2 diabetes in adults), weight management added 11 December 2023, type 2 diabetes from age 10 on 22 January 2026 | ema-mounjaro-procedural-steps, ema-mounjaro-procedural-steps-archive |
| Heart trial (311) | "The EMA accepted that Mounjaro reduces serious cardiovascular events in this group" (kept as evidence, marked) | – |
| Regulatory Lead (363) and TimeStrip (365–369) | "Yes, on prescription, in the EU, UK and US. Dutch basic insurance pays only for some diabetes use."; EU timeline bars (15 September 2022, 11 December 2023, 22 January 2026) plus the US bars | ema-mounjaro-procedural-steps, ema-mounjaro-procedural-steps-archive |
| Fold "The European Union and the Netherlands" (385–400) | EU: centralised procedure, holder Eli Lilly Nederland B.V.; the EMA added trial data for sleep apnoea (December 2024), HFpEF (January 2026) and cardiovascular risk (June 2026) without new indications; additional monitoring. Netherlands: prescription-only; type 2 diabetes reimbursed only under Bijlage 2 (two routes: BMI 30+ when metformin plus a sulfonylurea or basal insulin is not enough; very high cardiovascular risk with an SGLT2 inhibitor and metformin); weight management not reimbursed, staged Zorginstituut assessment (first discussion 5 October 2026); Dutch GP guidelines (NHG, via the Farmacotherapeutisch Kompas) advise against it for type 2 diabetes without very high cardiovascular risk and in primary care for obesity; the 2023 multidisciplinary obesity guideline predates it; costs: 4.1 million people meeting the weight criteria, up to €10 billion in theory, €1.3 billion practical estimate, staged assessment for more than 1 million | fk-tirzepatide, fk-regeling-zorgverzekering-bijlage-2-tirzepatide, zin-tirzepatide-obesity-assessment, zin-2025-obesity-staged-approach, cbg-glp1-position |
| Fold "Germany, Belgium, the United Kingdom and the United States" (402–410) | Germany: EU procedure; § 34 SGB V excludes medicines used mainly for weight loss from statutory insurance. Belgium: EU procedure; 1964 Medicines Act requires an authorisation; reimbursement not verified. (UK and US kept and expanded.) | de-sgb5-34, be-medicines-law-1964 |
| US paragraph (418) | "the EU label lists only hypersensitivity" (kept as evidence, marked) | – |
| Pill interaction (472) | "Here the regulators differ. The EU label considers …" (kept as evidence, marked) | – |
| Lithium (488, 562) | "Reports of lithium poisoning have been made when GIP/GLP-1 medicines were started or increased in people taking lithium" sourced to the Farmacotherapeutisch Kompas (now: burson-2026-tirzepatide-lithium, cotrik-2026-lithium-glp1-review) | fk-tirzepatide |
| Harm reduction "The legal route in the Netherlands" (522–524) | Prescription from a doctor; type 2 diabetes reimbursed under strict conditions; basic insurance does not pay for weight management (20 October 2026); Dutch guidelines put lifestyle treatment first, such as GLI | fk-regeling-zorgverzekering-bijlage-2-tirzepatide, zin-tirzepatide-obesity-assessment, fk-tirzepatide |
| Online vial (528) | "The CBG's summary: you do not know what is in it, how to use it, or what it will do to your health." | cbg-glp1-position |
| Fake pens checklist (543, 547) | "Report side effects to Lareb." | lareb-home |
| Who should not use it (559) | MTC/MEN 2: "not a formal EU contraindication, so discuss it" | – |

## Retatrutide (`src/content/compounds/en/retatrutide.mdx`)

| Where (old line) | What it said | Cite ids that left the page |
|---|---|---|
| frontmatter comment (16) | "the Mounjaro EU product information" | – |
| What it is: Compare (164, 166, 168, 172) | Trial product "made under a licence to strict manufacturing rules"; "Sterile? Required: trial medicines must follow good manufacturing practice"; "Medicines for research are an exception in the law"; "Illegal to sell or supply" (all Geneesmiddelenwet) | nl-geneesmiddelenwet |
| Status sentence (174) | "no regulator anywhere has authorised it, and it is not on the European Medicines Agency (EMA) list of applications under assessment dated 5 October 2026" | ema-medicines-json, ema-2026-10-under-evaluation |
| Legal callout (181) | "Dutch law forbids selling, supplying, stocking or importing a medicine without one. The exceptions are narrow: medicines for research, formal compassionate-use programmes, and a special exemption from the health inspectorate." | nl-geneesmiddelenwet |
| Molecule (197) | "its EU label says the tail binds albumin" (now the US label) | – |
| Liver-fat substudy (337) | the liver-outcome trial is recruiting "including in the Netherlands" | – |
| Regulatory Lead (393) and Compare (395–404) | "Approved nowhere and banned in sport. In the EU, in practice, it is legal only in a trial."; grid "Netherlands and the EU vs United States": no EU authorisation, no CBG product; not on the EMA list of applications under evaluation (5 October 2026); Dutch law forbids supply; no approved compassionate-use programme (CBG list); sport row | ema-medicines-json, cbg-geneesmiddeleninformatiebank, ema-2026-10-under-evaluation, nl-geneesmiddelenwet, cbg-compassionate-use-list |
| Fold "The European Union and the Netherlands" (419–429) | EU: no marketing authorisation, absent from EMA data and the evaluation list; legal use in trials, the outcomes trial has sites in Belgium, Germany and the Netherlands. Netherlands: CBG database; Geneesmiddelenwet art. 40 and its exceptions (research, approved compassionate-use programmes, an IGJ exemption under art. 40(3)); no programme or exemption for retatrutide, so in practice only trials, with Dutch sites in two | ema-medicines-json, ema-2026-10-under-evaluation, cbg-geneesmiddeleninformatiebank, nl-geneesmiddelenwet, cbg-compassionate-use-list |
| Fold "Germany, Belgium, the United Kingdom and the United States" (431–441) | Germany: AMG § 21; German centres in phase 3 trials, including the comparison with tirzepatide. Belgium: Medicines Act of 25 March 1964, art. 6 § 1; Belgian centres in the outcomes and liver trials. (UK and US kept and expanded.) | de-amg-21, be-medicines-law-1964, ema-medicines-json |
| Skin sensations (476) | "The EU product information for semaglutide (Wegovy) and tirzepatide (Mounjaro) also lists dysaesthesia" (now: the labels, US and EMA) | – |
| Human heart tissue (490) | "That conflicts with the German human-tissue study above" (now: "the human-tissue study above") | – |
| Harm reduction (534, 538) | "In the EU, retatrutide is in practice legal only inside a trial. You can look for recruiting trials in the EU and US trial registers"; citations of EMA data and the Geneesmiddelenwet for "approved nowhere … selling it is illegal" | ema-medicines-json, nl-geneesmiddelenwet |

## Glossary entries removed or rewritten

| File | Entry | Old text |
|---|---|---|
| `glossary/semaglutide.json` | `gvs` (removed) | term "GVS"; aliases "geneesmiddelenvergoedingssysteem", "Bijlage 2", "medicines reimbursement system"; "The Dutch system that decides which prescription medicines the basic health insurance pays for. Medicines on its 'Bijlage 2' list are only paid for under set conditions." |
| `glossary/tirzepatide.json` | `nhg-standaard` (removed) | term "NHG-Standaard"; aliases "NHG-Standaarden", "NHG standard", "NHG guideline"; "A treatment guideline for Dutch GPs, written by the Dutch College of General Practitioners (NHG)." |
| `glossary/tirzepatide.json` | `combined-lifestyle-intervention` (removed) | term "combined lifestyle intervention"; aliases "GLI", "gecombineerde leefstijlinterventie"; "A Dutch lifestyle programme for people with overweight or obesity, with a focus on things like physical activity and diet. Dutch guidelines put it first, before obesity medicines are considered." |
| `glossary/retatrutide.json` | `investigational-medicine` (definition rewritten) | "A medicine that is still being tested in clinical trials and has no marketing authorisation. In the EU it may be supplied only through narrow exceptions, mainly approved trials and formal access programmes." |

New English glossary entries (semaglutide.json): `medicare-part-d`, `medicaid`, `pharmaceutical-benefits-scheme`, `pbac`,
`pcpa`, `cda-amc`. They replace `gvs` for the per-country cost-and-coverage notes.
