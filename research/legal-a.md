# Research notes — group legal-a

Pages: `/legal` (index), `/legal/nl`, `/legal/eu`, `/legal/be`, `/legal/research-use-only`, `/legal-routes`.
Data: `src/data/jurisdictions.yaml`, `src/data/sources/legal-a.yaml`, `src/i18n/en/glossary/legal-a.json`.
Media (shared files, entries added): `law-library-shelf`, `ridderzaal-binnenhof`, `belgian-federal-parliament`,
`ema-building-amsterdam`, `lab-96-well-plate`, `pharmacy-mortar` (heroes for the six routes).

Written 22 October 2026. Every law and regulator page below was fetched on that date and read; nothing about
the law was taken from memory. All pages: `reviewed_by: pending-legal-review`.

---

## 1. Key facts, with source ids

### Netherlands — Geneesmiddelenwet (version in force from 9 September 2025; checked "geldend t/m heden")

| Fact | Source id |
|---|---|
| Definition of a medicine: substance intended for, or presented as suitable for, (1) curing/preventing disease, defect, wound or pain, (2) diagnosis, (3) restoring/improving/changing physiological functions by a pharmacological, immunological or metabolic effect (art. 1(1)(b)) | `nl-gmw-art-1-geneesmiddel` (guides) |
| "Invoeren" = from a third country (art. 1(1)(hh)); "reclame" defined by purpose: "elke vorm van beïnvloeding met het kennelijke doel het voorschrijven, ter hand stellen of gebruiken van een geneesmiddel te bevorderen" (art. 1(1)(xx)) | `nl-gnw-art-1-reclame` |
| Art. 40(1): no placing on the market without an EU or CBG marketing authorisation. Art. 40(2): forbidden "in voorraad te hebben, te koop aan te bieden, te verkopen, af te leveren, ter hand te stellen, in te voeren, uit te voeren of anderszins binnen of buiten het Nederlands grondgebied te brengen". Art. 40(3): exceptions (a) small-scale pharmacy preparation, (b) investigational medicines, (c) IGJ ontheffing/vrijstelling under art. 5 Dir. 2001/83, (d) hospital ATMP, (e) parallel import, (f) compassionate use under art. 83 Reg. 726/2004, (g) emergencies, (h) manufacturer/wholesaler import, (i) radiopharmaceuticals | `nl-gmw-art-40-handelsvergunning` (guides) |
| No "own use" exception in art. 40. Art. 18(6)(a) exempts only from the art. 18 licence requirement "geneesmiddelen die kennelijk zijn bestemd voor eigen gebruik door de persoon die de desbetreffende geneesmiddelen vervoert" | `nl-gnw-art-18-licence` |
| Art. 84(1): advertising for a medicine without marketing authorisation is forbidden; art. 85: public advertising of UR medicines forbidden | `nl-gnw-art-84-85-advertising` |
| Art. 61 (UR medicines only via pharmacists etc. on prescription), art. 67 (no internet prescribing to unknown patients), art. 67a (distance selling only under the rules implementing the Directive), art. 68 (off-label) | `nl-gmw-art-61-prescription`, `nl-gmw-art-67-internet-prescribing` (guides), `nl-gnw-art-67a-distance-selling`, `nl-gmw-art-68-off-label` (guides) |
| Supervision: IGJ and NVWA (art. 100). Administrative fine up to the 6th category for, among others, arts. 18(1), 40(1),(2),(4),(7), 61, 67, 67a, 68, 84, 85 (art. 101). Seizure and orders at any time (art. 115) | `nl-gnw-art-100-supervision`, `nl-gnw-art-101-fines`, `nl-gnw-art-115-seizure` |
| WED art. 1 under 1° lists Gnw arts. 18(1), 28(1), 34, 37(3), 38(1), 39(1), 40(1) and (2), 61(1), 62(1) and (3), 67 and 67a(1); intentional = misdrijf (art. 2); max 6 years, community service or 5th-category fine (art. 6(1)1°) | `nl-wed-art-1-2-6` (WED version from 22 September 2026) |
| Fine categories since 1 January 2026: 4th €27,500, 5th €110,000, 6th €1,100,000 | `rijksoverheid-fine-categories-2026` (matches the editorial note on Sr art. 23(4)) |
| IGJ: reports about webshops selling prescription medicines without a prescription: **114 in 2024; 187 from January to early October 2025**; 150 sites investigated; dozens removed; one criminal complaint | `igj-2025-online-nepapotheken` |
| SHIELD V (October 2024): Customs + IGJ intercepted 329 parcels, 60,000 pills/ampoules/tubes/sprays; most parcels small; all seized and destroyed | `igj-2025-shield-seizures` |
| IGJ acts against websites aimed at Dutch consumers (warnings, fines); EU logo supervision | `igj-toezicht-online-medicijnen` |
| Dopingautoriteit: no criminal prosecution for a positive test or use; "De Nederlandse overheid gedoogt het bezit van doping voor eigen gebruik, maar heeft de handel in dopingmiddelen verboden"; trade punishable under the WED since 1999 | `dopingautoriteit-doping-en-de-wet` |
| Lareb: anyone can report, also for internet products; not shared with doctor/pharmacist | `lareb-bijwerkingen-melden` (safety-a) |
| Report illegal websites: Landelijk Meldpunt Zorg; IGJ decides whether it handles it | `igj-online-medicijnen` (guides) |

### Legal routes (Netherlands)

| Fact | Source id |
|---|---|
| Regeling Gnw art. 3.17 conditions (doctor finds it necessary; no adequate alternative in NL; IGJ model form; supplier applies; IGJ sets quantity and period; supplier records quantity, doctor, patients, side effects); 3.17a shortage exemption only for products authorised in EU/UK/MRA; 3.18 CUP needs CBG approval | `nl-regeling-gnw-art-3-17` (version from 1 January 2026) |
| IGJ Q&A: only NL-based manufacturer/wholesaler/pharmacist/dispensing GP may apply, not intermediaries; declaration by BIG-registered doctor, patient code, valid 1 year; page 2 lists treatments and reasons; non-medical reasons not accepted; SmPC from country of origin, or IB/IMPD if not authorised there; GMP certificate if from outside EEA/MRA/UK or unauthorised there; "individuele behandeling in uiterste gevallen", IGJ "terughoudend", "uitdrukkelijk niet bedoeld om de verplichting van de handelsvergunning te omzeilen"; exemption usually per patient, 1 year; side effects recorded and reported to Lareb | `igj-qa-zonder-handelsvergunning` |
| IGJ: legal decision period 8 weeks, average about 4 weeks; may refuse | `igj-leveren-op-artsenverklaring` (guides) |
| IGJ off-label position (3 February 2026, amended 8 May 2026): four situations; no standard and none in development = "in principe niet mogelijk"; due-care requirements | `igj-2026-off-label-standpunt` |
| Pharmacy preparation: raw materials must meet Ph. Eur. (or member-state/US/Japanese pharmacopoeia); a raw material not in a pharmacopoeia in use "kan daarom niet zomaar worden gebruikt"; the pharmacist judges the DMF | `igj-eigen-bereidingen-apotheek` |
| CJEU Abcur: magistral exception only with a prescription issued before preparation for a previously identified patient | `cjeu-2015-abcur` |
| CBG CUP criteria (group, chronic/seriously debilitating/life-threatening; no satisfactory registered treatment; MA application filed or trials ongoing); manufacturer applies | `cbg-compassionate-use-criteria` (guides; this group's duplicate `cbg-compassionate-use-programma` was removed by the fact-checker) |
| CBG list of approved CUPs (page sort date 10 July 2026): none of the site's peptides | `cbg-compassionate-use-list` (retatrutide group); our own text check 22 October 2026, see log |
| CCMO: voluntary; METC approval; stop at any time without a reason; insurance with limits (4 years; foreseen harm not covered); phase 1–2 usually no improvement; how to find studies | `ccmo-achtergrond-meedoen`, `ccmo-ivo-meedoen` |
| ClinicalTrials.gov: 0 BPC-157 / TB-500 / thymosin / other experimental-peptide trials with a Dutch site; 2 retatrutide trials with Dutch sites (NCT06383390 active not recruiting, NCT07165028 recruiting). Belgium: 0 BPC-157; 1 completed tesamorelin trial (NCT00608023, 2008); 2 retatrutide | `ctgov-nl-be-peptide-search-2026-10-22` |

### EU

| Fact | Source id |
|---|---|
| Dir. 2001/83 art. 1(2) two definitions; art. 2(2) doubt rule; art. 3(1)-(2) magistral/officinal formula; art. 5(1) special needs; art. 6(1) MA requirement; art. 40/46(f) manufacturing authorisation + GMP incl. active substances; art. 51 batch release by QP; art. 54a safety features; art. 85c online sale + common logo (products must comply with destination-state law per art. 6(1)); art. 86-88 advertising; art. 102, 104 pharmacovigilance | `eu-directive-2001-83` (shared; texts read in the 1 January 2025 consolidation, see conflicts) |
| Reg. 726/2004 art. 3 + Annex I (mandatory centralised scope), art. 83 compassionate use | `eu-regulation-726-2004` (consolidation 28 January 2022) |
| Reg. 536/2014 art. 28-29 (consent, withdrawal without detriment or reason, no undue influence incl. financial) | `eu-regulation-536-2014` |
| CTR in application 31 January 2022; CTIS mandatory for new applications from 31 January 2023; transition ended 31 January 2025; public searchable website | `ema-clinical-trials-regulation` |
| FMD applies from 2 January 2013; art. 85c at the latest one year after the logo implementing act (published 25 June 2014); safety features from 9 February 2019 | `eu-directive-2011-62`, `eu-regulation-699-2014`, `eu-regulation-2016-161` |
| GMP rules incl. Annex 1 (sterile), fully applicable since 25 August 2024 | `eudralex-volume-4-gmp` |
| CJEU: Van Bennekom (presentation broad; impression incl. implication; form strong but not conclusive evidence; paras 17-19, 22); Hecht-Pharma (appreciable effect; doubt rule only once status established); D. and G. (case-by-case factors para 42; beneficial-effect requirement); Damgaard (independent third party can be advertising; purpose decides); Commission v Poland (art. 5(1) strict, medical reasons only, not financial; paras 31-38) | `cjeu-1983-van-bennekom`, `cjeu-2009-hecht-pharma`, `cjeu-2014-d-and-g`, `cjeu-2009-damgaard`, `cjeu-2012-commission-v-poland` |
| Reform: proposals 26 April 2023 (COM(2023)192 directive, COM(2023)193 regulation); political agreement 11 December 2025; Council positions published 1 October 2026; status "Awaiting Parliament 2nd reading"; indicative plenary 23 November 2026; EMA expects entry into force in 2026, transition to 2028 | `ep-oeil-2023-0132-cod`, `ep-oeil-2023-0131-cod`, `ema-pharma-reform-page` (legal-b ids; re-fetched by us on 22 October 2026, unchanged) |

### Belgium

| Fact | Source id |
|---|---|
| Law of 25 March 1964 (now "op de geneesmiddelen voor menselijk gebruik"; Justel text updated to 4 June 2026): art. 1 definition; art. 6 §1 MA requirement; art. 6quater §1 1°–5° exceptions (special needs; compassionate use; medical need programmes; pharmacist import of a medicine authorised in country of origin with prescription + prescriber declaration; emergencies), §3 magistral/officinal/investigational; art. 9 advertising; art. 12quater own-use medicines from another member state if lawfully obtained there; art. 16 penalties incl. §1 2° buying/possessing non-conforming medicines | `be-medicines-law-1964` (shared), `be-medicines-law-1964-art-1`, `-art-6quater`, `-art-9`, `-art-12quater`, `-art-16` |
| FAMHP postal seizures: first time warning, case closed; second time out-of-court settlement ≥ €400; exceptionally to prosecutor; antibiotics zero tolerance; medicines from outside the EEA "never permitted"; within EU only authorised + lawfully obtained; import for a patient only via a Belgian pharmacist with prescription + physician statement; product = medicine if pharmacologically active substance or presented as medicine, "not a valid argument" that sold elsewhere as supplement | `famhp-postal-seizure-qa` (page last updated 23 July 2024) |
| FAMHP side-effect reporting at famhp.be/en/side_effect; anyone; used only for scientific evaluation | `famhp-adverse-reaction-qa` |
| FAMHP CU/MNP programme list (RD 25 April 2014): none of the site's peptides | `famhp-compassionate-use-medical-need` |
| Anti-doping is a community matter: Flemish decree art. 1; cooperation agreement of the Flemish, French and German-speaking Communities and the Common Community Commission; Flemish decree covers organised recreational sport at any level, separate discipline for non-elite athletes | `be-flemish-antidoping-decree-2012`, `dopinglijn-regelgeving` |
| More testing at lower levels in Belgium, including gyms; refusal → 2–4 year ban valid in NL | `dopingautoriteit-controles-belgie` (legal-b) |

### Research use only / US

| Fact | Source id |
|---|---|
| "For Research Use Only. Not for use in diagnostic procedures." is a US labelling statement for IVD products in the lab research phase (21 CFR 809.10(c)(2)(i)) | `ecfr-21-809-10` |
| Intended use = objective intent of the person responsible for labelling, shown by expressions, design/composition, circumstances of distribution (21 CFR 201.128, as amended 2021) | `ecfr-21-201-128` |
| FDA warning letters 2024–2026 to "research use only" peptide sellers: disclaimers contradicted by website evidence; unapproved new drugs; bacteriostatic water itself a drug (735067) | `fda-warning-letters-index` (legal-b). We also read letter 721806 (31 March 2026) ourselves: "Despite statements on your product labeling marketing your products for 'Research Use Only,' and 'not intended for human consumption, medical use, or veterinary use,' evidence obtained from your website establishes that your products are intended to be drugs for human use." It is not cited directly because its URL and text name the seller. |
| Three Australian products sold as retatrutide: 51.3%, 165.0%, 190.0% of label; sterility and endotoxin not tested | `piatkowski-2026-retatrutide-product-testing` (retatrutide group; PMC full text re-read 22 October 2026) |
| Pharmacists' editorial on "for research purposes" semaglutide/tirzepatide sales | `belcourt-2025-research-purposes` (tirzepatide group; PubMed record re-read) |
| FDA personal importation | `fda-personal-importation` (legal-b) |

---

## 2. Verification log

- **wetten.overheid.nl** (curl, HTML converted to text and read article by article): Geneesmiddelenwet
  BWBR0021505 (page shows "Geldend van 09-09-2025 t/m heden"), arts. 1, 18, 40, 61, 67, 67a, 68, 84, 85,
  100, 101, 115; Wet op de economische delicten BWBR0002063 ("Geldend van 22-09-2026"), arts. 1, 2, 6; Wetboek
  van Strafrecht BWBR0001854 art. 23 (editorial notes: amounts per 1 January 2026); Regeling Geneesmiddelenwet
  BWBR0022160 (found via the official SRU service; "Geldend van 01-01-2026"), arts. 3.17, 3.17a, 3.18. The
  guides group's Gnw ids (arts. 1, 40, 61, 67, 68) were checked against the same text and are accurate.
- **rijksoverheid.nl**: fine categories page (table "Maximale geldboetes sinds 1 januari 2026"); Q&A on checking
  online sellers. The first URL we found for the Q&A contained the token "kopen" and failed
  `check-no-commerce`; we switched to the `/documenten/vraag-en-antwoord/...` URL of the same page (same text).
- **igj.nl**: online medicijnen; toezicht op online medicijnen; illegale handel; news 30 October 2025
  (nepapotheken); news 28 February 2025 (SHIELD); Q&A geneesmiddelen zonder handelsvergunning (metadata modified
  August 2026); leveren op artsenverklaring (modified 6 February 2026); standpunt off-label (3 February 2026,
  amended 8 May 2026); eigen bereidingen apotheek (8 July 2025). The 2023 IGJ factsheet "geneesmiddelen op
  artsenverklaring" returned 404; not used.
- **cbg-meb.nl**: CUP page; approved-CUP list (text-searched for every peptide on the site: none; the only hit,
  "nad", was the word "nadere").
- **ccmo.nl**: participant background page and IVO page.
- **dopingautoriteit.nl**: doping en de wet; positieve test; eigen kracht; controles in België (all fetched).
- **lareb.nl**: reporting page re-read.
- **EUR-Lex**: returns HTTP 202 with an empty body to scripts (bot protection). Texts were read through the
  Publications Office CELLAR resolver (`publications.europa.eu/resource/celex/<CELEX>` with an HTML Accept header),
  which returns the same document: Directive 2001/83 consolidations 01.01.2022 and 01.01.2025, Regulation
  726/2004 consolidation 28.01.2022 (no later consolidation resolved), Regulation 536/2014, Directive 2011/62,
  Implementing Regulation 699/2014, Delegated Regulation 2016/161, and the judgments 227/82, C-140/07,
  C-358/13 & C-181/14, C-421/07, C-185/10, C-544/13 & C-545/13 (also C-143/06, C-319/05, C-308/11, C-316/09,
  C-27/08, C-276/15, C-112/89 read for context; not cited). ECLI numbers were not in the retrieved texts and are
  deliberately not given.
- **ema.europa.eu**: Clinical Trials Regulation page; reform page. **europarl (OEIL)**: both procedure files
  re-fetched on 22 October 2026 (status unchanged since legal-b's 20 October check).
- **health.ec.europa.eu**: EudraLex Volume 4 page.
- **ejustice.just.fgov.be**: Belgian medicines law (Latin-1 page, decoded; "tekstbijwerking tot 04-06-2026"),
  arts. 1, 6, 6quater (current and "toekomstig recht" version; the future version differs only in amendment
  markers we could see, not in the routes described), 9, 12quater, 16, 16bis; and the law of 5 March 1952 on
  opdecimes (amended with effect from 1 February and 1 September 2026, now referring to the new Criminal Code).
- **famhp.be**: every page, including the home page, serves a CAPTCHA ("What code is in the image?") to scripted
  requests and to WebFetch. We did not try to solve it. We read the Internet Archive's latest complete snapshots
  instead: postal-seizure Q&A (snapshot 8 May 2026; the 17 October 2026 snapshot captured only the CAPTCHA;
  page says "Last updated on 23/07/2024"), adverse-reaction Q&A (18 June 2026), compassionate use / medical need
  (20 September 2026). The live URLs are what the sources cite; the method is stated in each source note.
- **dopinglijn.be**: regulations page; Flemish decree PDF (pdftotext).
- **eCFR**: the HTML pages redirect scripts to an "unblock" page; text read through the eCFR versioner API
  (as of 1 October 2026) for 21 CFR 201.128 and 809.10; hierarchy URLs from the structure API.
- **ClinicalTrials.gov API v2**: searches run 22 October 2026 (see `ctgov-nl-be-peptide-search-2026-10-22`).
- **PubMed**: metadata for PMID 42559975 (Piatkowski) and 39285774 (Belcourt) re-checked; Piatkowski numbers
  re-read in the PMC full text.
- **Wikimedia Commons**: six images registered with `npm run media:commons` (licences: CC0, CC BY 2.0,
  CC BY-SA 3.0, CC BY-SA 4.0 ×3); thumbnails viewed before registering. Rejected: "Vivaldigebouw 2019.10.24 (1)"
  (flags with company logos), "Pipetting.jpg" (identifiable person; a plate-only photo was preferred).
- **Validator**: `npx tsx scripts/validate-content.ts` → 0 errors. Note for other agents on Windows: `--only
  legal/nl` matches nothing (paths use backslashes) and silently reports 0 warnings; filter by file name
  (`--only nl.mdx`) instead.
- **Commerce check**: `npx tsx scripts/check-no-commerce.ts` passed after the URL fix above.

---

## 3. Conflicts and how we resolved them

1. **The brief's figure "about 200 reports of illegal online medicine sales in 2024, double the year before".**
   The IGJ's own figures are 114 reports in 2024 and 187 from January to early October 2025, and they concern
   webshops selling prescription medicines without a prescription (ADHD medicines, opiates, painkillers,
   sleeping pills), not peptides. We used the IGJ figures, labelled as such.
2. **"Doping is not a crime for athletes in NL."** Confirmed for use and positive tests (Dopingautoriteit);
   possession for own use is tolerated; trade is a crime under the WED. We say exactly that.
3. **Personal import into NL.** The text of art. 40(2) has no own-use exception, and art. 18(6)(a) only lifts the
   importer's licence for travellers carrying their own medicines. Dutch Customs' own page (douane.nl, not on the
   allowlist, so not cited) says medicines ordered online are seized unless the importer has a Farmatec licence.
   The IGJ's SHIELD news confirms parcels are seized and destroyed. We found no official statement or published
   case of fines against individuals for small own-use imports. The page says this as an open question
   (`<Callout type="uncertain">`), and states the Dopingautoriteit's tolerance statement for doping substances.
4. **IGJ enforcement against a peptide webshop (August 2026).** IGJ news of 24 and 31 August 2026 describe an
   order to stop selling retatrutide, tirzepatide and semaglutide, and a penalty of €10,000 per day up to
   €200,000 after the order was breached; the IGJ also mentions several reports of harm after retatrutide use.
   Both URLs and texts name the seller and related websites, so, following the semaglutide group's precedent
   (CONTENT-GUIDE §1), we did not cite them. The reviewer may want to decide whether an anonymised mention with a
   citation is acceptable.
5. **Directive 2001/83 consolidation.** The shared id `eu-directive-2001-83` points to the 01.01.2022
   consolidation; a 01.01.2025 consolidation exists (adds Directive 2022/642 and Regulation 2023/1182, Northern
   Ireland/Cyprus/Ireland/Malta derogations). We compared the articles we cite (1, 2, 3, 5, 6, 40, 46, 51, 54a,
   85c, 86-88, 102, 104): no change. We reused the shared id; `jurisdictions.yaml` links the 2025 consolidation.
6. **"Functional" medicine status of animal-only peptides.** Hecht-Pharma and D. and G. limit the functional
   definition (appreciable effect; beneficial-effect requirement). We did not claim that BPC-157 and similar are
   medicines by function; we say the presentation test usually decides, flagged as our reading.
7. **WADA Code trafficking article.** We wanted to state that trafficking is also an anti-doping rule violation;
   the WADA PDF returned HTTP 202/empty to scripts and WebFetch, so the claim was dropped (the NL page links to
   the sport-and-doping page instead).
8. **Belgian criminal fines.** Article 16 states amounts in euros, but Belgian fines are multiplied by
   "opdecimes", and that law was amended with effect from 1 September 2026 with reference to the new Criminal
   Code of 29 February 2024. We give no amounts from art. 16; only the FAMHP's settlement practice (≥ €400).
9. **"Europe" vs "EEA" (Belgium).** The FAMHP rule is "outside the EEA"; we use EEA (defined in the glossary),
   because "outside Europe" would wrongly suggest that parcels from the UK or Switzerland are allowed.

---

## 4. Open questions for the legal reviewer

1. Does "in voorraad hebben" (art. 40(2) Gnw) apply to a private person holding a few vials for own use? The text
   does not say; the Dopingautoriteit says possession of doping for own use is tolerated. We say the text is
   silent.
2. Has the IGJ (or the OM) ever fined or prosecuted an individual for a small own-use import of an unauthorised
   medicine? We found nothing. Please confirm or correct the uncertain callout on `/legal/nl`.
3. Belgian art. 16 §1 2° (buying/possessing non-conforming medicines): how is it applied to individuals after
   the 2026 Criminal Code reform, and what are the current amounts after opdecimes?
4. The "presentation" analysis for research-labelled peptides (`/legal/research-use-only`, "Where the law is less
   clear"): is our reading of Van Bennekom/Hecht-Pharma/D. and G. fair? Are there Dutch or Belgian court rulings
   on research-labelled peptides we should cite?
5. Belgian quality rules for magistral preparations of peptides (raw-material requirements): not researched in
   depth; the BE page says so.
6. Damgaard as the explanation of "why this site sells nothing": please confirm the framing is accurate for
   Dutch law (art. 1(1)(xx) Gnw purpose test).
7. Should the anonymised IGJ August 2026 enforcement against a peptide webshop be mentioned (see conflict 4)?

---

## 5. Validator warnings we did not fix (and why)

- `related:` warnings for `legal/sport-and-doping`, `legal/whats-changing` and `legal/us`: those pages belong to
  group legal-b and do not exist yet. They will clear when legal-b's pages land.
- No guardrail warnings remain. We avoided the word "protocol" (professional "standards" instead) and
  "proven".

---

## 6. Notes on files outside our list

- `src/data/media.yaml`: six entries added by the Commons tool; `pharmacy-mortar.sources` set to
  `[igj-eigen-bereidingen-apotheek]` (its caption says pharmacies may still make some medicines).
- `src/data/heroes.yaml`: six route → media lines added with the Edit tool.
- `src/i18n/en/media.json`: alt text and captions for the six images added with the Edit tool.
- We reuse source ids from `src/data/sources/guides.yaml`, which was uncommitted when we started (group guides).
  If that group renames or removes `nl-gmw-art-*`, `igj-online-medicijnen` or `igj-leveren-op-artsenverklaring`,
  our pages will fail validation.

---

## 7. Fact-check log (independent fact-checker, 22 October 2026)

Every source in `src/data/sources/legal-a.yaml` was re-fetched and read against the claim it supports; reused ids
from other groups were checked where our pages rely on them. Method notes: wetten.overheid.nl and ejustice (Latin-1)
fetched with curl and read article by article; EU acts and CJEU judgments read through the CELLAR resolver
(`publications.europa.eu/resource/celex/<CELEX>`); FAMHP pages read in the Internet Archive (`id_` snapshots of 8 May,
18 June and 20 September 2026); eCFR read through the versioner API (needs `--compressed`); PubMed metadata via the
PubMed tool, Piatkowski numbers from the PMC article page; ClinicalTrials.gov API v2 re-run with one name per query;
Wikimedia Commons licences checked through the Commons API (extmetadata).

### Checked and confirmed (no change needed)

- **Geneesmiddelenwet** (version from 9 September 2025): arts. 1(1)(b), (hh), (xx), (ijij); 18(1), (5), (6)(a);
  40(1)-(3); 61(1), (9); 67; 67a; 68; 84; 85; 100; 101 (sixth category; 40(1), (2), (4), (7), 84 and 85 listed); 115.
- **WED** (from 22 September 2026): art. 1 under 1° lists Gnw 40(1)-(2); art. 2(1); art. 6(1)1°.
- **Fine categories** (Rijksoverheid table "sinds 1 januari 2026"): 4th €27,500, 5th €110,000, 6th €1,100,000.
- **Regeling Gnw** arts. 3.17, 3.17a, 3.18 (from 1 January 2026).
- **IGJ**: online-medicines supervision (warnings, fines, EU logo); nepapotheken news (114 reports in 2024, 187 from
  January to early October 2025, 150 sites investigated); SHIELD V (329 shipments, 60,000 units, all seized and
  destroyed); illegal trade (Customs, NVWA, OM); Q&A on supply without a licence (NL-based applicant only, BIG doctor,
  patient code, 1 year, IB/IMPD if no SmPC, GMP certificate rules, non-medical reasons refused, "uiterste gevallen",
  "terughoudend", "niet bedoeld om ... te omzeilen", side effects to Lareb); doctor's declaration page (3 steps,
  8 weeks, about 4 on average); off-label position page and its May 2026 PDF; pharmacy preparation page
  (pharmacopoeia rule, "kan daarom niet zomaar worden gebruikt", the pharmacist judges the DMF); online-medicines page
  (advice, risks, Landelijk Meldpunt Zorg).
- **CBG** compassionate-use page (three criteria; manufacturer applies) and approved-CUP list (modified 10 July 2026;
  none of the site's peptides).
- **CCMO** pages (voluntary; METC; stop without a reason; insurance limits: four years, foreseen harm not covered;
  phase 1-2 usually no improvement; travel costs only; Onderzoekmetmensen.nl).
- **Dopingautoriteit** (doping en de wet; controles in België; Eigen Kracht; positieve test) and **Lareb** (anyone can
  report, also for someone else, also internet products; reports not shared with the doctor or pharmacist).
- **EU law**: Directive 2001/83 (2025 consolidation) arts. 1(2), 2(2), 3(1)-(2), 5(1), 6(1), 40, 46(f), 51, 54a,
  85c (logo "enabling the identification of the Member State"), 86, 87, 88, 102, 104; Regulation 726/2004 art. 3,
  Annex I, art. 83; Regulation 536/2014 arts. 28-29; Directive 2011/62 art. 2(2); Regulation 699/2014 (OJ L 184,
  25.6.2014); Regulation 2016/161 art. 50.
- **CJEU**: Van Bennekom paras. 17-19 and 22; Hecht-Pharma ruling points 1-3; D. and G. para. 42 and ruling;
  Damgaard paras. 19-24 and ruling; Commission v Poland paras. 29-38; Abcur ruling point 1. Chambers and dates match.
- **EMA** Clinical Trials Regulation page (31 January 2022/2023/2025; CTIS public website); **EMA** reform page
  (political agreement 11 December 2025; entry into force expected in 2026; transition to 2028); **OEIL** 2023/0132
  and 2023/0131 (proposal 26 April 2023; Council position 1 October 2026; "Awaiting Parliament 2nd reading";
  forecast 23 November 2026, which OEIL labels "Indicative plenary sitting date, 1st reading"; the page says only
  "an indicative date for the plenary vote", which is accurate); **EudraLex** Volume 4 (Annex 1 fully applicable
  since 25 August 2024).
- **Belgian law** (Justel, updated to 4 June 2026): arts. 1 (definition), 6quater §1 1°-5° and §3, 9 §1, 12quater,
  16 §1 2° and §3. **FAMHP**: postal-seizure Q&A (last updated 23/07/2024: warning first, then a settlement of at
  least €400, antibiotics zero tolerance, 14-day registered letter, ".be" sites only, "never permitted" from outside
  the EEA, import only through a Belgian pharmacist); adverse-reaction Q&A; compassionate use / medical need list
  (last updated 17/09/2026; no site peptide; pasireotide is listed but is not on this site).
- **Flemish decree** of 25 May 2012 (BS 12 July 2012 p. 38313; art. 1; art. 2, 6° and 9°; Title 6 chapters for
  elite and non-elite athletes) and the Dopinglijn regulations page (cooperation agreement of the four bodies).
- **US**: 21 CFR 201.128 (as amended 86 FR 41401) and 809.10(c)(2)(i); FDA personal importation page; one FDA warning
  letter of 24 August 2026 (MARCS-CMS 735067) read to confirm "unapproved new drugs" and "bacteriostatic water ... is
  a drug" (not cited directly: it names the seller).
- **PubMed**: PMID 42559975 (Piatkowski T, Craven A, Cornell S, Ferris J; Drug Alcohol Rev 2026;45(6):e70231;
  doi 10.1111/dar.70231; Letter) and PMID 39285774 (Belcourt J, Ly P, White CM; Ann Pharmacother 2025;59(5):485-490;
  doi 10.1177/10600280241277551; Editorial) match the registry. Piatkowski: 51.3%, 165.0% and 190.0% of a 10 mg
  label, NATA-accredited lab, sterility and endotoxin not assessed.
- **WGBO** (Burgerlijk Wetboek 7, version from 8 October 2026) arts. 448 and 453.
- **WADA 2026 Prohibited List** PDF (now reachable with a browser user agent): S0 wording read.
- **Images**: the six Commons files are CC0, CC BY 2.0, CC BY-SA 3.0 and CC BY-SA 4.0 (three files), as registered;
  "Zuidas Vivaldi 16" is described on Commons as the EMA building on Domenico Scarlattilaan; thumbnails viewed; no
  products, vials, needles or identifiable people; the alt texts match the pictures.
- **jurisdictions.yaml**: every URL returns HTTP 200 (EUR-Lex returns 202 to scripts; text read via CELLAR).

### Errors found and fixed

1. **Damgaard facts overstated** (`/legal/nl` fold; source note). The page said the journalist "had no link with
   the maker or the seller". The judgment (paras. 10-12) says he had earlier prepared the product's information
   material; he *argued* that he had no interest in the maker or its sales, and he received no payment. Rewritten as
   his claim, and the note corrected. The diagram step "That kind of pointer can turn information into promotion" was
   softened to what para. 19 says (such information can lead people to get the product).
2. **ClinicalTrials.gov claim incomplete** (`/legal-routes` KeyNumber "counted"; source note). The original search
   left out elamipretide (SS-31, a planned compound page). It had three trials with a Dutch site (NCT02914665 and
   NCT02788747, phase 2, completed 2017; NCT05162768, phase 3, completed December 2024) and one with a Belgian site.
   None is running, so "none running" stays true; the wording now says so and names the exception.
3. **Safety-code date not true "in every EU country"** (`/legal/eu` TimeStrip). Regulation 2016/161 art. 50 let
   Belgium, Greece and Italy defer to 9 February 2025 at the latest. TimeStrip detail and row text, a fold sentence
   and the source note now say so.
4. **WADA S0 paraphrase too broad** (`/legal/be`). S0 covers non-approved substances "not addressed by any of the
   subsequent sections of the List". Qualifier added.
5. **Off-label row implied a free alternative** (`/legal-routes` compare row 2). "Only within professional
   standards, or after talking with the pharmacist" read as two equal options. Gnw art. 68 and the IGJ position make
   pharmacist consultation the rule only while a standard is in development, or in rare individual cases without a
   standard. Row rewritten; the four-situations diagram now mentions the rare individual exception from the IGJ PDF
   (it said only "In principle, no").
6. **Unsourced claim about raw material** (`/legal-routes` compare row 4 and Lead). "Raw material of known quality,
   which is rarely available for these peptides" was in no cited source. Replaced with the IGJ's own words (a raw
   material not in a pharmacopoeia "cannot simply be used"). Same fix on `/legal/be` ("rarely fit").
7. **Belgium vs Netherlands comparison wrong** (`/legal/be` fold). "The Belgian law names buying and holding as
   offences, not only selling" implied Dutch law names only selling; Gnw art. 40(2) names keeping a stock. Now: the
   Belgian law names buying and possessing; the Dutch law does not name buying.
8. **Confusing compare row** (`/legal/be`). "Can you import a medicine yourself ...? From another EU country: No"
   contradicted art. 12quater (own-use medicines lawfully obtained in another member state may be brought or sent).
   Row removed; the pharmacist-import rule is now a sentence under the table.
9. **Supply penalty overstated** (`/legal/be`). "Heavier penalties than for buying" for any passing on: art. 16 §1 2°
   fines selling as well as buying; the prison range (§3 4°) applies to selling or supplying *knowing* the product
   does not conform. Rewritten.
10. **Criminal fine maximum incomplete** (`/legal/nl`). WED art. 6(1) allows a fine one category higher when the
    goods are worth more than a quarter of the maximum. Added.
11. **"The parcel is seized" stated as certain** (`/legal/be` Lead and step 1). Now "a parcel that is found is
    seized", and step 1 states the FAMHP's actual test (active substance, or presented as a medicine).
12. **RUO compare overgeneralised SHIELD** ("Customs and the IGJ seize and destroy such parcels"). SHIELD was about
    medicines in general; now "parcels with illegal medicines", with Gnw art. 115 added.
13. **Belcourt described as a study** (`/legal/research-use-only`). It is an editorial (PubMed article type); now
    "Three pharmacists wrote an editorial".
14. **WGBO art. 453 paraphrase** (`/legal-routes`). "Need not prescribe what you ask for" is not in the text; now
    framed as a consequence of acting in line with professional standards.
15. **Duplicate source**: `cbg-compassionate-use-programma` (this file) had the same URL as
    `cbg-compassionate-use-criteria` (guides, already fact-checked). Removed here; `/legal-routes` cites the guides id.
16. **Source metadata dates**: `igj-qa-zonder-handelsvergunning` (the "22 March 2022" date belongs to a form; page
    metadata issued 11 August 2026, modified 20 August 2026); `igj-illegale-handel` (year 2025, dates added);
    `rijksoverheid-online-aanbieder-controleren` (year 2025, modified 30 September 2025); `famhp-adverse-reaction-qa`
    (year 2023, "Last updated on 13/11/2023"); `famhp-compassionate-use-medical-need` ("Last updated on 17/09/2026").
17. **Glossary**: `economic-offences-act` said the WED turns breaches "into crimes" (only intentional ones are
    crimes; the rest are minor offences); `investigators-brochure` merged the IB (for trial doctors) and the IMPD (for
    regulators) into one "file for doctors"; two redundant case-variant aliases removed.

### Other improvements

- `/legal/eu`: the exceptions Lead no longer says "three" (magistral preparation is also outside the licence rule);
  one sentence on pharmacy preparation added (Directive art. 3(1), Abcur); compassionate use now says it is for
  medicines eligible for an EU-wide licence (Reg. 726/2004 art. 83(1)).
- `/legal/index`: the section map now also lists Germany, the UK, the US and What's changing (planned legal-b routes;
  the description already promised them).
- `/legal-routes`: one honest sentence that the routes are narrow by design (Commission v Poland para. 32) and that
  this is a real cost for people whom approved treatments did not help, with a link to the planned reform page.
- `/legal/research-use-only`: the "keep the batch number" tip now says why (reporting) and cites the FAMHP Q&A.
- `/legal/be`: InDetail title "Buying medicines online in Belgium" renamed to avoid a commerce token in a label.
- B1: about 20 sentences over 22 words were split (article 40 list, compassionate use, Belgian routes, FDA step,
  presentation step; the IGJ conditions became a list).

### Open for the legal reviewer (in addition to section 4)

8. Is "So a doctor does not have to prescribe something just because you ask" a fair reading of WGBO art. 453 and
   the professional standard?
9. `/legal/be` Compare: "From outside the EEA ... 'Never permitted', says the FAMHP". The FAMHP sentence sits in the
   answer about medicines sent by family members from third countries; we read it as the general rule (it matches the
   rest of the Q&A). Please confirm.

### Validator

`npx tsx scripts/validate-content.ts`: 0 errors overall. The only remaining warnings on these pages are `related:`
routes owned by legal-b (`legal/sport-and-doping`, `legal/whats-changing`, `legal/us`).
