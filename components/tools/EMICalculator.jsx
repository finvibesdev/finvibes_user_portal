"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  CreditCard,
  Percent,
  CalendarToday,
  RestartAlt,
  Calculate,
} from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CTAButton from "@/components/common/CTAButton";
import CalculatorInputCard from "./CalculatorInputCard";
import CalculatorTextField from "./CalculatorTextField";
import { emiCalculatorSchema } from "@/validations/emiSchema";

// Format currency in Indian numbering system
const formatINR = (val) => {
  const num = Number(val);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("en-IN").format(Math.round(num));
};

export default function EMICalculator() {
  const {
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emiCalculatorSchema),
    mode: "onChange",
    defaultValues: {
      amount: "",
      rate: "",
      years: "",
      months: "",
    },
  });

  const amount = watch("amount");
  const rate = watch("rate");
  const years = watch("years");
  const months = watch("months");

  // EMI Calculation Formula
  const calculation = useMemo(() => {
    const numAmount = Number(amount);
    const P = Math.max(0, isNaN(numAmount) ? 0 : numAmount);

    const numRate = Number(rate);
    const validRate = isNaN(numRate) ? 0 : numRate;
    const R = Math.max(0, validRate) / 12 / 100;

    const numYears = Number(years);
    const validYears = isNaN(numYears) ? 0 : numYears;

    const numMonths = Number(months);
    const validMonths = isNaN(numMonths) ? 0 : numMonths;

    const totalMonths = validYears * 12 + validMonths;

    let emi = 0;
    if (P > 0 && R > 0 && totalMonths > 0) {
      const pow = Math.pow(1 + R, totalMonths);
      emi = (P * R * pow) / (pow - 1);
    } else if (P > 0 && totalMonths > 0) {
      emi = P / totalMonths;
    }

    const totalAmount = totalMonths > 0 ? emi * totalMonths : 0;
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
    reset({
      amount: "",
      rate: "",
      years: "",
      months: "",
    });
  };

  // Calculate Handler: Triggers validation on form fields
  const handleCalculate = async () => {
    await trigger();
  };

  // Input Change Handlers
  const handleAmountChange = (e) => {
    setValue("amount", e.target.value, { shouldValidate: true });
  };

  const handleRateChange = (e) => {
    setValue("rate", e.target.value, { shouldValidate: true });
  };

  const handleYearsChange = (e) => {
    setValue("years", e.target.value, { shouldValidate: true });
  };

  const handleMonthsChange = (e) => {
    setValue("months", e.target.value, { shouldValidate: true });
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
                type="number"
                placeholder="Loan Amount"
                value={amount}
                onChange={handleAmountChange}
                startAdornment="₹"
                error={Boolean(errors.amount)}
                helperText={errors.amount ? errors.amount.message : ""}
              />
            </CalculatorInputCard>

            {/* Input Card 2: Interest Rate */}
            <CalculatorInputCard
              icon={<Percent sx={{ fontSize: 18 }} />}
              title="Interest Rate (p.a.)"
              subtitle="Enter annual interest rate"
            >
              <CalculatorTextField
                type="number"
                placeholder="Interest Rate"
                value={rate}
                onChange={handleRateChange}
                endAdornment="%"
                error={Boolean(errors.rate)}
                helperText={errors.rate ? errors.rate.message : ""}
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
                    type="number"
                    placeholder="Years"
                    value={years}
                    onChange={handleYearsChange}
                    endAdornment="YEAR/S"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <CalculatorTextField
                    type="number"
                    placeholder="Months"
                    value={months}
                    onChange={handleMonthsChange}
                    endAdornment="MONTH/S"
                    error={Boolean(errors.months)}
                    helperText={errors.months ? errors.months.message : ""}
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
                  ₹ {formatINR(amount)}
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
