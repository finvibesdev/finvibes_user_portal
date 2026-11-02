"use client";

import { Box, Container } from "@mui/material";
import InfoBarItem from "@/components/common/InfoBarItem";
import { colors, COMPANY_NAME, CONTACT_INFO } from "@/constants";

export default function TopInfoBar() {
  return (
    <Box
      sx={{
        backgroundColor: colors.navy.deep,
        color: colors.text.white,
        minHeight: { xs: "auto", md: 44 },
        py: { xs: 0.8, md: 1.2 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 0.5, md: 1 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left — Company name */}
        <InfoBarItem
          text={COMPANY_NAME}
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        />

        {/* Right — Contact info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.5 },
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <InfoBarItem
            text={CONTACT_INFO.email}
            href={`mailto:${CONTACT_INFO.email}`}
          />
          <Box
            component="span"
            sx={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "12px",
              display: { xs: "none", sm: "inline" },
            }}
          >
            ·
          </Box>
          <InfoBarItem
            text={CONTACT_INFO.workingHours}
            sx={{ display: { xs: "none", sm: "flex" } }}
          />
        </Box>
      </Container>
    </Box>
  );
}
