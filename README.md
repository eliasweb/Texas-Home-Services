# Texas Home Services

A home-services marketplace built for Texas residents. Browse 30+ service categories, find local screened pros across 18 Texas cities, read cost guides written for the Texas climate, and request free quotes.

## Stack

- **Next.js 15** (App Router, RSC) + **TypeScript** strict
- **Tailwind CSS 3.4** with a custom navy/burnt-orange/cream theme
- **Prisma 5** + **SQLite**
- **react-hook-form** + **Zod** for forms
- **Radix UI** primitives + **Lucide** icons
- **react-markdown** for cost-guide and article bodies

## Quickstart

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed   # seeds 32 categories, 18 cities, 66 pros, 339 reviews, 32 cost guides, 15 articles
npm run dev       # http://localhost:3000
```

Inspect data with `npm run db:studio`.

## Useful scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (generates ~346 static pages) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run db:push` | Apply schema to SQLite |
| `npm run db:seed` | Seed the database |
| `npm run db:reset` | Drop, push, and reseed |
| `npm run db:studio` | Prisma Studio (port 5555) |

## Routes

- `/` — Homepage with hero, search, featured services, top pros, advice, and pro CTA
- `/services` — All 32 service categories
- `/services/[slug]` — Category landing (subcategories, top pros, cost summary, FAQ JSON-LD)
- `/services/[slug]/[city]` — Category-in-city listings (160 prerendered pages for featured metros)
- `/cities` — All 18 Texas cities
- `/cities/[city]` — City landing with category counts and top pros
- `/pros/[slug]` — Pro detail with reviews, badges, ServiceArea pills, JSON-LD `LocalBusiness` + `AggregateRating`
- `/pros/[slug]/quote` — Standalone quote form (also opens as a modal from the pro page)
- `/cost-guides`, `/cost-guides/[slug]` — 32 Texas cost guides with low/avg/high price bars
- `/advice`, `/advice/[slug]` — 15 Texas-specific home advice articles
- `/for-pros`, `/for-pros/signup` — Marketing + 3-step pro application
- `/search` — Search by category + ZIP/city
- `/about`, `/how-it-works`, `/reviews`, `/contact`, `/privacy`, `/terms`
- `/api/quote`, `/api/pro-application`, `/api/pros/search`, `/api/cities/by-zip`
- `/sitemap.xml`, `/robots.txt`

## Forms and spam protection

`POST /api/quote` and `POST /api/pro-application` validate with Zod and apply three layers of spam protection:

1. Honeypot field (`company_url` — must be empty)
2. Min time-on-form (rejects submissions under 2 seconds)
3. Sliding-window IP rate limit (in-memory, keyed by SHA-256 of the IP)

## SEO

- Per-page `generateMetadata`
- `LocalBusiness` + `AggregateRating` JSON-LD on pro pages, `BreadcrumbList` on category/city/pro pages, `Article` on advice posts, `FAQPage` on category pages
- `sitemap.ts` enumerates all categories, cities, category×city, pros, cost guides, and articles
- `robots.ts` allows all but `/api/`

## Design notes

Palette: deep navy (`#1F3A5F`), burnt orange (`#BF5700`), cream (`#FAF6EE`), star gold (`#E1B546`).
Type: Fraunces (display) + Inter (body) via `next/font`.
Texas accent: subtle lone-star SVG watermarks at low opacity.
