"use client";
import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

type Category = { slug: string; name: string };
type City = { slug: string; name: string };

export function MobileNav({ categories, cities }: { categories: Category[]; cities: City[] }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-deep hover:bg-cream md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-navy-deep/40" onClick={() => setOpen(false)} />
          <div
            className={cn(
              "absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white p-6 shadow-card-hover",
            )}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-cream"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-6 space-y-6">
              <section>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  Services
                </p>
                <ul className="space-y-0.5">
                  {categories.slice(0, 12).map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/services/${c.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-orange hover:bg-cream"
                    >
                      See all services →
                    </Link>
                  </li>
                </ul>
              </section>
              <section>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  Texas cities
                </p>
                <ul className="grid grid-cols-2 gap-0.5">
                  {cities.slice(0, 8).map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/cities/${c.slug}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                  Resources
                </p>
                <ul className="space-y-0.5">
                  <li>
                    <Link
                      href="/cost-guides"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      Cost guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advice"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      Advice & how-to
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      About us
                    </Link>
                  </li>
                </ul>
              </section>
              <section>
                <Link
                  href="/for-pros"
                  onClick={() => setOpen(false)}
                  className="block rounded-md bg-orange px-3 py-3 text-center text-sm font-semibold text-white"
                >
                  Are you a pro? Join the network
                </Link>
              </section>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
