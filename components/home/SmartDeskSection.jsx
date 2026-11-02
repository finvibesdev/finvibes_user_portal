"use client";

import NextLink from "next/link";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import {
  CurrencyRupee,
  Check,
  SwapHoriz,
  Search,
  Article,
  AccountBalance,
  AccessTime,
  CreditCard,
  East,
} from "@mui/icons-material";
import {
  SMART_DESK_TOOLS,
  SMART_DESK_HEADER,
  SMART_DESK_FOOTER,
  colors,
  typography,
} from "@/constants";

const TOOL_ICONS = {
  emi: <CurrencyRupee sx={{ fontSize: 18, color: colors.brand.primary }} />,
  eligibility: (
    <Check sx={{ fontSize: 18, color: colors.brand.primary, fontWeight: 800 }} />
  ),
  transfer: <SwapHoriz sx={{ fontSize: 20, color: colors.brand.primary }} />,
  compare: <Search sx={{ fontSize: 18, color: colors.brand.primary }} />,
  "capital-gains": <Article sx={{ fontSize: 18, color: colors.brand.primary }} />,
  "bank-statement": (
    <AccountBalance sx={{ fontSize: 18, color: colors.brand.primary }} />
  ),
  "credit-health": (
    <AccessTime sx={{ fontSize: 18, color: colors.brand.primary }} />
  ),
  "card-finder": (
    <CreditCard sx={{ fontSize: 18, color: colors.brand.primary }} />
  ),
};

export default function SmartDeskSection() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: colors.surface.white,
        pt: { xs: 1, md: 2 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Blue Card Container */}
        <Box
          sx={{
            position: "relative",
            background: colors.brand.smartDeskGradient,
            borderRadius: { xs: "20px", md: "26px" },
            p: { xs: 3, sm: 4.5, md: 5.5 },
            color: colors.text.white,
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(12, 79, 216, 0.22)",
          }}
        >
          {/* Subtle Top-Right Ambient Glow */}
          <Box
            sx={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: 420,
              height: 420,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Section Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              flexDirection: { xs: "column", md: "row" },
              gap: 2.5,
              mb: { xs: 3.5, md: 4.5 },
            }}
          >
            {/* Title & Description */}
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: typography.fontSizes.xs,
                  fontWeight: typography.fontWeights.bold,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: colors.text.whiteMuted,
                  mb: 1,
                }}
              >
                {SMART_DESK_HEADER.eyebrow}
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: {
                    xs: typography.fontSizes["2xl"],
                    sm: typography.fontSizes["3xl"],
                    md: typography.fontSizes["3xl"],
                  },
                  fontWeight: typography.fontWeights.extraBold,
                  color: colors.text.white,
                  letterSpacing: "-0.4px",
                  mb: 1.2,
                }}
              >
                {SMART_DESK_HEADER.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: {
                    xs: typography.fontSizes.md,
                    md: typography.fontSizes.base,
                  },
                  color: colors.text.whiteBody,
                  maxWidth: 580,
                  lineHeight: 1.6,
                }}
              >
                {SMART_DESK_HEADER.subtitle}
              </Typography>
            </Box>

            {/* Top CTA: Explore All Tools */}
            <Button
              component={NextLink}
              href={SMART_DESK_HEADER.ctaHref}
              endIcon={<East sx={{ fontSize: 15 }} />}
              sx={{
                backgroundColor: colors.surface.white,
                color: colors.brand.primary,
                fontSize: typography.fontSizes.md,
                fontWeight: typography.fontWeights.bold,
                textTransform: "none",
                borderRadius: "8px",
                px: 2.4,
                py: 0.9,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
                transition: "all 0.2s ease",
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.18)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {SMART_DESK_HEADER.ctaLabel}
            </Button>
          </Box>

          {/* 8 Tool Cards in 4-Column Grid */}
          <Grid container spacing={{ xs: 2, sm: 2.2, md: 2.5 }}>
            {SMART_DESK_TOOLS.map((tool) => (
              <Grid key={tool.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  component={NextLink}
                  href={tool.href}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textDecoration: "none",
                    backgroundColor: colors.surface.toolCard,
                    border: `1px solid ${colors.border.toolCard}`,
                    borderRadius: "16px",
                    p: { xs: 2.2, md: 2.6 },
                    transition: "all 0.22s ease-in-out",
                    "&:hover": {
                      backgroundColor: colors.surface.toolCardHover,
                      borderColor: colors.border.toolCardHover,
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px rgba(0, 0, 0, 0.14)",
                    },
                  }}
                >
                  {/* Square White Icon Badge */}
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",
                      backgroundColor: colors.surface.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {TOOL_ICONS[tool.id]}
                  </Box>

                  {/* Tool Title */}
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: typography.fontSizes.base,
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.white,
                      mt: 2,
                      mb: 0.8,
                      lineHeight: 1.3,
                    }}
                  >
                    {tool.title}
                  </Typography>

                  {/* Tool Description */}
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: typography.fontSizes.sm,
                      color: colors.text.whiteMuted,
                      lineHeight: 1.55,
                    }}
                  >
                    {tool.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Bottom Guidance Strip */}
          <Box
            sx={{
              mt: { xs: 3.5, md: 4.5 },
              pt: 3,
              borderTop: `1px solid ${colors.border.toolCard}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            {/* Left Info */}
            <Box>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: typography.fontSizes.base,
                  fontWeight: typography.fontWeights.bold,
                  color: colors.text.white,
                  mb: 0.3,
                }}
              >
                {SMART_DESK_FOOTER.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: typography.fontSizes.sm,
                  color: colors.text.whiteBody,
                }}
              >
                {SMART_DESK_FOOTER.subtitle}
              </Typography>
            </Box>

            {/* Right Button: Get Personal Guidance */}
            <Button
              component={NextLink}
              href={SMART_DESK_FOOTER.ctaHref}
              endIcon={<East sx={{ fontSize: 14 }} />}
              sx={{
                backgroundColor: "rgba(13, 94, 204, 0.85)",
                color: colors.text.white,
                border: `1px solid ${colors.border.whiteFaint}`,
                fontSize: typography.fontSizes.md,
                fontWeight: typography.fontWeights.semibold,
                textTransform: "none",
                borderRadius: "8px",
                px: 2.6,
                py: 0.9,
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: colors.brand.buttonBlue,
                  borderColor: colors.border.whiteGhost,
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {SMART_DESK_FOOTER.ctaLabel}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}