# Notes: group evidence-b (27 October 2026)

Pages written:

- `src/content/pages/nl/evidence/the-translation-gap.mdx` (from `src/content/pages/en/evidence/the-translation-gap.mdx`)
- `src/content/pages/nl/evidence/conflicts-of-interest.mdx` (from `src/content/pages/en/evidence/conflicts-of-interest.mdx`)

Other files: `src/i18n/nl/glossary/nl-evidence-b.json` (2 new terms). No new sources (so no
`src/data/sources/nl-evidence-b.yaml`), no allowlist change: every host cited is already listed.

Validator: `npx tsx scripts/validate-content.ts --only pages/nl/evidence/the-translation-gap` and
`--only pages/nl/evidence/conflicts-of-interest` → 0 errors, 0 warnings each. `--only nl-evidence-b` → 0 errors,
0 warnings.
Residue: `npx tsx scripts/check-locale-residue.ts --only pages/nl/evidence/ --details` → 0 error, 0 frame, 0 warn.
I also ran the scanner's own `scanMdx` on both files with the markers stripped, to see that the markers do the
work: translation-gap 4 `fda` warn hits (all evidence), conflicts-of-interest 6 `other-currency` frame hits (all
dollar amounts from the studies), each silenced by its marker.

## 1. the-translation-gap

**Method:** `translated` (an evidence page; no country route, help or status on it).

**What came back from the saved material:** nothing Dutch-specific. The 23 October snapshot
(`research/for-nl-site/snapshot-2026-10-23/content/pages-en/evidence/the-translation-gap.mdx`) differs from the
current English page only in the TL;DR (then a `summary`) and in two EU sentences ("In Europe, the first dose for
healthy volunteers should stay below …", "the EU medicines agency issued its first guideline"; MANIFEST-about-history-en
row). On the Dutch page these are plain EU facts again (no marker needed for `nl`): "De richtlijn van het Europees
Geneesmiddelenbureau (EMA) zegt …", "Het jaar daarna bracht het EMA zijn eerste richtlijn uit …".

**Same as English:** frontmatter fields, the 7 `##` chapters in the same order, all 6 KeyNumbers, 3 Diagrams, the
TimeStrip, the Compare, 7 folds, all 3 `<Claim>`s with their levels, every study and number (Dutch number format),
every `<Cite>` id of the English page (none dropped), `related` (4 keys, all Dutch routes) and `further_reading`.

**What was rewritten or added for the Netherlands:**

- TL;DR: "Talk to your doctor" → "Praat erover met je huisarts" (STYLE-NL §2.1).
- Links: `/nl/` routes only; link texts follow the Dutch nav titles (productrisico, alarmsignalen, het Kroatische lab,
  het bewijs beoordelen, praten met je arts, ons standpunt over hervorming).
- The FDA as evidence (Ineichen's approval count, the 2005 starting-dose guidance, the PCAC briefing findings on KPV and
  BPC-157) stays as evidence, each line marked `{/* residue-ok: FDA evidence */}`.
- **Advertising test (brief, "Added after step 1", item 1):** the Compare names an effect of an authorised medicine
  (semaglutide: "aangetoond dat het werkt … voor de onderzochte toepassingen"). Added, under the table, one paragraph
  from the Dutch EU product information: approved in the EU, prescription only; Ozempic for adults with type 2 diabetes
  that is not well controlled; Wegovy for weight management with diet and exercise (adults with obesity, or overweight
  with a weight-related condition; the injection also for adolescents from 12 with obesity and over 60 kg); the most
  reported side effects (gastrointestinal: misselijkheid, diarree, verstopping, buikpijn, overgeven); that the product
  information says when it may not be used (contra-indicaties) and what to watch for. Cited to `ema-pi-ozempic-nl` and
  `ema-pi-wegovy-nl` (4.1 texts from `research/nl/status/semaglutide.yaml` `indications_nl_from_smpc`; I re-read the
  Dutch Wegovy PDF today with curl + pdftotext: 4.1, 4.3 "Overgevoeligheid voor de werkzame stof …", 4.8 "De meest
  gemelde bijwerkingen waren gastro-intestinale aandoeningen, zoals nausea, diarree, constipatie, buikpijn en braken",
  5.2 "> 99%" albumin binding, "Aan medisch voorschrift onderworpen geneesmiddel"). The side-effect cell of the
  Compare also says "het vaakst maag- en darmklachten" (adds `ema-pi-wegovy-nl`).
- Quotations: the English page quotes the FDA guidance, the EMA guideline and Suntharalingam 2006 in English. No Dutch
  versions exist, so the Dutch page renders them as Dutch paraphrase without quotation marks (a translated sentence in
  quotation marks would be a misquote). Meaning unchanged.
- `last_reviewed: 2026-10-27` (the Dutch additions were checked today), `reviewed_by: pending-medical-review`,
  `translation: { method: translated, from: en, review: pending }`.

**Dropped citations:** none. **Added:** `ema-pi-ozempic-nl`, `ema-pi-wegovy-nl` (advertising test, above).

## 2. conflicts-of-interest

**Method:** `translated` (as assigned; the two Dutch rule examples below are short additions inside folds, not a
country rewrite of the page).

**What came back from the saved material:** nothing beyond the 23 October wording "The EU safety committee concluded …"
(semaglutide fold), which on the Dutch page is again the plain EU fact.

**Same as English:** frontmatter fields, the 8 `##` chapters in the same order, all KeyNumbers, 4 Diagrams, the
Checklist, 7 folds, every study and number, `related` (5 keys, all Dutch routes) and `further_reading`.

**What was rewritten for the Netherlands (task: "Dutch/EU equivalents only where the research supports them"):**

- **Payments to doctors.** English: "In the United States such payments are published: the Open Payments database …"
  (`cms-open-payments`), a US public register a US reader would use to check their own doctor. Replaced by the Dutch
  rule and register: the Geneesmiddelenwet bans gunstbetoon with a few exceptions (paid lectures or advice within set
  limits, modest hospitality at congresses); the rule is mutual (what a company may not give, a doctor may not accept);
  certain financial relationships are public in the Transparantieregister Zorg. Source: `igj-geneesmiddelenreclame-wat-is`
  (registered by nl-law; I re-fetched the page today, 27 October 2026, page modified 4 November 2025, and read the
  sections "Gunstbetoon", "Diensten van artsen aan farmaceutische bedrijven", "Transparantieregister Zorg": "Gunstbetoon
  is verboden, op een paar uitzonderingen na."; "wat een gever niet mag geven, mag een ontvanger niet aannemen";
  "Om een patiënt of consument inzicht te geven in de financiële relaties die zijn/haar arts aangaat, wordt bepaalde
  informatie hierover openbaar gemaakt in het Transparantieregister Zorg."). The DeJong study itself (US doctors, US
  meals, US$ amounts) stays as international evidence, marked.
- **Trial registration.** One sentence added to the "Gesponsorde studies" fold: in the Netherlands all research that
  must be officially reviewed is in Onderzoek met mensen (OMON), since May 2026 including the public part of the EU
  register CTIS. Source `omon-overzicht-ctis-2026` (nl-care fact 45, confirmed by its fact-check).
- **Influencers.** Two sentences added after the Gell 2026 review: in the Netherlands the medicines-advertising rules
  apply on social media and to everyone, also to someone who sells nothing (`igj-geneesmiddelenreclame-wat-is`: "Iedereen
  kan reclame maken …", "De reclameregels gelden dus ook voor … social media", "Dat een geneesmiddel door die
  onafhankelijke derde niet te koop wordt aangeboden maakt dat niet anders"); and in 2026 a Dutch court upheld a fine on
  a person for advertising a prescription medicine through a video channel, lowered because the procedure took too long
  (`nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`, nl-law fact 17a(c); the source names no one: the person is
  pseudonymised). I did not use the Rb Amsterdam judgment (its text names the publisher; nl-law open question 12).
- **Semaglutide fold.** English: "… and the UK regulator has since warned about it" (`mhra-2026-02-semaglutide-naion`),
  a UK-frame line added in the English refocus (MANIFEST-about-history-en: "plus the MHRA"). Replaced by the EU
  equivalent: "de productinformatie (SmPC) van Ozempic en Wegovy waarschuwt er nu voor" (`ema-pi-ozempic-nl`,
  `ema-pi-wegovy-nl`; eu-status fact 19, confirmed by its fact-check: the Dutch SmPCs of Ozempic, Rybelsus, Wegovy and
  Kayshild have a NAION section). NAION gets a short plain explanation in brackets.
- **KeyNumber `who` (DeJong):** "US doctors prescribing for Medicare" → "Amerikaanse artsen die in 2013 voorschreven
  binnen de Amerikaanse overheidsverzekering voor ouderen". "Medicare" is an `error` pattern on Dutch pages
  (`other-funding`), which no marker can exempt; the population qualifier is kept in plain words.
- Dollar amounts from the studies (US$ 20, US$ 100, US$ 1.865, US$ 3.000) are kept as evidence, each line marked
  `{/* residue-ok: evidence (study data) */}` (in the table row, inside the last cell).
- The lab-report link points to the fixed anchor `/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt`
  (brief item 3; heading checked in the Dutch file).
- Headings are statements (STYLE-NL §4.3) where English used a question ("Does it matter who paid for a study?" →
  "Wie een studie betaalde, doet ertoe"). "How to spot a sponsored study or a seller's review" →
  "Zo herken je gesponsorde teksten": a heading "… herken je verkopers" could be read as help to find a seller.
- `last_reviewed: 2026-10-27`, `reviewed_by: pending-medical-review`, `translation: { method: translated, from: en,
  review: pending }`.

**Dropped citations:**

| Page | Cite id | Why | What replaced it |
|---|---|---|---|
| conflicts-of-interest | `cms-open-payments` | US frame: the US public register of company payments to doctors, a US reader's own tool | The Dutch gunstbetoon rule and the Transparantieregister Zorg, `igj-geneesmiddelenreclame-wat-is` |
| conflicts-of-interest | `mhra-2026-02-semaglutide-naion` | UK frame: the UK regulator's warning, added on English as the UK reader's equivalent of the EU line | The NAION warning in the EU product information, `ema-pi-ozempic-nl`, `ema-pi-wegovy-nl` |

**Added citations:** `igj-geneesmiddelenreclame-wat-is` (2×), `omon-overzicht-ctis-2026`,
`nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`, `ema-pi-ozempic-nl`, `ema-pi-wegovy-nl`.

## 3. UNRESOLVED points and how the pages handle them

- No UNRESOLVED point of `research/nl/` concerns these two pages' facts. Not used, so nothing to write as unknown:
  whether the KOAG/KAG and CGR codes apply to a non-commercial publisher (nl-law 5.12); the outcomes of the open PRAC
  signals (eu-status, UNRESOLVED list). The NAION line says only what PRAC concluded and what the SmPCs now carry.
- Not cited (brief item 5, nl-law §5): the IGJ's August 2026 webshop order, its February 2026 peptide warning, the
  Rb Amsterdam judgment (names the publisher in its text), the IGJ fines register (names a media company).

## 4. Open questions for the reviewers

Medical reviewer:

1. translation-gap, semaglutide paragraph under the Compare (added for the advertising test): is the B1 summary of the
   Ozempic and Wegovy 4.1 texts, the 4.8 side effects and the contra-indications line in line with the SmPC? Should
   Rybelsus (tablet, type 2 diabetes) be named too? I kept "bijvoorbeeld" so the list is not read as complete.
2. translation-gap, Compare row 1, semaglutide "Ja: voor de onderzochte toepassingen" (cited to SELECT): SELECT's
   cardiovascular result is in Wegovy's SmPC section 5.1, which 4.1 refers to. Fine as "in line with the SmPC"?
3. "odds" kept as a statistical term ("3,4 keer zo hoge odds", "oddsratio"); "fair trials" (Hackam KeyNumber) as
   "eerlijke studies bij mensen"; GRADE "moderate-quality" as "redelijke kwaliteit" (the Dutch GRADE word; STYLE-NL avoids
   "matig"). Acceptable for a B2 evidence page?
4. NAION explained as "een plotselinge beschadiging van de oogzenuw" (the glossary's definition is longer). Accurate
   enough in brackets?

Legal reviewer:

5. conflicts-of-interest: the B1 summary of gunstbetoon (definition, exceptions "binnen vaste grenzen", mutual rule) and
   of the Transparantieregister Zorg, both from the IGJ page. The IGJ page does not say which relationships the register
   holds; the page says "bepaalde financiële relaties".
6. conflicts-of-interest: the Rb Noord-Nederland example ("liet een boete in stand … verlaagde de boete wel") as an
   illustration in the influencer section. Acceptable framing of a judgment in which the appeal succeeded only on the
   time limit?
7. Both pages pass the advertising test as I read it: no effect of a compound without a handelsvergunning beyond its
   level; the authorised medicine (semaglutide) is named with its SmPC indications, main side effects and a
   contra-indications line wherever an effect is named (translation-gap); the conflicts page names only its harms and
   checks, no effect.

## 5. Style terms (STYLE-NL lacks these; the word I used)

| English | Dutch used | Note |
|---|---|---|
| the translation gap (page title, nav) | de kloof tussen dier en mens | as the evidence index and how-to-read-a-study already link it; "vertaalkloof" reads as language translation |
| animal dose · human dose | dierdosis · mensendosis | heading "Een dierdosis is geen mensendosis" |
| to scale (a dose) | omrekenen | |
| drug-development programme | ontwikkeltraject | Wong 2019 |
| pivotal trials | de studies waarop de goedkeuring rustte | changed by the check (27 Oct): "beslissende studies" was a calque |
| fair trial (in people) | goed opgezette studie (bij mensen) | changed by the check (27 Oct): "eerlijke studie" is not Dutch usage |
| odds · odds ratio · risk ratio · rate ratio | kans (odds) in B1 labels; odds · oddsratio · relatief risico · rate ratio in fold text | glossary has oddsratio and relatief risico (alias risicoratio); "kans (odds)" added by the check |
| moderate-quality / low-quality evidence (GRADE) | bewijs van redelijke / lage kwaliteit | Dutch GRADE wording |
| narrative review · a seller's review | overzichtsartikel · een overzicht van een verkoper | STYLE-NL §2.8 |
| Cochrane review · umbrella review · scoping review | Cochrane-review · umbrella review · scoping review | research terms Dutch researchers use; umbrella review is in the glossary |
| sponsored study · sponsored texts | gesponsorde studie · gesponsorde teksten | |
| competing interests (statement) | verklaring over belangen | "Belangen (competing interests)" once in the table |
| writing support | hulp bij het schrijven ("writing support") | |
| ghost author · honorary author · ghost-writing · guest authorship | spookauteur · ere-auteur · ghostwriting · gastauteurschap | glossary terms and aliases |
| predatory journal · predatory publishing | roofjournal · roofpublicaties | glossary term |
| legitimate (open-access) journal | legitiem (open-access)tijdschrift | not "betrouwbaar" (STYLE-NL §5.6) |
| impact metric | impactmaat | |
| medical publishing company | medisch publicatiebureau | |
| citation laundering · when reviews echo reviews | citatiewitwassen · als overzichten elkaar napraten | glossary term; heading |
| landmark (study) | invloedrijk | "baanbrekend" is a banned hype word |
| first-in-human trial | eerste studie bij mensen | glossary alias of `first-in-human-trial` |
| inducements to prescribers | gunstbetoon | Geneesmiddelenwet term; new glossary entry |
| Medicare (where a population must be named) | de Amerikaanse overheidsverzekering voor ouderen | Medicare is an error term on Dutch pages |

## 6. For the final sweep (files I do not own)

1. `related` warnings: none left. While I wrote, `safety/product-risk` and `about/funding` did not exist yet in `nl`;
   both exist now (final run: 0 warnings). Nothing to do unless those pages are renamed.
2. `src/data/sources/nl-research-nl-law.yaml`, `igj-geneesmiddelenreclame-wat-is`: its note quotes only the advertising
   sections. Suggest adding what the conflicts page cites it for: "Gunstbetoon is verboden, op een paar uitzonderingen
   na."; "wat een gever niet mag geven, mag een ontvanger niet aannemen"; doctors may be paid for lectures and advice
   within maximum hourly rates; "… wordt bepaalde informatie hierover openbaar gemaakt in het Transparantieregister Zorg"
   (re-read 27 October 2026; page modified 4 November 2025).
3. Glossary: `src/i18n/nl/glossary/nl-evidence-b.json` adds `gunstbetoon` and `transparantieregister-zorg` (grep of all
   Dutch glossary files found neither id nor term). If a legal group adds the same concepts, keep one id.
4. Glossary gap (not mine to fill): no Dutch entry for `publieksreclame` or `reclame` (STYLE-NL §2.4 has the words). I
   avoided the word on my pages; the legal glossary owner may want an entry.
5. `docs/STYLE-NL.md`: merge the rows of section 5 above (one Dutch word per concept), above all "de kloof tussen dier
   en mens" for the translation-gap page, so every page links it with the same words.
6. `src/data/sources/semaglutide.yaml` `ema-epar-wegovy` is still cited for ">99% albumin binding" on the Dutch page
   (as on English); the Dutch SmPC (`ema-pi-wegovy-nl`, section 5.2: "in grote mate gebonden aan plasmaalbumine
   (> 99%)") says the same if a Dutch-language source is preferred.

## Check (independent, 27 October 2026)

Independent fact-check and edit of group evidence-b, against the brief (with "Added after step 1"), STYLE-NL,
CONTENT-GUIDE §1, §1a, §4.1, §9–§13, research/nl/ (the fact-check sections win), the current English pages and the
23 October snapshot. Files edited: both Dutch pages, `src/i18n/nl/glossary/nl-evidence-b.json`, this notes file (§5 rows
for "pivotal trials", "fair trial" and "odds" corrected). No source file, no allowlist host, nothing outside the group.

### What was checked

- **Science parity (both pages).** Every English `<Cite>` id, `<Claim>` (translation-gap: `animal`, `human-limited`,
  `in-vitro`, same levels and wording), KeyNumber, Diagram, TimeStrip, Compare, fold, study and number was compared line
  by line with the English page (Dutch number format). All present with the same meaning. Only two cites are gone, both
  on conflicts-of-interest and both framing: `cms-open-payments` (a US register as the reader's tool; the task asks for
  the Dutch equivalent where the research supports it) and `mhra-2026-02-semaglutide-naion` (UK frame). Both are listed
  in §2 with what replaced them. The 23 October snapshot has nothing else Dutch for these pages
  (MANIFEST-about-history-en rows checked; snapshot diffed with the current English).
- **Dutch and EU facts, re-fetched today:**
  - IGJ page `igj-geneesmiddelenreclame-wat-is` (curl 200; dateModified 2025-11-04): the gunstbetoon definition ("het in
    het vooruitzicht stellen, aanbieden of toekennen van geld of op geld waardeerbare diensten of goederen met het
    kennelijke doel het voorschrijven, ter hand stellen of gebruiken van een geneesmiddel te bevorderen"), "Gunstbetoon is
    verboden, op een paar uitzonderingen na", the mutual rule, modest hospitality at congresses, paid lectures and advice
    with "maximale uurtarieven", gifts "van geringe waarde" usable in practice, the IGJ "houdt toezicht", the
    Transparantieregister Zorg sentence ("bepaalde informatie hierover openbaar"), "Iedereen kan reclame maken", social
    media, "niet te koop wordt aangeboden maakt dat niet anders". All confirmed.
  - OMON (`omon-overzicht-ctis-2026`): nl-care fact 45, confirmed unchanged by its fact-check (CTIS public part since
    May 2026; "al het medisch-wetenschappelijk onderzoek in Nederland dat officieel getoetst moet worden"; data "kan ...
    verouderd zijn").
  - Rb Noord-Nederland 21 April 2026 (`nl-rbnne-2026-1471-publieksreclame-natuurlijk-persoon`): nl-law fact 17a(c) and
    the source note: a fine for public advertising of a prescription medicine on a video channel; the appeal was
    well-founded "uitsluitend omdat de redelijke termijn is overschreden" and the fine was lowered (EUR 3,750 to 3,000).
    The source names no one (pseudonymised).
  - Dutch SmPCs of Ozempic and Wegovy (EMA PDFs, curl + pdftotext today): 4.1 as in `research/nl/status/semaglutide.yaml`
    `indications_nl_from_smpc`; 4.3 "Overgevoeligheid voor de werkzame stof of voor een van de in rubriek 6.1 vermelde
    hulpstoffen" (both); 4.4 acute pancreatitis and NAION (both); 4.8 Wegovy "nausea, diarree, constipatie, buikpijn en
    braken", Ozempic "misselijkheid (zeer vaak), diarree (zeer vaak) en braken (vaak)"; NAION "zeer zelden" in the 4.8
    tables. eu-status fact 19 (NAION section in the SmPCs) confirmed.
- **Rules:** no US/UK/CA/AU help, route, reporting or insurance frame left; no `/en/` or foreign legal-page link; the
  only cross-page anchor (`/nl/safety/product-risk/#wat-een-labrapport-wel-en-niet-zegt`) is the brief's fixed anchor and
  the heading exists in the Dutch file (line 132); all 10 link targets exist in `nl`. No help or emergency content on
  these pages, so no 112 or Lareb line is needed. No Belgian content.
- **Advertising test:** translation-gap names one effect of an authorised medicine (semaglutide, Compare row 1); the
  paragraph under the Compare now carries the SmPC indications, the main side effects, the contraindication itself and a
  serious warning (fixed below). No positive claim for BPC-157, TB-500 or KPV beyond their levels; no STYLE-NL §5.6 word
  (grep: none of veilig, bewezen, effectief, werkzaam, kuur, dosering, betrouwbaar, leverancier, webshop, aanbieder,
  ervaringen, zwarte or grijze markt, u, uw); no dose, schedule or seller hint; no commerce word in a title, heading,
  Lead, fold, figure title, label or link text.

### Changes

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| translation-gap, title | "… waarom de meeste resultaten bij dieren mensen nooit helpen" | "… waarom de meeste uitkomsten van dieronderzoek mensen nooit helpen" | "bij dieren mensen" reads as one phrase; natural word order | English title |
| translation-gap, description | "… kleine studies en doses die niet schalen." | "… kleine vertekende studies en doses die je niet kunt omrekenen." | "biased" was lost; "schalen" is an anglicism (the page says "omrekenen") | English description |
| translation-gap, TL;DR 2 | "Nee. Dat geeft alleen een eerste dosis onder medisch toezicht, niet wat werkt of geen kwaad kan." | "Nee. Omrekenen geeft alleen een eerste dosis onder medisch toezicht. Wat werkt of geen kwaad kan, blijft onbekend." | B1: one idea per sentence, no vague "Dat" | English TL;DR |
| translation-gap, KeyNumber Hackam | "eerlijke studies bij mensen" | "goed opgezette studies bij mensen" | "eerlijke studie" is a calque of "fair trial"; Hackam measured confirmation by randomised trials | hackam-2006-animal-translation |
| translation-gap, Ineichen and van der Worp folds | "gemiddeld (mediaan) 10 jaar", "gemiddeld (mediaan) 889 keer" | "na een mediaan van 10 jaar", "een mediaan van 889 keer" | a median is not an average ("gemiddeld") | ineichen-2024-animal-to-human, van-der-worp-2010-animal-models |
| translation-gap, Ineichen fold | "misschien vaker lukt dan vaak wordt beweerd" | "misschien beter lukt dan vaak wordt beweerd" | "vaker … vaak" repetition; English "better" | English page |
| translation-gap, receptor fold | "knaagdieren, van wie de C-cellen" | "knaagdieren, waarvan de C-cellen" | "van wie" is for people | |
| translation-gap, stroke fold | "slechte externe validiteit:" | "slechte externe validiteit (hoe goed een resultaat buiten het model geldt):" | term explained on first use (STYLE-NL §1 rule 7) | |
| translation-gap, Bebarta KeyNumber label | "keer zo hoge odds op een positief resultaat …" | "keer zo hoge kans (odds) op een positief resultaat …" | B1 label: "odds" alone is not a B1 word; a longer gloss tripped the 18-word warning | bebarta-2003-randomisation-blinding |
| translation-gap, first-dose diagram step 6 | "met regels voor wanneer je stopt" | "met vaste regels om te stoppen" | the generic "je" read as the reader stopping | English diagram |
| translation-gap, semaglutide paragraph (advertising test) | Ozempic without "als toevoeging aan dieet en lichaamsbeweging"; "obesitas" unexplained; "De productinformatie zegt ook wanneer je het niet mag gebruiken (contra-indicaties) en waarvoor je moet oppassen." | adds "naast een dieet en meer bewegen" and "obesitas (ernstig overgewicht)"; names the contraindication ("overgevoelig … voor de stof of voor een van de andere stoffen erin") and the 4.4 warning "een ontstoken alvleesklier (pancreatitis)" | brief item 1: name the contraindications and main risks, not only say they exist; Ozempic 4.1 wording | ema-pi-ozempic-nl, ema-pi-wegovy-nl (PDFs read today) |
| conflicts, TL;DR 4 | ‘onderzoek’ | “onderzoek” | STYLE-NL §4.1: double quotes for quoted words | |
| conflicts, Cochrane intro | "Eén aanwijzing waar de vertekening zit" | "Eén aanwijzing voor waar de vertekening zit" | grammar | |
| conflicts, who-is-behind diagram caption | "en wat elk teken betekent" | "en wat elk punt je vertelt" | "teken" (symbol) is the wrong word for "sign" | |
| conflicts, sponsored-studies fold (OMON) | "In Nederland staat al het … onderzoek dat officieel getoetst moet worden in het register OMON. Sinds mei 2026 staat daar ook …" | "Het Nederlandse onderzoeksregister heet Onderzoek met mensen (OMON). Sinds mei 2026 staat daar ook … CTIS. Zo staat al het … onderzoek … in OMON. Sommige gegevens daar kunnen verouderd zijn, zoals of een studie nog deelnemers zoekt." | the "all research" claim follows from the CTIS addition (OMON's own order); OMON's warning that data may be out of date added | omon-overzicht-ctis-2026; nl-care fact 45 |
| conflicts, rofecoxib fold | "plandden" | "planden" | spelling (plannen → planden) | |
| conflicts, predatory diagram and fold | "Tekens die je veel vaker ziet …", column "Teken op de website …", fold "deze tekens" | "Kenmerken …", "Kenmerk …", "deze kenmerken" | "tekens" is the wrong word; the fold already says "13 kenmerken" | shamseer-2017-predatory-journals |
| conflicts, DeJong KeyNumber label | "keer zo hoge odds dat artsen …" | "keer zo hoge kans (odds) dat artsen …" | B1 label, same pattern as translation-gap | dejong-2016-industry-meals |
| conflicts, DeJong fold | "hadden een hogere odds"; "gingen samen met hogere aantallen" | "hadden hogere odds"; "gingen samen met nog vaker voorschrijven" | "odds" is plural in Dutch; "rates" means how often they prescribed, not "aantallen" | dejong-2016-industry-meals |
| conflicts, gunstbetoon paragraph | "geld, diensten of spullen die een bedrijf belooft, aanbiedt of geeft om …"; exceptions "lezingen of advies binnen vaste grenzen, en bescheiden gastvrijheid"; "Wat een bedrijf niet mag geven, mag een arts ook niet aannemen."; "Bepaalde financiële relaties … staan openbaar in het Transparantieregister Zorg." | definition without "een bedrijf" (the definition names no giver) and with "met als duidelijk doel" (kennelijke doel); exceptions as the IGJ lists them (lectures or advice up to a fixed maximum hourly rate, modest hospitality at a congress, small gifts usable in practice); the mutual rule in the IGJ's words (gever, ontvanger); "De Inspectie Gezondheidszorg en Jeugd (IGJ) houdt hier toezicht op."; "Bepaalde informatie over de financiële relaties van artsen met bedrijven is openbaar, in het Transparantieregister Zorg." | the IGJ says "bepaalde informatie" is public, not that the relationships are listed; the definition was narrower than the source | igj-geneesmiddelenreclame-wat-is (fetched today) |
| conflicts, Rb Noord-Nederland line | "liet een Nederlandse rechter een boete in stand … verlaagde de boete wel" | "vond een Nederlandse rechter een boete terecht … verlaagde de boete wel" | the fine was not left unchanged (EUR 3,750 to 3,000): the court upheld the ground and lowered the amount | nl-rbnne-2026-1471 note; nl-law fact 17a(c) |
| conflicts, influencer fold | "… of een eigen webwinkel?" | "… of doordat die het zelf verkoopt?" | STYLE-NL §5.6 and §7: "webwinkel" kept out where the role can be said without it | English "their own shop" |
| conflicts, semaglutide summary and fold | "alle beslissende studies", "elke beslissende studie" | "alle studies waarop de goedkeuring rustte", "elke studie waarop de goedkeuring rustte" | "beslissende studies" is a calque of "pivotal trials" | |
| conflicts, semaglutide fold | "NAION (een plotselinge beschadiging van de oogzenuw)"; "een heel zeldzame bijwerking"; "geen duidelijke stijging" | "NAION (een oogziekte die plotseling verlies van het gezichtsvermogen kan geven)"; "een zeer zeldzame bijwerking"; "geen wezenlijke stijging" | NAION gloss as on evidence-grading (one wording on the evidence pages); "zeer zelden" is the SmPC frequency word and the semaglutide page's; English "no substantial rise" | ema-prac-2025-06-naion, ema-pi-ozempic-nl and ema-pi-wegovy-nl (4.8), pasternak-2024-thyroid-cancer |
| glossary `gunstbetoon` | "… die een bedrijf belooft, aanbiedt of geeft …" | "… beloven, aanbieden of geven …" | same correction as the page | igj-geneesmiddelenreclame-wat-is |
| glossary `transparantieregister-zorg` | "… over bepaalde financiële relaties tussen artsen en bedrijven …" | "… over bepaalde financiële relaties van artsen met bedrijven …"; purpose sentence closer to the IGJ ("om patiënten inzicht te geven") | wording to the source | igj-geneesmiddelenreclame-wat-is |

Validator after the changes: `--only pages/nl/evidence/the-translation-gap`, `--only pages/nl/evidence/conflicts-of-interest`
and `--only nl-evidence-b` → 0 errors, 0 warnings each. Residue (`--only …`, `--details`) → 0 error, 0 frame, 0 warn for
each. (One interim warning, a 20-word KeyNumber label, was fixed.)

### Left as is, on purpose

- "umbrella review" (translation-gap) stays: it is the term of the Dutch glossary entry `umbrella-review`
  (`src/i18n/nl/glossary/evidence.json`), so the page links its definition. STYLE-NL §2.8 allows English "review" only
  in "systematische review"; the final sweep should either add "umbrella review" to §2.8 or change the glossary term.
- "systematische scoping review" (Gell 2026) matches the source title ("a systematic scoping review").
- "rate ratio 4,29" (Wang 2010) stays as the statistical term; Dutch has no common one-word form.
- English terms in brackets in the who-is-behind table ("competing interests", "writing support") help a reader find
  that section in an English paper.
- English quotations rendered as Dutch paraphrase without quotation marks (the writer's choice): meaning checked against
  the English quotes, unchanged.
- `last_reviewed: 2026-10-27` (English: 2026-10-24): the Dutch additions were checked today; 27 Dutch pages use the same
  date.
- "kortingscode", "verkoopt" and "verkopen" stand only in body text where the fact needs them (CONTENT-GUIDE §1,
  STYLE-NL §7).

### Remaining concerns for the reviewers

1. Medical: the semaglutide paragraph (translation-gap) names Ozempic and Wegovy only; Rybelsus, Kayshild (MASH,
   conditional) and the Wegovy tablets are not named. The paragraph says "in verschillende producten", so it does not
   claim to be complete; the reviewer may want Rybelsus named (diabetes type 2, tablet).
2. Medical: "kans (odds)" in two B1 labels simplifies odds as a kind of chance (as the Dutch glossary entry
   `odds-ratio` does). The exact odds ratios stay in the folds.
3. Legal: the gunstbetoon summary and the Transparantieregister line rest on one IGJ page. Per nl-law fact 1 the register
   is the subject of a pending initiative bill (Kamerstukken 35410, "Wet transparantieregister zorg"); the page does not
   say whether the register is statutory, and it should not until a legal reviewer has checked.
4. Legal: the Rb Noord-Nederland case concerned a church minister and ivermectin; the page says only "iemand … via een
   videokanaal … een medicijn op recept", inside the influencer fold. It shows that the rules apply to anyone; it is not
   an influencer case in the narrow sense.
5. Final sweep (STYLE-NL), new rows from this check: "kenmerk" for "sign" (of a predatory journal); "goed opgezette
   studie" for "fair trial"; "de studies waarop de goedkeuring rustte" for "pivotal trials"; "kans (odds)" in B1 labels
   (the §5 rows above are updated).
