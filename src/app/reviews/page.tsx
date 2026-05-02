import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ReviewStars } from "@/components/pros/ReviewStars";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { prisma } from "@/lib/db";
import { formatDistanceToNow } from "date-fns";

export const metadata: Metadata = {
  title: "Real Texas Reviews",
  description:
    "Recent verified reviews from Texas homeowners — across plumbing, HVAC, roofing, foundation, and more.",
};

export default async function ReviewsPage() {
  const reviews = await prisma.review.findMany({
    take: 30,
    orderBy: { createdAt: "desc" },
    include: { pro: { include: { homeCity: true, services: { include: { category: true } } } } },
  });

  const total = await prisma.review.count();
  const avg = await prisma.review.aggregate({ _avg: { rating: true } });

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          variant="outline"
          className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-navy"
          opacity={0.05}
        />
        <Container className="relative py-14 md:py-16">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">
            Real Texas reviews
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            What Texans are saying about the pros they hired.
          </h1>
          <div className="mt-6 flex items-center gap-6">
            <div>
              <p className="font-display text-4xl font-bold text-navy-deep">
                {(avg._avg.rating ?? 0).toFixed(1)}
              </p>
              <ReviewStars rating={avg._avg.rating ?? 0} />
            </div>
            <p className="text-sm text-muted">
              Average across <strong>{total}</strong> verified reviews from Texas homeowners.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <li
                key={r.id}
                className="flex flex-col rounded-card border border-navy/10 bg-white p-6 shadow-card"
              >
                <ReviewStars rating={r.rating} />
                <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-ink">{r.body}</p>
                <div className="mt-4 border-t border-navy/10 pt-3 text-xs">
                  <p className="font-medium text-navy-deep">{r.authorName}</p>
                  <p className="mt-0.5 text-muted">
                    {r.authorCity ?? r.pro.homeCity.name} ·{" "}
                    {formatDistanceToNow(r.createdAt, { addSuffix: true })}
                  </p>
                  <Link
                    href={`/pros/${r.pro.slug}`}
                    className="mt-2 inline-flex text-orange hover:underline"
                  >
                    {r.pro.name} →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
