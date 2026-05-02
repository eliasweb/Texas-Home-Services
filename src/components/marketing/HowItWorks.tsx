import { Search, ClipboardCheck, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      step: "1",
      title: "Tell us what you need",
      body: "Pick a service and your ZIP. We'll filter to pros who actually serve your address — no out-of-state cold calls.",
    },
    {
      icon: ClipboardCheck,
      step: "2",
      title: "Compare screened pros",
      body: "Every contractor is reviewed for license, insurance, and Texas reviews from real customers — not bots.",
    },
    {
      icon: MessageSquare,
      step: "3",
      title: "Request quotes & book",
      body: "Send your job to as many pros as you want. Most respond same day with pricing and earliest availability.",
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium uppercase tracking-wide text-orange text-sm">How it works</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-deep md:text-4xl">
            From cold AC to clean install — in three steps.
          </h2>
          <p className="mt-3 text-muted">
            We handle the legwork. You compare, ask questions, and pick the pro who feels right.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative rounded-card border border-navy/10 bg-white p-7 shadow-card"
            >
              <span className="absolute -top-3 left-7 inline-flex h-6 items-center rounded-pill bg-orange px-2.5 text-xs font-bold text-white shadow-cta">
                Step {s.step}
              </span>
              <s.icon className="h-7 w-7 text-orange" />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
