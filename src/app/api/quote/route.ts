import { NextResponse } from "next/server";
import { QuoteSchema } from "@/lib/schemas/quote";
import { prisma } from "@/lib/db";
import { rateLimit, getClientIp, hashIp } from "@/lib/ratelimit";

export async function POST(req: Request) {
  const ip = getClientIp(req.headers);
  const ipHash = hashIp(ip);
  const limit = rateLimit(`quote:${ipHash}`, { limit: 5, windowMs: 60_000 });
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

  const parsed = QuoteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.format() },
      { status: 422 },
    );
  }
  const data = parsed.data;

  // Honeypot — must be empty
  if (data.company_url && data.company_url.length > 0) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  // Min time-on-form
  if (typeof data.formMs === "number" && data.formMs < 2000) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const [category, city, pro] = await Promise.all([
    prisma.serviceCategory.findUnique({ where: { slug: data.categorySlug } }),
    data.citySlug ? prisma.city.findUnique({ where: { slug: data.citySlug } }) : null,
    data.proSlug ? prisma.pro.findUnique({ where: { slug: data.proSlug } }) : null,
  ]);

  const created = await prisma.quoteRequest.create({
    data: {
      proId: pro?.id ?? null,
      categoryId: category?.id ?? null,
      cityId: city?.id ?? null,
      zip: data.zip,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      details: data.details,
      timing: data.timing ?? null,
      budget: data.budget ?? null,
      ipHash,
      userAgent: req.headers.get("user-agent") ?? null,
    },
  });

  return NextResponse.json({ ok: true, id: created.id });
}
