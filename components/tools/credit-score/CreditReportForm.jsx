"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { creditScoreSchema } from "@/validations/creditScoreSchema";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { Check, Lock, CheckCircle } from "@mui/icons-material";
import { colors, typography, CREDIT_FORM_CONTENT } from "@/constants";
import FormTextField from "@/components/common/FormTextField";
import GenderSelector from "@/components/common/GenderSelector";
import CTAButton from "@/components/common/CTAButton";

export default function CreditReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedMobile, setSubmittedMobile] = useState("");

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(creditScoreSchema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
      firstName: "",
      mobile: "",
      email: "",
      pan: "",
      agreed: true,
    },
  });

  const gender = watch("gender");
  const firstName = watch("firstName");
  const mobile = watch("mobile");
  const email = watch("email");
  const pan = watch("pan");
  const agreed = watch("agreed");

  const handleMobileChange = (e) => {
    const rawVal = e?.target?.value !== undefined ? e.target.value : e;
    const cleaned = String(rawVal).replace(/\D/g, "").slice(0, 10);
    setValue("mobile", cleaned, { shouldValidate: true });
  };

  const handlePanChange = (e) => {
    const rawVal = e?.target?.value !== undefined ? e.target.value : e;
    const cleaned = String(rawVal)
      .replace(/[^a-zA-Z0-9]/g, "")
      .toUpperCase()
      .slice(0, 10);
    setValue("pan", cleaned, { shouldValidate: true });
  };

  const onValidSubmit = (data) => {
    setSubmittedMobile(data.mobile);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "20px",
          p: { xs: 3.5, sm: 4.5 },
          border: "1px solid #e2e8f0",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "#ecfdf5",
            color: "#10b981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2.2,
          }}
        >
          <CheckCircle sx={{ fontSize: 36 }} />
        </Box>

        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "22px",
            fontWeight: 800,
            color: colors.text.primary,
            mb: 1,
          }}
        >
          Verification Code Sent!
        </Typography>

        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "14px",
            color: colors.text.secondary,
            mb: 3,
            lineHeight: 1.5,
          }}
        >
          We have dispatched a one-time verification password to{" "}
          <strong>+91 {submittedMobile}</strong>. Enter the OTP to view your full CIBIL &
          Equifax report.
        </Typography>

        <CTAButton
          onClick={() => setSubmitted(false)}
          variant="outlined"
          label="Edit Details"
          borderRadius="8px"
        />
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onValidSubmit)}
      noValidate
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "20px",
        p: { xs: 3, sm: 3.8 },
        border: "1px solid #e2e8f0",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
        position: { md: "sticky" },
        top: 100,
      }}
    >
      {/* Top Partner Badge */}
      <Box
        sx={{
          display: "inline-block",
          backgroundColor: "#eef4fe",
          color: colors.brand.primary,
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.8px",
          px: 1.5,
          py: 0.4,
          borderRadius: "50px",
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        {CREDIT_FORM_CONTENT.partnerBadge}
      </Box>

      {/* Main Title & Subtitle */}
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: { xs: "22px", sm: "24px" },
          fontWeight: 800,
          color: colors.text.primary,
          lineHeight: 1.25,
          mb: 0.8,
        }}
      >
        {CREDIT_FORM_CONTENT.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: "13.5px",
          fontWeight: 700,
          color: colors.brand.primary,
          mb: 0.4,
        }}
      >
        {CREDIT_FORM_CONTENT.subtitle}
      </Typography>

      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: "12px",
          color: colors.text.secondary,
          mb: 2,
        }}
      >
        {CREDIT_FORM_CONTENT.caption}
      </Typography>

      {/* Benefits Badges */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.2 }}>
        {CREDIT_FORM_CONTENT.trustHighlights.map((b, idx) => (
          <Box
            key={idx}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.6,
              backgroundColor: "#f0fdf4",
              border: "1px solid #dcfce7",
              color: "#16a34a",
              fontSize: "11.5px",
              fontWeight: 600,
              px: 1.2,
              py: 0.4,
              borderRadius: "6px",
            }}
          >
            <Check sx={{ fontSize: 13 }} />
            {b}
          </Box>
        ))}
      </Box>

      {/* Security Alert Notice */}
      <Box
        sx={{
          backgroundColor: "#fffbeb",
          border: "1px solid #fef3c7",
          borderRadius: "10px",
          p: 1.4,
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
          mb: 2.5,
        }}
      >
        <Lock sx={{ fontSize: 16, color: "#d97706", mt: 0.2 }} />
        <Typography
          sx={{
            fontSize: "11px",
            color: "#92400e",
            lineHeight: 1.45,
            fontWeight: 500,
          }}
        >
          {CREDIT_FORM_CONTENT.securityNotice}
        </Typography>
      </Box>

      {/* Inputs */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <GenderSelector
          value={gender}
          onChange={(val) =>
            setValue("gender", val, { shouldValidate: true })
          }
        />

        <FormTextField
          label="First Name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) =>
            setValue("firstName", e.target.value, { shouldValidate: true })
          }
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? errors.firstName.message : ""}
          required
        />

        <FormTextField
          label="Mobile Number"
          placeholder="Mobile Number"
          value={mobile}
          onChange={handleMobileChange}
          type="tel"
          maxLength={10}
          required
          startAdornment="+91"
          error={Boolean(errors.mobile)}
          helperText={errors.mobile ? errors.mobile.message : ""}
        />

        <FormTextField
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setValue("email", e.target.value, { shouldValidate: true })
          }
          type="email"
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : ""}
          required
        />

        <FormTextField
          label="PAN Card Number"
          placeholder="PAN CARD NUMBER"
          value={pan}
          onChange={handlePanChange}
          maxLength={10}
          uppercase
          error={Boolean(errors.pan)}
          helperText={errors.pan ? errors.pan.message : ""}
          required
        />

        {/* Bureau Consent Checkbox */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreed}
                onChange={(e) =>
                  setValue("agreed", e.target.checked, { shouldValidate: true })
                }
                size="small"
                sx={{
                  color: errors.agreed ? "#ef4444" : colors.brand.primary,
                  "&.Mui-checked": {
                    color: colors.brand.primary,
                  },
                  mt: -1.2,
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "11px",
                  color: colors.text.secondary,
                  lineHeight: 1.45,
                }}
              >
                {CREDIT_FORM_CONTENT.consentText}
              </Typography>
            }
            sx={{ alignItems: "flex-start", m: 0, mt: 0.5 }}
          />
          {errors.agreed ? (
            <FormHelperText error sx={{ fontSize: "11.5px", mt: 0.5, ml: 3.5 }}>
              {errors.agreed.message}
            </FormHelperText>
          ) : null}
        </Box>

        {/* Submit CTA */}
        <CTAButton
          fullWidth
          type="submit"
          label={CREDIT_FORM_CONTENT.buttonLabel}
          borderRadius="10px"
          sx={{ py: 1.5, fontSize: "15px", fontWeight: 700, mt: 0.5 }}
        />
      </Box>
    </Box>
  );
}
