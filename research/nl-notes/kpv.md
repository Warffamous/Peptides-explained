# Notes: group kpv (Dutch site, 27 October 2026)

Files written or changed by this group:

- `src/content/compounds/nl/kpv.mdx` (new): the Dutch KPV page.
- `src/data/sources/nl-kpv.yaml` (new): 2 sources (`ctgov-kpv-search-2026-10-27`, `ctis-kpv-search-2026-10-27`).
- `src/i18n/nl/glossary/nl-kpv.json` (new): 3 terms (`macrophage`, `interleukin`, `map-kinase`).
- `src/i18n/nl/glossary/kpv.json` (this compound's Dutch glossary, owned here): one fix (below).

Nothing else was edited. No commit, no build. `config/link-allowlist.json` needed no new host
(`clinicaltrials.gov` and `euclinicaltrials.eu` are listed).

Checks at the end: `npx tsx scripts/validate-content.ts --only compounds/nl/kpv` → 0 errors, 0 warnings;
`--only nl-kpv` and `--only glossary/kpv` → 0 / 0. `npx tsx scripts/check-locale-residue.ts --only compounds/nl/kpv --details`
→ 0 error/frame hits, 0 warn hits (every FDA, 503A and PCAC line carries `{/* residue-ok: … */}` or `# residue-ok: …`);
`--only glossary/kpv` and `--only nl-kpv` → 0.

## Page: compounds/kpv

**Method:** `translated` (`translation: { method: translated, from: en, review: pending }`). The regulatory section and
the reporting and legal-routes part of the harm-reduction section are rewritten for the Netherlands and the EU, as the
brief says for compound pages.

**Base:** the current English page (`src/content/compounds/en/kpv.mdx`, with TL;DR, folds, the Explainer, the
Infographic and the ProductCheck line) and `src/data/compounds/kpv.yaml`. Same frontmatter fields, same 7 `<Section>`s
in the same order, same components and figures (5 Compare, 3 KeyNumber, 1 Diagram, Explainer, Infographic, Mechanism,
StudyTable, RegulatoryTable, ProductCheck, stop Callout, WarningSigns, Checklist), plus one `<JurisdictionCard code="NL" />`.
All 7 mechanism steps keep their `kind` and `level`; all 12 study ids have a Dutch `finding` and `limitation`; the 12
`<Claim>`s (6 in-vitro, 6 animal) are all there. `regulatory_notes` only for EU, NL and WADA. No `indications` (no
authorised product). TL;DR 82 words in 5 pairs; lede 17 words; main risk 12 words; stop signs 6, 6 and 7 words.

**What came back from the saved material (23 October, `MANIFEST-compounds-c.md`, snapshot `compounds-en/kpv.mdx`):**

- The "Netherlands and the EU" table idea and the EU/NL fold (what was checked; EU: no authorisation and no EMA record;
  NL: the CBG register, the Geneesmiddelenwet definition of a medicine and the trade ban with the narrow pharmacy
  exception; "the US vote does not apply here"). Every fact was re-checked against `research/nl/eu-status.md`,
  `research/nl/status/kpv.yaml` and `research/nl/nl-law.md` (27 October) and re-cited to the 27 October sources
  (`cbg-gib-search-status-2026-10-27`, `ema-medicines-json`, `ema-orphan-designations-json`, `ema-under-evaluation-2026-10`,
  `nl-gmw-art-1-geneesmiddel`, `nl-gmw-art-40-handelsvergunning`).
- The old EU note's "no European Pharmacopoeia monograph": **left out** (status file: "not re-checked here … keep it
  only after a re-check, or leave it out"; the FDA briefing's note says the FDA found none in May 2026, but no Dutch
  research re-checked it).
- Germany and Belgium paragraphs: not used (Germany is not a Dutch-site jurisdiction; Belgium only as one line on
  reporting, with a link to `/nl/legal/be/`).

**What was rewritten for the Netherlands:**

- TL;DR line 3 ("Is it legal to sell? Not in the US, UK, Canada or Australia.") → "Wat zegt de wet? Zonder
  handelsvergunning mag niemand het verkopen, doorgeven of invoeren." (Gnw art. 40(2); the question avoids the commerce
  word "verkopen", STYLE-NL §7).
- What-it-is Compare row "approved medicine?" and the paragraph after it: NL and EU instead of US/UK/CA/AU; "we know of
  none anywhere" kept.
- Regulatory Compare: rows Nederland and Europese Unie (approved? / may anyone trade or pass it on?). The line "a US rule
  would change nothing in the UK, Canada or Australia" → "… niets in Nederland of de EU. Hier telt alleen een goedkeuring
  van de EU of van het CBG" (`nl-gmw-art-40-handelsvergunning`, `eu-directive-2001-83`).
- Folds: (1) status table and sport; (2) **"De Europese Unie en Nederland"** (new, replaces "The UK, Canada and
  Australia"; moved before the US fold so the reader's own frame comes first): what we checked on 27 October, that other
  member states' registers were not searched (eu-status §5 item 7: never "in no EU country"), the "approved nowhere"
  reasoning paragraph from English, the EU paragraph (no authorisation, no application incl. refused or withdrawn, no
  orphan designation, no CTIS trial; Directive 2001/83 art. 6(1)), the NL paragraph (CBG register; Gnw art. 1 and 40;
  the "alleen voor onderzoek" label does not change it, with the Customs quote "Onderzoeksdoeleinden spelen dan geen
  rol"; Customs on other peptides as experimental products recommended on social media), and **Zelf invoeren** (traveller
  rule does not cover a parcel or a medicine without a handelsvergunning; import forbidden also for own use; link
  `/nl/legal-routes/#zelf-invoeren`, `/nl/legal/nl/`); (3) the US and PCAC fold, kept as world context.
- Sport (WADA): S0 paraphrased from WADA and the Dopingautoriteit's Dutch translation; "Twijfel je? Vraag het de
  Dopingautoriteit." added (see UNRESOLVED below); link `/nl/legal/sport-and-doping/`.
- Harm reduction: stop callout with the Dutch help levels (STYLE-NL §5.1; brief "Added after step 1" item 2): "Bel direct
  je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." for an infected site and for fever; "Bel dan direct 112"
  when the throat swells or breathing is hard; closing line "Is het ernstig? Bel 112." The legal-routes list uses the
  seven fixed anchors of `/nl/legal-routes/` (#recept #off-label #artsenverklaring #magistrale-bereiding
  #klinisch-onderzoek #compassionate-use #zelf-invoeren). Reporting: Bijwerkingencentrum Lareb (anyone may report, also
  for a product not from a pharmacy; Lareb gives no medical advice), `<JurisdictionCard code="NL" />`, one Belgian line
  ("In België meld je een bijwerking bij het FAGG", `fagg-melden-bijwerking-patient`) and the link to `/nl/legal/be/`.
- Added links (all Dutch routes of the brief): `/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt` (the fixed
  anchor, brief item 3; heading checked in the Dutch file), `/nl/legal/research-use-only/`, `/nl/legal/nl/`,
  `/nl/legal/sport-and-doping/`, `/nl/legal/be/`. `/nl/compounds/bpc-157/` and `/nl/compounds/tb-500/` are linked without
  an anchor (other groups' pages, not written yet).
- Trial registers: the English "as of 20 October … ClinicalTrials.gov or the EU trials register" plus the Canadian and
  Australian searches → our own searches of 27 October (ClinicalTrials.gov worldwide: "KPV" 0; CTIS all member states:
  "KPV" 0, "Lys-Pro-Val" 0, control retatrutide 9) and the Dutch-site search (`ctgov-nl-peptide-search-2026-10-27`).

**Advertising test (brief, "Added after step 1", item 1): wording changed against the English, on purpose:**

- "Promising cell and mouse data are a reason to run a good trial" → "Resultaten in cellen en bij muizen zijn een reden om
  goed onderzoek bij mensen te doen. Ze vervangen dat onderzoek niet." ("veelbelovend" left out).
- Fold title "Where the evidence is promising, and where it is not" → "Een kandidaat voor onderzoek, maar zonder onderzoek
  bij mensen".
- "Animals: promising, but shallow and clustered" → "Dieren: resultaten, maar ondiep en uit weinig labs".
- "The cell evidence is KPV's strongest suit" → "Het werk in cellen is het deel van het onderzoek naar KPV dat het vaakst
  is herhaald"; "the strongest therapeutic signal" (grade rationale, evidence map, weak-joints fold) → "waar de
  resultaten bij dieren het duidelijkst zijn" (no "sterkste", STYLE-NL §5.6).
- "genuinely reassuring about the basic biology" → "maakt de basale biologie geloofwaardiger".
- "No reliable checks" (main risk) → "Niemand controleert flacons." ("betrouwbaar" is banned about a product, §5.6).
- "the useful half of alpha-MSH" → "de helft … die de onderzoekers wilden".
- "Natural does not mean harmless": kept, it negates the claim. "promoted online" → "aangeprezen" (others' marketing,
  described neutrally). Every effect on the page carries its level (cells, mice, rabbits) and the "not in people" line.

### Dropped citations (all US/UK/CA/AU/IE/NZ framing; brief "What leaves")

| Cite id(s) | Where on English | Why it went | What replaced it |
|---|---|---|---|
| `uk-mhra-substance-index-status-c-2026-10-23`, `ca-dpd-search-status-c-2026-10-23`, `ca-noc-search-status-c-2026-10-23`, `ca-dpd-search-canada-legal-2026-10-23`, `au-artg-search-status-c-2026-10-23`, `au-artg-search-status-d-2026-10-23`, `mhra-products-search-status-d-2026-10-23` | "approved?" row, what-it-is paragraph, PCAC point 5, UK/CA/AU fold, legal-routes paragraph | status in the UK, Canada, Australia | `cbg-gib-search-status-2026-10-27`, `cbg-geneesmiddeleninformatiebank`, `ema-medicines-json`, `ema-medicines-search`, `ema-orphan-designations-json`, `ema-under-evaluation-2026-10` |
| `usc-21-355` | US row of the four-country table | US interstate new-drug rule (US legal frame); the table is now NL/EU | `nl-gmw-art-40-handelsvergunning`, `nl-geneesmiddelenwet`, `eu-directive-2001-83`, `eu-regulation-726-2004` (`usc-21-353a` stays in the PCAC fold) |
| `uk-hmr-2012-reg-46`, `uk-hmr-2012-reg-17`, `mhra-foi-22-431-personal-import-seizures` | UK table row, "each country decides" line, UK fold | UK law and UK personal import | `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-1-geneesmiddel`, the Customs sources below |
| `ca-food-and-drug-regulations`, `ca-fdr-c08-001-new-drug`, `ca-hc-2026-04-think-twice-peptides`, `ca-hc-recalls-search-status-c-2026-10-23`, `ca-cbsa-d19-9-1`, `ca-hc-gui-0116-personal-import` | Canada row and fold | Canadian law, seizures, personal import | `douane-2026-08-illegale-online-handel-medicijnen`, `douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel`, `douane-medicijnen-reizen-2026`, `douane-invoer-geneesmiddelen-2026`, `nl-rbdha-2019-4817-postzending-eigen-gebruik` |
| `au-poisons-standard-2026-10`, `au-tga-peptide-products-hub`, `au-tga-how-we-regulate-peptides`, `au-tg-act-s19b-19d-offences`, `au-tga-2026-05-peptide-import-warning`, `au-tga-2026-04-peptide-responsibilities` | Australia row and fold | Australian law, schedule, import | as above |
| `fda-personal-importation`, `fda-rpm-ch9-personal-importations` | "Bringing it into the US" (US fold) | a US personal-import route (brief: other countries' personal import rules leave) | the Dutch **Zelf invoeren** paragraph and link; the rest of the US/PCAC fold stays |
| `ctgov-search-status-c-2026-10-23`, `ca-hc-ctdb-search-status-c-2026-10-23`, `au-anzctr-search-status-c-2026-10-23` | "Studies in people" fold | trial searches by country for CA, AU, UK, IE, NZ | `ctgov-kpv-search-2026-10-27`, `ctis-kpv-search-2026-10-27` (new, worldwide and all EU member states), `ctgov-nl-peptide-search-2026-10-27` |
| `fda-medwatch`, `mhra-yellow-card`, `ca-hc-medeffect-reporting`, `ca-hc-canada-vigilance`, `au-tga-report-adverse-event`, `ie-hpra-report-side-effect`, `nz-medsafe-report-a-problem` (and the four inline links) | "Reporting a side effect" | other countries' reporting routes | `lareb-bijwerkingen-melden`, `lareb-2021-illegal-medicines`, `<JurisdictionCard code="NL" />`, `fagg-melden-bijwerking-patient` (Belgium, one line) |
| `nhs-cellulitis`, `nhs-sepsis`, `nhs-anaphylaxis` | stop signs, stop callout, the infection sentence in "The product is the first risk", the sterile-technique sentence | UK patient pages that give UK help routes (NHS 111, 999); the Dutch help levels rest on Thuisarts | `thuisarts-wondroos`, `thuisarts-sepsis`, `thuisarts-steenpuist`, `thuisarts-dikke-ogen-lippen`, `thuisarts-spoed-wie-bellen` (reused, fact-checked by nl-help on 27 October); the infection and sterile-technique sentences also keep `cdc-2024-safe-injection-practices` (evidence, already on the page) |

Every other English cite stays, including all FDA PCAC sources (`fda-pcac-2026-kpv-briefing`, `-briefing-intro`,
`-07-meeting`, `-questions`, `-presentations-day1`, `-semax-briefing`), `fda-category-2-safety-risks`, `usc-21-353a`,
`fda-1993-lyophilization-guide`, `wada-2026-list-en`, `wada-2027-list-en` and all scholarly sources.

### UNRESOLVED points and how the page handles them

- **National authorisations in other EU member states** (eu-status §5 item 7): not searched. The page says "De registers
  van andere EU-landen hebben we niet doorzocht" and keeps the English reasoning for "nergens goedgekeurd" (no human study
  exists; no regulator authorises without clinical data). It never says "in geen enkel EU-land".
- **European Pharmacopoeia monograph** (status file note; merge §9): left out.
- **WADA S0 for compounds the list does not name** (nl-law §5 item 10 lists KPV with "ask the Dopingautoriteit"; merge
  §9): the data file's WADA row is `prohibited` / S0 / at all times (it drives the glance tile, which this group may not
  edit), and the Dutch sport page puts KPV under "Andere peptiden die geen medicijnautoriteit heeft goedgekeurd: verboden
  onder S0". The page says: not named on the list; "Volgens de tekst van S0 valt het dus onder dat verbod" (KPV has no
  approval anywhere); the 2027 list adds "peptiden" to S0; "WADA noemt KPV zelf niet. Twijfel je? Vraag het de
  Dopingautoriteit." The risks and harm-reduction lines ("altijd verboden … onder S0") follow the English and the data.
  For the reviewer and the final sweep (below).
- **Whether a KPV vial is a "geneesmiddel" or a "werkzame stof" for Customs** (nl-law §5 item 4) and **what happens to a
  given parcel** (5.3, 5.5): not stated; the page gives the law (art. 1 definition, art. 40 ban, no own-use exception for
  import) and links `/nl/legal-routes/#zelf-invoeren`, which describes what "kan" happen.
- **Possession and use** (nl-law 5.1): not discussed (the English page does not discuss them either).
- **The artsenverklaring for a substance authorised nowhere** (merge §9): the page only lists the route with its fixed
  anchor; it does not say whether it applies to KPV.
- **FDA minutes of the PCAC meeting**: the page keeps the English "Op 20 oktober 2026 had de FDA geen schriftelijk verslag
  gepubliceerd" (a US fact, not re-checked by the Dutch research). See the final sweep.

### Open questions for the reviewers

**Medical**

1. Stop callout, third item: hives or swollen lips alone (breathing normal) get no separate level beyond the strip's "Is
   het ernstig? Bel 112." (Thuisarts: an appointment on a working day; the WarningSigns list below it has that as `stop`).
   Is that acceptable, or should the item say "Alleen bulten of dikke lippen, en ademen gaat goed? Stop dan met het product
   en maak een afspraak met je huisarts."?
2. Fever after an injection: "Bel direct je huisarts … huisartsenpost" (site level `urgent`), with Thuisarts sepsis and
   steenpuist as sources; nl-help's fact-check notes that the sepsis page's "Wanneer bellen" list says "Neem ook contact
   op" without "direct".
3. Mechanism step 6 title: English "Faster recovery in rodent colitis and wounds"; the wound result is in rabbits, which
   are not rodents, so the Dutch title reads "Sneller herstel bij dieren met colitis of een wond". Please confirm (and
   consider the same fix on English; not edited here).

**Legal**

4. Regulatory NL paragraph: "Volgens de Geneesmiddelenwet is een stof een geneesmiddel als die wordt aangeboden als middel
   om een ziekte … te genezen of te voorkomen. Of als die bedoeld is om functies van het lichaam te veranderen …", followed
   by the art. 40 ban. The page does not say outright that every KPV product is a geneesmiddel. Is the TL;DR "Zonder
   handelsvergunning mag niemand het verkopen, doorgeven of invoeren" acceptable as a summary, given that the presentation
   and function tests decide per product (nl-law facts 31–32)?
5. `douane-2026-08-illegale-online-handel-medicijnen` is cited for "Onderzoeksdoeleinden spelen dan geen rol" and for the
   point that other peptides are popular; its body text names a webshop (never quoted). Same question as nl-law §6.12.
6. The S0 handling above (statement of the S0 text plus "Vraag het de Dopingautoriteit").
7. Advertising test: please confirm the reworded evaluative lines listed above are balanced enough (Raad van State
   25 February 2026; Rb Amsterdam 10 April 2026).

## Style terms (STYLE-NL lacks them; the word used)

| English | Dutch used | Note |
|---|---|---|
| free base · acetate salt | vrije base · acetaatzout | as the glossary entry `free-base-and-salt` (tb-500.json) |
| solid-phase peptide synthesis | vaste-fasesynthese | glossary `solid-phase-peptide-synthesis` (basics.json); B1 gloss "een chemische manier om een peptide te bouwen" |
| promoted (online) · promotion | aangeprezen · aanprijzing | only for what others do; never the site's own voice |
| binding test | bindingsproef | |
| macrophage · interleukin · MAP kinase | macrofaag (opruimcel van het afweersysteem) · interleukine · MAP-kinase | new glossary entries in nl-kpv.json |
| neutrophils | neutrofielen (een soort witte bloedcel) | explained in place |
| nanoparticles · delivery engineering | nanodeeltjes · technieken voor afgifte (om een stof op de juiste plek af te geven) | |
| mice bred without PepT1 (knockout) | muizen zonder PepT1, muizen die zonder PepT1 zijn gefokt | glossary `knockout-mouse` exists ("knock-outmuis"), not needed in the text |
| colitis-associated cancer · tumour burden | colitis met kanker, darmkanker door langdurige colitis · tumorlast | |
| chemically induced colitis | chemisch opgewekte colitis | alias of glossary `dss-colitis` |
| cadaver skin · iontophoresis · microneedles | huid van overleden donoren · een zwakke elektrische stroom · heel kleine naaldjes | |
| immortalised cell line | cellen van een cellijn | |
| orphan designation | aanwijzing als weesgeneesmiddel (een aparte status voor middelen tegen zeldzame ziekten) | glossary `orphan-designation` (stubs-a.json) |
| FDA nomination (503A) | aanvraag | |
| notice-and-comment rulemaking | een formele regel, met een openbare ronde voor reacties (notice-and-comment) | §5.4 has "een formele regel (rulemaking)" |
| registered as a medicine in Russia (Semax) | in Rusland als medicijn goedgekeurd | (checker: was "toegelaten"; now STYLE-NL §2.4 "goedgekeurd", as on the sport, routes, start-here and whats-changing pages; see the Check section) |
| inflammatory bowel disease | inflammatoire darmziekte (glossary term); B1 "chronische darmontsteking" | |
| gym-goers | mensen die naar de sportschool gaan | |
| inflammation markers · scope checks | ontstekingswaarden · kijkonderzoek van de darm | |
| to trade or pass on (table head) | verhandelen of doorgeven | keeps "verkopen" out of a label (§7) |

## For the final sweep (files this group does not own)

1. `src/data/compounds/kpv.yaml`, WADA row: `prohibited`, S0, at all times. nl-law §5 item 10 and merge §9 list KPV among
   the compounds whose S0 status is UNRESOLVED ("ask the Dopingautoriteit"). If the editor decides the Dutch site must
   treat it as unresolved, the row (or a sourced `glance.sport` override on the Dutch page) is the place; today the page
   follows the data and `/nl/legal/sport-and-doping/`.
2. `src/data/sources/shared.yaml`, `eu-directive-2001-83`: still the 2022-01-01 consolidation (already in merge §9). The
   Dutch KPV page cites it for art. 6(1), which is the same in the 2025 consolidation.
3. Semax wording across Dutch pages (corrected by the checker, see the Check section): this page now writes "in Rusland
   als medicijn goedgekeurd" (STYLE-NL §2.4), as `/nl/legal/sport-and-doping/`, `/nl/legal-routes/`, `/nl/start-here/`,
   `/nl/legal/whats-changing/` and `compounds/bpc-157` do. Other pages still write "toegelaten" (semax, selank,
   the-case-for-reform) or "geregistreerd" (epitalon, ipamorelin, mots-c, tb-500).
4. `src/i18n/nl/glossary/kpv.json`: the alias "ziekte van Crohn" was removed from `inflammatory-bowel-disease` (it is one
   of the diseases, not the same concept; STYLE-NL §6). If Dutch pages want a tooltip for "ziekte van Crohn", add a
   separate entry (id `crohns-disease`) in a shared glossary file.
5. Before publishing: re-check on fda.gov whether the PCAC minutes or vote results have been posted (the page says "Op 20
   oktober 2026 had de FDA geen schriftelijk verslag gepubliceerd", from the English page).
6. English page (not edited, for its owner): mechanism step 6 says "rodent colitis and wounds", but the wound study is in
   rabbits (see medical question 3).

## Check (independent, 27 October 2026)

Independent fact-check and edit of `src/content/compounds/nl/kpv.mdx`, `src/data/sources/nl-kpv.yaml`,
`src/i18n/nl/glossary/nl-kpv.json`, `src/i18n/nl/glossary/kpv.json` and this file, against the current English page
(`src/content/compounds/en/kpv.mdx`), `src/data/compounds/kpv.yaml`, the brief (incl. "Added after step 1"), STYLE-NL,
CONTENT-GUIDE and the fact-checked research of 27 October 2026 (`research/nl/nl-law.md`, `nl-help.md`, `nl-care.md`,
`eu-status.md`, `status/kpv.yaml`; `research/nl-notes/merge.md`). Nothing outside this group was edited; no commit, no
build; `config/link-allowlist.json` needed no new host.

**What was checked.**

- *Science parity.* Every English `<Cite>` id compared with the Dutch page (script diff): the 38 ids that left are all
  US/UK/CA/AU/IE/NZ framing and all are in the writer's dropped-citations table above; 29 Dutch, EU and Thuisarts ids
  came in. 12 `<Claim>`s on both pages (6 `in-vitro`, 6 `animal`), same statements. 7 mechanism steps: same `kind` and
  `level`. All 12 study ids have a Dutch `finding` and `limitation`, read one by one against English (numbers: 342,43 Da,
  60 uur, 12.000×, 40 tot 50, 3 december 2025, 8–6–1). All figures kept (5 Compare, 3 KeyNumber, Diagram, Explainer,
  Infographic, Mechanism, StudyTable, RegulatoryTable, ProductCheck with the same extra line, stop Callout, WarningSigns,
  Checklist). Only the US "Bringing it into the US" paragraph left (personal-import route, brief "What leaves").
- *New sources.* Both searches re-run today with curl: ClinicalTrials.gov API `query.term=KPV` 0, `query.intr=KPV` 0,
  `query.term=KPV&query.locn=Netherlands` 0, and the note's counts confirmed ('Lys-Pro-Val' 61, 'lysine-proline-valine'
  35, 'alpha-MSH 11-13' 8); CTIS public API `containAll` 'KPV' 0, 'Lys-Pro-Val' 0, control 'retatrutide' 9; the CTIS
  search page answers HTTP 200. Metadata (authors, titles, URLs) match the registers. No entry names a seller.
- *Reused Dutch/EU ids* (cbg-gib-search-status-2026-10-27, cbg-geneesmiddeleninformatiebank, ema-medicines-json,
  ema-medicines-search, ema-orphan-designations-json, ema-under-evaluation-2026-10, eu-directive-2001-83,
  eu-regulation-726-2004, nl-geneesmiddelenwet, nl-gmw-art-1-geneesmiddel, nl-gmw-art-40-handelsvergunning, the four
  Douane ids, nl-rbdha-2019-4817-postzending-eigen-gebruik, the five Thuisarts ids, lareb-bijwerkingen-melden,
  lareb-2021-illegal-medicines, fagg-melden-bijwerking-patient, dopingautoriteit-vertaling-dopinglijst-2026,
  wada-2027-list-explanatory-note, ctgov-nl-peptide-search-2026-10-27, cdc-2024-safe-injection-practices): each read in
  its record and against the research fact it rests on (nl-law facts 2, 4, 5, 27, 31, 38–43, 47–48; nl-help facts 10,
  11, 17, 19, 21; nl-care fact 49; eu-status fact 9; status/kpv.yaml). Each supports the sentence it is cited for.
- *Fetched today:* the FDA PCAC meeting page (HTTP 200; "Event Materials" lists the briefing documents, questions,
  agenda, roster and presentations, no minutes or vote summary; "Content current as of: 08/06/2026") and Thuisarts
  "Ik heb een sepsis" (HTTP 200; "U bent zo ziek dat uw organen beschadigd raken").
- *Rules:* no /en/ link and no link to legal/us, uk, ca, au or ireland-and-new-zealand; all 19 internal links are brief
  routes; the seven route anchors are the brief's; `#wat-een-labrapport-wel-en-niet-zegt` is a heading on
  `src/content/pages/nl/safety/product-risk.mdx` (line 133) and `## Zelf invoeren` is on `legal-routes.mdx` (line 264);
  help levels as STYLE-NL §5.1 and brief item 2 ("Bel direct je huisarts. Is de praktijk dicht? Bel dan de
  huisartsenpost." / "Bel dan direct 112" / "Is het ernstig? Bel 112."); Lareb for side effects; Belgium one line plus
  `/nl/legal/be/`; no "u"; no commerce token in any title, heading, Lead question, fold title, figure title, label, table
  head or link text; §5.6 words appear only negated ("niet onschadelijk", "geen bewijs dat het veilig is") or as the legal
  term "werkzame stof". Glossary: no id or alias of `kpv.json` or `nl-kpv.json` collides with another Dutch glossary
  file (script check); the English glossary has no macrophage, interleukin or MAP-kinase id, so the new ids are free.

### Changes made

| Page / file | Before | After | Why | Source |
|---|---|---|---|---|
| kpv.mdx, `description` | "een experimenteel peptide uit het hormoon alfa-MSH" | "een experimenteel tripeptide uit het hormoon alfa-MSH" | science parity (English "tripeptide"); English "anti-inflammatory" stays out on purpose: an effect without its level in meta text (advertising test) | `kpv-pubchem` (page) |
| kpv.mdx, TL;DR 3 | "Zonder handelsvergunning mag niemand het verkopen, doorgeven of invoeren." | "Zonder goedkeuring als medicijn mag niemand het verkopen, doorgeven of invoeren." | B1: "handelsvergunning" unexplained in a TL;DR (STYLE-NL §2.4 B1 gloss "goedkeuring als medicijn") | `nl-gmw-art-40-handelsvergunning` |
| kpv.mdx, `lede` | "Het dempt ontsteking bij muizen, maar is nooit getest bij mensen." | "Het dempt ontsteking in cellen en bij muizen. Nooit getest bij mensen." | science parity ("in cells and mice"); 18 words | English lede |
| kpv.mdx, mechanism step 7 | "geen gecontroleerd onderzoek bij mensen" | "geen onderzoek met een controlegroep bij mensen" | STYLE-NL §2.2: "gecontroleerd" means "checked" on this site | – |
| kpv.mdx, what-it-is | "die worden aangeprezen aan mensen die naar de sportschool gaan" | "die bij sportschoolbezoekers worden aangeprezen" | unidiomatic preposition | `coutinho-2026-doping-review` |
| kpv.mdx, molecule fold | "het staartje van een natuurlijk hormoon"; "Een daarvan"; "er een voor de kleur en een voor ontsteking" | "een lichaamseigen hormoon"; "Eén daarvan"; "er één … één" | STYLE-NL §2.5 ("lichaamseigen"), §5.6 ("natuurlijk"), §3 ("één") | – |
| kpv.mdx, mechanism Lead | "Waar het eerst op aangrijpt, is onbekend." | "Waar het als eerste aan bindt, is onbekend." | B1 word in a Lead answer | `fda-pcac-2026-kpv-briefing` |
| kpv.mdx, "De receptor die er niet is" | "Een medicijn begint meestal door aan één bepaald doelwit te binden … de voor de hand liggende gok is" | "Een medicijn werkt meestal doordat het eerst aan één bepaald doelwit bindt … het ligt voor de hand dat" | calque, register | – |
| kpv.mdx, NF-κB paragraph | one sentence with a loose apposition | "In de cel vinden onderzoekers steeds weer dat KPV NF-κB rustiger maakt. NF-κB is een schakelaar die ontstekingsgenen aanzet." | word order, one idea per sentence | – |
| kpv.mdx, weak joints | "het dierbewijs" | "het bewijs uit dieronderzoek" | not a Dutch word | – |
| kpv.mdx, evidence folds | "### Dieren: resultaten, maar ondiep …"; "De zwakte is wie het deed."; no comma after a long subject | "beperkt"; "Het zwakke punt is wie het onderzoek deed."; comma added | calque ("shallow"), idiom, readability | – |
| kpv.mdx, skin Claim | "In een labtest was een elektrische stroom of waren heel kleine naaldjes nodig om erdoor te komen" | "In een labtest kwam het er alleen door met een zwakke elektrische stroom of met heel kleine naaldjes" | broken agreement; same meaning and level (`in-vitro`) | `pawar-2017-iontophoresis` |
| kpv.mdx, study pawar-2017 | "kwam KPV alleen nauwelijks door" | "kwam KPV zonder hulpmiddel nauwelijks door" | "alleen" reads as "only" (English "on its own") | `pawar-2017-iontophoresis` |
| kpv.mdx, studies in people | "Ook in Nederland loopt er geen." | "Ook in Nederland vonden we er geen." | the sources are search results, not proof that nothing runs (searches re-run today) | `ctgov-nl-peptide-search-2026-10-27`, `ctis-kpv-search-2026-10-27` |
| kpv.mdx, regulatory Lead | "Het Amerikaanse advies van 2026 verandert dat niet." | "De Amerikaanse stemming van 2026 was alleen een advies." | English parity and PCAC point 3 ("only advice") | `fda-pcac-2026-kpv-briefing` |
| kpv.mdx, EU row and EU fold | "mag … alleen in de handel met …" / "alleen in de handel als …" | "alleen in de handel komen …" | grammar | `eu-directive-2001-83` |
| kpv.mdx, sport | "zou geen goedkeuring zijn, en verandert dus niets"; "WADA noemt KPV zelf niet." | "… en zou dus niets veranderen"; "WADA zegt niet apart iets over KPV." | tense; the second sentence repeated "niet met naam" and now states the UNRESOLVED point as nl-law §5.10 has it ("WADA does not say") | nl-law §5.10 |
| kpv.mdx, EU fold | "geen aanvraag voor KPV, geen geweigerde of ingetrokken, en" | "geen aanvraag voor KPV, ook geen geweigerde of ingetrokken aanvraag, en" | grammar | `ema-medicines-json` |
| kpv.mdx, NL fold | "als die wordt aangeboden als middel … Of als die bedoeld is …"; "Er zijn smalle uitzonderingen" | "als die wordt gepresenteerd als middel … Dat geldt ook als die stof bedoeld is …"; "Er zijn een paar beperkte uitzonderingen" | the law says "gepresenteerd" (presentation test), not "aangeboden"; sentence fragment; calque ("narrow") | `nl-gmw-art-1-geneesmiddel` (nl-law fact 2), `nl-gmw-art-40-handelsvergunning` |
| kpv.mdx, NL fold | "De Douane schreef in augustus 2026 over zulke middelen: "Onderzoeksdoeleinden spelen dan geen rol."" | "De Douane schreef in augustus 2026: valt een middel onder de wet, dan blijft het verboden. "Onderzoeksdoeleinden spelen dan geen rol."" | the quote's "dan" refers to a product that falls under the law; the context was missing | `douane-2026-08-illegale-online-handel-medicijnen` (nl-law fact 27) |
| kpv.mdx, PCAC bullets 2 and 4 | "Zoals gemeld vanuit de vergadering"; "Apotheken mogen het pas legaal bereiden" | "vanuit de openbare vergadering"; "Amerikaanse apotheken mogen …" | STYLE-NL §5.4 fixed phrase; US frame made explicit | `fda-pcac-2026-07-meeting` |
| kpv.mdx, PCAC bullet 5 | "KPV is geen goedgekeurd medicijn in Nederland of de EU, en de andere vijf ook niet. Semax is wel in Rusland als medicijn toegelaten. Een plek op de 503A-lijst … laat alleen … bereiden. … het verandert niets buiten de VS." | "Geen van deze peptiden is een goedgekeurd medicijn in Nederland of de EU, ook KPV niet. Semax is wel in Rusland als medicijn goedgekeurd. Komt KPV ooit op de 503A-lijst? Dan mogen alleen Amerikaanse apotheken het op recept bereiden. … Een Amerikaanse lijst verandert niets buiten de VS." | STYLE-NL §5.4 point 5 fixed phrases; §2.4 "goedgekeurd"; B1 condition pattern | `fda-pcac-2026-semax-briefing`, `cbg-gib-search-status-2026-10-27`, `ema-medicines-json` |
| kpv.mdx, vote paragraph | "Op 20 oktober 2026 had de FDA geen schriftelijk verslag gepubliceerd, en haar pagina … was nog steeds bijgewerkt tot 6 augustus 2026."; "een voor … een voor" | "Op 27 oktober 2026 had de FDA nog geen schriftelijk verslag gepubliceerd. Haar pagina over de vergadering was sinds 6 augustus 2026 niet meer bijgewerkt."; "één … één" | re-checked on fda.gov today (no minutes in Event Materials; "Content current as of 08/06/2026"); awkward Dutch | `fda-pcac-2026-07-meeting` |
| kpv.mdx, risks product fold | "kan een infectie geven: van een huidinfectie … tot bacteriën in het bloed, met kans op sepsis (bloedvergiftiging)." | three sentences; "Dan kan sepsis (bloedvergiftiging) ontstaan: het lichaam reageert zo sterk op de infectie dat organen beschadigd raken." | STYLE-NL §2.5 (explain sepsis each time); B1 sentence length | `thuisarts-sepsis` (fetched today) |
| kpv.mdx, checks fold | "Voor KPV is er niets getoetst om te meten" | "Voor KPV bestaat er geen getoetste meting" | unidiomatic | – |
| kpv.mdx, legal-routes fold | "Geen medicijnautoriteit heeft de veiligheid of de werking beoordeeld. De FDA vond … om die te beoordelen." | "Geen medicijnautoriteit heeft vastgesteld dat het werkt, of dat de voordelen groter zijn dan de risico’s. De FDA vond … om dat te beoordelen." | factual error: the FDA did assess KPV in 2026 (the next sentence says so); English "No regulator has found it safe or effective"; STYLE-NL §2.5 benefit-risk wording, no "veilig" | `fda-pcac-2026-kpv-briefing` |
| this file, style terms and sweep item 3 | Semax "toegelaten"; "the Dutch sport page writes 'geregistreerd'" | "goedgekeurd"; corrected list of pages per wording | the sport page writes "goedgekeurd" (line 144); STYLE-NL §2.4 | `src/content/pages/nl/legal/sport-and-doping.mdx` |

No change was needed in `nl-kpv.yaml`, `nl-kpv.json` or `kpv.json`.

### Validation

- `npx tsx scripts/validate-content.ts --only compounds/nl/kpv` → 0 errors, 0 warnings (after shortening the description
  to 170 characters and the lede to 18 words). `--only kpv` → 0 errors; its 8 warnings are all in
  `src/content/compounds/en/kpv.mdx` (not this group's file).
- `npx tsx scripts/check-locale-residue.ts --only kpv --details` and `--only compounds/nl/kpv --details` → 0 error/frame
  hits, 0 warn hits.

### Remaining concerns for the reviewers

1. **WADA S0 (legal, final sweep).** nl-law §5.10 and merge §9 list KPV's S0 status as UNRESOLVED ("WADA does not say;
   ask the Dopingautoriteit"), but the data row is `prohibited`/S0 and drives the glance tile ("altijd verboden"). The page
   follows the data (regulatory note, sport fold, risks line, "who should not use it"), states the S0 text and adds "WADA
   zegt niet apart iets over KPV. Twijfel je? Vraag het de Dopingautoriteit." The Dutch sport page puts unnamed,
   unapproved peptides under S0 ("Onder S0, als geen andere groep ze al noemt"). If the editor decides KPV must read as
   unresolved, the WADA row (or a sourced `glance.sport` override) and these four lines must change together.
2. **TL;DR 3 (legal).** "Zonder goedkeuring als medicijn mag niemand het verkopen, doorgeven of invoeren" assumes a KPV
   product is a geneesmiddel; the Gnw decides per product by presentation or function (nl-law facts 2, 31; §5.4). The body
   gives the definition. The writer's legal question 4 stands.
3. **"Nergens goedgekeurd"** (Lead, what-it-is) rests on the English reasoning (no human study exists; no authorisation
   without clinical data); national registers of other member states were not searched (eu-status §5.7) and the page
   says so. Kept as on English.
4. **Stop callout item 3 (medical).** Swelling of the face or lips alone gets an appointment on Thuisarts (nl-help fact
   10); the item gives 112 only for throat swelling or hard breathing and otherwise relies on "Is het ernstig? Bel 112."
   The writer's medical question 1 stands.
5. **`douane-2026-08-illegale-online-handel-medicijnen`** names a webshop in its body (never quoted); nl-law §6.12.
6. **Numbers (final sweep).** STYLE-NL §3 asks for digits from 2 up ("3 studies"); this page, like the other Dutch pages
   (a grep finds about 300 "twee" and 170 "drie" across them), writes counts in words ("drie aminozuren", "zeven
   peptiden"). Not changed here, so the site stays consistent until the sweep decides.
7. **Source records.** `ema-medicines-json` and `ema-under-evaluation-2026-10` carry notes about other compounds' searches
   (BPC-157, bremelanotide) and `accessed` dates of 20 and 22 October; the KPV searches of 27 October are documented only
   in `research/nl/status/kpv.yaml`. `eu-directive-2001-83` still points at the 2022 consolidation (writer's sweep item 2).
8. **Before publishing:** re-check fda.gov for PCAC minutes (the page now says "Op 27 oktober 2026 … nog geen
   schriftelijk verslag"). Semax wording across Dutch pages (sweep item 3). English mechanism step 6 "rodent … wounds"
   (a rabbit study), for the English page's owner.
