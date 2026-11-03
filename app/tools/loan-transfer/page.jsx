import { Box, Container, Typography } from "@mui/material";
import LoanTransferCalculator from "@/components/tools/transfer/LoanTransferCalculator";
import { colors, typography, LOAN_TRANSFER_HEADER } from "@/constants";

export const metadata = {
  title: "Calculate Net Switch Benefits - Loan Balance Transfer Calculator | Finvibes",
  description:
    "Compare your current loan terms against our partner bank transfer offers factoring in one-time switching expenses. See your estimated monthly drop and net interest savings.",
};

export default function LoanTransferPage() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: colors.surface.white,
        minHeight: "85vh",
        pt: { xs: 4, md: 5.5 },
        pb: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        {/* Page Title & Subtitle (No Breadcrumbs per design preference) */}
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
            {LOAN_TRANSFER_HEADER.title}
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
            {LOAN_TRANSFER_HEADER.subtitle}
          </Typography>
        </Box>
      </Container>

      {/* Main Interactive Loan Transfer Calculator */}
      <LoanTransferCalculator />
    </Box>
  );
}

