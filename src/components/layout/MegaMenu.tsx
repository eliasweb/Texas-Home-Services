"use client";
import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = { slug: string; name: string; tagline: string | null };
type City = { slug: string; name: string };

export function MegaMenu({
  categories,
  cities,
}: {
  categories: Category[];
  cities: City[];
}) {
  const [open, setOpen] = React.useState<null | "services" | "cities">(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("mousedown", handler);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  const half = Math.ceil(categories.length / 2);
  const colA = categories.slice(0, half);
  const colB = categories.slice(half);

  return (
    <div ref={wrapperRef} className="relative">
      <nav className="flex items-center gap-1">
        <button
          type="button"
          aria-expanded={open === "services"}
          onClick={() => setOpen(open === "services" ? null : "services")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-navy-deep transition-colors",
            open === "services" ? "bg-cream" : "hover:bg-cream",
          )}
        >
          Services <ChevronDown className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-expanded={open === "cities"}
          onClick={() => setOpen(open === "cities" ? null : "cities")}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-navy-deep transition-colors",
            open === "cities" ? "bg-cream" : "hover:bg-cream",
          )}
        >
          Cities <ChevronDown className="h-4 w-4" />
        </button>
        <Link
          href="/cost-guides"
          className="rounded-md px-3 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
        >
          Cost Guides
        </Link>
        <Link
          href="/advice"
          className="rounded-md px-3 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
        >
          Advice
        </Link>
        <Link
          href="/for-pros"
          className="rounded-md px-3 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
        >
          For Pros
        </Link>
      </nav>

      {open === "services" && (
        <div
          className="absolute left-0 top-[calc(100%+8px)] z-40 w-[760px] rounded-card border border-navy/10 bg-white p-6 shadow-card-hover"
          role="dialog"
          aria-label="Service categories"
        >
          <div className="mb-4 flex items-center justify-between border-b border-navy/10 pb-3">
            <p className="font-display text-sm font-semibold text-navy-deep">
              Browse all Texas home services
            </p>
            <Link
              href="/services"
              className="text-sm text-orange underline-offset-2 hover:underline"
              onClick={() => setOpen(null)}
            >
              See all categories →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {[colA, colB].map((col, i) => (
              <ul key={i} className="space-y-1">
                {col.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/services/${c.slug}`}
                      className="flex flex-col rounded-md px-3 py-2 hover:bg-cream"
                      onClick={() => setOpen(null)}
                    >
                      <span className="text-sm font-medium text-navy-deep">{c.name}</span>
                      {c.tagline ? (
                        <span className="text-xs text-muted">{c.tagline}</span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}

      {open === "cities" && (
        <div
          className="absolute left-0 top-[calc(100%+8px)] z-40 w-[480px] rounded-card border border-navy/10 bg-white p-6 shadow-card-hover"
          role="dialog"
          aria-label="Texas cities"
        >
          <div className="mb-4 flex items-center justify-between border-b border-navy/10 pb-3">
            <p className="font-display text-sm font-semibold text-navy-deep">Texas cities we serve</p>
            <Link
              href="/cities"
              className="text-sm text-orange underline-offset-2 hover:underline"
              onClick={() => setOpen(null)}
            >
              See all cities →
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-1">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cities/${c.slug}`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                  onClick={() => setOpen(null)}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
