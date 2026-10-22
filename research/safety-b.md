# Research notes: safety-b (product risk, monitoring, if something goes wrong)

Written 22 October 2026 for `safety/product-risk`, `safety/monitoring` and `safety/if-something-goes-wrong`.
Sources: `src/data/sources/safety-b.yaml` (new) plus ids registered by other groups (reused, not repeated).
Glossary: `src/i18n/en/glossary/safety-b.json`. No earlier draft of these files existed (no interrupted run).

## Key facts and their sources

### Product risk

| Fact on the page | Source id |
|---|---|
| 3 vials of semaglutide bought without prescription (Hungary): sellers' papers claimed ≥99% purity; one semaglutide peak on LC-MS, yet semaglutide was 14.37%, 8.97% and 7.7% of the powder; amount 28.56–38.69% above label; no living germs; endotoxin in all three (abstract), raised (8.95 EU/mg) in one (letter); 3 pen orders were non-delivery scams asking for "customs" payments | ashraf-2024-online-semaglutide, ashraf-2024-semaglutide-test-buys |
| 3 products sold as retatrutide (Australia): 51.3%, 165.0%, 190.0% of label; lead well below ICH limit; sterility/endotoxin not tested | piatkowski-2026-retatrutide-product-testing (reused) |
| 10 most frequent falsified peptide drugs in Belgium, from 3 suspected illegal internet pharmacies: large variation per unit, purity 5–75% (cysteine-containing peptides), arsenic up to 10× ICH parenteral limit in multiple samples, lead in one | janvier-2018-falsified-peptides-belgium |
| Haemolytic Bacillus cereus in 2 illegal injectable peptide drugs | janvier-2018-bacillus-cereus (title only; no abstract) |
| EGF found in a preparation thought to contain IGF-1 | vanhee-2017-egf-not-igf1 (title only) |
| Product sold as retatrutide held semaglutide and no retatrutide (Australian lab) | rubin-2026-jama-news (reused) |
| Cologne: 337 seized products, 12.8% peptide hormones/growth factors; Swiss border: 1,190 products, <20% held the claimed substance in the claimed amount | krug-2014-black-market-germany, weber-2017-swiss-border (reused) |
| EU OMCL network: 1,104 suspect products, 11% research peptides (further reading only) | deconinck-2021-geon-research-peptides |
| Synthesis impurities (deletion, truncated, insertion sequences, wrong building blocks, solvents, metals from catalysts); degradation pathways; what an EU specification includes (identity by ≥2 orthogonal methods, content, individual impurities to 0.1%, endotoxin, microbiological purity, elemental impurities, TFA); co-eluting impurities | ema-2025-synthetic-peptides-guideline |
| Unrelated peptides as contaminants ("lack of appropriate GMP"); TFA counter-ion | dhondt-2014-peptide-impurities |
| LC-based QC can be "blind": 20% and 43% mannitol undeclared in commercial custom peptides | choules-2020-nmr-mannitol |
| Endotoxin: outer membrane of Gram-negative bacteria, released when they die, main cause of pyrogenic reactions | schneier-2020-endotoxin-review |
| FDA: most certificates for BPC-157 contain only purity; nominators' certificates had no specified impurities, aggregates, bioburden or endotoxin; example certificates came from sellers' websites | fda-pcac-2026-bpc157-briefing (reused; PDF re-read 22 October 2026, pp. 15–18) |
| ISO/IEC 17025 = standard for testing labs; accreditation by a third party | nist-nvlap |
| Insulin in fake semaglutide: German state lab (Nov 2023), Austria patients reached; UK hospitalisations; two Dutch coma cases (NTvG 2026); Italian coma case (vial held insulin); EudraVigilance 234 reports, hypoglycaemia disproportionate; stolen insulin pens may be sold online as obesity medicine (IGJ, 20 October 2026); WHO: device may contain e.g. insulin | bfarm-ozempic-falsification, ema-2023-falsified-ozempic, mhra-2023-fake-weight-loss-pens, stammers-2026-insulin-falsified-semaglutide, antonacci-2026-falsified-semaglutide-coma, zinzi-2026-counterfeit-semaglutide-eudravigilance, igj-2026-10-stolen-medicines, who-2024-falsified-semaglutide |
| Dosing errors 5–20× with compounded semaglutide vials; unit confusion (mg, mL, "units"); hospitalisations; health workers' conversion errors | fda-2024-compounded-semaglutide-dosing-errors (reused; re-fetched, content current as of 26 July 2024) |
| Poison-centre case series: 3 people, 2 with 10-fold errors, symptoms for days | lambson-2023-semaglutide-administration-errors |
| Red flags of unsafe online sellers and packaging | fda-considering-online-pharmacy, igj-online-medicijnen, igj-2025-illegal-online-medicines |
| Salt forms are different active ingredients; "for research purposes" products sold with dosing instructions; discard multi-dose vial 28 days after first use; do not use a product that arrived warm | fda-unapproved-glp1-concerns (reused; re-fetched, content current as of 1 October 2026) |

### Monitoring

| Fact | Source id |
|---|---|
| GLP-1 GI effects → dehydration → rare deterioration of renal function, incl. acute renal failure (tirzepatide) | ema-epar-wegovy, ema-epar-mounjaro (product-information PDFs re-read 22 October 2026, section 4.4) |
| eGFR from creatinine; body size, activity, meat and medicines affect it | medlineplus-egfr |
| Tesamorelin (2 RCTs in HIV-infected adults with lipodystrophy): HbA1c ≥6.5% in 5% vs 1% by week 26; evaluate glucose before and periodically; 47% IGF-1 >2 SDS at 26 weeks; effects of prolonged high IGF-1 unknown; monitor IGF-1; contraindicated in pregnancy | dailymed-egrifta-sv-label (reused; SPL XML re-read 22 October 2026, sections 4, 5.2, 5.4, 14) |
| CJC-1295: 2 randomised placebo-controlled trials in healthy adults, IGF-1 1.5–3-fold for 9–11 days after one injection; n not in the abstract | teichman-2006-cjc1295 |
| HbA1c = 2–3-month average; unreliable with anaemia | medlineplus-hba1c |
| IGF-1 more stable than GH, dependable test | medlineplus-igf1 |
| Victoria (19 June 2026): 6 cases of acute liver injury after a product labelled retatrutide, possibly a contaminant; people who continue should see their GP about liver function tests; clinicians should record product name, ingredients, dose, place of purchase | vic-health-2026-retatrutide-liver |
| Liver tests: what they measure; abnormal ≠ disease | medlineplus-liver-function-tests |
| Semaglutide beneficial effect on plasma lipids; cholelithiasis; heart rate +3 bpm; STEP 1 DEXA substudy (N=140) more fat than lean mass lost | ema-epar-wegovy |
| Tirzepatide heart rate +3 to 5 bpm; oral contraceptive exposure fall "not clinically relevant" (EU) | ema-epar-mounjaro |
| US Mounjaro label 8.3: non-oral contraception or barrier for 4 weeks after start and each dose increase | fda-label-mounjaro (reused; note by tirzepatide group) |
| Vyleesi: mean maximal BP rise 6/3 mmHg, peak 2–4 h, back within 12 h; ensure BP well controlled before and periodically; contraindicated in uncontrolled hypertension/CVD; focal hyperpigmentation 1% (phase 3) and 38% after 8 daily doses | dailymed-vyleesi-label (reused; SPL XML re-read) |
| Melanotan: case reports of new/changing moles; 4 melanoma case reports; no conclusive link | habbema-2017-melanotan-review, cardones-2009-eruptive-nevi |
| Lean mass 15% or less to 40–60% of weight lost; lean ≠ muscle | neeland-2024-lean-mass (reused; abstract re-read) |
| GP care outside the deductible; lab tests ordered by the GP count towards it | zin-huisarts-zvw |
| Self-bought health tests: you pay, you interpret, false positives/negatives, many poorly studied | thuisarts-gezondheidstest |

### If something goes wrong

| Fact | Source id |
|---|---|
| Life-threatening: emergency number; otherwise GP / huisartsenpost; contact huisartsenpost before SEH; GP/huisartsenpost outside eigen risico, SEH inside | rijksoverheid-urgent-medical-help, rijksoverheid-huisartsenpost-seh (reused) |
| NVIC informs doctors, pharmacists, professionals; the public contacts GP/huisartsenpost, who can call NVIC | nvic-umcutrecht |
| Bring medicines and the substance or its packaging to hospital; do not drive yourself; NHS 111 when unsure | nhs-poisoning |
| Swiss case: woman did not consider weekly "life coach" injections as medication; non-judgemental history found it | buzzi-2026-retatrutide-case-report (reused) |
| WGBO art. 457 (no information to others without consent unless law requires); KNMG: verschoningsrecht towards police/justice; exceptions: consent, presumed consent, legal duty/right to report, conflict of duties (e.g. intoxicated patient who wants to drive), weighty interest; doctor must be able to justify | nl-wgbo-art-457-confidentiality, knmg-beroepsgeheim, knmg-beroepsgeheim-doorbreken (reused; KNMG page re-fetched 22 October 2026) |
| Lareb: anyone can report, incl. products bought online; also users of illegal medicines; Lareb does not share with doctor/pharmacist; no medical advice | lareb-bijwerkingen-melden (reused, re-fetched), lareb-2021-illegal-medicines |
| IGJ/CBG: report doubtful websites to the Landelijk Meldpunt Zorg | igj-2025-illegal-online-medicines |
| Germany: 116 117 out of hours; state poison centres 24 h | gesund-bund-notfallnummern |

## Verification log

- **PubMed**: every scholarly source above was looked up with `get_article_metadata` and the authors, title, journal, year, volume, pages, DOI and PMID were copied from the record. Full text read in PMC for Ashraf 2024 (JMIR, PMC11582493; JAMA Netw Open, PMC11297364). Abstracts only for Janvier 2018 (Talanta), Choules 2020, D'Hondt 2014, Schneier 2020, Stammers 2026, Antonacci 2026, Zinzi 2026, Lambson 2023, Teichman 2006, Habbema 2017, Deconinck 2021. Janvier 2018 (DTA letter) and Vanhee 2017 have no abstract: cited only for what their titles state.
- **Year choices**: Janvier 2018 (DTA, e-pub 1 Dec 2017, vol. 10), Vanhee 2017 (e-pub 8 Jul 2016, vol. 9), Choules 2020 (e-pub 10 Oct 2019, vol. 178) use the volume year; Teichman 2006 (e-pub Dec 2005, vol. 91).
- **Stammers 2026** has no DOI in PubMed; it is registered with PMID only. The title is PubMed's English rendering of a Dutch-language article; the original Dutch title was not seen, so it is not given.
- **EMA guideline**: PDF downloaded from ema.europa.eu and read (sections 4.3.2, 4.4.1 and the sterilisation passage). Dated 4 December 2025, effective 1 June 2026.
- **FDA BPC-157 briefing**: PDF downloaded and the certificate passages re-read (they name two sellers' websites; this site does not).
- **Labels**: Wegovy and Mounjaro EU product information PDFs downloaded and grepped; Egrifta SV and Vyleesi SPLs downloaded from the DailyMed API and read.
- **Web pages**: every URL in safety-b.yaml was fetched on 22 October 2026 (WebFetch). The TGA alert on a counterfeit retatrutide product timed out twice and is not used (Rubin 2026 covers the semaglutide-instead-of-retatrutide finding). FDA BeSafeRx overview page has no list; the "Considering an Online Pharmacy?" page has it and is the one cited. The FAMHP adverse-reaction page served a CAPTCHA; we did not try to get past it, so Belgium is covered only by the existing `<JurisdictionCard code="BE" />`. The US Poison Help page (poisonhelp.hrsa.gov) returned 403; the US row on public poison advice was dropped.
- **Allowlist**: all new URLs are on allowed hosts (ema.europa.eu, nist.gov, fda.gov, igj.nl, health.vic.gov.au, medlineplus.gov, thuisarts.nl, zorginstituutnederland.nl, nhs.uk, nvic.umcutrecht.nl, lareb.nl, gesund.bund.de).
- **Validator**: `npx tsx scripts/validate-content.ts` gives 0 errors. Note: on Windows `--only safety/product-risk` matches nothing (paths use backslashes), so the filter silently hides warnings; run the full validator or filter with `--only product-risk`.

## Conflicts and how they were resolved

- **Ashraf 2024, endotoxin**: the JMIR abstract says endotoxin was detected in all three samples (2.1645–8.9511 EU/mg); the results text gives two values as "<"; the JAMA letter says one sample had elevated endotoxin. The page originally said "toxins from germs in all three, at a raised level in one"; the fact-checker changed it to "a raised level in one; the paper is unclear about the other two" (see the fact-check log).
- **Ashraf 2024, content vs purity**: semaglutide above the labelled amount *and* only 7.7–14.37% of the powder look contradictory. The paper reports both and says the findings suggest low-mass, weakly ionising impurities (possibly skipped purification), which it did not identify. The page reports both numbers as the paper does and does not speculate about what the rest of the powder was.
- **Tirzepatide and the pill**: the EU SmPC calls the fall in exposure not clinically relevant; the US label advises non-oral or barrier contraception for 4 weeks after start and each dose increase. Both are stated.
- **Content guide vs brief on the emergency number**: the brief says "when to call 112"; CONTENT-GUIDE §1 and the validator forbid printing 112 on English pages. The pages say "your local emergency number"; `<JurisdictionCard code="NL" />` renders the instruction from the locale string.
- **Lareb and unregistered products**: the current Lareb FAQ says medicines bought online can be reported but does not mention illegal or unregistered products. A Lareb news item (27 December 2021) says both care providers and users of illegal medicines can report. Both are cited.
- **NVIC "only for professionals"**: the NVIC home page says it informs doctors, pharmacists and other professionals and tells the public to contact their GP or huisartsenpost; it does not literally say "not for the public". The page says what the source says.

## Open questions for the medical reviewer

1. Monitoring tables list which tests are "most useful" for which product class. These are mechanistic choices from labels and case reports, not from a guideline. Please check them, especially kidney tests for GLP-1 type products, liver tests for products from outside a pharmacy, and the absence of a calcitonin or thyroid test (deliberately not suggested).
2. The stop callout on product-risk advises taking sugar if the person can swallow, and the emergency number if drowsy or unconscious (from NHS and the existing warning-signs page). Please confirm the wording for a suspected insulin overdose, where lows can recur for a long time (the Dutch cases needed glucose for up to two days).
3. The "what it misses" column for creatinine/eGFR mentions muscle and meat; should creatine supplements be named (common among people who use peptides)? Not sourced yet.
4. Pregnancy test: the page frames it for anyone who could become pregnant; is that right for experimental peptides without any reproductive data?
5. The `glp1-class-hypo` explainer is reused inside a fold on monitoring; its registry entry does not yet list `safety/monitoring` in `pages` (warning; the file belongs to the explainer owners).

## Open questions for the legal reviewer

1. If-something-goes-wrong states: using a product on yourself is not one of the KNMG's listed exceptions to medical secrecy, and "we found no Dutch rule that makes a doctor report a patient to the police for using a product that is not an authorised medicine (checked 22 October 2026)". Please confirm, including whether any duty arises when a patient also supplies others.
2. The page links to `/en/legal/nl/` for the law on possession and use; that page is written by another group and did not exist when these pages were validated (validator warning: related route not found yet).
3. Reporting a seller to the IGJ: the page says anyone can report through the Landelijk Meldpunt Zorg. Is there any risk for a reporter who bought from that seller? Not addressed on the page.

## Validator warnings left, with reasons

- `if-something-goes-wrong.mdx`: related `legal/nl` does not exist yet (another group's planned page). (Fact-check, 22 October 2026: `legal/nl` now exists; this warning is gone.)
- `src/data/explainers.yaml`: `glp1-class-hypo` used on `safety/monitoring` but the route is not in its `pages` list (shared file, not ours to edit).
- Other media.json caption warnings belong to other groups' images.

## Fact-check log (independent fact-checker, 22 October 2026)

Scope: the three pages, `safety-b.yaml` (33 sources), `glossary/safety-b.json`, these notes, and the three
page photos. Every claim was re-read against its cited source; reused sources from other groups were
re-opened where a claim on these pages depends on them.

### Sources checked

- **PubMed (15 records, `get_article_metadata`)**: Ashraf 2024 (JMIR and JAMA Netw Open), Janvier 2018
  (Talanta and DTA letter), Vanhee 2017, Deconinck 2021, Choules 2020, D'Hondt 2014, Schneier 2020,
  Stammers 2026, Antonacci 2026, Zinzi 2026, Lambson 2023, Teichman 2006, Habbema 2017. Authors, title,
  journal, volume, pages, DOI and PMID all match the records. One fix: the Stammers co-author is
  "Hofste Op Bruinink D" in PubMed (capital O); changed. Stammers has no DOI in PubMed; D9116 is the PubMed
  PII (article number), so `pages: D9116` is right.
- **Full text re-read**: both Ashraf papers in PMC. Table 4 confirms "measured purity" = semaglutide mass /
  total powder mass (e.g. 3.86 of 50.1 mg = 7.70%), so "of the powder" is the paper's own measure. The
  endotoxin results text gives "<2.8658" and "<2.1645" EU/mg for two samples and 8.9511 EU/mg for one.
  Teichman 2006 publisher page: three authors from ConjuChem confirmed; no enrolment numbers.
- **Reused PubMed sources re-read for the claims here**: Krug 2014, Weber 2017, Piatkowski 2026 (letter,
  no abstract; claims kept as registered by the retatrutide group), Buzzi 2026, Branine 2026, Neeland 2024.
- **Web and regulator pages fetched (all 18 URLs in safety-b.yaml plus reused ones)**: EMA synthetic-peptides
  guideline PDF (downloaded and read: 4.3.2; the 4.4.1 specification list with "elemental impurities (e.g.
  in case of use of metal catalysts)", bacterial endotoxins and microbiological purity; identification
  "at least two orthogonal methods"; "risk of co-eluting impurities"; Ph. Eur. reporting threshold 0.1%;
  adopted by CHMP 21 November 2025, in effect 1 June 2026), NIST NVLAP, FDA BeSafeRx (21 September 2020),
  IGJ/CBG 3 September 2025, IGJ 20 October 2026 (stolen insulin pens, "mogelijk ook ... obesitasmedicatie"),
  Victoria health alert (19 June 2026), six MedlinePlus test pages, Thuisarts self-tests (27 March 2025),
  Zorginstituut huisarts (Zvw), NHS poisoning (12 June 2025), NVIC home page, Lareb 2021, gesund.bund.de
  (8 June 2022). Reused and re-fetched: the FDA BPC-157, TB-500 and KPV PCAC briefing PDFs (certificate
  passages, reproductive toxicity, long-term safety), the FDA unapproved GLP-1 page (salt forms, "for
  research" labels sold "with dosing instructions", 28-day discard, "arrives warm"; current as of 1 October
  2026), the FDA dosing-errors page (5–20×, provider errors, U-100 syringes, different concentrations;
  26 July 2024), the BfArM Ozempic page (wholesale level; CVUA Karlsruhe found insulin; Austrian patients
  reached), the EMA 2023 alert, NHS low blood sugar, NHS anaphylaxis, KNMG "wanneer doorbreken", Lareb
  "alles over bijwerkingen melden", IGJ 2023 Ozempic, Rijksoverheid huisartsenpost/SEH. The Wegovy and
  Mounjaro EU product information PDFs and the Egrifta SV and Vyleesi SPLs (DailyMed API) were downloaded
  and searched for every number used (renal function, heart rate, DEXA N = 140, pregnancy wording, HbA1c
  5% vs 1%, IGF-1 47% > 2 SDS, BP 6/3 mmHg, pigmentation 1% and 38%).
- **Photos**: Commons API licence check. mass-spectrometer-fda: public domain (FDA; Dr C. Hebling's name
  is on the coat, face not shown; a regulator lab, not a patient, so allowed under MEDIA-GUIDE "People and
  consent"). blood-sample-analyser: public domain (US Air Force, ID 250227-F-LX373-1005).
  huisartsenpost-oss: CC BY-SA 4.0 (RagingR2). Alt texts match the pictures.

No source had wrong metadata beyond the one capitalisation; no source was removed.

### Claims changed

product-risk:
- Endotoxin "the main cause of fever reactions" → "a major cause" (Schneier: "major contributors").
- Pécs row: "toxins from germs in all three" → "a raised level in one; the paper is unclear about the other
  two" (the results text gives only upper limits for two samples).
- KeyNumber title "The amount often did not match the label" → "did not match the label" (3 of 3 off).
- "These are small studies of a few products each" was false for Krug (337) and Weber (1,190) → "Most of
  these studies tested only a few products". "None tested enough products" → "seized products or a few
  test buys, not a random sample".
- Weber row "most of them steroids" → "most labelled as muscle-building (anabolic) drugs" (75% labelled as
  anabolic agents). Krug row "seized" → "black-market products from Germany".
- Janvier "a large spread ... between products" → "the amount of drug per vial varied a lot" (abstract:
  "high variation in amount of drugs per unit").
- Metals: "EU rules ask" → "EU guidance asks" (a CHMP guideline, not legislation); "catalysts" defined.
- Compare row 1: "Some show one identity test. You cannot check how it was done" was not in the source and
  wrong for the TB-500 example (identity by LC-MS and HPLC) → "Some list an identity test. Many show only a
  purity figure" (BPC-157 and TB-500 briefings). Row 4: "None of the reports the FDA saw" → "None of the
  example reports the FDA described". Header and detail "EU rules" → "EU guidance".
- HPLC fold: added the FDA BPC-157 and TB-500 briefings as sources for "most reports show a purity figure";
  Choules "bought from a commercial maker" → "bought for research" (custom synthetic peptides sourced
  commercially); "could not see" → "cannot see".
- Units fold: "depending on how much water went into the vial" is not in the FDA source (it speaks of
  different concentrations) → "Products come in different strengths".
- Stop callout: the ungrammatical "they must call" fixed; added "Do not give food or drink to someone who
  cannot swallow safely" (NHS low blood sugar).
- Fake-pen fold: the Germany row now says tests found no semaglutide and an official German lab (CVUA
  Karlsruhe) found insulin; the Zinzi and IGJ sentences were split and the 2018 start date added.
- Warning-signs table: "Prices that seem too good to be true" removed (it invites "expensive = safe", and
  price is seller-vetting under guide §1a) → "No licensed pharmacist you can ask questions" (FDA BeSafeRx).
  "A multi-dose vial is used for more than 28 days" narrowed to "An opened GLP-1 type vial" (the FDA advice
  is for compounded GLP-1 vials).

monitoring:
- Baseline step 3 reworded (MedlinePlus does not say "a change says more than one result"); step 4 "test
  then" → "see a doctor then" (the Victoria alert says to seek medical care).
- Full blood count, "what it misses": "a skin infection is often seen before it shows in the blood" is not
  in NHS cellulitis → "A skin infection: watch for red, hot, swollen skin instead".
- Liver fold: "harm the liver" now also cites IGJ (contamination can damage organs); "In Australia" →
  "In the Australian state of Victoria"; "for liver tests" → "about liver tests" (the alert says "for
  consideration of liver function tests").
- CJC-1295: added that three authors worked for the developer.
- PT-141 pigmentation: added the 1% figure from the main trials next to the 38% from the daily-use study,
  so the higher number is not read as typical.
- Lean mass: added Neeland's view that muscle changes look mostly in line with the weight lost (balance;
  the page had only the worrying range).
- Pregnancy: "For experimental peptides there are no human pregnancy data" generalised from three briefings
  → "For BPC-157, TB-500 and KPV, the FDA found no studies in pregnant women. Animal data were missing, or
  limited to one rat study." Table cell "These products are not for use in pregnancy" → "Several must not
  be used in pregnancy. For many, there are no data."
- "For most experimental peptides, the long-term effects in people have never been studied" → scoped to
  the three FDA briefings ("too little human data to judge long-term safety").
- GP route: "Blood is usually taken at a lab" → "Blood tests are often done by a lab outside the practice"
  (Zorginstituut); "bring the product or a photo" now also cites the Victoria alert.
- Long sentences (25–31 words) split for B1.

if-something-goes-wrong:
- Stop callout: "Stay with the person until help arrives" had no source (NHS anaphylaxis and poisoning do
  not say it) and was removed. "Do not drive yourself to hospital" now cites NHS poisoning, which was
  added to the callout's sources.
- Confidentiality: the KNMG "conflict of duties" exception covers serious harm to the patient **or**
  another person; the page said "someone else" only. The Lead, the Compare title and the row "is using a
  product one of the exceptions?" were softened from an absolute "not one of the exceptions" to "not named;
  a doctor may break secrecy to prevent serious harm, but only under strict rules". "Under the influence"
  → "drunk" (KNMG: "dronken"). The 56-word exceptions sentence became a list.
- Buzzi case: "before doctors found the cause" → "Only careful questions found the likely cause" (Naranjo
  "probable"); "asking every patient" → "asking patients directly" (abstract: "ask explicitly").
- The Victoria alert is now attributed to Victoria; long sentences split.

Glossary: `seh` lost the aliases "emergency department(s)" (they would auto-link UK and other English uses
to a Dutch-only definition); `iso-iec-17025` lost the over-broad alias "accreditation"; the
`deletion-sequence` definition now covers truncated sequences (its alias); `syringe-units` reworded; `nvic`
no longer says "not the public" (the NVIC page says it informs professionals and sends the public to the
GP). Added: `catalyst`, `solvent`, `enzyme`, `platelets`, `yellow-card`, `medwatch`, `bfarm` (all used on the
pages, none defined elsewhere).

### Guardrails

No amounts, schedules, reconstitution maths, stacks or seller names on any page. The FDA briefings and
Ashraf 2024 name sellers; the pages do not. The only dose-like figures are study or label descriptions
(5–20× dosing errors; 8 days of daily use in the Vyleesi pigmentation study; the contraception weeks from
the US Mounjaro label). No superlatives, no "safe/proven" for unapproved use. 112, 999 and 911 do not
appear.

### Left for the owner and reviewers

- The "In the seller" column of the warning-signs table is negative-only and regulator-sourced, and the page
  says no sign can identify a good product, but it is still a list for judging sellers. Guide §1a forbids
  "help finding or judging sellers"; the owner or legal reviewer should decide whether to keep the column.
- `blood-sample-analyser` shows a tube of blood. It is a clinical sample in a machine, not a wound, but
  MEDIA-GUIDE lists "blood" under fear imagery; owner to confirm.
- `src/data/explainers.yaml` (shared file) still needs `safety/monitoring` in the `pages` list of
  `glp1-class-hypo` (the only validator warning on these files).
- The statement that no Dutch rule makes a doctor report a patient to the police remains our own search
  result, flagged for the legal reviewer (Wetboek van Strafvordering art. 218 not read directly).
- Validator after fixes: 0 errors; the only warning touching these pages is the explainers.yaml one.
