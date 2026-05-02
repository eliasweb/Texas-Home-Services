import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReviewStars } from "@/components/pros/ReviewStars";
import { parseJsonArray } from "@/lib/utils";

type Props = {
  slug: string;
  name: string;
  tagline: string | null;
  ratingAvg: number;
  ratingCount: number;
  responseMins: number | null;
  homeCityName: string;
  badges: string;
  photos: string;
  insured: boolean;
  emergency24x7: boolean;
  primaryServiceName?: string;
  variant?: "default" | "compact";
};

export function ProCard({
  slug,
  name,
  tagline,
  ratingAvg,
  ratingCount,
  responseMins,
  homeCityName,
  badges,
  photos,
  insured,
  emergency24x7,
  primaryServiceName,
  variant = "default",
}: Props) {
  const photoList = parseJsonArray<string>(photos);
  const cover = photoList[0] ?? "/pros/placeholder-1.svg";
  const badgeList = parseJsonArray<string>(badges);
  const compact = variant === "compact";

  return (
    <Link
      href={`/pros/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-navy/10 bg-white shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-warm">
        <Image
          src={cover}
          alt={`${name} placeholder image`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {badgeList.includes("top-pro") ? (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-pill bg-orange px-2.5 py-0.5 text-xs font-semibold text-white shadow-cta">
            ★ Top Pro
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-navy-deep">{name}</h3>
          <ReviewStars rating={ratingAvg} size="sm" />
        </div>
        {primaryServiceName ? (
          <p className="text-xs font-medium uppercase tracking-wide text-orange">
            {primaryServiceName}
          </p>
        ) : null}
        {tagline && !compact ? <p className="text-sm text-muted">{tagline}</p> : null}
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <ReviewStars rating={ratingAvg} size="sm" /> {ratingAvg.toFixed(1)} ({ratingCount})
          </span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {homeCityName}
          </span>
          {responseMins ? (
            <>
              <span aria-hidden>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {responseMins < 60
                  ? `Replies in ${responseMins} min`
                  : `Replies in ~${Math.round(responseMins / 60)}h`}
              </span>
            </>
          ) : null}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {insured ? (
            <Badge variant="default">
              <ShieldCheck className="h-3 w-3" /> Insured
            </Badge>
          ) : null}
          {emergency24x7 ? <Badge variant="orange">24/7 service</Badge> : null}
          {badgeList.includes("warranty") ? <Badge variant="gold">Warranty</Badge> : null}
        </div>
      </div>
    </Link>
  );
}
