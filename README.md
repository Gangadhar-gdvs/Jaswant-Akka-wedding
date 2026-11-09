# K. Bhargavi & K. Ramesh — Wedding Invitation Website

A cinematic, bilingual (English + తెలుగు) South Indian wedding invitation site.
All content is drawn from `KARE_Wedding_Invitation_Details_Corrected.md`, which
remains the single source of truth for every name, date, and venue.

## Tech stack

- **React 19** + **Vite** — fast static SPA
- **Tailwind CSS** — design system (palette, type, motifs)
- **Framer Motion** — scroll reveals, entrance animations, language cross-fade
- No raster photos — all decoration is CSS/SVG (temple, mandala, kolam, diya, kalasha)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
npm run lint
```

## Where content lives

- `src/content.js` — **all** bilingual strings (English + Telugu), phone numbers,
  venue map query, wedding date. Edit here to update the site. Nothing is hardcoded
  inside components.
- `src/i18n.jsx` — language context, switcher state, localStorage persistence.

## Language

English is the default. The switcher (top-right) toggles English ⇄ తెలుగు with a
subtle cross-fade; the choice is remembered across refreshes. Telugu uses the
Noto Serif/Sans Telugu fonts with sensible fallbacks.

## Notes on the source details (unconfirmed items)

**Dates — confirmed by the family:**
- **Reception** — 17 November 2026 (Tuesday), 8:00 PM onwards
- **Wedding Muhurtham** — 18 November 2026 (Wednesday), 9:00–10:00 AM, Dhanur Lagnam

Venue is **Sri Amara Narayana Swamy Sannidhi**, Basampalli. (The source document
noted alternate venue-name spellings to verify before print; if a different official
spelling is confirmed, update `src/content.js`.) To change any date, edit
`src/content.js` — and `WEDDING_ISO` there, which drives the countdown and the
Add-to-Calendar link.

## Deploy

Static output in `dist/` — deploy to Netlify, Vercel, GitHub Pages, or any static host.
```bash
npm run build
```
