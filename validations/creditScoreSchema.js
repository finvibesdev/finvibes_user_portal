import { z } from "zod";

export const creditScoreSchema = z.object({
  gender: z.enum(["male", "female"]),
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[A-Za-z\s]+$/, "First name should only contain letters"),
  mobile: z
    .string()
    .trim()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9"
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  pan: z
    .string()
    .trim()
    .toUpperCase()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Please enter a valid 10-character PAN (e.g. ABCDE1234F)"
    ),
  agreed: z.boolean().refine((val) => val === true, {
    message: "Please accept the terms to generate your credit report",
  }),
});

