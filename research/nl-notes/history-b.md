# Notes: group history-b (Dutch site, 27 October 2026)

Pages written (all `review: pending`):

| Dutch file | From | Method |
|---|---|---|
| `src/content/pages/nl/history/the-croatian-lab.mdx` | `src/content/pages/en/history/the-croatian-lab.mdx` | translated |
| `src/content/pages/nl/about/index.mdx` | `src/content/pages/en/about/index.mdx` | adapted (publisher line: brief, "Added after step 1", item 1) |
| `src/content/pages/nl/about/corrections.mdx` | `src/content/pages/en/about/corrections.mdx` | translated |

Other files: `src/i18n/nl/glossary/nl-history-b.json` (one new term). No new sources, so no
`src/data/sources/nl-history-b.yaml` (every cite id is an existing id). No host added to the allowlist. No anchor
links (only `/nl/compounds/bpc-157/`, `/nl/evidence/evidence-grading/`, `/nl/about/*`, `/nl/the-case-for-reform/`,
`/nl/start-here/`, `/nl/legal/be/`, all in the brief's route list).

Checks (27 October 2026): `validate-content.ts --only pages/nl/history/the-croatian-lab`, `--only pages/nl/about/`
and `--only glossary/nl-history-b`: 0 errors. `check-locale-residue.ts --details` (whole run and per fragment): 0
error, 0 frame, 0 warn hits in these files.

## history/the-croatian-lab (translated)

**Saved material.** The snapshot of 23 October (`research/for-nl-site/snapshot-2026-10-23/content/pages-en/history/the-croatian-lab.mdx`)
differs from today's English page only in the retired `summary` (now `tldr`) and one Compare row label
("suppliers" → "materials"). `MANIFEST-about-history-en.md` lists no cut section for this page: it never had Dutch
or EU framing. So nothing came back; the current English page is the whole base.

**Science.** Every `<Cite>`, `<Claim level>`, `<KeyNumber>`, study, number and caveat of the English page is kept,
with the same components, `<Section>` order (the `##` chapters), diagram ids, folds and `related` keys. No citation
dropped. Numbers in Dutch format and digits as STYLE-NL §3 ("175 van 235", "ongeveer 7 labs", "1 op de 7").

**Re-checked today.** NCT07437547 on ClinicalTrials.gov (API v2, 27 October 2026): status RECRUITING, phase 2,
randomised, double-blind, placebo-controlled, primary completion 14 February 2027. The page's "zoekt nu deelnemers;
de uitkomsten worden na februari 2027 verwacht" still holds.

**Wording changes beyond a plain translation** (for the reviewer; no fact added that the page or its sources do not
carry):

1. Breadth fold: "De groep meldt, **vooral in studies bij ratten en muizen**, gunstige effecten …". English: "The
   group reports benefits … in an unusually wide range of conditions". Added for the advertising test (brief, item 1:
   an effect is never named without its evidence level). Supported by the page's own count (the group's 140 records:
   "almost all rat and mouse injury studies") and `fda-pcac-2026-bpc157-briefing`.
2. "The independent studies are encouraging in places and sobering in others" → "Het onafhankelijke onderzoek valt
   op sommige punten mee en op andere tegen." Same meaning, without an evaluative word ("bemoedigend") next to an
   unauthorised compound (advertising test; STYLE-NL §5.6).
3. "landmark" (Begley) → "toonaangevende", "high-profile" (Errington) → "spraakmakende": the usual Dutch word for
   "landmark" in this sense, "baanbrekend", is on STYLE-NL §5.6's hype list.
4. "suppliers" (Compare row, replication fold) → "materiaal", "herkomst van het peptide": "leverancier" is a commerce
   token and a banned seller word (STYLE-NL §5.6, §7), even where it means a lab's reagent supplier.
5. "the peptide bought and analysed independently" → "onafhankelijk verkregen en geanalyseerd" (no purchase word in
   a figure; same meaning).
6. Ioannidis's English quote is given in Dutch, in quotes, marked "(onze vertaling)".
7. Short explanations added on first use: the National Library of Medicine ("de Amerikaanse nationale medische
   bibliotheek die PubMed beheert"), farmacokinetiek ("hoe het lichaam de stof opneemt, verdeelt en afbreekt"),
   endotheelcellen, randomisatie and blindering (spelled out, as the English "randomisation or blinded assessment").
8. TL;DR and `<Lead>` answers in B1: "no sign of wrongdoing" → "Daar vonden we geen teken van" (TL;DR) and "Nee,
   daar vonden we geen teken van" (Lead); "wetenschappelijk wangedrag" stays once in the B2 body.

**Residue.** The page names the US only as the place of a lab or a clinician ("Amerikaanse arts", "een Amerikaans lab
van de industrie", "Zuid-Korea en de VS"): no residue pattern, no marker needed. It cites
`fda-pcac-2026-bpc157-briefing` as evidence only (the developer's programme, the phase 2 trial, the list of
conditions); the word "FDA" does not appear in the text.

## about/index (adapted)

**Saved material.** The 23 October version (snapshot `pages-en/about/index.mdx`) said: "This site is for people in
the Netherlands and the rest of Europe" and "In the Netherlands, any advertising for a medicine without a licence is
forbidden" (`nl-gnw-art-84-85-advertising`). The audience line came back, narrowed to the brief's audience
(Nederland in full, België as notes): "Deze site is voor lezers in Nederland. Voor lezers in België zijn er korte
notities over België" (link `/nl/legal/be/`). "What the law says in each of these countries" → "wat de wet zegt, in
Nederland en in de EU".

**Publisher line.** The English "published from the Netherlands, so Dutch law decides what it may say … several of our
readers' countries have similar rules" is replaced, word for word, by the brief's draft (item 1, an **owner
decision**): "We maken deze site in Nederland. De Nederlandse wet verbiedt reclame voor medicijnen zonder
handelsvergunning en publieksreclame voor medicijnen op recept. Ook wie niets verkoopt, kan reclame maken: de rechter
kijkt of een tekst een middel aanprijst. Daarom verkopen we niets, linken we naar geen enkele verkoper, noemen we geen
doseringen en prijzen we geen middel aan. We beschrijven wat onderzoek laat zien, met de risico's en met wat niemand
weet." Cited to `nl-gnw-art-84-85-advertising` (after the second sentence) and
`nl-rvs-2026-1072-publieksreclame-website` (after the third), as the brief says. Checked against research/nl/nl-law.md
facts 12 and 17a and its fact-check (§4 conflict 1): art. 84(1) bans all advertising for a medicine without a
handelsvergunning, art. 85 under a public advertising for prescription medicines; the Raad van State (25 February
2026, final) fined a non-commercial information website for "wervende bewoordingen". The line no longer says that
the absence of commerce is what makes the content legal. The term "handelsvergunning" is not explained in the
sentence itself (the glossary tooltip `marketing-authorisation` explains it): left as the owner's draft.

**Dropped citations** (all four supported only the UK, Canadian and Australian advertising rules, the English
readers' frame; brief "What leaves"):

| Cite id | Why it went | What replaced it |
|---|---|---|
| `uk-hmr-2012-reg-279` | UK advertising rule (readers' countries) | `nl-rvs-2026-1072-publieksreclame-website` (brief item 1) |
| `ca-food-and-drug-regulations` | Canadian advertising rule | same |
| `au-tg-act-advertising` | Australian advertising rule | same |
| `au-tg-regs-reg-7-advertising-prescribed-goods` | Australian advertising rule | same |

**Added:** one sentence in "Wie de pagina’s controleert": "Ook een medisch vertaler heeft de Nederlandse tekst nog
niet gecontroleerd." True (`translation.review: pending`; STYLE-NL §5.2, translation pending). `nav_title` "Over deze
site" (STYLE-NL §2.1). The fold title "Wat we nooit doen, en waarom" and the section map are translations.

## about/corrections (translated)

**Saved material.** Nothing was cut from this page (MANIFEST-about-history-en.md); the snapshot differs only in the
retired `summary`, the date and the log's Lead.

**The log on the Dutch site.** `<CorrectionsLog />` lists only entries whose `locales` include `nl` (or `*`). Both
entries in `src/data/corrections.yaml` (`v1-publication`, `tesamorelin-approval-answer`) are `locales: [en]`, so the
Dutch log shows the empty state (`pages.corrections.empty`: "Nog geen correcties."). The Lead says so: "Nog niets op
de Nederlandse pagina's. Het overzicht begint op de dag dat de Nederlandse site online gaat." (English: "One
clarification so far. The log starts on 23 October 2026, the day the site went public."). This stays true after
publication, when the Dutch publication entry appears (a publication is not a correction). Two sentences added under
the log: "Hier staan alleen de correcties van de Nederlandse pagina's. De Engelse site heeft een eigen overzicht."
The description says "alle correcties van de Nederlandse pagina’s" instead of "since the site went public".

The kinds in the first table use the UI strings exactly (`pages.corrections.kinds`: Publicatie, Inhoudelijke
correctie, Verduidelijking, Wijziging in de wettelijke status, Kleine correctie). No citation on this page (none on
English either).

## UNRESOLVED points and how the pages handle them

- **Is the Rechtbank Amsterdam judgment of 10 April 2026 under appeal?** (nl-law 5.15, media only.) The about page
  does not depend on it: it cites only the Raad van State ruling of 25 February 2026, which is final.
- **Do the KOAG/KAG and CGR codes apply to a non-commercial publisher?** (nl-law 5.12.) Not mentioned.
- **The IGJ's published fine of 28 September 2026 on a media company** (nl-law 5.16; names a company): not used.
- Nothing else from research/nl/ touches these pages (no status, route, help or insurance fact on them).

## Open questions for the reviewers

1. **Legal (owner decision, nl-law §6.2 and §6.8):** is the B1 summary "Ook wie niets verkoopt, kan reclame maken: de
   rechter kijkt of een tekst een middel aanprijst" a fair reading of ECLI:NL:RVS:2026:1072 (para. 6.3: "het in
   wervende bewoordingen benadrukken van gestelde positieve eigenschappen") and of the IGJ page? Should the line also
   name the SmPC test for authorised medicines (Rb Amsterdam, para. 10.1), or is that for the editorial-policy page?
2. **Legal:** the Croatian-lab page names two companies as the affiliation of study authors (PLIVA, the developer;
   Parke-Davis, the lab of the 1995 rat study), as English does. CONTENT-GUIDE §11 bars only sources whose title or
   URL names a company; please confirm a neutral affiliation in a study description is fine on a Dutch page.
3. **Medical:** please confirm the added qualifier "vooral in studies bij ratten en muizen" for the group's reported
   effects (change 1 above).
4. **Translator:** "publicaties" for PubMed records (it covers reviews, letters and errata, not only articles); and
   "oorspronkelijke studies" for primary studies.

## Style terms (terms STYLE-NL lacks, and the word used)

| English | Dutch used | Note |
|---|---|---|
| PubMed record | publicatie | includes reviews, letters, errata; "artikel" for a paper |
| primary study / paper | oorspronkelijke studie / oorspronkelijk artikel | against "overzichtsartikel" |
| editorial · erratum (publication types) | redactioneel stuk · correctie (erratum) | |
| misconduct | wetenschappelijk wangedrag | B2 body only; B1: "iets verkeerd doen" |
| bias | vertekening (bias) on first use, then vertekening | glossary: "risico op vertekening", "publicatiebias" |
| landmark (study) · high-profile (paper) | toonaangevend · spraakmakend | "baanbrekend" is banned (§5.6) |
| encouraging … sobering (evidence) | valt mee … valt tegen | no evaluative word next to an unauthorised compound |
| replication | (onafhankelijke) herhaling | glossary `independent-replication` |
| injury model | letselmodel | glossary alias of `animal-model` |
| molecular target | moleculair doelwit | new glossary entry (`nl-history-b.json`) |
| supplier (of reagents or animals) | herkomst, materiaal | never "leverancier" (§5.6, §7) |
| gastroenterology group | groep maag-darm-leverartsen | the Dutch specialty name |
| hamstring injury · ligament | hamstringblessure · gewrichtsband | "band" alone is ambiguous |
| corrections log · log entry | het overzicht van correcties · bericht | |
| typo · broken link · working day | tikfout · een link die niet werkt · werkdag | |
| the next update (of the site) | de volgende versie van de site | avoids "update" and "bijwerking" (side effect) |
| drafts prepared with AI tools | de eerste versies maken we met hulp van AI | |

## For the final sweep (files I do not own)

1. **`src/data/corrections.yaml` and `src/i18n/nl/corrections.json`:** when the owner says yes to publishing the Dutch
   site, add a Dutch publication entry (for example `nl-v1-publication`, kind `publication`, routes `["*"]`,
   `locales: [nl]`, with its Dutch text). Keep `v1-publication` and `tesamorelin-approval-answer` at `locales: [en]`:
   the first says the site went online "in het Engels", the second is about the English page's per-country answer.
   The Dutch Lead on `/nl/about/corrections/` needs no change when that entry is added.
2. **`docs/STYLE-NL.md` §5.2 (publisher line):** it still has the older draft ("De Nederlandse wet bepaalt dus wat we
   mogen schrijven. Die wet verbiedt reclame voor een medicijn zonder handelsvergunning. …"). The brief's item 1
   (evening of 27 October) replaces it; `/nl/about/` uses the brief's text. Align §5.2 so the editorial-policy and
   funding writers use the same line.
3. **`docs/CONTENT-GUIDE.md` §1** ("The absence of commerce is what makes the content legal"): owner decision
   (nl-law §6.2); not edited here.
4. **Validator warnings that clear by themselves:** "related … does not exist (yet) in nl" for `about/editorial-policy`,
   `about/funding`, `the-case-for-reform`, `legal/whats-changing` and `evidence/evidence-grading` (other groups' pages).
5. **Glossary:** `molecular-target` ("moleculair doelwit") is new in `src/i18n/nl/glossary/nl-history-b.json`; there is
   no English entry with that id (none needed for English).
6. **Heroes and captions:** `history/the-croatian-lab` (`zagreb-medical-school`), `about` (`nlm-main-reading-room`)
   and `about/corrections` (`errata-1793`) already have Dutch alt text and captions in `src/i18n/nl/media.json`;
   nothing to do.

## Check (independent, 27 October 2026)

Independent fact-check and edit of the three pages, the glossary file and these notes. Read first: the brief (with
"Added after step 1"), STYLE-NL, CONTENT-GUIDE §1, §1a, §2, §4.1, §9, §11–13, research/nl/nl-law.md (facts 11–17a, §4
conflict 1, §5, §6 and its Fact-check section), MANIFEST.md and MANIFEST-about-history-en.md, the 23 October snapshot of
`about/index`. Nothing committed, no build run, no English file and no shared file edited, no host added to the allowlist.

**What was checked**

- **Science parity** (`history/the-croatian-lab`), by script and by reading line against line: all 25 cite ids with the
  same counts (8 × `fda-pcac-2026-bpc157-briefing`, 3 × `chang-2011-tendon-fibroblasts`, `he-2022-pharmacokinetics`,
  `hsieh-2020-src-cav1-enos` and so on), the same 5 claim levels (3 `in-vitro`, 2 `animal`) on the same assertions, 6
  `KeyNumber`s with the same sources and values, 4 diagram ids, 1 `Compare`, 10 folds, 6 `Lead`s, the callout and
  `EvidenceGrade`, and every number (235, 175, 74%, 85/96, 89%, about 140/160, 85%, 177, 140/4/19/4/10, 17, about 7 labs,
  5 + 5, 525, 2%, 16 reviews, 1 in 7, a third, 6/53, 50, 85%, 12 men, 32 rats in 4 groups, 8, 4 tendons, 53 patients,
  3 + 1 reports, 3 dental patients, 1995, 1998, 2005, 2016, 2024–2026, phase 2, February 2027). No study, caveat or
  figure is missing.
- **`about/index` and `about/corrections`:** same components, diagram ids and `##` order as English. The four dropped
  cites are UK/CA/AU framing only (listed above); `nl-gnw-art-84-85-advertising` stays, and
  `nl-rvs-2026-1072-publieksreclame-website` was added as the brief asks.
- **Dutch legal facts:** the publisher line is the brief's draft word for word, in the same words as on
  `/nl/about/editorial-policy/` and `/nl/legal/nl/`. Checked against nl-law.md fact 12 (art. 84(1) bans all advertising
  for a medicine without a handelsvergunning; art. 85 under a bans public advertising for prescription medicines), fact
  17a and §4 conflict 1 as corrected by the Fact-check (Raad van State 25 February 2026, final: no commercial aim does
  not stop a text from being advertising; "wervende bewoordingen" decide), and the two source entries' notes. The page
  rests on no UNRESOLVED point (5.12, 5.15, 5.16 not used).
- **Other facts on the pages:** NCT07437547 re-read on the ClinicalTrials.gov API v2 today: RECRUITING, phase 2,
  randomised, start 2 February 2026, primary completion 14 February 2027 (estimated), so "zoekt nu deelnemers; de
  uitkomsten worden na februari 2027 verwacht" holds. `<CorrectionsLog />` (src/components/mdx/CorrectionsLog.astro)
  shows only entries whose `locales` include `nl` or `*`; both entries in `src/data/corrections.yaml` are `[en]`, so the
  Dutch log is empty ("Nog geen correcties.") and the Lead ("Nog niets op de Nederlandse pagina's") is true; the kind
  names in the first table match `pages.corrections.kinds` exactly. Every link target exists as a Dutch file
  (`compounds/nl/bpc-157`, `evidence/evidence-grading`, `about/*`, `the-case-for-reform`, `start-here`, `legal/be`); no
  `/en/` link, no country page of the English site, no anchor link. No page links an anchor on these three pages, so
  the changed heading and fold titles break nothing.
- **No new sources** (no `nl-history-b.yaml`). Glossary: `molecular-target` is unique; its `see_also` ids `receptor`
  (basics.json) and `enzyme` (safety-b.json) exist; category valid.
- **Rules:** no help, reporting, insurance or emergency line of another country; no "u"; no word of STYLE-NL §5.6; no
  commerce word in a title, heading, Lead question, fold title, figure title, label or link text; no dose, schedule or
  seller hint. The residue scanner was sanity-tested on `about/corrections` (a planted "MedWatch" and "local emergency
  number" were caught as errors, then removed; the file was restored from a copy).

**Changes made**

| Page | Before | After | Why | Source |
|---|---|---|---|---|
| the-croatian-lab | "Publicatiebias alleen verklaarde ongeveer een derde van het schijnbare voordeel." | "En publicatiebias alleen zou volgens hen ongeveer een derde van het schijnbare voordeel verklaren." | English "It estimated … and that publication bias alone accounted for roughly a third" is an estimate; the Dutch stated it as fact | English page; `sena-2010-publication-bias` |
| the-croatian-lab | "… als een grote hoeveelheid dieronderzoek **nooit** onafhankelijk is herhaald" | "… **niet** onafhankelijk is herhaald" | "has not been independently repeated": "nooit" overstated it | English page |
| the-croatian-lab | "Ook dat is waardevol om te weten." | "Dat is net zo waardevol om te weten." | English "just as valuable": the Dutch lost the comparison | English page |
| the-croatian-lab | "Of ze wijst op een vaste onderzoeksmethode die in elk model positieve resultaten geeft." | "… die vaak positieve resultaten geeft, in welk model ook." | English "tends to produce positive results in any model": the Dutch made it absolute | English page |
| the-croatian-lab | "De groep meldt, vooral in studies bij ratten en muizen, gunstige effecten van BPC-157 bij ongewoon veel aandoeningen, van maagzweren …" | "De groep meldt gunstige effecten van BPC-157 bij ongewoon veel aandoeningen: van maagzweren … Die resultaten komen vooral uit studies bij ratten en muizen." | Same qualifier (advertising test kept), but the phrase between verb and object was a tangconstructie (STYLE-NL §1 rule 2); own sentence now | the page's own count (the group's 140 records "bijna allemaal studies naar letsel bij ratten en muizen"); `fda-pcac-2026-bpc157-briefing` |
| the-croatian-lab | "Die breedte kun je …" (after a sentence that starts "Die resultaten") | "Zo'n breedte kun je …" | repetition | — |
| the-croatian-lab | "Dat ligt ruim boven de grens van 70% die onze beoordeling gebruikt voor "Eén groep overheerst"." | "Dat ligt ruim boven de grens van 70%. Boven die grens krijgt het bewijs in onze beoordeling het label "Eén groep overheerst"." | "onze beoordeling gebruikt" read as "our assessment uses"; the rubric sets a threshold for a label; label as in the UI string | English page; src/i18n/nl/evidence.json (`single-group-dominant`) |
| the-croatian-lab | fold "Herhalen is hoe de wetenschap haar eigen fouten vindt" | "Door herhaling vindt de wetenschap haar eigen fouten" | calque of "Replication is how science …" | STYLE-NL §1 rule 8 |
| the-croatian-lab | fold "Breedte werkt twee kanten op, en …" | "Breedte is op twee manieren te lezen, en …" | calque of "cuts both ways"; the fold's own text says "op twee manieren lezen" | STYLE-NL §1 rule 8 |
| the-croatian-lab | `## Eerlijk over de groep` | `## Eerlijk tegenover de groep` | "being fair to" is "eerlijk tegenover"; "eerlijk over" reads as "honest about" | — |
| about/index | "We schrijven voor hen allemaal, zonder iemand te veroordelen." | "… zonder oordeel." | "veroordelen" (condemn) is stronger than "judging"; STYLE-NL voice: "zonder oordeel" | STYLE-NL §1 |
| about/index | "We zeggen niemand dat die een product moet gebruiken, of juist niet." | "We zeggen niet dat je een product moet gebruiken, en ook niet dat je het moet laten." | ungrammatical ("iemand zeggen dat die"); B1, addresses "je" | STYLE-NL §1 |
| about/index | "Lees eerst [Begin hier](/nl/start-here/)." | "Zie ook de pagina [Begin hier](/nl/start-here/)." | "Lees eerst Begin hier" reads as a broken sentence and adds "eerst"; English "See start here" | English page |
| about/index | "Bij de titel van elke pagina staat hoe het met de controle staat." | "Bij de titel van elke pagina zie je hoe ver de controle is." | "staat … staat" | — |
| about/corrections | "We veranderen een pagina **nooit** stilletjes als de wijziging ertoe doet." | "… **niet** stilletjes …" | English "We do not change a page quietly": no promise beyond the English | English page |
| about/corrections | "… als die bron moeilijk te **vinden** is." | "… moeilijk te **krijgen** is." | English "hard to get" (paywalled, on request), not "hard to find" | English page |
| glossary nl-history-b | definition "… wat een stof doet, en bij welke dosis." | "… wat een stof doet." | STYLE-NL §6: no doses in glossary definitions; a tooltip reaches every page that uses the term | STYLE-NL §6 |

Writer's "Wording changes" item 1 above is superseded by the fifth row of this table (same qualifier, own sentence).

**Validation after the changes:** `validate-content.ts --only nl/history/the-croatian-lab`, `--only pages/nl/about/`
and `--only nl-history-b`: 0 errors, 0 warnings (the "related … does not exist (yet)" warnings the writer listed are
gone: the other groups' pages now exist). `check-locale-residue.ts --only <same> --details`: 0 error, 0 frame, 0 warn
hits.

**Remaining concerns for the reviewer**

1. **Owner decision (legal):** the publisher line is the brief's draft; "handelsvergunning" is not explained in the
   sentence on a B1 page (only the glossary tooltip `marketing-authorisation` explains it). Changing the owner's draft on
   one page only would split it from `/nl/about/editorial-policy/` and `/nl/legal/nl/`; if the owner wants "(goedkeuring
   als medicijn)" added, add it on all three at once.
2. **Legal (writer's open questions 1 and 2 stand):** the B1 summary of ECLI:NL:RVS:2026:1072 para. 6.3; and the
   neutral naming of PLIVA (developer) and Parke-Davis (the 1995 rat study's lab) as study affiliations, kept for parity
   with English. Neither sells a product the page discusses, and no cited source's title or URL names them.
3. **Medical:** "Die resultaten komen vooral uit studies bij ratten en muizen" (qualifier for the advertising test)
   rests on the page's own count and the FDA briefing's list; the developer's human trial (one abstract) is the
   exception, which is why it says "vooral", not "alleen".
4. **When the Dutch site is published:** the corrections Lead ("Het overzicht begint op de dag dat de Nederlandse site
   online gaat") needs a Dutch publication entry in `src/data/corrections.yaml` (final sweep item 1 above). Without it
   the log stays empty after publication: still true, but it gives the reader no start date.
5. **Translator:** "publicaties" for PubMed records, "oorspronkelijke studies", "spraakmakende" for "high-profile" and
   "toonaangevende" for "landmark" (in quotes, as Begley wrote) remain for the medical translator.
