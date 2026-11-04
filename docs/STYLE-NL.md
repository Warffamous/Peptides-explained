# Dutch style sheet (STYLE-NL)

The words, voice and formats of the Dutch site (`/nl/`), for every Dutch writer, translator and
fact-checker. It sits beside `research/nl-spec/content-brief.md` (what the Dutch site covers) and
`docs/CONTENT-GUIDE.md` (the editorial contract, unchanged for Dutch). Written 27 October 2026; reasons
and sources for the less obvious choices: `research/nl-notes/style.md`. Reviewed the same day: what
changed and why, with the sources checked, is in §8.

**A term is missing?** Add one row to §2 and use it everywhere. One Dutch word per English term, never
synonyms side by side. While groups write in parallel, a missing term goes in the group's notes
("Style terms", brief "Added after step 1", item 8) and the style sheet's owner merges it (§8, item 6).
Change a row only with a note in `research/nl-notes/style.md`, then grep the Dutch files for the old
word.

## 1. Voice and B1

**Who you write for:** an adult in the Netherlands who may already have a vial in the fridge. Write like
Thuisarts and Drugsinfo: direct, plain, adult, "zonder oordeel". The site informs and makes use safer; it
never tries to talk anyone out of a decision (CONTENT-GUIDE §1a).

- **"je", never "u".** `jij` / `jouw` only for stress ("jouw flacon, niet het geteste monster").
  Imperatives are fine ("Bel 112."). A quoted source that says "u" stays as quoted.
- **"we"** is the editorial team ("We noemen geen doseringen."). Never "men" or "de lezer". No "hij of
  zij": write "je", "mensen" or "iemand". For a doctor or pharmacist in the next sentence, repeat the
  noun or write "die" ("Vertel het je arts. Die kan je helpen met controles."), not "hij".
- **Questions in the reader's voice** (`<Lead question>`, TL;DR `q`) may use "ik" or "we" ("Hoe snel
  moet ik iets doen?"); the answer addresses "je".

**B1** on every safety and legal page and in every TL;DR, `<Lead>` answer, caption, glance tile, stop
sign, warning sign and UI string. Mechanism and evidence bodies may reach B2–C1, with the same words.
The validator checks only the word limits for Dutch, not reading ease (CONTENT-GUIDE §4.1): read every
B1 text aloud, and replace or explain any word you would not say to a neighbour.

1. **Short sentences**: aim for 10–15 words, split at 20; TL;DR and `<Lead>` answers at most 18. One idea
   per sentence; paragraphs of 2 to 4 sentences.
2. **Main clause first, verbs together.** Start with who does what. A long condition or reason gets its
   own sentence. No "tangconstructies": no long phrase between article and noun ("de door de onderzoekers
   bij ratten gemeten waarde" → "de waarde die de onderzoekers bij ratten maten"), and none between the
   two parts of a verb ("Neem, als de plek na 2 dagen nog rood en warm is, contact op met je huisarts" →
   "Is de plek na 2 dagen nog rood en warm? Neem dan contact op met je huisarts.").
3. **Say who does it**: "De FDA heeft het niet goedgekeurd", not "Het is door de FDA niet goedgekeurd";
   "Lareb kreeg 3 meldingen", not "Er zijn 3 meldingen gedaan". A passive is fine when the doer is unknown
   or does not matter ("De flacon is open geweest."), and in the claim labels ("Aangetoond bij dieren").
   At most one passive verb in a sentence.
4. **Verbs, not nouns**: "Als je het gebruikt", not "Bij het gebruik ervan". **Few "er"-constructions**:
   "Er is geen onderzoek bij mensen" is fine; "er" with a passive ("Er wordt door … gesteld") is not.
5. **Conditions as question + "Dan"** (the Thuisarts pattern): "Is de praktijk dicht? Bel dan de
   huisartsenpost."
6. **Everyday words**: maar, want, als, dus, voor, over, moet; not echter, immers, indien, middels,
   teneinde, betreffende, derhalve, alsmede, ten behoeve van (the EU leaflets' phrase), ten aanzien van,
   dient te. Short phrases over long compounds ("reactie op de prikplek").
7. **Explain every term on first use**: plain words first, the term in brackets ("een bult met pus
   (abces)", "onder de huid (subcutaan)"). Where Thuisarts puts the medical word first, follow it:
   "sepsis (bloedvergiftiging)". The sentence must make sense without the glossary tooltip.
8. **Write Dutch, not translated English.** Translate the meaning, then read it aloud. Calques: "in
   people/rats" → **bij** mensen, **bij** ratten (but "in cellen", "in het lab") · "take" a medicine →
   gebruiken, innemen, spuiten · "drug" for a medicine → medicijn, middel, stof (Dutch "drugs" are
   recreational drugs) · evidence, data → het onderzoek, het bewijs, de gegevens (never "evidentie") ·
   "significant" only as "statistisch significant" · "it is important to …" → cut it and give the reason.
   False friends: eventually → uiteindelijk (eventueel = possibly) · actual → echt (actueel = current) ·
   to control → beheersen, onder controle houden (controleren = to check) · effective → "het werkt"
   ("effectief": §5.6) · billion → **miljard**.
9. **One negative per sentence.** Say what is known, then what is not. No double negatives ("niet
   onwaarschijnlijk" → "goed mogelijk"); "geen" before a noun ("Er is geen onderzoek"), not "niet een".

**Before and after**, from real sentences of this site:

| English (source) | Niet | Wel |
|---|---|---|
| It does not tell you what is causing them: a doctor can find that out with you. (warning-signs) | Er wordt op deze pagina niet ingegaan op de oorzaak; deze kan door een arts samen met jou worden vastgesteld. | Deze pagina zegt niet wat de oorzaak is. Dat zoekt een arts samen met je uit. |
| A product from outside a pharmacy may not contain what the label says. (warning-signs) | Bij producten van buiten de apotheek is er sprake van onzekerheid over de inhoud. | Komt je product niet van een apotheek? Dan zit er misschien iets anders in dan op het etiket staat. |
| Nobody knows in people. Most studies are in rats, and most come from one Zagreb group. (bpc-157, TL;DR) | Niemand weet het in mensen. De meeste studies zijn in ratten, en de meeste komen van één Zagreb-groep. | Niemand weet of het bij mensen werkt. De meeste studies zijn bij ratten gedaan. De meeste komen van één groep in Zagreb. |
| Using a peptide instead of a diagnosis can delay care that works. (bpc-157) | Het gebruik van een peptide in plaats van een diagnose kan leiden tot vertraging van effectieve zorg. | Gebruik je een peptide in plaats van je blessure te laten onderzoeken? Dan krijg je misschien te laat een behandeling die wel werkt. |
| Even a full report covers only the sample that was tested. It cannot show that your vial is clean, or how it was stored and shipped. (product-check) | Zelfs een volledig rapport dekt alleen het monster dat getest werd. Het kan niet aantonen dat je flacon schoon is, of hoe hij bewaard en verzonden werd. | Ook een volledig rapport gaat alleen over het monster dat het lab heeft getest. Het kan niet laten zien dat jouw flacon schoon is. En ook niet hoe die is bewaard en vervoerd. |
| Most primary studies come from one research group. Their errors, if any, are repeated rather than caught. (evidence) | De meeste primaire studies komen van één onderzoeksgroep. Hun fouten, indien aanwezig, worden eerder herhaald dan opgevangen. | De meeste studies komen van één onderzoeksgroep. Maakt die groep een fout? Dan komt die fout vaak terug in de volgende studies, en ontdekt niemand anders hem. |
| A regulator has assessed this medicine's quality, efficacy and safety for specific uses. (compound) | Een regelgevende instantie heeft de kwaliteit, werkzaamheid en veiligheid van dit geneesmiddel voor specifieke toepassingen beoordeeld. | Een medicijnautoriteit heeft gekeken of dit medicijn werkt en goed gemaakt is. En of de voordelen groter zijn dan de risico’s. Dat geldt alleen voor het gebruik waarvoor het is goedgekeurd. |
| Get medical help today. Contact your own doctor. When they are closed, use a health advice line or an urgent-care service. (warning-signs: adapt the frame) | Krijg vandaag medische hulp. Neem contact op met je eigen dokter of een gezondheidslijn. | Bel direct je huisarts. Is de praktijk dicht? Bel dan de huisartsenpost. (Thuisarts: "Spoed: bel direct"; nl-help fact 17) |

## 2. Term list

One Dutch word per concept. "B1:" in a note gives the plain words for B1 text, with the term in brackets
on first use. Status and label words also feed the UI strings (`src/i18n/nl/`), so pages and tiles agree.

### 2.1 Site, sections and components

| English | Nederlands | Note |
|---|---|---|
| Start here · Basics · Compounds · Evidence · Safety · Law · History · Research news | Begin hier · De basis · Stoffen · Onderzoek · Veiligheid · Wet en regels · Geschiedenis · Onderzoeksnieuws | nav labels |
| Glossary · Sources · Search · About this site | Woordenlijst · Bronnen · Zoeken · Over deze site | |
| Editorial policy · Funding and independence · Corrections | Redactiebeleid · Financiering en onafhankelijkheid · Correcties | |
| Talking to your doctor | Praten met je arts | the text names "je huisarts" as the first contact |
| Legal routes to treatment | Legale wegen naar een behandeling | headings and anchors: the brief |
| the case for reform · reform | ons standpunt over hervorming · hervorming | |
| warning signs · stop-now warning signs | alarmsignalen · alarmsignalen: direct stoppen en hulp zoeken | |
| If something goes wrong | Als er iets misgaat | |
| compound (one) | stof, middel, peptide | never "medicijn" for an unapproved compound (§5.6) |
| TL;DR | **In het kort** | box title (as on Thuisarts); key stays `tldr`; note "De kern in één minuut." |
| In short: (explainer summary line) | Kort gezegd: | "In het kort" is the TL;DR box only |
| Chapters · Read next · Further reading | Hoofdstukken · Lees ook · Verder lezen | "Lees verder" is a read-more link on Dutch sites (CBG, Soa Aids Nederland): not a list of other pages |
| At a glance | In één oogopslag | |
| glance questions: approved medicine? · tested in people? · allowed in sport? · biggest risk? | Is het een goedgekeurd medicijn? · Is het getest bij mensen? · Mag het in de sport? · Wat is het grootste risico? | TL;DR lines must not repeat these |
| Stop and get help if you notice | Stop en zoek hulp als je dit merkt | stop strip and stop callouts |
| In detail · Open all details | In detail · Alle details openen | "in detail" is Dutch too |
| If someone is going to do this anyway | Als iemand het toch gaat gebruiken | compound section title |
| Using it safely and legally | Veilig en legaal gebruiken | authorised medicines only |
| What it actually is · Proposed mechanism · How it works | Wat het eigenlijk is · Hoe het zou werken · Hoe het werkt | |
| What the evidence actually shows · What is genuinely unknown | Wat het onderzoek echt laat zien · Wat echt onbekend is | |
| Regulatory status · Risk profile · Sources | Wettelijke status · Risico’s · Bronnen | |
| Fact sheet · Technical details · Evidence profile · Opinion · Short page | Feiten op een rij · Technische details · Bewijsprofiel · Opinie · Korte pagina | "Opinie" is the Dutch label for a signed opinion piece; "Mening" reads as a poll |
| Callouts: Note · Practical point · Warning · Stop and seek care · Legal note · Open question | Goed om te weten · Tip · Waarschuwing · Stop en zoek hulp · Wat de wet zegt · Open vraag | |
| Questions and answers · checklist | Vragen en antwoorden · checklist | |
| unknown · not known (verdicts, time strips) | onbekend | one word everywhere, as the status `unknown` (§2.4) |
| warning actions: emergency · urgent · stop | Bel direct 112 · Bel direct je huisarts of de huisartsenpost · Stop en maak een afspraak met je huisarts | the help levels of §5.1 |
| contact card: In an emergency · Medicines regulator · Enforcement · Report a side effect · Anti-doping organisation · Medicines law | Bij levensgevaar · Medicijnautoriteit · Toezicht · Bijwerking melden · Antidopingorganisatie · Wetgeving | the CBG: the IGJ "houdt toezicht" |
| help services: Urgent medical advice · Poisons information · Drugs information and advice · Mental health support | Snel medisch advies · Vergiftiging · Vragen over drugs · Psychische hulp | "drugs" is right here (Drugsinfo: "Heb je vragen over drugs?") |
| glossary category "How drugs work in the body" | Hoe medicijnen werken in het lichaam | |
| glossary categories regulation · law; news and timeline category regulatory | Toelating en toezicht · Wetgeving; Regelgeving | ui-core |
| injection safety · sharps disposal (nav, titles, link texts) | Veilig injecteren · Naalden weggooien | title "Naalden weggooien: gebruikte naalden veilig opruimen"; "veilig" here is about a practice, never a compound (§5.6) |
| the translation gap (title, nav, every link text) | de kloof tussen dier en mens | not "vertaalkloof" (reads as language translation) |
| conflicts of interest (link text) · case for reform (link text) · link to /nl/legal/be/ | belangenconflicten · ons standpunt over hervorming · de korte notities over België | |
| reference pages · opinion page · fact pages | naslagpagina’s · opiniepagina · feitenpagina’s | "Opinie" as above |
| the editor · editorial board · reviewer (who signs off) | de redacteur · de redactie · controleur ("Gecontroleerd door") | |
| corrections log · log entry · the next update of the site · logged | het overzicht van correcties · bericht · de volgende versie van de site · we leggen … vast | never "update" (and "bijwerking" is a side effect) |
| breadcrumb · image credits · legend (key) · host · statistics cookie | kruimelpad · beeldverantwoording · legenda · webhost (first use: "het bedrijf waar onze site op staat") · statistiekcookie | |
| photo captions and alt texts: law books · rungs (of a ladder) | juridische boeken · sporten | ui-media: not "wetboeken" (a wetboek is a statute code), not "treden" (those are stairs) |
| table columns: route (of administration) · species · design | toediening · onderzocht bij · opzet | `compound.json` |
| animated explainer · a fold of the page | animatie · the fold's own title ("onder “Status in Nederland, de EU en de sport”") | there is no word for "fold" |
| claim badge · warning-sign help level · tracker status label | bewijsniveau · niveau ("De drie niveaus van hulp") · status | never "label" for any of these (§2.8) |
| stop callout titles: Stop and get help if · Stop and get help · Get medical help now | Stop en zoek hulp als je dit merkt · Stop en zoek hulp · Zoek direct medische hulp | as the English page has it; never "Zoek nu medische hulp" |
| When to stop and get help (###) | Wanneer je stopt en hulp zoekt | |
| compound regulatory Lead "Is it legal?" | Is het legaal in Nederland? | "Wat zegt de wet in Nederland?" where a flat yes or no would mislead (epitalon, MOTS-c, thymosine alfa-1); plural: "Wat zijn de regels in Nederland?" |
| numbered chapter headings | no numbers (§4.3) | English start-here numbers its headings; Dutch does not |

### 2.2 Claim levels, evidence axes and grades

| English | Nederlands (short · long) | Note |
|---|---|---|
| evidence level (badge) | bewijsniveau | "Bewijsniveau: Dieren" |
| `hypothesis` | Hypothese · Voorgesteld, in geen enkel experiment aangetoond | B1: een idee dat nog niet is aangetoond |
| `in-vitro` | Cellen · Aangetoond in cellen of weefsel in het lab | |
| `animal` | Dieren · Aangetoond bij dieren | |
| `human-limited` | Mensen, beperkt · Gezien bij mensen in casusbeschrijvingen of kleine studies zonder vergelijking | |
| `human-controlled` | Mensen, met controlegroep · Aangetoond in onderzoek bij mensen met een controlegroep | not "gecontroleerd": on this site that word means "checked" (status, review) |
| `established` | Vastgesteld · Vastgesteld in grote studies en bij gebruik als goedgekeurd medicijn | |
| mechanism levels: hypothesised · in cells · in animals · in humans | Verondersteld · In cellen · Bij dieren · Bij mensen | |
| mechanism kinds: binding · signal · cellular · tissue · effect | Binding · Signaal in de cel · Reactie van de cel · Reactie van het weefsel · Effect op het lichaam | |
| Human clinical evidence | Onderzoek bij mensen | "Hoe ver is het getest bij mensen?" |
| none · case reports only · phase I · II · III · authorised | Niets gepubliceerd · Alleen casusbeschrijvingen · Fase 1 · Fase 2 · Fase 3 · Goedgekeurd door een medicijnautoriteit | Arabic numerals, as in the EMA's Dutch product information |
| Preclinical volume: minimal · moderate · extensive | Lab- en dieronderzoek: Weinig · Redelijk veel · Veel | not "Matig": as a grade it means "poor" |
| Source independence: one group dominates · a few groups · broadly replicated | Onafhankelijkheid: Eén groep overheerst · Een paar groepen · Door veel groepen herhaald | "breed herhaald" is a calque |
| Safety characterisation: uncharacterised · partial · well characterised | Kennis van de risico’s: Niet in kaart gebracht · Deels bekend · Goed bekend | never "veiligheid" as a grade |
| grade · evidence grading | beoordeling · het bewijs beoordelen | never "score" or "cijfer": the axes are not added up |
| preclinical | preklinisch | B1: in het lab en bij dieren |
| one score · star rating · rubric · not a score (evidence profile) | één getal · een beoordeling met sterren · de regels · geen optelsom | never "score" or "cijfer" for our grades |
| moderate-quality · low-quality evidence (GRADE) | bewijs van redelijke kwaliteit · bewijs van lage kwaliteit | |
| primary studies · primary paper | oorspronkelijke studies · oorspronkelijk artikel | the opposite of "overzichtsartikel" |

### 2.3 Study designs, species, funding

| English | Nederlands | Note |
|---|---|---|
| study · research | studie · onderzoek | "trial" only inside a name: "de STEP 1-studie" |
| laboratory (cells) · animal experiment | labonderzoek (cellen) · dieronderzoek | "dierproef" is fine in body text |
| case report · case series | casusbeschrijving · casusreeks | B1: een beschrijving van één patiënt |
| open-label study | open-labelstudie | B1: iedereen weet wie wat krijgt |
| randomised controlled trial (RCT) | gerandomiseerd gecontroleerd onderzoek (RCT) | plural RCT’s; B1: loting bepaalt wie wat krijgt |
| placebo-controlled · double-blind · blinded | met placebo als vergelijking · dubbelblind · geblindeerd | |
| control group · placebo | controlegroep · placebo | B1: een nepmiddel zonder werkzame stof |
| pharmacokinetic study · observational study | farmacokinetisch onderzoek · observationeel onderzoek | |
| post-marketing surveillance | bewaking na toelating | |
| systematic review · meta-analysis · narrative review | systematische review · meta-analyse · overzichtsartikel | source type "Review": Overzichtsartikel |
| guideline (medical) | richtlijn, behandelrichtlijn · the NHG's: NHG-Standaard | an EU "richtlijn" is a directive: where both could be meant, write "behandelrichtlijn" or "EU-richtlijn 2001/83/EG" |
| trial registration · trial registry | registratie van het onderzoek · onderzoeksregister | |
| healthy volunteers · patients | gezonde vrijwilligers · patiënten | |
| regulatory assessment · product testing | beoordeling door een medicijnautoriteit · analyse van producten | |
| conference abstract · preprint · peer review | congresabstract · preprint (niet beoordeeld door vakgenoten) · beoordeling door vakgenoten | |
| endpoint · primary endpoint | eindpunt · primair eindpunt | B1: het hoofddoel dat de onderzoekers vooraf kozen |
| statistically significant · confidence interval | statistisch significant · betrouwbaarheidsinterval (BI) | "betrouwbaar" only in this statistical term |
| participant · subject (law) · n | deelnemer · proefpersoon · n (aantal deelnemers) | |
| species: humans, rats, mice, rabbits, dogs, pigs, sheep, horses, monkeys, zebrafish, other animals, computer model, mixed | mensen, ratten, muizen, konijnen, honden, varkens, schapen, paarden, apen, zebravissen, andere dieren, computermodel, gemengd | capital only as a table label |
| funding: academic · government · industry · mixed · not disclosed | universiteit · overheid · industrie · gemengd · niet vermeld | |
| originating group · independent group · developer | oorspronkelijke groep · onafhankelijke groep · ontwikkelaar | |
| main outcome · primary outcome · secondary outcome | hoofduitkomst (B1), hoofddoel · primair eindpunt (the term) · bijkomende uitkomst | |
| bias · risk of bias | vertekening (bias) on first use, then vertekening · risico op vertekening | |
| regression to the mean · recall bias | regressie naar het gemiddelde · antwoorden die door het geheugen vertekend zijn | glossary `regression-to-the-mean`; bpc-157 |
| abstract (of a paper) · conference abstract | de samenvatting · congresabstract | "abstract" (het) only on /nl/evidence/how-to-read-a-study/, explained once ("de korte samenvatting bovenaan een wetenschappelijk artikel"), because a heading there uses it |
| headline · press release · news story | krantenkop, then kop · persbericht · nieuwsbericht | "kop" alone is ambiguous on first use |
| PubMed record · editorial · erratum · retraction | publicatie · redactioneel stuk · correctie (erratum) · teruggetrokken artikel | "artikel" for a paper; PubMed's types are "publicatietypen", never "labels" |
| misconduct · replication · injury model | wetenschappelijk wangedrag (B1: iets verkeerd doen) · (onafhankelijke) herhaling · letselmodel | |
| landmark · high-profile · encouraging … sobering | toonaangevend, invloedrijk · spraakmakend · valt mee … valt tegen | never "baanbrekend" or "veelbelovend" in our voice (§5.6) |
| pivotal trials | de studies waarop de goedkeuring rust (B1) · registratiestudie (glossary term) | not "beslissende studies" (a calque) |
| fair trial · randomised (B1) | goed opgezette studie · een studie met loting; door loting verdelen | not "eerlijke studie" |
| enrolment · recruitment · trial site · trial start · a trial is authorised (CTIS) | inclusie van deelnemers · werving (B1: deelnemers zoeken) · plek · het onderzoek is gestart · het onderzoek heeft (kreeg) toestemming | OMON: "Werving nog niet gestart" |
| run-in · interim analysis · post hoc analysis · pooled analysis · extension · open-label extension | aanloopfase · tussentijdse analyse · een achteraf gedane analyse (post-hocanalyse) · gepoolde analyse · verlenging · open vervolgstudie | |
| dose-finding trial · proof of concept · pilot (phase 1) · crossover · platform trial · cross-sectional · reanalysis | studie om de dosis te bepalen · een kleine studie om het idee te testen (proof of concept) · eerste studie (fase 1) · cross-overstudie · platformonderzoek (één onderzoek dat meerdere middelen naast elkaar test) · dwarsdoorsnedeonderzoek · heranalyse | |
| propensity-matched · adjudicated · matched · health records · contract research organisation | op kenmerken gekoppeld · beoordeeld door een onafhankelijke commissie · gematcht · patiëntendossiers · bedrijf dat onderzoek in opdracht doet | |
| follow-up period · up to · not conclusive | de periode van nacontrole · maximaal · niet sluitend | not "follow-up", not "met tot" |
| odds · odds ratio · risk ratio · number needed to treat | kans (odds) in B1 labels · oddsratio · relatief risico · "hoeveel mensen de behandeling nodig hebben voor één voorval minder (number needed to treat)" | |
| in a dish · binding test · scratch assay · clamp · surrogate marker · comet assay | in een schaaltje · bindingsproef · kraswondtest · clamptest · tussenmeting (glossary: surrogaateindpunt) · komeettest | |
| toxicology study · carcinogenicity study · knockout mice · immortalised cell line | onderzoek naar giftigheid · onderzoek naar kankerverwekkendheid (carcinogeniteitsonderzoek) · muizen die zonder dat gen zijn gefokt · cellen van een cellijn | |
| animal dose · to scale a dose · drug-development programme | dierdosis · omrekenen · ontwikkeltraject | Wong 2019: "ontwikkeltraject", also in KeyNumbers |
| sponsored study · competing interests · writing support | gesponsorde studie · verklaring over belangen · hulp bij het schrijven ("writing support") | |
| ghost author · honorary author · guest authorship · ghostwriting | spookauteur · ere-auteur · gastauteurschap · ghostwriting | |
| predatory journal · legitimate journal · impact metric · medical publishing company · citation laundering | roofjournal · legitiem (open-access)tijdschrift · impactmaat · medisch publicatiebureau · citatiewitwassen | never "betrouwbaar" for a journal (§5.6) |
| senior author | senior auteur | |

### 2.4 Status, law and routes

| English | Nederlands | Note |
|---|---|---|
| `authorised` · approved medicine | goedgekeurd · goedgekeurd medicijn | legal text: "met een handelsvergunning". Avoid "geregistreerd" (also BIG and trial registers); the EMA's Dutch overviews say "geregistreerd in de EU": only inside a quote |
| unapproved (before a noun) | niet-goedgekeurd: "een niet-goedgekeurd middel", "niet-goedgekeurde peptiden" | a status, so with a hyphen; after a verb without: "Het is niet goedgekeurd." (Taaladvies allows both; we fix this split) |
| `discontinued` | goedgekeurd, niet meer in de handel | |
| badges: Not an authorised medicine · Investigational, in clinical trials · Authorised only in other countries · No longer on the market | Geen goedgekeurd medicijn · Nog in klinisch onderzoek · Alleen in andere landen goedgekeurd · Niet meer in de handel | |
| categories: experimental · in clinical development · authorised in some countries | experimenteel · nog in klinisch onderzoek · in sommige landen goedgekeurd | |
| `not-authorised` · `refused` · `withdrawn` | niet goedgekeurd · geweigerd · ingetrokken | say whether the application or the authorisation was withdrawn |
| `under-review` · `investigational` · experimental | in beoordeling · alleen in klinisch onderzoek · experimenteel | |
| `prohibited` · `not-listed` · `unclear` | verboden in de sport · niet op de dopinglijst · onduidelijk (niet genoemd) | WADA row only |
| unknown · not checked yet | onbekend · nog niet gecontroleerd | never "niet goedgekeurd" for an unknown status |
| marketing authorisation · holder | handelsvergunning · houder van de handelsvergunning | Geneesmiddelenwet art. 1. B1: goedkeuring als medicijn. The EU leaflets say "vergunning voor het in de handel brengen": the same thing; quote only |
| conditional MA · exceptional circumstances | voorwaardelijke handelsvergunning · uitzonderlijke omstandigheden | |
| centralised procedure · EU-wide | centrale procedure · voor de hele EU | |
| medicines regulator · inspectorate | medicijnautoriteit · inspectie | "de Amerikaanse medicijnautoriteit FDA" |
| prescription · prescriber | recept · de arts die het voorschrijft | |
| prescription-only medicine | alleen op recept (UR-geneesmiddel) | law: "uitsluitend op recept ter hand mag worden gesteld" |
| over the counter | zonder recept (zelfzorgmedicijn) | |
| supply (pharmacy to patient) | B1: de apotheek geeft het je mee · law: ter hand stellen | never "afleveren" for this: in the Geneesmiddelenwet (art. 1) that is supply other than to the patient |
| off-label | off-label | B1: voor een andere ziekte, groep of dosis dan in de bijsluiter staat |
| pharmacy preparation · US compounding | magistrale bereiding · bereiding door een Amerikaanse apotheek | B1: een apotheek maakt het zelf, voor één patiënt |
| named-patient supply | artsenverklaring | |
| compassionate use | compassionate use | law: "gebruik in schrijnende gevallen" (art. 83 verordening 726/2004): name it once |
| clinical trial · investigational medicinal product | klinisch onderzoek · geneesmiddel voor onderzoek | law: "klinische proef" |
| personal import | zelf invoeren | |
| research use only · not for human use | “alleen voor onderzoek” (“research use only”) · “niet voor menselijk gebruik” | quote the label words |
| research chemical | een product met “alleen voor onderzoek” op het etiket | "research chemical" only once, in quotes, as Drugsinfo does (it means designer drugs to Dutch readers) |
| falsified · counterfeit · fake | vervalst geneesmiddel · namaak · nep (B1) | "nep-pen", "namaakpen" |
| seized · customs | in beslag genomen · de Douane | capital D, as the Douane writes itself |
| food supplement · cosmetic | voedingssupplement · cosmetisch product | the NVWA checks these (§2.7) |
| advertising · public advertising | reclame · publieksreclame | |
| enforcement · fine · administrative fine | handhaving · boete · bestuurlijke boete | |
| law · regulation (EU) · directive · article · member state | wet · verordening · richtlijn · artikel · lidstaat | |
| bill · consultation · adopted · in force | wetsvoorstel · consultatie · aangenomen · in werking | tracker statuses |
| the EU pharmaceutical reform | de herziening van de Europese geneesmiddelenwetgeving | as the government and the KNMP name it; "hervorming" stays for the owner's opinion page |
| standard (ISO) | norm | "de ISO/IEC 17025-norm" |
| company · manufacturer | bedrijf · fabrikant | developer: ontwikkelaar (§2.3) |
| package leaflet · SmPC | bijsluiter · samenvatting van de productkenmerken (SmPC) | B1: de officiële informatie voor artsen |
| EPAR · US label | Europees beoordelingsrapport (EPAR) · Amerikaanse productinformatie | |
| indication | indicatie | B1: waarvoor het is goedgekeurd |
| reimbursement · basic package · deductible · health insurer | vergoeding · basispakket · eigen risico · zorgverzekeraar | never "op eigen risico" (§5.6) |
| Prohibited List | de dopinglijst | lowercase, "de dopinglijst van WADA"; a year's list as the Dopingautoriteit titles it: "de WADA-Dopinglijst 2026" |
| at all times · in competition | altijd verboden · verboden tijdens wedstrijden | official: "te allen tijde", "binnen wedstrijdverband" |
| S0 non-approved substances · S2 | S0 (“Niet erkende stoffen”) · S2 (“Peptidehormonen, groeifactoren, verwante stoffen en mimetica”) | the Dopingautoriteit's translation (2026), quoted as is |
| anti-doping organisation | antidopingorganisatie | in Nederland: de Dopingautoriteit |
| athlete · doping test · TUE | sporter · dopingcontrole · dispensatie (TUE) | the Dopingautoriteit: "dispensatie (vrijstelling)"; abroad called a Therapeutic Use Exemption (TUE) |
| countries (vocab) | de Verenigde Staten (VS) · het Verenigd Koninkrijk (VK) · Canada · Australië · Ierland · Nieuw-Zeeland · de Europese Unie (EU) · Nederland · Duitsland · België · Italië · India · Hongkong · Rusland | in a sentence "in de VS", "in het VK", "in de EU"; WADA row: "Sport (WADA)" |
| advisory committee · vote · abstention · rulemaking | adviescommissie · stemming · onthouding · een formele regel (rulemaking) | PCAC framing (§5.4) |
| IGJ exemption for named-patient supply · IGJ exemption in a temporary shortage · insurer's prior authorisation | ontheffing (IGJ, artsenverklaring route) · vrijstelling (IGJ, tekorten: Regeling Geneesmiddelenwet art. 3.17a) · machtiging (van je zorgverzekeraar) | the IGJ uses the word "ontheffing" since 9 September 2025 (research/nl/nl-care.md fact 21, §4 conflict 5); never "toestemming" for it; "artsenverklaring" only for the IGJ route, never for the insurer's machtiging or the vrijstelling |
| registered as a medicine (Russia: Semax, Selank) | toegelaten: "in Rusland als medicijn toegelaten", "een toelating in Rusland"; fact label "Toegelaten in" | final sweep: not "goedgekeurd" (our grade withholds it: the evidence behind it cannot be checked) and not "geregistreerd" (§2.4 row 1). Every Dutch page says "toegelaten" after the final sweep; translator decision of the strings fixer (§8 item 6) |
| Investigator's Brochure · IMPD | onderzoekersdossier (Investigator’s Brochure) · GVO-dossier (IMPD) | Geneesmiddelenwet art. 1(1)(qq) "onderzoekersdossier" (read 27 October 2026); not "onderzoeksdossier" |
| orphan designation · orphan medicine | aanwijzing als weesgeneesmiddel (verb: "aangewezen als weesgeneesmiddel") · weesgeneesmiddel | not "status als weesgeneesmiddel" |
| accelerated approval (US) · accelerated assessment (EU) | versnelde goedkeuring (de Amerikaanse route accelerated approval) · versnelde beoordeling | Dutch first, the US name in brackets once; glossary term "versnelde goedkeuring" (`accelerated-approval`); the EU route is a different thing |
| confirmatory trial · postmarketing requirement | bevestigende studie · verplichte studie na toelating | |
| additional monitoring · black triangle | aanvullende monitoring · zwarte driehoek | the Dutch SmPC: "onderworpen aan aanvullende monitoring" |
| boxed warning (US label) | zware waarschuwing (boxed warning) | Dutch first; glossary term "zware waarschuwing" (`boxed-warning`) |
| US label · EU SmPC on first mention · US Instructions for Use · foreign labels | de Amerikaanse productinformatie · de Europese productinformatie (de samenvatting van de productkenmerken, SmPC), then "de productinformatie" · de Amerikaanse gebruiksinstructies · buitenlandse productinformaties | |
| EMA scientific guideline · ICH guideline | wetenschappelijke richtlijn van het EMA · internationale richtlijn (ICH) | "van het EMA" or "ICH" keeps it apart from an EU directive; not "handleiding"; the EU's "richtsnoer" only in a quote |
| medicine by presentation · by function (the two tests) | de presentatietoets · de werkingstoets | glossary terms: geneesmiddel naar presentatie, geneesmiddel naar werking (the Douane's "aandieningscriterium" / "toedieningscriterium" are aliases) |
| active substance (legal sense) · pharmaceutical form · bulk drug substance | werkzame stof ("de grondstof voor een medicijn") · farmaceutische vorm (de vorm waarin je het gebruikt) · farmaceutische grondstof | |
| supply to others | doorgeven; table head "verhandelen of doorgeven" | keeps "verkopen" out of a label (§7) |
| IGJ order to stop (art. 115 "bevel") · starting amount · fine category | een stop opleggen · startbedrag · boetecategorie (de zesde categorie) | |
| crime · minor offence (WED) · public prosecution · seizure | misdrijf (met opzet) · overtreding (zonder opzet) · het Openbaar Ministerie (OM) · inbeslagname, in beslag nemen | |
| EEA · Official Journal · Council of the EU | de Europese Economische Ruimte (EER) · het Publicatieblad van de EU · de Raad van de EU (de ministers van de lidstaten) | |
| political · provisional agreement · first · second reading · indicative date | politiek akkoord · voorlopig akkoord · eerste · tweede lezing · voorlopige datum (voor de stemming) | |
| safety signal · periodic safety update report (PSUR) | veiligheidssignaal · periodiek veiligheidsrapport | glossary `safety-signal`; legal-sport-changing |
| public procurement · healthcare professional · national medicines agencies | aanbestedingen · een erkende zorgverlener · de nationale medicijnautoriteiten | not "inkoop" (§7) |
| generic versions · generic medicine | generieke versies (kopieën) · generiek middel (een kopie van een andere fabrikant) | |
| explanatory memorandum · registration duty (1963) · royal decree · proprietary medicinal product | memorie van toelichting · registratieplicht · een besluit van de regering (een koninklijk besluit) · kant-en-klaar medicijn (“farmaceutische specialiteiten”) | history only |
| promotional wording (court) · promoted (by others) · inducements to prescribers · affiliate schemes | wervende woorden · aangeprezen, aanprijzing (only for what others do) · gunstbetoon · betaalde doorverwijzingen | |
| data protection (regulatory) · market protection | bescherming van de onderzoeksgegevens · marktbescherming | not "gegevensbescherming" (privacy, AVG) |
| medical record · confidentiality · right to silence · informed consent · referral · professional standard | medisch dossier · beroepsgeheim · verschoningsrecht · geïnformeerde toestemming · verwijzing, verwijzen · de professionele standaard | KNMG, WGBO |
| strict liability · specified substance · catch-all rule (S0) · no significant fault · substance of abuse | risicoaansprakelijkheid · specifieke stof · vangnetregel · "geen aanmerkelijke mate van schuld of nalatigheid" · drugs | Nationaal Dopingreglement (NDR) wording. B1 explanation of strict liability, and its form in UI strings that keep the English word (`tracker.json`): "“strict liability”: je bent zelf verantwoordelijk voor wat er in je lichaam zit" (the Dopingautoriteit: "Je bent zelf verantwoordelijk voor de aanwezigheid van verboden stoffen en/of methoden in je lichaam") |
| ban · reprimand · disciplinary rules · prosecutor · provisional suspension | schorsing · berisping · tuchtrecht (de regels voor straffen binnen de sport) · aanklager · voorlopige schorsing | |
| sports federation · competitive sport · recreational athlete · testing pool | sportbond · wedstrijdsport · recreatieve sporter · testing pool | |
| section of the Prohibited List (S0, S2, S4) | groep: "groep S0", "de groepen S0, S2 en S4" | final sweep: not "onderdeel", "klasse" or "categorie" |
| growth hormone releasing factors · GHRPs · growth hormone fragment | stoffen die groeihormoon laten vrijkomen · peptiden die groeihormoon laten vrijkomen (GHRP’s) · groeihormoonfragment | the list's “Groeihormoon Releasing Factors” in quotes only |
| WADA Executive Committee · WADA Monitoring Program | het uitvoerend comité van WADA · het monitoringprogramma van WADA | |
| FDA nomination · nominators · withdrawn · category 2 · notice-and-comment · Federal Register | voordracht, voordragen · de indieners · "de voordrachten zijn ingetrokken" · categorie 2 · een formele regel, met een openbare ronde voor reacties · het Amerikaanse staatsblad (Federal Register) | PCAC framing only |
| US compounding pharmacy · outsourcing facility · compounded semaglutide | een Amerikaanse apotheek die zelf medicijnen bereidt · een apotheek die op grote schaal bereidt (outsourcing facility) · semaglutide die Amerikaanse apotheken zelf maken | follows "bereiding door een Amerikaanse apotheek" |
| licensee · warning letter · unapproved new drug | licentiehouder · waarschuwingsbrief · niet-goedgekeurd nieuw geneesmiddel | |
| TGA · Health Canada (as evidence) | de Australische medicijnautoriteit · de Canadese medicijnautoriteit | as "de Amerikaanse medicijnautoriteit FDA" |
| shortage list (Farmanco) · medication history · nurse practitioner · MRA countries | de Nederlandse lijst van tekorten van de apothekers (Farmanco) · medicijngeschiedenis · verpleegkundig specialist · de landen met een erkenningsakkoord met de EU | |
| research chemicals sold as NPS · veterinary preparation | designerdrugs · preparaat voor dieren | not "diergeneesmiddel" (suggests an authorisation) |
| online shops (as sellers) · a seller you doubt · product listing · blend · sold as X · sold under this name | online verkopers · een verkoper waar je aan twijfelt · productbeschrijving · mengsel · met X op het etiket · de stof die onder deze naam in omloop is | keeps commerce words out of labels (§7) |
| test buys · black-market products · seized products (in a study) | producten die de onderzoekers zelf hadden aangeschaft · illegale producten · inbeslaggenomen producten | |
| national accreditation body | de Raad voor Accreditatie (RvA) | |
| novel food · Union list · cosmetic ingredient database · medical device · 510(k) clearance | nieuw voedingsmiddel · de Unielijst (de EU-lijst van toegelaten nieuwe voedingsmiddelen) · de Europese databank van cosmetische ingrediënten (CosIng) · medisch hulpmiddel · toestemming als medisch hulpmiddel, via de 510(k)-procedure | |
| basic health insurance · own contribution | basisverzekering (with basispakket) · eigen bijdrage | |
| Medicare (where a population must be named) | de Amerikaanse overheidsverzekering voor ouderen | "Medicare" is an error term on Dutch pages |
| Critical Medicines Act · European Biotech Act | the English names, explained once: "een wet tegen tekorten aan belangrijke medicijnen", "een Europese biotechwet" | |
| INCI name copper tripeptide-1 | copper tripeptide-1 | as CosIng and labels write it |
| allocation (of patients) | indeling | "loting" for randomisation |

### 2.5 Medicine and pharmacology

| English | Nederlands | Note |
|---|---|---|
| medicine | medicijn (B1) · geneesmiddel (law, legal pages) | Thuisarts and the CBG write "medicijn" for the public |
| active substance · amino acid · peptide bond · sequence | werkzame stof · aminozuur · peptidebinding · volgorde (aminozuurvolgorde) | |
| half-life · pharmacokinetics · bioavailability | halfwaardetijd · farmacokinetiek · biologische beschikbaarheid | B1 half-life: de tijd waarin de helft uit je bloed verdwijnt |
| dose · dosage | dosis (meervoud doses) · dosering | only in study descriptions (CONTENT-GUIDE §6) |
| injection · to inject | injectie · injecteren, spuiten | |
| subcutaneous · intramuscular · intravenous · intraperitoneal | onder de huid (subcutaan) · in een spier (intramusculair) · in een ader (intraveneus) · in de buikholte (intraperitoneaal) | |
| oral · intranasal · topical | via de mond (tablet) · via de neus (neusspray) · op de huid | |
| injection site · injection-site reaction | prikplek (injectieplaats) · reactie op de prikplek | "prikplek" as RIVM and Lareb write |
| receptor · agonist · antagonist | receptor (meervoud receptoren) · agonist · antagonist | B1 agonist: een stof die de receptor aanzet |
| GLP-1 medicines | GLP-1-medicijnen (B1) · GLP-1-agonisten (term) | the Farmacotherapeutisch Kompas: "GLP-1-agonisten"; the SmPC: "GLP-1-receptoragonist"; tirzepatide (Mounjaro SmPC): "GIP- en GLP1-receptoragonist" (we write GLP-1 with the hyphen) |
| side effect · adverse event · serious adverse event | bijwerking · ongewenst voorval · ernstig ongewenst voorval | bijwerking: caused by it; ongewenst voorval: not necessarily (verordening 536/2014) |
| contraindication · interaction | contra-indicatie · wisselwerking (interactie) | B1: wanneer je het niet mag gebruiken; "wisselwerking" as apotheek.nl writes; "interactie" is the Kompas and SmPC term |
| symptoms | klachten | Thuisarts: "Wat merk je?"; "symptomen" only in study text |
| benefit-risk | de voordelen zijn groter dan de risico’s | the EMA's and the CBG's wording for why a medicine is approved |
| hormone · growth hormone · pituitary · IGF-1 | hormoon · groeihormoon · hypofyse · IGF-1 | B1 hypofyse: een klier onder de hersenen die hormonen maakt |
| protein · molecule · the body's own | eiwit · molecuul (het) · lichaamseigen | "proteïne" only in a name |
| antibodies · immune system · immune reaction | antistoffen · afweersysteem · afweerreactie | |
| inflammation · pancreatitis · blood sugar · hypoglycaemia | ontsteking · ontstoken alvleesklier (pancreatitis) · bloedsuiker · te lage bloedsuiker (hypo) | |
| type 2 diabetes · overweight · obesity · weight management | diabetes type 2 · overgewicht · obesitas (ernstig overgewicht) · afvallen en op gewicht blijven | Thuisarts; the Wegovy SmPC: "gewichtsbeheersing" (term) |
| lean mass · visceral fat | vetvrije massa · buikvet rond de organen (visceraal vet) | the Wegovy SmPC |
| blood pressure · heart rate · cardiovascular disease | bloeddruk · hartslag · hart- en vaatziekten | |
| nausea · vomiting · dehydration · blood test | misselijkheid, misselijk zijn · overgeven · uitdroging (vochtverlies) · bloedonderzoek | as the EU patient leaflet writes; "braken" only in SmPC quotes |
| sepsis · cellulitis · abscess | sepsis (bloedvergiftiging) · huidinfectie (wondroos of cellulitis) · een bult met pus (abces) | Thuisarts: "Sepsis (bloedvergiftiging)". Explain sepsis each time: the body reacts so strongly to an infection that organs get damaged |
| anaphylaxis · stroke · heart attack · seizure | zware allergische reactie (anafylaxie) · beroerte · hartaanval (hartinfarct) · aanval met schokken (epileptische aanval) | Thuisarts: "Hartaanval" |
| HIV · hepatitis B or C · post-exposure prophylaxis | hiv · hepatitis B of C · PEP | "hiv" lowercase, as Soa Aids Nederland writes. B1 PEP: medicijnen die zorgen dat je geen hiv krijgt |
| antibiotics | antibiotica | not "een antibioticakuur": "kuur" is a banned word on this site (§5.6) |
| cancer · melanoma · mole | kanker · melanoom (een vorm van huidkanker) · moedervlek | |
| muscle · tendon · injury | spier · pees · blessure (sport), letsel (law) | |
| pregnancy · breastfeeding | zwangerschap · borstvoeding | |
| molecule data: formula · molecular mass · N-/C-terminus · D-form · ring closures | brutoformule · molecuulmassa · N-terminus (begin) · C-terminus (eind) · D-vorm (spiegelbeeld) · ringsluitingen | |
| doctor · GP · pharmacist · pharmacy · nurse | arts · huisarts · apotheker · apotheek · verpleegkundige | |
| emergency department | spoedeisende hulp (SEH) | |
| efficacy (pharmacology) · potency · full · partial · inverse agonist · biased agonism · second messenger | intrinsieke activiteit · potentie · volledige · partiële · inverse agonist · biased agonisme · tweede boodschapper | not "werkzaamheid" for a receptor's efficacy (§5.6) |
| feedback loop · the body pushes back · desensitisation · tolerance | terugkoppelingslus · het lichaam stuurt tegen (tegensturing) · desensitisatie · tolerantie | |
| first-pass metabolism · clearance · volume of distribution · steady state · ADME | first-passeffect · klaring · verdelingsvolume · steady state (evenwicht) · eliminatie, uitscheiding (excretie), opname (absorptie), verspreiding (distributie) | |
| proteases · gastric juice · gut lining · brush border · helper substance (SNAC) · antidote | proteasen · maagsap · darmslijmvlies · borstelzoom · hulpstof · tegengif (antidotum) | |
| GLP-1 products, the class with products without a handelsvergunning | GLP-1-achtig middel, GLP-1-achtige middelen | "GLP-1-medicijnen" only for authorised medicines (above) and "GLP-1-agonist" as the term; never "GLP-1-middel(en)" (the pages no longer use it after the final sweep) |
| growth hormone booster · secretagogue · releases GH · GH pulses · GH deficiency · GHRH analogue | middel dat groeihormoon verhoogt (no "booster") · groeihormoonsecretagoog · laat groeihormoon vrijkomen · pieken, golven · een tekort aan groeihormoon · GHRH-analoog (de; meervoud GHRH-analogen) | |
| triple · dual agonist · receptor occupancy · the glucagon part | drievoudige · dubbele agonist · receptorbezetting · het glucagondeel | |
| sulfonylurea · basal insulin · glucose tablets | sulfonylureumderivaat (een tablet tegen diabetes), SU-derivaat · basale insuline · druivensuiker | as the SmPC |
| hives | jeukende bulten (netelroos) on first use, then jeukende bulten; tile: "Jeukende bulten" | Thuisarts (netelroos, read 27 October 2026): "bulten die jeuken … netelroos (galbulten)"; not "galbulten", "bultjes die jeuken" |
| flushing | een rood en warm gezicht (flushing); verb "rood en warm worden" | glossary term flushing; not "blozen" |
| ECG | hartfilmpje (ECG) | Thuisarts (hartkloppingen, read 27 October 2026): "een hartfilmpje (ECG)". All pages and the glossary write "ECG" after the final sweep; translator decision T-01 ("ECG" or "ecg") may still change it, then everywhere at once |
| uncontrolled high blood pressure · top · bottom number | hoge bloeddruk die niet onder controle is · bovendruk · onderdruk | the short form "slecht geregelde hoge bloeddruk" only where a word limit forces it (TL;DR answer, tile) |
| heart failure · HFpEF · atrial fibrillation · palpitations · racing heart · coronary arteries | hartfalen (het hart pompt minder goed) · hartfalen met behouden ejectiefractie (HFpEF) · boezemfibrilleren · hartkloppingen · een jagend hart · kransslagaders (de bloedvaten van het hart) | Thuisarts |
| atherosclerosis · major adverse cardiovascular events · cardiovascular death | slagaderverkalking (atherosclerose) · ernstige hart- en vaatproblemen · overlijden door hart- en vaatziekte | |
| rare named effects (cardioembolic stroke, peripheral neuropathy, ischaemic colitis, volvulus, dysaesthesia) | B1 words first, the term in brackets: "zenuwklachten in armen en benen (perifere neuropathie)", "vreemde gevoelens in de huid (dysesthesie)" | rule 7 |
| sleep apnoea · knee osteoarthritis · osteoporosis · insomnia | slaapapneu · artrose in de knie · botontkalking (osteoporose) · slapeloosheid | |
| liver biopsy · fibrosis · cirrhosis · hepatocellular carcinoma · liver-enzyme flares | leverbiopt · fibrose (littekens in de lever) · cirrose · hepatocellulair carcinoom (een vorm van leverkanker) · opflakkeringen van leverenzymen | |
| constipation · wind · kidney failure | verstopping (obstipatie) · winderigheid · nierfalen ("als je nieren bijna niet meer werken") | |
| anticoagulant · antiplatelet · bleeding disorder · general anaesthesia | bloedverdunner · plaatjesremmer · stollingsstoornis ("een ziekte waardoor je snel bloedt") · narcose of diepe sedatie | |
| contraception · combined pill · barrier method · trying to conceive | anticonceptie (SmPC), voorbehoedmiddel (B1) · combinatiepil · barrièremethode (zoals condooms) · kinderwens | |
| low sexual desire · HSDD · premenopausal · erectile dysfunction · priapism | weinig zin in seks · HSDD (hypoactieve seksuele verlangensstoornis) · vóór de overgang (na de overgang) · erectieproblemen · priapisme ("een erectie die niet weggaat") | |
| tan · to tan · tanning peptides · sunbed · sunlamp · dermatologist · dermoscopy · phototoxicity · melanocytic naevus | bruine kleur · bruin worden · peptiden voor een bruine huid (as `warning-signs.json`) · zonnebank · hoogtezon · dermatoloog (huidarts) · dermatoscopie · fototoxiciteit · moedervlekken (melanocytaire naevus) | never "tan" or "tanning" |
| macrophage · neutrophils · interleukin · MAP kinase · tumour burden · tumour marker · fibrosarcoma | macrofaag (opruimcel van het afweersysteem) · neutrofielen (een soort witte bloedcel) · interleukine · MAP-kinase · tumorlast · tumormerker · fibrosarcoom (een kanker van het bindweefsel) | |
| inflammatory bowel disease · colitis-associated cancer · inflammation markers · scope checks | inflammatoire darmziekte (B1: chronische darmontsteking) · darmkanker door langdurige colitis · ontstekingswaarden · kijkonderzoek van de darm | |
| postoperative ileus · bowel · abdominal surgery · anastomotic leak | darmstilstand (na een operatie) · darmoperatie · buikoperatie · naadlekkage | |
| IV infusion · dummy drip · lozenge · ACE inhibitor | infuus in een ader, meervoud infusen · nepinfuus · zuigtablet · ACE-remmer | |
| lean body mass · grip strength · knee extensor strength · abdominal obesity · fat build-up | vetvrije massa · knijpkracht · kniekracht · buikobesitas · vetophoping | |
| pineal gland · rhesus monkey · senescence · cystic fibrosis · primary antibody deficiency · sickle cell disease · dry AMD | pijnappelklier (meervoud pijnappelklieren) · resusaap · senescentie (stoppen met delen) · taaislijmziekte (cystic fibrosis) · primaire antistofdeficiëntie (te weinig antistoffen) · sikkelcelziekte · droge (leeftijdsgebonden) maculadegeneratie | |
| death cap · alpha-amanitin · Gila monster · islets · musk shrews · chick eggs (CAM) | groene knolamaniet · alfa-amanitine · gilamonster · eilandjes van Langerhans · spitsmuizen · bevruchte kippeneieren | |
| hepatic stellate cell · wound chamber · cadaver skin · iontophoresis · microneedles · nanoparticles · delivery engineering | stellaatcel in de lever · wondkamer · huid van overleden donoren · een zwakke elektrische stroom · heel kleine naaldjes · nanodeeltjes · technieken voor afgifte | |
| venous leg ulcer · diabetic foot ulcer · laser resurfacing | open been (door slecht werkende aders) · diabetische voetwond · laserbehandeling van de huid | |
| euphoria · reward-seeking · dependence · drugs of abuse | euforie (een opgewonden, blij gevoel) · zoeken naar beloning · afhankelijkheid · verslavende middelen | |
| yolk sac · fertilisation · embryo development · dose–response | dooierzak · bevruchting · ontwikkeling van het embryo · verband tussen dosis en effect (term: dosis-responsrelatie) | |
| compound and drug names | thymosine alfa-1 · thymosine bèta-4 · leuproreline (Amerikaanse naam: leuprolide) · ciclosporine · NAD+-voorlopers; INNs as the page titles (tesamorelin, ipamorelin, hexarelin, macimorelin); the Dutch list forms (tesamoreline, examoreline) once or in quotes | |
| free base · acetate salt · TFA salt | vrije base · acetaatzout · trifluoracetaatzout (TFA-zout) | |
| international non-proprietary name (INN) · aggregate (clump) | internationale generieke naam (INN) · klonteren (aggregatie) | glossary `international-nonproprietary-name`, `peptide-aggregation`; ipamorelin, safety-b |
| solid-phase synthesis · resin beads · deletion · truncated · insertion sequences · counter-ions · yield | vaste-fasesynthese · harsbolletjes · deletiesequenties · afgebroken sequenties · insertiesequenties · tegenionen (zoutpartners) · opbrengst | not "ingekorte sequenties" |
| dalton · precise (peptide) · lab-made · the fragment · the full protein · derivatives · molecular target · labelled | dalton, no plural ("883 dalton") · gericht ("Gericht is niet hetzelfde als onschadelijk") · een peptide uit het lab (lede: labpeptide), kopie uit het lab · het stukje · het hele eiwit · afgeleide stoffen · moleculair doelwit · gemerkt | not "lab-gemaakt" |
| fasting blood sugar · baseline · full blood count · liver tests | nuchtere bloedsuiker · nulmeting · bloedbeeld · leverwaarden | |
| slurred speech · very drowsy · unexplained lump · appetite-lowering products · treatment team | onduidelijk praten · heel suf · een onverklaarde bult · eetlustremmers · je behandelaars | |
| lymph vessels · necrotising fasciitis · rhabdomyolysis · shortness of breath · drooping face (stroke) · fatty liver | lymfevaten (explained in brackets on first use) · necrotiserende fasciitis · rabdomyolyse · benauwd, benauwdheid · een scheve mond · leververvetting | ui-safety; "benauwd" and "scheve mond" as Thuisarts writes them; not "een gezicht dat aan één kant afhangt" ("afhangt" reads as "depends on"), not "vervette lever" |
| triage assistant · night shift · exercise bike · university athlete · gym-goers · wellness clinic · short children | een getrainde assistent · nachtdienst · hometrainer · studentsporter · mensen die naar de sportschool gaan · wellnesskliniek · kinderen met een kleine lengte | |
| dose knob · single-dose pen · multi-dose pen | doseerknop · pen voor één dosis · KwikPen voor meerdere doses | as "flacon voor één dosis"; not "pen voor één keer" |
| cancer screening due for your age | open: medical reviewer (decision of the final sweep); until then each page keeps its wording | |

### 2.6 Harm reduction and the product

| English | Nederlands | Note |
|---|---|---|
| harm reduction | schadebeperking | |
| vial · multi-dose vial · single-dose vial | flacon · flacon voor meerdere doses · flacon voor één dosis | labels say "injectieflacon" |
| syringe · needle · pen | spuit (injectiespuit) · naald · pen | |
| sterile · sterile technique · aseptic | steriel · steriel werken · zonder bacteriën erbij te brengen (aseptisch) | |
| sterility test · endotoxin | steriliteitstest · endotoxine | B1 endotoxine: een gifstof uit bacteriën die koorts kan geven |
| germs · contaminated | bacteriën · besmet | "vervuild product" is a doping term (below) |
| batch · batch number | batch · batchnummer | as the SmPC writes; EU labels print the field "PARTIJNUMMER" as "Lot" (Wegovy) or "Charge" (Ozempic) |
| expiry date · label (on the vial) · seal · cap | uiterste gebruiksdatum (op het etiket: EXP) · etiket · verzegeling · dop | glossary alias "houdbaarheidsdatum". No Dutch text says "label": the vial has an "etiket", the official text is the "productinformatie" (§2.4) |
| looks cloudy · has bits in it | is troebel · er zitten deeltjes in | normal: "helder en kleurloos" |
| certificate of analysis (CoA) · lab report | analysecertificaat (CoA) · labrapport | |
| accredited lab (ISO/IEC 17025) | geaccrediteerd lab (ISO/IEC 17025) | |
| identity · assay · purity | identiteit (welke stof) · gehalte (hoeveel) · zuiverheid | |
| mass spectrometry · HPLC | massaspectrometrie · HPLC | |
| GMP · pharmacy supply chain | GMP (de kwaliteitsregels voor het maken van medicijnen) · de legale keten (van fabriek tot apotheek) | the law: "de legale distributieketen" (the falsified-medicines act); §5.3 and §5.5 use the same words |
| reconstitution · bacteriostatic water | oplossen (poeder in vloeistof) · bacteriostatisch water | never as an instruction or a sum |
| alcohol swab · sharps container · small chemical waste | alcoholdoekje · naaldencontainer · klein chemisch afval (kca) | aliases naaldcontainer, spuitcontainer (Drugsinfo). Milieu Centraal: needles go to the kca point at the milieustraat, or to your own pharmacy. Belgium says "klein gevaarlijk afval (KGA)": BE notes only |
| needle and syringe programme | spuitomruil | Drugsinfo: "een oude naald inruilen voor een nieuwe, schone (steriele) naald" |
| needle-stick injury | prikaccident | |
| store · fridge · freezer · cold chain | bewaren · koelkast · vriezer · koudeketen | |
| warning sign · check-ups · monitoring | alarmsignaal · controles · in de gaten houden | |
| seller | verkoper | the only word for the role (§5.6) |
| vial stopper | rubberen stop | not "rubberen dop": the "dop" is the cap |
| contaminated (germs, impurities) | besmet ("een besmet product", "er zitten bacteriën in") | "vervuild product" is the doping term of the Nationaal Dopingreglement (glossary `contaminated-source`): never for germs, or the tooltip explains doping |
| clean steps · germ-free · alcohol hand rub · fill line | schoon werken · bacterievrij · handalcohol · vullijn | |
| lumps (lipohypertrophy) · dummy injection | bulten, vetbulten (lipohypertrofie) · nepinjectie ("een injectie zonder werkzame stof (placebo)") | |
| supervised consumption room · drug checking | gebruiksruimte · drugs laten testen (glossary term "drugs testen"), testservice | Trimbos: "gebruiksruimte" |
| household waste · plastic recycling · waste workers · recycling point | restafval · plastic afval (PMD) · de mensen die het afval ophalen · milieustraat (also: afvalscheidingsstation, chemokar, gemeentedepot, kca-depot) | Milieu Centraal |
| insulin-syringe units · safety features (FMD) | "eenheden", streepjes op een spuit · veiligheidskenmerken (B1: een unieke code en een verzegeling) | |
| performance and image enhancing drugs · anabolic-steroid clinic | middelen voor sport en uiterlijk; prestatieverhogende middelen (DIMS) · “anabolenpoli” | |
| GMP certificate · pharmacopoeia · qualified person | GMP-certificaat (bewijs dat het volgens de kwaliteitsregels voor medicijnen is gemaakt) · farmacopee (een officieel boek met kwaliteitseisen) · een aangewezen deskundige bij de fabrikant (de Qualified Person) | the directive's Dutch text says "bevoegde persoon" |
| weight-loss pens · fake weight-loss jabs · counterfeit pens | afslankpennen · nep-afslankprikken · nep-pennen | |
| (go to the SEH) on your own · "Will the doctor report me?" | op eigen houtje · "Geeft de arts mij aan?" | |

### 2.7 Institutions: first mention on a page, then the short form

Full name with the abbreviation once per page, then the short form. Capitals as the institution writes
itself (§4.2). GGD, EU, VS, VK and 112 need no expansion.

| First mention | Then | Note |
|---|---|---|
| het College ter Beoordeling van Geneesmiddelen (CBG) | het CBG | the Dutch medicines authority |
| de Inspectie Gezondheidszorg en Jeugd (IGJ) | de IGJ | |
| Bijwerkingencentrum Lareb | Lareb | "Bij Lareb meld je een bijwerking." No article, as Lareb writes itself (the Kompas says "het Lareb") |
| Zorginstituut Nederland | het Zorginstituut | basispakket |
| het Farmacotherapeutisch Kompas (van Zorginstituut Nederland) | het Kompas | medicine information for doctors |
| de Geneesmiddeleninformatiebank van het CBG | de Geneesmiddeleninformatiebank | where the Dutch SmPC and bijsluiter are |
| de Nederlandse Voedsel- en Warenautoriteit (NVWA) | de NVWA | supplements and other products that are not medicines (CBG) |
| de Douane | de Douane | |
| de Centrale Commissie Mensgebonden Onderzoek (CCMO) · een medisch-ethische toetsingscommissie (METC) | de CCMO · een METC | |
| de Wet medisch-wetenschappelijk onderzoek met mensen (WMO) | de WMO | Dutch readers know WMO as the Wet maatschappelijke ondersteuning: always give the full name once per page |
| het Rijksinstituut voor Volksgezondheid en Milieu (RIVM) | het RIVM | |
| het Nederlands Huisartsen Genootschap (NHG) · Thuisarts | het NHG · Thuisarts | Thuisarts is the NHG's patient site |
| het Trimbos-instituut · de Drugs Infolijn | | Drugsinfo is a Trimbos site |
| de Dopingautoriteit | | the Dutch anti-doping organisation |
| de huisarts · de huisartsenpost · de apotheek | je huisarts · de huisartsenpost · de apotheek | no capitals; alias "huisartsen-spoedpost" (Thuisarts) |
| de spoedeisende hulp (SEH) | de SEH | |
| de GGD | de GGD, meervoud GGD’en | one per region |
| het Nationaal Vergiftigingen Informatie Centrum (NVIC) | het NVIC | whom it advises: from `research/nl/`, not from here |
| 113 Zelfmoordpreventie | 113 | |
| het ministerie van Volksgezondheid, Welzijn en Sport (VWS) | het ministerie van VWS | |
| het Europees Geneesmiddelenbureau (EMA) | het EMA | neuter, as the CBG writes |
| het Comité voor geneesmiddelen voor menselijk gebruik (CHMP) | het CHMP | the EMA's medicines committee |
| de Europese Commissie · het Europees Parlement | de Commissie · het Parlement | |
| het Wereld Anti-Doping Agentschap (WADA) | WADA | no article before WADA (the Dopingautoriteit's translation sometimes writes "het WADA": quote only) |
| de Amerikaanse medicijnautoriteit FDA | de FDA | world context only (brief) |
| het Federaal Agentschap voor Geneesmiddelen en Gezondheidsproducten (FAGG) | het FAGG | Belgian notes only |
| Belgian services and words | the names in `research/nl/sources/be-notes.yaml` (Antigifcentrum, De Druglijn, Zelfmoord1813, NADO Vlaanderen, RIZIV, BCFI) | BE notes and the BE card only; Belgian words stay there too ("terugbetaling", "dokter van wacht", "GLP-1-analogen") |
| Belgian official words (research/nl/be-notes.md §7.3) | het FAGG (not "het CBG van België") · VHB (vergunning voor het in de handel brengen), where Dutch pages say handelsvergunning · dokter van wacht · (medische) wachtpost · Antigifcentrum · adviserend arts · ziekenfonds · machtiging (van de adviserend arts van het ziekenfonds) · minnelijke schikking · parket | /nl/legal/be/ and the BE card only; never on a page about the Netherlands (there: §2.4 and §2.7) |
| de Geneesmiddelenwet · de Wet op de geneeskundige behandelingsovereenkomst (WGBO) | de Geneesmiddelenwet · de WGBO | |
| de Wet op de geneesmiddelenvoorziening (1958) | de wet van 1958 | capital on the first word only (§4.2), also in `timeline.json` |
| de veiligheidscommissie van het EMA (PRAC) | het PRAC | final sweep: not "veiligheidscomité" or "geneesmiddelenbewakingscomité"; legal pages may write "het PRAC, de commissie van het EMA die de veiligheid van medicijnen bewaakt" |
| de Wereldgezondheidsorganisatie (WHO) · de Amerikaanse gezondheidsdienst CDC | de WHO · de CDC | the CDC as evidence only |
| de Raad van State (hoogste bestuursrechter) · de Rechtbank Den Haag · het Gerechtshof Amsterdam · het Landelijk Meldpunt Zorg | | the names as the courts and the LMZ write them (legal-core) |
| het Openbaar Ministerie (OM) · de opsporingsdienst van de Belastingdienst (FIOD) · de Raad voor Accreditatie (RvA) | het OM · de FIOD · de RvA | no glossary alias "OM" (Dutch word "om") |
| het Trimbos-instituut · Jellinek · het Drugs Informatie en Monitoring Systeem (DIMS) | het Trimbos-instituut · Jellinek · het DIMS | |
| Zorginstituut Nederland: de Wetenschappelijke Adviesraad · een technische consultatie | | |
| the Dopingautoriteit's tools | de app Dopingwaaier · de website Geneesmiddelen Dispensatie Sporter (GDS) · Global DRO | as the Dopingautoriteit writes them |
| exception: the fixed Belgian line of §5.1 | "In België meld je een bijwerking bij het FAGG." | the brief's own sentence keeps the short form; the glossary entry `famhp` gives the full name. On /nl/legal/be/ the full name comes first, as above |

### 2.8 English words that stay English

- **Stay:** peptide ("het peptide", meervoud "peptiden"; the Woordenlijst also allows "de" and
  "peptides": not here) · off-label and compassionate use (Dutch doctors use them; the brief's headings;
  give "gebruik in schrijnende gevallen" once) · research use only (only as quoted label text, after
  "alleen voor onderzoek") · lab, placebo, preprint, open-label, batch, HPLC, GMP, SmPC, EPAR, PEP · review
  only in "systematische review" and for customer reviews ("reviews", ladder rung 4); a review article is
  an "overzichtsartikel", peer review is "beoordeling door vakgenoten".
- **Terms of art that stay English** (final sweep, 27 October 2026), because Dutch doctors and
  researchers use them and the glossary has them; each is explained in Dutch on first use, or follows
  the Dutch word in brackets: on-label (only beside off-label), second opinion, Qualified Person, steady
  state, biased agonisme, spin, drug lag, user fees, testing pool, proof of concept, rulemaking,
  expanded access, outsourcing facility, first-in-human, topline, umbrella review, scoping review,
  Cochrane-review, ghostwriting, key opinion leader, number needed to treat, flushing, boxed warning
  (after "zware waarschuwing"), accelerated approval (after "versnelde goedkeuring"), strict liability
  (after "risicoaansprakelijkheid"), copper tripeptide-1 (an INCI name), and "abstract" on
  how-to-read-a-study only (§2.3). A quoted English source text stays as quoted (“research use only”,
  “not for human consumption”, the FDA's wording).
- **Not English on Dutch pages:** TL;DR ("In het kort"), harm reduction ("schadebeperking"), trial
  ("onderzoek", "studie"), label on the vial ("etiket"), drug ("medicijn", "middel", "stof"), sharps
  ("naalden"), grey market (§5.3), research chemical (§2.4), and any phrase a Dutch B1 reader would not
  say. Also not: "label" for anything on our own pages (a claim badge is a "bewijsniveau", a help level
  a "niveau", a tracker label a "status", an image tag a "vermelding"), update, booster, follow-up,
  tan or tanning, affiliate, dealer; "lifecoach" only in quotes.

### 2.9 Vocabulary labels (`src/i18n/nl/vocab.json`)

| English | Nederlands |
|---|---|
| class: incretin (GLP-1 family) · growth-hormone axis · melanocortin · proposed tissue repair · immune-modulating · mitochondrial · acts on the brain · skin and hair · metabolic · longevity claims · not a peptide | Incretine (GLP-1-familie) · Groeihormoon-as · Melanocortine · Voorgesteld weefselherstel · Werkt op de afweer · Mitochondriën · Werkt op de hersenen · Huid en haar · Stofwisseling · Claims over langer leven · Geen peptide |
| body systems: metabolism · heart and blood vessels · gut · muscles, tendons, bones · brain and nerves · hormones · immune system · skin · sexual function · kidneys · cells and mitochondria | Stofwisseling · Hart en bloedvaten · Maag en darmen · Spieren, pezen, botten · Hersenen en zenuwen · Hormonen · Afweersysteem · Huid · Seksualiteit · Nieren · Cellen en mitochondriën |
| labels: Class · Body systems · Also called · Authorised for · Official product information | Soort stof · Waar in het lichaam · Ook bekend als · Goedgekeurd voor · Officiële productinformatie |
| source types: research article · review · clinical trial · regulator · law · guideline · label · trial registration · report · web page | Onderzoeksartikel · Overzichtsartikel · Klinisch onderzoek · Toezichthouder · Wet · Richtlijn · Officiële productinformatie · Registratie van een onderzoek · Rapport · Webpagina |
| routes: injection under the skin · tablet · nasal spray · into a vein · on the skin | Injectie onder de huid · Tablet · Neusspray · In een ader · Op de huid |

"Toezichthouder" as a source type covers the CBG, the IGJ, the EMA and the FDA; in running text the
regulator of a medicine is the "medicijnautoriteit" (§2.4).

## 3. Numbers, units, dates

Inside `<Q>` exactly as in prose. Copy each number from the English page or the source, convert the
separators, and check it twice: 1,961 becomes **1.961**, 1.5 mg becomes **1,5 mg**. Never round,
convert or "improve" a figure.

- **Decimal comma, thousands full stop:** 0,5 mg · 14,9% · 1.961 volwassenen · 1.201 patiënten ·
  10.000. No stop in years (2026), names (STEP 1), trial numbers (NCT07437547), articles or pages.
  1,2 miljoen; a billion is **miljard**.
- **Digits** from 2 up and with every unit ("3 studies", "12 ratten"); "één" with accents for the
  number one in prose, digits in "1 op de 10", "1 keer per dag" and in a row of numbers ("8 stemmen
  voor, 6 tegen en 1 onthouding"). Do not open a sentence with digits: "In een studie bij 12 ratten …".
  The rule holds on compound pages and in frontmatter (`studies` lines, glance tiles, TL;DR) too: "3
  gezonde mannen", "2 weken", "7 aminozuren". Words stay only at the start of a sentence (better:
  rephrase), in a fixed phrase ("alle drie de studies"), in a quote, and in fractions ("een derde",
  "vier vijfde"). (Final sweep: most compound pages still spell counts out; see the
  sweep findings.)
- **Confidence intervals:** "95%-BI", with a decimal: "95,3%-BI".
- **Units with a space:** 5 mg · 10 µg/kg · 1,5 ml · 2–8 °C · 30 min; but 15% (no space). Percentage
  points: "procentpunt". Lowercase l (ml, mmol/l), as in the Dutch EU leaflets; keep the source's unit.
- **Time:** "uur" in prose, tables and `<Q>` (`<Q>t½ ≈ 165 uur</Q>`); "min" in tables and `<Q>`,
  "minuten" in prose. After a number "uur", "jaar" and "keer" stay singular; "dagen", "weken",
  "maanden", "minuten" are plural: "3 uur", "2 jaar", "4 weken", "1 keer per dag".
- **Ranges:** "10 tot 50 studies" in prose; an en dash without spaces in tables and `<Q>` (10–50,
  2010–2014). ≈ and ± only in `<Q>` and tables; in prose "ongeveer".
- **Natural frequencies:** "1 op de 10", "44 op de 100 mensen". A label's frequency in the EU leaflet's
  own words: "zeer vaak (komen voor bij meer dan 1 op de 10 gebruikers)"; vaak, soms, zelden and zeer
  zelden: "minder dan 1 op de 10", "1 op de 100", "1 op de 1.000", "1 op de 10.000".
- **Statistics:** p < 0,05 · BI · hazardratio (HR); exact percentages in the text or a fold.
- **Dates:** "20 oktober 2026", months and days lowercase; status: "(gecontroleerd op 20 oktober 2026)";
  frontmatter ISO (`2026-10-20`). **Clock and money:** "om 14.30 uur", "dag en nacht" (not "24/7");
  € 385 (space after €), only where a Dutch source gives the amount.
- **Phone numbers:** only 112 and national numbers as the service's own page prints them (113,
  0900-1995). Never a regional huisartsenpost number.

## 4. Punctuation, capitals, abbreviations, lists, headings

### 4.1 Quotation marks and apostrophes

- MDX body text: type straight quotes; the build makes "…" into “…” and ' into ’. **Frontmatter, JSON
  and component attributes** (`question`, `title`, `caption` …) are not converted: type “…”, ‘…’, ’.
- Double quotes for quoted words, label text and claims (“alleen voor onderzoek”); single quotes for a
  quote inside a quote; never „…”. Full stop and comma outside the closing quote unless quoted. Inside
  an attribute or a frontmatter string the outer delimiter is a straight ", so a quoted word there takes
  curly doubles, not single quotes: `title="Wat “goed opgezet” betekent"`, `q: "Wat betekent “statistisch
  significant”?"`.
  Plurals and possessives with ’: risico’s, foto’s, GGD’en, RCT’s.

### 4.2 Capitals

- **Unique institutions** keep their own capitals: Inspectie Gezondheidszorg en Jeugd, College ter
  Beoordeling van Geneesmiddelen. (The Geneesmiddelenwet writes them lowercase: only inside a quote.)
- **Generic bodies and roles** lowercase: de huisarts, de huisartsenpost, de apotheek, de spoedeisende
  hulp, een medisch-ethische toetsingscommissie, de minister, het ministerie van VWS.
- **Laws:** capital on the first word only: de Geneesmiddelenwet, de Opiumwet, de Wet op de
  geneeskundige behandelingsovereenkomst, de Wet BIG. EU acts as the Geneesmiddelenwet writes them in
  running text: richtlijn 2001/83/EG, verordening (EG) nr. 726/2004, verordening (EU) nr. 536/2014.
  Regulations from 2015 on put the year first and have no "nr." (verordening (EU) 2019/6); "EG" for
  acts from before December 2009, "EU" after, always as in the act's own title.
- **Diseases** lowercase (diabetes type 2, sepsis), also where Dutch writes the abbreviation small: hiv,
  aids (Soa Aids Nederland). A person's name keeps its capital: de ziekte van Crohn.
- **Place adjectives** take a capital (Nederlands, Europees, Amerikaans, Belgisch). Brand names
  capitalised (Ozempic), INNs lowercase (semaglutide), codes as on English (BPC-157, TB-500).
- **Compounds** in one word (labrapport, prikplek, bewijsprofiel); a hyphen after an abbreviation, a
  number or a name: GLP-1-receptor, fase 3-onderzoek, BPC-157-flacon, open-labelstudie.

### 4.3 Abbreviations, lists and headings

- **Spell out:** bijvoorbeeld (not bijv., bv.), zoals (not o.a.), in plaats van, ongeveer, vergeleken
  met, eventueel, enzovoort; rephrase instead of "d.w.z.". No m.b.t., t.a.v., ca., resp., e.d., etc.
  Allowed: units, "nr." in an EU act's name, §2.7's abbreviations. B1: at most two a paragraph.
- A list follows a full sentence ending in a colon. Items are all fragments (lowercase, no closing
  punctuation) or all full sentences (capital, full stop). Warning signs, stop signs and tiles:
  fragments with a capital and no full stop, as on English.
- **`##` headings are chapter names** (CONTENT-GUIDE §4.1): at most about 6 words, sentence case, a
  statement of what the section answers (the `<Lead question>` asks). No numbering, no colon chains, no
  commerce word. "De drie niveaus van hulp", "Wat je doet terwijl je wacht", "Wat je meeneemt en wat
  je zegt", "Na het noodgeval". Fold titles say what the fold holds: "Wat je niet kunt weten over het
  product". The routes page uses the brief's headings exactly (`## Recept` … `## Zelf invoeren`).

## 5. Fixed phrases

### 5.1 Emergency and help

- `common.emergency.*`: "Bel 112" · "Bel direct 112" · "Is het ernstig? Bel 112." In body text, where
  English wrote "call your local emergency number": "bel 112". Never "het lokale alarmnummer".
- **Levensgevaar:** "Bel direct 112." **Spoed, geen levensgevaar:** "Bel direct je huisarts. Is de praktijk
  dicht? Bel dan de huisartsenpost." (The practice is closed ’s avonds, ’s nachts, in het weekend of op
  een feestdag. Never "zoek vandaag nog hulp": Thuisarts says "bel direct" for these signs; brief, "Added
  after step 1", item 2.) **Binnen een paar dagen:** "Stop met het product en maak een afspraak met je
  huisarts."
- In doubt: "Twijfel je? Bel je huisarts of de huisartsenpost." Never send readers to the SEH on their
  own: they call the huisarts or the huisartsenpost first, unless life is in danger (then 112).
  Poisoning: huisarts or 112, as the brief says; whom the NVIC serves comes from `research/nl/`.
- Side effects: "Je kunt een bijwerking zelf melden bij Bijwerkingencentrum Lareb." Belgium, only where
  it differs: "In België meld je een bijwerking bij het FAGG." Services come from
  `<JurisdictionCard code="NL" />`; never write them out by hand.

### 5.2 Publisher line and notices

- **Publisher line** (brief, "Added after step 1", item 1, word for word; cite
  `nl-gnw-art-84-85-advertising` and `nl-rvs-2026-1072-publieksreclame-website`): "We maken deze site
  in Nederland. De Nederlandse wet verbiedt reclame voor medicijnen zonder handelsvergunning
  (goedkeuring als medicijn) en publieksreclame voor medicijnen op recept. Ook wie niets verkoopt, kan reclame maken: de rechter kijkt
  of een tekst een middel aanprijst. Daarom verkopen we niets, linken we naar geen enkele verkoper,
  noemen we geen doseringen en prijzen we geen middel aan. We beschrijven wat onderzoek laat zien, met
  de risico's en met wat niemand weet." (owner decision pending on wording and placement) (In MDX body
  text type the straight ' of "risico's"; the build makes it ’.) It stands on /nl/about/, /nl/about/editorial-policy/ and now also on /nl/legal/nl/
  (section "Reclame en voorlichting"); /nl/about/funding/ has its own shorter version for now (owner
  decision of the final sweep). It replaces the English "the absence of commerce is what makes the
  content legal" and the "our readers' countries" sentence on Dutch pages. It is an owner decision: change
  it only with the owner, and then on every page that carries it at once.
- **Review pending, medical:** "Een onafhankelijke arts heeft deze pagina nog niet gecontroleerd. Het is
  zorgvuldig onderbouwd redactiewerk, geen medisch advies." **Legal:** "Een onafhankelijke jurist heeft
  deze pagina nog niet gecontroleerd. We beschrijven de wet zoals wij die lezen in de genoemde bronnen.
  Dit is geen juridisch advies." Never claim a review that did not happen.
- **Standing notice:** "Alleen informatie, geen medisch advies. Ben je nu ziek? Bel bij levensgevaar
  112, en anders je huisarts of de huisartsenpost."
- **Translation pending** (`common.translation.pending`): "Een medisch vertaler heeft deze vertaling
  nog niet gecontroleerd." One quiet line in the page foot, under the review line (owner, 4 November 2026). Leave out the English "the English page is the reference": on adapted and
  native pages (law, routes, help, status) the English page answers for other countries.

### 5.3 Never assume, never lecture

- **Where it came from:** "als je product niet van een apotheek komt", "een product van buiten de
  apotheek", "buiten de legale keten". Never "zwarte markt", "grijze markt" (for the reader's product),
  "illegaal gekocht", "van internet besteld", "dealer".
- **Using it anyway:** "Gebruik je het toch?" State a risk once, with its reason ("Niemand weet wat het
  bij mensen doet."), then the practical step. No "doe het niet", "we raden het sterk af", "speel niet
  met je gezondheid", "onverantwoord", "wees verstandig", no exclamation marks.
- **The doctor is an ally:** "Je huisarts kan helpen met controles die bij jou passen." "Vertel je arts
  eerlijk wat je hebt gebruikt. Je arts is er om je te helpen, niet om je te beoordelen." Never a
  doctor as gatekeeper ("je moet toestemming vragen").

### 5.4 The FDA vote (CONTENT-GUIDE §1, all five points)

"de adviescommissie van de FDA voor bereidingen door apotheken (Pharmacy Compounding Advisory
Committee, PCAC)", "8 stemmen voor, 6 tegen en 1 onthouding", "zoals gemeld vanuit de openbare
vergadering", "alleen een advies, niet bindend, en tegen het advies van de eigen medewerkers van de FDA
in", "de Amerikaanse 503A-lijst". Point 5: "Geen van deze peptiden is een goedgekeurd medicijn in
Nederland of de EU. Een Amerikaanse lijst verandert niets buiten de VS." Where English adds "(Semax is
registered as a medicine in Russia)": "Semax is wel in Rusland als medicijn toegelaten." (§2.4).

### 5.5 The lab-report ladder (`/nl/safety/product-risk/`, exact form, CONTENT-GUIDE §1a)

Heading and figure: **"Wat een labrapport wel en niet zegt"**. Rungs:

1. **Zegt het meest: een rapport van een onafhankelijk lab met een ISO/IEC 17025-accreditatie, voor
   precies de batch op jouw etiket.**
2. **Zegt minder: het eigen rapport van de verkoper, of een rapport van een lab dat je niet kunt vinden
   of controleren.**
3. **Geen rapport.**
4. **Helemaal geen bewijs: “de verkoper gebruikt het zelf”, reviews, of “getest door derden” zonder
   rapport dat je kunt lezen.**

Under each rung "*Dit kan het laten zien:*" and "*Dit blijft onbekend:*". Fixed lines: "De resultaten
gelden alleen voor de geteste monsters." · "Alleen in de legale keten, van fabriek tot apotheek, zijn
deze controles ingebouwd. Geen rapport vervangt dat."

### 5.6 Sellers, and words never to use

- **The seller** is "de verkoper", only where the role must be named; never a name, never a lab's name,
  never "leverancier", "aanbieder", "webshop", "dealer", and never "bron" for a seller ("bron" is a
  citation).
- **About a seller, lab, website or product:** betrouwbaar, betrouwbare bron, betrouwbaar lab, goede
  verkoper, goede leverancier, legit, bonafide, "getest door derden" and "de verkoper gebruikt het
  zelf" (only as quoted claims in ladder rung 4), waar te koop.
- **Hype:** wondermiddel, doorbraak, baanbrekend, revolutionair, gamechanger, het beste, het sterkste,
  het veiligste.
- **Claims:** veilig, onschadelijk, zonder bijwerkingen, natuurlijk (as a safety claim), bewezen,
  klinisch bewezen, effectief, werkzaam: never for a compound without controlled human evidence. Write
  the level ("aangetoond bij ratten"). For an approved medicine: what the label and studies show, for
  which disease.
- **"medicijn" or "geneesmiddel" for an unapproved compound** in B1 text: write stof, middel or peptide.
  Legal text may say "volgens de wet een geneesmiddel zonder handelsvergunning".
- **Doses and use:** dosering (outside study descriptions), begin laag, laag doseren, opbouwen, kuur,
  cyclus, stack, stapelen, "oplossen in … ml", ervaringen, "gebruikers zeggen", "veel mensen merken".
  Dutch drug-information sites give dosing tips; this site never does (CONTENT-GUIDE §1). The policy
  sentence "We noemen geen doseringen." is fine. "Kuur" stays out even for antibiotics ("de arts geeft
  je antibiotica"), so a search for it finds only mistakes.
- **"op eigen risico"**: it collides with the insurance term "eigen risico".

## 6. Glossary rules (`src/i18n/nl/glossary/<group>.json`)

- **Ids:** the English id for the same concept (`half-life`, `vial`, `marketing-authorisation`), so
  `<Term id>` works in both languages. Dutch institutions reuse their 23 October ids (`huisarts`,
  `huisartsenpost`, `ggd`, `seh`, `nvic`, `lareb`, `igj`, `cbg`, `zorginstituut`, `dopingautoriteit`,
  `ccmo`, `metc`, `rivm`, `nhg`, `thuisarts`, `geneesmiddelenwet`, `wgbo`, `eigen-risico`,
  `klein-chemisch-afval`, `magistral-preparation`, `famhp` …; see
  `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/`). A new Dutch-only id: Dutch kebab-case
  without accents (`drugs-infolijn`). Never two ids for one concept.
- **term:** the Dutch word of §2, lowercase unless a name or an abbreviation ("halfwaardetijd",
  "Lareb"). `category` keeps its English enum value (`pharmacology`, `law` …).
- **aliases:** plurals and common inflections, because matching is on whole words: bijwerking,
  bijwerkingen · flacon, flacons, injectieflacon · receptor, receptoren · subcutaan, subcutane · steriel,
  steriele · gerandomiseerd, gerandomiseerde. A synonym only if it means exactly the same (prikplek /
  injectieplaats; huisartsenpost / huisartsen-spoedpost; sepsis / bloedvergiftiging; naaldencontainer /
  naaldcontainer / spuitcontainer). An English alias only where Dutch readers meet it (SmPC, off-label,
  research use only, TUE).
- **Apostrophe ’** in every term and alias (risico’s, GGD’en): a straight ' never matches the page.
  **One spelling per id;** an alias in two entries links to whichever loads last.
- **An alias must mean exactly the term** (final sweep): the linker (`src/plugins/rehype-glossary.mjs`)
  links the first plain use of every form on a page, case-insensitively, with the earliest match
  winning. So no alias that names a neighbouring thing ("langwerkende insuline" on insuline glargine
  links "de langwerkende insuline icodec"; "opperhuid" on lederhuid; "ingekorte sequentie" for a
  deletion sequence), and no alias that is an everyday word in another sense ("toestemming" on
  geïnformeerde toestemming links a trial's or the FDA's "toestemming"). Doping's "vervuild product"
  is the term of `contaminated-source`, so pages write "besmet" for germs (§2.6).
- **see_also** names only ids that exist in a Dutch glossary file; an English-only id (UK, Canadian or
  Australian routes) goes.
- **No everyday-word aliases:** wet, middel, stof, recept, proef, studie, fase, lab, pen, naald, spuit,
  etiket, markt, post, hulp, arts, college, bureau, commissie, inspectie, cel, groep, test, keten, norm,
  klacht; and no short code that is a Dutch word in lowercase (WED, BIG, EER) or has a better-known
  meaning (WMO): use the longer phrase ("Wet BIG").
- **Definitions:** B1, one or two sentences, at most 400 characters; name the country for a national
  term ("In Nederland …", "In de VS …"); no commerce or seller words, no doses.

## 7. Commerce words (headings, link texts, labels)

`tokens.nl` in `config/commerce-tokens.json` (as of 27 October 2026) is an error in the validator:
bestellen, bestel, bestelt, bestelling, bestellingen · kopen, koop, koopt, te koop, uitverkoop ·
korting, kortingen, kortingscode, kortingscodes, promotiecode · winkel, winkels, winkelwagen,
winkelmandje, webshop, webshops, webwinkel, webwinkels, afrekenen · leverancier, leveranciers ·
aanbieding, aanbiedingen · prijs, prijzen · gratis verzending (31 tokens). The validator
(`scripts/validate-content.ts`) checks them, case-insensitively and as whole words, in link texts and
hrefs, `##`–`######` headings, frontmatter labels, `<Lead question>`, `<InDetail title>`, `<FaqItem q>`,
`<Callout title>`, `<KeyNumber label>`, `<Diagram caption>` and figure titles. **Every locale's tokens
apply on Dutch pages too** (English: buy, buying, shop, shopping, cart, checkout, order, discount, coupon,
promo code, vendor, supplier, affiliate, for sale, price, deal …; and the German, Polish, Turkish and
Arabic lists). The validator does not know the rest, so keep these out of the same places, and out of
TL;DR questions and `aria-label`s, yourself:

kosten, kost, goedkoop, duur (expensive), voordelig, actie (a sale), aankoop, verkoop, verkopen, inkoop,
aanbieder, bezorgen, verzenden, versturen, levertijd, verkrijgbaar (the EU leaflets' "is verkrijgbaar
in": quote only), "waar haal je", "hoe kom je aan". In body text they may stand where a fact needs them
(the eigen risico, "verkopen is verboden"), never as a call to action. "webshop" and "leverancier" are
also seller words (§5.6): never in body text either.

**Dutch idioms with a token in them** (`research/nl-notes/merge.md` §9): "op prijs stellen" (to
appreciate), "op de koop toe (nemen)" (to accept a downside), "afrekenen met" (to do away with), and,
with the English token "order", "tot nader order" and "een order van de rechter". They are not about
buying. The final sweep's item SH-21 (area "shared") exempts them in the validator, in
`NON_COMMERCE_PHRASES` (`scripts/lib/load.ts`, read 28 October 2026): "op de koop toe", "op prijs
stellen" (also "stel … op prijs"), "tot nader order", "afrekenen met" and "te koop lopen met". Only the
forms listed there are exempt, so check it: "een order van de rechter" is not. Exempt or not, keep them
out of headings and labels: rephrase ("we waarderen", "erbij nemen", "een uitspraak van de rechter").

**Residue check (`config/locale-residue.json`, `locales.nl`; `npx tsx scripts/check-locale-residue.ts`).**
On Dutch pages the reader is in the Netherlands, so:
- **error:** another country's side-effect reporting (MedWatch, Yellow Card, Canada Vigilance,
  MedEffect, Medsafe, HPRA, CARM), help or advice lines (healthdirect, NHS 111, 988, Samaritans, Talk to
  FRANK, poison lines …), treatment routes (Special Access Program/Scheme, Personal Importation Scheme,
  Authorised Prescriber, UK specials), funding bodies (Medicare, Medicaid, PHARMAC, NICE, PBS), "local
  emergency number" and "het lokale alarmnummer", another emergency number after a calling word (911,
  999, 000, 111), and the German frame (Arzneimittel, AMG, BfArM, NADA, Bundes…, AntiDopG,
  Heilmittelwerbegesetz, HWG);
- **frame:** another country as the reader's place ("in je eigen land", "het land waar je woont") and
  dollar or pound amounts: only where a reader abroad is addressed, or as evidence, with the marker;
- **warn:** FDA, MHRA, Health Canada, TGA, NHS, "in de VS", "in het VK", "in Canada", "in Australië",
  "in Ierland", "in Nieuw-Zeeland", 503A/503B: only as evidence, the PCAC framing or world context, with
  `{/* residue-ok: … */}` on the line before (in YAML frontmatter a `# residue-ok: …` comment).
- The glossary files may name foreign bodies without a marker (warnings only; errors still count), and
  a few named `timeline.json`, `media.json` and `infographics.json` strings are allowed as history or
  evidence.

Ask without the word: "Is het legaal in Nederland?", not "Mag je het kopen?"; "Wordt het vergoed?", not
"Wat kost het?". Never a link to a seller, a pharmacy's shop page, a clinic or a lab (CONTENT-GUIDE §1, §10).

## 8. Review (27 October 2026)

A second editor read the sheet against the brief, the content guide, the English UI strings
(`src/i18n/en/*.json`) and a word count of all English pages, and checked terms against the sources
below. What changed, and why:

1. **B1 rules made testable** (§1): rules 2 and 3 now have a before/after each and a clear limit (at
   most one passive verb a sentence; a passive is fine when the doer is unknown); new rule 9 (one
   negative a sentence); paragraphs of 2 to 4 sentences; false friends; "die" instead of "hij" for a
   doctor; a note that the validator checks only word limits for Dutch.
2. **Examples fixed** (§1): bpc-157 TL;DR ("Bij mensen weet niemand het" was stiff); "zorg die wel werkt
   misschien te laat" (word order); product-check ("zegt niets over jouw flacon" overstated the English,
   and "verstuurd" sits next to the commerce word "verzenden": now "vervoerd"); evidence ("geen andere
   groep vindt die fout" overstated "if any"); compound ("veilig genoeg" replaced by the CBG's and EMA's
   own test, "de voordelen zijn groter dan de risico’s").
3. **Wrong or unidiomatic choices changed:** "Mensen, gecontroleerd" → "Mensen, met controlegroep" (on
   this site "gecontroleerd" means "checked"); "Matig" → "Redelijk veel" (as a grade it means "poor");
   "Breed herhaald" → "Door veel groepen herhaald" (calque); "Lees verder" → "Lees ook" (Dutch sites use
   "Lees verder" as a read-more link); "Meer lezen" → "Verder lezen"; "Mening" → "Opinie"; sepsis is now
   "sepsis (bloedvergiftiging)" as Thuisarts writes it (the sheet had banned "bloedvergiftiging");
   "hartaanval (hartinfarct)"; "wisselwerking (interactie)"; "de keten van de apotheek" (calque) → "de
   legale keten (van fabriek tot apotheek)", also in the ladder's closing line; "abces (een bult met
   pus)" and "aseptisch (…)" turned round to follow rule 7; S0 and S2 names in double quotes (§4.1);
   `established` long form made grammatical.
4. **Missing recurring terms added** (from the UI strings and the word count): GLP-1-medicijnen,
   klachten, the benefit-risk wording, hypofyse, eiwit, diabetes type 2, overgewicht and obesitas,
   gewichtsbeheersing, vetvrije massa, bloeddruk, uitdroging, hiv (lowercase) and PEP, antibiotica
   (without "kuur"), melanoom, blessure, molecule labels, "niet-goedgekeurd" before a noun, badges and
   categories, "ter hand stellen" (not "afleveren"), "in beslag genomen", de Douane, voedingssupplement,
   research chemical, dispensatie (TUE) and sporter, the EU reform's Dutch name, norm, bedrijf, country
   names, guideline against directive, trial registry, spuitomruil, the contact-card, help and
   warning-action labels, "Kort gezegd:" for the explainer line, "onbekend", and the vocabulary labels
   (§2.9). Institutions added: Farmacotherapeutisch Kompas, Geneesmiddeleninformatiebank, NVWA, de
   Douane, the WMO (and its clash with the Wet maatschappelijke ondersteuning), and a pointer to the
   verified Belgian names.
5. **Rules clarified:** EU regulations from 2015 have no "nr."; digits for "one" in a row of numbers (the
   PCAC vote broke the old rule); "We noemen geen doseringen." is not a banned use of "dosering";
   English "review" only in "systematische review" and for customer reviews; "versturen" and the
   leaflets' "verkrijgbaar" in the commerce list; three glossary non-aliases (keten, norm, klacht); the
   translation-pending notice must not call the English page the reference on adapted pages.

6. **Final sweep (27–28 October 2026).** The "Style terms" sections of all 29 group notes
   (`research/nl-notes/<group>.md`) and the term proposals of the glossary and UI notes (gloss-a, gloss-b,
   gloss-c, gloss-nl, ui-core) are merged into §2, duplicates folded into one row. Where groups chose
   different words for one thing, the sheet now fixes one, mostly the word most pages already used:
   - Russia's registration of Semax and Selank: **toegelaten** (5 pages said "toegelaten", 10 said
     "goedgekeurd", 1 "geregistreerd"; "goedgekeurd" is the site's own grade word, which the Semax and
     Selank evidence profiles withhold on purpose, and English says "registered"). The page fixers of the
     final sweep made every Dutch page say "toegelaten" (28 October 2026). One triage item (STR-02) asked
     for "goedgekeurd" instead; the sheet keeps "toegelaten" so that it matches the pages, and the choice
     goes to the translator as a decision.
   - The Investigator's Brochure: **onderzoekersdossier** (Geneesmiddelenwet art. 1(1)(qq), read today;
     5 compound pages wrote "onderzoeksdossier").
   - Orphan designation: **aanwijzing als weesgeneesmiddel** (27 uses; "status als weesgeneesmiddel" on 5
     pages).
   - A section of the Prohibited List: **groep** (as /nl/legal/sport-and-doping/ and the glossary;
     "onderdeel" and "klasse" elsewhere).
   - PRAC: **de veiligheidscommissie van het EMA (PRAC)**, then "het PRAC" (6 files; "veiligheidscomité" in
     3).
   - Hives: **jeukende bulten (netelroos)**, following Thuisarts; ECG: **hartfilmpje (ECG)**, following
     Thuisarts (3 places wrote "ecg"; after the final sweep none does). Translator decision T-01 ("ECG" or
     "ecg") may still change it everywhere at once.
   - Accelerated approval: **versnelde goedkeuring (de Amerikaanse route accelerated approval)**; boxed
     warning: **zware waarschuwing (boxed warning)**: Dutch first (rule 7, §2.8), also as the glossary
     terms.
   - GLP-1 products: "GLP-1-medicijnen" (authorised), "GLP-1-achtige middelen" (the class with unapproved
     products), "GLP-1-agonist" (the term); "GLP-1-middel(en)" goes (the page fixers removed its last two
     uses). One triage item (STR-02) asked for "GLP-1-middelen" for the class; the sheet keeps what the
     pages say.
   - Vial stopper: **rubberen stop** (`explainers.json` said "rubberen dop"); germs: **besmet**, because
     "vervuild product" is the doping term in the glossary.
   - Uncontrolled high blood pressure: **hoge bloeddruk die niet onder controle is** (3 pages; one page
     "slecht geregeld"); flushing: **een rood en warm gezicht (flushing)**; single-use pen: **pen voor
     één dosis**; tanning peptides: **peptiden voor een bruine huid** (`warning-signs.json`); Wong 2019's
     programmes: **ontwikkeltraject**; an EMA guideline: **wetenschappelijke richtlijn van het EMA**.
   - The paper's abstract: **samenvatting** (most pages); "abstract" stays only on how-to-read-a-study,
     whose heading uses it. Stop callouts follow the English titles (§2.1). The digits rule (§3) stands.
   - Also fixed: §5.2 now has the brief's publisher line word for word; §5.1 lost a garbled line; §6 has
     the alias rules the linker needs; §7 has the current `tokens.nl` and a summary of the residue
     check; the fixed Belgian line keeps "het FAGG" (§2.7).
   - Strings fixer of the final sweep (28 October 2026; log: `research/nl-notes/sweep-strings.md`): the
     Russia, GLP-1 and ECG rows kept as merged, to match the pages; "versnelde goedkeuring (de Amerikaanse route
     accelerated approval)"; strict liability's B1 form "“strict liability”: je bent zelf verantwoordelijk
     voor wat er in je lichaam zit" (ui-history, from the Dopingautoriteit page); ontheffing, vrijstelling
     and machtiging each named with who gives it; new rows for the Belgian official words (be-notes §7.3)
     and for the ui-safety and ui-media terms (lymfevaten, necrotiserende fasciitis, rabdomyolyse,
     benauwd, scheve mond, leververvetting, juridische boeken, sporten); §5.2 marks the publisher line
     "owner decision pending on wording and placement"; §7 names the Dutch idioms of SH-21. The glossary
     follows: `accelerated-approval` and `boxed-warning` have the Dutch word as term, `deletion-sequence`
     lost "ingekorte sequentie(s)", `informed-consent` lost "toestemming", `dermis` lost "opperhuid" and
     "epidermis", `insulin-glargine` lost "langwerkende insuline", `qt-prolongation` writes "hartfilmpje
     (ECG)".
   Sources read for these choices on 27 October 2026: wetten.overheid.nl, Geneesmiddelenwet (BWBR0021505,
   geldend van 09-09-2025), art. 1(1)(qq) "onderzoekersdossier: het dossier, bedoeld in artikel 2, tweede
   lid, onderdeel 23, van verordening 536/2014" and (lll) "handelsvergunning"; thuisarts.nl/netelroos
   ("Heb je opeens bulten die jeuken? Dat kan netelroos zijn (galbulten)."); thuisarts.nl/hartkloppingen/
   ik-heb-hartkloppingen ("Dat kan met een hartfilmpje (ECG)."). The official Dutch name of the PRAC was
   not checked (EUR-Lex did not load): "veiligheidscommissie" is a description, not a name.

**Checked today (27 October 2026), with the wording relied on:**

| Source | Wording |
|---|---|
| thuisarts.nl/sepsis and /sepsis/ik-heb-sepsis | "Sepsis (bloedvergiftiging): bel snel de huisarts"; "Sepsis of bloedvergiftiging is een reactie op een bacterie, virus, parasiet of schimmel."; block "In het kort"; heading "Wat merk je" |
| thuisarts.nl/hartaanval, /diabetes-type-2, /overgewicht-bij-volwassenen | "Bij een hartaanval of hartinfarct …"; "Diabetes type 2"; "Ik ben veel te zwaar (obesitas)" |
| EMA, Wegovy and Ozempic product information in Dutch (PDF) | "ten behoeve van gewichtsbeheersing"; "(obesitas)", "(overgewicht)"; "vetvrije massa", "visceraal vet"; "GLP-1-receptoragonisten"; "4.5 Interacties met andere geneesmiddelen"; "overgeven", "uitdroging (vochtverlies)"; "UITERSTE GEBRUIKSDATUM EXP"; "PARTIJNUMMER Lot" (Wegovy), "PARTIJNUMMER Charge" (Ozempic); "het batchnummer"; "Houder van de vergunning voor het in de handel brengen" |
| EMA, Mounjaro product information in Dutch (PDF) | "een langwerkende GIP- en GLP1-receptoragonist" |
| EMA, Wegovy overview in Dutch (PDF, updated 06-2026) | "waarom het is geregistreerd in de EU"; "de voordelen van Wegovy groter zijn dan de risico’s"; "de beoordelingsrapporten" |
| cbg-meb.nl home and "Wie checkt mijn medicijn" | "de kwaliteit, werking en veiligheid van een medicijn"; "Zijn de voordelen groter dan de bijwerkingen? Dan keuren we een medicijn goed."; the IGJ "houdt toezicht"; the NVWA "controleert onder andere de veiligheid van producten die geen medicijnen zijn"; "Lees verder" as a link |
| farmacotherapeutischkompas.nl, semaglutide and "GLP1-agonisten" | "GLP-1-agonisten activeren de GLP-1 (glucagonachtige peptide-1)-receptor"; sections "Bijwerkingen", "Interacties"; "het meldformulier van het Lareb"; "Zorginstituut Nederland" |
| apotheek.nl/medicijnen/semaglutide | "De medicijnen waarmee de belangrijkste wisselwerkingen optreden" |
| wetten.overheid.nl, Geneesmiddelenwet (BWBR0021505, geldend van 09-09-2025) | art. 1: "ter hand stellen: het rechtstreeks verstrekken of doen bezorgen van een geneesmiddel aan de patiënt"; "afleveren: het anders dan door terhandstelling of uitvoer leveren" |
| wetten.overheid.nl, WMO (BWBR0009408, geldend van 01-01-2025); ccmo.nl | "Wet medisch-wetenschappelijk onderzoek met mensen"; "Is uw onderzoek WMO-plichtig?" |
| eerstekamer.nl, wetsvoorstel 33.599 | "vervalste geneesmiddelen in de legale distributieketen" |
| rijksoverheid.nl (document of 24 February 2026) and knmp.nl | "Kamerbrief voorlopig politiek akkoord herziening Europese geneesmiddelenwetgeving"; "Herziening Europese geneesmiddelenwetgeving" |
| dopingautoriteit.nl/magdit/geneesmiddelen; the WADA-Dopinglijst 2026 page and its translation (PDF) | "dispensatie (vrijstelling)"; "Therapeutic Use Exemption (TUE)"; "sporter"; "WADA-Dopinglijst 2026"; "S0 Niet erkende stoffen"; "S2 Peptidehormonen, groeifactoren, verwante stoffen en mimetica"; "goedgekeurd door het WADA" |
| soaaids.nl, hiv | "Hiv is een virus."; "De dokter kijkt of je PEP nodig hebt. Dit zijn medicijnen die zorgen dat je geen hiv krijgt." |
| rivm.nl/prikaccidenten | "Bij een prik- of snijaccident komt bloed … via een scherp voorwerp, bijvoorbeeld een injectienaald" |
| drugsinfo.nl, "Injecteren … risico’s verminderen" | "designer drugs (‘research chemicals’, NPS)"; "een speciale spuitcontainer"; "spuitomruil. Hier kan iemand een oude naald inruilen voor een nieuwe, schone (steriele) naald." |
| afvalscheidingswijzer.nl (Milieu Centraal), injectienaald | "Dit mag naar het inleverpunt voor klein chemisch afval"; "Injectienaalden kun je ook inleveren bij je eigen apotheek." |
| douane.nl; geneesmiddeleninformatiebank.nl | "Over de Douane", "Betalen aan de Douane"; page title "Geneesmiddeleninformatiebank", "College ter Beoordeling van Geneesmiddelen" |
| taaladvies.net, "Niet ingevulde / niet-ingevulde formulieren" | "Zowel niet ingevulde formulieren als niet-ingevulde formulieren is correct." |

**Still open:** whom the NVIC serves (UNRESOLVED, as before: take it from `research/nl/`). The EMA
documents read do not spell out a Dutch full form of "EPAR" (they say "de beoordelingsrapporten");
"Europees beoordelingsrapport (EPAR)" follows the CBG. **For the UI and glossary assignments:** apply
§2.1, §2.2, §2.4 and §2.9 to `src/i18n/nl/`, and leave the "English page is the reference" sentence out
of `common.translation.pending` (§5.2).
