import { Box, Container, Typography } from "@mui/material";
import LoanEligibilityCalculator from "@/components/tools/eligibility/LoanEligibilityCalculator";
import { colors, typography, ELIGIBILITY_PAGE_HEADER } from "@/constants";

export const metadata = {
  title: "Check Your Borrowing Power - Loan Eligibility Estimator | Finvibes",
  description:
    "Lenders calculate eligibility using your Fixed Obligation to Income Ratio (FOIR). Input your figures to calculate estimated borrowing power for Home, Personal, Business, or Car Loan.",
};

export default function LoanEligibilityPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "85vh",
        pt: { xs: 4, md: 5.5 },
        pb: { xs: 7, md: 9 },
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
              mb: 1.2,
            }}
          >
            {ELIGIBILITY_PAGE_HEADER.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "14px", md: "15.5px" },
              color: colors.text.secondary,
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            {ELIGIBILITY_PAGE_HEADER.subtitle}
          </Typography>
        </Box>
      </Container>

      {/* Main Interactive Eligibility Estimator */}
      <LoanEligibilityCalculator />
    </Box>
  );
}
