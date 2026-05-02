import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Globe, ShieldCheck, Calendar, Clock, MapPin, BadgeCheck, Award } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BreadcrumbTrail } from "@/components/content/BreadcrumbTrail";
import { ReviewStars } from "@/components/pros/ReviewStars";
import { ReviewList } from "@/components/pros/ReviewList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { QuoteDialog } from "@/components/forms/QuoteDialog";
import { getProBySlug, getAllProSlugs } from "@/lib/queries/pros";
import { getAllCategories } from "@/lib/queries/categories";
import { parseJsonArray } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const pros = await getAllProSlugs();
  return pros.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pro = await getProBySlug(slug);
  if (!pro) return { title: "Pro not found" };
  return {
    title: `${pro.name} — ${pro.homeCity.name}, TX`,
    description: pro.tagline ?? `Local Texas pro based in ${pro.homeCity.name}.`,
  };
}

export default async function ProPage({ params }: Props) {
  const { slug } = await params;
  const [pro, categories] = await Promise.all([getProBySlug(slug), getAllCategories()]);
  if (!pro) notFound();

  const photos = parseJsonArray<string>(pro.photos);
  const cover = photos[0] ?? "/pros/placeholder-1.svg";
  const badges = parseJsonArray<string>(pro.badges);
  const zips = parseJsonArray<string>(pro.serviceZips);
  const primary = pro.services.find((s) => s.primary) ?? pro.services[0];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: pro.name,
    description: pro.bio,
    url: `https://texashomeservices.example/pros/${pro.slug}`,
    telephone: pro.phone ?? undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: pro.homeCity.name,
      addressRegion: "TX",
      addressCountry: "US",
    },
    aggregateRating:
      pro.reviews.length > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: pro.ratingAvg,
            reviewCount: pro.ratingCount,
          }
        : undefined,
    review: pro.reviews.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.authorName },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.body,
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      <section className="relative border-b border-navy/10 bg-cream-grad">
        <Container className="py-10">
          <BreadcrumbTrail
            crumbs={[
              { href: "/", label: "Home" },
              ...(primary
                ? [
                    { href: `/services/${primary.category.slug}`, label: primary.category.name },
                    {
                      href: `/services/${primary.category.slug}/${pro.homeCity.slug}`,
                      label: `${pro.homeCity.name}, TX`,
                    },
                  ]
                : []),
              { label: pro.name },
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="overflow-hidden rounded-card border border-navy/10 bg-white shadow-card">
                <div className="relative aspect-[4/3] w-full bg-cream-warm">
                  <Image src={cover} alt={pro.name} fill className="object-cover" sizes="400px" />
                </div>
                <div className="grid grid-cols-3 gap-1 p-1">
                  {photos.slice(1, 4).map((p, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-md bg-cream-warm">
                      <Image src={p} alt="" fill className="object-cover" sizes="100px" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                {badges.includes("top-pro") ? (
                  <Badge variant="orange">
                    <Award className="h-3 w-3" /> Top Pro
                  </Badge>
                ) : null}
                {pro.insured ? (
                  <Badge>
                    <ShieldCheck className="h-3 w-3" /> Insured
                  </Badge>
                ) : null}
                {pro.bonded ? <Badge variant="outline">Bonded</Badge> : null}
                {pro.emergency24x7 ? <Badge variant="navy">24/7 service</Badge> : null}
                {pro.licenseNumber ? (
                  <Badge variant="gold">
                    <BadgeCheck className="h-3 w-3" /> License {pro.licenseNumber}
                  </Badge>
                ) : null}
              </div>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-navy-deep md:text-5xl">
                {pro.name}
              </h1>
              {pro.tagline ? <p className="mt-2 text-lg text-muted">{pro.tagline}</p> : null}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <ReviewStars rating={pro.ratingAvg} showNumber size="md" />
                  <span>({pro.ratingCount} reviews)</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {pro.homeCity.name}, TX
                </span>
                {pro.yearFounded ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> Since {pro.yearFounded}
                  </span>
                ) : null}
                {pro.responseMins ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    Replies in {pro.responseMins < 60 ? `${pro.responseMins}m` : `~${Math.round(pro.responseMins / 60)}h`}
                  </span>
                ) : null}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <QuoteDialog
                  proSlug={pro.slug}
                  proName={pro.name}
                  defaultCategorySlug={primary?.category.slug}
                  defaultCitySlug={pro.homeCity.slug}
                  categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
                  trigger={<Button size="lg">Get a free quote</Button>}
                />
                {pro.phone ? (
                  <Button variant="outline" size="lg" asChild>
                    <a href={`tel:${pro.phone.replace(/\D/g, "")}`}>
                      <Phone className="h-4 w-4" /> {pro.phone}
                    </a>
                  </Button>
                ) : null}
                {pro.website ? (
                  <Button variant="ghost" size="lg" asChild>
                    <a href={pro.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4" /> Visit site
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-deep">About {pro.name}</h2>
              <p className="mt-3 leading-relaxed text-ink">{pro.bio}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-deep">Services offered</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {pro.services.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.category.slug}`}
                      className="inline-flex rounded-pill border border-navy/15 bg-white px-3 py-1.5 text-sm text-navy-deep hover:border-orange hover:bg-cream"
                    >
                      {s.category.name}
                      {s.primary ? <span className="ml-2 text-xs text-orange">Primary</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy-deep">
                Reviews ({pro.ratingCount})
              </h2>
              <div className="mt-4 flex items-center gap-4 rounded-card border border-navy/10 bg-cream/60 px-5 py-4">
                <p className="font-display text-4xl font-bold text-navy-deep">
                  {pro.ratingAvg.toFixed(1)}
                </p>
                <div>
                  <ReviewStars rating={pro.ratingAvg} size="md" />
                  <p className="mt-1 text-sm text-muted">
                    From {pro.ratingCount} verified Texas customers
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <ReviewList reviews={pro.reviews} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
              <p className="font-display text-base font-semibold text-navy-deep">Service area</p>
              <p className="mt-1 text-sm text-muted">
                {pro.name} serves {zips.length} ZIPs around {pro.homeCity.name}.
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5 text-xs">
                {zips.map((z) => (
                  <li
                    key={z}
                    className="rounded-pill border border-navy/15 bg-cream px-2.5 py-0.5 font-medium text-navy-deep"
                  >
                    {z}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-navy/10 bg-navy p-6 text-cream shadow-card">
              <p className="font-display text-base font-semibold">Get matched in minutes</p>
              <p className="mt-1.5 text-sm text-cream/80">
                Tell {pro.name} about your job and they&apos;ll respond with pricing — typically the same business day.
              </p>
              <div className="mt-4">
                <QuoteDialog
                  proSlug={pro.slug}
                  proName={pro.name}
                  defaultCategorySlug={primary?.category.slug}
                  defaultCitySlug={pro.homeCity.slug}
                  categories={categories.map((c) => ({ slug: c.slug, name: c.name }))}
                  trigger={
                    <Button size="md" className="w-full bg-orange hover:bg-orange-hover">
                      Request a quote
                    </Button>
                  }
                />
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
