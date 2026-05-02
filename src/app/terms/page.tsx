import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Texas Home Services.",
};

export default function TermsPage() {
  return (
    <Container size="narrow" className="py-16">
      <h1 className="font-display text-3xl font-bold text-navy-deep md:text-4xl">
        Terms of service
      </h1>
      <div className="prose-tx mt-6">
        <p>
          These are sample terms of service for Texas Home Services. By using the site you agree
          to use it lawfully, not to scrape or attempt to defraud the platform, and you agree
          that quote requests submitted through the site may be shared with the matched pros.
        </p>
        <h2>No warranty on third-party work</h2>
        <p>
          Texas Home Services is a marketplace. We screen pros, but we don&apos;t perform the
          work or guarantee its outcome. Each contractor is responsible for their own quality,
          warranties, and licensing.
        </p>
        <h2>For pros</h2>
        <p>
          Listed pros agree to maintain current licensure (where required), insurance, and to
          serve homeowners professionally. Repeated complaints or verified license lapses lead
          to removal.
        </p>
        <p className="mt-8 text-sm text-muted">
          This is a placeholder. A production deployment should consult counsel for a full
          terms document.
        </p>
      </div>
    </Container>
  );
}
