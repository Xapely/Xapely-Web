# Xapely Web

Marketing site for xapely.com: landing, about, pricing, contact and the Orbit waitlist.
Built with Vite, React, TypeScript and Tailwind CSS v4.

## Run it

```sh
npm install
cp .env.example .env.local   # point VITE_API_URL at the Orbit backend
npm run dev                  # http://localhost:5173
npm run build                # typecheck, then build to dist/
npm run preview              # serve dist/ locally
```

## How it's organised

| Path | What lives there |
| --- | --- |
| `*.html` | One entry per page, holding only that page's title and metadata. Shared head tags are added in `vite.config.ts`. |
| `src/entries/` | Mounts each page's React component. |
| `src/components/pages/` | One component per page. |
| `src/components/sections/` | Page sections, grouped by page. `shared/` holds sections several pages use. |
| `src/components/layout/` | Header, footer, `SiteLayout`, and `navigation.ts` (every URL, the contact email and the address). |
| `src/components/ui/` | Building blocks: `Button`, `Container`, `Icon`, `CheckList`, `FormField`, `DarkPanel`, `OrbitRings`, `SocialLinks`. |
| `src/components/waitlist/` | `WaitlistProvider` (shared state for every waitlist form) and `WaitlistForm`. |
| `src/content/orbit.ts` | Orbit's features grouped by area, and the **draft** plans and prices. |
| `src/styles/app.css` | Design tokens (`@theme`). Tailwind's default palette is switched off, so use these tokens. |

## Waitlist

Sign-ups go to `POST /api/v1/waitlist` on the Orbit backend. Only Xapely staff
(`platform_admin`, `super_admin`) can read them, via `GET /api/v1/waitlist`.

To avoid unnecessary calls, the forms validate emails before sending, allow one request at a time,
remember an email that has already joined in this browser, and back off after failures.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub Pages on every push to `main`.
One-time setup in the GitHub repo:

1. **Settings → Pages → Source:** GitHub Actions.
2. **Settings → Secrets and variables → Actions → Variables:** add `VITE_API_URL`.

`public/CNAME` keeps the custom domain.

## Images

Pages import WebP files generated from the PNG sources in `assets/images`. After adding or replacing an
image, list it in `scripts/optimize-images.mjs` and run `npm run images`.
