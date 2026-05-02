import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, mode = "default" }: { className?: string; mode?: "default" | "light" }) {
  const isLight = mode === "light";
  return (
    <Link href="/" aria-label="Texas Home Services home" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "relative inline-flex h-8 w-8 items-center justify-center rounded-md transition-transform group-hover:-rotate-3",
          isLight ? "bg-cream/10" : "bg-orange/10",
        )}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill={isLight ? "#E1B546" : "#BF5700"} aria-hidden="true">
          <path d="M12 2 L14.6 9.6 L22.6 9.6 L16.1 14.4 L18.6 22 L12 17.2 L5.4 22 L7.9 14.4 L1.4 9.6 L9.4 9.6 Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-base font-bold tracking-tight",
            isLight ? "text-cream" : "text-navy-deep",
          )}
        >
          Texas Home
        </span>
        <span
          className={cn(
            "font-display text-base font-bold tracking-tight -mt-0.5",
            isLight ? "text-star" : "text-orange",
          )}
        >
          Services
        </span>
      </span>
    </Link>
  );
}
