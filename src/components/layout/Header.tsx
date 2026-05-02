import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/layout/Container";
import { getAllCategories } from "@/lib/queries/categories";
import { getAllCities } from "@/lib/queries/cities";
import { Phone } from "lucide-react";

export async function Header() {
  const [categories, cities] = await Promise.all([getAllCategories(), getAllCities()]);
  const navCategories = categories.map((c) => ({ slug: c.slug, name: c.name, tagline: c.tagline }));
  const navCities = cities.map((c) => ({ slug: c.slug, name: c.name }));

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="hidden border-b border-navy/10 bg-navy text-cream md:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-star" />
            Texas-owned, serving every corner of the Lone Star State.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/how-it-works" className="hover:underline">
              How it works
            </Link>
            <Link href="/reviews" className="hover:underline">
              Real reviews
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </div>
        </Container>
      </div>
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="hidden md:block">
            <MegaMenu categories={navCategories} cities={navCities} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-navy-deep hover:bg-cream md:inline-flex"
          >
            Find a pro
          </Link>
          <Link
            href="/for-pros"
            className="hidden rounded-md bg-orange px-4 py-2 text-sm font-semibold text-white shadow-cta hover:bg-orange-hover md:inline-flex"
          >
            Join as a pro
          </Link>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center gap-1 rounded-md border border-navy/15 px-3 py-2 text-sm font-medium text-navy-deep hover:bg-cream md:hidden"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
          </a>
          <MobileNav categories={navCategories} cities={navCities} />
        </div>
      </Container>
    </header>
  );
}
