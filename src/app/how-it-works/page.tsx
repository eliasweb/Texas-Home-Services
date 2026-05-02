import type { Metadata } from "next";
import Link from "next/link";
import { Search, ClipboardCheck, MessageSquare, Wrench } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TexasAccent } from "@/components/marketing/TexasAccent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Texas Home Services connects Texas homeowners with screened local contractors — in three steps.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "Tell us what you need.",
      body:
        "Pick a service category and your ZIP code. We'll filter the network down to pros who actually serve your address — not out-of-state cold callers.",
    },
    {
      icon: ClipboardCheck,
      title: "Compare screened pros.",
      body:
        "Every pro on the platform is verified for license (where required), insurance, and a Texas operating address. Skim ratings, badges, and Texas-specific reviews.",
    },
    {
      icon: MessageSquare,
      title: "Request quotes.",
      body:
        "Reach out to one pro or several. We pass along your contact info — no phone tag, no middleman. Most pros respond same business day.",
    },
    {
      icon: Wrench,
      title: "Book the work.",
      body:
        "Pick the pro who feels right and book directly with them. After the job, leave a review for future Texas homeowners.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
        <TexasAccent
          variant="outline"
          className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-navy"
          opacity={0.05}
        />
        <Container className="relative py-14 md:py-16">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">
            How it works
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
            From search to scheduled job — usually under 24 hours.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            We&apos;ve simplified the homeowner side of the marketplace down to four steps. No
            account required, no email confirmations to chase, no spammy calls.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-card border border-navy/10 bg-white p-7 shadow-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-orange/10 text-orange">
                <s.icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
                Step {i + 1}
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold text-navy-deep">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-cream-warm/40 py-14">
        <Container size="narrow">
          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 divide-y divide-navy/10 rounded-card border border-navy/10 bg-white">
            {faqs.map((f) => (
              <div key={f.q} className="px-5 py-4">
                <dt className="font-display text-base font-semibold text-navy-deep">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-14">
        <Container className="rounded-card bg-navy p-10 text-cream md:p-14">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Ready to find a pro?</h2>
          <p className="mt-3 max-w-xl text-cream/80">
            Browse the network or kick off a quote request now. Most homeowners hear back the same
            business day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-orange hover:bg-orange-hover">
              <Link href="/services">Browse services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream/30 bg-transparent text-cream hover:bg-cream/10">
              <Link href="/cities">Browse by city</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

const faqs = [
  {
    q: "Does it cost anything to use the site?",
    a: "Nothing for homeowners. Quotes are free and there's no fee to use the platform. Pros pay a flat monthly subscription, which keeps homeowner pricing honest.",
  },
  {
    q: "How are pros verified?",
    a: "We check active licensing (where required by trade and city), current general liability insurance, and a Texas business address. We re-verify annually and remove any pro who lapses.",
  },
  {
    q: "How fast will I hear back?",
    a: "Most pros respond within a few hours during business days. Many keep emergency dispatch lines for issues that can't wait — flood, no-AC, slab leak, electrical safety.",
  },
  {
    q: "Do you cover small towns or just big metros?",
    a: "We focus on the major Texas metros today, plus mid-size cities like Lubbock, Amarillo, Tyler, and Waco. We're adding new cities throughout 2026.",
  },
  {
    q: "Can I leave a review without making an account?",
    a: "Yes. After your job, the pro can send a review link directly to your email — no account creation required.",
  },
];
