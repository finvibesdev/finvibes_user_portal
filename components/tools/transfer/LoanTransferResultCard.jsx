"use client";

import { Box, Typography } from "@mui/material";
import {
  AccountBalanceOutlined,
  SouthEast,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";

const formatINR = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(num));
};

const formatLakhs = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  if (num >= 100000) {
    const inLakhs = (num / 100000).toFixed(1);
    return `${inLakhs}L`;
  }
  return formatINR(num);
};

export default function LoanTransferResultCard({
  netSavings = 0,
  monthlyDrop = 0,
  currentEmi = 0,
  newEmi = 0,
  grossSavings = 0,
  totalFees = 0,
  onCalculate,
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
      {/* Top Header Row: Label & Savings Badge */}
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
          ESTIMATED NET INTEREST SAVINGS
        </Typography>

        <Box
          sx={{
            backgroundColor: "#f0fdf4",
            border: "1px solid #dcfce7",
            color: "#15803d",
            fontSize: "11.5px",
            fontWeight: 700,
            px: 1.2,
            py: 0.35,
            borderRadius: "50px",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SouthEast sx={{ fontSize: 13 }} />
          Save ₹{formatLakhs(netSavings)}
        </Box>
      </Box>

      {/* Big Highlighted Savings Amount in Emerald Green */}
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: { xs: "34px", sm: "42px" },
          fontWeight: 800,
          color: "#059669",
          letterSpacing: "-0.5px",
          lineHeight: 1.1,
          mb: 2.5,
        }}
      >
        ₹ {formatINR(netSavings)}
      </Typography>

      {/* Estimated Monthly Drop Highlight Card */}
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "14px",
          p: { xs: 1.6, sm: 1.8 },
          border: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.4 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              backgroundColor: "#f1f5f9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <AccountBalanceOutlined sx={{ fontSize: 20, color: "#475569" }} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "11.5px",
                fontWeight: 600,
                color: colors.text.secondary,
                lineHeight: 1.2,
              }}
            >
              Estimated Monthly Drop
            </Typography>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "15px",
                fontWeight: 800,
                color: colors.text.primary,
                mt: 0.2,
              }}
            >
              ~ ₹{formatINR(monthlyDrop)} / mo
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ecfdf5",
            color: "#059669",
            fontWeight: 700,
            fontSize: "11px",
            px: 1.2,
            py: 0.45,
            borderRadius: "6px",
          }}
        >
          Cash Flow +
        </Box>
      </Box>

      {/* Breakdown Rows with Clean Dividers */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6, mb: 3.5 }}>
        {/* Row 1: Current Monthly EMI */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13.5px",
          }}
        >
          <Typography sx={{ color: colors.text.secondary, fontSize: "13px" }}>
            Current Monthly EMI
          </Typography>
          <Typography
            sx={{ fontWeight: 700, color: colors.text.primary, fontSize: "14px" }}
          >
            ₹ {formatINR(currentEmi)}
          </Typography>
        </Box>

        {/* Row 2: New Reduced Monthly EMI */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13.5px",
          }}
        >
          <Typography sx={{ color: colors.text.secondary, fontSize: "13px" }}>
            New Reduced Monthly EMI
          </Typography>
          <Typography
            sx={{ fontWeight: 700, color: colors.text.primary, fontSize: "14px" }}
          >
            ₹ {formatINR(newEmi)}
          </Typography>
        </Box>

        {/* Row 3: Gross Interest Savings */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13.5px",
          }}
        >
          <Typography sx={{ color: colors.text.secondary, fontSize: "13px" }}>
            Gross Interest Savings
          </Typography>
          <Typography
            sx={{ fontWeight: 700, color: colors.text.primary, fontSize: "14px" }}
          >
            ₹ {formatINR(grossSavings)}
          </Typography>
        </Box>

        {/* Row 4: Total Transfer & Admin Fees */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13.5px",
          }}
        >
          <Typography sx={{ color: colors.text.secondary, fontSize: "13px" }}>
            Total Transfer & Admin Fees
          </Typography>
          <Typography
            sx={{ fontWeight: 700, color: colors.text.primary, fontSize: "14px" }}
          >
            ₹ {formatINR(totalFees)}
          </Typography>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
        <CTAButton
          fullWidth
          label="Calculate My Savings →"
          onClick={onCalculate}
          borderRadius="10px"
          sx={{ py: 1.4, fontSize: "15px", fontWeight: 700 }}
        />

        <CTAButton
          fullWidth
          variant="outlined"
          label="Compare Partner Lenders"
          href="/contact"
          borderRadius="10px"
          sx={{
            py: 1.3,
            fontSize: "14px",
            fontWeight: 700,
            backgroundColor: colors.surface.white,
            borderColor: "#e2e8f0",
            color: colors.text.primary,
            "&:hover": {
              borderColor: "#cbd5e1",
              backgroundColor: "#f8fafc",
            },
          }}
        />
      </Box>
    </Box>
  );
}

