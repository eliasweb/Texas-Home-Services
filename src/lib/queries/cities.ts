import { prisma } from "@/lib/db";
import { parseJsonArray } from "@/lib/utils";

export async function getAllCities() {
  return prisma.city.findMany({
    orderBy: [{ featured: "desc" }, { name: "asc" }],
  });
}

export async function getFeaturedCities(limit = 8) {
  return prisma.city.findMany({
    where: { featured: true },
    orderBy: [{ population: "desc" }],
    take: limit,
  });
}

export async function getCityBySlug(slug: string) {
  return prisma.city.findUnique({ where: { slug } });
}

export async function findCityByZip(zip: string) {
  const cities = await prisma.city.findMany();
  for (const c of cities) {
    const zips = parseJsonArray<string>(c.zips);
    if (zips.includes(zip)) return c;
  }
  return null;
}
