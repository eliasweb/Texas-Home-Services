import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { Prose } from "@/components/content/Prose";
import { ArticleCard } from "@/components/content/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllArticles, getArticleBySlug } from "@/lib/queries/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const all = await getAllArticles();
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = await getArticleBySlug(slug);
  if (!a) return { title: "Article not found" };
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = await getAllArticles();
  const related = allArticles.filter((a) => a.id !== article.id).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt.toISOString(),
    author: { "@type": "Organization", name: "Texas Home Services" },
    publisher: { "@type": "Organization", name: "Texas Home Services" },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Container className="py-10">
        <BreadcrumbTrail
          crumbs={[
            { href: "/", label: "Home" },
            { href: "/advice", label: "Advice" },
            { label: article.title },
          ]}
        />
      </Container>

      <article>
        <Container size="narrow" className="pb-4">
          <p className="text-xs font-medium uppercase tracking-wide text-orange">
            {article.category}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy-deep md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{article.excerpt}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
            <Clock className="h-3.5 w-3.5" /> {article.readMinutes} min read
          </p>
        </Container>
        <Container size="narrow" className="py-8">
          <Prose markdown={article.body} />
        </Container>
      </article>

      <section className="border-t border-navy/10 bg-cream-warm/40 py-12">
        <Container>
          <p className="font-display text-2xl font-bold text-navy-deep">More Texas advice</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/advice" className="text-sm font-medium text-orange hover:underline">
              See all advice →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
