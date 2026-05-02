import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Texas Home Services.",
};

export default function ContactPage() {
  return (
    <Container size="narrow" className="py-16">
      <h1 className="font-display text-3xl font-bold text-navy-deep md:text-4xl">Contact us</h1>
      <p className="mt-3 text-muted">
        Have a question or some feedback? Email <a className="text-orange underline" href="mailto:hello@texashomeservices.example">hello@texashomeservices.example</a> and a Texas-based team member will reply within one business day.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold text-navy-deep">Homeowners</h2>
          <p className="mt-2 text-sm text-muted">
            Questions about a quote, finding a pro, or leaving a review? We&apos;re happy to help.
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:hello@texashomeservices.example" className="text-orange underline">
              hello@texashomeservices.example
            </a>
          </p>
        </div>
        <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
          <h2 className="font-display text-lg font-semibold text-navy-deep">Pros</h2>
          <p className="mt-2 text-sm text-muted">
            Already on the platform, or applying? Reach the pro success team here.
          </p>
          <p className="mt-4 text-sm">
            <a href="mailto:pros@texashomeservices.example" className="text-orange underline">
              pros@texashomeservices.example
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}
