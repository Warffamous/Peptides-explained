# Research: nl-help (27 October 2026)

Topic: help, reporting and harm-reduction services for the public in the Netherlands, as they stand on
27 October 2026, for the Dutch safety pages (warning-signs, if-something-goes-wrong, sharps-disposal,
monitoring, injection-safety, sterile-technique, before-you-consider, product-risk, safety index), the stop-now
strings (`src/i18n/nl/warning-signs.json`, the `warningAction` labels), the Dutch `<ProductCheck />` and the NL
contact card (`src/data/jurisdictions.yaml`, `help:` kinds `urgent-advice`, `poisons`, `drugs-advice`,
`mental-health`).

Sources: `research/nl/sources/nl-help.yaml` (36 new ids; 39 after the fact-check) plus 27 existing ids, all re-fetched today (list at
the top of the yaml and in §3). Every page below was fetched on 27 October 2026 with curl (rivm.nl answered
again; it refused connections on 21 October), converted to text and searched for the wording quoted. Dutch is
quoted in Dutch. Nothing here was taken from memory. Researcher: nl-help agent. Fact-checked independently on 27 October 2026: see
"## Fact-check (independent, 27 October 2026)" at the end (its corrections are also marked in place).

Reading guide: "the site's level" means the `action` of an item in `src/i18n/en/warning-signs.json`
(`emergency`, `urgent`, `stop`), which the Dutch file keeps. "Saved" means the 23 October material in
`research/for-nl-site/` and the notes `research/safety-a.md`, `research/safety-b.md`.

## 1. Key facts

### A. Emergency number and the help levels

1. **112 is for danger to life, day and night.** Rijksoverheid: "In een levensbedreigende situatie kunt u het
   beste direct 112 bellen" (page modified 19 December 2025) and "Bel 112 in levensbedreigende en heterdaad
   situaties" (modified 19 March 2024). Thuisarts: "Bij levensgevaar: bel 112 ... Dit kan dag en nacht. De
   telefonist vertelt je wat je moet doen tot de ambulance er is." (page shows no date). 112 is free everywhere
   in the EU, and the Netherlands uses it as its only national emergency number (European Commission page, read
   today). Sources: `rijksoverheid-urgent-medical-help`, `rijksoverheid-112-wanneer`, `thuisarts-spoed-wie-bellen`,
   `ec-112-emergency-number`.
2. **What happens after a 112 call for an ambulance.** The call goes to the regional ambulance control room; the
   operator decides whether an ambulance comes and can give instructions by phone (for example on
   resuscitation); in hospital the patient goes to the Spoedeisende Hulp (SEH). If no ambulance is sent because it
   is not life-threatening: "U moet dan contact opnemen met uw huisarts of naar de spoedeisende hulp van een
   ziekenhuis gaan", with your own transport (Rijksoverheid, modified 26 October 2023). Sources:
   `rijksoverheid-112-ambulance`, `rijksoverheid-urgent-medical-help` ("Als de alarmcentrale 112 geen ambulance
   stuurt, krijgt u te horen waar u wel heen kunt gaan").
3. **Office hours: your own huisarts.** "Op werkdagen overdag: bel je eigen huisarts"; the practice is open "op
   werkdagen van 8 uur 's ochtends tot 5 uur 's middags". The GP has a separate number for urgent calls, usually
   on the practice website, "Of je kiest voor spoed in het keuzemenu als je het gewone nummer belt". The
   assistant asks questions and decides with the GP: come in now, a home visit, or straight to hospital (the GP
   then calls the hospital doctor); if needed the GP calls an ambulance. Source: `thuisarts-spoed-wie-bellen`.
4. **Outside office hours: the huisartsenpost.** Thuisarts: "Avond, nacht, weekend of feestdag: contact met de
   huisartsen-spoedpost"; in its English page: weekdays 17:00 to 08:00, weekends and public holidays (last changed
   9 October 2025). Rijksoverheid: "Is uw huisartsenpraktijk dicht? Dan verwijst de huisarts u door naar de
   huisartsenpost. De huisartsenpost geeft aan of u moet langskomen of beter een afspraak kunt maken met uw
   huisarts" (modified 19 December 2025). You can call, often also e-mail or chat; sometimes you fill in a
   questionnaire first; a trained triage assistant decides between self-care advice, medicines from the pharmacy,
   a call-back, an appointment at the post, a home visit, an ambulance, home care, or contact from the GGZ crisis
   service. Sources: `thuisarts-spoed-wie-bellen`, `thuisarts-in-case-of-emergency`, `rijksoverheid-huisartsenpost-seh`.
5. **There is no national number for the huisartsenpost.** You find your post's number "op de website van jouw
   huisartsen-spoedpost", "op de website van jouw huisarts" or "op het bandje dat je hoort als je je huisarts
   belt", or by searching "huisartsen-spoedpost" plus your town. No Dutch government or Thuisarts page names a
   national number (checked 27 October 2026). The domains huisartsenpost.nl and huisartsenspoedpost.nl are parked
   "Domain for sale" pages (checked today): never link them. The brief forbids printing a regional number. Source:
   `thuisarts-spoed-wie-bellen`.
   *Fact-check addition:* there is a national **finder** (not a number): huisartsenspoedposten.nl, "een initiatief van
   alle huisartsenspoedposten", compiled by InEen, searches by place or postcode and links each post's own site; it warns
   that its location database "wordt op dit moment bijgewerkt. Plaatsen en postcodes zijn mogelijk incompleet" (read
   27 October 2026; `ineen-huisartsenspoedposten`, host not allowlisted, optional). It recommends moetiknaardedokter.nl,
   which is a company's triage tool (footer names a B.V.; it lists prices for practices): never link it. The European
   non-emergency number 116 117 is not in use for Dutch out-of-hours GP care as far as we found (a consumer programme,
   Radar, wrote the plan "is in ons land ook ooit besproken, maar daar is nog geen vervolg aan gegeven"; not a source).
   Never print 116 117.
6. **The service has three spellings, one meaning.** Rijksoverheid and Zorginstituut write "huisartsenpost";
   Thuisarts (2025–2026 pages) writes "huisartsen-spoedpost"; InEen, the branch association, writes
   "huisartsenspoedpost" (ineen.nl home page, read today; not registered as a source). The style sheet
   (`docs/STYLE-NL.md`, not yet written on 27 October) should fix one word (see §6).
7. **The SEH (hospital emergency department) is not the first stop.** "Neem altijd eerst contact op met uw
   huisartsenpost voordat u naar de spoedeisende hulppost gaat. Behalve bij een levensbedreigende situatie. Dan
   kunt u het beste direct 112 bellen." (Rijksoverheid, modified 19 December 2025). Sources:
   `rijksoverheid-huisartsenpost-seh`, `rijksoverheid-112-ambulance`.
8. **Costs.** GP care, including the huisartsenpost, is fully covered and does not use the compulsory deductible
   (eigen risico); SEH care does ("Voor deze zorg geldt wel het verplichte eigen risico"). The eigen risico is
   € 385 in 2026, for everyone aged 18 and over, per calendar year (Rijksoverheid, modified 28 July 2026;
   Zorginstituut, modified 31 March 2026). The cabinet's 2027 budget (15 September 2026) says: "Het verplicht eigen
   risico gaat in 2027 met de inflatie mee en stijgt van € 385 naar € 400." *Fact-check correction:* this is no longer
   only a plan. The Minister fixed it by regulation of 25 September 2026 (Staatscourant 2026, 34372, published 30
   September 2026): "Het bedrag, bedoeld in artikel 19, eerste lid, van de Zorgverzekeringswet, wordt vastgesteld op
   € 400", "met ingang van 1 januari 2027"; the Zvw text from 1 January 2027 on wetten.overheid.nl reads "€ 400 per
   kalenderjaar" (the text in force today, "Geldend van 01-01-2026 t/m heden", still reads € 385). Write "€ 385 in
   2026; € 400 vanaf 1 januari 2027". Sources: `rijksoverheid-huisartsenpost-seh`, `rijksoverheid-eigen-risico-2026`,
   `zin-eigen-risico-zvw`, `nl-zvw-art-19-eigen-risico` (the amount for 2027), `rijksoverheid-2026-09-vws-begroting`
   (the cabinet's reason only).
9. **When in doubt.** Thuisarts: "Bij twijfel of je snel naar een arts moet: kijk op Thuisarts" (each symptom
   page says when to call). Rijksoverheid: "Bij spoed beoordeelt een dokter of doktersassistent hoe ernstig de
   klacht is." So the honest Dutch line is "call your huisarts, or outside office hours the huisartsenpost; they
   tell you what to do", as the saved page had it. Sources: `thuisarts-spoed-wie-bellen`,
   `rijksoverheid-urgent-medical-help`.

### B. What Thuisarts (the Dutch GP college's patient site) says to do, sign by sign

10. **Severe allergic reaction.** "Bel dan met spoed je huisarts, de huisartsen-spoedpost of 112" if the tongue or
    throat swell, breathing is hard or wheezy, the voice is suddenly hoarse, you are dizzy or faint, or have bad
    belly cramps or keep vomiting; "Je moet dan zo snel mogelijk een prik met medicijnen krijgen" (dikke ogen of
    lippen, last changed 2 December 2025). Swollen eyes or lips with nothing else: a GP appointment on a working
    day. If a medicine may be the cause: "Stop niet zomaar met je medicijnen", discuss it with the GP, and tell
    GP and pharmacy its name. With your own allergy pen: "Heb je een allergie-pen, gebruik die dan. Bel daarna
    meteen 112, je huisarts of de huisartsen-spoedpost" (voedsel-allergie, last changed 24 June 2026). Sources:
    `thuisarts-dikke-ogen-lippen`, `thuisarts-voedselallergie`.
11. **Infection at an injection spot.** Spreading red, warm, swollen skin (wondroos, cellulitis): "Bel direct je
    huisarts of de huisartsen-spoedpost als je denkt dat je wondroos hebt" (last changed 1 June 2026). A boil or
    pus lump (steenpuist): "Knijp de puist niet uit. De ontsteking kan hierdoor erger worden."; "Bel direct de
    huisarts of huisartsen-spoedpost" if you get a fever or feel ill, or your defences are weak; otherwise an
    appointment, among others if "Je spuit drugs" (last changed 27 July 2026). Possible sepsis (fever or a low
    temperature, fast breathing, fast heartbeat, drowsy or confused): "Neem direct contact op met uw huisarts of
    met de huisartsenpost"; "Een sepsis kan levensbedreigend zijn" (last changed 2 November 2022, unchanged).
    Sources: `thuisarts-wondroos`, `thuisarts-steenpuist`, `thuisarts-sepsis`.
12. **Low blood sugar.** "112: Iemand moet direct 112 bellen als je bewusteloos bent." Straight to the huisarts or
    huisartsen-spoedpost ("Spoed") if sugar does not help, "Je reageert niet meer goed als iemand iets tegen je
    zegt", breathing is hard, or you become confused. A helper calls the GP or huisartsen-spoedpost straight away
    and rubs honey or syrup inside both cheeks; glucagon if the person has it (diabetes type 2 page, last changed
    14 July 2026; the page's sugar amounts are not for this site). Source: `thuisarts-hypo-diabetes-type-2`.
13. **Severe belly pain.** "Spoed: bel direct je huisarts of de huisartsen-spoedpost" with belly pain and "Je hebt
    ineens heftige buikpijn", pain that keeps getting worse, vomiting blood, "Je blijft steeds overgeven", feeling
    faint, drowsy or confused, or fast breathing; the page names no 112 threshold (last changed 15 July 2026; the
    old /buikpijn/ address now redirects to /buikpijn-bij-volwassenen/). Source: `thuisarts-buikpijn`.
14. **Chest pain.** "Bel 112" for pain or heavy pressure on the chest that stays when you sit, possibly with pain
    in the arm, neck or jaw, sweating, nausea, a grey face, breathlessness or dizziness; "Bel direct je huisarts of
    de huisartsen-spoedpost" for sharp pain with hard, painful breathing, or a very fast irregular heartbeat at rest
    (last changed 27 October 2026, today; the 112 wording is unchanged). Source: `thuisarts-pijn-op-borst`.
15. **Stroke signs.** Sudden weakness of an arm or leg, a drooping mouth, or suddenly not seeing, speaking or
    swallowing well: "Bel direct 112, je huisarts of de huisartsen-spoedpost". If the signs came on slowly or were
    gone after a few minutes: "Bel de huisarts. Ook als je twijfelt of het wel erg is" (possible TIA) (last changed
    7 September 2026). Source: `thuisarts-verlamming`.
16. **Mental health crisis.** "112: Bel direct 112 als iemands leven in gevaar is." "113: Bel gratis 113 of kijk op
    113.nl als je merkt dat iemand aan zelfmoord denkt." Without a therapist, call the huisarts or
    huisartsen-spoedpost, who calls "de crisisdienst van de geestelijke gezondheidszorg (ggz)" (last changed
    6 October 2025). Source: `thuisarts-psychische-crisis`.
17. **How the Dutch levels line up with the site's three levels.** Thuisarts pages use four steps: "112";
    "Spoed: bel direct je huisarts of de huisartsen-spoedpost"; "Bel vandaag / dezelfde dag je huisarts of de
    huisartsen-spoedpost"; "Maak (op werkdagen) een afspraak met je huisarts". The site's `emergency` = 112,
    `urgent` = "bel direct" (not "today": the English label "Get medical help today" is too slow for Dutch GP advice,
    as safety-a's fact-check already noted), `stop` = an appointment on a working day. Per sign (site level → Dutch
    GP level, source):

    | Warning-sign id (site level) | Dutch GP advice | Same speed? |
    |---|---|---|
    | anaphylaxis (emergency) | spoed: huisarts, huisartsen-spoedpost or 112; use own pen first (`thuisarts-dikke-ogen-lippen`, `thuisarts-voedselallergie`) | yes |
    | hives-swelling (stop) | appointment on a working day (`thuisarts-dikke-ogen-lippen`) | yes |
    | chest-pain (emergency) | 112 (`thuisarts-pijn-op-borst`) | yes |
    | stroke-signs (emergency) | direct 112, huisarts or spoedpost (`thuisarts-verlamming`) | yes |
    | spreading-redness (urgent) | bel direct (`thuisarts-wondroos`) | yes |
    | fever-after-injection (urgent) | bel direct with fever (`thuisarts-steenpuist`, `thuisarts-sepsis`) | yes |
    | used-needle-stick (urgent) | contact huisarts, GGD or hospital at once (`rivm-hygiene-piercing`) | yes |
    | cannot-keep-fluids-down (urgent) | "Je blijft steeds overgeven": spoed (`thuisarts-buikpijn`) | yes |
    | pus-lump (urgent) | appointment, unless fever or feeling ill: then bel direct (`thuisarts-steenpuist`) | site is faster |
    | sepsis-signs (emergency) | "Neem direct contact op met uw huisarts of met de huisartsenpost" (`thuisarts-sepsis`) | site is faster |
    | very-low-blood-sugar (emergency) | 112 only if unconscious; confused or not responding: spoed huisarts (`thuisarts-hypo-diabetes-type-2`) | site is faster |
    | pancreatitis (emergency) | sudden severe belly pain: spoed huisarts, no 112 named (`thuisarts-buikpijn`) | site is faster |
    | severe-breathlessness, palpitations-severe (emergency) | fast or hard breathing, or a very fast irregular heartbeat at rest: bel direct huisarts (`thuisarts-pijn-op-borst`); 112 when with chest pain | site is faster |
    | the other items | no Thuisarts page checked today; English (NHS, MedlinePlus) basis stays | – |

    Where the site is faster, it keeps its level (the saved provenance paragraph: "where guidance differed we mostly
    chose the faster level"); see §4.

### C. Poisoning

18. **The NVIC does not advise the public.** "Het NVIC informeert artsen, apothekers en andere professionele
    hulpverleners"; "Vermoedt u een vergiftiging? Neem dan contact op met uw huisarts (of buiten kantooruren met de
    huisartsenpost). Uw arts kan het NVIC dag en nacht bereiken". The NVIC's 24-hour line is "via de
    24-uursinformatietelefoon" for doctors and professionals; there is no duty to report poisonings (NVIC home page,
    © 2026, read today; unchanged since 22 October). So the Dutch poison route for the public is 112 when life is in
    danger, otherwise the huisarts or huisartsenpost. Never print the NVIC number. Source: `nvic-umcutrecht`.

### D. Reporting a side effect

19. **Bijwerkingencentrum Lareb takes reports from anyone.** "Iedereen kan een bijwerking bij ons melden", also for
    someone else ("Bijvoorbeeld voor je kind of partner"). It covers "alle geneesmiddelen en vaccins die in
    Nederland verkrijgbaar zijn. Met én zonder recept, dus ook medicijnen die je koopt bij de drogist, supermarkt of
    via internet", other health products (supplements, herbal and slimming products), allergic reactions,
    interactions and quality defects. Reporting is voluntary for the public (health professionals must report
    serious ones, Lareb citing Geneesmiddelenwet art. 78(3)). Only side effects that occurred in the Netherlands
    (or Bonaire, Sint Eustatius, Saba); elsewhere, the reader's own country's centre. Source: `lareb-bijwerkingen-melden`.
20. **What Lareb asks.** "Van de melder: Een e-mailadres"; "Van degene die de bijwerking heeft ervaren: De
    geboortedatum, Het geboortegeslacht, De naam van het medicijn of vaccin dat de bijwerking (waarschijnlijk)
    heeft veroorzaakt"; also other medicines and conditions; "Je bent niet verplicht deze informatie in te vullen."
    A verification code is sent by e-mail; a side effect not in the list goes under "Andere bijwerking". Source:
    `lareb-bijwerkingen-melden`.
21. **What Lareb does and does not do.** "Wij geven geen medisch advies. Daarom krijg je geen persoonlijke reactie";
    "Bespreek je klachten altijd met jouw arts of apotheker." "Nee, wij delen jouw melding niet met jouw arts of
    apotheker" (it may ask your consent to request, for example, a blood result). Reports are shared anonymised with
    the CBG, RIVM, NVWA, IGJ, EMA, WHO and the medicine's maker (through the European database) and appear
    anonymously on Lareb's site. Source: `lareb-bijwerkingen-melden`.
22. **Users of illegal medicines may report.** "Zowel zorgverleners als gebruikers van illegale geneesmiddelen kunnen
    bij Bijwerkingencentrum Lareb terecht om bijwerkingen te melden" (27 December 2021, still online). Source:
    `lareb-2021-illegal-medicines`.
23. **The online form** is at `https://meldformulier.lareb.nl/Forms/ReportForm` (HTTP 200; a script application, so
    its fields could not be read). Link the Lareb page `https://www.lareb.nl/pages/alles-over-bijwerkingen-melden`,
    which links the form ("Meld een bijwerking van: een geneesmiddel of gezondheidsproduct zoals vitamine, supplement
    of kruidenpreparaat"). Lareb's contact form: "Je kunt dit formulier niet gebruiken om een bijwerking te melden"
    (*fact-check correction:* this sentence is on https://www.lareb.nl/contactformulier, not on the two cited pages;
    the FAQ page says only "Let op: je ontvangt geen reactie. Heb je een vraag? Vul dan ons contactformulier in").
    Sources: `lareb-bijwerkingen-melden`, `lareb-home` (the contact-form page is not registered; cite it only if a
    writer needs the sentence).
24. **The CBG sends the public to Lareb.** "Dan kun je deze melden bij Bijwerkingencentrum Lareb, via
    www.lareb.nl. Lareb verzamelt, registreert en analyseert individuele meldingen, in opdracht van het CBG";
    the CBG may then change the leaflet, make a medicine prescription-only, warn doctors and pharmacists, or take it
    off the market (modified 7 May 2026). Source: `cbg-bijwerking-melden`.

### E. Reporting a suspect seller or product

25. **The Landelijk Meldpunt Zorg (LMZ) is now a section of igj.nl.** The old address landelijkmeldpuntzorg.nl
    answers HTTP 302 to `https://www.igj.nl/onderwerpen/klachten-en-melden/klacht-of-vraag-over-zorg-of-jeugdhulpverlening`
    (page title "Klacht over zorg of jeugdhulp? Het Landelijk Meldpunt Zorg", modified 19 October 2026). It takes
    questions and complaints about care "Of over een medicijn of medisch hulpmiddel", gives information and advice,
    and registers them for the IGJ's supervision. Source: `igj-landelijk-meldpunt-zorg`.
26. **How to reach the LMZ.** By phone, contact form or letter; "Wij lossen uw klacht niet op"; the registration
    shared with inspectors holds the provider's details, not the reporter's; "Wilt u anoniem blijven? Dan vragen wij
    u om ons te bellen." Phone "088 - 120 50 20 (lokaal tarief)", Monday to Friday 9:00 to 14:00 (contact page,
    modified 18 September 2026). Sources: `igj-lmz-informeren`, `igj-lmz-contact`.
27. **A website you doubt goes to the LMZ.** IGJ: "Vermoedt u dat een website illegaal medicijnen aanbiedt? Dan kunt u
    dit melden bij het Landelijk Meldpunt Zorg." (online medicijnen, modified 23 March 2026). IGJ and CBG: "Twijfel je
    over de betrouwbaarheid van een website? Meld deze dan bij het Landelijk Meldpunt Zorg van de inspectie." (3
    September 2025). Sources: `igj-online-medicijnen`, `igj-2025-illegal-online-medicines`.
28. **A product from a pharmacy you think is fake: tell the pharmacist.** Pharmacists, wholesalers and makers who
    suspect falsification "moeten dit binnen 24 uur melden via het meldformulier van de IGJ voor vervalste
    geneesmiddelen" (CBG, modified 22 October 2025); the CBG page gives no reporting route for patients. That the
    pharmacist is the public's route is our reading of this duty (the saved page said the same). Source:
    `cbg-fmd-vervalsing-melden`.
28a. **New IGJ warning, 20 October 2026 (added by the fact-check).** Stolen medicines from a Dutch wholesaler may be
    offered online: "Het gaat met name om insulinepennen, die mogelijk ook worden gepresenteerd als obesitasmedicatie.
    Gebruik kan levensgevaarlijk zijn." Advice to the public: "Hebt u medicatie online gekocht? Gebruik die niet en
    neem contact op met uw arts of apotheek." Relevant to product-risk and the stop-now strings (a pen sold online as a
    weight-loss medicine may be something else). Source: `igj-2026-10-gestolen-medicijnen`. The IGJ also issued an
    order (24 August 2026) and a penalty (31 August 2026) against a web shop after "meerdere meldingen ... over
    schadelijke gevolgen bij consumenten na het gebruik van retatrutide"; those news items name the seller in their
    title and url, so they are not registered: describe in general terms only, with a neutral source (legal researcher).

### F. Drugs information and addiction care

29. **The Drugs Infolijn (Trimbos-instituut).** "0900-1995 €0,10/min", "Geopend op maandag t/m vrijdag van 09:00 –
    17:00"; chat (free) Monday to Friday 13:00 to 17:00; e-mail (free), answered within 5 working days; anonymous
    ("Je hoeft je naam niet te noemen"), "Zonder oordeel"; "De Drugs Infolijn is er voor iedereen"; for "al je
    vragen over drugs" (law, traffic, health, addiction, help, stopping or cutting down); "we bieden geen
    behandeling" but can refer (modified 19 October 2026). Source: `drugsinfo-drugs-infolijn`.
30. **DRUGSinfo has no page on peptides or performance and image enhancing drugs.** The site's own search (WordPress
    search endpoint, 27 October 2026) returned nothing for "anabolen", "peptide", "peptiden", "melanotan",
    "prestatiebevorderend" and "groeihormoon"; its list of drugs has no such entry. (*Fact-check precision:* re-run
    today, "steroiden" gives 3 hits, all on asthma and COPD medicines, and "doping" 4 hits, all on detection times of
    party drugs; neither is a page on performance drugs.) Whether the
    Infolijn answers questions about peptides is not stated (§5). Source: `drugsinfo-drugs-infolijn` (absence).
31. **Treatment goes through the huisarts.** "Mensen met een drugsprobleem gaan eerst naar de huisarts. Als de
    problemen ernstig zijn verwijst de huisarts ze door naar de Basis-GGZ of naar de specialistische
    verslavingszorg" (Rijksoverheid, modified 8 April 2024). DRUGSinfo's map of addiction-care institutions: "Wil je
    een behandeling? Ga dan eerst naar je huisarts. Je hebt een verwijzing van de huisarts nodig" (3 August 2026).
    Sources: `rijksoverheid-verslavingszorg-drugs`, `drugsinfo-hulpkaart`.
32. **Jellinek** (addiction care; its test service is in Amsterdam, Amersfoort, Utrecht and Hilversum) has public Q&A pages on doping and on anabolic
    steroids ("Wat zijn anabole steroïden?"), but no page on peptides was found. Mainline wrote in November 2023:
    "Binnen de geestelijke gezondheidszorg en verslavingszorg in Nederland bestaat geen gespecialiseerde zorg voor
    personen die PIEDs gebruiken." (an older page of a foundation that is closing; context only). Sources:
    `jellinek-anabole-steroiden`, `mainline-info-zorg-pieds`.
    *Fact-check addition:* Mainline's sentence is about mental-health and addiction care only. Jellinek's test-service
    page (read today) links "de anabolenpoli" of a general hospital in Haarlem, whose page (meta description, read
    today) says: "Heeft u klachten tijdens of na het gebruik van anabole steroïden? U kunt terecht op het speciale
    spreekuur." So at least one Dutch hospital runs a consultation for complaints from anabolic steroids. It is about
    steroids, not peptides; whether a referral is needed and who may come could not be read (script page). Not
    registered; do not write "er is in Nederland geen gespecialiseerde zorg" on Dutch pages.

### G. Mental health

33. **113 Zelfmoordpreventie.** "Ben je in levensgevaar? Bel meteen 112." "Geen levensgevaar, maar wel hulp nodig? Bel
    gratis 113 of start een chatgesprek." "We staan 24 uur per dag voor je klaar"; the chat "is dag en nacht
    geopend"; anonymous (you give only a made-up name). The number 113 works only from within the Netherlands;
    from abroad, use the chat. Source: `stichting-113-hulplijn`. *Fact-check addition:* the same page says 113 uses AI
    to support counsellors in chats only ("In een hulplijngesprek praat je altijd met een mens"; "AI wordt alleen
    gebruikt in chatgesprekken"); a caller who does not want that can phone 113. Do not write "anoniem" in a way that
    suggests nothing is processed; "anoniem: je noemt alleen een (verzonnen) naam" is what the page says.
34. **113 is the number to print, not 0800-0113.** Since 3 October 2025 calling 113 is free ("Voorheen konden mensen
    alleen gratis bellen via 0800-0113"); 113 "communiceren we nu overal"; 0800-0113 and 0900-0113 "blijven wel
    technisch beschikbaar" but no longer appear in new communication. The reference 113 asks the media to use:
    "Denk je aan zelfdoding? Bel dan 24/7 gratis en anoniem 113 of chat op 113.nl". Sources:
    `stichting-113-2025-gratis-bellen`, `stichting-113-drie-nummers`.
35. **The GP route for a crisis.** Mental health crisis: the huisarts or huisartsen-spoedpost, who calls the GGZ
    crisis service (`thuisarts-psychische-crisis`, `thuisarts-spoed-wie-bellen`; Thuisarts English: "the GP can
    contact the local Crisis Intervention Team (available 24/7)", `thuisarts-in-case-of-emergency`).

### H. Harm reduction for injecting

36. **Needle exchange (spuitomruil) exists, mostly for people who use drugs.** Rijksoverheid lists "Gratis omwisselen
    van gebruikte spuiten voor nieuwe steriele spuiten. Dit verkleint de kans op besmetting met hiv of hepatitis B of
    C." (8 April 2024). The Trimbos-instituut counted "29 spuitomruil locaties (19 steden)", "vrijwel zeker een
    onderschatting", and notes that besides addiction-care institutions "ook apotheken of GGD-locaties waar je
    spuiten kunt omruilen"; at one location described, visitors "leveren gebruikte spuiten in en ontvangen kosteloos
    nieuwe exemplaren", elsewhere after a short intake (report of 23 June 2026, about people who use opiates and
    basecoke). *Fact-check precision:* the count is the same as in the 2022 inventory ("Net als in de vorige
    inventarisatie (2022) konden we 29 locaties in 19 steden identificeren"), and the report lists where exchange is
    often done alongside other work: "bij gebruiksruimten, apotheken, GGD'en, huisartsen, maatschappelijke opvang en
    andere laagdrempelige voorzieningen (zoals hostels)". Sources: `rijksoverheid-verslavingszorg-drugs`,
    `trimbos-2026-harm-reduction-nederland`.
37. **Mainline's needle exchange and drug checking have stopped.** "De spuitomruil stopt per 1 mei" (17 March 2026,
    modified 30 April 2026);
    "Uiterlijk per 14 mei stopt Mainline met spuitomruil en drugs testen. In Amsterdam kun je nog bij vier locaties van
    De Regenboog terecht voor spuitomruil en bij de Jellinek voor drugs testen." (8 May 2026). The home page still
    says "Helaas stopt Mainline spoedig" (27 October 2026); the site and its 2023 pages stay online. Sources:
    `mainline-2026-diensten-stoppen`, `mainline-2026-wat-gaat-waar`.
38. **People who inject performance drugs or peptides at a needle exchange.** Only Mainline (November 2023) says
    anything: users of anabolic steroids and other PIEDs "maken hier in Nederland vrijwel geen gebruik van,
    alhoewel dit wel mogelijk is". No 2026 source confirms that today's exchanges serve them (§5). Source:
    `mainline-info-zorg-pieds`.
39. **DRUGSinfo's injecting advice (still the Dutch harm-reduction basis).** New needles ("Naalden zijn alleen scherp als
    ze voor het eerst worden gebruikt"; reuse makes inflammation more likely); never share; clean (disinfect) the
    injection spot to prevent inflammation and abscesses, which "moeten door een arts worden behandeld"; do not
    inject alone; pack used needles in a hard plastic or metal box or a spuitcontainer; hand them in "bij apotheken,
    ziekenhuizen, GGD's of verslavingszorg organisaties"; some user rooms and shelters have a spuitomruil (modified
    22 July 2026). The page also gives dose advice for recreational drugs ("Laag doseren"), which this site never
    repeats. Source: `drugsinfo-injecteren`.

### I. Drug checking

40. **DIMS (the national drug-checking network) does not test medicines or performance drugs.** "Ook testen wij geen
    steroïden, geen medicijnen en ook geen smartshop producten"; "Middelen die gebruikt worden voor medische
    doeleinden, dus als (on)officiële medicatie, kan het DIMS niet testen"; "Ook steroïden of andere
    prestatieverhogende middelen zoals pre-workout supplementen kan het DIMS niet aannemen" (page modified 10 January
    2022, live today). It tests "research chemicals" in the sense of new psychoactive substances. Peptides are not
    named; a vial sold as a peptide for health, weight or muscle falls under what DIMS says it does not take
    (our reading, §4). DIMS tests only for people who plan to use the substance themselves, only drugs from the
    Netherlands, and need not give a result (conditions, modified 4 August 2026). Sources: `dims-welke-drugs`,
    `dims-voorwaarden`.
41. **Jellinek's test service** (Amsterdam, Amersfoort, Utrecht, Hilversum) lists among what it does not test
    "Anabolen" and "Medicijnen". Mainline (2023): "Een soortgelijke service bestaat in Nederland helaas niet voor het
    testen van anabole steroïden en/of andere PIEDs." We found no Dutch public service that tests a peptide vial
    (27 October 2026); no source read says one exists. Sources: `jellinek-drugstestservice`, `mainline-info-zorg-pieds`.

### J. Needle-stick injury (prikaccident)

42. **RIVM's steps** (hygiene guideline for piercing; fully revised 2021, interim change February 2026; read live today):
    "Zuig de wond niet uit."; "Was de wond grondig met zachte vloeibare zeep onder stromend warm water."; "Gebruik
    geen harde borstel."; "Dek snij- of prikwondjes af met een waterdichte pleister."; "Neem direct contact op met uw
    huisarts, de regionale GGD (Gemeentelijke Gezondheidsdienst) of het ziekenhuis. Een behandeling van een
    eventuele besmetting moet idealiter binnen 1 uur en niet later dan 72 uur na het prikincident worden gestart."
    Source: `rivm-hygiene-piercing`.
43. **The national LCI guideline on needle-stick injuries** (version 2019, adopted 5 April 2019; page modified 27
    January 2026) covers citizens too ("personen die zich aan zwerfnaalden verwonden"): let the wound bleed (do not
    staunch it), rinse with lukewarm running water, then disinfect as soon as possible "met een huiddesinfectans: 70%
    alcohol of 70% isopropanol of een (povidon)jodiumoplossing". The person goes, "afhankelijk van de
    omstandigheden", to an occupational doctor, a special reporting point, the SEH, the huisarts or the GGD. HIV PEP
    "bij voorkeur binnen 2 uur ... tot maximaal 72 uur". For a loose needle of unknown source, testing the needle is
    not useful and HIV PEP is not advised unless it was used within 24 hours by someone from a high-risk group. A
    guideline for professionals; host not yet allowed (§7). Source: `lci-2019-prikaccidenten`.
44. **PEP through the GGD.** Thuisarts: PEP is possible after a prick from a needle with blood of someone who has or
    may have HIV, less than 72 hours ago, "Het liefst al binnen 2 uur"; "Je kunt PEP krijgen bij de GGD. De meeste
    GGD's kun je 24 uur per dag bellen voor PEP. Als de GGD dicht is, kun je bellen met de spoedeisende hulp van het
    ziekenhuis."; hepatitis B PEP is discussed with the doctor; "Gebruik nooit een naald die door een ander is
    gebruikt." (last changed 6 October 2022, unchanged). GGDs are regional; no national GGD number was looked for.
    Source: `thuisarts-hiv-pep`.

### K. Disposing of needles and syringes

45. **Pharmacy.** "doe gebruikte naalden altijd in een naaldencontainer. Een naaldencontainer is te krijgen bij uw
    apotheek"; medicine waste goes back to the pharmacy or to a small chemical waste point (milieuplein or
    milieustraat), not in the bin, sink or toilet (apotheek.nl, updated 4 June 2025). For a home-injected medicine:
    "Volle containers kunt u bij uw apotheek inleveren" (nadroparine, updated 3 July 2025). Sources:
    `apotheek-medicijnafval`, `apotheek-nadroparine`.
46. **Municipal small chemical waste (kca).** Milieu Centraal lists "Injectienaald" under "Wel bij KCA": "Klein chemisch
    afval (kca) kun je inleveren bij de milieustraat of afvalscheidingsstation van je gemeente" and "Medicijnen en
    injectienaalden kun je ook inleveren bij de apotheek waar je ze gehaald hebt" (last changed 27 June 2026).
    Rijksoverheid: "Uw gemeente moet het klein chemisch afval inzamelen. Gemeenten mogen zelf beslissen hoe ze dit
    doen" (gemeentedepot, chemokar or kca-depot); the page does not mention needles (modified 11 August 2026).
    Sources: `milieucentraal-kca`, `rijksoverheid-kca`.
47. **Other places.** Pharmacies, hospitals, GGDs and addiction-care organisations take used needles (DRUGSinfo, 22 July
    2026). Source: `drugsinfo-injecteren`.
48. **The container.** RIVM (for piercers): a UN-approved needle container of hard plastic, leak-proof, cannot be
    reopened once closed; do not fill above the line. Thuisarts for home injecting: the pharmacy gives you "een doos
    waar je de naalden in doet na het prikken (een naalden-container)" (13 November 2023). Sources:
    `rivm-hygiene-piercing`, `thuisarts-prikken-bloedverdunner`.

### L. Blood tests and checks through the huisarts; insurance

49. **The GP can order tests; GP care is covered without deductible, lab tests are not.** "Om te bepalen waar u last van
    hebt, kan een huisarts testen aanvragen bij (huisartsen)laboratoria." GP care is paid from the basic package,
    with no own contribution and no eigen risico; the eigen risico does apply to "medicijnen die de huisarts
    voorschrijft", "de testen die de huisarts buiten de praktijk laat uitvoeren, zoals bloedonderzoek" and referred
    care (Zorginstituut, modified 24 July 2025). Eigen risico 2026: € 385 (fact 8). Sources: `zin-huisarts-zvw`,
    `rijksoverheid-eigen-risico-2026`.
50. **What Dutch GP guidance says about medicines obtained elsewhere.** NHG (October 2025, about weight-loss medicines
    obtained through other routes such as the internet): "De huisarts draagt geen verantwoordelijkheid voor periodieke
    controles bij elders verkregen medicatie. De huisarts heeft wel een rol in het signaleren van bijwerkingen en
    complicaties van dergelijke middelen." "De patiënt is verantwoordelijk behandelaren te informeren over het
    medicatiegebruik." So a GP may decline routine monitoring of a product they did not prescribe but will look at
    complaints. Source: `nhg-2025-gewichtsreducerende-medicatie`.
51. **Going to the GP.** You can see your GP for problems caused by alcohol or drugs; write down all medicines, "van uw
    arts, apotheek of zelf gekocht", and bring the list; book a longer (20-minute) appointment if you have a lot to
    discuss; "Alle artsen in Nederland hebben een beroepsgeheim" (last changed 19 April 2024). Source:
    `thuisarts-naar-de-huisarts`.
52. **Tests you buy yourself.** Tests through the GP are studied and reliable; with tests you buy you often pay
    yourself and work out the result yourself; "Veel testen die je zelf kunt kopen, zijn niet goed onderzocht"; a
    result can be bad without disease or good with disease (last changed 27 March 2025). Name no lab or test seller.
    Source: `thuisarts-gezondheidstest`.

### M. Injecting medicines safely: Dutch GP advice

53. **Thuisarts, for medicines injected under the skin at home.** Insulin (last changed 4 September 2026): a new needle
    for every injection; "Was je huid met water en zeep. Gebruik geen middel tegen bacteriën (ontsmettingsmiddel)";
    inject each day on another patch of skin, moving 1 cm; the used needle into "een speciale naalden-container".
    Blood thinner (13 November 2023): wash your hands with water and soap ("De plek waar je de prik gaat geven, hoef
    je niet te wassen"); "Prik niet in een wond, blauwe plek of litteken"; a different place each time; needle and
    syringe into the naalden-container; do not rub. Sources: `thuisarts-insuline-spuiten`,
    `thuisarts-prikken-bloedverdunner`.

### N. Medical secrecy (re-check only; the legal researcher owns the full answer)

54. KNMG: "Een arts moet zwijgen over alles wat hij tijdens zijn werk te weten komt over een patiënt" (updated
    26 January 2024); the "wanneer doorbreken" page still lists five grounds (consent, presumed consent, legal duty or
    right, conflict of duties with the drunk-driver example, weighty interest) and the right to stay silent towards
    police and justice. Unchanged since 22 October. Sources: `knmg-beroepsgeheim`, `knmg-beroepsgeheim-doorbreken`.

### O. Belgium and the EU (only as far as this topic touches them)

55. 112 is the emergency number throughout the EU, Belgium included (`ec-112-emergency-number`). Belgian help services
    (the Antigifcentrum, the FAGG's reporting form) were not researched here: they belong to the Belgium notes
    assignment.

### P. The two Dutch photos (captions)

56. **Huisartsenpost in Oss** (`huisartsenpost-oss`): Commons description "Ingang en voorgevel van de Huisartsenpost aan
    de Gezondheidslaan in Oss", taken 18 June 2023 (Exif), CC BY-SA 4.0, RagingR2 (Commons API, today). A caption may
    say "een huisartsenpost in Oss (2023)"; whether the post still works from that building was not checked.
57. **Ambulance** (`ambulance-den-haag`): Commons title "Ambulance Haaglanden unit 15-114, Mercedes at Delft, The
    Netherlands", taken 17 January 2010, CC0, Alf van Beem. "Een ambulance in de regio Haaglanden" is supported; a
    caption should not imply the livery is current. Its saved Dutch-site caption says "call your local emergency
    number": on Dutch write "Bel 112 als er levensgevaar is" (fact 1).

## 2. What changed since 23 October 2026

Compared with the saved pages (`research/for-nl-site/snapshot-2026-10-23/content/pages-en/safety/*.mdx`), the saved
strings (`.../i18n/en/warning-signs.json`, `product-check.json`, glossary `safety-a.json`, `safety-b.json`), the
manifests (`MANIFEST-safety-en-a.md`, `-b.md`), `research/safety-a.md`, `research/safety-b.md` and the NL entry of
`src/data/jurisdictions.yaml`:

1. **113 is free; print "113", not "0800-0113".** Since 3 October 2025 (before the saved material, which did not
   name 113 at all). 113.nl now shows only "113" and the chat; 0800-0113 still works but is no longer used in new
   communication. The brief's "0800-0113 and chat, as shown on 113.nl" is out of date: 113.nl shows "Bel gratis 113"
   (facts 33–34).
2. **Mainline has stopped its services.** Saved notes (safety-a, 20 October) said only that Mainline "will soon cease
   to exist". Its needle exchange stopped by 1 May (at the latest 14 May) 2026 and its drug checking by 14 May 2026
   (fact 37). `mainline-steroids-safe-injecting` is still online (modified 18 November 2023) but belongs to an
   organisation that no longer provides services, and the page gives steroid technique, needle sizes and volumes.
   Do not present Mainline as a place to go; replace its citations on Dutch pages with DRUGSinfo, Thuisarts or WHO
   where the same point is made (safety-a's open item, now pressing).
3. **The Landelijk Meldpunt Zorg moved into igj.nl.** landelijkmeldpuntzorg.nl redirects (302) to the IGJ page (fact
   25). Saved text "report it to the IGJ through its national reporting point (Landelijk Meldpunt Zorg)" stays true;
   the link must be the igj.nl page. The saved glossary entry `landelijk-meldpunt-zorg` stays accurate.
4. **rivm.nl answers again.** The RIVM piercing guideline was read live (fact 42); safety-a's "re-check the live page"
   item is done. The text is unchanged. Its machine date says 11 September 2025 while its Verantwoording lists a
   February 2026 change: cite "fully revised 2021, interim change February 2026", as the registry note does.
5. **The LCI disinfection step can now be cited** if `lci.rivm.nl` is allowlisted (fact 43). Saved conflict
   (safety-a §Conflicts 2) left disinfection out because the host was not allowed; the medical reviewer still decides
   (§6).
6. **Thuisarts stroke page: "also if the symptoms have gone" is not what it says.** Registry note of
   `thuisarts-verlamming` (20 October): "Bel direct 112, je huisarts of de huisartsen-spoedpost, also if the symptoms
   have gone". The page (last changed 7 September 2026, so not a new change) says: sudden symptoms → bel direct 112,
   huisarts or spoedpost; symptoms quickly gone → "Bel toch nog je huisarts"; slowly or gone within minutes → "Bel de
   huisarts" (fact 15). The saved English text that rests on NHS ("999 even if symptoms stop") is unaffected; a Dutch
   sentence citing Thuisarts must not say "112 also when it has passed". The registry note should be corrected by the
   merge (`src/data/sources/safety-a.yaml` is not ours to edit; see §7).
7. **Thuisarts chest-pain page changed today** (last changed 27 October 2026, was 19 October). The 112 wording cited
   is unchanged (fact 14); the registry note's date is now stale.
8. **New Dutch GP sources for signs the saved pages sourced to the NHS only:** severe belly pain
   (`thuisarts-buikpijn`), low blood sugar (`thuisarts-hypo-diabetes-type-2`), boils and pus lumps
   (`thuisarts-steenpuist`, including "Knijp de puist niet uit"), the allergy pen (`thuisarts-voedselallergie`),
   mental health crisis (`thuisarts-psychische-crisis`), self-injecting (`thuisarts-prikken-bloedverdunner`). These
   show where the site's level is faster than Dutch GP advice (fact 17).
9. **DRUGSinfo injecting page was updated** (modified 22 July 2026). The points cited by `drugsinfo-injecteren` are all
   still there, and it now adds "Bij sommige gebruikersruimten of daklozenopvanglocaties is er ook een spuitomruil".
10. **Eigen risico 2027.** The saved material gives no amount. New: € 385 in 2026; € 400 from 1 January 2027, fixed
    by the regulation of 25 September 2026, Stcrt. 2026, 34372 (fact 8, corrected by the fact-check: not only a plan).
    Any older plan to lower it to € 165 in 2027 (a 2024 announcement found by search, not read) is not the current
    plan; never write € 165.
11. **NHG says GPs need not do periodic checks of medication obtained elsewhere** (fact 50). Saved monitoring text said
    "We found no Dutch GP guideline on checks for people who use unlicensed peptides (searched 22 October 2026)". That
    remains true for peptides, but there is now an NHG practice text (October 2025) on weight-loss medicines obtained
    online that a Dutch monitoring page should reflect honestly.
12. **Drug checking: a clear Dutch answer.** The English index says "We did not check drug-checking services in the
    other countries". For the Netherlands: DIMS and Jellinek test no medicines, no steroids and no other performance
    drugs (facts 40–41).
13. **Needle exchange numbers.** New Trimbos inventory (23 June 2026): at least 29 locations in 19 cities (fact 36). The
    saved sharps page's "Used needles can also be handed in at some hospitals, GGDs and addiction services" is still
    supported (fact 47).
14. **Unchanged and still correct** (re-read today): Rijksoverheid urgent help and huisartsenpost/SEH (both modified 19
    December 2025; same wording), NVIC (public → huisarts/huisartsenpost), Lareb (anyone may report; online purchases;
    not shared with the doctor), Lareb 2021 (users of illegal medicines), Thuisarts sepsis, wondroos, dikke ogen, PEP,
    insulin, naar de huisarts, gezondheidstest; Zorginstituut huisarts (lab tests count towards the deductible);
    apotheek.nl medicijnafval and nadroparine; Rijksoverheid kca (now modified 11 August 2026, same content); IGJ online
    medicijnen and the 3 September 2025 warning; KNMG pages; EC 112.
15. **Saved text without a source:** "Calling too often is better than calling too late" (warning-signs) and "Stay with
    the person until help arrives" (the safety-b fact-check had already removed the latter from
    if-something-goes-wrong; it is still in the saved warning-signs checklist). Neither is in a Dutch source read today;
    leave them out or source them (§6).
16. **Saved NL contact card had no help services** (jurisdictions.yaml NL: regulator, inspectorate, reporting,
    anti_doping, medicines_law only). Proposed entries in §7.
17. **Product check (`src/data/product-check.yaml`) now has per-jurisdiction sources** (`local_sources`, with `NL` and
    `EU` keys), which the safety-en-b manifest of 24 October said did not exist. The NL key of `doctor`
    (`thuisarts-naar-de-huisarts`, `knmg-beroepsgeheim`) is still correct; `intro_local_sources.NL`
    (`igj-online-medicijnen`) is still correct; `stop` and `keep` have no NL sources yet (§7).

## 3. Verification log

All read on 27 October 2026. "200" = HTTP 200 with curl and the page text read; dates are the page's own.

| Source id | URL | Result | Date on page | Wording relied on |
|---|---|---|---|---|
| rijksoverheid-urgent-medical-help (reused) | rijksoverheid.nl/documenten/vraag-en-antwoord/eerstelijnszorg/wat-moet-ik-doen-als-iemand-dringend-medische-hulp-nodig-heeft | 200 | modified 2025-12-19 | "In een levensbedreigende situatie kunt u het beste direct 112 bellen"; "Neem dan contact op met de huisarts, de huisartsenpost of de centrale doktersdienst" |
| rijksoverheid-huisartsenpost-seh (reused) | rijksoverheid.nl/.../eerstelijnszorg/huisartsenpost-spoedeisende-hulp | 200 | 2025-12-19 | "Neem altijd eerst contact op met uw huisartsenpost voordat u naar de spoedeisende hulppost gaat"; "Huisartsenpost gratis, spoedeisende hulp kost eigen risico" |
| rijksoverheid-112-wanneer | rijksoverheid.nl/documenten/vraag-en-antwoord/alarmnummer-112/wanneer-112-bellen (served under /themas/...) | 200 | 2024-03-19 | "Bel 112 in levensbedreigende en heterdaad situaties" |
| rijksoverheid-112-ambulance | rijksoverheid.nl/documenten/vraag-en-antwoord/alarmnummer-112/112-bellen-om-ambulance | 200 | 2023-10-26 | "contact opnemen met uw huisarts of naar de spoedeisende hulp van een ziekenhuis gaan" |
| ec-112-emergency-number (reused) | digital-strategy.ec.europa.eu/en/policies/112 | 200 | – | "the Netherlands ... have opted for 112 as their only national emergency number"; "free of charge" |
| thuisarts-spoed-wie-bellen | thuisarts.nl/spoed-wie-bel-je | 200 | none shown | levels; how to find the huisartsen-spoedpost number |
| thuisarts-in-case-of-emergency | thuisarts.nl/dutch-healthcare/in-case-of-emergency | 200 | 2025-10-09 | out-of-hours times; 113 "free of charge" |
| thuisarts-sepsis (reused) | thuisarts.nl/sepsis/ik-heb-sepsis | 200 | 2022-11-02 | "Neem direct contact op met uw huisarts of met de huisartsenpost" |
| thuisarts-wondroos (reused) | thuisarts.nl/wondroos/ik-heb-wondroos | 200 | 2026-06-01 | "Bel direct je huisarts of de huisartsen-spoedpost" |
| thuisarts-steenpuist | thuisarts.nl/steenpuist/ik-heb-steenpuist | 200 | 2026-07-27 | "Knijp de puist niet uit"; call levels |
| thuisarts-dikke-ogen-lippen (reused) | thuisarts.nl/dikke-ogen-of-lippen/ik-krijg-ineens-dikke-ogen-of-lippen | 200 | 2025-12-02 | "Bel dan met spoed je huisarts, de huisartsen-spoedpost of 112"; "Stop niet zomaar met je medicijnen" |
| thuisarts-voedselallergie | thuisarts.nl/overgevoelig-of-allergisch-voor-bepaald-voedsel/ik-heb-voedsel-allergie | 200 | 2026-06-24 | "Heb je een allergie-pen, gebruik die dan. Bel daarna meteen 112 ..." |
| thuisarts-hypo-diabetes-type-2 | thuisarts.nl/diabetes-type-2/ik-heb-diabetes-type-2-en-mijn-bloedsuiker-is-te-laag | 200 | 2026-07-14 | "Iemand moet direct 112 bellen als je bewusteloos bent"; spoed list |
| thuisarts-buikpijn | thuisarts.nl/buikpijn-bij-volwassenen/ik-heb-buikpijn (old /buikpijn/ik-heb-buikpijn redirects) | 200 | 2026-07-15 | "Spoed: bel direct ... Je hebt ineens heftige buikpijn" |
| thuisarts-pijn-op-borst (reused) | thuisarts.nl/pijn-op-je-borst/pijn-op-borst-wat-kan-het-zijn | 200 | 2026-10-27 | "Spoed: Bel 112 als je pijn op je borst hebt ..." |
| thuisarts-verlamming (reused) | thuisarts.nl/opeens-verlamming/opeens-verlammingsverschijnselen | 200 | 2026-09-07 | "Bel direct 112, je huisarts of de huisartsen-spoedpost"; "Zijn de klachten snel weer helemaal weg? Bel toch nog je huisarts." |
| thuisarts-psychische-crisis | thuisarts.nl/psychische-klachten-bij-volwassenen/iemand-die-ik-goed-ken-heeft-psychische-crisis-wat-moet-ik-doen | 200 | 2025-10-06 | 112 / 113 / crisisdienst |
| thuisarts-hiv-pep (reused) | thuisarts.nl/hiv/ik-heb-onveilige-seks-gehad-met-iemand-die-hiv-of-misschien-hiv-heeft | 200 | 2022-10-06 | "De meeste GGD's kun je 24 uur per dag bellen voor PEP" |
| thuisarts-insuline-spuiten (reused) | thuisarts.nl/diabetes-type-2/ik-ga-insuline-spuiten-bij-diabetes-type-2 | 200 | 2026-09-04 | "Gebruik geen middel tegen bacteriën (ontsmettingsmiddel)"; "Schuif steeds 1 centimeter op" |
| thuisarts-prikken-bloedverdunner | thuisarts.nl/trombosebeen/ik-ga-mezelf-prikken-met-bloedverdunner | 200 | 2023-11-13 | hand washing; not into wound, bruise or scar; naalden-container |
| thuisarts-naar-de-huisarts (reused) | thuisarts.nl/bezoek-aan-huisarts/ik-ga-naar-huisarts-wat-kan-ik-van-tevoren-doen-en-verwachten | 200 | 2024-04-19 | "Alle artsen in Nederland hebben een beroepsgeheim" |
| thuisarts-gezondheidstest (reused) | thuisarts.nl/gezondheids-test/ik-wil-misschien-laten-onderzoeken-of-ik-wel-gezond-ben | 200 | 2025-03-27 | "Veel testen die je zelf kunt kopen, zijn niet goed onderzocht" |
| nvic-umcutrecht (reused) | nvic.umcutrecht.nl/ (→ /nvic/nl/) | 200 | © 2026 | "Neem dan contact op met uw huisarts (of buiten kantooruren met de huisartsenpost)" |
| – | vergiftigingen.info (NVIC professional site) | 200, script app only | – | not used |
| lareb-bijwerkingen-melden (reused) | lareb.nl/pages/alles-over-bijwerkingen-melden | 200 | © 2026 | anyone may report; fields asked; not shared with doctor; no medical advice |
| lareb-home (reused) | lareb.nl/ | 200 | – | "Meld een bijwerking" |
| – | meldformulier.lareb.nl/Forms/ReportForm | 200, script app (title "Lareb" only) | – | exists; not readable; not linked |
| lareb-2021-illegal-medicines (reused) | lareb.nl/nl/news/rrisico-s-illegale-geneesmiddelen-medicijnjournaal-december-2021/ | 200 | 2021-12-27 | "Zowel zorgverleners als gebruikers van illegale geneesmiddelen ..." |
| cbg-bijwerking-melden | cbg-meb.nl/onderwerpen/goed-gebruik/bijwerkingen | 200 | 2026-05-07 | "melden bij Bijwerkingencentrum Lareb, via www.lareb.nl" |
| cbg-fmd-vervalsing-melden | cbg-meb.nl/onderwerpen/handelsvergunning-productinformatie-vereisten/hv-falsified-medicines-directive | 200 | 2025-10-22 | "binnen 24 uur melden via het meldformulier van de IGJ" |
| – | cbg-meb.nl/onderwerpen/bd-productdefect-melden | 200, redirects to a veterinary page | 2022-06-02 | not relevant; not used |
| cbg-2025-06-naion-semaglutide | cbg-meb.nl/actueel/nieuws/2025/06/06/oogziekte-naion-is-zeldzame-bijwerking-van-semaglutide | 200 | 2025-06-06 | "moeten ze contact opnemen met hun arts" |
| igj-landelijk-meldpunt-zorg | igj.nl/onderwerpen/klachten-en-melden/klacht-of-vraag-over-zorg-of-jeugdhulpverlening | 200 (landelijkmeldpuntzorg.nl → 302 here) | 2026-10-19 | "Of over een medicijn of medisch hulpmiddel?" |
| igj-lmz-informeren | .../ik-wil-iets-melden | 200 | 2026-10-19 | "Wilt u anoniem blijven? Dan vragen wij u om ons te bellen." |
| igj-lmz-contact | .../contact | 200 | 2026-09-18 | "088 - 120 50 20 (lokaal tarief)", Mon–Fri 9:00–14:00 |
| igj-online-medicijnen (reused) | igj.nl/onderwerpen/medicijnen/online-medicijnen | 200 | 2026-03-23 | "dit melden bij het Landelijk Meldpunt Zorg" |
| igj-2025-illegal-online-medicines (reused) | igj.nl/actueel/nieuws/2025/09/03/igj-en-cbg-waarschuwen-voor-illegaal-online-aanbod-medicijnen | 200 | 2025-09-03 | "Meld deze dan bij het Landelijk Meldpunt Zorg van de inspectie" |
| – | igj.nl/actueel/nieuws/2026/04/16/igj-en-nvwa-halen-tientallen-websites-met-schadelijke-middelen-offline | 200 | 2026-04-16 | about NPS sold "voor onderzoeksdoeleinden"; noted for the product-risk/legal researchers, not registered |
| stichting-113-hulplijn | 113.nl/heb-je-nu-hulp-nodig/hulplijn | 200 | none shown | "Bel gratis 113"; "24 uur per dag"; chat "dag en nacht"; "Bel meteen 112" |
| stichting-113-2025-gratis-bellen | 113.nl/actueel/telefoonnummer-113-vanaf-nu-gratis | 200 | 2025-10-03 | free since that day; the media reference text |
| stichting-113-drie-nummers | 113.nl/de-3-telefoonnummers-van-113 | 200 | none shown | 0800-0113 and 0900-0113 "blijven wel technisch beschikbaar" |
| – | 113.nl/, 113.nl/english, 113.nl/faqs, 113.nl/contact-met-113, 113.nl/privacy-... | 200 | – | no 0800-0113 anywhere; English page: 113 "only accessible ... from within the Netherlands" |
| drugsinfo-drugs-infolijn | drugsinfo.nl/contact/ | 200 | 2026-10-19 | number, hours, chat, anonymous |
| drugsinfo-hulpkaart | drugsinfo.nl/hulpkaart/ | 200 | 2026-08-03 | "Je hebt een verwijzing van de huisarts nodig" |
| drugsinfo-injecteren (reused) | drugsinfo.nl/gezondheid/injecteren-spuiten-slammen-risicos-verminderen/ | 200 | 2026-07-22 | needles, sharing, disinfecting, hand-in places, spuitomruil |
| – | drugsinfo.nl/wp-json/wp/v2/search?search=… (anabolen, steroiden, peptide, peptiden, melanotan, prestatiebevorderend, groeihormoon, doping) | 200 JSON | – | no page on these subjects |
| rijksoverheid-verslavingszorg-drugs | rijksoverheid.nl/onderwerpen/drugs/drugsgebruik-en-verslavingszorg | 200 | 2024-04-08 | "eerst naar de huisarts"; "Gratis omwisselen van gebruikte spuiten" |
| trimbos-2026-harm-reduction-nederland | trimbos.nl/kennisbank/tri-41-037-harm-reduction-in-nederland/ + the PDF | 200; PDF 1.87 MB, text extracted with pdftotext | 2026-06-23 | "29 spuitomruil locaties (19 steden)"; "apotheken of GGD-locaties" |
| mainline-2026-diensten-stoppen | mainline.nl/tot-wanneer-kun-je-nog-rekenen-op-onze-diensten/ | 200 | 2026-03-17 | "De spuitomruil stopt per 1 mei" |
| mainline-2026-wat-gaat-waar | mainline.nl/wat-gaat-waar-naartoe/ | 200 | 2026-05-08 | "Uiterlijk per 14 mei stopt Mainline met spuitomruil en drugs testen" |
| mainline-info-zorg-pieds | mainline.nl/anabole-steroiden/info-zorg/ | 200 | 2023-11-17 | no specialised PIED care; no PIED test service; spuitomruil "wel mogelijk" |
| mainline-steroids-safe-injecting (reused) | mainline.nl/anabole-steroiden/veilig-injecteren/ | 200 | 2023-11-18 | online; organisation stopping (see §2.2) |
| – | mainline.nl/ (home) | 200 | 2026-04-20 | "Helaas stopt Mainline spoedig." |
| dims-welke-drugs | drugs-test.nl/welke-drugs/ | 200 | 2022-01-10 | "Ook testen wij geen steroïden, geen medicijnen" |
| dims-voorwaarden | drugs-test.nl/wat-zijn-de-voorwaarden/ | 200 | 2026-08-04 | own use only; NL drugs only |
| – | drugs-test.nl/over-dims/, /waar-drugs-testen/, home | 200 | 2021-11-16, 2026-08-28, 2026-01-15 | 32 institutions, coordinated by Trimbos |
| jellinek-drugstestservice | jellinek.nl/alcohol-drugs-gedrag/drugstestservice/ | 200 | none shown | "Wat we niet testen": "Anabolen", "Medicijnen" |
| jellinek-anabole-steroiden | jellinek.nl/vraag-antwoord/wat-zijn-anabole-steroiden/ | 200 | none shown | Q&A on AAS (also /wat-is-doping/, 200) |
| – | jellinek.nl/vraag-antwoord/anabolen/, /alcohol-drugs-gedrag/anabolen/ | 404 | – | guessed addresses; no peptide page |
| – | jellinek.nl/hulp-bij-crisis/ | 200 | – | "Bel 112 bij een levensbedreigende situatie" |
| rivm-hygiene-piercing (reused) | rivm.nl/hygienerichtlijnen/piercen | 200 (live; refused on 21 Oct) | revised 2021; change Feb 2026 | needle-stick steps; "idealiter binnen 1 uur en niet later dan 72 uur" |
| lci-2019-prikaccidenten | lci.rivm.nl/richtlijnen/prikaccidenten | 200 | version 2019; modified 2026-01-27 | Stap 0; PEP timing; loose needles |
| apotheek-medicijnafval (reused) | apotheek.nl/zorg-van-de-apotheker/medicijnafval-niet-weggooien-maar-inleveren | 200 | 2025-06-04 | "Een naaldencontainer is te krijgen bij uw apotheek" |
| apotheek-nadroparine (reused) | apotheek.nl/medicijnen/nadroparine | 200 | 2025-07-03 | "Volle containers kunt u bij uw apotheek inleveren" |
| milieucentraal-kca | milieucentraal.nl/minder-afval/afval-scheiden/klein-chemisch-afval-kca/ | 200 | 2026-06-27 | "Injectienaald" under "Wel bij KCA" |
| – | milieucentraal.nl/.../injectienaalden/ and /medicijnen/ | 404 | – | guessed addresses |
| rijksoverheid-kca (reused) | rijksoverheid.nl/documenten/vraag-en-antwoord/afval/waar-kan-ik-klein-chemisch-afval-kca-inleveren | 200 | 2026-08-11 | "Uw gemeente moet het klein chemisch afval inzamelen" |
| zin-huisarts-zvw (reused) | zorginstituutnederland.nl/verzekerde-zorg/h/huisarts-zvw | 200 | 2025-07-24 | "de testen die de huisarts buiten de praktijk laat uitvoeren, zoals bloedonderzoek" |
| rijksoverheid-eigen-risico-2026 | rijksoverheid.nl/documenten/vraag-en-antwoord/zorgverzekering/eigen-risico-zorgverzekering | 200 | 2026-07-28 | "Het verplichte eigen risico voor 2026 is € 385" |
| zin-eigen-risico-zvw | zorginstituutnederland.nl/verzekerde-zorg/e/eigen-risico-zvw | 200 | 2026-03-31 | "Voor 2026 is het verplichte eigen risico € 385" |
| rijksoverheid-2026-09-vws-begroting | rijksoverheid.nl/actueel/nieuws/2026/09/15/kabinet-zet-in-op-gezondheid-en-op-zorg-die-klaar-is-voor-de-toekomst | 200 | 2026-09-15 | "stijgt van € 385 naar € 400" |
| nhg-2025-gewichtsreducerende-medicatie | nhg.org/praktijkvoering/praktijksituaties-gewichtsreducerende-medicatie/ | 200 | "oktober 2025" in text | "geen verantwoordelijkheid voor periodieke controles bij elders verkregen medicatie" |
| knmg-beroepsgeheim (reused) | knmg.nl/.../medisch-beroepsgeheim/wat-en-waarom | 200 | 2024-01-26 | "Een arts moet zwijgen over alles ..." |
| knmg-beroepsgeheim-doorbreken (reused) | knmg.nl/.../medisch-beroepsgeheim/wanneer-doorbreken | 200 | none shown | five grounds; conflict-of-duties conditions |
| – | www.112.nl | DNS: host not found | – | not used |
| – | huisartsenpost.nl, huisartsenspoedpost.nl | 200, "Dovendi - Domain for sale" | – | parked; never link |
| – | ineen.nl | 200 | – | spelling "huisartsenspoedpost" |
| – | moetiknaardedokter.nl | 403 to curl | – | not read; not used |
| – | eigen-kracht.nl (linked by Jellinek and Mainline for PIED information) | 200, an unrelated family-conference foundation | – | wrong or outdated link; never use |
| – | ergogenics.org (linked by Jellinek) | 200, a bodybuilding news site ("Translation: Ergo-Log.com") | – | not an official or harm-reduction body; never use |
| nl-zvw-art-19-eigen-risico (fact-check) | wetten.overheid.nl/BWBR0018450/2027-01-01#Hoofdstuk3_Paragraaf3.4_Artikel19 (+ today's version, + Stcrt. 2026, 34372) | 200 | in force 01-01-2026 t/m heden (€ 385); text from 01-01-2027 (€ 400) | "wordt vastgesteld op € 400"; "met ingang van 1 januari 2027" |
| igj-2026-10-gestolen-medicijnen (fact-check) | igj.nl/actueel/nieuws/2026/10/20/igj-waarschuwt-europese-autoriteiten-voor-gestolen-medicijnen | 200 | 2026-10-20 | "Gebruik kan levensgevaarlijk zijn"; "Gebruik die niet en neem contact op met uw arts of apotheek" |
| ineen-huisartsenspoedposten (fact-check) | huisartsenspoedposten.nl/ | 200 | © 2024 | "een initiatief van alle huisartsenspoedposten"; "mogelijk incompleet" |
| – (fact-check) | lareb.nl/contactformulier | 200 | – | "Je kunt dit formulier niet gebruiken om een bijwerking te melden" |
| – (fact-check) | moetiknaardedokter.nl | 200 (the 403 of the research run did not recur) | modified 2026-10-27 | a company's triage tool; never link |
| – (fact-check) | wetten.overheid.nl/BWBR0021505/ (Geneesmiddelenwet) | 200 | geldend van 09-09-2025 t/m heden | art. 78(3): "Beroepsbeoefenaren melden onmiddellijk elke vermoedelijke ernstige bijwerking" (the Lareb citation is right) |
| – (fact-check) | igj.nl news 2026-08-24 and 2026-08-31 (enforcement against a web shop) | 200 | 2026-08-24 | name a seller in title and url: not registered |
| – (fact-check) | a Haarlem hospital's page on its anabolic-steroid consultation (linked from Jellinek) | 200, script page | – | meta description only (fact 32 addition); not registered |
| – | commons.wikimedia.org API for File:Huisartsenpost_Oss_jun_2023.jpg and File:Ambulance_Haaglanden_unit_15-114,_Mercedes_at_Delft,_The_Netherlands_pic1.JPG | 200 JSON | 2023-06-18; 2010-01-17 | descriptions and licences (facts 56–57) |

Searches used to find pages (results then fetched; summaries never used as evidence): WebSearch on 113 numbers,
Thuisarts spoed/hypo/buikpijn/prikaccident/injecting, the huisartsenpost name, Milieu Centraal needles, the needle
container cost, CBG falsified-medicine reporting, eigen risico 2026/2027, spuitomruil for IPED users, NHG guidance on
anabolic steroids, Dopingautoriteit harm reduction, Trimbos harm-reduction reports, Rijksoverheid addiction care.

## 4. Conflicts and how resolved

1. **Action levels: the site is faster than Dutch GP advice for five signs** (pus lump, sepsis signs, very low blood
   sugar with confusion, sudden severe belly pain, severe breathlessness and palpitations; fact 17). NHS or MedlinePlus
   set the faster level on English. Resolution: keep the site's level on Dutch (a faster level never harms the reader),
   cite Thuisarts beside the English source where Dutch text names the huisarts, and keep the saved provenance
   sentence ("Waar adviezen verschilden, kozen we meestal het snelste niveau"). Medical reviewer to confirm (§6).
2. **Two Thuisarts pages differ on washing the injection spot.** Insulin: wash the skin with water and soap, no
   disinfectant. Blood thinner: wash your hands; the spot need not be washed. DRUGSinfo: disinfect ("ontsmetten") the
   injection spot. WHO (saved): soap and water, alcohol not needed. Resolution: as safety-a: wash hands; dirty skin with
   soap and water; disinfecting is not needed but if you use alcohol, let it dry; cite Thuisarts and DRUGSinfo side by
   side. No source found that alcohol harms.
3. **Needle-stick first aid: wash with soap (RIVM) or rinse then disinfect (LCI).** RIVM piercing guideline: mild soap
   under warm running water, no brush, plaster. LCI national guideline: let it bleed, rinse with lukewarm water, then
   disinfect with 70% alcohol or iodine. Resolution: combine (let it bleed, do not suck, rinse or wash under running
   water, then, if you have it, disinfect; cover), citing both, once `lci.rivm.nl` is allowlisted; until then, RIVM
   only, as on 23 October. The medical reviewer decides on adding disinfection (safety-a open question 3).
4. **Speed after a needle-stick: "ideally within 1 hour" (RIVM) vs PEP "preferably within 2 hours" (Thuisarts, LCI).**
   They measure different things (contacting help vs starting PEP). Resolution: keep both, as the saved TimeStrip did.
5. **Lareb's scope wording.** Lareb's FAQ covers medicines "die in Nederland verkrijgbaar zijn", including bought via
   the internet, and other health products; it does not name unauthorised or illegal products. Lareb 2021 says users of
   illegal medicines can report. Resolution: cite both (as safety-b did); write "ook als je product niet van een
   apotheek komt".
6. **113 numbers.** The brief says "0800-0113 and chat, as shown on 113.nl"; 113.nl shows "113". Resolution: follow the
   primary source: print "113" (and "chat op 113.nl"); do not print 0800-0113.
7. **NVIC's number for the public.** A search engine's summary (27 October) told the public to call an old NVIC number.
   The NVIC's own page says the public calls the huisarts or huisartsenpost. Resolution: the NVIC page wins; never print
   an NVIC number.
8. **DIMS and "research chemicals".** DIMS says it does test "research chemicals" but not medicines, steroids or other
   performance drugs. A peptide vial is often labelled "for research". Resolution: DIMS uses "research chemicals" for
   new psychoactive substances (its page and the IGJ's NPS news of 16 April 2026 use the term that way); the site
   writes that DIMS tests no medicines and no performance drugs and that peptides are not named, and does not say
   DIMS "refuses peptides" as a quoted fact.
9. **SEH directly.** Rijksoverheid: always call the huisartsenpost first unless life is in danger (then 112). The 112
   page: if 112 sends no ambulance, "naar de spoedeisende hulp van een ziekenhuis gaan" is one option. Resolution: the
   reader's rule is "112 bij levensgevaar; anders eerst de huisarts of de huisartsenpost"; the 112 operator's own
   referral is their call, not ours to advise.
10. **Pharmacy take-back of needles.** apotheek.nl: full containers back to "uw apotheek"; Milieu Centraal: at "de
    apotheek waar je ze gehaald hebt". A reader whose needles did not come from that pharmacy may be refused.
    Resolution: "Vraag je apotheek of je hem daar kunt inleveren. Anders: het klein chemisch afval van je gemeente"
    (Milieu Centraal lists injection needles as kca). Both sources cited.
11. **Mainline's 2023 PIED page versus its 2026 closure.** Its 2023 statements (no PIED test service, spuitomruil
    possible) are the only Dutch statements on these points; the organisation has since stopped. Resolution: use them
    only where a newer official source agrees (testing: DIMS and Jellinek agree) and mark the spuitomruil point as
    unknown today (§5).
12. **Naming: huisartsenpost / huisartsen-spoedpost / huisartsenspoedpost.** Resolution left to the style sheet (§6).
    Glossary: one entry with the other two as aliases.
13. **IGJ online medicines page includes seller-checking advice** ("Wilt u toch medicijnen online bestellen? Doe dat dan
    alleen bij betrouwbare websites", with the national register of online sellers). The site's legal line (guide §1a)
    forbids helping readers judge sellers. Resolution: cite the page only for the risks and the reporting route; never
    repeat the "betrouwbare websites" advice or link the register.

## 5. UNRESOLVED

Write each as unknown, or leave it out:

1. Whether the Drugs Infolijn gives information about peptides or other performance and image enhancing drugs: its
   page says "al je vragen over drugs", but DRUGSinfo has no page on them. Write: "De Drugs Infolijn beantwoordt
   vragen over drugs; of ze ook over peptiden adviseren, staat niet op hun site."
2. Whether today's needle exchanges (GGD, verslavingszorg, apotheek, De Regenboog) serve people who inject peptides or
   other performance drugs. Only Mainline (2023, now closed) said it was "wel mogelijk". Ask the exchange.
3. Where needle exchanges are, city by city: the Trimbos inventory gives a count (at least 29 locations in 19 cities),
   not a public list. No national finder was found.
4. Whether a needle container is free at the pharmacy, and whether a pharmacy must accept a container whose needles
   it did not supply. No national source; do not state either.
5. ~~Whether the eigen risico for 2027 will be € 400.~~ **Resolved by the fact-check:** € 400 from 1 January 2027 is
   set by ministerial regulation (Stcrt. 2026, 34372; `nl-zvw-art-19-eigen-risico`). Write "€ 385 in 2026; € 400 vanaf
   1 januari 2027". (A separate bill for a larger rise, which the 2027 budget postpones, was not checked here; the
   nl-care research covers it.)
6. Whether a GP will order checks for someone using an unauthorised peptide: no Dutch GP guideline on peptides was
   found (NHG and Thuisarts searched 27 October 2026). The NHG text on weight-loss medicines bought elsewhere (fact 50)
   is the nearest guidance.
7. What the health insurer can see of a GP visit or a lab test about peptide use. Mainline (2023) claims the insurer
   receives "een omschrijving van de klacht"; no official source was read. Leave out.
8. Whether Lareb's online form accepts a product name that is not in its medicine list (the form is a script
   application we could not read, and we did not submit anything). Write: "Je vult de naam in die op het etiket
   staat" only if the fact-checker can confirm it in a browser.
9. Whether 0800-0113 will keep working: 113 says it stays "technisch beschikbaar"; no end date. Do not print it.
10. The regional GGD's hours for needle-stick advice: Thuisarts says "De meeste GGD's kun je 24 uur per dag bellen voor
    PEP" (2022); no current national overview was read.
11. Whether the Dopingautoriteit offers harm-reduction information or a help line for people who use performance
    drugs (a 2025 news item on a harm-reduction day was read; no service page). For the sport-and-doping researcher.
12. A Dutch source for "If only you used the needle, you cannot catch a virus from your own blood" (saved sharps page,
    cited to NHS cellulitis): none found today. Keep the English source or leave out.
13. (Fact-check.) Whether InEen's national finder (huisartsenspoedposten.nl) lists every post: the site itself says its
    database is being updated and may be incomplete. If linked, say so ("de lijst is misschien niet compleet").
14. (Fact-check.) Who may use the hospital consultation for complaints from anabolic steroids that Jellinek links
    (referral, cost, region), and whether it sees people who use peptides: not readable (script page). Leave out of
    Dutch pages unless the owner wants one named hospital service.
15. (Fact-check.) Whether 116 117 reaches anything in the Netherlands: no official Dutch source says it does. Never print
    it.

## 6. Open questions for the legal or medical reviewer

Medical reviewer:

1. Action levels where the site is faster than Thuisarts (fact 17; §4.1): keep `emergency` for sepsis signs, very low
   blood sugar with confusion, sudden severe upper-belly pain (pancreatitis), severe breathlessness and severe
   palpitations, and `urgent` for a pus lump? Or follow Dutch GP triage, which would send these to the huisarts or
   huisartsenpost first? Note: Dutch out-of-hours services are under pressure, and a 112 level for "confused with low
   sugar" sends readers past the huisarts.
2. The Dutch `urgent` label: "Bel direct je huisarts of de huisartsenpost" (Thuisarts "Spoed: bel direct") rather than
   a "today" label. Agree?
3. Needle-stick: add the LCI step "daarna ontsmetten met 70% alcohol of jodium" (needs `lci.rivm.nl` allowlisted)?
4. A pus lump: Thuisarts says do not squeeze and see the GP; "Je spuit drugs" is a reason for an appointment. Should
   the Dutch item say "Ga naar je huisarts; knijp het niet uit" at `urgent`, or move it to `stop` unless there is fever?
5. "Bij twijfel: bel je huisarts, of buiten kantooruren de huisartsenpost" (fact 9) versus Thuisarts's "kijk op
   Thuisarts" first: which should the Dutch warning-signs page say first?
6. Leave out "Calling too often is better than calling too late" and "Stay with the person until help arrives"
   (unsourced, §2.15)?
7. Monitoring: how should the Dutch page say that a GP has no duty to do periodic checks of medication obtained
   elsewhere (NHG, fact 50) without discouraging the reader from going (brief: "a doctor is an ally")?

Legal reviewer:

8. Printing the LMZ phone number (088 – 120 50 20, the IGJ's own page) on a Dutch page: the brief allows national
   numbers "where the service's own page shows it (113, de Drugs Infolijn)". Is the LMZ number allowed too, or link only?
9. Reporting to the LMZ a seller one bought from: is there any risk for the reporter (safety-b's open legal question 3,
   still open)? The LMZ offers anonymous reporting by phone (fact 26).
10. Mentioning that DIMS and Jellinek test no medicines or performance drugs: is naming drug-checking services on a
    peptide site acceptable under the publisher's law (it points away from testing a peptide, not towards a seller)?

Style sheet (for the owner or the STYLE-NL writer):

11. One word for the out-of-hours service: "huisartsenpost" (Rijksoverheid, Zorginstituut, most readers) or
    "huisartsen-spoedpost" (Thuisarts, 2025–2026)? Proposal: "huisartsenpost", with "(huisartsen-spoedpost)" once per
    page and both as glossary aliases.

## 7. Suggested data changes

### 7.1 `src/data/jurisdictions.yaml`, NL entry: `help:` (draft; the merge writes it)

Labels come from `pages.jurisdiction.help.<kind>` in `src/i18n/nl/pages.json` (to be written). Only official or
public-interest services; no regional numbers; every URL fetched today.

```yaml
- code: NL
  emergency: ["112"]
  # Help services for the public (research/nl/nl-help.md §7, checked 27 October 2026). There is no national number
  # for the huisartsenpost: the Thuisarts page says where to find your own (thuisarts-spoed-wie-bellen). The NVIC
  # advises professionals only; the public calls the huisarts or huisartsenpost, so the poisons entry is the NVIC's own
  # advice to the public (nvic-umcutrecht). Sources: thuisarts-spoed-wie-bellen, rijksoverheid-huisartsenpost-seh,
  # nvic-umcutrecht, drugsinfo-drugs-infolijn, drugsinfo-hulpkaart, stichting-113-hulplijn, thuisarts-psychische-crisis.
  help:
    - { kind: urgent-advice, name: "Spoed: je huisarts of de huisartsenpost (Thuisarts)", url: "https://www.thuisarts.nl/spoed-wie-bel-je" }
    - { kind: urgent-advice, name: "Huisartsenpost of spoedeisende hulp? (Rijksoverheid)", url: "https://www.rijksoverheid.nl/documenten/vraag-en-antwoord/eerstelijnszorg/huisartsenpost-spoedeisende-hulp" }
    - { kind: poisons, name: "Vergiftiging: bel je huisarts of de huisartsenpost (NVIC)", url: "https://nvic.umcutrecht.nl/" }
    - { kind: drugs-advice, name: "Drugs Infolijn (Trimbos-instituut)", url: "https://www.drugsinfo.nl/contact/" }
    - { kind: drugs-advice, name: "Verslavingszorg bij jou in de buurt (DRUGSinfo)", url: "https://www.drugsinfo.nl/hulpkaart/" }
    - { kind: mental-health, name: "113 Zelfmoordpreventie", url: "https://www.113.nl/heb-je-nu-hulp-nodig/hulplijn" }
    - { kind: mental-health, name: "Psychische crisis: wat moet je doen? (Thuisarts)", url: "https://www.thuisarts.nl/psychische-klachten-bij-volwassenen/iemand-die-ik-goed-ken-heeft-psychische-crisis-wat-moet-ik-doen" }
  regulator: { name: "College ter Beoordeling van Geneesmiddelen (CBG-MEB)", url: "https://www.cbg-meb.nl/" }
  inspectorate: { name: "Inspectie Gezondheidszorg en Jeugd (IGJ)", url: "https://www.igj.nl/onderwerpen/medicijnen/online-medicijnen" }
  reporting: { name: "Bijwerkingencentrum Lareb", url: "https://www.lareb.nl/pages/alles-over-bijwerkingen-melden" }
  anti_doping: { name: "Dopingautoriteit", url: "https://www.dopingautoriteit.nl/" }
  medicines_law: { name: "Geneesmiddelenwet", url: "https://wetten.overheid.nl/BWBR0021505/" }
```

Notes: (a) the 113 entry needs `www.113.nl` on the allowlist first; (b) keep `inspectorate` as is (the online-medicines
page links the LMZ); if the card should link the LMZ directly, use
`https://www.igj.nl/onderwerpen/klachten-en-melden/klacht-of-vraag-over-zorg-of-jeugdhulpverlening` (not
landelijkmeldpuntzorg.nl, which redirects); (c) the card names services only; numbers are printed in page text only
where the brief allows (113, the Drugs Infolijn).

Proposed `pages.jurisdiction.helpNote.NL` (Dutch strings, B1): "De huisartsenpost heeft geen landelijk nummer. Je
vindt het nummer op de website van je huisarts, of op het bandje als je je huisarts belt." (source
`thuisarts-spoed-wie-bellen`). Fact-check option, only if `www.huisartsenspoedposten.nl` is allowlisted: add "Of zoek
je huisartsenpost op huisartsenspoedposten.nl (die lijst is misschien niet compleet)." (`ineen-huisartsenspoedposten`).

Proposed Dutch labels for `pages.jurisdiction.help` (for the UI-strings writer): `urgent-advice` "Dringend een dokter
nodig", `poisons` "Vergiftiging", `drugs-advice` "Informatie en advies over drugs", `mental-health` "Denk je aan
zelfdoding of zit je in een crisis?".

### 7.2 `config/link-allowlist.json`: hosts to add

| Host | Why (one line) |
|---|---|
| `lci.rivm.nl` | RIVM's national infectious-disease guidelines (LCI), incl. the national needle-stick guideline |
| `www.113.nl` | 113 Zelfmoordpreventie, the national suicide-prevention helpline (non-profit, government-funded) |
| `www.milieucentraal.nl` | Milieu Centraal, government-funded public information on household waste (needles as small chemical waste) |
| `www.drugs-test.nl` | DIMS, the national drug-checking network coordinated by the Trimbos-instituut (what it does and does not test) |
| `www.huisartsenspoedposten.nl` (optional, fact-check) | InEen's national finder of out-of-hours GP posts, on behalf of all posts (no national number exists) |

Not to add: `moetiknaardedokter.nl` (a company's triage tool; fact-check: it answers curl with HTTP 200 today, the
footer names a B.V. and the site lists prices for practices), `meldformulier.lareb.nl` (link the lareb.nl page instead), `landelijkmeldpuntzorg.nl` (redirects to igj.nl),
`vergiftigingen.info` (professionals only), `huisartsenpost.nl` and `huisartsenspoedpost.nl` (parked domains for sale),
`eigen-kracht.nl`, `ergogenics.org` (not official or harm-reduction bodies); moetiknaardedokter.nl: see above.

### 7.3 Sources

- Merge `research/nl/sources/nl-help.yaml` (39 ids after the fact-check) into `src/data/sources/nl-research-help.yaml` (or the merge's
  chosen `nl-research-*` file). The 27 reused ids stay where they are.
- Registry notes that the merge should correct (other files; not edited here): `thuisarts-verlamming` (remove "also if
  the symptoms have gone"; the page says 112, huisarts or spoedpost at once for sudden signs, and still call the
  huisarts if they pass; last changed 7 September 2026); `thuisarts-pijn-op-borst` (last changed 27 October 2026; 112
  wording unchanged); `mainline-steroids-safe-injecting` (add: Mainline stopped its needle exchange and drug checking by
  14 May 2026 and says it is closing; prefer DRUGSinfo, Thuisarts or WHO on Dutch pages); `rivm-hygiene-piercing` (live
  page re-read 27 October 2026). If the merge can only add, the expected-duplicate mechanism of `en-finish.yaml` does
  not apply to Dutch: list these for the owner instead.

### 7.4 Strings and data the merge or writers should know

- `src/i18n/nl/vocab.json` `warningAction`: `urgent` "Bel direct je huisarts of de huisartsenpost"; `stop` "Stop en maak
  een afspraak met je huisarts" (fact 17; reviewer §6.2). `emergency` uses `common.emergency.now` ("Bel direct 112").
- `src/i18n/nl/warning-signs.json`: in the `why` texts, "call your local emergency number" becomes "bel 112"
  (`fever-after-injection`, `red-streaks`); keep every `action` as on English (§4.1).
- `src/data/product-check.yaml`: add `local_sources.NL` for `stop` (`thuisarts-wondroos`, `thuisarts-sepsis`,
  `thuisarts-dikke-ogen-lippen`) and for `keep` (`nvic-umcutrecht` is not about keeping the product; propose none, or
  `lareb-bijwerkingen-melden` if the Dutch text adds "je kunt het melden bij Lareb"). The NL key of `doctor` stays.
  This file is shared; the data agent decides.
- Glossary (Dutch, from the saved entries, all still accurate): `huisarts`, `huisartsenpost` (aliases
  "huisartsen-spoedpost", "huisartsenspoedpost"), `seh`, `ggd`, `nvic`, `landelijk-meldpunt-zorg` (now "onderdeel van de
  IGJ"), `eigen-risico` (may add "€ 385 in 2026, € 400 vanaf 1 januari 2027", fact-check), `klein-chemisch-afval`, `naaldencontainer`, `prikaccident`, `pep`;
  new: `spuitomruil` ("plek waar je gebruikte spuiten en naalden gratis inruilt voor nieuwe"), `drugs-infolijn`.
- Pages: the Dutch safety index's "harm-reduction service" fold becomes one Dutch paragraph: spuitomruil exists (facts
  36, 38 with §5.2), DRUGSinfo and the Drugs Infolijn (facts 29–30), and the drug-checking answer (facts 40–41). The
  sharps page's "In Nederland" section keeps its three return routes (facts 45–47) with the §4.10 wording.
- Never print: the NVIC number, a regional huisartsenpost or GGD number, 0800-0113 or 0900-0113, 116 117 (fact-check).

## Fact-check (independent, 27 October 2026)

Fact-checker: adversarial nl-help fact-check agent. Everything below was fetched on 27 October 2026 with curl
(browser user agent), converted to text and searched for the exact wording; PDFs with pdftotext. Search-engine
summaries were used only to find pages, never as evidence.

### What was checked

- **All 63 sources** (the 36 new ids in `research/nl/sources/nl-help.yaml` and the 27 reused ids): every URL answered
  HTTP 200 today. For each, the page's own date (DCTERMS.modified, dateModified, "Laatst gewijzigd", "bijgewerkt") was
  compared with the date in the file, and about 190 quoted phrases were searched in the page text. All dates match. All
  quotes are on the cited page, except the Lareb contact-form sentence (corrected below). Spot checks of the paraphrased
  points (call levels on the Thuisarts pages for allergy, boil, sepsis, low blood sugar, belly pain, chest pain, stroke
  and crisis; the huisartsenpost triage list; Lareb's fields, sharing list and art. 78 reference; the IGJ/LMZ hours and
  anonymity; DIMS and Jellinek exclusions; RIVM and LCI needle-stick steps, PEP timing and loose-needle advice; the
  container rules; the Zorginstituut deductible list; NHG situation 6; the KNMG grounds and the drunk-driver example)
  found them accurate.
- **Trimbos report** (PDF, 1.87 MB, 38 pages): authors, title and subtitle as on the cover; colophon "Artikelnummer:
  TRI-41-036" (the web page says TRI-41-037, as the note says); funding by VWS; the 29/19 count and "onderschatting".
  No mention of performance drugs or peptides (searched).
- **Law in force:** Geneesmiddelenwet, "Geldend van 09-09-2025 t/m heden": art. 78(3) "Beroepsbeoefenaren melden
  onmiddellijk elke vermoedelijke ernstige bijwerking ..." (Lareb's citation is right). Zorgverzekeringswet, "Geldend van
  01-01-2026 t/m heden": art. 19(1) € 385, art. 19(7) indexation off for 2019–2026; the text from 01-01-2027 reads € 400.
- **Metadata of every new entry** against the page: titles match the page `<title>` or `<h1>` (for Thuisarts steenpuist
  and buikpijn the file uses the h1 or the title tag; both are the page's own); authors are the publishing bodies; years
  are the page dates, or the year accessed where no date is shown, as noted. All 39 entries pass `sourceFileSchema`
  (tsx against `src/schemas/index.ts`, 27 October 2026). No title or url contains a `config/commerce-tokens.json` token.
- **Id uniqueness:** all 39 ids are unique across `src/data/sources/*.yaml` and `research/nl/sources/*.yaml` (be-notes,
  eu-status, nl-care, nl-help, nl-law), and none of the new urls is registered under another id there.
- **No seller or company:** no source title or url names a seller or company. Mainline, Jellinek, the Trimbos-instituut,
  InEen and 113 are foundations, care institutions or associations. The IGJ enforcement news of 24 and 31 August 2026
  (against a web shop) names the seller and is not registered.
- **Every url inside a note** was run through the allowlist rule of `scripts/lib/load.ts` (the commerce check scans
  every url in `src/data`, notes included). Two note urls on hosts that are not allowed were rewritten without the scheme
  (landelijkmeldpuntzorg.nl, zoek.officielebekendmakingen.nl). The only hosts left that are not allowed are the source
  urls on lci.rivm.nl, www.113.nl, www.milieucentraal.nl, www.drugs-test.nl and (new, optional)
  www.huisartsenspoedposten.nl: all in §7.2.
- **Independent searches for newer or missed items:** a national huisartsenpost number or 116 117; the legal instrument
  for the 2027 deductible; new IGJ, CBG and Lareb items of 2026; Trimbos, DRUGSinfo or Dopingautoriteit pages on peptides
  or performance drugs (DRUGSinfo site search re-run); harm reduction for people who inject performance drugs after
  Mainline; whether pharmacy needle containers are free; a Thuisarts page on needle-stick injuries (none: only the PEP
  page); the Commons metadata of the two photos (unchanged: Oss 18 June 2023, CC BY-SA 4.0, RagingR2; Haaglanden
  ambulance 17 January 2010, CC0, Alf van Beem).

### What was corrected (before → after, with source)

1. **Eigen risico 2027** (fact 8, §2.10, §5.5, the glossary note, the yaml note of `rijksoverheid-2026-09-vws-begroting`):
   "a cabinet plan, not yet an amount in force" → "€ 400 from 1 January 2027, fixed by the Minister's regulation of 25
   September 2026 (Staatscourant 2026, 34372, published 30 September 2026)". Source: new id `nl-zvw-art-19-eigen-risico`
   (wetten.overheid.nl, Zvw text from 01-01-2027; the regulation is quoted in the note). §5.5 is resolved. This also
   answers the nl-care research's open item on "the legal instrument fixing the 2027 eigen risico" (not edited here;
   for the merge).
2. **Lareb contact form** (fact 23): the quote "kun je niet gebruiken om een bijwerking te melden" was attributed to
   `lareb-bijwerkingen-melden` and `lareb-home` → it is on https://www.lareb.nl/contactformulier ("Je kunt dit formulier
   niet gebruiken om een bijwerking te melden"); the cited FAQ only says "Heb je een vraag? Vul dan ons contactformulier
   in".
3. **DRUGSinfo site search** (fact 30): "returned nothing for ... 'steroiden'" (and, in §3, "doping") → "steroiden"
   gives 3 hits and "doping" 4, none about performance drugs (asthma and COPD medicines; detection times). The
   conclusion (no page on peptides or performance drugs) stands.
4. **"No specialised care for PIED users"** (fact 32): Mainline's 2023 sentence covers mental-health and addiction care
   only → added that Jellinek links a hospital consultation in Haarlem for "klachten tijdens of na het gebruik van
   anabole steroïden" (meta description of the hospital page, read today). Not registered; open points in §5.14.
5. **Notes in the yaml:** `mainline-2026-diensten-stoppen` "Published 17 March 2026" → add "modified 30 April 2026";
   `rijksoverheid-112-wanneer` "served at /themas/..." → today the canonical address answers 200 directly;
   `trimbos-2026-harm-reduction-nederland` → add that 29/19 is the same count as in 2022, and the list of places where
   exchange is done alongside other work (including huisartsen and maatschappelijke opvang); `stichting-113-hulplijn` →
   add the page's statement that chats (not calls) are supported by AI; `igj-landelijk-meldpunt-zorg` → the old address
   is written without the scheme (the link check would fail on it).

### What was added

- **Fact 28a, `igj-2026-10-gestolen-medicijnen`:** IGJ warning of 20 October 2026 on stolen insulin pens that may be
  offered online as obesity medication ("Gebruik kan levensgevaarlijk zijn"; "Hebt u medicatie online gekocht? Gebruik
  die niet en neem contact op met uw arts of apotheek"). For product-risk and warning-signs.
- **Fact 5 addition, `ineen-huisartsenspoedposten`:** InEen's national finder of out-of-hours posts (there is still no
  national number; the finder says its list may be incomplete). Proposed as an optional host and an optional helpNote
  sentence (§7.1). The triage tool it recommends (moetiknaardedokter.nl) is a company's product: never link it.
- **116 117:** not in use for Dutch out-of-hours GP care as far as found; never print it (§7.4 never-print list).
- **113:** AI support in chats (fact 33 addition).

### What was marked UNRESOLVED (new, §5.13–15)

- Completeness of InEen's finder (the site says it may be incomplete).
- Access, referral and scope of the hospital steroid consultation that Jellinek links, and whether it sees people who
  use peptides.
- Whether 116 117 reaches any service in the Netherlands.

### Confirmed unchanged and still UNRESOLVED

§5.1–4 and §5.6–12 stand as written: no Drugs Infolijn statement on peptides; no source that today's needle exchanges
serve people who inject performance drugs or peptides; no public list of exchange locations; no national source on free
needle containers or on take-back of needles a pharmacy did not supply (one hospital pharmacy leaflet found by search
says containers are free; not national, not used); no Dutch GP guideline on peptides; what an insurer sees; Lareb's form
fields (script app, nothing submitted); 0800-0113's end date; GGD hours; Dopingautoriteit services; a Dutch source for
"your own used needle cannot infect you".

### Not changed, for the reviewers

- The five signs where the site's level is faster than Thuisarts (fact 17, §4.1) were re-read on the live pages today:
  the table is accurate. One nuance for the medical reviewer: on the sepsis page "Neem direct contact op" is in the
  summary ("In het kort"), while its "Wanneer bellen" list says "Neem ook contact op met uw huisarts of de huisartsenpost
  als u zich ziek voelt en 1 of meer van deze dingen voor u klopt" (no "direct").
- The IGJ online-medicines page still carries the "alleen bij betrouwbare websites" advice (re-read today): never repeat
  it.
