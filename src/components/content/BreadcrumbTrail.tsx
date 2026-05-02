import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { href?: string; label: string };

export function BreadcrumbTrail({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-orange">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? "font-medium text-navy-deep" : ""}>{c.label}</span>
              )}
              {!last ? <ChevronRight className="h-3.5 w-3.5 text-muted-soft" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
