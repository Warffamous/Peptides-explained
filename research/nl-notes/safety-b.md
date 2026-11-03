# Notes: group safety-b (Dutch site, 27 October 2026)

Pages written (all `translation: { method: adapted, from: en, review: pending }`, `reading_level: B1`,
`reviewed_by: pending-medical-review`, `last_reviewed: 2026-10-27`):

- `src/content/pages/nl/safety/sterile-technique.mdx`
- `src/content/pages/nl/safety/injection-safety.mdx`
- `src/content/pages/nl/safety/sharps-disposal.mdx`

Other files: `src/i18n/nl/glossary/nl-safety-b.json` (one new term). No new sources (every id already existed;
`src/data/sources/nl-safety-b.yaml` was not needed, so it was not created). No host added to
`config/link-allowlist.json` (`lci.rivm.nl`, `www.milieucentraal.nl`, `www.drugs-test.nl`, `www.113.nl` were
already there).

Base: the current English pages (structure, TL;DR, sections, figures, folds, every citation). Saved material:
`research/for-nl-site/snapshot-2026-10-23/content/pages-en/safety/{sterile-technique,injection-safety,sharps-disposal}.mdx`
and `MANIFEST-safety-en-a.md`, `MANIFEST-safety-en-b.md`, `MANIFEST-finish.md`. Every Dutch fact was re-checked
against `research/nl/nl-help.md` (with its fact-check section). On 27 October 2026 I also fetched with curl and
searched the wording of: rivm.nl/hygienerichtlijnen/piercen, lci.rivm.nl/richtlijnen/prikaccidenten, the two
Rijksoverheid pages (kca, verslavingszorg), milieucentraal.nl (kca), thuisarts.nl (insuline spuiten,
bloedverdunner prikken, hiv-PEP, steenpuist), drugsinfo.nl (injecteren), apotheek.nl (medicijnafval,
nadroparine), the Trimbos report PDF (TRI-41-037, definition of a gebruiksruimte) and the Dutch Wegovy product
information PDF (`ema-pi-wegovy-nl`: SmPC 4.2, 6.3, 6.4 and bijsluiter section 5).

Validator: 0 errors, 0 warnings for the three pages and the glossary file. Residue check (`--details`): 0 error,
0 frame, 0 warn hits (FDA and "in de VS" lines carry `{/* residue-ok: … */}` markers: FDA evidence, the US
outbreak as evidence, tesamorelin's US approval as world context).

## safety/sterile-technique (adapted)

**Structure:** same sections, components and order as English: Explainer, Diagram in a fold, ProductCheck,
checklists, TimeStrip, Compare, mix-gently Diagram, KeyNumbers, Infographic, WarningSigns. Fixed heading
`## Wanneer je een flacon weggooit` (anchor `#wanneer-je-een-flacon-weggooit`, used by the product check).

**Came back from the saved material:** DRUGSinfo's "a needle is only really sharp the first time; with a used needle
you get an infection sooner" (`drugsinfo-injecteren`, re-read today: "Naalden zijn alleen scherp als ze voor het
eerst worden gebruikt"), now beside the English insulin-study sentence; DRUGSinfo as a second source for "never
share"; the EU product information of Wegovy for storage and for "do not inject Wegovy that was in direct
sunlight" (now cited to the Dutch PI `ema-pi-wegovy-nl`, read today, instead of the old `ema-epar-wegovy`).
The saved citations of Mainline (`mainline-steroids-safe-injecting`) did **not** come back: Mainline stopped its
services in May 2026 (nl-help §2.2); WHO, the US sterile-water label and the Egrifta label already carry those points.

**Rewritten for the Netherlands:** TL;DR help line (Dutch levels: "Bel direct je huisarts of de huisartsenpost …
Bel dan 112"); the storage KeyNumber now names the European (Dutch-language) Wegovy product information, the US
label stays cited for the same rules; Thuisarts (`thuisarts-prikken-bloedverdunner`: wash hands, set the needle box
ready) added to the "before you start" cite line; Thuisarts wondroos and sepsis added to the infection-chain cite line
(Dutch names of the infections). US items stay as evidence, marked: the FDA rule for compounded GLP-1 multi-dose vials
(TimeStrip row and fold), the FDA dosing-error reports, the FDA cold-chain complaints, the 2012 US fungal outbreak.

**Dropped citations:** none.

## safety/injection-safety (adapted)

**Structure:** same sections and figures as English. Added, as the assignment asks: a stop callout with the
prikaccident steps (short version, linking the full steps on the sharps page) and a fold "Nieuwe naalden en spuiten:
de spuitomruil"; a Lareb line and `<JurisdictionCard code="NL" />` in the allergic-reactions section.

**Came back from the saved material (re-checked today):** Thuisarts insulin advice (belly and upper legs; "Schuif
steeds 1 centimeter op"; water and soap, no disinfectant), the EU Wegovy product information for the injection places
("buik, dij of bovenarm … niet intraveneus of intramusculair", now `ema-pi-wegovy-nl`), Thuisarts on swollen eyes and
lips for the mild reaction, DRUGSinfo for disinfecting the spot (side by side with WHO and Thuisarts, as nl-help §4.2
resolves) and for not injecting alone. The saved Mainline sentence "injecting performance drugs into a vein can kill"
did **not** come back (Mainline closed); instead DRUGSinfo's own point, read today: hitting an artery is life-threatening,
which makes injecting into a vein extra dangerous (`drugsinfo-injecteren`).

**Rewritten for the Netherlands:** every "what to do" cell of the normal-or-infection table now uses the Dutch help
levels (STYLE-NL §5.1; `warningAction` in `src/i18n/nl/vocab.json`); Thuisarts wondroos, steenpuist and sepsis added
to its cite line; allergic reaction: 112, and the allergy pen followed by 112 (`thuisarts-voedselallergie`); the
prikaccident steps from RIVM and Thuisarts; the spuitomruil (Rijksoverheid; Trimbos 2026: at least 29 locations in 19
cities, "vrijwel zeker een onderschatting"; also some pharmacies and GGD'en); the Drugs Infolijn in the research's own
words; Lareb ("ook als je product niet van een apotheek komt", `lareb-bijwerkingen-melden`,
`lareb-2021-illegal-medicines`). Tesamorelin's status: "in de VS goedgekeurd; in de EU en in Nederland niet"
(world context, marked; `ema-egrifta-withdrawal`, `cbg-gib-search-status-2026-10-27`).

**Dropped citation:**

| Page | Cite id | Why | Replaced by |
|---|---|---|---|
| injection-safety | `au-healthdirect-cellulitis` | Supported the Australian help-route wording of the table ("your doctor, or a health advice line or urgent care when your doctor is closed") | `thuisarts-wondroos`, `thuisarts-steenpuist`, `thuisarts-sepsis` (Dutch levels); the cellulitis facts stay on `nhs-cellulitis` |

## safety/sharps-disposal (adapted)

**Structure:** same sections as English. "Where a full container goes" (a US/UK/CA/AU table and a per-country fold)
became the Dutch answer: a table "Waar een volle naaldencontainer in Nederland heen kan" (apotheek, kca, other
places) and a fold "Zo werkt het in Nederland, in detail". After a needle-stick: the stop callout now carries the
RIVM and LCI steps; the TimeStrip has two rows (RIVM: treatment ideally within 1 hour, no later than 72 hours; PEP
against HIV: preferably within 2 hours, up to 72, too late after 72); `<JurisdictionCard code="NL" />` after it.

**Came back from the saved material (re-checked today):** the naaldencontainer from the apotheek
(`apotheek-medicijnafval`), full containers back to the pharmacy (`apotheek-nadroparine`), the municipality's kca
(`rijksoverheid-kca`: gemeentedepot, chemokar, kca-depot), other places (hospitals, GGD'en, addiction care:
`drugsinfo-injecteren`), "medicine waste not in the bin, sink or toilet" (`apotheek-medicijnafval`), RIVM's needle-stick
steps and timing, Thuisarts on PEP (GGD, most reachable 24 hours; SEH when the GGD is closed; hepatitis B). New today:
Milieu Centraal (`milieucentraal-kca`: "Injectienaald" under "Wel bij KCA"; "bij de apotheek waar je ze gehaald hebt";
kca in residual waste can be dangerous for waste collectors), the LCI guideline (`lci-2019-prikaccidenten`: let it
bleed, rinse, then disinfect with 70% alcohol or iodine; PEP within 2 to 72 hours; testing a loose needle is not
useful), RIVM's UN-approved container and fill line, DRUGSinfo's hard plastic or metal box and "spuitomruil" at some
gebruiksruimten and shelters.

**Rewritten for the Netherlands:** TL;DR, intro, both Leads on disposal, the "even a closed container" paragraph
(now: in the Netherlands it goes to the pharmacy or the kca, never in residual waste), the PEP fold (the US and UK
"where to get PEP" sentences became the GGD and Thuisarts sentences; `cdc-hiv-pep` and `nhs-hiv-and-aids` stay cited for
the 28 days and the 72 hours).

**Dropped citations** (all supported only another country's disposal route or rules):

| Page | Cite id | Why | Replaced by |
|---|---|---|---|
| sharps-disposal | `govuk-clinical-waste-collection` | England and Wales council collection | Dutch routes: `apotheek-medicijnafval`, `apotheek-nadroparine`, `milieucentraal-kca`, `rijksoverheid-kca` |
| sharps-disposal | `uk-scot-nhsinform-injecting-advice` | Scotland: injecting equipment providers | the same Dutch routes; `drugsinfo-injecteren` (other places) |
| sharps-disposal | `uk-ni-pha-harm-reduction-booklet` | Northern Ireland needle exchanges and where to get a container | `apotheek-medicijnafval`, `thuisarts-prikken-bloedverdunner` (container from the apotheek) |
| sharps-disposal | `ca-on-reg-298-12-sharps` | Ontario's collection law | Dutch routes |
| sharps-disposal | `ca-mb-safe-needle-disposal` | Manitoba pharmacies; where to get a container | `apotheek-medicijnafval` |
| sharps-disposal | `au-qld-needle-syringe-program` | Queensland (container from prescriber; household bin in some councils) | `apotheek-medicijnafval`, `milieucentraal-kca` |
| sharps-disposal | `au-vic-needle-syringe-program` | Victoria's NSPs and hotline | Dutch routes |
| sharps-disposal | `au-wa-healthywa-needle-disposal` | Western Australia | Dutch routes |
| sharps-disposal | `au-act-recyclopaedia-syringes` | ACT: never in household bins | `milieucentraal-kca`, `apotheek-medicijnafval` (in the Netherlands: kca or pharmacy) |
| sharps-disposal | `nz-healthnz-safe-sharps-disposal` | New Zealand rules (recycling bins, approved containers, pharmacies) | `fda-sharps-dos-donts` (recycling, kept); Dutch routes |
| sharps-disposal | `ie-hse-anabolic-steroids-reducing-harm` | Ireland's HSE needle exchange | Dutch routes; spuitomruil on injection-safety |

Kept although the source is a foreign help page, because it supports a generic fact and not a route:
`au-healthdirect-needlestick` (a loose needle can prick others; the risk of a virus from a prick is very low and
higher when the user has a virus or injects drugs; the doctor's questions and the blood test; "do not squeeze or rub"),
`au-nsw-community-sharps` and `ca-bccdc-sharps-disposal` (what to use until you have a container: hard plastic, no glass
or cans), `nhs-cellulitis` (your own needle cannot give you a virus from your own blood: no Dutch source, nl-help §5.12).

## UNRESOLVED points (research/nl/nl-help.md §5) and how the pages handle them

- §5.1 Drugs Infolijn on peptides: injection-safety uses the research's wording ("Of ze ook over peptiden adviseren,
  staat niet op hun site.").
- §5.2 Needle exchanges serving people who inject peptides: written as unknown, "gecontroleerd op 27 oktober 2026",
  with "Vraag het de spuitomruil zelf" (injection-safety; repeated in one line on sharps-disposal). Mainline's 2023
  "wel mogelijk" is not used (Mainline closed).
- §5.3 No public list of exchange locations: "Een openbare lijst van alle plekken vonden we niet."
- §5.4 Free needle containers; whether a pharmacy must take a container it did not supply: "free" is left out; the
  take-back point is written as unknown ("staat in geen landelijke bron die we vonden"), with "Vraag het eerst".
  Also left as unknown: whether a pharmacy or the municipality accepts a home-made box.
- §5.10 GGD hours: only Thuisarts's own sentence, attributed ("Volgens Thuisarts kun je de meeste GGD'en 24 uur per dag
  bellen voor PEP"); no GGD number.
- §5.12 "Your own used needle cannot infect you": no Dutch source; kept with the English source (`nhs-cellulitis`).
- Belgium: household needle disposal in Belgium was not researched on 27 October and needle exchange in Flanders is
  UNRESOLVED (be-notes §5.5: leave out). The sharps page has no Belgian line (the 23 October text "no official Belgian
  guidance found" was not re-checked, so it was not reused).
- Never printed: the NVIC number, a GGD or huisartsenpost number, 0800-0113, 116 117.

## Open questions for the medical reviewer

1. **Disinfection after a needle-stick** (nl-help §6.3, conflict 3): sharps-disposal step 3 now says "Ontsmet de wond
   daarna als je iets hebt om te ontsmetten, zoals 70% alcohol of een jodiumoplossing" (LCI, `lci-2019-prikaccidenten`;
   the host is allowlisted now). The short version on injection-safety leaves it out. Keep it?
2. **"Knijp er niet in en wrijf er niet over"** (from the English healthdirect steps) beside LCI's "goed doorbloeden (niet
   stelpen)" and RIVM's "Zuig de wond niet uit": compatible, or drop "knijp er niet in"?
3. **Where to call after a prick:** RIVM lists "uw huisarts, de regionale GGD of het ziekenhuis"; the pages say "je
   huisarts of de GGD; is de praktijk dicht, de huisartsenpost" (STYLE-NL §5.1: never the SEH on your own) and mention the
   SEH only in Thuisarts's PEP line (when the GGD is closed). Agree?
4. **Pus lump at the urgent level** ("Bel direct je huisarts of de huisartsenpost. Knijp de bult niet uit."): faster than
   Thuisarts (an appointment unless fever or feeling ill); kept as on the warning-signs list (nl-help §4.1, §6.4).
5. **Mild allergic reaction:** "Stop met het product en maak een afspraak met je huisarts" (English labels; Thuisarts:
   appointment on a working day). Thuisarts also says "Stop niet zomaar met je medicijnen" for a prescribed medicine:
   add a line for people who use a prescribed medicine?
6. **Artery sentence** (injection-safety, "Wie in een ader spuit, kan ook een slagader raken, en dat is
   levensgevaarlijk", DRUGSinfo): new on the Dutch page (it replaces the saved Mainline sentence). Keep?
7. **Thuisarts's "schuif steeds 1 centimeter op"** is advice for insulin; the page says so ("bij insuline"). Fine for a
   general injection page?

## Open questions for the legal reviewer

1. Naming the spuitomruil, the Drugs Infolijn and Lareb on a peptide page (help and reporting services, no seller): as
   nl-help §6.10 asks for DIMS. The pages name no drug-checking service.
2. Wegovy is named only for label facts (where it is injected, how it is stored), never with an effect: is that within
   the SmPC line (brief, "Added after step 1", item 1)?

## Style terms (STYLE-NL lacks them; the word used)

| English | Dutch used | Note |
|---|---|---|
| injection safety (nav) | veilig injecteren | other groups link it with the same words |
| sharps disposal (nav) | naalden weggooien | title "Naalden weggooien: gebruikte naalden veilig opruimen" |
| stopper (of a vial) | rubberen stop | as the glossary (`vial-stopper`) and `product-check.json`; `explainers.json` says "rubberen dop" (final sweep) |
| lumps (lipohypertrophy) | bulten, vetbulten | then "lipohypertrofie" once |
| dummy injection | nepinjectie; "injectie zonder werkzame stof (placebo)" | STYLE-NL §2.3: placebo = nepmiddel zonder werkzame stof |
| fill line | vullijn | RIVM |
| supervised consumption room | gebruiksruimte (alias gebruikersruimte) | Trimbos writes gebruiksruimte, DRUGSinfo gebruikersruimte; new glossary entry |
| alcohol hand rub | handalcohol | |
| Instructions for Use (US) | gebruiksinstructies | "de Amerikaanse gebruiksinstructies van Wegovy" |
| WHO | de Wereldgezondheidsorganisatie (WHO), then de WHO | not in §2.7 |
| CDC | de Amerikaanse gezondheidsdienst CDC | not in §2.7 |
| hives | galbulten | |
| artery | slagader | |
| household / residual waste · plastic recycling | restafval · plastic afval (PMD) | |
| waste workers | de mensen die het afval ophalen | |
| compounded (US) GLP-1 medicine | GLP-1-medicijn dat een Amerikaanse apotheek zelf maakt | follows §2.4 "bereiding door een Amerikaanse apotheek" |
| aggregate (clump) | klonteren (aggregatie) | glossary `peptide-aggregation` |
| recycling centre for kca | milieustraat, afvalscheidingsstation, chemokar, gemeentedepot, kca-depot | the names Milieu Centraal and Rijksoverheid use |

## For the final sweep (files I do not own)

1. `src/i18n/nl/explainers.json`, `contamination-infection`: steps and labels say "rubberen dop"; the glossary
   (`vial-stopper`: "rubberen stop") and `src/i18n/nl/product-check.json` (`clean.text`) say "rubberen stop". Pick one
   (STYLE-NL §2.6 has "dop" for the cap, not the stopper) and add it to §2.6.
2. `docs/STYLE-NL.md`: add the terms in "Style terms" above (at least: rubberen stop, gebruiksruimte, vullijn, WHO and
   CDC first mentions, veilig injecteren / naalden weggooien as nav labels).
3. `src/data/sources/nl-research-eu-status.yaml`, `ema-pi-wegovy-nl` (not to be edited; for the merge's list): its note
   lists 4.1, 4.4 and section 9 only; the pages also cite it for 4.2 ("subcutaan geïnjecteerd in de buik, in de dij of
   in de bovenarm … Het mag niet intraveneus of intramusculair worden toegediend"), 6.4 ("Bewaren in de koelkast (2°C –
   8°C). Uit de buurt houden van het koelelement. Niet in de vriezer bewaren"; pens "in de oorspronkelijke verpakking
   ter bescherming tegen licht") and bijsluiter section 5 ("Wegovy dat aan direct zonlicht is blootgesteld mag u niet
   injecteren"), all read in the PDF on 27 October 2026.
4. `src/data/sources/safety-a.yaml` (not mine): the notes of `rivm-hygiene-piercing` (still says the live page refused
   connections; it answered today) and `mainline-steroids-safe-injecting` (Mainline stopped needle exchange by 14 May
   2026) are stale, as nl-help §7.3 already says. These pages do not cite Mainline.
5. `src/data/product-check.yaml`: the `storage` check links `safety/sterile-technique#when-to-throw-a-vial-away`; the
   Dutch anchor comes from `src/i18n/nl/product-check.json` (`wanneer-je-een-flacon-weggooit`; `ProductCheck.astro`
   uses `tx.anchors[i]` before the data anchor), which matches the heading on the Dutch page. Nothing to change;
   `npm run check:html` after the build confirms it.
6. Optional, for the owner: whether the sharps page should get one Belgian line ("klein gevaarlijk afval (KGA)",
   STYLE-NL §2.6) once a Belgian source is researched; none was today.

## Check (independent, 27 October 2026)

Checker: independent fact-checker and editor for group safety-b. Read first: the brief (with "Added after step 1"),
STYLE-NL, CONTENT-GUIDE §1, §1a, §2, §4.1, §9, §11–13, `research/nl/nl-help.md` with its fact-check, the manifests
`MANIFEST-safety-en-a.md`, `MANIFEST-safety-en-b.md`, `MANIFEST-finish.md` and the saved sharps page. Every Dutch help,
route and disposal fact on the three pages was checked against the live page, fetched today with curl and searched for
the wording (22 pages): drugsinfo.nl (injecteren; contact), thuisarts.nl (insuline spuiten, prikken bloedverdunner,
voedsel-allergie, dikke ogen of lippen, hiv-PEP, wondroos, steenpuist, sepsis, spoed: wie bellen), rivm.nl
(hygiënerichtlijn piercen), lci.rivm.nl (prikaccidenten), milieucentraal.nl (kca), rijksoverheid.nl (kca;
verslavingszorg), apotheek.nl (medicijnafval; nadroparine), lareb.nl (bijwerkingen melden; the 2021 news), the Dutch
Wegovy product information PDF (EMA, `ema-pi-wegovy-nl`) and the Trimbos report PDF (TRI-41-037). Status: tesamorelin's
EU and NL rows in `src/data/compounds/tesamorelin.yaml` (as_of 2026-10-27). No new source entries exist
(`src/data/sources/nl-safety-b.yaml` was not created; every id is already in the registry). No allowlist change was
needed (`lci.rivm.nl`, `www.milieucentraal.nl` are listed).

### Science parity (English page → Dutch page)

- **sterile-technique:** every English cite id is on the Dutch page; claim levels identical (in-vitro, human-limited,
  in-vitro); KeyNumbers (established; human-limited) and their numbers (2–8 °C; 749, 61, 1 juli 2013), the TimeStrip
  rows, the Compare rows, the Explainer, both Diagrams, the Infographic, the 430-person insulin study, "5 tot 20 keer",
  the FDA cold-chain and dosing-error points and the 2012 outbreak are all there with the same meaning.
- **injection-safety:** every English cite id except `au-healthdirect-cellulitis` (Australian help route; dropped and
  listed above). KeyNumbers 64,4% and 5% (human-limited), IconArray 25 and 14 in 100 (human-controlled), all table rows,
  both folds, the sterile-abscess report and the allergy diagram are there.
- **sharps-disposal:** the eleven dropped ids are all other countries' disposal routes (listed above).
  `nz-healthnz-safe-sharps-disposal` also supported "needles cannot be recycled", which stays on `fda-sharps-dos-donts`.
  Two English points were missing and are restored: wash the wound "for at least 30 seconds" with "plenty of water"
  (`au-healthdirect-needlestick`), and the screw-on lid of a stand-in container (`fda-sharps-containers`,
  `au-nsw-community-sharps`).

### Changes made

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| sterile-technique | TL;DR q "Met welk water oplossen?" | "Waarmee los ik poeder op?" | "oplossen" needs an object; natural question | – |
| sterile-technique | TL;DR a "Koorts met een snelle hartslag …" | "Koorts met snelle hartslag …" | TL;DR back to ≤ 120 words after the q change | – |
| sterile-technique | Diagram step 3 "… sluit het lichaam de bacteriën op in een holte met pus. Dat is een abces." | "… sluit het lichaam de bacteriën in. Dan ontstaat er een bult met pus (abces)." | STYLE-NL §2.5 fixed term "een bult met pus (abces)" | – |
| sterile-technique | "Gebruik elke keer een nieuwe steriele naald en spuit als je in een flacon gaat." | "Gebruik een nieuwe steriele naald en spuit elke keer dat je een naald in een flacon steekt." | calque of "go into a vial" | – |
| sterile-technique | fold "… en waarom temperatuur ertoe doet" | "… en waarom temperatuur belangrijk is" | calque of "matters" | – |
| injection-safety | Lead q "Waar gaan peptidemedicijnen in?" | "Waar spuit je peptidemedicijnen in?" | natural Dutch | – |
| injection-safety | "Voor insuline noemt Thuisarts de buik en de bovenbenen als de beste plekken." | "Thuisarts, de site van de huisartsen (NHG), noemt de buik en de bovenbenen de beste plekken voor insuline." | first mention (STYLE-NL §2.7); wording checked | `thuisarts-insuline-spuiten`: "Je buik en bovenbenen zijn de beste plekken om insuline te spuiten" |
| injection-safety | "De bulten doen ertoe, omdat …" | "De bulten zijn een probleem, omdat …" | calque | – |
| injection-safety | stop callout: 4 steps (no disinfection, no 30 seconds, no "knijp/wrijf"); "Alle stappen staan bij …" | the same 5 steps as sharps-disposal; "Meer over wat de arts doet, staat bij …"; `au-healthdirect-needlestick` added to the cite line | two stop callouts on two pages gave different first aid; nl-help §4 conflict 3 resolves "combine RIVM and LCI once lci.rivm.nl is allowlisted" (it is); the 30 seconds and "do not squeeze or rub" are English science | LCI Stap 0 ("goed doorbloeden (niet stelpen) … lauwwarm water … 70% alcohol … (povidon)jodiumoplossing"); RIVM ("Zuig de wond niet uit", "zachte vloeibare zeep onder stromend warm water", "geen harde borstel", "waterdichte pleister"); healthdirect note |
| injection-safety | "Het Trimbos-instituut telde in 2026 minstens 29 plekken …" | "In een overzicht uit 2026 telde het Trimbos-instituut minstens 29 plekken … Dat zijn er evenveel als bij de vorige telling in 2022." | nl-help fact 36, fact-check precision: the count is unchanged since 2022 | Trimbos PDF: "Net als in de vorige inventarisatie (2022) konden we 29 locaties in 19 steden identificeren"; "tenminste 29 locaties" |
| injection-safety | table, cellulitis row: "Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost." (the other rows the short form) | "Bel direct je huisarts of de huisartsenpost." | one wording for one level in one table (`warningAction.urgent`, STYLE-NL §2.1) | `thuisarts-wondroos`: "Bel direct je huisarts of de huisartsen-spoedpost" |
| injection-safety | table, sepsis row: "Misschien sepsis (bloedvergiftiging)" | adds ": je lichaam reageert zo sterk op een infectie dat organen beschadigd raken" | STYLE-NL §2.5: explain sepsis each time | – |
| injection-safety | "{marker}Tesamorelin is in de VS een goedgekeurd peptidemedicijn. In de EU en in Nederland is het niet goedgekeurd." (marker mid-line) | marker on the line before; "… niet goedgekeurd (gecontroleerd op 27 oktober 2026). De aanvrager trok de aanvraag in de EU in 2012 in." | status needs its date (CONTENT-GUIDE §1); STYLE-NL §2.4: say what was withdrawn; brief: marker on the line before | `tesamorelin.yaml` EU `withdrawn` since 2012-06-21, NL `not-authorised`, as_of 2026-10-27; `ema-egrifta-withdrawal` |
| injection-safety | "Bel 112. Heb je een adrenalinepen? Gebruik die dan, en bel daarna meteen 112." | "Heb je een adrenalinepen? Gebruik die dan meteen. Bel direct 112, ook als je de pen hebt gebruikt." | 112 said twice; Thuisarts's order (pen, then call) | `thuisarts-voedselallergie`: "Heb je een allergie-pen, gebruik die dan. Bel daarna meteen 112 …" |
| injection-safety | "Volgens de productinformatie moet je meteen medische hulp zoeken …" | "Volgens de Amerikaanse productinformatie van tesamorelin …" | which label (there is no EU product information) | `dailymed-egrifta-sv-label` |
| sharps-disposal | TL;DR "Niet los. Doe ze meteen in een naaldencontainer. Nooit bij het plastic afval of in de wc." | "Nee. Doe ze meteen in een naaldencontainer. Een volle container lever je in. Nooit in de wc." | "Niet los" implied that a closed container may go in household waste; in the Netherlands needles are kca and go to the pharmacy or the kca (the page body says so) | `milieucentraal-kca` ("Injectienaald" under "Wel bij KCA"); `apotheek-nadroparine` |
| sharps-disposal | `## Nooit los bij het afval`; Lead "Niet los. … Nooit bij plastic afval of in de wc." | `## Nooit bij het afval`; Lead "Nee. Een gebruikte naald gaat meteen in een naaldencontainer. Ook een volle container hoort niet bij het restafval." | same reason; no page links `#nooit-los-bij-het-afval` (grep of `src/`) | as above |
| sharps-disposal | Diagram caption "… en nooit bij plastic afval, in wc of gootsteen" | "… niet bij plastic afval en niet in de wc of gootsteen" | grammar; caption ≤ 18 words | – |
| sharps-disposal | "Een losse naald … kan een kind, een partner, een schoonmaker of iemand die het afval ophaalt prikken." | "… kan iemand prikken: een kind, een partner, een schoonmaker of iemand die het afval ophaalt." | B1 rule 2 (verb not after a long list) | – |
| sharps-disposal | "Milieu Centraal noemt …"; "Kca bij het restafval kan gevaarlijk zijn voor de mensen die het afval ophalen." | "Milieu Centraal, dat voorlichting geeft over afval, noemt …"; "Komt kca bij het restafval? Dan kunnen sommige stoffen gevaarlijk zijn voor de mensen die het afval ophalen." | first mention; the page says "sommige stoffen" | `milieucentraal-kca`: "sommige stoffen kunnen gevaarlijk zijn voor de vuilnisophalers" |
| sharps-disposal | "Het RIVM vraagt …" | "Het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) vraagt …" | first mention (STYLE-NL §2.7) | `rivm-hygiene-piercing` ("UN-gekeurde naaldcontainers zijn van hard plastic"; "Vul de naaldcontainer niet boven de aangegeven vullijn") |
| sharps-disposal | "Gebruik dan voorlopig een stevig bakje van hard plastic of metaal met een deksel dat goed sluit, zoals een lege fles van wasmiddel." | "Gebruik dan voorlopig een stevige fles of bus van hard plastic, met een schroefdop die goed sluit. Dat kan bijvoorbeeld een lege fles van vloeibaar wasmiddel zijn. DRUGSinfo, de drugsvoorlichting van het Trimbos-instituut, noemt ook een hard metalen bakje." | English "tight, screw-on lid" was lost (a bottle has no "deksel"); DRUGSinfo's metal box kept apart from the "no can" rule; first mention | `fda-sharps-containers`, `au-nsw-community-sharps` ("screw top"); `drugsinfo-injecteren` ("hard plastic of metalen bakje") |
| sharps-disposal | "… Vraag het eerst. Vervang het bakje zo snel mogelijk door een echte naaldencontainer." | "… Vraag het eerst." | the last sentence had no source and is not on English | – |
| sharps-disposal | table "Volgens DRUGSinfo nemen …" | "Volgens DRUGSinfo (Trimbos-instituut) nemen …" | first visible mention (the fold above is closed by default) | `drugsinfo-injecteren` |
| sharps-disposal | fold kca: "Ook medicijnafval hoort niet bij het gewone afval …" | "Apotheek.nl rekent gebruikte naalden in een naaldencontainer tot het medicijnafval dat je inlevert. Medicijnafval hoort niet …" | restores the saved 23 October point (fold "Why a full container counts as medicine waste"), re-checked today | `apotheek-medicijnafval`: "Medicijnafval aanleveren: stickers eraf, naalden in container … doe gebruikte naalden altijd in een naaldencontainer" |
| sharps-disposal | Lead "… Neem direct contact op met je huisarts of GGD." | "… Bel direct je huisarts of de GGD." | article; Lead ≤ 18 words | `rivm-hygiene-piercing` |
| sharps-disposal | stop callout step 2 "Was de wond met zachte vloeibare zeep onder stromend lauwwarm water." | "Was de wond minstens 30 seconden met zachte vloeibare zeep en veel stromend lauwwarm water." | English science restored | `au-healthdirect-needlestick` ("for at least 30 seconds"; "plenty of water") |
| sharps-disposal | "Volgens Thuisarts kun je de meeste GGD'en …" | "Volgens Thuisarts, de site van de huisartsen (NHG), kun je …" | first mention | `thuisarts-hiv-pep`: "De meeste GGD's kun je 24 uur per dag bellen voor PEP" |
| glossary `gebruiksruimte` | "In Nederland een veilige ruimte … Bezoekers melden zich meestal eerst aan via een hulpverlener." | "In Nederland een ruimte waar mensen drugs kunnen gebruiken, in de buurt van hulpverleners. Bij de 3 gebruiksruimten die het Trimbos-instituut bezocht voor zijn rapport van 2026, moesten bezoekers zich eerst aanmelden via een hulpverlener." | "meestal" generalised from three visited rooms; "veilig" kept out of B1 text about a place | Trimbos PDF p. 17: "Bij de drie gebruiksruimten die we bezochten voor dit onderzoek dienen bezoekers zich aan te melden via een hulpverlener" |

### Checked and correct (no change)

DRUGSinfo: "Naalden zijn alleen scherp als ze voor het eerst worden gebruikt", "sneller een ontsteking", sharing and
HIV/hepatitis B/C, "Een slagader raken is levensgevaarlijk. Dit maakt in de ader (intraveneus) injecteren extra
gevaarlijk", disinfecting the spot against inflammation and abscesses, "niet alleen te injecteren", "hard plastic of
metalen bakje", hand-in at "apotheken, ziekenhuizen, GGD’s of verslavingszorg organisaties", spuitomruil at "sommige
gebruikersruimten of daklozenopvanglocaties". Thuisarts: "Schuif steeds 1 centimeter op"; "Was je huid met water en
zeep. Gebruik geen middel tegen bacteriën (ontsmettingsmiddel)"; "De plek waar je de prik gaat geven, hoef je niet te
wassen"; "Prik niet in een wond, blauwe plek of litteken"; the naalden-container from the apotheek and "Zet de doos
klaar"; "Bel altijd je huisarts bij dikke ogen of lippen"; PEP "het liefst al binnen 2 uur", "minder dan 72 uur", GGD and
SEH, hepatitis B; wondroos "Bel direct"; steenpuist "Knijp de puist niet uit" (an appointment unless fever, so the
site's urgent level is faster, as nl-help fact 17 says); sepsis "Neem direct contact op". RIVM: the steps and "idealiter
binnen 1 uur en niet later dan 72 uur"; UN container; fill line. LCI: Stap 0; "Het is niet zinvol om losse naalden …
te onderzoeken"; PEP "liefst binnen 2 uur … uiterlijk tot 72 uur … Na deze termijn is het geven van PEP niet zinvol
meer". Milieu Centraal: "Injectienaald" under kca; "bij de apotheek waar je ze gehaald hebt"; milieustraat or
afvalscheidingsstation. Rijksoverheid: gemeentedepot, chemokar, kca-depot; "Neem contact op met uw gemeente"; "Gratis
omwisselen van gebruikte spuiten voor nieuwe steriele spuiten". Apotheek.nl: "Een naaldencontainer is te krijgen bij uw
apotheek"; "Volle containers kunt u bij uw apotheek inleveren". Drugs Infolijn: "al je vragen over drugs", "We kunnen je
ook verwijzen". Lareb: "Iedereen kan een bijwerking bij ons melden"; 2021: "gebruikers van illegale geneesmiddelen".
Wegovy (Dutch PI): 4.2 "subcutaan geïnjecteerd in de buik, in de dij of in de bovenarm … niet intraveneus of
intramusculair"; 6.4 "Bewaren in de koelkast (2°C – 8°C). Uit de buurt houden van het koelelement. Niet in de vriezer
bewaren", "ter bescherming tegen licht"; 6.3 "maximaal 28 dagen bij een temperatuur beneden 30°C" (pens), "Na
ingebruikname: 6 weken" (FlexTouch); "Wegovy mag niet meer worden gebruikt als het bevroren is geweest"; leaflet "Wegovy
dat aan direct zonlicht is blootgesteld mag u niet injecteren". Anchors: `#wissel-elke-keer-van-plek`,
`#na-een-prikaccident`, `#waar-een-volle-naaldencontainer-heen-gaat`, `#wanneer-je-een-flacon-weggooit` and
`#bewaren-en-de-koudeketen` (linked from another Dutch page) are all headings on the Dutch target pages. No `/en/` link,
no link to another country's legal page, no "u", no §5.6 word, no commerce word in a title, heading, Lead, fold, figure
title, label or link text, no dose, schedule or seller hint. Frontmatter: `translation: { method: adapted … }`, B1,
`pending-medical-review`, related keys are Dutch routes.

### Validation

`npx tsx scripts/validate-content.ts --only pages/nl/safety/` and `--only nl-safety-b`: 0 errors, 0 warnings for the
three pages and the glossary file. `npx tsx scripts/check-locale-residue.ts --only safety/<page> --details` (each page)
and `--only nl-safety-b`: 0 error, 0 frame, 0 warn hits.

### Remaining concerns for the reviewers

1. **Medical (all seven of the writer's questions still stand).** For question 1: the LCI disinfection step is now on
   both pages (the stop callout on injection-safety was made identical to the one on sharps-disposal). If the reviewer
   drops it, drop it on both pages.
2. **Medical:** "minstens 30 seconden" and "Knijp er niet in en wrijf er niet over" rest on the Australian healthdirect
   page (kept as a generic source; RIVM and LCI give no duration and do not mention squeezing). LCI says "goed
   doorbloeden (niet stelpen)": the reviewer may prefer to drop "knijp er niet in".
3. **Medical/legal:** "Ook een (gesloten, volle) naaldencontainer hoort in Nederland niet bij het restafval" is our
   reading of Milieu Centraal (needles are kca; kca in residual waste can harm collectors) and apotheek.nl (full
   containers back to the pharmacy). No Dutch source says it in those words.
4. **Style/owner:** the title and nav label "Veilig injecteren" use "veilig" for a practice, not for a compound (§5.6 is
   about compounds). "Veiliger injecteren" would be more cautious; other groups link with "veilig injecteren", so change it
   only in the final sweep, if at all.
5. **Legal:** `lareb-2021-illegal-medicines` (title and URL name no seller) names three illegal products in its body
   text. It is cited only for "users of illegal medicines can report".
6. **Minor:** on sterile-technique the TimeStrip rows say "(WHO)" and "(CDC)" before the full first mention (WHO in the
   fold below, CDC in the Compare detail). Left as is: a row label has no room for the full name.
7. The writer's final-sweep items 1 to 6 stand. Item 3 checked in the PDF today: 4.2, 6.3, 6.4 and the leaflet's
   sunlight line are all there; the registry note of `ema-pi-wegovy-nl` still lists only 4.1, 4.4 and section 9.
