"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle } from "lucide-react";

const ClientSchema = z.object({
  proSlug: z.string().optional(),
  categorySlug: z.string().min(1, "Pick a service"),
  citySlug: z.string().optional(),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP"),
  fullName: z.string().min(2, "Enter your name").max(80),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone").max(20),
  details: z.string().min(10, "A few sentences please").max(2000),
  timing: z.enum(["asap", "1-2-weeks", "flexible"]).optional(),
  budget: z.enum(["under-500", "500-2000", "2000-5000", "5000-15000", "15000-plus"]).optional(),
  company_url: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof ClientSchema>;

type Category = { slug: string; name: string };

export function QuoteForm({
  categories,
  defaultCategorySlug,
  defaultCitySlug,
  proSlug,
  proName,
  onSuccess,
}: {
  categories: Category[];
  defaultCategorySlug?: string;
  defaultCitySlug?: string;
  proSlug?: string;
  proName?: string;
  onSuccess?: () => void;
}) {
  const mountedAt = React.useRef<number>(Date.now());
  const [submitState, setSubmitState] = React.useState<"idle" | "submitting" | "ok" | "error">(
    "idle",
  );
  const [errMessage, setErrMessage] = React.useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(ClientSchema),
    defaultValues: {
      proSlug,
      categorySlug: defaultCategorySlug ?? "",
      citySlug: defaultCitySlug,
      zip: "",
      fullName: "",
      email: "",
      phone: "",
      details: "",
      timing: undefined,
      budget: undefined,
      company_url: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitState("submitting");
    setErrMessage(null);
    try {
      const formMs = Date.now() - mountedAt.current;
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, formMs }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong submitting your quote.");
      }
      setSubmitState("ok");
      onSuccess?.();
    } catch (e) {
      setSubmitState("error");
      setErrMessage(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (submitState === "ok") {
    return (
      <div className="rounded-card border border-navy/10 bg-cream p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-orange" />
        <h3 className="mt-3 font-display text-xl font-semibold text-navy-deep">
          Quote request sent.
        </h3>
        <p className="mt-2 text-sm text-muted">
          {proName ? `${proName} typically responds within a few hours during business days.` : "We'll match you with up to three local pros and they'll reach out shortly."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
      aria-label="Request a quote"
    >
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="company_url">Company URL (leave blank)</Label>
        <input
          type="text"
          id="company_url"
          tabIndex={-1}
          autoComplete="off"
          {...form.register("company_url")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="categorySlug">Service needed *</Label>
          <select
            id="categorySlug"
            className="mt-1 flex h-11 w-full rounded-md border border-navy/15 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            {...form.register("categorySlug")}
            aria-invalid={!!form.formState.errors.categorySlug}
          >
            <option value="">Select a service...</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          {form.formState.errors.categorySlug ? (
            <p className="mt-1 text-xs text-red-600">{form.formState.errors.categorySlug.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="zip">ZIP code *</Label>
          <Input
            id="zip"
            inputMode="numeric"
            maxLength={5}
            placeholder="e.g. 77005"
            {...form.register("zip")}
            aria-invalid={!!form.formState.errors.zip}
          />
          {form.formState.errors.zip ? (
            <p className="mt-1 text-xs text-red-600">{form.formState.errors.zip.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="fullName">Your name *</Label>
        <Input
          id="fullName"
          autoComplete="name"
          {...form.register("fullName")}
          aria-invalid={!!form.formState.errors.fullName}
        />
        {form.formState.errors.fullName ? (
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.fullName.message}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...form.register("email")}
            aria-invalid={!!form.formState.errors.email}
          />
          {form.formState.errors.email ? (
            <p className="mt-1 text-xs text-red-600">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...form.register("phone")}
            aria-invalid={!!form.formState.errors.phone}
          />
          {form.formState.errors.phone ? (
            <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="details">Tell us about the job *</Label>
        <Textarea
          id="details"
          rows={4}
          placeholder="What needs to be done? Where in the home? Any timing constraints?"
          {...form.register("details")}
          aria-invalid={!!form.formState.errors.details}
        />
        {form.formState.errors.details ? (
          <p className="mt-1 text-xs text-red-600">{form.formState.errors.details.message}</p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="timing">Timing</Label>
          <select
            id="timing"
            className="mt-1 flex h-11 w-full rounded-md border border-navy/15 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            {...form.register("timing")}
          >
            <option value="">Pick when you want it done...</option>
            <option value="asap">ASAP / emergency</option>
            <option value="1-2-weeks">Within 1-2 weeks</option>
            <option value="flexible">Flexible — exploring</option>
          </select>
        </div>
        <div>
          <Label htmlFor="budget">Budget (optional)</Label>
          <select
            id="budget"
            className="mt-1 flex h-11 w-full rounded-md border border-navy/15 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            {...form.register("budget")}
          >
            <option value="">Skip / not sure</option>
            <option value="under-500">Under $500</option>
            <option value="500-2000">$500 – $2,000</option>
            <option value="2000-5000">$2,000 – $5,000</option>
            <option value="5000-15000">$5,000 – $15,000</option>
            <option value="15000-plus">$15,000+</option>
          </select>
        </div>
      </div>

      {submitState === "error" && errMessage ? (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{errMessage}</span>
        </div>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={submitState === "submitting"}>
        {submitState === "submitting" ? "Sending..." : "Send my quote request"}
      </Button>
      <p className="text-center text-xs text-muted">
        By submitting, you agree to be contacted by Texas Home Services and matched pros. No spam.
      </p>
    </form>
  );
}
