import { prisma } from "@/lib/db";
import { parseJsonArray } from "@/lib/utils";

export async function getProBySlug(slug: string) {
  return prisma.pro.findUnique({
    where: { slug },
    include: {
      homeCity: true,
      services: { include: { category: true } },
      reviews: { orderBy: { createdAt: "desc" } },
    },
  });
}

export async function getProsByCategoryAndCity(
  categorySlug: string,
  citySlug?: string,
  limit = 24,
) {
  return prisma.pro.findMany({
    where: {
      services: { some: { category: { slug: categorySlug } } },
      ...(citySlug ? { homeCity: { slug: citySlug } } : {}),
    },
    orderBy: [{ featured: "desc" }, { ratingAvg: "desc" }, { ratingCount: "desc" }],
    take: limit,
    include: { homeCity: true, services: { include: { category: true } } },
  });
}

export async function getTopProsForCategory(categorySlug: string, limit = 6) {
  return prisma.pro.findMany({
    where: { services: { some: { category: { slug: categorySlug } } } },
    orderBy: [{ featured: "desc" }, { ratingAvg: "desc" }, { ratingCount: "desc" }],
    take: limit,
    include: { homeCity: true, services: { include: { category: true } } },
  });
}

export async function getTopProsForCity(citySlug: string, limit = 8) {
  return prisma.pro.findMany({
    where: { homeCity: { slug: citySlug } },
    orderBy: [{ featured: "desc" }, { ratingAvg: "desc" }, { ratingCount: "desc" }],
    take: limit,
    include: { homeCity: true, services: { include: { category: true } } },
  });
}

export async function getCategoriesForCity(citySlug: string) {
  const services = await prisma.proService.findMany({
    where: { pro: { homeCity: { slug: citySlug } } },
    include: { category: true },
  });
  const counts = new Map<string, { category: typeof services[number]["category"]; count: number }>();
  for (const s of services) {
    const cur = counts.get(s.categoryId);
    if (cur) cur.count += 1;
    else counts.set(s.categoryId, { category: s.category, count: 1 });
  }
  return Array.from(counts.values()).sort((a, b) => b.count - a.count);
}

export async function searchPros(opts: { categorySlug?: string; zip?: string; citySlug?: string; limit?: number }) {
  const { categorySlug, citySlug, zip, limit = 30 } = opts;
  const pros = await prisma.pro.findMany({
    where: {
      ...(categorySlug ? { services: { some: { category: { slug: categorySlug } } } } : {}),
      ...(citySlug ? { homeCity: { slug: citySlug } } : {}),
    },
    orderBy: [{ featured: "desc" }, { ratingAvg: "desc" }],
    take: limit,
    include: { homeCity: true, services: { include: { category: true } } },
  });
  if (!zip) return pros;
  return pros.filter((p) => parseJsonArray<string>(p.serviceZips).includes(zip));
}

export async function getAllProSlugs() {
  return prisma.pro.findMany({ select: { slug: true } });
}
