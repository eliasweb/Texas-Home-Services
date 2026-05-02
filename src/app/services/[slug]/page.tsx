import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import * as Icons from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { CostRangeBar } from "@/components/services/CostRangeBar";
import { ProCard } from "@/components/pros/ProCard";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { getCategoryBySlug, getAllCategories } from "@/lib/queries/categories";
import { getTopProsForCategory } from "@/lib/queries/pros";
import { getAllCities } from "@/lib/queries/cities";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const cats = await getAllCategories();
  return cats.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCategoryBySlug(slug);
  if (!c) return { title: "Service not found" };
  return {
    title: `${c.name} Pros in Texas`,
    description: c.description,
  };
}

function getIcon(key: string): React.ComponentType<{ className?: string }> {
  const set = Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  return set[key] ?? set.Sparkles!;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const [topPros, cities] = await Promise.all([
    getTopProsForCategory(slug, 6),
    getAllCities(),
  ]);
  const featuredCities = cities.filter((c) => c.featured);

  const Icon = getIcon(category.iconKey);

  const faqs = [
    {
      q: `How much does ${category.name.toLowerCase()} typically cost in Texas?`,
      a: category.costGuide
        ? `Most ${category.name.toLowerCase()} jobs in Texas run between $${category.costGuide.lowUsd.toLocaleString()} and $${category.costGuide.highUsd.toLocaleString()} ${category.costGuide.unitLabel}, with the typical project around $${category.costGuide.avgUsd.toLocaleString()}.`
        : `Pricing varies by job scope and location. Get free quotes from local Texas pros to see real numbers for your project.`,
    },
    {
      q: `Are the ${category.name.toLowerCase()} contractors on this site licensed and insured?`,
      a: `Every contractor on Texas Home Services is screened for active license (where required), current liability insurance, and a Texas-based service address. We re-verify annually.`,
    },
    {
      q: `How quickly can I get a quote?`,
      a: `Most pros respond within a few hours during business days. Many keep emergency dispatch for issues that can't wait — flood, no-AC, slab leak, electrical safety.`,
    },
    {
      q: `What does the contractor warranty look like?`,
      a: `Warranties vary, but most reputable Texas ${category.name.toLowerCase()} pros offer at least a one-year labor warranty on installs and repairs. Manufacturer warranties on equipment add additional coverage.`,
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://texashomeservices.example/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://texashomeservices.example/services" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://texashomeservices.example/services/${category.slug}` },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          className="pointer-events-none absolute -right-12 top-1/2 h-64 w-64 -translate-y-1/2 text-orange"
          opacity={0.05}
        />
        <Container className="relative py-12 md:py-14">
          <BreadcrumbTrail
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: category.name },
            ]}
          />
          <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-orange/10 text-orange">
                <Icon className="h-6 w-6" />
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
                {category.name} pros in Texas
              </h1>
              {category.tagline ? (
                <p className="mt-3 text-lg text-muted">{category.tagline}</p>
              ) : null}
              {category.texasNote ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-pill bg-star/15 px-3 py-1 text-sm font-medium text-star-deep">
                  <span>★</span> {category.texasNote}
                </p>
              ) : null}
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link href={`/search?category=${category.slug}`}>
                  Get free quotes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {category.costGuide ? (
                <Button asChild variant="outline" size="lg">
                  <Link href={`/cost-guides/${category.slug}`}>See pricing</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {category.longCopy ? (
              <p className="text-lg leading-relaxed text-ink">{category.longCopy}</p>
            ) : (
              <p className="text-lg leading-relaxed text-ink">{category.description}</p>
            )}

            {category.subcategories.length > 0 ? (
              <div className="mt-10">
                <h2 className="font-display text-2xl font-bold text-navy-deep">
                  What our {category.name.toLowerCase()} pros handle
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {category.subcategories.map((s) => (
                    <li key={s.slug} className="flex items-start gap-3 rounded-md border border-navy/10 bg-white p-4">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
                      <div>
                        <p className="font-medium text-navy-deep">{s.name}</p>
                        {s.description ? (
                          <p className="mt-0.5 text-sm text-muted">{s.description}</p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-deep">
                Frequently asked questions
              </h2>
              <dl className="mt-5 divide-y divide-navy/10 rounded-card border border-navy/10 bg-white">
                {faqs.map((f) => (
                  <div key={f.q} className="px-5 py-4">
                    <dt className="font-display text-base font-semibold text-navy-deep">{f.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            {category.costGuide ? (
              <CostRangeBar
                low={category.costGuide.lowUsd}
                avg={category.costGuide.avgUsd}
                high={category.costGuide.highUsd}
                unitLabel={category.costGuide.unitLabel}
              />
            ) : null}
            <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
              <p className="font-display text-base font-semibold text-navy-deep">
                Browse by city
              </p>
              <p className="mt-1 text-sm text-muted">
                See local {category.name.toLowerCase()} pros in your metro.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-1.5 text-sm">
                {featuredCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/services/${category.slug}/${c.slug}`}
                      className="block rounded-md px-3 py-2 text-navy-deep hover:bg-cream"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-cream-warm/40 py-14">
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
            Top-rated {category.name.toLowerCase()} pros in Texas
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topPros.map((p) => (
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
    </>
  );
}
