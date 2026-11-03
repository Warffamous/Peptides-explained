# Notes: Dutch-only glossary `src/i18n/nl/glossary/nl.json` (assignment gloss-nl, 27 October 2026)

What I made, what I left out and why, where each definition's facts come from, and what other
assignments may want to know. Only `src/i18n/nl/glossary/nl.json` and this file were written. Nothing in
`src/i18n/en/` or any other file was changed. Validator: `npx tsx scripts/validate-content.ts --only glossary`
→ 0 errors, 0 warnings; `JSON.parse` OK; UTF-8, LF.

## 1. What is in `nl.json` (56 entries)

Start: the 63 ids that are in the snapshot's English glossary
(`research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/`) and not in today's `src/i18n/en/glossary/`
(computed by script), plus the three entries in `research/for-nl-site/i18n-replaced-en.json` →
`glossary/final-qa.json` that were removed (flemish-decree, rivm, thuisarts: all three are among the 63).

- **49 snapshot ids, same ids, `category` and `see_also` unchanged** (checked by script):
  huisarts, huisartsenpost, seh, ggd, nvic, thuisarts, klein-chemisch-afval, eigen-risico, zorginstituut,
  cbg, igj, landelijk-meldpunt-zorg, lareb, nvwa, rivm, dopingautoriteit, nhg, knmg, ccmo, metc,
  geneesmiddelenwet, wet-op-de-geneesmiddelenvoorziening, economic-offences-act, administrative-fine, wgbo,
  wet-big, big-register, reserved-procedure, ema, centralised-procedure, accelerated-assessment,
  prime-scheme, directive-65-65, eu-directive, eu-regulation, second-reading, cjeu, eea, mra-country,
  clinical-trials-regulation, ctis, eu-common-logo, safety-features, magistral-preparation, cosing, famhp,
  medical-need-programme, out-of-court-settlement, flemish-decree.
- **7 new Dutch-only ids:** apotheek, apotheker, onderzoekmetmensen (asked for); drugs-infolijn (the style
  sheet's own example id, §6), wmo (STYLE-NL §2.7 names the WMO as a recurring term with a name clash),
  geneesmiddeleninformatiebank and farmacotherapeutisch-kompas (STYLE-NL §2.7 institutions; pages name
  them in text). Ids are Dutch kebab-case without accents (STYLE-NL §6).

No `autolink: false` anywhere. Every apostrophe is ’ (GGD’en, METC’s, ’s avonds, zo’n, programma’s).

## 2. Not in `nl.json`, and why

| Id or term | Why | Where it lives instead |
|---|---|---|
| arzneimittelgesetz, bfarm, heilmittelwerbegesetz, anti-doping-gesetz, fertigarzneimittel, inverkehrbringen, nicht-geringe-menge, ordnungswidrigkeit, paul-ehrlich-institut, bundesgesetzblatt | German-only terms: skipped as the assignment says | none |
| gvs | restored by the semaglutide translator in `src/i18n/nl/glossary/semaglutide.json` (the snapshot's own file); a second copy here made the validator fail ("duplicate glossary id") | semaglutide.json |
| chmp | same, in `tesamorelin.json` | tesamorelin.json |
| nhg-standaard, combined-lifestyle-intervention | same, in `tirzepatide.json` | tirzepatide.json |
| artsenverklaring | the concept has the English id `named-patient-route` (guides.json); the Dutch guides file already uses the term "artsenverklaring" | guides.json `named-patient-route` |
| UR-geneesmiddel | English id `prescription-only-medicine` (guides.json); its Dutch entry has the aliases "UR-geneesmiddel", "UR-geneesmiddelen" | guides.json |
| spuitomruil | English id `needle-syringe-programme` (safety-a.json); STYLE-NL §2.6 fixes "spuitomruil" as its Dutch term | safety-a.json (Dutch file not checked for this id yet) |
| prikaccident | English id `needle-stick-injury` (safety-a.json); STYLE-NL §2.6 "prikaccident" | safety-a.json |
| recept | STYLE-NL §6 lists "recept" as an everyday word that may not be an alias; as a term it would link the first "recept" on every page. The concept is covered by `prescription-only-medicine` ("alleen op recept") | none (not added) |

**No entry was dropped for being a US/UK/CA/AU/IE/NZ-only term**: none of the 63 is one (they are Dutch, EU,
Belgian or German). The drop rule applies to the translators of the other English files.

I did write the four duplicates first and removed them after the validator run: the compound translators'
entries say the same thing (checked). If those translators later remove them because they think `nl.json`
owns them, the ids must come back here: the build script keeps their text
(`<scratchpad>/gloss-nl-build.mjs` has them; the four are deleted at the end).

## 3. What changed from the 23 October (snapshot) wording

- **famhp:** term "FAGG" (the brief: "Name FAGG for Belgium"), aliases the Dutch full name and "AFMPS" (the
  French abbreviation in the FAGG's own page titles, "AFMPS | FAGG"). "FAMHP" (English) dropped. The id
  stays `famhp`.
- **flemish-decree:** term "decreet" (the Dutch word the BE page will use), aliases "Vlaams decreet",
  "antidopingdecreet" (the decree's own citation title: "het Antidopingdecreet van 25 mei 2012").
- **out-of-court-settlement:** term "minnelijke schikking", defined for Belgium only: on the 23 October site
  it was used on the BE page, and the FAGG's own word is "minnelijke schikking". The Dutch "transactie" and
  "strafbeschikking" are not in it ("transactie" is an everyday word: no alias).
- **medical-need-programme:** term "medisch noodprogramma" (the FAGG's page title "Gebruik in schrijnende
  gevallen - medische noodprogramma's"; Belgian law art. 6quater).
- **English aliases removed** (GP, general practitioner, Medicines Evaluation Board, European Medicines
  Agency, National Health Care Institute …): Dutch pages do not use them. Kept English only where a Dutch
  reader meets it: "Clinical Trials Information System", "Clinical Trials Regulation" (OMON writes
  "CTR-studies"), "AFMPS".
- **Short codes not used as aliases (STYLE-NL §6):** WED, EER, BIG alone, WMO, WOG. "Wet BIG" and
  "BIG-register" stay as whole phrases. "kca", "GLI" (moved with its entry), "LMZ", "OMON", "Gnw" kept: none is a Dutch
  word in lowercase.
- **"richtlijn" and "verordening" alone are not aliases**: "richtlijn" is also a medical guideline (STYLE-NL
  §2.3), "verordening" also a municipal by-law. Terms are "EU-richtlijn" and "EU-verordening".
- **thuisarts:** the snapshot said "written by the NHG". Today Thuisarts says it is "een
  samenwerkingsverband van het Nederlands Huisartsen Genootschap met de Federatie Medisch Specialisten en
  Patiëntenfederatie Nederland": the definition says so.
- **nvic:** the style sheet had "whom the NVIC serves" as UNRESOLVED; research/nl/nl-help.md fact 18 and my
  own reading today settle it: it informs professionals, not the public (quotes in §4).
- **landelijk-meldpunt-zorg:** now a section of igj.nl (nl-help fact 25); the definition no longer calls it
  a separate site.
- **eigen-risico:** **no amount.** research/nl/nl-care.md fact 54 confirms € 385 for 2026, and the
  Zorginstituut page says the same today, but a glossary tooltip shows on every page and the amount changes
  on 1 January 2027 (the cabinet plans € 400: nl-care fact 55, not yet law). The definition says instead what
  the Zorginstituut says: "De overheid stelt de hoogte van het eigen risico elk jaar opnieuw vast." The page
  text can give the dated amount with its source.
- **directive-65-65:** "the first medicines law of the EEC" dropped (not in the text I read); kept the date,
  the authorisation rule (art. 3) and the repeal by 2001/83/EG (art. 128).
- **prime-scheme:** "started in 2016" dropped (the EMA page gives no start date in its text, only document
  dates of March 2016).
- **wet-op-de-geneesmiddelenvoorziening:** term written "Wet op de geneesmiddelenvoorziening" (capital on the
  first word only, STYLE-NL §4.2). The 1958 title and the explanatory memorandum write "Geneesmiddelenvoorziening":
  matching is case-insensitive, so both link. The style owner may prefer the official capital.
- **reserved-procedure:** now says the rule covers acts done "in hun werk" on another person (Wet BIG art. 35:
  "beroepsmatig ... ten aanzien van personen"), so it does not read as a rule about injecting yourself.
- **apotheek / apotheker** say only what the law and the CBG say: only a pharmacist in a pharmacy (or a
  dispensing GP) may hand over prescription medicines; a pharmacy may make a medicine for one patient; the
  pharmacist checks the safety features. Nothing about where to get needles (nl-help UNRESOLVED 4).

## 4. Verification log (all read on 27 October 2026, curl unless marked)

Definitions are facts about institutions and laws; no glossary entry carries a citation. Every fact below was
read today in the source named, either by me or (marked R) by the research of 27 October in `research/nl/`.
Note: of the research files only `be-notes.md` has its "## Fact-check (independent)" section; `nl-help.md`,
`nl-law.md`, `nl-care.md` and `eu-status.md` do not yet. So I re-read the primary page myself for every fact
I took from those four, except where marked R only.

| Source (URL) | For | Wording relied on |
|---|---|---|
| cbg-meb.nl (home) | cbg | "Wij zijn het College ter Beoordeling van Geneesmiddelen. We zijn in Nederland verantwoordelijk voor het beoordelen, bewaken en stimuleren van goed gebruik van medicijnen."; "Medicijnautoriteit CBG" |
| wetten.overheid.nl/BWBR0021505/2025-09-09 (Geneesmiddelenwet, "Geldend van 09-09-2025 t/m heden") | cbg, geneesmiddelenwet, apotheek, apotheker, nvwa, igj, administrative-fine, eea, ema, chmp | art. 1: "Bureau: het Europees Geneesmiddelenbureau"; "Geneesmiddelencomité: het comité voor geneesmiddelen voor menselijk gebruik"; "lidstaat: een staat die lid is van de Europese Unie of een andere staat die partij is bij de Overeenkomst betreffende de Europese Economische Ruimte"; "apotheek: een lokaal ... waarin geneesmiddelen worden bereid, ter hand gesteld"; art. 61(1): "verboden UR-geneesmiddelen ... ter hand te stellen, met uitzondering van: a. apothekers die hun beroep in een apotheek uitoefenen; b. huisartsen die in het bezit zijn van een vergunning"; art. 100(1): toezicht "de ambtenaren van de Inspectie gezondheidszorg en jeugd en de ambtenaren van de Nederlandse Voedsel- en Warenautoriteit"; art. 101(1): "Onze Minister kan een bestuurlijke boete opleggen" |
| igj.nl/over-ons | igj | "houdt de Inspectie Gezondheidszorg en Jeugd toezicht op de kwaliteit en veiligheid van de zorg en jeugdhulp in Nederland. En samen met andere Europese inspecties waken wij over de internationale markt voor geneesmiddelen" |
| igj.nl/onderwerpen/medicijnen/online-medicijnen/toezicht-op-online-medicijnen | igj, administrative-fine | "Zien we dat een website illegale medicijnen aanbiedt of daarvoor reclame maakt? Dan kunnen we maatregelen nemen. Bijvoorbeeld door een waarschuwing of boete op te leggen." |
| igj.nl/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/leveren-op-artsenverklaring | igj | "Een daarvan is een ontheffing voor levering op artsenverklaring"; "Sinds 9 september 2025 gebruikt de Inspectie ... de term ‘ontheffing’" |
| igj.nl/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/eigen-bereidingen-apotheek | magistral-preparation, apotheek | "Apotheken mogen voor een individuele patiënt en op kleine schaal zelf een geneesmiddel bereiden. Dit heet ook wel een apotheekbereiding of magistrale bereiding. Ook zulke apotheekbereidingen moeten voldoen aan wettelijke kwaliteitseisen. Daar houdt de Inspectie Gezondheidszorg en Jeugd (IGJ) toezicht op. Voor apotheekbereidingen gelden eisen aan de grondstoffen" |
| Directive 2001/83/EG, Dutch text (CELLAR, publications.europa.eu/resource/celex/32001L0083) | magistral-preparation, directive-65-65 | art. 3: "geneesmiddelen die in de apotheek volgens medisch recept voor een bepaalde patiënt worden bereid, algemeen Formula magistralis geheten"; art. 128: "De Richtlijnen 65/65/EEG, ... worden ingetrokken" |
| Richtlijn 65/65/EEG, Dutch text (CELLAR, celex/31965L0065) | directive-65-65 | title "Richtlijn 65/65/EEG van de Raad van 26 januari 1965 ..."; art. 3: "Een farmaceutische specialiteit mag in een Lid-Staat slechts in de handel worden gebracht als daartoe van tevoren door de bevoegde overheidsinstantie van deze Lid-Staat een vergunning is afgegeven" |
| igj.nl/documenten/vraag-en-antwoord/vragen-over-afleveren-geneesmiddelen-zonder-handelsvergunning | geneesmiddeleninformatiebank | "U kunt een geregistreerd geneesmiddel herkennen aan het registratienummer dat begint met de letters ‘RVG’ of ‘EU’. Dit registratienummer staat op de verpakking"; EU-authorised medicines "zijn opgenomen in de Geneesmiddeleninformatiebank" |
| geneesmiddeleninformatiebank.nl (home) | geneesmiddeleninformatiebank | page title "Geneesmiddeleninformatiebank \| College ter Beoordeling van Geneesmiddelen"; "U kunt hier zoeken op registratienummer, productnaam, werkzame stof/hulpstof"; bijsluiter/SmPC there: STYLE-NL §2.7 (style agent, today) |
| igj.nl … klacht-of-vraag-over-zorg-of-jeugdhulpverlening (Landelijk Meldpunt Zorg) | landelijk-meldpunt-zorg | "Heeft u een vraag of klacht over de kwaliteit van zorg of jeugdhulp? Of over een medicijn of medisch hulpmiddel? Het Landelijk Meldpunt Zorg geeft u informatie en advies"; "Contact LMZ"; "Wij lossen uw klacht niet op" (R, nl-help fact 26) |
| igj.nl/onderwerpen/medicijnen/online-medicijnen | landelijk-meldpunt-zorg | "Vermoedt u dat een website illegaal medicijnen aanbiedt? Dan kunt u dit melden bij het Landelijk Meldpunt Zorg." |
| lareb.nl/pages/alles-over-bijwerkingen-melden; lareb.nl | lareb | "Iedereen kan een bijwerking bij ons melden"; "medicijnen die je koopt bij de drogist, supermarkt of via internet"; "Wij geven geen medisch advies" (R, nl-help fact 21); users of illegal medicines may report (R, nl-help fact 22) |
| cbg-meb.nl/onderwerpen/goed-gebruik/bijwerkingen | lareb | "Lareb verzamelt, registreert en analyseert individuele meldingen, in opdracht van het CBG" |
| zorginstituutnederland.nl/wat-wij-doen | zorginstituut | "Naast het adviseren van het ministerie van VWS over de inhoud van het basispakket"; reimbursement via the GVS after the minister follows advice (R, nl-care fact 60) |
| zorginstituutnederland.nl/verzekerde-zorg/e/eigen-risico-zvw | eigen-risico, huisarts | "Het eigen risico is het bedrag dat u zelf moet betalen als u zorg uit het basispakket nodig hebt"; "De overheid stelt de hoogte van het eigen risico elk jaar opnieuw vast"; "vanaf 18 jaar"; exempt: "Huisartsartsenzorg en zorg bij huisartsenpost"; "Voor 2026 is het verplichte eigen risico € 385" (not used) |
| zorginstituutnederland.nl/verzekerde-zorg/h/huisarts-zvw | eigen-risico | "Het eigen risico geldt wel voor: medicijnen die de huisarts voorschrijft; de testen die de huisarts buiten de praktijk laat uitvoeren, zoals bloedonderzoek; de zorg waarnaar uw huisarts verwijst" |
| zorginstituutnederland.nl/verzekerde-zorg/g/geneesmiddelen-zvw | GVS (entry now in semaglutide.json) | "Alleen geregistreerde geneesmiddelen die zijn opgenomen in het Geneesmiddelenvergoedingssysteem (GVS) worden vergoed uit het basispakket"; bijlage 2 "als er extra voorwaarden gelden" |
| zorginstituutnederland.nl/verzekerde-zorg/g/gecombineerde-leefstijlinterventie-gli-zvw | GLI (entry now in tirzepatide.json) | "Een GLI is een programma van 2 jaar"; "advies over gezonde voeding, gezonde eetgewoontes en gezond bewegen"; "De huisarts stelt vast of u een GLI kan krijgen"; "De kosten voor een GLI vallen niet onder het verplicht eigen risico" |
| farmacotherapeutischkompas.nl (home) | farmacotherapeutisch-kompas | "Zorginstituut Nederland" (publisher); sections on "regeling zorgverzekering"; "Bijwerkingen", "Interacties" (STYLE-NL §8, style agent today) |
| thuisarts.nl/spoed-wie-bel-je | huisarts, huisartsenpost | "Op werkdagen overdag: bel je eigen huisarts"; "Avond, nacht, weekend of feestdag: contact met de huisartsen-spoedpost" |
| rijksoverheid.nl … wanneer-heb-ik-een-verwijsbrief-van-mijn-huisarts-nodig | huisarts | "Voor specialistische zorg, bijvoorbeeld in ziekenhuizen, heeft u een verwijsbrief nodig." |
| rijksoverheid.nl … huisartsenpost of de spoedeisende hulppost (R, nl-help fact 7) | huisartsenpost, seh | "Neem altijd eerst contact op met uw huisartsenpost voordat u naar de spoedeisende hulppost gaat. Behalve bij een levensbedreigende situatie. Dan kunt u het beste direct 112 bellen." |
| ggdghor.nl/home/wat-doet-een-ggd/ | ggd | "Gemeentelijke Gezondheidsdiensten oftewel GGD’en beschermen, bewaken en bevorderen de gezondheid van de inwoners"; tasks include "infectieziektebestrijding" and "seksuele gezondheid"; "25 GGD’en in Nederland" |
| thuisarts.nl/hiv/ik-heb-onveilige-seks-gehad-met-iemand-die-hiv-of-misschien-hiv-heeft | ggd | "Je kunt PEP krijgen bij de GGD." |
| rivm.nl hygiene guideline (R, nl-help fact 42) | ggd | after a needle-stick: "Neem direct contact op met uw huisarts, de regionale GGD (Gemeentelijke Gezondheidsdienst) of het ziekenhuis" |
| nvic.umcutrecht.nl/nvic/nl/; vergiftigingen.info (home, with session) | nvic | "Het NVIC informeert artsen, apothekers en andere professionele hulpverleners over de mogelijke gezondheidseffecten en behandelingsmogelijkheden bij vergiftigingen."; "Vermoedt u een vergiftiging? Neem dan contact op met uw huisarts (of buiten kantooruren met de huisartsenpost)."; "Alleen voor hulpverleners" |
| thuisarts.nl/over-thuisarts | thuisarts | "Bij Thuisarts vind je informatie over gezondheid, ziekte en de zorg"; "Thuisarts is door artsen gemaakt"; "Thuisarts is een samenwerkingsverband van het Nederlands Huisartsen Genootschap met de Federatie Medisch Specialisten en Patiëntenfederatie Nederland" |
| nhg.org (home) | nhg, nhg-standaard | "Zonder invloed van farmacie, overheid of anderen maakt het NHG richtlijnen, Thuisarts en e-learnings"; "Werkgroepen die grotendeels uit huisartsen bestaan, stellen de standaarden op"; "meer dan 13.000 huisartsen" lid. Note: the home page now says "NHG-Richtlijnen" as the umbrella; the obesity guideline is still titled "NHG-Standaard Obesitas (M95)" (R, nl-care source record) |
| knmg.nl (home) | knmg | title "Artsenfederatie \| KNMG"; "Advies voor artsen bij juridische en medisch-ethische vragen"; beroepsgeheim and "Wie mogen geneesmiddelen voorschrijven?" (R, nl-help fact 54, nl-care fact 4) |
| dopingautoriteit.nl (home); wetten.overheid.nl/BWBR0041439/2025-07-05 (Wuab) | dopingautoriteit | Wuab art. 4: "Er is een Dopingautoriteit." … "De Dopingautoriteit is de nationale antidopingorganisatie, bedoeld in de Wereld Anti-Doping Code."; menu "Dopingcontroles", "Educatie", "Mag ik dit gebruiken?" |
| rivm.nl/over-het-rivm | rivm | "Ministerie van Volksgezondheid, Welzijn en Sport"; "We adviseren op basis van wetenschappelijke kennis"; "Voorkomen en bestrijden van infectieziekten"; "We organiseren het Rijksvaccinatieprogramma"; "Bevolkingsonderzoeken naar kanker" |
| nvwa.nl/over-de-nvwa | nvwa | "We zien toe op de veiligheid van voedsel en consumentenproducten"; supplements and cosmetics (R, nl-law facts 33–34) |
| ccmo.nl/over-de-ccmo | ccmo, metc | "CCMO is de centrale medisch-ethische toetsingscommissie van Nederland. En wij houden toezicht op de andere medisch-ethische toetsingscommissies"; "Zonder een positief oordeel van deze commissie mag het onderzoek niet starten" |
| wetten.overheid.nl/BWBR0009408/2025-01-01 (WMO, "Geldend van 01-01-2025 t/m heden") | wmo, metc, ccmo | art. 2(2): "Over dit onderzoeksprotocol moet een positief oordeel zijn verkregen: a. van een commissie die daartoe bevoegd is ... b. van de centrale commissie"; art. 16(2)(a): a committee of "een of meer artsen, ... en uit personen die deskundig zijn op het gebied van de rechtswetenschap, de methodologie van wetenschappelijk onderzoek en de ethiek"; art. 1(l) "schriftelijke toestemming"; art. 7(1): research only "indien ... een verzekering is gesloten" for "schade door dood of letsel van de proefpersoon" |
| ccmo.nl … wet-medisch-wetenschappelijk-onderzoek-met-mensen-wmo | wmo | "Wet medisch-wetenschappelijk onderzoek met mensen (WMO)" |
| onderzoekmetmensen.nl/nl; onderzoekmetmensen.nl/nl/over-omon | onderzoekmetmensen, ccmo | "Overzicht van Medisch-wetenschappelijk Onderzoek in Nederland (OMON)"; "De Centrale Commissie voor Mensgebonden Onderzoek (CCMO) is de beheerder van OMON"; "Vanaf mei 2026 zijn de onderzoeken uit het publieke gedeelte van CTIS ook zichtbaar in ... (OMON). Dit betekent dat al het medisch-wetenschappelijk onderzoek in Nederland dat officieel getoetst moet worden in OMON is opgenomen." |
| bigregister.nl/over-het-big-register | big-register, apotheker, wet-big | "een wettelijk, online en openbaar register. Alleen wie in het BIG-register staat, mag een beschermde beroepstitel voeren en mag de bij het beroep horende voorbehouden handelingen zelfstandig uitvoeren"; "Iedereen kan het register raadplegen"; titles include "Apotheker, arts, ... verpleegkundige" |
| wetten.overheid.nl/BWBR0006251/2025-07-05 (Wet BIG, "Geldend van 05-07-2025 t/m heden") | wet-big, reserved-procedure | art. 35(1): "verboden om buiten noodzaak beroepsmatig de handelingen, genoemd in artikel 36, te verrichten ten aanzien van personen, tenzij: a. zulks geschiedt ingevolge een opdracht"; art. 36(5): "Tot het geven van injekties zijn bevoegd: a. de artsen, b. de tandartsen, c. de verloskundigen ..."; art. 36(14) prescribing (R, nl-care fact 3) |
| wetten.overheid.nl/BWBR0002063/2026-09-22 (WED, "Geldend van 22-09-2026 t/m heden") | economic-offences-act | art. 1 under 1°: "de Geneesmiddelenwet, de artikelen 18, eerste lid, ... 40, eerste en tweede lid, 61, eerste lid ..."; art. 2(1): "zijn misdrijven, voor zover zij opzettelijk zijn begaan; voor zover deze economische delicten geen misdrijven zijn, zijn zij overtredingen" |
| wetten.overheid.nl/BWBR0005290/2026-10-08 (BW Boek 7, "Geldend van 08-10-2026 t/m heden") | wgbo | Afdeling 5 "De overeenkomst inzake geneeskundige behandeling"; art. 448 "De hulpverlener licht de patiënt op duidelijke wijze in"; art. 450 "Voor verrichtingen ter uitvoering van een behandelingsovereenkomst is de toestemming van de patiënt vereist"; art. 456 "inzage in en afschrift van de gegevens uit het dossier"; art. 457 "dat aan anderen dan de patiënt geen inlichtingen over de patiënt ... worden verstrekt" |
| research/nl/nl-care.md facts 75–77 (R: Stb. 1958, 408; Kamerstukken II 2003/04, 29 359, nr. 3; Stb. 2007, 93 and 227) | wet-op-de-geneesmiddelenvoorziening | "Sinds de inwerkingtreding van de WOG in 1963 is het verboden een geneesmiddel voor de eerste keer in het handelsverkeer te brengen zonder voorafgaande registratie"; "Het College ... is ingesteld bij de WOG in 1963"; Gnw in force 1 July 2007, art. 132 "De Wet op de Geneesmiddelenvoorziening wordt ingetrokken" |
| milieucentraal.nl … klein-chemisch-afval-kca | klein-chemisch-afval | "Klein chemisch afval (kca) is een verzamelnaam voor allerlei soorten gevaarlijk afval"; "Wel bij KCA": "Injectienaald", "Medicijnen"; "Medicijnen en injectienaalden kun je ook inleveren bij de apotheek waar je ze gehaald hebt"; "milieustraat ... van je gemeente" (R, nl-help fact 46) |
| drugsinfo.nl/contact/ | drugs-infolijn | "De Drugs Infolijn"; "Chatten gratis"; "Anoniem"; "Zonder oordeel"; "De Drugs Infolijn is er voor iedereen"; "Nee, we bieden geen behandeling. Als je meer hulp nodig hebt, denken we graag met je mee"; Trimbos site ("Andere Trimbos websites") |
| cbg-meb.nl … hv-falsified-medicines-directive | safety-features, apotheker | "Vanaf 9 februari 2019 moeten de verpakkingen van receptplichtige medicijnen verplicht voldoen aan vastgestelde veiligheidskenmerken"; "Een identificatiekenmerk in de vorm van een unieke code"; "Een middel om te controleren of de verpakking niet eerder is geopend, bijvoorbeeld een verzegeling"; "Apothekers controleren aan de hand van deze veiligheidskenmerken de identiteit en authenticiteit van medicijnen, voordat ze deze mogen meegeven aan de patiënt" |
| rijksoverheid.nl/themas/familie-zorg-en-gezondheid/geneesmiddelen/aanpak-vervalste-medicijnen | eu-common-logo, safety-features | "Online aanbieders van geneesmiddelen moeten zich aanmelden bij de overheid. In Nederland is dat bij het CIBG"; "De aanbieder moet dan het Europese logo op zijn website plaatsen. Als de consument op het logo klikt, komt die terecht op de website www.aanbiedersmedicijnen.nl"; "veiligheidskenmerken op de verpakking van receptmedicijnen" |
| europa.eu/youreurope … buying-medicines-online/index_nl.htm | eu-common-logo | "het gemeenschappelijke EU-logo voor onlineverkoop van geneesmiddelen"; "Wanneer u op het logo klikt, komt u op de website van de nationale instantie die voor geneesmiddelen bevoegd is" |
| ema.europa.eu/en/about-us/what-we-do | ema | "Evaluate applications for marketing authorisation"; "EMA continuously monitors and supervises the safety of medicines that have been authorised in the EU"; "the legal decision to grant ... a marketing authorisation ... falls under the remit of the European Commission for centrally authorised products" |
| ema.europa.eu … committee-medicinal-products-human-use-chmp | chmp (entry now in tesamorelin.json), centralised-procedure | "the European Medicines Agency's (EMA) committee responsible for human medicines"; "In the centralised procedure, CHMP is responsible for: conducting the initial assessment of EU-wide marketing authorisation applications" |
| Verordening (EG) nr. 726/2004, Dutch text (CELLAR, celex/32004R0726) | accelerated-assessment, chmp, ema | "kan de aanvrager verzoeken om een versnelde beoordelingsprocedure"; "Comité voor geneesmiddelen voor menselijk gebruik"; "Europees Geneesmiddelenbureau"; central authorisation valid in every member state, art. 13(1) (R, eu-status fact 37) |
| ema.europa.eu … marketing-authorisation/accelerated-assessment | accelerated-assessment | "can take up to 210 days"; "the CHMP can reduce the timeframe to 150 days"; "of major interest for public health and therapeutic innovation" |
| ema.europa.eu … prime-priority-medicines | prime-scheme | "PRIME is a scheme run by the European Medicines Agency (EMA) to enhance support for the development of medicines targeting unmet medical needs. It is based on early dialogue with companies to optimise development plans and speed up evaluation." |
| ema.europa.eu … clinical-trials-information-system-ctis | ctis | "supports the flow of information between clinical trial sponsors, European Union (EU) Member States, European Economic Area (EEA) countries and the European Commission. CTIS went live with a searchable public website on 31 January 2022."; applications only through CTIS from 31 January 2023 (R, eu-status fact 36) |
| ema.europa.eu … clinical-trials-regulation | clinical-trials-regulation | "the Clinical Trials Regulation entered into application on 31 January 2022" |
| ema.europa.eu … mutual-recognition-agreements-mra | mra-country | "The European Union (EU) has signed mutual recognition agreements (MRAs) with third-country authorities ... mutual recognition of good manufacturing practice (GMP) inspections and batch certification" |
| wetten.overheid.nl/BWBR0022160/2026-01-01 (Regeling Geneesmiddelenwet) | mra-country | art. 3.17a: "een derde land met een overeenkomst inzake wederzijdse erkenning als bedoeld in artikel 207 van het Verdrag betreffende de werking van de Europese Unie" |
| european-union.europa.eu/institutions-law-budget/law/types-legislation_nl | eu-directive, eu-regulation | "Een “verordening” is een bindende rechtshandeling die in de hele EU van toepassing is."; "Een “richtlijn” is een rechtshandeling die een bepaald doel vastlegt dat de EU-landen moeten bereiken. Zij mogen echter zelf de wetgeving vaststellen om dat doel te bereiken." |
| research/nl/eu-status.md facts 28–29 (R: OEIL 2023/0131 and 0132(COD), TFEU art. 294) | second-reading | Council position at first reading 28 September 2026, "Awaiting Parliament 2nd reading"; if Parliament approves the Council's position "or takes no decision" in time, the act "shall be deemed to have been adopted" |
| curia.europa.eu/site/jcms/d2_5088/nl/ | cjeu | "Het Hof van Justitie van de Europese Unie is de rechtsprekende instelling van de EU"; "geeft het Hof antwoord op vragen van een nationale rechter, wanneer die niet precies weet hoe het Unierecht moet worden uitgelegd"; "zodat dit in de hele Unie op dezelfde manier wordt toegepast"; "is in Luxemburg gevestigd" |
| rijksoverheid.nl … welke-landen-horen-bij-de-europese-economische-ruimte-eer | eea | "Bij de Europese Economische Ruimte (EER) horen alle EU-landen plus Liechtenstein, Noorwegen en IJsland." |
| single-market-economy.ec.europa.eu … cosmetic-ingredient-database_en | cosing | "CosIng is the European Commission database for information on cosmetic substances and ingredients contained in the Cosmetics Regulation (EC) No 1223/2009" |
| research/nl/be-notes.md fact 1 (fact-checked) | famhp | "Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten (FAGG)"; competent authority for pharmacovigilance in Belgium; "AFMPS \| FAGG" in page titles |
| fagg-afmps.be parcel Q&A, Internet Archive capture of 20 March 2025 (the live site shows a bot check; be-notes' fact-checker read the live page, last updated 23 July 2024, unchanged) | famhp, out-of-court-settlement | "Wanneer het FAGG uw postpakket in beslag neemt"; "dan wordt een minnelijke schikking voorgesteld die minimum 400 euro bedraagt. In uitzonderlijke gevallen worden dossiers overgemaakt aan het parket" |
| ejustice.just.fgov.be, wet van 25 maart 1964 op de geneesmiddelen voor menselijk gebruik ("tekstbijwerking tot 04-06-2026") | out-of-court-settlement, medical-need-programme | "kan de ambtenaar-jurist ... van het FAGG, aan de vermoedelijke dader van de inbreuk een schikking voorstellen waarvan de betaling de strafvordering doet vervallen"; "Door betaling van de schikking vervalt de strafvordering, tenzij de procureur des Konings binnen een maand ..."; art. 6quater: "medische noodprogramma's ... ten behoeve van patiënten die lijden aan een chronische ziekte, een ziekte die de gezondheid ernstig ondermijnt of een levensbedreigende ziekte ... maar de indicatie ... is evenwel niet vergund of het geneesmiddel ... is nog niet in de handel met die vergunde indicatie" |
| fagg-afmps.be … gebruik_in_schrijnende_gevallen_medische_noodprogrammas, Internet Archive capture of 14 March 2026 | medical-need-programme | page title "Gebruik in schrijnende gevallen - medische noodprogramma's"; the FAGG list of programmes (R, be-notes fact 36: list updated 21 October 2026) |
| vlaanderen.be/vlaams-parlement/het-wetgevingsproces-voor-vlaamse-regelgeving | flemish-decree | "De federale overheid maakt wetten. De regionale overheden, zoals de Vlaamse overheid, vaardigen decreten uit"; "Er is dus geen rangorde tussen federale wetten en regionale decreten" |
| research/nl/be-notes.md fact 31 (fact-checked: Codex Vlaanderen) | flemish-decree | "Dit decreet regelt een gemeenschapsaangelegenheid" (the Antidopingdecreet) |
| research/nl-notes/style.md, cbg-meb.nl (style agent, today) | ema | "Het Europees Medicijnagentschap EMA" on the CBG's page (alias "Europees Medicijnagentschap") |

Web searches used only to find pages (not as sources): "Europese Economische Ruimte EER Noorwegen IJsland
Liechtenstein", "wat is een decreet Vlaams Parlement", "minnelijke schikking strafzaak België", "Europees logo
online apotheek", "rijksoverheid verwijzing huisarts".

## 5. UNRESOLVED (left out of the definitions)

1. **The KNMG's full official name**: not on the pages I read today, so the entry has no long-form alias.
2. **Whether the CIBG list is the only Dutch register behind the EU logo for every kind of online seller**
   (pharmacies and drugstores): Rijksoverheid names only the CIBG and aanbiedersmedicijnen.nl. The
   definition says only that the CIBG keeps the list.
3. **Whether the FAGG itself "approves" medicines**: Belgian law gives the VHB to "de minister of zijn
   afgevaardigde" (be-notes fact 3). So the FAGG definition names it the medicines authority and gives only the
   two roles I read (side-effect reports, action against illegal medicines, also in parcels).
4. **NHG naming**: the NHG home page now speaks of "NHG-Richtlijnen"; the obesity text is still titled
   "NHG-Standaard". If the NHG has renamed its standards, the `nhg-standaard` entry (now in tirzepatide.json)
   and the `nhg` definition ("de NHG-Standaarden") need a look.
5. **Eigen risico 2027** (€ 400 by the cabinet's plan): not in the definition (see §3).

## 6. For other assignments (files I do not own; not changed)

- **STYLE-NL §2 lacks these glossary terms** (add one line each if writers use them): versnelde beoordeling
  (EU accelerated assessment; 726/2004: "versnelde beoordelingsprocedure"), PRIME, tweede lezing, EU-richtlijn /
  EU-verordening as glossary terms (the sheet has richtlijn / verordening), EU-logo, veiligheidskenmerken,
  MRA-land, Hof van Justitie van de Europese Unie, Europese Economische Ruimte, voorbehouden handeling,
  BIG-register, Wet op de economische delicten, Onderzoekmetmensen.nl (OMON), and for the BE page only:
  decreet, minnelijke schikking, medisch noodprogramma. Also the capital in "Wet op de
  Geneesmiddelenvoorziening" (§3 above).
- **final-qa.json (Dutch):** `clinicaltrials-gov` lost its `see_also: ["ctis"]` on English only because English
  had no `ctis` entry; `ctis` now exists in `nl.json`, so the Dutch entry may take it back.
- **bpc-157.json (Dutch) `pharmacy-compounding`:** keep "magistrale bereiding" and "apotheekbereiding" out of its
  aliases (they are `magistral-preparation` here). It is clean today.
- **safety-a.json (Dutch):** `needle-syringe-programme` → term "spuitomruil", `needle-stick-injury` →
  "prikaccident" (STYLE-NL §2.6); `health-advice-line` and `urgent-care-centre` must not take "huisartsenpost",
  "huisartsen-spoedpost" or "spoedeisende hulp" as aliases (they are `huisartsenpost` and `seh` here).
- **legal-en.json (Dutch) `ethics-committee`:** must not alias "medisch-ethische toetsingscommissie" or "METC"
  (they are `metc` here).
- **Race between files:** if the translators of guides, final-qa, history, legal-a, legal-b, safety-a, safety-b
  or stubs-b restore any snapshot id that is now in `nl.json`, the validator reports a duplicate id. One side
  must then drop it. At the end of this assignment (checked by script) no Dutch file shared an id or an alias
  with `nl.json`.

## Check (independent, 27 October 2026)

Adversarial check of `src/i18n/nl/glossary/nl.json` (all 56 entries) against the snapshot English entries
(`research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/`, the English source for these ids), the brief,
STYLE-NL (§1, §2, §4, §5.6, §6), CONTENT-GUIDE §1, §12, and the fact-checked research in `research/nl/`.
Primary pages were fetched today with curl (browser user agent) and searched for the exact wording; nothing was
opened in a browser. Only `nl.json` and this file were changed.

### What was checked

- **Every entry, field by field:** meaning against the English (lost qualifiers, added claims); every
  country-dependent fact against `research/nl/` (all five files now end with their "## Fact-check (independent)"
  section; the translator saw only be-notes'); B1 (sentences of at most 20 words, checked by script); "je"
  throughout (no "u" or "uw", checked by script); "In Nederland" or "In België" on national terms; STYLE-NL terms;
  no commerce token (`config/commerce-tokens.json`, all locales, plus the STYLE-NL §7 list) and no seller words
  (checked by script); every definition at most 400 characters; ’ only.
- **Ids:** today's English glossary (`src/i18n/en/glossary/`) has no id for the same concept as any of the seven
  new Dutch-only ids (no pharmacy, pharmacist, GP, emergency-department, poison-centre or deductible id; searched by
  script), so no concept has two ids. The 49 snapshot ids keep their id and category.
- **Aliases:** a script loaded every `src/i18n/nl/glossary/*.json` file: no id and no term or alias (case-insensitive)
  appears in two entries. No everyday word from STYLE-NL §6 is an alias. The rehype matcher
  (`src/plugins/rehype-glossary.mjs`) escapes regex characters and matches case-insensitively on letter, digit and
  hyphen boundaries, longest form first, so "verordening (EU) nr. 536/2014", "GGD’en" and both capitals of "Wet op de
  geneesmiddelenvoorziening" match.
- **Validator:** `npx tsx scripts/validate-content.ts --only glossary` → 0 errors, 0 warnings. `JSON.parse` OK; UTF-8,
  LF, 2-space indent.

### What was changed (before → after, and why)

1. **apotheek:** "Alleen een apotheker in een apotheek, of een huisarts met een eigen apotheek, mag die meegeven" →
   "Meestal geeft een apotheker die mee. Ook een huisarts met een eigen apotheek mag dat." Gnw art. 61(1) has a third
   exception, "c. daartoe bij ministeriële regeling aangewezen personen" (research/nl/nl-law.md fact 9), so "alleen"
   overstated the law.
2. **apotheker:** "Een zorgverlener die in een apotheek werkt" (also true of a pharmacy assistant) → "Een zorgverlener
   die in een apotheek medicijnen op recept mag meegeven" (Gnw art. 61(1)(a), "apothekers die hun beroep in een
   apotheek uitoefenen"). The safety-feature check now says it happens before you get the medicine (CBG wording).
3. **cbg:** "de goedkeuring die een medicijn nodig heeft om hier in de handel te komen" implied the Dutch licence is the
   only route; a central EU licence also allows a medicine on the Dutch market (Gnw art. 40(1)) → "Het kan een medicijn
   een Nederlandse handelsvergunning geven". Restored the English "works with the EMA on EU decisions": "Het CBG werkt
   ook mee aan de beoordeling van medicijnen voor de hele EU" (cbg-meb.nl, "Samenwerking in Europa", modified
   5 December 2025: "In het CHMP worden voor elk geneesmiddel een tweetal rapporteurs benoemd"; "speelt Nederland een
   belangrijke rol in Europa").
4. **metc:** restored the English qualifier the translation lost ("whether the study is useful and not too risky"):
   "Die kijkt of het onderzoek nieuwe kennis kan opleveren, en of het nut opweegt tegen de risico’s voor de
   deelnemers" (WMO art. 3(1)(a) "nieuwe inzichten op het gebied van de medische wetenschap", (c) "in evenredige
   verhouding ... tot de bezwaren en het risico"). "Zonder positief oordeel ... mag een medisch onderzoek met mensen niet
   beginnen" covered all research, but the rule is for research under the WMO (ccmo.nl/over-de-ccmo: "Onderzoek dat
   onder de WMO of de Embryowet valt, moet worden beoordeeld") → "Valt het onderzoek onder de wet voor medisch onderzoek
   met mensen (WMO)? Dan ...". Written out, because a bare "WMO" reads as the Wet maatschappelijke ondersteuning
   (STYLE-NL §2.7).
5. **wmo:** "Deelnemers geven schriftelijk toestemming, en er moet een verzekering zijn" stated the rules without their
   exceptions → "In de regel geven deelnemers vooraf toestemming, na uitleg over het doel en de risico’s. Meestal moet
   er ook een verzekering zijn" (WMO, geldend van 01-01-2025: art. 6(2) consent may also be electronic or oral with a
   witness, art. 6(4) emergency research, art. 6(5) information first; art. 7(5) and (6) the committee "kan ...
   ontheffing verlenen van de verplichting een verzekering te sluiten").
6. **onderzoekmetmensen:** "Het openbare register" → "Een openbaar register" (onderzoekmetmensen.nl/nl/over-omon: "een
   register waarin een deel van het medisch-wetenschappelijk onderzoek in Nederland geregistreerd staat"). The May 2026
   sentence was re-read on the home page today and stays.
7. **directive-65-65:** restored the English "a licence based on test results": "Bij de aanvraag moesten de resultaten
   van proeven zitten, ook van proeven bij mensen" (Richtlijn 65/65/EEG, Dutch text via CELLAR, art. 4 point 8:
   "Resultaten van de proeven: ... van farmacologische en toxicologische aard; van klinische aard").
8. **accelerated-assessment:** "in 150 dagen" lost the English "up to" → "in hoogstens 150 dagen in plaats van 210"
   (EMA page as logged in §4).
9. **geneesmiddelenwet:** restored the English "what happens if someone breaks the rules": "Wie de regels overtreedt,
   kan een boete krijgen. Soms is het ook een strafbaar feit." (Gnw art. 101(1); WED art. 1 under 1° and art. 2:
   nl-law.md facts 22 and 25.)
10. **magistral-preparation:** "De grondstoffen moeten wel aan kwaliteitseisen voldoen" narrowed the rule → "Het moet
    wel voldoen aan wettelijke kwaliteitseisen, ook voor de grondstoffen" (IGJ: "Ook zulke apotheekbereidingen moeten
    voldoen aan wettelijke kwaliteitseisen ... Voor apotheekbereidingen gelden eisen aan de grondstoffen"); "In
    Nederland" added before the IGJ.
11. **eu-common-logo:** the Dutch was stiff ("websites die van de overheid medicijnen online mogen leveren") and lost
    the English point that the seller must be on the list. Now: the logo is for websites that may supply medicines
    online; in the Netherlands the website registers with the CIBG, "een dienst van het ministerie van VWS"; clicking
    the logo leads to a government list; "Daar moet de website op staan." (rijksoverheid.nl, aanpak vervalste medicijnen,
    read today: "Online aanbieders van geneesmiddelen moeten zich aanmelden bij de overheid. In Nederland is dat bij het
    CIBG, een uitvoeringsorganisatie van VWS ... De online aanbieder moet in de aanbiederslijst op deze website staan.")
    No link and no list address (nl-law.md §6 question 10). Alias "gemeenschappelijk EU-logo" added (indefinite form).
12. **nhg:** "de NHG-Standaarden" as if they were all the guidelines → "zoals de NHG-Standaarden"; "een vereniging" →
    "de wetenschappelijke vereniging van huisartsen" (nhg.org/over: "NHG: een wetenschappelijke vereniging voor alle
    huisartsen"; nhg.org/ontwikkelen-van-richtlijnen: "Onder het ontwikkelen van een NHG-Standaard of behandelrichtlijn
    (NHG-richtlijnen) ...", with separate lists "NHG-Standaarden" and "NHG-Behandelrichtlijnen").
13. **knmg:** full name verified today (knmg.nl/over-knmg-1/over-de-knmg: "de KNMG (Koninklijke Nederlandsche
    Maatschappij tot bevordering der Geneeskunst)"; home page title "Artsenfederatie | KNMG"; "Federatief
    samenwerkingsverband" of the federation partners). Added to the definition and as aliases, with "Artsenfederatie
    KNMG". "De organisatie van artsen in Nederland (artsenfederatie)" → "De artsenfederatie van Nederland ...
    Verenigingen van artsen werken erin samen."
14. **zorginstituut:** "Daarbij gaat het ook om de vraag welke medicijnen worden vergoed" (stiff, and silent on who
    decides) → "Het adviseert ook of een medicijn vergoed moet worden. Daarna beslist de minister." (nl-care.md fact 60:
    "Als wij positief adviseren en de minister van ... VWS ons advies overneemt, komt [het middel] in het GVS"). VWS
    written out once.
15. **eigen-risico:** "het bedrag dat je elk jaar eerst zelf betaalt" read as a fixed sum you always pay → "het deel van
    je zorgkosten dat je elk jaar eerst zelf betaalt, tot een vast bedrag" (as the English "the part of your health care
    costs"); the elliptical last sentence is now a full B1 sentence ("Voor medicijnen ... betaal je meestal wel eigen
    risico"). Still no amount (reason below).
16. **nvic:** restored the English "they can contact it": "Je arts kan het NVIC dag en nacht bereiken" (nl-help.md fact
    18: "Uw arts kan het NVIC dag en nacht bereiken"); "Denk je aan een vergiftiging?" (calque-like) → "Denk je dat jij
    of iemand anders vergiftigd is?"; the 112 line is its own sentence; "in Nederland" added.
17. **thuisarts:** "De teksten volgen de richtlijnen van de huisartsen (NHG) en de medisch specialisten" → "volgen
    vooral ..." (thuisarts.nl/over-thuisarts: "Dit zijn de organisaties waar Thuisarts de meeste informatie mee maakt:
    Nederlands Huisartsen Genootschap, de verenigingen in de Federatie Medisch Specialisten"; it also works with KNMG,
    RIVM, Trimbos and others).
18. **drugs-infolijn:** "kan je wel doorverwijzen" → "kan je wel verwijzen naar meer hulp" (drugsinfo.nl/contact: "We
    kunnen je ook verwijzen voor meer hulp en ondersteuning, als je dat wilt"; "De Drugs Infolijn hoort bij het
    Trimbos-instituut"). Nothing is said about peptides (nl-help.md UNRESOLVED 1).
19. **klein-chemisch-afval:** "Je levert het in bij de milieustraat" (as if it were the only way) → "Je kunt het inleveren
    bij de milieustraat van je gemeente" (Milieu Centraal: "kun je inleveren bij de milieustraat of
    afvalscheidingsstation van je gemeente"; Rijksoverheid: "Gemeenten mogen zelf beslissen hoe ze dit doen").
    Batteries and paint confirmed ("van spaarlampen en batterijen tot gootsteenontstopper en verf").
20. **igj:** "toezicht op de zorg en op medicijnen" → "de zorg, de jeugdhulp en medicijnen" (igj.nl/over-ons); "De IGJ
    beslist ook over een medicijn op artsenverklaring" → "over de levering van een medicijn op artsenverklaring" (the IGJ
    grants an ontheffing to the supplier: Regeling Gnw art. 3.17, nl-law.md fact 6; consistent with guides.json
    `named-patient-route`).
21. **landelijk-meldpunt-zorg, rivm, administrative-fine:** "In Nederland" added (STYLE-NL §6: name the country);
    LMZ also "geeft informatie en advies" (nl-help.md fact 25). administrative-fine: "zonder strafrechter" →
    "Daar komt geen strafrechter aan te pas."
22. **economic-offences-act:** "misdrijf" explained for B1: "Gebeurt het met opzet? Dan is het een misdrijf: een zwaar
    strafbaar feit." (WED art. 2(1); misdrijf up to six years, overtreding up to one year: nl-law.md fact 25.)
23. **big-register:** "de beschermde titel voeren" (formal) → "mag zich bijvoorbeeld arts noemen".
24. **second-reading:** "de Raad" explained: "In de Raad zitten ministers uit de EU-landen" (european-union.europa.eu,
    Raad van de Europese Unie, Dutch page: "In de Raad van de Europese Unie vergaderen ministers uit de EU-landen"); the
    condition is now in the question-and-Dan form (STYLE-NL §1.5). The facts match eu-status.md fact 29 (fact-checked,
    no correction).
25. **centralised-procedure:** "dus ook in Nederland en België" → "dus ook in Nederland" (brief: the Belgian reader gets
    a line only where the answer differs; that central approvals hold in Belgium is said once, on `/nl/legal/be/`).
26. **medical-need-programme:** the two sentences "Artsen gebruiken dan een goedgekeurd medicijn voor die ziekte. Voor
    die ziekte is het nog niet goedgekeurd" read as a contradiction → "een programma waarmee artsen een goedgekeurd
    medicijn gebruiken bij een ziekte waarvoor het nog niet te krijgen is. Het medicijn is voor die ziekte nog niet
    goedgekeurd, of wel goedgekeurd maar nog niet in de handel." The patient group now follows the law: "een chronische,
    ernstige of levensbedreigende ziekte" (art. 6quater § 1, 3°, as logged in §4; be-notes.md fact 7). Alias
    "medische noodprogramma" (het medische ...) added.
27. **out-of-court-settlement:** "de wet op de geneesmiddelen" (lowercase, could be taken for the Dutch Geneesmiddelenwet)
    → "de regels voor medicijnen"; condition as question + "Dan".
28. **nvwa:** "cosmetica" → "cosmetische producten" (STYLE-NL §2.4).
29. **geneesmiddeleninformatiebank:** "hun bijsluiter en productinformatie" → "de bijsluiter en de officiële informatie
    voor artsen (SmPC)" (STYLE-NL §2.4; geneesmiddeleninformatiebank.nl: "Zoeken in de samenvatting van de
    productkenmerken (SmPC)", "Gewijzigde SmPC's of patiëntenbijsluiters", "Nieuwe door de Europese Commissie
    geregistreerde geneesmiddelen"); "staat een nummer dat begint met RVG of EU" → "staat meestal ..." (the same page
    also searches "RVG/RVH" numbers: homeopathic products have RVH).
30. **farmacotherapeutisch-kompas:** "informatie" → "onafhankelijke informatie" (its home page: "Onafhankelijke
    geneesmiddelinformatie voor zorgprofessionals", "Zorginstituut Nederland").
31. **Aliases added** (whole-word inflections and names, no duplicates, checked): huisartsenspoedposten (huisartsenpost),
    Gemeentelijke Gezondheidsdiensten (ggd; GGD GHOR: "Gemeentelijke Gezondheidsdiensten oftewel GGD’en"), Centrale
    Commissie voor Mensgebonden Onderzoek (ccmo; the CCMO's own FAQ and OMON write it so), unieke identificatiekenmerk
    (safety-features), gemeenschappelijk EU-logo, medische noodprogramma, and the two KNMG names. No alias was removed.

Unchanged after checking (facts confirmed): huisarts, huisartsenpost, seh, ggd, lareb, dopingautoriteit, ccmo
(definition), wet-op-de-geneesmiddelenvoorziening (nl-care.md facts 75–77; the fact-check corrected only the
memorandum's date), wgbo, wet-big, reserved-procedure, ema, prime-scheme, eu-directive, eu-regulation, cjeu, eea,
mra-country, clinical-trials-regulation, ctis, safety-features, cosing, famhp (be-notes.md facts 1, 3, 12; UNRESOLVED 7:
the French full name stays out, "AFMPS" is only the abbreviation in the page titles), flemish-decree.

### The translator's UNRESOLVED list (§5), after this check

1. **KNMG full name:** resolved (item 13).
2. **The CIBG list behind the EU logo:** resolved. Rijksoverheid says every online seller of medicines must register
   with the CIBG and be on its list (item 11).
3. **Whether the FAGG itself approves medicines:** still left out (be-notes.md fact 3: the VHB is granted "door de
   minister of zijn afgevaardigde ... hetzij door de Europese Commissie").
4. **NHG naming:** resolved. The NHG has not renamed its standards: "NHG-richtlijnen" is the umbrella for
   NHG-Standaarden and NHG-Behandelrichtlijnen (item 12). The `nhg-standaard` entry in tirzepatide.json stays right.
5. **Eigen risico 2027:** the note in §3 and §5 is out of date. The fact-checks of nl-help.md (correction 1) and
   nl-care.md (correction 3) found that € 400 from 1 January 2027 is fixed by the Minister's regulation of 25 September
   2026 (Stcrt. 2026, 34372); it is no longer "a cabinet plan, not yet law". The definition still gives no amount, for
   the translator's other reason: a tooltip shows on every page and the amount changes every 1 January. Pages give the
   dated amounts: "€ 385 in 2026; € 400 vanaf 1 januari 2027" (`nl-zvw-art-19-eigen-risico`).

Also out of date in the header of §4: of the research files, `nl-help.md`, `nl-law.md`, `nl-care.md` and
`eu-status.md` now have their fact-check sections too. None of their corrections touches a fact in `nl.json` other
than the eigen risico 2027 point above.

### Still UNRESOLVED or left out

- big-register: the English snapshot's line "Only a doctor in this register may sign a doctor's declaration" stays out.
  The IGJ rule says "de arts" (Regeling Gnw art. 3.17), and "arts" is a BIG title, but no page read today states the
  BIG requirement for the artsenverklaring in so many words.
- huisarts: the English "you go to the huisarts first for most health problems" is covered only by the referral
  sentence; no general Dutch source was read for "most problems".

### For other assignments (files not mine; not changed)

- **guides.json `informed-consent`:** the alias "toestemming" is an everyday word (it links the first "toestemming" on
  every page, also "toestemming van de IGJ"). Suggest removing it (CONTENT-GUIDE §12).
- **stubs-b.json `cosmetic-product`:** the alias "cosmetica" is fine; nl.json now says "cosmetische producten".
