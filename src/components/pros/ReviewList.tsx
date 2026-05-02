import { ReviewStars } from "@/components/pros/ReviewStars";
import { formatDistanceToNow } from "date-fns";

type Review = {
  id: string;
  authorName: string;
  authorCity: string | null;
  rating: number;
  body: string;
  serviceTag: string | null;
  createdAt: Date;
};

export function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <p className="rounded-md border border-dashed border-navy/15 bg-cream/50 p-6 text-center text-sm text-muted">
        No reviews yet — be the first to leave one after your job.
      </p>
    );
  }
  return (
    <ul className="divide-y divide-navy/10 rounded-card border border-navy/10 bg-white">
      {reviews.map((r) => (
        <li key={r.id} className="px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/10 font-display text-base font-semibold text-orange">
                {r.authorName.slice(0, 1)}
              </div>
              <div>
                <p className="font-medium text-navy-deep">{r.authorName}</p>
                {r.authorCity ? (
                  <p className="text-xs text-muted">{r.authorCity}</p>
                ) : null}
              </div>
            </div>
            <div className="text-right">
              <ReviewStars rating={r.rating} />
              <p className="mt-0.5 text-xs text-muted">
                {formatDistanceToNow(r.createdAt, { addSuffix: true })}
              </p>
            </div>
          </div>
          {r.serviceTag ? (
            <p className="mt-3 inline-flex rounded-pill bg-cream px-2.5 py-0.5 text-xs font-medium text-navy-deep">
              {r.serviceTag}
            </p>
          ) : null}
          <p className="mt-3 text-sm leading-relaxed text-ink">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}
