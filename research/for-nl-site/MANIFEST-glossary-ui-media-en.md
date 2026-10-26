# Manifest: group glossary-ui-media-en (English refocus, 26 October 2026)

What left the English site in this group's files because it was Dutch, Belgian or EU framing. Nothing was deleted from
`src/data/sources/` (every source id below is still registered) and no photo was deleted: the Dutch and European photos
stay in `src/data/media.yaml` and `src/i18n/en/media.json` and are mapped for `nl` in `src/data/heroes.yaml`.

Where the full old text is:

- `research/for-nl-site/i18n-replaced-en.json`, objects `glossary/final-qa.json`, `compound.json` and `pages.json`
  (removed glossary entries copied whole, changed strings with their old value);
- `research/for-nl-site/snapshot-2026-10-23/i18n/en/glossary/final-qa.json`;
- git: `git show nl-source-2026-10-23:src/i18n/en/glossary/final-qa.json`, `git show nl-source-2026-10-23:src/data/media.yaml`,
  `git show nl-source-2026-10-23:src/data/heroes.yaml`.

Re-check every fact before reuse on the Dutch site (the glossary entries were written 20 to 23 October 2026).

## Glossary (`src/i18n/en/glossary/final-qa.json`)

| Entry (before) | What it said | Why it left English |
|---|---|---|
| `rivm` (RIVM; aliases "National Institute for Public Health and the Environment", "Rijksinstituut voor Volksgezondheid en Milieu") | The Dutch national institute for public health and the environment; gives advice on infections, hygiene and vaccines | Dutch body; no English page uses it any more |
| `thuisarts` (Thuisarts; alias "Thuisarts.nl"; see also `nhg`, `huisarts`) | A Dutch website with health advice for patients, written by the Dutch College of General Practitioners (NHG) | Dutch patient website; no English page uses it any more |
| `flemish-decree` (Flemish decree; alias "Flemish anti-doping decree") | A law passed by the Flemish Parliament for the Dutch-speaking part of Belgium, with the force of a national law in Flanders | Belgian law; the term was used on `legal/be` (the Flemish anti-doping rules, which left English with that page; `be-flemish-antidoping-decree-2012`), and the Belgian testing section also left `legal/sport-and-doping` |
| `zeranol`, definition | "Some countries outside the EU give it to cattle to make them grow faster; the EU does not allow this." | EU as the frame; now "Some countries allow farmers to give it to cattle …; others do not." |
| `zilpaterol`, definition | "… The EU does not allow it." | EU as the frame; now "Other countries do not allow it." |
| `emideltide`, definition | "It is not approved as a medicine in the EU, the UK or the US." | EU dropped; now "in the US, the UK, Canada or Australia" (the four countries searched by the fact-check on 26 October 2026: Drugs@FDA via openFDA, MHRA product search, Health Canada DPD API incl. cancelled products, ARTG; see the notes) |
| `plenary-vote`, definition | "A vote by all members of the European Parliament together …" | EU institution as the example; now any parliament |
| `clinicaltrials-gov`, see also | linked `ctis` (the EU Clinical Trials Information System) | EU register; had no glossary entry on English |

The Dutch site will want the Dutch terms that the other groups' manifests list as well (huisarts, huisartsenpost, NHG, …);
`thuisarts` pointed at two of them.

## Photo caption sources (`src/data/media.yaml`)

`media.yaml` is not per locale: a caption's `sources` show on every locale's image credits ("Caption based on") and on
the sources page. These Dutch and EU caption sources were showing on the English sources page and in English image
credits. They are still registered, so the Dutch site can cite them again (it will need per-locale caption sources, or
its own photos).

| Photo (where on English) | Caption | Source id that left the caption | Replaced by |
|---|---|---|---|
| `sharps-bin-yellow` (hero of `safety/sharps-disposal`) | "A sharps container: a hard plastic box for used needles, with a lid that closes tightly." | `apotheek-medicijnafval` (Apotheek.nl/KNMP, "Medicijnafval: niet weggooien, maar inleveren"; `safety-a.yaml`) | nothing: `fda-sharps-containers` already supports the caption |
| `pharmacy-mortar` (hero of `legal-routes`) | "An old mortar from a pharmacy. A pharmacy may still make some medicines itself." | `igj-eigen-bereidingen-apotheek` (IGJ, "Eigen bereidingen apotheek"; `legal-a.yaml`) | `usc-21-353a`, `uk-ma-1968-s10`, `ca-hc-pol-0051-compounding`, `au-tga-compounded-medicines-guidance` |
| `skin-epidermis-dermis-he` (hero of `compounds/ghk-cu`) | "Human skin under the microscope. Cosmetics with GHK-Cu go on the top layer; injections go below the skin." | `eu-regulation-1223-2009-cosmetics` (EU cosmetics regulation, art. 2; `stubs-b.yaml`) | `uk-cosmetic-products-reg-gb-art-2`, `fda-cosmetic-or-drug` |

## Page photos (`src/data/heroes.yaml`)

| Route | Before | Now |
|---|---|---|
| `legal/whats-changing` | `flags-european-parliament-strasbourg` mapped for `nl` only, so the English page had no photo | English: `weather-vane-rooster` (new, CC BY-SA 3.0); `nl` keeps the flags at the European Parliament |

The other Dutch and European heroes had already been mapped for `nl` by the groups that own those pages
(`safety/warning-signs`, `safety/if-something-goes-wrong`, `the-case-for-reform`, `legal/nl`, `legal/be`, `legal/eu`,
`legal/de`). Their alt text and captions stay in `src/i18n/en/media.json` (English fallback for the Dutch preview):
`ambulance-den-haag`, `huisartsenpost-oss`, `ridderzaal-binnenhof`, `belgian-federal-parliament`, `ema-building-amsterdam`,
`reichstag-berlin-west`, `flags-european-parliament-strasbourg`, `tweede-kamer-plenary-hall`.

## UI strings

| File, key | Before | Now | Note |
|---|---|---|---|
| `compound.json`, `regulatoryTable.schedule` | "Schedule {code}" | "{code}" | read "Schedule Prescription Drug List" (Canada) and "Schedule S4" (Australia); not European framing, archived for completeness |

No other NL/EU wording was left in `common.json`, `pages.json`, `compound.json`, `vocab.json`, `beginner.json`,
`organ-cards.json`, `explainers.json` or `infographics.json` (the data merge had already replaced the EU-framed strings,
archived in `i18n-replaced-en.json`). The `EU`, `NL`, `DE` and `BE` labels in `vocab.json` stay: the data keeps those rows,
the components hide them on English, and the Dutch preview uses these labels.
