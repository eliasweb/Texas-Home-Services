import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Shield, MapPin, Wallet, MessagesSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TexasAccent } from "@/components/marketing/TexasAccent";

export const metadata: Metadata = {
  title: "For Pros — Grow Your Texas Home Service Business",
  description:
    "Connect with Texas homeowners ready to hire. Flat-rate monthly subscription, no pay-per-lead. Apply now.",
};

export default function ForProsPage() {
  const benefits = [
    {
      icon: Wallet,
      title: "Flat monthly fee, not per-lead",
      body: "We charge a predictable monthly subscription. Every job you book is yours — no per-lead bidding wars.",
    },
    {
      icon: Users,
      title: "Local Texas homeowners only",
      body: "We don't ship leads from out of state. Every request comes from a real Texas home with a real ZIP code.",
    },
    {
      icon: MapPin,
      title: "You control your service area",
      body: "Set the ZIPs, cities, and categories you actually serve. No more Houston jobs landing in Lubbock.",
    },
    {
      icon: MessagesSquare,
      title: "Direct contact, no middleman",
      body: "When a homeowner requests a quote, you get the contact info immediately. Reach out on your terms.",
    },
    {
      icon: Shield,
      title: "Verified pros only",
      body: "We screen every contractor for license (where required), insurance, and a Texas address. Quality over quantity.",
    },
    {
      icon: CheckCircle2,
      title: "No surprise charges",
      body: "Cancel anytime. No setup fee. No long-term contract. We earn your business every month.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-navy-grad text-cream">
        <TexasAccent
          className="pointer-events-none absolute -right-12 top-1/2 h-72 w-72 -translate-y-1/2 text-star"
          opacity={0.1}
        />
        <Container className="relative py-16 md:py-24">
          <p className="text-xs font-medium uppercase tracking-wide text-star">
            For Texas home pros
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            More homeowners. Less hassle. No pay-per-lead.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">
            Texas Home Services is built for honest local contractors who want a steady stream of
            work without bidding against a dozen out-of-state shops on every lead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/for-pros/signup">
                Apply now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream/30 bg-transparent text-cream hover:bg-cream/10"
            >
              <a href="#benefits">How it works</a>
            </Button>
          </div>
        </Container>
      </section>

      <section id="benefits" className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-medium uppercase tracking-wide text-orange text-sm">
              Why pros choose us
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              A platform that works the way you wish your last one did.
            </h2>
            <p className="mt-3 text-muted">
              Built by Texas contractors and homeowners. We&apos;ve been on both sides of bad
              lead generation, so we built something better.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-card border border-navy/10 bg-white p-6 shadow-card"
              >
                <b.icon className="h-7 w-7 text-orange" />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-deep">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-cream-warm/40 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-medium uppercase tracking-wide text-orange text-sm">Pricing</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-deep md:text-4xl">
              Simple monthly pricing — no surprises.
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <PricingCard
              name="Starter"
              price="$79"
              period="/month"
              description="Single-trade service area, up to 10 ZIPs."
              bullets={["Profile listing in 1 category", "Direct contact info on every quote", "Verified-pro badge", "Cancel anytime"]}
            />
            <PricingCard
              name="Multi-Trade"
              price="$149"
              period="/month"
              highlight
              description="For shops doing multiple categories or larger service areas."
              bullets={[
                "Profile in up to 4 categories",
                "Service area up to 30 ZIPs",
                "Featured placement in your city",
                "Priority on emergency requests",
                "Cancel anytime",
              ]}
            />
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            All plans include screening, profile setup help, and a Texas-based account team.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 rounded-card border border-navy/10 bg-navy p-10 text-cream md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h3 className="font-display text-3xl font-bold">Ready to grow?</h3>
            <p className="mt-3 max-w-xl text-cream/80">
              Apply in five minutes. We&apos;ll review and reach out within two business days. No
              upfront commitment — we only ask for payment after you&apos;ve been accepted.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button asChild size="lg" className="bg-orange hover:bg-orange-hover">
              <Link href="/for-pros/signup">
                Apply now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  bullets,
  highlight = false,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-card border p-7 shadow-card ${
        highlight ? "border-orange bg-white" : "border-navy/10 bg-white"
      }`}
    >
      {highlight ? (
        <span className="mb-3 inline-flex w-fit rounded-pill bg-orange px-2.5 py-0.5 text-xs font-semibold text-white">
          Most popular
        </span>
      ) : null}
      <p className="font-display text-xl font-semibold text-navy-deep">{name}</p>
      <p className="mt-3 text-sm text-muted">{description}</p>
      <p className="mt-5 font-display text-4xl font-bold text-navy-deep">
        {price}
        <span className="text-sm font-medium text-muted">{period}</span>
      </p>
      <ul className="mt-6 space-y-2 text-sm text-ink">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <Button asChild size="md" variant={highlight ? "primary" : "outline"} className="mt-6">
        <Link href="/for-pros/signup">Apply now</Link>
      </Button>
    </div>
  );
}
