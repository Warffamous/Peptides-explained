# Checker brief: TL;DR boxes (27 October 2026)

Writers replaced each page's old `summary:` with a `tldr:` block (rules: `research/tldr/BRIEF.md`). Each writer left an
evidence table in `research/tldr/<group>.md`. Your job is an **independent, adversarial check of every TL;DR line**
against the page it sits on. Do not trust the evidence table: open the page and find the support yourself.

For every `q`/`a` pair, decide:

1. **Supported?** The page (body, frontmatter, or the compound's data file `src/data/compounds/<slug>.yaml`) says this.
   No new fact, number or name. Numbers match exactly (or are a fair rounding the page itself uses).
2. **Not stronger than the page.** Hedges kept: "in rats", "in one small trial", "only advice", "reports say", "our
   reading", "unknown", "not yet checked by a lawyer". A finding from one study must not read as settled. Legal points
   the page marks as open must stay open.
3. **Not misleading by omission.** Would a reader acting on this line alone be misled about safety or the law? (Example:
   "The fat grew back within six months" could read as "all of it"; check what the page says.)
4. **Rules:** no doses or use instructions; no seller help or seller-judging words; never an emergency number (English
   says "call your local emergency number"); only the US, UK, Canada, Australia (Ireland/NZ on their page); no EU,
   Netherlands, EMA; "safe" only for an approved medicine used as labelled.
5. **Essentials:** does the TL;DR answer what a reader of this page most likely came for? On compound pages the four
   tiles (approved? tested in people? sport? biggest risk = `glance.main_risk`) sit above the lines, so the lines should
   not repeat them. Flag a missing essential only if it is clearly more important than a line that is there.

**Fix what is wrong, in place**, keeping the format and limits (3–6 pairs; answers ≤ 18 words, never > 25; total ≤ 120
words on ordinary pages, ≤ 85 on compound pages; questions ≤ 6 words ending in "?"). Change nothing but the `tldr:` block.
After each fix run `npx tsx scripts/validate-content.ts --only <file-name-part>` (0 tldr errors or warnings).
Do not run the dev server or a build, and do not commit.

Report: per page, PASS or FIXED (old line → new line, and why, quoting the page). Write it to
`research/tldr/check-<group>.md` and end with a short summary of what you changed.
