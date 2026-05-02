import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Texas Home Services handles your data.",
};

export default function PrivacyPage() {
  return (
    <Container size="narrow" className="py-16">
      <h1 className="font-display text-3xl font-bold text-navy-deep md:text-4xl">
        Privacy policy
      </h1>
      <div className="prose-tx mt-6">
        <p>
          This is a sample privacy policy page for Texas Home Services. The full policy explains
          what data we collect (contact info, ZIP, project details), how we share it (only with
          the pros you choose to contact), how you can request deletion, and how we secure data
          in transit and at rest.
        </p>
        <h2>Data we collect</h2>
        <p>
          When you submit a quote request or pro application, we collect your name, email, phone,
          ZIP, and any details you include. We log a hash of your IP and your user agent for fraud
          prevention.
        </p>
        <h2>Data we share</h2>
        <p>
          Quote details are shared only with the pros you target. Application details are shared
          only with our internal review team. We don&apos;t sell data to third parties.
        </p>
        <h2>Your rights</h2>
        <p>
          Email <a href="mailto:privacy@texashomeservices.example">privacy@texashomeservices.example</a>{" "}
          to request access, correction, or deletion of your data.
        </p>
        <p className="mt-8 text-sm text-muted">
          This is a placeholder. A production deployment should consult counsel for a full
          policy.
        </p>
      </div>
    </Container>
  );
}
