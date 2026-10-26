# Research notes: group legal-en-b (English refocus, 24 October 2026)

Fact-check handoff for the English refocus (research/refocus-spec/content-brief.md) of:

- `src/content/pages/en/legal-routes.mdx` ("Legal routes to treatment in the US, the UK, Canada and Australia")
- `src/content/pages/en/legal/research-use-only.mdx`
- `src/content/pages/en/legal/sport-and-doping.mdx`
- `src/content/pages/en/legal/whats-changing.mdx`
- `src/data/tracker.yaml`, `src/i18n/en/tracker.json`
- `src/i18n/en/glossary/legal-b.json`
- `src/data/sources/en-legal-en-b.yaml` (18 new sources)
- cuts: `research/for-nl-site/MANIFEST-legal-en-b.md`

No other file was written. Nothing under `src/data/sources/refocus-*.yaml`, `src/data/compounds/` or
`jurisdictions.yaml` was touched; `media.yaml`, `heroes.yaml`, `media.json` and the allowlist needed no entry (no new
photo; every source host was already allowlisted, which the validator checks).

## 0. Runs and method

Three runs. The first two drafted the four pages, the tracker, the glossary and the sources file (committed in the
checkpoint 1b7304f, "not yet fact-checked"); the second also re-read the sources file. They were cut off before this
notes file. The third run (this one) treated the draft as unverified: it re-read the brief, CONTENT-GUIDE §1–§13,
`components.ts`, the merge notes (research/refocus-notes/merge.md, incl. §7 legal-review questions and §10 open items)
and the fact-checked research (us-uk-routes.md, canada-legal.md, australia-legal.md, ireland-nz.md and
feeds-help-extras.md §3–§4 with their "Fact-check (independent)" sections), checked every sentence of the four pages
against those files and against the registered source notes (script over `src/data/sources/*.yaml`), re-fetched
all 18 of this group's own sources (40 quotations matched by script against the live text, all found), re-read the
retatrutide product-testing letter in PubMed Central, fixed what was wrong or overstated (section 2), and wrote this
file. Facts are as of 23 and 24 October 2026 unless dated otherwise.

## 1. What changed, per page (against `git show nl-source-2026-10-23:<path>`)

### 1.1 legal-routes.mdx

Was "Legal routes to a peptide treatment in the Netherlands" (six Dutch routes). Now four countries in parallel (US,
UK, Canada, Australia, in that order), with the brief's fixed anchors. Structure: opening `<Compare>` (a peptide
approved nowhere, BPC-157, per route and country) → sections, each with Lead + one figure + short prose + folds:

| Section heading (id in the build) | Figure | Folds |
|---|---|---|
| Prescription (`#prescription`) | `prescription-four-countries` (approved peptides, where to check, the rule) | Prescribing online; NHS access in the UK |
| Off-label (`#off-label`) | `off-label-four-countries` | What your doctor should tell you |
| US compounding (`#us-compounding`) | `us-503a-ingredients` (503A steps) | The July 2026 advisory vote, point by point; Copies of semaglutide and tirzepatide |
| UK specials (`#uk-specials`) | `uk-specials-rules` | Pharmacy preparation in the UK |
| Compounding in Canada and Australia (extra section) | `compounding-ca-au` | – |
| Canada: special access (`#canada-special-access`) | `canada-sap-steps` | What the law says |
| Australia: SAS (`#australia-sas`) | `australia-sas-routes` | What Ahpra expects from prescribers |
| Early access in the US and the UK (extra; no fixed anchor, as us-uk-routes.md §0a suggests) | `early-access-us-uk` | What early access needs from the product |
| Personal import (`#personal-import`) | `personal-import-four-countries` | More on each country's rules |
| Trials (`#trials`) | two KeyNumbers | How to look for a trial, and what to expect |
| What this means for you | Checklist | – |

**Anchors.** The eight fixed ids are produced by the heading texts (Astro's heading-id plugin keeps an explicit `id`
only on element headings, and an MDX JSX `<h2 id>` would drop out of the table of contents; there is no anchor
component). Verified in the build: all eight ids exist in `dist/en/legal-routes/index.html`. An MDX comment at the top
of the body names the eight headings and says not to change their text. If a heading is ever renamed, `npm run
check:html` reports the compound pages' links to it as missing anchors (warnings).

### 1.2 legal/research-use-only.mdx

The NL/BE columns and the EU legal reasoning left; the page now answers for the US, the UK, Canada and Australia:
what the label is (21 CFR 809.10), what decides whether a product is a medicine in each country (a four-row
diagram: 21 CFR 201.128, HMR reg. 2, Food and Drugs Act s. 2, TG Act s. 3), what three regulators say about the
label, the US intended-use reasoning (kept), a four-country Compare (sale, parcel, fines), and the licensed-vs-RUO
Compare now sourced to US, UK, Canadian and Australian rules. The heading question "Is it legal for me to buy a
research-labelled peptide?" (commerce word) is now "What does the label change for me?". The practical steps are now
a `<Checklist>` (it had grown above 80 visible words); a reporting step names FDA MedWatch, Yellow Card, Canada
Vigilance and the TGA and links the contact cards on `safety/if-something-goes-wrong`.

### 1.3 legal/sport-and-doping.mdx

Who is tested, and where to ask, per country: USADA (US), UK Anti-Doping, Sport Integrity Canada (the CCES's name
since November 2025; the page says "formerly the CCES") and Sport Integrity Australia, with Ireland (Sport Ireland)
and New Zealand (the Sport Integrity Commission Te Kahu Raunui, which absorbed Drug Free Sport NZ on 1 July 2024) as
notes, in a fold and as two "(note)" rows. The brief's names "CCES" and "Drug Free Sport NZ" are therefore given as
former names (ireland-nz.md 4.9 flags the second). The Dopingautoriteit, NL and BE material left. Retatrutide: the
page explains the apparent conflict the merge flagged (merge.md §10): not named on the list; banned on the wording of
S0 (UKAD's summary); Sport Integrity Australia's page says it "is not listed" and does not discuss S0; "ask your
anti-doping organisation". The TUE section got a fold ("The 2023 and 2027 standards for exemptions") for two
sentences, to keep the visible text near 80 words.

### 1.4 legal/whats-changing.mdx, tracker.yaml, tracker.json

The EU section and the UK/DE/NL enforcement section left; a "UK, Canada and Australia" section (diagram
`uk-ca-au-watch` + fold) replaced them. Tracker: five new items (below); no item deleted; EU, DE and NL items stay with
their jurisdiction tags (hidden on English); their English text stays (a published locale needs text for every item).

| Item | Status, updated, next | Sources | Research row |
|---|---|---|---|
| `uk-high-risk-wellbeing-procedures` | consultation, 2026-10-21, next 2027-01-13 | `uk-dhsc-2026-high-risk-cosmetic-wellbeing-consultation` | feeds-help-extras 4.1 (id shortened) |
| `ca-hc-injectable-peptides-enforcement` | watching, 2026-05-07 | `ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-database`, `ca-cpsa-2026-04-injectable-peptides`, `ca-hc-pdl-notices-2026` | 4.2; `updated` is the May recall, not the 29 July injunction statement, which is left out (its title and URL name the seller) |
| `au-personal-import-packaging` | in-force, 2026-09-08 | `au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging`, `au-tga-personal-importation-scheme`, `au-tga-compounded-medicines-guidance` | 4.3 (fact-checked wording: identifiable packaging in law; "original packaging where possible" as TGA advice; travellers' written authority). The research's separate `au-compounded-medicines-guidance` row is folded in as one sentence (same instrument, same date) |
| `au-tga-peptide-compliance-priority` | watching, 2026-10-06 | `au-tga-2026-06-peptide-compliance-priority`, `au-tga-2026-06-cmo-peptide-statement`, `au-tga-media-releases-peptide-log-2026-10-24`, `au-tga-2026-10-prescription-import-infringements` | 4.3; the research's `au-federal-court-peptide-advertising` row is folded in, company not named |
| `au-advertising-code-review` | watching, 2026-09-03 | `au-tga-2026-07-advertising-code-consultation` | 4.3 says "consultation"; set to `watching` because comments closed on 3 September 2026 and no decision was published (the status ladder's "Public consultation" means comments can still be sent) |

Changed existing items: `uk-mhra-weight-loss-raids` gained `uk-mhra-2026-02-second-facility` (research 4.1) and one
clause on the February (Lincolnshire farm) and May (near Northampton) raids; `us-pcac-2026-peptide-vote` and
`wada-2027-prohibited-list` lost their EU/Dutch sentences (saved, manifest); the US items cite the Federal Register
search of 23 October 2026 beside that of 22 October.

### 1.5 glossary legal-b.json

Removed (manifest): ten German/EU entries. Kept: the UK, US and sport entries. Added by the earlier runs: `usada`,
`right-to-try`, `eams`, `global-dro`. Added in this run (terms the pages introduce that no glossary file defined):
`nice-uk` (no "NICE" alias, because aliases match case-insensitively and would link the word "nice"; the page uses
`<Term id="nice-uk">NICE</Term>`), `scottish-medicines-consortium`, `gphc`, `telehealth`, `isrctn`, `anzctr`,
`care-quality-commission`. Every `see_also` resolves (checked by script).

## 2. Corrections made in this run (to the earlier runs' draft)

| Where | Was | Now | Why |
|---|---|---|---|
| legal-routes, "Prescribing online", UK | "weight-loss medicines may not be prescribed on a questionnaire alone" | the GPhC is named; its guidance says they are "not suitable" for questionnaire-only prescribing | the source is regulator guidance, not a statutory ban |
| legal-routes, same fold, Canada | a dispensing rule under a heading about online prescribing | adds that provincial bodies oversee how doctors practise and that we did not research their rules | the Canadian line did not answer the heading |
| legal-routes, NHS fold, Wales | "these medicines are prescribed only within a specialist service" | "NICE says, weight-loss medicines are prescribed only within a specialist service" | TA1026 4.15 is the only Welsh source read (us-uk-routes 7.10) |
| legal-routes, US compounding | vote result without "as reported" or "against FDA staff" in the visible paragraph | both added | CONTENT-GUIDE §1 canonical PCAC framing (the fold already had all five points) |
| legal-routes, PCAC fold | "None is in category 1 … except GHK-Cu" (GHK-Cu is not one of the seven) | two sentences | precision |
| legal-routes, pharmacy preparation | the s. 10 amendment "had not started on 24 October 2026" | the official text did not yet include it; we could not confirm whether the commencement day has been set | us-uk-routes UNRESOLVED 3 |
| legal-routes, personal import | "The TGA has fined people who imported a peptide" | "In 2024 the TGA fined a person …" | one infringement notice to one individual (`au-tga-2024-04-peptide-import-infringement`) |
| legal-routes, BPC-157 KeyNumber | sources did not cover CJC-1295 and MOTS-c in Australia | adds `ctgov-search-status-b/-d-2026-10-23`, `au-anzctr-search-status-b/-d-2026-10-23` | the "counted" line names them |
| legal-routes, trials fold | TRIUMPH-Outcomes "people with heart or kidney disease" | "people with overweight and disease of the heart, blood vessels or kidneys" | NCT06383390 title: BMI ≥27 and atherosclerotic cardiovascular disease and/or CKD |
| legal-routes, early access fold | "Only two early-access records exist" | "are registered on ClinicalTrials.gov" | the search covers one registry |
| legal-routes, Compare, Canada SAP cell | "Health Canada has not authorised BPC-157." | adds "or assessed its safety and effect" | brief, Canada caution; canada-legal 11.3 |
| legal-routes, research-use-only | "Border Force" | "UK Border Force" / "Australian Border Force" | two different agencies |
| research-use-only, Compare | "Have people been fined for a parcel for their own use?"; AU "yes" | "Have individuals been fined for importing such a product?"; AU: yes, and "the releases do not say if it was for their own use" | neither TGA release says "own use" |
| research-use-only, lab-test fold | "a drug-checking service", "an accredited lab" | "a private drug-testing service", "an independent accredited lab" | PMC full text: "a community-facing private drug analysis service"; "an independent National Association of Testing Authorities-accredited laboratory" (doi 10.1111/dar.70231) |
| research-use-only, steps | "Health Canada" as the reporting route | "Health Canada's Canada Vigilance Program" + link to the contact cards | brief, reporting names |
| sport-and-doping, Canada row | "can be a violation, without a test" | "can lead to a violation, not only a positive test" | the source says use, administration, trafficking or possession "could result in" a violation; "without a test" was our inference |
| sport-and-doping, PT-141/SS-31 row | residue marker after the row's closing `|` | inside the last cell, before the `|` | CONTENT-GUIDE §1b marker placement |
| whats-changing | intro and closing paragraph 115 words | about 90 | "≤ ~80 visible words" |

## 3. Facts and their sources (all four pages)

Every sentence carries its `<Cite>`; the table lists the facts that are new on English (European facts left; see the
manifest) and the research row they come from. Reused ids are in `src/data/sources/refocus-*.yaml` or older files;
new ids in `en-legal-en-b.yaml` are marked **new**.

### 3.1 legal-routes

| Fact | Source ids | Research |
|---|---|---|
| No approved BPC-157 product in the US; no UK licence; not authorised by Health Canada; not in the ARTG | `usc-21-355`, `fda-pcac-2026-bpc157-briefing`, `uk-hmr-2012-reg-46`, `uk-mhra-substance-index-status-c-2026-10-23`, `ca-hc-2026-04-think-twice-peptides`, `au-artg-search-status-c-2026-10-23`, `au-tga-how-we-regulate-peptides` | US-01, UK-01, canada 5.2, australia §1 |
| Off-label = an approved/licensed/authorised/ARTG medicine used another way, in each country | `fda-off-label-use`, `mhra-2009-dsu-off-label`, `gmc-2021-prescribing-unlicensed`, **`ca-hc-2019-investigational-use-marketed-drugs`**, `au-ahpra-prescribing-unapproved-guidance` | US-06–08, UK-08–13, australia §7 |
| 503A: one patient, allowed ingredients (USP, approved-drug component, 503A list); list of six, none a peptide, unchanged since March 2019; formal rulemaking | `usc-21-353a`, `ecfr-21-216-23`, `fda-503a-bulks-page` | US-10–14 |
| UK special: clinical need, licensed first, licence holder, no advertising; non-medicines "least acceptable", "should be avoided whenever possible" | `uk-hmr-2012-reg-167`, `mhra-specials-guidance`, `mhra-gn14-specials` | UK-14–17 |
| Pharmacy preparation (Medicines Act s. 10 via HMR reg. 4); lifts licence rules only, not reg. 214; amendment pending | `uk-ma-1968-s10`, `uk-hmr-2012-reg-4`, `uk-hmr-2012-reg-214` | UK-18 and its fact-check |
| Canada: provinces regulate compounding; not a way round approval; "should be produced from" authorised or pharmacopoeial ingredients; s. 3 advertising applies; May 2026 recall of BPC-157 and GHK-Cu powder (RA-82047, cited through the neutral index); June 2025 GLP-1 position | `ca-hc-pol-0051-compounding`, `ca-hc-recalls-database`, `ca-hc-2025-glp1-compounding-position` | canada §8 |
| Australia: compounding for one person after the prescription; TGA does not evaluate first; GLP-1 compounding excluded from 1 October 2024; no public advertising (in the Regulations since 8 September 2026); TGA "will take legal action against all entities…" incl. compounding pharmacies | `au-tg-regs-sch-5-item-6-compounding`, `au-tga-compounded-medicines-guidance`, `au-tga-2024-06-glp1-compounding-update`, `au-tg-amendment-2026-measures-1`, `au-tga-media-releases-peptide-log-2026-10-24` | australia §8 |
| SAP: serious or life-threatening condition, conventional treatments failed/unsuitable/unavailable; practitioner requests; credible evidence; maker supplies and sets cost, else cancelled; practitioner reports; C.08.010/C.08.011 | `ca-hc-sap-drugs`, `ca-fdr-c08-010-special-access` | canada §7, 2.3 |
| SAS A/B/C and Authorised Prescriber: who, what, 28 days; TGA wants human studies for that peptide, form, route and use; no site peptide on the Category C or established-history lists; doctor responsible, may refuse; sponsors not obliged; no override of state law | `au-tg-regs-reg-12a-sas-category-a`, `au-tg-act-s19-access-approvals`, `au-tga-sas-individual-patients`, `au-tga-peptides-health-practitioners`, `au-tga-established-history-lists-2026-10-24`, `au-tg-regs-reg-12b-authorised-prescriber`, `au-tga-authorised-prescriber`, `au-tga-access-unapproved-goods-practitioners` | australia §7 (and its fact-check item 6) |
| Ahpra September 2026 guidance and news; first case study (two patients had adverse reactions and stopped) | `au-ahpra-2026-09-peptide-prescribing`, `au-ahpra-prescribing-unapproved-guidance` | australia §7, §10 |
| Expanded access, Right to Try, EAMS: criteria, company not obliged, FDA "vast majority", cost recovery, CMC data, 312.81 meaning; three current EAMS opinions, none a site peptide; two expanded-access records (retatrutide, elamipretide) | `fda-expanded-access`, `fda-expanded-access-patients`, `usc-21-360bbb`, `ecfr-21-312-subpart-i`, `usc-21-360bbb-0a`, `fda-right-to-try`, `ecfr-21-312-81`, `uk-hmr-2012-reg-167c`, `mhra-eams-overview`, `mhra-eams-scientific-opinions`, `mhra-eams-expired-opinions`, `ctgov-expanded-access-search-2026-10-23`, `ctgov-nct07629401`, `ctgov-nct04689360` | US-25–34, UK-19–22 |
| Personal import: US "in most circumstances … illegal", "should not be interpreted as a license", ~3 months, commercial shipments; UK reg. 17(6), Border Force seizures (FOI 22/431, 2022); Canada GUI-0116, CBSA D19-9-1, s. 27.2; Australia PIS conditions, eScripts not accepted, authority after detention does not count, unlabelled vials seized and destroyed, BPC-157 Schedule 4, 2024 infringement notice, Victoria s. 36B, NSW S4D | `fda-personal-importation`, `fda-rpm-ch9-personal-importations`, `uk-hmr-2012-reg-17`, `mhra-foi-22-431-personal-import-seizures`, `ca-hc-gui-0116-personal-import`, `ca-cbsa-d19-9-1`, `ca-fda-s27-2-removal-destruction`, `au-tg-regulations-1990-sch-5-item-1`, `au-tga-personal-importation-scheme`, `au-tga-2026-05-peptide-import-warning`, `au-poisons-standard-2026-10`, `au-tga-2024-04-peptide-import-infringement`, `au-vic-dpcs-act-1981`, `au-nsw-ptg-act-1966`, `au-nsw-health-s4d-2026`, `au-tga-2026-09-personal-import-packaging` | US-40–43, UK-28–30, canada §6, australia §6 and 2.5 |
| Trials: BPC-157 one planned US trial (NCT07803250), none with a UK, Canadian or Australian site; none for TB-500, KPV, MOTS-c, CJC-1295; retatrutide 26 US, 8 UK, 10 CA, 6 AU; NCT07165028 recruiting in all four; TRIUMPH-Outcomes ~10,000, active not recruiting, sites in UK, CA, AU; elamipretide open trials in US, UK, CA; consent and ethics rules in each country | `ctgov-us-uk-peptide-search-2026-10-23`, `isrctn-peptide-search-2026-10-23`, `ca-ctgov-canada-peptide-search-2026-10-23`, `au-anzctr-search-status-c-2026-10-23`, `ctgov-search-status-b/c/d-2026-10-23`, `au-anzctr-search-status-b/d-2026-10-23`, `ca-ctgov-retatrutide-ca-au-2026-10-24`, `ctgov-nct07165028`, `ctgov-nct06383390`, `ecfr-21-50-25`, `ecfr-21-312-20`, `ecfr-21-56-103`, `uk-si-2004-1031-reg-12`, `ca-fdr-c05-clinical-trials`, `au-tg-regs-sch-5a-item-3-clinical-trials`, `nhs-clinical-trials`, `ca-hc-ctsp-retatrutide-2026-10-24`, `au-anzctr-search-status-a-2026-10-24` | US-35–39, UK-23–27, canada §9 |
| Approved peptide medicines and where to check (Drugs@FDA, MHRA Products, DPD/DIN, ARTG/AUST R); prescription rules in each country | `fda-drugsatfda-*`, `fda-drugsatfda-database`, `usc-21-353`, `mhra-glp1-what-you-need-to-know`, `uk-mhra-substance-index-status-a-2026-10-24`, `uk-hmr-2012-reg-214`, `ca-sbd-ozempic`, `ca-sbd-mounjaro`, `ca-noc-egrifta`, `ca-dpd-egrifta-din-02438712`, `ca-hc-pdl-overview`, `au-artg-ozempic-308324`, `au-artg-mounjaro-439430`, `au-tga-about-artg`, `au-tga-prescription-medicines-overview` | US-01–05, UK-01–04, canada 5.2, merge 3.2 (tesamorelin CA: approved 2014, no longer sold) |
| GMC remote prescribing paras 26, 34–35; GPhC weight-loss verification; NICE TA1026/TA875; SMC2497/SMC2653; telehealth warnings | `gmc-2021-deciding-safe-to-prescribe`, `gphc-2025-distance-pharmacy-guidance`, `nice-ta1026-tirzepatide`, `nice-ta875-semaglutide`, `smc-2497-semaglutide-wegovy`, `smc-2653-tirzepatide-mounjaro`, `fda-telehealth-promoting-compounded-drugs`, `fda-2026-03-telehealth-warning-letters`, `fda-unapproved-glp1-concerns` | UK-05–07c, US-49–52 |

### 3.2 research-use-only

| Fact | Source ids |
|---|---|
| "For Research Use Only" is a US labelling statement for in-vitro diagnostics | `ecfr-21-809-10` |
| What decides whether a product is a medicine: US intended use; UK presentation or function; Canada "restoring, correcting or modifying organic functions"; Australia "influencing, inhibiting or modifying a physiological process" | `ecfr-21-201-128`, `uk-hmr-2012-reg-2`, `ca-fda-s2-definitions`, `au-tg-act-s3-definitions` |
| Health Canada: the label "does not make these products legal"; TGA: such words "do not change whether a product is regulated as a therapeutic good"; FDA letters; no MHRA statement on the label found | `ca-hc-2026-04-think-twice-peptides`, `au-tga-how-we-regulate-peptides`, `fda-warning-letters-index`, **`uk-govuk-search-legal-en-b-2026-10-24`**, `mhra-2026-10-counterfeit-pens` |
| Licensed medicines: GMP licence and inspection (UK, AU, CA); sterile manufacture (CA C.02.029) and US batch sterility testing (211.167); batch identity/strength testing before release (211.165, C.02.018); side-effect reporting duty with 15 days (314.80, C.01.017) | **`mhra-gmp-gdp-guidance`**, **`au-tga-manufacturing`**, **`ca-fdr-c02-018`**, **`ca-fdr-c02-029`**, **`ecfr-21-211-167`**, **`ecfr-21-211-165`**, **`ecfr-21-314-80`**, `ca-fdr-c01-017-manufacturer-adr` |
| Parcels and fines per country; Health Canada cost recovery; TGA infringement notices (2024 peptide; October 2026 prescription-only medicines) | `fda-personal-importation`, `mhra-foi-22-431-personal-import-seizures`, `ca-cbsa-d19-9-1`, `ca-hc-gui-0116-personal-import`, `ca-fda-s30-7-cost-recovery`, `au-tga-2026-05-peptide-import-warning`, `au-tga-2024-04-peptide-import-infringement`, `au-tga-2026-10-prescription-import-infringements` |
| Three vials sold as retatrutide in Australia: 51% to 190% of label; NATA-accredited lab; metals low; sterility and endotoxin not tested | `piatkowski-2026-retatrutide-product-testing` (PMC13445994, re-read) |
| Reporting routes | `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `au-tga-report-adverse-event`, `ca-hc-complaints` |

### 3.3 sport-and-doping

| Fact | Source ids |
|---|---|
| USADA: testing 365 days a year, no notice out of competition; who is subject | **`usada-testing`** |
| USADA: BPC-157 in S0; a TUE "unlikely" because permitted alternatives exist; Drug Reference Line | **`usada-bpc-157`** |
| UKAD: tested any time, any place; refusing can carry a four-year ban; rules via national governing bodies, a recreational-athlete category with a five-year test; Global DRO countries, reference number, athletes cannot rely on their doctor | **`ukad-introduction-testing`**, **`ukad-anti-doping-rules`**, **`ukad-checking-medications`** |
| Canada: Sport Integrity Canada runs the CADP, more than 70 bodies, a condition of participation; use, administration, trafficking or possession could be a violation; 2027 CADP from 1 January 2027; April 2025 four-year sanction (BPC-157 and TB-500; on information; "in any capacity", "including training with teammates") | `ca-sic-cadp`, `ca-sic-2026-04-peptides-reminder`, `ca-sic-2027-cadp`, `ca-sic-2025-04-bpc157-tb500-sanction` |
| Australia: anyone signed up to a body that follows the National Anti-Doping Rules; testing anywhere, any time, incl. home and abroad; evading can be a violation; strict liability "no matter the source"; TUE unlikely for an unregistered medicine; Global DRO and the Sport Integrity App; retatrutide "not listed" | **`au-sia-anti-doping`**, **`au-sia-athlete-testing`**, `au-sia-2026-05-peptides-statement`, `au-sia-peptides`, `au-sia-retatrutide` |
| Ireland and New Zealand notes; Medcheck; Global DRO | `ie-sport-ireland-act-2015`, `ie-sport-ireland-medcheck`, `nz-sportnz-integrity-path`, `nz-sic-sports-anti-doping-rules`, `nz-sic-2026-06-peptides-trend`, `nz-sic-checking-medications` |

The WADA material (S0, S2, S4.4, the 2027 list and explanatory note, Code 2021 and 2027, ISTUE 2023 and 2027,
Monitoring Program, Weber 2017, Krug 2014) is unchanged from the 22 October 2026 page and was not re-researched.

### 3.4 whats-changing and the tracker

As in 1.4; the UK, Canadian and Australian sentences rest on `mhra-2026-10-counterfeit-pens`,
`uk-mhra-2026-02-second-facility`, `mhra-2026-05-largest-seizure`, `mhra-2026-01-seizures-2025`,
`uk-dhsc-2026-high-risk-cosmetic-wellbeing-consultation`, `ca-hc-2026-04-think-twice-peptides`,
`ca-cpsa-2026-04-injectable-peptides`, `ca-hc-recalls-database`, `ca-hc-pdl-notices-2026`,
`au-tg-amendment-2026-measures-1`, `au-tga-2026-09-personal-import-packaging`, `au-tga-compounded-medicines-guidance`,
`au-tga-2026-06-peptide-compliance-priority`, `au-tga-2026-06-cmo-peptide-statement`,
`au-tga-media-releases-peptide-log-2026-10-24`, `au-tga-2026-10-prescription-import-infringements`,
`au-tga-2026-07-advertising-code-consultation`, `au-tga-2026-scheduling-consultations-no-peptides`. Each note was
read against the sentence it supports (England consultation: under-18 exception "except NHS care or treatment of a
medical condition", CQC registration, transition period, criminal offence, no peptides or NAD+ named).

### 3.5 Seller rule

No cited document's title or URL names a seller or company: enforcement that names one is cited through neutral
records (`ca-hc-recalls-database` for RA-82047; `au-tga-media-releases-peptide-log-2026-10-24` for the 28 September
2026 Federal Court case; `fda-warning-letters-index` and `fda-compounding-actions-index` for FDA letters). The Health
Canada injunction statement of 29 July 2026 is not cited. The volleyball sanction's title names "U SPORTS" (the
university sport body, not a business); the page names neither the athlete nor the university.

## 4. Removed sections (also in the manifest)

legal-routes: frontmatter, opening Compare, the six Dutch routes (prescription under the Geneesmiddelenwet, IGJ
off-label position, artsenverklaring, magistrale bereiding, Dutch trials, CBG compassionate use), the Dutch "What this
means for you". research-use-only: the EU reasoning figure and fold, the NL/BE columns, EU-law cells of the
licensed-vs-RUO Compare, the Lareb/FAMHP reporting. sport-and-doping: the NL/BE "who is tested" figure, Dutch
paragraphs in three folds, the NL card. whats-changing: the EU reform section, the UK/DE/NL enforcement section, the
Dutch sport paragraph, the European Parliament line. Glossary: ten German/EU entries. Tracker: two European sentences
(saved in i18n-replaced-en.json). 28 manifest rows in all, plus the glossary and tracker tables.

## 5. No-loss check (cite ids, `git show nl-source-2026-10-23:<path>` against the working file; `<Cite>`, figure `source` and `further_reading`)

| Page | Before | After | Removed | Kept | Added |
|---|---|---|---|---|---|
| legal-routes | 26 | 139 | 24 | 2 (`ctgov-nct06383390`, `ctgov-nct07165028`) | 137 |
| legal/research-use-only | 22 | 40 | 16 | 6 | 34 |
| legal/sport-and-doping | 25 | 40 | 5 | 20 | 20 |
| legal/whats-changing | 42 | 51 | 13 | 29 | 22 |

Every removed id is a Dutch, Belgian, German or EU-frame source and is listed in the manifest (checked by script:
58 removed, 58 found). No non-European claim, study, number or caveat was dropped: the Piatkowski test, the Belcourt
editorial, the US intended-use reasoning, all WADA content, Weber 2017 and Krug 2014 (marked evidence) stay. Tracker:
no item removed; `ema-medicines-search` and `nl-geneesmiddelenwet` left one item's `sources` list (manifest). Every
source stays registered.

## 6. Validation

- `npx tsx scripts/validate-content.ts --only <legal-routes | research-use-only | sport-and-doping | whats-changing |
  tracker | legal-b | en-legal-en-b>`: **0 errors, 0 warnings** in each (summary length and reading ease, Lead
  length, figure props, commerce words, emergency numbers, allowlist, source ids).
- `check-locale-residue --only <each page>`: 0 hits in the sources. The brief's grep: only false positives
  ("s**epar**ate", "pr**epar**ation", "co**nvic**tion", "Ca**nada**"), the marked cite-id line in sport-and-doping
  (EMA orphan designation) and the marked Krug 2014 line, and the hidden EU/DE/NL tracker items (text and comments).
- `astro build`: 136 pages; the eight anchors exist; `check-no-commerce`: passed. `check-html`: 2 errors, both a link
  to `/en/legal/nl/` in `the-case-for-reform` (not this group's file).
- `check-locale-residue --dist dist`: on these four built pages, **error hits come from glossary tooltips of another
  group's file**, `src/i18n/en/glossary/guides.json`: the definitions of "medicines regulator" ("the EMA in the EU,
  the CBG in the Netherlands and the FDA in the US"), "prescription-only medicine" ("In the Netherlands, a pharmacist
  may not hand it over without one") and "off-label" ("In the Netherlands a doctor may do this only if professional
  guidelines exist"). Everything else is a reference-list warning (cited titles: the EMA orphan designation, Krug 2014).
- Visible words per section: all near or under 80, except whats-changing "The United States" (102, unchanged from the
  22 October page: the canonical PCAC paragraph plus the "What we do not track" note).

## 7. Open questions for the legal and medical reviewers

1. **Canada, SAP wording.** Health Canada's advertising guidance (2023) may treat educational messages about
   unauthorised products as promotional if they suggest availability through the SAP (canada-legal 11.3). The routes
   page describes the SAP neutrally, gives BPC-157's SAP cell an "unknown" verdict, and says Health Canada has not
   authorised it or assessed its safety and effect. Is "unknown" acceptable, or should the cell carry no verdict?
2. **Canada, injectable peptides as prescription drugs** (merge §7.7): presented as Health Canada's position only; the
   personal-import cell is "unknown" for that reason. Whether a resident commits an offence by importing an unlisted
   peptide for personal use is open (canada-legal 17.2).
3. **UK, pharmacy preparation of peptides under s. 10** and which quality rules apply (us-uk-routes 7.8); commencement
   of S.I. 2025/1249 art. 4.
4. **UK, a seller abroad and the buyer's liability** (us-uk-routes 7.6) and current Border Force practice (the only
   official figures are from 2022, FOI 22/431).
5. **Australia,** possession law beyond NSW and Victoria not checked; BPC-157's S4D status in NSW is unresolved (the
   page says NSW is an offence "only for medicines on the state's own list" and does not say whether BPC-157 is on it).
6. **Retatrutide in sport:** SIA "not listed" vs. S0 (merge §10). The page reports both and tells athletes to ask.
7. **Semax and Selank in sport:** registered in Russia, so S0 "may not apply"; WADA has not said. Verdict "unknown".
8. **Right to Try and obesity** (us-uk-routes 7.3): the page gives the 312.81 criteria and does not apply them.
9. **UK, Northern Ireland NHS access** not checked; Wales only through NICE TA1026 4.15.
10. **Thymalfasin, UK status** unresolved (us-uk-routes 7.9): the pages say nothing about it.
11. Medical reviewer: the sport page's TUE table (right-hand column) is our reading, flagged in an "uncertain" callout.

## 8. For other groups and the lead

- `src/i18n/en/glossary/guides.json` (owner: the group that owns it): three definitions with Dutch framing appear as
  tooltips on every English page that uses the terms (section 6). Suggested: "Examples are the FDA (US), the MHRA (UK),
  Health Canada and the TGA (Australia)"; drop the Dutch sentences from "prescription-only medicine" and "off-label".
  Old values go to research/for-nl-site/i18n-replaced-en.json.
- `src/content/pages/en/the-case-for-reform.mdx`: link to `/en/legal/nl/` (check-html error).
- The `nice-uk` glossary entry has no "NICE" alias on purpose (it would link the word "nice"); other pages that
  mention NICE can use `<Term id="nice-uk">NICE</Term>`.
- Overdue review dates of the NHS clinical-trials page (us-uk-routes 7.12): re-check before publishing.

## 9. Adversarial fact-check (independent, 26 October 2026)

Done by a separate agent that did not write the pages. It assumed errors existed and checked the four pages, the
tracker, the glossary and the group's sources against the brief, CONTENT-GUIDE §1–§1b and §9.1, the fact-checked
research (us-uk-routes.md, canada-legal.md, australia-legal.md with their "Fact-check (independent)" sections) and the
registered source notes (script over `src/data/sources/*.yaml`; the note of every cite id behind a new or changed
sentence was read against that sentence).

### 9.1 What was re-opened

- **Group sources (en-legal-en-b.yaml), fetched again on 26 October 2026:** usada-testing and usada-bpc-157 (curl:
  365 days, who is subject, S0, TUE "unlikely … permitted alternatives", Drug Reference Line);
  ukad-introduction-testing, ukad-checking-medications, ukad-anti-doping-rules (Node fetch: "any time, any place",
  "four-year ban", the seven Global DRO countries, reference number, "cannot rely on their doctor", the five-year
  recreational-athlete test); au-sia-anti-doping and au-sia-athlete-testing ("signed up to", "anywhere, any time",
  home and overseas, evading); ca-fdr-c02-018 and ca-fdr-c02-029 (Justice Laws); ca-hc-2019-investigational-use-
  marketed-drugs (off-label wording; "provincial bodies that govern medical practice"); au-tga-manufacturing (licence,
  offence, risk-based inspection); mhra-gmp-gdp-guidance (GOV.UK content API); ecfr-21-211-165, -211-167 and -314-80
  (eCFR versioner, text of 15 October 2026); uk-govuk-search-legal-en-b-2026-10-24 (re-run: totals 3,686 / 994 / 729
  for "research use only", "not for human consumption", "research chemicals"; top 10 again clinical-trials guidance and
  unrelated items; no statement on such labels). All as recorded in the notes.
- **Trials (ClinicalTrials.gov API v2, 26 October 2026):** retatrutide with a site in the US 26, UK 8, Canada 10,
  Australia 6; BPC-157: US 2 (NCT07803250 not yet recruiting, last update 3 September 2026; NCT07752381 completed),
  UK, Canada and Australia 0; NCT07165028 recruiting, with sites in all four (US 141, UK 17, CA 15, AU 16);
  NCT06383390 active, not recruiting, enrolment 10,000, sites in all four; NCT07629401 "available". Every number on
  the page holds.
- **Piatkowski 2026** (PMC13445994, doi 10.1111/dar.70231, PMC article page): University of Queensland; three
  products "anonymously submitted" to a community-oriented private testing service; tested by an "independent
  National Association of Testing Authorities-accredited laboratory"; 51.3%, 165% and 190% of the label; lead
  0.7 mg/kg, copper and zinc at low levels, other metals not detected; "Sterility and endotoxin contamination were not
  assessed". The page's wording holds.
- **Reused sources** (refocus-*, legal-b, retatrutide and others): Canada: RA-81874, the SAP page, C.08.010/011,
  POL-0051, the 2025 GLP-1 position, GUI-0116, D19-9-1, s. 27.2, s. 30.7, C.01.041, the PDL overview, the recalls
  index incl. RA-82047; Australia: Ahpra guidance and news, the SAS and access pages, the peptide practitioner page,
  the established-history lists, the media-release log, the 2024 and October 2026 infringement notices, the
  compounding guidance, the Personal Importation Scheme, the 2026 Measures No. 1 amendment and its release, the
  Poisons Standard (October 2026), the Victorian and NSW notes, the advertising-code consultation, the scheduling
  agendas; US and UK: GPhC, GMC, NICE TA1026 and TA875, SMC2497 and SMC2653, the FDA telehealth pages, GN14, s. 10,
  reg. 4, the specials guidance, the EAMS pages, expanded access and Right to Try, RPM 9-2, FOI 22/431, the consent
  and ethics rules; sport: Sport Integrity Canada, Sport Integrity Australia, Sport Ireland, New Zealand's Sport
  Integrity Commission, UKAD's 2027 summary. Besides the corrections below, every checked sentence matches its source.

### 9.2 Corrections made in place

| Where | Was | Now | Why |
|---|---|---|---|
| legal-routes, opening Compare, Canada cell of "A special or early-access route?" | conditions first, then "Health Canada has not authorised BPC-157 or assessed its safety and effect" | caution first: "Health Canada has not authorised BPC-157 and has not assessed its safety, effectiveness or quality. The Special Access Program is only for …" | Health Canada's 2023 advertising guidance (canada-legal 11.3; CONTENT-GUIDE §1): the caution must not read as an afterthought to a route; RA-81874 says "safety, efficacy, and quality". The `unknown` verdict stays (CONTENT-GUIDE §9.1: every answer cell starts with a Verdict; no source supports "no"); see 9.5 |
| same Compare, Australia cell | "The TGA must approve" | "For most patients the TGA must approve first" | SAS Category A (seriously ill) needs notification, not approval (au-tg-regs-reg-12a-sas-category-a, au-tga-sas-individual-patients) |
| legal-routes, "Canada: special access" | "Their safety and effectiveness have not been established" (RA-81874 only) | "and has not assessed their safety, effectiveness or quality"; cite adds `ca-dpd-search-canada-legal-2026-10-23` | the advisory says "have not been assessed"; it lists only some of the site's peptides (not AOD-9604, hexarelin, Semax, Selank or thymalfasin), so the DPD search record supports "the other experimental peptides" |
| legal-routes, early-access paragraph | "No early-access record exists for BPC-157 or the other unapproved peptides on this site" | "We found no early-access record … apart from retatrutide" | contradicted the sentence before it (retatrutide is unapproved and has NCT07629401), and the search covers one registry ("not every … arrangement is registered", ctgov-expanded-access-search note) |
| legal-routes, personal-import figure, Canada border cell | "The border can hold a parcel for Health Canada. It can refuse, seize or test it, or order it destroyed, at your cost." | "The border agency can hold a parcel for Health Canada, which can refuse, seize or test it. It can order you to send it back or destroy it, at your cost." | "It" was ambiguous (the CBSA detains, Health Canada decides); s. 27.2 orders removal, or destruction if removal is not possible, at the person's expense |
| legal-routes, Canada fold | "at most a 90-day supply or one course of treatment" | adds "whichever is less" | GUI-0116 wording |
| legal-routes, UK fold | "No official source defines a 'personal' amount" | "We found no official source that defines …" | an absence claim, limited to what was searched (us-uk-routes 7.7) |
| legal-routes, "Prescribing online", US | "The FDA does not approve or license any pharmacy" | "… the facilities that make such drugs" | the FDA's words are "any facility", about compounding pharmacies and outsourcing facilities |
| legal-routes, "Prescribing online", Canada | "Provincial bodies oversee how doctors practise, also online" | "… practise. We did not research their rules on prescribing online." | "also online" is not in the cited notice |
| legal-routes, PCAC fold | category 1, "the group the FDA does not plan to act on" | "the group of ingredients the FDA does not plan to take action against" | could be read as "does not plan to review"; the FDA does not intend to take action if the conditions are met |
| research-use-only, licensed-vs-RUO Compare, side-effect row | "send serious ones to the regulator. US and Canadian rules give 15 days" | "pass them to the regulator. US and Canadian rules set 15 days for the most serious ones" | 21 CFR 314.80(c)(1): the 15 days apply to serious **and unexpected** reports; C.01.017 to specified serious reactions |
| research-use-only, checklist | "A certificate of analysis covers one batch" | "covers only the sample that was tested" | lab-report ladder (brief; CONTENT-GUIDE §1a): "a report covers one sample" |
| whats-changing, "The UK, Canada and Australia" | "Only two of these change the rules … The rest is enforcement" | "Two of these are rule changes … Australia's review of its advertising code could lead to a third, but no decision has been published. The rest is enforcement …" | the advertising-code review is a possible rule change, not enforcement (au-tga-2026-07-advertising-code-consultation) |
| tracker.yaml, `ca-hc-injectable-peptides-enforcement` | `compounds: [bpc-157, ghk-cu]` | adds `cjc-1295, tb-500, retatrutide` | the item's own text names them, and RA-81874 lists all three |
| glossary `global-dro` | "A free website" | "A website" | "free" is in no registered source |

No cite was removed; one registered cite was added (`ca-dpd-search-canada-legal-2026-10-23`). No heading, Lead,
title, summary, caption or anchor changed, so the eight fixed anchors are unaffected (same headings as in the
writer's build). The manifest needed no change (nothing was cut).

### 9.3 No-loss check (repeated)

Cite ids (incl. figure `source`, KeyNumber `source` and `further_reading`) extracted by script from
`git show nl-source-2026-10-23:<path>` and from the working files. Removed: legal-routes 24 cite ids,
research-use-only 16, sport-and-doping 5, whats-changing 13 (the other strings the script reports are old figure
ids). Every removed id is Dutch, Belgian, German or EU framing and is named in MANIFEST-legal-en-b.md (script: 0
missing). The non-European content of the old pages (US intended use, Piatkowski, Belcourt, all WADA material,
Weber 2017, Krug 2014, the UKAD strict-liability quote, the TUE tests, the retatrutide trials) is still there. Two
general Code points that the old page sourced only to the Dopingautoriteit (refusal "usually two years, possibly
four"; no competing, training or coaching during a ban) left with their Dutch source and are in the manifest; the
page now says refusal "can carry a four-year ban" (UKAD) and gives the Canadian case's "in any capacity, not even
training with teammates". Glossary: the ten removed entries are German or EU terms and are in the manifest; no
`<Term>` and no `see_also` anywhere points to them (grep). Tracker: no item removed.

### 9.4 Residue, guardrails, links, validation

- The brief's grep on the four pages, the glossary and the sources file: only false positives ("separate",
  "preparation", "prepare", "conviction", "Canada") and two marked lines in sport-and-doping: the EMA
  orphan-designation cite id (genuine EMA evidence: it records the Italian authorisation of thymalfasin, which is why
  S0 does not apply) and the Krug 2014 cite id (an anti-doping laboratory study, kept as evidence; the visible
  sentence names no country). `check-locale-residue --only legal`: 0 hits.
- No dose, no seller help, no source whose title or URL names a seller (the injunction statement stays uncited), no
  emergency number, no commerce word in headings, Leads, fold titles, captions or figure titles. Reporting routes are
  named as the brief requires (FDA MedWatch, Yellow Card, Canada Vigilance, TGA). Links go only to brief routes; the
  eight anchors are produced by the unchanged headings and are linked from the compound pages.
- `npx tsx scripts/validate-content.ts`: full run 0 errors, 159 warnings, none in this group's files; `--only` runs
  for legal-routes, legal/research-use-only, legal/whats-changing, tracker and legal-b: 0 errors, 0 warnings.

### 9.5 Checked and left as they are

- Visible words: whats-changing "The United States" 102 including the "What we do not track" callout (about 62 of
  prose); sport-and-doping "Medical exemptions" 88 including the "uncertain" callout. Both close to the ~80 guide.
- Thymalfasin is not in the UK row of approved peptide medicines: consistent with
  `src/data/compounds/thymosin-alpha-1.yaml` (UK `not-authorised`, mhra-products-search-status-d-2026-10-23); the
  pages make no separate UK statement about it.
- Open questions in section 7 stand. Question 7.1 (Canada, SAP) is narrowed but not closed: the cell now leads with
  Health Canada's caution, yet a legal reviewer should decide whether an `unknown` verdict in a "route" row is
  acceptable under the 2023 advertising guidance, or whether the Canadian cell of that row should go.
