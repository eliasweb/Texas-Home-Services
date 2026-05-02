import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CategoryGrid } from "@/components/marketing/CategoryGrid";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { getAllCategories } from "@/lib/queries/categories";

export const metadata: Metadata = {
  title: "All Home Services in Texas",
  description:
    "Browse 30+ home service categories — from plumbing and HVAC to mosquito control and storm damage restoration — across every major Texas metro.",
};

export default async function ServicesIndexPage() {
  const categories = await getAllCategories();

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          variant="outline"
          className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-navy"
          opacity={0.05}
        />
        <Container className="relative py-14 md:py-16">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">
            Texas home services
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            Every service, ranked for Texas climates and homes.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            From the daily essentials (lawn care, cleaning, handyman) to the things that only
            matter here (foundation repair on clay soil, hail-damage roof inspections, mosquito
            barrier sprays) — find Texas-specific contractors for the work you actually need.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-16">
        <Container>
          <CategoryGrid categories={categories} />
        </Container>
      </section>
    </>
  );
}
