# Changelogs

Newest entries first. Every change must add one entry before commit/push.

---

## 2026-03-30T22:51:57Z

- **Who:** Copilot CLI agent
- **What:** Aligned use-cases hero persona copy semantics and text-button color hierarchy with reference intent + homepage/product button conventions; added explicit parity rules to lessons/style guideline
- **When:** 2026-03-30T22:51:57Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `.claude/task/lessons.md`, `.claude/style-guideline.md`, `docs/logs/changelogs.md`
- **Why:** User reported hero option differences from `docs/references/use-case.html` and inconsistent text-button colors compared with homepage/product
- **How:** Re-synced hero persona sub-copy punctuation/wording to reference semantics (apostrophes/em dash usage), updated use-cases secondary/outline text-button styling to neutral cross-page hierarchy (`ink-2` default, `ink` hover) while preserving primary CTA token parity, then codified new guardrails in lessons/style guideline; validated with `npm run build` (lint failures remain existing unrelated repo issues)
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `.claude/task/lessons.md`
  - `.claude/style-guideline.md`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:44:03Z

- **Who:** Copilot CLI agent
- **What:** Fixed the time-to-ship comparison bars so Prodvo rows no longer show a full grey track behind the orange fill
- **When:** 2026-03-30T22:44:03Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported the “With Prodvo” bars looked incorrect because grey still appeared across the full traditional length behind orange
- **How:** Made `.ship-bar-track` transparent (removing unintended background rail for both rows) and normalized `.without-fill` to own full-height grey bar (so only the traditional row is grey), then validated with `npm run build` (lint failures remain unrelated existing repo issues)
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:41:53Z

- **Who:** Copilot CLI agent
- **What:** Removed all `->` arrow text from the `/use-cases` page copy
- **When:** 2026-03-30T22:41:53Z
- **Where:** `src/app/use-cases/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested deleting `->` across the entire use-cases page
- **How:** Replaced every `-&gt;`/`->` instance in `/use-cases` CTA and inline strings (hero CTA, non-technical CTA, schedule line, final CTA), then verified no arrow tokens remain via ripgrep and validated with `npm run build` (lint still fails on unrelated existing files)
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:39:28Z

- **Who:** Copilot CLI agent
- **What:** Removed lingering dark-orange (`#c2410c`) tone from use-cases hero primary CTA base/hover and codified conversion guidance in lessons + style guideline
- **When:** 2026-03-30T22:39:28Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `.claude/task/lessons.md`, `.claude/style-guideline.md`, `docs/logs/changelogs.md`
- **Why:** User reported the hero button still appeared in the wrong tone and requested explicit project rules to avoid future HTML-to-TSX color carry-over mismatches
- **How:** Updated `.btn-primary-lg` and hover in use-cases CSS to use homepage-equivalent primary tokens (`--fire-orange` and `--fire-orange-dark`) with subtle shadow parity, then added explicit rule entries to lessons and style guidelines requiring token normalization when source HTML hex values conflict with shared CTA tone; validated with `npm run build` (lint failures remain pre-existing outside this change)
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `.claude/task/lessons.md`
  - `.claude/style-guideline.md`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:36:15Z

- **Who:** Copilot CLI agent
- **What:** Aligned `/use-cases` hero primary CTA background/hover appearance with homepage primary button behavior
- **When:** 2026-03-30T22:36:15Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported the use-cases hero button still looked different from homepage hero primary CTA
- **How:** Updated `.hero-ctas .btn-primary-lg` and its hover state to keep the same orange pair as homepage (`--fire-orange` / `--fire-orange-dark`) while matching the subtle homepage shadow treatment (`0 1px 2px rgba(0, 0, 0, 0.06)`), then validated with `npm run build` (lint remains failing only on existing unrelated files)
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:26:49Z

- **Who:** Copilot CLI agent
- **What:** Unified header/footer shell usage across routes by migrating homepage and use-cases page to shared `SiteShell`
- **When:** 2026-03-30T22:26:49Z
- **Where:** `src/components/prodvo-landing.tsx`, `src/app/use-cases/page.tsx`, `docs/logs/changelogs.md`
- **Why:** User requested consistent shared header/footer across all pages; `/use-cases` and homepage were still using standalone shell markup
- **How:** Replaced local shell wrappers (announcement, header, footer, mobile menu state, scroll state) with `SiteShell` in both pages, retained each page’s unique content/animation sections, validated with `npm run build`, and confirmed runtime output on the existing dev server (`:4173`) for `/` and `/use-cases`
- **File path(s) changed:**
  - `src/components/prodvo-landing.tsx`
  - `src/app/use-cases/page.tsx`
  - `docs/logs/changelogs.md`

## 2026-03-30T22:16:08Z

- **Who:** Copilot CLI agent
- **What:** Refined the hero primary button color on `/use-cases` for cleaner brand alignment and better emphasis balance
- **When:** 2026-03-30T22:16:08Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested a color refinement specifically for the hero section button on the use-cases page
- **How:** Scoped a hero-only override for `.btn-primary-lg` within `.hero-ctas`, shifting the base tone to brand fire-orange and hover to fire-orange-dark with matching shadow updates, then validated via `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T20:43:11Z

- **Who:** Copilot CLI agent
- **What:** Replaced `/use-cases` with a direct TSX/CSS conversion of `docs/references/use-case.html` and ported the page interactions to React
- **When:** 2026-03-29T20:43:11Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly requested to use the reference design directly for the use-cases route and convert it into project-native code
- **How:** Rebuilt the route as a high-fidelity conversion of the reference section architecture and styling, implemented reveal observer, persona word/sub/CTA switch animation, sticky-nav scroll state, and hackathon countdown in React hooks/state, preserved route responsiveness, and validated with `npm run build` (lint still has pre-existing repo errors outside this route)
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:29:43Z

- **Who:** Copilot CLI agent
- **What:** Reworked `/use-cases` again to reduce repeated box/card treatment and shift to line/rail/band style composition
- **When:** 2026-03-29T18:29:43Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly rejected repeated card/box/grid look and asked for stronger design thinking
- **How:** Replaced prior structure with less box-dominant systems (lane band marquee, bottom-border lane pins, pressure rail, columnized workflow board, centered quote run, win track, rhythm nodes, signal cloud, fit lines, minimal stacked Q&A) while keeping Prodvo-accurate copy and solid-orange CTA, then validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:26:16Z

- **Who:** Copilot CLI agent
- **What:** Replaced `/use-cases` again with a sharper premium layout and stronger visual hierarchy after explicit quality rejection
- **When:** 2026-03-29T18:26:16Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User said the prior design quality still failed expectations and called the layout weak/basic
- **How:** Rebuilt the route with a more assertive composition and less generic treatment (hero texture + tag rail, orbit model section, scenario tabs, dual-sheet execution canvas, quote strip, proof reel, rhythm strip, signal cloud, fit matrix, operator FAQ, orange CTA), kept product-accurate Prodvo execution copy, and validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:22:24Z

- **Who:** Copilot CLI agent
- **What:** Rebuilt `/use-cases` into a richer, reference-grade multi-section experience with non-repetitive layout mechanics
- **When:** 2026-03-29T18:22:24Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User flagged prior revision as too simple/basic and explicitly requested quality/depth closer to `docs/product-page.html` and `/product` without copy-pasting
- **How:** Replaced the page architecture with a denser editorial flow and distinct section systems (hero shell, continuous lane marquee, horizontal scenario switcher, split active arc stage, horizontal outcome ribbon, tick-board execution grid, signal strip, two-column operating modes, operator Q&A accordion, solid-orange CTA), rewrote all copy to remain Prodvo-accurate (AI coding workspace + delivery execution), and validated with `npm run build`
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-29T18:16:12Z

- **Who:** Copilot CLI agent
- **What:** Fully rewrote `/use-cases` as a product-accurate execution page and removed story-framework/comparison framing
- **When:** 2026-03-29T18:16:12Z
- **Where:** `.claude/task/lessons.md`, `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User explicitly said current output did not represent what Prodvo is and requested a serious, unique, non-templated use-cases page aligned to product/reference quality
- **How:** Added lessons to prevent framing Prodvo as storytelling product and to stop noisy patching after a stop request; replaced page with one cohesive production-grounded architecture (scenario selector, active scenario stage brief + runbook, delivery ledger, execution signal band, horizontal playbook steps, team-fit profile, solid-orange CTA), rewrote copy around actual Prodvo workflow semantics (plan mode, parallel agents, checkpoints, release, rollback), rebuilt CSS module with distinct section mechanics and responsive behavior, then validated with `npm run build`
- **File path(s) changed:**
  - `.claude/task/lessons.md`
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

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

## 2026-03-30T23:34:42Z

- **Who:** Copilot CLI agent
- **What:** Converted `/workflow` and `/pricing` pages from reference HTML into Next.js TSX + CSS modules with interaction parity and normalized brand token usage
- **When:** 2026-03-30T23:34:42Z
- **Where:** `src/app/workflow/page.tsx`, `src/app/workflow/workflow.module.css`, `src/app/pricing/page.tsx`, `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested direct conversion from `docs/references/workflow.html` and `docs/references/pricing.html` while applying lessons to avoid inconsistent hex tones and preserve shared cross-page CTA/button hierarchy
- **How:** Rebuilt both routes with reference-matching section architecture and ported scripted behaviors to React (`IntersectionObserver` reveals, workflow phase auto-cycle with manual stop, pricing billing toggle state). Normalized primary CTA/button tones to homepage tokens, kept neutral text/outline hierarchy, replaced non-brand green/red semantics with orange/neutral accents where needed, then validated with `npm run build` and route checks on local server (`/workflow`, `/pricing` returned `200` and expected hero headings). `npm run lint` still fails on known baseline issues in `.claude/skills/**/*.cjs` and existing `src/app/product/page.tsx`.
- **File path(s) changed:**
  - `src/app/workflow/page.tsx`
  - `src/app/workflow/workflow.module.css`
  - `src/app/pricing/page.tsx`
  - `src/app/pricing/pricing.module.css`
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

## 2026-03-30T23:54:30Z

- **Who:** Copilot CLI agent
- **What:** Normalized primary CTA button tone/text on use-cases, workflow, and pricing pages to match homepage/product conventions
- **When:** 2026-03-30T23:54:30Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `src/app/workflow/workflow.module.css`, `src/app/pricing/pricing.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested first-pass cross-page button consistency so primary actions use the lighter brand orange base with white text (not white-fill/dark-orange text variants)
- **How:** Updated `btn-cta-w` and `ctaPrimary` styles to use `--fire-orange` base and `--fire-orange-dark` hover with white text, and aligned hover/border transition behavior for consistency. Verified with `npm run build` (pass). `npm run lint` remains failing on known baseline issues outside this scope (`.claude/skills/**/*.cjs` and pre-existing `src/app/product/page.tsx` lint errors).
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `src/app/workflow/workflow.module.css`
  - `src/app/pricing/pricing.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:08:15Z

- **Who:** Copilot CLI agent
- **What:** Forced `/use-cases` hero and CTA primary buttons to exact homepage hero hex tones
- **When:** 2026-03-31T00:08:15Z
- **Where:** `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User reported `/use-cases` hero buttons still looked darker and text tone still wrong versus homepage hero; requested direct hex-level matching
- **How:** Replaced token-based values for `/use-cases` button classes with explicit homepage-equivalent hex values: primary base `#f97316`, hover `#ea580c`, text `#fff`; applied to `.btn-primary-lg`, `.btn-outline-lg`, `.btn-cta-w`, and `.btn-nav` for full page consistency, then verified with `npm run build`.
- **File path(s) changed:**
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`

## 2026-03-31T00:17:19Z

- **Who:** Copilot CLI agent
- **What:** Applied hard inline style overrides to `/use-cases` primary CTA links to force exact hero button hex rendering
- **When:** 2026-03-31T00:17:19Z
- **Where:** `src/app/use-cases/page.tsx`, `src/app/use-cases/use-cases.module.css`, `docs/logs/changelogs.md`
- **Why:** User still observed unchanged hero CTA color/text despite stylesheet edits; required non-ambiguous, immediate visual parity with homepage hex values
- **How:** Added direct inline style values (`background:#f97316; color:#fff; borderColor:#f97316`) on hero and key CTA anchors (`btn-primary-lg`, `btn-outline-lg`, non-technical CTA, final CTA). Also narrowed generic `.page a` color inheritance to unclassed links only to prevent class-style clashes. Verified by fetching live `/use-cases` HTML and confirming inline styles are present on rendered CTA elements, and re-ran `npm run build` successfully.
- **File path(s) changed:**
  - `src/app/use-cases/page.tsx`
  - `src/app/use-cases/use-cases.module.css`
  - `docs/logs/changelogs.md`
