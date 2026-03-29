# Prodvo Frontend (Next.js)

Landing frontend for **Prodvo**, an all-in-one coding agent platform inspired by the broader AI workspace category.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind v4 (global CSS-driven styling)

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

- `src/app/layout.tsx`: global layout + metadata + fonts
- `src/app/page.tsx`: page entrypoint
- `src/components/prodvo-landing.tsx`: full landing page sections + reveal behavior
- `src/app/globals.css`: design tokens, layout system, animations, responsive rules
- `.claude/style-guideline.md`: canonical style guideline

## Styling Notes

UI implementation follows `.claude/style-guideline.md`:

- warm orange accent tokens
- clean type hierarchy
- section rhythm and card system
- subtle motion + reduced-motion support
- responsive breakpoints at `980px` and `700px`
