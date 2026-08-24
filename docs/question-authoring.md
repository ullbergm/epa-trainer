# Writing the question bank

This is the recipe the question bank was written with.

## How a question is used

Knowing where each field surfaces explains most of the rules below:

- The app shuffles the choices every time a question is shown, so the
  position of the correct answer in the data does not matter. The length and
  wording of the choices show every time, so patterns there matter a lot.
- Choices phrased like "All of the above" are detected (any choice starting
  with all/none/any/both "of the above" or "of these") and kept below the
  choices they refer to, whatever the shuffle does.
- The explanation is shown after a wrong answer, in Browse, and in the mock
  exam review. It has to teach the rule on its own.
- Each question is a spaced-repetition flashcard. Two questions about the
  same fact are scheduled independently, so drilling one silently answers
  the other and inflates the readiness projection.
- A CFR citation becomes a deep link into eCFR at that section. It is how a
  reader verifies a question against the current regulation.

## The schema

`data/questions.js` is a JSON array behind a `const`. Sections are exam
topics (`EXAM_CONFIG.flatSections`): 1–11 Core, 12–13 Type I, 14–16 Type II,
17–19 Type III, 20–22 the Section 609 MVAC program. Ids are `s<section>-NNN`.

An uncited entry — the general refrigeration, recovery, and safety material
that has no official manual:

```json
{
  "id": "s5-003",
  "section": 5,
  "sectionName": "Refrigeration Basics",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 3,
  "explanation": "..."
}
```

A regulatory entry cites the CFR section it came from. `manual` picks the
source (`cfr608` for 40 CFR 82 Subpart F, `cfr609` for Subpart B, `aim` for
40 CFR 84 Subpart C), `ref` is the citation as it reads ("§ 82.156"), and
`page` is the key into that source's anchor map in `data/cfr-anchors.js`,
which turns the citation into a deep link:

```json
{
  "id": "s3-002",
  "section": 3,
  "sectionName": "Section 608 Regulations",
  "question": "...",
  "choices": ["...", "...", "...", "..."],
  "answer": 0,
  "explanation": "...",
  "manual": "cfr608",
  "ref": "§ 82.161",
  "page": "82.161"
}
```

## The rules

- Four choices, one correct, distractors plausible to someone who skimmed
  the material. A distractor that is true but off-topic beats an absurd one.
- No two questions on the identical fact; the validator catches duplicate
  stems, but near-duplicates are on the author.
- Regulatory numbers (evacuation levels, leak rates, dates, thresholds) are
  written only from the current eCFR text or an EPA fact sheet, and cite it.
  Regulations move — the May 2026 Technology Transitions revisions reversed
  guidance that was current five months earlier — so an uncited number is a
  future bug.
- The 608 exam's two regimes must not be blurred: the ozone-era rules
  (40 CFR 82 Subpart F) still govern ODS appliances and everything about
  technician certification and venting, while the AIM Act rules
  (40 CFR 84) carry the HFC leak-repair, reclamation, and cylinder
  provisions. Say which regime a question lives in when it matters.
- Explanations teach the why, not just the what, and never say "see the
  regulation" without stating the rule.
- The real exams' questions are not public; nothing here claims to match
  them. Do not copy items from commercial prep banks.

## Validation

`npm test` runs `tests/validate-bank.js` over the bank: schema, unique ids,
duplicate stems, answer bounds, section-name consistency, and that every
cited `page` resolves through `data/cfr-anchors.js`.
