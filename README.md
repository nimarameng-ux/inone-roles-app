# INONE Projects — Roles & Responsibilities (R&R)

Internal Roles & Responsibilities register for INONE Projects.

This is a lightweight web app (PWA) that:
- Shows a searchable task register
- Provides one page per task with full description
- Highlights responsibility across PM / SM / OM / Tendering / Design (and other roles as included)
- Can be installed as an “app” on desktop/mobile once hosted

## Live App
- GitHub Pages: (paste your GitHub Pages URL here once enabled)
- Vercel: (paste your Vercel URL here if you deploy it)

## How to use
1. Open the Live App link
2. Use the Role Dashboard or filters to find tasks
3. Click a task to open its dedicated page
4. (Optional) Install as an app:
   - Chrome / Edge → Install icon in the address bar

## Updating the content
Source of truth: the Excel spreadsheet maintained by INONE.

Update process:
1. Export / update the Excel
2. Regenerate the website/app package (ZIP)
3. Replace the files in this repository (keep `index.html` in the repo root)
4. Commit changes → deployment updates automatically

## Repository structure
- `index.html` — task register + filters + dashboard
- `items/` — one page per task
- `assets/` — logo + icons
- `styles.css` — INONE brand styling
- `manifest.json`, `sw.js` — PWA support

## Notes
- This repository contains static files only (no backend).
- If users see an old version after updates: hard refresh (Cmd+Shift+R).
