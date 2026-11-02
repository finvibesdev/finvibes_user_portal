import NextLink from "next/link";
import { Box, Container, Typography, Breadcrumbs } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import EMICalculator from "@/components/tools/EMICalculator";
import { colors, typography } from "@/constants";

export const metadata = {
  title: "Interactive EMI Calculator - Finvibes",
  description:
    "Slide the values to adjust loan principal, expected interest rate, and tenure. Calculate your estimated monthly instalment (EMI) in seconds.",
};

export default function EMICalculatorPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "85vh",
        pt: { xs: 3, md: 4.5 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Page Title & Subtitle */}
        <Box sx={{ mb: { xs: 3, md: 4 } }}>
          <Typography
            component="h1"
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              fontWeight: 800,
              color: colors.text.primary,
              letterSpacing: "-0.5px",
              mb: 1,
            }}
          >
            Interactive EMI Calculator
          </Typography>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "14px", md: "15.5px" },
              color: colors.text.secondary,
              maxWidth: 680,
              lineHeight: 1.5,
            }}
          >
            Slide the values to adjust loan principal, expected interest rate,
            and tenure.
          </Typography>
        </Box>
      </Container>

      {/* Main Interactive EMI Calculator Tool */}
      <EMICalculator />
    </Box>
  );
}
