import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { formatCurrency } from "@/lib/utils";
import { getAllCostGuides } from "@/lib/queries/content";

export const metadata: Metadata = {
  title: "Texas Home Service Cost Guides",
  description: "Real Texas pricing for plumbing, HVAC, roofing, foundation repair, and 25+ more home services.",
};

export default async function CostGuidesIndexPage() {
  const guides = await getAllCostGuides();

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          variant="outline"
          className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-navy"
          opacity={0.05}
        />
        <Container className="relative py-14 md:py-16">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">Cost guides</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            What things actually cost in Texas.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Pricing pulled from real Texas projects, not national averages. Use these guides to
            check whether a quote is reasonable before you sign.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.id}
                href={`/cost-guides/${g.slug}`}
                className="group flex flex-col rounded-card border border-navy/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card-hover"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-orange">
                  {g.category.name}
                </p>
                <h2 className="mt-1.5 font-display text-lg font-semibold text-navy-deep group-hover:text-orange">
                  {g.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{g.summary}</p>
                <div className="mt-auto flex items-center gap-3 pt-4">
                  <div className="rounded-md bg-cream px-3 py-1.5">
                    <p className="text-xs text-muted">Typical avg</p>
                    <p className="font-display text-base font-bold text-navy-deep">
                      {formatCurrency(g.avgUsd)}
                    </p>
                  </div>
                  <p className="text-xs text-muted">{g.unitLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
