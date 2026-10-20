# Animated explainers

Short animations (10–15 seconds, 4–6 steps) that show **how something works or how two things
interact**: a medicine's route through the body, a feedback loop, why two drugs together are riskier
than either alone. They sit inside the page next to the text they illustrate, never instead of it.

In MDX it is one line:

```mdx
The short animation shows where semaglutide acts in the body, one step at a time.

<Explainer id="glp1-action" />
```

Live examples: `glp1-action` (mechanism section) and `insulin-glp1-hypo` (risks section) on
`/en/compounds/semaglutide/`.

---

## 1. The rules that do not bend

1. **No text inside the SVG.** Not words, not numbers, not letters on a label. Every word a reader
   sees is HTML from `src/i18n/<locale>/explainers.json`, so it translates and scales with the
   reader's text size. The validator fails on `<text>`, `<tspan>`, `<textPath>`, `<foreignObject>`,
   `<title>` or `<desc>` in an artwork file. Words on the picture are *overlays* (§3.3).
2. **The step list is the text equivalent.** The ordered list of captions is always in the page and
   always visible. The artwork is `aria-hidden`; nothing it shows may be missing from the list.
3. **The still picture is complete.** The default (un-animated) state of every part of the drawing is
   the **final frame**. That is what readers get with JavaScript off, with reduced motion, in print,
   and after the animation has finished. Design the final frame first; the animation only reveals it.
4. **Evidence is drawn honestly.** Every causal link has the evidence level of the step it belongs to:
   solid = shown in people, long dashes = shown in animals or cells, short dashes = a hypothesis
   (and, in design B, cyan for demonstrated, amber for hypothesised). When one step draws two links
   with different support (e.g. "brain areas from animal studies → eating less measured in people"),
   list both levels for that step.
5. **Sources are declared, not implied.** Every explainer lists its sources in the registry. They are
   numbered together with the page's own citations and appear in the page's source list.
6. **Nothing commercial, nothing glamorous.** No product shapes, no brand-like pens or vials, no
   injecting, no before/after. Medicines are abstract glyphs (a capsule, a hexagon, a tablet), and
   a glyph always comes with its word (rule 8a).
7. **Plain words.** Captions are CEFR B1: short sentences, everyday words, one idea each, at most
   18 words (the validator warns above 18 and fails above 30, and checks reading ease).
8. **Clarity rules — mandatory for every explainer.** A reader with low health literacy must get the
   message without decoding anything. The owner rejected a first version of `insulin-glp1-hypo` as
   "not quite intuitive and clear": three unexplained icons, a black square nobody named, numbered pins
   floating away from what they numbered, two lines whose meaning was never written on the drawing,
   and an explanation that lived only in a side list. These rules exist so that does not happen again.

   a. **Every element on the drawing has a word next to it** (an overlay label from `labels`). No
      icon, colour or shape whose meaning the reader must guess. Prefer words over symbols: "More
      insulin" instead of an up-arrow. An icon only together with its word — use the label's `icon`
      (§3.3), which draws it inside the label, right before the word, in every language and direction.
   b. **One message per scene.** Only the part being talked about is strong; everything else is
      faded (`xp-focus`, §3.1). Build the picture up in scenes; do not show a busy diagram and ask the
      reader to find the part that matters.
   c. **Labels sit directly on or next to what they explain.** Numbered pins only if they sit ON
      their element; otherwise drop the pin and label the element directly.
   d. **The current step's sentence appears large, right under the drawing,** while it plays, so the
      eye never jumps to a side list. The engine does this for every explainer (§3.4); the full list
      stays below or beside it as the text equivalent.
   e. **Plain axis and zone words**: "Blood sugar", "Time", zones "High", "Healthy range", "Too low".
      Colour is never the only carrier: every zone and line has its word, and lines differ in shape
      or position as well as colour.
   f. **The final frame tells the whole story on its own** (it is what readers get with reduced
      motion and without JavaScript): every line and zone labelled, e.g. "Slows down, stays in
      range", "Usual insulin or tablet dose: keeps falling", "Smaller insulin or tablet dose: stays in
      range", "Too low? Take sugar now". A label names its subject: "Smaller dose" alone can be read as
      "take less semaglutide"; say whose dose. Give the still a one-sentence
      `caption` (§2), shown large under it.
   g. **5-second test**: show one still frame plus its caption to someone who has not seen it (or
      read it as if you had not). They must be able to say the message in their own words. Do it for
      every scene and for the final frame, at 360 px.
   h. **Captions at most 18 words, B1, Flesch reading ease 60 or more** (the validator checks the
      step captions and the still's caption).

## 2. Files

| What | Where | Notes |
|---|---|---|
| Registry (locale-independent) | `src/data/explainers.yaml` | duration, steps with evidence levels, sources, `mirror`, pages, review status. Schema: `src/schemas/explainers.ts`. |
| Captions | `src/i18n/<locale>/explainers.json` | `{ "<id>": { "title", "steps": [one per step], "summary", "caption", "labels": { key: word } } }`. `caption` (optional, but give one): the still's one sentence, shown large under the final frame; it may say nothing the summary does not. A label may contain `\n` for a line break the translator chooses. |
| UI strings | `src/i18n/<locale>/explainer-ui.json` | Play, Pause, Replay, legend, "Based on", notices. |
| Artwork | `src/components/explainers/<id>.astro` | Inline SVG + overlays. Helpers in `src/components/explainers/parts/`. |
| New sources | `src/data/sources/explainers.yaml` (or the topic's own file) | Metadata copied from PubMed / the fetched page, never from memory. |
| Engine | `src/components/mdx/Explainer.astro`, `src/scripts/explainer.ts`, `src/plugins/remark-explainer-sources.mjs` | |
| Styles | `src/styles/base/explainer.css` (structure, timeline), `src/styles/themes/<a\|b\|c>/explainer.css` (motion language, colours) | |

## 3. How it works

### 3.1 One timeline, no script for sync

The figure carries `--xp-dur` (seconds) and `--xp-steps`; each step lasts `--xp-step = dur / steps`.
Every animated part has `--k` (its step, 0-based) and optionally `--lag` (seconds into the step), and
starts at `k × step + lag`. The caption highlight, the step pins, the progress segments and the
artwork all use the same clock, so they cannot drift apart. The script
(`src/scripts/explainer.ts`, under 1 KB gzipped) only adds and removes `is-playing` / `is-paused`.

Write positions with the helpers from `parts/timeline.ts`:

```astro
<path {...link(L[1][0], 1)} d="…" />                         <!-- a causal link drawn in step 2 -->
<circle class="xp-ring xp-in" style={at(1, 0.6)} … />           <!-- appears 0.6 s into step 2 -->
<g class="xp-in xp-move" style={at(0, 0.2, '--dx:-44px')}>…</g> <!-- slides in from the left -->
```

| Class | Does | Default (final frame) |
|---|---|---|
| `xp-in` | appears at step k | visible |
| `xp-move` | with `xp-in`: arrives from `--dx`/`--dy` | in place |
| `xp-out` | disappears at step k (e.g. "less glucagon") | hidden |
| `xp-shrink` | shrinks to `--s` at step k (e.g. "lower dose") | shrunk |
| `xp-ghost` | fades to a ghost at step k ("what would have happened") | ghosted |
| `xp-pulse` | one beat of emphasis during step k | still |
| `xp-link` + `data-level` | a causal link; pattern (and colour in B) from the level | drawn |
| `xp-curve` | a data line (drawn on in A and B, appears in C) | drawn |
| `xp-focus` + `--span` | strong during steps k … k + span − 1, faded the rest of the run (rule 8b) | strong |

`xp-focus` is how a scene puts one message forward: wrap each part in a group with the step(s) it
belongs to, e.g. `<g class="xp-focus" style="--k:2"><path class="xp-curve xp-in" …/></g>`. It only
acts while playing (the final frame shows everything strong), shapes fade to `--xp-dim` (set per
design) and words fade less. Give the last scene `--span:2` so it stays strong to the end of the run.
Overlay labels take the same as `focus`/`span` props.

Do not put two of `xp-in`, `xp-out`, `xp-shrink`, `xp-ghost`, `xp-pulse` on the same element: nest
groups instead (`<g class="xp-in"><g class="xp-shrink">…`). Do not use `<use>`: page CSS cannot
style the inside of a `<use>` copy, so repeated shapes are written out (a `.map()` is fine).

Role classes give the colours, which each design sets: `xp-vessel`, `xp-organ`, `xp-cell`, `xp-rec`,
`xp-ring`, `xp-alb`, `xp-drug`, `xp-tail`, `xp-glu`, `xp-ins`, `xp-gcg`, `xp-su`, `xp-food`,
`xp-plate`, `xp-inset`, `xp-hot`, `xp-arrow`, `xp-zone`, `xp-danger`, `xp-danger-hot`, `xp-axis`,
`xp-warn`, `xp-sugar`, `xp-detail` (fine detail, dropped in design C). Add a role to all three theme
files when you need a new one.

### 3.2 Three motion languages

| | A Monograph | B Mechanism | C Public Health |
|---|---|---|---|
| Proven links | drawn on as a line, linear | drawn on, ease-out, soft glow | appear |
| Weaker links | dashes resolve in four plain steps | fade in, amber if hypothesis | appear, thick dashes |
| Molecules | appear in place (no travel) | arrive on a spring | slide a short way |
| Pins | square, hairline, monospace | round, neutral (colour is for evidence) | big teal discs |
| Danger zone | hatched ink, no red | alert tint | alert red (stop-now content only) |
| Detail | hairline anatomy | full detail | fine detail dropped, bold shapes |

### 3.3 Overlays (pins and words on the picture)

`parts/Overlay.astro` places HTML over the artwork at viewBox coordinates:
`<Overlay n={2} x={100} y={256} w={W} h={H} locale={locale} />` is the pin for step 2 (only ON the
element it numbers, rule 8c); `<Overlay text={label('pancreas')} x={160} y={286} … align="center" />`
is a word. Words come from the `labels` object in `explainers.json`; the artwork throws if a key is
missing. Keep labels short and put them where a longer translation still fits; check 360 px.

| Prop | Does |
|---|---|
| `align` / `valign` | which edge sits at x (`start`, `center`, `end`) and at y (`top`, `middle`, `bottom`: a label that must end just above a line hangs from `bottom`) |
| `max` | wrap width as % of the canvas (default 34) |
| `k`, `lag` | the word appears with its part of the drawing (as `xp-in`) |
| `focus`, `span` | strong only during its scene (as `xp-focus`) |
| `icon` | `check`, `warn` or `sugar`: drawn inside the label before the word, coloured by the design (never an icon on its own, rule 8a). Add new icons to `Overlay.astro` and the three theme files. |
| `tone` | `zone`, `axis` or `note` (a short sentence about a line): each design styles them; A sets notes in the text face, not its uppercase plate lettering |
| `ground` | the word sits on a pattern (A's hatching): A gives it a paper backing so it stays legible; other words in a chart get none (a box on a tinted band reads as one more shape) |

A `\n` in a label is a line break (the translator decides where, e.g. `"Smaller insulin\nor tablet dose:\nstays in range"`).
Words in a chart panel are at least 14 px (0.875rem); keep each line short enough to sit between its
line and the next mark at 360 px, and check it in all three designs (their faces differ in width).

### 3.3a Panels (small multiples)

To compare two situations, draw two small charts side by side instead of one crowded one:

```astro
<div class="xp-panels">
  <div class="xp-panel">
    <p class="xp-panel__title xp-focus" style="--k:0">…title from labels…</p>
    <div class="xp-panel__art"><svg class="xp-art" …>…</svg><Overlay … /></div>
  </div>
  <div class="xp-panel">…</div>
</div>
```

Panels sit side by side when the drawing is at least 34rem wide and stack below that, so each panel
keeps the full width on a phone. Titles share a row (subgrid), so the charts line up. Each panel is its
own canvas: overlay positions and sizes follow the panel. In RTL with `mirror: true` the panels swap
sides together with their drawings. See `insulin-glp1-hypo`.

### 3.4 Playback and accessibility

- Autoplay only when the artwork is at least half in view, motion is allowed and the reader has not
  asked to save data. At most **two runs**, then rest on the final frame.
- A visible **Pause/Play** and **Replay** control with text labels (WCAG 2.2.2), keyboard-operable,
  in a labelled group. Playback pauses while scrolled out of view and resumes when back.
- **The current step, large, under the drawing** (rule 8d): the engine repeats each step caption in a
  box right under the stage, shown only during its step on the same clock (A cuts, B and C fade in
  briefly). All captions share one grid cell, so the box is as tall as the longest from the first
  paint: no layout shift. At rest the box shows the still's `caption`. It is `aria-hidden`: the list
  and the summary carry the same words for assistive technology.
- `prefers-reduced-motion: reduce`: no animation at all, no controls, a one-line note; the final frame,
  its caption and the step list carry everything.
- JavaScript off: the same still, caption and list (no motion, so no control is needed).
- Nothing flashes; a pulse is a single, slow beat. No colour is the only carrier of meaning: line
  pattern and the badge text repeat it.

### 3.5 RTL

The stage is laid out LTR so overlays sit on the drawing. **Anatomy never mirrors.** A drawing that is
a direction-neutral flow — typically a time axis — may opt in with `mirror: true` in the registry;
under `dir="rtl"` the artwork and its overlays then mirror together. Captions, numbers and controls
follow the page direction as usual; numbers are in `<bdi>`.

## 4. Adding an explainer

1. **Outline** 4–6 steps on paper: for each, what happens, where, and how well it is shown. Decide the
   final frame first. If you cannot draw it without words, it is not an explainer; write a paragraph.
   For each scene write down the one thing that is strong and the word next to it (rules 8a–8c). If two
   situations are compared, use two panels (§3.3a) rather than more lines on one chart.
2. **Verify** every fact against a primary source (PubMed tools, the EMA/FDA label, a guideline). Reuse
   registered source ids; add new ones to `src/data/sources/explainers.yaml` with metadata copied from
   the record and a `note` saying what you cite them for.
3. **Register** it in `src/data/explainers.yaml`: `duration` (10–15), `steps` with `levels` (and a C
   `pictogram` per step), `sources`, `mirror`, `pages`, `review: { status: pending }`.
4. **Write the captions** in `src/i18n/en/explainers.json`: `title`, one caption per step (B1, ≤ 18
   words, reading ease ≥ 60), `summary`, the still's `caption`, `labels`.
5. **Draw** `src/components/explainers/<id>.astro`: a `viewBox` SVG with `width`/`height` set (no
   layout shift), role classes, `link()`/`at()` from `parts/timeline.ts`, `xp-focus` per scene, a word
   from `labels` beside every element, pins only on the element they number. Keep the SVG under
   about 10 KB.
6. **Place** it with a one-sentence lead-in: `<Explainer id="<id>" />`, and add the route to `pages`.
7. **Check**: `npm run validate`, `npm run lint:css`, then look at it in all three designs, light and
   dark, at 360 px and 1280 px, with `?pseudo=rtl`, with reduced motion and with JavaScript off. Take a
   still of every scene and the final frame and do the 5-second test (rule 8g).

## 5. Review checklist (before `review.status: ok`)

A medical reviewer signs off with `review: { status: ok, by: <person id>, on: <date> }`.

- [ ] Anatomy and physiology are right: organs, cell types, receptor locations, direction of flow.
- [ ] Every step's evidence level matches the cited sources; nothing proven in animals is drawn solid.
- [ ] The final frame alone, with the list, tells the whole story; nothing important appears only mid-run.
- [ ] Clarity rules 8a–8h: a word beside every element and icon, one strong message per scene, pins
      only on their element, every line and zone named in the final frame, a still caption, and each
      still passes the 5-second test.
- [ ] No text, numbers or letters inside the SVG; overlay words are in `labels`.
- [ ] Captions are B1, one idea per sentence, no dose numbers, no advice beyond the label or guideline.
- [ ] Nothing looks like a product, a vendor's vial, a brand, a before/after, or glamorised injecting.
- [ ] Works and stays legible in A, B and C, light and dark, 360 px and 1280 px, RTL, reduced motion, no JS.
- [ ] Red is used in design C only for stop-now safety content.

## 6. Backlog

Each needs the same verification as any page. Levels are a first estimate to check against sources.

**why-not-a-pill** — `basics/why-not-a-pill`, `start-here`. Anatomy, no mirror.
1. A peptide is swallowed and reaches the stomach (human).
2. Stomach acid and pepsin start cutting its chain (human).
3. Enzymes from the pancreas and the gut wall cut it into single amino acids, like food protein (human).
4. What is left is too big and too water-loving to cross the gut wall (human).
5. Injected under the skin, it reaches the blood whole (human).
6. Oral semaglutide is the exception: a helper molecule lets a small share through in the stomach (human; local mechanism partly in-vitro/animal).

**receptor-signalling** — `basics/how-signalling-works`. Cell schematic, top to bottom, no mirror.
1. A hormone or peptide fits a receptor on the outside of the cell (in-vitro).
2. The receptor changes shape and switches on a G protein inside (in-vitro).
3. One switched-on enzyme makes many cAMP messengers: amplification (in-vitro).
4. Kinases pass the signal on to many proteins; the cell responds (in-vitro).
5. The receptor is pulled inside or switched off, so the signal stops (in-vitro).

**half-life-steady-state** — `basics/pharmacokinetics`. A level-over-time chart, `mirror: true`; **no dose numbers**.
1. Each dose raises the level in the blood (human).
2. The body removes the same share in every half-life (human).
3. Repeated doses stack up until removal matches intake: steady state after about four to five half-lives (human).
4. After the last dose the level halves every half-life (human).
5. A long half-life means effects and side effects also last long after stopping (human).

**gh-axis-feedback** — `compounds/cjc-1295`, `compounds/ipamorelin`, `compounds/tesamorelin`. Anatomy, no mirror.
1. The hypothalamus releases GHRH in pulses (human).
2. The pituitary answers with growth hormone pulses (human).
3. The liver makes IGF-1 (human).
4. GH and IGF-1 brake the system through somatostatin: negative feedback (human).
5. A GHRH analogue (tesamorelin, CJC-1295) pushes step 1; a ghrelin-receptor agonist (ipamorelin) pushes the pituitary directly (human for tesamorelin; human-limited/phase 1–2 for the others).
6. Sustained pushing raises IGF-1; long-term effects outside trials are unknown (hypothesis for long-term harms).

**incretin-multi-agonism** — `compounds/tirzepatide`, `compounds/retatrutide`. Anatomy, no mirror.
1. One molecule binds more than one receptor (in-vitro).
2. GLP-1 receptor: insulin, glucagon, stomach, appetite, as in `glp1-action` (human).
3. GIP receptor: more insulin when glucose is high; effects on fat tissue and the brain (human for insulin; animal for fat/brain).
4. Glucagon receptor (retatrutide): the liver and energy use (human-limited / animal).
5. Trials show larger falls in weight and HbA1c than with GLP-1 alone (human); how much each receptor contributes is not settled (hypothesis).

**melanocortin-receptors** — `compounds/melanotan-ii`, `compounds/pt-141`. Anatomy, no mirror.
1. The peptide copies α-MSH and fits several melanocortin receptors (in-vitro).
2. MC1R on pigment cells: more dark pigment, tanning (human).
3. New or changing moles have been reported with melanotan II (human, case reports).
4. MC4R in the brain: sexual arousal (bremelanotide, authorised in the US), less appetite (human).
5. The same receptors raise blood pressure briefly and cause nausea and flushing (human).

**contamination-infection** — `safety/sterile-technique`, `safety/product-risk`. Skin cross-section, no mirror; C may use alert red for the sepsis signs.
1. Bacteria are in a non-sterile vial, on the skin or on the needle (human).
2. The needle carries them under the skin (human).
3. In the tissue they multiply; the body walls them off: an abscess forms (human).
4. Bacteria can spread into the blood: sepsis (human).
5. Warning signs: spreading redness, heat, swelling, pus, fever, feeling very ill → get help now (human).

**angiogenesis-double-edge** — `compounds/bpc-157`, `compounds/tb-500`. Hypothesis-level throughout; mostly dashed (amber in B). Place only after the BPC-157 rewrite is finished.
1. In rat and cell studies the peptide increased growth-factor signalling (VEGF pathway) (animal / in-vitro).
2. New small blood vessels grew into injured tissue in rats (animal).
3. Injured tendon or gut healed faster in those rat models (animal).
4. Tumours also need new blood vessels to grow: well established in cancer biology (human).
5. Whether these peptides could feed a hidden tumour in people has not been studied (hypothesis).
