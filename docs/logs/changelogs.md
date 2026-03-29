# Changelogs

Newest entries first. Every change must add one entry before commit/push.

---

## 2026-03-29T17:55:17Z

- **Who:** Copilot CLI agent
- **What:** Rewrote `/use-cases` copy with entirely new narrative voice and deeper section-level storytelling
- **When:** 2026-03-29T17:55:17Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User said current copy was not real/strong enough and requested a complete copy replacement with serious quality
- **How:** Added a lesson to enforce richer narrative depth when requested, then replaced hero/case/principles/journey/proof/fit/CTA language with fresh StoryBrand-grade copy focused on operational tension, stakes, guidance, and measurable outcomes; kept layout mechanics and readability hierarchy intact, and validated with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:46:09Z

- **Who:** Copilot CLI agent
- **What:** Refactored `/use-cases` to remove repeated grid/card mechanics and enforce distinct section layout systems
- **When:** 2026-03-29T17:46:09Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly flagged repetitive design patterns and required each section to use unique layout/style mechanics
- **How:** Added a new lesson to forbid repeated grid/card systems across the page, then rebuilt use-cases sections with varied structures (single hero shell, horizontal timeline rail, split narrative panel, horizontal storyboard reel, accordion principles, diagram-style execution strip, single matrix block, CTA), while preserving readability hierarchy and validating with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:30:34Z

- **Who:** Copilot CLI agent
- **What:** Expanded `/use-cases` into a richer StoryBrand-driven page with deeper narrative, copy, and section architecture
- **When:** 2026-03-29T17:30:34Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User asked for a much richer route comparable to homepage/product depth, with stronger storyboard logic and copy strategy
- **How:** Rebuilt the route with multiple narrative sections (hero + guide note, chapter navigation, storyboard scene stack, messaging principles, execution journey, fit matrix, CTA), rewrote copy around StoryBrand flow (hero/problem/plan/success), implemented matching responsive CSS module with neutral readability hierarchy + orange emphasis, and validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T17:17:29Z

- **Who:** Copilot CLI agent
- **What:** Restored neutral text/border hierarchy rules and fixed `/use-cases` readability by replacing overly orange text treatment
- **When:** 2026-03-29T17:17:29Z
- **Where:** `.claude/style-guideline.md`, `.claude/task/lessons.md`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User clarified prior request scope: only gray backgrounds should be avoided; text and borders should keep readable dark/gray hierarchy
- **How:** Updated style guideline to allow neutral text/borders while still forbidding gray section backgrounds, refined lessons to prevent removing neutral hierarchy, changed use-cases text and divider colors from orange-heavy values to readable neutral tones, then validated with `npm run build`
- **File path(s) changed:**
  - `.claude/style-guideline.md`
  - `.claude/task/lessons.md`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:50:37Z

- **Who:** Copilot CLI agent
- **What:** Replaced `/use-cases` page architecture with a materially different scenario-driven layout (not a color-only tweak)
- **When:** 2026-03-29T16:50:37Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User said the redesign still felt the same and requested a real change in use-cases design direction
- **How:** Added new feedback lesson for structure-first redesigns, then rebuilt the route into a new composition: split hero with problem panel, case selector pills, 3-card scenario snapshot (trigger/interventions/outcomes), execution drill grid, fit matrix section, and solid-orange CTA; kept strict white + brand-orange palette and validated with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:33:00Z

- **Who:** Copilot CLI agent
- **What:** Rebuilt `/use-cases` into a unique interactive editorial layout and aligned it to strict white + brand-orange-only styling
- **When:** 2026-03-29T16:33:00Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested a better, non-templated, unique use-cases page inspired by the reference format while staying distinct from `/product` and compliant with palette rules
- **How:** Replaced use-cases page structure with dispatch rail + active case sheet + operating loop + fit-check + solid-orange CTA, implemented full matching CSS module, fixed class composition helper safety, removed non-brand gray/black tones in this page, then validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:21:27Z

- **Who:** Copilot CLI agent
- **What:** Made the product page background pattern visibly match homepage behavior
- **When:** 2026-03-29T16:21:27Z
- **Where:** `src/app/product/product-page.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported pattern still not visible after prior scoped update
- **How:** Changed major product sections (`hero`, `contrast`, `features`, `how`, `stack`, `testi`, `pricing`) from solid white to transparent backgrounds so the page-level pattern layer shows through while keeping non-background palettes untouched
- **File path(s) changed:**
  - `src/app/product/product-page.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T16:16:44Z

- **Who:** Copilot CLI agent
- **What:** Reverted overbroad product color changes and reapplied only requested scope: homepage-like pattern + gray background replacement
- **When:** 2026-03-29T16:16:44Z
- **Where:** `.claude/task/lessons.md`, `src/app/product/page.tsx`, `src/app/product/product-page.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested strict scope: keep existing non-background colors and only change product background pattern + gray backgrounds
- **How:** Reverted prior broad commit, added a process lesson to prevent palette overreach, wrapped product page with patterned container, then changed only gray background values to white/orange-tint backgrounds while preserving text/icon/button color palette
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/product/page.tsx`
  - `src/app/product/product-page.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T15:53:02Z

- **Who:** Copilot CLI agent
- **What:** Enforced mandatory changelog-first workflow and automatic commit/push behavior in project instructions
- **When:** 2026-03-29T15:53:02Z
- **Where:** `.claude/CLAUDE.md`, `.github/copilot-instructions.md`, `.claude/task/lessons.md`, `docs/logs/changelogs.md`
- **Why:** User explicitly required no reminders for push and required every change to be documented with 5W+1H before commit/push
- **How:** Replaced old changelog path rules with `docs/logs/changelogs.md`, added explicit 5W+1H + file path requirements in instruction workflows, and added matching process lessons to prevent repetition
- **File path(s) changed:**
  - `.claude/CLAUDE.md`
  - `.github/copilot-instructions.md`
  - `.claude/task/lessons.md`
  - `docs/logs/changelogs.md`

## 2026-03-29T15:53:02Z

- **Who:** Copilot CLI agent
- **What:** Updated project instruction files to enforce mandatory changelog logging before every commit/push
- **When:** 2026-03-29T15:53:02Z
- **Where:** `.claude/CLAUDE.md`, `.github/copilot-instructions.md`, `docs/logs/changelogs.md`
- **Why:** User required strict workflow: always commit/push after each change and always document edits using 5W+1H
- **How:** Edited both instruction files to replace old log path/rules with `docs/logs/changelogs.md` policy, added explicit 5W+1H schema, then created this changelog file as the canonical log destination
- **File path(s) changed:**
  - `.claude/CLAUDE.md`
  - `.github/copilot-instructions.md`
  - `docs/logs/changelogs.md`
