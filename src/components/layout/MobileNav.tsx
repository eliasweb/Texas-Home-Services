"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

type Category = { slug: string; name: string };
type City = { slug: string; name: string };

export function MobileNav({ categories, cities }: { categories: Category[]; cities: City[] }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-deep hover:bg-cream md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-deep/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 md:hidden" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed right-0 top-0 z-50 flex h-dvh w-[88%] max-w-sm flex-col overflow-hidden bg-white shadow-card-hover focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right md:hidden"
        >
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>

          <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-deep hover:bg-cream"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-5 space-y-7">
            <section>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                Services
              </p>
              <ul className="space-y-0.5">
                {categories.slice(0, 12).map((c) => (
                  <li key={c.slug}>
                    <Dialog.Close asChild>
                      <Link
                        href={`/services/${c.slug}`}
                        className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                      >
                        {c.name}
                      </Link>
                    </Dialog.Close>
                  </li>
                ))}
                <li>
                  <Dialog.Close asChild>
                    <Link
                      href="/services"
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-orange hover:bg-cream"
                    >
                      See all services →
                    </Link>
                  </Dialog.Close>
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
                    <Dialog.Close asChild>
                      <Link
                        href={`/cities/${c.slug}`}
                        className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                      >
                        {c.name}
                      </Link>
                    </Dialog.Close>
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
                  <Dialog.Close asChild>
                    <Link
                      href="/cost-guides"
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      Cost guides
                    </Link>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close asChild>
                    <Link
                      href="/advice"
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      Advice &amp; how-to
                    </Link>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close asChild>
                    <Link
                      href="/how-it-works"
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      How it works
                    </Link>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close asChild>
                    <Link
                      href="/reviews"
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      Real reviews
                    </Link>
                  </Dialog.Close>
                </li>
                <li>
                  <Dialog.Close asChild>
                    <Link
                      href="/about"
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-deep hover:bg-cream"
                    >
                      About us
                    </Link>
                  </Dialog.Close>
                </li>
              </ul>
            </section>
          </nav>

          <div className="border-t border-navy/10 p-5">
            <Dialog.Close asChild>
              <Link
                href="/for-pros"
                className="block rounded-md bg-orange px-3 py-3 text-center text-sm font-semibold text-white shadow-cta hover:bg-orange-hover"
              >
                Are you a pro? Join the network
              </Link>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
