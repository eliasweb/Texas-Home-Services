import Link from "next/link";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  slug: string;
  name: string;
  tagline?: string | null;
  iconKey: string;
  texasNote?: string | null;
  size?: "sm" | "md" | "lg";
};

function getIcon(key: string): React.ComponentType<{ className?: string }> {
  const set = Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  return set[key] ?? set.Sparkles!;
}

export function ServiceCard({ slug, name, tagline, iconKey, texasNote, size = "md" }: Props) {
  const Icon = getIcon(iconKey);
  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        "group flex h-full flex-col rounded-card border border-navy/10 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card-hover",
        size === "sm" && "p-4",
        size === "lg" && "p-6",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-md bg-orange/10 text-orange transition-colors group-hover:bg-orange group-hover:text-white",
          size === "sm" && "h-9 w-9",
          size === "lg" && "h-12 w-12",
        )}
      >
        <Icon className={cn("h-5 w-5", size === "lg" && "h-6 w-6")} />
      </span>
      <h3
        className={cn(
          "mt-4 font-display font-semibold text-navy-deep",
          size === "sm" ? "text-base" : "text-lg",
        )}
      >
        {name}
      </h3>
      {tagline ? <p className="mt-1.5 text-sm text-muted">{tagline}</p> : null}
      {texasNote ? (
        <p className="mt-3 inline-flex items-center gap-1.5 self-start rounded-pill bg-star/10 px-2 py-0.5 text-xs font-medium text-star-deep">
          <span className="text-base leading-none">★</span> {texasNote}
        </p>
      ) : null}
    </Link>
  );
}
