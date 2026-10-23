# Research notes — refocus assignment `canada-legal`

For a new page **"Peptides and the law in Canada"** (`/en/legal/ca/`, as deep as `legal/us.mdx`), and for the
`#canada-special-access` block on `/en/legal-routes/`. Written on **23 October 2026**.

Outputs:
- this file;
- `research/refocus/sources/canada.yaml` — **92 entries**: 85 documents registered only here, plus 7 shared entries
  that keep the id and URL another refocus file uses (see "Shared ids" below). Checked by script: the file parses with the project's `yaml` package with unique keys; every entry has type,
  title, year, url, accessed, verified; every type is in `SOURCE_TYPES`; no URL or title contains a commerce token
  from `config/commerce-tokens.json` (all locales, the project's own regex); no note contains a phone number.

Nothing under `src/`, `config/`, `docs/` or `scripts/` was edited.

**Two runs.** A first run of this assignment wrote the sources file and was cut off before this file. A second run
(late on 23 October 2026, Eastern Time; just after midnight on 24 October on this machine's clock) treated that file
as an unverified draft: it re-read every law page and every Health Canada, CBSA, Sport Integrity Canada, provincial
regulator and help-service page it could reach, corrected what was wrong (section 16), and wrote this file.

**Method.** Laws were read in the official consolidated text on the Justice Laws Website (FullText pages, read as
text and searched; quotations checked against the raw text). Health Canada's recalls database, the CBSA, Sport
Integrity Canada, NAPRA, the Alberta colleges, ClinicalTrials.gov (API v2) and most help services were fetched with
curl. canada.ca does not answer this machine's scripts, so its pages were read through WebFetch (which returns short
verbatim excerpts; quotations from canada.ca are limited to what it returned). PDFs were downloaded with curl and read
with `pdftotext`.

**What could not be read in the second run.** Health Canada's product databases (Drug Product Database, Licensed
Natural Health Products Database, Notice of Compliance, Clinical Trials Database) redirected to a maintenance page
(construction.hres.ca) or returned HTTP 503; the database records in the sources file are the first run's and say so.
albertahealthservices.ca refused connections; gnb.ca, yukon.ca, gov.nu.ca and health811.ontario.ca answered 403;
princeedwardisland.ca and healthpei.ca served a bot check. The shared browser had no free tab (tab cap reached by
other agents), so these were not opened in a browser. They are UNRESOLVED (section 17).

**House rules applied:** no doses or vial strengths (several advisories print them; not copied); no seller, clinic,
shop, research-chemical brand, athlete or university named; no emergency number; **no telephone numbers recorded at
all** (the assignment did not ask for them); British spelling outside quotations (Canadian sources write
"authorized"); dates in prose.

**Shared ids.** Following the convention status-c set, documents that status-b or status-c also registered keep the
same id and URL here, with the facts this page relies on; when the files are merged, keep one entry per id and join
the notes: `ca-food-and-drugs-act`, `ca-cdsa`, `ca-pdl-human`, `ca-hc-recalls-database`,
`ca-hc-cosmetic-drug-interface-guidance`, `ca-hc-cosmetic-ingredient-hotlist`, `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`.

---

## 0. Reused source ids (not repeated in canada.yaml)

| id | where | used for | re-checked in the second run |
|---|---|---|---|
| `wada-2026-list-en` | src/data/sources/bpc-157.yaml | BPC-157 named in S0 (non-approved substances), prohibited at all times | no (Sport Integrity Canada's reminder repeats it) |
| `wada-2027-list-en` | src/data/sources/bpc-157.yaml | S0 still names BPC-157 from 1 January 2027 | no |
| `wada-code-2021`, `wada-code-2027` | src/data/sources/legal-b.yaml | strict liability; 2027 Code in force 1 January 2027 | no |
| `ca-food-and-drug-regulations` | status-b.yaml (also status-c) | C.01.014(1) DIN rule; C.08.002(1) new-drug rule | yes: both re-read in the full text |
| `ca-hc-2026-04-think-twice-peptides` | status-b.yaml (also status-c) | advisory RA-81874 (9 April 2026) | yes: read in full |
| `ca-noc-egrifta`, `ca-sbd-egrifta`, `ca-dpd-egrifta-din-02438712`, `ca-dpd-egrifta-din-02423677` | status-b.yaml | tesamorelin (Egrifta) authorised 2014, both DINs cancelled | no (databases down) |
| `ca-dpd-search-status-b-2026-10-23`, `ca-noc-search-status-b-2026-10-23`, `ca-hc-ctdb-search-status-b-2026-10-23` | status-b.yaml | not-found records for tesamorelin, ipamorelin, hexarelin, CJC-1295 | no |
| `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23`, `ca-hc-ctdb-search-status-c-2026-10-23` | status-c.yaml | not-found records for BPC-157, TB-500, KPV, GHK-Cu, melanotan, bremelanotide; afamelanotide NOC 2026 | no |

---

## 1. The Canadian picture in brief (every line sourced below)

1. **One federal law.** The Food and Drugs Act and the Food and Drug Regulations, enforced by Health Canada, decide
   what is a drug and whether it may be sold. A product sold or represented for treating disease or for "restoring,
   correcting or modifying organic functions" is a drug (`ca-fda-s2-definitions`).
2. **Authorisation before sale.** A drug that has not been sold in Canada long enough to establish its safety and
   effectiveness is a **new drug** (`ca-fdr-c08-001-new-drug`). Nobody may sell or advertise a new drug without a
   **notice of compliance (NOC)** (`ca-food-and-drug-regulations`, C.08.002(1); `ca-fdr-c08-004-notice-of-compliance`),
   and no manufacturer may sell a drug in dosage form without a **Drug Identification Number (DIN)**
   (`ca-food-and-drug-regulations`, C.01.014(1)). "Sell" includes giving away (`ca-fda-s2-definitions`).
3. **Injectable peptides are treated as prescription drugs.** Health Canada says so in most of its peptide advisories
   since 2023 ("Most synthetic injectable peptides …" in 2023; "injectable peptides are regulated as prescription
   drugs in Canada" in 2025), in its April 2026 public advisory ("peptides are generally regulated as prescription
   drugs"), and in its July 2026 statement on an injunction
   (`ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-database`, `ca-hc-2026-07-injunction-statement`). The
   Prescription Drug List itself names peptide medicines one by one and names none of the experimental peptides on
   this site (`ca-pdl-human`). How an unlisted peptide becomes a prescription drug in law is not stated anywhere we
   found (section 17).
4. **"Research use only" changes nothing.** Health Canada: such labelling "does not make these products legal or
   exempt from regulatory requirements" (`ca-hc-2026-04-think-twice-peptides`).
5. **Enforcement is active and public.** Seizures and public advisories (2023–2026), a Type I recall of BPC-157 and
   GHK-Cu powder supplied to pharmacies (May 2026), a Ministerial Order and, on 11 June 2026, a permanent injunction
   from the Superior Court of Québec against an online peptide seller (`ca-hc-recalls-database`,
   `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`, `ca-hc-2026-07-injunction-statement`).
6. **Importing for yourself.** Residents generally may not bring prescription drugs into Canada, "whether you carry
   them across the border or have them delivered by mail or courier" (`ca-hc-gui-0116-personal-import`); the CBSA can
   detain goods and refer them to Health Canada, which may refuse, seize, test or order removal or destruction
   (`ca-cbsa-d19-9-1`, `ca-customs-act-s101`, `ca-fda-s27-1-unlawful-imports`, `ca-fda-s27-2-removal-destruction`).
7. **None of the peptides is a controlled substance** (CDSA schedules searched; `ca-cdsa`).
8. **Legal routes:** a Health Canada-authorised prescription medicine; the **Special Access Program** for a serious or
   life-threatening condition when a manufacturer agrees to supply (`ca-fdr-c08-010-special-access`,
   `ca-hc-sap-drugs`); an authorised **clinical trial** (`ca-fdr-c05-clinical-trials`); **pharmacy compounding**,
   regulated by the provinces, but not as a way round federal approval and only from approved or pharmacopoeial
   ingredients (`ca-hc-pol-0051-compounding`).
9. **Natural health products:** oral NAD+ precursors can be licensed natural health products (an NMN monograph
   exists; an oral nicotinamide riboside product is licensed); anything injected cannot be a natural health product
   (`ca-nhpr-schedule-2`, item 5). A GHK-Cu skin cream can be a cosmetic; an injected one cannot
   (`ca-hc-cosmetic-drug-interface-guidance`).
10. **Report** side effects to Health Canada (Canada Vigilance Program, through MedEffect Canada)
    (`ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`). **Sport:** Sport Integrity Canada (formerly the CCES)
    runs the Canadian Anti-Doping Program; BPC-157 and other non-approved peptides are banned at all times
    (`ca-sic-2026-04-peptides-reminder`).

---

## 2. Draft page material (B1; every sentence sourced; for the writer)

### 2.1 Lead and Compare grid

> <Lead question="What does Canadian law say about peptides?">Health Canada treats injectable peptides as prescription drugs. Selling one it has not authorised is against the law.</Lead>
>
> <Compare title="Canadian law forbids selling drugs Health Canada has not authorised. A 'research' label does not change that." detail="Food and Drugs Act, Food and Drug Regulations and Health Canada guidance, checked on 23 October 2026. This page covers federal law; provinces add their own rules for pharmacies and doctors.">
>
> | | Under Canadian federal law |
> |---|---|
> | Is selling a new drug without Health Canada's authorisation forbidden? | <Verdict is="yes" /> No one may sell or advertise a new drug until Health Canada has issued a notice of compliance.<Cite id="ca-food-and-drug-regulations,ca-fdr-c08-001-new-drug" /> |
> | Does Health Canada treat injectable peptides as prescription drugs? | <Verdict is="yes" /> It says "injectable peptides are regulated as prescription drugs in Canada".<Cite id="ca-hc-recalls-database,ca-hc-2026-04-think-twice-peptides" /> |
> | Does a "research use only" label make selling legal? | <Verdict is="no" /> Health Canada says the label does not make a product legal.<Cite id="ca-hc-2026-04-think-twice-peptides" /> |
> | May a resident import a prescription drug by mail? | <Verdict is="no" /> Residents may not bring in prescription drugs by mail or courier.<Cite id="ca-hc-gui-0116-personal-import,ca-cbsa-d19-9-1" /> |
> | Can a doctor get an unauthorised drug for one patient? | Sometimes. Through the Special Access Program, for a serious or life-threatening condition, if a company will supply it.<Cite id="ca-fdr-c08-010-special-access,ca-hc-sap-drugs" /> |
> | Can a pharmacy make BPC-157 for you? | <Verdict is="no" /> In May 2026 Health Canada recalled BPC-157 and GHK-Cu powder from pharmacies as unauthorised ingredients.<Cite id="ca-hc-2026-05-ghk-cu-bpc-157-api-recall,ca-hc-pol-0051-compounding" /> |
>
> </Compare>

Writer's notes:
- The verdict "yes" on injectable peptides rests on Health Canada's own statements, not on a provision of law (section
  17, item 1). Keep the quotation marks and the attribution ("it says").
- The pharmacy row: Health Canada's policy is that compounding must use an authorised drug's ingredient or a
  pharmacopoeial one; the recall shows how it treats BPC-157 powder. It is fair to say "no"; do not say "it is a crime
  for a pharmacist to …" (no source says that).
- Do not add a row "Is possessing a peptide illegal?": we found no possession offence, but a legal reviewer has not
  confirmed that, and the border can still seize (section 17, item 2).

### 2.2 Draft sections (short, for adaptation)

> **What counts as a drug.** In Canada, a product is a drug if it is made, sold or presented for treating or
> preventing a disease, or for "restoring, correcting or modifying organic functions".<Cite id="ca-fda-s2-definitions" />
> A drug that has not been sold in Canada long enough to show it is safe and works is a **new drug**.<Cite id="ca-fdr-c08-001-new-drug" />
> Health Canada must issue a **notice of compliance** before anyone may sell or advertise it.<Cite id="ca-food-and-drug-regulations,ca-fdr-c08-004-notice-of-compliance" />
> Each authorised drug has an eight-digit **DIN** (Drug Identification Number) on its label.<Cite id="ca-food-and-drug-regulations,ca-hc-2026-04-think-twice-peptides" />

> **Advertising.** No one may advertise a product to the public as a treatment or cure for diseases on a list in the
> law. The list includes obesity, diabetes, cancer and depression.<Cite id="ca-fda-s3-advertising,ca-fda-schedule-a1" />
> A prescription drug may be advertised to the public only by its name, price and quantity.<Cite id="ca-fdr-c01-044-rx-advertising" />
> It is also illegal to sell or advertise a drug in a way that is false or misleading about its safety or value.<Cite id="ca-fda-s9-deception" />

> **Penalties.** For drugs and devices, a conviction can bring a fine of up to $5,000,000 or two years in prison.
> Knowingly or recklessly causing a serious risk to health can bring up to five years.<Cite id="ca-fda-s31-2-therapeutic-products-penalty,ca-fda-s31-4-serious-risk-penalty" />
> These are the maximums the law allows. Health Canada can also order a recall, order a company to stop, and ask a
> court for an injunction.<Cite id="ca-fda-s21-3-recalls,ca-fda-s27-3-measures,ca-fda-s21-5-injunction" />

> **Bringing products into Canada.** Residents of Canada generally may not bring in prescription drugs, by hand or by
> mail.<Cite id="ca-hc-gui-0116-personal-import" /> Border officers can hold a parcel and pass it to Health Canada.
> Health Canada can refuse it, seize it, test it, or order it sent back or destroyed, at your cost.<Cite id="ca-cbsa-d19-9-1,ca-customs-act-s101,ca-fda-s27-2-removal-destruction,ca-fda-s30-7-cost-recovery" />
> Health Canada says it works with the Canada Border Services Agency to stop shipments of unauthorised peptides.<Cite id="ca-hc-2026-04-think-twice-peptides" />

> **"Research use only".** Health Canada keeps finding injectable peptides labelled "For Research Use Only – Not for
> Human Consumption". It says this label "does not make these products legal".<Cite id="ca-hc-2026-04-think-twice-peptides" />
> Since 2023 it has seized injectable peptides from online sellers, a wellness clinic, a fitness business and
> supplement shops, and named the products in public advisories.<Cite id="ca-hc-recalls-database" /> In June 2026 a
> Québec court banned one online seller from selling or advertising injectable peptides in Canada.<Cite id="ca-hc-2026-07-injunction-statement" />
> Some seized vials carried false DINs.<Cite id="ca-hc-recalls-database" /> If your product did not come from a
> pharmacy, no one has checked what is in it.

> **If you have a product already.** Health Canada advises talking to a health professional if you have used one and
> feel unwell, and taking unused products to a pharmacy for disposal.<Cite id="ca-hc-2026-04-think-twice-peptides" />
> You can check a DIN in Health Canada's Drug Product Database.<Cite id="ca-hc-2026-04-think-twice-peptides" />

> **Side effects.** Anyone can report a side effect to Health Canada, even if you are not sure the product caused
> it.<Cite id="ca-hc-medeffect-reporting" /> Reports go to the Canada Vigilance Program.<Cite id="ca-hc-canada-vigilance" />
> You can also report unauthorised sales or misleading adverts.<Cite id="ca-hc-complaints" />

> **Sport.** Sport Integrity Canada runs the Canadian Anti-Doping Program.<Cite id="ca-sic-our-brand,ca-sic-cadp" />
> BPC-157 and other non-approved peptides are banned at all times. Using or even possessing them can break the
> rules.<Cite id="ca-sic-2026-04-peptides-reminder,wada-2026-list-en" /> In 2025 a university volleyball player received a
> four-year ban for using BPC-157 and TB-500.<Cite id="ca-sic-2025-04-bpc157-tb500-sanction" />

### 2.3 Draft for `/en/legal-routes/#canada-special-access`

> **Canada: the Special Access Program (SAP).** A doctor or dentist can ask Health Canada for a drug that is not sold
> in Canada. It must be for a serious or life-threatening condition, when usual treatments have failed, do not suit
> or are not available.<Cite id="ca-hc-sap-drugs,ca-fdr-c08-010-special-access" /> The doctor must explain the risks,
> base the request on credible evidence, and report the results and any side effects.<Cite id="ca-hc-sap-drugs" />
> The drug comes straight from the company that makes it. The company sets the price and may not supply it.<Cite id="ca-hc-sap-drugs" />
> SAP is a route for medicines in development or approved abroad. A peptide that no company makes as a medicine has
> no one to supply it through SAP. *(Last sentence is an inference; mark it as such or cut it. Health Canada's
> advertising guidance also warns against suggesting a product "is available through the Special Access Program":
> section 11.3.)*

---

## 3. What counts as a drug; new drugs, NOC and DIN

| Fact | Source id |
|---|---|
| "Drug" includes any substance "manufactured, sold or represented for use in (a) the diagnosis, treatment, mitigation or prevention of a disease, disorder or abnormal physical state, or its symptoms … (b) restoring, correcting or modifying organic functions" | `ca-fda-s2-definitions` |
| "Sell" includes offering, having in possession for sale, or distributing "whether or not the distribution is made for consideration" | `ca-fda-s2-definitions` |
| "Advertisement" includes "any representation by any means whatever for the purpose of promoting directly or indirectly the sale or disposal" | `ca-fda-s2-definitions` |
| "Therapeutic product" = a drug or device or a combination (the higher penalties apply to these) | `ca-fda-s2-definitions` |
| New drug: a substance not sold as a drug in Canada "for sufficient time and in sufficient quantity to establish in Canada the safety and effectiveness" (also new combinations and new uses, doses, routes) | `ca-fdr-c08-001-new-drug` |
| "No person shall sell or advertise a new drug unless" a satisfactory submission was filed and a notice of compliance issued and not suspended (C.08.002(1)) | `ca-food-and-drug-regulations` |
| A new drug submission must include safety test reports and "substantial evidence of the clinical effectiveness" (C.08.002(2)(g)–(h)); the Minister issues an NOC under C.08.004(1) if it complies | `ca-fdr-c08-004-notice-of-compliance` |
| "No manufacturer shall sell a drug in dosage form unless a drug identification number has been assigned" (C.01.014(1)) | `ca-food-and-drug-regulations` |
| Health Canada's consumer advice: authorised prescription drugs carry an eight-digit DIN; check the Drug Product Database | `ca-hc-2026-04-think-twice-peptides` |
| Natural health products carry an NPN (or DIN-HM for homeopathic medicines) | `ca-hc-recalls-database` (RA-77275 and later advisories) |
| Clinical trials need an authorisation (Act s. 3.1, in force) | `ca-fdr-c05-clinical-trials` |

---

## 4. Selling and advertising; penalties and powers

### 4.1 Rules

| Fact | Source id |
|---|---|
| s. 3(1): no advertising of any food, drug, cosmetic or device to the general public as a treatment, preventative or cure for a Schedule A.1 condition; s. 3(2): no sale if so labelled or advertised | `ca-fda-s3-advertising` |
| Schedule A.1 lists 29 conditions, including obesity, diabetes, cancer, depression, dementia, hypertension, sexually transmitted diseases, thyroid disease | `ca-fda-schedule-a1` |
| **Schedule A or A.1?** The list was "Schedule A" until 2019; 2019, c. 29, s. 177 renumbered it **Schedule A.1**. Today's Schedule A (s. 2.4) is an empty product-classification schedule. The assignment's "s. 3 + Schedule A" means today's Schedule A.1 | `ca-fda-schedule-a1` |
| Drugs (not prescription drugs, not CDSA drugs) may be advertised as a *preventative*, not as a treatment or cure, for Schedule A.1 conditions (A.01.066–A.01.068) | `ca-fdr-a01-067-advertising-preventative` |
| Natural health products: same preventative-only exemption (NHPR s. 103.2) | `ca-nhpr-definition` |
| s. 9(1): no labelling, packaging, selling or advertising of a drug "in a manner that is false, misleading or deceptive or is likely to create an erroneous impression regarding its character, value, quantity, composition, merit or safety" | `ca-fda-s9-deception` |
| s. 8: no sale of a drug made or stored under unsanitary conditions, or adulterated | `ca-fda-s8-prohibited-sales` |
| Prescription drugs: sold only by a person entitled under provincial law to dispense, on a prescription, or to listed professional buyers (C.01.041, C.01.043) | `ca-fdr-c01-041-rx-sale` |
| Advertising a prescription drug to the public: only brand name, proper name, common name, price and quantity (C.01.044) | `ca-fdr-c01-044-rx-advertising` |
| Import for sale of a drug whose sale would break the Act or Regulations is forbidden (A.01.040) | `ca-fdr-a01-040-import-for-sale` |
| Establishment licence needed to fabricate, package, import, distribute or wholesale drugs (C.01A.004) | `ca-fdr-c01a-004-establishment-licence` |
| "Health Canada is the regulatory authority for all health product advertising in Canada"; messages about unauthorised products in educational settings may count as promotional (section 11.3) | `ca-hc-advertising-distinction-2023` |

### 4.2 Penalties (maximums)

| Offence | Maximum | Source id |
|---|---|---|
| General (s. 31) | summary: $500 / 3 months (first), $1,000 / 6 months (later); indictment: $5,000 / 3 years | `ca-fda-s31-general-penalty` |
| Therapeutic products, including s. 3 advertising and s. 27.3 orders (s. 31.2) | indictment: $5,000,000 / 2 years; summary: $250,000 / 6 months (first), $500,000 / 18 months (later) | `ca-fda-s31-2-therapeutic-products-penalty` |
| False statements to the Minister, or knowingly or recklessly causing serious risk of injury (s. 31.4) | indictment: fine at the court's discretion / 5 years; summary: $500,000 / 18 months (first), $1,000,000 / 2 years (later) | `ca-fda-s31-4-serious-risk-penalty` |
| Each day a separate offence (s. 31.7); due diligence a defence except under s. 31.4 (s. 31.3); company officers who take part are parties (s. 31.6); sentencing must weigh harm and "the vulnerability of consumers" (s. 31.5) | | `ca-fda-s31-2-therapeutic-products-penalty`, `ca-fda-s31-4-serious-risk-penalty` |

### 4.3 Powers

| Power | Source id |
|---|---|
| Recall order for a therapeutic product presenting "a serious or imminent risk of injury to health" (s. 21.3); orders made public (s. 21.4(2)) | `ca-fda-s21-3-recalls` |
| Injunction on the Minister's application (s. 21.5) | `ca-fda-s21-5-injunction` |
| Inspection, sampling, seizure and detention (s. 23) | `ca-fda-s23-inspection-seizure` |
| Imported drugs that break the rules: removal from Canada or forfeiture (s. 27.1); notice to remove or destroy, forfeiture after the deadline (s. 27.2) | `ca-fda-s27-1-unlawful-imports`, `ca-fda-s27-2-removal-destruction` |
| Order to take measures to remedy or prevent a contravention (s. 27.3); Health Canada's statements call this a "Ministerial Order" (they do not cite the section) | `ca-fda-s27-3-measures`, `ca-hc-2026-07-injunction-statement` |
| Recovery of costs of inspection, seizure, storage, disposal (s. 30.7) | `ca-fda-s30-7-cost-recovery` |
| Recall classes: Type I = "reasonable probability … serious adverse health consequences or death" | `ca-hc-gui-0039-recall-types` |

---

## 5. The Prescription Drug List, and the status of this site's compounds in Canada

### 5.1 The list

| Fact | Source id |
|---|---|
| The Minister may establish a list of prescription drugs (s. 29.1); a prescription drug is one on the list or in a class on it (A.01.010) | `ca-fda-s29-1-prescription-drug-list`, `ca-fdr-a01-010-definitions` |
| The list catalogues medicinal ingredients, sometimes with a qualifier (purpose, dose, route); "Without a qualifier indicating otherwise, any medication that contains a medicinal ingredient that is on the Prescription Drug List is considered a prescription drug" | `ca-hc-pdl-overview` |
| Prescription drugs "can only be sold to the public by pharmacists, veterinarians or commercial feed mills, based on a prescription"; federal prescription status applies in all of Canada; provinces may add restrictions | `ca-hc-pdl-overview` |
| The list replaced Schedule F on 19 December 2013 | `ca-hc-pdl-overview` |
| Entries found (human list, searched 23 October 2026): semaglutide (2018-03-12), tirzepatide (2023-03-08), tesamorelin (2014-04-25), sermorelin, somatropin, afamelanotide (2026-08-27), setmelanotide, gonadorelin, chorionic gonadotropin, oxytocin, triptorelin, liraglutide, dulaglutide, exenatide. **No entry** for any experimental peptide on this site, for "peptide", or for injectables in general | `ca-pdl-human` |

### 5.2 Status table (Canada, 23 October 2026)

"Not found" = not found in the Drug Product Database (all statuses, including cancelled) by the INN, synonyms and
codes listed in the source note; NOC searches exist only where marked. DPD records are from the first run (the
database was under maintenance during the second run).

| Compound | Canada status | Source ids |
|---|---|---|
| AOD-9604 | No product found (DPD "AOD"). Seized in 2025 advisories | `ca-dpd-search-canada-legal-2026-10-23`, `ca-hc-recalls-database` |
| BPC-157 | No product found (BPC, PL 14736, PL-10, PLD-116, bepecin). Not on the PDL. Named in RA-81874; BPC-157 powder recalled from pharmacies (Type I, May 2026) | `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`, `ca-pdl-human`, `ca-hc-2026-04-think-twice-peptides`, `ca-hc-2026-05-ghk-cu-bpc-157-api-recall` |
| CJC-1295 | No product, no NOC ever | `ca-dpd-search-status-b-2026-10-23`, `ca-noc-search-status-b-2026-10-23` |
| Epitalon | No product found (epitalon, epithalon, AEDG; "Epithalone" not searched) | `ca-dpd-search-canada-legal-2026-10-23` |
| GHK-Cu | No drug product found (GHK, copper peptide, copper tripeptide, prezatide). Not on the Cosmetic Ingredient Hotlist. GHK-Cu powder recalled from pharmacies (May 2026); injectable GHK-Cu seized | `ca-dpd-search-canada-legal-2026-10-23`, `ca-hc-cosmetic-ingredient-hotlist`, `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`, `ca-hc-recalls-database` |
| Hexarelin | No product, no NOC ever | `ca-dpd-search-status-b-2026-10-23`, `ca-noc-search-status-b-2026-10-23` |
| Ipamorelin | No product, no NOC ever | `ca-dpd-search-status-b-2026-10-23`, `ca-noc-search-status-b-2026-10-23` |
| KPV | No product, no NOC | `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23` |
| Melanotan II | No product, no NOC. (Afamelanotide, the INN of **melanotan I**, a different molecule, was authorised as Scenesse in July 2026 and is on the PDL) | `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23`, `ca-pdl-human` |
| MOTS-c | No product found | `ca-dpd-search-canada-legal-2026-10-23` |
| NAD+ precursors | No drug product found (nicotinamide riboside, NMN, nadide, NAD). As **natural health products**: an NMN monograph (oral, adults) exists; an oral NR product holds a licence. Injectable NAD+ is named in RA-81874 and cannot be a natural health product | `ca-dpd-search-canada-legal-2026-10-23`, `ca-nhpid-nmn-monograph`, `ca-lnhpd-nr-licence`, `ca-nhpr-schedule-2`, `ca-hc-2026-04-think-twice-peptides` |
| PT-141 (bremelanotide) | No product, no NOC (Vyleesi not found) | `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23` |
| Retatrutide | No product found (retatrutide, LY3437943). Ten Lilly trials with Canadian sites | `ca-dpd-search-canada-legal-2026-10-23`, `ca-ctgov-canada-peptide-search-2026-10-23` |
| Selank | No product found (selank; TP-7 and Selanc not searched: API down) | `ca-dpd-search-canada-legal-2026-10-23` |
| Semaglutide | **Authorised**: Ozempic, Rybelsus, Wegovy; generic semaglutide with its own DINs on the market in 2026. On the PDL since 2018 | `ca-dpd-search-canada-legal-2026-10-23`, `ca-hc-2026-08-generic-semaglutide-recall`, `ca-pdl-human`, `ca-hc-2026-01-glp1-advisory` |
| Semax | No product found | `ca-dpd-search-canada-legal-2026-10-23` |
| SS-31 (elamipretide) | No product found (elamipretide, Forzinity). One recruiting trial with a Canadian site (Barth syndrome) | `ca-dpd-search-canada-legal-2026-10-23`, `ca-ctgov-canada-peptide-search-2026-10-23` |
| TB-500 | No product, no NOC | `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23` |
| Tesamorelin | **Authorised 29 April 2014 (Egrifta); no longer sold** (DIN 02438712 cancelled post-market 30 September 2022; DIN 02423677 cancelled pre-market) | `ca-noc-egrifta`, `ca-sbd-egrifta`, `ca-dpd-egrifta-din-02438712`, `ca-dpd-egrifta-din-02423677` |
| Thymosin alpha-1 (thymalfasin) | No product found (thymalfasin, Zadaxin, thymosin) | `ca-dpd-search-canada-legal-2026-10-23` |
| Tirzepatide | **Authorised**: Mounjaro (2023), Mounjaro KwikPen (2024), Zepbound (2025). On the PDL since 2023 | `ca-dpd-search-canada-legal-2026-10-23`, `ca-pdl-human`, `ca-hc-2026-01-glp1-advisory` |

Gaps: NOC database searches were not run for AOD-9604, epitalon, MOTS-c, selank, semax, SS-31, thymosin alpha-1,
retatrutide or the NAD+ precursors (section 17).

---

## 6. Bringing products into Canada; what the border does

| Fact | Source id |
|---|---|
| Personal use: for yourself or a person or animal in your care or travelling with you; "no more than a 90-day supply or a single course of treatment, whichever is less" | `ca-hc-gui-0116-personal-import` |
| Giving, selling, advertising or exporting makes you a commercial importer, "regardless of whether there is an exchange of money"; repeat shipments over 90 days' supply in 90 days may too | `ca-hc-gui-0116-personal-import`, `ca-cbsa-d19-9-1` (para. 26) |
| "Generally, residents of Canada are not allowed to bring prescription drugs into Canada … whether you carry them across the border or have them delivered by mail or courier" | `ca-hc-gui-0116-personal-import` |
| Who may import a prescription drug: practitioner, manufacturer, wholesale druggist, pharmacist, foreign visitor (C.01.045) | `ca-fdr-c01-045-rx-import` |
| CBSA: "Canadian residents may not import prescription drugs by mail or courier" (para. 45); Health Canada "may exercise enforcement discretion" for a returning resident carrying a single course or 90-day supply dispensed before leaving or obtained for care abroad (para. 42); visitors may hand-carry or receive by mail a 90-day supply (paras. 46–47) | `ca-cbsa-d19-9-1` |
| Non-prescription drugs and natural health products: up to a 90-day supply every 90 days, in pharmacy or retail packaging, "subject to inspector discretion" (para. 50) | `ca-cbsa-d19-9-1` |
| The CBSA "may detain goods … and refer them to Health Canada for an admissibility recommendation and disposition decision" (para. 2); Health Canada inspectors may examine, test, seize and sample (para. 7) | `ca-cbsa-d19-9-1`, `ca-customs-act-s101` |
| Non-compliant products "will be refused entry or seized"; samples may be tested; written notice to you and the CBSA; storage, transport or disposal costs may be recovered; Health Canada "is not responsible for any consequences including financial loss" | `ca-hc-gui-0116-personal-import`, `ca-fda-s30-7-cost-recovery` |
| Removal, forfeiture, destruction of unlawful imports | `ca-fda-s27-1-unlawful-imports`, `ca-fda-s27-2-removal-destruction` |
| Health Canada "is working with the Canada Border Services Agency to stop unauthorized shipments from entering the country" (peptides) | `ca-hc-2026-04-think-twice-peptides` |
| "Individuals are responsible for knowing if the products being imported contain a prescription drug or a controlled substance" | `ca-hc-gui-0116-personal-import` |
| None of the site's peptides is in the CDSA schedules; anabolic steroids are (Schedule IV); the CDSA possession offence covers Schedules I–III only | `ca-cdsa` |

What the guidance does **not** say: how an unauthorised drug that is not on the PDL (e.g. BPC-157) is treated when a
resident imports it for personal use, and nothing about "research use" labels. We found no published figures on how
many peptide parcels the CBSA or Health Canada stop (section 17).

---

## 7. Special Access Program (anchor `#canada-special-access`)

| Fact | Source id |
|---|---|
| Legal basis: C.08.010 (letter of authorisation to the manufacturer to sell a specified quantity to a practitioner "for use in the emergency treatment" of a patient) and C.08.011 (sale permitted despite C.08.002; exempt from the rest of the Act and Regulations) | `ca-fdr-c08-010-special-access` |
| The practitioner gives the drug name, details of the emergency, quantity, and the use, safety and efficacy information they have; agrees to report results and adverse reactions; the drug ships to a practitioner or pharmacist | `ca-fdr-c08-010-special-access` |
| "Medical emergency" = "a serious or life-threatening condition where conventional treatments: have failed, are unsuitable or are unavailable in Canada" | `ca-hc-sap-drugs` |
| Practitioner duties: inform patients of risks and benefits; report results and adverse reactions; keep records; the decision must be "supported by credible evidence" | `ca-hc-sap-drugs` |
| Supplied directly by the manufacturer, which sets the cost; requests are cancelled when the manufacturer cannot provide access | `ca-hc-sap-drugs` |
| About 1,000 requests a month; expedited review possible for drugs authorised by the EMA or FDA for the same emergency (cite as process detail only) | `ca-hc-sap-drugs` |
| The same route applies to natural health products (NHPR s. 103.1) | `ca-nhpr-s103-1-emergency-access` |
| CBSA: human drugs not available in Canada may be imported through SAP or the clinical trial provisions (para. 29) | `ca-cbsa-d19-9-1` |

Writer's note: if the EMA is mentioned on an English page, it is SAP process detail, not the reader's legal frame; put
the `residue-ok` marker before that sentence (content brief, "What may stay").

---

## 8. Compounding; the provinces

| Fact | Source id |
|---|---|
| Compounding "is regulated by the respective regulatory authorities in each province/territory"; manufacturing is federal | `ca-hc-pol-0051-compounding` |
| Compounding "must not be used as a means to bypass the federal drug review and approval system"; needs a patient–professional relationship and "a therapeutic need or lack of product availability"; no copies of approved products except in a shortage; no resale to third parties | `ca-hc-pol-0051-compounding` |
| The product "should be produced from" an authorised drug or an API used in one, or one listed in a recognised pharmacopoeia (USP, PhEur, PhF, PhI, BP, CF, NF, Codex) | `ca-hc-pol-0051-compounding` |
| Sterile compounding only in hospitals or practice settings with the right standards; signs of manufacturing include advertising to the public and output not tied to prescriptions | `ca-hc-pol-0051-compounding` |
| Pharmacists and practitioners may import or compound, on prescription, a drug "not commercially available in Canada" without an establishment licence (C.01A.002(1)(b)) | `ca-fdr-c01a-002-compounding-import` |
| Alberta College of Pharmacy (18 February 2025): imported APIs only if "not commercially available"; Health Canada's reading of that phrase; APIs "must be sourced from reliable and recognized sources" | `ca-acp-2025-imported-api` |
| Health Canada (2 June 2025): compounding injectable GLP-1s without a shortage "is not permitted"; sterile compounding "a high-risk activity"; outside case-by-case scenarios it "considers this activity to be manufacturing" and takes enforcement action | `ca-hc-2025-glp1-compounding-position` |
| Recall RA-76830 (21 January 2025, Type I): compounded semaglutide + pyridoxine made with an unauthorised API | `ca-hc-2025-01-semaglutide-pyridoxine-recall` |
| Recall RA-82047 (7 May 2026, Type I): GHK-Cu and BPC-157 powder sold to compounding and community pharmacies as unauthorised APIs | `ca-hc-2026-05-ghk-cu-bpc-157-api-recall` |
| Generic semaglutide medicines with their own DINs were on the market by August 2026 (so the June 2025 "no synthetic semaglutide authorised" line is out of date) | `ca-hc-2026-08-generic-semaglutide-recall` |
| NAPRA model standards for sterile and non-sterile compounding; implemented by each provincial or territorial pharmacy regulator | `ca-napra-sterile-compounding` |
| The 13 pharmacy regulators (10 colleges or orders; 3 territorial government offices), with links | `ca-napra-regulatory-authorities` |
| College of Physicians & Surgeons of Alberta (9 April 2026): injectable peptides "are regulated as prescription medications in Canada"; advice to doctors on asking, monitoring, counselling, disposal and reporting | `ca-cpsa-2026-04-injectable-peptides` |

Not found: a statement by any provincial regulator other than Alberta's on BPC-157 or other experimental peptides
(only the Ontario College of Pharmacists site search was tried; it showed nothing). UNRESOLVED.

---

## 9. Clinical trials (anchor `#trials`)

| Fact | Source id |
|---|---|
| Act s. 3.1: no clinical trial of a drug without an authorisation (in force) | `ca-fdr-c05-clinical-trials` |
| C.05.006(1): a sponsor may sell or import a trial drug 30 days after applying unless the Minister objects (e.g. the drug "endangers the health of a clinical trial subject"), with research ethics board approval for each site | `ca-fdr-c05-clinical-trials` |
| ClinicalTrials.gov, trials with a Canadian site: retatrutide 10 (Lilly); elamipretide 2 (one recruiting, Barth syndrome); tesamorelin 3 (2005–2008); bremelanotide 3 (2011–2017); GHK 1 (skin patch study, not injected GHK-Cu); NR 3 and NMN 2 (supplement studies); 0 for BPC-157, TB-500, CJC-1295, ipamorelin, epitalon, MOTS-c, Semax, Selank, KPV, melanotan, thymalfasin, AOD-9604, hexarelin | `ca-ctgov-canada-peptide-search-2026-10-23` |

---

## 10. Natural health products and cosmetics (NAD+ precursors, GHK-Cu)

| Fact | Source id |
|---|---|
| A natural health product (NHP) is a Schedule 1 substance (plants, extracts, listed vitamins including niacin, "An amino acid", essential fatty acids, "A synthetic duplicate" of these, minerals, probiotics), homeopathic or traditional medicine, used to treat or prevent disease or modify organic functions; not a Schedule 2 substance | `ca-nhpr-definition`, `ca-nhpr-schedule-1` |
| A substance that must be sold on prescription under the Food and Drug Regulations is not an NHP (s. 2(2)) | `ca-nhpr-definition` |
| "No person shall sell a natural health product unless a product licence is issued" (s. 4(1)) | `ca-nhpr-definition` |
| Schedule 2, item 5: "A substance that is administered by puncturing the dermis" is excluded: **nothing injected can be an NHP** | `ca-nhpr-schedule-2` |
| NMN monograph (28 August 2024): oral, adults 18 and over; permitted uses include antioxidant claims and "NMN is a NAD+ precursor which is an important cofactor in energy metabolism"; cautions for pregnancy, breastfeeding, diabetes | `ca-nhpid-nmn-monograph` |
| One oral nicotinamide riboside product holds an active NHP licence (2025), with a licensed purpose that includes "increases blood NAD+ levels" (do not name it) | `ca-lnhpd-nr-licence` |
| Cosmetic: for "cleansing, improving or altering the complexion, skin, hair or teeth" (s. 2); no sale of a cosmetic that may injure the user (s. 16); cosmetics are notified within 10 days *after* first sale, not assessed before (Cosmetic Regulations s. 30) | `ca-fda-s2-definitions`, `ca-fda-s16-cosmetics`, `ca-cosmetic-regulations-s30` |
| Products with therapeutic claims, or claims "comparable to the effects of cosmetic surgical procedures or drugs", are drugs; products given "by injection … are not considered to be cosmetics" | `ca-hc-cosmetic-drug-interface-guidance` |
| GHK-Cu / copper tripeptide-1 is not on the Cosmetic Ingredient Hotlist (neither prohibited nor restricted) | `ca-hc-cosmetic-ingredient-hotlist` |

Draft sentence for the GHK-Cu and NAD+ pages: "In Canada, a GHK-Cu skin cream sold for the look of the skin is a
cosmetic. Anything injected, and anything sold with medical claims, is treated as a drug." / "In Canada, oral NMN and
nicotinamide riboside can be sold as licensed natural health products. Injected NAD+ cannot: nothing injected
qualifies, and Health Canada lists injectable NAD+ among unauthorised products it has seized."

---

## 11. "Research use only", Health Canada enforcement 2023–2026, and the site's own position

### 11.1 Timeline (sellers, clinics and shops not named; full details in `ca-hc-recalls-database`)

| Date | What | Source id |
|---|---|---|
| 13 Dec 2023 | RA-74731: injectable products "promoted as peptides" sold online by a Québec seller; "Most synthetic injectable peptides are regulated as prescription drugs in Canada"; Health Canada "has ordered" it to stop advertising and selling | `ca-hc-recalls-database` |
| 26 Jun 2024 (updated 19 Jul 2024) | RA-75741: injectable peptides and bodybuilding drugs seized from a Québec company; websites taken down at Health Canada's request; update added "nootropic" drops | `ca-hc-recalls-database` |
| 21 Jan 2025 | RA-76830: Type I recall of compounded semaglutide + pyridoxine (unauthorised API) | `ca-hc-2025-01-semaglutide-pyridoxine-recall` |
| 1 Apr 2025 | RA-77218: 26 injectable peptide products seized from a wellness clinic in Calgary | `ca-hc-recalls-database` |
| 14 Apr 2025 | RA-77275: injectable peptides seized from an online seller in Sherbrooke, Québec; "injectable peptides are regulated as prescription drugs in Canada" | `ca-hc-recalls-database` |
| 2 Jun 2025 | Health Canada's position on compounded GLP-1s sent to provinces | `ca-hc-2025-glp1-compounding-position` |
| 1 Aug 2025 | RA-77807: 42 injectable peptide products seized from and sold by an online seller | `ca-hc-recalls-database` |
| 24 Dec 2025 | RA-81403 (fitness business, Vancouver, and its website) and RA-81404 (two supplement shops, Maple Ridge, BC; some vials with falsified DINs) | `ca-hc-recalls-database` |
| 21 Jan 2026 | RA-81518: public advisory on unauthorised and counterfeit GLP-1 products; fake Health Canada logos and endorsements | `ca-hc-2026-01-glp1-advisory` |
| 25 Mar 2026 | RA-81792: counterfeit Mounjaro vials and pens seized at a Mississauga business | `ca-hc-recalls-database` |
| 9 Apr 2026 | RA-81874: "Think twice before injecting peptides bought online"; lists BPC-157, CJC-1295, DSIP, epitalon, GHK-Cu, HCG, ipamorelin, KPV, melanotan I and II, MOTS-C, NAD+, SS-31, TB-500, retatrutide | `ca-hc-2026-04-think-twice-peptides` |
| 9 Apr 2026 | Alberta's physician regulator warns doctors about unauthorised injectable peptides | `ca-cpsa-2026-04-injectable-peptides` |
| 27 Apr 2026 | Sport Integrity Canada reminder: BPC-157 and non-approved peptides banned | `ca-sic-2026-04-peptides-reminder` |
| 7 May 2026 | RA-82047: Type I recall of GHK-Cu and BPC-157 powder from pharmacies | `ca-hc-2026-05-ghk-cu-bpc-157-api-recall` |
| 11 Jun 2026 (announced 29 Jul 2026) | Superior Court of Québec grants Health Canada a permanent injunction against an online peptide seller (no manufacturing, testing, distributing, selling or advertising unauthorised injectable peptides, including on any site accessible from a Canadian IP address); earlier a Ministerial Order | `ca-hc-2026-07-injunction-statement` |

No peptide-specific advisory was found for 2020–2022 (searches listed in `ca-hc-recalls-database`). No criminal
prosecution of a peptide seller under the Food and Drugs Act was found (we did not search court databases;
UNRESOLVED).

### 11.2 What the advisories tell people who already have a product

Talk to a health professional if you have used one and feel unwell; take unused products to a pharmacy or follow
municipal hazardous-waste rules; check for a DIN (or NPN) in the Drug Product Database or the Licensed Natural Health
Products Database; report side effects to Health Canada (`ca-hc-2026-04-think-twice-peptides`,
`ca-hc-recalls-database`). Health Canada also names the risks: wrong amount or no active ingredient, unlisted
ingredients, contaminants (solvents, heavy metals, particles, bacteria, fungi, endotoxins), poor labelling, and, for
injectables, infection and allergic reactions (`ca-hc-2026-04-think-twice-peptides`, `ca-hc-2026-01-glp1-advisory`).

### 11.3 Flags for the editor (the site's own position in Canada)

1. **Health Canada's advertising guidance applies to an education site.** "A message involving unauthorized health
   products or unauthorized indications, in a context such as educational activities, may be considered promotional
   if" it does not caution that safety and effectiveness are still under investigation and that Health Canada has not
   granted market authorisation, or if "there's a suggestion the health product is available through the Special
   Access Program (SAP)" (`ca-hc-advertising-distinction-2023`). Recommendation: every Canada-facing page that discusses
   an experimental peptide should say plainly that Health Canada has not authorised it and that its safety and
   effectiveness have not been established; the SAP text should not suggest any named experimental peptide can be had
   through SAP. Independence of the provider and balance of content count in the site's favour (same source). This is
   for the legal reviewer to confirm.
2. **Seller rule.** The injunction statement's title and URL name the seller (`ca-hc-2026-07-injunction-statement`,
   flagged DO NOT CITE DIRECTLY). Options: (a) cite it with our paraphrased title, accepting a URL that contains the
   name; (b) describe the injunction citing only the shared index, after adding a line to its note; (c) leave it out.
   RA-76830 and RA-82047 name the business only in their "Companies" or "Product" fields (flagged EDITOR).
3. **Commerce token.** RA-81518's own URL and title contain "buying"; the entry uses the node URL
   (`recalls-rappels.canada.ca/en/node/81518`, which redirects) and a paraphrased title. `check-no-commerce.ts` tests the
   URL string only, so this passes; if the editor dislikes relying on a redirect, cite RA-81874 instead.
4. **Health Canada's numbers on pages.** Advisories print media and enquiry phone numbers; never copy them.

---

## 12. Reporting side effects and complaints

| Fact | Source id |
|---|---|
| "Anyone can report a side effect to a health or cannabis product … even if you are not sure if a particular health or cannabis product was the cause"; separate routes for drugs, devices, vaccines, natural health products, cannabis, veterinary drugs; a signal "is not proof" | `ca-hc-medeffect-reporting` |
| Consumers: "Everyone who witnesses or experiences a side effect … is strongly encouraged to report it"; online, by mail to a Canada Vigilance Regional Office, or with a doctor, nurse or pharmacist | `ca-hc-medeffect-reporting` |
| Canada Vigilance Program: Health Canada's post-market surveillance programme; reports since 1965; seven regional offices; searchable online database | `ca-hc-canada-vigilance` |
| Hospitals must report serious adverse drug reactions within 30 days (Act s. 21.8; C.01.020.1); manufacturers within 15 days (C.01.017). An unauthorised seller is outside this system in practice | `ca-fda-s21-8-hospital-reporting`, `ca-fdr-c01-020-1-hospital-reporting`, `ca-fdr-c01-017-manufacturer-adr` |
| Complaints (counterfeits, "unauthorized sale of health products", "false, misleading or deceptive advertising"): online form; give the product name, where it was advertised or bought, lot numbers, photos | `ca-hc-complaints` |

Official URLs (for the JurisdictionCard): reporting page
`https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting.html`;
the voluntary online form `https://hpr-rps.hres.ca/side-effects-reporting-form.php?form=voluntary&lang=en` (HTTP 200,
not registered as a source; linked from the consumer page).

---

## 13. Anti-doping

| Fact | Source id |
|---|---|
| The Canadian Centre for Ethics in Sport (CCES) became **Sport Integrity Canada** (announced November 2025); cces.ca redirects to sportintegrity.ca | `ca-sic-our-brand`, `ca-sic-2026-04-peptides-reminder` |
| Sport Integrity Canada "implements and administers the Canadian Anti-Doping Program (CADP)"; adopted by more than 70 national and multi-sport organisations; athletes accept the rules "as a condition of participation"; compliant with the World Anti-Doping Code | `ca-sic-cadp` |
| 2027 CADP in force 1 January 2027; national sport organisations must adopt it by 31 December 2026 as a condition of Sport Canada funding; changes include whereabouts deadlines and the end of the Medical Review process for student-athletes | `ca-sic-2027-cadp` |
| "BPC-157 and other peptides are classified as S0: Non-approved substances … the use, administration, trafficking or possession of these substances could result in an anti-doping rule violation"; Sport Integrity Canada "does not comment on the use of peptides for the general population"; Global DRO and substance inquiries | `ca-sic-2026-04-peptides-reminder`, `wada-2026-list-en` |
| April 2025: a U SPORTS volleyball athlete received a four-year sanction for use of BPC-157 and TB-500 (based on information, confirmed by deemed waiver; ends 3 December 2028; no participation "in any capacity", "including training with teammates"); every violation is made public. Name neither the athlete nor the university | `ca-sic-2025-04-bpc157-tb500-sanction` |
| WADA list updated yearly, in force 1 January; criteria (two of three) | `ca-sic-prohibited-list`, `wada-2027-list-en` |

---

## 14. Help services (names and URLs only), and a proposed `jurisdictions.yaml` entry

### 14.1 Health advice lines (nurse lines) by province and territory

| Province / territory | Service name | Official URL | Source id | Read? |
|---|---|---|---|---|
| British Columbia | HealthLink BC | https://www.healthlinkbc.ca/ | `ca-help-healthlink-bc` | yes |
| Alberta | Health Link (Alberta Health Services) | https://www.albertahealthservices.ca/info/page12630.aspx | `ca-help-alberta-health-link` | **no** (host refused) |
| Saskatchewan | HealthLine | https://www.saskatchewan.ca/residents/health/accessing-health-care-services/healthline | `ca-help-saskatchewan-healthline` | yes |
| Manitoba | Health Links – Info Santé | https://sharedhealthmb.ca/contact/important-numbers/ | `ca-help-manitoba-health-links` | yes |
| Ontario | Health811 | https://health811.ontario.ca/ | `ca-help-health811-ontario` | via ontario.ca |
| Québec | Info-Santé 811 | https://www.quebec.ca/en/health/finding-a-resource/info-sante-811 | `ca-help-quebec-info-sante` | yes |
| New Brunswick | Tele-Care 811 | https://www.gnb.ca/en/topic/health-wellness/access-health-care/tele-care-811.html | `ca-help-nb-tele-care` | **no** (403) |
| Nova Scotia | 811 Service | https://novascotia.ca/dhw/primaryhealthcare/811.asp | `ca-help-ns-811` | yes |
| Prince Edward Island | 811 (Health PEI) | https://www.princeedwardisland.ca/en/information/health-pei/811 | `ca-help-pei-811` | **no** (bot check) |
| Newfoundland and Labrador | HealthLine 811 | https://nlhealthservices.ca/find-health-care/primary-care-options/care-options/ | `ca-help-nl-healthline` | yes |
| Yukon | 811 (24-hour health advice) | https://yukon.ca/en/health-and-wellness/care-services/access-24-hour-health-advice-811 | `ca-help-yukon-811` | **no** (403) |
| Northwest Territories | 811 | https://www.hss.gov.nt.ca/en/services/811 | `ca-help-nwt-811` | yes |
| Nunavut | — | — | — | UNRESOLVED (gov.nu.ca 403) |

Names such as "Health811" and "Info-Santé 811" contain a number; the content brief allows naming them.

### 14.2 Poison centres (five regional centres; `ca-infopoison-centres`)

| Serves | Centre | Official URL | Source id |
|---|---|---|---|
| British Columbia, Yukon | BC Drug and Poison Information Centre (DPIC) | https://www.dpic.org/ | `ca-poison-dpic` |
| Alberta, Northwest Territories, Saskatchewan | Poison and Drug Information Service (PADIS) | https://www.padis.ca/ | `ca-poison-padis` (page not read) |
| Ontario, Manitoba (as "Manitoba Poison Centre"); Nunavut health professionals | Ontario Poison Centre | https://www.ontariopoisoncentre.ca/ | `ca-poison-ontario` |
| Québec | Centre antipoison du Québec | https://www.ciusss-capitalenationale.gouv.qc.ca/antipoison/ | `ca-poison-quebec` |
| Newfoundland and Labrador, Nova Scotia, Prince Edward Island (and New Brunswick per the contact list) | Atlantic Canada Poison Centre | https://atlanticcanadapoisoncentre.ca/ | `ca-poison-atlantic` |
| All of Canada (directory) | Canadian Association for Poison Centres and Clinical Toxicology: "Centres" | https://infopoison.ca/centres/ | `ca-infopoison-centres` |

In Nunavut the association tells the public to call the local health centre.

### 14.3 Proposed entry for `src/data/jurisdictions.yaml` (for the editor; not written there)

```yaml
- code: CA
  emergency: []   # not recorded: this assignment records no telephone numbers; the editor fills it from an official source
  regulator: { name: "Health Canada", url: "https://www.canada.ca/en/health-canada.html" }
  reporting: { name: "Health Canada (Canada Vigilance Program): report a side effect", url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/adverse-reaction-reporting.html" }
  anti_doping: { name: "Sport Integrity Canada", url: "https://sportintegrity.ca/" }
  medicines_law: { name: "Food and Drugs Act (R.S.C., 1985, c. F-27)", url: "https://laws-lois.justice.gc.ca/eng/acts/f-27/" }
  help:
    - { kind: poisons, name: "Poison centres in Canada (by province and territory)", url: "https://infopoison.ca/centres/" }
    - { kind: urgent-advice, name: "Health811 (Ontario)", url: "https://health811.ontario.ca/" }
    - { kind: urgent-advice, name: "HealthLink BC", url: "https://www.healthlinkbc.ca/" }
    - { kind: urgent-advice, name: "Info-Santé 811 (Québec)", url: "https://www.quebec.ca/en/health/finding-a-resource/info-sante-811" }
    # … other provinces from 14.1, after the unread ones are checked in a browser
```

The Health Canada home page and sportintegrity.ca were fetched (WebFetch / HTTP 200) but are not registered as sources.
Whether `emergency: []` passes the schema was not checked; the editor may prefer to fill it.

---

## 15. Hosts for `config/link-allowlist.json` (none is on it today)

laws-lois.justice.gc.ca · www.canada.ca · recalls-rappels.canada.ca · hpr-rps.hres.ca · health-products.canada.ca ·
webprod.hc-sc.gc.ca · www.cbsa-asfc.gc.ca · sportintegrity.ca · www.napra.ca · abpharmacy.ca · cpsa.ca · ocpinfo.com
(hosts the Health Canada GLP-1 position PDF) · infopoison.ca · www.dpic.org · www.padis.ca ·
www.ontariopoisoncentre.ca · www.ciusss-capitalenationale.gouv.qc.ca · atlanticcanadapoisoncentre.ca ·
www.healthlinkbc.ca · www.albertahealthservices.ca · www.saskatchewan.ca · sharedhealthmb.ca · health811.ontario.ca ·
www.quebec.ca · www.gnb.ca · novascotia.ca · www.princeedwardisland.ca · nlhealthservices.ca · yukon.ca ·
www.hss.gov.nt.ca · clinicaltrials.gov (already used elsewhere; check)

Note: `check-no-commerce.ts` scans every URL in `src/data` files, notes included, so each host above must be added
before `canada.yaml` is merged into `src/data/sources/`.

---

## 16. Verification log and corrections (second run, 23 October 2026)

Re-read and confirmed (quotations checked against the text): Food and Drugs Act full text (ss. 2, 3, 3.1, 8, 9, 16,
21.3, 21.5, 21.8, 23, 27.1–27.3, 29.1, 30.7, 31–31.7, Schedules A and A.1, amendments not in force); Food and Drug
Regulations full text (A.01.010, A.01.040, A.01.066–A.01.068, C.01.014, C.01.017, C.01.020.1, C.01.041, C.01.043–
C.01.045, C.01A.002, C.01A.004, C.05.002, C.05.006, C.08.001, C.08.002, C.08.004, C.08.010, C.08.011); Natural Health
Products Regulations full text (ss. 1–4, 103.1, 103.2, Schedules 1 and 2); Cosmetic Regulations s. 30; CDSA full text
(all searches re-run); Customs Act s. 101; CBSA D19-9-1; Prescription Drug List (all searches re-run); GUI-0116 (both
pages); PDL overview; SAP page; POL-0051; advertising guidance (2023); cosmetic–drug interface guidance; GUI-0039;
MedEffect pages; Canada Vigilance page; complaints page; RA-74731, RA-75741, RA-76830, RA-77218, RA-77275, RA-77807,
RA-81403, RA-81404, RA-81518, RA-81792, RA-81874, RA-82047 and RA-82484; the injunction statement; the Health Canada
GLP-1 position PDF; the NMN monograph PDF; NAPRA (two pages); Alberta College of Pharmacy; CPSA; Sport Integrity
Canada (six pages); infopoison.ca (two pages); all poison-centre and help-line pages marked "yes" in section 14;
ClinicalTrials.gov searches (re-run, plus new terms). Every legislation URL in the file returned HTTP 200.

Not re-read (database maintenance or blocking): DPD, LNHPD, NOC, Clinical Trials Database; the Cosmetic Ingredient
Hotlist (canada.ca list page; status-c read it the same day with the same result); albertahealthservices.ca, gnb.ca,
princeedwardisland.ca, yukon.ca, gov.nu.ca.

**Corrections made to the first run's draft** (also returned in the summary):
1. GUI-0116 quotation was not verbatim; replaced with the page's wording ("Generally, residents of Canada are not
   allowed to bring prescription drugs into Canada … whether you carry them across the border or have them delivered
   by mail or courier"), and added that the rule covers carrying as well as mail.
2. Canada Vigilance page: year 2026 → 2022 (page details 2022-06-15).
3. Poison centres: the "overdose is really a poisoning" sentence is on infopoison.ca's home page, not the centres page;
   an unregistered "Health Canada release, March 2023" was removed from two notes (association and Québec centre).
4. ClinicalTrials.gov: bremelanotide trials ran 2011–2017 (the draft's "2011–2015" were start years only).
5. RA-81403: the business is a fitness business ("gym" was not Health Canada's word); RA-81404: added falsified DINs
   and SARMs; RA-82484 (August 2026) identified by number as not peptide-related.
6. RA-81518 (GLP-1 advisory): the draft said it could not be linked; replaced the URL with the neutral node URL that
   redirects to it and paraphrased the title, which also contained the token.
7. Five titles contained commerce tokens ("order", "for sale") that would fail `check-no-commerce` as link text;
   reworded. Two ids containing "orders" renamed: `ca-fda-s21-3-recall-orders` → `ca-fda-s21-3-recalls`,
   `ca-fda-s27-3-measures-orders` → `ca-fda-s27-3-measures`.
8. Duplicate ids or URLs across refocus files resolved by adopting the shared ids: `ca-cdsa-search-canada-legal-2026-
   10-23` → `ca-cdsa`; `ca-pdl-search-canada-legal-2026-10-23` → `ca-pdl-human`; `ca-hc-recalls-peptide-search-2026-
   10-23` → `ca-hc-recalls-database`; `ca-hc-cosmetic-drug-interface` → `ca-hc-cosmetic-drug-interface-guidance`;
   `ca-hc-cosmetic-hotlist` → `ca-hc-cosmetic-ingredient-hotlist`; `ca-hc-2026-05-ghk-bpc157-api-recall` →
   `ca-hc-2026-05-ghk-cu-bpc-157-api-recall`; `ca-food-and-drugs-act` URL aligned with status-c (`/eng/acts/f-27/`).
9. DPD record: two semaglutide brand names that could not be re-verified were removed; the record is marked not
   re-verified; generic semaglutide is now independently sourced (new entry `ca-hc-2026-08-generic-semaglutide-recall`).
10. NMN monograph: added that the NHPID listing page does not show it, and that the "no NR monograph" finding rested
    on guessed URLs (weak).
11. Schedule A.1: added that it was Schedule A until 2019 (renumbered by 2019, c. 29, s. 177).
12. RA-76830: flagged that its Summary "Product" line and "Companies" field name the compounding pharmacy.
13. POL-0051: sterile compounding wording corrected ("only permitted in hospitals or other practice settings" with the
    standards in place); Appendix I described as eight questions.
14. NWT 811 page now read directly (draft relied on a search summary); Nunavut gap recorded.

---

## 17. UNRESOLVED (for the editor and the legal reviewer)

1. **Legal basis for "injectable peptides are prescription drugs".** Health Canada says it repeatedly; the PDL names
   none of the experimental peptides and has no general entry for peptides or injectables. We could not find the
   provision that makes an unlisted peptide a prescription drug. The page can safely rely on the new-drug and DIN
   rules (selling is illegal either way) and quote Health Canada's position as its position.
2. **Personal possession and import of an unlisted peptide.** No CDSA possession offence applies; C.01.045 (prescription
   drug import) applies on its face only to PDL drugs; GUI-0116 is silent on unauthorised non-prescription drugs.
   Whether a resident who imports BPC-157 for personal use commits an offence is for the legal reviewer. What is
   certain: the border can detain, refuse, seize, and order removal or destruction.
3. **Injunction's legal basis and the judgment.** Not stated whether s. 21.5 was used; the Superior Court of Québec
   judgment of 11 June 2026 was not found or read.
4. **Prosecutions.** No criminal prosecution of a peptide seller found; court databases not searched.
5. **Databases (second run):** DPD, LNHPD, NOC and Clinical Trials Database were under maintenance. Not completed:
   DPD searches for the codes and brands TP-7, Selanc, MEHFPGP, MTP-131, Bendavia, SS-31, PT-141, MTII, Melanotan-2,
   Epithalone, LY3298176, NN9535, Thymosin alpha; NOC searches for AOD-9604, epitalon, MOTS-c, selank, semax,
   elamipretide, thymalfasin, retatrutide, NR, NMN; Health Canada Clinical Trials Database for the compounds not
   covered by status-b and status-c. The first run's DPD results stand unconfirmed by the second run.
6. **NHP monographs:** whether the NMN monograph is in the public listing (the listing page does not show it), and
   whether an NR or NAD monograph exists.
7. **Help services not read:** Alberta Health Link and PADIS (albertahealthservices.ca refused connections), New
   Brunswick Tele-Care 811 (403), PEI 811 (bot check), Yukon 811 (403), Nunavut (no service found; gov.nu.ca 403);
   Manitoba 811 routing; whether the Atlantic Canada Poison Centre serves the public in New Brunswick. Open each in a
   browser before publishing.
8. **Provincial regulators:** only Alberta's pharmacy and physician regulators were found to have published on
   peptides or imported APIs; the other colleges were not searched systematically.
9. **Seizure statistics:** no Health Canada or CBSA figures on peptide parcels stopped at the border were found.
10. **Generic semaglutide:** whether the 2026 generics contain chemically synthesised semaglutide (product monographs
    not read).
11. **Health Canada's 2017–2020 "Unauthorized products may pose serious health risks" lists** were not opened; they
    may name melanotan or other peptides earlier than 2023.
