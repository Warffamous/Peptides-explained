# Research: be-notes (27 October 2026)

Scope: Belgium as **short notes** for Flemish readers of the Dutch site: the notes page `/nl/legal/be/` and the BE
contact card (`<JurisdictionCard code="BE" />`). Only what a reader in Belgium needs that differs from the
Netherlands. Everything below was read on 27 October 2026. Sources: `research/nl/sources/be-notes.yaml` (26 new
entries, two of them added by the fact-checker) plus the reused ids named in its header. Read the
"Fact-check (independent, 27 October 2026)" section at the end first: it corrects facts 8, 12, 15, 18, 21, 22, 29,
33, 34 and 37 in place and narrows UNRESOLVED points 1, 4 and 8. Writers: the BE notes page is `translation.method: native`, B1,
"je". Belgian official words (FAGG, VHB, dokter van wacht, wachtpost, adviserend arts, ziekenfonds, parket, minnelijke
schikking) belong on this page and the BE card only.

## 1. Key facts

### A. The regulator

1. **Name.** In Dutch: *Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten* (**FAGG**); in English
   FAMHP; the French abbreviation AFMPS appears in the site's page titles ("AFMPS | FAGG"). The FAGG is the
   competent authority for pharmacovigilance in Belgium ("In België is dat het Federaal Agentschap voor
   Geneesmiddelen en Gezondheidsproducten (FAGG)"), true on 27 October 2026.
   [fagg-2026-bijwerkingen-vragen-antwoorden; fagg-melden-bijwerking-patient]
2. **Official host.** One website answers on `www.fagg-afmps.be`, `www.fagg.be`, `www.famhp.be` and `www.afmps.be`
   (all HTTP 200 on 27 October 2026; the FAGG's own Dutch pages link all of them). Dutch pages sit under `/nl/`.
   Use **`https://www.fagg-afmps.be/nl/...`** (already on the link allowlist); every FAGG page cited here was opened
   on that host. (Verification log.)
3. **EU-wide approvals apply in Belgium.** Art. 6 § 1 of the medicines law: a medicine may be put on the market only
   after a VHB (*vergunning voor het in de handel brengen*) "hetzij door de minister of zijn afgevaardigde ...
   hetzij door de Europese Commissie overeenkomstig het Gemeenschapsrecht". The FAGG explains that an EU-authorised
   medicine carries a number "EU/1/xx/xxx/xxx (geneesmiddel vergund door de Europese Commissie)". So every central
   EU approval on the NL/EU rows also holds in Belgium; say this once on the notes page.
   [be-medicines-law-1964; fagg-vergund-geneesmiddel-herkennen]
4. **GLP-1 medicines on the Belgian market** (FAGG, situation on 19 October 2026): GLP-1 analogues Trulicity,
   Saxenda, Victoza, Xultophy, Wegovy, Ozempic, Rybelsus; GIP/GLP-1 Mounjaro. Only Saxenda, Wegovy and Mounjaro have
   the weight-management indication (BMI ≥ 30, or ≥ 27 with at least one weight-related comorbidity); Ozempic and the
   others only type 2 diabetes. [fagg-2026-glp1-misuse-warning]

### B. The law

5. **The law.** *Wet van 25 maart 1964 op de geneesmiddelen voor menselijk gebruik* (the words "voor menselijk
   gebruik" were added to the title by the law of 5 May 2022). Justel text "tekstbijwerking tot 04-06-2026"; last
   amended by the *Wet van 30 mei 2026 houdende diverse bepalingen inzake geneesmiddelen en gezondheidsproducten*
   (Belgisch Staatsblad 4 June 2026, in force 14 June 2026). Unchanged since the 22 October check.
   [be-medicines-law-1964; be-law-2026-05-30-geneesmiddelen]
6. **What a medicine is** (art. 1 § 1, 1)): a substance presented as treating or preventing human disease, or one
   that can restore, improve or modify physiological functions by a pharmacological, immunological or metabolic
   effect, or make a diagnosis. The FAGG applies it simply: a product is a medicine if it "een farmacologisch actieve
   substantie bevat" or "wordt voorgesteld als een geneesmiddel"; that it is sold elsewhere as a supplement or
   cosmetic "is geen geldig argument. Bij invoer in België geldt de Belgische wetgeving."
   [be-medicines-law-1964-art-1; fagg-postal-seizure-qa-nl]
7. **The exceptions to the licence rule** (art. 6quater § 1): 1° special needs (bona fide order by a prescriber);
   2° *gebruik in schrijnende gevallen* (compassionate use; an EU application filed or trials running); 3° *medische
   noodprogramma's* (authorised medicine, indication not yet authorised or marketed); 4° import by a pharmacist of a
   medicine "vergund of geregistreerd in het land van herkomst", on a prescription and a prescriber's declaration that
   you cannot be treated adequately with a medicine on the Belgian market. § 3: magistral and officinal preparations
   and investigational medicines need no VHB. Since 14 June 2026 the King may make 1° subject to prior ministerial
   approval, and the wholesale of medicines imported under 4° subject to prior authorisation (law of 30 May 2026);
   the routes themselves did not change. [be-medicines-law-1964-art-6quater; be-law-2026-05-30-geneesmiddelen]
8. **What is prohibited, and the penalties** (art. 16; true on 27 October 2026; give no amounts, see §5):
   - putting a medicine on the market without a VHB (art. 6 § 1), breaching art. 6quater, art. 9 (advertising) or
     art. 12quater: prison of one month to one year and/or a fine (§ 3, 1°);
   - selling, offering, supplying, importing or exporting medicines **knowing** they are falsified or "niet conform
     met de bepalingen van deze wet": the same range (§ 3, 4°);
   - **buying or possessing** ("aankoopt, bezit") falsified or non-conforming medicines, in the same list as selling,
     supplying and importing them but without the word "wetende": a fine (§ 1, 2°). This is a clear difference
     from Dutch law, which does not name buying (saved page, re-checked; research/nl/nl-law.md fact 37). It is not
     the only one: the royal decree of 12 April 1974 (fact 15) also requires a licence to possess hormonal or anabolic
     substances. (Fact-check: "the one clear difference" → "a clear difference".)
   [be-medicines-law-1964-art-16]
9. **Advertising** (art. 9 § 1): "Elke reclame betreffende een geneesmiddel ... waarvoor geen VHB werd verleend ...
   is verboden"; advertising to the public is forbidden for prescription-only medicines. Implementing decree:
   *koninklijk besluit van 7 april 1995 betreffende de voorlichting en de reclame inzake geneesmiddelen voor menselijk
   gebruik* (art. 6: public advertising only for medicines meant to be used without a doctor's diagnosis, prescription
   or supervision; art. 7: forbidden elements, such as suggesting the effect is assured or free of side effects).
   The FAGG (page of 21 October 2026): "Enkel voor geneesmiddelen die een in ons land geldige vergunning hebben voor
   het in de handel brengen, mag reclame worden gemaakt." [be-medicines-law-1964-art-9; be-kb-1995-04-07-reclame;
   fagg-reclame-geneesmiddelen]

### C. Own use, parcels and medicines online

10. **Parcels from outside the EEA:** "Het verzenden van geneesmiddelen door burgers van derde landen (landen buiten
    de Europese Economische Ruimte) naar België is nooit toegelaten." **From another EU country:** only medicines
    authorised in a member state and lawfully obtained in the legal supply chain. The law gives everyone the right to
    bring or have sent from another member state "een redelijke hoeveelheid ... rechtmatig verkregen geneesmiddelen
    ... voor eigen gebruik" (art. 12quater, since 27 August 2015). A peptide with no licence anywhere meets neither
    rule. [fagg-postal-seizure-qa-nl; be-medicines-law-1964-art-12quater]
11. **A medicine not on the Belgian market** can only be imported for you by your pharmacist, on your doctor's
    prescription with an *artsenverklaring*: "U kunt dus nooit zelf geneesmiddelen invoeren", and only medicines
    "die vergund zijn in een ander land". [fagg-postal-seizure-qa-nl; be-medicines-law-1964-art-6quater]
12. **What happens to a seized parcel** (FAGG Q&A, last updated 23 July 2024, unchanged): first time "U krijgt geen
    boete", you possibly get a warning and the file is closed; a second infringement after a warning: "een minnelijke
    schikking ... die minimum 400 euro bedraagt"; exceptionally the file goes to the *parket*; antibiotics "strikt
    nultolerantiebeleid" (a fine possible the first time); seized products are not returned (quality cannot be
    guaranteed; under- or overdosing, another active substance, contamination with pesticides, heavy metals or
    bacteria are frequent); objection by registered letter within 14 calendar days; each file is handled
    individually. **This warning-first practice does not cover every product:** "De hierboven vermelde informatie is
    dus niet van toepassing op alle geneesmiddelen. Bepaalde geneesmiddelen worden anders behandeld, zoals speciaal
    gereglementeerde stoffen, verdovende en psychotrope middelen en antibiotica." Narcotics, psychotropics and other
    "speciaal gereglementeerde stoffen" may never be posted to you. The FAGG files the hormonal and anabolic
    substances of fact 15 under "Speciaal gereglementeerde stoffen" (the URL path of fagg-hormonale-stoffen-vergunning),
    so do not promise a reader "no fine the first time" for a hormonal or anabolic product. (Fact-check addition.)
    [fagg-postal-seizure-qa-nl; famhp-postal-seizure-qa; fagg-hormonale-stoffen-vergunning]
13. **The FAGG's own line on buyers** (15 April 2025): "Wie deze illegale producten bestelt, pleegt ook een inbreuk
    op de wetgeving en kan zelfs een boete krijgen." In a joint check (May 2024 to March 2025) with the Economic
    Inspection, 25 illegal websites were closed and 11 redirected to a warning page; almost 45% of the websites checked
    sold the highest-risk medicines, among them "anabolen en hormonale middelen". [fagg-2025-illegale-verkoop-actie]
14. **Medicines online in Belgium:** prescription medicines are handed over only in person in a pharmacy, on a
    prescription; "Online verkoop is in België dan ook niet toegestaan" (for GLP-1 medicines, FAGG 19 October 2026).
    Non-prescription medicines may be sold online only by pharmacies, on websites notified to the FAGG and the *Orde
    der Apothekers*; the FAGG publishes the list (page "Internetapotheken", last updated 20 October 2026). A legal
    site shows the common European logo; clicking it should lead to the list of the competent authority (for a
    Belgian site, the FAGG page). The FAGG can close only ".be" websites. [fagg-postal-seizure-qa-nl;
    fagg-2026-glp1-misuse-warning; fagg-2025-illegale-verkoop-actie]
15. **Substances with hormonal or anabolic action (Belgian extra rule):** per the FAGG (page of 30 September 2026),
    art. 1 § 1 of the royal decree of 12 April 1974 requires a licence for import, export, manufacture, transport,
    sale, offering, **possession**, supply or obtaining of substances with hormonal, beta-adrenergic, antiparasitic,
    antihormonal, anti-infective, anti-inflammatory or anabolic action, pure or mixed, judged by action ("geen ...
    lijst"); medicines already allowed under other law and pharmacists are exempt. **The decree itself was read by the
    fact-checker on Justel** (*Koninklijk besluit betreffende sommige verrichtingen in verband met stoffen met
    hormonale, antihormonale, anabole, beta-adrenergische, anti-infectieuze, antiparasitaire en anti-inflammatoire
    werking*, Belgisch Staatsblad 7 May 1974, in force 1 August 1974, text updated to 23 December 2008): art. 1 § 1
    "Een algemene vergunning is vereist voor ... het bezit ..."; art. 1 § 2, 1° exempts "het bezit van de in § 1 van
    dit artikel genoemde stoffen, indien zij in de vorm van geneesmiddelen ... verkregen werden bij personen die
    gemachtigd zijn die geneesmiddelen af te leveren" (so a medicine from the pharmacy is exempt; a product from
    outside the legal chain is not); art. 8: breaches are punished with the penalties of the law of 24 February 1921
    (the Belgian drugs law), art. 2, 2°. The FAGG called melanotan "een hormonale stof" (fact 18). Still **unknown**:
    which peptides count as hormonal or anabolic (no list; the FAGG answers per substance by e-mail with the CAS
    number) and whether the rule is enforced against a private person (§5). Give no penalty amounts.
    [fagg-hormonale-stoffen-vergunning; be-kb-1974-04-12-hormonale-stoffen]

### D. FAGG warnings (general terms; no company names)

16. **19 October 2026, GLP-1 and GIP/GLP-1 medicines:** reports of wrong and off-label use for weight loss; use only
    on medical advice and if prescribed for you; a higher dose does not mean faster weight loss but raises the risk of
    serious side effects; never recover leftover medicine from pens for an extra dose ("golden dosing": dosing errors,
    hypoglycaemia, injection-site infection); "Koop deze geneesmiddelen niet via internet of op de zwarte markt: het
    gaat vaak om namaak of om vervalste producten"; "LET OP! Er worden al zogenaamde ‘drievoudige agonisten’, zoals
    retatrutide, op internet en op de zwarte markt aangeboden, terwijl die producten momenteel nog in onderzoek zijn."
    Rarer serious side effects named: severe allergic reactions, severe gastric-emptying disorders, bowel obstruction,
    pancreatitis, NAION. [fagg-2026-glp1-misuse-warning]
17. **May 2026, tirzepatide pens:** the FAGG received reports of pens used wrongly in obesity, partly to save costs;
    "Het FAGG raadt deze praktijken uitdrukkelijk af" (dose accuracy, infection risk). Do not describe how pens are
    split (CONTENT-GUIDE §1). [bcfi-2026-tirzepatide-pennen]
18. **Melanotan (29 January 2013, still online):** an experimental product not authorised as a medicine, "bijgevolg
    is de distributie illegaal"; insulin was found in products sold as melanotan. The FAGG also writes "Melanotan is
    een hormonale stof" (relevant to fact 15; the page does not draw that link itself). [fagg-melanotan-warning]
19. **No FAGG page on BPC-157 or "peptiden"**: the FAGG site search returned 0 results for "BPC-157" and for
    "peptiden" on 27 October 2026; "retatrutide" returned only the 19 October 2026 news. Do not write "the FAGG warns
    about peptides" in general. (Verification log.)

### E. Reporting a side effect in Belgium

20. **Where:** online at the FAGG, Dutch page "Melden van een bijwerking als patiënt" (last updated 14 October 2026),
    with or without eID ("aangeraden, maar niet verplicht"); a paper form if the application fails. You can report for
    yourself or someone you know, or ask your doctor or pharmacist to report. The FAGG asks for reports after misuse
    or wrong use and after off-label use too. [fagg-melden-bijwerking-patient]
21. **Who and what:** "Iedereen die een bijwerking krijgt, kan die melden. Een familielid of naaste kan dat ook doen";
    required (starred on the Dutch page): the person who had the reaction, a description and the name of the suspected
    medicine; also asked: dose and frequency, the batch number if possible, the dates, other medicines, other health
    problems and the course ("de evolutie"). The English version stars the course as required too; the Dutch one does
    not. (Fact-check: "required: ... the course" → course asked, not starred on the Dutch page.)
    [fagg-adverse-reaction-qa-nl; famhp-adverse-reaction-qa]
22. **Privacy:** "we uw melding anoniem behandelen en uw e-mailadres niet opnemen in de Europese databank. We geven
    uw e-mailadres ook niet door aan de firma" (patient page); "Je melding wordt enkel gebruikt voor de wetenschappelijke
    beoordeling van het geneesmiddel" (Q&A 2023); reports go anonymously to EudraVigilance, where companies can see the
    reports on their own medicines (Q&A 2026). **Reporting misuse is not meant to punish** (missed in the first pass,
    answers reviewer question 5): "Een misbruik of verkeerd gebruik van een geneesmiddel moet niet gemeld worden om de
    persoon in kwestie te kunnen sanctioneren maar wel om te voorkomen dat zo'n geval zich nog eens voordoet" (Q&A
    2023; English: "not intended to punish the person in question"). Misuse with a side effect is reported through the
    normal form. [fagg-melden-bijwerking-patient; fagg-adverse-reaction-qa-nl; famhp-adverse-reaction-qa;
    fagg-2026-bijwerkingen-vragen-antwoorden]
23. **Urgent question after a side effect:** the FAGG sends you to the Antigifcentrum, where a doctor or pharmacist
    answers 24/7, "+ 32 70 245 245 is gratis voor oproepen vanuit België". [fagg-melden-bijwerking-patient;
    fagg-2026-glp1-misuse-warning]
24. **Do not link `www.eenbijwerkingmelden.be`**: the FAGG still prints it (19 October 2026 news; 2023 Q&A), but on
    27 October 2026 it forwarded to `https://www.fagg.be/nl/bijwerking`, "Pagina niet gevonden" (checked twice).

### F. Help in Flanders (and Belgium)

25. **Emergency: 112** for ambulance and fire ("Bel 112 voor ziekenwagen & brandweer in België"); 101 for urgent
    police help. The official list (FOD Binnenlandse Zaken, 112.be) does **not** list 100: print only 112.
    [be-112-andere-noodnummers]
26. **Your huisarts first; out of hours, 1733** (FOD Volksgezondheid, page updated 2 April 2026): call 1733 for the
    *dokter van wacht* when you need medical help outside your huisarts's hours and it is not life-threatening but
    cannot wait, or when you doubt whether to go to the emergency department; life-threatening: 112. 1733 works "in
    een groot deel van België"; some regions still use the local *wachtpost*'s own number; "Op termijn zal 1733 overal
    in België beschikbaar zijn". Zonal rate, no extra cost. The call can lead to the wachtpost, a home visit, advice
    to wait for your own doctor, or an ambulance. The federal page says *medische wachtpost*; Flemish usage
    "huisartsenwachtpost" is not on the page. [be-fod-1733-dokter-van-wacht; be-112-andere-noodnummers]
27. **Antigifcentrum, 070 245 245** (free, 24/7): a royal foundation of public utility subsidised by the FOD
    Volksgezondheid; doctors and pharmacists advise "het publiek, artsen en andere hulpverleners". **Unlike the Dutch
    NVIC, it advises the public directly.** Look up the product on its website first; call when the page says so or
    product, amount or circumstances are unclear; "Bij een foutieve inname, overdosering of accidentele blootstelling
    kan je wel contact opnemen met het Antigifcentrum"; "Bel onmiddellijk 112 bij een mogelijk levensbedreigende
    situatie". [be-antigifcentrum-over-ons; be-antigifcentrum-wanneer-bellen]
28. **De DrugLijn, 078 15 10 20** (Monday to Friday 10:00–20:00; chat and mail; anonymous; charged as a normal call):
    for questions about drink, drugs, pills, gambling and gaming, for users and people around them; "de publieksservice
    van VAD, het Vlaams expertisecentrum voor alcohol, illegale drugs, psychoactieve medicatie, gokken en gamen"; "Onze
    telefoonlijn is geen noodnummer". It has no page on doping or peptides. [be-druglijn-bel; be-druglijn-over-ons]
29. **Zelfmoordlijn 1813**: free, anonymous, 24/7 by phone; chat daily 17:00–24:00 (Wednesday from 12:00). The line
    itself is run by the Centrum ter Preventie van Zelfdoding (CPZ) with trained volunteers ("Het CPZ is de organisatie
    achter de Zelfmoordlijn"); the website Zelfmoord1813 is managed and coordinated by VLESP, the Flemish government's
    partner for suicide prevention. (Fact-check: "content run by VLESP" described the website, not the line.)
    [be-zelfmoordlijn-1813; be-112-andere-noodnummers]
30. **Needle exchange in Flanders:** no official or established health-source page was found (only news reports and
    municipal documents): leave it out (§5).

### G. Sport

31. **Doping is a Community matter.** "Dit decreet regelt een gemeenschapsaangelegenheid" (Flemish decree, art. 1).
    NADO Vlaanderen runs Flemish anti-doping policy and sits in a *Coördinatieraad* "samen met de NADO's van de Franse
    Gemeenschap, de Duitstalige gemeenschap en de regio Brussel-Hoofdstad". NADO Vlaanderen's current site is
    `www.dopingvrij.vlaanderen` (the old `www.dopinglijn.be` stopped in 2020). [be-flemish-antidoping-decree-consolidated;
    be-nado-vlaanderen-over]
32. **Who counts as an athlete** (consolidated decree, art. 2, 55° and 56°): a *sportactiviteit* is sport "met
    recreatieve, competitieve of demonstratieve doeleinden in georganiseerd verband"; a *sporter* is anyone who does
    one, "ongeacht het niveau". [be-flemish-antidoping-decree-consolidated]
33. **Recreational athletes outside a federation** (art. 42/6–42/11, in force since 13 September 2021): they must
    always refrain from **use or possession** of a substance prohibited at all times (WADA's S0, non-approved
    substances, is prohibited at all times and names BPC-157: reused id `wada-2026-list-en`; the decree points to the
    list "aangeduid als te allen tijde verboden"), from evading or refusing a test, and from tampering; a normal
    medical treatment meeting three criteria is not a violation. NADO Vlaanderen may test them. Sanctions: exclusion
    from organised sport in the Dutch language area, from a reprimand to two years for use or possession, six months to
    two years for evading or refusing a test; an administrative fine for adults of at most €25,000; individual sport
    purely for recreation outside an organised setting stays allowed. From 1 January 2027 the 2027 list applies: S0
    still names BPC-157 and adds "peptides" to its examples (reused id `wada-2027-list-en`, PDF re-read 27 October 2026).
    [be-flemish-antidoping-decree-consolidated; wada-2026-list-en; wada-2027-list-en]
34. **More testing at lower levels** than in the Netherlands, "zelfs onverwachte dopingcontroles in fitnesscentra"; for
    athletes under the Code, refusing a test usually brings a two-year, possibly four-year ban that also applies in the
    Netherlands (Dopingautoriteit, re-read 27 October 2026, unchanged). [dopingautoriteit-controles-belgie]
    **NADO Vlaanderen's own figures confirm gym testing** (annual report news of 11 August 2026, added by the
    fact-checker): in 2025 it took "13 gerichte monsternemingen bij krachtsporters in fitnesscentra", with 3 adverse
    results; these tests "vallen buiten het reguliere programma dat onderworpen is aan het WADA". Its FAQ: "iedereen die
    in georganiseerd verband aan sport doet, [kan] op doping getest worden". Its violations page: under the doping rules
    "wordt ook de aankoop van een verboden stof als bezit beschouwd". [be-nado-vlaanderen-jaarverslag-2025]

### H. Reimbursement (one line)

35. **Not reimbursed for weight loss:** Wegovy, decision of the Minister of Social Affairs and Public Health following
    the CTG's negative advice (3 June 2026); tirzepatide "wordt niet terugbetaald in de indicatie obesitas" (BCFI,
    Folia May 2026). For type 2 diabetes, GLP-1 analogues and Mounjaro are reimbursed, since 1 February 2026 only with
    a prior authorisation (*machtiging*) of the *adviserend arts* of the *ziekenfonds*. No later change found on
    27 October 2026. [be-minister-2026-wegovy-geen-terugbetaling; bcfi-2026-tirzepatide-pennen;
    riziv-2025-glp1-terugbetaling]
    Suggested line (B1): "In België betaalt het ziekenfonds Wegovy en Mounjaro niet terug voor gewichtsverlies (stand
    van juni 2026)."

### I. Legal routes and trials (only if the notes page keeps the routes table)

36. **Compassionate use and medical need programmes:** the FAGG list (updated 21 October 2026) contains none of the
    21 compounds on this site. [fagg-schrijnende-gevallen-medische-noodprogrammas; famhp-compassionate-use-medical-need]
37. **Trials with a Belgian site** (ClinicalTrials.gov, re-run 27 October 2026, one name per query): BPC-157 0,
    TB-500 0, thymosin beta-4 0, ipamorelin 0, melanotan 0, and every other unapproved peptide on the site 0, except
    retatrutide 2 (NCT07165028 recruiting; NCT06383390 active, not recruiting), tesamorelin 1 (NCT00608023, completed)
    and elamipretide 1 (NCT02914665, completed). Same as 22 October. The approved medicines semaglutide (26) and
    tirzepatide (9) do have Belgian trial sites; they were not in the search. (Fact-check: "every other site peptide 0"
    → limited to the unapproved peptides; semaglutide and tirzepatide counts added.) [ctgov-nl-be-peptide-search-2026-10-22]

### Short lines for other Dutch pages (one line where the answer differs)

- "In België meld je een bijwerking bij het FAGG." → link `/nl/legal/be/` or the BE card. [fagg-melden-bijwerking-patient]
- "In België bel je bij een vergiftiging het Antigifcentrum: 070 245 245 (gratis, dag en nacht)." [be-antigifcentrum-over-ons]
- "In België bel je buiten de uren van je huisarts 1733 (dokter van wacht)." [be-fod-1733-dokter-van-wacht]
- "In Vlaanderen kan NADO Vlaanderen ook recreatieve sporters controleren." [be-flemish-antidoping-decree-consolidated]

## 2. What changed since 23 October 2026

Compared with the saved page `research/for-nl-site/snapshot-2026-10-23/content/pages-en/legal/be.mdx`, the Belgium
sections of `research/legal-a.md` (fact-checked 22 October), the BE entry in `src/data/jurisdictions.yaml` and the BE
sources in `src/data/sources/legal-a.yaml`:

1. **New FAGG warning (19 October 2026)** on GLP-1 misuse, golden dosing, online sale and retatrutide (fact 16). It was
   published before the 20–23 October checks but is not in the saved material.
2. **Reporting address.** The card and sources use English pages (`famhp.be/en/side_effect`). The Dutch patient page
   is `fagg-afmps.be/nl/melden_van_een_bijwerking_als_patient` (updated 14 October 2026). The short address
   `www.eenbijwerkingmelden.be`, which the FAGG still prints, now ends on "Pagina niet gevonden" (fact 24).
3. **A second Dutch reporting Q&A** (2 October 2026) adds that reports go anonymously to EudraVigilance, where
   companies see reports on their medicines. The saved step "The FAMHP says it uses side-effect reports only for the
   scientific study of the medicine" is still true (2023 Q&A, unchanged), but write it with the anonymity point (fact 22).
4. **Seizure wording.** The saved page says "First time: you get a warning". The Dutch Q&A says "U krijgt geen boete"
   and "krijgt u mogelijk een waarschuwing": write "De eerste keer krijg je geen boete. Je krijgt mogelijk een
   waarschuwing." Everything else on that page is unchanged (last updated 23 July 2024).
5. **NADO Vlaanderen moved** to `www.dopingvrij.vlaanderen`; `dopinglijn.be` is stale (news up to 2020). The saved
   sources `dopinglijn-regelgeving` and `be-flemish-antidoping-decree-2012` (original 2012 PDF) still resolve but are
   outdated.
6. **Decree numbering is now wrong in the saved source note.** `be-flemish-antidoping-decree-2012` cites "art. 2, 6°
   and 9°"; in the consolidated decree these definitions are art. 2, 55° (sportactiviteit) and 56° (sporter).
7. **Missing in the saved page: Title 6/1 of the decree** (since 13 September 2021): use and possession of always
   prohibited substances by recreational athletes outside federations is a doping violation, with exclusion and fines
   up to €25,000 (fact 33). The saved step "Other athletes have their own disciplinary route" is true but incomplete.
8. **Saved test-refusal line is incomplete for gym-goers** (two or four years): for recreational athletes outside a
   federation the decree sets six months to two years (§4, conflict 3).
9. **Compassionate use list updated** 21 October 2026 (saved: 17 September); still no compound of this site.
10. **New facts not in the saved material:** the KB of 12 April 1974 licence rule for hormonal/anabolic substances
    (fact 15), the advertising decree of 7 April 1995 and the FAGG advertising page of 21 October 2026 (fact 9), the
    FAGG's 2025 line that buyers can be fined (fact 13), the help services (facts 25–29), reimbursement (fact 35).
11. **The BE card** lacks help services and anti-doping, and its regulator and reporting entries are English
    (`famhp.be/en`). See §7.
12. **Law: no change.** Justel still "tekstbijwerking tot 04-06-2026"; arts. 1, 6, 6quater, 9, 12quater, 16 read
    again, same wording. One precision: the law of 30 May 2026 (in force 14 June 2026) added two "the King may"
    sentences to art. 6quater § 1, 1° and 4° (fact 7); legal-a called the difference "only amendment markers".
13. **Unchanged:** the melanotan warning (now readable live, no archive needed), the English FAMHP pages, the
    Dopingautoriteit page, the ClinicalTrials.gov result.
14. **Saved page links** `/en/...` routes and the English `legal/sport-and-doping`; on Dutch pages they become
    `/nl/...` (brief: never link `/en/`).

## 3. Verification log (all read 27 October 2026)

| URL | How read / result | Wording relied on |
|---|---|---|
| https://www.fagg.be/ , https://www.fagg-afmps.be/ , https://www.famhp.be/ , https://www.afmps.be/ | curl: HTTP 200 each, same site; curl gets a bot-check script page | (host identity) |
| https://www.fagg.be/nl | built-in browser: home page, news list | news of 19/10/2026 |
| https://www.fagg-afmps.be/nl/news/glp_1_analogen_en_gecombineerde_gipglp_1_analogen_risicos_door_verkeerd_gebruik_en_gebruik | browser (also on fagg.be); "Laatste update op 19/10/2026" | "Online verkoop is in België dan ook niet toegestaan"; "LET OP! ... retatrutide ..."; "Antigifcentrum bellen (070/245.245)" |
| https://www.eenbijwerkingmelden.be/ | curl 200 (JS app); browser twice → https://www.fagg.be/nl/bijwerking | "Pagina niet gevonden" |
| https://www.famhp.be/en/side_effect | browser; "Last updated on 14/10/2026" | "Report a side effect"; NL link `/nl/bijwerkingen_melden` |
| https://www.fagg-afmps.be/nl/melden_van_een_bijwerking_als_patient | browser (also fagg.be); 14/10/2026 | "Melden met eID / zonder eID"; "anoniem behandelen"; "+ 32 70 245 245 is gratis" |
| https://www.fagg-afmps.be/nl/bijwerkingen_van_geneesmiddelen_melden_vragen_en_antwoorden | browser; 02/10/2026 | "In België is dat het ... FAGG"; "anoniem ... naar EudraVigilance" |
| https://www.fagg-afmps.be/nl/menselijk_gebruik/geneesmiddelen/geneesmiddelen/geneesmiddelen_bewaking/vragen_en_antwoorden_over | browser; 13/11/2023 | "Iedereen die een bijwerking krijgt, kan die melden"; "enkel gebruikt voor de wetenschappelijke beoordeling" |
| https://www.famhp.be/en/human_use/medicines/medicines/pharmacovigilance/questions_and_answers_regarding_reporting_adverse | browser; 13/11/2023, unchanged | "used only for the scientific evaluation of the medicine" |
| https://www.fagg-afmps.be/nl/menselijk_gebruik/geneesmiddelen/geneesmiddelen/goed_gebruik_van_geneesmiddelen/vragen_en | browser (also fagg.be); 23/07/2024 | "U krijgt geen boete"; "minimum 400 euro"; "nooit toegelaten"; "U kunt dus nooit zelf geneesmiddelen invoeren"; "geen geldig argument" |
| https://www.famhp.be/en/human_use/medicines/medicines/proper_use_of_medicines/questions_and_answers_on_seizure_of_postal | browser; 23/07/2024, unchanged | NL link to the page above |
| https://www.fagg-afmps.be/nl/MENSELIJK_gebruik/geneesmiddelen/geneesmiddelen/distributie_aflevering/officina/website_apotheek/LstPharmacies | browser; 20/10/2026 | list of notified online pharmacies (not registered: names sellers) |
| https://www.fagg-afmps.be/nl/public_information/medicament_autorise | browser; 21/05/2021 | "wordt verkocht door een apotheker"; "EU/1/xx/xxx/xxx (geneesmiddel vergund door de Europese Commissie)" |
| https://www.fagg-afmps.be/nl/public_information | browser (fagg.be); 15/10/2026 | index of public pages |
| https://www.fagg-afmps.be/nl/MENSELIJK_gebruik/geneesmiddelen/geneesmiddelen/goed_gebruik_geneesmiddel/reclame | browser; 21/10/2026 | "Enkel voor geneesmiddelen die een in ons land geldige vergunning hebben ... mag reclame worden gemaakt" |
| https://www.fagg-afmps.be/nl/MENSELIJK_gebruik/bijzondere_producten/speciaal_gereglementeerde_stoffen/stoffen_hormonale_werking_anderen/vergunning | browser; 30/09/2026 | "Art. 1§1 van het koninklijk besluit van 12.04.1974 ... het bezit ..." |
| https://www.fagg-afmps.be/nl/news/news_melanotan | browser, live; 29/01/2013 | "bijgevolg is de distributie illegaal"; insulin found |
| https://www.fagg-afmps.be/nl/news/illegale_verkoop_van_geneesmiddelen_gezamenlijke_actie_van_fod_economie_en_fagg_legt | browser; 15/04/2025 | "Wie deze illegale producten bestelt ... kan zelfs een boete krijgen" |
| https://www.fagg-afmps.be/nl/search?term=BPC-157 ; ...?term=peptiden ; https://www.fagg.be/nl/search?term=retatrutide ; ...?term=peptide | browser | 0; 0; 1 (19/10/2026 news); 12 (all GLP-1 shortage or PRAC items) |
| https://www.famhp.be/en/human_use/medicines/medicines/research_development/compassionate_use_medical_need | browser; 21/10/2026 | list checked by name: no site compound; pasireotide listed |
| https://www.fagg-afmps.be/nl/MENSELIJK_gebruik/geneesmiddelen/geneesmiddelen/onderzoek_ontwikkeling/gebruik_in_schrijnende_gevallen_medische_noodprogrammas | browser; 21/10/2026 | KB 25 April 2014, from 1 July 2014 |
| https://www.fagg-afmps.be/nl/fagg | browser; 29/11/2023 | (about page; no names list) |
| https://www.fagg.be/nl/fagg , famhp.be CU page (once) | browser: CAPTCHA "What code is in the image?" mid-session | not answered; same pages then opened on www.fagg-afmps.be |
| https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&la=N&cn=1964032530&table_name=wet | curl, HTTP 200, ISO-8859-1 | "tekstbijwerking tot 04-06-2026"; arts. 1, 3, 6 § 1, 6quater, 9, 12quater, 16 (quoted in facts 5–10) |
| https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&la=N&cn=2026053003&table_name=wet | curl, 200 | "30 MEI 2026. - Wet houdende diverse bepalingen inzake geneesmiddelen en gezondheidsproducten"; "Publicatie: 4 juni 2026"; "Inwerkingtreding : 14 juni 2026" |
| https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&la=N&cn=1995040761&table_name=wet | curl, 200 | title; "tekstbijwerking tot 07-12-2023"; art. 6 and 7 |
| Justel search for the KB of 12 April 1974 (cn 1974041201–12; list search) | curl | not found: text not read. **Fact-checker: found at cn=1974041230** (https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&la=N&cn=1974041230&table_name=wet, HTTP 200): see fact 15 |
| https://112.be/nl and https://112.be/nl/andere-noodnummers | curl, 200 | "Bel 112 voor ziekenwagen & brandweer in België"; "Bel 101 ..."; 1733; Antigifcentrum; 1813; "sos112 is een initiatief van de Federale Overheidsdienst Binnenlandse Zaken" |
| https://www.1733.be/ → https://www.health.belgium.be/nl/themas/gezondheid/dringende-geneeskundige-hulpverlening/actoren-dringende-geneeskundige-hulpverlening/dokter-wacht | curl 403; browser; "Laatst bijgewerkt op 02/04/2026" | "In een groot deel van België kan je al 1733 bellen"; "Bel dan 112" |
| https://www.antigifcentrum.be/ , /wanneer-bellen/ , /over-ons/ | curl, 200 | facts 27 |
| https://www.druglijn.be/ , /over-ons/ , /stel-je-vraag/bel/ ; search "spuitenruil" | curl, 200 | facts 28; search: no page |
| https://www.zelfmoord1813.be/ , /over-zelfmoord-1813 | curl, 200 | "Elk gesprek is anoniem en gratis"; "24/7 bereikbaar"; VLESP |
| https://www.nadovlaanderen.be/ → https://www.dopingvrij.vlaanderen/ ; /over-nado/ ; /wettelijk-kader/ ; /links/ ; /rechten-en-plichten/rechten-en-plichten-voor-sporters/ | curl, 200 | Coördinatieraad quote; links to the French and German NADOs and the GGC |
| https://codex.vlaanderen.be/Zoeken/Document.aspx?DID=1021920&param=inhoud and PrintDocument.ashx?id=1021920 | curl, 200 | art. 1; art. 2, 55°, 56°; arts. 42/6–42/11 |
| https://www.dopinglijn.be/ , /dopinglijn/regelgeving/ , 2012 decree PDF | curl, 200 | stale (latest news 3 July 2020); regulations list as before |
| https://dopage.cfwb.be/ → https://dopage.be/ | curl | "Requête non autorisée" (not read) |
| https://www.nado-ostbelgien.be/ | curl, 200 | German-language NADO site (home page only) |
| https://www.dopingautoriteit.nl/dopingcontroles/controles-in-belgie | curl, 200 | unchanged ("onverwachte dopingcontroles in fitnesscentra") |
| https://www.riziv.fgov.be/nl/pers/antidiabetica-een-gewijzigde-terugbetaling-voor-ozempic-en-de-andere-glp-1-analogen | curl, 200; 09-09-2025 | "Mounjaro® wordt al terugbetaald op basis van een voorafgaande machtiging"; from 1 February 2026 prior authorisation |
| https://vandenbroucke.belgium.be/nl/nieuws/obesitas-vraagt-sterk-beleid-geen-terugbetaling-van-wegovy | curl 403; browser; 3 juni 2026 | "gaf de CTG een negatief advies voor terugbetaling ... volgt dat advies" |
| https://www.bcfi.be/nl/articles/4846?folia=4848 ; https://www.bcfi.be/nl/about ; https://www.bcfi.be/nl/gows/4451 | curl, 200 | "tirzepatide wordt niet terugbetaald in de indicatie obesitas" (May 2026); BCFI funding; Nov 2024 entry (older) |
| https://clinicaltrials.gov/api/v2/studies (query.intr=<name>, query.locn=Belgium), 20 names | curl, JSON | fact 37 |

Not used as sources: VRT, Brussels Times, Test-Aankoop, Belga (news), `news.belgium.be` (HTTP 403 to curl, not opened),
`pharmainfo.be` (French, linked by the FAGG), municipal documents on needle exchange.

## 4. Conflicts and how resolved

1. **Old and new NADO Vlaanderen sites.** Saved sources use `dopinglijn.be`; NADO Vlaanderen's current site is
   `dopingvrij.vlaanderen` and `nadovlaanderen.be` forwards there. Resolved: cite `be-nado-vlaanderen-over` and the
   Codex text; keep the old ids only where an English page still uses them.
2. **Decree text.** The saved source is the original 2012 PDF (numbering 6° and 9°); the consolidated Codex text
   (55°, 56°, Title 6/1) is current. Resolved: cite `be-flemish-antidoping-decree-consolidated`.
3. **Penalty for refusing a test.** Dopingautoriteit: "doorgaans een schorsing ... van twee jaar en misschien wel vier
   jaar" (athletes under the Code); decree art. 42/11: six months to two years for recreational athletes outside a
   federation. Resolved: both, each for its group.
4. **"Only for scientific evaluation" versus EudraVigilance access.** Not a contradiction: reports are anonymous, no
   name or e-mail reaches the company; the anonymised report sits in the EU database companies can query. Resolved:
   write "Je melding is anoniem" and "het FAGG geeft je e-mailadres niet aan de firma", not "nobody else sees it".
5. **FAGG short address.** The FAGG's 19 October 2026 news and its 2023 Q&A print `www.eenbijwerkingmelden.be`; it
   lands on a 404. Resolved: link the FAGG patient page; mention the problem to the reviewer only.
6. **First seizure.** English Q&A "warning"; Dutch Q&A "U krijgt geen boete ... mogelijk een waarschuwing".
   Resolved: Dutch wording.
7. **The online-pharmacy logo.** The 2025 news says legal sites show "een groen of blauw logo"; the Q&A speaks of
   "het Europees logo voor onlineapotheken" (and a separate EU logo for veterinary medicines). Resolved: say "het
   Europese logo"; no colour.
8. **Mounjaro reimbursement over time.** BCFI (November 2024): "voor geen enkele indicatie terugbetaald"; RIZIV
   (September 2025): reimbursed for diabetes with prior authorisation ("sinds 1 juli"); BCFI (May 2026): not for
   obesity. Resolved: chronology; the current answer is fact 35.
9. **Which FAGG host.** The card uses `famhp.be/en`; Dutch pages exist on all four hosts. Resolved:
   `www.fagg-afmps.be/nl` (allowlisted, Dutch name in the host).
10. **1733 "national number"** yet not in every region. Resolved: write "in de meeste regio's" and suggest a
    `helpNote.BE` (§7).

## 5. UNRESOLVED (write as unknown, or leave out)

1. **The royal decree of 12 April 1974** (narrowed by the fact-check: the text is now read on Justel, cn=1974041230,
   see fact 15 and `be-kb-1974-04-12-hormonale-stoffen`). Still unknown: which peptides count as having "hormonale" or
   "anabole" action (there is no list) and whether the possession rule is enforced against a private person holding a
   research-labelled peptide. Write at most: "In België heb je voor stoffen met een hormonale of anabole werking een
   vergunning nodig, zelfs om ze te bezitten. Kreeg je het als geneesmiddel bij de apotheek, dan geldt dat niet. Of een
   peptide daaronder valt, zegt het FAGG niet: er is geen lijst."
2. **Fine amounts** under art. 16 of the 1964 law after the *opdecimes* and the new Criminal Code: not re-checked;
   quote no amount from the law (the FAGG's €400 settlement practice may be quoted).
3. **How art. 16 § 1, 2° (buying or possessing) is applied to individuals** beyond the FAGG's warning-then-settlement
   practice: no court practice found.
4. **Whether art. 42/6 of the Flemish decree reaches a gym user** who is in no federation and does no organised
   sport: the decree turns on "in georganiseerd verband" (a "sportactiviteit", art. 2, 55°; the term itself is not
   defined). Narrowed by the fact-check: NADO Vlaanderen does test strength athletes in fitness centres (13 targeted
   samples in 2025, outside the WADA programme; `be-nado-vlaanderen-jaarverslag-2025`), so "NADO Vlaanderen test ook in
   fitnesscentra" may be written. Still unknown: the legal basis it uses for a lone gym user, and whether every gym
   user is covered. Do not write that every gym user can be sanctioned.
5. **Needle exchange (spuitenruil) in Flanders:** no official or established health-source page found; leave out.
6. **The French and German-speaking Communities' bodies:** their official names were not read on their own sites
   (dopage.be refused the request; nado-ostbelgien.be home page only). Write "de Franse en de Duitstalige Gemeenschap
   hebben elk een eigen antidopingorganisatie" (source: be-nado-vlaanderen-over), no names.
7. **The FAGG's full French name** was not seen on a page today: do not print it (FAGG, and FAMHP/AFMPS as
   abbreviations, are enough).
8. **Reimbursement after June 2026 for Mounjaro in obesity:** a news report speaks of a halted reimbursement; no
   official text found. Fact 35 (not reimbursed for obesity, May 2026) stands; give no newer detail. Fact-check: the
   report is dated 21 October 2026 (Brussels Times, news, not a source) and cites no decision text; the minister's news
   list (to 23 October 2026) and the RIZIV press list (to 27 October 2026) have no item on it.
9. **The 1733 coverage** of a reader's own region (varies; the FOD page has a lookup tool).

## 6. Open questions for the legal or medical reviewer

1. Is "Wie zulke producten koopt of bezit, overtreedt in België de wet en kan een boete krijgen (artikel 16 van de
   geneesmiddelenwet; in de praktijk eerst een waarschuwing)" a fair B1 summary of art. 16 § 1, 2° and the FAGG
   practice? (The heading must avoid "kopen/koop": commerce tokens.)
2. Does the KB of 12 April 1974 (licence for possession of hormonal, anabolic and other substances) apply to
   individuals holding finished research-labelled peptides? Should the notes page mention it at all? (Fact-check: the
   text is read; art. 1 § 2, 1° exempts only medicines obtained from an authorised supplier, and art. 8 refers to the
   penalties of the 1921 drugs law. The question for the reviewer is enforcement and which peptides count.)
3. Art. 42/6 of the Flemish decree: may we tell a Flemish gym-goer that NADO Vlaanderen can test and sanction
   recreational athletes outside federations, and that a fine of up to €25,000 is possible?
4. May the notes page link the FAGG's list of notified online pharmacies (an official page that names pharmacies and
   links their shops), or only the Q&A that explains the logo? Recommendation: only the Q&A.
5. Reporting: is it right to say the FAGG passes no name or e-mail to the company, while anonymised reports sit in
   EudraVigilance? Should the page tell readers who used an unlicensed product that reporting is still useful (the
   FAGG asks for reports after misuse and off-label use, but says nothing about products from outside the legal
   chain)? (Fact-check: the 2023 Q&A says a report of misuse "moet niet gemeld worden om de persoon in kwestie te
   kunnen sanctioneren"; fact 22. It still says nothing about products from outside the legal chain.)
6. Medical: the Antigifcentrum advises the public directly (unlike the NVIC). Is "bel het Antigifcentrum bij een
   vergissing of te veel" plus "bel 112 bij levensgevaar" the right Belgian help ladder for the warning-signs page
   notes?
7. The FAGG still prints `www.eenbijwerkingmelden.be` (404 on 27 October 2026). Worth a note to the FAGG?

## 7. Suggested data changes

### 7.1 `src/data/jurisdictions.yaml`, BE entry (replace)

```yaml
- code: BE
  # Belgium: notes only, on the Dutch site (Flemish readers). Re-checked 27 October 2026 (research/nl/be-notes.md).
  # Emergency 112 (ambulance and fire; police 101; 100 is not on the official list) (be-112-andere-noodnummers).
  # 1733 is the number for the dokter van wacht outside the huisarts's hours, not yet in every region
  # (be-fod-1733-dokter-van-wacht). The Antigifcentrum advises the public 24/7, unlike the Dutch NVIC
  # (be-antigifcentrum-over-ons). De DrugLijn is VAD's public line (be-druglijn-over-ons); Zelfmoordlijn 1813
  # (be-zelfmoordlijn-1813). EU-wide (central) approvals also apply in Belgium (be-medicines-law-1964).
  # FAGG pages read on www.fagg-afmps.be (the same site answers on fagg.be, famhp.be, afmps.be); the FAGG short
  # address www.eenbijwerkingmelden.be ended on "Pagina niet gevonden" on 27 October 2026: not linked.
  emergency: ["112"]
  help:
    - { kind: urgent-advice, name: "Dokter van wacht: 1733 (FOD Volksgezondheid)", url: "https://www.health.belgium.be/nl/themas/gezondheid/dringende-geneeskundige-hulpverlening/actoren-dringende-geneeskundige-hulpverlening/dokter-wacht" }
    - { kind: poisons, name: "Antigifcentrum", url: "https://www.antigifcentrum.be/wanneer-bellen/" }
    - { kind: drugs-advice, name: "De DrugLijn (VAD)", url: "https://www.druglijn.be/" }
    - { kind: mental-health, name: "Zelfmoordlijn 1813", url: "https://www.zelfmoord1813.be/" }
  regulator: { name: "Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten (FAGG)", url: "https://www.fagg-afmps.be/nl" }
  inspectorate: { name: "FAGG: inbeslagname van postpakketten (vragen en antwoorden)", url: "https://www.fagg-afmps.be/nl/menselijk_gebruik/geneesmiddelen/geneesmiddelen/goed_gebruik_van_geneesmiddelen/vragen_en" }
  reporting: { name: "FAGG: een bijwerking melden als patiënt", url: "https://www.fagg-afmps.be/nl/melden_van_een_bijwerking_als_patient" }
  anti_doping: { name: "NADO Vlaanderen", url: "https://www.dopingvrij.vlaanderen/" }
  medicines_law: { name: "Wet van 25 maart 1964 op de geneesmiddelen voor menselijk gebruik", url: "https://www.ejustice.just.fgov.be/cgi_loi/change_lg.pl?language=nl&la=N&cn=1964032530&table_name=wet" }
```

BE is used only by the `nl` locale (`config/locales.json`), so Dutch names are safe. `inspectorate` is optional (the
card labels it "Enforcement"); drop it if the merge prefers the card short. Optional UI string
`pages.jurisdiction.helpNote.BE` in `src/i18n/nl/pages.json`: "1733 werkt nog niet overal in België. Werkt het in jouw
regio niet, dan hoor je dat aan de telefoon. Kijk dan op de website van je wachtpost of vraag het je huisarts."
(be-fod-1733-dokter-van-wacht).

### 7.2 `config/link-allowlist.json`, hosts to add

| Host | Why (one line) |
|---|---|
| `www.antigifcentrum.be` | Belgian Poison Centre (Antigifcentrum), royal foundation of public utility subsidised by the FOD Volksgezondheid; advises the public 24/7 |
| `www.druglijn.be` | De DrugLijn, public information line of VAD, the Flemish expertise centre on alcohol and other drugs |
| `www.zelfmoord1813.be` | Zelfmoordlijn 1813, Flemish suicide-prevention line (run by the CPZ; website managed by VLESP, the Flemish government's partner for suicide prevention) |
| `www.dopingvrij.vlaanderen` | NADO Vlaanderen, the Flemish national anti-doping organisation (under Sport Vlaanderen) |
| `codex.vlaanderen.be` | Vlaamse Codex, the Flemish government's database of consolidated decrees |
| `112.be` | Official Belgian emergency-number site of the FOD Binnenlandse Zaken (the host has no www) |
| `www.riziv.fgov.be` | RIZIV, Belgium's national health and disability insurance institute (reimbursement) |
| `vandenbroucke.belgium.be` | Official site of the federal Minister of Social Affairs and Public Health (reimbursement decisions) |
| `www.bcfi.be` | BCFI, Belgian centre for independent drug information, funded only by public money |
| `www.fagg.be` (optional) | FAGG's Dutch-name host; only if a writer cites a FAGG link as the FAGG prints it (`www.fagg-afmps.be` serves the same pages) |

Alternative to three single hosts: suffixes `.fgov.be` (Belgian federal public services: ejustice, RIZIV) and
`.belgium.be` (federal portal: health.belgium.be, the minister's site), each with a one-line why.
(Fact-check: `www.health.belgium.be`, `www.ejustice.just.fgov.be`, `www.fagg-afmps.be`, `www.famhp.be` and
`www.dopinglijn.be` are already on `config/link-allowlist.json`; of the federal hosts only `www.riziv.fgov.be` and
`vandenbroucke.belgium.be` are new. The KB of 1974 is on the allowlisted ejustice host.)

### 7.3 Other merge notes

- Merge `research/nl/sources/be-notes.yaml` into `src/data/sources/nl-<group>.yaml` (or `nl-research-be.yaml`);
  all 26 ids are new and unique (grepped 27 October 2026; the two fact-checker ids re-grepped the same day).
- On the Dutch BE page cite the Dutch FAGG ids (`fagg-postal-seizure-qa-nl`, `fagg-adverse-reaction-qa-nl`,
  `fagg-melden-bijwerking-patient`, `fagg-schrijnende-gevallen-medische-noodprogrammas`) instead of the English
  `famhp-*` ids; replace `dopinglijn-regelgeving` and `be-flemish-antidoping-decree-2012` with
  `be-nado-vlaanderen-over` and `be-flemish-antidoping-decree-consolidated`.
- The English source `be-flemish-antidoping-decree-2012` note ("art. 2, 6° and 9°") is outdated for the current text;
  if an English page still cites it, the owner of that file should know (not edited here).
- `docs/STYLE-NL.md` (Belgian notes only): FAGG (not "het CBG van België"); VHB (vergunning voor het in de handel
  brengen) where Dutch pages say handelsvergunning; dokter van wacht, (medische) wachtpost; Antigifcentrum;
  adviserend arts, ziekenfonds, machtiging; minnelijke schikking; parket.

## Fact-check (independent, 27 October 2026)

Done by a second agent on 27 October 2026, assuming errors. Every source in `research/nl/sources/be-notes.yaml` (24)
and every reused id (16, plus `wada-2027-list-en`) was opened again today. FAGG/FAMHP pages and the minister's and
FOD Volksgezondheid pages were read in the agent's own built-in browser tab on `www.fagg-afmps.be`, `www.famhp.be`,
`vandenbroucke.belgium.be` and `www.health.belgium.be` (bot check passed by waiting; no CAPTCHA appeared or was
answered; cookie banner left unanswered). Justel, Codex Vlaanderen, 112.be, Antigifcentrum, De DrugLijn, Zelfmoord1813,
NADO Vlaanderen, Dopingautoriteit, RIZIV, BCFI, the WADA PDFs and ClinicalTrials.gov were fetched with curl. Changes
are made in place above (marked "Fact-check") and in the YAML notes.

### What was checked and held

- **Law (Justel, 1964 law, "tekstbijwerking tot 04-06-2026", last change "Wet van 30-05-2026 gepubliceerd op
  04-06-2026"):** the title and the 2022 words "voor menselijk gebruik" (W 2022-05-05/13, art. 73, in force
  21-05-2022); art. 1 § 1, 1); art. 6 § 1 (VHB by the minister "hetzij door de Europese Commissie"); art. 6quater § 1,
  1°–4° and § 3, and note 11 (W 2026-05-30/03, art. 6, 1° and 2°, in force 14-06-2026); art. 9 § 1; art. 12quater
  (W 2015-07-17/38, in force 27-08-2015); art. 16 § 1, 2° ("aankoopt, bezit"), § 3, 1° (incl. 6quater, 9 §§ 1–3,
  12quater) and § 3, 4° ("wetende"). The "TOEKOMSTIG RECHT" versions of arts. 6 and 6quater on Justel are the
  not-yet-in-force parts of the 2026 law (art. 61: at a date set by the King, at the latest 1 January 2030); they do
  not change the routes. All as stated.
- **Law of 30 May 2026:** title, "Publicatie: 4 juni 2026", "bladzijde: 30299", "Dossiernummer: 2026-05-30/03",
  "Inwerkingtreding : 14 juni 2026", Chapter 2 = arts. 2–11 amending arts. 2, 3, 6, 6quater, 12bis, 12ter, 12septies,
  13, 15. As stated; the YAML note now names the articles that wait for a royal decree.
- **KB of 7 April 1995:** title, "Publicatie: 12 mei 1995", "tekstbijwerking tot 07-12-2023", art. 6 and art. 7
  (2° "verzekerd is, niet met bijwerkingen gepaard gaat"; 6° recommendations). As stated.
- **FAGG pages (all dates re-read):** GLP-1 news 19/10/2026 (every quote, product list, "Stand van zaken op
  19-10-2026", and the RIZIV link); patient reporting page 14/10/2026; Q&A 02/10/2026 (EudraVigilance quote); Q&A
  13/11/2023; postal-seizure Q&A 23/07/2024 (NL and EN); "vergund geneesmiddel" 21/05/2021; advertising page
  21/10/2026; hormonal-substances licence page 30/09/2026; compassionate use NL and EN 21/10/2026 (no site compound in
  the table, checked by script); melanotan 29/01/2013; 2025 PharmaWatch news 15/04/2025 (names no seller);
  "Internetapotheken" 20/10/2026 (names pharmacies: correctly not registered). FAGG site search: BPC-157 0, peptiden 0,
  retatrutide only the 19 October news. The FAGG news list shows nothing newer than 19 October 2026 on this topic.
- **`www.eenbijwerkingmelden.be`:** opened in the browser today → `https://www.fagg.be/nl/bijwerking`, "Pagina niet
  gevonden". Confirmed: do not link.
- **Help:** 112.be (112 ambulance and fire, 101 police, 1733, Antigifcentrum 070 245 245, 1813; no 100);
  FOD page "Laatst bijgewerkt op 02/04/2026" (`www.1733.be` → 301 to `health.belgium.be/1733`); Antigifcentrum
  (royal foundation, advises "het publiek, artsen en andere hulpverleners"; when-to-call text); De DrugLijn (hours,
  078 not free, "geen noodnummer", VAD); the DrugLijn search finds nothing for "anabolen", "peptide", "spuitenruil".
- **Sport:** NADO Vlaanderen about and links pages (Coördinatieraad quote; links to the French and German-speaking
  NADOs and the GGC); `www.nadovlaanderen.be` → 301 to `www.dopingvrij.vlaanderen`; old `www.dopinglijn.be` latest
  news 3 July 2020; the 2012 PDF has "6° sportactiviteit" and "9° sporter" (the old numbering is real); Codex
  consolidated text: art. 1, art. 2, 55° and 56°, Title 6/1 (inserted by the decree of 18 June 2021, in force
  13 September 2021), arts. 42/6, 42/7, 42/10 (fine "niet hoger dan 25.000 euro"; § 2 lone recreational sport not
  excluded), 42/11 (reprimand to two years; six months to two years). Dopingautoriteit page unchanged. WADA 2026 and
  2027 PDFs: S0 "PROHIBITED AT ALL TIMES", names BPC-157.
- **Reimbursement:** RIZIV press release 09-09-2025 (machtiging from 1 February 2026; "Mounjaro® wordt al
  terugbetaald op basis van een voorafgaande machtiging van het ziekenfonds"; "eetlustremmer" quote); minister's page
  3 juni 2026 (CTG negative advice, "volgt dat advies"); BCFI Folia May 2026 ("tirzepatide wordt niet terugbetaald in de
  indicatie obesitas"; FAGG "raadt deze praktijken uitdrukkelijk af"); BCFI mission page.
- **ClinicalTrials.gov (Belgium), re-run:** BPC-157, BPC 157, TB-500, thymosin beta 4, ipamorelin, melanotan, SS-31,
  CJC-1295, Semax, Selank, epitalon, KPV, MOTS-c, bremelanotide, GHK-Cu, AOD-9604, hexarelin, thymalfasin, thymosin
  alpha 1, nicotinamide riboside/mononucleotide: 0; retatrutide 2 (NCT07165028 recruiting, NCT06383390 active not
  recruiting); tesamorelin 1 (NCT00608023 completed); elamipretide 1 (NCT02914665 completed).
- **Metadata and ids:** every entry has type, title, year, url, accessed, verified; titles match the page titles; all
  26 ids are unique across `src/data/sources/` and `research/nl/sources/` (checked by script); every id cited in this
  file exists. No source title or URL names a seller or company (brand names of authorised medicines only:
  Wegovy, Ozempic, Mounjaro; the minister's page names the marketing-authorisation holder in its body text, not in its
  title or URL). The research file and YAML are UTF-8 with LF line endings.

### What was corrected (before → after, with source)

1. **Fact 8:** "This is the one clear difference from Dutch law" → "a clear difference ... It is not the only one"
   (the KB of 1974 is a second Belgian extra rule). [be-kb-1974-04-12-hormonale-stoffen]
2. **Fact 12 (missed nuance):** the warning-first practice was written as general → added the Q&A's own limit:
   "niet van toepassing op alle geneesmiddelen. Bepaalde geneesmiddelen worden anders behandeld, zoals speciaal
   gereglementeerde stoffen, verdovende en psychotrope middelen en antibiotica"; the FAGG files hormonal and anabolic
   substances under "Speciaal gereglementeerde stoffen". Writers must not promise "geen boete de eerste keer" for such a
   product. [fagg-postal-seizure-qa-nl; fagg-hormonale-stoffen-vergunning]
3. **Fact 15 / UNRESOLVED 1:** "The royal decree ... was not read (not found on Justel)" → found and read on Justel
   (cn=1974041230): exact title, publication 7 May 1974, in force 1 August 1974, text to 23-12-2008; art. 1 § 1 licence
   for "het bezit"; art. 1 § 2, 1° exempts possession of medicines obtained from an authorised supplier; art. 8
   penalties of the law of 24 February 1921. New source `be-kb-1974-04-12-hormonale-stoffen`; suggested B1 line
   rewritten. [be-kb-1974-04-12-hormonale-stoffen]
4. **Fact 18:** added the FAGG's own words "Melanotan is een hormonale stof". [fagg-melanotan-warning]
5. **Fact 21:** "required: the person, a description, the suspected medicine, the course" → on the Dutch page only
   three fields are starred (person, description, suspected medicine); the course is asked but starred only in the
   English version. [fagg-adverse-reaction-qa-nl; famhp-adverse-reaction-qa]
6. **Fact 22 (missed):** added "Een misbruik of verkeerd gebruik van een geneesmiddel moet niet gemeld worden om de
   persoon in kwestie te kunnen sanctioneren" (Q&A 2023; EN "not intended to punish the person in question"). This
   answers half of reviewer question 5. [fagg-adverse-reaction-qa-nl; famhp-adverse-reaction-qa]
7. **Fact 29 and allowlist why:** "content run by VLESP" (said of the line) → the line is run by the CPZ ("Het CPZ is
   de organisatie achter de Zelfmoordlijn"); VLESP manages the website. [be-zelfmoordlijn-1813]
8. **Fact 33:** added that the 2027 WADA list (from 1 January 2027) keeps BPC-157 in S0 and adds "peptides" to the
   examples. [wada-2027-list-en]
9. **Fact 34 / UNRESOLVED 4:** added NADO Vlaanderen's own figures: 13 targeted samples from strength athletes in
   fitness centres in 2025, 3 adverse results, outside the WADA programme (news of 11 August 2026); FAQ "iedereen die
   in georganiseerd verband aan sport doet" can be tested; buying a prohibited substance counts as possession under the
   doping rules. New source `be-nado-vlaanderen-jaarverslag-2025`. [be-nado-vlaanderen-jaarverslag-2025]
10. **Fact 37:** "every other site peptide 0" → limited to the unapproved peptides; semaglutide (26) and tirzepatide (9)
    have Belgian trial sites (approved medicines, not in the search). [ctgov-nl-be-peptide-search-2026-10-22]
11. **YAML notes:** `be-law-2026-05-30-geneesmiddelen` (art. 61 delayed articles), `fagg-postal-seizure-qa-nl`
    (exception sentence), `fagg-adverse-reaction-qa-nl` (starred fields, misuse sentence), `fagg-hormonale-stoffen-vergunning`
    (decree now found; CAS-number e-mail; "Speciaal gereglementeerde stoffen"), `fagg-schrijnende-gevallen-medische-noodprogrammas`
    (the Dutch page lists the programmes too), `be-zelfmoordlijn-1813` (CPZ), `bcfi-2026-tirzepatide-pennen` (about-page
    redirect). Header: reused `wada-2026-list-en` and `wada-2027-list-en` listed; 26 new ids.
12. **§7.2 allowlist:** noted that `www.health.belgium.be`, `www.ejustice.just.fgov.be`, `www.fagg-afmps.be`,
    `www.famhp.be` and `www.dopinglijn.be` are already allowlisted (only RIZIV and the minister's host are new federal
    hosts).

### Searched for newer or missed material

- FAGG news list and site search (to 27 October 2026): nothing on peptides, BPC-157 or research chemicals; the
  19 October GLP-1 news is the newest relevant item.
- Mounjaro for obesity: a Brussels Times report dated 21 October 2026 says the minister decided against reimbursement;
  it cites no decision text, and neither the minister's news list (to 23 October 2026) nor the RIZIV press list (to
  27 October 2026) has an item. Kept as UNRESOLVED 8; fact 35 stands.
- Needle exchange: web search, VAD and De DrugLijn searches found only news reports (VRT), municipal documents and a
  VAD retrospective article, no current official or established health-source page. UNRESOLVED 5 stands: leave out.
- Not added but worth knowing for the reviewer (Codex, arts. 46–47 of the Flemish decree): a doping practice is a
  crime (six months to five years and/or a fine) for anyone except athletes during their own sport, who get only
  disciplinary sanctions. Not needed on a short notes page; quote no amounts.

### Still UNRESOLVED after the fact-check

1. Which peptides count as "hormonale" or "anabole" under the KB of 1974, and whether the possession rule is enforced
   against a private person (narrowed: the text is read).
2. Fine amounts under art. 16 of the 1964 law (opdecimes, new Criminal Code) and under the 1921 law: not checked;
   quote none (the FAGG's €400 settlement practice may be quoted, with the fact 12 exception).
3. How art. 16 § 1, 2° is applied to individuals beyond the FAGG's warning-then-settlement practice.
4. The legal basis NADO Vlaanderen uses to test a lone gym user, and whether every gym user is covered (narrowed:
   testing in fitness centres is confirmed).
5. Needle exchange in Flanders: leave out.
6. The official names of the French and German-speaking Communities' anti-doping bodies (not read on their own
   sites).
7. The FAGG's full French name (not needed; do not print).
8. Mounjaro reimbursement for obesity after May 2026 (news only).
9. 1733 coverage of a reader's own region.
