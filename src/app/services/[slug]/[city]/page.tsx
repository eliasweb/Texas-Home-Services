import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { ProList } from "@/components/pros/ProList";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllCategories, getCategoryBySlug } from "@/lib/queries/categories";
import { getAllCities, getCityBySlug } from "@/lib/queries/cities";
import { getProsByCategoryAndCity } from "@/lib/queries/pros";

type Props = { params: Promise<{ slug: string; city: string }> };

export async function generateStaticParams() {
  const [cats, cities] = await Promise.all([getAllCategories(), getAllCities()]);
  return cats.flatMap((cat) =>
    cities.filter((c) => c.featured).map((city) => ({ slug: cat.slug, city: city.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const [cat, ct] = await Promise.all([getCategoryBySlug(slug), getCityBySlug(city)]);
  if (!cat || !ct) return { title: "Not found" };
  return {
    title: `${cat.name} Pros in ${ct.name}, TX`,
    description: `Top-rated ${cat.name.toLowerCase()} contractors serving ${ct.name} and the surrounding ${ct.region}.`,
  };
}

export default async function CategoryInCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const [category, city] = await Promise.all([getCategoryBySlug(slug), getCityBySlug(citySlug)]);
  if (!category || !city) notFound();

  const pros = await getProsByCategoryAndCity(slug, citySlug, 24);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://texashomeservices.example/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://texashomeservices.example/services" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://texashomeservices.example/services/${category.slug}` },
      { "@type": "ListItem", position: 4, name: `${city.name}, TX`, item: `https://texashomeservices.example/services/${category.slug}/${city.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
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
              { href: `/services/${category.slug}`, label: category.name },
              { label: `${city.name}, TX` },
            ]}
          />
          <div className="mt-6">
            <h1 className="font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
              {category.name} pros in {city.name}, TX
            </h1>
            <p className="mt-3 max-w-2xl text-muted">
              Vetted local {category.name.toLowerCase()} contractors serving {city.name} and the
              surrounding {city.region}. Free quotes, real reviews from Texas customers, and
              same-day responses on most jobs.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild size="lg">
                <Link
                  href={`/search?category=${category.slug}&city=${city.slug}`}
                >
                  Get matched with pros
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={`/services/${category.slug}`}>About {category.name.toLowerCase()}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted">
              Showing {pros.length} {pros.length === 1 ? "pro" : "pros"} in {city.name}
            </p>
          </div>
          <div className="mt-6">
            <ProList pros={pros} />
          </div>
        </Container>
      </section>

      {/* Related cities */}
      <section className="border-t border-navy/10 bg-cream-warm/40 py-12">
        <Container>
          <p className="font-display text-lg font-semibold text-navy-deep">
            {category.name} pros in other Texas cities
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {(await getAllCities())
              .filter((c) => c.slug !== city.slug)
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${category.slug}/${c.slug}`}
                  className="rounded-pill border border-navy/10 bg-white px-3 py-1.5 text-navy-deep hover:border-orange hover:bg-cream"
                >
                  {category.name} in {c.name}
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
