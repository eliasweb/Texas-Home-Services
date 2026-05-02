import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { getAllCategories } from "@/lib/queries/categories";
import { getAllCities } from "@/lib/queries/cities";

export async function Footer() {
  const [categories, cities] = await Promise.all([getAllCategories(), getAllCities()]);
  const topCats = categories.slice(0, 12);
  const topCities = cities.slice(0, 12);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-navy/10 bg-navy text-cream">
      <Container className="grid gap-10 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo mode="light" />
          <p className="mt-4 max-w-sm text-sm text-cream/80">
            We connect Texas homeowners with screened, insured local pros — from a midnight AC call
            in Houston to a hail-damage roof inspection in Plano. Every contractor on the platform
            serves a Texas address.
          </p>
          <div className="mt-6 flex gap-3 text-xs">
            <span className="inline-flex items-center gap-1 rounded-pill border border-cream/20 px-2.5 py-1">
              Screened pros
            </span>
            <span className="inline-flex items-center gap-1 rounded-pill border border-cream/20 px-2.5 py-1">
              Insured + bonded
            </span>
            <span className="inline-flex items-center gap-1 rounded-pill border border-cream/20 px-2.5 py-1">
              Texas-owned
            </span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="font-display text-sm font-semibold text-cream">Top services</p>
          <ul className="mt-4 grid grid-cols-1 gap-1 text-sm text-cream/80">
            {topCats.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-cream" href={`/services/${c.slug}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-3 inline-block text-xs text-star hover:underline"
            href="/services"
          >
            See all 30+ services →
          </Link>
        </div>

        <div className="lg:col-span-2">
          <p className="font-display text-sm font-semibold text-cream">Cities</p>
          <ul className="mt-4 grid grid-cols-1 gap-1 text-sm text-cream/80">
            {topCities.map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-cream" href={`/cities/${c.slug}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="mt-3 inline-block text-xs text-star hover:underline" href="/cities">
            See all cities →
          </Link>
        </div>

        <div className="lg:col-span-3">
          <p className="font-display text-sm font-semibold text-cream">Resources</p>
          <ul className="mt-4 space-y-1 text-sm text-cream/80">
            <li>
              <Link className="hover:text-cream" href="/cost-guides">
                Cost guides
              </Link>
            </li>
            <li>
              <Link className="hover:text-cream" href="/advice">
                Advice & how-to
              </Link>
            </li>
            <li>
              <Link className="hover:text-cream" href="/how-it-works">
                How it works
              </Link>
            </li>
            <li>
              <Link className="hover:text-cream" href="/reviews">
                Real reviews
              </Link>
            </li>
            <li>
              <Link className="hover:text-cream" href="/about">
                About us
              </Link>
            </li>
          </ul>

          <p className="mt-6 font-display text-sm font-semibold text-cream">For pros</p>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            <li>
              <Link className="hover:text-cream" href="/for-pros">
                Why join us
              </Link>
            </li>
            <li>
              <Link className="hover:text-cream" href="/for-pros/signup">
                Apply now
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream/10 bg-navy-deep">
        <Container className="flex flex-col items-start justify-between gap-3 py-5 text-xs text-cream/70 sm:flex-row sm:items-center">
          <p>© {year} Texas Home Services. Connecting Texans with their next great contractor.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-cream" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-cream" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-cream" href="/contact">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
