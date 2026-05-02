import { ServiceCard } from "@/components/services/ServiceCard";

type Category = {
  slug: string;
  name: string;
  tagline: string | null;
  iconKey: string;
  texasNote?: string | null;
};

export function CategoryGrid({
  categories,
  size = "md",
}: {
  categories: Category[];
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {categories.map((c) => (
        <ServiceCard
          key={c.slug}
          slug={c.slug}
          name={c.name}
          tagline={c.tagline}
          iconKey={c.iconKey}
          texasNote={c.texasNote}
          size={size}
        />
      ))}
    </div>
  );
}
