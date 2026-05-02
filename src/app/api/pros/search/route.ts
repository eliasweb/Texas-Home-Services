import { NextResponse } from "next/server";
import { searchPros } from "@/lib/queries/pros";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const categorySlug = url.searchParams.get("category") || undefined;
  const citySlug = url.searchParams.get("city") || undefined;
  const zip = url.searchParams.get("zip") || undefined;
  const limitRaw = url.searchParams.get("limit");
  const limit = Math.min(50, Math.max(1, parseInt(limitRaw ?? "30", 10) || 30));

  const pros = await searchPros({ categorySlug, citySlug, zip, limit });

  return NextResponse.json({
    count: pros.length,
    pros: pros.map((p) => ({
      slug: p.slug,
      name: p.name,
      tagline: p.tagline,
      ratingAvg: p.ratingAvg,
      ratingCount: p.ratingCount,
      homeCity: p.homeCity.name,
      featured: p.featured,
    })),
  });
}
