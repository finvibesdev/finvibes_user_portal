"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  CreditCard,
  Percent,
  CalendarToday,
  RestartAlt,
  Calculate,
  East,
} from "@mui/icons-material";
import { DEFAULT_EMI_VALUES, colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";

// Format currency in Indian numbering system
const formatINR = (val) => {
  if (isNaN(val) || val === null || val === undefined || val === "") return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(val));
};

// Common Input Card Component
function CalculatorInputCard({ icon, title, subtitle, children }) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "16px",
        p: { xs: 2.5, sm: 3 },
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
        {icon && (
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "8px",
              backgroundColor: "rgba(11, 99, 229, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colors.brand.primary,
            }}
          >
            {icon}
          </Box>
        )}
        <Box>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: typography.fontSizes.base,
              fontWeight: typography.fontWeights.bold,
              color: colors.text.primary,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: typography.fontSizes.sm,
                color: colors.text.secondary,
                mt: 0.3,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Card Body */}
      {children}
    </Box>
  );
}

// Common Styled Text Field Component
function CalculatorTextField({
  placeholder,
  value,
  onChange,
  startAdornment,
  endAdornment,
  fullWidth = true,
  sx = {},
  ...props
}) {
  return (
    <TextField
      fullWidth={fullWidth}
      placeholder={placeholder}
      value={value ?? ""}
      onChange={onChange}
      slotProps={{
        input: {
          startAdornment: startAdornment ? (
            <InputAdornment position="start">
              {typeof startAdornment === "string" ? (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "17px",
                    color: colors.text.primary,
                  }}
                >
                  {startAdornment}
                </Typography>
              ) : (
                startAdornment
              )}
            </InputAdornment>
          ) : undefined,
          endAdornment: endAdornment ? (
            <InputAdornment position="end">
              {typeof endAdornment === "string" ? (
                <Typography
                  sx={{
                    fontSize: endAdornment === "%" ? "16px" : "11px",
                    fontWeight: 700,
                    color: colors.text.secondary,
                    letterSpacing: endAdornment === "%" ? "normal" : "0.5px",
                  }}
                >
                  {endAdornment}
                </Typography>
              ) : (
                endAdornment
              )}
            </InputAdornment>
          ) : undefined,
        },
      }}
      sx={{
        mb: 0,
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          fontSize: "16px",
          fontWeight: 700,
          backgroundColor: "#f8fafc",
          "& fieldset": { borderColor: "#e2e8f0" },
          "&:hover fieldset": { borderColor: colors.brand.primary },
          "&.Mui-focused fieldset": {
            borderColor: colors.brand.primary,
          },
          "& input::placeholder": {
            color: "#94a3b8",
            opacity: 1,
            fontWeight: 500,
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
}

export default function EMICalculator() {
  const [amount, setAmount] = useState(DEFAULT_EMI_VALUES.amount);
  const [rate, setRate] = useState(DEFAULT_EMI_VALUES.rate);
  const [years, setYears] = useState(DEFAULT_EMI_VALUES.years);
  const [months, setMonths] = useState(
    DEFAULT_EMI_VALUES.months ? DEFAULT_EMI_VALUES.months : "",
  );

  // EMI Calculation Formula
  const calculation = useMemo(() => {
    const P = Math.max(0, Number(amount) || 0);
    const R = Math.max(0, Number(rate) || 0) / 12 / 100;
    const N = Math.max(1, (Number(years) || 0) * 12 + (Number(months) || 0));

    let emi = 0;
    if (P > 0 && R > 0 && N > 0) {
      const pow = Math.pow(1 + R, N);
      emi = (P * R * pow) / (pow - 1);
    } else if (P > 0 && N > 0) {
      emi = P / N;
    }

    const totalAmount = emi * N;
    const totalInterest = Math.max(0, totalAmount - P);

    const principalPct =
      totalAmount > 0 ? Math.round((P / totalAmount) * 100) : 100;
    const interestPct = Math.max(0, 100 - principalPct);

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principalPct,
      interestPct,
    };
  }, [amount, rate, years, months]);

  // Reset Handler: Clears all fields to empty string to reveal placeholders
  const handleReset = () => {
    setAmount("");
    setRate("");
    setYears("");
    setMonths("");
  };

  // Calculate Handler: Restores defaults if all fields were cleared
  const handleCalculate = () => {
    if (amount === "") setAmount(DEFAULT_EMI_VALUES.amount);
    if (rate === "") setRate(DEFAULT_EMI_VALUES.rate);
    if (years === "" && months === "") setYears(DEFAULT_EMI_VALUES.years);
  };

  // Input Change Handlers
  const handleAmountChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setAmount(raw === "" ? "" : Number(raw));
  };

  const handleRateChange = (e) => {
    let val = e.target.value.replace(/[^0-9.]/g, "");
    const parts = val.split(".");
    if (parts.length > 2) {
      val = parts[0] + "." + parts.slice(1).join("");
    }
    setRate(val);
  };

  const handleYearsChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setYears(raw === "" ? "" : raw);
  };

  const handleMonthsChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (raw === "") {
      setMonths("");
    } else {
      setMonths(Math.min(11, Number(raw)).toString());
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {/* Left Column: 3 Input Cards & Action Buttons */}
        <Grid size={{ xs: 12, md: 7.2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Input Card 1: Loan Amount */}
            <CalculatorInputCard
              icon={<CreditCard sx={{ fontSize: 19 }} />}
              title="Loan Amount"
              subtitle="Enter the total loan amount"
            >
              <CalculatorTextField
                placeholder="Loan Amount"
                value={amount}
                onChange={handleAmountChange}
                startAdornment="₹"
              />
            </CalculatorInputCard>

            {/* Input Card 2: Interest Rate */}
            <CalculatorInputCard
              icon={<Percent sx={{ fontSize: 18 }} />}
              title="Interest Rate (p.a.)"
              subtitle="Enter annual interest rate"
            >
              <CalculatorTextField
                placeholder="Interest Rate"
                value={rate}
                onChange={handleRateChange}
                endAdornment="%"
              />
            </CalculatorInputCard>

            {/* Input Card 3: Loan Tenure */}
            <CalculatorInputCard
              icon={<CalendarToday sx={{ fontSize: 18 }} />}
              title="Loan Tenure"
              subtitle="Choose loan tenure"
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <CalculatorTextField
                    placeholder="Years"
                    value={years}
                    onChange={handleYearsChange}
                    endAdornment="YEAR/S"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <CalculatorTextField
                    placeholder="Months"
                    value={months}
                    onChange={handleMonthsChange}
                    endAdornment="MONTH/S"
                  />
                </Grid>
              </Grid>
            </CalculatorInputCard>

            {/* Bottom Actions: Reset & Calculate EMI */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <CTAButton
                variant="outlined"
                onClick={handleReset}
                startIcon={<RestartAlt sx={{ fontSize: 18 }} />}
                label="Reset"
                borderRadius="8px"
                sx={{
                  minWidth: { xs: "130px", sm: "160px" },
                  fontSize: "14px",
                  py: 1.1,
                  px: 3.5,
                  color: colors.text.primary,
                  borderColor: "#cbd5e1",
                  backgroundColor: colors.surface.white,
                  "&:hover": {
                    backgroundColor: "#f8fafc",
                    borderColor: colors.text.secondary,
                  },
                }}
              />

              <CTAButton
                variant="contained"
                onClick={handleCalculate}
                startIcon={<Calculate sx={{ fontSize: 20 }} />}
                label="Calculate EMI"
                borderRadius="8px"
                sx={{
                  flexGrow: 1,
                  fontSize: "14.5px",
                  py: 1.1,
                  fontWeight: 700,
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Column: Estimated Monthly Instalment (EMI) Summary Card */}
        <Grid size={{ xs: 12, md: 4.8 }}>
          <Box
            sx={{
              backgroundColor: colors.surface.calculatorCard,
              borderRadius: "20px",
              p: { xs: 3, sm: 4 },
              border: "1px solid rgba(11, 99, 229, 0.14)",
              boxShadow: "0 8px 30px rgba(11, 99, 229, 0.06)",
              position: { md: "sticky" },
              top: 100,
            }}
          >
            {/* Top Label */}
            <Typography
              sx={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                color: colors.text.secondary,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              ESTIMATED MONTHLY INSTALMENT (EMI)
            </Typography>

            {/* Big EMI Highlight Number */}
            <Box
              sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 3 }}
            >
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: { xs: "32px", sm: "38px" },
                  fontWeight: 800,
                  color: colors.brand.primary,
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                }}
              >
                ₹ {formatINR(calculation.emi)}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: colors.text.secondary,
                }}
              >
                / month
              </Typography>
            </Box>

            {/* Split Progress / Distribution Bar */}
            <Box sx={{ mb: 3.5 }}>
              <Box
                sx={{
                  display: "flex",
                  height: 14,
                  borderRadius: "50px",
                  overflow: "hidden",
                  backgroundColor: "#e2e8f0",
                  mb: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: `${calculation.principalPct}%`,
                    backgroundColor: colors.brand.primary,
                    transition: "width 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    width: `${calculation.interestPct}%`,
                    backgroundColor: colors.brand.cyan,
                    transition: "width 0.3s ease",
                  }}
                />
              </Box>

              {/* Legend Row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "2px",
                      backgroundColor: colors.brand.primary,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    Principal: {calculation.principalPct}%
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "2px",
                      backgroundColor: colors.brand.cyan,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    Interest: {calculation.interestPct}%
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Financial Breakdown Rows */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2.2, mb: 4 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: 1.8,
                  borderBottom: "1px solid rgba(24, 37, 59, 0.08)",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: colors.text.secondary }}
                >
                  Principal Loan Amount
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  ₹ {formatINR(amount || 0)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pb: 1.8,
                  borderBottom: "1px solid rgba(24, 37, 59, 0.08)",
                }}
              >
                <Typography
                  sx={{ fontSize: "14px", color: colors.text.secondary }}
                >
                  Total Interest Payable
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  ₹ {formatINR(calculation.totalInterest)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: colors.text.primary,
                  }}
                >
                  Total Amount Payable
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: colors.text.primary,
                  }}
                >
                  ₹ {formatINR(calculation.totalAmount)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
