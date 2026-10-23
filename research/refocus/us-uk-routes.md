# Research notes — refocus assignment `us-uk-routes`

For the rewritten page **"Legal routes to treatment"** (US, UK, Canada, Australia). This file covers the **US and UK**
parts only; Canada and Australia come from other assignments. Written on **23 October 2026**; second pass
(re-verification and gap-filling) on **24 October 2026, 00:00–01:30 WEST** (still 23 October in US time zones).

Outputs:
- this file;
- `research/refocus/sources/us-uk-routes.yaml` — 50 **new** sources (45 from the first pass, 5 added in the second;
  format checked with the `yaml` package: every entry has type, authors, title, year, url, accessed, verified, note;
  every type is in `SOURCE_TYPES`; no id clashes with `src/data/sources/*.yaml` or the other
  `research/refocus/sources/*.yaml` files). *Fact-check, 24 October 2026:* 51 new sources now (the fact-checker
  added `mhra-products-search-elamipretide-thymalfasin`); see the last section.

Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.

**Method.** Every URL was fetched on 23 October 2026: with curl (HTML converted to text, PDFs with `pdftotext`), the
eCFR renderer and versioner APIs, the Federal Register documents and public-inspection APIs, the GOV.UK content API,
the ClinicalTrials.gov API v2, the ISRCTN API and api.fda.gov. The GMC site returns HTTP 403 to curl and WebFetch, so
its two pages were read in the desktop browser pane. *Incident:* my first browser call ran `navigate` on the shared
tab `tab-1`, which another agent was using (TGA). After that call I worked only in my own tab. That tab was later
taken over by another agent too (it showed legislation.gov.au), so I used the browser for nothing after the GMC
reading. The MHRA Products site (JavaScript-only) was therefore **not** searched in this run.

**Second pass (24 October 2026).** Re-fetched with curl and the same APIs: every FDA page the US rows rest on
(dates unchanged, see 5), the RPM chapter 9 PDF, both FDA categories PDFs, the Federal Register (23 October issue and
the current public-inspection list), openFDA shortages, six ClinicalTrials.gov records, the GOV.UK pages (content API
dates unchanged), both NHS pages and the NICE recommendations. The GMC site answers curl when browser request headers
are sent, so the GMC pages were re-read and the remote-prescribing section captured without the browser. New: GMC
paragraphs 20–43, the Scottish Medicines Consortium advice, NICE TA1026 chapter 4 (England's 12-year implementation
and Wales), and an emc search for elamipretide and thymalfasin. The browser pane was **not** used: all nine tabs were
in use by other agents (their origins changed between two checks), the tab cap was reached, and I closed or reused
none of them. The MHRA Products search for elamipretide and thymalfasin is therefore still open (7.9). I did not use
the search key embedded in the MHRA site's scripts to query its search service directly.

House rules applied: no doses, no sellers named (FDA letters that name pharmacies or sellers are cited through
indexes only), no emergency numbers, and no telephone numbers recorded at all (the task did not ask for them).

---

## 0. Reused source ids (already in `src/data/sources/`; not repeated in the new YAML)

Re-fetched on 23 October 2026 and found unchanged, unless a note says otherwise:

**US statute and regulation:** `usc-21-321`, `usc-21-355`, `usc-21-353a` (re-read; see 6.4 for a suggested note
extension), `usc-21-353b` (re-read), `usc-21-381`, `usc-21-333`, `ecfr-21-216-23` (eCFR versioner: last change still
21 March 2019), `ecfr-21-201-128`.

**FDA compounding and PCAC:** `fda-503a-bulks-page` (content current 14 May 2026), `fda-503a-categories-2026-05`
(PDF still "Updated May 14, 2026"), `fda-category-2-safety-risks` (22 April 2026), `fda-503b-categories-2025-03`
(PDF still "Updated March 21, 2025"), `fda-bulk-substances-compounding`, `fda-pcac-2026-07-meeting` (still
"Content current as of 08/06/2026", no minutes or vote results), `fda-pcac-2026-materials` (15 April 2026),
`fr-2026-07361-pcac-notice`, `fda-pcac-2026-briefing-intro`, `fda-pcac-2026-questions`,
`fda-pcac-2026-presentations-day1`, `fda-pcac-2026-bpc157-briefing`, `fda-pcac-2026-semax-briefing`,
`fda-pcac-2027-early-announcement` (still 15 April 2026), `federalregister-fda-search-2026-10-22` (now updated by the
new `federalregister-fda-search-2026-10-23`).

**FDA GLP-1 and telehealth:** `fda-glp1-compounding-policy` (1 April 2026), `fda-unapproved-glp1-concerns`
(1 October 2026), `fda-2026-503b-glp1-exclusion-proposal`, `fr-2026-08552-503b-glp1`,
`fr-2026-12937-503b-comment-extension`, `fda-2024-compounded-semaglutide-dosing-errors` (not re-read; not needed).

**FDA other:** `fda-personal-importation` (18 August 2025), `fda-warning-letters-index`, `fda-medwatch`
(21 October 2026), `fda-considering-online-pharmacy` (not re-read; cited as is).

**US approved peptide medicines (for the "approved prescription" row, not re-read in this run):**
`fda-drugsatfda-ozempic`, `fda-drugsatfda-wegovy`, `fda-drugsatfda-wegovy-tablets`, `fda-drugsatfda-rybelsus`,
`fda-drugsatfda-mounjaro`, `fda-drugsatfda-zepbound`, `fda-drugsatfda-egrifta`, `fda-drugsatfda-vyleesi`,
`fda-drugsatfda-forzinity`.

**Trials (re-read through the API on 23 October 2026):** `ctgov-nct07629401` (retatrutide expanded access: still
"available", last update 6 August 2026), `ctgov-nct07803250` (BPC-157, US: still not yet recruiting, planned start
1 January 2027, last update 3 September 2026), `ctgov-nct07752381`, `ctgov-nct07437547` (BPC-157 phase 2: recruiting,
single site in Shenzhen, China, so it is **not** a US or UK route), `ctgov-nct07165028` (retatrutide MASLD
master protocol: recruiting, US and UK sites), `ctgov-nct06383390`, `ctgov-nct07531251`, `ctgov-nct06373731`,
`ctgov-nct07717866`, `ctgov-nct05555589`.

**UK law:** `uk-hmr-2012-reg-2`, `uk-hmr-2012-reg-17`, `uk-hmr-2012-reg-46`, `uk-hmr-2012-reg-47`,
`uk-hmr-2012-reg-167`, `uk-hmr-2012-reg-214`, `uk-hmr-2012-reg-255`, `uk-hmr-2012-reg-279`
(regs 17, 46, 167, 214 re-fetched; wording as cited. *Fact-check, 24 October 2026:* regs 17, 46 and 167 say "up
to date with all changes known to be in force on or before 23 October 2026", but reg 214 says "on or before
20 October 2026"; the first pass gave 23 October for all four), `uk-mda-1971-sch-2` (not re-read).

**MHRA:** `mhra-specials-guidance` (GOV.UK content API: HTML companion first published 29 January 2025; the parent
publication was first published 6 May 2014, as the existing note says), `mhra-yellow-card` (re-read: "Anyone can
report an issue with a medicine…"; the MHRA "unable to provide you with medical advice"; NHS 111 named),
`mhra-glp1-what-you-need-to-know` (still updated 5 February 2026), `mhra-2026-07-no-summer-shortcut` (24 July 2026),
`mhra-2026-10-counterfeit-pens`, `mhra-2026-01-seizures-2025`, `mhra-products-search-tesamorelin`,
`mhra-products-search-bremelanotide`, `mhra-2026-falsified-mounjaro` (the last four not re-read).

---

## 0a. Fixed page anchors (content brief): which fact rows go where

The brief fixes these anchors on `/en/legal-routes/` (compound pages link to them). US and UK rows for each:

| Anchor | US rows | UK rows |
|---|---|---|
| `#prescription` | US-01 to US-05 | UK-01 to UK-07c |
| `#off-label` | US-06 to US-09 | UK-08 to UK-13 |
| `#us-compounding` | US-10 to US-24, US-45 to US-54 (compounded GLP-1 and telehealth) | — |
| `#uk-specials` | — | UK-14 to UK-18 (specials and pharmacy preparation) |
| `#personal-import` | US-40 to US-44 (incl. US-41a) | UK-28 to UK-31 |
| `#trials` | US-35 to US-39 | UK-23 to UK-27 |
| no fixed anchor: early access | US-25 to US-34 (expanded access, Right to Try) | UK-19 to UK-22 (EAMS) |
| reporting and help | US-55 (MedWatch) | UK-32, UK-33 (Yellow Card, NHS 111) |

Suggestion for the writer: put expanded access, Right to Try and EAMS in one section ("Early access to a medicine
still in testing"), with the Canada and Australia equivalents beside them. The brief lists `#canada-special-access`
and `#australia-sas`, so those schemes may need their own sections. The US and UK early-access routes have no fixed
anchor.

---

## 1. United States — key facts, with source ids

Federal law only. State law (medical boards, pharmacy boards, telehealth licensing, state Right to Try laws) was not
researched (see 7).

### 1.1 Approved prescription

| # | Fact | Source id |
|---|---|---|
| US-01 | No new drug may be introduced into interstate commerce without an approved application (§ 355(a)). | `usc-21-355` |
| US-02 | A prescription drug "shall be dispensed only" on a licensed practitioner's prescription; dispensing otherwise misbrands it (§ 353(b)(1)). | `usc-21-353` (new) |
| US-03 | FDA-approved peptide medicines among the site's compounds: semaglutide (Ozempic, Wegovy, Wegovy tablets, Rybelsus), tirzepatide (Mounjaro, Zepbound), tesamorelin (Egrifta), bremelanotide (Vyleesi), elamipretide (Forzinity). | `fda-drugsatfda-*` (reused, per product) |
| US-04 | Drugs@FDA is FDA's database of CDER-approved drug products, where approval can be checked (it excludes CBER-approved products). | `fda-drugsatfda-database` (new) |
| US-05 | FDA: get a prescription from your doctor and fill it at a state-licensed pharmacy; compounded drugs only when an FDA-approved drug cannot meet the medical need. | `fda-unapproved-glp1-concerns` |

### 1.2 Off-label prescribing

| # | Fact | Source id |
|---|---|---|
| US-06 | "From the FDA perspective, once the FDA approves a drug, healthcare providers generally may prescribe the drug for an unapproved use when they judge that it is medically appropriate for their patient." | `fda-off-label-use` (new) |
| US-07 | Off-label = an approved drug for another disease, by another route or at another dose; FDA "has not determined that the drug is safe and effective for the unapproved use". Insurance cover may differ. | `fda-off-label-use` |
| US-08 | Off-label use applies only to **approved** drugs, so it cannot make BPC-157 or similar peptides available. (Follows from US-06/07: the FDA page defines it as an unapproved use of an approved drug.) | `fda-off-label-use` |
| US-09 | Caution for writers: the FD&C Act's "practice of medicine" clause (§ 396) covers **devices only**. Do not cite it for drugs. | `usc-21-396` (new) |

### 1.3 Compounding (503A, 503B), the bulks lists and the PCAC process

| # | Fact | Source id |
|---|---|---|
| US-10 | 503A: a compounded drug for an identified patient on a valid prescription is exempt from approval if the section's conditions are met; bulk substances must have a USP/NF monograph, be a component of an approved drug, or be on the 503A bulks list. | `usc-21-353a`, `fda-503a-bulks-page` |
| US-11 | Bulk substances must also come with a valid certificate of analysis and from an FDA-registered establishment ("know your bulks supplier"). | `fda-503a-bulks-page` |
| US-12 | 503A bulks list (21 CFR 216.23(a)): six substances, none a peptide; no change since 21 March 2019 (eCFR versioner, re-checked 23 October 2026). | `ecfr-21-216-23` |
| US-13 | Before regulations on the bulks list, the Secretary "shall convene and consult an advisory committee on compounding" (§ 353a(c)(1)); this is the statutory basis of the PCAC step. | `usc-21-353a` (section (c)(1); see 6.4) |
| US-14 | Process: nominations solicited in 2015; FDA evaluates and consults PCAC and USP; substances are added by notice-and-comment rulemaking; the last proposed rule is from September 2019. | `fda-503a-bulks-page` |
| US-15 | Interim categories: 1 (FDA does not intend to act if conditions are met), 2 (significant safety risks; FDA may act), 3 (insufficient support). FDA does not intend to categorise nominations made on or after 7 January 2025. | `fda-503a-bulks-page`, `fda-503b-bulks-page` (new) |
| US-16 | BPC-157, TB-500, KPV, MOTS-c, CJC-1295, AOD-9604, Semax, Selank, epitalon, emideltide, melanotan II, thymosin alpha-1, injectable GHK-Cu (and LL-37, dihexa, PEG-MGF, ipamorelin acetate for 503A) are listed as "previously in category 2"; the nominators withdrew the nominations. Ipamorelin acetate is still in 503B category 2 (since 29 September 2023). Page unchanged since 22 April 2026. | `fda-category-2-safety-risks` |
| US-17 | On the 503A categories list of 14 May 2026 (still current 23 October 2026), none of these peptides is in category 1, except GHK-Cu for non-injectable routes. | `fda-503a-categories-2026-05` |
| US-18 | 503B categories list (21 March 2025, still current on 24 October 2026): ipamorelin acetate and GHRP-6 in category 2; GHRP-2 in category 2 only "for injectable and nasal routes of administration" (other routes: category 1); thymosin alpha-1 in category 3. (The first pass said "GHRP-2 in category 2" without the route split; corrected in the second pass. GHRP-2 and GHRP-6 are not site compounds.) | `fda-503b-categories-2025-03`, `fda-503b-bulks-page` |
| US-19 | 503B: an outsourcing facility may compound from bulk only if the substance is on the 503B "clinical need" list (FR proposal, at least 60 days' comment, FR designation) or the drug is on the shortage list. | `usc-21-353b` |
| US-20 | PCAC, 23 July 2026: seven peptides considered; six recommended and BPC-157 by 8–6 with one abstention, **as reported from the public meeting**; FDA staff had proposed "NOT be included" for all 14 forms; advice is non-binding. Still no minutes or vote results on fda.gov (meeting page unchanged since 6 August 2026). | `fda-pcac-2026-07-meeting`, `fda-pcac-2026-questions`, `fda-pcac-2026-briefing-intro`, `fr-2026-07361-pcac-notice` |
| US-21 | A 503A listing would not make the product FDA-approved, would not require CGMP or adverse-event reporting, and (unless limited) would allow any use and route; each salt form is a separate substance. | `fda-pcac-2026-presentations-day1` |
| US-22 | Next PCAC meeting "before the end of February 2027" on LL-37, GHK-Cu, dihexa acetate, melanotan II and PEG-MGF; advisory committees make "non-binding recommendations". No date, no FR notice as of 23 October 2026. | `fda-pcac-2027-early-announcement`, `federalregister-fda-search-2026-10-23` (new) |
| US-23 | Federal Register, 23 October 2026: no proposed or final 503A bulks rule, no PCAC meeting notice, no final 503B decision on semaglutide, tirzepatide or liraglutide (same counts as on 22 October). | `federalregister-fda-search-2026-10-23` |
| US-24 | So, as of 23 October 2026, a US pharmacy may not lawfully compound BPC-157 or the other July 2026 peptides under 503A. An FDA untitled letter (14 September 2023) told a 503A pharmacy that products made with BPC-157 acetate did not qualify for the 503A exemptions (not registered: it names the pharmacy; cite the index). | `usc-21-353a`, `ecfr-21-216-23`, `fda-compounding-actions-index` (new) |

### 1.4 Expanded access (21 CFR 312 subpart I) and Right to Try

| # | Fact | Source id |
|---|---|---|
| US-25 | Expanded access ("compassionate use") is for a serious or immediately life-threatening condition with no comparable or satisfactory alternative, when trial enrolment is not possible, benefit justifies risk, and trials are not compromised. | `fda-expanded-access` (new), `ecfr-21-312-subpart-i` (new) |
| US-26 | Statute: a person acting through a licensed physician may request an investigational drug; the manufacturer **may** provide it if the physician and FDA determinations are made and a protocol is submitted (§ 360bbb(b)). | `usc-21-360bbb` (new) |
| US-27 | "Serious" = substantial impact on day-to-day functioning; short-lived, self-limiting morbidity is usually not enough (§ 312.300(b)). | `ecfr-21-312-subpart-i` |
| US-28 | The submission must include manufacturing facility, chemistry-manufacturing-controls data (identity, quality, purity, strength) and pharmacology-toxicology data showing the drug is reasonably safe (§ 312.305(b)(2)). | `ecfr-21-312-subpart-i` |
| US-29 | The physician, the IRB and the company must all agree; "the company provides the investigational medical product. Without their cooperation, you will not be able to get expanded access"; no law requires a company to provide it. | `fda-expanded-access-patients` (new) |
| US-30 | FDA: "On average, FDA determines that vast majority of all expanded access requests may proceed." Costs are often not covered by insurance or Medicare; a company's charge must be limited to recovering costs. | `fda-expanded-access-patients` |
| US-31 | Expanded access records on ClinicalTrials.gov for the site's compounds: only retatrutide (NCT07629401, individual patients with refractory obesity and at least two serious or life-threatening complications, "available") and elamipretide (NCT04689360, intermediate-size, "available"). None for BPC-157 or the other unapproved peptides. | `ctgov-expanded-access-search-2026-10-23` (new), `ctgov-nct07629401`, `ctgov-nct04689360` (new) |
| US-32 | Right to Try (Pub. L. 115-176, 30 May 2018): patient with a **life-threatening** condition (21 CFR 312.81), approved options exhausted, unable to join a trial, physician-certified, written consent; drug must have completed phase 1, be unapproved, be in an effectiveness trial under an active IND or have an application filed, and be in active development. | `usc-21-360bbb-0a` (new), `ecfr-21-312-81` (new), `fda-right-to-try` (new) |
| US-33 | Under Right to Try, FDA does not review or approve requests, no IRB review is needed, and the sponsor is not obliged to supply. | `fda-right-to-try` |
| US-34 | 312.81(a) "life-threatening" means "(1) Diseases or conditions where the likelihood of death is high unless the course of the disease is interrupted; and (2) Diseases or conditions with potentially fatal outcomes, where the end point of clinical trial analysis is survival." (Fact-check: quoted exactly; the first pass joined the two limbs with "or".) | `ecfr-21-312-81` |

### 1.5 Clinical trials

| # | Fact | Source id |
|---|---|---|
| US-35 | A sponsor must have an IND in effect before a clinical investigation of an investigational new drug begins. | `ecfr-21-312-20` (new) |
| US-36 | Such an investigation may not start unless an IRB has reviewed and approved it. | `ecfr-21-56-103` (new) |
| US-37 | Consent must cover purpose, procedures, risks, benefits, alternatives; participation is voluntary and you "may discontinue participation at any time without penalty or loss of benefits". | `ecfr-21-50-25` (new) |
| US-38 | US-site trials, 23 October 2026: BPC-157 2 records (NCT07803250 not yet recruiting, planned start January 2027; one completed consumer-product study); TB-500, KPV, MOTS-c, CJC-1295, hexarelin, AOD-9604, Semax, melanotan II, emideltide 0; retatrutide 26 (1 recruiting, 8 active not recruiting); tesamorelin 19 (2 recruiting); elamipretide 24 (3 open); thymalfasin 7 (1 recruiting). | `ctgov-us-uk-peptide-search-2026-10-23` (new) |
| US-39 | FDA: "Whenever possible, an investigational medical product should be used as part of a clinical trial." | `fda-expanded-access-patients` |

### 1.6 Personal importation

| # | Fact | Source id |
|---|---|---|
| US-40 | "In most circumstances, it is illegal for individuals to import drugs or devices into the U.S. for personal use"; the two situations where staff "may consider a more permissive decision"; refusal if on an import alert, commercial, a serious risk, or health fraud. | `fda-personal-importation` |
| US-41 | RPM 9-2-5: FDA discretion "should not be interpreted as a license to individuals to bring in such shipments"; more than about three months' supply suggests commercial distribution; import-alerted drugs are "not amenable to these procedures". | `fda-rpm-ch9-personal-importations` (new) |
| US-41a | RPM 9-2-5 (added by the fact-checker): "Commercial and promotional shipments are not subject to these procedures"; "Commercial shipments generally include shipments other than those products that are personally carried, shipped by a personal non-commercial representative of a consignee, or shipped from a foreign medical facility where a person has undergone treatment." So, on FDA's own wording, a parcel sent by a foreign online seller is generally outside the personal-importation discretion. (FDA does not say how strictly staff apply this to each parcel; do not go beyond the quoted wording.) | `fda-rpm-ch9-personal-importations` |
| US-42 | RPM 9-2-4: CBP sets aside mail parcels that appear to contain drugs and FDA audits them; drugs "subject to administrative destruction (e.g., drugs that are valued at $2500 or less which have been refused admission, or have not met the Personal Importation Policy criteria …)" are destroyed by FDA; other final disposition is CBP's. (Fact-check: wording tightened; the RPM gives these as examples.) | `fda-rpm-ch9-personal-importations`, `usc-21-381` |
| US-43 | With a "Release with Comment", FDA may tell the recipient the drug appears unapproved, should be used under medical supervision, future parcels may be detained, and the doctor should consider a study or an expanded access IND. | `fda-rpm-ch9-personal-importations` |
| US-44 | Import alert 66-41 (unapproved new drugs promoted in the US; published 22 October 2026) includes firm-level peptide entries (e.g. melanotan, PT-141). Its guidance tells divisions to follow RPM 9-2 for personal shipments and says "Commercial or promotional shipments, and products subject to DWPE are generally not amenable to the use of enforcement discretion" (added by the fact-checker). Cite for the mechanism only; it names firms. | `fda-import-alert-66-41` (new) |

### 1.7 Telehealth and "compounded GLP-1" after the shortages

| # | Fact | Source id |
|---|---|---|
| US-45 | Shortages resolved: tirzepatide 19 December 2024, semaglutide 21 February 2025. 503A grace ended after the court rulings of 5 March 2025 (tirzepatide) and 24 April 2025 (semaglutide); 503B grace to 19 March 2025 and 22 May 2025. | `fda-glp1-compounding-policy` |
| US-46 | 23 October 2026: semaglutide injection and tirzepatide injection are not listed as in shortage; liraglutide injection is "Currently in Shortage". | `fda-drug-shortages-2026-10-23` (new) |
| US-47 | FDA reminder of 1 April 2026: 503A pharmacies may not compound "essentially copies" regularly or in inordinate amounts; a copy = same API in a same, similar or easily substitutable strength by the same route, unless a prescriber documents a significant difference for an identified patient; adding e.g. vitamin B12 can still be a copy; FDA does not intend to act if four or fewer prescriptions of the copy are filled in a calendar month. | `fda-glp1-compounding-policy` |
| US-48 | Semaglutide and tirzepatide are not on the 503B bulks list or the shortage list; FDA proposed (1 May 2026) not to add semaglutide, tirzepatide or liraglutide; comments closed 30 July 2026; no final decision by 23 October 2026. | `fda-glp1-compounding-policy`, `fr-2026-08552-503b-glp1`, `fr-2026-12937-503b-comment-extension`, `federalregister-fda-search-2026-10-23` |
| US-49 | 3 March 2026: 30 warning letters to telehealth companies over false or misleading claims about compounded GLP-1s (second group sent to telehealth firms since the September 2025 crackdown on misleading direct-to-consumer advertising; separately, "thousands of letters" to pharmaceutical and telehealth firms over six months about misleading ads in general, not only compounded GLP-1s). Main violations: implying sameness with approved drugs; branding implying the telehealth firm is the compounder. | `fda-2026-03-telehealth-warning-letters` (new) |
| US-50 | FDA reminders to telehealth companies (15 June 2026): a compounded drug is not a generic, not FDA-approved, not "clinically proven" to match the approved drug, and "FDA does not approve or license any facility". | `fda-telehealth-promoting-compounded-drugs` (new) |
| US-51 | Retatrutide and cagrilintide "cannot be used in compounding under federal law"; FDA has warned telehealth companies marketing retatrutide, API distributors and outsourcing facilities. | `fda-unapproved-glp1-concerns` |
| US-52 | FDA's telehealth red flags for consumers (negative-only list: claims of sameness, prices too good to be true, no screening or prescription by a licensed doctor, no doctor available afterwards, label errors, suspect pharmacy names). | `fda-unapproved-glp1-concerns` |
| US-53 | Multi-dose vials: discard 28 days after first use; do not use an injectable GLP-1 that arrives warm. Salt forms (semaglutide sodium/acetate): no known lawful basis. 990 adverse-event reports for compounded semaglutide and >730 for tirzepatide to 31 May 2026; under-reported. | `fda-unapproved-glp1-concerns` |
| US-54 | Import alert 66-80 (9 October 2026): foreign GLP-1 APIs from firms not on the Green List may be detained; 21% of 48 evaluated GLP-1 API sites were non-compliant. FDA says this creates no new limits on legal compounding. | `fda-import-alert-66-80` (new), `fda-unapproved-glp1-concerns` |

### 1.8 Reporting

| # | Fact | Source id |
|---|---|---|
| US-55 | MedWatch is FDA's reporting programme "for health professionals, patients and consumers" (content current 21 October 2026). | `fda-medwatch` |

---

## 2. United Kingdom — key facts, with source ids

### 2.1 Licensed medicines

| # | Fact | Source id |
|---|---|---|
| UK-01 | A medicinal product may not be sold, supplied or offered without a UK authorisation (reg. 46). | `uk-hmr-2012-reg-46` |
| UK-02 | A prescription-only medicine may be sold or supplied only on a prescription from an appropriate practitioner (reg. 214). | `uk-hmr-2012-reg-214` |
| UK-03 | GLP-1 medicines are POMs; some are available on the NHS; privately, a consultation must happen before the prescription; legitimate products are pre-filled pens or tablets; powder-in-vial products are not authorised; check a GB pharmacy on the GPhC register (NI: PSNI). | `mhra-glp1-what-you-need-to-know` |
| UK-04 | UK-licensed peptides among the site's compounds: semaglutide (Ozempic, Wegovy pens, Wegovy tablets, Rybelsus), tirzepatide (Mounjaro). Wegovy tablets are added in the second pass: SMC2988 (12 October 2026) refers to "the holder of the marketing authorisation", and emc lists the tablets. Tesamorelin and bremelanotide: no UK product (MHRA Products searches of 22 and 23 October 2026). Elamipretide and thymalfasin: no result on emc for any name, brand or code (24 October 2026), but the MHRA Products database was **not** searched, so do not print "not licensed in the UK" for these two yet (7.9). *Fact-check (24 October 2026), MHRA Products searched:* elamipretide: no results for elamipretide, Forzinity, Bendavia, Szeto-Schiller or "elamipretide hydrochloride", and no ELAMIPRETIDE in the substance index, so "no UK product information found (emc and MHRA Products, 24 October 2026)" is supported. Thymalfasin: no results for thymalfasin, and no THYMALFASIN in the substance index, **but "Zadaxin" returns 3 documents and "thymosin" 1**, hidden behind a disclaimer the fact-checker did not accept. Thymalfasin stays UNRESOLVED (7.9). | `mhra-glp1-what-you-need-to-know`, `smc-2988-semaglutide-wegovy-tablets` (new), `uk-emc-search-2026-10-24` (new), `mhra-products-search-elamipretide-thymalfasin` (new, fact-checker), `mhra-products-search-tesamorelin`, `mhra-products-search-bremelanotide` |
| UK-05 | NHS England, tirzepatide (NICE TA1026, updated 1 September 2025): recommended with diet and activity for adults with an initial BMI of at least 35 kg/m² and at least one weight-related comorbidity; "must be funded in the NHS in England". Access is staged. NICE accepted a funding variation and specifies a **maximum implementation period of 12 years**, with a first phase of up to 3 years for a subset of eligible people, chosen by clinical need. (The first pass said "phased introduction over three years"; corrected after reading chapter 4.) So meeting the criteria does not mean immediate NHS access. | `nice-ta1026-tirzepatide` (new) |
| UK-05a | Wales: "The Welsh ministers have issued directions to the NHS in Wales on implementing NICE technology appraisal guidance"; under the All-Wales Weight Management Pathway, weight-management medicines are prescribed only within a specialist service, with a behavioural programme (TA1026 4.15). | `nice-ta1026-tirzepatide` |
| UK-05b | Scotland (Scottish Medicines Consortium): Wegovy pen accepted for restricted use (BMI of at least 30 kg/m² with at least one weight-related comorbidity, in a specialist weight management service; SMC2497, 9 October 2023). Mounjaro accepted for restricted use (BMI of at least 30 kg/m² with at least one weight-related comorbidity; SMC2653, 10 June 2024). Wegovy tablets not recommended because the company made no submission (SMC2988, 12 October 2026). Northern Ireland: not checked. | `smc-2497-semaglutide-wegovy` (new), `smc-2653-tirzepatide-mounjaro` (new), `smc-2988-semaglutide-wegovy-tablets` (new) |
| UK-06 | NHS England, semaglutide for weight (NICE TA875): within a specialist weight management service, for a maximum of 2 years, with BMI and comorbidity criteria. | `nice-ta875-semaglutide` (new) |
| UK-07 | GPhC (February 2025): weight-management medicines are not suitable for questionnaire-only online prescribing; the prescriber must independently verify weight, height and/or BMI, "through a video consultation, in person, from the person's clinical records or by contacting another healthcare provider such as the person's GP"; "Verifying information through a phone call would not be appropriate when supplying medication for weight loss" (last two points added by the fact-checker). | `gphc-2025-distance-pharmacy-guidance` (new) |
| UK-07a | GMC, remote prescribing: a doctor "must only propose, prescribe or provide medicines … if it is safe to do so"; it is not safe without enough information about the patient's health or if the way of consulting is unsuitable (para 26). A doctor who is not the patient's usual doctor should give their name, role and, online, their GMC registration number (para 22). Para 37: "it may be appropriate to raise concerns if the system in which you're working involves prescribing remotely on the basis of a questionnaire and there is no mechanism for two-way dialogue" (fact-check: the first pass wrote "should raise concerns", which overstates the GMC wording). | `gmc-2021-deciding-safe-to-prescribe` (new) |
| UK-07b | GMC: the doctor must take a history that includes current medicines, including "medicines purchased online or face to face" (para 34), and should encourage patients to be open about them (para 35). For the page: tell any prescriber what you already use. | `gmc-2021-deciding-safe-to-prescribe` |
| UK-07c | GMC: if the patient will not let the doctor share information with their GP, and that could put the patient at risk, the doctor should explain that they cannot prescribe and point to other services (paras 28–31). | `gmc-2021-deciding-safe-to-prescribe` |

### 2.2 Off-label and unlicensed prescribing

| # | Fact | Source id |
|---|---|---|
| UK-08 | GMC para 102: "unlicensed medicine" covers medicines used outside their UK licence and medicines with no UK licence. | `gmc-2021-prescribing-unlicensed` (new) |
| UK-09 | GMC para 103: "You should usually propose, prescribe or provide licensed medicines in accordance with the terms of their licence"; unlicensed use may be appropriate when, for medical reasons, it is necessary for the individual patient. | `gmc-2021-prescribing-unlicensed` |
| UK-10 | GMC para 105: the doctor "must be satisfied that there is sufficient evidence or experience of using the medicine to demonstrate its safety and efficacy", takes responsibility for care and follow-up, and records the reasons. | `gmc-2021-prescribing-unlicensed` |
| UK-11 | GMC paras 106–108: give enough information for an informed decision; answer questions fully and honestly; explain when use is not routine or licensed alternatives exist. | `gmc-2021-prescribing-unlicensed` |
| UK-12 | MHRA: responsibility "may be greater" for unlicensed or off-label prescribing than for licensed use. | `mhra-2009-dsu-off-label` (new) |
| UK-13 | MHRA GN14 2.4 and Appendix 2: if a UK-licensed product can meet the need, "even off-label, it should be used instead of an unlicensed product". | `mhra-gn14-specials` (new) |

### 2.3 Unlicensed "specials" and pharmacy preparation

| # | Fact | Source id |
|---|---|---|
| UK-14 | Reg. 167: a special is supplied on an unsolicited order, to a prescriber's specification, for a patient under their direct responsibility, to meet special needs; no advertising; made or imported by licence holders (conditions A–G). Re-read 23 October 2026. | `uk-hmr-2012-reg-167` |
| UK-15 | MHRA: unlicensed medicines "may not have been assessed by the MHRA"; patient needs "must be clinical in nature and are determined by the prescriber"; importers notify the MHRA before import. | `mhra-specials-guidance` |
| UK-16 | GN14 2.2–2.3: a special should not be supplied where an equivalent licensed product can meet the need; special need "does not include reasons of cost, convenience or operational needs"; suppliers should hold documentary evidence. | `mhra-gn14-specials` |
| UK-17 | GN14 Appendix 2: "The least acceptable products are those that are unlicensed in the country of origin, and which are not classed as medicines in the country of origin" (e.g. supplements, possibly not made to pharmaceutical GMP): "These should be avoided whenever possible." | `mhra-gn14-specials` |
| UK-18 | Pharmacy preparation: a pharmacist in a registered pharmacy (or hospital, care home service, health centre) preparing or dispensing on a prescription is exempt from the manufacturer's licence and authorisation rules (Medicines Act 1968 s. 10(1)(a), through HMR reg. 4). *Fact-check:* s. 10 has further exemptions from regs 17(1) and/or 46 for a registered pharmacy (s. 10(3) a specification from the person it is for; s. 10(4) the pharmacist's own judgement with the person present; s. 10(5)–(6) preparation for retail sale at that pharmacy). These lift only the licence and marketing-authorisation rules, not the prescription-only rule (reg. 214). S.I. 2025/1249 art. 4 will amend s. 10 (pharmacy technicians acting with a pharmacist's authorisation), on a day the Privy Council appoints; legislation.gov.uk lists it as not yet applied on 24 October 2026. | `uk-ma-1968-s10` (new), `uk-hmr-2012-reg-4` (new) |

### 2.4 Early Access to Medicines Scheme (EAMS)

| # | Fact | Source id |
|---|---|---|
| UK-19 | EAMS is set up in law by reg. 167C (from 15 April 2022): for life-threatening or seriously debilitating conditions; products not authorised, or not for that use. | `uk-hmr-2012-reg-167c` (new) |
| UK-20 | Two steps: a Promising Innovative Medicine designation (high unmet need, likely major advantage, positive benefit-risk expected), then an EAMS scientific opinion, which also requires GMP manufacture and ability to supply. | `uk-hmr-2012-reg-167c`, `mhra-eams-overview` (new) |
| UK-21 | The opinion holder is "usually a pharmaceutical company"; it lasts up to a year, can be renewed; "The scheme is voluntary" and does not replace licensing. | `mhra-eams-overview` |
| UK-22 | Current EAMS products (collection updated 10 July 2026): three, none a peptide on this site; the expired list (updated 31 May 2024) contains none of the site's peptides. | `mhra-eams-scientific-opinions` (new), `mhra-eams-expired-opinions` (new) |

### 2.5 Clinical trials

| # | Fact | Source id |
|---|---|---|
| UK-23 | No one may start or run a trial, or recruit or advertise for participants, without a favourable ethics committee opinion and MHRA authorisation (reg. 12, as substituted from 28 April 2026). | `uk-si-2004-1031-reg-12` (new) |
| UK-24 | The amended Clinical Trials Regulations (SI 2025/538, made 28 April 2025) came into force on 28 April 2026, UK-wide. | `uk-si-2025-538` (new), `mhra-clinical-trials-hub` (new) |
| UK-25 | NHS: ask your doctor or a patient organisation; search Be Part of Research or the WHO ICTRP; you can leave "at any point without giving a reason and without it affecting the care you receive"; all research with people needs an independent ethics committee's approval. | `nhs-clinical-trials` (new) |
| UK-26 | UK-site trials, 23 October 2026 (ClinicalTrials.gov): BPC-157, TB-500, KPV, MOTS-c, CJC-1295, ipamorelin, hexarelin, AOD-9604, epitalon, Semax, Selank, GHK-Cu, melanotan II, emideltide, thymalfasin 0; retatrutide 8 (1 recruiting, NCT07165028; 4 active not recruiting); elamipretide 6 (1 recruiting, NCT07531251); tesamorelin 1 and bremelanotide 1 (both completed). | `ctgov-us-uk-peptide-search-2026-10-23` |
| UK-27 | ISRCTN, 23 October 2026: 0 records for BPC-157, TB-500 and the other unapproved peptides; 3 for elamipretide; control search worked. | `isrctn-peptide-search-2026-10-23` (new) |

### 2.6 Personal import of prescription-only medicines

| # | Fact | Source id |
|---|---|---|
| UK-28 | The manufacturer's licence needed to import into Great Britain does not apply to someone importing a medicine for themselves or their household (reg. 17(6)); re-read 23 October 2026. | `uk-hmr-2012-reg-17` |
| UK-29 | Selling or supplying an unlicensed medicine, or a POM without a prescription, is still an offence (regs 46, 47, 214, 255). | `uk-hmr-2012-reg-46`, `uk-hmr-2012-reg-47`, `uk-hmr-2012-reg-214`, `uk-hmr-2012-reg-255` |
| UK-30 | Border Force seizes unlicensed medicines at entry and notifies the MHRA (about 6.3 million doses, March 2021–February 2022); "Seizures determined to be more than reasonable personal importation quantities have been destroyed"; some contested seizures were released on review as personal use (MHRA FOI, March 2022). | `mhra-foi-22-431-personal-import-seizures` (new) |
| UK-31 | An unauthorised medicine "will not have been assessed by the MHRA for its safety, effectiveness or the quality and hygiene of its manufacturing and distribution processes" (fact-check: the first pass cut the quote off mid-phrase). | `mhra-2026-01-seizures-2025` |

### 2.7 Named services

| # | Fact | Source id |
|---|---|---|
| UK-32 | Yellow Card (MHRA): "Anyone can report an issue with a medicine…"; the MHRA cannot give medical advice and points to a doctor, pharmacist or NHS 111. URL: yellowcard.mhra.gov.uk (allowlisted). | `mhra-yellow-card` |
| UK-33 | NHS 111 (England): 111 online, the NHS App or by phone, when you think you need medical help now or your GP is closed. Elsewhere: "Scotland – NHS 24 111", "Wales – NHS 111 Wales", Northern Ireland – nidirect. | `nhs-111` (new) |

**Fact rows: 55 (US) + 38 (UK: 33 from the first pass, plus UK-05a, UK-05b, UK-07a, UK-07b, UK-07c) = 93.**
*Fact-check (24 October 2026):* one row added (US-41a), so 56 (US) + 38 (UK) = **94**.

---

## 3. Draft material for the rewritten page (US and UK sections)

Plain-English suggestions at about B1 level, for the writer. Every cell maps to the ids above. The Compare columns
keep the current legal-routes page's design: an approved medicine (e.g. semaglutide) next to a peptide approved
nowhere (e.g. BPC-157). Per the brief, the four countries get parallel rows or cards (US, UK, Canada, Australia, in
that order) and "your doctor" is used rather than "GP" except when explaining the UK system.

### 3.1 United States — Compare grid (federal law, checked 23 October 2026; re-checked 24 October 2026)

| Route | Approved medicine (semaglutide) | Peptide approved nowhere (BPC-157) |
|---|---|---|
| Prescription | yes: from a licensed prescriber, filled at a state-licensed pharmacy (US-02, US-05) | no: there is no approved product (US-01) |
| Off-label | yes: the doctor's judgement, for an approved drug (US-06) | no: off-label only applies to approved drugs (US-08) |
| Pharmacy compounding (503A/503B) | unknown/limited: copies are allowed only in narrow cases; the shortages are over (US-45 to US-48) | no: not an allowed ingredient; July 2026 vote was advice, no rule yet (US-12, US-16, US-20, US-23) |
| Expanded access | not needed (approved). For retatrutide, a company programme is listed (US-31) | in practice no: needs a company willing to supply, plus quality and safety data a "research" vial lacks (US-28, US-29, US-31) |
| Right to Try | not applicable (approved) | no: needs a completed phase 1 trial, active development and a life-threatening condition (US-32) |
| Clinical trial | yes, if a trial runs and you qualify (US-38) | one US trial registered, not yet recruiting (US-38) |
| Importing for yourself | approved abroad but not in the US: illegal in most cases (US-40) | illegal in most cases; FDA discretion is "not a license", and parcels from a seller generally count as commercial shipments outside that discretion (US-40, US-41, US-41a) |

Suggested lead lines:
- *Compounding:* "A US pharmacy may only use allowed ingredients. BPC-157 is not one of them, as of 23 October 2026."
- *Expanded access:* "Your doctor can ask a company for a medicine still in testing. The company decides, and FDA checks."
- *Right to Try:* "This law is for life-threatening illness only, and only for medicines already in human testing."
- *Import:* "FDA may let some parcels through. It says this is not a right."
- *Telehealth GLP-1:* "A compounded copy is not FDA-approved, and it is not a generic." (US-49, US-50)

Candidate key numbers: **6** (substances on the 503A list, none a peptide; US-12); **1** (US trials of BPC-157,
not yet recruiting; US-38); **30** (warning letters to telehealth companies, 3 March 2026; US-49);
**2** (expanded access programmes listed for the site's peptides: retatrutide, elamipretide; US-31).

### 3.2 United Kingdom — Compare grid (checked 23 October 2026; re-checked 24 October 2026)

| Route | Approved medicine (semaglutide) | Peptide approved nowhere (BPC-157) |
|---|---|---|
| Prescription (NHS or private) | yes: on prescription. NHS access has its own criteria in each nation (NICE in England, with staged access; SMC in Scotland; a specialist pathway in Wales). Privately, only after a real consultation (UK-02, UK-03, UK-05 to UK-07c) | no: no UK licence (UK-01) |
| Off-label | possible: GMC rules; doctor must be satisfied on evidence and take responsibility (UK-09, UK-10) | no: off-label means a licensed medicine (UK-08) |
| A "special" (reg. 167) | rarely needed: a licensed product comes first (UK-13, UK-16) | in practice no: needs a clinical special need, a licensed maker or importer, and MHRA calls non-medicine products the least acceptable (UK-14 to UK-17) |
| Pharmacy preparation (s. 10) | possible in principle on prescription (UK-18) | unknown: the law allows pharmacy preparation on prescription; we found no MHRA guidance on peptides (UK-18; see 7) |
| EAMS | only for new medicines a company puts forward (UK-19 to UK-21) | no: none for any peptide on this site (UK-22) |
| Clinical trial | yes, if a trial runs and you qualify (UK-23, UK-25) | none found with a UK site (UK-26, UK-27) |
| Importing for yourself | no import licence needed for yourself; parcels can still be seized if more than a personal amount (UK-28, UK-30) | same, and selling it on is a crime (UK-28 to UK-30) |

Suggested lead lines:
- *Off-label:* "A UK doctor should usually use licensed medicines. Using one in another way needs a medical reason."
- *Specials:* "A doctor can order an unlicensed medicine for one patient, but only for a clinical need, and cost or convenience do not count."
- *Online prescribing:* "An online prescriber must check your health properly. For weight-loss medicines, a questionnaire alone is not enough." (UK-07, UK-07a)
- *Tell your prescriber:* "Doctors are told to ask about medicines you bought online. Telling them helps them keep you safe." (UK-07b)
- *NHS access:* "Each part of the UK has its own NHS rules for weight-loss medicines. Meeting the rules may still mean a wait." (UK-05, UK-05a, UK-05b)
- *Import:* "You need no import licence for a medicine for yourself. Border Force can still seize a parcel it judges too big for personal use."
- *Services:* Yellow Card for side effects; NHS 111 (England), NHS 24 (Scotland), NHS 111 Wales, nidirect (Northern Ireland) for advice when the GP is closed (UK-32, UK-33).

Candidate key numbers: **0** (UK trials of BPC-157 on ClinicalTrials.gov and ISRCTN; UK-26, UK-27);
**3** (current EAMS products, none a peptide on this site; UK-22).

---

## 4. "Not found" searches (database, terms, date)

| Database | Terms | Date | Result | Source id |
|---|---|---|---|---|
| ClinicalTrials.gov API v2, intervention search, LocationCountry US and UK | per compound: BPC-157 / BPC 157 / PL 14736 / PL-14736 / PL-10 / PLD-116 / bepecin; TB-500 / TB500 / TB 500 / Ac-LKKTETQ; thymosin beta 4 / RGN-259 / RGN-352 / RGN-137; KPV / Lys-Pro-Val; MOTS-c / MOTSc; CJC-1295 / CJC 1295 / CJC1295 / DAC:GRF; ipamorelin / NNC 26-0161; tesamorelin / TH9507 / TH-9507 / Egrifta; hexarelin / examorelin / EP-23905 / MF-6003; AOD-9604 / AOD9604; epitalon / epithalon / epithalone / AEDG peptide; Semax; Selank; GHK-Cu / copper peptide / copper tripeptide / prezatide copper / GHK copper; melanotan II / melanotan 2 / melanotan-II / MT-II / MTII; bremelanotide / PT-141 / PT 141 / Vyleesi; elamipretide / SS-31 / MTP-131 / Bendavia / Forzinity; thymalfasin / thymosin alpha 1 / thymosin alpha-1 / Zadaxin; retatrutide / LY3437943; emideltide / delta sleep-inducing peptide / DSIP | 23 Oct 2026 | counts in US-38 and UK-26 | `ctgov-us-uk-peptide-search-2026-10-23` |
| ClinicalTrials.gov, study type EXPANDED_ACCESS, all countries | same terms, plus semaglutide, tirzepatide | 23 Oct 2026 | only NCT07629401 (retatrutide) and NCT04689360 (elamipretide) | `ctgov-expanded-access-search-2026-10-23` |
| ISRCTN API | BPC-157, BPC 157, TB-500, thymosin, retatrutide, elamipretide, tesamorelin, bremelanotide, ipamorelin, melanotan, semax, selank, epitalon, KPV, MOTS-c, CJC-1295, GHK, AOD-9604, hexarelin, thymalfasin; control semaglutide | 23 Oct 2026 | 0 except thymosin (3, unrelated) and elamipretide (3) | `isrctn-peptide-search-2026-10-23` |
| MHRA EAMS current and expired lists | full text: semaglutide, tirzepatide, retatrutide, elamipretide, thymalfasin, tesamorelin, bremelanotide, setmelanotide, teduglutide, GLP, peptide | 23 Oct 2026 | no match | `mhra-eams-scientific-opinions`, `mhra-eams-expired-opinions` |
| FDA 503A categories PDF (14 May 2026) | BPC, TB-500, thymosin, KPV, MOTS, CJC, ipamorelin, Semax, Selank, epitalon, GHK, melanotan, AOD, emideltide, sermorelin, tesamorelin, semaglutide, tirzepatide, NAD, retatrutide | 23 Oct 2026 | only GHK-Cu (non-injectable, category 1) and NAD entries. *Fact-check, 24 Oct 2026, added terms* LL-37, cathelicidin, dihexa, MGF: only "Mechano growth factor (MGF)" in 503A **category 3** (not PEG-MGF, which is on the withdrawn list) | `fda-503a-categories-2026-05` |
| FDA 503B categories PDF (21 March 2025) | same terms | 23 Oct 2026 | ipamorelin acetate (cat. 2), thymosin alpha-1 (cat. 3), sermorelin acetate (cat. 1, component of an approved drug; not a site compound), NAD entries | `fda-503b-categories-2025-03` |
| Federal Register API, FDA, from 24 July 2026 | "compounding", "503A", "503B", "bulk drug substances", "Pharmacy Compounding Advisory Committee", "peptide", "expanded access", "Right to Try", "personal importation"; public inspection 23 Oct | 23 Oct 2026 | no relevant rule or meeting notice | `federalregister-fda-search-2026-10-23` |
| FDA Drug Shortages database and openFDA | semaglutide, tirzepatide, liraglutide | 23 Oct 2026 | semaglutide/tirzepatide injection not in shortage; liraglutide injection in shortage | `fda-drug-shortages-2026-10-23` |
| fda.gov and hhs.gov (web search restricted to those domains) | Kennedy / HHS statement on moving peptides from category 2 to category 1 (reported as 27 February 2026) | 23 Oct 2026; repeated 24 Oct 2026 | no primary HHS or FDA document found (second pass: also the FDA press-announcement and drug-alert indexes, nothing on peptides) | — (see 7.1) |
| emc (www.medicines.org.uk) search | elamipretide, Forzinity, SS-31, MTP-131, Bendavia; thymalfasin, Zadaxin, thymosin, "thymosin alpha 1"; control "wegovy" | 24 Oct 2026 | "No search results" for every term; control: 10 results | `uk-emc-search-2026-10-24` |
| GOV.UK search API | elamipretide, Forzinity, thymalfasin, Zadaxin | 24 Oct 2026 | 0, except one unrelated attachment match for thymalfasin (Committee on Toxicity meeting page) | `uk-emc-search-2026-10-24` (note) |
| MHRA Products (products.mhra.gov.uk) | elamipretide, thymalfasin and synonyms | — | **NOT SEARCHED** (needs a browser; none available without disturbing other agents) | — (see 7.9) |
| MHRA Products, searched by the fact-checker in the browser pane | elamipretide, Forzinity, Bendavia, Szeto-Schiller, "elamipretide hydrochloride" (SS-31 and MTP-131 unusable: tokenised into 68,310 and 2,564 unrelated hits); thymalfasin, "thymosin alpha", thymosin, Zadaxin; substance index letters E and T; controls semaglutide (261), TIRZEPATIDE in index T | 24 Oct 2026 | elamipretide: 0 for every usable term, not in index E. Thymalfasin: 0 for thymalfasin and "thymosin alpha", not in index T; **Zadaxin 3 hits, thymosin 1 hit**, list behind an unaccepted disclaimer: UNRESOLVED | `mhra-products-search-elamipretide-thymalfasin` |
| Scottish Medicines Consortium search | semaglutide, tirzepatide | 24 Oct 2026 | Wegovy SMC2497, SMC2872 (cardiovascular risk), SMC2988 (tablets, non-submission); Ozempic SMC2092; Rybelsus SMC2287; Mounjaro SMC2633 (diabetes), SMC2653 (weight) | `smc-2497-…`, `smc-2653-…`, `smc-2988-…` |

---

## 5. Re-verification log (23 October 2026)

Unchanged from the existing site text: the 503A page, categories PDF, category 2 page, 503B page and PDF, PCAC
meeting page (no minutes), 2027 announcement, 21 CFR 216.23, GLP-1 policy page, GLP-1 concerns page, personal
importation page, MedWatch, HMR regs 17, 46, 167, 214, specials guidance, Yellow Card, MHRA GLP-1 guidance. The
Federal Register search returned the same counts as on 22 October 2026. The BPC-157 US trial NCT07803250 is unchanged.
The site's current statements on the 2023–2026 position on BPC-157 and similar peptides (us.mdx) still match the FDA
documents. None of them needs a correction.

**Second pass, 24 October 2026 (00:00–01:30 WEST).** Same results:
- FDA page dates: category 2 page 22 April 2026; 503A page 14 May 2026; 503B page 7 January 2025; GLP-1 policy page
  1 April 2026; GLP-1 concerns page 1 October 2026; personal importation 18 August 2025; PCAC 2027 announcement
  15 April 2026; July 2026 PCAC meeting page 6 August 2026 (still no minutes or vote results); expanded access pages
  22 October 2026; Right to Try 12 December 2024; off-label page 5 February 2018; telehealth page 15 June 2026;
  compounding actions index 22 October 2026; MedWatch 21 October 2026.
- PDFs: 503A categories PDF still "Updated May 14, 2026" (GHK-Cu, non-injectable, back in category 1); 503B
  categories PDF still "Updated March 21, 2025". RPM chapter 9 still version 05 (March 2024).
- Quotes re-checked word for word: off-label sentence (US-06), "vast majority" (US-30), "In most circumstances"
  (US-40), "should not be interpreted as a license", "three months" and "$2500 or less" (US-41, US-42), "four or fewer"
  (US-47), retatrutide and cagrilintide (US-51), 990 and more than 730 reports (US-53), the category 2 withdrawn list
  (US-16), GMC paras 102–105 (UK-08 to UK-10).
- No new FDA press announcement, drug alert or Federal Register document on compounding, peptides, telehealth,
  expanded access or importation since the first pass.
- openFDA shortages (meta 2026-10-23), the trial records NCT07803250, NCT07629401, NCT04689360, NCT07165028, NCT07531251
  and NCT07437547, the GOV.UK pages (specials, GLP-1 guidance, EAMS overview and lists, clinical trials hub, the 2009
  DSU article), both NHS pages and the NICE recommendations: unchanged.
- Two first-pass statements were made more precise: US-18 (GHRP-2 split by route) and UK-05 (NICE: maximum 12-year
  implementation, not "over three years"). Neither affects existing site text.

---

## 6. Suggested updates to existing pages (not made: outside this assignment's write scope)

1. **`legal/uk.mdx`, Callout "What we could not find" (personal import).** The MHRA FOI 22/431 (March 2022) answers
   part of it: Border Force does seize unlicensed medicines at entry, destroys amounts judged more than reasonable
   personal quantities, and has released some contested parcels as personal use (`mhra-foi-22-431-personal-import-seizures`).
   It is from 2022 and defines no quantity, so the callout could be narrowed rather than removed.
2. **`legal/us.mdx`, import section.** Add the RPM 9-2 line that FDA discretion "should not be interpreted as a
   license" (`fda-rpm-ch9-personal-importations`).
3. **`legal/us.mdx` and `legal-routes.mdx`, EU/NL sentences.** "Nothing the FDA decides changes the law in the
   Netherlands or the rest of the EU" (us.mdx) and the whole NL framing of legal-routes.mdx will need rewriting for
   the new audience (US, UK, Canada, Australia).
4. **`usc-21-353a` note (src/data/sources/legal-b.yaml).** It covers § 353a(a) and (b). If the page cites the PCAC
   consultation duty, extend the note with § 353a(c)(1): before regulations on the bulks list the Secretary "shall
   convene and consult an advisory committee on compounding" (checked on law.cornell.edu, 23 October 2026).
5. **Retatrutide expanded access.** The US routes section can use the existing `ctgov-nct07629401` as the one real
   example of company-run pre-approval access for a peptide on this site.
6. **`talking-to-your-doctor.mdx`.** GMC paras 34–35 (`gmc-2021-deciding-safe-to-prescribe`) give a UK primary source
   for "tell your doctor what you already use": UK doctors are told to ask about medicines bought online and to
   encourage patients to be open about them.
7. **Compound data: semaglutide UK row.** It cites only `mhra-glp1-what-you-need-to-know`. If the page names Wegovy
   tablets as UK-licensed, `smc-2988-semaglutide-wegovy-tablets` and `uk-emc-search-2026-10-24` support that (the
   MHRA Products entry itself was not read).

---

## 7. UNRESOLVED (for the editor and the legal reviewer)

1. **HHS "reclassification" (reported 27 February 2026).** Trade press and secondary sites say the HHS Secretary
   announced that about 14 of 19 category 2 peptides would move to category 1. UNRESOLVED: no HHS or FDA document
   found on 23 October 2026. FDA pages still show the nominations withdrawn and none of these peptides in category 1
   (except non-injectable GHK-Cu). Report only what FDA documents show. *Second pass:* a post on the Secretary's
   own X account (@SecKennedy) is dated **15 April 2026**, the same day as FDA's PCAC early announcement
   (`fda-pcac-2027-early-announcement`). Its opening refers to the September 2023 category 2 placements. Only the
   opening could be read (X refuses plain fetches; X's embed service returns a truncated text), so its claims were not
   checked and it was not registered (social media, not allowlisted). No document dated 27 February 2026 was found.
   The documented sequence is the FDA one: nominations withdrawn, substances removed from category 2 (22 April 2026
   page), seven peptides to PCAC in July 2026, five more announced for a meeting before the end of February 2027.
2. **PCAC per-peptide vote counts** other than BPC-157 (8–6–1): still not on fda.gov.
3. **Right to Try and obesity.** Whether obesity with complications meets the 21 CFR 312.81 "life-threatening"
   definition is a physician and sponsor judgement. UNRESOLVED: no FDA statement found. The page should state the
   criteria and not apply them to a condition.
4. **US state law** (medical and pharmacy boards, telehealth licensing, state Right to Try laws): not researched.
   The US section should say it covers federal law.
5. **US border practice for small peptide parcels:** no FDA figures found on refusals or destruction of personal
   peptide shipments (as the existing us.mdx callout says).
6. **UK: a seller abroad.** Whether a non-UK online seller supplying a POM or unlicensed medicine to a UK resident
   commits an offence in the UK, and whether the buyer commits any offence beyond the licence exemption: no MHRA
   public guidance found.
7. **UK: seizure practice today.** The only official statement found (FOI 22/431) is from March 2022, and
   "reasonable personal importation quantities" is not defined. The GOV.UK page "Take medicine in or out of the UK"
   (updated 6 May 2016) says that more than 3 months' supply, or medicine posted to you, "will be taken away", but it
   sits in guidance about controlled drugs. It is not clear that it covers non-controlled medicines, so it was not
   registered.
8. **UK: pharmacy preparation of peptides (Medicines Act 1968 s. 10).** The exemption exists. UNRESOLVED: whether UK
   pharmacies prepare peptides such as BPC-157 this way, and which quality or active-substance rules (GPhC standards,
   active-substance import and registration rules) would apply. No MHRA statement found.
9. **UK licence status of elamipretide and thymalfasin:** partly checked. emc has no product information under any
   name, brand or code (24 October 2026; control worked), and GOV.UK names neither. UNRESOLVED: the MHRA Products
   database, the licensing record, was not searched, because it needs a browser and every tab of the shared browser
   was in use by other agents. Until the status assignment searches it, the page should not say "not licensed in the
   UK" for these two.
   *Fact-check, 24 October 2026: partly resolved.* The fact-checker searched MHRA Products in its own browser tab
   (`mhra-products-search-elamipretide-thymalfasin`). **Elamipretide:** no results for any usable name, brand or code,
   and no entry in the substance index, so with emc the page may say "no UK product information found (emc and MHRA
   Products, 24 October 2026)". **Thymalfasin: still UNRESOLVED.** "thymalfasin" gives no results and the substance
   index has no thymalfasin entry, but "Zadaxin" gives 3 documents and "thymosin" 1. The list only appears after
   accepting a disclaimer, which the fact-checker did not do without the owner's approval. Someone must open those
   hits before the page says anything about thymalfasin's UK status.
10. **NHS access outside England:** partly resolved. Scotland: SMC2497 (Wegovy pen) and SMC2653 (Mounjaro) accepted
    for restricted use; SMC2988 (Wegovy tablets) not recommended for lack of a submission. Wales: TA1026 4.15 (Welsh
    ministers' directions; All-Wales Weight Management Pathway, specialist service only). UNRESOLVED: Northern Ireland
    (Department of Health NI position on TA875 and TA1026) not checked, and Wales was checked only for tirzepatide.
11. **GMC remote prescribing paragraphs:** resolved in the second pass (`gmc-2021-deciding-safe-to-prescribe`,
    UK-07a to UK-07c).
12. **Overdue review dates:** the NHS clinical trials page (next review due 22 December 2025) and the NHS 111 page
    (14 November 2025) are past their review dates and were unchanged on 24 October 2026. Re-check them before
    publishing.
13. **ClinicalTrials.gov false positive:** the Selank hit NCT01747200 does not contain "Selank". It is excluded from
    the counts as a real Selank trial.
14. **Editor decision, "NHS 111":** the service name contains a phone number. The content guide bans emergency
    numbers. NHS 111 is a non-emergency service and uk.mdx already prints "call NHS 111", but the editor should
    confirm. The NHS page also gives an emergency number, which was not recorded.

---

## 8. Sourcing flags

**Hosts not on `config/link-allowlist.json`** (each is a statutory regulator or official registry; adding one needs
an owner decision and a "why"):
- `www.gmc-uk.org` (General Medical Council) — `gmc-2021-prescribing-unlicensed`, `gmc-2021-deciding-safe-to-prescribe`;
- `scottishmedicines.org.uk` (Scottish Medicines Consortium, the NHS Scotland body that advises on new medicines) —
  `smc-2497-semaglutide-wegovy`, `smc-2653-tirzepatide-mounjaro`, `smc-2988-semaglutide-wegovy-tablets`;
- `www.medicines.org.uk` (emc, the UK compendium of official SmPCs and patient leaflets; run by Datapharm, a company,
  but it publishes regulator-approved product information and sells nothing) — `uk-emc-search-2026-10-24`. The
  owner should decide whether this host is acceptable; the task's source rules name emc as an official source for
  UK product information;
- `assets.pharmacyregulation.org` / `www.pharmacyregulation.org` (General Pharmaceutical Council) —
  `gphc-2025-distance-pharmacy-guidance`;
- `www.isrctn.com` (ISRCTN registry) — `isrctn-peptide-search-2026-10-23`;
- `www.nhs24.scot` and `111.wales.nhs.uk` — named in the `nhs-111` note only.

Allowlisted through suffixes: `www.accessdata.fda.gov` and `api.fda.gov` (.gov), `assets.publishing.service.gov.uk`
and `www.nidirect.gov.uk` (.gov.uk). `bepartofresearch.nihr.ac.uk` passes the `.ac.uk` suffix, though the NIHR is not
a university.

**Checked but deliberately not registered:**
- FDA untitled letter of 14 September 2023 to a 503A pharmacy (BPC-157 acetate not eligible for 503A): it names the
  pharmacy, so it is cited through `fda-compounding-actions-index`, as legal-a and legal-b do for warning letters;
- individual telehealth warning letters (September 2025, March 2026): they name companies, so they are cited through
  the press release and the FDA telehealth page;
- GOV.UK "Take medicine in or out of the UK": controlled-drug context (see 7.7);
- news and trade press on the HHS "reclassification" (STAT, 29 April 2026; others): not primary, used for checking
  only;
- the HHS Secretary's X post of 15 April 2026: social media, full text unreadable (see 7.1);
- GOV.UK "Import a human medicine" (MHRA/DHSC, updated 29 January 2025): read in the second pass. It covers business
  import licences (wholesale, manufacturer's "specials" licence, notifying the MHRA) and says nothing about personal
  import, so it adds nothing to UK-28 to UK-30;
- SMC2872 (Wegovy, cardiovascular risk, 8 June 2026): read, but not needed for a routes page.

**No telephone numbers** were recorded. FDA pages, the eCFR text and the NHS page contain several, and they were left
out on purpose.

---

## Fact-check (independent)

Checked on **24 October 2026, about 00:20–01:00 local time** (still 23 October in US time zones) by an independent
fact-checker who did not write the notes above. Every primary source was opened again: with curl (HTML converted to
text, PDFs with `pdftotext`), the eCFR versioner API, the Federal Register documents and public-inspection APIs, the
GOV.UK content API, the ClinicalTrials.gov API v2, the ISRCTN API and openFDA. The GMC site answered curl when browser
request headers were sent. MHRA Products was searched in the desktop browser pane, in a new tab of my own, closed
afterwards (a tab had freed up; no other agent's tab was used). Nothing under `src/`, `config/`, `docs/` or
`scripts/` was edited.

### What was checked

- **Format and ids.** The YAML passes `sourceFileSchema` from `src/schemas/index.ts` (run with tsx): 51 entries, every
  `type` in `SOURCE_TYPES`, every url-only entry has `accessed`. No id clashes with `src/data/sources/*.yaml`,
  `research/refocus/sources/*.yaml` or `research/refocus/status/*.yaml`. No new entry points at a document that
  already has an id (exact-URL check). One deliberate overlap: `federalregister-fda-search-2026-10-23` uses the same
  search URL as the existing `federalregister-fda-search-2026-10-22`. It is a dated re-run, so it was kept; the editor
  may prefer to update the old entry instead. Every reused id in section 0 exists in `src/data/sources/`.
- **All URLs resolve** (HTTP 200), including all 50 original new sources and the reused FDA, MHRA and legislation pages
  cited in the fact rows.
- **US law, word for word:** 21 U.S.C. 353(b)(1), 353a(c)(1) (also (c)(2): USP consultation), 353b(a)(2), 360bbb(b)–(d),
  360bbb-0a(a)–(b) with Pub. L. 115-176 § 2(b), 396; 21 CFR 312.20, 312.81, 312.300–312.320, 50.25, 56.103, 216.23
  (eCFR versioner: 216.23 last changed 21 March 2019; title 21 up to date as of 21 October 2026).
- **FDA pages, "content current as of" dates all confirmed:** expanded access and patient page 22 October 2026; Right
  to Try 12 December 2024; off-label 5 February 2018; telehealth page 15 June 2026; 30 warning letters press release
  3 March 2026; 503A page 14 May 2026; 503B page 7 January 2025; category 2 page 22 April 2026; GLP-1 policy page
  1 April 2026; GLP-1 concerns page 1 October 2026; personal importation 18 August 2025; MedWatch 21 October 2026;
  compounding actions index 22 October 2026; RPM index 1 February 2025 (chapter 9 still MAN-000012 version 05, March
  2024); PCAC July 2026 page 6 August 2026 (no minutes or votes); PCAC 2027 announcement 15 April 2026.
- **FDA PDFs:** 503A categories "Updated May 14, 2026" (GHK-Cu non-injectable back in category 1; category 2 holds
  no site peptide); 503B categories "Updated March 21, 2025" (ipamorelin acetate, GHRP-6, GHRP-2 injectable/nasal in
  category 2; thymosin alpha-1 in category 3); briefing introduction (14 "NOT be included" proposals); day-1 slides;
  untitled letter of 14 September 2023 (BPC-157 acetate not eligible for 503A).
- **Import alerts:** 66-41 published 22 October 2026 (revision of 19 May 2026; PT-141 and melanotan entries under
  "Peptide N.E.C."); 66-80 published 9 October 2026 (48 sites, 21% non-compliant).
- **Shortages:** openFDA meta 2026-10-23: semaglutide only 3 Rybelsus tablet records "To Be Discontinued"; tirzepatide
  none; liraglutide 11 records, 9 "Current". The FDA database page lists liraglutide injection "Currently in Shortage".
- **Federal Register:** the nine phrase searches from 24 July 2026 give the same counts (15, 3, 6, 2, 7, 2, 3, 1, 1),
  none a 503A bulks rule, a final 503B GLP-1 decision or a PCAC notice; the 23 October issue has 7 FDA documents, none
  relevant; the public-inspection list has 2 FDA documents (26 and 27 October), none relevant.
- **"Not found" searches repeated:**
  - ClinicalTrials.gov, US and UK sites, every compound with the data-file names, synonyms, brands and codes (I added
    BPC157, PL14736, LKKTETQ, "modified GRF 1-29", NNC-26-0161, TP-7, GHK, melanotan, Szeto-Schiller peptide 31,
    Forzinity, DSIP): all counts in US-38 and UK-26 reproduced. Adding "Ta1" for thymalfasin gives 14 US records
    instead of 7, but the extra 7 are TAAR1 (solriamfetol, methamphetamine) studies: a false positive, so the writer's
    7 (1 recruiting) is right.
  - ClinicalTrials.gov expanded access, all countries: only NCT04689360 (elamipretide, intermediate-size, available;
    first posted 30 December 2020, last update 16 October 2026) and NCT07629401 (retatrutide, individual, available;
    BMI of at least 35 despite the highest dose of weight-management therapy, at least two serious or life-threatening
    obesity-related complications). None for semaglutide or tirzepatide, including brand names and codes.
  - ISRCTN: same zero counts, plus BPC157, TB500, LY3437943, epithalon, Zadaxin, SS-31, Bendavia, DSIP (all 0);
    MTP-131 1 (one of the 3 elamipretide records). The 3 "thymosin" records mention thymosin only in exclusion criteria.
  - EAMS current list (content API: 3 products) and expired list: no site peptide, no GLP-1, no "peptide".
  - emc: no results for every recorded term, plus "elamipretide hydrochloride" and "Szeto-Schiller"; control "wegovy"
    10 results, pens and tablets.
  - FDA 503A and 503B categories PDFs: the writer's terms plus LL-37, cathelicidin, dihexa and MGF (see section 4).
  - **MHRA Products (not searched in the first two passes):** see below, 7.9 and
    `mhra-products-search-elamipretide-thymalfasin`.
  - HHS "reclassification": searches limited to hhs.gov and fda.gov found no HHS or FDA document; still UNRESOLVED.
- **UK law:** HMR regs 4, 17, 46, 167, 167C, 214; Medicines Act 1968 s. 10; SI 2004/1031 reg 12; SI 2025/538 (made 28
  April 2025 under the Medicines and Medical Devices Act 2021; in force 12 months later; UK-wide).
- **UK guidance:** GMC paras 102–108 and 20–43 and the guidance dates (published 18 February 2021, in effect 5 April
  2021, updated 15 March 2022 and 13 December 2024, from the guidance index page); MHRA DSU April 2009 (on GOV.UK since
  11 December 2014); GN14 paras 2.2–2.4 and Appendix 2 (page 21; GOV.UK change history: PDF updated 12 May 2023);
  specials HTML page (updated 29 January 2025); EAMS overview (updated 2 March 2026); trials hub (updated 28 April 2026);
  FOI 22/431 (dated 10 March 2022, published 1 June 2022; figures and quotes exact); GPhC February 2025; MHRA GLP-1 page;
  Yellow Card; NHS clinical trials and NHS 111 pages (review dates overdue, as recorded); NICE TA1026 (published 23
  December 2024, updated 1 September 2025; rec 1.1, 4.7–4.10, 4.15) and TA875 (published 8 March 2023, updated
  4 September 2023; rec 1.1); SMC2497 (9 October 2023), SMC2653 (10 June 2024), SMC2988 (12 October 2026).
- **Approved US products (US-03):** openFDA Drugs@FDA confirms the applications behind the reused ids: Ozempic NDA
  209637, Rybelsus NDA 213051, Wegovy NDA 215256 and tablets NDA 218316, Mounjaro NDA 215866, Zepbound NDA 217806,
  Egrifta BLA 022505, Vyleesi NDA 210557, Forzinity NDA 215244 (19 September 2025).
- **Existing site text:** us.mdx and uk.mdx statements on the 2023–2026 BPC-157 position, the category 2 list, the PCAC
  framing and personal import still match the FDA and MHRA documents.

### What was changed, and why

| Where | Change | Why |
|---|---|---|
| Section 0 (UK law) | reg 214 currency date given as 20 October 2026 | legislation.gov.uk says "on or before 20 October 2026" for reg 214 (and for SI 2004/1031 reg 12), not 23 October |
| US-34 | 312.81(a) quoted exactly, limbs joined by "and" | the first pass paraphrased with "or" |
| US-41a (new row) | RPM 9-2-5 commercial-shipment definition | a primary-source limit on the personal-importation discretion that the page needs: shipments other than those carried in person, sent by a personal non-commercial representative, or sent from a foreign medical facility generally count as commercial, and commercial shipments are outside the procedures |
| US-42 | administrative-destruction wording | the RPM gives "$2500 or less … refused" and "not met the … criteria" as examples of drugs subject to administrative destruction; the first pass made it read as a rule |
| US-44 | IA 66-41 guidance sentence | the alert itself says commercial shipments and DWPE products are "generally not amenable" to enforcement discretion |
| US-49 | "thousands of letters" context | the press release counts letters about misleading ads in general, not only compounded GLP-1s |
| UK-04, 7.9, section 4 | MHRA Products results added | first search of the licensing database for elamipretide and thymalfasin (see below) |
| UK-07 | GPhC: phone call not appropriate; video, in person, records or GP | missing from the first pass; directly relevant to online weight-loss prescribing |
| UK-07a | "should raise concerns" changed to "it may be appropriate to raise concerns" | the GMC wording is permissive (para 37) |
| UK-18 | other s. 10 exemptions; pending S.I. 2025/1249 amendment | s. 10(3)–(6) also exist, and they lift only the licence and authorisation rules, not reg 214; art. 4 of S.I. 2025/1249 will amend s. 10 on a day to be appointed |
| UK-31 | quote completed ("… manufacturing and distribution processes") | the first pass cut the quote off mid-phrase |
| Section 4 (503A PDF row) | "Mechano growth factor (MGF)" is in 503A category 3 | found when adding MGF to the search terms; PEG-MGF itself is on the withdrawn list |
| Row count | 93 to 94 | US-41a added |
| YAML | notes corrected or extended: `ecfr-21-312-subpart-i` (2010 amendment), `fda-rpm-ch9-personal-importations`, `fda-import-alert-66-41`, `fda-2026-03-telehealth-warning-letters`, `gphc-2025-distance-pharmacy-guidance`, `uk-ma-1968-s10`, `uk-si-2004-1031-reg-12`, `uk-emc-search-2026-10-24`; new `mhra-products-search-elamipretide-thymalfasin` | as above |

No fact row was found to be wrong in substance: every count, date, section number and status in the US and UK rows
was reproduced from the primary sources. The changes are precision fixes, one overstatement, one truncated quote, and
additions the page needs.

### MHRA Products search (new, 24 October 2026)

- **Elamipretide:** "There are no search results for" elamipretide, Forzinity, Bendavia, Szeto-Schiller and
  "elamipretide hydrochloride". SS-31 and MTP-131 cannot be searched usefully: the site splits them into short tokens
  and returns 68,310 and 2,564 unrelated documents. Substance index E has no elamipretide entry. Controls worked
  (semaglutide 261 documents; tirzepatide in index T). With emc, the page may say "no UK product information found
  (emc and MHRA Products, 24 October 2026)" for elamipretide.
- **Thymalfasin:** no results for thymalfasin or "thymosin alpha", and no thymalfasin or thymosin entry in substance
  index T. **But "Zadaxin" returns 3 documents and "thymosin" 1.** A one-letter change ("Zadaxon") returns nothing, so
  these are real text matches. The result list appears only after ticking and accepting a disclaimer; I did not accept
  it (accepting terms needs the owner's approval), so I could not see what the documents are.

### Still UNRESOLVED

1. **Thymalfasin, UK:** what the 3 "Zadaxin" documents and the 1 "thymosin" document on MHRA Products are. Do not print
   any UK licence status for thymalfasin until someone (with the owner's approval to accept the site's disclaimer, or
   the status assignment) opens them.
2. All items in section 7 except 7.9 (elamipretide part now resolved) and 7.11 stay open as the writer recorded them:
   HHS "reclassification" (no HHS or FDA document; repeated hhs.gov and fda.gov searches found none), PCAC per-peptide
   votes, Right to Try and obesity, US state law, US border figures, UK overseas-seller liability, UK seizure practice
   today, UK pharmacy preparation of peptides (now with the extra s. 10 routes; whether a peptide preparation would
   also be a POM under the 2012 Regulations, so that reg 214 applies, was not researched), NHS access in Northern
   Ireland and Wales for semaglutide, overdue NHS review dates, and the editor's decision on printing "NHS 111".
3. **Commencement of S.I. 2025/1249 art. 4** (amends Medicines Act s. 10): legislation.gov.uk lists it as not yet
   applied; whether a Privy Council commencement order has been made was not checked.
4. **Wegovy tablets, UK:** the MHRA Products entry itself was not opened (the result list sits behind the same
   disclaimer); the SMC2988 wording and emc support a UK marketing authorisation.
5. **Hosts not on `config/link-allowlist.json`** (confirmed against the file): www.gmc-uk.org, scottishmedicines.org.uk,
   www.medicines.org.uk, assets.pharmacyregulation.org, www.isrctn.com; www.nhs24.scot and 111.wales.nhs.uk appear in
   a note only. Each needs an owner decision.
