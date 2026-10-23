# Data changes in the English refocus (23 October 2026)

Spec: `research/refocus-spec/data-model.md` (step 1, per-locale jurisdictions). The data in `src/data/` still
holds every European row; each locale shows only its own jurisdictions (`config/locales.json`,
`jurisdictions.full` / `.notes`). These are the changes to facts or their encoding that the Dutch site should
know about.

## Thymosin alpha-1: EU row

- **Before:** `{ jurisdiction: EU, status: authorised }` in `src/data/compounds/thymosin-alpha-1.yaml`. It did
  not mean an EU-wide authorisation: it meant that one member state, **Italy**, has authorised thymalfasin
  nationally (Zadaxin, as an add-on to flu vaccination in people with weak immune systems; EMA orphan page
  EU/3/02/110 and the FDA's 2024 PCAC briefing).
- **Now:** `status: not-authorised` (there is no central EU authorisation: EMA medicines data). The Italian
  authorisation is kept, with its sources, in `national_authorisations` (`IT`, with `IN` and `HK`); the
  compound stays `category: authorised-nationally`.
- **For the Dutch page:** the EU row will read "Niet toegelaten" in the regulatory table. The English page's
  `regulatory_notes.EU` ("Authorised nationally in Italy (Zadaxin …). No EU-wide authorisation, and none in
  the Netherlands.") still says what is true; keep that note (translated) so the Dutch reader learns about
  Italy, and the "approved?" tile names Italy, India and Hong Kong from `national_authorisations`.
- The maker reports more approvals ("Eastern Europe"), which the FDA could not verify: other EU member states
  are possible but unchecked. Re-check before reuse.

## Categories

- `authorised-elsewhere` no longer exists. `authorised` now means "an official product label exists from at
  least one regulator the site tracks" (a row `authorised` or `discontinued`, and a product). PT-141, SS-31 and
  tesamorelin moved from `authorised-elsewhere` to `authorised`. On the Dutch site their "approved?" answer is
  derived from the NL, EU and BE rows (none is authorised, so "only in other countries"), not from the category.

## Encoding changes that affect Dutch pages

- New regulatory status `discontinued` (authorised and marketed, then cancelled for non-safety reasons; with
  `authorised_since` and `since`), and an optional `schedule` on a row.
- Timeline events carry `jurisdictions` (Dutch laws `[NL]`, EU directives and EMA `[EU]`, FDA `[US]`, …;
  `[]` = global); feeds carry an optional `jurisdiction` (EMA news `EU`, FDA feeds `US`). A locale shows an
  item when one of its jurisdictions is the locale's own.
- `jurisdictions.yaml`: `emergency` is a list of numbers (NL `["112"]`); `help` lists help services by kind.
- `heroes.yaml`: the Dutch and European photos (Dutch ambulance, Oss huisartsenpost, Ridderzaal, Tweede Kamer,
  Belgian parliament, EMA building, EU flags in Strasbourg) are mapped for `nl` only; the Reichstag for `de`.
  The English pages that used them have no photo until the content rewrite picks one.

## Timeline and tracker (24 October 2026)

An event or item a locale shows must not name a jurisdiction the locale does not show, so:

- **Approvals split.** Exenatide, liraglutide, afamelanotide, semaglutide (Ozempic), Wegovy and tirzepatide
  (Mounjaro) each had one `[US, EU]` event that gave both dates. Each is now an FDA event `[US]` and an EU event
  `[EU]` with its own date and sources: `exenatide-approval` (US) + `exenatide-approval-eu` (20 November 2006,
  withdrawn 1 January 2026); `liraglutide-approval` (EU, 30 June 2009) + `liraglutide-approval-us`
  (25 January 2010); `afamelanotide-approval` (EU, 22 December 2014) + `afamelanotide-approval-us`
  (8 October 2019); `semaglutide-approval` (US) + `semaglutide-approval-eu` (8 February 2018);
  `wegovy-approval` (US) + `wegovy-approval-eu` (6 January 2022); `tirzepatide-approval` (US) +
  `tirzepatide-approval-eu` (15 September 2022). The Dutch timeline therefore shows the EU events only; the
  old English texts that gave both dates are in `i18n-replaced-en.json` (`timeline.json`).
- **Falsified Ozempic.** `falsified-ozempic-alerts` (EMA 18 October 2023, IGJ, BfArM; its text still mentions
  the MHRA) is `[EU, NL, DE]`; the UK part is the new `falsified-ozempic-uk` `[UK]` (MHRA, 26 October 2023).
- **US items lost their European sentences** (not shown on the Dutch site in any case): tesamorelin-approval
  ("An EU application was withdrawn in 2012, and it is not authorised in the EU"; source `ema-medicines-json`),
  bremelanotide-approval ("The EMA lists no application for it, and it is not authorised in the EU";
  `ema-medicines-json`), fda-pcac-2026-vote and the tracker item us-pcac-2026-peptide-vote ("not an approved
  medicine in the EU", "changes nothing in the EU or the Netherlands"; `ema-medicines-search`,
  `nl-geneesmiddelenwet`). The sources stay in `src/data/sources/`; the old texts are in `i18n-replaced-en.json`.
- **Tracker `local_sources`.** A WADA item is shown everywhere, so a national body's source on it is listed under
  its jurisdiction: `wada-2027-prohibited-list` has `local_sources: { UK: [ukad-2027-list-summary], NL:
  [dopingautoriteit-2027-list-news] }`. The English sentence "The Dutch Doping Authority will publish its Dutch
  translation from 1 January 2027." was removed (in `i18n-replaced-en.json`, `tracker.json`); put it back in the
  Dutch tracker text.
