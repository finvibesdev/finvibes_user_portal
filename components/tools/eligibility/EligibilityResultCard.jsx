"use client";

import { Box, Grid, Typography } from "@mui/material";
import { East } from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";

const formatINR = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(num));
};

export default function EligibilityResultCard({
  loanTypeLabel = "Home Loan",
  eligibilityAmount,
  maxNewEmi,
  incomeLimit,
  existingEmi,
  foirUtilisationPct,
  foirPct = 60,
  rate,
  tenure,
}) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.calculatorCard,
        borderRadius: "20px",
        p: { xs: 2.8, sm: 3.6 },
        border: "1px solid rgba(11, 99, 229, 0.14)",
        boxShadow: "0 8px 30px rgba(11, 99, 229, 0.06)",
        position: { md: "sticky" },
        top: 100,
      }}
    >
      {/* Top Header Row: Label & Pre-Qualified Badge */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.8px",
            color: colors.text.secondary,
            textTransform: "uppercase",
          }}
        >
          ESTIMATED {loanTypeLabel.toUpperCase()} ELIGIBILITY
        </Typography>

        <Box
          sx={{
            backgroundColor: "#e8f8f0",
            color: "#0e8a4a",
            fontSize: "11.5px",
            fontWeight: 700,
            px: 1.4,
            py: 0.35,
            borderRadius: "50px",
            letterSpacing: "0.2px",
          }}
        >
          Pre-Qualified
        </Box>
      </Box>

      {/* Big Highlighted Eligibility Amount */}
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: { xs: "32px", sm: "40px" },
          fontWeight: 800,
          color: colors.brand.primary,
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
          mb: 3,
        }}
      >
        ₹ {formatINR(eligibilityAmount)}
      </Typography>

      {/* 3 Metric Cards Row */}
      <Grid container spacing={1.5} sx={{ mb: 3 }}>
        <Grid size={{ xs: 4 }} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: colors.surface.white,
              borderRadius: "12px",
              p: { xs: 1.2, sm: 1.6 },
              border: "1px solid #e2e8f0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 600,
                color: colors.text.secondary,
                minHeight: { xs: "28px", sm: "30px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              Maximum New EMI
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12.5px", sm: "14.5px" },
                fontWeight: 800,
                color: colors.text.primary,
              }}
            >
              ₹ {formatINR(maxNewEmi)}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 4 }} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: colors.surface.white,
              borderRadius: "12px",
              p: { xs: 1.2, sm: 1.6 },
              border: "1px solid #e2e8f0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 600,
                color: colors.text.secondary,
                minHeight: { xs: "28px", sm: "30px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              {foirPct}% Income Limit
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12.5px", sm: "14.5px" },
                fontWeight: 800,
                color: colors.text.primary,
              }}
            >
              ₹ {formatINR(incomeLimit)}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 4 }} sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: colors.surface.white,
              borderRadius: "12px",
              p: { xs: 1.2, sm: 1.6 },
              border: "1px solid #e2e8f0",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 600,
                color: colors.text.secondary,
                minHeight: { xs: "28px", sm: "30px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              Existing EMI
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12.5px", sm: "14.5px" },
                fontWeight: 800,
                color: colors.text.primary,
              }}
            >
              ₹ {formatINR(existingEmi)}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* FOIR Progress & Utilisation Box */}
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "14px",
          p: { xs: 2, sm: 2.2 },
          border: "1px solid #e2e8f0",
          mb: 3.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1.2,
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 700,
              color: colors.text.primary,
            }}
          >
            FOIR Utilisation
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 800,
              color: colors.brand.primary,
            }}
          >
            {foirUtilisationPct}%
          </Typography>
        </Box>

        {/* Progress Bar */}
        <Box
          sx={{
            height: 9,
            borderRadius: "50px",
            backgroundColor: "#e2e8f0",
            overflow: "hidden",
            mb: 1.4,
          }}
        >
          <Box
            sx={{
              width: `${Math.min(100, foirUtilisationPct)}%`,
              height: "100%",
              backgroundColor: colors.brand.primary,
              borderRadius: "50px",
              transition: "width 0.4s ease",
            }}
          />
        </Box>

        {/* Dynamic Caption */}
        <Typography
          sx={{
            fontSize: "12px",
            color: colors.text.secondary,
            lineHeight: 1.4,
          }}
        >
          At {rate}% for {tenure} {tenure === 1 ? "year" : "years"}, your estimated new EMI capacity is{" "}
          <strong style={{ color: colors.text.primary }}>
            ₹{formatINR(maxNewEmi)}
          </strong>.
        </Typography>
      </Box>

      {/* Bottom CTA Button */}
      <CTAButton
        href="/contact"
        label="Apply for This Loan"
        icon={<East sx={{ fontSize: 16 }} />}
        borderRadius="10px"
        sx={{
          width: "100%",
          py: 1.3,
          fontSize: "14.5px",
          fontWeight: 700,
        }}
      />
    </Box>
  );
}

