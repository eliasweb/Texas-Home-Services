import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { ProApplicationForm } from "@/components/forms/ProApplicationForm";
import { getAllCategories } from "@/lib/queries/categories";
import { getAllCities } from "@/lib/queries/cities";

export const metadata: Metadata = {
  title: "Apply to Join — Texas Home Services",
  description: "Apply to list your Texas home service business on Texas Home Services.",
};

export default async function ProSignupPage() {
  const [categories, cities] = await Promise.all([getAllCategories(), getAllCities()]);

  return (
    <Container size="narrow" className="py-12">
      <BreadcrumbTrail
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/for-pros", label: "For Pros" },
          { label: "Apply" },
        ]}
      />
      <h1 className="mt-6 font-display text-3xl font-bold text-navy-deep md:text-4xl">
        Apply to join the network.
      </h1>
      <p className="mt-2 text-muted">
        Tell us about your business. A Texas-based account team member reviews every application
        and reaches out within two business days.
      </p>
      <div className="mt-8 rounded-card border border-navy/10 bg-white p-6 shadow-card md:p-8">
        <ProApplicationForm
          categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
          cities={cities.map((c) => ({ slug: c.slug, name: c.name }))}
        />
      </div>
    </Container>
  );
}
