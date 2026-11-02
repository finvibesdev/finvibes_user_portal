"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { FEATURE_CARDS, colors, typography } from "@/constants";

export default function FeatureCards() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.surface.white,
        py: { xs: 4, sm: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {FEATURE_CARDS.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  backgroundColor: colors.surface.featureCard,
                  borderRadius: "16px",
                  p: { xs: 2.8, md: 3.2 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${colors.border.light}`,
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 24px rgba(11, 99, 229, 0.08)",
                    borderColor: "rgba(11, 99, 229, 0.2)",
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: {
                      xs: typography.fontSizes.body,
                      md: typography.fontSizes.lg,
                    },
                    fontWeight: typography.fontWeights.bold,
                    color: colors.text.primary,
                    lineHeight: 1.35,
                    mb: 1.2,
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: typography.fontSizes.md,
                    fontWeight: typography.fontWeights.regular,
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

