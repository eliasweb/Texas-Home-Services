import { ProCard } from "@/components/pros/ProCard";

type Pro = {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  ratingAvg: number;
  ratingCount: number;
  responseMins: number | null;
  badges: string;
  photos: string;
  insured: boolean;
  emergency24x7: boolean;
  homeCity: { name: string };
  services: { primary: boolean; category: { name: string } }[];
};

export function ProList({ pros }: { pros: Pro[] }) {
  if (pros.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-navy/20 bg-white p-12 text-center">
        <p className="font-display text-lg font-semibold text-navy-deep">
          No matching pros yet — but we&apos;re adding them weekly.
        </p>
        <p className="mt-2 text-sm text-muted">
          Try expanding your search or browse a different city.
        </p>
      </div>
    );
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pros.map((p) => (
        <ProCard
          key={p.id}
          slug={p.slug}
          name={p.name}
          tagline={p.tagline}
          ratingAvg={p.ratingAvg}
          ratingCount={p.ratingCount}
          responseMins={p.responseMins}
          homeCityName={p.homeCity.name}
          badges={p.badges}
          photos={p.photos}
          insured={p.insured}
          emergency24x7={p.emergency24x7}
          primaryServiceName={p.services.find((s) => s.primary)?.category.name}
        />
      ))}
    </div>
  );
}
