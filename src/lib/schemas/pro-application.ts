import { z } from "zod";

export const ProApplicationSchema = z.object({
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
  about: z.string().min(20, "A few sentences about your business, please").max(2000),
  company_url: z.string().max(0).optional(),
  formMs: z.number().int().nonnegative().optional(),
});

export type ProApplicationInput = z.infer<typeof ProApplicationSchema>;
