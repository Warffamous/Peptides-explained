# Notes: group legal-routes (Dutch site, 27 October 2026)

Pages written:

- `src/content/pages/nl/legal-routes.mdx` (from `src/content/pages/en/legal-routes.mdx`)
- `src/content/pages/nl/legal/research-use-only.mdx` (from `src/content/pages/en/legal/research-use-only.mdx`)

Other files: `src/i18n/nl/glossary/nl-legal-routes.json` (2 entries). No new source file: every claim rests on ids that
already exist (the 23 October Dutch/EU ids and the merged `nl-research-*` ids), so `src/data/sources/nl-legal-routes.yaml`
was not created. No host was added to `config/link-allowlist.json`.

Validator: `npx tsx scripts/validate-content.ts --only legal-routes` and `--only research-use-only`: 0 errors, 0 warnings
(the full run: 0 errors). Residue: `npx tsx scripts/check-locale-residue.ts --only legal-routes --details` and
`--only nl/legal/research-use-only --details`: 0 error, 0 frame, 0 warn hits (every FDA, "in de VS", 503A and "in
Australië" line carries `{/* residue-ok: PCAC framing | world context | evidence */}`; checked by scanning a copy with the
markers removed: 9 warn hits on the routes page, all of them marked lines).

Read for this work: the brief (including "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §4.1, §9, §11–13,
`research/nl/nl-care.md` and `nl-law.md` (both with their fact-checks), the relevant parts of `eu-status.md` and
`be-notes.md`, `research/nl-notes/merge.md`, `research/for-nl-site/MANIFEST.md`, `MANIFEST-legal-en-b.md`, and the two
snapshot pages. Re-read today with curl (spot checks of wording the pages quote): IGJ "Eigen bereidingen apotheek" ("kan
daarom niet zomaar worden gebruikt", "Apotheekbereiding is geen goede keuze", "geen onafhankelijke
registratieautoriteit"); Douane article of 6 August 2026 ("Onderzoeksdoeleinden spelen dan geen rol", "zonder vergunning
is illegaal"); CBG GLP-1 standpunt ("Het CBG raadt dit af", "je weet niet wat je koopt", off-label only with a
professional guideline); Directive 2001/83/EC, 1 January 2025 consolidation through CELLAR (art. 3(1) magistral formula,
art. 2(2) "in cases of doubt", art. 5(1) special needs, art. 46(f) GMP and GMP active substances, art. 51 batch release,
pharmacovigilance system, package leaflet). All matched.

---

## 1. legal-routes (method: adapted)

**Structure.** Exactly the brief's seven `##` headings, in the brief's order: Recept, Off-label, Artsenverklaring,
Magistrale bereiding, Klinisch onderzoek, Compassionate use, Zelf invoeren (anchors checked against the links other Dutch
files already make: all seven exist, none missing). The English page's TL;DR, opening `<Compare>`, a figure per route,
folds, two KeyNumbers and the closing checklist are kept. Because no eighth `##` heading is allowed, the English closing
section "What this means for you" became `### Wat je wel kunt doen` at the end of `## Zelf invoeren` (checklist, WGBO
information duty, the "routes are narrow on purpose" line and the reform link). A comment at the top of the body says not
to add `##` headings.

**English section → Dutch section.**

| English | Dutch |
|---|---|
| Opening Compare (US, UK, CA, AU) | Compare "goedgekeurd medicijn vs peptide dat nergens is goedgekeurd", seven Dutch routes (the 23 October layout, plus a row for zelf invoeren) |
| Prescription (four-country diagram; fold "Prescribing online, and NHS access") | Recept (four steps; EU-approved peptides with their Dutch SmPC indications; fold "Voorschrijven via internet, en de vergoeding") |
| Off-label (four-country diagram; fold "What your doctor should tell you") | Off-label (the IGJ step plan; fold "De extra zorg die de IGJ verwacht") |
| Canada: special access; Australia: SAS | Artsenverklaring (three steps; folds on the application and on why it does not fit BPC-157) |
| US compounding; UK specials; Compounding in Canada and Australia | Magistrale bereiding (five checks; fold "Wat kleine schaal betekent, en de vergoeding"; the PCAC fold, five points) |
| Trials | Klinisch onderzoek (two KeyNumbers; fold on searching, rights, insurance, retatrutide, elamipretide, thymosin alpha-1) |
| Early access in the US and the UK | Compassionate use (CBG criteria; fold "Wat een programma moet regelen") |
| Personal import | Zelf invoeren (four-row table; fold on the law, two judgments, fines, medicine vs active substance, passing on) |
| What this means for you | `### Wat je wel kunt doen` inside Zelf invoeren |

**What came back from the saved 23 October page** (`snapshot-2026-10-23/content/pages-en/legal-routes.mdx`), each point
re-checked against `research/nl/`: the six-route Compare (nl-care facts 1, 13–18, 20–28, 29–34, 35–39, 41–49), the four
prescription steps (facts 1, 7, 53), the off-label situations and the IGJ's extra care (facts 13–16), the artsenverklaring
steps, application contents and the BPC-157 fold (facts 20–28), the pharmacy-preparation checks (facts 29–32), the trial
KeyNumbers and fold (facts 41–49), the compassionate-use criteria (facts 35–39), the checklist and the "kept narrow"
line (`cjeu-2012-commission-v-poland`, its note: exceptions are interpreted strictly).

**Rewritten or new for the Netherlands (27 October research):**

- Internet prescribing: the saved absolute "no one may prescribe online to someone they never met" (nl-care §2 item 7,
  now misleading) → Gnw art. 67 plus the 2023 Beleidsregel (two conditions) and the IGJ's "strenge voorwaarden"
  (facts 9–11); the NHG on medicines obtained elsewhere (fact 12).
- Who prescribes: "meestal je huisarts of een specialist", plus other professions within limits (facts 3–4; conflict 7).
- GPs need not prescribe weight-loss medicines (NHG "facultatief", Thuisarts; fact 8).
- Insurance (replaces NHS access): GVS, eigen risico € 385 (2026) and € 400 (2027, fixed in law; fact 55 as corrected),
  Ozempic/Rybelsus/Mounjaro only for type 2 diabetes under conditions, Wegovy and Mounjaro not reimbursed for weight,
  liraglutide and naltrexone/bupropion under strict conditions, Zorginstituut assessment open (facts 54–60); "machtiging"
  (insurer) kept apart from "artsenverklaring" (conflict 5).
- A prescription from another EU/EEA state is a valid Dutch recept, but does not make an unauthorised medicine available
  (facts 2, 50).
- Off-label: IGJ position of February 2026 as adjusted in May 2026, incl. stap 0 and "Dutch standards only" (facts 14–16);
  NHG terughoudend (fact 17); new indications of authorised medicines are off-label, not CUP (fact 18); CBG on GLP-1
  medicines for slimming, written as off-label and advised against, never as a benefit (fact 19; brief, advertising test).
- Artsenverklaring: "ontheffing" instead of "toestemming" (fact 21), spoedprocedure, Dutch-language declaration, BIG
  check, IB/IMPD and GMP, non-medical reasons excluded, 1 year, lapse, no reimbursement implied, the trial-exclusion route
  (facts 22–28).
- Magistrale bereiding: the CJEU Abcur point ("prescription before preparation") is **left out**: its source
  `cjeu-2015-abcur` names companies in its title (nl-care fact-check correction 2). Step 1 now rests on Directive art.
  3(1) and the IGJ ("voor één bepaalde patiënt"). Added: KNMP "registered product first" (fact 32) and the kleine-schaal,
  collegial-supply and reimbursement rules (fact 33). The European Pharmacopoeia question is written as unknown (§5 item 5).
- Trials: searches of 27 October (ClinicalTrials.gov, CTIS, OMON) replace the 22 October ClinicalTrials.gov-only search;
  OMON holds all CTIS trials since May 2026 (fact 45); retatrutide statuses (TRIUMPH-Outcomes no longer recruiting;
  SYNERGY-Outcomes started in NL 22 September 2026, registers disagree on recruitment: written as such); elamipretide: a
  new Dutch authorisation (Barth syndrome, July 2026, not yet recruiting) plus three finished trials (the saved "all
  finished" is out of date); thymosin alpha-1: one registered Dutch study, start unknown (facts 46–48).
- Compassionate use: MEB 49 (indefinite approval), manufacturer only, NL only, 6 weeks, keep access until reimbursed
  (facts 37–38); CBG list of 10 July 2026: none of the site's compounds (fact 39); no Dutch medical-need programme (our
  reading, fact 40; Belgium differs: one line and a link to `/nl/legal/be/`); the EU reform's single-patient
  compassionate use, not yet law (eu-status fact 31).
- Zelf invoeren (new route, from nl-law facts 7, 38–43 and the fact-check): traveller exemption vs parcels; intra-EU
  parcels (law: forbidden; practice: unknown); active substances by post (Customs ch. 13, recipient a suspect); the two
  judgments of 2019 and 2020; no fine or prosecution of a private person for a small own-use import found; Customs'
  internal reporting conditions not public; passing a product on is supply; the government's line of 5 October 2026.
  Belgium's art. 12quater (own-use medicines from another member state) is one short line, because the answer differs.
- World context, once, marked: tesamorelin, bremelanotide and elamipretide are FDA-approved but not authorised in NL or
  the EU, so for them the artsenverklaring is the route (NL notes of these compounds; English cites reused).
- The FDA PCAC vote: all five canonical points (CONTENT-GUIDE §1, STYLE-NL §5.4), point 5 as the brief says ("Geen van de
  zes aanbevolen peptiden is een goedgekeurd medicijn in Nederland of de EU", from the NL and EU rows:
  `cbg-gib-search-status-2026-10-27`, `ema-medicines-json`; Semax registered in Russia). Placed as a fold in
  Magistrale bereiding, with one marked line above it saying the vote concerns US pharmacies and changes nothing here.

**Advertising test (brief, item 1).** Authorised medicines are named only with their Dutch SmPC indication (Ozempic and
Rybelsus: diabetes type 2; Wegovy: gewichtsbeheersing at the SmPC's BMI groups, beside a low-calorie diet and more
exercise; Mounjaro: both), with a link to the compound pages for effects and risks; no effect is named on this page. Off-
label use for weight is presented as off-label and advised against by the CBG. No praise, no success stories, no doses,
no sellers; no commerce word in any title, heading, Lead question, fold title, figure title, label or link text (checked
by the validator; STYLE-NL §7 words such as verkopen, kosten and prijs were also kept out by hand).

### Dropped citations (legal-routes)

All dropped ids supported US, UK, Canadian or Australian framing (their routes, rules, registers or regulators as the
reader's frame; brief "What leaves"). Each is replaced by the Dutch or EU answer named in the right-hand column.

| English section | Dropped ids | Why | Replaced by |
|---|---|---|---|
| Opening Compare | usc-21-355, fda-pcac-2026-bpc157-briefing, uk-hmr-2012-reg-46, uk-mhra-substance-index-status-c-2026-10-23, ca-hc-2026-04-think-twice-peptides, au-artg-search-status-c-2026-10-23, au-tga-how-we-regulate-peptides, fda-off-label-use, mhra-2009-dsu-off-label, ca-hc-2019-investigational-use-marketed-drugs, au-ahpra-prescribing-unapproved-guidance, ecfr-21-216-23, fda-503a-categories-2026-05, uk-hmr-2012-reg-167, mhra-gn14-specials, ca-hc-recalls-database, ca-hc-pol-0051-compounding, au-tg-regs-sch-5-item-6-compounding, au-tga-compounded-medicines-guidance, fda-expanded-access-patients, ctgov-expanded-access-search-2026-10-23, mhra-eams-scientific-opinions, mhra-eams-expired-opinions, ca-hc-sap-drugs, au-tga-sas-individual-patients, au-tga-peptides-health-practitioners, fda-personal-importation, uk-hmr-2012-reg-17, mhra-foi-22-431-personal-import-seizures, ca-hc-gui-0116-personal-import, au-poisons-standard-2026-10, au-tg-regulations-1990-sch-5-item-1, ctgov-us-uk-peptide-search-2026-10-23, ctgov-nct07803250, isrctn-peptide-search-2026-10-23, ca-ctgov-canada-peptide-search-2026-10-23, au-anzctr-search-status-c-2026-10-23, ctgov-search-status-c-2026-10-23 | four-country frame | Gnw arts. 40, 61, 68; IGJ off-label position; IGJ Q&A and Regeling art. 3.17; IGJ eigen bereidingen and KNMP; CCMO; the 27 October NL trial searches; CBG CUP criteria, Q&A and list; Customs pages and Rb Den Haag 2019 |
| Prescription diagram and text | fda-drugsatfda-ozempic, fda-drugsatfda-mounjaro, fda-drugsatfda-database, usc-21-353, mhra-glp1-what-you-need-to-know, uk-mhra-substance-index-status-a-2026-10-24, uk-hmr-2012-reg-214, ca-sbd-ozempic, ca-sbd-mounjaro, ca-noc-egrifta, ca-dpd-egrifta-din-02438712, ca-hc-pdl-overview, au-artg-ozempic-308324, au-artg-mounjaro-439430, au-tga-about-artg, au-tga-prescription-medicines-overview, gmc-2021-deciding-safe-to-prescribe, fda-unapproved-glp1-concerns, ca-hc-2026-01-glp1-advisory, au-tga-2026-03-counterfeit-glp1-products | four-country approvals and prescription rules | CBG Geneesmiddeleninformatiebank, IGJ Q&A, Wet BIG art. 36, KNMG, WGBO art. 7:453, Gnw art. 61, Regulation 726/2004, EPARs and Dutch SmPCs, CBG GLP-1 position, IGJ/CBG warning of 2025, NHG and Thuisarts (fda-drugsatfda-egrifta, -vyleesi and -forzinity are kept, as world context) |
| Fold "Prescribing online, and NHS access" | fda-telehealth-promoting-compounded-drugs, fda-2026-03-telehealth-warning-letters, gphc-2025-distance-pharmacy-guidance, ca-fdr-c01-041-rx-sale, nice-ta1026-tirzepatide, nice-ta875-semaglutide, smc-2497-semaglutide-wegovy, smc-2653-tirzepatide-mounjaro | US, UK, Canadian online prescribing and NHS funding | Gnw art. 67, Beleidsregel 2023, IGJ page, NHG; GVS, eigen risico 2026/2027, Regeling zorgverzekering bijlage 2, FK, Zorginstituut |
| Off-label diagram and fold | gmc-2021-prescribing-unlicensed (and the four-country ids above) | four-country rules | IGJ position, WGBO art. 7:448, NHG standpunt, CBG |
| US compounding (diagram, paragraph, fold "Copies of semaglutide and tirzepatide") | fda-503a-categories-2026-05, fda-category-2-safety-risks, fda-compounding-actions-index, fda-glp1-compounding-policy, fr-2026-08552-503b-glp1, fr-2026-12937-503b-comment-extension, ecfr-21-216-23 | US compounding as a route (503A/503B detail beyond the five PCAC points) | Dutch magistrale bereiding; the five PCAC points keep fda-pcac-2026-07-meeting, -questions, fr-2026-07361-pcac-notice, -briefing-intro, fda-pcac-2027-early-announcement, fda-503a-bulks-page, usc-21-353a, federalregister-fda-search-2026-10-23, fda-pcac-2026-semax-briefing, -presentations-day1 |
| PCAC point 5 | uk-mhra-substance-index-status-c-2026-10-23, mhra-products-search-status-d-2026-10-23, ca-dpd-search-canada-legal-2026-10-23, au-artg-search-status-c-2026-10-23, au-artg-search-status-d-2026-10-23 | point 5 is NL and EU on Dutch pages (brief) | cbg-gib-search-status-2026-10-27, ema-medicines-json |
| UK specials (diagram, fold) | mhra-specials-guidance, uk-ma-1968-s10, uk-hmr-2012-reg-4 | UK route | Dutch magistrale bereiding |
| Compounding in Canada and Australia | ca-hc-2025-glp1-compounding-position, au-tga-2024-06-glp1-compounding-update, au-tg-amendment-2026-measures-1, au-tga-media-releases-peptide-log-2026-10-24 | CA/AU routes | Dutch magistrale bereiding |
| Canada: special access | ca-fdr-c08-010-special-access | Canadian route | IGJ artsenverklaring pages |
| Australia: SAS (diagram, fold) | au-tg-regs-reg-12a-sas-category-a, au-tg-act-s19-access-approvals, au-tga-established-history-lists-2026-10-24, au-tg-regs-reg-12b-authorised-prescriber, au-tga-authorised-prescriber, au-tga-access-unapproved-goods-practitioners, au-ahpra-2026-09-peptide-prescribing | Australian route | IGJ artsenverklaring pages |
| Early access in the US and the UK (diagram, fold) | fda-expanded-access, usc-21-360bbb, usc-21-360bbb-0a, fda-right-to-try, uk-hmr-2012-reg-167c, mhra-eams-overview, ctgov-nct07629401, ecfr-21-312-subpart-i, ecfr-21-312-81, ctgov-nct04689360 | US and UK early-access routes (incl. the US expanded-access record for retatrutide, which could read as a pointer) | CBG CUP criteria, Q&A, MEB 49, list; Regeling art. 3.18; Council position (EU reform) |
| Personal import (diagram, text, fold) | fda-rpm-ch9-personal-importations, ca-cbsa-d19-9-1, ca-fda-s27-2-removal-destruction, au-tga-personal-importation-scheme, au-tga-2026-05-peptide-import-warning, usc-21-331, au-tga-2024-04-peptide-import-infringement, au-vic-dpcs-act-1981, au-tga-2026-09-personal-import-packaging, au-nsw-ptg-act-1966, au-nsw-health-s4d-2026 | four-country import rules | Gnw arts. 18, 38, 40, 101; WED; Customs pages and handbook ch. 5, 7, 8, 12, 13; Rb Den Haag 2019; Hof Amsterdam 2020; Kamerbrief 5 October 2026; Belgian art. 12quater (one line) |
| Trials (KeyNumbers, text, fold) | ctgov-search-status-b-2026-10-23, au-anzctr-search-status-b-2026-10-23, ctgov-search-status-d-2026-10-23, au-anzctr-search-status-d-2026-10-23, ca-ctgov-retatrutide-ca-au-2026-10-24, ecfr-21-50-25, nhs-clinical-trials, ecfr-21-312-20, ecfr-21-56-103, uk-si-2004-1031-reg-12, ca-fdr-c05-clinical-trials, au-tg-regs-sch-5a-item-3-clinical-trials, ca-hc-ctsp-retatrutide-2026-10-24, au-anzctr-search-status-a-2026-10-24, ecfr-21-56-111, fda-expanded-access-patients | four-country trial rules and searches; the FDA's "use a trial whenever possible" is US guidance for US patients | WMO, CCMO, Regulation 536/2014, EMA CTR page, OMON, CTIS and ClinicalTrials.gov searches of 27 October 2026, the NL trial records (ctgov-nct06383390 and ctgov-nct07165028 are kept) |
| What this means for you | gmc-2021-deciding-safe-to-prescribe, gphc-2025-distance-pharmacy-guidance, ca-hc-sap-drugs, au-tga-sas-individual-patients, nhs-clinical-trials, fda-off-label-use | four-country frame | WGBO art. 7:448, IGJ off-label and artsenverklaring pages, CCMO, Beleidsregel 2023, Thuisarts (beroepsgeheim) |

Kept from English: ctgov-nct06383390, ctgov-nct07165028, fda-503a-bulks-page, fda-drugsatfda-egrifta,
fda-drugsatfda-forzinity, fda-drugsatfda-vyleesi, fda-pcac-2026-07-meeting, fda-pcac-2026-briefing-intro,
fda-pcac-2026-presentations-day1, fda-pcac-2026-questions, fda-pcac-2026-semax-briefing, fda-pcac-2027-early-announcement,
federalregister-fda-search-2026-10-23, fr-2026-07361-pcac-notice, usc-21-353a. The page cites 99 ids (English 141).

---

## 2. legal/research-use-only (method: adapted)

**Structure.** Same sections as English, in the same order: opening Lead and figure, "Waarom het etiket niet beslist"
(figure and fold), the US section (kept as evidence/world context, as the 23 October Dutch-framed page did), "Wat het
etiket in Nederland verandert" (Compare), "Wat het etiket voor jou betekent" (licensed vs research-labelled Compare,
KeyNumber, checklist, two folds). Added: `<JurisdictionCard code="NL" />` after the checklist (brief: services via the NL
card). The English link line to the four country pages became links to `/nl/legal/nl/`, `/nl/legal/eu/`, the zelf-invoeren
anchor and one Belgian line with a link to `/nl/legal/be/`.

**The science and the CJEU reasoning are kept in full:** the US origin of the label wording (`ecfr-21-809-10`), how sellers
use it (Belcourt 2025, FDA letters), the five-step EU reasoning of the 23 October page (Directive 2001/83 two limbs and
art. 2(2); Van Bennekom on presentation and form; Hecht-Pharma on function; D and G), the limits fold, the FDA intended-use
diagram and fold, the Piatkowski 2026 lab test (KeyNumber 51–190%, fold, all caveats: three samples, sterility and
endotoxin not tested), and the Belcourt editorial.

**Rewritten for the Netherlands:**

- The English four-country "what the law looks at" table → the Dutch/EU step diagram (`ruo-eu-reasoning`), with the Dutch
  Gnw art. 1(1)(b) and Customs' handbook (the website test, pharmaceutical form) added (nl-law facts 2, 31, 32).
- "Three regulators say it plainly" (Health Canada, TGA, FDA) → the IGJ and NVWA (16 April 2026, about NPS websites:
  disclaimers used to evade the law), Customs (6 August 2026: "Onderzoeksdoeleinden spelen dan geen rol"; peptides
  named) and the NVWA on foods with medical claims (nl-law facts 27, 31, 33). The Customs article's body names a webshop:
  not quoted (CONTENT-GUIDE §11).
- The "less clear" fold adds: no Dutch court ruling on the unauthorised peptides (nl-law §5 item 7 as corrected), and
  Customs' medicine-vs-active-substance test, with the classification of a peptide vial written as unknown (§5 item 4).
- The country Compare → one Compare for Dutch law, with columns "pakket van buiten de EU" and "pakket uit een ander
  EU-land": the sale/import ban (Gnw art. 40), what Customs can do (handbook ch. 12, Gnw art. 116), intra-EU practice
  unknown (§5 item 5), no known fine for an own-use parcel (§5 item 2; Rb Den Haag 2019 as the one published case).
  This replaces the saved NL column ("Customs and the IGJ seize and destroy parcels", `igj-2025-shield-seizures`,
  `nl-gnw-art-115-seizure`), which nl-law §2 item 3 says needs nuance; and the saved "fine for a first parcel: not
  known, enforcement targets sellers" (`igj-toezicht-online-medicijnen`, `igj-2025-online-nepapotheken`), which is
  now the sourced "we found no fine or prosecution".
- The licensed-vs-research Compare: EU law (Directive 2001/83, verified today in the 2025 consolidation; EudraLex Vol. 4
  for sterile production; Lareb for reporting) instead of FDA, MHRA, Health Canada and TGA rules. The US/Canadian
  15-day reporting detail goes (framing).
- Checklist: Lareb instead of the four countries' reporting schemes (Lareb takes reports on products from outside a
  pharmacy and does not share them with your doctor; nl-care fact 69), the fixed anchor
  `/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt` (heading checked in the Dutch file).
- Belgium: the saved FAMHP sentence ("is not a valid argument") is left out (Belgium as notes only); one line says
  Belgian parcel rules differ, with a link.

### Dropped citations (research-use-only)

| English section | Dropped ids | Why | Replaced by |
|---|---|---|---|
| Opening figure and paragraph | mhra-2026-01-seizures-2025, ca-hc-2026-04-think-twice-peptides, au-tga-2026-06-peptide-compliance-priority, au-tga-prescription-medicines-overview, au-tga-about-artg, uk-mhra-substance-index-status-a-2026-10-24 | UK/CA/AU regulators as the reader's frame (DIN, AUST R) | eu-directive-2001-83, igj-online-medicijnen, igj-qa-zonder-handelsvergunning (RVG/EU number), cbg-geneesmiddeleninformatiebank |
| Why the label does not decide (table, paragraph, fold) | uk-hmr-2012-reg-2, ca-fda-s2-definitions, au-tg-act-s3-definitions, au-tga-how-we-regulate-peptides, uk-govuk-search-legal-en-b-2026-10-24, mhra-2026-10-counterfeit-pens | four-country definitions and statements | nl-gmw-art-1-geneesmiddel, eu-directive-2001-83, cjeu-1983-van-bennekom, cjeu-2009-hecht-pharma, cjeu-2014-d-and-g, igj-2021-melatonine-geneesmiddel-of-niet, igj-2026-04-nps-websites-offline, douane-2026-08-illegale-online-handel-medicijnen, douane-hvgem h7/h8, nvwa-verbod-medische-claims |
| What the label changes in each country | uk-hmr-2012-reg-46, fda-personal-importation, mhra-foi-22-431-personal-import-seizures, ca-cbsa-d19-9-1, ca-hc-gui-0116-personal-import, au-tga-2026-05-peptide-import-warning, ca-fda-s30-7-cost-recovery, au-tga-2024-04-peptide-import-infringement, au-tga-2026-10-prescription-import-infringements | four-country import and enforcement | nl-gmw-art-40-handelsvergunning, douane-hvgem h12, nl-gnw-art-116-opsporing-douane, nl-rbdha-2019-4817-postzending-eigen-gebruik, fagg-postal-seizure-qa-nl (Belgian line) |
| What the label means for you (Compare) | mhra-gmp-gdp-guidance, au-tga-manufacturing, ca-fdr-c02-018, ca-fdr-c02-029, ecfr-21-211-167, ecfr-21-211-165, ecfr-21-314-80, ca-fdr-c01-017-manufacturer-adr, fda-medwatch, mhra-yellow-card, ca-hc-medeffect-reporting, au-tga-report-adverse-event | four-country quality and reporting rules | eu-directive-2001-83, eudralex-volume-4-gmp, lareb-bijwerkingen-melden, lareb-2021-illegal-medicines, cbg-geneesmiddeleninformatiebank, igj-online-medicijnen |
| Checklist source line | ca-hc-complaints (and the four reporting ids above) | other countries' reporting routes | lareb-bijwerkingen-melden, lareb-2021-illegal-medicines; `<JurisdictionCard code="NL" />` |

Kept from English: belcourt-2025-research-purposes, ecfr-21-201-128, ecfr-21-809-10, fda-unapproved-glp1-concerns,
fda-warning-letters-index, piatkowski-2026-retatrutide-product-testing. The page cites 28 ids (English 40).

---

## 3. UNRESOLVED points and how the pages handle them

| Point (research) | Page | Handling |
|---|---|---|
| Whether an artsenverklaring could ever work for a substance authorised nowhere, without IB/IMPD and GMP proof (nl-care §5.11) | legal-routes | "Volgens ons in de praktijk niet"; the fold says the IGJ does not say, labelled as our reading, legal reviewer |
| European Pharmacopoeia monographs for the site's peptides (nl-care §5.5) | legal-routes | "hebben we niet kunnen nagaan"; the IGJ rule is quoted instead |
| Whether SYNERGY-Outcomes recruits Dutch participants (nl-care fact-check) | legal-routes | "is in Nederland gestart", "de registers zijn het niet eens"; sites not named |
| Whether 4TAZPower will recruit in NL; whether NL-OMON51992 started (§5.6–5.7) | legal-routes | "nog niet begonnen" (27 October 2026); "Of het ooit is begonnen, weten we niet" |
| Zorginstituut advice on Wegovy and Mounjaro; any 2027 reimbursement change (§5.2–5.3) | legal-routes | "Wanneer het advies komt, is nog niet bekend"; nothing said about 2027 reimbursement |
| Possession "in voorraad hebben" for a few vials (nl-law §5.1) | both | not stated (not needed for these pages) |
| Fine or prosecution of a private person for a small own-use import (§5.2) | both | "We vonden geen boete en geen vervolging (gezocht op 27 oktober 2026)" |
| Which parcels Customs reports to the IGJ; local OM agreements (§5.3) | legal-routes | "staat in interne afspraken. Die zijn niet openbaar." No hint at what usually happens (nl-law §6.4) |
| Medicine or active substance for a peptide vial (§5.4) | both | the two consequences stated from Customs' handbook; "Hoe de Douane een flacon met peptidepoeder indeelt, is niet bekend" |
| Intra-EU parcels in practice (§5.5) | both | law stated (forbidden); practice "Onbekend. We vonden geen bron." |
| Dutch court ruling on the unauthorised peptides (§5.7, corrected) | research-use-only | "vonden we ook niet (gezocht op 27 oktober 2026)" |
| Travellers with a medicine authorised only in another EU state (§5.13) | legal-routes | not addressed beyond the research's own line (the traveller exemption does not lift art. 40(2)) |
| IGJ February 2026 peptide statements; August 2026 IGJ enforcement against a webshop | both | not used (not citable; brief item 5) |

---

## 4. Open questions for the legal and medical reviewers

1. **Internet prescribing (legal):** is "de wet verbiedt het, maar sinds april 2023 treedt de minister daar niet tegen op
   als ..." a fair B1 summary of Gnw art. 67 and the Beleidsregel (nl-care §6.1)? The page does not mention ordinary
   telephone consultations.
2. **Recept from another EU/EEA state (legal):** the fold says it is a valid Dutch recept (Gnw art. 1(1)(pp)) and adds that
   it does not make an unauthorised medicine available; should it also say the pharmacist checks it (nl-care §6.4)?
3. **"Volgens ons in de praktijk niet" (legal):** the artsenverklaring row for a peptide approved nowhere is our reading
   of the IGJ's document requirements. Acceptable as "no" with that qualifier?
4. **World-context line (legal):** the artsenverklaring fold names tesamorelin, bremelanotide and elamipretide as examples
   of medicines approved abroad (US) but not here, for which this route exists. Informative, or could it read as a
   pointer?
5. **No Dutch medical-need programme (legal):** our reading of Gnw art. 40(3) (nl-care §6.5), stated as such.
6. **Zelf invoeren table (legal):** it says what the law forbids and what Customs "can" do, and that the rest is not
   public, never what usually happens (nl-law §6.4). Is the active-substance row (Customs ch. 13: parcel seized, recipient
   a suspect) right to include (nl-law §6.5)?
7. **Sources whose text names a business (legal):** `douane-2026-08-illegale-online-handel-medicijnen` is quoted for two
   neutral sentences, never for the names in its body (nl-law §6.12; merge §10.8).
8. **GP and weight-loss medicines (medical):** "Een huisarts hoeft die niet zelf voor te schrijven. Sommige huisartsen
   doen het wel. Andere verwijzen je naar een specialist" (NHG facultatief, Thuisarts) and "Dan horen de controles bij die
   arts. Je huisarts let wel op bijwerkingen en problemen" (NHG praktijksituatie 6): fair, and safe on this page
   (nl-care §6.7)?
9. **Trials named (legal):** TRIUMPH-Outcomes and SYNERGY-Outcomes are named by acronym (as the English page names
   TRIUMPH-Outcomes); the elamipretide trial is described without its acronym; no site organisation is named
   (nl-care §6.8).
10. **Pharmacy-preparation reimbursement (legal):** the fold states the KNMP rule only. Our inference that a pharmacy-made
    semaglutide for weight would not be reimbursed (nl-care fact 33, §6.3) is left out on purpose.
11. **Insurance terms (medical/legal):** "Voor sommige medicijnen vraagt je arts eerst toestemming aan je zorgverzekeraar:
    een machtiging" rests on the NHG's "ZN-machtigingen (artsenverklaring)"; it is there to keep the two meanings of
    "artsenverklaring" apart (nl-care conflict 5).

---

## 5. Style terms (STYLE-NL lacks them; the word used)

| English / concept | Word used | Note |
|---|---|---|
| IGJ's exemption for named-patient supply (since 9 September 2025) | ontheffing | not "toestemming" (nl-care fact 21); glossary entry added (`ontheffing`) |
| insurer's prior authorisation | machtiging (van je zorgverzekeraar) | never "artsenverklaring" for this (nl-care conflict 5) |
| shortage exemption (Regeling art. 3.17a) | vrijstelling | not used on these pages |
| medication history (medicatiehistorie) | medicijngeschiedenis | B1 |
| nurse practitioner / specialist nurse | verpleegkundig specialist | Dutch role name, no gloss |
| mutual recognition agreement countries | de landen met een erkenningsakkoord met de EU | only in a fold |
| pharmaceutical form (Customs) | farmaceutische vorm (de vorm waarin je het gebruikt) | glossary entry added (`pharmaceutical-form`) |
| active substance, legal sense | werkzame stof, "de grondstof voor een medicijn" | glossed in the text, no glossary entry (see §6) |
| research chemicals sold as NPS | designerdrugs | as the Douane writes it, one word |
| US Federal Register | het Amerikaanse staatsblad (Federal Register) | PCAC fold only |
| magistral formula, pharmacy preparation | magistrale bereiding | STYLE-NL §2.4; "apotheekbereiding" only inside source ids; B1 gloss "de apotheek maakt het zelf" |

---

## 6. For the final sweep (changes in files this group does not own)

1. **`docs/STYLE-NL.md`** (§2.4): add the rows of §5 above, at least "ontheffing" (IGJ, named-patient supply),
   "vrijstelling" (IGJ, shortages) and "machtiging" (insurer) vs "artsenverklaring" (only the IGJ route), as nl-care §7
   asked writers to do.
2. **Glossary duplicates:** this group added `ontheffing` and `pharmaceutical-form` in
   `src/i18n/nl/glossary/nl-legal-routes.json`. If the legal/nl group adds the same concepts, keep one. A Dutch
   `active-substance` entry ("werkzame stof", legal sense) was deliberately not added: it would tooltip every compound
   page; the legal/nl owner may want it.
3. **`src/data/sources/shared.yaml` → `eu-directive-2001-83`:** still points to the 2022 consolidation
   (`CELEX:02001L0083-20220101`, accessed 2026-10-20). The articles these pages rely on (3(1), 2(2), 5(1), 46(f), 51,
   the pharmacovigilance system, the package leaflet) were checked today in the 1 January 2025 consolidation through
   CELLAR (`https://publications.europa.eu/resource/celex/02001L0083-20250101`); the owner may update the URL and
   `accessed: 2026-10-27` (also merge §9).
4. **`src/data/sources/legal-a.yaml` → `cjeu-2015-abcur`:** retitle neutrally (e.g. "Judgment of 16 July 2015, Joined
   Cases C-544/13 and C-545/13") if a Dutch page should use its "prescription before preparation" point; the routes page
   leaves it out until then (nl-care fact-check correction 2).
5. **`src/data/sources/legal-a.yaml` → `igj-leveren-op-artsenverklaring`, `igj-qa-zonder-handelsvergunning`;
   `retatrutide.yaml` → `cbg-compassionate-use-list`; `stubs-b.yaml` → `ctgov-nct07531251`:** the note updates nl-care §7
   lists (ontheffing since 9 September 2025, spoedprocedure, reimbursement sentence, trial-exclusion route, list checked
   27 October 2026, no Dutch site on ClinicalTrials.gov) are still open (merge §9).
6. **Heroes and captions:** `legal-routes` keeps `pharmacy-mortar` (its Dutch caption fits the page);
   `legal/research-use-only` keeps `lab-96-well-plate`. No change needed.
7. **Other pages' links into these pages:** every `/nl/legal-routes/#…` link found in `src/` uses one of the seven fixed
   anchors; no Dutch file links an anchor on `/nl/legal/research-use-only/`.

---

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/pages/nl/legal-routes.mdx`, `src/content/pages/nl/legal/research-use-only.mdx`
and `src/i18n/nl/glossary/nl-legal-routes.json` (the writer's notes above were read, not trusted). Read first: the brief
(with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §1b, §4.1, §8–13, `research/nl/nl-care.md`, `nl-law.md`,
the reform and Belgium facts in `eu-status.md` and `be-notes.md` (each with its fact-check), `research/nl/status/semaglutide.yaml`
and `tirzepatide.yaml`, the EU/NL rows of the data files of every compound the pages name, `MANIFEST-legal-en-b.md`, the two
snapshot pages and the current English pages. No new source and no allowlist host were needed; no file outside this group
was edited.

**Fetched today to check what the research did not cover** (curl; text read): CCMO "Algemene informatie over meedoen aan
onderzoek (IVO)" ("Je moet genoeg tijd krijgen om te beslissen", "Soms moet je wel snel beslissen", "Vaak krijg je eerst een
keuring", "Stoppen mag altijd ... Want je kunt niet altijd direct stoppen", "binnen vier jaar"); CCMO background page
("Gezonde vrijwilligers doen meestal mee aan onderzoek in fase 1. Daarin kijkt de onderzoeker hoe het middel wordt
verdragen"); NHG "Praktijksituaties gewichtsreducerende medicatie" (situation 6, and "Wees zorgvuldig bij het invullen van de
ZN-machtigingen (artsenverklaring)"); Douane "Invoer geneesmiddelen"; through the EU Publications Office the CJEU judgments
Van Bennekom (para. 18 "averagely well-informed consumer ... may even result from implication"; the form as "strong evidence
... cannot, however, be the sole or conclusive evidence"), Hecht-Pharma (art. 2(2) does not apply where medicine-by-function
status "has not been scientifically established"; "do not significantly affect the metabolism"), D. and G. ("case-by-case
basis"; "implies that a beneficial effect should be secured for human health"; intoxication) and Commission v Poland,
C-185/10 (art. 5(1) "must remain exceptional in order to preserve the practical effect of the marketing authorisation
procedure"; "must be interpreted strictly"); the Dutch product information (EMA, PDF, pdftotext) of Wegovy, Mounjaro and
Ozempic (4.1, 4.3, 4.4 acute pancreatitis, 4.8 and leaflet section 4: misselijkheid and diarree "zeer vaak (komen voor bij
meer dan 1 op de 10 gebruikers)"); ClinicalTrials.gov API v2 for NCT06383390 (title "... in Adults Living With Obesity
(TRIUMPH-Outcomes)", inclusion BMI ≥ 27.0, enrolment 10,000 estimated, active not recruiting) and NCT07165028 (title "...
Adults With Metabolic Dysfunction-Associated Steatotic Liver Disease ... at Increased Risk of Developing Major Adverse Liver
Outcomes" in the registered source, recruiting); the FDA PCAC meeting page ("Content current as of: 08/06/2026", no minutes or
vote results); the PubMed record of Piatkowski 2026 (PMID 42559975; the PMC full text is not available to scripts). Every one
of the 118 source ids the two pages cite was looked up in `src/data/sources/` (exists, title and URL fit the claim, no seller
or company named).

### Changes

| # | Page | Before | After | Why | Source |
|---|---|---|---|---|---|
| 1 | legal-routes, TL;DR 2 | "Er loopt hier ook geen onderzoek bij mensen mee." | "Er loopt hier ook geen onderzoek met BPC-157 bij mensen." | stranded "mee", unclear referent (language) | – |
| 2 | legal-routes, TL;DR 4 | "Je arts en een apotheek vragen die aan, niet jij." | "Je arts en een apotheek regelen die, niet jij." | the doctor signs the declaration; the pharmacy applies for the ontheffing | nl-care facts 22–23 |
| 3 | legal-routes, Recept step 3 | "Een arts hoeft dus niet voor te schrijven wat je vraagt." | + "Zo lezen wij de wet." | the research requires this inference to be labelled as our reading | nl-care fact 53 |
| 4 | legal-routes, Recept step 4 | "Een medicijn dat alleen op recept is, krijg je bij een apotheek ..." | "Een medicijn op recept geeft alleen een apotheek je mee, of een huisarts met een eigen apotheek. Dat mag alleen als er een recept is." | B1; STYLE-NL §2.4 ("de apotheek geeft het je mee") | nl-care fact 1 |
| 5 | legal-routes, Recept | "twee peptiden goedgekeurd als medicijn in de EU"; Ozempic/Rybelsus "voor diabetes type 2"; Wegovy "bij obesitas, of bij overgewicht met een ziekte"; Mounjaro "voor allebei" | "een goedkeuring voor de hele EU"; the indications as the Dutch SmPC 4.1 gives them: adults with insufficiently controlled type 2 diabetes; Wegovy for adults with obesity, or overweight with a weight-related disease, and (injection) adolescents from 12 with obesity over 60 kg; Mounjaro type 2 diabetes from 10 years and weight management in adults only | brief "Added after step 1" item 1 (SmPC wording for every EU product named); "in de EU" was ambiguous because thymosin alpha-1 has a national authorisation in Italy (eu-status fact-check, AIFA) | `ema-pi-ozempic-nl`, `ema-pi-rybelsus-nl`, `ema-pi-wegovy-nl`, `ema-pi-mounjaro-nl`; status/semaglutide.yaml, status/tirzepatide.yaml |
| 6 | legal-routes, Recept | (no risk named next to the four authorised medicines) | new: "Ook deze medicijnen hebben bijwerkingen. Misselijkheid en diarree komen voor bij meer dan 1 op de 10 gebruikers. De productinformatie waarschuwt ook voor een ontstoken alvleesklier (pancreatitis)." | advertising test: authorised medicines are named with their main risks, balanced | Dutch SmPCs read today (4.4, 4.8, leaflet section 4) |
| 7 | legal-routes, Recept | "Over zulke middelen zonder recept van internet zegt het CBG: "Want je weet niet wat je koopt."" | "Over GLP-1-medicijnen zonder recept van internet schrijft het CBG: "je weet niet wat je koopt. Het is onduidelijk wat erin zit"." | the CBG statement is about GLP-1 medicines obtained online without a prescription, not about "research" vials as such; quote completed | `cbg-glp1-position` (nl-care fact 19) |
| 8 | legal-routes, fold internet | "Een lichamelijk onderzoek is niet nodig." | "Een afspraak in de praktijk of een lichamelijk onderzoek is niet nodig." | the policy rule says "een fysiek consult of onderzoek" | `nl-beleidsregel-voorschrijven-via-internet` (nl-care fact 10) |
| 9 | legal-routes, fold internet | "Je huisarts let wel op bijwerkingen en problemen." | "Je huisarts kan wel bijwerkingen en problemen opmerken." | the NHG gives the GP "een rol in het signaleren" and expressly no responsibility for periodic checks; "let op" overstated it | `nhg-2025-gewichtsreducerende-medicatie` (read today) |
| 10 | legal-routes (two places) | "een medicijn zonder Nederlandse handelsvergunning" | "een medicijn dat in Nederland geen handelsvergunning heeft" | an EU-wide handelsvergunning is also valid here (Gnw art. 40(1)); "Nederlandse" could mislead | `nl-gmw-art-40-handelsvergunning` |
| 11 | legal-routes, fold vergoeding | "Voor sommige medicijnen vraagt je arts eerst toestemming aan je zorgverzekeraar: een machtiging." | "Voor sommige vergoede medicijnen vult je arts een formulier van de zorgverzekeraars in: een machtiging." | the cited NHG page only says "Wees zorgvuldig bij het invullen van de ZN-machtigingen (artsenverklaring)"; prior permission from the insurer is not in the source | `nhg-2025-gewichtsreducerende-medicatie` (read today) |
| 12 | legal-routes, Off-label Lead | "Soms. Alleen als de regels van artsen het toelaten, met extra zorg en jouw toestemming." | "Soms. Vooral als een standaard van artsen het toestaat. Anders alleen bij uitzondering, met extra zorg." | with a standard ("user label") the extra information duty does not apply; "alleen als" contradicted the exceptional route of the IGJ position | `igj-2026-off-label-standpunt` (nl-care fact 14) |
| 13 | legal-routes, Off-label | "Het CBG raadt af om GLP-1-medicijnen zonder recept en buiten het gebruik waarvoor ze zijn goedgekeurd te gebruiken om af te vallen." | "Steeds meer mensen gebruiken GLP-1-medicijnen om af te vallen, zonder recept en buiten het gebruik waarvoor ze zijn goedgekeurd. Het CBG raadt dat af." | tangconstructie (STYLE-NL §1 rule 2); now follows the CBG's own sentence | `cbg-glp1-position` |
| 14 | legal-routes, Artsenverklaring step 1 | "dat niemand de kwaliteit, de veiligheid en de werking van het product heeft beoordeeld" | "dat het product in Nederland niet is beoordeeld op werking, veiligheid en kwaliteit" | the declaration says the medicine "niet is getoetst aan criteria" here; a medicine approved abroad was assessed there | `igj-leveren-op-artsenverklaring` (nl-care fact 22) |
| 15 | legal-routes, Artsenverklaring | "Een ontheffing betekent ook niet dat je zorgverzekeraar het medicijn betaalt." | "... ook niet vanzelf dat ..." | the IGJ says "niet zonder meer" | `igj-qa-zonder-handelsvergunning` (fact 27) |
| 16 | legal-routes, fold BPC-157 (world context) | "Op deze site gaat het dan om tesamorelin, bremelanotide (PT-141) en elamipretide (SS-31)." | "... gaat het dan bijvoorbeeld om ..." + "Ook dan gelden alle voorwaarden hierboven, en de IGJ kan nee zeggen." | the list read as complete (thymosin alpha-1 is authorised in Italy); balance, so it cannot read as a pointer (writer's question 4) | IGJ Q&A and artsenverklaring page; AIFA via the eu-status fact-check |
| 17 | legal-routes, Magistrale step 1 | "**Eerst een recept, voor één patiënt.**" | "**Een recept, voor één patiënt.**" | "prescription before preparation" is the Abcur point, barred until `cjeu-2015-abcur` is retitled; Directive art. 3(1) does not say "eerst" | nl-care fact 31 and fact-check correction 2 |
| 18 | legal-routes, PCAC point 1 | "stemde ... om BPC-157 op de Amerikaanse 503A-lijst te zetten" | "stemde ... om aan te bevelen BPC-157 op de Amerikaanse 503A-lijst te zetten" | the committee recommended; it cannot list (CONTENT-GUIDE §1 point 1) | `fda-pcac-2026-questions`; meeting page re-read (no minutes, "Content current as of: 08/06/2026") |
| 19 | legal-routes, PCAC point 5 | "Geen van de zes aanbevolen peptiden ..."; "Semax is in Rusland als medicijn geregistreerd."; "... en verandert niets buiten de VS." | the STYLE-NL §5.4 fixed phrases "Geen van deze peptiden is een goedgekeurd medicijn in Nederland of de EU." and "Een Amerikaanse lijst verandert niets buiten de VS."; "Semax is wel in Rusland als medicijn goedgekeurd, schrijft de FDA zelf." | fixed phrase; STYLE-NL §2.4 avoids "geregistreerd"; CONTENT-GUIDE §1 point 5 ("as the FDA's own briefing notes"); the EU and NL rows of all six read not-authorised, as_of 2026-10-27 | data files bpc-157, kpv, tb-500, mots-c, semax, epitalon; `fda-pcac-2026-semax-briefing` |
| 20 | legal-routes, both KeyNumbers | "met een plek in Nederland" / "met plekken in Nederland" | "die in Nederland lopen" / "die ook in Nederland lopen" | "plek" reads as a place for a participant; the count is of trials with a Dutch site | nl-care facts 46, 49 |
| 21 | legal-routes, fold trials | "Je krijgt schriftelijke uitleg en tijd om te beslissen. ... Vaak is er eerst een controle of je mag meedoen." | "... en meestal tijd om te beslissen. ... Vaak is er eerst een keuring om te kijken of je kunt meedoen. Stoppen mag altijd, maar praat er eerst over met de onderzoeker. Soms kun je niet in één keer stoppen." | CCMO: "Soms moet je wel snel beslissen", "keuring", "je kunt niet altijd direct stoppen" (a safety caveat the page left out) | `ccmo-ivo-meedoen` (read today) |
| 22 | legal-routes, fold trials | (no phase 1 line) | "Aan onderzoek in fase 1 doen meestal gezonde vrijwilligers mee. Daarin kijkt de onderzoeker hoe mensen het middel verdragen." | science parity: restores the English page's phase 1 caveat (there sourced to a UK NHS page) from the Dutch source | `ccmo-achtergrond-meedoen` (read today) |
| 23 | legal-routes, fold trials | TRIUMPH-Outcomes "bij ongeveer 10.000 volwassenen met obesitas ... Het heeft 28 plekken in Nederland"; SYNERGY-Outcomes "en een hoog risico" | "met een BMI van 27 of hoger ..."; "Het loopt in 28 onderzoekscentra in Nederland"; "een verhoogd risico op ernstige leverproblemen" | the record's inclusion is BMI ≥ 27.0 (overweight included; English: "overweight"); "plekken" as in change 20; the SYNERGY risk is of major adverse liver outcomes | `ctgov-nct06383390`, `ctgov-nct07165028` (API, read today) |
| 24 | legal-routes, fold trials | "thymosine-alfa-1" | "thymosine alfa-1" | the Dutch compound page's name | `src/content/compounds/nl/thymosin-alpha-1.mdx` title |
| 25 | legal-routes, Compassionate use | "Nederland heeft geen apart medisch noodprogramma, zoals België wel heeft. Dat is onze lezing van de wet." | "Voor een nieuw gebruik van een medicijn dat al is goedgekeurd, bestaat geen programma: dat valt onder de regels voor off-label. Een apart medisch noodprogramma voor zo'n nieuw gebruik, zoals België dat kent, staat niet in de Nederlandse wet. Dat is onze lezing van de wet." | the Dutch reader got an unexplained Belgian term; now the Dutch answer first, Belgium as one short line | `cbg-cup-vragen-en-antwoorden` (nl-care fact 18), be-notes fact 7, nl-care fact 40 |
| 26 | legal-routes, fold CU | "Tot 2023 gold een goedkeuring 1 jaar." | "Vroeger gold een goedkeuring 1 jaar." | the CBG's own dates ("tot 2023" vs MEB 49 of 1 December 2024) leave a gap; "vroeger" is true without a date | `cbg-cup-vragen-en-antwoorden`, `cbg-2024-cup-nieuw-beleid` |
| 27 | legal-routes, fold CU | "De nieuwe Europese regels voor medicijnen maken compassionate use ook mogelijk voor één patiënt. Die regels gelden nog niet." | "Bij de herziening van de Europese geneesmiddelenwetgeving kan compassionate use ook voor één patiënt mogelijk worden. Dat staat in de tekst die de Raad van de EU op 28 september 2026 aannam. Het is nog geen wet." | STYLE-NL §2.4 term; the text is the Council's first-reading position, not adopted law | `council-st-7105-2026-rev2` (eu-status facts 28–31 and fact-check) |
| 28 | legal-routes, Zelf invoeren table, travellers | "Voor een medicijn zonder handelsvergunning blijft het verbod gelden." | "Een middel dat nergens is goedgekeurd, wordt daardoor niet legaal: het verbod blijft gelden." | nl-law §5.13 leaves open a traveller with a medicine authorised only in another EU state; the narrower statement is certain | nl-law fact 43(a), §5.13 |
| 29 | legal-routes, Zelf invoeren table, EU parcels | "Onbekend. We vonden geen bron over wat er met zulke pakketten gebeurt." | "Onbekend. We vonden niet of iemand optreedt tegen wie zo'n pakket krijgt." | the fact-check found Customs' public page (31 August 2026) saying it does not check intra-EU parcels (not citable: commerce tokens in its URL); what is unknown is action against the recipient | nl-law §5.5 (fact-check) |
| 30 | legal-routes, Zelf invoeren table, active substances | "nooit per post invoeren" | "nooit per post, pakket of koerier invoeren" | Customs ch. 13 wording | `douane-hvgem-geneesmiddelen-h13-fysiek-toezicht-werkzame-stoffen` (nl-law fact 40) |
| 31 | legal-routes, Zelf invoeren | "Een apotheek in Nederland vraagt die [artsenverklaring] aan, nooit de patiënt zelf." | "Je arts tekent dan een verklaring, en een apotheek in Nederland vraagt de ontheffing aan. Jij kunt dat niet zelf doen." | the doctor signs the declaration; the pharmacy applies for the ontheffing | `igj-leveren-op-artsenverklaring`, IGJ Q&A |
| 32 | legal-routes, fold import | "De enige regel over eigen gebruik gaat over de vergunning ... Die geldt alleen voor ..." | "De enige uitzondering voor eigen gebruik ... Die uitzondering geldt alleen voor ..." | "die" pointed at the licence, not the exemption | `nl-gnw-art-18-licence` |
| 33 | legal-routes, fold import | "een pakket keelpastilles" | "een pakket hoestpastilles" | the judgment says "hoestpastilles" | `nl-rbdha-2019-4817-postzending-eigen-gebruik` (nl-law fact 39) |
| 34 | legal-routes, fold import | "De rechtbank Den Haag"; "In 2020 ging het gerechtshof Amsterdam over een reiziger" | "De Rechtbank Den Haag"; "In 2020 oordeelde het Gerechtshof Amsterdam over een reiziger" | idiom ("ging over" means "was in charge of"); capitals of unique institutions (STYLE-NL §4.2) | – |
| 35 | legal-routes, fold import | "Wanneer de Douane een pakket voor eigen gebruik meldt bij de IGJ, staat in interne afspraken." | "In welke gevallen de Douane ... meldt bij de IGJ, staat in interne lijsten en afspraken." | grammar; Customs has an internal IGJ list and local OM agreements | `douane-hvgem-geneesmiddelen-h12-fysiek-toezicht` (nl-law fact 40) |
| 36 | legal-routes, closing | "Al deze wegen zijn met opzet smal. Zo blijft het systeem van handelsvergunningen beschermd." | "Al deze wegen zijn smal. Het Hof van Justitie van de Europese Unie zei over de artsenverklaring: die moet een uitzondering blijven. Anders heeft de regel van de handelsvergunning geen zin meer." | the judgment speaks of the art. 5(1) derogation (the artsenverklaring) only, not of every route, and gives the reason in its own terms | `cjeu-2012-commission-v-poland` (read today) |
| 37 | research-use-only, TL;DR 1 | "Niemand heeft het goedgekeurd, en niemand hoefde ..." | "Geen medicijnautoriteit heeft het goedgekeurd. Niemand hoefde ..." | precision (English: "No regulator approved it"); one idea per sentence | – |
| 38 | research-use-only, TL;DR 3 | "Ja. De Douane kan het in beslag nemen. Of iemand daarvoor een boete kreeg, weten we niet." | "Ja, van buiten de EU. De Douane kan het in beslag nemen. Een boete daarvoor vonden we niet." | Customs checks parcels from outside the EU; intra-EU practice is open; the research searched and found no fine | nl-law §5.2, §5.5 |
| 39 | research-use-only, after the figure | "Volgens hen gebruiken verkopers zinnen als ... om de wet te omzeilen." | "Volgens hen proberen verkopers de wet te omzeilen met zinnen als ..." | the IGJ and NVWA: "Aanbieders proberen de wet te omzeilen" | `igj-2026-04-nps-websites-offline` (nl-law fact 27) |
| 40 | research-use-only, fold "Waar de wet minder duidelijk is" | "We vonden geen uitspraak van een Europese of Nederlandse rechter over etiketten met "alleen voor onderzoek" als zodanig. ... vonden we ook niet" | "De Geneesmiddelenwet noemt etiketten met "alleen voor onderzoek" of "niet voor menselijke consumptie" nergens. Wat telt, is hoe een product wordt aangeboden en wat het doet. ... We hebben niet apart gezocht naar uitspraken over zulke etiketten. Een uitspraak van een Nederlandse rechter over de niet-goedgekeurde peptiden vonden we niet (gezocht op 27 oktober 2026)." | no search for rulings on such labels exists in research/nl/ (the rechtspraak searches were for peptiden, semaglutide, Ozempic, eigen gebruik); the old claim was the 22 October "no EU ruling" plus Dutch courts without a search | nl-law fact 31, §5.7 (corrected); `nl-geneesmiddelenwet`, `nl-gmw-art-1-geneesmiddel`; D. and G. "case-by-case" read today |
| 41 | research-use-only, heading | "## De VS kijken naar de bedoeling" | "## De Amerikaanse regels kijken naar de bedoeling" | a chapter name that says what the section answers (the rules, not the country); residue-clean without a marker in front of a heading | STYLE-NL §4.3 |
| 42 | research-use-only, US Lead | "De FDA kijkt naar wat de verkoper echt bedoelt, aan alles wat die zegt en doet." | "De FDA kijkt wat de verkoper echt bedoelt. Dat blijkt uit alles wat die zegt en doet." | Dutch syntax ("aan alles" is a calque) | – |
| 43 | research-use-only, US step 1 | "hangt het gebruik van een product af van ..." | "hangt het bedoelde gebruik van een product af van ..." | 21 CFR 201.128 is about "intended uses" | `ecfr-21-201-128` |
| 44 | research-use-only, Compare, EU parcels | "Wat er in de praktijk met zulke pakketten gebeurt, vonden we niet." | "Of iemand optreedt tegen wie zo'n pakket krijgt, vonden we niet." | as change 29 | nl-law §5.5 |
| 45 | research-use-only, Compare, leaflet row | "Niemand heeft het product beoordeeld." | "Geen medicijnautoriteit heeft het product beoordeeld." | precision | – |
| 46 | glossary `ontheffing`, `pharmaceutical-form` | three sentences each | two sentences each, same meaning | STYLE-NL §6 (one or two sentences) | – |

### Checked and found right (no change)

- **Structure and anchors:** exactly the seven `##` headings of the brief, in its order; the 181 `/nl/legal-routes/#…` links
  in Dutch files use only those seven anchors; `/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt` matches the
  heading in the Dutch file; no `/en/` link and no link to legal/us, uk, ca, au or ireland-and-new-zealand; every `related`
  key is a Dutch route; translation block, `reviewed_by: pending-legal-review`, `reading_level: B1` and `last_reviewed:
  2026-10-27` on both pages.
- **Science parity:** neither English page has a `<Claim>`. Kept with the same meaning: Piatkowski 2026 (51–190%, three
  samples, sterility and endotoxin not tested, metals low, accredited lab), Belcourt 2025, the FDA letters and 21 CFR
  201.128 and 809.10 (world context, marked), the five PCAC points, TRIUMPH-Outcomes (about 10,000), the elamipretide trials.
  Every English cite that is not on the Dutch page is in the writer's dropped tables and is US, UK, Canadian or Australian
  framing (checked id by id). Not restored, because only a UK framing source carried it and no Dutch source read today says
  it: "a new treatment may turn out to be no better, or worse, than the standard one" (English trials fold,
  `nhs-clinical-trials`).
- **Dutch and EU facts** re-checked against nl-care facts 1–4, 7–8, 9–12, 13–19, 20–28, 29–33, 35–39, 41–49, 54–60 and 69,
  nl-law facts 2, 6–7, 19, 22, 25, 27, 29, 31–33 and 38–43, be-notes facts 7 and 10, eu-status facts 28–31: the eigen risico
  (€ 385 in 2026, € 400 in 2027), the bijlage-2 items, the Zorginstituut assessments, the IGJ terms and periods, the CUP
  rules, the WMO and CCMO points, the Customs handbook quotes, the two judgments (€ 2.500, € 2.000 voorwaardelijk), the
  quote of 5 October 2026, the Douane quote of August 2026, the Belgian art. 12quater line.
- **Rules:** no help, reporting, insurance or treatment route of another country; Lareb for side effects and the NL card on
  the research-use-only page; no dose, schedule, reconstitution sum or seller hint; no commerce word in a title, heading, Lead
  question, fold title, figure title, label or link text (the STYLE-NL §7 list checked by hand); no STYLE-NL §5.6 word; "je"
  throughout; numbers and dates in Dutch format.
- **Validator:** `--only legal-routes`, `--only nl/legal/research-use-only` and `--only nl-legal-routes`: 0 errors, 0
  warnings. **Residue** (`--details`, the same three filters): 0 error, 0 frame and 0 warn hits.

### Remaining concerns for the reviewer

1. **Belgium:** the routes page has three one-line Belgian mentions (the pointer under the opening, the medical-need
   programme line in Compassionate use, the art. 12quater line in Zelf invoeren) and the research-use-only page one. Each is a
   place where the answer differs; the editor may want to keep only the pointer and the import line.
2. **"### Wat je wel kunt doen"** sits inside `## Zelf invoeren` because no eighth `##` heading is allowed, but its checklist
   covers every route. Moving it is an editor decision (the anchors do not change).
3. **Machtiging (change 11):** rests on the NHG's mention of "ZN-machtigingen (artsenverklaring)" only; no Zorgverzekeraars
   Nederland page was read. Medical or legal reviewer.
4. **World-context line in the artsenverklaring fold (change 16):** kept with "bijvoorbeeld" and the conditions; whether to
   name US-approved compounds as examples of this route at all is the writer's question 4, still open.
5. **Intra-EU parcels:** Customs' clearest public statement (31 August 2026: it does not check parcels from other EU
   countries) cannot be cited because its URL carries commerce tokens; the pages therefore say only what is unknown.
6. **Side-effect line (change 6)** was added for the advertising test; the medical reviewer should confirm that very common
   nausea and diarrhoea plus the pancreatitis warning is the right minimum next to the four product names.
7. **Van Bennekom on form:** the judgment speaks of tablets, pills and capsules; "een flacon die is gemaakt om te spuiten, is
   een sterke aanwijzing" applies it to vials. The fold says it is our reading; the legal reviewer should confirm.
8. **Piatkowski 2026:** the full text could not be read by script (PMC restricted); the Dutch text repeats the English page.
9. **For the final sweep (files this group does not own):** nothing new beyond §6 of the writer's notes. Still open there:
   `eu-directive-2001-83` should point to the 1 January 2025 consolidation (shared.yaml); `cjeu-2015-abcur` needs a neutral
   title before any Dutch page may use the "prescription before preparation" point; STYLE-NL rows for ontheffing,
   vrijstelling and machtiging.
