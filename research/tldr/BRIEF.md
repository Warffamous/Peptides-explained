# Brief: TL;DR boxes (27 October 2026)

The owner asked for a **TL;DR at the top of every page that warrants one**: "only the very essential information that
people are most likely to be looking for", readable **in one minute**. The old "In short" box (on compound pages "The
30-second version") is retired: the owner found it "just describes what is down there". Navigation now comes from a
chapter list on the side, so the TL;DR must not describe the page ("This page explains…"). It must **answer**.

## Format

In the page's frontmatter, **replace the `summary:` block, in the same place**, with a `tldr:` block:

```yaml
tldr:
  - q: "Does it work?"
    a: "Nobody knows in people. Almost all research is in rats, most of it from one lab in Zagreb."
  - q: "Can I buy it legally?"
    a: "…"
```

- `q` is the question a reader arrives with, in their words. At most 6 words (hard limit 8), ending in "?". On an
  action page a lead-in ending in ":" is allowed ("Life in danger:"), but prefer questions.
- `a` is the answer. Start with the direct answer where natural ("No.", "Nobody knows.", "Only with a prescription.").
  One or two short sentences, **aim for 18 words or fewer, never more than 25** (the validator fails above 30).
- **3 to 6 items.** Order: the most-wanted answer first.
- **Total words** (all q + a): **at most 120** on ordinary pages; **at most 85** on compound pages, because the four
  "At a glance" answer tiles sit inside the TL;DR box above these lines and already take about 70 words.
- YAML: every value in double quotes. Inside a value use typographic quotes (‘ ’ “ ”) or single straight quotes, never
  a bare double quote. Keep the 2-space indentation shown above.

## Compound pages: what the tiles already say (do not repeat it)

Inside the compound TL;DR box, above your lines, four tiles already answer: **Is it an approved medicine?** (per country,
US/UK/Canada/Australia, from the data file), **Has it been tested in people?**, **Is it allowed in sport?**, and
**What is the biggest risk?** (the page's `glance.main_risk`). Your 3–5 lines add what a reader wants next, for example:

- What is it, and what do people use it for / what is it sold for? (one line)
- What did the research actually find? (the key result, with its hedge: in rats, in one trial, only advice…)
- Can I get it legally? / Is it legal to buy, import or own? (only what the page says, for the four countries)
- For approved medicines: who it is for, how to get it (prescription), the common side effects, fakes.
- If you use it anyway: the one harm-reduction point the page stresses most (never a dose).
- Anything newsworthy the page stresses that readers search for (the July 2026 FDA advisory vote, a recall…).

## Ordinary pages

- **Safety pages:** the actions. What to do, when to get help, what to bring. Lead with the most urgent.
- **Legal pages:** "Is it legal to sell?", "Can I import it for myself?", "Can I own it?", "What can happen?",
  "Where do I report a side effect?" — whatever the page answers.
- **Basics, evidence, history pages:** the key takeaways phrased as the questions people ask ("Can I take it as a pill?",
  "Does a rat study tell me it works?").
- **Opinion page (the-case-for-reform):** it is the owner's signed opinion. The TL;DR must read as opinion ("We think…",
  "We propose…") and keep the owner-approved line: what we support is longer, healthier human lives. Do not touch its body.
- **Home page:** what this site is and the one or two things every visitor must know.

## Hard rules (the same as the rest of the site)

1. **No new facts.** Every claim must already be on that page (its body, its frontmatter, or the data the page shows). No
   new numbers, no stronger claims. Keep hedges: "in rats", "in one small trial", "only advice", "our reading",
   "unknown". If the page says something is uncertain, the TL;DR says so too.
2. **No doses**, amounts, schedules, cycle lengths or "how to use". **No seller names**, no buying help, no
   "trusted/reputable/third-party tested/legit". Approved brand names that the page itself uses (Wegovy, Mounjaro…) are fine.
3. **Emergencies:** write "call your local emergency number". Never print a phone number (911, 999, 000, 112, 111, 811…).
   Avoid service names with digits ("NHS 111") in the TL;DR.
4. **Countries:** the English site covers the **US, the UK, Canada and Australia** (plus short notes for Ireland and New
   Zealand on that one page). Never mention the EU, the Netherlands, Belgium, Germany or the EMA in a TL;DR.
5. **Plain English (B1):** everyday words ("feel sick", not "nausea"; "lab", not "in vitro"), short sentences, Flesch
   reading ease 60+. British spelling, but no UK-only words: "your doctor" (not "GP"), "the emergency department" (not "A&E").
6. **"Safe"** only for an approved medicine used as labelled, and say so. No "proven", no superlatives, no hype.
7. Change **nothing else** in the file: not the body, not other frontmatter keys.

## Check your work

Run `npx tsx scripts/validate-content.ts --only <file-name-part>` after each file and fix every error and every warning
about `tldr` (word counts, reading ease, question mark). Errors about other files are not yours.

Write an evidence table to `research/tldr/<your-group>.md`: for each page, each TL;DR item, and the exact sentence(s) on
that page that support it (quote them, with the section heading). A checker will use it to verify every line.
