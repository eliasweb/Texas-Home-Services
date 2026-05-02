import { ShieldCheck, Star, MapPin, Wrench, ScrollText, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";

const items = [
  { icon: ShieldCheck, label: "Screened, insured pros" },
  { icon: Star, label: "Real Texas reviews" },
  { icon: MapPin, label: "Local crews in 18+ cities" },
  { icon: Wrench, label: "30+ home service categories" },
  { icon: ScrollText, label: "Transparent pricing guides" },
  { icon: Phone, label: "Same-day quotes on most jobs" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-navy/10 bg-cream-warm/60">
      <Container className="grid grid-cols-2 gap-y-3 gap-x-6 py-6 text-sm text-navy-deep sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon className="h-4 w-4 flex-shrink-0 text-orange" />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
