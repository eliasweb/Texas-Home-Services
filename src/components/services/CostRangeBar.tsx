import { formatCurrency } from "@/lib/utils";

export function CostRangeBar({
  low,
  avg,
  high,
  unitLabel,
}: {
  low: number;
  avg: number;
  high: number;
  unitLabel: string;
}) {
  const span = high - low || 1;
  const avgPct = ((avg - low) / span) * 100;

  return (
    <div className="rounded-card border border-navy/10 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <p className="font-display text-base font-semibold text-navy-deep">Typical price range</p>
        <span className="text-xs font-medium text-muted">{unitLabel}</span>
      </div>
      <div className="mt-5">
        <div className="relative h-2 rounded-full bg-cream-warm">
          <div className="absolute inset-y-0 left-0 right-0 rounded-full bg-gradient-to-r from-orange/40 via-orange to-orange/40" />
          <div
            className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-white bg-navy-deep shadow"
            style={{ left: `${avgPct}%` }}
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <p className="text-muted">Low</p>
            <p className="font-display text-lg font-bold text-navy-deep">{formatCurrency(low)}</p>
          </div>
          <div className="rounded-md bg-cream py-1">
            <p className="text-muted">Average</p>
            <p className="font-display text-lg font-bold text-orange">{formatCurrency(avg)}</p>
          </div>
          <div>
            <p className="text-muted">High</p>
            <p className="font-display text-lg font-bold text-navy-deep">{formatCurrency(high)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
