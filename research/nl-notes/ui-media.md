# Notes: ui-media (27 October 2026)

Assignment: translate `src/i18n/en/media.json` (alt text and captions of every registered image) into
`src/i18n/nl/media.json`. Owner of this file and of this notes file only. Nothing under `src/i18n/en/` was edited.

## What was written

- `src/i18n/nl/media.json`: 84 ids, the same ids in the same order as English, the same fields per id (`alt`
  everywhere, `caption` exactly where English has one). Alt text describes what is visible (B1); captions are B1,
  at most 18 words each, as factual as English, no doses, no commerce words.
- The Dutch and European photos shown only on nl (`src/data/heroes.yaml`, values with `nl:`) are all in the file:
  `ambulance-den-haag` (safety/warning-signs), `huisartsenpost-oss` (safety/if-something-goes-wrong),
  `ridderzaal-binnenhof` (legal/nl), `belgian-federal-parliament` (legal/be), `ema-building-amsterdam` (legal/eu),
  `flags-european-parliament-strasbourg` (legal/whats-changing), `tweede-kamer-plenary-hall` (the-case-for-reform).
  Their English captions are the same in the 23 October snapshot and in the current English file (diffed today);
  the only Dutch-framed difference is the ambulance caption, see below.
- Images that only English pages show (English-only heroes and country pages that are not part of the Dutch site:
  `vital-signs-monitor`, `hospital-emergency-entrance`, `wooden-gavel`, `weather-vane-rooster`,
  `palace-of-westminster-dusk`, `fda-white-oak-building`, `parliament-hill-centre-block`,
  `parliament-house-canberra-dusk`, `beehive-parliament-wellington`, `leinster-house-dublin`) are translated as
  plain descriptions for key parity. None of them frames the Dutch reader; nothing links to a page that is not Dutch.

## Validation

- `npx tsx scripts/validate-content.ts --only i18n/nl/media`: 0 errors, 0 warnings (84 images).
- `--only i18n/nl` (all Dutch strings): the only errors and warnings are in `src/i18n/nl/pages.json`
  (pages.sources.intro, pages.search.privacy, pages.news.intro), which belongs to another assignment.
- `JSON.parse` of `src/i18n/nl/media.json`: OK. UTF-8, LF endings, typographic ’ (no straight apostrophes).
- Scan of every alt and caption against `config/commerce-tokens.json` (all locales) and STYLE-NL §5.6/§7 words: no
  hit. "medicijn" appears only for approved or generic medicines (Kennedy's law, the exenatide line under the Gila
  monster, pharmacy preparation, half-life, animal-to-human translation), never for an unapproved compound.

## Choices a reviewer should know

1. **Facts added compared with English (each checked):**
   - `ambulance-den-haag.caption`: "in 2010" (Commons: taken 17 January 2010; `research/nl/nl-help.md` fact 57 says
     the caption must not imply the livery is current) and "Is er levensgevaar? Bel dan direct 112." in place of
     "call your local emergency number" (brief: Dutch prints 112; STYLE-NL §5.1). Alt text says "het alarmnummer
     112 op de zijkant": checked by looking at the image file (`src/assets/media/ambulance-den-haag.jpg` shows
     "112" beside the unit number 15-114).
   - `huisartsenpost-oss.caption`: "in 2023" (Commons description, taken 18 June 2023; nl-help fact 56: whether the
     post still works from that building was not checked, so the second sentence speaks of a huisartsenpost in
     general, not "hier"). "Feestdagen" was not added: English has only evenings, nights and weekends, and the
     registry source (`rijksoverheid-urgent-medical-help`) does not name the hours.
   - `kennedy-1962-drug-amendments.caption`: "een nieuwe Amerikaanse medicijnwet" (English: "a new drug law"):
     the 1962 Drug Amendments are US law (registry source `us-pl-87-781-drug-amendments-1962`), said so for Dutch
     readers.
   - `belgian-federal-parliament`: caption "het Belgische federale parlement" (English: "the Belgian lawmakers"):
     the Commons title is "Palais de la Nation Bruxelles" and the id is `belgian-federal-parliament`. Alt text names
     the two visible flags (Belgian and European), checked in the image file.
2. **Terms not in STYLE-NL** (I do not own the style sheet; proposed one-line additions for its editor):
   thymosin beta-4 / alpha-1 → **thymosine bèta-4 / thymosine alfa-1**; Gila monster → **gilamonster**; evidence
   ladder → **bewijsladder**; coin toss → **kop of munt**; staph → **stafylokokken**; mortar and pestle → **vijzel
   en stamper** (brass: **messing**); Reichstag → **het Rijksdaggebouw**; Palace of Westminster kept as the proper
   name. Compound-page writers should use the same thymosin spellings (no other Dutch file has them yet).
3. **Rephrasings that keep the English fact:** "copies a human hormone" → "doet een menselijk hormoon na";
   "deep belly fat" → "buikvet rond de organen" (STYLE-NL §2.5); "obese rodents" → "knaagdieren met ernstig
   overgewicht" (§2.5); "desire" (PT-141) → "seksueel verlangen"; "the energy parts of a cell" →
   "de energiecentrales van een cel"; "training model" → "oefenpop"; "upper small intestine" → "de darmwand vlak
   na de maag"; "label" on library books → "etiketten" (STYLE-NL §2.6: no Dutch text says "label").
4. **Registry suggestion (for the owner of `src/data/media.yaml`):** `huisartsenpost-oss` cites only
   `rijksoverheid-urgent-medical-help`, which does not give the hours; `thuisarts-spoed-wie-bellen` does ("Avond,
   nacht, weekend of feestdag: contact met de huisartsen-spoedpost") and could be added as
   `local_sources: { NL: [thuisarts-spoed-wie-bellen] }`. Not changed here (not my file).

## Sources read today (27 October 2026), with the wording relied on

All fetched with curl, HTTP 200, converted to text.

| Source id | URL | Page date | Wording |
|---|---|---|---|
| rijksoverheid-urgent-medical-help | rijksoverheid.nl/documenten/vraag-en-antwoord/eerstelijnszorg/wat-moet-ik-doen-als-iemand-dringend-medische-hulp-nodig-heeft | modified 2025-12-19 | "In een levensbedreigende situatie kunt u het beste direct 112 bellen." · "Neem dan contact op met de huisarts, de huisartsenpost of de centrale doktersdienst." |
| thuisarts-spoed-wie-bellen | thuisarts.nl/spoed-wie-bel-je | no date shown | "Bij levensgevaar: bel 112" · "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost" |
| igj-eigen-bereidingen-apotheek | igj.nl/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/eigen-bereidingen-apotheek | modified 2025-07-08 | "Apotheken mogen voor een individuele patiënt en op kleine schaal zelf een geneesmiddel bereiden." |
| apotheek-medicijnafval | apotheek.nl/zorg-van-de-apotheker/medicijnafval-niet-weggooien-maar-inleveren | (date field empty in the HTML) | "doe gebruikte naalden altijd in een naaldencontainer. Een naaldencontainer is te krijgen bij uw apotheek." |

Also used (not re-fetched by me): `research/nl/nl-help.md` facts 1, 4, 56, 57 (that file has no independent
fact-check section yet), `research/nl/nl-care.md` facts 29–30, `research/nl/status/ss-31.yaml` (elamipretide not
authorised in the EU or the Netherlands, 27 October 2026).

## Dropped

Nothing. `media.json` holds no citations; no key, caption or fact was left out.

## Country-dependent strings to check

Each of these rests on a Dutch or EU fact (or deliberately keeps a non-Dutch fact as world context). Re-check
against `research/nl/` once its fact-check sections are in, and against the registry's `local_sources`.

| Key | Dutch text (short) | What to check | Where |
|---|---|---|---|
| `ambulance-den-haag.caption` | "Is er levensgevaar? Bel dan direct 112." · "in 2010" | 112 for danger to life; the photo date | nl-help facts 1, 57; `rijksoverheid-urgent-medical-help`, `ec-112-emergency-number` |
| `ambulance-den-haag.alt` | "het alarmnummer 112 op de zijkant" | visible in the photo (checked) | image file |
| `huisartsenpost-oss.caption` | "Een huisartsenpost helpt je ’s avonds, ’s nachts en in het weekend." · "in 2023" | out-of-hours service hours; photo date; no claim that the Oss post still works there | nl-help facts 4, 56; `thuisarts-spoed-wie-bellen` |
| `stethoscope-grey.caption` | "Praat met je huisarts voordat je begint." | the huisarts as the first contact (English: "a doctor") | brief "Emergency, help and reporting"; nl-help |
| `sharps-bin-yellow.caption` | "Een naaldencontainer …" | Dutch name and description of the container | registry `local_sources: { NL: [apotheek-medicijnafval] }`; nl-help |
| `pharmacy-mortar.caption` | "Een apotheek mag sommige medicijnen nog steeds zelf maken." | Dutch pharmacy preparation (magistrale bereiding) | registry `local_sources: { NL: [igj-eigen-bereidingen-apotheek] }`; nl-care facts 29–30 |
| `gila-monster.caption` | "Semaglutide doet een menselijk hormoon na." | rests on the EU product information on Dutch pages | registry `local_sources: { EU: [ema-epar-wegovy] }` |
| `skin-epidermis-dermis-he.caption` | "Cosmetica met GHK-Cu gaan op de bovenste laag …" | EU cosmetics definition | registry `local_sources: { EU: [eu-regulation-1223-2009-cosmetics] }` |
| `skeletal-muscle-fibres-he.caption` | "Een Amerikaanse goedkeuring geldt voor spierkracht bij één zeldzame ziekte." | world context only; elamipretide is not authorised in the EU or NL (`research/nl/status/ss-31.yaml`); the SS-31 page's NL and EU rows must say so | eu-status |
| `ema-building-amsterdam.caption` | "Het Europees Geneesmiddelenbureau (EMA) … zit in deze toren in Amsterdam." | the EMA's seat (same claim as English) | eu-status |
| `belgian-federal-parliament.caption` | "Brussel: hier vergadert het Belgische federale parlement." | Belgian notes page only (legal/be) | be-notes |
| `ridderzaal-binnenhof.caption`, `tweede-kamer-plenary-hall.caption` | "midden tussen de gebouwen van het Nederlandse parlement" · "in 2018" | same claims as English; the Binnenhof renovation does not change them (the hall photo is dated 2018) | — |

## Check (independent, 27 October 2026)

Adversarial check of `src/i18n/nl/media.json` against `src/i18n/en/media.json`, the content brief, CONTENT-GUIDE
§1, §4.1 and §9, `docs/MEDIA-GUIDE.md` §5, `docs/STYLE-NL.md` and `research/nl/`. All five research files now end
with an independent fact-check. The nl-help fact-check of 27 October confirms facts 1, 4, 56 and 57 and the Commons
metadata of the two Dutch photos, so the "no fact-check yet" caveat above is out of date.

**What was checked:** all 84 ids, every alt and caption, line by line against English: meaning, qualifiers ("bij
ratten", "onbekend", "alleen zolang"), added claims, B1 and natural Dutch, "je", STYLE-NL terms, number format,
commerce and banned words (every locale's `tokens` plus STYLE-NL §5.6 and §7: no hit), no doses, no seller help.
Same ids, same order and same fields as English. `JSON.parse` OK. UTF-8, LF, only typographic ’. I looked at the
image files of the ambulance ("1·1·2" on the side; the building sign reads "Ambulancedienst", "Gemeente Den Haag",
"GGD"), the Belgian parliament (Belgian flag left, EU flag right, sculpture in the pediment) and the huisartsenpost.

**Fetched today (27 October 2026), wording relied on:**

| Source | Result | Wording |
|---|---|---|
| thuisarts.nl/spoed-wie-bel-je (`thuisarts-spoed-wie-bellen`) | 200, no date shown | "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost" · "Denk je dat je met spoed een arts nodig hebt? Neem dan contact op met de huisartsen-spoedpost" · "Bij levensgevaar: bel 112" |
| rijksoverheid.nl, urgent help (`rijksoverheid-urgent-medical-help`) | 200, modified 2025-12-19 | "In een levensbedreigende situatie kunt u het beste direct 112 bellen." · "Neem dan contact op met de huisarts, de huisartsenpost of de centrale doktersdienst." |
| igj.nl, eigen bereidingen apotheek (`igj-eigen-bereidingen-apotheek`) | 200, modified 2025-07-08 | "Apotheken mogen voor een individuele patiënt en op kleine schaal zelf een geneesmiddel bereiden. Dit heet ook wel een apotheekbereiding of magistrale bereiding." |
| apotheek.nl, medicijnafval (`apotheek-medicijnafval`) | 200 | "doe gebruikte naalden altijd in een naaldencontainer. Een naaldencontainer is te krijgen bij uw apotheek." |
| ema.europa.eu/en/about-us/contacts-european-medicines-agency | 200 | "European Medicines Agency Domenico Scarlattilaan 6 1083 HS Amsterdam The Netherlands" |
| Commons API, File:Zuidas_Vivaldi_16.jpg (`ema-building-amsterdam`) | 200 | "Europees Medicijnagentschap (EMA), Domenico Scarlattilaan, Amsterdam"; taken 2021-05-12 |
| Commons API: Tweede Kamer hall · Ridderzaal · Palais de la Nation · Louise Weiss flags | 200 | "Plenary Hall of the Dutch House of Representatives in The Hague", 2018-10-25 · "Ridderzaal - Binnenhof - Den Haag - NL", 2015-02-01 · "Palais de la Nation, Bruxelles, Belgique", 2013-09-01 · "flags in front of Louise Weiss building", 8 December 2007 |

**Changed (before → after, why):**

| Key | Before | After | Why |
|---|---|---|---|
| `huisartsenpost-oss.caption` | "Een huisartsenpost in Oss, in 2023. Een huisartsenpost helpt je ’s avonds, ’s nachts en in het weekend." | "Een huisartsenpost in Oss (2023). Een huisartsenpost helpt je bij spoed ’s avonds, ’s nachts, in het weekend en op feestdagen." | A country fact must match the research exactly: nl-help fact 4 and Thuisarts (above) name "feestdag" too, and the post is for spoed. The Dutch glossary (`huisartsenpost`: "voor spoed ’s avonds, ’s nachts, in het weekend en op feestdagen") and STYLE-NL §5.1 say the same. Without them a reader could take the post for an all-purpose clinic that is closed on public holidays. "(2023)" is the form fact 56 proposes; there is still no claim that the Oss post works from that building. |
| `pharmacy-mortar.caption` | "… mag sommige medicijnen nog steeds zelf maken." | "… mag sommige medicijnen nog steeds zelf maken, voor één patiënt." | The Dutch rule the caption rests on (IGJ, above; nl-care facts 29–31) is "voor een individuele patiënt en op kleine schaal". STYLE-NL §2.4 glosses magistrale bereiding for B1 as "een apotheek maakt het zelf, voor één patiënt". The qualifier narrows the claim; it adds nothing stronger. |
| `ema-building-amsterdam.caption` | "Het Europees Geneesmiddelenbureau (EMA), de medicijnautoriteit van de EU, zit in deze toren in Amsterdam." | "Het Europees Geneesmiddelenbureau (EMA) zit in deze toren in Amsterdam." | English says "medicines agency", not regulator. The EMA assesses and the European Commission decides (Dutch glossary entries `ema` and CHMP), so the apposition was an imprecise definition. The seat is confirmed by the EMA's own contact page and the Commons description (above). |
| `ambulance-den-haag.alt` | "Een gele ambulance … op de zijkant, voor een gebouw van de ambulancedienst." | "Een gele Nederlandse ambulance … op de zijkant. Hij staat voor een gebouw van de ambulancedienst." | "Dutch" and "parked" were lost; split into two sentences (B1). The building sign was checked in the image. |
| `belgian-federal-parliament.alt` | "… hoge zuilen, beeldhouwwerk boven de ingang en een Belgische en een Europese vlag, achter een keurige tuin." | "… hoge zuilen en beeldhouwwerk in de punt van de gevel, achter een keurige tuin. Er hangen twee vlaggen: een Belgische en een Europese." | The sculpture is in the pediment, not over the doors (checked in the image); two sentences for B1. |
| `huisartsenpost-oss.alt` | "een modern gezondheidsgebouw" | "een modern Nederlands zorggebouw" | "gezondheidsgebouw" is not Dutch usage; "Dutch" restored. |
| `hospital-emergency-entrance.caption` | "… in Rhode Island, in de Verenigde Staten." | "… in de Amerikaanse staat Rhode Island." | Same fact in more natural Dutch. It also clears the residue warning `in-de-vs`; this photo never shows on a Dutch page (see "Outside my files"). |
| `banting-best-1924.caption` | "voor het eerst insuline aan diabetespatiënten" | "als eerste insuline aan mensen met diabetes" | "first gave" means they were the first; "mensen met diabetes" is the usual Dutch patient wording; 18 words. |
| `duodenum-villi.caption` | "De darmwand vlak na de maag." | "De binnenkant van de dunne darm, vlak na de maag." | "lining" and "small intestine" were lost (the stomach caption already says "De binnenkant van de maag"). |
| `human-pancreatic-islet.caption` | "Alvleesklier van een mens. Rode cellen maken glucagon. Blauwe cellen maken insuline. …" | "Cellen in een menselijke alvleesklier. Rode cellen maken glucagon, blauwe cellen insuline. …" | "Cells" restored; 18 words. |
| `staph-aureus-usda-sem.caption` | "Stafylokokken, een soort bacterie, onder een sterke microscoop. Dit soort bacterie kan …" | "Stafylokokken onder een sterke microscoop. Dit soort bacteriën kan huidinfecties veroorzaken." | Repetition and the singular/plural clash removed; the second sentence still says they are bacteria. |
| `kelsey-kennedy-1962.caption` | "… zei zij nee tegen thalidomide." | "… zei ze nee tegen thalidomide." | Unstressed pronoun. "President" stays out to keep 18 words; the alt names him as president. |
| `wooden-ladder.caption` | "de laagste treden van de bewijsladder" | "de laagste sporten van de bewijsladder" | A ladder has "sporten"; "treden" are stairs. |
| `handshake-drawing.caption` | "Studies die de fabrikant betaalt, vinden vaker goede resultaten voor het eigen product." | "Studies die een fabrikant betaalt, vinden vaker goede resultaten voor zijn product." | "het eigen product" was ambiguous (whose?). |
| `human-serum-albumin.caption` | "… was gemaakt om eraan te binden en dagen mee te gaan." | "… was gemaakt om zich eraan te binden en dagenlang in het bloed te blijven." | "meegaan" is said of objects that wear out; English means it stays in the blood for days. |
| `mitochondria-lung-tem.caption` | "Ze hebben een eigen, klein setje genen." | "Ze hebben hun eigen kleine set genen." | No comma between these adjectives; less childish. |
| `pineal-gland-he.caption` | "een extract uit deze klier van runderen" | "een extract uit de pijnappelklier van runderen" | "deze klier van runderen" read as this very gland; the alt already names the pineal gland. |
| `skin-epidermis-dermis-he.caption` | "Cosmetica met GHK-Cu …" | "Cosmetische producten met GHK-Cu …" | STYLE-NL §2.4: cosmetic → cosmetisch product. |
| `vitamin-b3-crystals-polarised` | caption "Vitamine B3-kristallen …"; alt "Kristallen van vitamine B3 in gepolariseerd licht. Ze vormen …" | caption "Vitamine-B3-kristallen …"; alt "Kristallen van vitamine B3 onder gepolariseerd licht, in blauwe, groene en paarse stervormige patronen." | A compound with a word group takes hyphens between all parts; the alt follows the English structure. |
| `zagreb-medical-school.alt` | "waarin een ouder gebouw weerspiegelt" | "die een ouder gebouw weerspiegelt" | "weerspiegelen" needs an object or "zich". |
| `law-library-shelf` (alt and caption) | "wetboeken" | "juridische boeken" | A "wetboek" is a statute code; "law books" are legal books in general. |
| `hooded-lab-rat.alt` | "…, in de hoek van een witte bak." | "… Hij staat in de hoek van een witte bak." | "standing" was lost. |
| `three-measuring-scales.alt` | "Drie meetlatten" | "Drie meetinstrumenten" | Two of the three are tapes, not "meetlatten". |
| `athletics-track-lanes.caption` | "De genummerde banen …" | "De banen van een atletiekbaan." | "genummerde" repeated the alt and is not in English. |

**Unchanged after checking (country-dependent):** `ambulance-den-haag.caption` ("in 2010" and "Is er levensgevaar?
Bel dan direct 112." match nl-help facts 1 and 57 and STYLE-NL §5.1); `stethoscope-grey.caption` (je huisarts as the
first contact: brief, STYLE-NL §5.3); `sharps-bin-yellow.caption` (naaldencontainer: STYLE-NL §2.6, nl-help facts 45
and 48); `gila-monster.caption`; `skeletal-muscle-fibres-he.caption` (world context only: `research/nl/status/ss-31.yaml`
has the FDA accelerated approval as Forzinity and NL and EU as investigational; the page's rows carry that, and the
caption states no EU or NL status); `belgian-federal-parliament.caption`, `ridderzaal-binnenhof.caption`,
`tweede-kamer-plenary-hall.caption` and `flags-european-parliament-strasbourg.caption` (Commons metadata above).
Term spellings agree with the other Dutch files: "thymosine bèta-4" (also in the compound and glossary files) and
"gilamonster". "Softenon" is a glossary alias of `thalidomide`, so the Kelsey caption needs no brand name.

**Validator** (`npx tsx scripts/validate-content.ts --only i18n/nl`): 0 errors. In `media.json` 3 warnings stay, all
under the hard limit of 30 words: `duodenum-villi` (21: B1 Dutch needs "de dunne darm, vlak na de maag" for "upper
small intestine"), `huisartsenpost-oss` (21: the Dutch "bij spoed" and "op feestdagen" above) and
`human-serum-albumin` (20: "was gemaakt om …" keeps the English design intent). The other 3 warnings are in
`src/i18n/nl/pages.json` (another assignment). The earlier residue warning on `hospital-emergency-entrance` is gone.

**Outside my files (for their owners):**

- `src/data/media.yaml`: `huisartsenpost-oss` now says "bij spoed" and "op feestdagen", but its only source
  (`rijksoverheid-urgent-medical-help`) does not give the hours. Add `local_sources: { NL: [thuisarts-spoed-wie-bellen] }`
  (fetched today, wording above). `ema-building-amsterdam` has `sources: []`; its seat claim (the same as English)
  could cite the EMA contact page fetched today. I wrote no new source id.
- `scripts/lib/residue.ts` (`otherLocaleOnlyMedia`): a `default` hero that nl overrides (`hospital-emergency-entrance`,
  `vital-signs-monitor`, `wooden-gavel`, `weather-vane-rooster`) is not counted as "never shown on nl", so its Dutch
  caption is checked as if it were shown. Only "in de Verenigde Staten" was hit; it is rephrased above.
- `docs/STYLE-NL.md` (proposed rows): law books → juridische boeken (never "wetboeken"); ladder rungs → sporten; plus
  the translator's list above.
