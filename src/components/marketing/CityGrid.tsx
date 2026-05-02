import Link from "next/link";

type City = {
  slug: string;
  name: string;
  region: string | null;
  blurb: string;
};

export function CityGrid({ cities }: { cities: City[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cities.map((c) => (
        <Link
          key={c.slug}
          href={`/cities/${c.slug}`}
          className="group flex flex-col overflow-hidden rounded-card border border-navy/10 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40"
        >
          <div className="bg-navy-grad p-5 text-cream">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-cream/70">
                {c.region}
              </span>
              <svg viewBox="0 0 100 100" className="h-5 w-5 text-star" fill="currentColor" aria-hidden>
                <path d="M50 4 L60.5 36.4 L94.5 36.4 L67 56.4 L77.5 88.8 L50 68.8 L22.5 88.8 L33 56.4 L5.5 36.4 L39.5 36.4 Z" />
              </svg>
            </div>
            <p className="mt-2 font-display text-2xl font-bold">{c.name}</p>
          </div>
          <p className="flex-1 p-4 text-sm text-muted">{c.blurb}</p>
        </Link>
      ))}
    </div>
  );
}
