# Final sweep, area "learn" (28 October 2026)

Files: `src/content/pages/nl/basics/**`, `src/content/pages/nl/evidence/**`, `src/content/pages/nl/history/**`.
No headings (`##`, `###`) changed (checked with `diff -ru` against `_baseline-step5`). No facts, numbers,
citations or sources changed; every edit is wording, term or number format. No new source file, no
allowlist edit, no English file touched.

## Changed

| Item | File | Change |
|---|---|---|
| LS-13 | evidence/conflicts-of-interest | "Het veiligheidscomité van het Europees Geneesmiddelenbureau (EMA)" → "De veiligheidscommissie (PRAC) van het Europees Geneesmiddelenbureau (EMA)"; later "hetzelfde Europese comité" → "het PRAC" (STYLE §2.7 PRAC row). The item's wording "veiligheidscommissie van het EMA (PRAC)" is adapted because this is the page's only EMA mention, so the full name must stay (§2.7). Cites unchanged (ema-prac-2025-06-naion, ema-prac-2024-04-suicidal-thoughts; research/nl/eu-status.md §C) |
| LS-18a | history/timeline | Diagram cell: "en accelerated approval (VS, 1992)" → "en versnelde goedkeuring (accelerated approval, VS, 1992)"; fold: "en accelerated approval" → "en versnelde goedkeuring" |
| LS-18a | history/how-we-got-here | Fold: "Accelerated approval kan sinds 1992" → "Versnelde goedkeuring (accelerated approval) kan sinds 1992"; "accelerated approval kregen" → "versnelde goedkeuring kregen". Also (not in the item, same rule): the Compare column head "Accelerated approval (VS)" → "Versnelde goedkeuring (VS)", so the page's first mention is Dutch too |
| LS-18b | basics/why-not-a-pill | "een boxed warning (de zwaarste soort waarschuwing)" → "een zware waarschuwing (boxed warning)" |
| LS-24 | evidence/how-to-read-a-study | TL;DR q 1 and 2, TL;DR a 3, Lead questions (2): ‘…’ → “…” |
| LS-24 | history/how-we-got-here | InDetail titles “goed opgezet” and “drug lag”; body ‘uiterste gevallen’ (2×, table cell and fold) → straight "…" (the build converts) |
| LS-33 | history/the-croatian-lab | 'krijgt het bewijs in onze beoordeling het label "Eén groep overheerst"' → 'geven we het bewijs de beoordeling "Eén groep overheerst"' (the item's words; "in onze beoordeling de beoordeling" would repeat, so the sentence says "we"); "de labels van PubMed" → "de publicatietypen van PubMed"; "alleen abstracts over" → "alleen congresabstracts over" (English: "survives only as abstracts"; the page's own line 167 and the-translation-gap say "congresabstract") |
| LS-33 | evidence/the-translation-gap | KeyNumber counted: "gepresenteerd als abstract" → "gepresenteerd als congresabstract" (item wording) |
| extra (LS-33 rule) | evidence/conflicts-of-interest | BPC-157 fold: "BPC-157-records" → "BPC-157-publicaties"; "meer dan de helft van die records was gelabeld als" → "PubMed merkte meer dan de helft van die publicaties aan als" (STYLE §2.3 row "PubMed record": publicatie, never "labels"; same verb as evidence-grading and the-croatian-lab). Numbers (34 van de 52) unchanged |
| LS-39 | history/how-we-got-here | deze 3 vragen; 2 artsen; 5 jaar … 5 jaar; bijna 50 jaar; caption "Hoe 3 landen"; "Van die kinderen waren er 8 dood geboren en 33 overleden" (was "Acht kinderen …": no digit at sentence start, row of numbers); KeyNumber title "ongeveer 8 jaar"; meer dan 3 jaar; ongeveer 8 jaar; een factor 2; 10 bedrijven; Compare detail "De 4 wegen …, vergeleken op 4 vragen"; minstens 2 belangrijke studies; over 10 jaar |
| LS-39 | basics/pharmacokinetics | caption "4 dingen … er 2"; die 2 stappen; op 2 manieren; De 2 moleculen; tussen 2 doses; caption "Na 4 of 5"; 2 GLP-1-achtige ketens; In 2 gerandomiseerde studies; (3 per stof, 4 stoffen); Compare title "Voor 3 niet-goedgekeurde peptiden"; Deze 3 hoorden daarbij; in 2 studies bij mensen; Geen van de 3 |
| LS-39 | history/timeline | caption "volgt 4 draden"; In 2 dagen … 7 peptiden … er 6 (the row "8 stemmen voor, 6 tegen en 1 onthouding" now matches) |
| LS-39 | evidence/conflicts-of-interest | 3 patronen; op 3 manieren; 3 terugkerende problemen; 2 andere zorgen |
| LS-39 | history/the-croatian-lab | InDetail title and body "op 2 manieren"; "die 2 niet uit elkaar houden" |
| LS-39 | basics/why-not-a-pill | caption "langs 5 barrières"; groepjes van 2 of 3 (2×); 2 studies … 4 diabetesstudies; de 5 barrières; In 2 studies bij mensen |
| LS-39 | evidence/the-translation-gap | De 3 getallen; Zonder die 2 |

Digits method (STYLE-NL §3, LS-37's text was not available to this fixer): every count from 2 up gets
digits, also after "de", "die" or "deze", in prose, captions, component attributes and frontmatter. Kept in
words: sentence starts (incl. Lead answers, captions and fold titles that open with the number: "Vier
draden", "Drie keer", "Drie strategieën", "Twee leden", "Zes gezonde jonge mannen", "Vier verschillen nader
bekeken"); headings (frozen: "ADME: vier stappen in het lichaam", "Waarom een lange halfwaardetijd twee
kanten heeft"); fixed phrases ("alle drie (de)", "alle vijf barrières", "Alle drie"); idioms ("twee kanten
op", "in twee richtingen" on timeline and pharmacokinetics, "de jaren tachtig/negentig/vijftig", "honderd
jaar", "tientallen", "duizenden", "enkele duizenden", "een paar duizend"); fractions ("een derde", "een
vijfde"); ordinals ("een tweede lab").

## Skipped

- **LE-01** (Semax "toegelaten" → "goedgekeurd"): wrong. STYLE-NL §2.4 row "registered as a medicine
  (Russia)" and §8 item 6 (final sweep) fix **toegelaten** and forbid "goedgekeurd" (our grade word, which
  the Semax and Selank profiles withhold). why-not-a-pill and timeline already say "toegelaten". The pages
  the item names as models still say "goedgekeurd" and should change the other way: `src/content/compounds/nl/bpc-157.mdx:443`,
  `kpv.mdx:389`, `epitalon.mdx:202`, `mots-c.mdx:202`, `ipamorelin.mdx:463` (compounds areas). Legal pages,
  start-here and the reform page already say "toegelaten".
- **LE-02** (conflicts-of-interest table "In de samenvatting" → "In het abstract"): wrong. STYLE-NL §2.3
  row "abstract (of a paper)" and §8 item 6 fix **samenvatting** for a paper's abstract; bare "abstract"
  is allowed only on how-to-read-a-study. The cell is right as it is.
- **LS-39, evidence-grading (3 candidates)**: kept "vier vragen" / "de vier beoordelingen" / "alle vier"
  in words. It is the page's named concept, two frozen headings say "vier vragen" ("## Waarom vier vragen,
  niet één getal", "## De vier vragen en hun beoordeling"), the UI (`src/i18n/nl/evidence.json`) writes
  "deze vier", and the evidence-a check left them in words on purpose (research/nl-notes/evidence-a.md,
  "Left as written, on purpose"). Changing the title and frontmatter alone would mix "4 vragen" and
  "vier vragen" on one page. Same reason for how-to-read-a-study "De vier beschermingen in detail" (not in
  the item).
- **LS-39, history/index (1 candidate)**: "Honderd jaar" (description, matches the timeline title idiom
  and opens the sentence) and "Eind jaren vijftig" (idiom) both fall under the item's own exceptions.

## Noticed, not changed (for the style owner or a later pass)

- evidence-grading writes "de veiligheidscommissie van het Europees Geneesmiddelenbureau (EMA)" without
  "(PRAC)". Not wrong under §2.7 (no "comité"); add "(PRAC)" only if the style owner wants the abbreviation
  on every page.
- history/index says "Eind jaren vijftig", how-we-got-here says "eind jaren 1950" for the same period.

## Checks

- `npx tsx scripts/validate-content.ts --only nl`: no error or warning in basics, evidence or history. The
  run shows 1 error in `src/content/compounds/nl/retatrutide.mdx` (OrganCards cites
  `ema-2026-10-under-evaluation`), a file of area compounds-a that is being edited in parallel; not caused
  by this area.
- `npx tsx scripts/check-locale-residue.ts --only nl --details`: 0 error/frame hits, 0 warn hits.

## Check (independent, 2026-10-27)

Checked every line of `diff -ru` against `_baseline-step5` for basics, evidence and history (13 files; changes
in 8), against STYLE-NL §2.3, §2.4, §2.7, §2.8, §3, §4.1 and §8 item 6, the English pages and the cited sources.

**Confirmed as applied**

- LS-13: PRAC is right for both claims (source notes of `ema-prac-2025-06-naion`, `ema-prac-2024-04-suicidal-thoughts`
  in semaglutide.yaml; eu-status.md §C 19). "EMA" occurs once on conflicts-of-interest, so the full name stays.
- LS-18: Dutch first, English in brackets; the glossary entry `accelerated-approval` (history.json) has the alias
  "versnelde goedkeuring", so the term still links; `boxed-warning` still matches "(boxed warning)".
- LS-24: frontmatter and attributes use curly doubles, as §4.1 prescribes; body text uses straight quotes, which
  `markdown.smartypants: true` converts (mdx extends the markdown config). No ‘…’ left in the area.
- LS-33: "alleen congresabstracts over" is backed by research/bpc-157.md (phase 1 and phase 2 of PL 14736 exist only
  as conference abstracts; Ruenzi 2005, Gastroenterology 128:A584) and matches the page's own line 167. Bebarta
  2003 counted meeting abstracts, so "congresabstract" is right.
- LS-33-extra and LS-39: every number word became the same value in digits (checked pair by pair); no number,
  date, cite or source changed. Sentence starts, frozen headings, fixed phrases and idioms stay in words.
- Skips LE-01, LE-02 and the two LS-39 parts are right (STYLE §8 item 6 fixes "toegelaten" and "samenvatting";
  "vier vragen" is the named concept in two frozen headings).
- No heading changed, no anchor affected (InDetail ids are explicit, not taken from titles; no Dutch page links
  into these pages with a #fragment). No "u"/"uw", no seller, no dose, no new fact. English files untouched.

**Fixed by this check (same STYLE rows the fixer applied, missed in other places)**

- evidence/evidence-grading: "We haalden de records weg" → "de publicaties weg"; "BPC-157-records" →
  "BPC-157-publicaties"; "of erratum" → "of correctie (erratum)" (§2.3 row "PubMed record · … · erratum"; the
  Croatian-lab page already says "correctie (erratum)").
- history/how-we-got-here: "8 dood geboren" → "8 doodgeboren" (one word, as the Woordenlijst writes it).
- history/how-we-got-here: "het dossier voor onderzoekers (Investigator’s Brochure of IMPD)" (2×) →
  "het onderzoekersdossier (Investigator’s Brochure of IMPD)" (§2.4 row; glossary term `investigators-brochure`;
  same wording as legal-routes, which this page links to).
- history/how-we-got-here KeyNumber (Wong 2019): "41.040 programma’s van bedrijven" → "41.040 ontwikkeltrajecten van
  bedrijven" (§2.3 row "drug-development programme": "ontwikkeltraject", "also in KeyNumbers"; the-translation-gap
  already says so). Number unchanged.

**Left as is, for the style owner**

- how-we-got-here: the first visible mention is the Compare column head "Versnelde goedkeuring (VS)"; the English
  term in brackets follows in the fold. The glossary tooltip covers it.
- the-translation-gap KeyNumber: "gepresenteerd als congresabstract op Amerikaanse congressen" repeats "congres";
  correct, slightly clumsy.
- evidence-grading: "de veiligheidscommissie van het Europees Geneesmiddelenbureau (EMA)" without "(PRAC)" (the page
  never uses the short form, so not wrong).
- what-is-a-peptide: "koortsreacties op vervuilde medicijnen" (endotoxins); §8 says "besmet" for germs. Not changed:
  endotoxins are not germs, and the sentence is not part of this sweep.

**Runs after the fixes:** `validate-content.ts --only nl`: 0 errors, 18 warnings, none in basics, evidence or
history. `check-locale-residue.ts --only nl --details`: 0 error/frame hits, 0 warn hits.
`git status --short` for the English content and strings: empty.
