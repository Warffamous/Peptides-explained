# Final sweep, area "legal" (28 October 2026)

Files: `src/content/pages/nl/legal/**`, `src/content/pages/nl/legal-routes.mdx`. No headings renamed, no new
source file, no allowlist change, no English file touched. Compare with `_baseline-step5/` (diff -ru).

## Checked today

- ECLI:NL:RVS:2026:1072 (data.rechtspraak.nl): "Bij besluit van 12 april 2022 heeft de minister ... een bestuurlijke
  boete van € 3.750,00 en een bestuurlijke boete van € 2.625,00 opgelegd"; ruling 25 februari 2026.
- ECLI:NL:RBNNE:2026:1471: "Bij besluit van 15 november 2022 heeft de minister aan [naam 1] een bestuurlijke boete
  opgelegd van € 3.750"; ruling 21 april 2026.
- ECLI:NL:RBAMS:2026:5160: 2 products; para 7.5 one user had "bijwerkingen, zoals misselijkheid, diarree en
  haaruitval"; para 7.7 only off-label use of the diabetes product and "niet (alle) mogelijke bijwerkingen en
  contra-indicaties"; para 7.11 art. 84(2) breached only "voor zover het gaat om" the diabetes product. (The fines
  themselves were imposed on 18 March 2025.)
- dopingautoriteit.nl/dopingcontroles/controles-in-belgie: the ban after refusing a test "geldt vervolgens ook in
  Nederland"; the page does not mention recreational athletes outside a federation.
- Flemish decree art. 42/10 (exclusion from organised sport in the Dutch language area): research/nl/be-notes.md
  fact 33 and the note of `be-flemish-antidoping-decree-consolidated`.
- Wegovy: research/nl/status/semaglutide.yaml (`indications_nl_from_smpc.wegovy`, standard authorisation, renewal
  21 September 2026; Kayshild is the conditional one).

## Changed

- **LF-01, legal/nl** (Callout "Wat we niet konden vinden"): "Wel bevestigden rechters in 2026 boetes voor reclame, aan
  een persoon en aan een organisatie." Cite after the callout now also has `nl-rvs-2026-1072-publieksreclame-website`.
- **LF-02, legal/nl** (InDetail "Drie uitspraken uit 2026 over reclame", Rechtbank Amsterdam): the item's text, word for
  word (2 products; off-label only for the diabetes product; "niet alle bijwerkingen"). Rest of the item and its cite
  unchanged; no brand or publisher named.
- **LF-04, legal/sport-and-doping and legal/be**: the item's text, word for word. On the sport page the decree sentence
  keeps both cites; the new last sentence ("..., schrijft de Dopingautoriteit.") is cited to
  `dopingautoriteit-controles-belgie` right after it.
- **LF-01, legal/whats-changing** (Rechtbank Amsterdam bullet): "Het andere is goedgekeurd voor gewichtsbeheersing
  (afvallen en op gewicht blijven), onder meer bij volwassenen met obesitas, of met overgewicht en een aandoening die
  met het gewicht samenhangt." with `<Cite id="ema-pi-wegovy-nl" />` right after that sentence. One deviation from the
  item's wording: **"onder meer"** added, because the Dutch SmPC indication also covers adolescents from 12 with
  obesity (status file; legal/eu.mdx says so too); without it the sentence reads as adults only. Same pattern as
  the-case-for-reform.mdx ("Dat geldt onder meer voor volwassenen ..."). No other area writes this sentence.
- **LS-01**: "in Rusland als medicijn toegelaten" on legal-routes (step 5 of the FDA vote), whats-changing (step 5)
  and sport-and-doping (Semax, Selank row).
- **LS-23, legal/nl**: "Een besmet product kan organen beschadigen." (no doping tooltip).
- **LS-28**: eu Lead "bij Bijwerkingencentrum Lareb"; legal/nl "De minister van Volksgezondheid, Welzijn en Sport
  (VWS)"; be "het Nationaal Vergiftigingen Informatie Centrum (NVIC)"; whats-changing first table cell "Het Wereld
  Anti-Doping Agentschap (WADA) volgt ze alleen" (the Compare `detail` above it still says "WADA-Dopinglijsten": no
  room for the full name there).
- **LS-41 digits, as listed**: legal-routes "in 4 stappen", "2 peptiden", "binnen 4 jaar"; legal/nl "2 toetsen" (twice),
  "2 medicijnen op recept"; research-use-only "in 3 flacons" (KeyNumber label), InDetail title "Het labonderzoek van 3
  flacons, in detail" (no id, nothing links to it), "3 producten"; be "Dezelfde 2 toetsen"; eu "op 2 manieren".
- **LS-41, same rule, missed by the list** (same files): legal/nl "deze 3 dingen", "2 keer een boete";
  research-use-only "van 3 flacons" (table row, line 123); legal-routes "2 voorwaarden", caption "De 3 stappen".
  Left as words: sentence starts ("Twee uitzonderingen", "Twee rechtszaken", KeyNumber counted "Drie producten"),
  fixed phrases ("Alle drie"), and the bold label "**Zeven besproken, zes aanbevolen.**" (opens with a number; a
  rephrase is a style call, not done here).

## Skipped

- Nothing skipped. whats-changing line 98 ("de minister van VWS") and eu line 233 ("Bijwerkingencentrum Lareb")
  left as they are: the full name comes first on those pages now.

## For the owner / legal reviewer

- The item allowed the legal reviewer to delete both indication sentences in the whats-changing bullet instead. We
  kept them (with "onder meer"). Listed as a decision.

## Checks

- `npx tsx scripts/validate-content.ts --only nl`: 0 errors, 16 warnings, none in the legal area.
- `npx tsx scripts/check-locale-residue.ts --only nl --details`: 0 hits.

## Check (independent, 2026-10-27)

Checker: independent pass over the legal area after the sweep (diff -ru against `_baseline-step5/`). 9 changes
checked (LF-01 nl, LF-02, LF-04 sport + be, LF-01 whats-changing, LS-01, LS-23, LS-28, LS-41).

Re-read today:

- ECLI:NL:RBAMS:2026:5160 (data.rechtspraak.nl): 2 products; off-label finding (7.7, 7.11) and the "niet (alle)
  mogelijke bijwerkingen en contra-indicaties" finding concern the diabetes product only; art. 85(a) for both in the
  newspaper article (7.8, 7.10); fines of 18 March 2025, EUR 28,500 + 19,950 = 48,450, upheld 10 April 2026. The ruling
  does not state the second product's indication, so the whats-changing sentence rests on the SmPC cite. Both page
  texts match.
- ECLI:NL:RVS:2026:1072: fines of 12 April 2022 (EUR 3,750 and 2,625) on an organisation; the Rechtbank Rotterdam had
  annulled them, the Raad van State reversed that on 25 February 2026, so the fines stand. Supports "bevestigden
  rechters in 2026 boetes ... aan een organisatie". RBNNE:2026:1471 (person, fine set at EUR 3,000 for delay only)
  supports "aan een persoon" (source note; the fixer read it today).
- dopingautoriteit.nl/dopingcontroles/controles-in-belgie: fitness-centre controls, refusal "doorgaans" 2 and maybe 4
  years, the ban "geldt vervolgens ook in Nederland". The page speaks of federation members and WADA's rules, not of
  recreational athletes outside a federation, so the narrowing "terwijl je onder de Code valt" is ours and is
  conservative; "de Code" is introduced on the page (line 50). Decree art. 42/10 (Dutch language area) matches
  be-notes fact 33 and the decree's source note.
- igj.nl online-medicijnen: the IGJ writes "verontreinigd". "besmet" follows STYLE-NL §2.6 ("vervuild" is the doping
  term); the meaning is kept.
- ema-pi-wegovy-nl / research/nl/status/semaglutide.yaml: Wegovy 4.1 covers adults (BMI 30+, or 27-30 with a
  weight-related condition) and adolescents from 12; "onder meer" is right and "onder voorwaarden" (wrong: Wegovy is a
  standard authorisation) is gone. ema-pi-ozempic-nl 4.1: adults with type 2 diabetes.

Rules: je, B1, no seller, no dose, no brand or publisher from the ruling quoted; Belgium stays in short notes; first
mentions per STYLE-NL §2.7 now hold on every legal page (also checked CBG, IGJ, NVWA, EMA, FAGG, NHG, CCMO, WADA);
digits per §3 (remaining words are sentence starts, titles that open with the number, "Alle drie", quotes). No
heading changed (heading lines identical to the baseline in all 8 files). The InDetail whose title changed has no
id, and nothing links to it. No English file touched (git status on the three English paths is empty). No new
source file, no allowlist change.

Fixed by the checker:

- legal/whats-changing (Rechtbank Amsterdam bullet): the cite after the two indication sentences is now
  `ema-pi-ozempic-nl,ema-pi-wegovy-nl`, so "Het ene is goedgekeurd voor diabetes type 2" also has its SmPC source
  (the ruling only calls it a diabetes medicine).

Left as is (not wrong, noted):

- legal/nl Rechtbank Amsterdam item: "De artikelen noemden niet alle bijwerkingen ..." follows the sentence about the
  diabetes product, which is what the court found; it could say "van dat medicijn" for clarity. Kept: the item's
  wording.
- legal/sport-and-doping: "kan daar worden uitgesloten ... in het Nederlandse taalgebied van België": "daar" is a
  little redundant; kept (item wording).
- The whats-changing Wegovy sentence leaves out "als aanvulling op een caloriearm dieet en meer lichaamsbeweging"
  from 4.1; it names the product in a court case, not an effect, and legal-routes gives the full line. Legal reviewer
  may want it added.

Checks after the fix:

- `npx tsx scripts/validate-content.ts --only legal`: 0 errors, 0 warnings.
- `npx tsx scripts/validate-content.ts --only nl`: 1 error, 18 warnings, none in the legal area. The error is in
  src/content/compounds/nl/retatrutide.mdx (compounds-a area): `<OrganCards id="retatrutide">` cites
  ema-2026-10-under-evaluation, which the page cites nowhere else. Not this area's file; for the compounds-a checker.
- `npx tsx scripts/check-locale-residue.ts --only nl --details`: 0 hits.
