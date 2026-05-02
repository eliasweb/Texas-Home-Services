import Link from "next/link";
import { Clock } from "lucide-react";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/advice/${article.slug}`}
      className="group flex h-full flex-col rounded-card border border-navy/10 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-card-hover"
    >
      <div className="flex items-center justify-between text-xs">
        <span className="rounded-pill bg-orange/10 px-2.5 py-0.5 font-medium text-orange">
          {article.category}
        </span>
        <span className="inline-flex items-center gap-1 text-muted">
          <Clock className="h-3.5 w-3.5" /> {article.readMinutes} min read
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-navy-deep group-hover:text-orange">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm text-muted line-clamp-3">{article.excerpt}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-orange">
        Read article →
      </span>
    </Link>
  );
}
