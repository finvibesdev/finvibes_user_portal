"use client";

import { Container, Grid } from "@mui/material";
import CibilHeroCard from "./CibilHeroCard";
import CreditInfoCards from "./CreditInfoCards";
import CreditReportForm from "./CreditReportForm";

export default function CreditScoreGuide() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 3 } }}>
      <Grid container spacing={{ xs: 4, md: 4.5 }}>
        {/* Left Column: CIBIL Assessment Hero & 4 Knowledge Cards */}
        <Grid size={{ xs: 12, md: 6.8 }}>
          <CibilHeroCard />
          <CreditInfoCards />
        </Grid>

        {/* Right Column: Check Your Free Credit Score Form */}
        <Grid size={{ xs: 12, md: 5.2 }}>
          <CreditReportForm />
        </Grid>
      </Grid>
    </Container>
  );
}

