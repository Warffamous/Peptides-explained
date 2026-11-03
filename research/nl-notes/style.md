# Notes: the Dutch style sheet (`docs/STYLE-NL.md`), 27 October 2026

Assignment `style`. What I read, what I chose where I was unsure, what stays open, and what other
assignments may want to change in files I do not own. Nothing in `src/` was edited.

## 1. Sources read today (27 October 2026)

All fetched with curl (or the built-in browser where marked). Quotes are short and verbatim.

| Source | Used for | Wording relied on |
|---|---|---|
| Geneesmiddelenwet, wetten.overheid.nl/BWBR0021505/ ("Geldend van 09-09-2025 t/m heden") | law terms in §2.4, §2.7; the publisher line | art. 1: "handelsvergunning: een vergunning voor het in het handelsverkeer brengen van een geneesmiddel"; "UR-geneesmiddel: een geneesmiddel dat uitsluitend op recept ter hand mag worden gesteld"; "Bureau: het Europees Geneesmiddelenbureau"; "Geneesmiddelencomité: het comité voor geneesmiddelen voor menselijk gebruik"; "bijwerking: een reactie op een geneesmiddel die schadelijk en onbedoeld is"; "vervalst geneesmiddel"; "publieksreclame". Art. 40: "gebruik in schrijnende gevallen als bedoeld in artikel 83 van verordening 726/2004"; art. 42: "voorwaardelijke handelsvergunning". Art. 84 lid 1: "Reclame … met betrekking tot een geneesmiddel waarvoor geen handelsvergunning is verleend, is verboden." Art. 85: publieksreclame verboden voor geneesmiddelen die "uitsluitend op recept ter hand mogen worden gesteld". The law writes "College ter beoordeling van geneesmiddelen" and "Inspectie gezondheidszorg en jeugd" in lowercase |
| Verordening (EU) nr. 536/2014, Dutch text, eur-lex.europa.eu (built-in browser: EUR-Lex refuses scripts) | adverse event terms | art. 2: "„ongewenst voorval”: een schadelijk medisch verschijnsel bij een proefpersoon …, welk verschijnsel niet noodzakelijk een oorzakelijk verband met die behandeling heeft"; "„ernstig ongewenst voorval”"; "„proefpersoon”" |
| Ozempic, EMA product information in Dutch (ema.europa.eu/nl/documents/product-information/ozempic-epar-product-information_nl.pdf) | leaflet terms, frequencies, number format, label fields | "Subcutaan gebruik", "injectieplaats", "halfwaardetijd van ongeveer 1 week", "Het Europees Geneesmiddelenbureau", "SAMENVATTING VAN DE PRODUCTKENMERKEN", "BIJSLUITER", "Zeer vaak (komen voor bij meer dan 1 op de 10 gebruikers)", "Soms (komen voor bij minder dan 1 op de 100 gebruikers)", "Zelden (… 1 op de 1.000 gebruikers)", "1.201 patiënten", "fase 3b-studie", "open-labelstudie", "batchnummer"; on the label "PARTIJNUMMER Charge" and "UITERSTE GEBRUIKSDATUM EXP"; "Houder van de vergunning voor het in de handel brengen". The leaflet says "u" (we do not) |
| Actrapid, EMA product information in Dutch | vial wording | "injectieflacon" (82 times), "helder, kleurloos", "troebel" |
| cbg-meb.nl home and "Wie checkt mijn medicijn" | CBG name, "medicijn" for the public, "je" | "Wij zijn het College ter Beoordeling van Geneesmiddelen"; "de onafhankelijke autoriteit in Nederland die jouw medicijn checkt"; "Dan keuren we een medicijn goed"; tagline "Medicijnautoriteit CBG"; the same page says "Het Europees Medicijnagentschap EMA" |
| cbg-meb.nl, "centrale procedure" page | het EMA, SmPC, EPAR | "het geneesmiddelenbeoordelingscomité van het EMA"; "de samenvatting van productkenmerken (SmPC) en de patiëntenbijsluiter"; "Europees beoordelingsrapport (EPAR)" |
| igj.nl/over-ons; IGJ factsheet "Geneesmiddelen op artsenverklaring" (found by search) | IGJ name; "artsenverklaring" | "Inspectie Gezondheidszorg en Jeugd" (site title) |
| lareb.nl home; lareb.nl "Bijwerkingen van vaccinatie" | Lareb name, "je", prikplek | "Welkom bij Bijwerkingencentrum Lareb"; "Bij Lareb kun je bijwerkingen melden"; "Reacties op of rondom de prikplek"; "injectieplaatsreacties" |
| rivm.nl home; RIVM pneumokokkenprik bijwerkingen | RIVM name; prikplek | "Rijksinstituut voor Volksgezondheid en Milieu"; "Pijn of zwelling op de prikplek" |
| zorginstituutnederland.nl/over-ons · ccmo.nl · nhg.org · trimbos.nl · ggdghor.nl "Wat doet een GGD" · 113.nl | names | "Zorginstituut Nederland"; "Centrale Commissie Mensgebonden Onderzoek", "medisch-ethische toetsingscommissies"; "Nederlands Huisartsen Genootschap"; "Trimbos-instituut"; "Gemeentelijke Gezondheidsdiensten oftewel GGD’en"; "113 Zelfmoordpreventie", "Bel gratis 113" |
| dopingautoriteit.nl home and news of 28 September 2026; "Vertaling WADA dopinglijst 2026" (PDF, curl) | WADA terms | "WADA publiceert Dopinglijst 2027"; translation: "S0 Niet erkende stoffen", "S2 Peptidehormonen, groeifactoren, verwante stoffen en mimetica", "Te allen tijde verboden", "binnen en buiten wedstrijdverband", "Wereld Anti-Doping Agentschap (WADA)", "De dopinglijst is een vertaling van de “2026 Prohibited List International Standard”" |
| thuisarts.nl "Spoed: wie moet je bellen?" and "Ik heb wondroos" | B1 voice; help levels; term-in-brackets pattern | "Bij levensgevaar: bel 112"; "Op werkdagen overdag: bel je eigen huisarts"; "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost"; "een bult met pus onder je huid (abces)"; "Andere namen voor wondroos zijn erysipelas en cellulitis"; digits for small numbers ("aan 1 kant") |
| rijksoverheid.nl "Wanneer moet ik naar de huisartsenpost of de spoedeisende hulppost?" | huisartsenpost before SEH | "Neem altijd eerst contact op met uw huisartsenpost voordat u naar de spoedeisende hulppost gaat. Behalve bij een levensbedreigende situatie." (writes "u") |
| drugsinfo.nl home, contact page, GHB page, "Injecteren … risico’s verminderen" | harm-reduction voice | "Heb je vragen over drugs?"; "Zonder oordeel"; "Drugsinfo is een website van het Trimbos-instituut"; "De Drugs Infolijn"; "0900-1995 €0,10/min". Its injecting page advises "Laag doseren": a dosing tip this site may not give (STYLE-NL §5.6) |
| Stichting Lezen & Schrijven, "Lekker Duidelijk Schrijven" checklist (PDF, 2025-10) | B1 rules | "Schrijf actieve zinnen."; "Maak geen tangconstructies."; "Wel: maar, want, als. Niet: daarentegen, immers, indien."; "Voorkom het gebruik van synoniemen." (its sentence limit of 10 words is for A2/1F, so STYLE-NL uses 10–15) |
| woordenlijst.org, "peptide" (built-in browser) | article and plural | "de/het peptide", plural "peptiden" or "peptides" |
| fagg-afmps.be/nl via the Internet Archive capture of 15 October 2026 (the live site shows a bot check) | Belgian name | "Het Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten" |
| Vlaamse Team Taaladvies (search result summaries only) | % and unit spacing | practice writes no space before %; standards want a space between number and unit |

## 2. Choices I was unsure about (owner or lead may overrule; change STYLE-NL in one place)

1. **"In het kort" instead of "TL;DR"** for the box title. The owner chose "TL;DR" for English on 27
   October; for Dutch B1 readers "TL;DR" is English internet slang and reads badly aloud, while "In het
   kort" is exactly what Thuisarts calls its first block. The frontmatter key stays `tldr`. **Owner's
   call**: if he wants "TL;DR" on Dutch too, change one row in §2.1 and `common.tldr`.
2. **"medicijn" (B1) vs "geneesmiddel" (law).** CBG and Thuisarts write "medicijn" for the public; the
   law and the EU leaflets write "geneesmiddel". Two words for one concept breaks the "one word" rule,
   so the split is by register: B1 text "medicijn", legal text and terms of art "geneesmiddel".
3. **"medicijnautoriteit" for "regulator"**, after the CBG's own "Medicijnautoriteit CBG".
   Alternatives: "toezichthouder" (too broad; the IGJ is one too), "registratieautoriteit" (jargon).
4. **"het Europees Geneesmiddelenbureau (EMA)"** as the assignment asked, matching the law and the EMA's
   Dutch documents. The CBG's public page says "Europees Medicijnagentschap". "het EMA" (neuter) follows
   the CBG and the law's "het Bureau"; many Dutch media write "de EMA".
5. **"de huisartsenpost"** as the brief says, with "huisartsen-spoedpost" (Thuisarts' current name) as a
   glossary alias. The saved 23 October material uses "huisartsenpost" 55 times and
   "huisartsen-spoedpost" 4 times; Rijksoverheid also writes "huisartsenpost".
6. **"het peptide"**: the Woordenlijst allows both articles; I chose "het" as for other chemistry nouns
   (het eiwit, het hormoon, het aminozuur) and "peptiden" as the SmPC writes.
7. **"prikplek"** in B1 text (RIVM, Lareb), "injectieplaats" as the leaflet term in brackets.
8. **"naaldencontainer"**: both "naaldcontainer" and "naaldencontainer" are in use; the saved material
   uses "naaldencontainer". Alias the other.
9. **Nav labels** "Stoffen" (for Compounds: neutral; "middelen" sounds like drugs, "peptiden" is wrong
   for the non-peptides), "Wet en regels" (Law), "Onderzoek" (Evidence), "alarmsignalen" (warning
   signs). "Praten met je arts" (not "je huisarts") because the page also covers prescribers.
10. **Evidence axes in Dutch**: "Kennis van de risico’s" for "Safety characterisation" so that no tile
    or card puts the word "veiligheid" next to an unapproved compound; "Mensen, gecontroleerd" for
    `human-controlled` to stay parallel with "Mensen, beperkt".
11. **"de dopinglijst" lowercase** in running text (the Dopingautoriteit's translation writes "De
    dopinglijst is een vertaling …"), capitalised only with a year ("de Dopinglijst 2027"), as in its
    news headline. The Dutch S0 name has no hyphen in the official translation ("Niet erkende stoffen"):
    quoted as is.
12. **Numbers**: digits from 2 up (Thuisarts practice) rather than the literary rule of spelling out one
    to twenty; "één" spelled out in prose for the number one. "15%" without a space (practice; the
    brief's own example "14,9%"), "5 mg" with a space. "€ 385" with a space and "14.30 uur": both forms
    are accepted Dutch; I picked one each.
13. **"uur" in `<Q>`** instead of "h": B1 readers know "uur"; "h" is SI but rare in Dutch lay text, and
    the EU leaflet uses "u" in units ("l/u"), which would confuse.
14. **Arabic phase numbers** ("fase 3") as in the Dutch Ozempic SmPC ("fase 3b-studie"), although the
    English vocab says "Phase III trial".
15. **"Veilig en legaal gebruiken"** for the authorised-medicine section title keeps "veilig", which is
    banned for unapproved compounds only. If the UI agent finds it risky next to a non-approved product
    in any layout, use "Zo gebruik je het volgens de regels".
16. **Ladder rung 2** shortened "identify, check or verify" to "vinden of controleren" (Dutch has no
    natural three-way split there); same meaning.

## 3. UNRESOLVED (not asserted in STYLE-NL)

- **Whom the NVIC serves.** Search results (older NVIC and RIVM publications) say it informs doctors,
  vets and pharmacists; I could not read a current NVIC page (vergiftigingen.info returned an empty
  shell; the UMC Utrecht URL gave 404). STYLE-NL only fixes the name and points to `research/nl/`.
- **The Dutch legal term for the EU "qualified person"** who releases each batch: not found in the
  Geneesmiddelenwet text I searched. STYLE-NL avoids the term ("de keten van de apotheek heeft deze
  controles ingebouwd"); a writer who needs it takes it from `research/nl/` with a source.
- **The Dutch name of the EPAR** is given as the CBG writes it ("Europees beoordelingsrapport (EPAR)");
  I did not open an EMA page that spells out the Dutch full form.
- **"0800-0113"** for 113 Zelfmoordpreventie: not seen on the page I read ("Bel gratis 113"), so
  STYLE-NL prints only 113.

## 4. For other assignments (files I do not own; not changed)

- `config/commerce-tokens.json` `tokens.nl` lacks words the brief lists as commerce words: **prijs,
  prijzen** (the brief names "prijs"), and also webshop, webwinkel, verkoop, te koop. STYLE-NL §7 asks
  writers to avoid them by hand; adding them would let the build catch them. Careful with "duur"
  (also "duration") and "actie" (also "action"): do not add those.
- The validator's seller-word check (`checkSellerWords`, `scripts/validate-content.ts`) has English
  patterns only and runs on the English UI strings. Dutch patterns would catch "betrouwbare
  (verkoper|bron|lab|leverancier)", "legit", "getest door derden", "waar te koop".
- `src/data/jurisdictions.yaml`: the NL card's regulator is "College ter Beoordeling van Geneesmiddelen
  (CBG-MEB)" and the BE card is in English ("Federal Agency for Medicines and Health Products (FAMHP /
  FAGG / AFMPS)"); for the Dutch site the data agent may want Dutch display names
  ("Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten (FAGG)").
- Smartypants converts quotes only in the MDX body text: Dutch frontmatter, JSON strings and component
  attributes need typographic ’ typed by hand (STYLE-NL §4.1). A check for a straight ' in Dutch JSON
  and frontmatter would catch "risico's".
- `common.emergency.jurisdiction` in `src/i18n/nl/common.json` is "Bel {number}"; fine with STYLE-NL.
