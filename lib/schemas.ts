import { z } from "zod";

export const CheckoutSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(32),
    email: z.email("Invalid email address").max(64),
    phone: z.string().min(1, "Phone number is required").max(16),

    address: z.string().min(1, "Address is required").max(120),
    zip: z.string().min(1, "ZIP code is required").max(11),
    city: z.string().min(1, "City is required").max(64),
    country: z.string().min(1, "Country is required").max(64),

    paymentMethod: z.enum(["e-money", "cash-on-delivery"]),

    eMoneyNumber: z.string().max(10).optional(),
    eMoneyPin: z.string().max(4).optional(),
  })
  .refine(
    (data) =>
      data.paymentMethod !== "e-money" || (data.eMoneyNumber && data.eMoneyPin),
    {
      message: "e-Money number and PIN are required",
      path: ["eMoneyNumber"],
    },
  );

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
