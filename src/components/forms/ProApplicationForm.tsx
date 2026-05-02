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
  businessName: z.string().min(2, "Enter your business name").max(120),
  contactName: z.string().min(2, "Enter your name").max(80),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone").max(20),
  citySlug: z.string().optional(),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP"),
  categorySlugs: z.array(z.string()).min(1, "Pick at least one service"),
  yearsInBiz: z.number().int().min(0).max(120).optional(),
  licenseNumber: z.string().max(60).optional(),
  insured: z.boolean(),
  about: z.string().min(20, "A few sentences please").max(2000),
  company_url: z.string().max(0).optional(),
});
type FormValues = z.infer<typeof ClientSchema>;

type Category = { slug: string; name: string };
type City = { slug: string; name: string };

export function ProApplicationForm({
  categories,
  cities,
}: {
  categories: Category[];
  cities: City[];
}) {
  const mountedAt = React.useRef<number>(Date.now());
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [submitState, setSubmitState] = React.useState<"idle" | "submitting" | "ok" | "error">(
    "idle",
  );
  const [errMsg, setErrMsg] = React.useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(ClientSchema),
    mode: "onTouched",
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      citySlug: "",
      zip: "",
      categorySlugs: [],
      yearsInBiz: undefined,
      licenseNumber: "",
      insured: false,
      about: "",
      company_url: "",
    },
  });

  const goToStep = async (target: 1 | 2 | 3) => {
    if (target > step) {
      const stepFields: Record<number, (keyof FormValues)[]> = {
        1: ["businessName", "contactName", "email", "phone"],
        2: ["categorySlugs", "citySlug", "zip"],
      };
      const fields = stepFields[step];
      if (fields) {
        const ok = await form.trigger(fields as Parameters<typeof form.trigger>[0]);
        if (!ok) return;
      }
    }
    setStep(target);
  };

  const onSubmit = async (values: FormValues) => {
    setSubmitState("submitting");
    setErrMsg(null);
    try {
      const formMs = Date.now() - mountedAt.current;
      const res = await fetch("/api/pro-application", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, formMs }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong submitting your application.");
      }
      setSubmitState("ok");
    } catch (e) {
      setSubmitState("error");
      setErrMsg(e instanceof Error ? e.message : "Something went wrong.");
    }
  };

  if (submitState === "ok") {
    return (
      <div className="rounded-card border border-navy/10 bg-cream p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-orange" />
        <h3 className="mt-3 font-display text-xl font-semibold text-navy-deep">
          Application received.
        </h3>
        <p className="mt-2 text-sm text-muted">
          A Texas-based account team member will reach out within two business days. No payment is
          collected until you&apos;re accepted.
        </p>
      </div>
    );
  }

  const cats = form.watch("categorySlugs");

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} aria-label="Pro application">
      <ol className="mb-8 flex items-center gap-2 text-xs">
        {[1, 2, 3].map((s) => (
          <li
            key={s}
            className={`flex h-8 flex-1 items-center justify-center rounded-pill border ${
              s === step
                ? "border-orange bg-orange text-white"
                : s < step
                  ? "border-orange/40 bg-orange/10 text-orange"
                  : "border-navy/10 text-muted"
            }`}
          >
            Step {s} of 3
          </li>
        ))}
      </ol>

      <div className="hidden" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...form.register("company_url")} />
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-navy-deep">About your business</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="businessName">Business name *</Label>
              <Input id="businessName" {...form.register("businessName")} />
              {form.formState.errors.businessName ? (
                <p className="mt-1 text-xs text-red-600">{form.formState.errors.businessName.message}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="contactName">Your name *</Label>
              <Input id="contactName" {...form.register("contactName")} />
              {form.formState.errors.contactName ? (
                <p className="mt-1 text-xs text-red-600">{form.formState.errors.contactName.message}</p>
              ) : null}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...form.register("email")} />
              {form.formState.errors.email ? (
                <p className="mt-1 text-xs text-red-600">{form.formState.errors.email.message}</p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" {...form.register("phone")} />
              {form.formState.errors.phone ? (
                <p className="mt-1 text-xs text-red-600">{form.formState.errors.phone.message}</p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="button" onClick={() => void goToStep(2)} size="lg">
              Continue →
            </Button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-navy-deep">
            What you do, where you serve
          </h3>
          <div>
            <Label>Services offered *</Label>
            <p className="text-xs text-muted">Pick all that apply.</p>
            <div className="mt-2 grid max-h-72 grid-cols-1 gap-1 overflow-y-auto rounded-md border border-navy/10 bg-white p-3 sm:grid-cols-2">
              {categories.map((c) => (
                <label
                  key={c.slug}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-cream"
                >
                  <input
                    type="checkbox"
                    value={c.slug}
                    checked={cats.includes(c.slug)}
                    onChange={(e) => {
                      const arr = new Set(cats);
                      if (e.target.checked) arr.add(c.slug);
                      else arr.delete(c.slug);
                      form.setValue("categorySlugs", Array.from(arr), { shouldValidate: true });
                    }}
                    className="h-4 w-4 rounded border-navy/30 text-orange focus:ring-orange"
                  />
                  <span>{c.name}</span>
                </label>
              ))}
            </div>
            {form.formState.errors.categorySlugs ? (
              <p className="mt-1 text-xs text-red-600">{form.formState.errors.categorySlugs.message}</p>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="citySlug">Home city</Label>
              <select
                id="citySlug"
                className="mt-1 flex h-11 w-full rounded-md border border-navy/15 bg-white px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                {...form.register("citySlug")}
              >
                <option value="">Choose your home city...</option>
                {cities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="zip">Business ZIP *</Label>
              <Input
                id="zip"
                inputMode="numeric"
                maxLength={5}
                {...form.register("zip")}
              />
              {form.formState.errors.zip ? (
                <p className="mt-1 text-xs text-red-600">{form.formState.errors.zip.message}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setStep(1)} size="lg">
              ← Back
            </Button>
            <Button type="button" onClick={() => void goToStep(3)} size="lg">
              Continue →
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-navy-deep">
            Final details
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="yearsInBiz">Years in business</Label>
              <Input
                id="yearsInBiz"
                type="number"
                min={0}
                max={120}
                {...form.register("yearsInBiz", { valueAsNumber: true })}
              />
            </div>
            <div>
              <Label htmlFor="licenseNumber">License number (optional)</Label>
              <Input id="licenseNumber" {...form.register("licenseNumber")} />
            </div>
          </div>
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              {...form.register("insured")}
              className="mt-1 h-4 w-4 rounded border-navy/30 text-orange focus:ring-orange"
            />
            <span>I carry current general liability insurance.</span>
          </label>
          <div>
            <Label htmlFor="about">About your business *</Label>
            <Textarea
              id="about"
              rows={5}
              placeholder="Tell us how long you've been doing this, what makes your shop different, the kind of jobs you book most often."
              {...form.register("about")}
            />
            {form.formState.errors.about ? (
              <p className="mt-1 text-xs text-red-600">{form.formState.errors.about.message}</p>
            ) : null}
          </div>
          {submitState === "error" && errMsg ? (
            <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{errMsg}</span>
            </div>
          ) : null}
          <div className="flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setStep(2)} size="lg">
              ← Back
            </Button>
            <Button type="submit" size="lg" disabled={submitState === "submitting"}>
              {submitState === "submitting" ? "Submitting..." : "Submit application"}
            </Button>
          </div>
        </div>
      ) : null}
    </form>
  );
}
