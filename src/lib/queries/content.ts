import { prisma } from "@/lib/db";

export async function getAllCostGuides() {
  return prisma.costGuide.findMany({
    include: { category: true },
    orderBy: { title: "asc" },
  });
}

export async function getCostGuideBySlug(slug: string) {
  return prisma.costGuide.findUnique({
    where: { slug },
    include: { category: true },
  });
}

export async function getAllArticles() {
  return prisma.article.findMany({
    orderBy: { publishedAt: "desc" },
  });
}

export async function getArticleBySlug(slug: string) {
  return prisma.article.findUnique({ where: { slug } });
}
