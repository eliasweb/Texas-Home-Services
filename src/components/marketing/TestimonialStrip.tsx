import { ReviewStars } from "@/components/pros/ReviewStars";
import { Container } from "@/components/layout/Container";

const items = [
  {
    name: "Andrea L.",
    city: "Plano, TX",
    rating: 5,
    body:
      "We had three roofers ghost us after the May hail event. The pro we found here had a tarp on by 4 p.m. and a new roof in two weeks. Worth every dollar.",
    service: "Roofing",
  },
  {
    name: "Diego H.",
    city: "Austin, TX",
    rating: 5,
    body:
      "Booked a panel upgrade plus an EV charger. Master electrician, pulled the permit, and the city inspection was clean. Would absolutely use them again.",
    service: "Electrical",
  },
  {
    name: "Becca M.",
    city: "Houston, TX",
    rating: 5,
    body:
      "Slab leak on a Sunday — they were here within an hour and had it located by Monday afternoon. Saved us from a much bigger restoration job.",
    service: "Plumbing",
  },
];

export function TestimonialStrip() {
  return (
    <section className="bg-navy-grad py-16 text-cream md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium uppercase tracking-wide text-star text-sm">Texas voices</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            Real reviews from real Texans.
          </h2>
          <p className="mt-3 text-cream/80">
            Every review on the platform comes from a verified job. No paid placements, no inflated ratings.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-card border border-cream/10 bg-navy-deep/60 p-6"
            >
              <ReviewStars rating={t.rating} />
              <blockquote className="mt-3 text-sm leading-relaxed text-cream">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-xs text-cream/70">
                <span>
                  <span className="font-semibold text-cream">{t.name}</span> · {t.city}
                </span>
                <span className="rounded-pill bg-orange/20 px-2 py-0.5 text-orange-50">
                  {t.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
