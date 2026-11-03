import { Box, Container, Typography } from "@mui/material";
import CreditScoreGuide from "@/components/tools/credit-score/CreditScoreGuide";
import { colors, typography, CREDIT_PAGE_HEADER } from "@/constants";

export const metadata = {
  title: "Credit Score Spectrum & Factors - Check Free Credit Score | Finvibes",
  description:
    "See where you stand and what moves the needle according to RBI-licensed credit bureaus. Get your detailed CIBIL & Equifax credit report for free.",
};

export default function CreditGuidePage() {
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
            {CREDIT_PAGE_HEADER.title}
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
            {CREDIT_PAGE_HEADER.subtitle}
          </Typography>
        </Box>
      </Container>

      {/* Main Credit Score Spectrum & Lead Form */}
      <CreditScoreGuide />
    </Box>
  );
}
