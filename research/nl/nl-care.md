# Research: nl-care (27 October 2026)

Topic: getting a peptide medicine legally in the Netherlands, patient rights and insurance, as on 27 October 2026.
For the Dutch pages `legal-routes` (anchors `#recept`, `#off-label`, `#artsenverklaring`, `#magistrale-bereiding`,
`#klinisch-onderzoek`, `#compassionate-use`, `#zelf-invoeren`), `talking-to-your-doctor`, `start-here` (FAQ),
`compounds/semaglutide` and `compounds/tirzepatide` (Dutch insurance and access), `the-case-for-reform` (facts behind
the Dutch proposals) and `history/how-we-got-here` (Dutch law history).

Method. Every law, regulator and official page below was fetched on 27 October 2026 (curl with a browser user agent,
HTML converted to text and read; PDFs with pdftotext), or, where a site refuses scripts, read in the built-in browser
in a tab of our own (onderzoekmetmensen.nl search, richtlijnen.nhg.org). Nothing about the law, insurance or status
was taken from memory. Trial registries were queried through the ClinicalTrials.gov API v2 and the CTIS public API
(euclinicaltrials.eu). New source ids are in `research/nl/sources/nl-care.yaml`; reused ids are named with the file
that registers them. Ids from `research/nl/sources/nl-help.yaml` and `research/nl/sources/eu-status.yaml` (parallel
topics, not yet merged) are marked "(nl-help)" and "(eu-status)". The law on personal import itself (`#zelf-invoeren`) is topic nl-law; here only how it relates to care.

Writers: no doses appear on the Dutch site. Several sources below (NHG, FK, Regeling) print doses; never copy them.

---

## 1. Key facts

### A. Recept (prescription): who may prescribe, and how a medicine reaches you

1. **Only a pharmacy (or a dispensing GP) may hand over a prescription medicine, and only on a prescription.**
   Geneesmiddelenwet (Gnw) art. 61(1): UR medicines may be offered, sold or handed over only by "apothekers die hun
   beroep in een apotheek uitoefenen", licensed "huisartsen" (apotheekhoudende huisartsen) and designated persons.
   Art. 61(9): "Het is de apotheker die in een apotheek werkt verboden een UR-geneesmiddel ter hand te stellen zonder
   dat een recept is overgelegd", except "in spoedgevallen" when misuse can be ruled out. Version in force from
   9 September 2025 ("Geldend van 09-09-2025 t/m heden"), still current on 27 October 2026. Source:
   `nl-gmw-art-61-prescription` (guides.yaml).
2. **What a "recept" is.** Gnw art. 1(1)(pp): a document by a professional "met naam en werkadres aangeduid" as in
   Wet BIG art. 36(14), "dan wel een daartoe in een andere lidstaat bevoegde beroepsbeoefenaar", instructing a
   pharmacist or dispensing GP to hand over a medicine named by substance or brand, in a stated quantity, strength and
   way of use, "aan een te identificeren patiënt", signed or secured by a code. Art. 1(1)(s): "UR-geneesmiddel: een
   geneesmiddel dat uitsluitend op recept ter hand mag worden gesteld". So a prescription from a prescriber in another
   EU/EEA member state is a valid recept in the Netherlands. Source: `nl-gnw-art-1-recept` (new).
3. **Who may prescribe (Wet BIG art. 36(14), version from 5 July 2025, current).** "Tot het voorschrijven van
   UR-geneesmiddelen ... zijn bevoegd": (a) artsen; (b) tandartsen; (c) verloskundigen, within their field;
   (d) designated categories of nurses, only after a doctor, dentist or midwife has made the diagnosis, following
   "medische protocollen en standaarden", within set limits and with an annotation in the register; (e) designated
   categories of specialist nurses (verpleegkundig specialisten); (f) physician assistants, within their field.
   Source: `nl-wet-big-art-36-voorschrijven` (new).
4. **KNMG plain-language version** ("Wie mogen geneesmiddelen voorschrijven?", published 16 December 2020, page date
   5 February 2026): physician assistants and verpleegkundig specialisten may prescribe within their field "voor zover
   het om minder complexe, routinematige recepten gaat"; diabetes nurses only "bloedglucose regulerende geneesmiddelen"
   (asthma/COPD nurses only inhalers; oncology nurses a short list); "Andere beroepsbeoefenaren, zoals
   doktersassistentes en praktijkondersteuners, mogen geen recepten schrijven. Ook niet in opdracht van een arts."
   Source: `knmg-wie-mogen-voorschrijven` (new).
5. **The BIG-register.** "een wettelijk, online en openbaar register. Alleen wie in het BIG-register staat, mag een
   beschermde beroepstitel voeren en mag de bij het beroep horende voorbehouden handelingen zelfstandig uitvoeren."
   "Iedereen kan het register raadplegen", by name or BIG number; more than 380,000 registered; "Het BIG-register houdt
   geen toezicht op zorgverleners en behandelt geen klachten." Run by CIBG (VWS). Page last updated 18 June 2025.
   Source: `bigregister-over-het-register` (new). The IGJ checks that the doctor who signs an artsenverklaring is in
   the BIG-register (fact 24).
6. **Giving injections professionally is a reserved act** (Wet BIG art. 36(5); others only on instruction, art. 35).
   Unchanged in the current version. Source: `nl-wet-big-art-35-36` (guides.yaml).
7. **The CBG database shows what is authorised.** The IGJ Q&A (question 1): a medicine authorised in the Netherlands
   or EU-wide is in the CBG's Geneesmiddeleninformatiebank; its number on the pack starts with "RVG" or "EU". Sources:
   `igj-qa-zonder-handelsvergunning` (legal-a.yaml), `cbg-geneesmiddeleninformatiebank` (shared.yaml).
8. **A huisarts does not have to prescribe weight-loss medicines at all.** NHG-Standaard Obesitas (published October
   2025, last change August 2026): "Het voorschrijven van gewichtsreducerende medicatie is extra aanbod en daarom
   facultatief. Verwijs naar de tweede lijn (bij voorkeur naar een obesitascentrum in een ziekenhuis of een internist
   gespecialiseerd in obesitas) wanneer medicatie niet door huisarts zelf wordt voorgeschreven." Thuisarts (B1, "je"
   form; last changed 4 November 2025): "Er zijn huisartsen die deze medicijnen niet voorschrijven. Er zijn ook
   huisartsen die deze medicijnen soms wel voorschrijven." Sources: `nhg-standaard-obesitas-2025`,
   `thuisarts-obesitas-medicijnen-huisarts` (new).

### B. Online consultations (Gnw art. 67)

9. **The statute is unchanged.** Gnw art. 67: "Het is een ieder verboden via internet geneesmiddelen voor te schrijven
   aan personen die de voorschrijver nog nooit persoonlijk heeft ontmoet, of die de voorschrijver niet kent of van wie
   de voorschrijver de medicatiehistorie niet beschikbaar heeft." Source: `nl-gmw-art-67-internet-prescribing`
   (guides.yaml).
10. **But a ministerial policy rule tolerates internet prescribing under two conditions.** "Beleidsregel voorschrijven
    via internet" (Minister of VWS, 27 March 2023, Stcrt. 2023, 10521; wetten.overheid.nl BWBR0048048, "Geldend van
    12-04-2023 t/m heden"), art. 2: when a medicine is prescribed via the internet to someone the prescriber has never
    met and does not know, "treedt de minister niet handhavend op tegen overtreding van artikel 67 van de
    Geneesmiddelenwet indien: a. een fysiek consult of onderzoek ... niet nodig is, en; b. de voorschrijver beschikt
    over de geactualiseerde medicatiehistorie van de patiënt en de medicatiehistorie voor zover nodig raadpleegt."
    Source: `nl-beleidsregel-voorschrijven-via-internet` (new).
11. **How the IGJ applies it** (page "Medicijnen voorschrijven via internet", modified 14 July 2026): "Zorgverleners
    mogen medicijnen voorschrijven na contact met de patiënt via internet, maar hiervoor gelden strenge voorwaarden."
    The rule covers video, audio and text consultations; "Als het voor goede zorg noodzakelijk is dat de voorschrijver
    de patiënt fysiek onderzoekt of ziet dan mag ... niet worden volstaan met een consult via internet"; the
    prescriber may rely on an examination by another care provider; ordinary telephone calls without internet fall
    outside art. 67 but similar conditions apply; the rule applies "totdat de Geneesmiddelwet is aangepast". The IGJ
    gives 11 April 2023 as the start date. Source: `igj-medicijnen-voorschrijven-via-internet` (new).
12. **If you get a weight-loss medicine through an online route, your GP still helps.** NHG "Praktijksituaties
    gewichtsreducerende medicatie" (text says "Op het moment van publicatie (oktober 2025)"), situation 6: follow-up and
    checks belong with the prescriber; "De huisarts draagt geen verantwoordelijkheid voor periodieke controles bij
    elders verkregen medicatie. De huisarts heeft wel een rol in het signaleren van bijwerkingen en complicaties van
    dergelijke middelen." Treating them is the prescriber's responsibility; "De patiënt is verantwoordelijk behandelaren
    te informeren over het medicatiegebruik." Source: `nhg-2025-gewichtsreducerende-medicatie` (nl-help).

### C. Off-label (Gnw art. 68; IGJ position of February 2026, adjusted May 2026)

13. **The statute.** Gnw art. 68(1): "Het buiten de door het College geregistreerde indicaties voorschrijven van
    geneesmiddelen is alleen geoorloofd wanneer daarover binnen de beroepsgroep protocollen of standaarden zijn
    ontwikkeld. Als de protocollen en standaarden nog in ontwikkeling zijn, is overleg tussen de behandelend arts en
    apotheker noodzakelijk." Art. 68(2): in cases set by ministerial regulation "vermeldt het recept de reden van
    voorschrijven". Source: `nl-gmw-art-68-off-label` (guides.yaml).
14. **IGJ standpunt, current text** (published 3 February 2026; page and PDF "aangepast" 8 May 2026; page metadata
    modified 13 May 2026; PDF "Geactualiseerd standpunt IGJ off-label voorschrijven, mei 2026", 3 pages). Starting
    point: "geneesmiddelen in principe on-label worden voorgeschreven"; "Prescriptievrijheid van artsen is groot, maar
    niet onbeperkt." Situations:
    - On-label: possible.
    - A standard or protocol of the profession allows it ("user label"): possible, following it; "Hierbij hoeft niet te
      worden voldaan aan de verzwaarde informatieplicht."
    - A standard advises against it: "Off-label voorschrijven is niet toegestaan" (PDF: not even if the due-care
      requirements are followed).
    - A standard that allows it is being developed: doctor and pharmacist must consult; "terughoudendheid is geboden";
      PDF: it must concern one individual patient without medicinal alternatives, only after consultation with the
      pharmacist about that patient, both must agree, the outcome goes in the file; due-care requirements apply.
    - No standard and none in development: "Off-label voorschrijven is in principe niet mogelijk." PDF: "In
      uitzonderlijke individuele situaties kan hiervan worden afgeweken": one patient without medicinal alternatives,
      "niet om een situatie voor een hele patiëntengroep"; the prescriber substantiates the individual need in the file;
      only in consultation with the pharmacist; never where a standard advises against it.
    Due-care requirements: weigh efficacy and side effects by "de huidige stand van de wetenschap"; the prescriber
    "beschikt over en raadpleegt de geactualiseerde medicatiehistorie" and checks for interference with ongoing
    treatments (KNMG "Handreiking Verantwoordelijkheidsverdeling bij samenwerking in de zorg"); "Er geldt een
    verzwaarde informatieplicht, waarbij de patiënt de expliciete toestemming verleent en dit in het dossier wordt
    vastgelegd"; "De patiënt wordt extra gemonitord op bijwerkingen" (PDF: unexpected or worsening side effects are
    reported to Lareb); the doctor is competent with the medicine. Source: `igj-2026-off-label-standpunt` (legal-a.yaml).
15. **What changed on 8 May 2026** (the page lists it): the due-care reference was dropped for "user label"
    prescribing; "De voorschrijvend arts moet overleggen met de regiebehandelaar" was replaced by the medication-history
    check above; the references to the KNMG standpunt were removed; the step plan got a "stap 0" (is on-label treatment
    possible?). Source: `igj-2026-off-label-standpunt`.
16. **What counts as a standard** (PDF footnotes): at least one drawn up under the Zorginstituut's AQUA-leidraad and in
    line with science; "in beginsel ... in Nederland geldende protocollen en standaarden"; a prescriber is not free to
    pick foreign protocols at will (Raad van State rulings cited). Off-label use inside a WMO-approved trial is outside
    the step plan. Source: `igj-2026-off-label-standpunt`.
17. **NHG-Standpunt "Aanbevelingen voor het offlabel voorschrijven van geneesmiddelen"** (last changed January 2018):
    "Het NHG adviseert om terughoudend om te gaan met het offlabel voorschrijven van geneesmiddelen als die niet in de
    NHG-Standaarden en NHG-Behandelrichtlijnen worden geadviseerd. Offlabel voorschrijven is alleen een optie als dat
    voor de patiënt op dat moment de best denkbare behandeling is." Source: `nhg-2018-standpunt-offlabel` (new).
18. **Off-label cannot make an unauthorised peptide available.** Art. 68 is about prescribing an authorised medicine
    outside its registered indications ("buiten de door het College geregistreerde indicaties"); a compassionate-use
    programme cannot be used for a new indication of an authorised medicine either: "Niet geregistreerde indicaties van
    een geregistreerd geneesmiddel vallen wettelijk gezien onder de regels voor off-label gebruik." Sources:
    `nl-gmw-art-68-off-label`, `cbg-cup-vragen-en-antwoorden` (new).
19. **CBG on GLP-1 medicines used for slimming** (standpunt, issued 20 February 2025, modified 3 March 2026): these
    medicines "worden ... steeds vaker gebruikt als afslankmiddel, zonder recept en buiten de geregistreerde indicatie
    ... Het CBG raadt dit af"; off-label "mag in principe alleen als er in de beroepsgroep van de artsen een richtlijn
    is die dit off-label voorschrijven toestaat"; online without prescription: "Want je weet niet wat je koopt. Het is
    onduidelijk wat erin zit, hoe je het moet gebruiken en dus ook wat de gevolgen voor je gezondheid zijn." Source:
    `cbg-glp1-position` (semaglutide.yaml).

### D. Artsenverklaring (named-patient supply; Gnw art. 40(3)(c), Regeling Gnw art. 3.17)

20. **The legal basis is unchanged.** Gnw art. 40(3)(c) (exemption by the IGJ "voor bepaalde tijd ... met inachtneming
    van artikel 5 van richtlijn 2001/83"); Regeling Geneesmiddelenwet (version from 1 January 2026, current) art.
    3.17(1): the IGJ can grant a manufacturer, wholesaler or "apotheekhoudende" an ontheffing if (a) "de arts het
    noodzakelijk acht", (b) "er geen adequaat medicamenteus alternatief ... in Nederland in de handel is of anderszins
    verkrijgbaar is", (c) the doctor asked in writing on the IGJ model, (d) that request went to the IGJ, (e) the IGJ
    set quantity and period, (f) records of quantity, doctor, number of patients and side effects. Art. 3.17a: a
    general vrijstelling during a temporary shortage, only for a medicine authorised in another EU member state, the UK
    or an MRA country. Sources: `nl-gmw-art-40-handelsvergunning` (guides.yaml), `nl-regeling-gnw-art-3-17`
    (legal-a.yaml).
21. **The IGJ now says "ontheffing".** "Sinds 9 september 2025 gebruikt de Inspectie Gezondheidszorg en Jeugd (IGJ) de
    term 'ontheffing' ... De term 'ontheffing' komt door gewijzigde wetgeving." Dutch text should say ontheffing (not
    toestemming). Source: `igj-leveren-op-artsenverklaring` (guides.yaml; page issued 27 December 2024, modified
    6 February 2026).
22. **Three steps** (same page): (1) the prescribing doctor signs the artsenverklaring, declaring among other things
    "dat de patiënt om medisch inhoudelijke redenen niet kan worden behandeld met de in Nederland toegelaten
    geneesmiddelen", awareness that it has no Dutch marketing authorisation, "verantwoordelijkheid te dragen voor de
    behandeling van de patiënt en het risico", that it "niet is getoetst aan criteria voor werkzaamheid, veiligheid en
    kwaliteit", and that the patient "daarop nadrukkelijk" was told; (2) a pharmacy, wholesaler, manufacturer or
    dispensing GP applies, one application per medicine and per indication, with a full artsenverklaring per patient
    carrying a patient code, no traceable patient data; (3) the supplier keeps the records. "De IGJ heeft een wettelijke
    termijn van maximaal 8 weken ... De gemiddelde behandeltermijn is ongeveer 4 weken." A spoedprocedure exists "in een
    levensbedreigende situatie". The IGJ can refuse, with a reasoned decision within 8 weeks. Supplying without an
    ontheffing is a breach of the Gnw and the IGJ can enforce. Source: `igj-leveren-op-artsenverklaring`.
23. **You cannot apply yourself.** Both IGJ pages open with: "Zoekt u als patiënt/cliënt informatie over uw eigen
    medicijnen ... Neem dan contact op met uw eigen huisarts of apotheek." Q&A: only a manufacturer, wholesaler,
    "gevestigde (ziekenhuis)apotheker" or dispensing GP "in Nederland gevestigd", with a valid licence (Farmatec) or
    register entry; "De IGJ accepteert geen aanvragen die zijn ingediend door bemiddelaars, consultancybureaus en
    dergelijke partijen". Sources: `igj-leveren-op-artsenverklaring`, `igj-qa-zonder-handelsvergunning` (legal-a.yaml;
    issued 11 August 2026, modified 20 August 2026).
24. **What the file must contain** (Q&A "Documentatie"): an artsenverklaring by "een in Nederland geregistreerde arts
    met geldig BIG-nummer", signed less than 1 year ago, with a patient code; on page 2 the medicines tried or
    considered "en de reden waarom deze patiënt niet kan worden behandeld met in Nederland geregistreerde
    geneesmiddelen"; product information (SmPC or leaflet from the country of origin, in Dutch, English or German or
    translated); if there is none, "omdat bijvoorbeeld het geneesmiddel in het land van herkomst nog geen
    handelsvergunning heeft", the most recent Investigator's Brochure (IB) or IMPD; an IB or IMPD also when importing
    clinical study material, "Ook als er sprake is van bijvoorbeeld een FDA-registratie"; a valid GMP certificate when
    the medicine comes from an EEA/MRA country or the UK without an authorisation there, or from outside those
    countries. The declaration is filled in in Dutch; the IGJ checks the doctor in the BIG-register; a declaration
    signed by "een doktersassistente of een andere medewerker zonder voorschrijfbevoegdheid" is refused. Source:
    `igj-qa-zonder-handelsvergunning`.
25. **Reasons that count, and reasons that do not.** "De IGJ gaat ervan uit dat steeds eerst een geregistreerd
    geneesmiddel is overwogen of gebruikt"; valid examples: registered medicines do not work (enough), or side effects.
    "Niet-medische redenen zijn geen argumenten ... Denk hierbij aan financiële redenen, therapietrouw of
    gebruiksgemak. Bijvoorbeeld andere farmaceutische vorm of sterkte". Source: `igj-qa-zonder-handelsvergunning`.
26. **Scope and restraint.** "De ontheffing is voor 1 jaar geldig" (exceptions stated in the decision); usually per
    patient, sometimes for a patient group "op indicatieniveau". "Toepassing van artikel 3.17 ... is bedoeld voor
    individuele behandeling in uiterste gevallen. De IGJ is daarom terughoudend"; "uitdrukkelijk niet bedoeld om de
    verplichting van de handelsvergunning te omzeilen". The supplier must record side effects "en te melden aan het
    Bijwerkingencentrum Lareb". The ontheffing lapses when the medicine is registered or an adequate authorised
    alternative appears. Source: `igj-qa-zonder-handelsvergunning`.
27. **Who pays.** "Als de IGJ ontheffing heeft verleend ... dan betekent dit niet zonder meer dat het geneesmiddel wordt
    vergoed. De IGJ heeft geen rol bij het proces van vergoedingen"; ask the insurer. Source:
    `igj-qa-zonder-handelsvergunning`.
28. **Trials and shortages.** A patient who cannot join a trial (for example not meeting the inclusion criteria): the
    doctor can ask an NL-based supplier to request an ontheffing "buiten het klinische onderzoek". If the medicine may
    fall under a compassionate-use programme, the IGJ does not handle the request. Temporary shortage: the IGJ can issue
    a vrijstellingsbesluit (no ontheffing needed); definitive shortage: artsenverklaring route. Source:
    `igj-qa-zonder-handelsvergunning`. The IGJ's overview of vrijstellingsbesluiten (modified 26 October 2026) lists no
    GLP-1 medicine. Source: `igj-overzicht-vrijstellingsbesluiten` (new).

### E. Magistrale bereiding (pharmacy preparation)

29. **The statutory exception.** Gnw art. 40(3)(a): the licence rule does not apply to medicines "die door of in
    opdracht van een apotheker of een huisarts als bedoeld in artikel 61, eerste lid, onder b, in diens apotheek op
    kleine schaal zijn bereid en ter hand worden gesteld". Source: `nl-gmw-art-40-handelsvergunning` (guides.yaml).
30. **IGJ "Eigen bereidingen apotheek"** (8 July 2025, unchanged): "Apotheken mogen voor een individuele patiënt en op
    kleine schaal zelf een geneesmiddel bereiden"; raw materials must meet the European Pharmacopoeia, or else the
    pharmacopoeia of a member state, the US or Japan "als de farmacopee actueel en officieel in gebruik is"; "Een
    grondstof die niet in een in gebruik zijnde farmacopee staat, kan daarom niet zomaar worden gebruikt. Bij
    apotheekbereidingen is geen onafhankelijke registratieautoriteit betrokken"; the pharmacist judges the raw
    material's drug master file (a CEP gives more certainty); "Apotheekbereiding is geen goede keuze" when there is
    "onvoldoende zekerheid over de herkomst, kwaliteit van de grondstoffen, het bereidingsproces en de eindcontroles".
    The page also lists the questions a pharmacist cannot always answer: is the synthesis route the one the monograph
    assumes, "Is de grondstof adequaat bewaard en niet verwisseld of vervalst? Is de leverancier betrouwbaar?" Source:
    `igj-eigen-bereidingen-apotheek` (legal-a.yaml).
31. **A pharmacy preparation is for an individual patient, on a prescription.** Directive 2001/83 art. 3(1): the
    magistral formula is "Any medicinal product prepared in a pharmacy in accordance with a medical prescription for an
    individual patient"; the IGJ: "voor een individuele patiënt en op kleine schaal" (fact 30). Sources:
    `eu-directive-2001-83` (shared.yaml), `igj-eigen-bereidingen-apotheek`. *(Fact-check 27 October 2026: the earlier
    source `cjeu-2015-abcur` was dropped from this fact because its title names two companies, "Abcur AB v Apoteket
    Farmaci AB and Apoteket AB" (CONTENT-GUIDE §11). Its ruling does say a prescription "issued before their
    preparation ... specifically for a previously identified patient" (read through the EU Publications Office on
    27 October 2026); Dutch pages may use that stricter point only if the merge owner retitles the source neutrally,
    for example "Judgment of 16 July 2015, Joined Cases C-544/13 and C-545/13".)*
32. **KNMP-richtlijn Bereiden** (authorised May 2016): "Ga bij een voorschrift voor een apotheekbereiding eerst na of in
    de zorgvraag kan worden voorzien met een geregistreerd handelspreparaat"; only when none is available, or not in
    the right strength or form, or preparation has added value. Community pharmacies follow the KNMP guideline,
    hospital pharmacies the NVZA's GMP-Z guideline. Sources: `knmp-richtlijn-bereiden-2016`,
    `knmp-faq-apotheekbereiding` (new).
33. **"Kleine schaal", collegial supply and reimbursement** (KNMP FAQ, items "Laatst bijgewerkt op 05 maart 2024"):
    a 2019 letter of Minister Bruins described "verstrekking in het klein" as up to about 50 unique patients a month
    for long-term use and about 150 for short-term use; supplying preparations from pharmacy to pharmacy
    ("collegiaal doorleveren") without a marketing authorisation "is strijdig met de Geneesmiddelenwet" but tolerated
    under the IGJ policy rule in force since 1 February 2025, only after prior assessment and a "gedoogverklaring";
    reimbursement requires "rationele farmacotherapie" (Besluit zorgverzekering art. 2.8(1)); not reimbursed are
    preparations containing a registered medicine not designated for reimbursement, or "met dezelfde werkzame stof,
    toedieningsweg en vergelijkbare toepassing als een geregistreerd geneesmiddel dat niet voor vergoeding is
    aangewezen". Source: `knmp-faq-apotheekbereiding`. (Our inference, label it: a pharmacy-made semaglutide for weight
    management would therefore not be reimbursed, because Wegovy is not in the GVS; facts 58–59.)
34. **Whether any peptide on this site has a European Pharmacopoeia monograph was not verified** (see §5).

### F. Compassionate use

35. **Statute and regulation.** Gnw art. 40(3)(f): a medicine made available "voor gebruik in schrijnende gevallen" as
    in art. 83 of Regulation 726/2004, when an EU marketing application has been filed or clinical trials are running.
    Regeling Gnw art. 3.18: whoever intends to make it available asks the CBG for approval, with a programme (reasons,
    patient group, efficacy and safety data, agreements on side-effect reporting); the CBG can set conditions, suspend
    or withdraw; the IGJ supervises. Sources: `nl-gmw-art-40-handelsvergunning`, `nl-regeling-gnw-art-3-17`.
36. **CBG criteria** (page issued 19 December 2024, modified 22 October 2025): for "een groep patiënten (cohort) die
    lijdt aan een chronische ziekte, een ziekte die de gezondheid sterk ondermijnt of levensbedreigend wordt geacht";
    the disease "kan onvoldoende op een bevredigende manier met een geregistreerd geneesmiddel worden behandeld"; an MA
    application has been filed or trials are ongoing. "Een aanvraag voor een CUP moet worden ingediend door een
    geneesmiddelenfabrikant." The CBG points to the artsenverklaring as the alternative. Source:
    `cbg-compassionate-use-criteria` (guides.yaml).
37. **Policy MEB 49 (1 December 2024).** Approval is now "voor onbepaalde tijd", until the medicine has a marketing
    authorisation or the benefit-risk balance turns negative; before, approval lasted one year (Q&A: "Tot 2023 gold een
    goedkeuring voor de termijn van 1 jaar"). Sources: `cbg-2024-cup-nieuw-beleid`, `cbg-cup-vragen-en-antwoorden`
    (new).
38. **Q&A details** (issued 1 December 2024, modified 14 January 2025): "Alleen de fabrikant van het geneesmiddel kan
    een aanvraag voor een CUP indienen"; a Dutch CUP "is uitsluitend voor Nederland"; no CUP for a new indication of an
    authorised medicine (fact 18); the CBG decides within 6 weeks of starting its assessment; patients in a CUP keep
    access "tot het moment dat er voor het geneesmiddel een positief vergoedingsbesluit is genomen en het in de handel
    verkrijgbaar is"; the manufacturer collects all suspected side effects (EudraVigilance). Source:
    `cbg-cup-vragen-en-antwoorden`.
39. **No programme for any compound on this site.** CBG "Overzicht van goedgekeurde compassionate use programma's"
    (modified 10 July 2026; 43 programmes, the most recent approved 5 December 2025): text-searched on 27 October 2026
    for semaglutide, tirzepatide, retatrutide, LY3437943, liraglutide, BPC, TB-500, thymosin, thymalfasin, KPV,
    elamipretide, SS-31, tesamorelin, ipamorelin, CJC, sermorelin, hexarelin, GHK, AOD, semax, selank, epitalon,
    MOTS-c, melanotan, afamelanotide, bremelanotide, PT-141, NAD, GLP, peptide, orforglipron, cagrilintide,
    survodutide: no hit (the only "nad" match is in "nadere"). Source: `cbg-compassionate-use-list` (retatrutide.yaml).
40. **The Netherlands has no separate "medical need programme" route.** Gnw art. 40(3)(a)–(i) lists no such category
    (Belgium has one; see the BE notes). Our reading of the statute; label it so.

### G. Klinisch onderzoek (clinical trials)

41. **WMO** (version from 1 January 2025, current): art. 2: research follows a protocol on which "een positief oordeel"
    is needed from an authorised committee (METC) or the CCMO; art. 6: written consent (16 and over; 12 to 15 also
    the parents or guardian); art. 7: insurance for death or injury caused by the research is required, but it "behoeft
    niet te dekken de schade waarvan op grond van de aard van het onderzoek zeker of nagenoeg zeker was dat deze zich
    zou voordoen"; art. 1(o): medicine research is a clinical trial under Regulation 536/2014. Source:
    `nl-wmo-art-2-6-7` (new).
42. **CCMO, for participants** (background page modified 27 July 2026): "Meedoen aan dit soort onderzoek gebeurt altijd
    op vrijwillige basis"; "Onderzoek in fase 1 en 2 levert de patiënt meestal geen verbetering op"; "Patiënten krijgen
    meestal alleen de reiskosten vergoed. Zij hoeven niet te betalen voor de geneesmiddelen die zij tijdens het
    onderzoek krijgen"; to find a study ask your huisarts or specialist or patient organisations; "De CCMO bemiddelt
    niet"; search Onderzoekmetmensen.nl; problems can be reported to the IGJ. Source: `ccmo-achtergrond-meedoen`
    (legal-a.yaml).
43. **CCMO IVO text** (modified 19 May 2026; written in "je" form, usable for B1): "Stoppen mag altijd. Je hoeft niet te
    zeggen waarom. Praat er wel over met de onderzoeker"; "Onderzoekers moeten een verzekering afsluiten"; "Je moet de
    schade binnen vier jaar melden"; foreseen harm is not paid unless "het veel erger is dan ze dachten of hadden
    verteld". Source: `ccmo-ivo-meedoen` (legal-a.yaml).
44. **EU rules.** Clinical Trials Regulation applies since 31 January 2022; all new applications through CTIS from
    31 January 2023; from 31 January 2025 old trials must comply and be in CTIS; public searchable website. Source:
    `ema-clinical-trials-regulation` (legal-a.yaml; re-fetched 27 October 2026, unchanged). Rights: `eu-regulation-536-2014`.
45. **The Dutch register now includes CTIS trials.** Onderzoekmetmensen.nl (OMON): "Vanaf mei 2026 zijn de onderzoeken
    uit het publieke gedeelte van CTIS ook zichtbaar in ... (OMON). Dit betekent dat al het medisch-wetenschappelijk
    onderzoek in Nederland dat officieel getoetst moet worden in OMON is opgenomen." It warns that information "kan
    ... verouderd zijn (zoals 'Status werving')". Source: `omon-overzicht-ctis-2026` (new).
46. **Retatrutide: two trials with Dutch sites, both for specific patient groups.**
    - TRIUMPH-Outcomes (NCT06383390; EU CT 2023-508630-34-00; NL-OMON60031): retatrutide vs placebo in adults with
      obesity (BMI ≥ 27) and cardiovascular and/or chronic kidney disease; ClinicalTrials.gov "Active, not recruiting",
      28 Dutch sites; OMON "Werving gestopt" (updated 19 May 2026).
    - SYNERGY-Outcomes (NCT07165028; EU CT 2025-522674-36-00; NL-OMON61112): tirzepatide and retatrutide in adults with
      high-risk MASLD; ClinicalTrials.gov "Recruiting", 6 Dutch sites (Utrecht recruiting, five "not yet recruiting");
      OMON "Werving gestart" (published 7 October 2026); CTIS: authorised in the Netherlands on 4 February 2026,
      Dutch start of trial notified 22 September 2026, 7 Dutch sites authorised. *(Fact-check 27 October 2026: CTIS
      shows no Dutch START_OF_RECRUITMENT notification and "hasRecruitmentStarted": false for the Netherlands, so the
      registers disagree on Dutch recruitment. Write "het onderzoek is in Nederland gestart", not that it recruits here.
      Some of the 7 authorised Dutch sites are commercial research centres: name cities, never site organisations.)*
    Sources: `ctgov-nct06383390`, `ctgov-nct07165028` (retatrutide.yaml), `omon-nl-omon60031`, `omon-nl-omon61112`,
    `ctgov-nl-peptide-search-2026-10-27` (new), `ctis-2025-522674-36-00` (eu-status).
47. **Elamipretide (SS-31): a new Dutch authorisation, not yet recruiting.** 4TAZPower (SPIBA-401; EU CT
    2025-523837-25-00; NL-OMON61412; NCT07531251): phase 3b/4, placebo-controlled, in genetically confirmed Barth
    syndrome (a rare inherited disease, males), 22 participants in the EU part. CTIS: authorised in the Netherlands
    on 27 July 2026, one Dutch site (Amsterdam UMC), no start-of-trial notification for the Netherlands; OMON (published
    17 October 2026): "Werving nog niet gestart". *(Fact-check 27 October 2026: the 22 are the planned participants in
    France 7, Ireland 4, Italy 6 and the Netherlands 5 (CTIS); ClinicalTrials.gov eligibility: male, 5 to 55 years.
    OMON still shows the two 2016–2017 elamipretide heart-failure trials as "Werving gestopt" although ClinicalTrials.gov
    lists them as completed.)* ClinicalTrials.gov lists sites only in Canada, the UK and the US.
    Earlier elamipretide trials with Dutch sites are finished (NCT02788747 and NCT02914665, phase 2, 2017;
    NCT05162768, phase 3, completed 4 December 2024). Sources: `ctis-2025-523837-25-00` (eu-status), `omon-nl-omon61412` (new),
    `ctgov-nct07531251` (stubs-b.yaml), `ctgov-nct05162768` (refocus-status-d.yaml), `ctgov-nl-peptide-search-2026-10-27`.
48. **Thymosin alpha-1 (thymalfasin): one Dutch study registered, status unclear.** NL-OMON51992 (TIDAM; Erasmus MC;
    open-label 8-week proof-of-concept of thymosine-α1 in mood disorders associated with primary antibody deficiency):
    "Goedgekeurd WMO", status "Werving nog niet gestart"; published 19 January 2022, last updated 1 September 2025;
    source ToetsingOnline. Not on ClinicalTrials.gov with a Dutch site; not in CTIS for the Netherlands. Whether it ever
    started is unknown (§5). Source: `omon-nl-omon51992` (new).
49. **Nothing for the other peptides.** On 27 October 2026: ClinicalTrials.gov (location Netherlands) 0 trials for
    BPC-157 ("BPC-157" and "BPC 157"), TB-500, thymosin beta-4, KPV, SS-31 (as a name), tesamorelin, ipamorelin,
    CJC-1295, semax, selank, epitalon, MOTS-c, melanotan, bremelanotide, GHK-Cu, AOD-9604, hexarelin, thymalfasin,
    "thymosin alpha 1"; CTIS (member state Netherlands) 0 for the same names and "Body Protection Compound"; OMON 0
    for BPC-157, TB-500, tesamorelin, CJC-1295, epitalon, melanotan, bremelanotide, AOD-9604, hexarelin (OMON's free-text
    search returns unrelated fuzzy matches for short names such as "BPC 157", "KPV", "GHK", "semax", "selank" and
    "MOTS-c"; the first results were checked and none concerned these peptides; its "ipamorelin" hit is a triptorelin
    study). Related compound, not on the site list: one ended afamelanotide pharmacokinetic study with a Dutch site
    (CTIS 2023-507311-35-00; Dutch start 22 May 2024, end 20 January 2025). Sources:
    `ctgov-nl-peptide-search-2026-10-27`, `ctis-nl-peptide-search-2026-10-27`, `omon-peptide-search-2026-10-27` (new).

### H. Zelf invoeren: how it relates to care (the law itself: topic nl-law)

50. **The care route for a medicine authorised abroad but not here is the artsenverklaring**, through a Dutch supplier,
    never the patient (facts 20–28). A prescription from a prescriber in another EU/EEA member state is a valid Dutch
    recept (fact 2), but it does not make an unauthorised medicine available here (art. 40(2) still applies). Gnw art.
    18(6)(a) only lifts the import-licence requirement for medicines "die kennelijk zijn bestemd voor eigen gebruik door
    de persoon die de desbetreffende geneesmiddelen vervoert". Sources: `igj-qa-zonder-handelsvergunning`,
    `nl-gnw-art-1-recept`, `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-18-licence` (legal-a.yaml; text re-read in
    the current version).

### I. Patient rights (WGBO, Wet BIG) and what a doctor may refuse

51. **WGBO, Civil Code Book 7, version in force from 8 October 2026** (current): art. 7:448 (inform clearly and in time:
    nature and purpose, "de te verwachten gevolgen en risico's ... bij niet behandeling", "andere mogelijke methoden van
    onderzoek en behandelingen al dan niet uitgevoerd door andere hulpverleners"; invite questions; "verstrekt
    desgevraagd schriftelijk of elektronisch informatie"); art. 7:450 (consent required; for ages 12 to 15 also the
    parents or guardian, with exceptions); art. 7:451 (in writing on request for "verrichtingen van ingrijpende aard");
    art. 7:452 (the patient gives the information and cooperation reasonably needed); art. 7:453(1) ("de zorg van een
    goed hulpverlener ... in overeenstemming met ... de voor hulpverleners geldende professionele standaard en
    kwaliteitsstandaarden"; lid 2 now refers to Wkkgz art. 2a, which concerns standards with large collective costs and
    is not relevant to patients; *fact-check: art. 7:453 carries the flag "Wijziging(en) zonder datum inwerkingtreding
    aanwezig", an adopted change with no commencement date yet; the quoted text is the one in force on 27 October
    2026*); arts. 7:454–456 (file; destruction on written request, 7:455; access and copy, 7:456; *fact-check: before "file,
    access, copy"*); art. 7:457 (secrecy); art. 7:460: "De
    hulpverlener kan, behoudens gewichtige redenen, de behandelingsovereenkomst niet opzeggen." Sources:
    `nl-wgbo-art-448-information`, `nl-wgbo-art-450-consent`, `nl-wgbo-art-452-patient-information`,
    `nl-wgbo-art-453-good-care`, `nl-wgbo-art-454-456-records`, `nl-wgbo-art-457-confidentiality` (guides.yaml),
    `nl-wgbo-art-460-opzegging` (new).
52. **Secrecy, second opinion and Thuisarts (re-checked).** KNMG: professional secrecy has a "verschoningsrecht" towards
    police and justice; grounds to break it include consent, presumed consent (referral), legal duty, the "meldrecht"
    (for example Veilig Thuis for child abuse or domestic violence). KNMG second opinion: "Je kunt dit alleen weigeren als
    je daar zwaarwegende redenen voor hebt." Thuisarts (last changed 19 April 2024): you can go to the GP "Als u een
    manier heeft bedacht om u zelf te behandelen maar niet zeker weet of dat de goede manier is"; "Maak dan een langere
    afspraak (20 minuten)"; "U kunt ook iemand meenemen"; "Alle artsen in Nederland hebben een beroepsgeheim". Sources:
    `knmg-beroepsgeheim-doorbreken`, `knmg-2024-second-opinion`, `thuisarts-naar-de-huisarts` (guides.yaml).
53. **What a doctor may refuse.** No provision obliges a doctor to prescribe what a patient asks for; the doctor works
    to the professional standard (art. 7:453), which includes the IGJ off-label position (fact 14) and the NHG
    standards (facts 8, 17, 64). NHG situation 2 ("Verzoek om andere medicatie dan voorkeursmiddelen") uses tirzepatide
    as its example of a medicine outside the preferred list. A doctor may not end the treatment relationship except for
    "gewichtige redenen" (art. 7:460). This combination is our reading (label it; legal reviewer, §6). Sources:
    `nl-wgbo-art-453-good-care`, `nl-wgbo-art-460-opzegging`, `nhg-2025-gewichtsreducerende-medicatie` (nl-help),
    `nhg-standaard-obesitas-2025`.

### J. Insurance: 2026, and what is decided for 2027

54. **Eigen risico 2026: € 385.** Rijksoverheid (Q&A modified 28 July 2026): "Het verplichte eigen risico voor 2026 is
    € 385"; it applies from age 18 to basic-package care, except among others "huisartsenzorg (waaronder de
    huisartsenpost)" and the "gecombineerde leefstijlinterventie". Zorginstituut: "Voor 2026 is het verplichte eigen
    risico € 385"; "Voor geneesmiddelen geldt het eigen risico"; GP care is exempt, but tests the GP has done outside the
    practice (blood tests) count. Sources: `rijksoverheid-eigen-risico-2026`, `zin-eigen-risico-zvw` (nl-help),
    `zin-geneesmiddelen-zvw` (new), `zin-huisarts-zvw` (safety-b.yaml).
55. **Eigen risico 2027: € 400, fixed by ministerial regulation, in force from 1 January 2027.** *(Corrected by the
    fact-check of 27 October 2026; before: "by the cabinet's plan ... The legal instrument that fixes € 400 for 2027 was
    not found".)* Regeling van de Minister van VWS van 25 september 2026 "houdende vaststelling van het verplicht eigen
    risico Zvw 2027" (Staatscourant 2026, 34372, published 30 September 2026): "Het bedrag, bedoeld in artikel 19, eerste
    lid, van de Zorgverzekeringswet, wordt vastgesteld op € 400", "treedt in werking met ingang van 1 januari 2027";
    wetten.overheid.nl already shows Zvw art. 19(1) from 1 January 2027: "een verplicht eigen risico van € 400 per
    kalenderjaar". Writers may say "In 2027 is het eigen risico € 400" (or "vanaf 1 januari 2027"). Background:
    Rijksoverheid Prinsjesdag page (15 September 2026): "Het verplicht eigen risico gaat in 2027 met de inflatie mee en
    stijgt van € 385 naar € 400"; average premium expected to rise by € 12,50 to € 169 a month. The VWS draft budget
    2027 (Kamerstuk 37 020 XVI, nr. 2, received 15 September 2026, p. 20, corrected from p. 19): "Het kabinet heeft
    besloten de verhoging van het verplicht eigen risico met € 60 uit te stellen naar 2028", and from 2028 a maximum of
    € 150 "per behandelprestatie in de medisch-specialistische zorg" (tranchering); both 2028 points are plans. The
    separate bill to raise the deductible by € 60 (Kamerstuk 36 943, submitted 12 May 2026) is still pending ("Bij de
    Tweede Kamer is een wetsvoorstel in behandeling", explanatory note of the regulation). Sources:
    `nl-zvw-art-19-eigen-risico-2027` (new, fact-check), `rijksoverheid-2026-prinsjesdag-zorg`,
    `vws-2026-ontwerpbegroting-2027` (new); also `rijksoverheid-2026-09-vws-begroting` (nl-help, the news item).
56. **How medicines are reimbursed.** "Alleen geregistreerde geneesmiddelen die zijn opgenomen in het
    Geneesmiddelenvergoedingssysteem (GVS) worden vergoed uit het basispakket"; bijlage 1A (clustered, with a
    reimbursement limit), 1B (unique), bijlage 2 (extra conditions); the eigen bijdrage is capped at € 250 a year
    since 2019. Source: `zin-geneesmiddelen-zvw` (new; modified 4 June 2026).
57. **Bijlage 2 conditions (Regeling zorgverzekering, version in force from 6 October 2026):**
    - Item 146 "Dulaglutide en Semaglutide" (Ozempic, Rybelsus): only type 2 diabetes: (a) BMI ≥ 30 not controlled on
      metformin plus a sulfonylurea at maximum tolerated doses and not using insulin; (b) added to metformin and basal
      insulin, BMI ≥ 30, after ≥ 3 months of optimised basal insulin; (c) very high cardiovascular risk (proven
      cardiovascular disease and/or chronic kidney damage) added to an SGLT2 inhibitor and metformin, or when an SGLT2
      inhibitor is contraindicated.
    - Item 194 "Tirzepatide" (Mounjaro): only insured persons aged 18 or over, type 2 diabetes, the same three routes.
    - Item 141 "Liraglutide": type 2 diabetes routes (a), (b), (d), and route (c) for obesity: "in combinatie met een
      door het RIVM erkende gecombineerde leefstijlinterventie (GLI), indien de GLI niet succesvol is na 1 jaar, voor
      de behandeling van volwassenen zonder diabetes mellitus type 2 met een extreem verhoogd gewichtsgerelateerd
      gezondheidsrisico en die (nog) niet in aanmerking komen voor metabole chirurgie": BMI ≥ 35 with a comorbidity
      (cardiovascular disease, sleep apnoea and/or osteoarthritis) or BMI ≥ 40; "De behandeling dient te worden gestaakt
      indien na 3 maanden gebruik van de onderhoudsdosering het aanvankelijke gewicht niet met ten minste 5% is
      afgenomen". Saxenda is listed in bijlage 1.
    - Item 147 "Bupropion met naltrexon": adults with a GLI not successful after 1 year, BMI ≥ 30, or BMI 27–30 with a
      comorbidity; stop if less than 5% weight loss after four months.
    - Wegovy and Zepbound do not appear in the Regeling.
    Source: `nl-regeling-zorgverzekering-bijlage-2-glp1` (new). Earlier copies via the FK:
    `fk-regeling-zorgverzekering-bijlage-2`, `fk-regeling-zorgverzekering-bijlage-2-tirzepatide`.
58. **Farmacotherapeutisch Kompas status** (27 October 2026): semaglutide: Ozempic and Rybelsus "Bijlage 2", Wegovy
    "XGVS" ("Dit geneesmiddel is niet opgenomen in het geneesmiddelen vergoedings systeem (GVS)"); tirzepatide: Mounjaro
    "Bijlage 2", with a "ZIN-rapport 2026" on type 2 diabetes with very high cardiovascular risk; liraglutide: Victoza,
    Saxenda and the generics "Bijlage 2" (ZIN reports 2022 on Saxenda). Sources: `fk-semaglutide`, `fk-tirzepatide`
    (re-fetched), `fk-liraglutide` (new).
59. **So, for weight management on 27 October 2026:** Wegovy (semaglutide) and Mounjaro (tirzepatide) are not
    reimbursed; liraglutide and naltrexone/bupropion can be, under the strict bijlage-2 conditions (fact 57). NHG: "Op
    dit moment komt semaglutide niet in aanmerking voor vergoeding bij de indicatie obesitas. Informeer patiënten ...
    die kiezen voor semaglutide op eigen kosten, dat het niet gegarandeerd is dat zij in aanmerking komen voor
    vergoeding in de toekomst"; switching to another medicine keeps reimbursement only if the new medicine's conditions
    are met at its start. Sources: `nl-regeling-zorgverzekering-bijlage-2-glp1`, `fk-semaglutide`,
    `nhg-2025-gewichtsreducerende-medicatie` (nl-help).
60. **The Zorginstituut assessments of Wegovy and Mounjaro for obesity are still open.** Werkagenda pages (both modified
    27 October 2026, 08:26–08:27): staged approach, first two groups, "mensen met een BMI vanaf 30 met ziektes die
    daarmee samenhangen, en mensen met een BMI vanaf 35"; Wegovy dossier complete July 2026, Mounjaro March 2026; first
    WAR discussion 5 October 2026; technical consultation "naar verwachting begin november 2026" ("Was 12 - 18 oktober
    2026 ... meer tijd nodig"); second WAR, ACP and publication "nog niet bekend". "Als wij positief adviseren en de
    minister van Volksgezondheid, Welzijn en Sport (VWS) ons advies overneemt, komt [het middel] in het GVS. Alleen dan
    wordt dit medicijn vergoed". Sources: `zin-wegovy-reassessment` (semaglutide.yaml), `zin-tirzepatide-obesity-assessment`
    (tirzepatide.yaml).
61. **Background figures** (ZIN news 6 November 2025): EMA criteria cover 4.1 million people in the Netherlands, "De
    kosten kunnen daardoor in theorie oplopen tot 10 miljard euro per jaar"; the 2024 practical estimate was € 1,3
    billion a year; the two groups now assessed are "naar schatting ruim 1 miljoen"; the GLI requirement "zal blijven
    gelden". ZIN 16 July 2024: advice to Minister Agema not to reimburse Wegovy; "bewezen effectief" for weight; inclusion
    "maatschappelijk niet te verantwoorden"; costs "kunnen oplopen tot 1,3 miljard euro per jaar"; the global
    semaglutide shortage was an extra consideration. Sources: `zin-2025-obesity-staged-approach`,
    `zin-2024-wegovy-not-reimbursed` (semaglutide.yaml).
62. **No 2027 decision on obesity medicines was found.** Neither the Prinsjesdag page nor the VWS draft budget 2027
    mentions reimbursing obesity medicines (the budget mentions prevention and the "ketenaanpak"). See §5. *(Fact-check
    27 October 2026: the versions of the Regeling zorgverzekering already published on wetten.overheid.nl for
    1 January 2027 and 1 August 2027 leave bijlage 2 items 58, 141, 146, 147 and 194 word for word unchanged, and
    neither names Wegovy or Zepbound. The scheduled 2027 changes concern other articles (2.29a–2.37) and another
    bijlage 2 item. Source: `nl-regeling-zorgverzekering-bijlage-2-glp1`; the 2027 versions are at
    wetten.overheid.nl/BWBR0018715/2027-01-01 and /2027-08-01.)*
63. **GLI** (Zorginstituut, modified 29 May 2026): a 2-year programme; eligible with BMI 25–35 plus a large waist (women
    ≥ 88 cm, men ≥ 102 cm) or a weight-related disease, or BMI ≥ 35; "De huisarts stelt vast of u een GLI kan krijgen";
    the programme must be on the RIVM's Loket Gezond Leven; "U betaalt geen eigen bijdrage voor een GLI"; "De kosten
    voor een GLI vallen niet onder het verplicht eigen risico"; BMI < 25 not reimbursed. NHG: "Sinds 2019 vergoeden
    zorgverzekeraars de GLI". Sources: `zin-gli-zvw` (new), `nhg-standaard-obesitas-2025`.
64. **What the NHG standard says about obesity medicines** (October 2025, last change August 2026): consider medication
    at BMI 35–39.9 with a weight-related comorbidity, or BMI ≥ 40; prescribe only to patients who took part in a GLI
    with motivation for at least a year with ≤ 10% weight loss and keep up the lifestyle; stop at < 5% weight loss after
    12 weeks at the maximum tolerated dose; no medication over 75 or in pregnancy or breastfeeding; consider tapering to
    a trial stop after 2 years. Recommended: subcutaneous liraglutide or semaglutide, or naltrexone/bupropion. "Semaglutide
    oraal wordt niet aanbevolen vanwege beperkt bewijs. Tirzepatide (GIP/GLP1-agonist) wordt afgeraden omdat hier nog
    nauwelijks ervaring mee opgedaan is, er nog te veel onzekerheid is over de veiligheid en de kosten zeer hoog zijn."
    Source: `nhg-standaard-obesitas-2025` (new; read in the browser, richtlijnen.nhg.org refuses scripts).
65. **Trial medicines are free to participants** (fact 42); an artsenverklaring medicine is not automatically
    reimbursed (fact 27).

### K. Shortages of GLP-1 medicines

66. **Ozempic: shortage over since 2 December 2024.** CBG news item of 17 March 2023 with updates (last modified 20
    January 2025): "De startdosering van Ozempic is per 2 december 2024 weer beschikbaar in Nederland. Het tekort is
    daarmee opgelost." No newer CBG shortage notice for a GLP-1 medicine was found. Source: `cbg-ozempic-shortage`
    (semaglutide.yaml).
67. **Liraglutide: a current shortage of one product.** KNMP Farmanco, read 27 October 2026: one liraglutide 6 mg/ml pen
    for obesity and overweight is in short supply, "Reden van tekort: Verhoogde vraag", expected date "onbekend"; page
    last updated 27 August 2026. The diabetes liraglutide pen page (updated 3 July 2026) lists no product in shortage.
    Farmanco's list of current shortages (271 entries) has no entry for semaglutide, tirzepatide or dulaglutide.
    *(Fact-check: the list still carries the diabetes liraglutide pen entry, although its page shows no product in
    shortage; do not write that diabetes liraglutide is off the list.)* Source: `farmanco-liraglutide-obesitas-tekort`
    (new).
67a. *(Added by the fact-check.)* **IGJ warning of 20 October 2026:** stolen insulin pens are being offered, "die
    mogelijk ook worden gepresenteerd als obesitasmedicatie"; use can be life-threatening. Useful on the semaglutide and
    tirzepatide pages (a pen sold as a weight-loss medicine may be something else). Already registered by topic nl-help:
    `igj-2026-10-gestolen-medicijnen` (re-read 27 October 2026, issued 20 October 2026). The IGJ lists no shortage exemption for a GLP-1 medicine
    (fact 28).

### L. Facts behind the Dutch proposals on the reform page (re-checked)

68. **IGJ and CBG warning of 3 September 2025** (page modified 24 November 2025): illegal online offers increase,
    especially for obesity and type 2 diabetes; "Dat kan levensgevaarlijk zijn." Source:
    `igj-2025-illegal-online-medicines` (safety-b.yaml).
69. **Lareb:** "Iedereen kan een bijwerking bij ons melden", "Met én zonder recept, dus ook medicijnen die je koopt bij
    de drogist, supermarkt of via internet"; "Nee, wij delen jouw melding niet met jouw arts of apotheker." Lareb 2021:
    "Zowel zorgverleners als gebruikers van illegale geneesmiddelen kunnen bij Bijwerkingencentrum Lareb terecht om
    bijwerkingen te melden." Sources: `lareb-bijwerkingen-melden` (safety-a.yaml), `lareb-2021-illegal-medicines`
    (safety-b.yaml).
70. **DIMS** (Trimbos page modified 29 May 2026): coordinated by the Trimbos-instituut; "een landelijk netwerk van
    twaalf deelnemers met 34 testlocaties"; "In 2025 leverden gebruikers bij het DIMS ruim 17.500 drugsmonsters in";
    founded 1992 (history page). DIMS does not test medicines or steroids ("Ook testen wij geen steroïden, geen
    medicijnen", nl-help). The 2011 figures stay as evidence. Sources: `trimbos-dims-monitoring` (new), `dims-welke-drugs`
    (nl-help), `brunt-2011-dims`.
71. **First "anabolenpoli", 2010:** "richtte hij in 2010 – met de Dopingautoriteit in een adviserende rol – de eerste
    Nederlandse 'anabolenpoli' op." Source: `dopingautoriteit-2025-harm-reduction-chair` (guides.yaml).
72. **Dutch law is written around trade and advertising** (Gnw art. 40(1)–(2), art. 84(1) "Reclame voor dan wel
    gunstbetoon met betrekking tot een geneesmiddel waarvoor geen handelsvergunning is verleend, is verboden", art. 85;
    administrative fines up to the sixth category, € 1.100.000 since 1 January 2026). Sources:
    `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-84-85-advertising`, `nl-gnw-art-101-fines`,
    `rijksoverheid-fine-categories-2026` (legal-a.yaml; amounts re-read today). Enforcement detail: topic nl-law.
73. **Compassionate use only through a manufacturer** (facts 36, 38). Sources: `cbg-compassionate-use-criteria`,
    `cbg-cup-vragen-en-antwoorden`.
74. **Guidance for doctors, Dutch analogue:** the NHG now tells GPs how to act when a patient obtained a weight-loss
    medicine elsewhere (fact 12). It is about authorised medicines, not unlicensed peptides. Source:
    `nhg-2025-gewichtsreducerende-medicatie` (nl-help).

### M. Dutch law history (history/how-we-got-here)

75. **Wet op de Geneesmiddelenvoorziening, 28 July 1958** (Stb. 1958, 408): register of packaged medicines; art. 37
    leaves commencement to a later royal decree. Source: `nl-wog-1958` (history.yaml).
76. **The registration duty took effect in 1963.** Explanatory memorandum to the Geneesmiddelenwet (Kamerstukken II
    2003/04, 29 359, nr. 3, dated 10 December 2003; *fact-check: not 2004*): "Sinds de inwerkingtreding van de WOG in 1963 is het verboden een geneesmiddel voor de
    eerste keer in het handelsverkeer te brengen zonder voorafgaande registratie (= handelsvergunning) van een bevoegde
    autoriteit. Enkele andere Europese landen waren Nederland daarin reeds voorgegaan." "Het College ter beoordeling van
    geneesmiddelen (CBG) is ingesteld bij de WOG in 1963"; "Het College bestaat als zelfstandig bestuursorgaan (ZBO)
    reeds sinds 1963". The memorandum gives the year, not the day. Source: `nl-mvt-2003-geneesmiddelenwet` (new;
    renamed by the fact-check from `nl-mvt-2004-geneesmiddelenwet`).
77. **Geneesmiddelenwet:** "Wet van 8 februari 2007" (Stb. 2007, 93; Kamerstuk 29 359), in force 1 July 2007 (Stb.
    2007, 227); art. 132: "De Wet op de Geneesmiddelenvoorziening wordt ingetrokken." Current version in force from
    9 September 2025. Sources: `nl-geneesmiddelenwet-2007-version` (history.yaml; informatie page re-read today),
    `nl-geneesmiddelenwet` (shared.yaml).

---

## 2. What changed since 23 October 2026

Compared with the saved pages (`research/for-nl-site/snapshot-2026-10-23/content/pages-en/legal-routes.mdx`,
`talking-to-your-doctor.mdx`, `start-here.mdx`, `the-case-for-reform.mdx`, `history/how-we-got-here.mdx`), the
manifests and the research of 20–22 October (`research/legal-a.md`, `guides.md`, `semaglutide.md`, `tirzepatide.md`,
`history.md`, `history-landing.md`).

**Still true (re-checked, no change):** Gnw arts. 1, 18, 40, 61, 67, 68, 84, 85 (version 9 September 2025); Regeling Gnw
arts. 3.17, 3.17a, 3.18 (1 January 2026); WGBO arts. 448–457 (8 October 2026); Wet BIG (5 July 2025); IGJ
artsenverklaring page (8 weeks, about 4; three steps); IGJ Q&A (applicants, BIG doctor, patient code, 1 year, IB/IMPD,
GMP, "uiterste gevallen", "terughoudend", "omzeilen", Lareb); IGJ off-label position (February 2026, May 2026); IGJ
pharmacy-preparation page; CBG CUP criteria and list (none of the site's compounds); CCMO pages; ClinicalTrials.gov
counts of 22 October (retatrutide 2; elamipretide 3, finished; others 0); Zorginstituut planning for Wegovy and
Mounjaro (consultation "begin november 2026"); Ozempic shortage resolved 2 December 2024; bijlage-2 conditions for
semaglutide (item 146) and tirzepatide (item 194); Wegovy XGVS; Lareb, Thuisarts, KNMG, Dopingautoriteit facts; WOG 1958
and Geneesmiddelenwet 2007 dates.

**New or different:**
1. **Elamipretide: a Dutch authorisation since 27 July 2026** (4TAZPower, Barth syndrome; not yet recruiting). The saved
   legal-routes KeyNumber detail said elamipretide "had three Dutch trials, all finished". Now: three finished, plus one
   authorised but not yet recruiting (CTIS, OMON). It is invisible on ClinicalTrials.gov, which lists no Dutch site.
2. **Thymosin alpha-1 (thymalfasin): one Dutch WMO-approved study registered** (NL-OMON51992, status "Werving nog niet
   gestart", record from 2022). The saved claim "none running for ... the other experimental peptides" stays defensible
   (nothing is known to be running), but "no trial registered" would be wrong for thymalfasin.
3. **Retatrutide trial statuses moved:** SYNERGY-Outcomes started in the Netherlands (start-of-trial 22 September 2026;
   Utrecht recruiting); TRIUMPH-Outcomes is "Werving gestopt" in OMON. The saved KeyNumber ("one was still recruiting")
   still holds; write it with today's statuses and say both are for specific patient groups.
4. **OMON now includes all CTIS trials (since May 2026).** The saved text named "Onderzoekmetmensen.nl, the EU's public
   trial website, or ClinicalTrials.gov"; OMON alone now covers every Dutch trial that needs review (with possibly
   outdated statuses).
5. **The IGJ's term is "ontheffing" (since 9 September 2025)**, not "toestemming"; the saved English said "exemption",
   which is fine; Dutch text must use ontheffing (and vrijstelling only for the 3.17a shortage route).
6. **Artsenverklaring details not on the saved page:** spoedprocedure for life-threatening situations; one application
   per medicine and per indication; declaration in Dutch, by a BIG-registered doctor; an ontheffing does not mean
   reimbursement; a patient who does not qualify for a trial can be helped this way; IB/IMPD needed even for an
   FDA-approved product when trial material is imported.
7. **Internet prescribing:** the saved pages said, from art. 67 alone, that "No one may prescribe online to someone they
   have never met". That is now **incomplete and misleading**: since April 2023 a ministerial policy rule tolerates it
   when no physical examination is needed and the prescriber has the up-to-date medication history (IGJ page of
   July 2026). Rewrite `#recept` and the prescribing-routes diagram row ("An online prescription from a doctor you never
   met: No").
8. **Who prescribes:** the saved semaglutide page said "usually your GP (huisarts) or a specialist" (open question 5 in
   semaglutide.md). Now answered from Wet BIG art. 36(14) and KNMG: doctors, dentists, midwives, physician assistants,
   verpleegkundig specialisten, and diabetes nurses (glucose-lowering medicines only, after a doctor's diagnosis).
9. **GP and weight-loss medicines:** prescribing them is "facultatief" for GPs (NHG, October 2025); some GPs do, some do
   not (Thuisarts); GPs are told how to handle medicines obtained elsewhere (NHG). Not on the saved pages.
10. **Liraglutide and naltrexone/bupropion are reimbursed for obesity under strict conditions** (bijlage 2 items 141c and
    147). The saved semaglutide/tirzepatide pages said only that Wegovy and Mounjaro are not reimbursed; they never said
    that one GLP-1 medicine (liraglutide) can be. Add it where the pages explain the Dutch gap, so readers are not told
    that no obesity medicine is ever reimbursed.
11. **NHG-Standaard Obesitas wording** now read directly: tirzepatide "wordt afgeraden" (little experience, safety
    uncertainty, very high costs), oral semaglutide "niet aanbevolen". The saved tirzepatide page cited this via the FK;
    the wording matches. Last change of the standard: August 2026.
12. **Eigen risico 2027: € 400** (fixed by the ministerial regulation of 25 September 2026, Stcrt. 2026, 34372, in force
    1 January 2027, as found by the fact-check; announced on Prinsjesdag, 15 September 2026; the planned extra € 60
    postponed to 2028; tranchering € 150 per treatment from 2028, both still plans). Nothing about 2027 was on the
    saved pages; the saved pages used no amount.
13. **WOG commencement now dated:** the saved history fold said "We could not confirm when the register started to
    work." The government's explanatory memorandum (10 December 2003) says the WOG registration duty took effect "in 1963" and the CBG
    was set up then. Update the fold and the TimeStrip (the act is of 1958; registration from 1963).
14. **CUP policy MEB 49:** approval is now indefinite (until authorisation), not one year; CUPs are national only; no
    CUP for a new indication. Not on the saved pages (they were not wrong).
15. **Liraglutide shortage:** one liraglutide obesity pen is in shortage (Farmanco, 27 August 2026). Not on the saved
    pages.
16. **DIMS figures:** 12 participants, 34 test locations, more than 17,500 samples in 2025 (Trimbos, May 2026); DIMS does
    not test medicines or steroids (nl-help). The saved reform fold used only the 2011 figure ("more than 100,000 samples
    ... by 2011"); keep it as history, add the current scale, and note that medicines are out of scope, which strengthens
    the proposal.
17. **CBG GLP-1 position:** modified 3 March 2026; the quoted wording is unchanged.
18. **Zorginstituut Wegovy dossier:** the werkagenda now says the Wegovy dossier was complete in July 2026 (the saved
    research gave no date). The planning dates are otherwise unchanged.
19. **KNMG guidance on video consultations (2021)** refers to a temporary arrangement that ended; do not use it for the
    current online-prescribing rule.

**Saved facts that are now wrong:** item 7 above (internet prescribing stated as an absolute "no"); the history fold's
"We could not confirm when the register started to work" (now dated 1963); and any reuse of "elamipretide: all Dutch
trials finished" without the 2026 authorisation.

---

## 3. Verification log (all on 27 October 2026)

wetten.overheid.nl (curl, HTTP 200, HTML to text, article by article):
- `https://wetten.overheid.nl/BWBR0021505/` → redirects to `/2025-09-09`, "Geldend van 09-09-2025 t/m heden". Read
  arts. 1(1)(pp) and (s), 18(6)(a), 40, 61, 67, 67a, 68, 84 (quotes in §1).
- `https://wetten.overheid.nl/BWBR0021505/2007-07-01/0/informatie` (200): "Datum inwerkingtreding: 01-07-2007",
  "Inwerkingtredingsbron: Stb. 2007, 227", "08-02-2007 Stb. 2007, 93 29359"; `/2007-07-01` art. 132 "De Wet op de
  Geneesmiddelenvoorziening wordt ingetrokken."
- `https://wetten.overheid.nl/BWBR0022160/` → `/2026-01-01`, "Geldend van 01-01-2026 t/m heden": arts. 3.17, 3.17a, 3.18.
- `https://wetten.overheid.nl/BWBR0006251/` → `/2025-07-05`: art. 36(5) and (14), art. 36a.
- `https://wetten.overheid.nl/BWBR0005290/` → `/2026-10-08`, "Geldend van 08-10-2026 t/m heden": arts. 7:448–457, 460.
- `https://wetten.overheid.nl/BWBR0037173/` → `/2026-01-01`: Wkkgz art. 2a (only to understand 7:453(2)).
- `https://wetten.overheid.nl/BWBR0009408/` → `/2025-01-01`: WMO arts. 1(o), 2, 6, 7.
- `https://wetten.overheid.nl/BWBR0018715/` → `/2026-10-06`, "Geldend van 06-10-2026 t/m heden": bijlage 2 items 58, 141,
  146, 147, 194 (quotes in §1, fact 57); bijlage 1 entries for Saxenda, Victoza, Ozempic, Rybelsus, Trulicity, Mounjaro;
  no Wegovy or Zepbound.
- `https://wetten.overheid.nl/BWBR0048048/` → `/2023-04-12`, "Geldend van 12-04-2023 t/m heden": Beleidsregel
  voorschrijven via internet, art. 2 (found through the official SRU service zoekservice.overheid.nl).
- `https://zoek.officielebekendmakingen.nl/stcrt-2023-10521.html` (200): the same policy rule as published (signed by
  Minister Kuipers, 27 March 2023). Not cited (host not allowlisted); the wetten.overheid.nl text is cited.
- `https://repository.overheid.nl/frbr/officielepublicaties/kst/29359/kst-29359-3/1/pdf/kst-29359-3.pdf` (200, PDF,
  pdftotext): "Tweede Kamer, vergaderjaar 2003–2004, 29 359, nr. 3", section 3 and 4.3 (quotes in fact 76).

igj.nl (curl, 200; dates from DCTERMS metadata):
- `/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/leveren-op-artsenverklaring` (issued 2024-12-27,
  modified 2026-02-06): "Sinds 9 september 2025 gebruikt de ... (IGJ) de term 'ontheffing'"; "Wettelijke behandeltermijn:
  8 weken ... ongeveer 4 weken"; "Spoedprocedure".
- `/documenten/vraag-en-antwoord/vragen-over-afleveren-geneesmiddelen-zonder-handelsvergunning` (issued 2026-08-11,
  modified 2026-08-20): quotes in facts 23–28.
- `/documenten/2026/02/03/standpunt-igj-off-label-voorschrijven` (issued 2026-02-03, modified 2026-05-13) and its PDF
  `.../geactualiseerd-standpunt-igj-off-label-voorschrijven-mei-2026.pdf` (200, 367 kB; the step plan uses a shifted
  font encoding, decoded by adding 29 to each character code; text then read): quotes in facts 14–16.
- `/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/eigen-bereidingen-apotheek` (2025-07-08): quotes in
  fact 30.
- `/onderwerpen/themas-in-het-toezicht/medicatieveiligheid/medicijnen-voorschrijven-via-internet` (issued 2023-04-28,
  modified 2026-07-14): quotes in fact 11.
- `/zorgsectoren/geneesmiddelen/beschikbaarheid-van-geneesmiddelen/overzicht-vrijstellingsbesluiten` (modified
  2026-10-26): text-searched for semaglutide, liraglutide, tirzepatide, dulaglutide, Ozempic, Victoza, Saxenda,
  Mounjaro, Trulicity, GLP: 0 hits.
- `/onderwerpen/medicijnen/online-medicijnen` (modified 2026-03-23): "geen controle op deze medicijnen, zoals dat wel
  gebeurt als u via uw arts of apotheker een medicijn krijgt"; "te veel werkzame stof ... te weinig of misschien
  helemaal geen".
- `/actueel/nieuws/2025/09/03/igj-en-cbg-waarschuwen-voor-illegaal-online-aanbod-medicijnen` (modified 2025-11-24):
  "levensgevaarlijk" present.

cbg-meb.nl (curl, 200):
- CUP page (issued 2024-12-19, modified 2025-10-22): three criteria; "moet worden ingediend door een
  geneesmiddelenfabrikant".
- CUP list `/overzicht-goedgekeurde-cup` (modified 2026-07-10): 43 programmes; text search as in fact 39.
- CUP Q&A (issued 2024-12-01, modified 2025-01-14) and news 19 December 2024 (modified 2025-02-14): MEB 49, indefinite
  approval, manufacturer only, NL only, no new indication.
- Ozempic shortage news (issued 2023-03-17, modified 2025-01-20): "Het tekort is daarmee opgelost" (2 December 2024).
- GLP-1 standpunt (issued 2025-02-20, modified 2026-03-03): quotes in fact 19.

zorginstituutnederland.nl (curl, 200):
- Werkagenda Wegovy (issued 2026-07-21, modified 2026-10-27) and Mounjaro (issued 2026-03-19, modified 2026-10-27):
  planning tables quoted in fact 60.
- News 6 November 2025 and 16 July 2024: quotes in fact 61.
- GLI (Zvw) (modified 2026-05-29); Geneesmiddelen (Zvw) (modified 2026-06-04): "Voor geneesmiddelen geldt het eigen
  risico", "maximaal € 250"; Eigen risico (Zvw) (modified 2026-03-31): "Voor 2026 is het verplichte eigen risico € 385";
  Huisarts (Zvw) (modified 2025-07-24): "De kosten voor huisartsenzorg vallen niet onder het verplichte eigen risico."

rijksoverheid.nl (curl, 200):
- `/themas/overheid-en-democratie/prinsjesdag/zorg` (issued 2026-09-15): "stijgt van € 385 naar € 400"; "€ 169 per maand".
- `/documenten/vraag-en-antwoord/zorgverzekering/eigen-risico-zorgverzekering` (modified 2026-07-28): € 385; exemptions.
- `/documenten/begrotingen/2026/09/15/xvi-volksgezondheid-welzijn-en-sport-rijksbegroting-2027` → PDF
  `16-volksgezondheid-welzijn-en-sport.pdf` (200, 1.6 MB, pdftotext): "37 020 XVI ... Nr. 2", p. 20 (fact-check; p. 19 before) and the budget tables
  ("Uitstel naar 2028 van CA 35 (Verhoging eigen risico met 60 euro)").
- `/documenten/vraag-en-antwoord/straffen-en-maatregelen/hoe-hoog-zijn-de-boetes-in-nederland`: 27.500, 110.000,
  1.100.000 present.

Other official and professional pages (curl, 200 unless stated):
- tweedekamer.nl bill 36943 page: submitted 12 May 2026; last activity 24 June 2026 "Agenderen voor plenair debat"; the
  RvS advice text (Stcrt. 2026, 20489, read on zoek.officielebekendmakingen.nl) gives "€ 455" for 2027. Not cited (hosts
  not allowlisted); used only to describe the bill's status.
- eerstekamer.nl copy of the Algemene Rekenkamer letter of 22 September 2026 on the VWS draft budget 2027 (PDF):
  "In de begrotingsonderhandelingen heeft het kabinet besloten de verhoging van het eigen risico met € 60 een jaar uit te
  stellen." Corroboration only; not cited.
- zoek.officielebekendmakingen.nl kv-1256839 (PDF): Kamervragen 2026Z15019 (Coenradie, JA21, 30 June 2026) on weight-loss
  medicines outside regular care. No answer found. Not cited.
- ccmo.nl: background page (issued 2026-05-27, modified 2026-07-27) and IVO page (issued 2025-10-28, modified
  2026-05-19), quotes in facts 42–43; WMO page (modified 2021-06-01), context only.
- ema.europa.eu Clinical Trials Regulation page: dates in fact 44 unchanged.
- onderzoekmetmensen.nl: home page (curl, 200): the CTIS sentence of fact 45. Search pages answer "Geen toegang" to curl
  and WebFetch (403); searched in the built-in browser (own tab): "retatrutide" → "2 resultaten op retatrutide"; the other
  terms via the site's own search URL from that session (counts in fact 49). Trial pages NL-OMON60031, 61112, 61412, 51992,
  51595, 45920, 45900 re-read with curl (200): statuses and dates in facts 46–48.
- euclinicaltrials.eu CTIS public API (POST `/ctis-public-api/search`, member state filter 528 = the Netherlands, checked
  against the returned "trialCountries"; GET `/ctis-public-api/retrieve/<EU CT>`): 2025-522674-36-00 (authorised; NL
  decision 2026-02-04; NL START_OF_TRIAL 2026-09-22; 7 NL sites), 2025-523837-25-00 (authorised; NL "trialStatus":
  "Authorised" 2026-07-27; NL events empty; NL site Amsterdam UMC), 2023-507311-35-00 (ended); 2023-508630-34-00 returned
  an empty record. Public pages `https://euclinicaltrials.eu/search-for-clinical-trials/?lang=en&EUCT=...` answer 200.
- clinicaltrials.gov API v2 (`query.intr=<name>&query.locn=Netherlands`, one name per query; and `query.cond=Barth`):
  counts in facts 46, 47, 49; NCT07165028 and NCT06383390 location lists; NCT07531251 countries Canada, UK, US.
- farmacotherapeutischkompas.nl preparaatteksten semaglutide, tirzepatide, liraglutide: statuses in fact 58.
- farmanco.knmp.nl home page (list of current shortages) and `/geneesmiddel/4455.html`, `/geneesmiddel/4621.html`:
  quotes in fact 67.
- knmp.nl `/richtlijnen/bereiden` ("Geautoriseerd in mei 2016") and `/dossiers/apotheekbereiding/veelgestelde-vragen-over-bereiding`
  (items "Laatst bijgewerkt op 05 maart 2024"): quotes in facts 32–33.
- knmg.nl: "Wie mogen geneesmiddelen voorschrijven?" (pubdate 2020-12-16), "wanneer doorbreken" (date 2024-01-26),
  second-opinion dilemma; PDF "KNMG-handreiking Videoconsulten" (8 July 2021): refers to art. 67 and a temporary
  measure "tot 1 januari 2022"; context only, not cited.
- nhg.org: "Praktijksituaties gewichtsreducerende medicatie" (no machine date; text "oktober 2025"); news "Toename
  illegale online-verkoop medicijnen" (4 November 2025), context only.
- richtlijnen.nhg.org: curl and WebFetch get HTTP 401; read in the built-in browser (a passive "Beveiligingscontrole"
  page cleared by itself after a few seconds; no CAPTCHA was solved; the cookie banner was left untouched): NHG-Standpunt
  off-label ("Laatst gewijzigd: januari 2018") and NHG-Standaard Obesitas ("Gepubliceerd: oktober 2025 Laatste aanpassing:
  augustus 2026"), quotes in facts 17 and 64.
- thuisarts.nl: "Ik ga naar de huisarts" (19 April 2024); "Ik ben veel te zwaar en krijg daarvoor misschien medicijnen
  van de huisarts" (4 November 2025): quote in fact 8; "Ik ben veel te zwaar (obesitas)" (31 August 2026), context.
- bigregister.nl "Over het BIG-register" (modified 2025-06-18): quotes in fact 5.
- lareb.nl reporting page and 2021 news; dopingautoriteit.nl 4 July 2025 news; trimbos.nl DIMS monitoring page
  (modified 2026-05-29) and history page (2022): quotes in facts 69–71. The old Trimbos URL
  `/kennis/drugs/drugs-informatie-en-monitoring-systeem-dims/` returns 404.
- Web searches (no source of their own): eigen risico 2027 (commercial comparison sites gave € 400 and the postponement;
  replaced by the official pages above); CBG/KNMP shortage news 2026 (none found); EDQM semaglutide monograph (nothing
  found); IGJ peptide warning 2026 (nothing found); 2027 basispakket letter (none found).

---

## 4. Conflicts and how resolved

1. **Eigen risico 2027: € 400, € 455 or € 460?** The bill 36 943 and its Raad van State advice (May–June 2026) give
   € 455 (indexation plus € 60); some press says € 460; the Prinsjesdag page and the VWS draft budget (15 September 2026)
   say € 400, with the € 60 step postponed to 2028. Resolved: € 400 as the cabinet's plan, with the postponement, and
   no claim that it is law yet (§5). *Fact-check 27 October 2026: now settled in law. The regulation of 25 September
   2026 (Stcrt. 2026, 34372) sets € 400 from 1 January 2027 (Zvw art. 19(1) as of that date); € 400 may be stated as
   the 2027 amount.*
2. **Internet prescribing: statute vs policy rule.** Art. 67 forbids it; the 2023 policy rule tolerates it under two
   conditions. Resolved: say both (the law forbids it; the minister does not enforce when the two conditions are met).
3. **Policy rule start date:** IGJ says 11 April 2023; wetten.overheid.nl shows the version "Geldend van 12-04-2023". The
   rule enters into force the day after publication. Resolved: write "april 2023".
4. **Elamipretide in the Netherlands: ClinicalTrials.gov vs CTIS/OMON.** NCT07531251 lists no Dutch site; CTIS and OMON
   show a Dutch authorisation and site. Resolved: use CTIS/OMON for Dutch status (the legal register for EU trials), and
   cite both.
5. **"Artsenverklaring" has two meanings.** The IGJ's named-patient declaration (`#artsenverklaring`) vs the insurers'
   authorisation forms for bijlage-2 medicines, which the NHG calls "ZN-machtigingen (artsenverklaring)". Resolved: on
   the routes page, artsenverklaring means only the IGJ route; for insurance say "machtiging van je zorgverzekeraar".
   Add a line to `docs/STYLE-NL.md` (writers' task).
6. **Thymalfasin trial status.** OMON says "Werving nog niet gestart" (record from 2022, last update 2025, source
   ToetsingOnline) and warns statuses can be outdated. Resolved: report the registration and say the status is not
   known.
7. **Who may prescribe vs "your GP or specialist".** The saved text was a simplification; Wet BIG lists more professions.
   Resolved: the pages can say "meestal je huisarts of een specialist" and, where precise, list the others with the
   limits from fact 4.
8. **OMON search vs other registries.** OMON free-text search returns fuzzy matches for short names (for example 8,902
   results for "KPV"). Resolved: rely on exact-name hits plus ClinicalTrials.gov and CTIS; record the method.
9. **CBG "standpunt" date.** The page shows no date in the text; metadata: issued 20 February 2025, modified 3 March 2026.
   The registered source (`cbg-glp1-position`) has year 2026: fine.

---

## 5. UNRESOLVED (state as unknown, or leave out)

1. ~~**The legal instrument fixing the 2027 eigen risico at € 400** was not found.~~ **Resolved by the fact-check of
   27 October 2026:** Regeling van de Minister van VWS van 25 september 2026 (Stcrt. 2026, 34372), in force 1 January
   2027; Zvw art. 19(1) from that date reads € 400 (`nl-zvw-art-19-eigen-risico-2027`). Write "In 2027 is het eigen
   risico € 400". Still plans, not law: the extra € 60 in 2028 (bill 36 943 pending) and the € 150 tranchering from
   2028.
2. **The 2027 basispakket letter (pakketbrief)** and any 2027 change for obesity medicines: not found. Say nothing about
   2027 reimbursement of Wegovy or Mounjaro; say the Zorginstituut assessment is still running (fact 60).
3. **When the Zorginstituut will publish its advice on Wegovy and Mounjaro**, and what the minister will decide:
   "nog niet bekend".
4. **Answers to Kamervragen 2026Z15019** (weight-loss medicines outside regular care, NVIC/Lareb figures): not found.
5. **European Pharmacopoeia monographs** for semaglutide, tirzepatide, BPC-157 or any other peptide on this site: not
   verified (EDQM knowledge database not reached). Do not claim that a monograph exists or does not exist; quote the IGJ
   rule instead.
6. **Whether the thymalfasin study NL-OMON51992 ever started or is running:** unknown.
7. **Whether 4TAZPower (elamipretide) will recruit in the Netherlands, and when:** unknown (authorised; no start
   notified).
8. **The exact day the WOG registration duty took effect in 1963:** not found (only the year, from the 2004
   memorandum).
9. **No NHG or KNMG guidance specifically on patients who use unlicensed peptides** was found again (searches limited to
   nhg.org, richtlijnen.nhg.org, knmg.nl and thuisarts.nl, 27 October 2026). State it as "we vonden geen", with the date;
   the NHG guidance on weight-loss medicines obtained elsewhere (fact 12) is the nearest.
10. **The formal minister's decision on the 2024 Wegovy advice** was not looked up separately; what is certain is that
    Wegovy is not in the GVS (FK "XGVS", not in the Regeling).
11. **Whether an artsenverklaring can ever be used for a substance authorised nowhere and without IB/IMPD and GMP
    proof** (for example BPC-157): the IGJ does not say. The pages must not say it can; they can say what the IGJ asks
    for and that a research vial does not come with those papers (our reading, as on the saved page).

---

## 6. Open questions for the legal or medical reviewer

1. **Internet prescribing:** is "de wet verbiedt het, maar de minister treedt niet op als ..." a fair B1 summary of
   art. 67 plus the 2023 policy rule? Should the page mention that ordinary telephone consultations fall outside art. 67?
2. **What a doctor may refuse:** is it fair to say a doctor need not prescribe on request because the professional
   standard (art. 7:453) governs prescribing, and that a doctor may end the relationship only for "gewichtige redenen"
   (art. 7:460)? Should 7:460 appear on talking-to-your-doctor at all (reassurance that disclosure will not end care)?
3. **Pharmacy preparation reimbursement:** may we write that a pharmacy-made version of a medicine that is not
   reimbursed for that use (semaglutide for weight) is itself not reimbursed (KNMP FAQ, Besluit zorgverzekering)?
4. **Recept from another EU state:** is it accurate at B1 that a prescription from a prescriber in another EU country
   is valid in a Dutch pharmacy (art. 1(1)(pp)), and should the page add that the pharmacist still checks it?
5. **No "medical need programme" in the Netherlands:** confirm our reading of art. 40(3).
6. **Off-label for an obesity medicine** (for example Ozempic, authorised for diabetes, prescribed for weight): the NHG
   standard recommends subcutaneous semaglutide for obesity (that is Wegovy, on-label); is Ozempic for weight "a standard
   that allows it" or off-label without a standard? The CBG says off-label only with a professional guideline. Please
   advise before the semaglutide page says anything about this.
7. **Medical reviewer:** is "huisarts mag gewichtsverlagende medicijnen voorschrijven, maar het hoeft niet (facultatief)"
   a fair plain reading of the NHG standard? Is the NHG's "geen verantwoordelijkheid voor periodieke controles bij elders
   verkregen medicatie" safe to quote on a page for people who use unlicensed products (it concerns authorised
   medicines obtained via online prescribers)?
8. **Trials for specific groups:** may the routes page name SYNERGY-Outcomes and 4TAZPower (disease, phase, status) as
   examples, given that both are sponsored by companies? The names are trial acronyms, not company names; the CTIS
   records name the sponsors.

---

## 7. Suggested data changes

**`src/data/jurisdictions.yaml` (NL card).** No new help-service entry from this topic (help services: nl-help). The
existing NL `regulator`, `inspectorate`, `reporting`, `anti_doping` and `medicines_law` entries were re-opened today
(200). If the card schema gets optional extra rows later, candidates: "BIG-register (zorgverlener opzoeken)"
`https://www.bigregister.nl/zoek-zorgverlener` (HTTP 200 today; the text read is on the parent page), "Onderzoek met mensen
(OMON)" `https://onderzoekmetmensen.nl/nl`. Without a schema change, link them from the pages.

**`config/link-allowlist.json`, hosts to add (each used by a new source in `research/nl/sources/nl-care.yaml`):**
- `onderzoekmetmensen.nl`: the Dutch national register of medical research (OMON), run with the CCMO; it now includes
  every Dutch CTIS trial; the CCMO tells participants to search it.
- `euclinicaltrials.eu`: the public portal of the EU Clinical Trials Information System (CTIS, EMA); not under
  `.europa.eu`.
- `richtlijnen.nhg.org`: the NHG's guideline site (NHG-Standaarden and NHG-Standpunten); `www.nhg.org` is already allowed.
- `www.bigregister.nl`: the statutory public register of health professionals (Wet BIG), run by CIBG for VWS.
- `farmanco.knmp.nl` (optional): the KNMP's national database of medicine shortages; professional body, no seller.
  If the owner prefers not to add it, drop `farmanco-liraglutide-obesitas-tekort` and the liraglutide shortage line.
Not needed: `zoek.officielebekendmakingen.nl`, `www.tweedekamer.nl`, `www.eerstekamer.nl` (the facts are cited from
wetten.overheid.nl, repository.overheid.nl and rijksoverheid.nl instead).

**Source notes to update when merging (existing ids; the merge owns these files):**
- `igj-leveren-op-artsenverklaring`: add "term 'ontheffing' since 9 September 2025; spoedprocedure for life-threatening
  situations; one application per medicine and indication".
- `igj-qa-zonder-handelsvergunning`: add the reimbursement sentence (fact 27), the trial-exclusion route (fact 28), the
  Dutch-language and BIG checks (fact 24), "IB/IMPD ... ook als er sprake is van ... een FDA-registratie".
- `nl-wog-1958`: replace "The date the registration articles came into force ... was not verified" with "1963 according
  to the explanatory memorandum to the Geneesmiddelenwet (`nl-mvt-2003-geneesmiddelenwet`); the day is not given".
- `ctgov-nl-be-peptide-search-2026-10-22`: superseded for the Netherlands by `ctgov-nl-peptide-search-2026-10-27`; keep
  the old id for Belgium.
- `cbg-compassionate-use-list`: accessed 2026-10-27, list modified 10 July 2026, 43 programmes, none of the site's
  compounds.
- `ctgov-nct07531251`: add "no Dutch site on ClinicalTrials.gov; the EU part (CTIS 2025-523837-25-00) is authorised in
  the Netherlands".

**Other merge tasks:**
- The ids from `research/nl/sources/nl-help.yaml` used here (`rijksoverheid-eigen-risico-2026`, `zin-eigen-risico-zvw`,
  `nhg-2025-gewichtsreducerende-medicatie`, `rijksoverheid-2026-09-vws-begroting`, `dims-welke-drugs`) and from
  `research/nl/sources/eu-status.yaml` (`ctis-2025-522674-36-00`, `ctis-2025-523837-25-00`) must be merged before the
  pages that cite them; if those topics rename them, update this file. Suggested additions to the eu-status notes:
  SYNERGY-Outcomes has 7 Dutch sites authorised (CTIS API, 27 October 2026); 4TAZPower has one Dutch site (Amsterdam
  UMC) and no Dutch start-of-trial notification.
- `docs/STYLE-NL.md`: "ontheffing" (IGJ, named-patient supply), "vrijstelling" (IGJ, shortages), "machtiging" (insurer)
  vs "artsenverklaring" (only the IGJ route); "verpleegkundig specialist", "physician assistant" untranslated.
- Timeline data (`src/data/timeline.yaml`): if a Dutch event "1963: registration duty under the WOG; CBG set up" is
  wanted, use `nl-mvt-2003-geneesmiddelenwet`.
- The prescribing-routes diagram row "An online prescription from a doctor you never met: No" must change (§2 item 7).

---

## Fact-check (independent, 27 October 2026)

Adversarial check of this file and `research/nl/sources/nl-care.yaml`. Everything below was fetched today with curl
(HTML to text; PDFs with pdftotext), the ClinicalTrials.gov API v2, the CTIS public API, PubMed E-utilities, and, for
the two sites that refuse scripts (richtlijnen.nhg.org, the onderzoekmetmensen.nl search), the built-in browser in a
tab of my own (no security check appeared; no CAPTCHA, no cookie banner touched; the tab was closed afterwards).
EUR-Lex answered curl and WebFetch with a bot challenge (HTTP 202), so the EU texts were read through the EU
Publications Office (publications.europa.eu/resource/celex/…), which serves the same documents.

### What I checked

- **All 33 new sources and all 67 reused ids.** Every reused id exists (guides, legal-a, shared, history, semaglutide,
  tirzepatide, retatrutide, stubs-b, refocus-status-d, safety-a, safety-b, about; nl-help ×5; eu-status ×2). All 33 new
  ids, and the one new id added here, are unique across `src/data/sources/` and `research/nl/sources/`. The yaml
  passes `sourceFileSchema` (34 sources, checked with tsx). No title or URL matches a commerce token or URL pattern
  (`config/commerce-tokens.json`), and none names a seller or company. One reused source does (see correction 2).
- **Law versions in force today** (wetten.overheid.nl, "Geraadpleegd op 27-10-2026"): Gnw "Geldend van 09-09-2025 t/m
  heden" (arts. 1(1)(b), (s), (cc), (pp), 18(5)–(6), 40(1)–(3), 61(1) and (9), 67, 67a, 68, 84, 85, 101 read; no future
  change announced on any of them); Regeling Gnw "01-01-2026 t/m heden" (3.17, 3.17a, 3.18); Wet BIG "05-07-2025 t/m
  heden" (36(5), 36(14) a–f); BW Book 7 "08-10-2026 t/m heden" (7:448, 450, 451, 452, 453, 454, 455, 456, 457, 460);
  WMO "01-01-2025 t/m heden" (1(1)(o), 2, 6, 7); Regeling zorgverzekering "06-10-2026 t/m heden" (bijlage 2 items 58,
  141, 146, 147, 194 word for word; bijlage 1 lists SAXENDA, VICTOZA, OZEMPIC, RYBELSUS, TRULICITY, MOUNJARO in capitals,
  no WEGOVY or ZEPBOUND); Beleidsregel voorschrijven via internet "12-04-2023 t/m heden" (art. 2 quoted exactly; signed
  27 March 2023, kenmerk 3453103-1038189-GMT, Stcrt. 2023, 10521, published 11 April 2023); Wkkgz "01-01-2026 t/m heden";
  Gnw 2007 information page (Stb. 2007, 93; 29359; art. 132 "De Wet op de Geneesmiddelenvoorziening wordt ingetrokken").
- **Regulators and official pages, dates from metadata, every quoted phrase found:** IGJ artsenverklaring (issued
  2024-12-27, modified 2026-02-06), IGJ Q&A (2026-08-11/08-20), IGJ off-label page (2026-02-03/05-13) and its May 2026 PDF
  (shifted font decoded: "In uitzonderlijke individuele situaties kan hiervan worden afgeweken", AQUA-leidraad, Raad van
  State and Lareb all present), IGJ eigen bereidingen (2025-07-08), IGJ internet prescribing (2023-04-28/2026-07-14;
  "11 april 2023"; telephone outside art. 67), IGJ vrijstellingsbesluiten (modified 2026-10-26; no GLP-1 name), IGJ
  online medicijnen (2026-03-23), IGJ/CBG warning (2025-09-03/11-24, "Dat kan levensgevaarlijk zijn"); CBG CUP page
  (2024-12-19/2025-10-22), CUP list (modified 2026-07-10; 43 programmes counted by entry; latest approval 5 December
  2025; none of 32 compound names), CUP Q&A (2024-12-01/2025-01-14), CUP news (MEB 49 "Beleidsdocument 01-12-2024", "per
  direct"), Ozempic shortage ("per 2 december 2024 ... opgelost"), GLP-1 standpunt (2025-02-20/2026-03-03); Zorginstituut
  werkagenda Wegovy and Mounjaro (both modified today 08:26–08:27; dossier complete July 2026 and March 2026; WAR
  5 October 2026; consultation "naar verwachting begin november 2026"; the rest "nog niet bekend"), ZIN news 2025 and
  2024, the GLI, Geneesmiddelen, Eigen risico and Huisarts pages; Rijksoverheid Prinsjesdag zorg, eigen risico Q&A, VWS
  budget page and PDF, boetes (€ 1.100.000 since 1 January 2026).
- **Professional bodies and patient information:** NHG-Standaard Obesitas (browser: "Gepubliceerd: oktober 2025
  Laatste aanpassing: augustus 2026"; the facultatief, referral, oral semaglutide, tirzepatide, GLI-2019, BMI, 12-week,
  over-75 and proefstop passages; recommended agents liraglutide s.c., semaglutide s.c., naltrexon/bupropion),
  NHG-Standpunt off-label (browser: "Laatst gewijzigd: januari 2018"), NHG Praktijksituaties (all quotes; "ZN-machtigingen
  (artsenverklaring)"), KNMG (prescribers: pubdate 2020-12-16, date 2026-02-05; second opinion; beroepsgeheim), KNMP
  richtlijn Bereiden ("Geautoriseerd in mei 2016") and FAQ ("05 maart 2024", 50/150, 1 February 2025, gedoogverklaring,
  art. 2.8), Farmacotherapeutisch Kompas (semaglutide: Ozempic/Rybelsus Bijlage 2, Wegovy XGVS; tirzepatide: Mounjaro
  Bijlage 2, ZIN-rapport 2026; liraglutide: all products incl. Saxenda Bijlage 2), Thuisarts (19 April 2024; 4 November
  2025), BIG-register (18 June 2025; "raadplegen" and "bekijken" both on the page), Farmanco (4455 updated 27-08-2026,
  "Verhoogde vraag", "onbekend"; 4621 updated 03-07-2026; 271 entries), Trimbos DIMS (modified 2026-05-29; twaalf
  deelnemers, 34 testlocaties, ruim 17.500), DIMS site ("geen steroïden, geen medicijnen"), Lareb (both pages),
  Dopingautoriteit (2010 anabolenpoli), CCMO background (2026-05-27/07-27) and IVO (2025-10-28/2026-05-19), EMA Clinical
  Trials Regulation dates, OMON home page (the CTIS sentence of May 2026).
- **Trials:** ClinicalTrials.gov, one query per name with location Netherlands: retatrutide and LY3437943 2
  (NCT07165028 recruiting, 6 Dutch sites, Utrecht recruiting; NCT06383390 active not recruiting, 28 Dutch sites);
  elamipretide 3, all completed (NCT02788747 2016–2017, NCT02914665 2016–2017, NCT05162768 completed 2024-12-04); 0 for
  all 20 other names. NCT07531251: sites only in Canada, the UK and the US; male, 5–55 years. CTIS API:
  2025-522674-36-00 (NL authorised 2026-02-04, 7 NL sites, NL START_OF_TRIAL 2026-09-22), 2025-523837-25-00 (NL
  authorised 2026-07-27, one NL site, no NL events), 2023-507311-35-00 (NL start 2024-05-22, end 2025-01-20),
  2023-508630-34-00 returns an empty record; CTIS search with the Netherlands filter: retatrutide 1, elamipretide 1,
  afamelanotide 1, BPC 0, thymosin 0. OMON records 60031, 61112, 61412, 51992 (and 51595, 45920, 45900) re-read; OMON
  search in the browser: retatrutide 2 (60031, 61112), elamipretide 4, TB-500 0.
- **History:** WOG Stb. 1958, 408 (28 July 1958; art. 37 "treedt in werking op een door Ons te bepalen tijdstip");
  memorandum 29 359 nr. 3 (quotes of fact 76 found verbatim; see correction 1); Brunt & Niesink 2011 (PubMed 21898860,
  Drug Test Anal 3(9):621-34, doi 10.1002/dta.323).
- **EU:** Directive 2001/83 art. 3(1) ("prepared in a pharmacy in accordance with a medical prescription for an
  individual patient"); Abcur judgment, ruling 1; Regulation 536/2014 art. 28(3) (withdrawal at any time); Regulation
  726/2004 art. 83(2) (definition of compassionate use).
- **The researcher's account of the saved pages** (snapshot legal-routes lines 51, 144, 146; how-we-got-here line 59;
  reform lines 184, 204; semaglutide.md open question 5): accurate.

### Independent searches for anything newer (27 October 2026)

- **Found: the 2027 eigen risico is now set in law** (correction 3). The researcher's UNRESOLVED 1 is resolved.
- **The Regeling zorgverzekering versions for 1 January 2027 and 1 August 2027** are already on wetten.overheid.nl: the
  GLP-1 items are unchanged and Wegovy and Zepbound are still absent (added to fact 62).
- **IGJ, 20 October 2026: stolen insulin pens that may be presented as obesity medicine** (added as fact 67a; the id
  is already registered by nl-help).
- IGJ enforcement against a peptide webshop (August 2026) exists, but its titles and URLs name the seller; it is topic
  nl-law and must not be cited (nl-law already describes it without registering it).
- Not found (searches of igj.nl, cbg-meb.nl, rijksoverheid.nl, zorginstituutnederland.nl, knmg.nl and the web): a 2027
  pakketbrief or any 2027 decision on obesity medicines; a Zorginstituut advice on Wegovy or Mounjaro; an answer to
  Kamervragen 2026Z15019; a bill amending Gnw art. 67; new KNMG or NHG guidance on online prescribing or on unlicensed
  peptides; a new CBG or IGJ shortage notice for a GLP-1 medicine. The WOG commencement decree of 1963 is not indexed in
  the official repository search (pre-1995 Staatsblad), so the day stays unknown.

### What I corrected (before → after, with source)

1. **Memorandum date and id.** `nl-mvt-2004-geneesmiddelenwet`, year 2004 → `nl-mvt-2003-geneesmiddelenwet`, year 2003;
   fact 76 and §2 item 13 "(2004)" → "dated 10 December 2003". Source: the official metadata of kst-29359-3
   (repository.overheid.nl, "DCTERMS.available 2003-12-10", vergaderjaar 2003-2004) and the PDF imprint ("Sdu Uitgevers
   's-Gravenhage 2003"). The id was not used anywhere else. The summary line "(Kamerstuk 29 359 nr. 3, 2004)" in the
   researcher's report should read 2003.
2. **A source that names companies.** Fact 31 cited `cjeu-2015-abcur`, whose title is "Judgment of 16 July 2015,
   Abcur AB v Apoteket Farmaci AB and Apoteket AB ..." (two companies; CONTENT-GUIDE §11) → fact 31 now rests on
   `eu-directive-2001-83` art. 3(1) (shared.yaml) and `igj-eigen-bereidingen-apotheek`. The Abcur point ("a medical
   prescription issued before their preparation") is usable only if the owner of `src/data/sources/legal-a.yaml`
   retitles the entry neutrally (e.g. "Judgment of 16 July 2015, Joined Cases C-544/13 and C-545/13"). It is not used on
   any English page.
3. **Eigen risico 2027.** "€ 400 by the cabinet's plan; the legal instrument was not found; write 'volgens de plannen
   van het kabinet'" → "€ 400, set by the Regeling van de Minister van VWS van 25 september 2026, houdende vaststelling
   van het verplicht eigen risico Zvw 2027 (Stcrt. 2026, 34372, published 30 September 2026), in force 1 January 2027".
   Quote: "Het bedrag, bedoeld in artikel 19, eerste lid, van de Zorgverzekeringswet, wordt vastgesteld op € 400";
   wetten.overheid.nl, Zvw art. 19(1) from 1 January 2027: "een verplicht eigen risico van € 400 per kalenderjaar". New
   source `nl-zvw-art-19-eigen-risico-2027` (wetten.overheid.nl, allowed through .overheid.nl). Updated: fact 55, §2
   item 12, §4 conflict 1, §5 item 1, and the note of `rijksoverheid-2026-prinsjesdag-zorg`. The € 60 rise in 2028 and
   the € 150 tranchering from 2028 stay plans (bill 36 943 is "in behandeling").
4. **VWS budget page number and URL.** "p. 19" → "p. 20" (printed page 20 = PDF page 23; the regulation's footnote also
   cites "37 020, nr. 2, p. 20"); URL `/documenten/begrotingen/2026/09/15/…` → `/documenten/2026/09/15/…`, the page it
   redirects to.
5. **SYNERGY-Outcomes recruitment in the Netherlands.** "started in NL; OMON 'Werving gestart'; Utrecht recruiting" →
   started in NL (START_OF_TRIAL 22 September 2026), but CTIS has no Dutch START_OF_RECRUITMENT and
   "hasRecruitmentStarted": false; the registers disagree, so write that the trial has started here, not that it
   recruits here (fact 46, note of `omon-nl-omon61112`). Some authorised Dutch sites are commercial research centres:
   name cities only.
6. **4TAZPower details.** Added: 5 of the 22 EU participants are planned in the Netherlands (CTIS: FR 7, IE 4, IT 6,
   NL 5); eligibility male, 5–55 years (ClinicalTrials.gov). `omon-nl-omon61412` title: paraphrase → the record's exact
   title (the acronym 4TAZPower is not in it; moved to the note).
7. **`omon-nl-omon51992` title:** "deficiëntie" → "deficientie", as in the record. The note now gives the ABR number
   NL78339.078.21, the record's expected start (1 March 2022, while the status is still "Werving nog niet gestart") and
   the funding line verbatim ("Europese Unie;Horizon2020 project Moodstratification (2017)").
8. **`farmanco-liraglutide-obesitas-tekort` title:** "Liraglutide injectiepen 6 mg/ml (…)" → "Liraglutide-injectiepen
   (bij obesitas en overgewicht): tekort" (no strengths or doses in titles). Note and fact 67: the diabetes liraglutide
   entry is still on Farmanco's current list although its page shows no product in shortage.
9. **WGBO detail (fact 51):** "arts. 7:454–456 (file, access, copy)" → file (7:454), destruction on written request
   (7:455), access and copy (7:456). Added: art. 7:453 carries "Wijziging(en) zonder datum inwerkingtreding aanwezig";
   the quoted text is the one in force.
10. **Fact 67a added:** IGJ warning of 20 October 2026 on stolen insulin pens ("die mogelijk ook worden gepresenteerd
    als obesitasmedicatie"; "Gebruik kan levensgevaarlijk zijn"), id `igj-2026-10-gestolen-medicijnen` (nl-help).

Confirmed unchanged (no correction needed): facts 1–30, 32–45, 48–50, 52–54, 56–61, 63–66, 68–75 and 77; conflicts
§4.2–4.9; the reviewer questions in §6; the allowlist proposals in §7 (onderzoekmetmensen.nl, euclinicaltrials.eu,
richtlijnen.nhg.org, www.bigregister.nl, optionally farmanco.knmp.nl). The new source needs no new host.

### Still UNRESOLVED (write as unknown, or leave out)

- §5 items 2–11 stand as the researcher wrote them: the 2027 basispakket letter and any 2027 decision on obesity
  medicines; the date and content of the Zorginstituut advice on Wegovy and Mounjaro and the minister's decision; the
  answers to Kamervragen 2026Z15019; European Pharmacopoeia monographs for the site's peptides; whether NL-OMON51992
  ever started; whether and when 4TAZPower will recruit in the Netherlands; the exact 1963 day of the WOG registration
  duty; NHG or KNMG guidance on unlicensed peptides (none found); the minister's formal decision on the 2024 Wegovy
  advice; whether an artsenverklaring could ever work for a substance authorised nowhere, without IB/IMPD or GMP proof.
- **New:** whether SYNERGY-Outcomes is actually recruiting in the Netherlands (CTIS and OMON/ClinicalTrials.gov
  disagree).

### Notes for other files (not edited here; their owners merge them)

- `research/nl/nl-help.md` (eigen risico 2027, lines 66–69, 427, 615–617) still calls € 400 a plan that is not yet law;
  it can now cite `nl-zvw-art-19-eigen-risico-2027`.
- `src/data/sources/legal-a.yaml` → `cjeu-2015-abcur`: retitle it neutrally before any Dutch page cites it.
- `research/nl/sources/eu-status.yaml` → `ctis-2025-522674-36-00`: add that CTIS shows no Dutch start of recruitment.

No English content and no file other than `research/nl/nl-care.md` and `research/nl/sources/nl-care.yaml` was changed.
No build, commit or push.
