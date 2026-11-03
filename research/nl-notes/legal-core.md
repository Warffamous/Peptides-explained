# Notes: group legal-core (Dutch site, 27 October 2026)

Pages written (all new, all `reviewed_by: pending-legal-review`, `last_reviewed: 2026-10-27`, `reading_level: B1`):

| Page | File | Method |
|---|---|---|
| `/nl/legal/` | `src/content/pages/nl/legal/index.mdx` | `adapted` (from `src/content/pages/en/legal/index.mdx`) |
| `/nl/legal/nl/` | `src/content/pages/nl/legal/nl.mdx` | `native` (base: snapshot `legal/nl.mdx` of 23 October, re-checked against `research/nl/nl-law.md`) |
| `/nl/legal/eu/` | `src/content/pages/nl/legal/eu.mdx` | `native` (base: snapshot `legal/eu.mdx`, re-checked against `research/nl/eu-status.md`) |
| `/nl/legal/be/` | `src/content/pages/nl/legal/be.mdx` | `native`, short notes (model: `en/legal/ireland-and-new-zealand.mdx`; base: snapshot `legal/be.mdx`, re-checked against `research/nl/be-notes.md`) |

Other files: `src/i18n/nl/glossary/nl-legal-core.json` (8 new entries). **No new sources**: every citation reuses a
registered id (the 23 October Dutch and EU ids and the merged `nl-research-*.yaml` ids), so
`src/data/sources/nl-legal-core.yaml` was not created (an empty source file would only add a file that holds nothing).
No allowlist change was needed (every cited host is already on `config/link-allowlist.json`).

Validator: `npx tsx scripts/validate-content.ts --only pages/nl/legal/` → 0 errors, 0 warnings (the "related does not
exist (yet)" warnings disappeared once the other groups' pages landed); `--only nl-legal-core` → 0/0. Residue:
`npx tsx scripts/check-locale-residue.ts --only pages/nl/legal/ --details` and `--only nl-legal-core` → 0 error,
0 frame, 0 warn. A full validator run shows 0 errors and nothing in my files.

**Checked again today, myself** (not only taken from the research; CELLAR resolver with an `application/xhtml+xml`
Accept header, Dutch and English language versions): Directive 2001/83/EC consolidation of 1 January 2025, arts. 1(2),
2(2) (doubt rule), 3(1) (formula magistralis), 5(1), 6(1), 46(f) (GMP for active substances), 54a, 85c, 86(1)–(2),
87(1)–(3), 88(1), 104(1), 107a(1); Regulation 726/2004 (consolidation 28 January 2022) arts. 3, 13(1), 83 and Annex I
(biotech, ATMP, new active substances for AIDS, cancer, neurodegenerative disease, diabetes, autoimmune and viral
disease, orphans); Regulation 536/2014 (consolidation 5 December 2022) arts. 28(1)(a)–(h) and 29 (withdraw "zonder
daardoor enig nadeel te ondervinden en zonder zich nader te hoeven verklaren"); Implementing Regulation 699/2014 art. 5
("Zij is van toepassing met ingang van 1 juli 2015"); Delegated Regulation 2016/161 art. 50 (9 February 2019; Belgium,
Greece, Italy "uiterlijk vanaf 9 februari 2025"); CJEU C-185/10 (Commission v Poland) paras. 34–35. All say what the pages
cite them for.

---

## 1. `legal/nl` (native)

**What came back from the saved material (snapshot of 23 October):** the whole structure (Lead + `<Compare>`, "what
counts as a medicine" with the two-test diagram and the article 1 fold, the article 40 chain, the article 18 fold,
prescriptions and internet prescribing, advertising with the purpose-test diagram and the Damgaard fold, medicines from
the internet with the two IGJ KeyNumbers (114 and 187), the enforcement map and penalties fold, "what this means for
you" with the SHIELD V KeyNumber (329) and the uncertainty callout, sport, where to report). Same diagram ids.

**Re-checked and rewritten for 27 October (nl-law.md and its fact-check):**
- New TL;DR (6 pairs), in the format of the current English country pages; chapters as on `en/legal/uk.mdx`
  (advertising, enforcement, controlled drugs → Opiumwet, the legal route → artsenverklaring).
- Gnw version (geldend van 9 september 2025, still in force on 27 October 2026; `nl-gnw-versie-informatie-2026-10-27`).
- "Research use only": Customs' "Onderzoeksdoeleinden spelen dan geen rol" (fact 27/31), the IGJ/NVWA "disclaimers"
  line (NPS, labelled as not about peptides), Customs' handbook tests (farmaceutische vorm, werkzame stof; the class of a
  peptide vial stays unknown, UNRESOLVED 5.4).
- New fold "Supplementen en cosmetica" (facts 33–34: NVWA, Cosmetics Regulation art. 2(2)).
- New section "Zelf invoeren uit het buitenland" (facts 38–43): no own-use exception in art. 40; the traveller rule of
  art. 18(6)(a) and Customs' traveller page; a parcel is not carried by you (Rb Den Haag 2019; handbook ch. 5); active
  substances by parcel: never, recipient a suspect (ch. 13); the artsenverklaring as the legal route; the minister's
  "Import van geneesmiddelen is alleen toegestaan als een handelsvergunning is verleend" (5 October 2026); fold with
  Customs practice (held, reported to the IGJ or seized; internal rules not public; release NOT mentioned, nl-law §4
  conflict 4 and §6.4) and the 2019 and 2020 court cases.
- The saved Lead "The parcel can be stopped and destroyed. We found no fines reported for people buying for
  themselves" is replaced by the sourced import section; the uncertainty callout stays (nl-law §4 conflict 9), now
  noting that natural persons were fined in 2026 for advertising, not for import.
- New section "Legale wegen naar een behandeling": a diagram of Regeling Gnw art. 3.17 and the IGJ pages (8 weeks legal
  term, about 4 weeks on average; only a Dutch manufacturer, wholesaler, pharmacist or dispensing GP may apply; IGJ
  quotes), links to all seven fixed anchors of `/nl/legal-routes/` (checked in that file: all seven headings exist).
- New section "De Opiumwet geldt hier niet" (fact 35; the English UK page's controlled-drugs section is its model).
- Advertising rewritten for the 2026 case law (brief "Added after step 1", item 1; fact 17a): Raad van State
  25 February 2026, Rb Amsterdam 10 April 2026, Rb Noord-Nederland 21 April 2026, IGJ publishes fines since 1 January
  2026; KeyNumber € 3.750 (natural person); the brief's **publisher line, verbatim**, cited to
  `nl-gnw-art-84-85-advertising` and `nl-rvs-2026-1072-publieksreclame-website` (**owner decision**: the brief calls it
  an owner decision; I used it on legal/nl because the snapshot's section "Advertising, and why this site sells
  nothing" held the old line); a fold on art. 83 (what is not advertising) that does not rely on art. 83(d).
- Enforcement map: NVWA row now also supplements and cosmetics (nl-law §2 item 4); Customs row now "strafbare feiten
  opsporen" (art. 116) and no longer "contents can be seized and destroyed" as a general rule (§2 item 3). Two new
  KeyNumbers: € 1.100.000 (maximum, sixth category since 1 January 2026) and € 150.000 (normbedrag of the VWS fining
  policy, with the 2,5% factor). Penalties fold: VWS policy (stars not mentioned; "kan verdubbelen" per the fact-check),
  WED misdrijf/overtreding, advertising as overtreding after two fines in 24 months.
- New fold "Wat de overheid in 2025 en 2026 deed": SHIELD VI (Europol; not Dutch figures), IGJ/NVWA 43 NPS sites
  (not peptides), the cabinet's joint approach. The August 2026 IGJ order and penalty against a peptide seller are
  **not mentioned** (brief item 5; nl-law fact 28 and §6.1): enforcement is described only through the minister's
  answer ("websites uit de lucht laten halen en boetes opleggen").
- Medicines from the internet: IGJ/CBG warning of 3 September 2025, IGJ stolen-pens warning of 20 October 2026, the
  minister's answers of 5 October 2026 (generic semaglutide/tirzepatide not lawful; "kan de IGJ geen betrouwbare
  uitsplitsing geven" written as "kan de IGJ niet zeggen"), Customs on peptides (6 August 2026). "We vonden geen pagina
  van de IGJ over peptiden zelf" (UNRESOLVED 5.6, as resolved by the fact-check).
- Sport: NDR binds federation members; NDR changes on 1 January 2027 with prosecution and discipline moving to the
  Dopingautoriteit (fact 45); data exchange with IGJ, police, OM, Customs, NVWA (fact 46; "how often is not public").
  The Dopingautoriteit's possession tolerance is quoted for doping only (nl-law §6.7).
- Where to report: Lareb (anyone; also products bought online; users of illegal medicines, `lareb-2021-illegal-medicines`;
  not shared with your doctor), the Landelijk Meldpunt Zorg as an IGJ section (`igj-landelijk-meldpunt-zorg`,
  `igj-lmz-informeren`; no phone number printed), the help levels of STYLE-NL §5.1 and brief item 2, `<JurisdictionCard
  code="NL" />`, and the one Belgian line "In België meld je een bijwerking bij het FAGG" with a link to `/nl/legal/be/`.
- Advertising test: semaglutide appears only in the description of the Rb Amsterdam case, written as "gebruik van
  semaglutide om af te vallen", labelled off-label, with a link to the compound page for the indication and side
  effects. No effect is named anywhere on the page.

**Dropped citations (from the snapshot):**

| Cite id | Why | Replaced by |
|---|---|---|
| `rijksoverheid-online-aanbieder-controleren` | Its title vouches for sellers ("… betrouwbaar is?") and the page is a seller-checking guide (CONTENT-GUIDE §1; STYLE-NL §5.6 "betrouwbaar"). | `eu-directive-2001-83` (art. 85c: logo; medicines must comply with the law of the country of destination), `igj-toezicht-online-medicijnen` (the IGJ supervises the logo) |
| `cjeu-2009-hecht-pharma` | Its title names a company ("Hecht-Pharma GmbH v …"; CONTENT-GUIDE §11). | `cjeu-2014-d-and-g` (case by case; beneficial effect) and `igj-2021-melatonine-geneesmiddel-of-niet` (the IGJ's "noemenswaardig en gunstig effect") |
| `dopingautoriteit-controles-belgie` | The Belgian sentence in the sport section became a link (brief: Belgium only as a link or one line). | Link to `/nl/legal/be/`, where the id is cited |

## 2. `legal/eu` (native)

**Came back:** the layers diagram, the two-limb `<Compare>`, the CJEU fold, the licence `<Compare>`, the "what a licence
brings" fold, the exceptions `<Compare>` and its two folds, the advertising diagram, the falsified-medicines `<TimeStrip>`
and its fold, the reform diagram, the EU card. Same figure ids.

**Re-checked and rewritten:**
- TL;DR added (6 pairs). New section "Regels voor klinisch onderzoek" (was a fold; the task lists trials): CTR dates,
  CTIS, art. 28/29 rights (checked today), two CTIS trials with Dutch authorisation (retatrutide SYNERGY-Outcomes,
  SS-31 4TAZPower), and the pending Biotech Act amendment (`ep-oeil-2025-0406-cod`).
- Status list as of 27 October 2026 (eu-status §1 A): semaglutide and tirzepatide central authorisations with the
  **Dutch SmPC indications** (Ozempic, Wegovy incl. adolescents ≥ 12 and > 60 kg, Mounjaro incl. children ≥ 10 with
  type 2 diabetes; "alleen op recept"), and a link to the compound pages for effects and side effects (no effect named
  on this page); retatrutide and SS-31 investigational; tesamorelin application withdrawn 2012; the other peptides no EU
  authorisation and no application; thymosin alpha-1 authorised in Italy, not EU-wide. The snapshot's "We know of no EU
  country that has licensed them either" became "hebben we niet nagekeken" (eu-status UNRESOLVED 7).
- Logo date corrected: applies from **1 July 2015** (eu-status fact-check 8; checked today), not "by mid-2015".
- Falsified-medicines fold: the 2023 Ozempic pens with inactive serial numbers, and the EMA/HMA warning of
  3 September 2025 on illegal GLP-1 products (new).
- Reform: Council position adopted 28 September 2026 (26 for, 0 against, Malta abstaining; NL and BE for), published
  1 October; Parliament's second reading, indicative plenary 23 November 2026 (no deadline under TFEU art. 294(7) given,
  eu-status UNRESOLVED); entry into force on the 20th day after OJ publication, application 24 months later; EMA's 2026
  and 2028 expectation attributed to the EMA (eu-status §4 conflict 1). A fold "Wat er in de afgesproken tekst staat"
  gives the direction (definition, licence rule, advertising bans and the named-patient exemption stay; compassionate
  use for a single patient; central route for every new active substance; magistral formulas without biotech or ATMP),
  marked "nog geen wet" (eu-status §6.1).
- Contact: reports go to the national centre (art. 107a); Lareb, and the one Belgian line (FAGG).

**Dropped citations:**

| Cite id | Why | Replaced by |
|---|---|---|
| `cjeu-2009-hecht-pharma` | Title names a company. | `cjeu-2014-d-and-g`, `igj-2021-melatonine-geneesmiddel-of-niet`, `eu-directive-2001-83` (art. 2(2) doubt rule) |
| `cjeu-2015-abcur` | Title names two companies (merge notes §9: retitle before a Dutch page cites it). | `eu-directive-2001-83` (art. 3(1), formula magistralis, checked today) |
| `famhp-postal-seizure-qa`, `famhp-adverse-reaction-qa` | English FAGG pages; be-notes §7.3 asks for the Dutch ids on Dutch pages. | `fagg-postal-seizure-qa-nl`, `fagg-melden-bijwerking-patient` |

## 3. `legal/be` (native, short notes)

**Came back:** the core-rules table (now an at-a-glance table in the notes-page format), the parcel `<Compare>` and the
€ 400 KeyNumber, the seizure fold, the online fold, the doping-structure diagram, the reporting section and the BE card.

**Re-checked and rewritten (be-notes.md and its fact-check):** reshaped to the model of
`en/legal/ireland-and-new-zealand.mdx` (TL;DR, Lead "why short notes", at-a-glance table with one source line, then
short sections). EU-wide approvals apply in Belgium (said once, fact 3/37). First seizure now "U krijgt geen boete" /
"mogelijk een waarschuwing" (fact 12, conflict 6), with the FAGG's own limit that this does not hold for specially
regulated (hormonal/anabolic), narcotic and psychotropic substances and antibiotics (fact-check correction 2: no promise
of "no fine the first time"). New: the FAGG's 2025 line that buyers can be fined (fact 13); the KB of 12 April 1974
(possession licence for hormonal/anabolic substances) in exactly the suggested B1 wording of UNRESOLVED 1, plus the
FAGG's "Melanotan is een hormonale stof"; advertising (art. 9, KB 1995, FAGG page); art. 16 penalties without fine
amounts (UNRESOLVED 2); the law of 30 May 2026 (routes unchanged); reporting with eID, anonymity, EudraVigilance and
the "niet om de persoon in kwestie te kunnen sanctioneren" line (fact 22); the Flemish decree's Title 6/1 (recreational
athletes outside federations, since 13 September 2021; sanctions; fine of at most € 25.000) and NADO Vlaanderen's
13 gym tests in 2025 (facts 32–34; I did not write that every gym user can be sanctioned, UNRESOLVED 4); help: 112,
1733 "in een groot deel van België, maar nog niet overal", the Antigifcentrum (070 245 245, advises the public, unlike
the NVIC) as be-notes' suggested line; `<JurisdictionCard code="BE" />`. Left out: needle exchange (UNRESOLVED 5), the
French and German-speaking NADOs' names (6), the FAGG's French name (7), reimbursement (not in the assignment; the
suggested line and its sources stay available), the routes `<Compare>` and its trials search (the notes page stays
short; the law fold names the four art. 6quater routes and that the FAGG list holds none of the site's compounds).

**Dropped citations:**

| Cite id | Why | Replaced by |
|---|---|---|
| `famhp-postal-seizure-qa`, `famhp-adverse-reaction-qa`, `famhp-compassionate-use-medical-need` | English pages; Dutch ids exist (be-notes §7.3). | `fagg-postal-seizure-qa-nl`, `fagg-adverse-reaction-qa-nl`, `fagg-melden-bijwerking-patient`, `fagg-schrijnende-gevallen-medische-noodprogrammas` |
| `dopinglijn-regelgeving`, `be-flemish-antidoping-decree-2012` | Stale site and old numbering (be-notes §2 items 5–6, conflicts 1–2). | `be-nado-vlaanderen-over`, `be-flemish-antidoping-decree-consolidated` |
| `ctgov-nl-be-peptide-search-2026-10-22` | Its routes `<Compare>` (trial column) was not kept on the short notes page. | – (the Dutch routes page covers trials) |
| `eu-directive-2001-83` | Cited for the definition comparison and the logo; the notes page now cites the Belgian law and the FAGG for both. | `be-medicines-law-1964-art-1`, `fagg-postal-seizure-qa-nl` |

## 4. `legal/index` (adapted)

Same structure as `en/legal/index.mdx` (no TL;DR on a section overview; Lead, question map, paragraph on the common
pattern, how we date the law, what the section does not do, contact cards, page list). The map links `legal/nl`,
`legal/eu`, `legal/be`, `research-use-only`, `legal-routes`, `sport-and-doping`, `whats-changing`. Contacts:
`<JurisdictionCards which="full" />` (NL and EU), a line to the BE notes page and "Bel dan direct 112".

**Dropped citations (US/UK/CA/AU framing):** `usc-21-321`, `uk-hmr-2012-reg-2`, `ca-fda-s2-definitions`,
`au-tg-act-s3-definitions` (the four definitions of a medicine) and `usc-21-355`, `uk-hmr-2012-reg-46`,
`ca-food-and-drug-regulations`, `au-tg-act-s19b-19d-offences` (selling without approval). Replaced by
`eu-directive-2001-83`, `nl-gmw-art-1-geneesmiddel`, `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`
(the snapshot's Dutch paragraph, with the Dutch law added).

---

## 5. UNRESOLVED points and how the pages handle them

| Research | Point | On the page |
|---|---|---|
| nl-law 5.1 | Whether a few vials at home are "in voorraad" | `legal/nl`: "We vonden geen wet, uitspraak of toezichthouder die zegt of een paar flacons thuis al een voorraad zijn"; TL;DR "zegt de wet niet duidelijk" |
| nl-law 5.2 | Fines/prosecution of a private person for small own-use import | Uncertainty callout; "personen kregen in 2026 een boete voor reclame" |
| nl-law 5.3 | Customs' internal IGJ list and OM agreements | "Welke regels de Douane daarbij intern gebruikt, is niet openbaar" |
| nl-law 5.4 | Vial = medicine or active substance for Customs | "Hoe de Douane een flacon met peptidepoeder indeelt, staat er niet in"; consequences of each class stated |
| nl-law 5.5 | Intra-EU parcels in practice | "Hoe dat in de praktijk wordt gehandhaafd, hebben we niet gevonden" |
| nl-law 5.6 | IGJ peptide statements (media only) | Left out; "We vonden geen pagina van de IGJ over peptiden zelf" |
| nl-law 5.7 | Court rulings on the unauthorised peptides | Not claimed either way |
| nl-law 5.8, 5.9, 5.12–5.16 | Next indexation; NDR 2027 text; KOAG/KAG; travellers with an EU-only medicine; peptide-specific IGJ figures; Amsterdam appeal; IGJ fine of 28 September 2026 | Left out, except 5.14 ("kan de IGJ niet zeggen") and the NDR change date with no content |
| eu-status 5.2 | Parliament vote and OJ dates | Indicative date only; no TFEU deadline |
| eu-status 5.7 | National authorisations in other member states | "hebben we niet nagekeken" |
| eu-status 5.5 | Open PRAC items | Not mentioned (eu-status §6.10) |
| be-notes 1–9 | KB 1974 scope and enforcement; art. 16 amounts and practice; NADO basis for lone gym users; needle exchange; NADO names; FAGG French name; reimbursement; 1733 coverage | Suggested B1 wording for the KB; no amounts; "in georganiseerd verband" only; left out; "nog niet overal" |

## 6. Open questions for the legal or medical reviewer

1. **Publisher line on `legal/nl`.** The brief's draft is used verbatim in "Reclame en voorlichting" (owner decision;
   the brief places it on the about pages and the editorial policy). Keep it on `legal/nl` too?
2. **Directive art. 86(2), language versions (my own check today).** The English consolidated text (1 January 2025) has
   "information relating to human health or diseases, provided that there is no reference, even indirect, to medicinal
   products"; the **Dutch** consolidated text has only "informatie betreffende gezondheid of ziekten bij de mens", as
   does Gnw art. 83(d). `legal/nl` says "De Engelse tekst van de Europese richtlijn voegt daar een voorwaarde aan toe"
   and that we do not rely on art. 83(d); `legal/eu` lists the condition in its table. Is that the right reading
   (conforming interpretation across language versions; nl-law §6.3)?
3. **Customs and parcels** (nl-law §6.4): the page says a parcel "kan worden tegengehouden, gemeld bij de IGJ of in
   beslag genomen" and does not say that own-use parcels are sometimes released. Fair, or too strict?
4. **Active substances** (nl-law §6.5): `legal/nl` says a powder classed as an active substance cannot be imported by
   post by a private person and the recipient is treated as a suspect (Customs ch. 13). Confirm.
5. **TL;DR "Mag ik het doorgeven aan anderen? Nee. … Met opzet is het een misdrijf."** Our reading of art. 40(2) with
   art. 1 ("ter hand stellen") and the WED (nl-law fact 42). Confirm the plain "Nee".
6. **Rb Amsterdam description** ("artikelen met persoonlijke verhalen over het gebruik van semaglutide om af te vallen …
   off-label"): neutral enough under the advertising test (nl-law §6.6)?
7. **Sources whose body text names a business** (nl-law §6.12): `douane-2026-08-illegale-online-handel-medicijnen` and
   `nl-rbams-2026-5160-publieksreclame-journalistiek` are cited; no name is quoted.
8. **"Een stop opleggen"** as the B1 words for the IGJ's "bevel" (art. 115 order to stop): acceptable?
9. **Belgium:** the B1 summary of art. 16 § 1, 2° in the TL;DR ("Ja. Wie zulke middelen koopt of bezit, kan een
   geldboete krijgen"; be-notes §6.1); mentioning the KB of 1974 at all (§6.2); telling Flemish readers that recreational
   athletes outside a federation can be sanctioned, with a fine of at most € 25.000 (§6.3).
10. **EU reform fold** (eu-status §6.1): describing the agreed articles before OJ publication, marked "nog geen wet".
11. **"Investigational"** for retatrutide and SS-31 on `legal/eu` ("Ze worden alleen onderzocht in klinisch onderzoek";
    eu-status §6.5–6.6).
12. **Art. 5(1) wording**: "een erkende zorgverlener, meestal een arts" for "officieel erkend beroepsbeoefenaar in de
    gezondheidszorg".

## Style terms (STYLE-NL has no row for these; the word I used)

| English / concept | Used | Note |
|---|---|---|
| presentation test · function test | de presentatietoets · de werkingstoets | B1 names of the two limbs; the Douane's "aandieningscriterium" / "toedieningscriterium" are glossary aliases (legal-a.json) |
| order to stop (IGJ "bevel", Gnw art. 115) | een stop opleggen | B1; "bevel" only if a page needs the legal term |
| starting amount of a fine (VWS "normbedrag") | startbedrag | |
| fine category | boetecategorie (de zesde categorie) | |
| crime · minor offence (WED) | misdrijf (met opzet) · overtreding (zonder opzet) | with gevangenisstraf, hechtenis, taakstraf, geldboete |
| public prosecution service | het Openbaar Ministerie (OM) | glossary `openbaar-ministerie`, no alias "OM" (Dutch word "om") |
| seizure | inbeslagname · in beslag nemen | glossary `inbeslagname` |
| active substance (legal sense) | werkzame stof (een grondstof) | glossary `active-substance` |
| EEA | de Europese Economische Ruimte (EER) | spelled out on first use; "EER" is not a glossary alias (STYLE-NL §6) |
| Official Journal | het Publicatieblad van de EU | |
| political agreement · second reading · indicative date | politiek akkoord · tweede lezing · voorlopige datum | |
| healthcare professional (Directive art. 5(1)) | een erkende zorgverlener | |
| national medicines agencies (HMA) | de nationale medicijnautoriteiten | |
| generic versions | generieke versies (kopieën) | the minister's "generieke varianten" |
| website/court names | de Raad van State (hoogste bestuursrechter) · Rechtbank Den Haag · Gerechtshof Amsterdam · het Landelijk Meldpunt Zorg | |
| compound names in running text | thymosine alfa-1 · NAD+-voorlopers | as in `src/i18n/nl/media.json` and the glossary |
| Belgian words (BE page only) | VHB · voorschrift · dokter van wacht · Antigifcentrum · minnelijke schikking · het parket (het openbaar ministerie in België) · de Orde der Apothekers · de Gemeenschappen | |

## For the final sweep (files I do not own)

1. `src/data/sources/legal-a.yaml`, `eu-regulation-699-2014`: the note says the logo applied "by mid-2015"; art. 5 says
   "Zij is van toepassing met ingang van 1 juli 2015" (CELLAR 32014R0699, read 27 October 2026). Update the note.
2. `src/data/sources/legal-a.yaml`, `cjeu-2009-hecht-pharma` and `cjeu-2015-abcur`: titles name companies. Give them
   neutral reader-facing titles (for example "Arrest van 15 januari 2009, zaak C-140/07 (geneesmiddel naar werking)")
   before any Dutch page cites them. I avoided both.
3. `src/data/sources/legal-a.yaml`, `rijksoverheid-online-aanbieder-controleren`: its title vouches for sellers
   ("betrouwbaar"); recommend that no Dutch page cites it.
4. `src/data/sources/shared.yaml`, `eu-directive-2001-83`: point it at the 1 January 2025 consolidation (merge notes §9;
   the articles cited on my pages are the same in both).
5. Glossary: my new ids `douane`, `inbeslagname`, `opiumwet`, `openbaar-ministerie`, `active-substance` ("werkzame
   stof"), `vhb`, `antigifcentrum`, `dokter-van-wacht` were unique on 27 October 2026 (grepped all
   `src/i18n/nl/glossary/*.json`, including the parallel groups' `nl-legal-routes`, `nl-legal-sport-changing`,
   `nl-about`, `nl-safety-b`, `nl-evidence-b`, `nl-history-b`). If another group adds the same concept or alias later,
   merge into one id. "werkzame stof" will autolink on compound pages too (intended).
6. Possibly worth a Dutch timeline/tracker item (merge notes §7): `nl-advertising-case-law-2026` (Raad van State
   25 February 2026, Rb Amsterdam 10 April 2026, Rb Noord-Nederland 21 April 2026, IGJ fines public since 1 January 2026),
   which `legal/nl` now describes.

## Check (independent, 27 October 2026)

Independent fact-check and edit of the four pages, the glossary file and these notes, assuming errors. Read first: the
brief (with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §1b, §4.1, §8–§13, `research/nl/nl-law.md`,
`eu-status.md`, `be-notes.md` (each with its fact-check), the legal-en-a manifest, and the snapshot pages
`legal/{nl,eu,be}.mdx` and the current `en/legal/{index,uk,us,ireland-and-new-zealand}.mdx`. Every cited id on the four
pages was looked up in `src/data/sources/` (all exist; no title or URL names a seller or company). Fetched myself today
(curl; CELLAR with an `application/xhtml+xml` Accept header; nothing taken from memory): the minister's answers of
5 October 2026 (`ah-1272885.pdf`, answers 3, 5, 6 and 10), the IGJ page "Leveren op artsenverklaring", Directive
2001/83 in the Dutch consolidation of 1 January 2025 (arts. 3, 5(1), 85 quater, 86(2), 107 bis), Regulation 726/2004 in
Dutch (art. 83), and the Dutch EU product information of Wegovy, Ozempic and Mounjaro (sections 4.3 and 4.8). No new
source, no new allowlist host; `src/data/sources/nl-legal-core.yaml` is still not needed.

**Confirmed as the writer had it:** the Dutch Directive text of art. 86(2), fourth indent, really reads only "informatie
betreffende gezondheid of ziekten bij de mens" (the English text adds "provided that there is no reference, even
indirect, to medicinal products"); art. 85 quater (1)(c) (medicines must comply with the law of the member state of
destination) and the logo; all quotes of the minister's answers 3, 5 and 10; the IGJ's 8 and 4 weeks; the seven
anchors of `/nl/legal-routes/` (headings checked in the Dutch file); every Lead, KeyNumber and table fact not listed
below against the research and the source notes. No US, UK, Canadian, Australian, Irish or New Zealand frame and no
link to `/en/` or to `legal/us|uk|ca|au|ireland-and-new-zealand` on any of the four pages; "je" throughout ("u" only
inside quotes); no STYLE-NL §5.6 word outside a quote; no commerce token in a title, heading, Lead question, fold,
figure title, label or link text.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| legal/nl | Rb Amsterdam bullet: "persoonlijke verhalen over het gebruik van semaglutide om af te vallen. Het ging om off-label gebruik: gebruik waarvoor het middel niet is goedgekeurd." | "persoonlijke verhalen van mensen die met een semaglutideproduct waren afgevallen. Volgens de rechtbank ging het over off-label gebruik: gebruik van een medicijn buiten waarvoor het is goedgekeurd."; link line now "Voor welke ziekten en onder welke voorwaarden semaglutide wel is goedgekeurd …" | Factual error that also fails the advertising test: semaglutide IS authorised for weight management in the EU (Wegovy); the ruling was about off-label use of the product concerned, not all weight-loss use | `nl-rbams-2026-5160-publieksreclame-journalistiek` (note, para. 7.7); `ema-pi-wegovy-nl` |
| legal/nl | "Hoeveel meldingen over peptiden gaan, kan de IGJ niet zeggen." | "Hoeveel van haar meldingen over afslankmiddelen gaan over online bestelde of vervalste middelen, kan de IGJ niet zeggen." | Answer 6 is about obesity medicines and categories (off-label, online, falsified), not about peptides (read in the PDF today) | `tk-2026-ah-249-antwoord-afslankmedicatie` |
| legal/nl | Artsenverklaring step 3: "niemand de werking, de veiligheid en de kwaliteit van het medicijn heeft beoordeeld" | "het medicijn niet is getoetst aan de eisen van de Geneesmiddelenwet voor werking, veiligheid en kwaliteit" | Overstated: the IGJ text says "niet is getoetst aan criteria … zoals gesteld in de Gnw"; the route is often for medicines approved abroad | `igj-leveren-op-artsenverklaring` (page read today) |
| legal/nl | Callout: "Wel kregen personen in 2026 een boete voor reclame." | "Wel kregen in 2026 een persoon en een organisatie een boete voor reclame." | The RvS fines went to an organisation; only Rb Noord-Nederland fined a natural person | `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon` |
| legal/nl | Damgaard fold: "pijn bij jicht verlicht … Hij werkte niet voor de maker en kreeg niet betaald" | "jicht of artrose … Hij zei dat hij niet voor de maker werkte en geen belang had bij de verkoop. Van de maker kreeg hij niet betaald" | The judgment records gout or arthrosis, and his not working for the maker as his own statement (fact-check note of 22 October) | `cjeu-2009-damgaard` |
| legal/nl | "Het gaat om ongeveer 40 boetes per jaar" (of the published fines) | "De IGJ legt ongeveer 40 boetes per jaar op, bijvoorbeeld voor geneesmiddelenreclame." | The 40 is the number imposed a year, not published | `igj-2025-12-boetes-openbaar` |
| legal/nl | Diagram item "In 2026 vonden de rechters een informatiewebsite …" | "In 2026 oordeelde de Raad van State …"; "wervende bewoordingen" explained in B1 | Precision (one court); B1 term explained | `nl-rvs-2026-1072-publieksreclame-website` |
| legal/nl | Caption "het verbod voor elke stap, van maker tot gebruiker" | "elke stap in de handel verboden, tot en met het doorgeven aan iemand anders" | "tot gebruiker" read as if use were banned; art. 40 does not name using | `nl-gmw-art-40-handelsvergunning` |
| legal/nl | Traveller rule: "Dat gaat over medicijnen die je op recept of op een andere legale manier hebt gekregen." | "Die regel gaat over de vergunning om in te voeren. Voor een geneesmiddel zonder handelsvergunning blijft het verbod van artikel 40 gelden." | The removed sentence is in no source (the research's own reading); the kept point is nl-law fact 7 | `nl-gnw-art-18-licence`, `douane-medicijnen-reizen-2026` |
| legal/nl | Import step 1 (EU only) | adds "Noorwegen, IJsland en Liechtenstein tellen hierbij mee als EU-land." and cites art. 1 (cc) | "Lidstaat" in the Gnw includes the EEA states | `nl-gnw-art-1-lidstaat-werkzame-stof` |
| legal/nl | "Een arts mag via internet geen medicijnen voorschrijven aan iemand die die arts …" | "Niemand mag via internet medicijnen voorschrijven aan iemand die de voorschrijver …" | Art. 67 says "Het is een ieder verboden" | `nl-gmw-art-67-internet-prescribing` |
| legal/nl | "De Douane schrijft dat 'onderzoeksdoeleinden' dan geen rol spelen." | "Valt een product onder de wet? Dan spelen 'onderzoeksdoeleinden' geen rol, schrijft de Douane." | Customs' condition ("als … onder … regelgeving valt") was lost | `douane-2026-08-illegale-online-handel-medicijnen` |
| legal/nl | "Een losse grondstof in bulk heeft geen farmaceutische vorm." | "Een bulkverpakking met poeder, zonder informatie over hoe het wordt toegediend, heeft geen farmaceutische vorm."; "farmaceutische vorm" explained on first use | Closer to the handbook; B1 | `douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel` |
| legal/nl | 2019 case: "De tabletten werden vernietigd." | "De pastilles moesten worden vernietigd." | They were lozenges; destruction was the prosecutor's decision (withdrawal from circulation) | `nl-rbdha-2019-4817-postzending-eigen-gebruik` |
| legal/nl | Import step 3: "Wie iets via internet regelt" | "Wie iets via internet bestelt" | The court's words ("online heeft besteld"); body text, not a label | `nl-rbdha-2019-4817-postzending-eigen-gebruik` |
| legal/nl | Lead "Kan ik deze peptiden legaal online krijgen?" / "Nee. Geen enkele legale verkoper mag …" | "Mag een website je deze peptiden leveren?" / "Nee. Ook een legale online apotheek mag geen geneesmiddel zonder handelsvergunning leveren." | "online krijgen" is acquisition framing (STYLE-NL §7: "hoe kom je aan"); the answer is now about the law | `nl-gmw-art-40-handelsvergunning`, `eu-directive-2001-83` |
| legal/nl | "Een legale online apotheek toont het Europese logo …" | "Een online apotheek moet volgens de EU-regels het Europese logo … tonen." | Stated as a legal duty, not as a positive sign to look for (CONTENT-GUIDE §1a; nl-law §6.10) | `eu-directive-2001-83` (art. 85 quater) |
| legal/nl | "De IGJ raadt af om medicijnen online te regelen." | "… online te bestellen." | The IGJ's words; body text, not a heading or label | `igj-online-medicijnen` |
| legal/nl | KeyNumber title "Voor handel en reclame begint de boete bij € 150.000" | "Het boetebeleid gaat uit van € 150.000 en past dat bedrag daarna aan" | "begint bij" read as a minimum fine; the policy reduces it (2,5% for small parties) | `nl-beleidsregels-boete-vws-2019` |
| legal/nl | KeyNumber € 1.100.000 `source="nl-gnw-art-101-fines"`; the € 11.000 sentence cited art. 101 only | both also cite `nl-sr-art-23-boetecategorieen-2026` | The amounts come from Sr art. 23 | `nl-sr-art-23-boetecategorieen-2026` |
| legal/nl | "In België zijn er meer controles, ook in sportscholen" (no cite) | "In België wordt op lager niveau veel meer getest, ook in sportscholen." + cite | Every factual claim needs a cite (the id is also cited on legal/be) | `dopingautoriteit-controles-belgie` |
| legal/nl | Website reporting cited `igj-online-medicijnen` (its note does not mention the Meldpunt) | cites `igj-2025-illegal-online-medicines`, `igj-landelijk-meldpunt-zorg`, `igj-lmz-informeren` | The cite must show the claim ("meld twijfelachtige websites bij het Landelijk Meldpunt Zorg") | same |
| legal/nl | "Bewaar het product, het etiket en alle papieren. Schrijf het batchnummer op." (no source) | "Bewaar het product, met het etiket en de doos." + link to `/nl/safety/if-something-goes-wrong/#neem-het-product-mee-en-bewaar-het` (heading checked in the Dutch file) | Uncited advice; the sourced advice lives on the Dutch safety page | Dutch page `safety/if-something-goes-wrong` |
| legal/nl, eu, be | `translation: { method: native, from: en, … }` | `translation: { method: native, review: pending }` | These pages have no English source (`from` is optional in the schema) | `src/schemas/index.ts` |
| legal/eu | Status bullet named indications only | adds "De meest gemelde bijwerkingen zijn maag- en darmklachten, zoals misselijkheid, diarree en overgeven." and "Er zijn nog meer EU-medicijnen met semaglutide." | Advertising test (brief, item 1): an authorised medicine named with its indications gets its main side effects from the SmPC; the three named are not all EU semaglutide products | `ema-pi-wegovy-nl`, `ema-pi-ozempic-nl`, `ema-pi-mounjaro-nl` (4.8 read today), `ema-medicines-json` |
| legal/eu | TL;DR "Komen er nieuwe EU-regels?" "Ja, maar …"; reform Lead "Ja. …" | "Er is een akkoord, maar het is nog geen wet …"; Lead "Er is een akkoord. …" | Parliament has not voted; no prediction (eu-status fact 29) | `ep-oeil-2023-0132-cod`, `council-st-7106-2026-rev2` |
| legal/eu | TL;DR "Medicijnen op recept hebben een uniek nummer …" | "De meeste medicijnen op recept …" | Shorter must not be stronger: the body says "meestal" | `eu-regulation-2016-161` |
| legal/eu | TL;DR "… geldt in elk EU-land, ook in Nederland." | "… geldt in elk EU-land." | TL;DR was over 120 words after the edits | – |
| legal/eu | "Het Europees Parlement moet het standpunt in tweede lezing goedkeuren." | "Nu is het Europees Parlement aan de beurt, in tweede lezing." | "moet goedkeuren" reads as an obligation; Parliament may approve, amend or reject | `ep-oeil-2023-0132-cod` |
| legal/eu | "De nieuwe regels gelden 24 maanden later." | "De meeste nieuwe regels gelden 24 maanden later." | Some articles apply earlier (eu-status fact 29) | `council-st-7105-2026-rev2` |
| legal/eu | "26 landen stemmen voor, geen land tegen, …" | "Er stemmen 26 landen voor en geen land tegen, …" | STYLE-NL §3: no sentence opens with digits | – |
| legal/eu | Advertising table: "Informatie over gezondheid of ziekte, zonder verwijzing naar een geneesmiddel, ook niet indirect" | "Informatie over gezondheid of ziekte. De Engelse tekst voegt toe: zonder verwijzing …" | The Dutch Directive text lacks the condition (checked today); now consistent with legal/nl | `eu-directive-2001-83` |
| legal/eu | "Er zit misschien helemaal geen werkzame stof in." | "Misschien zit de werkzame stof die erop staat er helemaal niet in." | EMA/HMA: "may not contain the claimed active substance at all" | `ema-hma-2025-09-illegal-glp1` |
| legal/eu | "In de wet heet dit 'gebruik in schrijnende gevallen'." after the cite | "In de Nederlandse tekst van de verordening heet dit …" before the cite | The sentence was uncited; art. 83 Dutch text read today | `eu-regulation-726-2004` |
| legal/eu | "het FAGG in België" (first mention) | full name with (FAGG) | STYLE-NL §2.7, first mention on a page | – |
| legal/eu | "via CTIS" | "via CTIS, het online systeem van de EU voor klinisch onderzoek" | B1: term explained | `ema-clinical-trials-regulation` |
| legal/be | Bullet "Reclame" (art. 9, KB 1995, FAGG page) | removed | Not in the notes-page assignment; Belgian advertising law changes nothing for a reader (short notes only) | – (dropped cites: `be-medicines-law-1964-art-9`, `be-kb-1995-04-07-reclame`, `fagg-reclame-geneesmiddelen`) |
| legal/be | Online fold: notified websites, Orde der Apothekers, "Een legale website toont het Europese logo." | removed (kept: no online sale on prescription; the FAGG can close only .be sites; the retatrutide warning) | A how-to-recognise-a-legal-seller hint (CONTENT-GUIDE §1a) and beyond the notes assignment | `fagg-postal-seizure-qa-nl`, `fagg-2025-illegale-verkoop-actie` |
| legal/be | "Je herkent zo'n medicijn aan een nummer dat begint met EU/1/." | removed | A positive sign a fake can copy (CONTENT-GUIDE §1a); the legal point stays | `fagg-vergund-geneesmiddel-herkennen` (still cited) |
| legal/be | TL;DR "Wie zulke middelen koopt of bezit …" | "Wie een geneesmiddel koopt of bezit dat niet aan de wet voldoet …" | "zulke" had no referent; art. 16 § 1, 2° names falsified or non-conforming medicines | `be-medicines-law-1964-art-16` |
| legal/be | "wie willens en wetens zulke middelen verkoopt … niet-conforme geneesmiddelen" | plain B1 ("en weet dat ze vervalst zijn of niet aan de wet voldoen") | B1; meaning unchanged | `be-medicines-law-1964-art-16` |
| legal/be | "Stoffen met een hormonale of anabole werking horen bij die speciaal gereglementeerde stoffen." | "Op de website van het FAGG staan stoffen met een hormonale of anabole werking bij die speciaal gereglementeerde stoffen." | be-notes fact 12 rests on where the FAGG files the page, not on a legal statement | `fagg-hormonale-stoffen-vergunning` |
| legal/be | Compare: "Het FAGG ziet het als geneesmiddel" | "Zit er een farmacologisch werkzame stof in, dan is het voor het FAGG een geneesmiddel." | The FAGG's own test | `fagg-postal-seizure-qa-nl` |
| legal/be | "Soms gaat het dossier naar het parket"; KeyNumber "het minste bedrag" | "Een enkele keer …"; "het laagste bedrag" | FAGG: "uitzonderlijk"; Dutch idiom | `fagg-postal-seizure-qa-nl` |
| legal/be | "NADO Vlaanderen nam in 2025 13 gerichte monsters" | "In 2025 nam NADO Vlaanderen 13 gerichte monsters" | Two numbers side by side | – |
| legal/index | Lead answer without a verb | "Ze zegt wie deze middelen mag leveren of aanprijzen, en wat dat voor jou betekent." | Full sentence, at most 18 words | – |
| glossary `antigifcentrum` | "… daar bel je bij een vergiftiging je huisarts of de huisartsenpost." | adds "en bij levensgevaar 112" | Brief and STYLE-NL §5.1: poisoning → huisarts or 112 | `nvic-umcutrecht` |

Validator: `--only pages/nl/legal/` and `--only nl-legal-core` → 0 errors, 0 warnings (the edits first raised two
warnings, the eu TL;DR at 123 words and the index Lead at 22 words; both fixed). Residue:
`check-locale-residue.ts --details` over all locales → 0 error, 0 frame, 0 warn hits. I also ran it without
`--only` and read the full result: no hit anywhere, so none in these files.

### Remaining concerns for the reviewer

1. **Publisher line on legal/nl** (owner decision): the brief's text is used verbatim in "Reclame en voorlichting";
   the brief places it on the about pages. STYLE-NL §5.2 still has an older publisher line; the brief's version is the
   later decision and is the one used.
2. **Art. 86(2) language versions:** legal/nl and legal/eu now say the same thing ("De Engelse tekst voegt … toe").
   Whether the condition binds through conforming interpretation is a legal question (nl-law §6.3).
3. **Parcels** (nl-law §6.4): the pages say a parcel "kan" be stopped, reported or seized and do not mention that
   Customs' flow chart ends in release for some own-use parcels. Kept as the writer chose; the reviewer decides.
4. **"Nee" in the TL;DR for passing a product on** (art. 40(2) with art. 1 "ter hand stellen" and the WED; nl-law fact
   42) and "Nee, ook niet voor eigen gebruik" for importing: our reading of the text, as the research states it.
5. **Traveller with a medicine authorised elsewhere in the EU but not in the Netherlands** (nl-law UNRESOLVED 5.13):
   the page now says only that the art. 40 ban stays for a medicine without a handelsvergunning; it no longer says which
   medicines the traveller rule covers.
6. **Two cited sources whose body text names a business** (`douane-2026-08-illegale-online-handel-medicijnen`,
   `nl-rbams-2026-5160-publieksreclame-journalistiek`; nl-law §6.12): no name is quoted; title and URL are clean.
7. **EU page status list:** it names three products (Ozempic, Wegovy, Mounjaro) with their SmPC indications and most
   reported side effects; Rybelsus, Kayshild and Kyinsu are covered only by "Er zijn nog meer EU-medicijnen met
   semaglutide." Contraindications are not listed on the legal page (section 4.3 is hypersensitivity only; the
   compound pages carry the warnings), and the link sends readers there.
8. **BE page length:** still longer than one country's part of the English notes page, because the parcel practice,
   the KB of 1974 and the Flemish decree are reader-relevant; two non-assigned parts (advertising, legal online
   pharmacies) were cut.
9. **Saved rationale dropped, not a cite:** the snapshot diagram line "the writer had said where the product was on
   sale … such information can lead people to get the product" (Damgaard) is replaced by the 2026 case-law diagram;
   the fold still says he wrote where it could be had, and `cjeu-2009-damgaard` is still cited.

### For the final sweep (files I do not own; additions to the writer's list)

- `src/data/sources/safety-a.yaml`, `lareb-bijwerkingen-melden`: add to the note "Wij geven geen medisch advies" and
  "Bespreek je klachten altijd met jouw arts of apotheker" (nl-help fact 21), which legal/nl cites it for.
- `src/data/sources/semaglutide.yaml`, `ema-2023-falsified-ozempic`: the note says only "Published 18 October 2023";
  add the facts pages cite it for (pens found at EU wholesalers; serial numbers "inactive" when scanned; eu-status
  fact 35).
