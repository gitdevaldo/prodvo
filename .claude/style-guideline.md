# Project Style Guideline

This guideline defines the visual and interaction rules for this project’s frontend.

Use this as the source of truth for future UI edits.

## 1) Design Intent

- Light-first, minimal SaaS aesthetic.
- Warm orange accent system over neutral grays.
- Clean typography hierarchy with generous spacing.
- Data-forward cards and clear CTA emphasis.
- Motion should feel subtle, informative, and never distracting.

## 2) Color Tokens

Core palette (from `:root`):

- `--fire-orange: #f97316` (primary accent)
- `--fire-orange-dark: #ea580c` (primary hover)
- `--fire-orange-deep: #ff4d00` (strong accent sections)
- `--fire-orange-darker: #c2410c` (deep accent variant)
- `--fire-orange-light: #fff7ed` (soft accent background)
- `--charcoal: #18181b` (main text)
- `--gray-900: #18181b`
- `--gray-700: #3f3f46`
- `--gray-500: #71717a` (secondary text)
- `--gray-300: #d4d4d8`
- `--gray-200: #e4e4e7` (borders)
- `--light-gray: #fafafa` (cards/surfaces)
- `--cool-gray: #f4f4f5` (section separators)
- `--success: #22c55e` (positive status/checks)

## 3) Typography

Font families:

- Body/UI: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Brand/hero emphasis: `"Plus Jakarta Sans", "Inter", sans-serif`
- Decorative quote mark: `Georgia, "Times New Roman", serif`
- Monospace metadata (`section-label` code): UI monospace stack

Type scale patterns:

- Hero H1: `clamp(2.2rem, 8vw, 5.5rem)`, line-height `1.05`, heavy weight
- Section titles: `clamp(1.85rem, 4vw, 3rem)`, weight `800`
- Body text: mostly `0.9rem–1.05rem`, secondary color (`--gray-500`)
- Buttons: around `0.95rem`, semibold

## 4) Layout & Spacing System

Container:

- `.container`: `width: min(1120px, calc(100% - 2rem))`

Section rhythm:

- `.section`: vertical spacing `clamp(3rem, 6vw, 5rem)`
- Hero top/bottom spacing uses larger clamp values for first impression.

Card rhythm:

- Large cards: rounded `18px–24px`
- Borders: mostly `1px solid var(--gray-200)`
- Gap standards: `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2.4rem+`

## 5) Major UI Patterns

- Sticky header with subtle blur and border on scroll.
- Announcement strip above nav for product updates.
- Hero with badge + oversized statement + dual CTA.
- Marquee social proof bar with gradient edge masks on desktop.
- Bento feature grid with mixed spans (`normal`, `wide`, `full`).
- Pricing 3-card layout with one `popular` highlight.
- Testimonials with quote + supporting stat cards.
- Full-width orange CTA banner with globe motif.
- Multi-column footer that collapses gracefully on mobile.

## 6) Motion & Animation Guidelines

Keyframes in use:

- `fade-up`: entrance movement from below.
- `fade-in`: mild vertical fade.
- `marquee`: continuous horizontal brand ticker.
- `float-y`: subtle up/down globe movement.
- `dot-pulse`: pulse rings for globe points.

Reveal system:

- Elements use `.reveal` and become visible with `.is-visible`.
- Stagger support via `.delay-1`, `.delay-2`.
- Controlled by IntersectionObserver in script.

Motion behavior principles:

- Keep durations in the ~`0.5s–0.8s` range for entrances.
- Keep continuous loops gentle (no aggressive oscillation).
- Avoid hover-pause behaviors that can feel “stuck” in dense sections.

## 7) Accessibility Rules

- Keyboard focus uses `:focus-visible` with orange outline and offset.
- Mouse/touch focus fallback removes noisy default outlines.
- Skip link is present (`Skip to content`) and visible on keyboard focus.
- Reduced-motion preference is respected:
  - Reveals become immediate.
  - Globe float/pulse animation is disabled.

## 8) Responsive Breakpoints

Primary breakpoints:

- `@media (max-width: 980px)`
  - Desktop nav collapses to menu button.
  - Grids reduce (e.g., 3 columns to 2).
  - Social-proof strip becomes stacked and less masked.
  - Competitor grid becomes 3 columns.

- `@media (max-width: 700px)`
  - Most major grids become single column.
  - CTA layout stacks vertically.
  - Decorative/secondary links are hidden when needed.
  - Competitor grid becomes 1 column.

## 9) Component-Specific Do / Don’t

Do:

- Use token variables; avoid hardcoding random new colors.
- Keep rounded corners and soft shadows consistent.
- Preserve hierarchy: orange for action, gray for context.
- Maintain comfortable line-heights (`~1.45–1.7`) for body text.

Don’t:

- Introduce dark-mode-only overrides unless explicitly requested.
- Add abrupt or high-frequency animations.
- Use saturated non-brand colors as primary actions.
- Compress spacing too tightly on desktop layouts.

## 10) Maintenance Notes

When extending frontend UI files:

- Prefer existing utility classes over adding one-off inline styles.
- Add new color tokens in `:root` before usage.
- Keep new sections aligned with existing section rhythm.
- If adding animation, include reduced-motion handling.
- Validate behavior at desktop/tablet/mobile widths before finalizing.
