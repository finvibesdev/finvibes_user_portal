import { z } from "zod";

export const emiCalculatorSchema = z.object({
  amount: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.coerce
      .number({ message: "Please enter a valid loan amount" })
      .min(10000, "Minimum loan amount is ₹10,000")
      .max(100000000, "Maximum loan amount is ₹10 Crore (₹10,00,00,000)")
      .optional(),
  ),
  rate: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.coerce
      .number({ message: "Please enter a valid interest rate" })
      .min(7, "Rate must be at least 7%")
      .max(50, "Rate cannot exceed 50%")
      .optional(),
  ),
  years: z.any().optional(),
  months: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.coerce
      .number({ message: "Please enter valid months" })
      .min(0, "Months cannot be less than 0")
      .max(12, "Months cannot exceed 12")
      .optional(),
  ),
});
