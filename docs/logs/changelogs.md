# Changelogs

Newest entries first. Every change must add one entry before commit/push.

---

## 2026-03-29T16:00:14Z

- **Who:** Copilot CLI agent
- **What:** Added homepage-like background pattern to product page and removed gray background usage from product sections
- **When:** 2026-03-29T16:00:14Z
- **Where:** `src/app/product/page.tsx`, `src/app/product/product-page.module.css`, `docs/logs/changelogs.md`
- **Why:** User requested product page to match homepage pattern treatment and replace gray backgrounds with brand-consistent white/orange styling
- **How:** Wrapped product content in a dedicated `.product-page` container with orange vertical line pattern, made section backgrounds transparent to reveal that pattern, converted gray backgrounds/borders/text accents to white + fire-orange/dark-orange tones, and adjusted product-page structure/indentation while preserving behavior
- **File path(s) changed:**
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
