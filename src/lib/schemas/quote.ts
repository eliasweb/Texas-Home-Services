import { z } from "zod";

export const QuoteSchema = z.object({
  proSlug: z.string().optional(),
  categorySlug: z.string().min(1, "Pick a service"),
  citySlug: z.string().optional(),
  zip: z.string().regex(/^\d{5}$/, "Enter a 5-digit ZIP"),
  fullName: z.string().min(2, "Enter your full name").max(80),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone").max(20),
  details: z.string().min(10, "A few sentences about the job, please").max(2000),
  timing: z.enum(["asap", "1-2-weeks", "flexible"]).optional(),
  budget: z
    .enum(["under-500", "500-2000", "2000-5000", "5000-15000", "15000-plus"])
    .optional(),
  // Honeypot — must be empty
  company_url: z.string().max(0).optional(),
  // Anti-bot — must be at least 2 seconds since form mount
  formMs: z.number().int().nonnegative().optional(),
});

export type QuoteInput = z.infer<typeof QuoteSchema>;
