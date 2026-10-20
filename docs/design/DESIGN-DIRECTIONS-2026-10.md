# Design directions, October 2026

**Date:** 20 October 2026 · **Owner of this document:** design lead · **Status:** proposal for the owner's decision. Nothing in the site has been changed by this document.

**What this answers.** The owner said on 20 October 2026: "I really dislike the colours of design C" and "I like design A since it feels nice and minimalist, but it requires more animations and infographics to feel truly intuitive and informative, because currently there is too much text." This document turns three research reports into decisions:

- a review of 14 public-health and harm-reduction sites (NHS, NHS service manual, Thuisarts, MedlinePlus, GOV.UK, NL Design System and Rijksoverheid, Cleveland Clinic, WHO, Mainline, Jellinek, Talk to FRANK, DRUGSinfo, Apotheek.nl, Steffie);
- a review of 10 visual explainers (Ciechanowski, Our World in Data, The Pudding, Nicky Case, Distill, Kurzgesagt, the FT Visual Storytelling Team, Nature Scitable, Quanta, Museum für Gestaltung Zürich);
- a measured audit of our designs A, B and C (word density, type sizes, boxes, radii, contrast, colour-blind simulation).

**Decisions needed from the owner:** (1) choose one of the three colour options for design C (section 2; I recommend C1); (2) approve the "less text, more visuals" system for design A (section 3); (3) approve the order of the visual backlog (section 5).

**Internal reference only.** Screenshots of other sites and of our previews live in `screenshots/design-research/` (gitignored). They must never be committed or published. The colour-option previews are in `screenshots/design-research/c-options/` (contact sheets `sheet-*.png`).

---

## 1. Key findings

1. **"Too much text" is measurable, and the cure is a word budget, not shorter articles.** Design A's semaglutide page has 12,423 words over 40 screens at 1280 px (about 90 screens on a phone). On BPC-157, 22 of 32 screens have no visual at all, and BPC-157, KPV and TB-500 each have only two non-table visuals (the hero photo and the amino-acid sequence). The median run between large visuals is 244 words. The explainers people find intuitive run far tighter: The Pudding 25–40 words per step, the FT 30–60 per card, Quanta 60, Nicky Case 75, Ciechanowski 80, Our World in Data 65–200. **Target: at most about 80 words between visuals in the beginner layer**, with depth kept but folded away.
2. **Trusted health sites spend colour only on function.** NHS and GOV.UK are nearly monochrome; Thuisarts uses one calm tint, only for its summary card; Talk to FRANK's only warm block is the emergency panel. Design C does the opposite: a full-width teal header on every page, a red "Warning signs" button inside it, and 79 boxes with 2–3 px outlines on one page (design A has 3).
3. **C's colours are stock and fail our own rule.** The teal `#00695C` is Material Design's "Teal 800" and the red `#C62828` is "Red 800". The teal as link text is 6.34:1 on the page and 5.62:1 on its own tint, so it fails our AAA (7:1) rule for body text. Teal and red sit at almost the same lightness (L* 39 and 44), so they vibrate, and for protan and deutan readers they collapse into two olive greys (ΔE 98 drops to 24).
4. **Summary first is universal and works.** Thuisarts ("In het kort" card), NHS (a 26 px lede), WHO ("Key facts"), Apotheek.nl ("Belangrijk om te weten", open by default) and Cleveland Clinic (hero summary) all put a short summary first. We have one, but our stop-now block sits on screen 34 of 39 in design A at 1280 px and on screen 78 of 94 on a phone.
5. **Structured key facts beat paragraphs.** FRANK's "Quick info" answers six fixed questions in about ten seconds, and Jellinek uses a 2×2 grid with links into accordions. The DRUGSinfo "Hoe lang werkt…" duration bar (onset, peak, after-effects) is the most transferable infographic in the whole review.
6. **Good explainers let the picture carry the content and let the text name it.** Examples: the FT's word tokens styled the same in text and graphic; Ciechanowski's "prose as legend"; Nature Scitable's figure titles that state the conclusion; Our World in Data's question heading plus a one-sentence answer. Motion is started by the reader (Distill sliders, Ciechanowski demos, Pudding PREV/NEXT), never ambient. None of the public-health references animate at all.
7. **A is the right base for "clinical and trustworthy".** Ink on paper is 18.5:1, its zero radius is fully consistent and it mirrors cleanly in RTL. Its problems are all fixable within its own language: density; small type (about 60% of words are set below body size and 387 words in letter-spaced uppercase mono); no alert colour; duotone photos; and almost no figures.
8. **B's colour semantics drift, and its light edition has a colour-blind collision.** Amber is meant to mean "hypothesised" but also marks "No", "Not authorised" and "review pending". In the light edition, amber `#8F5300` and alert `#B3261E` are nearly identical for deuteranopes (ΔE 5, computed). The dark default reads as a biotech start-up, the register of the sellers this site warns about.
9. **The safety plumbing is broken, and that comes before any styling.** `src/i18n/en/warning-signs.json` does not exist, so `<WarningSigns />` renders nothing on BPC-157, KPV and TB-500. At audit time `/en/safety/warning-signs/` returned 404, and the header and home summary both link to it.
10. **What not to imitate.** The NHS look (blue band, lozenge logo, Frutiger, care cards with solid headers, "999/111"); the Rijksoverheid ribbon and lintblauw band (legally reserved); GOV.UK (Transport, the Crown, the `#FFDD00` focus set); Thuisarts (lime `#D8FF7C` card with deep green, "In het kort"); FRANK's teal label blocks with magenta; DRUGSinfo/Trimbos mint; Mainline's yellow/black; Apotheek.nl's cyan waves; pharma brand colours and pens; red or green crosses, the Star of Life and the caduceus. Borrow the structures, never the looks.
11. **Research gaps.** Mayo Clinic, NYT and Science.org blocked automated access and were not bypassed. drugs.ie was down. Nature news explainers are paywalled. Pharos's "Checklist toegankelijke informatie" was not read; it is worth reading before the C redesign is final. Substitutes are named in the research reports.

---

## 2. Design C: three colour options

### 2.1 Why C's colours do not work (measured)

- **Stock swatches.** Material Teal 800, Red 800, Red A100 (`#FF8A80`, dark), Grey 50 (`#FAFAFA`), Material dark surface `#121212`, plus a GOV.UK-era focus yellow `#FFBF47`. Together they read as a generic 2016 app or a municipal template.
- **Fully saturated teal over large areas.** `#00695C` is hsl(173, 100%, 21%), chroma 29. It fills the header, the "Authorised medicine" block, the numbered discs, 39 outlined pills, eyebrows, links and section rules, which gives a "hospital scrubs / insurer" mood.
- **Red spent on chrome.** The red header button sits next to equal-lightness teal (only 1.18:1 between them), on every page, so red no longer means "stop now".
- **Too harsh and too flat at once.** There are hard 2–3 px near-black outlines everywhere, while the tints barely separate from the page (mint `#E0F0ED` is 1.13:1 against the background). The page looks like a form.
- **No warmth.** Every neutral has zero hue next to a cold teal.
- **The dark edition glares.** The header becomes a mint `#5FCFC0` slab holding a salmon pill (1.21:1 between them), with 2 px white outlines on near-black.
- **Teal means nothing.** It fills "Yes", "No" and the hazard triangle alike.

### 2.2 What changes in C whichever option is chosen

The colour is only half of the problem. These structural changes go with every option. They are written as CSS in Appendix B and were applied to the live dev server for the previews.

1. **Neutral header.** Surface background, a 1 px hairline, the brand in ink. "Warning signs" becomes an ink-outlined button with a small alert-red triangle and the words; red is no longer a fill in the header. Menus and term popovers use a raised surface with a soft shadow.
2. **Hairlines instead of black boxes.** At-a-glance tiles, the evidence card, cards, FAQ items and explainer frames get a 1 px `--line` border. "Not approved / not tested" tiles keep a 2 px **dashed** border in `--line-strong` (3:1 or more), so that difference never depends on colour.
3. **One radius: 8 px.** Circles are kept only for numbered discs. Pills are kept only for inline claim tags (1 px border).
4. **Pictograms in ink by default.** Colour on a pictogram now means something: `--positive` for "Yes / authorised / do", `--caution` for "partial / unknown / take care". The alert red is never used on an ordinary pictogram. Today teal fills every pictogram, including the hazard triangle.
5. **The summary card is the one calm highlighter.** `--primary-tint` with a 6 px start-edge rule in `--primary`, and no outline.
6. **A real caution role.** The "Important" callout (`callout--warning`) gets `--caution-tint` with an 8 px `--caution` rule, in line with the NHS research finding that a heading beats a "!" icon. Red stays exclusively in `callout--stop`, `warning-signs` and the "too low" zone of the low-blood-sugar explainer.
7. **Solid brand fills keep the same deep colour in both schemes** (`--primary-fill`): the "Authorised medicine" badge, pressed filter buttons and the search button. This removes the pastel slab in dark mode.
8. **Links get their own token** (`--link`), at 7:1 or more on every surface they sit on.
9. **Focus** stays a highlight block (`--focus-ring`, near-black text at 14:1), with a 3 px `--focus` outline offset by 2 px instead of GOV.UK's black underline bar. It is robust on any surface, and it is not the GOV.UK pairing.
10. **Atlas plate discs** get a token (`--plate-mark`) instead of the hard-coded `#00695c` in `media.css`. It always uses the light-scheme brand colour, because plates always sit on white art.
11. **Footer.** No 4 px brand rule and no filled "independence" slab. A quiet card with a brand start-edge instead.
12. **Evidence levels by line pattern first, then a one-hue lightness ramp.** In people: solid line. In animals: dashed. In cells: dotted. Hypothesis: hollow, dotted and grey. Every mark is 3:1 or more against the card, and the word is always printed beside it (see section 6.1).

**New tokens** (all options): `--surface-raised`, `--link`, `--link-hover`, `--primary-fill`, `--primary-fill-ink`, `--positive`, `--positive-tint`, `--caution`, `--caution-tint`, `--level-human`, `--level-animal`, `--level-cells`, `--level-hypothesis`, `--plate-mark`. Existing names in `src/styles/themes/c/tokens.css` keep their roles. `--focus` (previously unused in C) becomes the focus outline.

**How the numbers were made.** `scratchpad/design-lead/contrast.py` computes WCAG 2.x relative-luminance ratios for 62 role pairs per option and scheme (body text needs 7:1 or more, UI and metadata text 4.5:1 or more, non-text marks 3:1 or more). It also computes CIE76 ΔE after the Machado 2009 protan, deutan and tritan simulation. All three options pass all 62 checks in both schemes. The current C fails 10 checks in light and 2 in dark.

### 2.3 Option C1: "Linen & Slate" (recommended)

**Mood.** Calm, clinical and editorial, like a well-printed patient leaflet from a good pharmacy: quiet, adult, unhurried. The page is warm linen with white cards. Ink is slightly warm near-black. The one accent is a greyed slate blue that is never used as a band. Green appears only on "Yes" ticks, ochre only on "take care / unknown", and red only on stop-now content: blue for information, ochre for care, red for stop. Most people already know that order from traffic and pharmacy labels, so it costs no reading.

**Where it comes from.** Thuisarts' warm off-white page and its single summary highlighter; NHS and GOV.UK colour discipline (colour is spent on links and urgency, nothing else); Gerd Arntz's Isotype charts (dark figures and a muted blue-grey on cream paper); the neutral chrome of Our World in Data and Museum für Gestaltung.

**How it avoids imitation.** The slate `#2E4A6B` has chroma 22 and is darker and greyer than NHS blue `#005EB8`. It never appears as a header band, and there is no lozenge. The page is warm linen, not NHS grey-blue `#F0F4F5`. There is no navy band with an emblem, so it is not Rijksoverheid lintblauw `#154273`. Focus is a highlight plus an ink outline, not GOV.UK's yellow and black bar.

**How it stays distinct from A.** A is cool paper, ink blue used as hairlines, a monospace voice and no rounded corners. C1 keeps C's identity: 19 px humanist type, 8 px rounded cards, Isotype pictograms, a tinted summary card, and a lighter, softer slate on a warmer page. The dark edition, "slate night" `#15181C`, is blue-black: neither A's warm `#141412` nor Material's `#121212`.

**What else changes with it.** Everything in 2.2. Pictograms are ink, "Yes" is green, "partial" is ochre. In dark mode, the summary card is a deep slate tint (`#1F2A38`) and the "Authorised medicine" badge keeps the light-scheme slate fill with cream text (7.5:1).

**Risk.** Of the three it is the closest to A in hue. If the owner wants C to look clearly unlike A, choose C2.

#### C1 Linen & Slate: tokens

| Role | Token | Light | Dark |
|---|---|---|---|
| Page background | `--bg` | `#f6f4ef` | `#15181c` |
| Surface (cards) | `--surface` | `#ffffff` | `#1c2026` |
| Quiet panel (review line, captions, table heads) | `--surface-2` | `#eeebe4` | `#232830` |
| Raised surface (menus, popovers) *new* | `--surface-raised` | `#ffffff` | `#2a3039` |
| Text | `--text` | `#1e2124` | `#ece9e3` |
| Secondary text | `--text-2` | `#3f444b` | `#c6c3bc` |
| Muted text (metadata only) | `--text-3` | `#5a5f66` | `#a3a19b` |
| Hairline (decorative) | `--line` | `#dcd8cf` | `#343a43` |
| Control border / strong rule | `--line-strong` | `#86827a` | `#7e858f` |
| Primary (brand accent) | `--primary` | `#2e4a6b` | `#a9bfdc` |
| On primary | `--primary-ink` | `#ffffff` | `#121820` |
| Primary hover / pressed | `--primary-dark` | `#1f3550` | `#cbd8ea` |
| Primary tint (summary card, current step) | `--primary-tint` | `#e6ecf3` | `#1f2a38` |
| Solid brand fill (badges, buttons) *new* | `--primary-fill` | `#2e4a6b` | `#2e4a6b` |
| On solid fill *new* | `--primary-fill-ink` | `#ffffff` | `#ece9e3` |
| Link *new* | `--link` | `#22487b` | `#afc6ea` |
| Link hover *new* | `--link-hover` | `#18355c` | `#d3e0f3` |
| Focus outline | `--focus` | `#1e2124` | `#ece9e3` |
| Focus highlight (text #0b0c0c) | `--focus-ring` | `#ffd866` | `#ffd866` |
| Note / info tint | `--note-tint` | `#efede8` | `#20252c` |
| Positive (yes, do) *new* | `--positive` | `#2e6e57` | `#a3d6b8` |
| Positive tint *new* | `--positive-tint` | `#e6f0e9` | `#1b2b23` |
| Caution mark (take care, unknown) *new* | `--caution` | `#b07a1c` | `#ad7f30` |
| Caution tint *new* | `--caution-tint` | `#fbf0d8` | `#2c2618` |
| ALERT (stop-now only) | `--alert` | `#ab2219` | `#f4796e` |
| On alert | `--alert-ink` | `#ffffff` | `#200807` |
| Alert tint | `--alert-tint` | `#fbeae7` | `#3a1a18` |
| Level: in people (solid line) *new* | `--level-human` | `#2e4a6b` | `#a9bfdc` |
| Level: in animals (dashed) *new* | `--level-animal` | `#55708f` | `#8399b6` |
| Level: in cells (dotted) *new* | `--level-cells` | `#6f849c` | `#6f829b` |
| Level: hypothesis (hollow, dotted) *new* | `--level-hypothesis` | `#78746c` | `#8f8c86` |
| Atlas plate disc (always on white) *new* | `--plate-mark` | `#2e4a6b` | `#2e4a6b` |

#### C1 Linen & Slate: contrast (WCAG 2.x ratio, computed; all 62 checks per scheme pass)

| Pair | Need | Light | Dark |
|---|---|---|---|
| Body text on page (`text` on `bg`) | 7:1 | 14.72 | 14.70 |
| Body text on card (`text` on `surface`) | 7:1 | 16.18 | 13.50 |
| Body text on quiet panel (`text` on `surface-2`) | 7:1 | 13.59 | 12.23 |
| Body text in summary card (`text` on `primary-tint`) | 7:1 | 13.60 | 11.98 |
| Body text in caution callout (`text` on `caution-tint`) | 7:1 | 14.29 | 12.40 |
| Body text in stop-now box (`text` on `alert-tint`) | 7:1 | 13.88 | 12.93 |
| Secondary text on page (`text-2` on `bg`) | 7:1 | 8.93 | 10.12 |
| Secondary text on panel (`text-2` on `surface-2`) | 7:1 | 8.24 | 8.42 |
| Metadata on page (`text-3` on `bg`) | 4.5:1 | 5.85 | 6.89 |
| Metadata on panel (`text-3` on `surface-2`) | 4.5:1 | 5.40 | 5.73 |
| Link on page (`link` on `bg`) | 7:1 | 8.38 | 10.25 |
| Link on panel (`link` on `surface-2`) | 7:1 | 7.73 | 8.53 |
| Link in summary card (`link` on `primary-tint`) | 7:1 | 7.74 | 8.36 |
| Primary as text (eyebrow, numbers) (`primary` on `bg`) | 7:1 | 8.28 | 9.47 |
| Text on primary disc (`primary-ink` on `primary`) | 7:1 | 9.10 | 9.49 |
| Text on solid brand fill (`primary-fill-ink` on `primary-fill`) | 7:1 | 9.10 | 7.51 |
| Positive word / tick (`positive` on `surface`) | 4.5:1 | 6.03 | 10.02 |
| Alert heading on page (`alert` on `bg`) | 4.5:1 | 6.42 | 6.62 |
| Alert heading in stop box (`alert` on `alert-tint`) | 4.5:1 | 6.06 | 5.82 |
| "Call 112" bar text (`alert-ink` on `alert`) | 4.5:1 | 7.06 | 7.10 |
| Text on focus highlight (`#0b0c0c` on `focus-ring`) | 7:1 | 14.24 | 14.24 |
| Focus outline (non-text) (`focus` on `bg`) | 3:1 | 14.72 | 14.70 |
| Control border (non-text) (`line-strong` on `bg`) | 3:1 | 3.48 | 4.78 |
| Caution mark (non-text) (`caution` on `surface`) | 3:1 | 3.72 | 4.56 |
| Faintest evidence mark (non-text) (`level-cells` on `surface`) | 3:1 | 3.85 | 4.16 |
| Hypothesis mark (non-text) (`level-hypothesis` on `surface`) | 3:1 | 4.65 | 4.88 |
| Plate disc on white art (non-text) (`plate-mark` on `#ffffff`) | 3:1 | 9.10 | 9.10 |

Colour-blind separation of the alert red from the other accents (CIE76 ΔE after Machado 2009 simulation; above about 20 reads as clearly different):

| Alert vs | Scheme | Normal | Protan | Deutan | ΔL* |
|---|---|---|---|---|---|
| `--primary` | light | 83 | 50 | 69 | 7 |
| `--primary` | dark | 66 | 40 | 51 | 12 |
| `--positive` | light | 87 | 24 | 40 | 4 |
| `--positive` | dark | 73 | 25 | 28 | 16 |
| `--caution` | light | 46 | 36 | 18 | 18 |
| `--caution` | dark | 42 | 30 | 19 | 9 |

Primary chroma C*: light 22, dark 17 (current C teal: 29 light / 36 dark).

### 2.4 Option C2: "Oat & Plum"

**Mood.** Warm, human and inviting, like a thoughtful independent health magazine or a good GP practice's leaflet rather than an institution. The page is oat with white cards, the ink is plum-black, and the one accent is a deep aubergine plum. It is the most distinctive of the three: plum is rare in health branding (not NHS blue, not pharmacy green, not insurer teal), so it reads as independent at a glance.

**Where it comes from.** Thuisarts' warmth and documentary photography; Apotheek.nl's "a person, not an institution" (the human face, not the cyan waves); Isotype's warm paper; and The Pudding's warm, humane tone, without its dark, art-led mood.

**How it avoids imitation.** The NL Design System site's purple `#803D95` is brighter and pinker; ours is a dark aubergine (L* about 30) on oat. No pharma brand uses plum (Novo Nordisk is blue, Eli Lilly is red). The neutrals stay oat and plum-black, not pink, so it does not drift into a "femtech" pastel look.

**Colour-blind margin.** Plum against the alert red is the safest pair of the three (protan ΔE 51, deutan 63 in light), because plum has a strong blue component that protan and deutan vision keeps.

**What else changes with it.** Everything in 2.2. Keep plum in small, deep areas: text, rules, discs and the authorised badge. Never lighten it into a large pastel fill. The light lilac `#D9B3DC` exists only as dark-mode text and link colour.

**Risk.** Plum overused or lightened reads as cosmetic or women's health. It needs the discipline of 2.2 more than the other two options do.

#### C2 Oat & Plum: tokens

| Role | Token | Light | Dark |
|---|---|---|---|
| Page background | `--bg` | `#f8f5f0` | `#181417` |
| Surface (cards) | `--surface` | `#ffffff` | `#201b1f` |
| Quiet panel (review line, captions, table heads) | `--surface-2` | `#f0ebe3` | `#2a2329` |
| Raised surface (menus, popovers) *new* | `--surface-raised` | `#ffffff` | `#322a31` |
| Text | `--text` | `#231f22` | `#efe9ec` |
| Secondary text | `--text-2` | `#463f44` | `#ccc2c8` |
| Muted text (metadata only) | `--text-3` | `#60585e` | `#a99ea5` |
| Hairline (decorative) | `--line` | `#ded6cc` | `#3b3239` |
| Control border / strong rule | `--line-strong` | `#8a8079` | `#877b84` |
| Primary (brand accent) | `--primary` | `#5a3459` | `#d9b3dc` |
| On primary | `--primary-ink` | `#ffffff` | `#1e1020` |
| Primary hover / pressed | `--primary-dark` | `#41243f` | `#ead2ec` |
| Primary tint (summary card, current step) | `--primary-tint` | `#f2ebf0` | `#2f2131` |
| Solid brand fill (badges, buttons) *new* | `--primary-fill` | `#5a3459` | `#5a3459` |
| On solid fill *new* | `--primary-fill-ink` | `#ffffff` | `#efe9ec` |
| Link *new* | `--link` | `#663067` | `#dfb9e2` |
| Link hover *new* | `--link-hover` | `#45204a` | `#efd7f0` |
| Focus outline | `--focus` | `#231f22` | `#efe9ec` |
| Focus highlight (text #0b0c0c) | `--focus-ring` | `#ffd866` | `#ffd866` |
| Note / info tint | `--note-tint` | `#f0ece6` | `#262025` |
| Positive (yes, do) *new* | `--positive` | `#2e6e57` | `#a3d6b8` |
| Positive tint *new* | `--positive-tint` | `#e5f0ea` | `#1b2a23` |
| Caution mark (take care, unknown) *new* | `--caution` | `#b07a1c` | `#ad7f30` |
| Caution tint *new* | `--caution-tint` | `#faefd7` | `#2d2619` |
| ALERT (stop-now only) | `--alert` | `#b42318` | `#f4796e` |
| On alert | `--alert-ink` | `#ffffff` | `#200807` |
| Alert tint | `--alert-tint` | `#fcebe9` | `#3b1a19` |
| Level: in people (solid line) *new* | `--level-human` | `#5a3459` | `#d9b3dc` |
| Level: in animals (dashed) *new* | `--level-animal` | `#7c5d7b` | `#b293b4` |
| Level: in cells (dotted) *new* | `--level-cells` | `#93788f` | `#957d93` |
| Level: hypothesis (hollow, dotted) *new* | `--level-hypothesis` | `#7a7169` | `#948a8f` |
| Atlas plate disc (always on white) *new* | `--plate-mark` | `#5a3459` | `#5a3459` |

#### C2 Oat & Plum: contrast (WCAG 2.x ratio, computed; all 62 checks per scheme pass)

| Pair | Need | Light | Dark |
|---|---|---|---|
| Body text on page (`text` on `bg`) | 7:1 | 14.96 | 15.23 |
| Body text on card (`text` on `surface`) | 7:1 | 16.27 | 14.17 |
| Body text on quiet panel (`text` on `surface-2`) | 7:1 | 13.71 | 12.79 |
| Body text in summary card (`text` on `primary-tint`) | 7:1 | 13.88 | 12.68 |
| Body text in caution callout (`text` on `caution-tint`) | 7:1 | 14.25 | 12.50 |
| Body text in stop-now box (`text` on `alert-tint`) | 7:1 | 14.10 | 13.01 |
| Secondary text on page (`text-2` on `bg`) | 7:1 | 9.40 | 10.53 |
| Secondary text on panel (`text-2` on `surface-2`) | 7:1 | 8.61 | 8.84 |
| Metadata on page (`text-3` on `bg`) | 4.5:1 | 6.32 | 7.05 |
| Metadata on panel (`text-3` on `surface-2`) | 4.5:1 | 5.79 | 5.92 |
| Link on page (`link` on `bg`) | 7:1 | 8.84 | 10.58 |
| Link on panel (`link` on `surface-2`) | 7:1 | 8.10 | 8.88 |
| Link in summary card (`link` on `primary-tint`) | 7:1 | 8.21 | 8.81 |
| Primary as text (eyebrow, numbers) (`primary` on `bg`) | 7:1 | 9.33 | 9.93 |
| Text on primary disc (`primary-ink` on `primary`) | 7:1 | 10.14 | 9.94 |
| Text on solid brand fill (`primary-fill-ink` on `primary-fill`) | 7:1 | 10.14 | 8.47 |
| Positive word / tick (`positive` on `surface`) | 4.5:1 | 6.03 | 10.39 |
| Alert heading on page (`alert` on `bg`) | 4.5:1 | 6.05 | 6.78 |
| Alert heading in stop box (`alert` on `alert-tint`) | 4.5:1 | 5.70 | 5.79 |
| "Call 112" bar text (`alert-ink` on `alert`) | 4.5:1 | 6.57 | 7.10 |
| Text on focus highlight (`#0b0c0c` on `focus-ring`) | 7:1 | 14.24 | 14.24 |
| Focus outline (non-text) (`focus` on `bg`) | 3:1 | 14.96 | 15.23 |
| Control border (non-text) (`line-strong` on `bg`) | 3:1 | 3.55 | 4.51 |
| Caution mark (non-text) (`caution` on `surface`) | 3:1 | 3.72 | 4.73 |
| Faintest evidence mark (non-text) (`level-cells` on `surface`) | 3:1 | 3.94 | 4.55 |
| Hypothesis mark (non-text) (`level-hypothesis` on `surface`) | 3:1 | 4.78 | 5.08 |
| Plate disc on white art (non-text) (`plate-mark` on `#ffffff`) | 3:1 | 10.14 | 10.14 |

Colour-blind separation of the alert red from the other accents (CIE76 ΔE after Machado 2009 simulation; above about 20 reads as clearly different):

| Alert vs | Scheme | Normal | Protan | Deutan | ΔL* |
|---|---|---|---|---|---|
| `--primary` | light | 68 | 51 | 63 | 12 |
| `--primary` | dark | 52 | 41 | 48 | 12 |
| `--positive` | light | 90 | 25 | 43 | 2 |
| `--positive` | dark | 73 | 25 | 28 | 16 |
| `--caution` | light | 47 | 33 | 15 | 16 |
| `--caution` | dark | 42 | 30 | 19 | 9 |

Primary chroma C*: light 28, dark 26 (current C teal: 29 light / 36 dark).

### 2.5 Option C3: "Porcelain & Pine" (the conservative repair)

**Mood.** Fresh, botanical and clean: porcelain off-white with a faint green-grey, a deep pine accent, a sage summary tint, and links in a separate deep petrol blue so that green means "brand / yes" and nothing else. This option keeps a green identity but fixes everything measured in 2.1: chroma 18 instead of 29; a darker accent (L* about 32) instead of a mid-tone one; no slabs; no red in the header; and an alert shifted to a vermilion-red `#B8321F` that is ΔL* 11 away from the pine.

**Why include it.** It is a control. If the owner prefers C3 to today's C, the problem was the execution (saturation, slabs, red chrome, outlines), not the hue. If not, it was the hue, and C1 or C2 is the answer.

**Where it comes from.** Thuisarts' green headings (but neither its lime nor its deep-forest pairing); porcelain clinical surfaces; botanical calm.

**How it avoids imitation.** There is no lime highlight and no deep-green footer slab; together those would read as a Thuisarts clone to Dutch readers. There is no green cross (the NL/EU pharmacy sign) and no mint (DRUGSinfo/Trimbos).

**Risk.** Green plus red is the classic colour-blind pair. Here it is managed by lightness and shape (alert vs brand: protan ΔE 28 in light and 25 in dark), but it is the weakest margin of the three. A deep green also edges towards Thuisarts.

#### C3 Porcelain & Pine: tokens

| Role | Token | Light | Dark |
|---|---|---|---|
| Page background | `--bg` | `#f5f6f3` | `#131715` |
| Surface (cards) | `--surface` | `#ffffff` | `#1a1f1d` |
| Quiet panel (review line, captions, table heads) | `--surface-2` | `#eaede8` | `#222826` |
| Raised surface (menus, popovers) *new* | `--surface-raised` | `#ffffff` | `#29302d` |
| Text | `--text` | `#1b211f` | `#e8ece9` |
| Secondary text | `--text-2` | `#3b4441` | `#c0c8c3` |
| Muted text (metadata only) | `--text-3` | `#56605c` | `#9da7a1` |
| Hairline (decorative) | `--line` | `#d3d9d4` | `#323a36` |
| Control border / strong rule | `--line-strong` | `#7f8984` | `#7c8781` |
| Primary (brand accent) | `--primary` | `#285146` | `#a6d1bd` |
| On primary | `--primary-ink` | `#ffffff` | `#0f1a16` |
| Primary hover / pressed | `--primary-dark` | `#1c3d33` | `#c3e0d2` |
| Primary tint (summary card, current step) | `--primary-tint` | `#e3ede7` | `#1c2b25` |
| Solid brand fill (badges, buttons) *new* | `--primary-fill` | `#285146` | `#285146` |
| On solid fill *new* | `--primary-fill-ink` | `#ffffff` | `#e8ece9` |
| Link *new* | `--link` | `#1b4f6b` | `#9fc8df` |
| Link hover *new* | `--link-hover` | `#133a50` | `#c8e0ee` |
| Focus outline | `--focus` | `#1b211f` | `#e8ece9` |
| Focus highlight (text #0b0c0c) | `--focus-ring` | `#ffd866` | `#ffd866` |
| Note / info tint | `--note-tint` | `#eceff1` | `#1e2426` |
| Positive (yes, do) *new* | `--positive` | `#285146` | `#a6d1bd` |
| Positive tint *new* | `--positive-tint` | `#e3ede7` | `#1c2b25` |
| Caution mark (take care, unknown) *new* | `--caution` | `#b07a1c` | `#ad7f30` |
| Caution tint *new* | `--caution-tint` | `#faf0da` | `#2b2619` |
| ALERT (stop-now only) | `--alert` | `#b8321f` | `#f4796e` |
| On alert | `--alert-ink` | `#ffffff` | `#200807` |
| Alert tint | `--alert-tint` | `#fcecea` | `#3a1a18` |
| Level: in people (solid line) *new* | `--level-human` | `#285146` | `#a6d1bd` |
| Level: in animals (dashed) *new* | `--level-animal` | `#53776b` | `#7fa797` |
| Level: in cells (dotted) *new* | `--level-cells` | `#6d877e` | `#6b8a7e` |
| Level: hypothesis (hollow, dotted) *new* | `--level-hypothesis` | `#737a76` | `#8a928e` |
| Atlas plate disc (always on white) *new* | `--plate-mark` | `#285146` | `#285146` |

#### C3 Porcelain & Pine: contrast (WCAG 2.x ratio, computed; all 62 checks per scheme pass)

| Pair | Need | Light | Dark |
|---|---|---|---|
| Body text on page (`text` on `bg`) | 7:1 | 15.08 | 15.16 |
| Body text on card (`text` on `surface`) | 7:1 | 16.36 | 14.00 |
| Body text on quiet panel (`text` on `surface-2`) | 7:1 | 13.85 | 12.58 |
| Body text in summary card (`text` on `primary-tint`) | 7:1 | 13.66 | 12.38 |
| Body text in caution callout (`text` on `caution-tint`) | 7:1 | 14.44 | 12.63 |
| Body text in stop-now box (`text` on `alert-tint`) | 7:1 | 14.27 | 13.13 |
| Secondary text on page (`text-2` on `bg`) | 7:1 | 9.27 | 10.59 |
| Secondary text on panel (`text-2` on `surface-2`) | 7:1 | 8.51 | 8.78 |
| Metadata on page (`text-3` on `bg`) | 4.5:1 | 6.01 | 7.30 |
| Metadata on panel (`text-3` on `surface-2`) | 4.5:1 | 5.52 | 6.06 |
| Link on page (`link` on `bg`) | 7:1 | 8.14 | 10.16 |
| Link on panel (`link` on `surface-2`) | 7:1 | 7.48 | 8.43 |
| Link in summary card (`link` on `primary-tint`) | 7:1 | 7.38 | 8.30 |
| Primary as text (eyebrow, numbers) (`primary` on `bg`) | 7:1 | 8.22 | 10.75 |
| Text on primary disc (`primary-ink` on `primary`) | 7:1 | 8.91 | 10.58 |
| Text on solid brand fill (`primary-fill-ink` on `primary-fill`) | 7:1 | 8.91 | 7.47 |
| Positive word / tick (`positive` on `surface`) | 4.5:1 | 8.91 | 9.92 |
| Alert heading on page (`alert` on `bg`) | 4.5:1 | 5.51 | 6.72 |
| Alert heading in stop box (`alert` on `alert-tint`) | 4.5:1 | 5.21 | 5.82 |
| "Call 112" bar text (`alert-ink` on `alert`) | 4.5:1 | 5.98 | 7.10 |
| Text on focus highlight (`#0b0c0c` on `focus-ring`) | 7:1 | 14.24 | 14.24 |
| Focus outline (non-text) (`focus` on `bg`) | 3:1 | 15.08 | 15.16 |
| Control border (non-text) (`line-strong` on `bg`) | 3:1 | 3.33 | 4.86 |
| Caution mark (non-text) (`caution` on `surface`) | 3:1 | 3.72 | 4.66 |
| Faintest evidence mark (non-text) (`level-cells` on `surface`) | 3:1 | 3.88 | 4.42 |
| Hypothesis mark (non-text) (`level-hypothesis` on `surface`) | 3:1 | 4.40 | 5.23 |
| Plate disc on white art (non-text) (`plate-mark` on `#ffffff`) | 3:1 | 8.91 | 8.91 |

Colour-blind separation of the alert red from the other accents (CIE76 ΔE after Machado 2009 simulation; above about 20 reads as clearly different):

| Alert vs | Scheme | Normal | Protan | Deutan | ΔL* |
|---|---|---|---|---|---|
| `--primary` | light | 82 | 28 | 49 | 11 |
| `--primary` | dark | 70 | 25 | 31 | 15 |
| `--positive` | light | 82 | 28 | 49 | 11 |
| `--positive` | dark | 70 | 25 | 31 | 15 |
| `--caution` | light | 43 | 31 | 14 | 13 |
| `--caution` | dark | 42 | 30 | 19 | 9 |

Primary chroma C*: light 18, dark 19 (current C teal: 29 light / 36 dark).

### 2.6 Comparison and recommendation

| | C1 Linen & Slate | C2 Oat & Plum | C3 Porcelain & Pine |
|---|---|---|---|
| Mood | calm, clinical, editorial | warm, human, distinctive | fresh, botanical, familiar |
| Feels like | a good pharmacy leaflet | an independent health magazine | a repaired version of today's C |
| Distinct from A | medium (both blue; C1 is warmer, rounder, pictorial) | high | high |
| Imitation risk | low (no band, no lozenge) | lowest | medium (Thuisarts green) |
| Alert vs brand colour, protan / deutan ΔE (light) | 50 / 69 | 51 / 63 | 28 / 49 |
| Owner's complaint addressed | fully | fully | only if the hue was not the issue |

**Recommendation: C1 "Linen & Slate".** It gives the calmest, most clinical result. It has the most room between brand and alert for colour-blind readers, it is closest to the public-health references the research found most trustworthy (Thuisarts, NHS, GOV.UK), and its colour roles (blue for information, ochre for care, red for stop) teach themselves. **Choose C2** if the owner wants C to feel warmer and look unmistakably different from A. Use C3 only as the control described above.

The previews, with every token and the structural CSS injected into the live dev server, are at `screenshots/design-research/c-options/`. Each is shown next to today's C: `sheet-sema-1280-light.png`, `sheet-sema-1280-dark.png`, `sheet-sema-1280-light-s1.png` (summary and At a glance), `sheet-sema-1280-light-stop.png` (stop-now box), `sheet-sema-360-light.png`, `sheet-sema-360-dark.png`, `sheet-home-1280-light.png`, `sheet-bpc-1280-light.png`.

---

## 3. Design A: keep the monograph, show more than you tell

The owner likes A because it is minimalist. Everything below keeps A's grammar: paper and ink, one accent, hairlines, Swiss grid, monospace for measured quantities, no shadows, no gradients and no rounded corners. What changes is how much is drawn instead of written, and how much of the depth is folded away.

### 3.1 Refinements (small, token-level)

| What | Now | Proposed | Why |
|---|---|---|---|
| Body size `--s-0` | 17 px | **18 px**, line-height 1.6 | NHS, Cleveland and DRUGSinfo use 18–19 px; 60% of A's words are smaller than body text today |
| Lede (new `--s-lede`) | none | **22 px (360) to 24 px (desktop)**, one sentence under the H1: what it is and what to do | the NHS 26 px lede acts as the summary without a box |
| Small text `--s--1` | 14.2 px | **15 px** (tables, sidenotes, captions) | 4,901 words on semaglutide are at 14 px |
| Smallest words `--s--2` | 11.8 px (8–11 px in SVG labels) | **13 px floor for any word; 14 px for diagram labels**; numerals in diagrams 12 px or more | the ladder labels (10 px), claim badges (11 px) and explainer labels (10 px) fail at 200% zoom in practice |
| Uppercase letter-spaced mono | 387 words per page | **only** eyebrows, "Fig. n" and data-card field names; fewer than 60 words per page; table headers and meta lines in sentence case Inter 600 | reads as a cold technical document |
| Alert colour (new) | none | light `--alert #9B1C14` (8.0:1 on paper, 7.2:1 on `--alert-tint #FBEEEC`, white on it 8.2:1); dark `--alert #FF8A7A` (8.1:1 on `#141412`, 7.5:1 on `--alert-tint #2A1714`) | non-negotiable; today the stop box is a 3 px double ink rule with a 12 px mono title, weaker than an H3 |
| Stop-now block | double ink rule, end of page | 4 px alert start-edge rule, alert tint, 22 px Inter 700 title in alert colour with triangle glyph and the words; a 3-line **"Stop and get help" strip directly after At a glance**, linking to the full list | the stop box sits on screen 34 of 39 today, 78 of 94 on phones |
| Header "Warning signs" | ink text | ink text plus a 0.9 em alert-red triangle glyph | a small marker, not a button |
| Evidence ladder, empty steps | fills `#B9B9B1` / `#E4E4DD` (1.9:1 and 1.25:1) | paper fill with a 1 px `--ink-3` outline (6.6:1); filled steps in accent; "not known" steps hatched 45° in `--ink-3`; labels 13 px sentence case outside the bar | weak non-text contrast; 3-line 10 px labels |
| Figure strokes (new `--fig-line`) | n/a | context strokes at least `#767672` (4.5:1); structure at 1.5 px ink; "the drug / the answer" at 2.5 px accent; never paler than 3:1 for a line that carries meaning | Tufte restraint without faint lines |
| Photos | navy duotone (light), sepia-grey (dark) | **natural colour**, `saturate(0.9)`, hairline frame; archival images may be true greyscale; dark: `brightness(0.9)` | the duotone feels cold, and the Gila monster is hard to read |
| Body map and atlas plates | about 210 px wide, pale grey, X-ray in dark | **at least 50% of the column** (full width at 360), natural colour, on a paper panel; dark: dimmed to about 85% on a `#E9E5DC` panel with a hairline, never inverted | the approved infographics are nearly invisible today |
| Hero (desktop) | about 150 px of empty space under the badge | the **fact sheet** (label/value list: Class, How taken, How often, Status in the EU, Evidence level, Half-life) fills the left column beside the photo; a one-line trust line under the H1 | uses the dead space for the most useful facts |
| Home | title + 4-point box + 3 short sections, no photo | a documentary photo, the "pharmacy vs online vial" comparison, compound entry cards (status badge + evidence strip), and situation tiles | "photos on every page" |
| At-a-glance rule styles | solid / dotted / dashed rule above each answer, unexplained | removed; the answer word plus its evidence glyph and word carry it | an unexplained visual element breaks the owner's rule |

The dark edition stays as it is (warm near-black `#141412`, cream ink at 14.8:1) apart from the alert token and the photo and plate changes.

### 3.2 The "less text, more visuals" system for A

#### Five rules

1. **Word budget.** In the beginner layers (summary, at a glance and section openers), at most **80 words of running prose between two visuals**. A visual is a figure, a key-number figure, a comparison table, a photo or an explainer, not a decorative rule.
2. **Question heading, then a one-sentence answer** (Our World in Data). Every H2 is the reader's question; the line under it answers it in plain words. Someone who reads only headings and answers gets the beginner summary. Example: "Does it work?" followed by "Yes for weight: in large trials people lost about 15% of their weight on average."
3. **The figure title is the takeaway** (Nature Scitable, Distill). Every figure caption opens with one bold sentence that states the finding, then one line of detail, then a monospace data card.
4. **Every mark has a word.** Labels sit on or beside the thing, with hairline leaders and verbs on arrows. A line-style key is printed once in words. There are no legend boxes and no unexplained glyphs. This satisfies the owner's rule and the GOV.UK and NLDS guidance.
5. **Text stays text.** All labels are HTML or SVG text in the page language, so they translate, mirror in RTL, zoom crisply and are read by screen readers (the FT and OWID model). AI art is used only for unlabelled pictures with a numbered key in real text (the approved atlas pattern).

#### Figure anatomy in A

```
FIG. 3                                         ← mono 13 px, ink-3
Semaglutide stays in the blood for about a week; natural GLP-1 lasts 1–2 minutes.   ← takeaway, Inter 600 18 px
[ drawing: hairlines, direct labels at 14 px, accent only for the drug ]
Half-life in people, measured after injection under the skin.                      ← one line of detail, 15 px
SOURCE EMA EPAR Wegovy · CHECKED 20 OCT 2026 · EVIDENCE In people · [Show as table] ← data card, mono 13 px
```

The data card is where today's inline "HUMANS, LIMITED" tags go, so they stop interrupting sentences. "Show as table" swaps the figure for its data table: the accessible alternative, the printable version, and Ctrl+F-findable (OWID's Table tab).

#### The visual vocabulary (how each pattern looks in A)

| Pattern | Use it for | How it looks in A | Reference |
|---|---|---|---|
| **Annotated line diagram** | mechanisms, routes, flows (gut → pancreas → brain → stomach; GP → prescription → pharmacy) | 0.75 px ink hairlines for context, 1.5 px for structure, 2.5 px accent for the drug; direct 14 px labels with 0.5 px leaders; verbs in italic on arrows ("binds", "slows", "cleared by kidneys"); evidence by line style: solid = people, dashed = animals, dotted = cells, hollow dotted with "?" = hypothesis | Distill hero, Nicky Case's SIR diagram, Cleveland's labelled anatomy |
| **Step-through diagram (stepper)** | anything that happens in order: "What happens after an injection", "How a vial is made", "From lab to approved medicine" | 3–6 steps of at most 40 words each, one diagram state per step; "Step 2 of 5" in mono; Previous and Next buttons plus arrow keys; `aria-live="polite"`; all steps in the DOM; without JS and in print it becomes a numbered strip of small frames | The Pudding (buttons, counter), the FT (one state change per card) |
| **Small multiples** | comparing compounds or conditions: receptor slots for semaglutide / tirzepatide / retatrutide; the evidence ladder on every compound; three timeline strips | identical mini-frames 120–160 px wide in a hairline grid, only the variable changes, one shared caption sentence; 3 across on desktop, 1–2 across at 360 | Distill three-up, OWID related charts |
| **Margin figures** | key numbers, mini locators ("where in the body"), glossary thumbnails | in the sidenote column from 1024 px (today it holds only 12 px citations); inline below the paragraph on smaller screens | Tufte, Distill margin notes |
| **Key-number figure** | the 2–3 numbers per section that matter | numeral in JetBrains Mono 40–48 px, unit at 18 px, one plain line in natural frequencies ("about 1 in 7"), source and date in mono 13 px; **no count-up animation** | WHO "Key facts", FRANK "5–30 mins", OWID headline values |
| **Icon array (x in 100)** | side effects, risks, shares of studies | 10×10 grid of 8 px squares (A uses squares; people pictograms are C's language); filled squares in accent, empty ones with a 1 px `--ink-3` outline; the count written beside it ("44 in 100 felt sick"); medicine and placebo side by side | Isotype heritage, The Pudding's syringe forest |
| **Comparison table** | "pharmacy medicine vs online research vial"; fragment vs whole protein | hairline rows, the option names as column heads in Inter 600; every answer is a **word plus a glyph** (Yes with a filled tick, No with a cross, Unknown with a hatched "?"); no colour coding | Thuisarts "keuzekaarten", Museum für Gestaltung label/value lists |
| **Timeline and duration strip** | half-life and duration, approval history, evidence history | a hairline axis with mono ticks; segments as accent bars; **"Unknown: never measured in people" as a labelled hatched block** rather than a gap; mirrors in RTL (time axes only); one-time fill on first view, 400 ms or less, none under reduced motion | the DRUGSinfo duration bar, the FT progress bar |
| **Evidence map** | every compound's evidence section | a dot grid: rows = cells / animals / people (small studies) / people (large trials); columns = originating group / independent; one dot per study, hollow dot = no effect found; counts in mono at the row ends | Our World in Data dot plots, Distill small multiples |
| **Status matrix** | the law by country, sport | rows EU / NL / DE / BE / UK / US / WADA; columns authorised / prescription / reimbursed / banned in sport; glyph plus word in every cell; "checked on" date in mono | GOV.UK summary list, the pharmacopoeia monograph header |
| **Metaphor drawing** | one per hard concept: half-life as a bath draining; albumin as a ferry; a receptor as a lock | a hairline line drawing beside the real diagram, introduced with "Think of it like…" and labelled "comparison"; never a cartoon and never an anthropomorphised drug | Quanta's LEGO DNA, Kurzgesagt's sketch-stage metaphors |

#### Motion grammar for A ("almost no motion", made informative)

- **Allowed:**
  - state changes in a stepper or toggle: 200–300 ms ease-out, a cross-fade plus a line draw;
  - a one-time fill of a ladder, timeline or icon array the first time it scrolls into view (400 ms or less);
  - `<details>` height easing of 200 ms or less;
  - highlighting a body-map region on tap or focus;
  - a reader-dragged slider with one variable, only where it shows time or a state, never an amount (for example "days since an injection"), labelled "Illustration, not dosing guidance".
- **Not allowed:** autoplay loops; count-up numbers; scroll-jacking or parallax; springs or bounce (those belong to B); anything that moves for more than 5 seconds without a pause control.
- **Reduced motion and no JS:** the end state appears instantly, and every animated figure must make sense as a still.

#### Progressive disclosure in three layers

| Layer | What | Default | Budget |
|---|---|---|---|
| **1. Beginner** | lede, In short, At a glance, evidence strip, stop-now strip, photo | always open | about 250 words |
| **2. Section openers** | per section: question H2, one-sentence answer, one figure, at most 80 words of prose | always open | about 150 words per section |
| **3. In detail** | the full current text: study-by-study evidence, chemistry, each country's law, the study table, mechanism caveats | native `<details>` rows titled as questions ("In detail: every study in animals"), `hidden="until-found"` where supported so find-in-page still works, an **"Open all"** button in the reading-tools row, everything open in print | unlimited; nothing is deleted |

On a compound page this takes the default-open view from 8,247–13,242 words to about **1,300–1,600 words**. All existing expert content stays one tap away and is still indexed by Pagefind.

### 3.3 Page blueprints for A

**Compound page** (top to bottom; desktop at 1280 / phone at 360):

1. **Hero.** Eyebrow (class) · H1 · pronunciation line and "Also sold as" chips (plain text) · one-sentence lede · one trust line ("Last checked 20 Oct 2026 · Medical review pending · 2-minute summary, 30-minute full read"). Desktop: the photo in the right column with a conclusion caption, and the fact sheet under the title on the left. Phone: a 16:9 photo strip no more than 200 px tall directly under the lede.
2. **In short.** 3–5 numbered bullets of at most 18 words. The first says what it is; the last says what to do if you feel unwell.
3. **At a glance.** Six fixed fields in a fixed order on every compound: *Approved as a medicine? · Tested in people? · How is it taken? · How long does it last? · Biggest risk · Allowed in sport?* Each has a short answer of 1–3 words, one sentence and a "More" link.
4. **Evidence strip.** The same 5-step ladder on every compound (cells → animals → small human studies → large trials → approved), filled to the level reached, plus one key number ("0 published human trials").
5. **Stop and get help (strip).** The three most important signs for this compound, each with a pictogram and words, "Call 112 now if…", and a link to the full list.
6. **What is it?** Fact sheet in detail; sequence; a comparison table where names mislead (TB-500 fragment vs whole protein; pharmacy semaglutide vs research vial).
7. **How does it work?** A stepper explainer in the margin locator style, plus the metaphor drawing. *In detail:* "What each step rests on".
8. **What does the evidence show?** Evidence map plus 2–3 key numbers or small multiples. *In detail:* the study table and every study.
9. **What is not known?** A hatched "unknown" list (pictogram list).
10. **Is it legal?** Status matrix, plus an approval timeline for authorised medicines. *In detail:* each country.
11. **What are the risks?** Icon arrays for authorised medicines; for experimental ones, the risk pictogram list plus the "what is in an online vial" atlas. *In detail:* each risk.
12. **If you still decide to use it.** Do and Do not panels, stacked with the Dos first and every don't item starting with "Do not"; the legal-route flow; the full warning signs in three tiers.
13. **Check what you understood.** Three questions with instant explanations, client-side only, nothing stored.
14. Sources (collapsed by section, "Open all"), related pages.

**Basics page** (for example *Why peptides are injected, not swallowed*):

1. H1, one-sentence lede, trust line, photo strip.
2. In short (3 bullets).
3. **The explainer straight after the summary** (the `why-not-a-pill` stepper).
4. 3–4 question sections, each with one figure: a comparison table (injected vs swallowed), a key number (the share of oral semaglutide absorbed, with its source), and a metaphor drawing ("the gut treats a peptide like food protein").
5. "Think of it like…" box (one metaphor drawing, labelled as a comparison).
6. Check what you understood; related pages.

### 3.4 Acceptance checks for A pages

- At 1280×900 in the default-open state, no screen without a visual in layers 1–2, and no more than about 80 words of prose between visuals.
- The stop-now strip is within the first 3 screens at 360 px.
- No word smaller than 13 px, body text 18 px, fewer than 60 uppercase words per page.
- Every visual carries words, and every figure has a takeaway title, a data card and a text or table alternative.
- Works with JS off, with reduced motion, at 200% zoom, with `?pseudo=rtl` and in forced-colours mode.

---

## 4. Design B: refinements only

1. **Light by default, dark as a stage.** Follow the reader's system setting, and use light when there is none. Keep the dark, scroll-driven mechanism stage as a dark island inside the light page (a figure, not the whole page). This keeps B's character without the "biotech start-up" mood the audit found.
2. **Drop the glow.** Remove the 7 glow and shadow effects (`--glow`); strokes are solid. Glow is the visual language of peptide shops.
3. **Label every glyph on the stage.** Membrane, receptor coil, hexagon cluster and the oval with a wave each get a word on the drawing. The residue colours get a plain key ("oily", "water-loving", "charged +", "charged −") or become neutral beads with letters.
4. **Amber means "hypothesised" and nothing else.** "No", "Very little", "Not an authorised medicine" and "Independent medical review pending" move to neutral `--text-3` with a dashed outline, a word and a pictogram.
5. **Replace the unlabelled polar "rose"** with the shared labelled evidence ladder (section 6.4).
6. **Fewer pills.** 137 elements on semaglutide have a 999 px radius. Use an 8 px radius for cards and chips; the table of contents becomes a numbered list, not a pill cloud; pills stay only on inline claim tags.
7. **Move off Material swatches.**
   - **Dark:** cyan `#4DD0E1` becomes `#5EC4D2` (9.5:1 on the ground, chroma 30 instead of 36); amber `#FFB74D` becomes `#E8B15F` (10.0:1, chroma 50 instead of 64); alert `#FF8A80` becomes `#F4796E` (7.2:1), the same alert as C's dark edition.
   - **Light:** alert `#B3261E` becomes **crimson `#A8173C`** (6.9:1 on the ground, white on it 7.4:1). This fixes the deuteranope collision with amber `#8F5300` (ΔE 5 becomes 26).
   - If cyan or amber must carry body-size words in light, use `#005A63` (7.5:1 on the ground, 7.1:1 on `surface-2`) and `#7A4700` (7.2:1); otherwise put the word in text colour with the cyan or amber glyph beside it.
8. **Type.** Labels at 14 px or more (12–13 px today); mono only for numbers and dates.
9. **Length.** B is the longest per screen (105–112 phone screens). Tighten `--space-7` from 4.5 rem to 3 rem and `--space-8` from 7 rem to 4.5 rem, and apply A's three-layer disclosure (section 3.2) to B's content too.
10. **The mechanism stage on phones.** The card goes under the stage, not over it (the FT problem). Cards are at most 50 words, with discrete states, an end state under reduced motion, and the state exposed as text.
11. **Dark illustration panels.** The body map and atlas plates sit on a dimmed panel (`#D9DEE5`, or `brightness(0.85)`) with a 1 px line, never a pure white slab on `#0A0E14`.
12. **Header.** The "Warning signs" link is ink with a small alert glyph, not a red outline pill.
13. **Home.** A photo and entry cards; the 76 px title down to about 56 px; the summary on the same grid as the title.
14. **Mobile navigation.** No horizontally scrolling strip cut mid-word ("Evi…"). Show 4 items plus "More", or wrap to two rows (same fix as C, see 6.12).

---

## 5. Prioritised visual backlog

Highest reader value first. Section numbers (§2–§8) are the numbers shown on the rendered compound pages. Safety comes before orientation, and orientation comes before mechanism and evidence. "Data on the page" lists the sources and data that already exist in the repo (`src/data/sources/*.yaml` ids, compound YAML, explainer registry), so nothing new has to be researched unless stated. Every item follows section 3.2: real text labels, a takeaway title, a data card, a table or text alternative, a reduced-motion still, and RTL checked. No item shows a dose.

**1. Warning signs: three-tier "When to get help"** · Page: `/en/safety/warning-signs/` (planned, currently 404), plus `<WarningSigns />` at the end of every compound page (renders nothing today on BPC-157, KPV and TB-500) · Replaces or supports: semaglutide §8 "When to stop and get help", BPC-157 and TB-500 "Stop and get help if", and the home summary's last bullet · Type: pictogram list in tier cards (HTML) · AI artwork: no
Outline: (1) **"Call 112 now if:"**, the only block with the alert colour (swelling of face or throat, trouble breathing, fainting or confusion, chest pain, signs of sepsis); (2) **"Call your GP or the huisartsenpost today if:"** (spreading redness and heat at the injection site, fever, severe belly pain, vomiting you cannot stop); (3) **"Talk to a pharmacist or GP if:"** (milder or lasting complaints); (4) every bullet at most 8 words, with a symptom pictogram and the word, and a visually hidden urgency prefix in each heading; (5) a filtered subset per compound (`only="general,injection,allergic"`); (6) any text after a card gets its own heading.
Data on the page: none central yet. Create `src/i18n/en/warning-signs.json` (the single source of truth in CONTENT-GUIDE §3). Item wording exists in the semaglutide stop box (sources `ema-prac-2025-06-naion`, `he-2022-gallbladder`, `ema-epar-wegovy`) and in the BPC-157, TB-500 and KPV harm-reduction sections. Verify 112 and huisartsenpost wording.

**2. "Stop and get help" strip near the top of every compound page** · Page: all compound pages, directly after At a glance · Supports: the stop-now box that now sits on screen 34–47 at 1280 (78–97 on phones) · Type: pictogram list (3 signs) plus a link · AI artwork: no
Outline: (1) title "Stop and get help if:" with the triangle glyph in the alert colour; (2) the three compound-specific signs with pictograms (semaglutide: severe upper-belly pain, sudden loss of vision, swelling or trouble breathing); (3) "Call 112 if severe"; (4) a link to the full list further down and to the warning-signs page.
Data on the page: the same file as item 1, filtered by compound.

**3. Pharmacy medicine vs online "research" vial (comparison table)** · Page: home "The most important distinction", semaglutide §2 "Why 'semaglutide' is not one thing" and §8 "Why an online 'research' vial is a different product", the planned `safety/product-risk` · Replaces: about three paragraphs in each place · Type: comparison table (HTML) · AI artwork: no
Outline: rows (1) Checked by a regulator? (2) Contents known? (3) Amount known? (4) Made sterile? (5) Batch can be recalled? (6) Someone to ask (pharmacist)?; two columns; every answer is the word Yes, No or Unknown plus a glyph; caption "A pharmacy medicine and an online vial with the same name are different products."
Data on the page: `ema-epar-ozempic`, `ema-epar-wegovy`, `cbg-geneesmiddeleninformatiebank`, `who-2024-falsified-semaglutide`, `ema-2023-falsified-ozempic`, `igj-2023-falsified-ozempic`, `fda-category-2-safety-risks`.

**4. "What is in an online vial" (atlas infographic)** · Page: planned `safety/product-risk`; BPC-157 §7 "Product quality and immune reactions", KPV §7 "The product is the first risk", TB-500 §7 "The product itself" · Replaces or supports: about 300–500 words per page on product risk · Type: atlas infographic (AI art plus a numbered key in real text) · **AI artwork: yes** (a generic, unlabelled, unbranded vial still life on a neutral ground; no text, no seller cues, no needle pointed at the camera)
Outline (numbered key): (1) the substance may not be what the label says; (2) the amount can differ from the label; (3) not proven sterile; (4) bacterial residues (endotoxin) can cause fever and reactions; (5) "not for human use" on the label means no one checked it for people; (6) no recall if a batch is bad. Caption: "Nobody checked what is in this vial."
Data on the page: `delcourt-2023-misbranded`, `esposito-2012-tb500-identity`, `fda-category-2-safety-risks`, `who-2024-falsified-semaglutide`, `ema-2023-falsified-ozempic`, `mhra-2023-fake-weight-loss-pens`.

**5. From contamination to infection (explainer animation)** · Page: planned `safety/sterile-technique` and `safety/product-risk` (explainer `contamination-infection` in EXPLAINERS.md §6) · Supports: the injection-site and infection warnings on every experimental compound page · Type: explainer animation (skin cross-section, SVG) · AI artwork: no
Outline: (1) bacteria are in a non-sterile vial, on the skin or on the needle; (2) the needle carries them under the skin; (3) they multiply and the body walls them off: an abscess; (4) they can spread into the blood: sepsis; (5) warning signs (spreading redness, heat, swelling, pus, fever, feeling very ill) lead to "get help now", the only red in the drawing.
Data on the page: steps and levels in EXPLAINERS.md. Sources still need registering in `src/data/sources/explainers.yaml` (an infection guideline and a sepsis-signs source).

**6. Signs a pen may be fake (pictogram list)** · Page: semaglutide §8 "Fake pens"; planned `safety/product-risk` · Replaces: the fake-pen paragraphs · Type: pictogram list · AI artwork: no. Do not show a branded or brand-like pen.
Outline: (1) bought outside a pharmacy, or without a prescription; (2) packaging or leaflet language differs from your country's; (3) batch number or expiry missing or unreadable; (4) the label looks different from your earlier pens; (5) what to do: do not use it, keep it, show your pharmacist, report it (IGJ, Lareb).
Data on the page: `ema-2023-falsified-ozempic`, `igj-2023-falsified-ozempic`, `bfarm-ozempic-falsification`, `mhra-2023-fake-weight-loss-pens`, `lareb-home`.

**7. Start here: situation tiles** · Page: planned `start-here` and the home page · Replaces: the home "Where to start" prose · Type: pictogram list (tiles, each with a pictogram and words) · AI artwork: no (plus one documentary photo)
Outline: (1) "I already bought a peptide online"; (2) "I feel unwell after injecting" (goes to warning signs); (3) "My doctor prescribed semaglutide"; (4) "Someone close to me uses peptides"; (5) "I saw a claim and want to check it"; (6) "I want to understand the basics".
Data on the page: none needed (routing only).

**8. How to read this site (one legend)** · Page: `start-here`, linked from every evidence tag · Supports: the six different evidence encodings the audit found · Type: pictogram list / legend · AI artwork: no
Outline: (1) the four evidence levels, each with glyph, line style and word (in people / in animals / in cells / idea not yet tested); (2) the status badges (Authorised medicine / Authorised elsewhere / Not an authorised medicine); (3) "red means stop now, nothing else"; (4) "dashed means not shown or not approved"; (5) where the summary, sources and review date sit on every page.
Data on the page: `src/i18n/en/vocab.json`, `evidence.json`.

**9. Why peptides are injected, not swallowed (explainer animation)** · Page: planned `basics/why-not-a-pill`, `start-here`; supports semaglutide §2 "Injection and tablet" · Type: explainer animation (anatomy, no mirror) · AI artwork: no
Outline (EXPLAINERS.md §6): (1) a swallowed peptide reaches the stomach; (2) acid and pepsin start cutting the chain; (3) pancreas and gut-wall enzymes cut it into single amino acids, like food protein; (4) what is left is too big and too water-loving to cross the gut wall; (5) injected under the skin, it reaches the blood whole; (6) oral semaglutide is the exception: a helper molecule lets a small share through in the stomach.
Data on the page: `buckley-2018-oral-semaglutide`, `aroda-2019-pioneer-1`, `ema-epar-rybelsus`.

**10. Semaglutide: "What happens after an injection" (stepper plus duration strip)** · Page: semaglutide §2 "What the molecule is" and §3 "What each step rests on" ("Staying in the blood"); reused on planned `basics/pharmacokinetics` · Replaces: about 400 words on half-life, albumin binding and DPP-4 · Type: explainer animation (stepper) plus SVG duration strip · AI artwork: no
Outline: (1) injected under the skin; (2) a fatty-acid chain makes it ride on albumin, a "ferry" too big for the kidneys to filter; (3) the Aib change protects it from the DPP-4 enzyme; (4) it reaches GLP-1 receptors (links to the existing `glp1-action` explainer); (5) duration strip: natural GLP-1 "1–2 minutes" against semaglutide "about one week", which is why it is taken once a week; (6) after the last injection it fades over weeks, and so do side effects. Labelled "Illustration, not dosing guidance"; no dose numbers.
Data on the page: `ema-epar-wegovy` (half-life about one week, more than 99% albumin-bound, in people), `deacon-1995-glp1-degradation`, `lau-2015-semaglutide-discovery`; the explainer registry entry `glp1-action`.

**11. Evidence ladder strip (one component on every compound)** · Page: all compound pages (hero), the compounds index cards, the planned `evidence/evidence-grading` · Replaces: today's cramped 6-step ladder with 10 px labels, C's dot scales and B's rose · Type: SVG/HTML chart · AI artwork: no
Outline: five steps in a fixed order: (1) in cells; (2) in animals; (3) small studies in people; (4) large trials in people; (5) approved as a medicine. Filled to the level reached; a hatched step for "never done"; 13 px or larger labels below; a one-line takeaway ("BPC-157 stops at animals").
Data on the page: grades in `src/data/compounds/<slug>.yaml`.

**12. Evidence map (small multiples, reused in every §4 "What the evidence actually shows")** · Page: BPC-157 §4 (1,777 + 704 sidenote words over 6.5 screens), TB-500 §4 (1,215 + 545), KPV §4, semaglutide §4 · Supports: the study tables (916–1,961 words at 12–14 px), which move into "In detail" · Type: SVG chart (dot grid) · AI artwork: no
Outline: (1) rows: cells / animals / people, small / people, large trials; (2) columns: originating group / independent groups; (3) one dot per study, hollow when no effect was found; (4) counts in mono at the row ends; (5) takeaway title per compound ("Almost every animal study comes from one group"); (6) "Show as table" opens the existing study table.
Data on the page: `<StudyTable />` data in each compound YAML; `pubmed-bpc157-count-2026-10-20`; the `independence` and `preclinical_volume` grade texts.

**13. BPC-157: the proposed chain, with the missing receptor (explainer animation)** · Page: BPC-157 §3 (1,077 + 206 words over 3.9 screens) · Type: explainer animation (cell and tissue schematic) · AI artwork: no
Outline: (1) no receptor has been identified, drawn as a labelled "?" (hypothesis); (2) VEGFR2 and nitric-oxide signalling in cells (in cells); (3) tendon cells move and spread via FAK–paxillin (in cells); (4) new small vessels in injured tissue (in animals); (5) faster tendon and gut healing in rats, and the one independent rat tendon test found no significant strength effect (in animals); (6) people: not shown (the chain ends in a dashed line).
Data on the page: `hsieh-2017-vegfr2`, `hsieh-2020-src-cav1-enos`, `sikiric-1997-nitric-oxide`, `chang-2011-tendon-fibroblasts`, `brcic-2009-angiogenesis`, `staresinic-2003-achilles`, `bicer-2026-achilles`.

**14. BPC-157: "Who wrote the studies?" (icon array)** · Page: BPC-157 §4 "The originating group's animal studies"; history page `the-croatian-lab` §"Counting the literature" · Replaces: the counting paragraphs (about 300 words) · Type: SVG chart (Isotype 100-square, natural frequency) · AI artwork: no
Outline: (1) about 160 primary lab and animal papers; (2) about 140 with authors from one group in Zagreb (filled squares); (3) about 20 from elsewhere (outlined); (4) few of those repeat the group's experiments directly; (5) caption "Many studies from one group are not the same as many independent checks." Counts are approximate and dated "by our count on 20 October 2026".
Data on the page: `pubmed-bpc157-count-2026-10-20`; the BPC-157 grade text; the history-page summary.

**15. KPV: the gut-cell atlas** · Page: KPV §3 (1,001 + 152 words over 3.8 screens) · Type: atlas infographic · **AI artwork: yes** (an unlabelled cross-section of a gut lining cell layer in the approved atlas style)
Outline (numbered key): (1) KPV is the last three building blocks of the hormone α-MSH; (2) it can enter gut cells through the PepT1 "doorway" (in cells and mice); (3) inside, it turns down the NF-κB inflammation switch (in cells); (4) fewer inflammatory signals and less colitis in mice (in animals); (5) never tested in people. A family-tree strip shows α-MSH, then its tail, then KPV.
Data on the page: `cody-1984-c-terminal-tripeptide`, `hiltz-1989-cooh-fragment`, `dalmasso-2008-pept1`, `mandrika-2001-nfkb-no`, `kannengiesser-2008-colitis`, `laroui-2010-nanoparticles`.

**16. TB-500: two molecules, one name (comparison plus stepper)** · Page: TB-500 §2 "Two molecules, one name" and §3 (1,023 + 393 words over 4.1 screens) · Type: comparison table plus explainer animation · AI artwork: no
Outline: (1) the whole protein, thymosin β4: 43 building blocks, studied in some people; (2) the TB-500 fragment: 7 building blocks (LKKTETQ), no trials in people; (3) the whole protein grips actin, a cell's scaffolding (in cells); (4) the fragment is broken down within hours (lab and horse studies); (5) the chain to "healing in people" has a broken link (dashed).
Data on the page: `low-1981-sequence`, `safer-1991-actin-sequestering`, `esposito-2012-tb500-identity`, `esposito-2015-in-vitro-metabolism`, `ho-2012-equine-tb500`, `rahaman-2024-tb500-metabolites`, `ruff-2010-phase1-iv`, `guarnera-2010-venous-ulcers`.

**17. Semaglutide: what the big trials found (key-number small multiples)** · Page: semaglutide §4 (878 + 221 words over 3.5 screens) · Type: SVG chart (paired icon arrays and key numbers) · AI artwork: no
Outline: (1) STEP 1: about 15% weight lost on average, against about 2% with placebo; (2) SUSTAIN-6: heart attack, stroke or heart death in about 7 of 100 people, against about 9 of 100; (3) SELECT (no diabetes): about 6.5 of 100, against 8 of 100; (4) FLOW: kidney outcomes 24% less often; (5) after stopping, about two-thirds of the lost weight came back (a line chart); (6) a data card per trial: who took part, n, length, funder.
Data on the page: `wilding-2021-step-1`, `wilding-2022-step-1-extension`, `marso-2016-sustain-6`, `lincoff-2023-select`, `perkovic-2024-flow`; "Who paid for the evidence".

**18. Semaglutide: stomach and gut side effects per 100 people (icon arrays)** · Page: semaglutide §7 "Stomach and gut" (503 words over 2.2 screens) · Type: SVG chart (four paired icon arrays) with a table toggle · AI artwork: no
Outline: (1) nausea, 44 against 16 in 100; (2) diarrhoea, 30 against 16; (3) vomiting, 25 against 6; (4) constipation, 24 against 11; (5) "most mild to moderate, mostly while the dose was being raised; about 4 in 100 stopped because of them".
Data on the page: `ema-epar-wegovy` (STEP 1–4 pooled, 68 weeks).

**19. Risk profile of the experimental compounds (pictogram list)** · Page: BPC-157 §7 (859 + 366 words), TB-500 §7 (792 + 410), KPV §7 · Type: pictogram list · AI artwork: no
Outline: one row per risk, with an evidence glyph and word: (1) reported in people (case reports, few); (2) what the animal toxicology flags; (3) product quality and immune reactions (see item 4); (4) theorised cancer link (hypothesis, dashed; see item 20); (5) sport: banned at all times; (6) unknown: pregnancy, long-term use (hatched).
Data on the page: `xu-2020-preclinical-safety`, `fda-category-2-safety-risks`, `wada-2026-list-en`, `hanahan-2011-hallmarks`, `cha-2003-metastasis`, `sribenja-2013-beta-thymosins-cancer`.

**20. The double edge of new blood vessels (explainer animation)** · Page: BPC-157 and TB-500 "Why an effect on cancer is theorised" (explainer `angiogenesis-double-edge`; place it only after the BPC-157 rewrite is finished, per EXPLAINERS.md) · Type: explainer animation · AI artwork: no
Outline: (1) in rats and cells the peptide increased growth-factor (VEGF-pathway) signalling (in animals and cells); (2) new small vessels grew into injured tissue (in animals); (3) injured tissue healed faster in those models (in animals); (4) tumours also need new vessels to grow (established in cancer biology); (5) whether this could feed a hidden tumour in people has never been studied (hypothesis, dashed throughout).
Data on the page: `brcic-2009-angiogenesis`, `hsieh-2017-vegfr2`, `carmeliet-2011-angiogenesis`, `hanahan-2011-hallmarks`, `sulzmaier-2014-fak-cancer`, `fda-regranex-label-2018`.

**21. Status matrix plus approval timeline (one component for every "Is it legal?" section)** · Page: semaglutide §6 (768 + 468 words over 3.9 screens), BPC-157 §6 (742 + 457), TB-500 §6 (705), KPV §6 (655) · Replaces: the regulatory table plus the prose subsections that repeat it (the prose moves to "In detail") · Type: table (matrix) plus SVG timeline · AI artwork: no
Outline: (1) rows EU / NL / DE / BE / UK / US / WADA; (2) columns authorised / prescription only / reimbursed / banned in sport; (3) every cell is a glyph plus a word; (4) "checked on 20 October 2026" in mono; (5) for semaglutide, an approval timeline: 2017 US (Ozempic), 2018 EU (Ozempic), 2020 EU (Rybelsus), 2022 EU (Wegovy), 2026 Wegovy tablets (verify each date against the cited label before drawing).
Data on the page: `<RegulatoryTable />` data in each compound YAML and `src/data/jurisdictions.yaml`; `ema-epar-*`, `fda-drugsatfda-*`, `ema-2026-wegovy-tablets`, `zin-2024-wegovy-not-reimbursed`, `wada-2026-list-en`.

**22. The FDA advisory vote: what it does and does not mean (flow strip)** · Page: BPC-157 §6 "United States", KPV and TB-500 §6 "United States", news · Supports: the most misreported fact on the site (CONTENT-GUIDE §1) · Type: SVG flow strip with a status per step · AI artwork: no
Outline: (1) July 2026: the advisory committee considered seven peptides and voted to recommend six (advisory, against FDA staff advice; vote counts "as reported from the public meeting"); (2) FDA decision: not yet; (3) rulemaking: not yet; (4) even then: compounding on prescription in the US only, not an approval; (5) EU and Netherlands: no change. Every step carries a status word.
Data on the page: `fda-pcac-2026-07-meeting`, `fda-pcac-2026-questions`, `fda-pcac-2026-bpc157-briefing`, `fda-503a-bulks-page`, `fr-2026-07361-pcac-notice`.

**23. The legal route in the Netherlands (flow diagram)** · Page: semaglutide §8 "The legal route in the Netherlands" and "Why an online 'research' vial is a different product" (659 + 314 words) · Type: SVG annotated line diagram · AI artwork: no
Outline: (1) GP or specialist; (2) prescription when the label's conditions are met; (3) pharmacy, with a pharmacist to ask; (4) follow-up and side-effect reporting (Lareb); set against a dashed branch: (5) online "research" vial, which leads to unknown contents, no one to ask and no recall.
Data on the page: `fk-semaglutide`, `zin-2024-wegovy-not-reimbursed`, `cbg-glp1-position`, `lareb-home`, `mhra-glp1-what-you-need-to-know`.

**24. Home: photo and compound entry cards** · Page: `/en/` · Replaces: the photo-less home with three short prose sections · Type: pictogram list / cards plus a documentary photo · AI artwork: no (a licensed documentary photo)
Outline: (1) a documentary photo of believable adults in a pharmacy or GP setting (no lab coats posed at the camera, no needles); (2) the item 3 comparison table; (3) one card per compound: name, status badge, evidence strip (item 11), one-line takeaway; (4) the situation tiles (item 7); (5) the warning-signs link.
Data on the page: compound YAML (status, grades); `src/data/heroes.yaml` for the photo.

**25. The Croatian lab: publications over time (stacked bar chart)** · Page: `/en/history/the-croatian-lab/` §"Counting the literature" and "What the independent work shows so far" · Type: SVG chart with a table toggle · AI artwork: no
Outline: (1) papers per year since 1993; (2) the Zagreb group as one series, everyone else as a second, direct labels at the bar ends; (3) the 2026 independent rat tendon test marked; (4) takeaway: "Three in four PubMed records name the group's leader."
Data on the page: `pubmed-bpc157-count-2026-10-20`, `sikiric-1993-bpc-origin`, `bicer-2026-achilles`, `sikiric-2025-comment`.

---

## 6. Cross-design component fixes (from the audit)

1. **One evidence vocabulary.** Today evidence level is encoded at least six ways on one page, and "Human trials", "In humans" and "Humans, limited" overlap. Define four levels once, in `vocab.json`, and derive every encoding from them:

   | Level | Word | Line | Glyph |
   |---|---|---|---|
   | in people | "In people" (qualifier: "a few people" / "large trials") | solid | filled figure |
   | in animals | "In animals" | dashed | animal |
   | in cells | "In cells" | dotted | dish |
   | hypothesis | "Idea, not yet tested" | hollow dotted | "?" |

   - A uses line style plus the glyph.
   - B adds colour on top: cyan for any demonstrated level (people, animals or cells, still with the line style), amber only for hypothesis.
   - C uses the `--level-*` ramp plus the line style.

   Claim badges, level badges, explainer lines, the causal-chain legend and the ladders all read from this one source.
2. **One badge anatomy.** Collapse the five families (compound, status, claim, level and grade step labels) into two components:
   - **StatusBadge** (Authorised medicine / Authorised elsewhere / Not an authorised medicine);
   - **EvidenceTag** (the four levels).

   Both are glyph plus words, sentence case, 14 px or larger, with a 1 px border; only "Authorised medicine" is filled; dashed means not authorised or not tested. Radius follows the design (A 0, B 8 px, C 8 px).
3. **At a glance, fixed.**
   - Six fields in a fixed order on every compound (3.3, step 3).
   - Every tile has the same anatomy: question; a short answer of 1–3 words ("Unknown", "Stomach upset"); one sentence; "More". This fixes tile 4, which today answers with a 3–4-line bold sentence.
   - Remove A's unexplained solid, dotted and dashed rules.
   - C's border style follows the StatusBadge rule.
4. **One evidence-grade card.**
   - The same segmented ladder in all designs, with a scale length fixed per axis so that "3 of 3" never looks like "3 of 6".
   - Labels 13 px or larger.
   - Drop C's dot scales and B's rose.
   - The "source independence" pictogram must not resemble the rating dots.
   - One border weight.
5. **One summary component name.** "In short" everywhere ("Kort gezegd" in Dutch; not Thuisarts' "In het kort"), with the reading time as plain 15 px text ("about 2 minutes to read this summary; the full page takes about 30"). It is "The 30-second version" on compound pages today.
6. **Tables.**
   - 15 px or larger in all designs, sentence-case headers.
   - Below 56 rem, cards with the label above the value in every design. This fixes A's 360 px study card, where "SPECIES / N / DESIGN" squeezes beside one-word lines and values overlap.
   - Regulatory status shown once (the matrix, backlog item 21), with country prose under "In detail".
   - C's tables get the full content width at desktop (not the 608 px column that wraps the authorised-products table to 1–3 words per line).
7. **Radii.** A: 0. B: 8 px, pills only for inline tags. C: 8 px, circles only for numbered discs.
8. **Stop-now content.**
   - Create `src/i18n/en/warning-signs.json` and the `/en/safety/warning-signs/` page, so the header link and home summary stop pointing at a 404.
   - Make `<WarningSigns />` render on every compound page.
   - Give A an alert colour (3.1).
   - Put the stop strip near the top in all designs (backlog item 2).
   - The header link is ink plus a small alert glyph in all three designs; no red fill (C) and no red pill (B).
9. **Photos and illustration panels.** Natural colour in every design (no duotone except archival images in A). An illustration panel is never a bright white slab in dark mode: dim it to about 85% and frame it with a hairline. The body map and atlas plates take at least 50% of the column.
10. **Hero layout.** Fix the empty space between the badge and the review line at desktop (the fact sheet in A, the photo column alignment in B and C). On phones, add a cropped 16:9 photo strip of 200 px or less under the lede; today the photo first appears 3–4 screens down, at about y = 2,165–2,814 px.
11. **Explainer label size.** One floor in all designs: 14 px for words and 12 px for numerals, in sentence case. Today the same SVG shows about 10 px uppercase mono in A, 11 px in B and 17–19 px in C.
12. **Mobile primary navigation (B and C).** No horizontal strip cut mid-word ("Evi…"). Show 4 items plus "More", or wrap to two rows.
13. **Reading-time and trust line.** One compact line under the H1 in all designs: "Last checked … · Medical review pending · about N minutes". The long editorial note moves to the page foot. No "reviewed" tick until a named reviewer signs off.
14. **Colour semantics written down per design.** B: amber equals hypothesis only. C: primary is never used on hazard pictograms. A: the accent marks "the drug / the answer" only. Add a lint-like checklist item to EXPLAINERS.md §5: "Red is used only for stop-now safety content in all three designs." Today that line applies to C only.

---

## Appendix A: method and files

- Contrast and colour-blind script: `C:/Users/sande/AppData/Local/Temp/claude/C--dev-Peptides-explained/8689a172-b4d6-4156-b75f-15ec6b465d05/scratchpad/design-lead/contrast.py`, palettes in `palettes.json`, Markdown tables from `tables.py`. Contrast uses the WCAG 2.x relative-luminance formula. Colour-blind simulation uses the Machado, Oliveira and Fernandes (2009) matrices at severity 1.0 in linear RGB, with ΔE as CIE76 in CIELAB (D65).
- Preview: `preview.mjs` injects each option's tokens and the Appendix B structural CSS into the dev server (`?theme=c`) with Playwright and the installed Chrome, at 1280×900 and 360×740, light and dark. `sheet.mjs` builds the side-by-side sheets. Output: `screenshots/design-research/c-options/` (gitignored; internal only).
- Inputs: the three research reports in this workflow run. Their screenshots are in `screenshots/design-research/` (public-health sites), `.../explainers/` (explainer sites) and `.../audit/`, `.../screens/`, `.../sheets/`, `.../components/`, `.../compare/` (our designs).

## Appendix B: machine-readable token overrides for design C

Each option is a complete set. Inject the light block on `:root`, and the dark block on `:root[data-scheme='dark']` and inside `@media (prefers-color-scheme: dark) { :root:not([data-scheme='light']) { … } }`, in the same way as `src/styles/themes/c/tokens.css`. Then add the shared structural CSS below. Token names match `src/styles/themes/c/tokens.css`; tokens marked *new* in section 2 are additions.

**C1 Linen & Slate**

```css
:root { /* light */
  --bg: #f6f4ef;
  --surface: #ffffff;
  --surface-2: #eeebe4;
  --surface-raised: #ffffff;
  --text: #1e2124;
  --text-2: #3f444b;
  --text-3: #5a5f66;
  --line: #dcd8cf;
  --line-strong: #86827a;
  --primary: #2e4a6b;
  --primary-ink: #ffffff;
  --primary-dark: #1f3550;
  --primary-tint: #e6ecf3;
  --primary-fill: #2e4a6b;
  --primary-fill-ink: #ffffff;
  --link: #22487b;
  --link-hover: #18355c;
  --focus: #1e2124;
  --focus-ring: #ffd866;
  --note-tint: #efede8;
  --positive: #2e6e57;
  --positive-tint: #e6f0e9;
  --caution: #b07a1c;
  --caution-tint: #fbf0d8;
  --alert: #ab2219;
  --alert-ink: #ffffff;
  --alert-tint: #fbeae7;
  --level-human: #2e4a6b;
  --level-animal: #55708f;
  --level-cells: #6f849c;
  --level-hypothesis: #78746c;
  --plate-mark: #2e4a6b;
}
:root[data-scheme='dark'] { /* dark; repeat inside the prefers-color-scheme media query */
  --bg: #15181c;
  --surface: #1c2026;
  --surface-2: #232830;
  --surface-raised: #2a3039;
  --text: #ece9e3;
  --text-2: #c6c3bc;
  --text-3: #a3a19b;
  --line: #343a43;
  --line-strong: #7e858f;
  --primary: #a9bfdc;
  --primary-ink: #121820;
  --primary-dark: #cbd8ea;
  --primary-tint: #1f2a38;
  --primary-fill: #2e4a6b;
  --primary-fill-ink: #ece9e3;
  --link: #afc6ea;
  --link-hover: #d3e0f3;
  --focus: #ece9e3;
  --focus-ring: #ffd866;
  --note-tint: #20252c;
  --positive: #a3d6b8;
  --positive-tint: #1b2b23;
  --caution: #ad7f30;
  --caution-tint: #2c2618;
  --alert: #f4796e;
  --alert-ink: #200807;
  --alert-tint: #3a1a18;
  --level-human: #a9bfdc;
  --level-animal: #8399b6;
  --level-cells: #6f829b;
  --level-hypothesis: #8f8c86;
  --plate-mark: #2e4a6b;
}
```

**C2 Oat & Plum**

```css
:root { /* light */
  --bg: #f8f5f0;
  --surface: #ffffff;
  --surface-2: #f0ebe3;
  --surface-raised: #ffffff;
  --text: #231f22;
  --text-2: #463f44;
  --text-3: #60585e;
  --line: #ded6cc;
  --line-strong: #8a8079;
  --primary: #5a3459;
  --primary-ink: #ffffff;
  --primary-dark: #41243f;
  --primary-tint: #f2ebf0;
  --primary-fill: #5a3459;
  --primary-fill-ink: #ffffff;
  --link: #663067;
  --link-hover: #45204a;
  --focus: #231f22;
  --focus-ring: #ffd866;
  --note-tint: #f0ece6;
  --positive: #2e6e57;
  --positive-tint: #e5f0ea;
  --caution: #b07a1c;
  --caution-tint: #faefd7;
  --alert: #b42318;
  --alert-ink: #ffffff;
  --alert-tint: #fcebe9;
  --level-human: #5a3459;
  --level-animal: #7c5d7b;
  --level-cells: #93788f;
  --level-hypothesis: #7a7169;
  --plate-mark: #5a3459;
}
:root[data-scheme='dark'] { /* dark; repeat inside the prefers-color-scheme media query */
  --bg: #181417;
  --surface: #201b1f;
  --surface-2: #2a2329;
  --surface-raised: #322a31;
  --text: #efe9ec;
  --text-2: #ccc2c8;
  --text-3: #a99ea5;
  --line: #3b3239;
  --line-strong: #877b84;
  --primary: #d9b3dc;
  --primary-ink: #1e1020;
  --primary-dark: #ead2ec;
  --primary-tint: #2f2131;
  --primary-fill: #5a3459;
  --primary-fill-ink: #efe9ec;
  --link: #dfb9e2;
  --link-hover: #efd7f0;
  --focus: #efe9ec;
  --focus-ring: #ffd866;
  --note-tint: #262025;
  --positive: #a3d6b8;
  --positive-tint: #1b2a23;
  --caution: #ad7f30;
  --caution-tint: #2d2619;
  --alert: #f4796e;
  --alert-ink: #200807;
  --alert-tint: #3b1a19;
  --level-human: #d9b3dc;
  --level-animal: #b293b4;
  --level-cells: #957d93;
  --level-hypothesis: #948a8f;
  --plate-mark: #5a3459;
}
```

**C3 Porcelain & Pine**

```css
:root { /* light */
  --bg: #f5f6f3;
  --surface: #ffffff;
  --surface-2: #eaede8;
  --surface-raised: #ffffff;
  --text: #1b211f;
  --text-2: #3b4441;
  --text-3: #56605c;
  --line: #d3d9d4;
  --line-strong: #7f8984;
  --primary: #285146;
  --primary-ink: #ffffff;
  --primary-dark: #1c3d33;
  --primary-tint: #e3ede7;
  --primary-fill: #285146;
  --primary-fill-ink: #ffffff;
  --link: #1b4f6b;
  --link-hover: #133a50;
  --focus: #1b211f;
  --focus-ring: #ffd866;
  --note-tint: #eceff1;
  --positive: #285146;
  --positive-tint: #e3ede7;
  --caution: #b07a1c;
  --caution-tint: #faf0da;
  --alert: #b8321f;
  --alert-ink: #ffffff;
  --alert-tint: #fcecea;
  --level-human: #285146;
  --level-animal: #53776b;
  --level-cells: #6d877e;
  --level-hypothesis: #737a76;
  --plate-mark: #285146;
}
:root[data-scheme='dark'] { /* dark; repeat inside the prefers-color-scheme media query */
  --bg: #131715;
  --surface: #1a1f1d;
  --surface-2: #222826;
  --surface-raised: #29302d;
  --text: #e8ece9;
  --text-2: #c0c8c3;
  --text-3: #9da7a1;
  --line: #323a36;
  --line-strong: #7c8781;
  --primary: #a6d1bd;
  --primary-ink: #0f1a16;
  --primary-dark: #c3e0d2;
  --primary-tint: #1c2b25;
  --primary-fill: #285146;
  --primary-fill-ink: #e8ece9;
  --link: #9fc8df;
  --link-hover: #c8e0ee;
  --focus: #e8ece9;
  --focus-ring: #ffd866;
  --note-tint: #1e2426;
  --positive: #a6d1bd;
  --positive-tint: #1c2b25;
  --caution: #ad7f30;
  --caution-tint: #2b2619;
  --alert: #f4796e;
  --alert-ink: #200807;
  --alert-tint: #3a1a18;
  --level-human: #a6d1bd;
  --level-animal: #7fa797;
  --level-cells: #6b8a7e;
  --level-hypothesis: #8a928e;
  --plate-mark: #285146;
}
```


**Shared structural CSS (applies to all three options; uses tokens only):**

```css
/* C redesign preview: structural changes that go with every colour option (tokens only, no hex). */
:root { --radius: 8px; }
a { color: var(--link); }
a:hover { color: var(--link-hover); }
:focus-visible { outline: 3px solid var(--focus); outline-offset: 2px; box-shadow: none; }

/* header: neutral surface + hairline, no colour slab; warning link in ink with a small alert-red glyph */
.site-header { background: var(--surface); color: var(--text); --pg-cut: var(--surface); border-block-end: 1px solid var(--line); }
.brand, .brand:hover { color: var(--text); }
.brand-mark__bond { stroke: var(--text); }
.brand-mark__res { fill: var(--text); }
.brand-mark__res--accent { fill: var(--primary); stroke: var(--surface); }
:is(.utility-nav__search, .site-tools__open, .disclosure__summary, .scheme-toggle) { border: 1px solid var(--line-strong); color: var(--text); background: var(--surface); }
:is(.utility-nav__search, .site-tools__open, .disclosure__summary, .scheme-toggle):hover { background: var(--surface-2); color: var(--text); }
.utility-nav__alert { background: var(--surface) !important; border: 1px solid var(--line-strong) !important; color: var(--text) !important; font-weight: 700; }
.utility-nav__alert .icon { color: var(--alert); }
.utility-nav__alert:hover { background: var(--alert-tint) !important; }
.disclosure__panel, .term-tip { background: var(--surface-raised); border: 1px solid var(--line-strong); box-shadow: 0 6px 24px rgb(0 0 0 / 0.12); }
.primary-nav__item a[aria-current] { color: var(--text); border-block-end-color: var(--primary); }

/* summary: one calm highlighter, no outline */
.summary-box { border: 0; border-inline-start: 6px solid var(--primary); background: var(--primary-tint); --pg-cut: var(--primary-tint); }

/* outlines: hairlines instead of 2-3px black boxes; dashed (not colour) still marks "not shown / not approved" */
.at-a-glance__tile, .grade, .compound-tech { border: 1px solid var(--line); }
.at-a-glance__tile:is([data-tone='partial'], [data-tone='no']) { border: 2px dashed var(--line-strong); }
.at-a-glance__icon, .grade__icon .pictogram, .compound-card__icon .pictogram, .rubric__name .pictogram, .study-table__species .pictogram, .summary-box__icon, .summary-box__time-icon { color: var(--text); }
.at-a-glance__tile[data-tone='yes'] .at-a-glance__icon { color: var(--positive); }
.at-a-glance__tile[data-tone='partial'] .at-a-glance__icon { color: var(--caution); }
.compound-badge { border: 2px solid var(--line-strong); }
.compound-badge[data-category='authorised'] { border-color: var(--primary); }
.opinion-flag { border: 2px solid var(--line-strong); }
.claim-badge, .level-badge { border-width: 1px; }
:is(.mechanism__step, .faq__item, .page-list__item, .compound-card, .glossary-index__entry, .search__result, .corrections__item, .tracker__item, .news__item, .news-sources__item, .jurisdiction-card, .media-credits__item, .rubric__axis, .diagram, .plate, .explainer, .toc, .related__item, .checklist) { border: 1px solid var(--line); }
:is(.timeline__event, .xp-step) { border-block-width: 1px; border-inline-end-width: 1px; border-color: var(--line); }
.timeline__event { border-inline-start-color: var(--primary); }
.authorised { border: 2px solid var(--primary); }
.plate__art { border: 1px solid var(--line); }
.plate__dot { fill: var(--plate-mark); }
.plate__num { background: var(--plate-mark); }
.hero__caption, .photo__caption { border-block-end: 0; }
.search__input { border: 2px solid var(--line-strong); border-radius: var(--radius); }
.glossary-index__letters a, .timeline__decades a { border: 1px solid var(--line-strong); }
.compound-index__title { border-block-end-width: 2px; }
.csec { border-block-start-width: 3px; }

/* care, not stop: the "Important" callout gets the caution tint and rule; red stays in stop-now blocks only */
.callout--warning { background: var(--caution-tint); border: 0; border-inline-start: 8px solid var(--caution); --pg-cut: var(--caution-tint); }
.callout--uncertain { border: 2px dashed var(--line-strong); border-inline-start-width: 8px; }

/* footer: quiet panel, no colour slab */
.site-footer { border-block-start: 1px solid var(--line); }
.independence-marker a { background: var(--surface); color: var(--text); border: 1px solid var(--line); border-inline-start: 6px solid var(--primary); }
.independence-marker a:hover { background: var(--primary-tint); color: var(--text); }

/* solid brand fills: the same deep colour in both schemes (no pastel slabs in dark) */
.compound-badge[data-category='authorised'], .authorised__badge, .claim-badge[data-level='established'], .search__button, .xp-btn--toggle,
:is(.grade-matrix__buttons, .timeline__filters, .news__filters) button[aria-pressed='true'] { background: var(--primary-fill); color: var(--primary-fill-ink); border-color: var(--primary); --pg-cut: var(--primary-fill); }
```
