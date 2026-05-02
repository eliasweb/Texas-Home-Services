# Texas Home Services

A home-services marketplace built for Texas residents. Browse 30+ service categories, find local screened pros across 18 Texas cities, read cost guides written for the Texas climate, and request free quotes.

## Stack

- **Next.js 15** (App Router, RSC) + **TypeScript** strict
- **Tailwind CSS 3.4** with a custom navy/burnt-orange/cream theme
- **Prisma 5** + **Postgres** (Neon for hosted, any Postgres locally)
- **react-hook-form** + **Zod** for forms
- **Radix UI** primitives + **Lucide** icons
- **react-markdown** for cost-guide and article bodies

## Quickstart (local)

You'll need a Postgres database. The fastest path is a free Neon project — see the deploy section below for the link. Once you have a connection string:

```bash
cp .env.example .env       # then paste your DATABASE_URL into .env
npm install                # auto-runs `prisma generate`
npm run db:init            # `prisma db push` + seed (32 cats, 18 cities, 66 pros, 339 reviews, 32 cost guides, 15 articles)
npm run dev                # http://localhost:3000
```

Inspect data with `npm run db:studio`.

## Deploying to Vercel + Neon

This site is built to deploy on Vercel with a Neon Postgres database. Free tier is enough.

### 1. Create the database

1. Go to https://console.neon.tech and create a free project (region: pick the one closest to your Vercel region — `us-east-2` / Ohio is a safe default for the US).
2. From the project dashboard, copy the **pooled connection string** (it ends with `-pooler`). It looks like `postgresql://user:pass@ep-xxx-pooler.region.aws.neon.tech/neondb?sslmode=require`.

### 2. Push schema and seed data (one-time)

Run this locally with the Neon URL exported, before your first deploy:

```bash
DATABASE_URL="postgresql://...neon.tech/...?sslmode=require" npm run db:init
```

This runs `prisma db push` (creates all tables) and the seed script (~70 inserts, takes about 10 seconds).

### 3. Deploy to Vercel

```bash
npm i -g vercel
vercel              # answer the prompts; choose your scope; link to a new project
```

Then in the Vercel dashboard for the project:

1. **Settings → Environment Variables** — add `DATABASE_URL` with the Neon pooled connection string. Apply to Production, Preview, and Development.
2. **Settings → General** — make sure the Node.js version is 20+ (default).
3. Trigger a redeploy: `vercel --prod`.

That's it. The build runs `prisma generate` (via `postinstall`) and then `next build`, which prerenders all the static pages.

### 4. Future schema changes

When you change `prisma/schema.prisma`, push the change to your Neon DB before the next deploy:

```bash
DATABASE_URL="postgresql://...neon.tech/..." npx prisma db push
```

For a more disciplined migration workflow, use `npm run db:migrate -- --name your_change_name` instead — that creates a versioned migration file you can commit, and `prisma migrate deploy` will apply it on subsequent environments.

### Notes

- **Quote requests and pro applications persist to the Neon database.** Inspect them with `npx prisma studio` (using the Neon URL) or any Postgres client.
- The site does not require auth, so no auth env vars are needed.
- Forms include honeypot + min-time-on-form + an in-memory IP rate limit. The rate limit is per-instance — on Vercel's serverless runtime that means it's best-effort. For stricter limits, swap `src/lib/ratelimit.ts` for a Redis or Upstash backend.

## Useful scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (generates ~346 static pages) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run db:push` | Apply schema to Postgres (no migration history) |
| `npm run db:migrate` | Create + apply a versioned migration |
| `npm run db:deploy` | Apply pending migrations (run in CI / Vercel build) |
| `npm run db:init` | Push schema + seed (first-time setup) |
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
