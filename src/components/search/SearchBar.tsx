"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Category = { slug: string; name: string };

export function SearchBar({
  categories,
  variant = "hero",
  className,
}: {
  categories: Category[];
  variant?: "hero" | "compact";
  className?: string;
}) {
  const [category, setCategory] = React.useState("");
  const [zip, setZip] = React.useState("");
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (zip) params.set("zip", zip);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex w-full flex-col gap-2 rounded-card border border-navy/10 bg-white p-2 shadow-card sm:flex-row sm:items-center",
        variant === "hero" ? "sm:p-2" : "sm:p-1.5",
        className,
      )}
      role="search"
    >
      <label className="relative flex flex-1 items-center">
        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-12 w-full rounded-md border-0 bg-transparent pl-10 pr-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/30"
          aria-label="Service"
        >
          <option value="">What do you need help with?</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
      <div className="hidden h-8 w-px bg-navy/10 sm:block" />
      <label className="relative flex w-full items-center sm:w-44">
        <MapPin className="pointer-events-none absolute left-3 h-4 w-4 text-muted" />
        <Input
          inputMode="numeric"
          pattern="\d{5}"
          maxLength={5}
          placeholder="ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          className="h-12 border-0 bg-transparent pl-10 pr-3 text-sm shadow-none focus-visible:ring-2 focus-visible:ring-orange/30"
          aria-label="ZIP code"
        />
      </label>
      <Button type="submit" size="lg" className="h-12">
        Find pros
      </Button>
    </form>
  );
}
