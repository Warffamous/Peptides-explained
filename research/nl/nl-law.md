# Research: nl-law (27 October 2026)

Topic: Dutch medicines law and its enforcement as it stands on 27 October 2026, for `legal/nl`, `legal` (index),
`legal/research-use-only`, `legal/sport-and-doping`, `legal/whats-changing` (Dutch part), `start-here` §3, the publisher
line on `about/*`, and the `## Zelf invoeren` route on `/nl/legal-routes/`.

Every law, regulator and official page below was fetched on 27 October 2026 (curl, HTML converted to text; PDFs with
`pdftotext`; the built-in browser only for two pages that refuse scripts) and read for the sentence relied on. Nothing
about the law is taken from memory. Source ids: new ids are in `research/nl/sources/nl-law.yaml`; reused ids are
registered in `src/data/sources/*.yaml` (file named in brackets the first time). Quotes in Dutch are the sources' own
words. All pages built on this stay `reviewed_by: pending-legal-review`.

---

## 1. Key facts

### 1.1 The Geneesmiddelenwet (Gnw) as now in force

1. **Version.** The Gnw (BWBR0021505) on wetten.overheid.nl reads "Geldend van 09-09-2025 t/m heden" on 27 October
   2026; the information page says "Informatie geldend op 27-10-2026" and lists no later version. It is the same version
   the 20–23 October research read. Two bills are pending ("Aanhangig") that touch the act: Kamerstukken 35410 (art. 101;
   the initiative bill Wet transparantieregister zorg) and 36716 (art. 62; digital information when selling UAD
   medicines). Neither concerns the peptides on this site. An amendment of art. 62 (Stb. 2023, 293) has no date of entry
   into force (fact-check: so do old amendments of art. 14, Stb. 2011, 572, and art. 80, Stb. 2007, 93; none relevant). Sources: `nl-gnw-versie-informatie-2026-10-27`, `nl-geneesmiddelenwet` (shared.yaml).
2. **What a medicine is (art. 1(1)(b)).** "een substantie of een samenstel van substanties die bestemd is om te worden
   toegediend of aangewend voor dan wel op enigerlei wijze wordt gepresenteerd als zijnde geschikt voor: 1°. het genezen
   of voorkomen van een ziekte, gebrek, wond of pijn bij de mens, 2°. het stellen van een geneeskundige diagnose bij de
   mens, of 3°. het herstellen, verbeteren of anderszins wijzigen van fysiologische functies bij de mens door een
   farmacologisch, immunologisch of metabolisch effect te bewerkstelligen". Two tests: presentation ("gepresenteerd") and
   function ("bestemd ... toegediend"). Source: `nl-gmw-art-1-geneesmiddel` (guides.yaml).
3. **Other definitions in art. 1(1) that pages use.** (lll) "handelsvergunning: een vergunning voor het in het
   handelsverkeer brengen van een geneesmiddel"; (hh) "invoeren: het vanuit een derde land binnen het grondgebied van
   Nederland brengen van geneesmiddelen of werkzame stoffen"; (cc) "lidstaat: een staat die lid is van de Europese Unie of
   een andere staat die partij is bij de Overeenkomst betreffende de Europese Economische Ruimte"; (dd) "derde land: een
   land, niet zijnde een lidstaat" (so the UK, Switzerland, the US and China are third countries); (ii) "afleveren: het
   anders dan door terhandstelling of uitvoer leveren"; (ll) "ter hand stellen: het rechtstreeks verstrekken of doen
   bezorgen van een geneesmiddel aan de patiënt"; (s) "UR-geneesmiddel: een geneesmiddel dat uitsluitend op recept ter
   hand mag worden gesteld"; (x.1) "werkzame stof: een substantie ... die bestemd is om gebruikt te worden bij de
   vervaardiging van een geneesmiddel". Sources: `nl-gnw-art-1-lidstaat-werkzame-stof`, `nl-gnw-art-1-reclame` (legal-a.yaml).
4. **No handelsvergunning, no trade (art. 40(1)–(2)).** Art. 40(1): "Het is verboden een geneesmiddel in het
   handelsverkeer te brengen zonder handelsvergunning van de Europese Unie, verleend krachtens verordening 726/2004 ...,
   of van het College, verleend krachtens dit hoofdstuk." Art. 40(2): "Het is verboden een geneesmiddel waarvoor geen
   handelsvergunning geldt, in voorraad te hebben, te koop aan te bieden, te verkopen, af te leveren, ter hand te stellen,
   in te voeren, uit te voeren of anderszins binnen of buiten het Nederlands grondgebied te brengen." Using, buying and
   possessing are not in the list (only "in voorraad hebben"). "Anderszins binnen ... te brengen" covers bringing a
   medicine in from another EU/EEA state. Source: `nl-gmw-art-40-handelsvergunning` (guides.yaml).
5. **The exceptions (art. 40(3)).** (a) small-scale preparation in a pharmacy (or dispensing GP) and supply there; (b)
   "geneesmiddelen voor onderzoek"; (c) "geneesmiddelen waarvoor, met inachtneming van artikel 5 van richtlijn 2001/83 en
   overeenkomstig bij ministeriële regeling te stellen regels, door de Inspectie gezondheidszorg en jeugd voor bepaalde
   tijd een ontheffing of vrijstelling is verleend"; (d) hospital ATMP; (e) parallel trade licence; (f) compassionate use
   under art. 83 Reg. 726/2004 when an application is filed or trials are running; (g) emergency exemption by the
   Minister; (h) import/export by a manufacturer, or a wholesaler sourcing from another member state; (i)
   radiopharmaceuticals. None of them is a route for a private person acting alone. Source: `nl-gmw-art-40-handelsvergunning`.
6. **Art. 40(3)(c) in practice: Regeling Geneesmiddelenwet art. 3.17** (BWBR0022160, "Geldend van 01-01-2026 t/m
   heden", unchanged). The IGJ "kan een ontheffing ... verlenen aan een fabrikant, een groothandelaar of een
   apotheekhoudende" if (a) "de arts het noodzakelijk acht dat een tot zijn geneeskundige praktijk behorende patiënt met
   het geneesmiddel wordt behandeld", (b) "er geen adequaat medicamenteus alternatief ... in Nederland in de handel is of
   anderszins verkrijgbaar is", (c) the doctor has asked in writing on the IGJ model, (d) the request is sent to the IGJ,
   (e) the IGJ sets quantity and period, (f) records are kept including side effects. Art. 3.17a: a shortage exemption only
   for medicines authorised in another member state, the UK or an MRA country. Sources: `nl-regeling-gnw-art-3-17`
   (legal-a.yaml); IGJ practice: `igj-qa-zonder-handelsvergunning` (only an NL-based manufacturer, wholesaler,
   (hospital) pharmacist or dispensing GP may apply; "De IGJ accepteert geen aanvragen die zijn ingediend door
   bemiddelaars, consultancybureaus"; "Niet-medische redenen zijn geen argumenten"; "De IGJ is daarom terughoudend";
   "uitdrukkelijk niet bedoeld om de verplichting van de handelsvergunning te omzeilen"; page issued 11 August 2026,
   modified 20 August 2026) and `igj-leveren-op-artsenverklaring` (guides.yaml; "Wettelijke behandeltermijn: 8 weken",
   "De gemiddelde behandeltermijn is ongeveer 4 weken"; modified 6 February 2026). Both re-read today, unchanged.
7. **Licence to make, import or trade (art. 18).** Art. 18(1), second sentence: it is forbidden "om zonder vergunning van
   Onze Minister andere geneesmiddelen ... te bereiden, in te voeren, in voorraad te hebben, te koop aan te bieden, af te
   leveren of uit te voeren of anderszins binnen of buiten Nederlands grondgebied te brengen, dan wel een groothandel te
   drijven", and "een groothandel te drijven in geneesmiddelen waarvoor geen handelsvergunning is verleend". Art. 18(6)(a):
   art. 18(1) does not apply to bringing in "geneesmiddelen die kennelijk zijn bestemd voor eigen gebruik door de persoon
   die de desbetreffende geneesmiddelen vervoert". This exempts only from the art. 18 licence; art. 40(2) has no such
   exception. Source: `nl-gnw-art-18-licence` (legal-a.yaml).
8. **Active substances (art. 38(1)).** "Het is verboden om zonder registratie werkzame stoffen te bereiden, in te voeren,
   in voorraad te hebben, te koop aan te bieden, af te leveren, uit te voeren of anderszins binnen of buiten Nederlands
   grondgebied te brengen". Breach is an economic offence (WED art. 1 under 1°). Relevant if a powder is treated as raw
   material rather than as a medicine (see fact 31). Source: `nl-gnw-art-38-werkzame-stoffen`.
9. **Prescription and supply (art. 61–62).** Art. 61(1): "is het eenieder verboden UR-geneesmiddelen of
   UA-geneesmiddelen te koop aan te bieden, te verkopen of ter hand te stellen, met uitzondering van: a. apothekers die hun
   beroep in een apotheek uitoefenen; b. huisartsen die in het bezit zijn van een vergunning [apotheekhoudend]; c. daartoe
   bij ministeriële regeling aangewezen personen". Art. 61(9): "Het is de apotheker die in een apotheek werkt verboden een
   UR-geneesmiddel ter hand te stellen zonder dat een recept is overgelegd" (emergency exception). Art. 62: UAD medicines
   only via pharmacists, dispensing GPs and drogisten; AV medicines also via registered businesses. Sources:
   `nl-gmw-art-61-prescription` (guides.yaml), `nl-gnw-art-62-uad-av`.
10. **Internet prescribing (art. 67), distance selling (art. 67a), off-label (art. 68).** Art. 67: "Het is een ieder
    verboden via internet geneesmiddelen voor te schrijven aan personen die de voorschrijver nog nooit persoonlijk heeft
    ontmoet, of die de voorschrijver niet kent of van wie de voorschrijver de medicatiehistorie niet beschikbaar heeft."
    Art. 67a(1): distance selling only under the ministerial rules implementing Directive 2001/83 (Regeling Gnw arts.
    6.12–6.13: the seller must be entitled under art. 61 or 62 and registered with the Minister). Art. 68(1): "Het buiten de
    door het College geregistreerde indicaties voorschrijven van geneesmiddelen is alleen geoorloofd wanneer daarover
    binnen de beroepsgroep protocollen of standaarden zijn ontwikkeld. Als de protocollen en standaarden nog in
    ontwikkeling zijn, is overleg tussen de behandelend arts en apotheker noodzakelijk." Sources:
    `nl-gmw-art-67-internet-prescribing`, `nl-gmw-art-68-off-label` (guides.yaml), `nl-gnw-art-67a-distance-selling`
    (legal-a.yaml); IGJ position `igj-2026-off-label-standpunt` (legal-a.yaml; page modified 13 May 2026; "Off-label
    voorschrijven is in principe niet mogelijk" where no standard exists or is being developed).

### 1.2 Advertising and the publisher line

11. **What advertising is (art. 1(1)(xx), (ijij)).** "reclame: elke vorm van beïnvloeding met het kennelijke doel het
    voorschrijven, ter hand stellen of gebruiken van een geneesmiddel te bevorderen, dan wel het geven van de opdracht
    daartoe"; "publieksreclame: reclame voor een geneesmiddel die, gezien haar inhoud en de wijze waarop zij wordt geuit,
    kennelijk ook voor anderen dan beroepsbeoefenaren ... is bestemd". Source: `nl-gnw-art-1-reclame` (legal-a.yaml).
12. **The bans (art. 84–85).** Art. 84(1): "Reclame voor dan wel gunstbetoon met betrekking tot een geneesmiddel waarvoor
    geen handelsvergunning is verleend, is verboden." This covers all advertising, not only public advertising. Art. 84(3)
    and (4): advertising that does not promote rational use, and misleading advertising, are forbidden. Art. 85: public
    advertising is forbidden for medicines that "uitsluitend op recept ter hand mogen worden gesteld" and for OTC medicines
    with Opiumwet list I or II substances. Source: `nl-gnw-art-84-85-advertising` (legal-a.yaml).
13. **What chapter 9 does not cover (art. 83).** "Dit hoofdstuk is niet van toepassing op: a. geneesmiddelen voor onderzoek
    ...; b. de bijsluiter bij en de etikettering van een geneesmiddel; c. een brief of een emailbericht ... ter inwilliging
    van een specifiek verzoek om informatie over een bepaald geneesmiddel; d. informatie betreffende gezondheid of ziekte bij
    de mens." The Directive it implements adds a condition to (d): "information relating to human health or diseases,
    provided that there is no reference, even indirect, to medicinal products" (Directive 2001/83 art. 86(2), read today in
    the 1 January 2025 consolidation through CELLAR). A site that names medicines cannot rely on (d) as read with the
    Directive (our reading; question for the legal reviewer). Sources: `nl-gnw-art-83-reclame-uitzonderingen`,
    `eu-directive-2001-83` (shared.yaml).
14. **How the IGJ reads "reclame" (IGJ page, issued 30 June 2025, modified 4 November 2025).** "Deze definitie is bewust
    streng opgesteld ... iemand volgens deze strenge definitie al snel reclame maakt voor een geneesmiddel."
    "Voorlichting of informatie valt niet onder reclame. Het verschil tussen reclame en voorlichting/informatie is soms
    moeilijk te maken en hangt af van de situatie. De kern bij voorlichting/informatie is dat deze nodig is voor een goede
    medische behandeling. ... Een geneesmiddel of het gebruik ervan mag niet worden aangeprezen." "Of een bepaalde uiting
    moet worden gezien als reclame, is niet afhankelijk van de afzender. Iedereen kan reclame maken". "Er kan ook sprake
    zijn van reclame wanneer een onafhankelijke derde partij ... dit maakt. ... Dat een geneesmiddel door die onafhankelijke
    derde niet te koop wordt aangeboden maakt dat niet anders." "Wat offline niet mag, mag ook online niet." Banned for
    unregistered medicines includes advertising for "gebruik van een geneesmiddel voor een ziekte waarvoor dat geneesmiddel
    niet is geregistreerd" and for "een product dat, middels het uiterlijk of het gebruik van claims, als geneesmiddel
    wordt gepresenteerd". Source: `igj-geneesmiddelenreclame-wat-is`.
15. **Damgaard as the NVWA reads it.** "Bepaalde uitingen van derden of journalisten over een medische werking van een
    ongeregistreerd geneesmiddel, kunnen namelijk als reclame gezien worden. Zelfs wanneer deze personen geen enkele band
    hebben met de verhandelaar van het product." (NVWA page modified 12 December 2025.) The judgment itself: information by
    an independent third party can be advertising, "even where it is carried out by an independent third party outside any
    commercial or industrial activity" (para. 22, re-read today through CELLAR); the purpose decides. Sources:
    `nvwa-verbod-medische-claims`, `cjeu-2009-damgaard` (legal-a.yaml).
16. **Self-regulation (KOAG/KAG, CGR) and who supervises.** The IGJ (page issued and modified 13 April 2026): the CGR
    (Stichting Code Geneesmiddelenreclame) supervises advertising to professionals under the Gedragscode
    Geneesmiddelenreclame; "De stichting Keuringsraad Openlijke Aanprijzing Geneesmiddelen/Keuringsraad Aanprijzing
    Gezondheidsproducten (KOAG/KAG) is de zelfreguleringsinstantie die namens de branche toezicht houdt op publieksreclame.
    ... de Code voor de publieksreclame voor geneesmiddelen"; "De inspectie houdt toezicht op de CGR" and on the KOAG/KAG;
    the NVWA supervises advertising for health products such as supplements (Code voor de aanprijzing van
    gezondheidsproducten). The IGJ's other page: "De Keuringsraad beoordeelt reclame-uitingen voor zelfzorggeneesmiddelen.
    De raad gebruikt hiervoor de Code voor de Publieksreclame voor Geneesmiddelen." These codes are industry
    self-regulation for advertisers of authorised medicines; no source says they apply to a non-commercial information
    site (UNRESOLVED, see 5.12). Sources: `igj-2026-betrokken-instanties-reclametoezicht`, `igj-geneesmiddelenreclame-wat-is`.
17. **Fines for advertising.** Breaches of arts. 84 and 85 can be fined administratively up to the sixth category (fact
    22); the VWS fining policy sets a starting amount ("normbedrag") of €150,000 for art. 84(1) and for art. 85 under a,
    "direct beboetbaar" (fact 24). Arts. 84–85 are not listed in the WED, so advertising is not an economic offence; after
    two administrative fines for the same conduct within 24 months it becomes a criminal minor offence (fact 23).
    Sources: `nl-gnw-art-101-fines` (legal-a.yaml), `nl-beleidsregels-boete-vws-2019`, `nl-wed-art-1-2-6` (legal-a.yaml).
17a. **Case law of 2026: selling nothing does not make it information (added by the fact-check).** (a) Raad van State,
    25 February 2026 (ECLI:NL:RVS:2026:1072): an organisation's information website with articles, a sample letter for the
    GP and a video about two prescription medicines made public advertising (art. 85 under a) and advertising not in line
    with the SmPC (art. 84(2)). That it wanted to inform and start a debate, "niet zelf heeft verkocht en ook anderszins
    geen commercieel doel of belang had bij de verkoop en het gebruik van deze middelen, doet daaraan niet af"; decisive
    was "het in wervende bewoordingen benadrukken van gestelde positieve eigenschappen"; following CJEU C-316/09
    (MDS/Merckle), even objective information can be advertising; the fines (€3,750 and €2,625) stand. (b) Rechtbank
    Amsterdam, 10 April 2026 (ECLI:NL:RBAMS:2026:5160): a magazine and a newspaper article built on personal weight-loss
    stories with semaglutide products were public advertising for a prescription medicine and, being about off-label use
    without the SmPC's side effects and contraindications, not in line with the SmPC; journalistic intent and the absence of
    "commercieel doel of belang" do not change that; but "Indien eiseres een zuiver informatief artikel publiceert over
    geneesmiddelen, dat in overeenstemming is met de samenvatting van de productkenmerken en niet kan worden aangemerkt
    als publieksreclame, dan zal boete-oplegging niet aan de orde zijn" (fines of €48,450 upheld; an appeal is reported by
    media only). (c) Rechtbank Noord-Nederland, 21 April 2026 (ECLI:NL:RBNNE:2026:1471): a natural person fined for public
    advertising of a prescription medicine on a video channel. (d) Since 1 January 2026 the IGJ publishes its
    administrative fines ("vanaf 1 januari 2026 bestuurlijke boetes openbaar"; about 40 a year); on 27 October 2026 its
    register listed one, of 28 September 2026, on a media company (it names the company: not citable; describe in general
    terms only). Sources: `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek`,
    `nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`, `igj-2025-12-boetes-openbaar`.

### 1.3 Supervision, enforcement and penalties

18. **Who supervises (art. 100(1)).** "de ambtenaren van de Inspectie gezondheidszorg en jeugd en de ambtenaren van de
    Nederlandse Voedsel- en Warenautoriteit". Source: `nl-gnw-art-100-supervision` (legal-a.yaml).
19. **Who investigates crimes, including Customs (art. 116).** "De ambtenaren van de Inspectie gezondheidszorg en jeugd of
    de Nederlandse Voedsel- en Warenautoriteit, de personen, aangewezen bij of krachtens artikel 141 van het Wetboek van
    Strafvordering en de ambtenaren van de rijksbelastingdienst, bevoegd inzake douane zijn belast met de opsporing van de
    strafbare feiten, bedoeld in artikel 101"; lid 2: they may "te allen tijde" seize goods. Source:
    `nl-gnw-art-116-opsporing-douane`.
20. **Seizure and orders (art. 115(1)).** IGJ or NVWA officials are, "ter voorkoming van schade aan de volksgezondheid,
    te allen tijde bevoegd tot inbeslagname van geneesmiddelen, werkzame stoffen of substanties die kennelijk bestemd zijn
    ter bereiding van geneesmiddelen", and may order a stop to "de bereiding, aflevering, handel, invoer, uitvoer of
    terhandstelling" or a withdrawal from the market. Source: `nl-gnw-art-115-seizure` (legal-a.yaml).
21. **The IGJ's division of tasks (page modified 11 November 2025).** "De douane let op import en export, de Nederlandse
    Voedsel- en Warenautoriteit (NWVA) op diergeneesmiddelen en het Openbaar Ministerie pakt illegale handel aan vanuit het
    strafrecht." The NVWA also enforces the Warenwet for supplements and cosmetics (facts 33–34). Sources:
    `igj-illegale-handel` (legal-a.yaml), `nvwa-verbod-medische-claims`, `nvwa-cosmetica-toezicht`.
22. **Administrative fine (art. 101(1)).** "Onze Minister kan een bestuurlijke boete opleggen van ten hoogste het bedrag
    van de zesde categorie, bedoeld in artikel 23, vierde lid, van het Wetboek van Strafrecht" for breaches of, among
    others, arts. 18(1), 38(1), 40(1), (2), (4) and (7), 61(1), (2), (3), (4), (5), (8) and (9), 62, 67, 67a, 68, 84, 85.
    The sixth category is €1,100,000 since 1 January 2026 (Sr art. 23(4), editorial note "[Red: Per 1 januari 2026: €
    1.100.000.]"; Rijksoverheid table "Maximale geldboetes sinds 1 januari 2026": 1st €550, 2nd €5,500, 3rd €11,000, 4th
    €27,500, 5th €110,000, 6th €1,100,000; previous figures "sinds 1-1-2024" €515 / 5,150 / 10,300 / 25,750 / 103,000 /
    1,030,000; Rijksoverheid page modified 16 April 2026). The amounts were indexed on 1 January 2026; nothing on either
    page indicates a further indexation in 2026. Sources: `nl-gnw-art-101-fines`, `nl-sr-art-23-boetecategorieen-2026`,
    `rijksoverheid-fine-categories-2026` (legal-a.yaml).
23. **When a fined act becomes a crime (art. 101(2)–(4)).** "Een gedraging als bedoeld in het eerste lid die geen
    economisch delict is ... is een strafbaar feit indien in de daaraan voorafgaande 24 maanden tweemaal een bestuurlijke
    boete ter zake van een zelfde gedraging is opgelegd"; punishable "met hechtenis van ten hoogste zes maanden of
    geldboete van de derde categorie" (€11,000); it is an "overtreding". Source: `nl-gnw-art-101-fines`.
24. **The VWS fining policy (Beleidsregels bestuurlijke boete Ministerie VWS 2019, BWBR0041790, "Geldend van 01-03-2025
    t/m heden").** Annex Geneesmiddelenwet: art. 18(1), 40(1) and 40(2) ("Geneesmiddelen waarvoor geen handelsvergunning
    is verleend in voorraad hebben, te koop aan te bieden, verkopen, afleveren, ter hand stellen, invoeren, uitvoeren of
    anderszins binnen of buiten het Nederlands grondgebied te brengen"), 61(1), 67, 68(1), 84(1) and 85 under a are all "DB"
    (direct beboetbaar) with a normbedrag of "€ 150.000,00", and all eight are "***" (heaviest; 84(2)–(4) and 85 under b
    are "**").
    The amount is then adjusted: product type ("UR of niet geregistreerd geneesmiddel 100% normbedrag"), seriousness (for
    *** offences 80%, 90% or 100%), culpability, and size: "Onderneming of natuurlijk persoon met 1 t/m 4 FTE 2,5% van het
    in schema D vastgestelde bedrag"; after a repeat breach within four years the minister "kan" double the amount (art.
    2(3); the annex says "wordt ... verdubbeld"). The normbedragen are fixed in the policy and were not changed with the
    2026 indexation of the statutory maxima. These are policy starting points, not what happens in a given case. The
    policy has been applied to small, non-commercial parties for advertising: €3,750 (= 2,5% of €150,000) to a natural
    person for public advertising of a prescription medicine on a video channel (Rb Noord-Nederland, 21 April 2026,
    reduced to €3,000 only for delay) and €3,750 + €2,625 to the organisation behind an information website (Raad van
    State, 25 February 2026); see fact 17a. No source shows it applied to a private person for importing or possessing a
    medicine for own use (5.2). Sources: `nl-beleidsregels-boete-vws-2019`, `nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`,
    `nl-rvs-2026-1072-publieksreclame-website`.
25. **Criminal law: Wet op de economische delicten (WED, BWBR0002063, "Geldend van 22-09-2026 t/m heden").** Art. 1 under
    1° lists Gnw "de artikelen 18, eerste lid, 28, eerste lid, 34, 37, derde lid, 38, eerste lid, 39, eerste lid, 40, eerste
    en tweede lid, 61, eerste lid, 62, eerste en derde lid, 67 en 67a, eerste lid". Art. 2(1): intentional = misdrijf,
    otherwise overtreding. Art. 6(1): misdrijf "gevangenisstraf van ten hoogste zes jaren, taakstraf of geldboete van de
    vijfde categorie" (€110,000); overtreding "hechtenis van ten hoogste een jaar, taakstraf of geldboete van de vierde
    categorie" (€27,500); a fine one category higher if the goods are worth more than a quarter of the maximum fine. The
    future version from 1 January 2027 (shown on wetten.overheid.nl) lists the same Gnw articles. Sources:
    `nl-wed-art-1-2-6` (legal-a.yaml), `nl-sr-art-23-boetecategorieen-2026`.
26. **IGJ supervision of online sellers (page dated 8 September 2023, unchanged).** "Zien we dat een website illegale
    medicijnen aanbiedt of daarvoor reclame maakt? Dan kunnen we maatregelen nemen. Bijvoorbeeld door een waarschuwing of
    boete op te leggen." Dutch law applies "waarbij leveranciers van geneesmiddelen zich via een website op de Nederlandse
    consument richten"; focus on prescription-only medicines and "medicijnen die nog niet geregistreerd zijn". Source:
    `igj-toezicht-online-medicijnen` (legal-a.yaml).
27. **IGJ public warnings, 2025–2026 (all re-read today; none names a seller).** 3 September 2025 (IGJ and CBG): illegal
    online offers are rising, "Bijvoorbeeld van medicijnen voor de behandeling van obesitas of diabetes type II"; "Dat kan
    levensgevaarlijk zijn"; report doubtful websites to the Landelijk Meldpunt Zorg (`igj-2025-illegal-online-medicines`,
    safety-b.yaml). 30 October 2025: "In 2024 ontvingen we 114 meldingen en van januari 2025 tot en met begin oktober 2025
    waren dat er al 187"; "De inspectie deed onderzoek naar 150 van deze websites" (prescription medicines in general, not
    peptides; page modified 14 April 2026) (`igj-2025-online-nepapotheken`, legal-a.yaml). The IGJ's online-medicines page
    (modified 23 March 2026) now carries a video of 3 November 2025: "Je weet niet of online bestelde medicijnen veilig zijn.
    Je kan er ziek van worden of zelfs overlijden... Bestel online medicijnen alleen in overleg met je arts of apotheker"
    (`igj-online-medicijnen`, guides.yaml). 20 October 2026: stolen medicines, mainly insulin pens, may be offered online
    and "mogelijk ook worden gepresenteerd als obesitasmedicatie" (`igj-2026-10-stolen-medicines`, safety-b.yaml). 16 April
    2026 (IGJ and NVWA): 43 websites offering new psychoactive substances taken offline; "Aanbieders proberen de wet te
    omzeilen door het gebruik van disclaimers als 'voor onderzoeksdoeleinden', 'research chemicals', 'niet voor menselijke
    consumptie' of varianten daarop" (`igj-2026-04-nps-websites-offline`; about NPS, not peptides). The IGJ has no page
    about peptides as such (all 40 igj.nl sitemaps, 3,739 URLs, checked by the fact-check; see 5.6). **Customs does**:
    its background article of 6 August 2026 (updated 29 September 2026) says Customs checks parcels "intensief", that
    "Onderzoeksdoeleinden spelen dan geen rol" once a product falls under the law, that "Het invoeren of uitvoeren van
    geneesmiddelen zonder vergunning is illegaal", and that "Naast afslankmiddelen zijn ook andere peptides populair. Dit
    zijn experimentele middelen die op sociale media worden aangeraden" (`douane-2026-08-illegale-online-handel-medicijnen`;
    its body names one webshop: never quote it).
28. **IGJ enforcement against a peptide webshop, August 2026 (describe in general terms only; do not cite).** The IGJ
    ordered an online seller to stop "de terhandstelling, aflevering en handel van de geneesmiddelen met de werkzame
    stoffen retatrutide, tirzepatide en semaglutide" (bevel given on 18 August 2026, published 24 August 2026), and when it
    found the order breached on 20, 21 and 24 August imposed a last onder dwangsom of €10,000 per day up to €200,000
    (published 31 August 2026). The IGJ wrote that it had "de laatste tijd meerdere meldingen ontvangen over schadelijke
    gevolgen bij consumenten na het gebruik van retatrutide", that retatrutide "heeft daarom geen handelsvergunning", and that it had
    reports of trade in falsified tirzepatide and semaglutide "en dat dit heeft geleid tot schadelijke gevolgen bij
    consumenten". Both pages name the seller and its web domains in title and text, so no source id is registered
    (CONTENT-GUIDE §1b, §11). Whether a page may mention it without a citation is an editor question (6.1).
29. **The government's line (answers to Kamervragen, minister Hermans, received 5 October 2026; Aanhangsel Handelingen II
    2026–2027, nr. 249, 2026Z15019).** "Generieke varianten van semaglutide of tirzepatide mogen nu niet legaal op de markt
    gebracht worden in Nederland"; "Het kabinet roept mensen nadrukkelijk op om deze middelen niet via schimmige websites of
    illegale aanbieders te bestellen"; "Waar mogelijk treedt de IGJ als toezichthouder van de Geneesmiddelenwet stevig op,
    bijvoorbeeld door het uit de lucht laten halen van websites en het opleggen van boetes. Daarnaast werkt het Kabinet aan
    een integrale aanpak om illegale handel tegen te gaan, samen de IGJ, het Openbaar Ministerie (OM), politie en de
    Nederlandse Voedsel- en Warenautoriteit (NVWA)"; on a controlled import model: "Import van geneesmiddelen is alleen
    toegestaan als een handelsvergunning is verleend"; a list of reliable foreign makers "staat in de ogen van het kabinet
    gelijk aan het faciliteren en goedkeuren van dergelijke import". Source: `tk-2026-ah-249-antwoord-afslankmedicatie`.
30. **Europe-wide operation with Dutch participation (Europol, 25 February 2026).** Operation SHIELD VI, April–November
    2025, 30 countries including the Netherlands: 3,354 individuals prosecuted, 907 investigations, 66 websites taken down;
    "the proliferation of counterfeit Semaglutide-based products used as fat-burners". Not Dutch-specific figures. The
    Dutch figures of the previous round (SHIELD V, October 2024: 329 shipments, 60,000 units, all seized and destroyed)
    remain the latest Dutch ones found (`igj-2025-shield-seizures`, legal-a.yaml, re-read today). Source:
    `europol-2026-02-shield-vi`.

### 1.4 "Research use only", supplements, cosmetics, Opiumwet

31. **How Customs decides whether a product is a medicine (Handboek VGEM, Voorschrift Geneesmiddelen, ch. 7, updated 21
    April 2026).** "Een product is een geneesmiddel als het een farmaceutische vorm heeft en voldoet aan het
    aandieningscriterium en/of het toedieningscriterium." Presentation is judged from the label and leaflet, and the website
    "Als op of bij het product een verwijzing aanwezig is naar een specifieke website; of Als het specifieke product wordt
    aangeboden op de website van de betreffende producent." Function: "of het product een werkzame stof bevat, in een
    werkzame hoeveelheid". "Een bulkverpakking met een poeder, zonder informatie over de wijze van toediening, is dus geen
    farmaceutische vorm. Controleer of het poeder/vloeistof wel een werkzame stof voor geneesmiddelen kan zijn"; ch. 8:
    "De werkzame stoffen hebben per definitie geen farmaceutische vorm." The labels "research use only" and "niet voor
    menselijke consumptie" appear nowhere in Dutch law; what counts is the product, its presentation and its function.
    The authorities say so in their own words: the IGJ and NVWA (16 April 2026, about NPS) call such labels "disclaimers"
    with which "Aanbieders proberen de wet te omzeilen"; Customs (6 August 2026): "Onderzoeksdoeleinden spelen dan geen
    rol". Customs' info page for the public (31 August 2026, not registrable: its URL carries commerce tokens) adds: "Een
    product kan volgens de wet een medicijn zijn, ook als de verkoper het een supplement of onderzoeksproduct noemt. Denk
    aan sommige afslankmiddelen en middelen voor spiergroei of herstel, zoals peptiden."
    Sources: `douane-hvgem-geneesmiddelen-h7-vaststelling-geneesmiddel`, `douane-hvgem-geneesmiddelen-h8-werkzame-stoffen`,
    `nl-gmw-art-1-geneesmiddel`, `igj-2026-04-nps-websites-offline`, `douane-2026-08-illegale-online-handel-medicijnen`.
32. **CJEU case law as Dutch authorities use it.** Presentation: an averagely well-informed consumer's impression, "which
    ... may even result from implication" (Van Bennekom, 227/82). Function: a product is not a medicine by function if "it
    is incapable of appreciably restoring, correcting or modifying physiological functions" (Hecht-Pharma, C-140/07), and
    the functional definition implies "a beneficial effect ... for human health" (D. and G., C-358/13 and C-181/14). All
    re-read today through CELLAR. The IGJ applies these tests in its own words: a product is a medicine by function when it
    has "een noemenswaardig en gunstig effect ... op verschillende fysiologische functies van het lichaam door een
    farmacologisch effect te bewerkstelligen" and meets "een aantal andere criteria, die door de rechter zijn vastgesteld"
    (melatonin Q&A, issued 3 June 2020, modified 21 May 2021; its dose threshold for melatonin should not be quoted on
    peptide pages). Sources: `cjeu-1983-van-bennekom`, `cjeu-2009-hecht-pharma`, `cjeu-2014-d-and-g` (legal-a.yaml),
    `igj-2021-melatonine-geneesmiddel-of-niet`.
33. **Supplements (Warenwet, NVWA).** "Levensmiddelen met een medische claim vallen onder de definitie van een geneesmiddel.
    Daarom moeten zij voldoen aan de Geneesmiddelenwet. ... Heeft u dat niet? Dan mag u er niet in handelen (artikel 40, lid
    2 van de Geneesmiddelenwet). U mag ook er ook geen reclame voor maken (artikel 84 van de Geneesmiddelenwet)."
    "Producten kunnen op grond van hun werking of hun presentatie als geneesmiddel worden beschouwd." "Bij het beoordelen van
    medische claims op levensmiddelen onderzoekt de NVWA eerst of het product moet worden beschouwd als geneesmiddel."
    "NVWA en IGJ onderhouden contact over zaken die zich afspelen op het grensvlak tussen gezondheidsproducten en
    geneesmiddelen." (page modified 12 December 2025). The NVWA supervises supplements sold in the Netherlands and can ban
    their sale (page modified 19 February 2026). So a peptide sold as a "supplement" with health claims, or with a
    pharmacological effect, falls under the Gnw. Sources: `nvwa-verbod-medische-claims`, `nvwa-toezicht-voedingssupplementen`.
34. **Cosmetics.** EU Regulation 1223/2009 art. 2(2), Dutch text read today: "stoffen of mengsels die bestemd zijn om te
    worden ingenomen, geïnhaleerd, ingespoten of ingebracht in het menselijk lichaam, niet als cosmetische producten worden
    beschouwd." An injectable product (for example an injectable GHK-Cu vial) cannot be a cosmetic; a cream with a copper
    peptide is a different product, supervised by the NVWA under the Cosmeticaverordening (NVWA cosmetics page, modified
    11 September 2026). Sources: `eu-regulation-1223-2009-cosmetics` (stubs-b.yaml), `nvwa-cosmetica-toezicht`.
35. **Opiumwet: none of the 21 compounds.** The Opiumwet (BWBR0001941, "Geldend van 17-09-2026 t/m heden") was searched in
    full (lists I, Ia and II) for every compound on the site and for "peptide", "groeihormoon", "somatropin", "thymosin",
    "melanotan", "bremelanotide", "semaglutide", "tirzepatide", "retatrutide", "semax", "selank", "GHK", "elamipretide",
    "thymalfasin", "KPV", "NMN", "nicotinamide": no hit (the only "NAD" hits are parts of other words). The Opiumwet
    therefore does not apply to any of them; the Gnw does. Source: `nl-opiumwet-lijsten-2026-09`.

### 1.5 A private person: what is and is not an offence

36. **Using a medicine is not an offence in the Gnw**; no article names "gebruiken" as a forbidden act (arts. 18, 38, 40,
    61, 62 checked). For doping: "Je kunt in Nederland niet strafrechtelijk vervolgd worden voor een positieve test of het
    gebruik van doping." Sources: `nl-gmw-art-40-handelsvergunning`, `dopingautoriteit-doping-en-de-wet` (legal-a.yaml,
    re-read today, unchanged).
37. **Possession for own use is not named.** Art. 40(2) names "in voorraad hebben" (keeping stock), not "bezitten";
    whether a few vials at home are "in voorraad" is not settled by any source found (5.1). The Dopingautoriteit: "De
    Nederlandse overheid gedoogt het bezit van doping voor eigen gebruik, maar heeft de handel in dopingmiddelen verboden."
    Buying ("kopen") is not named either. Sources: `nl-gmw-art-40-handelsvergunning`, `dopingautoriteit-doping-en-de-wet`.
38. **Importing for own use is forbidden for a medicine without a handelsvergunning.** Art. 40(2) names "in te voeren"
    (from a third country) and "anderszins binnen ... het Nederlands grondgebied te brengen" (also from an EU/EEA state),
    with no own-use exception; breach is an economic offence and can be fined administratively (facts 22, 25). The only
    own-use rule, art. 18(6)(a), lifts the art. 18 licence for a traveller who carries the medicine. Sources:
    `nl-gmw-art-40-handelsvergunning`, `nl-gnw-art-18-licence`, `nl-wed-art-1-2-6`, `nl-gnw-art-101-fines`.
39. **Courts: a parcel is not "carried" by you.** Rechtbank Den Haag, 23 April 2019 (ECLI:NL:RBDHA:2019:4817; cough
    lozenges ordered online from India and seized by Customs): the own-use exception "geldt voor het invoeren van
    geneesmiddelen die kennelijk bestemd zijn voor eigen gebruik door de persoon die de desbetreffende geneesmiddelen
    vervoert. Daarvan is in dit geval geen sprake, nu klaagster de hoestpastilles online heeft besteld en deze dus door een
    ander liet vervoeren. De zending was afkomstig uit India, zodat ook van invoer sprake is." The prosecutor said "Er zal
    in ieder geval geen strafrechtelijke vervolging plaatsvinden"; the goods were to be destroyed ("onttrekking aan het
    verkeer"). Gerechtshof Amsterdam, 21 February 2020 (ECLI:NL:GHAMS:2020:536; a traveller with a large quantity of pills
    from China): "Degene die de medicijnen invoert moet zelf kunnen aantonen dat deze voor eigen gebruik zijn, bijvoorbeeld
    middels een medische verklaring"; not own use given "de zeer aanzienlijke hoeveelheid"; fine of €2,500, €2,000 of it
    suspended (WED arts. 1, 2, 6 and Gnw art. 18). Sources: `nl-rbdha-2019-4817-postzending-eigen-gebruik`,
    `nl-ghams-2020-536-eigen-gebruik-reiziger`.
40. **Customs' published instructions on parcels (Handboek VGEM, Voorschrift Geneesmiddelen).** Ch. 5 (updated 21 April
    2026) and ch. 12 (updated 11 June 2026): the traveller exemption (art. 18(6)(a)) "ziet dus niet op handelszendingen, of
    post-, pakket-, en koerier zendingen; dan moet er een fabrikantenvergunning zijn"; "Deze vrijstelling is niet van
    toepassing bij vooruit- of nagezonden reizigersbagage. De reiziger moet de goederen altijd bij zich dragen." §12.4.4
    ("Vrijstelling eigen gebruik niet van toepassing"): "de Douane houdt de goederen tegen en meldt de casus aan IGJ wanneer
    deze aan de voorwaarden voldoet. Bevindingen die niet voldoen aan de voorwaarden, worden door de Douane zelfstandig
    strafrechtelijk afgehandeld. geneesmiddelen: wanneer sprake is van een handelskarakter. Werkzame stoffen: altijd
    ongeacht aard en omvang zending." §12.4.8: "De Douane neemt de goederen in beslag en maakt een (vereenvoudigd)
    proces-verbaal op"; "Er zijn lokaal afspraken gemaakt door de BFC met het OM om op te treden tegen zendingen
    geneesmiddelen voor eigen gebruik." Customs' flow chart for private parcels (October 2025) ends, for human medicines
    "kennelijk bedoeld voor eigen gebruik" with no commercial character, in "Vrijgave. Tenzij lokaal afspraken zijn gemaakt
    met het OM." The "voorwaarden" for reporting to the IGJ are in an internal list ("De actuele IGJ-lijst vindt u op
    ConnectPeople (alleen intern te raadplegen)"). So in Customs' practice a small own-use parcel is not always stopped; it
    can be held, reported to the IGJ, seized, or released, and which applies to a peptide vial is not public (5.3, 5.4).
    For **active substances** Customs' chapter 13 (modified 21 April 2026; found by the fact-check) is stricter: "Er is
    voor werkzame stoffen geen vrijstelling / ontheffing van toepassing op post-, pakket-, en koerierzendingen. Werkzame
    stoffen kunnen niet op deze wijze door een particulier voor eigen gebruik worden ingevoerd"; a non-commercial parcel of
    active substances for a private recipient is seized ("neemt u de werkzame stoffen in beslag"), and "Voor de
    afhandeling van de onregelmatigheden wordt ook de ontvanger als verdachte beschouwd".
    Sources: `douane-hvgem-geneesmiddelen-h5-fabrikantenvergunning`, `douane-hvgem-geneesmiddelen-h12-fysiek-toezicht`,
    `douane-hvgem-schema-particuliere-zendingen-2025`, `douane-hvgem-geneesmiddelen-h13-fysiek-toezicht-werkzame-stoffen`.
41. **Customs for the public.** Travellers: "Reist u naar Nederland? Dan mag u de meeste medicijnen gewoon meenemen als die
    voor eigen gebruik bestemd zijn. Neem de medicijnen mee in de originele verpakking." "Heeft u niet de juiste documenten?
    Dan pleegt u een strafbaar feit en neemt de Douane de medicijnen in beslag. Daarnaast kunnen we de Inspectie
    Gezondheidszorg en Jeugd inschakelen voor verdere afhandeling." (last update 26 October 2026). Import: "U mag alleen
    geneesmiddelen invoeren met een vergunning"; "U mag in Nederland: geen geneesmiddelen zonder vergunning binnenbrengen";
    Customs checks "in post-, pakket- en koerierszendingen" (last update 3 September 2026). Customs' page on foreign
    webshops lists "medicijnen" under "Koop dit niet online" (last update 29 June 2026; its URL contains a commerce token, so
    it is not registered; see 4.7). Its sub-page on medicines (published 31 August 2026, updated 14 September 2026; also
    not registrable for the same reason; found by the fact-check) is the clearest public statement: "Laat als particulier
    geen medicijnen per post, pakket of koerier uit een land buiten de EU sturen. Voor invoer is een vergunning of
    ontheffing nodig. De vrijstelling voor eigen gebruik geldt alleen als u het medicijn zelf meeneemt als reiziger. Deze
    vrijstelling geldt niet voor een pakket." On parcels from the EU: "Dan reizen de goederen vrij en controleert de Douane
    uw pakket niet. De toezichthouder in dat land controleert de aanbieder." From outside the EU, without the right
    licence or exemption "houdt de Douane het pakket tegen. De medicijnen kunnen in beslag worden genomen en de IGJ kan
    worden ingeschakeld." For a needed medicine that is not available: "Bestel het niet zelf. Vraag uw arts of apotheek
    wat mogelijk is" (the artsenverklaring). Sources: `douane-medicijnen-reizen-2026`, `douane-invoer-geneesmiddelen-2026`
    (the sub-page's points also rest on `douane-hvgem-geneesmiddelen-h5-fabrikantenvergunning`, `-h12-`, `-h13-` and
    `igj-leveren-op-artsenverklaring`).
42. **Passing a product on is supply.** Selling, offering, "afleveren" and "ter hand stellen" are in art. 40(2) for any
    medicine without a handelsvergunning, and art. 61(1) reserves UR medicines to pharmacists and dispensing GPs; both are in
    the WED list, so doing it on purpose is a crime (up to six years, €110,000). This holds without any commercial element
    ("ter hand stellen" = "het rechtstreeks verstrekken of doen bezorgen ... aan de patiënt"). Sources:
    `nl-gmw-art-40-handelsvergunning`, `nl-gmw-art-61-prescription`, `nl-wed-art-1-2-6`, `nl-gnw-art-1-lidstaat-werkzame-stof`.
43. **"Zelf invoeren" route: what can honestly be said.** (a) Travellers may bring their own medicines for their own use,
    in the original packaging (Customs; art. 18(6)(a)); this is about medicines prescribed or lawfully obtained, and does not
    lift art. 40(2) for a medicine without a handelsvergunning. (b) A parcel ordered from abroad is not covered by the
    traveller exemption (Rb Den Haag 2019; Customs ch. 5 and 12; Customs' public page of 31 August 2026: "Deze vrijstelling
    geldt niet voor een pakket"); if Customs classes the contents as an active substance, a private person cannot import it
    by parcel at all and the recipient is treated as a suspect (ch. 13). (c) The government's line: "Import van geneesmiddelen is
    alleen toegestaan als een handelsvergunning is verleend" (5 October 2026). (d) The legal route for a medicine without a
    Dutch handelsvergunning is the doctor's declaration (art. 40(3)(c), Regeling art. 3.17), applied for by a Dutch
    pharmacy, wholesaler, manufacturer or dispensing GP, never by the patient (fact 6). (e) No Dutch rule like Belgium's
    art. 12quater (own-use medicines lawfully obtained in another member state) exists: the Gnw and the Regeling Gnw and
    the Besluit Geneesmiddelenwet were searched for "eigen gebruik"; the only hit is art. 18(6)(a). Sources: facts 6, 7, 38–41.

### 1.6 Sport and doping in the Netherlands

44. **The Dopingautoriteit (name and status, 27 October 2026).** Unchanged name: "Dopingautoriteit". Wet uitvoering
    antidopingbeleid (Wuab, BWBR0041439, "Geldend van 05-07-2025 t/m heden") art. 4: "Er is een Dopingautoriteit. ... De
    Dopingautoriteit is de nationale antidopingorganisatie, bedoeld in de Wereld Anti-Doping Code"; the Dopingautoriteit
    calls itself a "zelfstandige bestuursorgaan" since 1 January 2019. Art. 2(1): "Iedere sporter draagt ervoor zorg dat hij
    in het belang van een dopingvrije sport handelt in overeenstemming met een voor hem bindend dopingreglement." (A new
    chair, Hinkelien Schreuder, took office on 1 June 2026; not needed on pages.) Sources: `nl-wuab-art-2-4-dopingautoriteit`,
    `dopingautoriteit-doping-en-de-wet`.
45. **The Nationaal Dopingreglement (NDR).** In force now: "NATIONAAL DOPINGREGLEMENT 2025", Instituut Sportrechtspraak,
    "vastgesteld op 2 mei 2025 en treedt in werking op 1 juni 2025"; "Het Nationaal Dopingreglement is gebaseerd op de World
    Anti-Doping Code 2021"; federations adopt it unchanged. Art. 71.10: presence and use violations can be committed only by
    members who are international- or national-level athletes or "recreatieve sporter", members competing at "Nationaal
    niveau B", or "leden die, al dan niet in wedstrijdverband, aan (actieve) sportbeoefening doen"; the Dopingautoriteit
    "bepaalt welke sporters recreatieve sporters zijn". The rules bind members of sports federations. From 1 January 2027:
    "Met de wijzigingen in de Code, wijzigt ook het Nationaal Dopingreglement (NDR) per 1 januari 2027", and "bonden de rol
    van aanklager, het opleggen van voorlopige schorsingen en de uitvoering van tuchtrecht in dopingzaken overdragen aan de
    Dopingautoriteit". The text of the 2027 NDR was not found (5.9). Sources: `isr-2025-nationaal-dopingreglement`,
    `dopingautoriteit-nationaal-dopingreglement`, `dopingautoriteit-code-2027`.
46. **Who is tested in the Netherlands** (re-read today, unchanged). "Elk lid van een sportbond kan in principe
    gecontroleerd worden op doping. In Nederland wordt er echter het meest gecontroleerd op het hoogste niveau, hoewel
    steekproefsgewijs ook controles op lager niveau plaatsvinden"; in Belgium "zelfs onverwachte dopingcontroles in
    fitnesscentra"; refusing a test "levert je doorgaans een schorsing op van twee jaar en misschien wel vier jaar"; "in de
    fitness in Nederland niet of nauwelijks dopingcontroles plaatsvinden"; a first violation brings "een sanctie ... die kan
    variëren van een waarschuwing tot vier jaar schorsing"; report suspected contaminated supplements at once and keep them.
    Added by the fact-check: the Dopingautoriteit has no investigative powers of its own but has data-exchange protocols
    with six enforcement bodies ("Naast NVWA-IOD zijn dat Inspectie Gezondheidszorg en Jeugd (IGJ), Politie, het Openbaar
    Ministerie, FIOD en Douane"), renewed with the NVWA-IOD on 3 December 2025, "met als doel dopingovertredingen op te
    sporen en af te handelen" (so a seizure can reach a federation member's anti-doping case; how often is not public).
    Sources: `dopingautoriteit-controles-belgie`, `dopingautoriteit-eigen-kracht`, `dopingautoriteit-positieve-test`
    (legal-b.yaml), `dopingautoriteit-2025-12-samenwerking-opsporing`.
47. **The 2027 Prohibited List: dates.** WADA: "The 2027 List of Prohibited Substances and Methods was approved by WADA's
    Executive Committee (ExCo) during its meeting on 10 September 2026 and enters into force on 1 January 2027"; page
    "Publication date 21 Sep 26". The Dopingautoriteit had said the final list would be published "uiterlijk op 1 oktober
    2026" (14 July 2026) and reported it on 28 September 2026: "De aanpassingen betreffen vooral verdere verduidelijkingen en
    er zijn enkele nieuwe voorbeelden toegevoegd"; the full Dutch translation will be online and in the Dopingwaaier app
    "vanaf 1 januari 2027". The Dutch comments on the draft were sent jointly by VWS, NOC*NSF, its athletes' commission and
    the Dopingautoriteit. Sources: `wada-2027-list-resource-page`, `dopingautoriteit-2027-list-news` (legal-b.yaml),
    `dopingautoriteit-2026-07-reactie-concept-lijst-2027`.
48. **The 2027 list changes nothing for any of the 21 compounds.** The 2026 and 2027 list PDFs were compared line by line
    for every compound (report only):

    | Compound | 2026 list | 2027 list | Change |
    |---|---|---|---|
    | BPC-157 | S0, named ("including but not limited to BPC-157") | same | none |
    | AOD-9604 | S2.2.3, "growth hormone fragments, e.g. AOD-9604" | same | none |
    | CJC-1295, tesamorelin | S2.2.4, GHRH analogues "(e.g. CJC-1293, CJC-1295, sermorelin and tesamorelin)" | same | none |
    | ipamorelin | S2.2.4, growth hormone secretagogues | same | none |
    | hexarelin | S2.2.4, GHRPs "examorelin (hexarelin)" | same | none |
    | TB-500 | S2.3, "Thymosin-β4 and its derivatives e.g. TB-500" | same | none |
    | MOTS-c | S4.4.1, AMPK activators | same | none |
    | semaglutide, tirzepatide | not on the list; 2026 Monitoring Program item 6: "Markers of Semaglutide and Tirzepatide: In and Out-of-Competition" | not on the list; 2027 Monitoring Program item 6: "GLP-1 Agonists: In and Out-of-Competition: Semaglutide and tirzepatide" | none (still monitored only, not prohibited; only the item's wording changed) |
    | retatrutide, epitalon, GHK-Cu, KPV, melanotan II, PT-141 (bremelanotide), Semax, Selank, SS-31 (elamipretide), thymosin alpha-1, NAD precursors | not named | not named | none |

    The only peptide-relevant change is the S0 wording: the 2027 examples read "(e.g. drugs under pre-clinical or clinical
    development or discontinued, designer drugs, peptides, substances approved only for veterinary use)"; 2026 had no
    "peptides". WADA: "Even if a peptide is not specifically named on the List, utmost caution should be taken as it may
    still be prohibited ... for clarity, peptides are now named as examples in this section." Sources: `wada-2027-list-en`
    (bpc-157.yaml), `wada-2026-list-en` (bpc-157.yaml), `wada-2027-list-explanatory-note` (legal-b.yaml),
    `wada-2027-monitoring-program` (tirzepatide.yaml).

---

## 2. What changed since 23 October 2026

Compared with the snapshot pages (`research/for-nl-site/snapshot-2026-10-23/content/pages-en/legal/{nl,index,
research-use-only,sport-and-doping,whats-changing}.mdx`), the manifests and `research/legal-a.md`, `legal-b.md`,
`guides.md`:

1. **No change in the law.** Gnw (from 9 September 2025), WED (from 22 September 2026), Regeling Gnw (from 1 January
   2026), Sr art. 23 (from 1 July 2026; 2026 amounts) and the fine categories are all as checked on 20–23 October. The fine
   categories were not indexed again in 2026. Every reused law and IGJ id returned HTTP 200 today and says what it is
   cited for (EUR-Lex 202, read via CELLAR). New: a future WED version from 1 January 2027 exists (Gnw list unchanged);
   two pending Gnw bills exist, neither relevant.
2. **Saved fact now incomplete: "The parcel can be stopped and destroyed. We found no fines reported for people buying for
   themselves" (snapshot `legal/nl`, Lead and callout; `research-use-only` compare row).** Still true as written, but there
   is now sourced detail the pages lacked: a published judgment holding that an online-ordered parcel is not covered by
   the own-use exemption, with no prosecution and destruction (Rb Den Haag 2019, fact 39); Customs' own instructions and
   flow chart, which show that an own-use, non-commercial parcel may be released, reported to the IGJ or seized (fact 40);
   and the government's statement of 5 October 2026 (fact 29). legal-a.md conflict 3 cited douane.nl as "not on the
   allowlist, so not cited"; it is proposed for the allowlist now (section 7).
3. **Saved fact needs nuance: "Customs (Douane) ... Stops parcels; contents can be seized and destroyed"** (snapshot
   `nl-enforcement-map`). Correct for SHIELD V; Customs' instructions add that own-use, non-commercial parcels are not
   always held (fact 40), and that Customs officials are investigating officers under Gnw art. 116 (fact 19).
4. **Saved row needs nuance: NVWA "looks mainly at veterinary medicines"** (snapshot `nl-enforcement-map`, from the IGJ's
   illegal-trade page). For peptide products the NVWA also matters as the Warenwet authority for supplements and
   cosmetics, and it treats a food with medical claims as a medicine (facts 21, 33, 34).
5. **New since the saved material: the IGJ enforcement of August 2026 is confirmed today, with a date correction.**
   legal-b.md (3.4) and guides.md (6.1) give "bevel 24 August 2026"; the IGJ's 31 August page says "De inspectie heeft op 18
   augustus een bevel gegeven"; 24 August is the publication date. guides.md 6.8 said the fact-checker "could not re-confirm
   it"; both pages were fetched today (HTTP 200; listed in the IGJ news sitemap). Still not citable (names the seller).
6. **New: answers of the Minister of VWS, 5 October 2026** (fact 29), the only official Dutch statement found since 23
   October on online weight-loss medicines and personal import.
7. **New: the IGJ's own explanation of "reclame"** (fact 14) and art. 83 Gnw versus Directive art. 86(2) (fact 13), which
   refine the publisher line (section 4.1).
8. **New: Europol SHIELD VI results (25 February 2026)**, with the Netherlands among the 30 countries (fact 30). The saved
   pages had only SHIELD V (Dutch figures; still the latest Dutch figures).
9. **New for the sport pages: the NDR changes on 1 January 2027 and federations hand prosecution and discipline in doping
   cases to the Dopingautoriteit** (fact 45). The saved pages said nothing about the NDR. The NDR in force is the ISR's NDR
   2025 (from 1 June 2025), based on the 2021 Code.
10. **WADA 2027 list date confirmed: 21 September 2026** (ExCo approval 10 September 2026). The saved pages (citing UKAD)
    already said 21 September; the computed task's "around 1 October 2026" is the Dopingautoriteit's "uiterlijk op 1
    oktober 2026" deadline, not the publication date.
11. **WADA: no change for any of the 21 compounds** (fact 48); the saved sport table's named entries are still right for
    2027.
12. **IGJ online-medicines page**: now has a video of 3 November 2025 (fact 27). Its text still advises against ordering
    online; note that it also says "Wilt u toch medicijnen online bestellen? Doe dat dan alleen bij betrouwbare websites" (do
    not echo "betrouwbare" in our own voice, content brief "legal line").
13. **Off-label position page** was modified on 13 May 2026 (legal-a.md recorded "amended 8 May 2026" from the PDF; the page
    metadata says 13 May). Content unchanged as far as cited.
14. **No new IGJ page about peptides as such.** The IGJ's February 2026 warning about peptides that news media reported
    (BNR, 14–15 February 2026; IGJ, NVWA and Lareb responses to Radar, 2 March 2026) is not on igj.nl (5.6). (Fact-check:
    Customs has published on peptides, 6 August and 31 August 2026; see facts 27, 31, 41.)
15. **CONTENT-GUIDE §1 wording vs the law** (not a page fact, but the base of the publisher line): §1 says "public
    advertising for a medicine without marketing authorisation is prohibited"; art. 84(1) forbids all advertising
    (public or professional) for such a medicine, and art. 85 adds the public ban for prescription medicines. §1 also says
    "A commercial link is what supplies that purpose. The absence of commerce is what makes the content legal"; the IGJ says
    a third party can advertise even if it does not offer the product for sale (fact 14). See 4.1 and 6.2. (Fact-check:
    the Raad van State held on 25 February 2026 that a website with no "commercieel doel of belang" made advertising
    (fact 17a); §1's sentence is now contradicted by the highest administrative court, not only by the IGJ.)
16. **(Fact-check) New case law on advertising, 2026:** Raad van State 25 February 2026, Rb Amsterdam 10 April 2026,
    Rb Noord-Nederland 21 April 2026 (fact 17a), and the IGJ publishes its fines since 1 January 2026. They bear directly
    on the publisher line (4.1, 6.2) and on how compound pages write about off-label use of prescription medicines (6.6).
17. **(Fact-check) Customs on active substances and on peptides:** handbook chapter 13 (no own-use import of active
    substances by parcel; recipient treated as a suspect; fact 40), the background article of 6 August 2026 and the
    public page of 31 August 2026 (facts 27, 31, 41). The saved pages had none of these.

---

## 3. Verification log (all read 27 October 2026)

| URL (or document) | How read, result | Wording relied on |
|---|---|---|
| wetten.overheid.nl/BWBR0021505/ (→ /2025-09-09) | curl, 200, HTML→text | "Geldend van 09-09-2025 t/m heden"; arts. 1(1) b, cc, dd, hh, ii, ll, lll, s, x.1, xx, ijij; 18; 38; 40; 61; 62; 67; 67a; 68; 82; 83; 84; 85; 100; 100a–e; 101; 115; 116 (quotes in section 1) |
| wetten.overheid.nl/BWBR0021505/2025-09-09/0/informatie | curl, 200 | "Geraadpleegd op 27-10-2026. Geldend van 09-09-2025 t/m heden."; "Aanhangig Dossiernummer: 35410 ... Artikel: 101"; "Dossiernummer: 36716 ... Artikel: 62"; "Wijziging(en) zonder datum inwerkingtreding aanwezig" |
| repository.overheid.nl SRU, dossiers 35410, 36716 | curl, 200 | titles: "Wet transparantieregister zorg" (initiatiefvoorstel Ploumen); "digitale communicatiemiddelen voor het geven van voorlichting bij de verkoop van UAD-geneesmiddelen" |
| wetten.overheid.nl/BWBR0022160/ (→ /2026-01-01) | curl, 200 | "Geldend van 01-01-2026 t/m heden"; arts. 3.17, 3.17a, 6.12, 6.13 |
| wetten.overheid.nl/BWBR0021672/ (Besluit Gnw) | curl, 200 | "Geldend van 01-08-2018 t/m heden"; no "eigen gebruik" provision |
| wetten.overheid.nl/BWBR0002063/ (→ /2026-09-22) and /2027-01-01 | curl, 200 | arts. 1 (1°), 2, 6 quoted; future version: same Gnw articles |
| wetten.overheid.nl/BWBR0001854/ (→ /2026-07-01), art. 23 | curl, 200 | "[Red: Per 1 januari 2026: € 1.100.000.]" and the five other notes |
| rijksoverheid.nl … hoe-hoog-zijn-de-boetes-in-nederland | curl, 200; modified 16 April 2026 | "Tabel: Maximale geldboetes sinds 1 januari 2026" with 2024 column |
| wetten.overheid.nl/BWBR0041790/ (→ /2025-03-01) | curl, 200 | "Geldend van 01-03-2025 t/m heden"; annex Gnw: DB, "€ 150.000,00", stars; Stap 2, 6, 7 |
| wetten.overheid.nl/BWBR0001941/ (→ /2026-09-17) | curl, 200 | lists I, Ia, II searched; no compound |
| wetten.overheid.nl/BWBR0041439/ (→ /2025-07-05) | curl, 200 | Wuab arts. 2(1), 4 |
| wetten.overheid.nl/BWBR0029746, BWBR0014814 | curl, 200 | Warenwetbesluit cosmetische producten 2011 ("Geldend van 01-03-2014 t/m heden"), Warenwetbesluit voedingssupplementen ("Geldend van 13-12-2014 t/m heden"): existence and version only; not cited |
| zoekservice.overheid.nl SRU (BWB titles) | curl | found BWBR0041790, BWBR0041439, BWBR0029746, BWBR0014814 |
| repository.overheid.nl SRU full text "peptiden", "peptide", "retatrutide", "GLP-1", "afslankinjecties" (since 2025) | curl | no Kamervragen on peptides; one answer on GLP-1 (ah-1272885) |
| zoek.officielebekendmakingen.nl/ah-1272885.pdf | curl, 200, pdftotext | answers 3, 5, 6, 10, 13 (fact 29); metadata page: "gepubliceerd ... 05-10-2026 ... Aanhangsel van de Handelingen", vergaderjaar 2026-2027 |
| igj.nl: online-medicijnen; toezicht-op-online-medicijnen; illegale-geneesmiddelen; vragen-over-afleveren…; leveren-op-artsenverklaring; standpunt off-label; eigen-bereidingen-apotheek; news 2025-02-28, 2025-09-03, 2025-10-30, 2026-10-20 | curl, all 200; DCTERMS dates read | quotes in facts 6, 10, 21, 26, 27; dates: online-medicijnen modified 23-03-2026; toezicht modified 12-09-2023; illegale handel 11-11-2025; Q&A 20-08-2026; artsenverklaring 06-02-2026; off-label 13-05-2026; eigen bereidingen 08-07-2025; nepapotheken modified 14-04-2026 |
| igj.nl/actueel/nieuws/2026/08/24/… and /2026/08/31/… (seller named in URL) | curl, 200 | read for fact 28 only; not registered |
| igj.nl sitemaps (news + 8 parts, 802 URLs; fact-check: the index lists 40 sitemaps with 3,739 URLs, all read) | curl | no 2025–2026 page on peptides other than the two August pages; listed 2026 news checked by title (fact-check found three relevant items this pass missed: 29 Dec 2025 fines publication, 16 Apr 2026 NPS websites, and the 2025 enforcement news of 16 May, 17 Jun and 8 Aug 2025) |
| igj.nl/zoeken?trefwoord=peptiden | curl, 200 | results script-rendered; no content |
| igj.nl/zorgsectoren/geneesmiddelen/geneesmiddelenreclame (+ /wat-is-geneesmiddelenreclame, /betrokken-instanties-…) | curl, 200 | facts 14, 16; wat-is issued 30-06-2025 modified 04-11-2025; betrokken instanties 13-04-2026 |
| igj.nl/documenten/vraag-en-antwoord/veelgestelde-vragen-over-melatonine | curl, 200 | fact 32; no company named on the page |
| igj.nl IGJ interventiebeleid PDF (2022) | curl, 200 | "Versie maart 2022 (einddatum maart 2023)": outdated, not used |
| www.landelijkmeldpuntzorg.nl | curl, 200 → igj.nl/onderwerpen/klachten-en-melden/klacht-of-vraag-over-zorg-of-jeugdhulpverlening | "Of over een medicijn of medisch hulpmiddel?" (reporting route is an IGJ page) |
| douane.nl: …/dit-mag-u-niet-zomaar-meenemen/medicijnen/; …/vgem/veiligheid/geneesmiddelen/; …/dit-mag-u-niet-online-kopen/ | curl, 200 | fact 41; "Laatste update 26-10-2026", "03-09-2026", "29-06-2026" |
| kennisbank.douane.nl Handboek VGEM, Voorschrift Geneesmiddelen: ch. 2, 5, 6, 7, 8, 12, 19, 20, 22 | curl, 200 | facts 31, 40; modified 21-04-2026 (ch. 2, 5, 6, 7, 8), 11-06-2026 (ch. 12), 09-09-2026 (ch. 20), 14-08-2025 (ch. 22 "alleen intern te raadplegen") |
| kennisbank.douane.nl/wp-content/uploads/2025/10/23.-Schema-geneesmiddelen-post-pakket-en-koerierszendingen.pdf | curl, 200, pdftotext | "Vrijgave. Tenzij lokaal afspraken zijn gemaakt met het OM" |
| download.belastingdienst.nl … convenant … bijlage 2 geneesmiddelen (two URLs from a search) | curl, 404 | not used |
| data.rechtspraak.nl/uitspraken/content?id=ECLI:NL:RBDHA:2019:4817 and …GHAMS:2020:536 | curl, 200 (open-data XML) | fact 39 |
| uitspraken.rechtspraak.nl/details?id=… (both) | curl 403; read in the built-in browser (own tab), loads | titles "ECLI:NL:RBDHA:2019:4817, Rechtbank Den Haag, 19/619" and "ECLI:NL:GHAMS:2020:536, Gerechtshof Amsterdam, 23-001247-19"; "Datum uitspraak 23-04-2019" / "21-02-2020"; same wording |
| nvwa.nl: verbod-op-medische-claims; toezicht-op-voedingssupplementen; cosmetica; news 2026-01-22 blocklist | curl, 200 | facts 15, 33, 34; modified 12-12-2025, 19-02-2026, 11-09-2026, 22-01-2026 |
| dopingautoriteit.nl: home; juridisch; doping-en-de-wet; nationaaldopingreglement; nationaal-niveau-b; dopinglijst; code-2027; controles-in-belgie; eigenkracht; positief; news 2026-03-30, 2026-07-14, 2026-09-28; NDR 2025 PDF | curl, all 200; PDF via pdftotext | facts 36, 37, 44–47 |
| wada-ama.org/en/resources/2027-prohibited-list | curl (browser UA), 200 | "Publication date 21 Sep 26"; ExCo 10 September 2026 |
| wada-ama.org PDFs: 2027 list, 2026 list, 2027 explanatory note, 2027 monitoring program | curl, 200, pdftotext | fact 48 |
| wada-ama.org Code 2027, ISTUE 2027, 2027 Code page, prohibited-list page | curl, 200 | status check only (cited by reuse) |
| europol.europa.eu …/3354-individuals-prosecuted-… | curl and WebFetch: script shell; read in the built-in browser (own tab) | "PUBLISH DATE 25 FEB 2026"; results list; participating countries include "Netherlands"; "counterfeit Semaglutide-based products used as fat-burners" |
| publications.europa.eu/resource/celex/61982CJ0227, 62007CJ0140, 62013CJ0358, 62007CJ0421 | curl (HTML Accept), 200 | fact 32 and 15 quotes |
| publications.europa.eu/resource/celex/02001L0083-20250101 | curl, 200 | art. 86(2), 4th indent |
| publications.europa.eu/resource/celex/32009R1223 (Dutch) | curl, 200 | art. 2(1)(a), 2(2) |
| eur-lex.europa.eu (all EU ids) | curl, 202 (bot shield) | not readable by script; texts read via CELLAR above |
| keuringsraad.nl/regels-wetgeving/geneesmiddelen/, keuringsraad.nl/over-de-keuringsraad/koag-kag/, cgr.nl | curl, 200 | context only (names; "Keuringsraad KOAG/KAG heet sinds 2013 Keuringsraad Kennis en Advies gezondheidsreclame"); not registered (IGJ page cited instead) |
| Media (nltimes.nl, bnnvara.nl Kassa, radar.avrotros.nl), WebSearch/WebFetch | read for leads only | not citable (media; one names sellers); see 5.6 |

Status check of every reused id cited here (curl, 27 October 2026): all `wetten.overheid.nl`, `igj.nl`,
`rijksoverheid.nl`, `dopingautoriteit.nl`, `lareb.nl`, `wada-ama.org` URLs returned 200; the EUR-Lex URLs returned 202
and were read via CELLAR.

---

## 4. Conflicts and how resolved

1. **"The absence of commerce is what makes the content legal" (CONTENT-GUIDE §1) vs the IGJ.** The IGJ: a third party
   can make advertising "Dat een geneesmiddel door die onafhankelijke derde niet te koop wordt aangeboden maakt dat niet
   anders", and information must not praise ("aanprijzen") a medicine. Resolution for Dutch pages: the publisher line says
   what the law and the IGJ say (advertising is judged by its purpose; information is not advertising; anyone can
   advertise, also without selling), and that this is why the site sells nothing, links to no seller, gives no doses and
   praises no product. It should not claim that selling nothing alone makes the content lawful. Flagged (6.2).
   (Fact-check: now settled by the courts, not only the IGJ. Raad van State 25 February 2026 and Rb Amsterdam 10 April
   2026 (fact 17a): no commercial aim or interest does not stop a text from being advertising; what counts is whether it
   praises ("wervende bewoordingen", one-sided positive success stories) and, for authorised medicines, whether it stays
   in line with the SmPC. A balanced, purely informative text in line with the SmPC is not fined (Rb Amsterdam, para.
   10.1). The publisher line should say this test, not "the absence of commerce makes it legal".)
2. **Art. 83(d) Gnw vs Directive art. 86(2).** The Dutch text omits the Directive's condition "provided that there is no
   reference, even indirect, to medicinal products". Resolution: the pages do not rely on art. 83(d). Flagged (6.3).
3. **"Bevel 24 August 2026" (legal-b.md, guides.md) vs the IGJ's own text "op 18 augustus een bevel gegeven".** The IGJ
   text wins: given 18 August, published 24 August 2026.
4. **Customs: "Vrijstelling eigen gebruik niet van toepassing" (ch. 12.4.4, ch. 5.5) vs the flow chart's "Vrijgave".**
   Both are Customs' own instructions. Read together: the own-use exemption does not legalise a parcel, but Customs does not
   act on every own-use parcel; it holds and reports to the IGJ when internal conditions are met, acts under criminal law
   when the shipment is commercial, follows local agreements with the OM, and otherwise releases. Pages say: a parcel "kan"
   be stopped, reported to the IGJ or seized; what happens to a given parcel is not public. Flagged (6.4).
5. **"Published around 1 October 2026" (computed task) vs WADA "Publication date 21 Sep 26".** WADA wins; 1 October was
   the Dopingautoriteit's announced latest date.
6. **IGJ February 2026 peptide warning.** Media quote an IGJ spokesperson ("Offering medicines without a trading permit,
   even with terms like 'for research purposes', is illegal"; Radar 2 March 2026: supervision by the IGJ or NVWA "afhankelijk
   van het aanbod"). No IGJ page with this statement exists on igj.nl. Resolution: not used; the "research use only" point
   rests on the law (art. 1(1)(b), 40), the CJEU tests, Customs' manual and the NVWA (facts 31–33).
7. **Douane page "Dit mag u niet online kopen".** It supports "Customs lists medicines among things not to order from
   foreign webshops", but its URL contains "kopen" (commerce token, `config/commerce-tokens.json` nl). Resolution: not
   registered; the same point rests on `douane-invoer-geneesmiddelen-2026` and the Customs manual. The same applies to the
   Rijksoverheid topic page `/onderwerpen/geneesmiddelen/online-medicijnen-kopen` (not registered).
8. **NVWA "veterinary medicines" (IGJ page) vs NVWA's Warenwet role.** Both true; the pages should say both (2.4).
9. **Snapshot `legal/nl` callout "We found no official statement on whether the IGJ fines people who import a small
   amount for themselves."** Still true for the IGJ. The VWS fining policy does provide a factor for "natuurlijk persoon"
   (fact 24) and a criminal court fined a traveller who imported a large quantity (fact 39), but neither is a fine for a
   small own-use import. The callout stays as unknown, with these facts added.

---

## 5. UNRESOLVED (write as unknown, or leave out)

1. Whether "in voorraad hebben" (art. 40(2), 18(1)) covers a private person who keeps a few vials for own use. No law
   text, court ruling or IGJ statement found.
2. Whether the IGJ (or the OM) has ever fined or prosecuted a private person for a small own-use import of an
   unauthorised medicine. None found (IGJ news, sitemaps, rechtspraak search via web search, official publications;
   fact-check: also all 40 igj.nl sitemaps, the IGJ's register of published fines (one entry, 28 September 2026, a media
   company) and rechtspraak.nl searches for "Geneesmiddelenwet eigen gebruik invoer", "semaglutide", "Ozempic",
   "peptiden"). Natural persons have been fined for advertising (fact 17a), not for own-use import.
3. Which parcels Customs reports to the IGJ: the "IGJ-lijst" is internal ("alleen intern te raadplegen"); the "lokale
   afspraken ... met het OM" are not published.
4. Whether a lyophilised peptide vial sold "for research" is, for Customs, a medicine in "farmaceutische vorm" or a
   "werkzame stof" (which Customs handles under criminal law "altijd ongeacht aard en omvang zending"). Customs' manual
   gives the tests, not the answer for this product. (Fact-check: what follows from each answer is now public: as an
   active substance it cannot be imported by a private person by parcel at all, the parcel is seized and the recipient
   is treated as a suspect (ch. 13, fact 40). Which class a given vial falls in remains unknown.)
5. What happens in practice to parcels from other EU/EEA states (no customs check at internal borders). Art. 40(2) applies
   in law; no source on enforcement. (Fact-check: Customs' public page of 31 August 2026 says it does not check such
   parcels and "De toezichthouder in dat land controleert de aanbieder"; that page cannot be linked (commerce tokens in
   its URL). Whether anyone acts against the Dutch recipient of an intra-EU parcel is still unknown.)
6. The IGJ's February 2026 statements on peptides and its "lopende onderzoeken" into peptide sites: media only; no IGJ
   page. Leave out or say "no official IGJ page about peptides was found". (Fact-check: still no IGJ page; but Customs
   has an official article that names peptides, `douane-2026-08-illegale-online-handel-medicijnen`, which pages can cite.)
7. Whether any Dutch court has ruled on a peptide (BPC-157, TB-500, retatrutide etc.) under the Gnw. None found.
   (Fact-check, corrected: for the unauthorised research peptides still none found; but courts have ruled on semaglutide
   under the Gnw's advertising rules (Rb Amsterdam 10 April 2026, fact 17a), and a criminal trade judgment lists one
   semaglutide item among many medicines charged (Rb Gelderland 10 March 2025, ECLI:NL:RBGEL:2025:2489; not registered,
   not about peptides). Write "no Dutch court ruling on the unauthorised peptides was found".)
8. The date of the next indexation of the fine categories: not announced on the pages read; do not state one.
9. The text of the NDR 2027: announced for 1 January 2027, not found published on 27 October 2026.
10. Whether S0 applies to compounds not named on the list that are approved somewhere (Semax, Selank, PT-141, SS-31,
    thymosin alpha-1) or used in cosmetics/supplements (GHK-Cu, NAD precursors), and to KPV, epitalon, melanotan II:
    WADA does not say; ask the Dopingautoriteit (dopingvragen). Write "ask", as the saved sport table did.
11. Retatrutide's approval status worldwide on 27 October 2026 (for the S0 point): not checked in this topic (EU-status
    research); the August 2026 IGJ text says it "nog niet goedgekeurd door de beoordelingsautoriteiten" but cannot be cited.
12. Whether the KOAG/KAG and CGR codes apply to a non-commercial information publisher. No source says so either way.
    (Fact-check: the Keuringsraad's own page addresses its rules to "adverteerders"; still not conclusive. The statutory
    test of fact 17a applies regardless of the codes.)
15. (Fact-check) Whether the 10 April 2026 Amsterdam judgment is under appeal, and the outcome: an appeal to the Raad van
    State is reported by media only. Pages should not depend on it; the Raad van State's own ruling of 25 February 2026
    is final.
16. (Fact-check) The reasons in the IGJ's published fine of 28 September 2026 (a media company; €51,000 according to that
    company's published reaction): the IGJ's PDF summary was not read (the register is a script application; the
    download was not opened). The company's reaction says the fine is for "geneesmiddelenreclame" in journalism and that
    it appeals. Describe at most as "in 2026 the IGJ published another fine on a media company over articles about
    medicines", or leave out.
13. Whether a traveller may bring in a medicine that is authorised in another EU state but has no Dutch or EU-wide
    handelsvergunning (art. 40(2) has no own-use exception; Customs says most medicines may be brought for own use).
14. The number of IGJ reports about peptides specifically: the IGJ cannot split its figures (minister's answer 6, 5
    October 2026: "kan de IGJ geen betrouwbare uitsplitsing geven").

---

## 6. Open questions for the legal or medical reviewer

1. **August 2026 IGJ enforcement (fact 28).** May a Dutch page mention, without a citation, that the IGJ ordered an online
   seller of retatrutide, tirzepatide and semaglutide to stop and imposed a penalty payment in August 2026? If a citation is
   required, is citing a page that names the seller acceptable in this one enforcement context? (Open since legal-a.md 4.7,
   legal-b.md 3.4, guides.md 6.1.)
2. **Publisher line.** Is "advertising is judged by its purpose; the IGJ says information is not advertising, but anyone,
   also someone who sells nothing, can make advertising" the right summary, and is it enough to say "that is why we sell
   nothing, link to no seller, give no doses and praise no product"? Should CONTENT-GUIDE §1 ("the absence of commerce is
   what makes the content legal"; "public advertising for a medicine without marketing authorisation") be reworded to match
   art. 84(1) and the IGJ text? (Fact-check: more urgent now. The Raad van State, 25 February 2026, fined a non-commercial
   information website; Rb Amsterdam, 10 April 2026, fined journalism; fact 17a. Suggested test for the publisher line:
   "balanced, purely informative, never praising, in line with the SmPC for authorised medicines; for medicines without
   a handelsvergunning, no advertising at all (art. 84(1))". Owner decision; the English guide is not edited here.)
3. **Art. 83(d) Gnw** lacks the Directive's "no reference, even indirect, to medicinal products" condition. Can a health
   information site rely on art. 83(d) at all, given conforming interpretation?
4. **Customs' flow chart (fact 40).** Is it fair to tell readers that an own-use parcel "can" be stopped, reported to the
   IGJ or seized, and is sometimes released? Or does this risk being read as a hint (CONTENT-GUIDE §1a)? Suggested wording
   keeps it to what the law forbids and what can happen, without saying what usually happens.
5. **"Werkzame stof" route for powders (5.4).** Is our reading of art. 38 and Customs' ch. 8 and 12.4.4 right, and should a
   page mention that a powder treated as an active substance is handled more strictly than a medicine?
6. **IGJ's list of banned advertising includes "gebruik van een geneesmiddel voor een ziekte waarvoor dat geneesmiddel
   niet is geregistreerd".** Compound pages describe off-label evidence for authorised medicines (semaglutide, tirzepatide,
   tesamorelin). Please confirm that neutral reporting of trial evidence for unregistered uses is "informatie", not
   "reclame". (Fact-check: Rb Amsterdam, 10 April 2026, para. 7.7, found an article "uitsluitend" about off-label use of a
   semaglutide product, without the SmPC's side effects and contraindications, in breach of art. 84(2) once it was
   advertising. Compound pages that discuss off-label evidence should show the authorised indication and the SmPC's main
   risks next to it, and never use success stories or praise.)
11. **(Fact-check) Customs' public page "medicijnen online bestellen" (31 August 2026).** It is the clearest official text
   for the "zelf invoeren" route and for intra-EU parcels, but its URL carries the commerce tokens "kopen" and
   "bestellen" (config/commerce-tokens.json), so it cannot be linked. Options: rest the points on the handbook chapters
   and `douane-invoer-geneesmiddelen-2026` (recommended), or an owner exception. (Its WordPress shortlink
   `https://www.douane.nl/?p=17030` redirects to the same URL; using it to get past the token rule is not recommended.)
12. **(Fact-check) Sources whose text, not title or URL, names a business:** `douane-2026-08-illegale-online-handel-medicijnen`
   (names a webshop in a criminal case) and `nl-rbams-2026-5160-publieksreclame-journalistiek` (names the publisher that
   was the claimant, and brand names). CONTENT-GUIDE §11 bars only titles and URLs; please confirm these may be cited
   without ever quoting the names.
7. **Possession (5.1)** and the Dopingautoriteit's "gedoogt het bezit van doping voor eigen gebruik": may a page extend
   this tolerance statement to non-doping medicines? Suggested: no, quote it only for doping substances.
8. **Damgaard framing.** NVWA writes that third parties "geen enkele band hebben" can still advertise; the judgment's facts
   (legal-a.md 7, error 1) show the journalist had earlier prepared the product's information. Please confirm the B1
   summary used on the about pages.
9. **NDR scope.** Is "the rules bind members of sports federations (also recreational members who practise sport); gym
   users who are not members are not bound" a fair B1 reading of Wuab art. 2(1) and NDR art. 71.10?
10. **Aanbiedersmedicijnen.nl.** The Rijksoverheid and IGJ point readers to this official list of registered online
    sellers. Linking it could be read as help finding a seller (CONTENT-GUIDE §1). Recommend not linking it and describing
    the EU logo check in words only; editor to confirm.

---

## 7. Suggested data changes (for the merge)

**Sources.** Merge `research/nl/sources/nl-law.yaml` (40 new entries: 32 from the research, 8 added by the fact-check) into the Dutch research sources file
(`src/data/sources/nl-research-law.yaml` or the name the merge uses). Reused ids are listed at its top. No entry names a
seller or company; the two August 2026 IGJ pages are deliberately not registered.

**Link allowlist (`config/link-allowlist.json`, hosts):**

| Host | Why |
|---|---|
| `www.douane.nl` | Dutch Customs (Douane, part of the Belastingdienst): official rules for travellers' medicines and for importing medicines |
| `kennisbank.douane.nl` | Dutch Customs' public handbooks (Handboek VGEM, Voorschrift Geneesmiddelen): how Customs applies the Geneesmiddelenwet to parcels and travellers |
| `uitspraken.rechtspraak.nl` | The Dutch judiciary's official database of published (anonymised) court judgments |
| `zoek.officielebekendmakingen.nl` | Official government publications (Staatsblad, Staatscourant, Kamerstukken, Aanhangsel Handelingen) |
| `www.nvwa.nl` | Netherlands Food and Consumer Product Safety Authority: supervises supplements and cosmetics (Warenwet) and co-supervises the Geneesmiddelenwet |

(`wetten.overheid.nl`, `repository.overheid.nl` are covered by `.overheid.nl`; `www.europol.europa.eu` and
`publications.europa.eu` by `.europa.eu`; `www.igj.nl`, `www.rijksoverheid.nl`, `www.dopingautoriteit.nl`,
`www.wada-ama.org` are listed. Not proposed: `keuringsraad.nl`, `www.cgr.nl` (cite the IGJ page instead),
`www.aanbiedersmedicijnen.nl` (6.10).)

**Contact card `src/data/jurisdictions.yaml`, `code: NL`.** No change needed from this topic: `inspectorate` (IGJ online
medicines page, 200, carries the "Illegale handel melden" section that leads to the Landelijk Meldpunt Zorg),
`anti_doping` (`https://www.dopingautoriteit.nl/`, 200, name unchanged), `medicines_law` (Gnw, 200) all verified today.
Optional: if the card should send readers straight to the place to report an illegal website, the IGJ page
`https://www.igj.nl/onderwerpen/klachten-en-melden/klacht-of-vraag-over-zorg-of-jeugdhulpverlening` ("Het Landelijk
Meldpunt Zorg"; www.landelijkmeldpuntzorg.nl redirects there) could replace the inspectorate URL; the schema has no
separate field for it. Help services (huisarts, huisartsenpost, 113, Drugs Infolijn) belong to the help-services research.

**Tracker (`src/data/tracker.yaml`, `src/i18n/nl/tracker.json`):**
- `nl-igj-online-sellers`: latest dated official step can move to 5 October 2026 (minister's answers,
  `tk-2026-ah-249-antwoord-afslankmedicatie`), or to 25 February 2026 for the Europe-wide SHIELD VI results
  (`europol-2026-02-shield-vi`); the August 2026 IGJ action is not citable (6.1). (Fact-check: other dated official
  steps: 16 April 2026 IGJ/NVWA take 43 NPS websites offline, `igj-2026-04-nps-websites-offline`; 6 August 2026 Customs
  on peptides and slimming products, `douane-2026-08-illegale-online-handel-medicijnen`.)
- (Fact-check) Possible new item `nl-advertising-case-law-2026`: Raad van State 25 February 2026 (website, final) and
  Rb Amsterdam 10 April 2026 (journalism; appeal reported by media only); IGJ publishes fines since 1 January 2026.
  Sources: `nl-rvs-2026-1072-publieksreclame-website`, `nl-rbams-2026-5160-publieksreclame-journalistiek`,
  `igj-2025-12-boetes-openbaar`.
- `wada-2027-prohibited-list`: NL local sources `dopingautoriteit-2027-list-news` and
  `dopingautoriteit-2026-07-reactie-concept-lijst-2027`; date of publication 21 September 2026 (`wada-2027-list-resource-page`).
- New item proposal `nl-ndr-2027`: "Nationaal Dopingreglement changes on 1 January 2027; federations hand doping
  prosecution and discipline to the Dopingautoriteit", status adopted/in force from 2027-01-01, source
  `dopingautoriteit-code-2027`.

**Glossary (Dutch) candidates:** handelsvergunning; bestuurlijke boete; last onder dwangsom; bevel (IGJ); economisch
delict (WED); misdrijf / overtreding; artsenverklaring (ontheffing); werkzame stof; farmaceutische vorm; Douane;
NVWA; Warenwet; Opiumwet (to say plainly that none of the 21 is on it); Dopingautoriteit; Nationaal Dopingreglement (NDR);
recreatieve sporter; KOAG/KAG (Keuringsraad); publieksreclame. Reuse the saved English definitions in
`research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/legal-a.json` where they exist (geneesmiddelenwet,
administrative-fine, economic-offences-act, nvwa, magistral-preparation), corrected by facts 22–25.

**For other researchers (outside this topic, found in passing):** the minister's answer of 5 October 2026 gives Lareb's
counts of reports on GLP-1 agonists and tirzepatide (295 in 2023, 374 in 2024, 741 in 2025, 1,398 in 2026 to August; 2,802
in total, all routes incl. online purchases) and says the NVIC reported more poisonings with injectable obesity medicines
in 2024 and 2025; for the help/safety and semaglutide/tirzepatide topics to verify against Lareb and NVIC directly.
(Fact-check: the Lareb counts were re-read in the PDF, answer 6, and match: "295 (2023), 374 (2024), 741 (2025) naar 1398
(2026 tot augustus)", 2802 in total. Also for the retatrutide/safety topics: a published disciplinary decision of the
Regionaal Tuchtcollege Amsterdam of 2 June 2026, ECLI:NL:TGZRAMS:2026:127 (complaint against a nurse dismissed), describes
a patient who became ill after "via het illegale circuit (buiten de huisarts en apotheek om) een injectie met
Retatrutide" for weight loss; a case description, not evidence of frequency.)

---

## Fact-check (independent, 27 October 2026)

Adversarial check of this file and `research/nl/sources/nl-law.yaml`. Everything below was fetched on 27 October 2026
(curl with HTML converted to text, PDFs with `pdftotext`; CJEU and EU texts through the CELLAR resolver with an
`application/xhtml+xml` Accept header, because EUR-Lex still answers scripts with HTTP 202; court judgments through
data.rechtspraak.nl open data; two script applications, the IGJ supervision-documents register and the rechtspraak.nl
search, in my own built-in-browser tab, closed afterwards). Nothing was edited outside these two files; nothing was
committed; no build was run. Corrections were made in place in sections 1, 2, 3, 4, 5, 6 and 7 (marked "Fact-check").

### What was checked

- **Law texts, version in force.** Gnw BWBR0021505 "Geldend van 09-09-2025 t/m heden" (information page: "Geraadpleegd op
  27-10-2026"; pending dossiers 35410 and 36716 confirmed). Every quoted article re-read word for word: art. 1(1) b, s,
  x.1, cc, dd, hh, ii, ll, lll, xx, ijij; 18 (incl. lid 6 a and b); 38; 40 (lid 1, 2, 3 a–i); 61 (1, 9); 62 (1, 3); 67;
  67a; 68; 83; 84; 85; 100; 101 (1–4, full list of fined articles); 115; 116. Every cited anchor exists in the page.
  Regeling Gnw BWBR0022160 "Geldend van 01-01-2026 t/m heden" (arts. 3.17, 3.17a, 6.12, 6.13; no "eigen gebruik" hit);
  Besluit Gnw "Geldend van 01-08-2018 t/m heden"; WED BWBR0002063 "Geldend van 22-09-2026 t/m heden" (art. 1 under 1°,
  arts. 2, 6) and the future text "van 01-01-2027 t/m 14-11-2027" (same Gnw list); Sr BWBR0001854 "Geldend van 01-07-2026
  t/m heden", art. 23(4) editorial notes for 2026, and the future 1 January 2027 version (art. 23 unchanged, so no new
  indexation before 2027); Rijksoverheid fine table (modified 16 April 2026); VWS fining policy BWBR0041790 "Geldend van
  01-03-2025 t/m heden" (annex rows for arts. 18, 38, 40, 61, 67, 67a, 68, 84, 85; steps 2, 4, 6, 7; arts. 2, 3);
  Opiumwet BWBR0001941 "Geldend van 17-09-2026 t/m heden" searched again for all 21 compounds and synonyms (lists present
  in the text; no hit); Wuab BWBR0041439 "Geldend van 05-07-2025 t/m heden" (arts. 2, 4).
- **All 32 new and 47 reused sources** opened: HTTP status, page dates (DCTERMS / article:modified_time / "Laatste
  update") and every quoted sentence. IGJ (15 pages), NVWA (3), Customs (2 public pages, handbook chapters 5, 7, 8, 12,
  20, 22, the flow-chart PDF), the two judgments of 2019 and 2020, the minister's answer of 5 October 2026 (PDF and
  metadata page), Dopingautoriteit (9 pages and the NDR 2025 PDF), WADA (resource page, 2026 and 2027 lists, 2026 and
  2027 Monitoring Programs, explanatory note, 2027 Code, Code page, ISTUE), Europol (text extracted from the page's
  embedded data), the four CJEU judgments, Directive 2001/83 art. 86(2) (2025 consolidation) and the Cosmetics Regulation
  art. 2(2) in Dutch. The August 2026 IGJ pages (seller named) were read for the dates only.
- **Source metadata and ids.** All 40 entries now in the yaml validate against `sourceFileSchema` (tsx); every id is
  unique across `src/data/sources/` and `research/nl/sources/`; no title or URL names a seller or company (two entries
  whose text names a business are flagged, 6.12); no URL carries a commerce token or affiliate pattern.
- **Independent searches for newer or missed material:** all 40 igj.nl sitemaps (3,739 URLs; the research read 9 with
  802 URLs); the IGJ register of published fines; the Customs sitemaps; the Customs handbook index; Dopingautoriteit news
  to 28 September 2026 (nothing newer); repository.overheid.nl (official publications since June 2026 on
  "geneesmiddelenreclame", "publieksreclame", "reclameverbod", "Ozempic", "peptiden", "retatrutide", "research
  peptides", "Geneesmiddelenwet"); rechtspraak.nl searches ("peptiden", "semaglutide", "Ozempic", "Geneesmiddelenwet
  eigen gebruik invoer"); a web search for an IGJ or NVWA peptide page (media only, as the research said).

### What was corrected (before → after, with source)

1. **Fact 24, fining-policy stars.** Before: "18(1), 40(1), 40(2), 61(1), 67 and 84(1) are '***' (heaviest)". After: all
   eight listed rows, including 68(1) and 85 under a, are three-star; 84(2)–(4) and 85 under b are two-star
   (`nl-beleidsregels-boete-vws-2019`, annex step 1). The yaml note was corrected the same way.
2. **Fact 24 and yaml note, recidivism.** Before: "recidivism within four years doubles the amount". After: the minister
   "kan ... verdubbelen" (art. 2(3)); the annex step 7 says "wordt ... verdubbeld" (same source).
3. **Fact 24 and 5.2, "no source shows the policy applied to a private person".** Before: as quoted. After: it has been
   applied to a natural person and to a small organisation, for advertising (Rb Noord-Nederland 21 April 2026,
   €3,750 → €3,000; Raad van State 25 February 2026, €3,750 + €2,625); still none for own-use import or possession
   (`nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`, `nl-rvs-2026-1072-publieksreclame-website`).
4. **Fact 28, quote.** Before: "meerdere meldingen over schadelijke gevolgen bij consumenten na het gebruik van
   retatrutide" (not the IGJ's words in that order). After: "de laatste tijd meerdere meldingen ontvangen over schadelijke
   gevolgen bij consumenten na het gebruik van retatrutide" (IGJ news of 24 August 2026, read for this only; not
   registered). The dates 18, 20, 21, 24 and 31 August and the €10,000 per day / €200,000 maximum are confirmed.
5. **Fact 27, 5.6 and section 2 item 14, "no official page about peptides".** Before: "The IGJ has no page about peptides
   as such". After: true for the IGJ, but Customs has published on peptides (6 August 2026 article; 31 August 2026 public
   page) (`douane-2026-08-illegale-online-handel-medicijnen`).
6. **5.7, court rulings.** Before: "No Dutch court ruling on any peptide under the Gnw was found." After: none on the
   unauthorised peptides; but Rb Amsterdam 10 April 2026 ruled on semaglutide products under Gnw arts. 84–85
   (`nl-rbams-2026-5160-publieksreclame-journalistiek`); write "no Dutch court ruling on the unauthorised peptides was
   found".
7. **Fact 41, cross-reference.** Before: "(see 4.5)". After: "(see 4.7)" (4.5 is the WADA date; 4.7 is the Customs page).
8. **Fact 48 table, semaglutide and tirzepatide.** Before: 2026 column "not on the list; Monitoring Program". After: the
   2026 Monitoring Program item 6 read "Markers of Semaglutide and Tirzepatide", the 2027 item reads "GLP-1 Agonists:
   ... Semaglutide and tirzepatide"; still monitored only, no change in status (`wada-2026-monitoring-program`,
   semaglutide.yaml; `wada-2027-monitoring-program`).
9. **Section 3 log.** Before: "igj.nl sitemaps (news + 8 parts, 802 URLs)" with no other peptide-relevant items. After:
   the sitemap index lists 40 files, 3,739 URLs; three relevant items were missed (now facts 17a, 27, 31).
10. **Fact 1 (minor addition).** Undated amendments exist for arts. 14 and 80 as well as art. 62 (Gnw information page).

### What was added (new facts and 8 new sources)

- **Fact 17a, advertising case law of 2026** (the most important finding): Raad van State 25 February 2026 (a website
  with no commercial aim or interest made advertising; "wervende bewoordingen" decide; fines upheld); Rb Amsterdam
  10 April 2026 (journalism about semaglutide used off-label; arts. 85 a and 84(2); a "zuiver informatief artikel ...
  in overeenstemming met de samenvatting van de productkenmerken" is not fined); Rb Noord-Nederland 21 April 2026 (a
  natural person fined); the IGJ publishes fines since 1 January 2026 (`igj-2025-12-boetes-openbaar`). This contradicts
  CONTENT-GUIDE §1's "The absence of commerce is what makes the content legal" (4.1, 6.2, 6.6; owner decision).
- **Fact 40, Customs handbook chapter 13** (active substances): no own-use import by parcel; parcel seized; recipient a
  suspect (`douane-hvgem-geneesmiddelen-h13-fysiek-toezicht-werkzame-stoffen`).
- **Facts 31 and 27, labels:** IGJ and NVWA, 16 April 2026, on "disclaimers als 'voor onderzoeksdoeleinden' ... 'niet
  voor menselijke consumptie'" (`igj-2026-04-nps-websites-offline`); Customs, 6 August 2026, "Onderzoeksdoeleinden spelen
  dan geen rol".
- **Fact 41, Customs public page of 31 August 2026** ("Deze vrijstelling geldt niet voor een pakket"; intra-EU parcels
  are not checked by Customs): quoted, not registrable (commerce tokens in its URL; 6.11).
- **Fact 46, Dopingautoriteit data-exchange protocols** with the IGJ, police, OM, FIOD, Customs and the NVWA-IOD
  (`dopingautoriteit-2025-12-samenwerking-opsporing`).
- Tracker suggestions extended; for other topics, a disciplinary decision describing harm after an illegally obtained
  retatrutide injection, and the Lareb counts re-confirmed.

### Confirmed unchanged (no correction needed)

The Gnw, WED, Regeling, Sr and fine-category facts (2026 amounts; no indexation since 1 January 2026; art. 23 also
unchanged in the 1 January 2027 version); the two court rulings of 2019 and 2020 (dates, case numbers, quotes, the €2,500
fine with €2,000 suspended); every Customs handbook quote; the minister's answers (numbers 3, 4, 5, 6, 10, 13; received
and published 5 October 2026); the IGJ advertising pages; the NVWA pages; the CJEU paragraphs (Van Bennekom para. 18,
Hecht-Pharma, D. and G. paras. 33–36, Damgaard para. 22); Directive art. 86(2) 4th indent; Cosmetics Regulation art.
2(2); the Opiumwet result; the Dopingautoriteit, NDR 2025 (art. 71.10) and Wuab quotes; the WADA 2027 dates (ExCo 10
September, "Publication date 21 Sep 26", in force 1 January 2027) and the line-by-line result for all 21 compounds
(table of fact 48, S0 now names "peptides"); Europol SHIELD VI figures and Dutch participation; SHIELD V Dutch figures.

### Marked UNRESOLVED (written as unknown or left out)

- 5.1–5.14 as the research had them, with these updates: 5.2 (still no fine or prosecution of a private person for an
  own-use import; fines to natural persons exist only for advertising); 5.4 (consequences of each classification now
  public; which class a vial falls in still unknown); 5.5 (Customs says it does not check intra-EU parcels; action
  against the Dutch recipient still unknown); 5.6 (no IGJ page; a citable Customs page exists); 5.7 (narrowed to the
  unauthorised peptides); 5.12 (codes addressed to "adverteerders"; still not conclusive).
- New 5.15: whether the 10 April 2026 Amsterdam judgment is under appeal (media only).
- New 5.16: the reasons in the IGJ's published fine of 28 September 2026 on a media company (summary PDF not read; the
  page names the company, so not citable in any case).
