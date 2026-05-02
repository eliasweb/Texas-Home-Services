import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { ArticleCard } from "@/components/content/ArticleCard";
import { getAllArticles } from "@/lib/queries/content";

export const metadata: Metadata = {
  title: "Advice & How-To",
  description:
    "Texas-specific home maintenance and improvement advice — from preparing for hail season to xeriscaping in the Hill Country.",
};

export default async function AdviceIndexPage() {
  const articles = await getAllArticles();

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
            Advice & how-to
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            Home advice written for Texans.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Heat, hail, clay soils, the rare freeze — guidance that takes the Texas climate
            seriously, written by people who&apos;ve worked here.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
