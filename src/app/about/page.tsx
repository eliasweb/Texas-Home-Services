import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Texas Home Services connects Texas homeowners with screened, insured local home pros across 30+ categories and 18+ cities.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          variant="outline"
          className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-navy"
          opacity={0.05}
        />
        <Container className="relative py-14 md:py-16">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">About us</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            We started this because hiring a contractor in Texas is harder than it should be.
          </h1>
        </Container>
      </section>

      <section className="py-14">
        <Container size="narrow">
          <div className="prose-tx">
            <p>
              Texas Home Services was founded by a small team of Texans who&apos;ve hired plenty
              of plumbers, roofers, and HVAC techs over the years — and gotten ghosted, overcharged,
              and pitched on services we didn&apos;t need too many times to count.
            </p>
            <p>
              The big national platforms don&apos;t feel like home. They send leads to
              out-of-state shops, surface contractors with great SEO instead of great work, and
              charge pros so much per-lead that the costs land back on the homeowner.
            </p>
            <p>
              We thought we could do this better — and Texas is the right place to start. Long
              cooling seasons, expansive clay soils, hail alley, hurricane response, the
              occasional freeze. The trades here have to be different. So we built a platform
              that respects that.
            </p>
            <h2>How we&apos;re different</h2>
            <ul>
              <li>
                <strong>Texas-only.</strong> Every pro on the platform has a Texas business address
                and serves a Texas service area. No exceptions.
              </li>
              <li>
                <strong>Screened, not just listed.</strong> We verify license (where required),
                insurance, and operational history. We re-verify annually.
              </li>
              <li>
                <strong>Flat-rate pro subscriptions.</strong> We don&apos;t charge per-lead. Pros pay
                a predictable monthly fee, and they keep every job they book — which keeps your
                quote honest.
              </li>
              <li>
                <strong>Real reviews.</strong> Reviews come from verified jobs, not bot farms.
              </li>
              <li>
                <strong>Local team.</strong> Our customer support is based in Texas. When you
                email us, a person you could grab brisket with answers.
              </li>
            </ul>
            <h2>Where we&apos;re going</h2>
            <p>
              We&apos;re still small, and we like it that way. Our 2026 focus is deepening
              coverage in mid-size Texas markets — Lubbock, Amarillo, Tyler, Waco — and adding
              more recurring services (lawn programs, pest plans, pool routes) where homeowners
              want a contractor they can trust for the long haul.
            </p>
            <p>
              If you&apos;ve got feedback, we want it. <Link href="/contact">Reach out</Link>{" "}
              anytime — every message lands in a real Texas inbox.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-cream-warm/40 py-14">
        <Container className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
              Need a pro? Or running one?
            </h2>
            <p className="mt-2 text-muted">
              Whether you&apos;re a homeowner with a leaky faucet or a contractor looking for
              steadier work, we&apos;d love to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Button asChild size="lg">
              <Link href="/services">Find a pro</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/for-pros">Join as a pro</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
