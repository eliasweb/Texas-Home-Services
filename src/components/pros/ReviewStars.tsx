import { cn } from "@/lib/utils";

export function ReviewStars({
  rating,
  size = "md",
  className,
  showNumber = false,
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showNumber?: boolean;
}) {
  const full = Math.floor(rating);
  const partial = rating - full;
  const dim = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";

  return (
    <span className={cn("inline-flex items-center gap-1", className)} aria-label={`Rated ${rating.toFixed(1)} out of 5`}>
      <span className="inline-flex">
        {[0, 1, 2, 3, 4].map((i) => {
          let pct = 0;
          if (i < full) pct = 100;
          else if (i === full) pct = Math.round(partial * 100);
          return (
            <span key={i} className={cn("relative inline-block", dim)}>
              <svg viewBox="0 0 20 20" className={cn(dim, "text-navy/20")} fill="currentColor" aria-hidden="true">
                <path d="M10 1.5l2.7 5.5 6 0.9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L1.3 7.9l6-0.9z" />
              </svg>
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${pct}%` }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" className={cn(dim, "text-star-deep")} fill="currentColor">
                  <path d="M10 1.5l2.7 5.5 6 0.9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L1.3 7.9l6-0.9z" />
                </svg>
              </span>
            </span>
          );
        })}
      </span>
      {showNumber ? (
        <span className={cn("text-sm font-semibold text-navy-deep", size === "sm" && "text-xs")}>
          {rating.toFixed(1)}
        </span>
      ) : null}
    </span>
  );
}
