import { PrismaClient } from "@prisma/client";
import { categories } from "./data/categories";
import { cities } from "./data/cities";
import { pros } from "./data/pros";
import {
  reviewAuthors,
  positiveOpeners,
  neutralOpeners,
  negativeOpeners,
  positiveClosers,
  neutralClosers,
  negativeClosers,
  serviceBodies,
} from "./data/reviews";
import { costGuides } from "./data/cost-guides";
import { articles } from "./data/articles";

const prisma = new PrismaClient();

// Deterministic PRNG so seeded reviews are stable across runs
function mulberry32(a: number) {
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = <T,>(rng: () => number, arr: T[]): T => {
  if (arr.length === 0) throw new Error("pick on empty array");
  const i = Math.floor(rng() * arr.length);
  return arr[i] as T;
};

function pickRating(rng: () => number, planned: number): number {
  // distribute around planned average
  const r = rng();
  if (planned >= 4.7) {
    if (r < 0.7) return 5;
    if (r < 0.92) return 4;
    if (r < 0.99) return 3;
    return 2;
  }
  if (planned >= 4.5) {
    if (r < 0.55) return 5;
    if (r < 0.85) return 4;
    if (r < 0.96) return 3;
    return 2;
  }
  if (r < 0.4) return 5;
  if (r < 0.75) return 4;
  if (r < 0.93) return 3;
  if (r < 0.98) return 2;
  return 1;
}

async function main() {
  console.log("Seeding Texas Home Services database...");

  // Wipe in dependency order
  await prisma.review.deleteMany();
  await prisma.quoteRequest.deleteMany();
  await prisma.proApplication.deleteMany();
  await prisma.proService.deleteMany();
  await prisma.pro.deleteMany();
  await prisma.costGuide.deleteMany();
  await prisma.article.deleteMany();
  await prisma.serviceSubcategory.deleteMany();
  await prisma.serviceCategory.deleteMany();
  await prisma.city.deleteMany();

  // Categories + subcategories
  const categoryIdBySlug: Record<string, string> = {};
  for (const c of categories) {
    const created = await prisma.serviceCategory.create({
      data: {
        slug: c.slug,
        name: c.name,
        tagline: c.tagline,
        description: c.description,
        longCopy: c.longCopy,
        iconKey: c.iconKey,
        featured: c.featured,
        sortOrder: c.sortOrder,
        texasNote: c.texasNote ?? null,
        subcategories: {
          create: c.subcategories.map((s) => ({
            slug: s.slug,
            name: s.name,
            description: s.description,
          })),
        },
      },
    });
    categoryIdBySlug[c.slug] = created.id;
  }
  console.log(`✓ Categories: ${categories.length}`);

  // Cities
  const cityIdBySlug: Record<string, string> = {};
  for (const ct of cities) {
    const created = await prisma.city.create({
      data: {
        slug: ct.slug,
        name: ct.name,
        region: ct.region,
        population: ct.population,
        lat: ct.lat,
        lng: ct.lng,
        blurb: ct.blurb,
        longCopy: ct.longCopy,
        zips: JSON.stringify(ct.zips),
        featured: ct.featured,
      },
    });
    cityIdBySlug[ct.slug] = created.id;
  }
  console.log(`✓ Cities: ${cities.length}`);

  // Pros + ProService + Reviews
  let totalReviews = 0;
  let proIndex = 0;
  for (const p of pros) {
    proIndex += 1;
    const cityId = cityIdBySlug[p.homeCity];
    if (!cityId) throw new Error(`Unknown city ${p.homeCity} for pro ${p.slug}`);

    const created = await prisma.pro.create({
      data: {
        slug: p.slug,
        name: p.name,
        tagline: p.tagline,
        bio: p.bio,
        phone: p.phone ?? null,
        email: p.email ?? null,
        website: p.website ?? null,
        yearFounded: p.yearFounded,
        licenseNumber: p.licenseNumber ?? null,
        insured: p.insured,
        bonded: p.bonded,
        emergency24x7: p.emergency24x7,
        homeCityId: cityId,
        serviceZips: JSON.stringify(p.serviceZips),
        photos: JSON.stringify(p.photos),
        responseMins: p.responseMins,
        hiredCount: p.hiredCount,
        badges: JSON.stringify(p.badges),
        featured: p.featured,
        services: {
          create: p.categories.map((slug, idx) => {
            const catId = categoryIdBySlug[slug];
            if (!catId) throw new Error(`Unknown category ${slug} for pro ${p.slug}`);
            return {
              categoryId: catId,
              primary: idx === 0,
            };
          }),
        },
      },
    });

    const rng = mulberry32(proIndex * 9301 + 49297);
    const reviewCount = p.ratingCountPlanned;
    const reviews: Array<{ rating: number; body: string; authorName: string; authorCity?: string; serviceTag?: string }>
      = [];
    for (let i = 0; i < reviewCount; i++) {
      const rating = pickRating(rng, p.ratingAvgPlanned);
      const author = pick(rng, reviewAuthors);
      const primarySlug = p.categories[0]!;
      const bodies = serviceBodies[primarySlug] ?? serviceBodies.handyman!;
      const opener =
        rating >= 4
          ? pick(rng, positiveOpeners)
          : rating === 3
            ? pick(rng, neutralOpeners)
            : pick(rng, negativeOpeners);
      const closer =
        rating >= 4
          ? pick(rng, positiveClosers)
          : rating === 3
            ? pick(rng, neutralClosers)
            : pick(rng, negativeClosers);
      const middle = pick(rng, bodies);
      const body = `${opener} ${middle} ${closer}`;
      reviews.push({
        rating,
        body,
        authorName: author.name,
        authorCity: author.city,
        serviceTag: undefined,
      });
    }

    for (const r of reviews) {
      await prisma.review.create({
        data: {
          proId: created.id,
          authorName: r.authorName,
          authorCity: r.authorCity ?? null,
          rating: r.rating,
          body: r.body,
          serviceTag: r.serviceTag ?? null,
        },
      });
    }
    totalReviews += reviews.length;

    // Recompute aggregates from actual seeded reviews
    const ratings = reviews.map((r) => r.rating);
    const avg = ratings.reduce((s, x) => s + x, 0) / ratings.length;
    await prisma.pro.update({
      where: { id: created.id },
      data: {
        ratingAvg: Math.round(avg * 10) / 10,
        ratingCount: reviews.length,
      },
    });
  }
  console.log(`✓ Pros: ${pros.length} (with ${totalReviews} reviews)`);

  // Cost Guides
  for (const g of costGuides) {
    const categoryId = categoryIdBySlug[g.slug];
    if (!categoryId) {
      console.warn(`Skipping cost guide ${g.slug} — no matching category`);
      continue;
    }
    await prisma.costGuide.create({
      data: {
        slug: g.slug,
        title: g.title,
        categoryId,
        summary: g.summary,
        body: g.body,
        lowUsd: g.lowUsd,
        avgUsd: g.avgUsd,
        highUsd: g.highUsd,
        unitLabel: g.unitLabel,
        factors: JSON.stringify(g.factors),
      },
    });
  }
  console.log(`✓ Cost guides: ${costGuides.length}`);

  // Articles
  for (const a of articles) {
    await prisma.article.create({
      data: {
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        body: a.body,
        category: a.category,
        readMinutes: a.readMinutes,
      },
    });
  }
  console.log(`✓ Articles: ${articles.length}`);

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
