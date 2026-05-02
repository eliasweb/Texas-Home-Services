import { prisma } from "@/lib/db";

export async function getAllCategories() {
  return prisma.serviceCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
  });
}

export async function getFeaturedCategories(limit = 12) {
  return prisma.serviceCategory.findMany({
    where: { featured: true },
    orderBy: [{ sortOrder: "asc" }],
    take: limit,
  });
}

export async function getCategoryBySlug(slug: string) {
  return prisma.serviceCategory.findUnique({
    where: { slug },
    include: {
      subcategories: { orderBy: { name: "asc" } },
      costGuide: true,
    },
  });
}
