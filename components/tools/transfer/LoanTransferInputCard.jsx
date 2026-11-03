"use client";

import { Box, Typography, Grid, IconButton } from "@mui/material";
import { AccessTimeOutlined, Close } from "@mui/icons-material";
import { colors, typography } from "@/constants";
import CalculatorTextField from "@/components/tools/CalculatorTextField";

export default function LoanTransferInputCard({
  outstandingLoan,
  onOutstandingLoanChange,
  currentRate,
  onCurrentRateChange,
  yearsLeft,
  onYearsLeftChange,
  newRate,
  onNewRateChange,
  processingCharges,
  onProcessingChargesChange,
  otherCharges,
  onOtherChargesChange,
  rateDifference,
}) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "20px",
        p: { xs: 2.8, sm: 3.8 },
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
        display: "flex",
        flexDirection: "column",
        gap: 3.5,
      }}
    >
      {/* ================= SECTION 1: YOUR CURRENT LOAN ================= */}
      <Box>
        {/* Section Header */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2.2 }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#eef4fe",
              color: colors.brand.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "14px",
              flexShrink: 0,
              mt: 0.2,
            }}
          >
            1
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "17px",
                fontWeight: 800,
                color: colors.text.primary,
                lineHeight: 1.2,
              }}
            >
              Your Current Loan
            </Typography>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "12.5px",
                color: colors.text.secondary,
                mt: 0.3,
              }}
            >
              Tell us about your existing loan
            </Typography>
          </Box>
        </Box>

        {/* Outstanding Loan Input */}
        <Box sx={{ mb: 2.5 }}>
          <CalculatorTextField
            label="How much loan is still left?"
            value={outstandingLoan}
            onChange={(e) => onOutstandingLoanChange(e.target.value)}
            placeholder="5000000"
            startAdornment="₹"
            endAdornment={
              outstandingLoan ? (
                <IconButton
                  size="small"
                  onClick={() => onOutstandingLoanChange("")}
                  sx={{ p: 0.4, color: "#94a3b8", "&:hover": { color: colors.text.primary } }}
                >
                  <Close sx={{ fontSize: 16 }} />
                </IconButton>
              ) : undefined
            }
          />
          <Typography
            sx={{
              fontSize: "11.5px",
              color: "#94a3b8",
              mt: 0.8,
              pl: 0.5,
            }}
          >
            Example: If you still owe ₹50 lakh, enter 5000000
          </Typography>
        </Box>

        {/* Current Rate & Years Left Grid */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CalculatorTextField
              label="Current interest rate"
              value={currentRate}
              onChange={(e) => onCurrentRateChange(e.target.value)}
              placeholder="8.75"
              startAdornment="%"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CalculatorTextField
              label="Years left"
              value={yearsLeft}
              onChange={(e) => onYearsLeftChange(e.target.value)}
              placeholder="15"
              startAdornment={
                <AccessTimeOutlined
                  sx={{ fontSize: 18, color: colors.text.secondary }}
                />
              }
            />
          </Grid>
        </Grid>
      </Box>

      {/* ================= SECTION 2: NEW LOAN OFFER ================= */}
      <Box>
        {/* Section Header */}
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 2.2 }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "#eef4fe",
              color: colors.brand.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "14px",
              flexShrink: 0,
              mt: 0.2,
            }}
          >
            2
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "17px",
                fontWeight: 800,
                color: colors.text.primary,
                lineHeight: 1.2,
              }}
            >
              New Loan Offer
            </Typography>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "12.5px",
                color: colors.text.secondary,
                mt: 0.3,
              }}
            >
              Enter the expected new rate and charges
            </Typography>
          </Box>
        </Box>

        {/* New Rate with Difference Badge */}
        <Box sx={{ mb: 2.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 0.8,
            }}
          >
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "13px",
                fontWeight: 600,
                color: colors.text.secondary,
              }}
            >
              New interest rate
            </Typography>

            {rateDifference > 0 ? (
              <Box
                sx={{
                  backgroundColor: "#ecfdf5",
                  border: "1px solid #d1fae5",
                  color: "#059669",
                  fontSize: "11px",
                  fontWeight: 700,
                  px: 1.2,
                  py: 0.2,
                  borderRadius: "50px",
                }}
              >
                {rateDifference.toFixed(2)}% Lower
              </Box>
            ) : null}
          </Box>

          <CalculatorTextField
            value={newRate}
            onChange={(e) => onNewRateChange(e.target.value)}
            placeholder="7.10"
            startAdornment="%"
          />
        </Box>

        {/* Processing Charges & Other Charges Grid */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CalculatorTextField
              label="Processing charges"
              value={processingCharges}
              onChange={(e) => onProcessingChargesChange(e.target.value)}
              placeholder="0"
              startAdornment="₹"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <CalculatorTextField
              label="Other charges"
              value={otherCharges}
              onChange={(e) => onOtherChargesChange(e.target.value)}
              placeholder="0"
              startAdornment="₹"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

