import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SearchBar } from "@/components/search/SearchBar";
import { ProList } from "@/components/pros/ProList";
import { searchPros } from "@/lib/queries/pros";
import { getAllCategories } from "@/lib/queries/categories";
import { getAllCities, findCityByZip } from "@/lib/queries/cities";

export const metadata: Metadata = {
  title: "Search Texas Home Service Pros",
  description: "Search vetted Texas home service contractors by category, city, or ZIP.",
};

type SP = Promise<Record<string, string | string[] | undefined>>;

export default async function SearchPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const category = typeof sp.category === "string" ? sp.category : undefined;
  const cityParam = typeof sp.city === "string" ? sp.city : undefined;
  const zip = typeof sp.zip === "string" ? sp.zip : undefined;

  const [categories, allCities] = await Promise.all([getAllCategories(), getAllCities()]);

  let resolvedCity = cityParam;
  if (!resolvedCity && zip) {
    const c = await findCityByZip(zip);
    if (c) resolvedCity = c.slug;
  }

  const pros = await searchPros({
    categorySlug: category,
    citySlug: resolvedCity,
    zip,
    limit: 30,
  });

  const categoryName = category ? categories.find((c) => c.slug === category)?.name : null;
  const cityName = resolvedCity ? allCities.find((c) => c.slug === resolvedCity)?.name : null;

  return (
    <>
      <section className="border-b border-navy/10 bg-cream-grad py-10">
        <Container>
          <h1 className="font-display text-3xl font-bold text-navy-deep md:text-4xl">
            {categoryName && cityName
              ? `${categoryName} pros in ${cityName}, TX`
              : categoryName
                ? `${categoryName} pros in Texas`
                : cityName
                  ? `Home service pros in ${cityName}, TX`
                  : "Find Texas home service pros"}
          </h1>
          <p className="mt-2 text-muted">
            {pros.length} {pros.length === 1 ? "match" : "matches"}
            {zip ? ` for ZIP ${zip}` : ""}
          </p>
          <div className="mt-6 max-w-3xl">
            <SearchBar
              categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
            />
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <ProList pros={pros} />
          {pros.length === 0 ? (
            <div className="mt-8 rounded-card border border-navy/10 bg-white p-6 text-center">
              <p className="text-muted">
                Try removing one of the filters, or{" "}
                <Link href="/services" className="text-orange underline">
                  browse all services
                </Link>
                .
              </p>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
