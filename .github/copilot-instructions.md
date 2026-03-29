# GitHub Copilot Instructions

## CRITICAL: Lessons-First Protocol

**Before ANY task, code generation, or response:**

1. **LOAD** `.claude/task/lessons.md` — this contains all accumulated user feedback
2. **ANALYZE** every user message for feedback signals:
   - Direct criticism → lesson
   - Frustration indicators → lesson
   - Corrections → lesson
   - Preferences stated → lesson
   - Implicit feedback in tone → lesson
3. **UPDATE** `lessons.md` if new feedback detected
4. **APPLY** all lessons to current task

---

## Feedback Detection Triggers

Watch for these signals in user messages:
- "again" / "same" / "repetitive" → Pattern repetition feedback
- Profanity or caps → Strong dissatisfaction, capture the cause
- "I said" / "I already mentioned" → Ignored feedback
- "not what I asked" / "wrong" → Misunderstanding, capture correct approach
- "finally" / "that's better" → Positive signal, note what worked

---

## Project Context

- Next.js 16+ application
- Brand colors: fire-orange system
- Style guide: `.claude/style-guideline.md`
- UI/UX skills: `.claude/skills/`
- All lessons: `.claude/task/lessons.md`

---

## Key Rules

1. Never repeat a mistake that's documented in lessons.md
2. Think before defaulting to common patterns (grids, cards, bento)
3. Each section needs distinct visual treatment
4. When uncertain, ask — don't assume
