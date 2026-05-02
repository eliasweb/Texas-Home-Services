import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { CategoryGrid } from "@/components/marketing/CategoryGrid";
import { CityGrid } from "@/components/marketing/CityGrid";
import { TrustStrip } from "@/components/marketing/TrustStrip";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { TestimonialStrip } from "@/components/marketing/TestimonialStrip";
import { ProCard } from "@/components/pros/ProCard";
import { ArticleCard } from "@/components/content/ArticleCard";
import { Button } from "@/components/ui/button";
import { getAllCategories, getFeaturedCategories } from "@/lib/queries/categories";
import { getFeaturedCities } from "@/lib/queries/cities";
import { prisma } from "@/lib/db";
import { getAllArticles } from "@/lib/queries/content";

export default async function HomePage() {
  const [allCategories, featuredCategories, featuredCities, articles] = await Promise.all([
    getAllCategories(),
    getFeaturedCategories(12),
    getFeaturedCities(8),
    getAllArticles(),
  ]);

  const featuredPros = await prisma.pro.findMany({
    where: { featured: true },
    take: 6,
    orderBy: [{ ratingAvg: "desc" }, { ratingCount: "desc" }],
    include: { homeCity: true, services: { include: { category: true } } },
  });

  const heroCats = allCategories.map((c) => ({ slug: c.slug, name: c.name }));

  return (
    <>
      <Hero categories={heroCats} />
      <TrustStrip />

      {/* Featured categories */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Browse services"
            title="Most-requested home services in Texas"
            subtitle="From AC tune-ups to foundation piers — start with the trades Texans book most."
            href="/services"
            hrefLabel="See all 30+ services"
          />
          <div className="mt-10">
            <CategoryGrid categories={featuredCategories} />
          </div>
        </Container>
      </section>

      <HowItWorks />

      {/* Featured pros */}
      <section className="bg-cream-warm/40 py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Top pros"
            title="Highly-rated contractors, vetted for Texas"
            subtitle="Texas-owned businesses with hundreds of completed jobs and consistent five-star reviews."
            href="/search"
            hrefLabel="Browse all pros"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPros.map((p) => (
              <ProCard
                key={p.id}
                slug={p.slug}
                name={p.name}
                tagline={p.tagline}
                ratingAvg={p.ratingAvg}
                ratingCount={p.ratingCount}
                responseMins={p.responseMins}
                homeCityName={p.homeCity.name}
                badges={p.badges}
                photos={p.photos}
                insured={p.insured}
                emergency24x7={p.emergency24x7}
                primaryServiceName={p.services.find((s) => s.primary)?.category.name}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Cities */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="By city"
            title="From Houston to El Paso — find pros where you live."
            subtitle="Browse by city to see locally-headquartered contractors who actually drive there."
            href="/cities"
            hrefLabel="See all cities"
          />
          <div className="mt-10">
            <CityGrid cities={featuredCities} />
          </div>
        </Container>
      </section>

      <TestimonialStrip />

      {/* Advice */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Texas-specific advice"
            title="Tips written for the way Texans actually live."
            subtitle="Heat, hail, clay soil, and the occasional freeze — guidance that takes the climate seriously."
            href="/advice"
            hrefLabel="See all advice"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pro CTA */}
      <section className="border-y border-navy/10 bg-navy py-14 text-cream md:py-16">
        <Container className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <p className="font-medium uppercase tracking-wide text-star text-sm">For pros</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Run a Texas home service business?
            </h2>
            <p className="mt-3 max-w-xl text-cream/80">
              Get matched with homeowners in your service area. No pay-per-lead nonsense — we
              charge a flat monthly subscription, and you keep every job you book.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button asChild variant="primary" size="lg" className="bg-orange hover:bg-orange-hover">
              <Link href="/for-pros">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  href,
  hrefLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="font-medium uppercase tracking-wide text-orange text-sm">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-navy-deep md:text-4xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-muted">{subtitle}</p> : null}
      </div>
      {href && hrefLabel ? (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-orange hover:underline"
        >
          {hrefLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}
