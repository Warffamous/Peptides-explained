# Notes: assignment ui-safety (Dutch UI strings, 27 October 2026)

Files written (Dutch, same names, same keys in the same order as `src/i18n/en/`, arrays the same length, every
`{placeholder}` kept, every `id` and `action` unchanged):

- `src/i18n/nl/warning-signs.json` (28 signs in 6 groups)
- `src/i18n/nl/product-check.json` (title, intro, 9 checks)
- `src/i18n/nl/corrections.json` (2 entries)
- `src/i18n/nl/organ-cards.json` (shared `ui` strings and the semaglutide, tirzepatide and retatrutide figures)
- `src/i18n/nl/infographics.json` (`glp1-body-map`, `online-vial-risks`)

Checks run: `npx tsx scripts/validate-content.ts --only i18n/nl/<file>` for each file: 0 errors, 0 warnings in all
five (the two errors and one warning under `--only i18n/nl` are in `src/i18n/nl/pages.json`, another assignment's
file). A node script compared every file with the English one (keys and order, array lengths, placeholders,
entities, ids, actions; no CR line endings): 0 problems. `JSON.parse` succeeds for all five.

Not touched: `src/i18n/en/`, `src/i18n/nl/common.json` (the `emergency.*` strings are used as they are),
`src/i18n/nl/vocab.json` (the `warningAction` labels), `src/data/product-check.yaml`, `docs/STYLE-NL.md`.

## Sources read today (27 October 2026)

Every page below was fetched today; the wording relied on is quoted in Dutch as it stands on the page.

| Source id | URL | How | Date on page | Wording relied on | Used for |
|---|---|---|---|---|---|
| `thuisarts-spoed-wie-bellen` (nl-help) | https://www.thuisarts.nl/spoed-wie-bel-je | curl, HTTP 200 | none shown | "Bij levensgevaar: bel 112"; "Op werkdagen overdag: bel je eigen huisarts"; "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost" | the help levels behind "Bel dan 112" (warning signs) and "je huisarts" (product check) |
| `rijksoverheid-huisartsenpost-seh` | https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/eerstelijnszorg/huisartsenpost-spoedeisende-hulp | curl, HTTP 200 | (as nl-help: 19 December 2025) | "Neem altijd eerst contact op met uw huisartsenpost voordat u naar de spoedeisende hulppost gaat. Behalve bij een levensbedreigende situatie. Dan kunt u het beste direct 112 bellen." | 112 only for danger to life; no string sends the reader to the SEH |
| `thuisarts-naar-de-huisarts` | https://www.thuisarts.nl/bezoek-aan-huisarts/ik-ga-naar-huisarts-wat-kan-ik-van-tevoren-doen-en-verwachten | curl, HTTP 200 | "Laatst gewijzigd: 19 apr 2024" | "Alle artsen in Nederland hebben een beroepsgeheim: wat u samen bespreekt mag uw arts niet aan anderen vertellen." | `product-check.items.doctor.text`, sentences 2 and 3 |
| `knmg-beroepsgeheim` | https://www.knmg.nl/actueel/dossiers/beroepsgeheim/medisch-beroepsgeheim/wat-en-waarom | curl, HTTP 200 | "bijgewerkt: 26 januari 2024" | "Een arts moet zwijgen over alles wat hij tijdens zijn werk te weten komt over een patiënt."; "Er zijn bijzondere situaties waarin een arts het beroepsgeheim moet of mag doorbreken." | `product-check.items.doctor.text`, sentence 4 ("Daarop zijn maar een paar uitzonderingen.") |
| `eu-directive-2001-83` | https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:02001L0083-20220101 | curl got HTTP 202 (EUR-Lex bot check); read in the built-in browser, own tab | consolidated text 01.01.2022 | art. 55, lid 3: "Op primaire kleinverpakkingen waarop het niet mogelijk is de in de artikelen 54 en 62 bedoelde informatie aan te brengen, moeten ten minste de volgende gegevens worden vermeld: de naam van het geneesmiddel …; de wijze van gebruik; de uiterste gebruiksdatum; het nummer van de fabricagepartij; de inhoud, uitgedrukt in gewicht, in volume of in eenheden." | `product-check.items.label.text`: "In de EU moet een medicijn alle vier vermelden, ook op een kleine flacon." (the 23 October text, re-checked) |
| `thuisarts-hiv-pep` | https://www.thuisarts.nl/hiv/ik-heb-onveilige-seks-gehad-met-iemand-die-hiv-of-misschien-hiv-heeft | curl, HTTP 200 | (as nl-help: 6 October 2022) | "Begin zo snel mogelijk. Het liefst al binnen 2 uur na de seks of de prik."; "Je kunt PEP krijgen bij de GGD." | confirms `used-needle-stick.why` ("binnen een paar uur") does not overstate the Dutch advice |
| `rivm-hygiene-piercing` | https://www.rivm.nl/hygienerichtlijnen/piercen | curl, HTTP 200 | revised 2021, change February 2026 | "Neem direct contact op met uw huisarts, de regionale GGD … of het ziekenhuis. Een behandeling van een eventuele besmetting moet idealiter binnen 1 uur en niet later dan 72 uur na het prikincident worden gestart." | the same; `urgent` is the right level |

Also read: `research/nl/nl-help.md` (27 October 2026; it has no "## Fact-check (independent)" section yet, so I
re-fetched the pages above myself instead of relying on it), `research/nl/nl-care.md` §I (secrecy, fact 52),
the 23 October material (`research/for-nl-site/snapshot-2026-10-23/i18n/en/`, `i18n-replaced-en.json`,
`MANIFEST-safety-en-a.md`, `MANIFEST-safety-en-b.md`, `MANIFEST-finish.md`, `MANIFEST-about-history-en.md`) and
`git show fc301e9:src/i18n/en/warning-signs.json` (the first version, which said "call 112").

What the 23 October material held for these files: warning-signs.json was already country-neutral except
"call your local emergency number" (the first version, 20 October, said "call 112"); product-check.json had the EU
label sentence and "In the Netherlands, your doctor must keep what you say private."; organ-cards.json had
"Not approved as a medicine anywhere (20 October 2026)"; infographics.json had "bought online" in the vial title;
corrections.json had only `v1-publication`. `i18n-replaced-en.json` holds nothing for these five files.

## Decisions, file by file

### warning-signs.json

- Every sign and reason translated with the same precision as English, B1, fragments with a capital and no full
  stop. Every `action` unchanged (nl-help §4.1: where the site is faster than Thuisarts, it keeps its level).
- Dutch frame: in `fever-after-injection` and `red-streaks` "call your local emergency number" became "Bel dan 112."
  in the Thuisarts question pattern ("Heb je ook …? Bel dan 112."). No other string named a country or a service.
- Terms from STYLE-NL §2: sepsis (bloedvergiftiging) with the "reacts so strongly" explanation, prikplek, huidinfectie
  (wondroos of cellulitis), bult met pus (abces), zware allergische reactie (anafylaxie), hartaanval (hartinfarct),
  beroerte, ontstoken alvleesklier (pancreatitis), GLP-1-medicijnen, uitdroging, hiv, hepatitis B of C, moedervlek,
  overgeven, bacteriën (for "germs"), casusbeschrijvingen.
- `seizure.sign`: "Een aanval (epileptische aanval): schokkende bewegingen, of plotseling nergens meer op reageren".
  The fixed term "aanval met schokken (epileptische aanval)" (§2.5) would misdescribe the second half ("suddenly not
  responding" is a seizure without jerking). Elsewhere "a fit" is "een aanval met schokken", as the sheet says.
- Terms not in the style sheet, used here (STYLE-NL is not mine to edit; proposed rows for its owner):
  `lymph vessels` → lymfevaten (explained in brackets); `necrotising fasciitis` → necrotiserende fasciitis;
  `rhabdomyolysis` → rabdomyolyse; `shortness of breath` → benauwd, benauwdheid (Thuisarts's word);
  `slurred speech` → onduidelijk praten; `urine` → plas (B1).
- `used-needle-stick.why`: English "preventive treatment" is "een behandeling die besmetting voorkomt" (no
  abbreviation: PEP covers hiv, and hepatitis B has its own; the sentence must make sense without the glossary).

### product-check.json

- Title as a Dutch question plus instruction: "Komt je product niet van een apotheek? Controleer het voordat je het
  gebruikt" (no-assumption rule; no commerce word).
- `label`: the EU sentence of 23 October comes back (the Dutch page shows the EU source `eu-directive-2001-83`;
  re-checked above). The US example of the English text goes.
- `doctor`: "je huisarts" as the first contact (STYLE-NL §2.1, §5.3: "Je huisarts kan helpen met controles die bij
  jou passen."); the English "kept private, with a few exceptions set by law" became the Dutch secrecy rule with its
  exceptions, worded only as far as the two NL sources say it (Thuisarts, KNMG). The English privacy sources of
  the four countries do not show on Dutch pages.
- `certificate.text`: the style sheet's own sentence (STYLE-NL §1 table). Link text = the ladder's Dutch heading
  "Wat een labrapport wel en niet zegt" (§5.5).
- `stop`: the component appends `common.emergency.ifSevere` ("Is het ernstig? Bel 112."), so the Dutch emergency line
  is printed without a number in this file.
- "vervoerd", not "verzonden" or "verstuurd" (commerce list, STYLE-NL §7).

### corrections.json

- Both entries are `locales: [en]` in `src/data/corrections.yaml`, so they do not show on the Dutch site; the keys
  must exist anyway. `tesamorelin-approval-answer.summary` says "op de Engelse pagina", so the line stays true if the
  entry is ever shown in Dutch (the Dutch tesamorelin page answers for NL and the EU). "stopped selling it" →
  "uit de handel gehaald" (the status word of §2.4, no commerce word). Dates and facts copied from English.

### organ-cards.json

- Level words follow §2.2 ("Aangetoond bij mensen/dieren", "Aangetoond in cellen in het lab", "Een idee, nog niet
  aangetoond", "Onbekend"); each note reads as "<niveau>: <note>", as on English.
- Every effect line ≤ 18 words (counted; the validator warns above 18 and gave no warning). To fit, "adults with
  obesity or overweight" is "volwassenen met (ernstig) overgewicht" (obesitas = ernstig overgewicht, §2.5); the
  brain line, which names obesity alone, has "obesitas (ernstig overgewicht)".
- No dose amount anywhere; "hogere doses" stays as in the English study description.
- `{list}` and `{date}` in `ui.notApproved` are filled by the component (for Dutch: "Nederland of de EU", via
  `Intl.ListFormat`), `{drug}` and `{receptors}` likewise.

### infographics.json

- "the label" (the SmPC) → "de productinformatie" (§2.6 note); "certificates" → "analysecertificaten"; FDA named in
  full once per text block ("de Amerikaanse medicijnautoriteit FDA"). The Australian and French studies stay: they
  are evidence (brief, "Science is the same in every language").
- "products sold as TB-500 / retatrutide" → "producten met TB-500 / retatrutide op het etiket" (same meaning, no
  commerce word).

Citations dropped: none. These strings carry no citations; the sources of the product check, organ cards and
infographics live in `src/data/` and are chosen per jurisdiction there.

## Country-dependent strings to check

Each of these rests on a Dutch or EU fact or frame; re-check against `research/nl/` once its fact-check section is
written (nl-help.md had none on 27 October 2026), and against the pages that use them.

| File and key | What it says | Rests on | Check |
|---|---|---|---|
| `warning-signs.json` `general[fever-after-injection].why` | "Heb je ook een snelle hartslag of adem je snel? Bel dan 112." | 112 for danger to life (Thuisarts spoed; Rijksoverheid) | the 112 threshold for sepsis signs; Thuisarts sepsis says "Neem direct contact op met uw huisarts of met de huisartsenpost" (nl-help fact 11, §4.1: site faster) |
| `warning-signs.json` `injection[red-streaks].why` | "Heb je ook koorts, met een snelle hartslag of snelle ademhaling? Bel dan 112." | the same | the same |
| `warning-signs.json`, every `action` | `emergency` / `urgent` / `stop`, shown with `common.emergency.now` and `vocab.warningAction.urgent|stop` | Dutch help levels (112 / huisarts or huisartsenpost / huisarts) | the `vocab.json` labels (not this file): nl-help §7.4 proposes `urgent` "Bel direct je huisarts of de huisartsenpost", STYLE-NL §2.1 has "Zoek vandaag nog hulp"; the medical reviewer decides (nl-help §6.1, §6.2). The five signs where the site is faster than Thuisarts: sepsis-signs, very-low-blood-sugar, pancreatitis, severe-breathlessness, palpitations-severe, and pus-lump at `urgent` (nl-help §6.4) |
| `warning-signs.json` `neurological[stroke-signs].why` | "… meteen behandeling in het ziekenhuis nodig, ook als de klachten weer overgaan." | English basis (NHS) | Thuisarts (verlamming, 7 September 2026) says for signs that pass "Bel toch nog je huisarts" (nl-help §2.6): the reviewer decides whether the Dutch reason keeps "ook als de klachten weer overgaan" |
| `warning-signs.json` `injection[used-needle-stick].why` | "… werkt het best als je er binnen een paar uur mee begint." | PEP timing (Thuisarts: "Het liefst al binnen 2 uur"; RIVM: "idealiter binnen 1 uur en niet later dan 72 uur") | consistent today; the Dutch page names the GGD (not this string) |
| `warning-signs.json` `general[changing-mole].why`, `metabolic[pancreatitis].why` | science, no country | – | none (listed because they are on every compound page) |
| `product-check.json` `items.label.text` | "In de EU moet een medicijn alle vier vermelden, ook op een kleine flacon." | richtlijn 2001/83/EG art. 55 lid 3 (read today) | that the EU reform does not change art. 55 before the Dutch site goes out (legal/whats-changing owner) |
| `product-check.json` `items.doctor.title`, `items.doctor.text` | "Vertel het je huisarts …"; "Je huisarts kan je helpen om bloedonderzoek te kiezen …"; beroepsgeheim with "maar een paar uitzonderingen" | Thuisarts, KNMG (read today) | NHG (October 2025): "De huisarts draagt geen verantwoordelijkheid voor periodieke controles bij elders verkregen medicatie" (nl-help fact 50, UNRESOLVED 6): "kan je helpen" is a possibility, not a promise; the medical reviewer may want it softer or sourced on the Dutch monitoring page |
| `product-check.json` `items.stop.text` (+ `common.emergency.ifSevere`) | "Dan heb je snel hulp nodig." + "Is het ernstig? Bel 112." | 112; `src/data/product-check.yaml` `stop` has no NL source yet (nl-help §7.4 proposes `thuisarts-wondroos`, `thuisarts-sepsis`, `thuisarts-dikke-ogen-lippen`) | data owner |
| `product-check.json` `items.keep.text` | keep the vial for the doctor or a lab | no Dutch source in `local_sources` (nl-help §7.4: none, or `lareb-bijwerkingen-melden` if a Lareb line is added) | data owner |
| `product-check.json` `items.certificate.links[0]`, `items.storage.links[0]` | "Wat een labrapport wel en niet zegt"; "Wanneer je een flacon weggooit" | the links in `src/data/product-check.yaml`: `safety/product-risk#what-a-lab-report-can-and-cannot-tell-you` and `safety/sterile-technique#when-to-throw-a-vial-away` | **anchors**: on the Dutch pages the headings make Dutch anchors (for example `#wat-een-labrapport-wel-en-niet-zegt`), so these two links reach `/nl/safety/product-risk/` and `/nl/safety/sterile-technique/` but miss the section. Either the Dutch pages keep the English ids for these two sections, or `product-check.yaml` gets per-locale anchors (data owner and the product-risk / sterile-technique writers; `npm run check:html` reports it after a build) |
| `organ-cards.json` `ui.notApproved` | "Niet goedgekeurd als medicijn in {list} (status gecontroleerd op {date})" | `{list}` = the NL and EU rows of retatrutide (`src/data/compounds/retatrutide.yaml`, `src/data/organ-cards/retatrutide.yaml` EU sources) | the retatrutide NL/EU status (research/nl/status/retatrutide.yaml) |
| `corrections.json` both entries | English-only log entries | `locales: [en]` in `src/data/corrections.yaml` | when the Dutch site gets its own first entry (publication of the Dutch preview), it needs a new id in `corrections.yaml` with `locales: [nl]` and its text here |

## Open points for the owner and other assignments

1. `vocab.json` `warningAction` (Dutch labels of the three levels): STYLE-NL §2.1 and nl-help §7.4 differ for
   `urgent` ("Zoek vandaag nog hulp" against "Bel direct je huisarts of de huisartsenpost"). The reasons in
   warning-signs.json fit either.
2. The two anchors in `src/data/product-check.yaml` (table above).
3. Proposed STYLE-NL rows (one line each): lymfevaten · necrotiserende fasciitis · rabdomyolyse · benauwd
   (shortness of breath) · "a seizure that may be without jerking" → "aanval (epileptische aanval)".
4. EUR-Lex refused curl today (HTTP 202 bot check); the Dutch consolidated text was read in the built-in browser.

## Check (independent, 27 October 2026)

Checker: adversarial ui-safety check agent. I compared every key of the five Dutch files with `src/i18n/en/` (meaning,
qualifiers, placeholders, ids, actions), read them against `docs/STYLE-NL.md` and the content brief, and re-checked
every country-dependent string against `research/nl/nl-help.md` (which now has its "## Fact-check (independent, 27
October 2026)" section), `research/nl/nl-care.md` (fact 52), `research/nl/eu-status.md` (facts 28 to 31) and
`src/data/jurisdictions.yaml`. I did not touch `src/i18n/en/`, `common.json`, `vocab.json`, any data file or
STYLE-NL.md. Nothing was committed or built.

### Sources fetched today (27 October 2026)

| Source id | How | Date on page | Wording relied on | For |
|---|---|---|---|---|
| `thuisarts-verlamming` | curl, HTTP 200 | "Laatst gewijzigd: 7 sep 2026" | "Bel direct 112, je huisarts of de huisartsen-spoedpost."; "Zijn de klachten snel weer helemaal weg? Bel toch nog je huisarts."; "Of zijn de klachten na een paar minuten weer weg? Bel de huisarts. Ook als je twijfelt of het wel erg is."; "Je mond is scheef: 1 mondhoek hangt naar beneden." | `stroke-signs` (sign and why) |
| `thuisarts-sepsis` | curl, HTTP 200 | "Laatst gewijzigd: 2 nov 2022" | "Neem direct contact op met uw huisarts of met de huisartsenpost."; "Een sepsis kan levensbedreigend zijn." | confirms the site is faster than Thuisarts for `fever-after-injection` and `red-streaks` (as nl-help §4.1 records) |
| `thuisarts-hiv-pep` | curl, HTTP 200 | "Laatst gewijzigd: 6 okt 2022" | "Begin zo snel mogelijk. Het liefst al binnen 2 uur na de seks of de prik."; "Je kunt ook PEP krijgen tegen een andere soa: hepatitis B." | `used-needle-stick.why` |
| `rivm-hygiene-piercing` | curl, HTTP 200 | (revised 2021, change February 2026) | "Een behandeling van een eventuele besmetting moet idealiter binnen 1 uur en niet later dan 72 uur na het prikincident worden gestart." | the same |
| `thuisarts-naar-de-huisarts` | curl, HTTP 200 | "Laatst gewijzigd: 19 apr 2024" | "Alle artsen in Nederland hebben een beroepsgeheim: wat u samen bespreekt mag uw arts niet aan anderen vertellen." | `product-check.items.doctor.text` |
| `knmg-beroepsgeheim` | curl, HTTP 200 | "bijgewerkt: 26 januari 2024" | "Er zijn bijzondere situaties waarin een arts het beroepsgeheim moet of mag doorbreken." | the same (last sentence) |
| `knmg-beroepsgeheim-doorbreken` | curl, HTTP 200 | none shown | "Er zijn een aantal zorgvuldig bepaalde situaties waarin je als arts het beroepsgeheim moet of mag doorbreken." (the grounds include consent, which is not "set by law") | why "set by law" is not translated |
| `nhg-2025-gewichtsreducerende-medicatie` | curl, HTTP 200 | "Op het moment van publicatie (oktober 2025)" | "De huisarts draagt geen verantwoordelijkheid voor periodieke controles bij elders verkregen medicatie. De huisarts heeft wel een rol in het signaleren van bijwerkingen en complicaties van dergelijke middelen." | `product-check.items.doctor` (softened, see below) |
| `eu-directive-2001-83` | EUR-Lex answered curl with HTTP 202 (bot check); I read the same consolidated Dutch text through CELLAR with curl (`publications.europa.eu/resource/celex/02001L0083-20220101`, HTTP 200, title "Geconsolideerde TEKST: 32001L0083 — NL — 01.01.2022") | consolidated 01.01.2022 | art. 55 lid 3: "Op primaire kleinverpakkingen waarop het niet mogelijk is de in de artikelen 54 en 62 bedoelde informatie aan te brengen, moeten ten minste de volgende gegevens worden vermeld: ... de uiterste gebruiksdatum; het nummer van de fabricagepartij; de inhoud, uitgedrukt in gewicht, in volume of in eenheden." | `product-check.items.label.text`: confirmed. The reform that repeals the directive is not in force (eu-status fact 28: "Awaiting Parliament 2nd reading"; fact 29: repeal only 24 months after entry into force), so "In de EU moeten …" is the law today |

### What I changed, and why

warning-signs.json

1. `stroke-signs.why`: "… ook als de klachten weer overgaan." → "… Zijn de klachten snel weer helemaal weg? Bel dan toch
   je huisarts." The English "even if the signs pass" is a route (hospital at once), and the Dutch route for signs that
   pass is the huisarts (Thuisarts verlamming, read today; nl-help fact 15 and §7.3, which tells the merge to drop "also
   if the symptoms have gone" from the `thuisarts-verlamming` note). The urgency stays (do not ignore signs that pass);
   the Dutch reader is sent where Thuisarts sends them.
2. `stroke-signs.sign`: "een gezicht dat aan één kant afhangt" → "een scheve mond" ("afhangt" reads as "depends on";
   "scheve mond" is the Dutch word for the drooping face, as Thuisarts writes it). Also shortened (29 → 21 words).
3. `used-needle-stick.why`: "Een behandeling die besmetting voorkomt, werkt het best …" → "Er is een behandeling die
   besmetting kan voorkomen. Die werkt het best als je er zo snel mogelijk mee begint: binnen een paar uur." The old
   text promised that treatment prevents infection (English: "preventive treatment", no promise; and there is no PEP
   for hepatitis C). "zo snel mogelijk" is Thuisarts's own wording; "binnen een paar uur" keeps the English "within
   hours" and fits Thuisarts (2 hours) and RIVM (ideally 1 hour).
4. `fainting-serious.sign`, `palpitations-severe.sign`: "een hart dat jaagt", "bonkt" → "een heel snelle hartslag",
   "een hart dat heel snel, bonzend of onregelmatig klopt" (B1; "bonzen" is the Dutch verb for a pounding heart).
5. `very-low-blood-sugar.sign`: "plotseling honger, die overgaan in verwardheid of sufheid" (adjective error, nominal
   style) → "plotseling honger krijgen, en daarna verward of suf worden".
6. `sudden-severe-headache.sign`: "Hoofdpijn die plotseling begint en heel erg veel pijn doet" → "Heel erge hoofdpijn
   die plotseling begint" (natural Dutch; same meaning).
7. `red-streaks.why`: the 22-word first sentence split in three (STYLE-NL §1 rule 1); "Bel dan 112." kept.
8. `changing-mole.why`: "Beschrijvingen van patiënten" → "Beschrijvingen van losse patiënten" (a case report is one
   patient, STYLE-NL §2.3; "patiënten" alone could read as studies).
9. `pus-lump.why`: "het openmaken … Knijp het dus niet uit" → "de bult openmaken … Knijp de bult dus niet uit" ("het"
   did not agree with "de bult").

product-check.json

10. `intro`: "Geen enkele controle laat zien" → "kan laten zien" (the English "None of them can show"; the modal was lost).
11. `items.label.text`: "moet een medicijn alle vier vermelden" → "moeten alle vier op de verpakking van een medicijn
    staan" (a medicine does not "vermelden"; the directive says the particulars "moeten worden vermeld" on the
    packaging). The fact is unchanged and re-checked (table above).
12. `items.doctor.title` and `text`: "spreek af welke controles" and "Je huisarts kan je helpen om bloedonderzoek te
    kiezen" → "bespreek welke controles" and "Je huisarts kan met je overleggen welk bloedonderzoek past bij wat je
    gebruikt". Whether a GP will order checks for someone using an unauthorised peptide is UNRESOLVED (nl-help §5.6),
    and the NHG says the GP has no responsibility for periodic checks of medication obtained elsewhere (fact 50, read
    today). Talking it through is always possible; the GP stays an ally (brief), without a promise the research does
    not support.
13. `items.doctor.text`, secrecy: "Daarop zijn maar een paar uitzonderingen." → "Alleen in bijzondere situaties mag of
    moet een arts dat wel." (KNMG's own words; "maar een paar" played the exceptions down); "Wat je bespreekt" → "Wat je
    samen bespreekt" (Thuisarts).
14. Link texts: "Welke controles ertoe doen, en waarom" → "Welke controles belangrijk zijn, en waarom" (B1);
    "Alle alarmsignalen, en hoe snel je hulp zoekt" → "… hoe snel je hulp moet zoeken" (the English "how fast to act"
    is advice, not a description).

corrections.json

15. `tesamorelin-approval-answer.detail`: "Eerst begon het antwoord" → "Eerder begon …" ("eerst" means "at first",
    not "before"); the FDA and Health Canada are introduced once ("de medicijnautoriteiten van de VS en Canada",
    STYLE-NL §2.7). Facts and dates unchanged (both entries stay `locales: [en]` in `src/data/corrections.yaml`).

organ-cards.json

16. `ui.noReceptor`: "wat er veranderde door het afvallen" → "bij het afvallen" (the English "with weight loss" does
    not claim the cause).
17. `semaglutide` and `tirzepatide` `stomach.effect`: "Dat wordt na een tijd minder." → "Dat effect wordt na verloop
    van tijd minder." ("Dat" could be read as the food).
18. `semaglutide` and `tirzepatide` `muscle.effect`: "maar minder dan vet" → "maar minder dan het vet" (18 and 17
    words).
19. `retatrutide.liver.effect`: "met obesitas en vervette lever" (no article) → "met obesitas en leververvetting"
    (17 words; "een vette lever" would make 19, over the limit).

infographics.json

20. `online-vial-risks` identity (marker and text): comma between subject and verb removed ("producten met TB-500 op het
    etiket niet altijd klopten").
21. Amount (marker and text): "Er zat ongeveer de helft tot bijna het dubbele in van …" (split verb) → "Ze bevatten
    ongeveer de helft tot bijna het dubbele van …".
22. Impurities (marker and text): "te kort zijn of net iets anders" → "te kort zijn of een kleine fout hebben" (the
    English "slightly wrong").

### Checked and left as written

- `fever-after-injection.why` and `red-streaks.why` "Bel dan 112.": matches nl-help §7.4 and the brief ("bel 112" where
  English wrote the local emergency number). Thuisarts sepsis (read today) sends these signs to the huisarts or
  huisartsenpost "direct"; the site keeps its faster level (nl-help §4.1, medical reviewer §6.1).
- Every `action` equals English; the five signs where the site is faster than Thuisarts (and `pus-lump` at `urgent`)
  stay for the medical reviewer. The heading over `urgent` comes from `vocab.json` ("Zoek vandaag nog hulp", STYLE-NL
  §2.1), which nl-help §7.4 and fact 17 call too slow ("Bel direct je huisarts of de huisartsenpost"): not my file,
  still open for the owner and the vocab owner. The reasons in warning-signs.json read correctly under either label.
- `seizure.sign` "Een aanval (epileptische aanval)": the translator's reason holds (a seizure without jerking).
- `product-check.items.keep.text` "Een lab kan testen wat erin zat." kept as on English (a statement about what a
  lab can do, in the context of the doctor). Note for the medical reviewer: no Dutch public service tests a peptide
  vial for the public (nl-help fact 41), so the Dutch page text should not suggest one.
- `product-check.items.stop.text` with `common.emergency.ifSevere` ("Is het ernstig? Bel 112."): matches the Dutch
  help levels (112 for danger to life).
- `organ-cards.json` `ui.notApproved`: `{list}` is built by `jurisdictionList(…, 'disjunction')` from the NL and EU rows
  of `src/data/compounds/retatrutide.yaml` (both `investigational`, as_of 2026-10-27), with `vocab.jurisdictionInSentence`
  ("Nederland", "de EU"): "Niet goedgekeurd als medicijn in Nederland of de EU (status gecontroleerd op 27 oktober
  2026)". Correct.
- Infographics: "De productinformatie" for the stomach marker is right (the plate cites `ema-epar-wegovy`); "Een Frans
  lab" is `delcourt-2023-misbranded` (the plate's own source note).
- No "u", no commerce word in any title or link text, no dose amount, no seller help, Dutch number format throughout.

### Open points (not fixable in these files)

1. **Anchors** (as the translator found): `src/data/product-check.yaml` links
   `safety/product-risk#what-a-lab-report-can-and-cannot-tell-you` and `safety/sterile-technique#when-to-throw-a-vial-away`.
   Headings are slugged by Astro's default slugger, so the Dutch headings ("Wat een labrapport wel en niet zegt",
   "Wanneer je een flacon weggooit") will make Dutch anchors and these two links will miss the section on `/nl/`. The
   Dutch pages did not exist yet on 27 October 2026 (`src/content/pages/nl/` absent). For the data owner and the
   product-risk and sterile-technique writers.
2. **English text to look at (not changed: English is live and not mine):** the retatrutide liver card says "adults with
   obesity", while its own data note (Sanyal 2024) says "with obesity or overweight and at least 10% liver fat". The
   Dutch follows the English; if the English changes, change `retatrutide.liver.effect` too.
3. `vocab.json` `warningAction.urgent` (point above) and the STYLE-NL rows proposed by the translator (lymfevaten,
   necrotiserende fasciitis, rabdomyolyse, benauwd). Proposed too: "drooping face (stroke)" → "scheve mond"
   (Thuisarts); "fatty liver" → "leververvetting".
4. `src/data/product-check.yaml` `stop` and `keep` still have no NL `local_sources` (nl-help §7.4): data owner.

Validator after the changes: `npx tsx scripts/validate-content.ts --only i18n/nl/<file>` gives 0 errors and 0 warnings
for each of the five files; `--only i18n/nl` gives 0 errors and 6 warnings, all in `pages.json` and `media.json`
(other assignments). `scripts/check-locale-residue.ts`: 0 hits. A node script found the same keys in the same order,
the same array lengths, placeholders, ids and actions as English, no CR line endings, and every organ-card effect at
18 words or fewer.
