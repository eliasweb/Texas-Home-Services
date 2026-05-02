import { Container } from "@/components/layout/Container";
import { SearchBar } from "@/components/search/SearchBar";
import { TexasAccent } from "@/components/marketing/TexasAccent";
import { ShieldCheck, Star, MapPin } from "lucide-react";

type Category = { slug: string; name: string };

export function Hero({ categories }: { categories: Category[] }) {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-cream-grad">
      <TexasAccent
        variant="outline"
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[480px] w-[480px] -translate-y-1/2 text-navy md:block"
        opacity={0.06}
      />
      <TexasAccent
        className="pointer-events-none absolute -left-10 -top-12 h-48 w-48 text-orange md:hidden"
        opacity={0.06}
      />
      <Container className="relative grid gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-4 inline-flex items-center gap-2 rounded-pill bg-white/80 px-3 py-1 text-xs font-medium text-navy-deep ring-1 ring-navy/10">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" />
            Built for Texans, by Texans.
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-deep text-balance md:text-6xl">
            Find local home pros{" "}
            <span className="text-orange">across the Lone Star State.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            From a midnight slab leak in Sugar Land to hail-damage roof inspections in Plano —
            we&apos;ll match you with screened, insured contractors who actually live and work
            here.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBar categories={categories} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-orange" />
              Screened & insured
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-star-deep" />
              Real Texas reviews
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-navy" />
              18+ Texas cities
            </span>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-orange/10 blur-2xl" />
            <div className="relative rounded-[20px] border border-navy/10 bg-white p-6 shadow-card">
              <p className="font-display text-sm font-semibold text-navy-deep">
                Most-requested in Texas this month
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {[
                  ["AC repair", "/services/hvac"],
                  ["Roof replacement", "/services/roofing"],
                  ["Foundation repair", "/services/foundation-repair"],
                  ["Pool service", "/services/pool-service"],
                  ["Mosquito control", "/services/mosquito-control"],
                  ["Storm & hail damage", "/services/storm-damage"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href as string}
                      className="block rounded-md border border-navy/10 px-3 py-2.5 font-medium text-navy-deep transition-colors hover:border-orange hover:bg-cream"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between rounded-md bg-cream px-3 py-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    Texas-owned
                  </p>
                  <p className="font-display text-base font-semibold text-navy-deep">
                    Every pro on the platform
                  </p>
                </div>
                <span className="font-display text-2xl">★</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
