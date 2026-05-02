import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { Button } from "@/components/ui/button";
import { ProList } from "@/components/pros/ProList";
import { getAllCities, getCityBySlug } from "@/lib/queries/cities";
import { getCategoriesForCity, getTopProsForCity } from "@/lib/queries/pros";
import { parseJsonArray } from "@/lib/utils";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  const cities = await getAllCities();
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = await getCityBySlug(city);
  if (!c) return { title: "City not found" };
  return {
    title: `Home Service Pros in ${c.name}, TX`,
    description: c.blurb,
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = await getCityBySlug(citySlug);
  if (!city) notFound();

  const [categories, topPros] = await Promise.all([
    getCategoriesForCity(citySlug),
    getTopProsForCity(citySlug, 9),
  ]);
  const zips = parseJsonArray<string>(city.zips);

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-navy-grad text-cream">
        <TexasAccent
          className="pointer-events-none absolute -right-12 top-1/2 h-72 w-72 -translate-y-1/2 text-star"
          opacity={0.08}
        />
        <Container className="relative py-12 md:py-16">
          <BreadcrumbTrail
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/cities", label: "Cities" },
              { label: city.name },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="text-xs uppercase tracking-wide text-star">{city.region}</p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Home service pros in {city.name}, TX
            </h1>
            <p className="mt-4 text-lg text-cream/80">{city.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`/search?city=${city.slug}`}>
                  Find a local pro <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-cream/0 text-cream hover:bg-cream/10 border-cream/30">
                <Link href="/services">Browse services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {city.longCopy ? (
              <p className="text-lg leading-relaxed text-ink">{city.longCopy}</p>
            ) : null}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
                Most-booked services in {city.name}
              </h2>
              <p className="mt-2 text-muted">
                The contractors below cover the categories Texans in {city.name} request most.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.slice(0, 9).map(({ category, count }) => (
                  <Link
                    key={category.id}
                    href={`/services/${category.slug}/${city.slug}`}
                    className="group flex flex-col rounded-card border border-navy/10 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-orange/40"
                  >
                    <p className="font-display text-base font-semibold text-navy-deep group-hover:text-orange">
                      {category.name}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {count} {count === 1 ? "pro" : "pros"} in {city.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
              <p className="font-display text-base font-semibold text-navy-deep">
                ZIP codes we serve
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5 text-sm">
                {zips.map((z) => (
                  <li
                    key={z}
                    className="rounded-pill border border-navy/10 bg-cream px-2.5 py-0.5 text-xs font-medium text-navy-deep"
                  >
                    {z}
                  </li>
                ))}
              </ul>
              {city.population ? (
                <p className="mt-4 text-xs text-muted">
                  Serving {city.population.toLocaleString()} residents in {city.region}.
                </p>
              ) : null}
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-cream-warm/40 py-14">
        <Container>
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
            Top-rated pros in {city.name}
          </h2>
          <div className="mt-8">
            <ProList pros={topPros} />
          </div>
        </Container>
      </section>
    </>
  );
}
