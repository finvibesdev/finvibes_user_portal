"use client";

import { Box, Grid, Typography } from "@mui/material";
import { East } from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CalculatorInputCard from "../CalculatorInputCard";
import CalculatorTextField from "../CalculatorTextField";
import CTAButton from "@/components/common/CTAButton";
import NavDropdown from "@/components/common/NavDropdown";

export default function FinancialDetailsCard({
  income,
  onIncomeChange,
  existingEmi,
  onExistingEmiChange,
  rate,
  onRateChange,
  tenure,
  onTenureChange,
  tenureOptions = [5, 10, 15, 20, 25, 30],
  foirPct = 60,
  onCalculate,
}) {
  return (
    <CalculatorInputCard
      title="Your Financial Details"
      badge={`FOIR: ${foirPct}%`}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.4 }}>
        {/* Input 1: Monthly Income */}
        <CalculatorTextField
          label="Monthly Income"
          placeholder="100000"
          value={income}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "");
            onIncomeChange(raw === "" ? "" : Number(raw));
          }}
          startAdornment="₹"
        />

        {/* Input 2: Existing Monthly EMI */}
        <CalculatorTextField
          label="Existing Monthly EMI"
          placeholder="10000"
          value={existingEmi}
          onChange={(e) => {
            const raw = e.target.value.replace(/\D/g, "");
            onExistingEmiChange(raw === "" ? "" : Number(raw));
          }}
          startAdornment="₹"
        />

        {/* Dual Inputs: Interest Rate & Loan Tenure */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CalculatorTextField
              label="Interest Rate (% p.a.)"
              placeholder={rate ? rate.toString() : "8.50"}
              value={rate}
              onChange={(e) => {
                let val = e.target.value.replace(/[^0-9.]/g, "");
                const parts = val.split(".");
                if (parts.length > 2) {
                  val = parts[0] + "." + parts.slice(1).join("");
                }
                onRateChange(val);
              }}
              endAdornment="%"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: colors.text.secondary,
                  mb: 0.8,
                }}
              >
                Loan Tenure
              </Typography>

              <NavDropdown
                label={`${tenure} ${tenure === 1 ? "Year" : "Years"}`}
                items={tenureOptions.map((opt) => ({
                  label: `${opt} ${opt === 1 ? "Year" : "Years"}`,
                  value: opt,
                  selected: tenure === opt,
                  onClick: () => onTenureChange(opt),
                }))}
                fullWidth
                triggerType="click"
                disableHover
                triggerSx={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  py: "13px",
                  px: 2,
                }}
                paperSx={{
                  borderRadius: "10px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e2e8f0",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Bottom CTA Button */}
        <Box sx={{ mt: 1 }}>
          <CTAButton
            onClick={onCalculate}
            label="Check Eligibility"
            icon={<East sx={{ fontSize: 16 }} />}
            borderRadius="10px"
            sx={{
              width: "100%",
              py: 1.3,
              fontSize: "15px",
              fontWeight: 700,
            }}
          />
        </Box>
      </Box>
    </CalculatorInputCard>
  );
}
