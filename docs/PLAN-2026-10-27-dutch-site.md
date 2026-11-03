# Plan: the Dutch site (27 October 2026)

**Goal.** A complete Dutch site under `/nl/` for readers in the Netherlands (with EU law, and Belgium as
you choose below): every page, compound page, UI string and glossary term in Dutch, every Dutch, EU and
Belgian fact re-checked, built in **preview** (not indexed, not uploaded). It goes live only after you say
yes to publishing.

## Where we start

- `nl` is already a preview locale: `/nl/` builds today, but it shows the English pages with a banner.
  Only the three "Bel 112" strings are in Dutch.
- The Dutch and EU material cut from English on 23 October is saved (`research/for-nl-site/`, tag
  `nl-source-2026-10-23`): the old `legal/nl`, `eu`, `be` pages, the six Dutch treatment routes, the Dutch
  safety and help sections, about 55 Dutch glossary terms, the Dutch photos.
- Gaps: 9 compounds have no Belgian status row; the NL and BE contact cards list no help services
  (huisarts, huisartsenpost, NVIC, drugs advice, 113); facts were last checked 20–23 October.

## How each page is made

The **current English page** is the base (it has the newest science, the TL;DR, the chapters and the
lab-report ladder). The saved Dutch and EU sections go back in. Then it is written in Dutch, not word for
word: B1 on safety and legal pages, Dutch words for Dutch readers, Dutch rules and help on every page
where the answer depends on the country. Science stays identical: same sources, same evidence levels,
same studies and numbers.

## Steps

1. **Research and re-check** (about 10 agents): Dutch law, enforcement and treatment routes; Dutch help
   and reporting services; EU status of all 21 compounds and the state of the EU medicines reform;
   Belgium. Each research file gets an independent fact-check.
2. **Data** (2 agents): new status rows, contact cards with help services, new sources, the allowed
   links, a residue check for Dutch (no US/UK/Canada/Australia framing as the reader's frame).
3. **Word list and UI** (about 6 agents): a short Dutch style sheet first (so all writers use the same
   words), then every UI string, the warning signs and the glossary.
4. **Pages and compound pages** (about 30 agents): 15 groups, each with a writer and an independent
   fact-checker who compares against the English page and the sources.
5. **Final check** (2–3 agents): full build, all checks, browser check at phone width, a review list for
   you (`docs/REVIEW-…-dutch-site.md`).

About 50 agents in total, run as several workflows in a row so I can check between steps.

## Stays for you or a reviewer

- **The reform page** is your signed opinion: I draft the Dutch version (the English text plus the Dutch
  proposals you had on 23 October) and you approve it before it goes out.
- No page is reviewed by a doctor or lawyer yet; Dutch pages say "review pending", like English.
- Publishing: a separate yes/no from you at the end.
