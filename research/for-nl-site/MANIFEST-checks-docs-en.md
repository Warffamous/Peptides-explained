# Manifest: checks-docs-en (24 October 2026)

This group wrote code and developer documentation only; no site page, UI string, data row or source was cut. What
left the two developer documents (European framing, rewritten for the English refocus) is listed here so the Dutch
site's guide can keep it. Full old text: `git show nl-source-2026-10-23:docs/CONTENT-GUIDE.md` and
`git show nl-source-2026-10-23:README.md`.

| File | Section | What it said | Now |
|---|---|---|---|
| docs/CONTENT-GUIDE.md | §1 The non-negotiables | "Under Dutch law (Geneesmiddelenwet art. 84–85 …) public advertising … is prohibited": Dutch law as the site's frame | Dutch law as the publisher's law; readers' countries have similar rules (Health Canada example) |
| docs/CONTENT-GUIDE.md | §1, emergency number | English "never prints 112"; only 112 checked | every number of the locale's jurisdictions (911, 999, 000, 112, 111, "triple zero"); Dutch "Bel 112" unchanged |
| docs/CONTENT-GUIDE.md | §1, PCAC element 5 | "None of these is an approved medicine in the EU, the UK or the US … changes nothing in the EU or the Netherlands" | "… in the US, the UK, Canada or Australia … changes nothing outside the US" |
| docs/CONTENT-GUIDE.md | §5.1 example | regulatory example began with the EU row | US, UK, CA, AU rows first (from bpc-157.yaml); the EU row kept, marked "a row for the Dutch site" |
| docs/CONTENT-GUIDE.md | §5.2 example | `glance.stop_signs` / `facts` examples cited `ema-epar-wegovy`, `ema-epar-ozempic` | `fda-label-wegovy`, `fda-label-ozempic` |
| docs/CONTENT-GUIDE.md | §5.4 example | `authorised_products` example: Wegovy, jurisdiction EU, EMA EPAR label (`ema-epar-wegovy`); comment "EMA EPAR / CBG / FDA label" | Wegovy (US, FDA label) and Egrifta (CA, discontinued); label hosts per country; EU products kept for the Dutch site |
| docs/CONTENT-GUIDE.md | §6 | dose range "as written in the SmPC" | "as written in the label" (FDA PI, UK SmPC, Canadian monograph, Australian PI) |
| docs/CONTENT-GUIDE.md | §9 | `<JurisdictionCard code="NL" />` as the example | `<JurisdictionCards which="full" />`, `<JurisdictionCard code="US" />` |
| docs/CONTENT-GUIDE.md | §9.1 | fact sheet: "Class, status in the EU and testing in people come from the data file" | "Approved in" (the locale's own jurisdictions) |
| docs/CONTENT-GUIDE.md | §11 example | source example `ema-epar-wegovy` (EMA EPAR) | `fda-label-wegovy` |
| README.md | State line | "English is complete: 43 pages …" (with the European legal pages) | 24 October state: the refocus; 42 pages |
| README.md | What this site is | "Dutch law (Geneesmiddelenwet …) bans advertising …" as the site's frame | the publisher line; audience per locale |
| README.md | How to add a compound, step 3 | "EU, NL, US and WADA required; DE, BE and UK where known" | rows from `config/locales.json` (English: US, UK, CA, AU + WADA; Dutch rows where known) |
| README.md | Commands | `--only legal/nl` example | `--only legal/ca` |
| README.md | Review status | "credentials (for a Dutch doctor, the BIG registration)" | the registration in the reviewer's own country; `big_number` for the Netherlands |

For the Dutch site: the Dutch guide can keep the old §1 wording (Dutch law as the reader's law), the EU product
example and "Bel 112". `config/locale-residue.json` has no entry for `nl`; if the Dutch site must not show
English-only framing, add one there.
