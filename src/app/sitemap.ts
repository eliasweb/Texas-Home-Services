import type { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

const BASE = "https://texashomeservices.example";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, cities, pros, costGuides, articles] = await Promise.all([
    prisma.serviceCategory.findMany({ select: { slug: true } }),
    prisma.city.findMany({ select: { slug: true, featured: true } }),
    prisma.pro.findMany({ select: { slug: true } }),
    prisma.costGuide.findMany({ select: { slug: true } }),
    prisma.article.findMany({ select: { slug: true, publishedAt: true } }),
  ]);

  const now = new Date();

  const staticPaths: MetadataRoute.Sitemap = [
    "/",
    "/services",
    "/cities",
    "/cost-guides",
    "/advice",
    "/about",
    "/how-it-works",
    "/reviews",
    "/search",
    "/for-pros",
    "/for-pros/signup",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({ url: `${BASE}${path}`, lastModified: now, changeFrequency: "weekly", priority: path === "/" ? 1 : 0.7 }));

  const featuredCities = cities.filter((c) => c.featured).map((c) => c.slug);

  const catRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE}/services/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const catCityRoutes: MetadataRoute.Sitemap = categories.flatMap((c) =>
    featuredCities.map((cs) => ({
      url: `${BASE}/services/${c.slug}/${cs}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  );

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const proRoutes: MetadataRoute.Sitemap = pros.map((p) => ({
    url: `${BASE}/pros/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const costRoutes: MetadataRoute.Sitemap = costGuides.map((g) => ({
    url: `${BASE}/cost-guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/advice/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticPaths,
    ...catRoutes,
    ...catCityRoutes,
    ...cityRoutes,
    ...proRoutes,
    ...costRoutes,
    ...articleRoutes,
  ];
}
