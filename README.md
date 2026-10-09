# Xapely Web

Marketing site for xapely.com: landing, about, pricing, contact and the Orbit waitlist.
Built with Vite, React, TypeScript and Tailwind CSS v4.

## Run it

```sh
npm install
cp .env.example .env.local   # point VITE_API_URL at the Orbit backend
npm run dev                  # http://localhost:5173
npm run build                # typecheck, then build to dist/
npm start                    # serve dist/ (what Render runs)
```

## How it's organised

A single-page React app. React Router handles every route in the browser, with clean URLs
(`/about`, `/pricing`, …). Old `.html` links redirect to them.

| Path | What lives there |
| --- | --- |
| `index.html` | The one HTML shell, with the homepage's metadata as the default. |
| `src/main.tsx` | Mounts the app: global styles, `WaitlistProvider`, router. |
| `src/router.tsx` | Route table, built from `PAGES` in `navigation.ts`, plus the 404 route. |
| `src/components/pages/` | One component per page, including `NotFoundPage`. |
| `src/components/sections/` | Page sections, grouped by page. `shared/` holds sections several pages use. |
| `src/components/layout/` | Header, footer, `SiteLayout`, `RootLayout`, and `navigation.ts` (every page's URL, title and description; the contact email and the address). |
| `src/hooks/usePageMeta.ts` | Updates the title, description, canonical URL and `og:` tags when the route changes. |
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

Hosted on Render as a Web Service:

- **Build command:** `npm ci && npm run build`
- **Start command:** `npm start` (`vite preview`, configured in `vite.config.ts` to use Render's `PORT` and only accept requests for the service's `onrender.com` hostname)
- **Environment:** `VITE_API_URL`, the Orbit backend's origin. It's built into the bundle, so redeploy after changing it. Don't set `NODE_ENV=production`, because the build and `vite preview` need dev dependencies.

Every path is served `index.html` and the router picks the page, so there's nothing to configure for routes.
When adding a custom domain, add it to `preview.allowedHosts` in `vite.config.ts`.

## Images

Pages import WebP files generated from the PNG sources in `assets/images`. After adding or replacing an
image, list it in `scripts/optimize-images.mjs` and run `npm run images`.
