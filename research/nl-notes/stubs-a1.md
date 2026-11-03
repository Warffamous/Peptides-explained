# Notes: group stubs-a1 (Dutch compound pages mots-c, epitalon, thymosin-alpha-1), 27 October 2026

Files written (new, all UTF-8, LF):

- `src/content/compounds/nl/mots-c.mdx`
- `src/content/compounds/nl/epitalon.mdx`
- `src/content/compounds/nl/thymosin-alpha-1.mdx`
- `src/i18n/nl/glossary/nl-stubs-a1.json` (5 new Dutch terms)
- this file

Not created: `src/data/sources/nl-stubs-a1.yaml`. Every source the three pages cite already exists in
`src/data/sources/` (the 23 October Dutch and EU ids and the merged `nl-research-*.yaml` ids), so no new source was
needed and no host was added to `config/link-allowlist.json`.

Base: the current English pages and data files (`src/content/compounds/en/<slug>.mdx`, `src/data/compounds/<slug>.yaml`),
the saved versions of 23 October (`research/for-nl-site/snapshot-2026-10-23/content/compounds-en/<slug>.mdx`,
`research/for-nl-site/MANIFEST-compounds-e.md`), re-checked against `research/nl/` (eu-status, nl-law, nl-care,
nl-help, be-notes, each with its fact-check section) and `research/nl/status/<slug>.yaml`.

Checks: `npx tsx scripts/validate-content.ts --only compounds/nl/` → 0 errors and 0 warnings in my three files (the two
warnings in that folder are in `melanotan-ii.mdx` and `ss-31.mdx`, not mine); `--only nl-stubs-a1` → 0/0.
`npx tsx scripts/check-locale-residue.ts --only compounds/nl/<slug> --details` → 0 error, 0 frame, 0 warn hits for each
file. To be sure the markers do the work, I also ran the scanner's own `scanMdx` (nl config) on each file with the
markers stripped: the only hits are then `warn` (FDA, 503A, "in de VS"), all evidence, PCAC framing or world context,
and each of those lines carries `{/* residue-ok: … */}` (or `# residue-ok: …` in the frontmatter).

---

## 1. Per page

### mots-c (method: translated)

- **Structure:** same frontmatter fields, same sections, components, figures and folds as English; mechanism kinds and
  levels unchanged (binding/hypothesis, signal/in-vitro, tissue/animal, effect/hypothesis); all five study ids with
  Dutch finding and limitation; `regulatory_notes` only EU, NL, WADA (from `research/nl/status/mots-c.yaml`, in Dutch).
- **Back from the saved material (re-checked):** "The CBG database lists no MOTS-c product" (now
  `cbg-gib-search-status-2026-10-27`, the search of 27 October); the "Netherlands and the EU" column of the regulatory
  figure (rebuilt as rows NL and EU, status 27 October 2026); PCAC point 5 for the Netherlands and the EU.
- **Rewritten for the Netherlands:** the four-country figure became NL + EU rows (CBG register; Gnw art. 40; EMA
  medicines, orphan and under-evaluation data; Directive 2001/83 art. 6(1)); the fold "The UK, Canada and Australia"
  became "Nederland en de Europese Unie" (CBG, art. 40, the Customs line on "research purposes", Opiumwet; EMA; the
  eu-status caveat on other member states); the routes fold now walks the seven Dutch routes with the brief's anchors;
  reporting: Lareb + `<JurisdictionCard code="NL" />` + one Belgian line (FAGG, `/nl/legal/be/`); stop callout with
  the Dutch help levels (112 / bel direct je huisarts / huisartsenpost) and "Is het ernstig? Bel 112."
- **TL;DR:** "Is it legal to sell?" became "Wat zegt de wet?" ("Verkopen, leveren en invoeren zijn verboden"),
  because the Dutch reader's question is broader and possession and use are not named offences (nl-law §1.5, §5.1).
  Same change for the regulatory `<Lead>` ("Wat zegt de wet in Nederland?").

### epitalon (method: translated)

- **Structure:** as English; mechanism binding/hypothesis, cellular/in-vitro, tissue/animal, effect/hypothesis; all
  seven study ids.
- **Back from the saved material:** "A Belgian public-health laboratory" (Vanhee 2015; the English made it "a national
  laboratory"): restored as "een Belgisch lab voor volksgezondheid" (a study's origin, evidence, not Belgian framing);
  the FDA's list of countries without an approval now names Belgium, Germany, France, Italy, Spain and Ireland and
  "none authorised by EMA" (from the FDA briefing's own note, `fda-pcac-2026-epitalon-briefing`). Not restored: the
  23 October sentence "National law requires a licence in Germany, Belgium …" (`de-amg-21`, `be-medicines-law-1964`):
  Germany is not part of the Dutch site and Belgium is notes only.
- **Rewritten for the Netherlands:** as for mots-c (figure, NL/EU fold, routes, reporting, stop levels, TL;DR line 4,
  regulatory Lead). The one trial on ClinicalTrials.gov (a US early-phase skin-serum study) stays as world context;
  the Dutch registries (ClinicalTrials.gov NL, CTIS NL, OMON, 27 October) show none.
- **Sport:** the English reasoning (not named; S0; no approval found anywhere; "we treat it as banned under S0") stays,
  because the data row and the derived tile say "prohibited, S0", plus "Twijfel je? Vraag het de Dopingautoriteit."
  (see UNRESOLVED below).

### thymosin-alpha-1 (method: translated)

- **Title:** "Thymosine alfa-1", as the other Dutch pages write it (legal/eu, legal/nl, legal-routes,
  legal/sport-and-doping, media.json); INN "thymalfasin" kept (as in the OMON record and the CBG search).
- **Structure:** as English; mechanism binding/in-vitro, cellular/animal, effect/human; all five study ids.
- **National approvals (Italy, India, Hong Kong; the maker's wider list unverified by the FDA): as on English**, as the
  assignment asks. Added for the EU frame, from eu-status and the status file: a national authorisation is valid only in
  the member state that granted it (Directive 2001/83 art. 6(1)), so there is no EU-wide and no Dutch authorisation; the
  EU orphan designation for hepatocellular carcinoma (2002) is not an authorisation; the EMA orphan page's "authorised in
  Italy" is a 2003 text (said on the page).
- **Back from the saved material (re-checked against nl-care §D):** the artsenverklaring paragraph ("a medicine
  authorised abroad can in rare cases be supplied for one named patient …"), now with the IGJ's current word
  "ontheffing", its restraint ("in uiterste gevallen", non-medical reasons do not count) and "an ontheffing does not mean
  the insurer pays" (`igj-leveren-op-artsenverklaring`, `igj-qa-zonder-handelsvergunning`); the NL column ("The CBG lists
  no product. Italy's approval does not apply here"; Gnw art. 40 with narrow exceptions); "EMA's medicines data hold no
  central authorisation"; the old lede ("Approved in Italy and some … countries, not in the Netherlands").
- **New Dutch facts (from research/nl/):** the one Dutch registered study NL-OMON51992 (TIDAM, Erasmus MC; WMO approval,
  "werving nog niet gestart", start unknown, nl-care fact 48); the one CTIS trial (cystic fibrosis, Italy, ended,
  `ctis-2024-518102-41-00`); no CBG compassionate-use programme.
- **TL;DR:** the English line "Can US pharmacies make it? Not legally. In 2024 FDA advisers voted 17 to 4 against it." is
  US framing as the reader's route; it became "Kan een arts het voorschrijven? Niet op de gewone manier. In zeldzame
  gevallen kan het via een artsenverklaring; de inspectie beslist." The 2024 PCAC vote stays in the regulatory fold
  (world context, marked).

---

## 2. Dropped citations (page: cite id, why, what replaced it)

All three pages: the four-country regulatory figure, the "UK, Canada and Australia" fold, the four-country routes
paragraph and the four-country reporting paragraph are US/UK/CA/AU framing (brief, "What leaves").

**mots-c**

- `mhra-products-search-status-d-2026-10-23`, `uk-mhra-substance-index-status-c-2026-10-23`, `uk-hmr-2012-reg-46`,
  `uk-mda-1971-sch-2`: UK status and law → replaced by `cbg-gib-search-status-2026-10-27`, `cbg-geneesmiddeleninformatiebank`,
  `nl-gmw-art-40-handelsvergunning`, `nl-opiumwet-lijsten-2026-09`.
- `ca-dpd-search-canada-legal-2026-10-23`, `ca-dpd-extract-search-merge-2026-10-24`, `ca-food-and-drug-regulations`,
  `ca-hc-recalls-search-status-d-2026-10-23`, `ca-hc-2026-04-think-twice-peptides`: Canadian status, law, seizures →
  replaced by the NL rows above and `douane-2026-08-illegale-online-handel-medicijnen` (research-use label).
- `au-artg-search-status-d-2026-10-23`, `au-artg-search-status-c-2026-10-23`, `au-poisons-standard-2026-10`,
  `au-tg-act-s19b-19d-offences`, `au-tga-2026-04-peptide-responsibilities`, `au-tga-2026-06-peptide-compliance-priority`,
  `au-sia-peptides`: Australian status, law, enforcement, sport body → replaced by the NL/EU rows (`ema-medicines-json`,
  `ema-orphan-designations-json`, `ema-under-evaluation-2026-10`, `eu-directive-2001-83`) and, for sport,
  `dopingautoriteit-vertaling-dopinglijst-2026`.
- `usc-21-355`: US new-drug law in the US row → dropped with the row (the US appears only in the PCAC fold and as world
  context; `fda-503a-bulks-page` stays in PCAC point 4).
- `ctgov-us-uk-peptide-search-2026-10-23`: trials with US/UK sites → replaced by `ctgov-nl-peptide-search-2026-10-27`,
  `ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27` (`ctgov-search-status-d-2026-10-23` and
  `ctgov-nct07505745` stay for "the only trial of MOTS-c itself is in China").
- `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event`:
  foreign reporting → `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `<JurisdictionCard code="NL" />`,
  `fagg-melden-bijwerking-patient` (Belgian line).
- PCAC point 5's UK/CA/AU cites (`mhra-…`, `uk-mhra-…`, `ca-dpd-…`, `au-artg-…-c`, `au-artg-…-d`) → `cbg-gib-search-status-2026-10-27`,
  `ema-medicines-json` (as on `/nl/legal-routes/`).
- `nhs-cellulitis`, `nhs-low-blood-sugar`, `nhs-anaphylaxis` (stop signs and stop callout): UK health-service pages →
  the Dutch GP college's patient pages for the same signs, `thuisarts-wondroos`, `thuisarts-hypo-diabetes-type-2`,
  `thuisarts-dikke-ogen-lippen`, plus `thuisarts-spoed-wie-bellen` for the help levels (as the Dutch tirzepatide page did;
  brief: "Dutch sources for Dutch readers where they exist").

**epitalon**

- Same UK/CA/AU/US status, law and reporting ids as above where English cited them: `mhra-products-search-status-d-2026-10-23`,
  `uk-mhra-substance-index-status-c-2026-10-23`, `uk-hmr-2012-reg-46`, `uk-mda-1971-sch-2`, `ca-dpd-search-canada-legal-2026-10-23`,
  `ca-dpd-extract-search-merge-2026-10-24`, `ca-food-and-drug-regulations`, `ca-hc-recalls-search-status-d-2026-10-23`,
  `ca-hc-2026-04-think-twice-peptides`, `au-artg-search-status-d-2026-10-23`, `au-artg-search-status-c-2026-10-23`,
  `au-poisons-standard-2026-10`, `au-tg-act-s19b-19d-offences`, `au-tga-2026-04-peptide-responsibilities`,
  `au-tga-2026-06-peptide-compliance-priority`, `usc-21-355`, `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`,
  `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` → the same Dutch and EU replacements as for mots-c.
- `ctgov-us-uk-peptide-search-2026-10-23`, `ca-hc-ctdb-search-status-d-2026-10-24`, `au-anzctr-search-status-d-2026-10-23`:
  "no epitalon trial has a site in the UK, Canada or Australia" → the Dutch registry searches of 27 October
  (`ctgov-nl-…`, `ctis-nl-…`, `omon-…`); `ctgov-search-status-d-2026-10-23` stays for the one US study (world context).
- `nhs-cellulitis`, `nhs-sepsis`, `nhs-anaphylaxis` → `thuisarts-wondroos`, `thuisarts-sepsis`, `thuisarts-dikke-ogen-lippen`,
  `thuisarts-spoed-wie-bellen`.

**thymosin-alpha-1**

- `openfda-drugsfda-search-2026-10-22`, `mhra-products-search-status-d-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`,
  `ca-dpd-extract-search-merge-2026-10-24`, `au-artg-search-status-d-2026-10-23` ("not approved in the US, the UK, Canada
  or Australia") → `cbg-gib-search-status-2026-10-27`, `ema-medicines-json`, `eu-directive-2001-83`.
- `usc-21-355`, `uk-hmr-2012-reg-46`, `uk-mda-1971-sch-2`, `ca-food-and-drug-regulations`, `ca-hc-recalls-search-status-d-2026-10-23`,
  `ca-hc-2026-04-think-twice-peptides`, `ca-hc-ctdb-search-status-d-2026-10-24` (the Canadian Zadaxin trial authorisation),
  `au-poisons-standard-2026-10`, `au-tg-act-s19b-19d-offences`, `au-tga-2026-04-peptide-responsibilities`,
  `au-tga-search-status-d-2026-10-23` (the 2020 TGA fine on a company): four-country status, law and enforcement →
  `nl-gmw-art-40-handelsvergunning`, `igj-leveren-op-artsenverklaring`, `nl-opiumwet-lijsten-2026-09`,
  `ema-orphan-thymalfasin-eu-3-02-110`, `ctis-2024-518102-41-00`, `omon-nl-omon51992`. The English UK fold's "the FDA's
  2024 review notes wellness clinics in the UK that market it" went with the fold (the briefing stays cited elsewhere).
- `ctgov-search-status-d-2026-10-23`, `ctgov-us-uk-peptide-search-2026-10-23` ("no thymalfasin trial with a site in the
  UK, Canada or Australia; in the US, one is recruiting") → `ctgov-nl-peptide-search-2026-10-27`,
  `ctis-nl-peptide-search-2026-10-27`, `omon-nl-omon51992` (`ctgov-thymalfasin-search-2026-10-22` stays for "many trials,
  mostly in China and in cancer").
- `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event` →
  Lareb, the NL card, the FAGG line.
- `nhs-anaphylaxis`, `nhs-cellulitis`, `nhs-sepsis` → `thuisarts-dikke-ogen-lippen`, `thuisarts-wondroos`, `thuisarts-sepsis`,
  `thuisarts-spoed-wie-bellen`.

Every other English citation (all studies, the FDA briefings, PCAC sources, PubMed counts, PubChem, WADA, SEC filings,
ClinicalTrials.gov records) is kept, with every number, caveat and mechanism step, in Dutch number format.

---

## 3. UNRESOLVED points and how the pages handle them

- **Other EU member states' national authorisations not searched** (eu-status §5.7): all three pages say "geen
  goedkeuring voor de hele EU" / "niet in Nederland", never "in geen enkel EU-land", and add "Of andere EU-landen het zelf
  goedkeurden, hebben we niet nagekeken." The mots-c what-it-is row keeps the English "and we found no approval
  elsewhere" as "Ook elders vonden we geen goedkeuring" (a statement of what we and the FDA found); epitalon names the
  countries the FDA checked.
- **Whether Italy's Zadaxin authorisation is current** (eu-status §5.10): cited only through the FDA 2024 briefing (AIFA
  database, June 2024) and the EMA orphan page, whose "authorised in Italy" the page dates ("die tekst is uit 2003").
  AIFA's database (current per the research) is not cited: `aifa.gov.it` is not allowlisted and an Italian body is not
  one I may add (Dutch, Belgian or EU bodies only).
- **NL-OMON51992 ever started?** (nl-care §5.6): "Of het ooit is begonnen, weten we niet."
- **Artsenverklaring for a substance authorised nowhere** (nl-care §5.11; mots-c, epitalon): the page says what the IGJ
  asks for (IB/IMPD, GMP proof), that a "research" vial does not come with those papers, and "Of deze weg ooit kan
  werken voor zo'n stof, zegt de IGJ niet." Never that it can.
- **European Pharmacopoeia monographs** (nl-care §5.5): only the IGJ rule is quoted ("Een grondstof die niet in een in
  gebruik zijnde farmacopee staat, kan … niet zomaar worden gebruikt"); the FDA briefing's statement that MOTS-c has no
  EP monograph was deliberately not used.
- **S0 for epitalon and thymosin alpha-1** (nl-law §5.10): thymosin "S0 geldt misschien niet … vraag het de
  Dopingautoriteit" (tile: unclear). Epitalon: the data row and tile say prohibited S0, so the page keeps the English
  reasoning as ours ("Daarom gaan we ervan uit dat het onder S0 verboden is. Geen antidopingorganisatie heeft het met naam
  genoemd.") and adds "Twijfel je? Vraag het de Dopingautoriteit." (consistent with `/nl/legal/sport-and-doping/`, which
  lists epitalon under "other unapproved peptides: verboden onder S0").
- **Traveller bringing a medicine authorised only in another EU state** (nl-law §5.13; thymosin, Zadaxin from Italy):
  written as unknown ("zegt geen bron die we vonden duidelijk").
- **Possession for own use ("in voorraad hebben")** (nl-law §5.1) and use: not stated; the Leads and TL;DR name only
  what art. 40(2) clearly forbids (verkopen, leveren, invoeren).
- **IGJ peptide statements, the August 2026 order** (brief item 5, nl-law §5.6): not cited; the "research use only" point
  rests on the Customs article `douane-2026-08-illegale-online-handel-medicijnen`.
- **Huisartsenpost number, NVIC** (nl-help §1 A, C): no number printed; NVIC not named.

---

## 4. Open questions for the medical or legal reviewer

1. **Legal, advertising test:** the pages describe others' promotion with "aangeprezen" (online promoted for weight
   loss, anti-ageing). Is that neutral enough, or should it read "aangeboden … met claims over"? No effect is named
   without its level; animal findings say "bij muizen".
2. **Legal, thymosin TL;DR and routes:** "In zeldzame gevallen kan het via een artsenverklaring; de inspectie beslist."
   Is this fair (Zadaxin is authorised in Italy, so an Italian SmPC exists), or could it read as a hint (compare the Health
   Canada caution in CONTENT-GUIDE §1)? The body adds the IGJ's restraint and "geen adequaat alternatief".
3. **Legal, B1 simplification:** "Recept en off-label: die wegen gaan over goedgekeurde medicijnen." Accurate enough?
4. **Legal, EU row:** "Zonder handelsvergunning mag een medicijn in geen enkele lidstaat in de handel komen"
   (Directive 2001/83 art. 6(1), via `eu-directive-2001-83`, whose URL still points at the 2022 consolidation; eu-status
   asks the merge to repoint it to 2025-01-01).
5. **Sources naming a company:** the mots-c page keeps the English page's SEC filings of CohBar (`sec-cohbar-2021-cb4211-topline`,
   `-slides`, `sec-cohbar-2023-s4`, `sec-cohbar-2023-11-8k`; authors "CohBar, Inc.", URLs contain "cohbar"). CohBar was the
   developer, not a seller, and the brief says science stays identical; CONTENT-GUIDE §11 says no source that names a
   company. Owner's call (it applies to the English page too).
6. **Medical, stop levels:** allergic swelling of tongue or throat or hard breathing → "Bel dan 112" (Thuisarts: huisarts,
   spoedpost or 112; the site picks the faster level, as warning-signs.json does); sepsis signs → 112 (site faster than
   Thuisarts); low sugar → bel direct huisarts/huisartsenpost, 112 when unconscious (Thuisarts level).
7. **Medical, epitalon checks:** English "cancer screening due for your age" became "De controles op kanker die bij je
   leeftijd horen". Should the page name the Dutch bevolkingsonderzoek (borst-, darm-, baarmoederhalskanker)? Not added:
   no source on the page for it.
8. **Medical, the vanhee 2015 study:** "een Belgisch lab voor volksgezondheid" restored (Sciensano, then WIV-ISP). Keep?

---

## 5. Style terms (STYLE-NL lacks them; the word I used)

| English | Dutch used | Note |
|---|---|---|
| thymosin alpha-1 · thymosin beta-4 | thymosine alfa-1 · thymosine bèta-4 | as on legal/eu, legal/nl, legal-routes, sport-and-doping and the tb-500 glossary; title "Thymosine alfa-1"; the INN thymalfasin stays |
| free base · acetate salt | vrije base · acetaatzout | as the tb-500 glossary |
| orphan designation | aanwijzing als weesgeneesmiddel | as the stubs-a glossary |
| (product) promoted online | online aangeprezen | describes others' promotion only, never our voice |
| FDA interim policy category 2 | categorie 2: stoffen die mogelijk grote risico's geven als apotheken ze verwerken | nominations withdrawn: "de voordrachten zijn ingetrokken" |
| dose–response | verband tussen dosis en effect | glossary id dose-response has "dosis-responsrelatie" |
| rhesus monkey | resusaap | |
| pineal gland | pijnappelklier (meervoud pijnappelklieren) | glossary lacks the plural alias (final sweep) |
| night shift | nachtdienst | |
| exercise bike | hometrainer | |
| osteoporosis · insomnia | botontkalking (osteoporose) · slapeloosheid | PCAC uses reviewed |
| cystic fibrosis | taaislijmziekte (cystic fibrosis) | |
| hepatocellular carcinoma | hepatocellulair carcinoom (een vorm van leverkanker) | new glossary entry |
| primary antibody deficiency | primaire antistofdeficiëntie (te weinig antistoffen) | new glossary entry |
| liver-enzyme flares | opflakkeringen van leverenzymen | |
| foreign labels (Italian, Indonesian) | buitenlandse productinformaties | STYLE-NL §2.6: official text = productinformatie |
| senescence | senescentie (stoppen met delen) | glossary id senescence |
| "Is it legal?" (Lead, compound regulatory section) | "Wat zegt de wet in Nederland?" | avoids a flat "Nee" where use and possession are not named offences |
| "When to stop and get help" (###) | Wanneer je stopt en hulp zoekt | as the Dutch tirzepatide page |

---

## 6. For the final sweep (files I do not own)

1. **`src/i18n/nl/vocab.json` `jurisdictionInSentence.EU`** ("de EU"): on thymosin alpha-1 the derived tile reads "Goedgekeurd
   in Italië, India en Hongkong, voor bepaald gebruik. Niet goedgekeurd in Nederland of de EU." Italy is in the EU, so this
   reads as a contradiction. Suggest "de hele EU" ("in Nederland of de hele EU", "in de hele EU"), which fits every
   `{list}` sentence (all stand after "in"); the fact sheet's "Niet in {list}" too. The page text says "voor de hele EU".
2. **`src/i18n/nl/glossary/stubs-a.json`** (group stubs-a): `pineal-gland` has no plural alias; add "pijnappelklieren"
   (the epitalon page uses `<Term id="pineal-gland">` once as a workaround).
3. **`src/data/compounds/epitalon.yaml`**, WADA row `prohibited, S0`: nl-law §5.10 lists epitalon among the compounds for
   which WADA does not say whether S0 applies ("write 'ask'"). The Dutch page keeps the data's reading, with "Vraag het de
   Dopingautoriteit". If the editor prefers `unclear`, the English and Dutch pages both need their sport sentences changed.
4. **`src/data/sources/shared.yaml` `eu-directive-2001-83`**: repoint to the 2025-01-01 consolidation (eu-status fact-check,
   "For the merge"); the three pages cite it for art. 6(1).
5. **Allowlist (owner decision):** `aifa.gov.it` would let the thymosin page cite AIFA's own record that the Zadaxin
   authorisation is current (eu-status §5.10); I did not add it (not a Dutch, Belgian or EU body).

---

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three Dutch pages, the glossary file and these notes. Read first: the brief
(with "Added after step 1"), STYLE-NL, CONTENT-GUIDE §1–§13, research/nl/{nl-law,nl-care,nl-help,eu-status}.md with
their fact-check sections, research/nl/status/{mots-c,epitalon,thymosin-alpha-1}.yaml, research/nl-notes/merge.md,
MANIFEST-compounds-e.md and the 23 October snapshots. Compared against the current English pages and data files.
Fetched today: the Dopingautoriteit's translation of the 2026 list (PDF, HTTP 200; "S4.4. Metabole modulatoren",
MOTS-c listed); PubMed 25535022 (Vanhee 2015: affiliation "Scientific Institute of Public Health (WIV-ISP) ...
Brussels, Belgium"). No new source, no allowlist host, no file outside the group edited; no build, commit or push.

**What was confirmed.** Every cite id resolves; every English id missing from the Dutch pages is US/UK/CA/AU framing
and is listed in §2 above. All `<Claim>`/KeyNumber levels match English (mots-c 1× animal; epitalon 2× animal;
thymosin 2× human-controlled); mechanism kinds and levels identical; every study id of the three data files has a
Dutch finding and limitation; every number checked against English in Dutch format; fold count identical (10 / 9 / 7).
`regulatory_notes` only EU, NL, WADA, matching research/nl/status. Routes anchors are the brief's seven, and
`/nl/legal/sport-and-doping/#waar-je-het-kunt-vragen` is a real heading slug on the Dutch page. No `/en/` link, no
link to legal/us, uk, ca, au or ireland-and-new-zealand. Help levels per STYLE-NL §5.1 and brief item 2; Lareb for side
effects, one FAGG line, `<JurisdictionCard code="NL" />`. "je" throughout; no "u". No dose, schedule, seller hint or
commerce word in a title, heading, Lead question, fold or figure title. The FDA epitalon countries (Belgium, Ireland,
France, Norway, Germany, Spain, Italy, Canada, Australia, UK; "none authorised by EMA") and the 2010/2016 orphan
designation (retinitis pigmentosa) match the registered briefing note; the Customs, art. 40, art. 68, IGJ, CBG
compassionate-use, OMON, CTIS and EMA orphan facts match research/nl (the fact-check sections win).

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| mots-c | description "Onderzocht bij muizen, nooit bij mensen gepubliceerd" | "Onderzocht bij muizen; geen studie bij mensen gepubliceerd" | calque, unclear Dutch | English page |
| mots-c | "Het recept zit in het DNA …" / "Het recept is een kort stukje …" | "De code ervoor zit …" / "De code ervoor is een kort stukje van een gen …" | "recept" is the fixed term for prescription (STYLE-NL §2.4); a second sense confuses | STYLE-NL §2.4 |
| mots-c | what-it-is row: "Ook elders vonden we geen goedkeuring." | "… vonden we geen goedkeuring, maar we hebben niet elk land nagekeken." | eu-status §5.7 UNRESOLVED (other member states not searched); the fold says the same | eu-status §5.7 |
| mots-c | limitation "het bedrijf dat medicijnen met MOTS-c ontwikkelde" | "… middelen op basis van MOTS-c …" | "medicijn" for an unapproved compound (STYLE-NL §5.6) | STYLE-NL §5.6 |
| mots-c | "jonge, middelbare en oude muizen"; "Begonnen op hoge leeftijd, verbeterde het …" (finding and evidence fold) | "jonge en oude muizen en … muizen van middelbare leeftijd"; "Kregen muizen het pas op hoge leeftijd, dan verbeterde hun lichamelijke conditie ook." | ungrammatical adjective; English participle construction | reynolds-2021 (English) |
| mots-c | "een gewone ELISA-test" | "een ELISA-test uit de handel" | English "commercial ELISA": "gewone" changed the meaning | knoop-2019 (English) |
| mots-c | CB4211 finding: "fase 1a/1b-studie met placebo als vergelijking van de aangepaste versie …" | "fase 1a/1b-studie van de aangepaste versie CB4211, met placebo als vergelijking (…)," | word order | – |
| mots-c | "Het kondigde aan dat het bedrijf zou worden opgeheven." | "Daarna kondigde het aan dat het zichzelf zou opheffen." | B1, active | sec-cohbar-2023-* |
| mots-c | KeyNumber who "één plek in China" | "één onderzoekslocatie in China" | "plek" unclear | ctgov-nct07505745 |
| mots-c | fact "Eén studie met placebo, sinds 2026 in China" | "… zoekt sinds 2026 deelnemers in China" | English "recruiting" was lost | ctgov-nct07505745 |
| mots-c | "de nuchtere glucose" | "de nuchtere bloedsuiker" | B1 term (STYLE-NL §2.5) | – |
| mots-c, epitalon | EU row, EU fold, EU note: "Het EMA heeft geen goedkeuring …" | "De gegevens van het EMA tonen geen goedkeuring, geen aanvraag en geen aanwijzing als weesgeneesmiddel" | the EMA's records hold none; the Commission, not the EMA, grants an authorisation | eu-status fact 9; status files |
| mots-c, epitalon | PCAC point 5: "Semax is in Rusland als medicijn geregistreerd. Een plek op de 503A-lijst zou Amerikaanse apotheken alleen laten bereiden op recept. Het is geen handelsvergunning" | "… als medicijn goedgekeurd. Met een plek op de 503A-lijst zouden Amerikaanse apotheken het op recept mogen bereiden. Dat is geen handelsvergunning" | "geregistreerd" avoided (STYLE-NL §2.4; the Dutch sport page says "goedgekeurd"); "laten bereiden" means "have it made"; hypothetical | CONTENT-GUIDE §1 point 5; STYLE-NL §5.4 |
| mots-c | stop callout, low sugar: "Helpt dat niet, of word je verward?" (after "bent verward" in the sign) | "Ben je verward, of helpt de suiker niet? Bel dan direct …" | Thuisarts: confusion alone is "Spoed"; the old wording read as if confusion had to start later | thuisarts-hypo-diabetes-type-2; nl-help fact 12 |
| mots-c, epitalon | artsenverklaring: "een onderzoeksdossier van de fabrikant … Een flacon 'voor onderzoek' heeft die papieren niet." | "het onderzoekersdossier dat een bedrijf erover schrijft (Investigator's Brochure of IMPD) … Een flacon 'voor onderzoek' komt met geen van beide; dat is onze lezing." | nl-care §5.11 asks for this to be labelled as our reading; same words as `/nl/legal-routes/#artsenverklaring` | igj-qa-zonder-handelsvergunning; nl-care §5.11 |
| mots-c, epitalon | zelf invoeren: "Een pakket valt niet onder de regel voor reizigers." | "Dat geldt ook als je het zelf meeneemt op reis of laat opsturen." (+ `nl-gnw-art-18-licence`) | the old line implied a traveller exception that would cover a compound authorised nowhere; art. 40(2) has no own-use exception, art. 18(6)(a) lifts only the licence; same as the routes page | nl-law facts 4, 7, 38, 43 |
| mots-c | "Het enige onderzoek … is in China." | "… loopt in China." | idiom | – |
| epitalon | fact value "Vooral één groep in Sint-Petersburg: 2 op de 3 artikelen" | "Eén groep in Sint-Petersburg: ongeveer 2 op de 3 artikelen" | "about" (English) was lost: a firmer number than the count supports | pubmed-epitalon-count-2026-10-22 |
| epitalon | human_clinical "maar op het randje"; independence "Maar een handvol …" | "Volgens onze indeling net fase 2."; "Alleen een handvol …" | colloquial; sentence-initial "Maar" reads as "but" | – |
| epitalon | retina finding "een slijtende netvliesziekte" | "een degeneratieve netvliesziekte" | not Dutch usage | khavinson-2002 (English) |
| epitalon | ivko finding "steeg na 20 dagen een spray onder de tong een afbraakproduct … 1,7 keer" | "In deze studie kregen 40 vrouwen … 20 dagen een spray onder de tong. Met epitalon werd een afbraakproduct … 1,7 keer zo hoog." | ungrammatical (the spray "rose"); no sentence-initial digits | ivko-2020 (English) |
| epitalon | what-it-is Lead "Vier aminozuren uit het lab, …" | "Een kunstmatig peptide van vier aminozuren, aangeprezen tegen veroudering. Voor zover bekend keurde geen land het goed." | a bare "Vier aminozuren" is not a clear B1 subject; kept at 18 words or fewer | English Lead |
| epitalon | what-it-is row "Ook de … FDA vond het nergens goedgekeurd: niet in de VS en niet in tien andere landen" | "De … FDA vond ook geen goedkeuring in de VS of in tien andere landen, zoals België, Duitsland en Italië." | "nergens" overstated what eleven countries checked | fda-pcac-2026-epitalon-briefing |
| epitalon | regulatory fold "Ook het EMA had niets goedgekeurd." / orphan "voor een erfelijke netvliesziekte" | "Een goedkeuring voor de hele EU, via het EMA, vond de FDA ook niet." / "voor retinitis pigmentosa, een erfelijke netvliesziekte" | the EMA does not approve; name the disease the briefing names | fda-pcac-2026-epitalon-briefing |
| epitalon | risks Lead "… en niemand controleert de producten." | "Producten zijn niet op kwaliteit gecontroleerd." | overstated (Customs and labs do test products); English "products are unchecked" | vanhee-2015 (English) |
| epitalon | "Een gewoon kankeronderzoek van twee jaar bij dieren bestaat niet." | "Het gebruikelijke kankeronderzoek van twee jaar bij dieren is niet gedaan." | English "No standard two-year cancer study exists" | fda-pcac-2026-epitalon-briefing |
| epitalon, thymosin | sepsis line: "Ben je verward, adem je heel snel of is je huid bleek of vlekkerig? Bel 112." | "Ben je ook verward, of adem je heel snel? Bel dan 112." | the skin sign is not in the cited Thuisarts page (its signs: fever or low temperature, fast breathing, fast heartbeat, drowsy or confused); 112 kept as the site's faster level | thuisarts-sepsis; nl-help fact 11 and table 17 |
| thymosin | TL;DR "Kan een arts het voorschrijven? Niet op de gewone manier. In zeldzame gevallen kan het via een artsenverklaring; de inspectie beslist." | "Mag een arts het voorschrijven? Niet als gewoon recept: het is hier niet goedgekeurd. Alleen in uiterste gevallen kan de inspectie het toestaan." | "zeldzame" was our inference; "in uiterste gevallen" is the IGJ's word; reads less like a route hint (advertising test; the CONTENT-GUIDE §1 Health Canada caution) | igj-qa-zonder-handelsvergunning |
| thymosin | what-it-is row "Het CBG heeft geen product in zijn register. Het EMA heeft geen goedkeuring voor de hele EU." | "… geen product met thymosine alfa-1 in zijn register. De gegevens van het EMA tonen geen goedkeuring voor de hele EU." | which product was missing; EMA wording as above | cbg-gib-search-status-2026-10-27; ema-medicines-json |
| thymosin | EU row, supply cell: cited only `eu-directive-2001-83` for "zoals Italië" | + `fda-pcac-2024-thymosin-alpha-1-briefing` | the Italian authorisation needs its own source (eu-status §5.10) | eu-status §5.10 |
| thymosin | OMON: "bij stemmingsklachten …" / "Het kreeg in 2022 een positief oordeel volgens de WMO, maar de status is 'werving nog niet gestart'" | "bij stemmingsstoornissen …" / "Sinds 2022 staat het in het register als goedgekeurd volgens de WMO, maar met de status 'Werving nog niet gestart'" | the record's title says "stemmingsstoornissen"; the record shows publication on 19 January 2022, not the date of approval | omon-nl-omon51992; nl-care fact 48 |
| thymosin | artsenverklaring: "in zeldzame gevallen … Een apotheek vraagt de IGJ daarna om een ontheffing, en de IGJ beslist." | "in uitzonderlijke gevallen … Een apotheek, groothandel of fabrikant in Nederland vraagt de IGJ … Jij kunt dat niet zelf aanvragen. De IGJ beslist, en kan nee zeggen. … Ook moet er in Nederland geen goed ander medicijn te krijgen zijn." | who may apply, that the patient cannot, that the IGJ may refuse, and the no-alternative condition were missing | igj-leveren-op-artsenverklaring; igj-qa-zonder-handelsvergunning; nl-regeling-gnw-art-3-17; nl-care facts 20–23 |
| thymosin | zelf invoeren: "een medicijn zonder Nederlandse handelsvergunning mag je niet invoeren of naar Nederland brengen, ook niet voor eigen gebruik. Een pakket …", then "Of een reiziger … mag meenemen, zegt geen bron …" | "een medicijn zonder handelsvergunning voor Nederland of de hele EU mag je niet invoeren of laten opsturen, ook niet voor eigen gebruik. De uitzondering voor reizigers … geldt niet voor een pakket. Of je als reiziger … mag meenemen, zegt geen bron die we vonden duidelijk." (traveller sentence cited to `douane-medicijnen-reizen-2026`, `nl-gnw-art-18-licence`) | the first sentence ruled out what the last one called unknown (nl-law §5.13); a central EU authorisation also counts (art. 40(1)) | nl-law facts 4, 7, 41 and §5.13 |
| glossary | `interleukin-12` "Dendritische cellen maken het." | "Onder andere dendritische cellen maken het." | other immune cells make it too | – |
| glossary | `hepatocellular-carcinoma` "De meest voorkomende vorm van leverkanker." | "De meest voorkomende vorm van kanker die in de lever zelf begint." | precision (primary liver cancer) | – |

Validator (`--only compounds/nl/mots-c`, `epitalon`, `thymosin`, `nl-stubs-a1`): 0 errors, 0 warnings each (one
Lead-length warning caused by an edit was fixed). Residue check (`--only … --details`): 0 error, 0 frame, 0 warn hits
each.

### Remaining concerns for the reviewer

1. **Epitalon in sport (nl-law §5.10 UNRESOLVED):** the research lists epitalon among the compounds for which WADA does
   not say whether S0 applies ("write 'ask'"), but the data file, the derived tile, the English page and
   `/nl/legal/sport-and-doping/` ("Andere peptiden … Onder S0") say prohibited under S0. The page keeps the data's
   reading (presented as ours, "Daarom gaan we ervan uit …", plus "Vraag het de Dopingautoriteit"), but the line under
   the regulatory figure ("In de sport geldt overal dezelfde regel: epitalon is altijd verboden onder S0") is
   categorical. Editor decision for the data and both languages (also §6 item 3 above).
2. **Thymosin tile:** "Niet goedgekeurd in Nederland of de EU" next to "Goedgekeurd in Italië" reads as a contradiction
   (Italy is in the EU); fix in `src/i18n/nl/vocab.json` (§6 item 1 above), not per page.
3. **Thymosin TL;DR route line:** now uses the IGJ's own restraint ("in uiterste gevallen"); the legal reviewer should
   still confirm that naming this route in the TL;DR is not read as a hint (§4 item 2 above).
4. **Italian authorisation current?** (eu-status §5.10): cited through the FDA 2024 briefing and the EMA 2003 text only;
   AIFA confirms it but is not allowlisted (not a Dutch, Belgian or EU body; not added).
5. **SEC filings naming CohBar** (`sec-cohbar-*`) stay as on English (developer, not seller); owner's call (§4 item 5).
6. **"aangeprezen"** for others' online promotion (§4 item 1): kept; every such line is followed in the same box or
   paragraph by "niet getest bij mensen" or "onbekend".
7. **`eu-directive-2001-83`** still points at the 2022 consolidation (eu-status "For the merge"); for the final sweep.
8. Not my files, for the final sweep: `stubs-a.json` lacks the plural alias "pijnappelklieren" (§6 item 2); the
   allergic stop sign is worded differently across Dutch compound pages ("Dikke lippen of keel", "Dik gezicht of keel",
   "Opgezwollen gezicht of keel"); one wording site-wide would help.
