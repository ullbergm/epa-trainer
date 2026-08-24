# EPA Trainer

[![CI](https://github.com/ullbergm/epa-trainer/actions/workflows/ci.yml/badge.svg)](https://github.com/ullbergm/epa-trainer/actions/workflows/ci.yml)
[![Latest release](https://img.shields.io/github/v/release/ullbergm/epa-trainer)](https://github.com/ullbergm/epa-trainer/releases)
[![License: MIT](https://img.shields.io/github/license/ullbergm/epa-trainer)](LICENSE)
[![Live site](https://img.shields.io/website?url=https%3A%2F%2Fepa.ullberg.io&label=epa.ullberg.io)](https://epa.ullberg.io)

[![Questions](https://img.shields.io/badge/questions-150-blue)](data/questions.js)
[![Dependencies](https://img.shields.io/badge/dependencies-none-blue)](package.json)
[![PWA](https://img.shields.io/badge/PWA-offline%20ready-blue)](manifest.webmanifest)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-blue)](CONTRIBUTING.md)
[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-blue)](https://www.conventionalcommits.org/en/v1.0.0/)

Practice questions with spaced repetition for the EPA Section 608 refrigerant
certification exams — Core, Type I, Type II, Type III, and Universal — and the
Section 609 MVAC certification. The bank has 150 multiple-choice questions
written from the regulations the exams test:
[40 CFR Part 82, Subpart F](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-F)
(stationary refrigerant management),
[Subpart B](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-82/subpart-B)
(motor vehicle air conditioning), and
[40 CFR Part 84](https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-84/subpart-C)
(the AIM Act HFC rules), plus the general refrigeration, recovery, and safety
material in EPA's published exam topic outline. Regulatory questions cite the
CFR section they came from, as a link that opens the current text on eCFR.

Live at [epa.ullberg.io](https://epa.ullberg.io), or run it yourself. There is
no build step, no dependencies, and no server. Just open `index.html` in a
browser. All progress is stored locally in the browser and never sent
anywhere. Settings has export and import for backups or for moving between
devices.

## The exams

Section 608 certification is required for anyone servicing stationary
refrigeration and air-conditioning equipment. Every sitting is 25 questions
per element at 70%: Core alone, Core plus one equipment Type, or all four
elements as the 100-question Universal exam. Section 609 covers motor vehicle
A/C and is offered by approved programs (MACS, ASE, ESCO), commonly as an
open-book test passing at 84%. Neither certification expires.

## Development

```
npm ci
npm run lint
npm test
npm run test:browser
```

The engine (study/exam/stats UI, FSRS scheduler, service worker, tests) is
synced verbatim from [trainer-engine](https://github.com/ullbergm/trainer-engine)
per `MANIFEST`; change engine files there, not here. This repo owns `data/`,
`css/app.css`, the page shell, and `tests/test.html`.
`docs/question-authoring.md` is the recipe the bank was written with.
