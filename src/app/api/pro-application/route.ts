import { NextResponse } from "next/server";
import { ProApplicationSchema } from "@/lib/schemas/pro-application";
import { prisma } from "@/lib/db";
import { rateLimit, getClientIp, hashIp } from "@/lib/ratelimit";

export async function POST(req: Request) {
  const ip = getClientIp(req.headers);
  const ipHash = hashIp(ip);
  const limit = rateLimit(`pro-app:${ipHash}`, { limit: 3, windowMs: 60_000 });
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ProApplicationSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.format() },
      { status: 422 },
    );
  }
  const data = parsed.data;

  if (data.company_url && data.company_url.length > 0) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  if (typeof data.formMs === "number" && data.formMs < 2000) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const city = data.citySlug ? await prisma.city.findUnique({ where: { slug: data.citySlug } }) : null;

  const created = await prisma.proApplication.create({
    data: {
      businessName: data.businessName,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone,
      cityId: city?.id ?? null,
      zip: data.zip,
      categoriesCsv: data.categorySlugs.join(","),
      yearsInBiz: data.yearsInBiz ?? null,
      licenseNumber: data.licenseNumber ?? null,
      insured: data.insured,
      about: data.about,
      ipHash,
    },
  });

  return NextResponse.json({ ok: true, id: created.id });
}
