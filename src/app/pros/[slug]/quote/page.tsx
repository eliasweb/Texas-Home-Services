import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { getProBySlug } from "@/lib/queries/pros";
import { getAllCategories } from "@/lib/queries/categories";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pro = await getProBySlug(slug);
  return {
    title: pro ? `Get a quote from ${pro.name}` : "Quote",
    description: pro?.tagline ?? "Request a free quote from a Texas home service pro.",
  };
}

export default async function QuotePage({ params }: Props) {
  const { slug } = await params;
  const [pro, categories] = await Promise.all([getProBySlug(slug), getAllCategories()]);
  if (!pro) notFound();
  const primary = pro.services.find((s) => s.primary) ?? pro.services[0];

  return (
    <Container className="py-12 max-w-2xl">
      <BreadcrumbTrail
        crumbs={[
          { href: "/", label: "Home" },
          { href: `/pros/${pro.slug}`, label: pro.name },
          { label: "Get a quote" },
        ]}
      />
      <h1 className="mt-6 font-display text-3xl font-bold text-navy-deep md:text-4xl">
        Get a quote from {pro.name}
      </h1>
      <p className="mt-2 text-muted">
        Tell {pro.name} about the job and they&apos;ll typically respond the same business day.
      </p>
      <div className="mt-8 rounded-card border border-navy/10 bg-white p-6 shadow-card">
        <QuoteForm
          categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
          defaultCategorySlug={primary?.category.slug}
          defaultCitySlug={pro.homeCity.slug}
          proSlug={pro.slug}
          proName={pro.name}
        />
      </div>
    </Container>
  );
}
