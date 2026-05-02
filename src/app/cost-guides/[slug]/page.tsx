import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { CostRangeBar } from "@/components/services/CostRangeBar";
import { Prose } from "@/components/content/Prose";
import { Button } from "@/components/ui/button";
import { getAllCostGuides, getCostGuideBySlug } from "@/lib/queries/content";
import { parseJsonArray } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const guides = await getAllCostGuides();
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = await getCostGuideBySlug(slug);
  if (!g) return { title: "Cost guide not found" };
  return { title: g.title, description: g.summary };
}

export default async function CostGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = await getCostGuideBySlug(slug);
  if (!guide) notFound();
  const factors = parseJsonArray<string>(guide.factors);

  return (
    <>
      <section className="border-b border-navy/10 bg-cream-grad">
        <Container className="py-10">
          <BreadcrumbTrail
            crumbs={[
              { href: "/", label: "Home" },
              { href: "/cost-guides", label: "Cost guides" },
              { label: guide.title },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="text-xs uppercase tracking-wide text-orange">
              {guide.category.name}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-deep md:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-3 text-lg text-muted">{guide.summary}</p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-8">
            <Prose markdown={guide.body} />
          </div>
          <aside className="lg:col-span-4 space-y-6">
            <CostRangeBar
              low={guide.lowUsd}
              avg={guide.avgUsd}
              high={guide.highUsd}
              unitLabel={guide.unitLabel}
            />
            {factors.length > 0 ? (
              <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
                <p className="font-display text-base font-semibold text-navy-deep">
                  What changes the price
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {factors.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="rounded-card border border-navy/10 bg-navy p-6 text-cream">
              <p className="font-display text-base font-semibold">Get real quotes</p>
              <p className="mt-1.5 text-sm text-cream/80">
                Want to see actual pricing for your project?
              </p>
              <Button asChild size="md" className="mt-4 w-full bg-orange hover:bg-orange-hover">
                <Link href={`/services/${guide.category.slug}`}>
                  See {guide.category.name} pros <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
