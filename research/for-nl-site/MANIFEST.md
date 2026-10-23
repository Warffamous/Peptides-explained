# Material for the Dutch site (saved 23 October 2026)

On 23 October 2026 the owner decided that the English site is for readers in the United States, the United
Kingdom, Canada and Australia (with short notes for Ireland and New Zealand), and that all European material
(the Netherlands, the EU, Belgium, Germany) leaves the English site but is kept for the Dutch site.

Everything that was on the English site before the refocus is preserved in three ways:

1. **Git tag `nl-source-2026-10-23`** (commit a8a259d): the complete site as it was, Dutch-framed.
   `git show nl-source-2026-10-23:src/content/pages/en/legal/nl.mdx` prints any file from it.
2. **`snapshot-2026-10-23/`** (this folder): a plain copy of the English pages, compound pages, English UI strings
   and glossary, and the data files that held Dutch/EU items (heroes, product-check, jurisdictions, timeline,
   tracker, feeds). Nothing here is built, validated or published.
3. **Data that stays in `src/data/`** and is only hidden on English: EU/NL/DE/BE status rows and `regulatory_notes`
   (in the compound data files), the NL/EU/DE/BE entries in `jurisdictions.yaml`, Dutch timeline and tracker items,
   all sources (Dutch law, Lareb, IGJ, CBG, Thuisarts, KNMG …) and the Dutch photos (mapped for `nl` in heroes).

Facts were last checked between 20 and 23 October 2026. **Re-check every legal and status fact before reuse.**

## What was Dutch- or EU-framed, and where it belongs on the Dutch site

| English page (before) | What it holds | Dutch site |
|---|---|---|
| `legal/nl` | Dutch medicines law, IGJ enforcement, fines, NL contacts | Becomes the core Dutch legal page |
| `legal/eu`, `legal/be`, `legal/de` | EU framework; Belgium; Germany | Dutch site (EU, Belgium for Flemish readers); Germany for a future German site |
| `legal-routes` | Six Dutch routes: artsenverklaring, magistrale bereiding, CBG, IGJ, BIG | Dutch treatment-routes page |
| `talking-to-your-doctor` | Dutch patient rights (WGBO, KNMG, NHG, Wet BIG), prescribing routes | Dutch version as is |
| `safety/if-something-goes-wrong` | Written for the Netherlands: huisarts, huisartsenpost, 112, NVIC, Lareb | Dutch version as is |
| `safety/warning-signs` | Help levels huisarts / huisartsenpost / eigen risico; NL reporting first | Dutch help levels |
| `safety/sharps-disposal` | "In the Netherlands": klein chemisch afval, GGD needle-stick steps | Dutch section |
| `safety/monitoring` | "Getting checks in the Netherlands" | Dutch section |
| `safety/index` | "How Dutch harm-reduction services work" | Dutch section |
| `start-here` §3 and FAQ | The law in plain words (NL); Wegovy insurance | Dutch section |
| `legal/sport-and-doping` | Dopingautoriteit, who is tested in NL/BE | Dutch section |
| `legal/index`, `legal/whats-changing`, `legal/research-use-only` | NL/EU contacts; NL/BE/US table; EU changes | Dutch versions |
| `the-case-for-reform` | Owner's signed opinion with Dutch proposals (Lareb, Zorginstituut, drug-checking) | Dutch version (owner's text) |
| `history/how-we-got-here` | Dutch law history (two folds, timeline strip, NL named-patient column) | Dutch history sections |
| `about/index`, `about/editorial-policy`, `about/funding` | Audience "Netherlands and Europe"; BIG-registered reviewer; Dutch law | Dutch versions |
| All 21 compound pages | `regulatory_notes.NL/EU/DE/BE`; "Netherlands and the EU vs United States" tables; "EU, NL, DE, BE, UK" folds; NL routes (artsenverklaring, IGJ); Lareb reporting; Dutch insurance on semaglutide/tirzepatide | Dutch compound pages |
| `src/i18n/en/glossary/*.json` | About 55 NL/BE/DE terms (CBG, IGJ, Lareb, Zorginstituut, WGBO, KNMG, Wet BIG, NHG, huisarts(enpost), GGD, NVIC, SEH, eigen risico, Geneesmiddelenwet, NVWA, CCMO, BIG register …) | Dutch glossary (translate from the snapshot) |
| `src/i18n/en/media.json` | Captions for the Dutch ambulance, Oss huisartsenpost, Ridderzaal, Tweede Kamer photos | Dutch captions |
| `src/i18n/en/{vocab,beginner,compound,product-check}.json` | EU-framed strings ("Authorised medicine (EU)", "Not in the EU", "Status in the EU", NL route texts) | Dutch UI strings |

## Pieces cut during the rewrite

Each content group that removes a section from a page that stays on the English site lists it in a
`MANIFEST-<group>.md` file in this folder (page, section heading, what it said, where the text is in the snapshot).
