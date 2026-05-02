import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { getAllCities } from "@/lib/queries/cities";
import { parseJsonArray } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Texas Cities — Local Home Service Pros by City",
  description:
    "Find local home service contractors in Houston, Dallas, Austin, San Antonio, Fort Worth, and a dozen more Texas cities.",
};

export default async function CitiesIndexPage() {
  const cities = await getAllCities();

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          variant="outline"
          className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-navy"
          opacity={0.05}
        />
        <Container className="relative py-14 md:py-16">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">Texas cities</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            Pros in every metro across the Lone Star State.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Each city has its own quirks — Houston gumbo clay, Lubbock hard water, El Paso desert
            climate. Browse local contractors who know the difference.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => {
              const zips = parseJsonArray<string>(c.zips);
              return (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="group flex flex-col overflow-hidden rounded-card border border-navy/10 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card-hover"
                >
                  <div className="bg-navy-grad p-5 text-cream">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-cream/70">
                      <span>{c.region}</span>
                      {c.featured ? (
                        <span className="rounded-pill bg-star/20 px-2 py-0.5 text-star">
                          Major metro
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 font-display text-2xl font-bold">{c.name}, TX</p>
                    {c.population ? (
                      <p className="mt-1 text-sm text-cream/70">
                        {c.population.toLocaleString()} residents
                      </p>
                    ) : null}
                  </div>
                  <div className="flex-1 p-5">
                    <p className="text-sm text-muted">{c.blurb}</p>
                    {zips.length > 0 ? (
                      <p className="mt-4 text-xs text-muted-soft">
                        Serving ZIPs {zips.slice(0, 4).join(", ")}
                        {zips.length > 4 ? `, +${zips.length - 4} more` : ""}
                      </p>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
