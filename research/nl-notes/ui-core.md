# Notes: ui-core (Dutch UI strings, 27 October 2026)

Assignment: translate nine UI string files of `src/i18n/en/` into Dutch, in `src/i18n/nl/` with the same
names, keys and key order: `common.json`, `pages.json`, `compound.json`, `beginner.json`, `vocab.json`,
`evidence.json`, `figures.json`, `media-ui.json`, `explainer-ui.json`. Rules followed:
`research/nl-spec/content-brief.md`, `docs/STYLE-NL.md` (§2.1, §2.2, §2.4, §2.9, §5.1, §5.2 applied word for
word where they fix a string), `docs/CONTENT-GUIDE.md` §1, §1a, §4.1, §9. No English file was touched.

## Result

- All nine files written, UTF-8, LF. `node -e JSON.parse` passes for each.
- Keys: the same keys in the same order as English in every file (checked with a script that flattens both
  files), with one exception, listed below (`pages.jurisdiction.helpNote`). Every `{placeholder}` is kept;
  the only placeholder difference is the existing `common.emergency.jurisdiction` ("Bel {number}"), which
  was already in the Dutch file and is kept unchanged, as the assignment says.
- `common.emergency.call / now / ifSevere / jurisdiction`: kept exactly as they were ("Bel 112", "Bel direct
  112", "Is het ernstig? Bel 112.", "Bel {number}").
- `npx tsx scripts/validate-content.ts --only i18n/nl`: **0 errors, 3 warnings**. The warnings are the
  "aim for 18 or fewer" word count on three intro lines of built-in pages: `pages.sources.intro` (27 words),
  `pages.news.intro` (21), `pages.search.privacy` (29). They stay: each says as much as its English line
  (English: 29, 27 and 28 words, the same warning band), and each is split into short sentences. Two of them
  were errors (35 and 33 words) in the first draft and were cut below the 30-word limit.
- Approval sentences checked by simulating `src/lib/approval.ts` with `Intl.ListFormat('nl-NL')` over
  `vocab.jurisdictionInSentence` (NL then EU, as `config/locales.json` orders them):
  - semaglutide, tirzepatide (all): "Ja" · "Goedgekeurd in Nederland en de EU. Alleen op recept."
  - the experimental compounds (none): "Nee" · "Niet goedgekeurd als medicijn in Nederland of de EU."
  - nad-precursors: "Het is geen peptide. Niet goedgekeurd als medicijn in Nederland of de EU."
  - retatrutide (trials): "Niet goedgekeurd. Het is nog in klinisch onderzoek."
  - thymosin alpha-1 (elsewhere, national): "Alleen in andere landen" · "Goedgekeurd in Italië, India en
    Hongkong, voor bepaald gebruik. Niet goedgekeurd in Nederland of de EU."
  - tesamorelin, bremelanotide, SS-31 (elsewhere): "Alleen in andere landen goedgekeurd. Niet goedgekeurd in
    Nederland of de EU."
  - fact sheet: "Nederland sinds 2018; EU sinds 2018" / "Niet in Nederland of de EU".
  Every `{list}` stands after a preposition ("in {list}"), so the Dutch verb never has to agree with a list
  of one or two places (English "{list} approved it" would need "heeft" or "hebben").

## Decisions and differences from English (for the reviewer)

1. **`pages.jurisdiction.helpNote`: `CA` replaced by `NL`.** The English key holds a note about Canadian
   provincial health lines; the Canadian card is never shown on the Dutch site (cards: NL, EU, BE), and the
   brief takes the Canadian frame out. The Dutch file has `helpNote.NL` instead, which the NL card shows under
   its help list (`JurisdictionCard.astro` reads `pages.jurisdiction.helpNote.<code>` only in the locale's own
   strings): "Het nummer van de huisartsenpost bij jou in de buurt staat op de website van je huisarts. Je
   hoort het ook op het bandje als je je huisarts belt." Source: Thuisarts, read today (verification log). It
   does not claim that there is no national number (that is an inference from absence in
   `research/nl/nl-help.md` fact 5); it says only what Thuisarts says.
2. **`vocab.warningAction.urgent` = "Zoek vandaag nog hulp"** (STYLE-NL §2.1, as fixed). **Conflict for the
   lead or reviewer:** `research/nl/nl-help.md` fact 17 and §7.4 propose "Bel direct je huisarts of de
   huisartsenpost", because the Thuisarts pages for the `urgent` signs (spreading redness, fever after an
   injection, a used-needle stick, not keeping fluids down) say "Spoed: bel direct …", and "today" is slower
   than that. I followed the style sheet, which the assignment says to follow exactly, and did not change its
   row (the style sheet's owner must do that, with a note in `research/nl-notes/style.md`). If the row
   changes, change this one string.
3. **`common.notice.standing`** is STYLE-NL §5.2 word for word: "Alleen informatie, geen medisch advies. Ben je
   nu ziek? Bel bij levensgevaar 112, en anders je huisarts of de huisartsenpost." English also says "not a
   substitute for a clinician who knows you"; the fixed Dutch notice leaves that out.
4. **`common.translation.pending`**: STYLE-NL §5.2, without "the English page is the reference".
   `review.pending` and `review.pendingLegal`: §5.2 word for word.
5. **`beginner.glance.approved.none`** says "Niet goedgekeurd als **medicijn** in …", not "geneesmiddel" (the
   assignment's example). STYLE-NL §2.5: B1 text and glance tiles use "medicijn"; "geneesmiddel" is for legal
   pages. It also matches the tile's question "Is het een goedgekeurd medicijn?".
6. **`compound.authorised.routeText` and `routeElsewhere`** carry the Dutch route text (recept; artsenverklaring
   with the IGJ's ontheffing). They are plain text in `AuthorisedProducts.astro` (`<p>{route} <a
   href={routeUrl(L, 'legal-routes')}>…</a></p>`), so they cannot hold links: the one link is the component's,
   to `/nl/legal-routes/` without an anchor. **Component change to propose (not mine to make):** link
   `#recept` after `routeText` and `#artsenverklaring` after `routeElsewhere` (the brief's anchors).
7. **`common.footer.independence`** = "Niet-commercieel · Geen reclame · Geen sponsors · Geen geld van de
   industrie". English "Sells nothing" would be "We verkopen niets", but this string is **link text** (the
   footer's independence marker links to `/nl/about/funding/`), and STYLE-NL §7 keeps "verkopen" out of link
   text.
8. **`common.utility.notTranslated`** = "nog niet vertaald: opent de startpagina in {name}". `{name}` is the
   other language's own name ("English"), so "in het {name}" would read "in het English".
9. **`beginner.glance.sport.unclear.text`** names the Dopingautoriteit for "your anti-doping organisation"
   (the Dutch reader's organisation; it answers athletes' questions about substances, verification log).
   Belgian readers are not named here (brief: Belgium in notes only).
10. **`compound.regulatoryTable.caption`** = "Wettelijke status in Nederland, de EU en de sport" (English
    "Regulatory status by jurisdiction"): the table shows exactly these rows on the Dutch site.
11. **`compound.authorised.noProducts`** names "Nederland en de EU" (English "these countries"; the EU is not
    a country).
12. **`vocab.schedule.*`** (Australian Poisons Standard schedules, Canadian Prescription Drug List) keep their
    official English names. Only AU and CA rows carry a schedule, and the Dutch site never shows those rows.
13. **Developer comments** (`$comment` in beginner, vocab, figures) stay in English; beginner and vocab have
    one Dutch-specific sentence added at the end (how `{list}` reads in Dutch). Comments are never shown.
14. **"In detail"** and **"Tip"** stay as in English, as STYLE-NL §2.1 fixes them; "Home" (breadcrumb root)
    stays, as Dutch government and health sites use it.

## Terms not in STYLE-NL (proposed rows for its owner; used consistently here)

| English | Nederlands (used) | Where |
|---|---|---|
| breadcrumb | kruimelpad | common.breadcrumb |
| image credits | beeldverantwoording | media-ui.credits.heading |
| host (web hosting company) | webhost (first use: "het bedrijf waar onze site op staat") | common.consent, pages.search.privacy |
| glossary category regulation · law | Toelating en toezicht · Wetgeving | pages.glossary.categories |
| regulatory (news hint, timeline category) | Regelgeving | pages.news.hint, pages.timeline.categories |
| route (of administration, table column) | toediening | compound.authorised.route |
| species (study table column) · design | onderzocht bij · opzet | compound.studies |
| not a score (evidence profile) | geen optelsom | evidence.subtitle ("score" is banned as a grade word) |
| primary studies | oorspronkelijke studies | evidence.axes.preclinical_volume.explain |
| key (legend) | legenda | media-ui.plate.key |

## Country-dependent strings to check

Each fact below must be re-checked against `research/nl/` once its "## Fact-check (independent)" section is
in (`nl-help.md` had none on 27 October 2026; `nl-care.md` and `eu-status.md` neither at the time of
writing). Basis used now in brackets.

| Key | Dutch text (short) | Fact to check | Basis now |
|---|---|---|---|
| common.notice.standing | "Bel bij levensgevaar 112, en anders je huisarts of de huisartsenpost." | the help levels | nl-help facts 1, 3, 4, 9; STYLE-NL §5.2 |
| common.emergency.call / now / ifSevere / jurisdiction | "Bel 112" … (unchanged) | 112 as the Dutch emergency number | nl-help fact 1 |
| pages.jurisdiction.emergency | "Bij levensgevaar" (row value "Bel 112") | as above | nl-help fact 1 |
| pages.jurisdiction.help.* | Snel medisch advies · Vergiftiging · Vragen over drugs · Psychische hulp | labels fit the NL `help:` entries the merge writes (poisons: huisarts, not the NVIC) | STYLE-NL §2.1; nl-help §7.1, fact 18 |
| pages.jurisdiction.helpNote.NL | where to find the huisartsenpost number | Thuisarts wording | thuisarts.nl/spoed-wie-bel-je, read today |
| vocab.warningAction.urgent | "Zoek vandaag nog hulp" | speed of the urgent level (conflict, decision 2) | STYLE-NL §2.1 vs nl-help fact 17 |
| vocab.warningAction.stop | "Stop en maak een afspraak met je huisarts" | the stop level | STYLE-NL §2.1; nl-help fact 17, §7.4 |
| beginner.glance.approved.prescription | "Alleen op recept." | NL/EU-approved peptides are UR medicines | Gnw art. 1(1)(s), 61 (nl-care facts 1–2); EMA Dutch PI "Aan medisch voorschrift onderworpen geneesmiddel" (eu-status §3) |
| compound.authorised.routeText | "In Nederland krijg je dit medicijn alleen op recept. … De apotheek geeft je het goedgekeurde product mee." | as above; supply by a pharmacy (or dispensing GP) | nl-care fact 1 |
| compound.authorised.routeElsewhere | artsenverklaring, IGJ ontheffing, strict conditions, not on request | the named-patient route | nl-care facts 20–23, 50 (Gnw art. 40(3)(c), Regeling Gnw art. 3.17; "ontheffing" since 9 September 2025) |
| beginner.glance.sport.unclear.text | "Vraag het dan eerst aan de Dopingautoriteit." | the Dopingautoriteit answers athletes' questions | dopingautoriteit.nl/magdit/geneesmiddelen, read today |
| beginner.glance.sport.* , vocab.regStatus.prohibited / not-listed, vocab.wadaScope | dopinglijst, altijd / tijdens wedstrijden | wording of the Dutch Prohibited List | STYLE-NL §2.4 (Dopingautoriteit translation, checked by the style sheet) |
| compound.authorised.explain / explainElsewhere | "het goedgekeurde product van de apotheek" | supply through a pharmacy | nl-care fact 1 |

No string prints an amount, a phone number other than 112, or a regional service.

## Verification log (read 27 October 2026, curl with a browser user agent, HTTP 200)

| Page | Used for | Wording relied on |
|---|---|---|
| https://www.thuisarts.nl/spoed-wie-bel-je | `pages.jurisdiction.helpNote.NL`; the help levels in `common.notice.standing` | "Bij levensgevaar: bel 112"; "Op werkdagen overdag: bel je eigen huisarts"; "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost"; "Je vindt het nummer van de huisartsen-spoedpost bijvoorbeeld hier: op de website van jouw huisartsen-spoedpost / op de website van jouw huisarts / op het bandje dat je hoort als je je huisarts belt" |
| https://www.dopingautoriteit.nl/magdit/geneesmiddelen | `beginner.glance.sport.unclear.text` | "Heb je vragen over dopingstoffen in geneesmiddelen of dispensaties? Stuur dan een e-mail … of stel je vraag via WhatsApp … Je vraag wordt binnen één werkdag beantwoord." |

The UI strings cite no source and print no URL, so no source id was added, reused or dropped.

## Dropped

- `pages.jurisdiction.helpNote.CA` (Canadian provincial health-line note): Canadian frame; the Canadian card is
  not shown on the Dutch site. Replaced by `helpNote.NL` (decision 1).
- No citation was dropped (the UI strings carry none).

## Check (independent, 27 October 2026)

Adversarial check of the nine files against `src/i18n/en/` (every flattened key read side by side, 698 English
keys), `research/nl-spec/content-brief.md`, `docs/STYLE-NL.md`, `docs/CONTENT-GUIDE.md` §1, §1a, §4.1, §9, the
fact-checked research in `research/nl/` (nl-help, nl-care, be-notes, each with its "Fact-check (independent)"
section) and the merged NL, EU and BE entries in `src/data/jurisdictions.yaml`. I also checked how the components use
each country-dependent string (`AuthorisedProducts.astro`, `RegulatoryTable.astro`, `JurisdictionCard.astro`,
`WarningSigns.astro`, `CompoundIndex.astro`, `src/lib/approval.ts`), because on a preview fallback page the UI
strings are Dutch while the rows come from the English jurisdictions (`ctxContentLocale`).

### Result

- JSON valid in all nine files (UTF-8, LF, no BOM). Keys and order the same as English, except
  `pages.jurisdiction.helpNote`: `CA` dropped (as the translator listed), `NL` kept, `BE` added (below). Every
  `{placeholder}` and all markup kept (script check); the only placeholder difference is the agreed
  `common.emergency.jurisdiction` "Bel {number}". No "u" or "uw", no straight quotes or apostrophes, no decimal
  points, no commerce token in any string (the `tokens.nl` list and STYLE-NL §7's extra words), no dose, no seller
  help.
- `npx tsx scripts/validate-content.ts --only i18n/nl`: **0 errors**. In these files the same 3 warnings as before
  (18-word target on `pages.sources.intro` 28 words, `pages.news.intro` 21, `pages.search.privacy` 29; English is
  in the same band). The other warnings are in `media.json` (another assignment).

### What I changed, and why

1. **`vocab.warningAction.urgent`: "Zoek vandaag nog hulp" → "Bel direct je huisarts of de huisartsenpost".** The
   assignment makes help levels country-dependent facts that must match `research/nl/`. `nl-help.md` fact 17 and §7.4
   (re-read on the live Thuisarts pages by its fact-checker: "the table is accurate") give "Spoed: bel direct" for
   every `urgent` sign: spreading redness ("Bel direct je huisarts of de huisartsen-spoedpost", `thuisarts-wondroos`),
   fever after an injection (`thuisarts-steenpuist`, `thuisarts-sepsis`), a used-needle stick ("Neem direct contact
   op", RIVM; the Dutch `why` text itself says treatment works best "binnen een paar uur"), not keeping fluids down
   ("Je blijft steeds overgeven": spoed, `thuisarts-buikpijn`). "Vandaag nog" is slower than that, and the research's
   own rule is that the faster level never harms the reader. **For the STYLE-NL owner (I did not edit the sheet):**
   §2.1 row "warning actions" and §5.1 "Vandaag nog hulp" (and the §1 before/after row) still say "Zoek vandaag nog
   hulp"; change them to match, with a note in `research/nl-notes/style.md`. The medical reviewer's question
   (nl-help §6.2) stays open; if the reviewer chooses "today", change this one string back.
2. **`compound.authorised.routeElsewhere`** rewritten. The draft said "Soms mag een apotheek het toch leveren voor één
   patiënt" (STYLE-NL §2.4: no supply verb for the pharmacy-to-patient step; and the ontheffing is usually, not
   always, per patient: nl-care fact 26) and left out the condition the IGJ names first. New text follows the IGJ page
   read today: "Vindt je arts dat de medicijnen die in Nederland zijn goedgekeurd je niet kunnen helpen? Dan kan het
   soms toch. De arts vult daarvoor een verklaring in (artsenverklaring). Daarmee kan een apotheek de Inspectie
   Gezondheidszorg en Jeugd (IGJ) om een uitzondering vragen (ontheffing)." (nl-care facts 20–23; the IGJ's own
   explanation: "Een ontheffing is een specifieke uitzondering op een wettelijk verbod".) The rest is unchanged.
3. **`compound.authorised.routeText`**: "In Nederland krijg je dit medicijn alleen op recept." → "Je krijgt dit
   medicijn alleen op recept." (English: "It is a prescription-only medicine."). The component shows `routeText`
   whenever the compound is approved in the *content* locale's rows. On a preview fallback page (English text) that
   can be the US alone, for example tesamorelin, and the draft then said "In Nederland krijg je dit medicijn alleen
   op recept" for a medicine not approved here, followed by "Is het in Nederland niet goedgekeurd?". On Dutch pages
   the sentence means the same as before (the badge and the NL and EU rows say where).
4. **`compound.regulatoryTable.caption`**: "Wettelijke status in Nederland, de EU en de sport" → "Wettelijke status
   per land of gebied" (English: "by jurisdiction"). Same reason: on a fallback page the rows are the US, the UK,
   Canada, Australia and WADA under a caption that named the Netherlands.
5. **`compound.authorised.noProducts`**: "… voor Nederland en de EU …" → "De officiële productinformatie staat hier nog
   niet." (same fallback reason; "deze landen" reads wrong with one country and the EU).
6. **`pages.jurisdiction.helpNote.NL`**: added "meestal" ("staat meestal op de website van je huisarts"). Thuisarts
   says the number is "bijvoorbeeld" on the post's site, the GP's site or the GP's answering message, and "Meestal
   staat op de website van je eigen huisarts wat jouw huisartsen-spoedpost is": the draft had lost the qualifier.
7. **`pages.jurisdiction.helpNote.BE` added**: "1733 werkt in een groot deel van België, maar nog niet overal. Werkt
   1733 in jouw regio nog niet? Dan hoor je dat als je belt. Kijk dan op de website van je wachtpost, of vraag het je
   huisarts." The BE card's urgent-advice entry is "Dokter van wacht: 1733 (FOD Volksgezondheid)", which reads as if
   1733 works everywhere; be-notes fact 26 and conflict 10, the merge comment in `jurisdictions.yaml` ("a helpNote.BE
   string can say so") and `research/nl-notes/merge.md` ask for this line. Wording from the FOD page read today
   (below); the Belgian word "wachtpost" only on the BE card, as the brief allows. It prints no number other than the
   1733 that the card already names and the FOD page prints.
8. **`pages.sources.intro`**: "Officiële bronnen linken naar de officiële pagina" (repetition; English "Regulatory and
   legal sources" had lost "legal") → "Wetten en bronnen van overheden linken naar de officiële website, met de datum
   van onze laatste controle." 28 words (was 27; under the 30-word limit).
9. **`pages.news.title`**: "Nieuws over onderzoek en toelating" → "Nieuws over onderzoek en regelgeving" (English
   "Research and regulatory news"; "toelating" means only approval, and the same file renders "Regulatory" as
   "Regelgeving" in `news.hint.regulatory` and `timeline.categories.regulation`).
10. **`common.opinion.notice`**: "Het is geen naslag" → "Het is geen naslagwerk" (the Dutch noun).
11. **`compound.sequence.residueKey.hydrophobic`**: "Vettig (mijdt water)" (calque of "avoids water") → "Vettig
    (stoot water af)", the everyday Dutch for water-repellent.
12. **`evidence.why`**: "een heel bepaalde situatie" (calque) → "een heel specifieke situatie".
13. **`evidence.axes.safety.explain.partial`**: "Wat gegevens …" (reads as "What data") → "Enkele gegevens …".
14. **`evidence.matrix.note`**: "Sorteren zet de stoffen in volgorde van één vraag tegelijk." (unidiomatic) → "Je
    sorteert de stoffen steeds op één vraag tegelijk. Dat is geen ranglijst: …".

### Checked and left as they are

- `common.emergency.*` ("Bel 112", "Bel direct 112", "Is het ernstig? Bel 112.", "Bel {number}"): unchanged, as
  required; nl-help fact 1. `pages.jurisdiction.emergency` "Bij levensgevaar" fits all three cards (NL, EU and BE all
  have `emergency: ["112"]`).
- `common.notice.standing`: STYLE-NL §5.2 word for word; the help levels match nl-help facts 1, 3, 4 and 9 and the
  Thuisarts page. It leaves out the English "not a substitute for a clinician who knows you"; that is the style
  sheet's fixed wording, so I did not add it (for the STYLE-NL owner to decide).
- `pages.jurisdiction.help.*` labels fit the merged NL entries (`urgent-advice`: Thuisarts and Rijksoverheid;
  `poisons`: "Vergiftiging: bel je huisarts of de huisartsenpost (NVIC)", which matches the NVIC page read today;
  `drugs-advice`; `mental-health`) and the BE entries (dokter van wacht, Antigifcentrum, De Druglijn, Zelfmoordlijn).
- `beginner.glance.approved.prescription` "Alleen op recept." and the approval sentences: only semaglutide and
  tirzepatide have NL and EU rows `authorised` (checked in `src/data/compounds/*.yaml`), both UR medicines (Gnw
  art. 1(1)(s), 61; nl-care facts 1–2, confirmed by its fact-check). The translator's `Intl.ListFormat('nl-NL')`
  sentences are right; `regulatoryTable.discontinued` gets full dates (`formatDate`, long), so "Goedgekeurd op
  {from}" is grammatical.
- `beginner.glance.sport.unclear.text` ("Vraag het dan eerst aan de Dopingautoriteit"): the Dopingautoriteit page
  read today answers athletes' questions and warns that a missing result does not mean a substance is allowed.
  `vocab.regStatus.*`, `vocab.wadaScope.*` and the sport tiles use STYLE-NL §2.4 ("altijd", "tijdens wedstrijden",
  "de dopinglijst").
- `compound.authorised.explain` and `explainElsewhere` ("niet voor flacons van buiten de apotheek"): the brief's
  no-assumption wording for "vials sold online"; the route through the pharmacy matches nl-care fact 1.
- `vocab.warningAction.stop` "Stop en maak een afspraak met je huisarts": STYLE-NL §2.1 and nl-help fact 17 agree.
- `common.footer.independence` "Niet-commercieel …" (link text, so no "verkopen": STYLE-NL §7);
  `utility.notTranslated` ("… in English": `{name}` is the language's own name); `vocab.schedule.*` (AU and CA rows
  never show on the Dutch site); "In detail", "Tip", "Home": as the translator explained.
- The translator's proposed STYLE-NL rows (kruimelpad, beeldverantwoording, webhost, toediening, opzet, geen
  optelsom, oorspronkelijke studies, legenda) are used consistently across the nine files; still for the STYLE-NL
  owner.

### Verification log (27 October 2026)

| Page | How | Used for | Wording relied on |
|---|---|---|---|
| https://www.thuisarts.nl/spoed-wie-bel-je | curl, browser user agent, HTTP 200 | `helpNote.NL`, `notice.standing` | "Bij levensgevaar: bel 112"; "Op werkdagen overdag: bel je eigen huisarts"; "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost"; "Meestal staat op de website van je eigen huisarts wat jouw huisartsen-spoedpost is."; "Je vindt het nummer van de huisartsen-spoedpost bijvoorbeeld hier: … op de website van jouw huisarts / op het bandje dat je hoort als je je huisarts belt" |
| https://www.igj.nl/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/leveren-op-artsenverklaring | curl, HTTP 200; DCTERMS.issued 2024-12-27, modified 2026-02-06 | `routeElsewhere` | "Voor het leveren op artsenverklaring zijn er strenge regels."; "Vindt een arts dat behandeling van een patiënt niet mogelijk is met de in Nederland toegelaten en beschikbare geneesmiddelen?"; "Daarmee kan een apotheek, groothandel, fabrikant of apotheekhoudende huisarts bij de IGJ een ontheffing aanvragen."; "Een ontheffing is een specifieke uitzondering op een wettelijk verbod." |
| https://www.dopingautoriteit.nl/magdit/geneesmiddelen | curl, HTTP 200 | `glance.sport.unclear.text` | "Heb je vragen over dopingstoffen in geneesmiddelen of dispensaties? Stuur dan een e-mail … of stel je vraag via WhatsApp … Je vraag wordt binnen één werkdag beantwoord."; "geen resultaat betekent niet dat een geneesmiddel of werkzame stof toegestaan is!" |
| https://nvic.umcutrecht.nl/ | curl, HTTP 200 | `help.poisons` label | "Het NVIC informeert artsen, apothekers en andere professionele hulpverleners"; "Vermoedt u een vergiftiging? Neem dan contact op met uw huisarts (of buiten kantooruren met de huisartsenpost)." |
| https://www.health.belgium.be/nl/themas/gezondheid/dringende-geneeskundige-hulpverlening/actoren-dringende-geneeskundige-hulpverlening/dokter-wacht | curl HTTP 403; read in the built-in browser in a tab of my own (no check page, nothing clicked; tab closed); "Laatst bijgewerkt op 02/04/2026" | `helpNote.BE` | "In een groot deel van België kan je al 1733 bellen om een dokter van wacht te bereiken. In sommige regio’s gebruiken medische wachtposten echter nog een eigen telefoonnummer. Raadpleeg daarom best de website van je lokale wachtpost of vraag het na bij je huisarts. Werkt 1733 in jouw regio nog niet, dan zal het automatisch telefoonsysteem dit meedelen." |

The UI strings cite no source and print no URL, so no source id was added, reused or dropped. Nothing that
`research/nl/` marks UNRESOLVED is stated in these files (the NVIC number, a regional huisartsenpost number, 116 117
and 0800-0113 do not appear). No English file was touched; nothing was built, committed or pushed.

### Open, for others

- STYLE-NL owner: the `urgent` row (change 1) and the standing notice's missing clinician clause.
- Component owner (repeats translator note 6): `AuthorisedProducts.astro` links `/nl/legal-routes/` without an
  anchor; `#recept` after `routeText` and `#artsenverklaring` after `routeElsewhere` would match the brief.
- Medical reviewer: nl-help §6.2 (the `urgent` label) is still open.
