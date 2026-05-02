"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/forms/QuoteForm";

type Category = { slug: string; name: string };

export function QuoteDialog({
  trigger,
  categories,
  defaultCategorySlug,
  defaultCitySlug,
  proSlug,
  proName,
}: {
  trigger: React.ReactNode;
  categories: Category[];
  defaultCategorySlug?: string;
  defaultCitySlug?: string;
  proSlug?: string;
  proName?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{proName ? `Get a quote from ${proName}` : "Get free quotes"}</DialogTitle>
          <DialogDescription>
            Tell us about the job and we&apos;ll connect you with vetted Texas pros.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm
          categories={categories}
          defaultCategorySlug={defaultCategorySlug}
          defaultCitySlug={defaultCitySlug}
          proSlug={proSlug}
          proName={proName}
        />
      </DialogContent>
    </Dialog>
  );
}
