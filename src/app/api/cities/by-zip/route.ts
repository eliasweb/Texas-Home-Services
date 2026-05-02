import { NextResponse } from "next/server";
import { findCityByZip } from "@/lib/queries/cities";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const zip = url.searchParams.get("zip");
  if (!zip || !/^\d{5}$/.test(zip)) {
    return NextResponse.json({ error: "Provide a 5-digit ZIP" }, { status: 400 });
  }
  const city = await findCityByZip(zip);
  if (!city) return NextResponse.json({ city: null });
  return NextResponse.json({ city: { slug: city.slug, name: city.name, region: city.region } });
}
