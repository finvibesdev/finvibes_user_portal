"use client";

import NextLink from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ArrowDownward, NorthEast, Check } from "@mui/icons-material";
import CTAButton from "@/components/common/CTAButton";
import { HERO_CATEGORIES, colors, typography } from "@/constants";

export default function HeroBanner() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background: colors.brand.heroGradient,
        color: colors.text.white,
        pt: { xs: 7, md: 10 },
        pb: { xs: 8, md: 11 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: "center" }}>
          {/* Left Column: Heading, Paragraph, CTA Buttons & Category Pills */}
          <Grid size={{ xs: 12, md: 7 }}>
            {/* Eyebrow */}
            <Typography
              sx={{
                fontSize: typography.fontSizes.xs,
                fontWeight: typography.fontWeights.bold,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: colors.text.whiteMuted,
                mb: 2,
              }}
            >
              YOUR FINANCIAL LIFE, MADE SIMPLER
            </Typography>

            {/* H1 Main Heading */}
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: typography.fontSizes["3xl"],
                  sm: typography.fontSizes["4xl"],
                  md: typography.fontSizes["5xl"],
                },
                fontWeight: typography.fontWeights.extraBold,
                lineHeight: 1.15,
                color: colors.text.white,
                letterSpacing: "-0.5px",
                mb: 2.5,
              }}
            >
              Make smarter money moves.
              <Box component="span" sx={{ display: "block" }}>
                With Finvibes.
              </Box>
            </Typography>

            {/* Subtitle / Paragraph */}
            <Typography
              sx={{
                fontSize: {
                  xs: typography.fontSizes.base,
                  md: typography.fontSizes.body,
                },
                lineHeight: 1.65,
                color: colors.text.whiteBody,
                maxWidth: 530,
                mb: 4,
              }}
            >
              Explore four essential financial categories, use practical smart
              tools and get guided support to make more informed financial
              decisions — all in one place.
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              {/* Primary: Explore Products */}
              <CTAButton
                label="Explore Products"
                href="/products/loans"
                borderRadius="11px"
                icon={<ArrowDownward sx={{ fontSize: 16 }} />}
                sx={{
                  px: 3.2,
                  py: 1.1,
                  backgroundColor: colors.brand.buttonBlue,
                  border: `1px solid ${colors.border.whiteFaint}`,
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                  "&:hover": {
                    backgroundColor: colors.brand.buttonBlueHover,
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.22)",
                  },
                }}
              />

              {/* Secondary: Try Smart Tools */}
              <CTAButton
                label="Try Smart Tools"
                href="/smart-tools"
                variant="outlined"
                borderRadius="11px"
                icon={<NorthEast sx={{ fontSize: "16px" }} />}
                sx={{
                  px: 3.2,
                  py: 1.1,
                  color: colors.text.white,
                  borderColor: colors.border.whiteGhost,
                  backgroundColor: colors.surface.ghostButton,
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    borderColor: colors.text.white,
                    backgroundColor: colors.surface.ghostButtonHover,
                  },
                }}
              />
            </Box>

            {/* Category Pills Row */}
            <Box
              sx={{
                display: "flex",
                gap: 1.2,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {HERO_CATEGORIES.map((cat) => (
                <Box
                  key={cat.label}
                  component={NextLink}
                  href={cat.href}
                  sx={{
                    display: "inline-block",
                    backgroundColor: colors.surface.white,
                    color: colors.text.primary,
                    fontSize: typography.fontSizes.md,
                    fontWeight: typography.fontWeights.semibold,
                    px: 2.2,
                    py: 0.85,
                    borderRadius: "50px",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.16)",
                      color: colors.brand.primary,
                    },
                  }}
                >
                  {cat.label}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Column: Rotated 3D Smart Card & Floating Badges */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 320, md: 380 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 4, md: 6 },
              }}
            >
              {/* Massive Outer Sweeping Orbital Arc from Top-Left */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 800, md: 1050 },
                  height: { xs: 800, md: 1050 },
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  top: { xs: "-15%", md: "-25%" },
                  left: { xs: "0%", md: "5%" },
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Large Sweeping Orbital Arc from Top-Left */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 620, md: 820 },
                  height: { xs: 620, md: 820 },
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255, 255, 255, 0.12)",
                  top: { xs: "-10%", md: "-18%" },
                  left: { xs: "0%", md: "5%" },
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Card Aura: Soft Radial Glow Disc */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 340, md: 390 },
                  height: { xs: 340, md: 390 },
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 75%)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Medium Concentric Orbit Ring around Card */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 330, md: 370 },
                  height: { xs: 330, md: 370 },
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Tight Concentric Orbit Ring around Card */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 260, md: 285 },
                  height: { xs: 260, md: 285 },
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255, 255, 255, 0.22)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Card Container with Integrated Corner Badges */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 205, sm: 220, md: 232 },
                  height: { xs: 205, sm: 220, md: 232 },
                  zIndex: 2,
                }}
              >
                {/* Main Straight Finvibes Square Card (No Transformation/Tilt) */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1 / 1",
                    backgroundColor: colors.surface.white,
                    borderRadius: "20px",
                    p: { xs: 2.2, md: 2.5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.26)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Top Section: Brand & Microchip */}
                  <Box>
                    {/* Card Header: Brand */}
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: typography.fontWeights.extraBold,
                        color: colors.text.primary,
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        mb: 1.3,
                      }}
                    >
                      FINVIBES
                    </Typography>

                    {/* Golden Microchip Graphic */}
                    <Box
                      sx={{
                        width: 38,
                        height: 27,
                        borderRadius: "5px",
                        background:
                          "linear-gradient(135deg, #e5a93c 0%, #fcd34d 50%, #d97706 100%)",
                        boxShadow: "inset 0 1px 2px rgba(255, 255, 255, 0.5)",
                        position: "relative",
                        border: "1px solid rgba(180, 100, 10, 0.3)",
                        overflow: "hidden",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "50%",
                          height: "100%",
                          left: "25%",
                          borderLeft: "1px solid rgba(0,0,0,0.15)",
                          borderRight: "1px solid rgba(0,0,0,0.15)",
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          height: "50%",
                          width: "100%",
                          top: "25%",
                          borderTop: "1px solid rgba(0,0,0,0.15)",
                          borderBottom: "1px solid rgba(0,0,0,0.15)",
                        },
                      }}
                    />
                  </Box>

                  {/* Bottom Section: Motto & Subtitle */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        color: "#475569",
                        fontWeight: typography.fontWeights.medium,
                        mb: 0.3,
                      }}
                    >
                      Money Matters
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "17px", md: "18.5px" },
                        fontWeight: typography.fontWeights.extraBold,
                        color: colors.text.primary,
                        letterSpacing: "-0.3px",
                        lineHeight: 1.18,
                      }}
                    >
                      Plan with clarity.
                    </Typography>
                  </Box>
                </Box>

                {/* Top Badge: Practical financial tools (overlaps top-right corner) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -12,
                    right: { xs: -18, md: -26 },
                    display: "flex",
                    alignItems: "center",
                    gap: 0.6,
                    backgroundColor: colors.surface.white,
                    borderRadius: "50px",
                    px: 1.5,
                    py: 0.6,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
                    zIndex: 4,
                  }}
                >
                  <Check
                    sx={{
                      fontSize: 14,
                      color: colors.brand.primary,
                      fontWeight: 800,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: typography.fontWeights.semibold,
                      color: colors.text.primary,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Practical financial tools
                  </Typography>
                </Box>

                {/* Bottom Badge: Compare before you apply (overlaps bottom-left corner) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -12,
                    left: { xs: -18, md: -26 },
                    display: "flex",
                    alignItems: "center",
                    gap: 0.6,
                    backgroundColor: colors.surface.white,
                    borderRadius: "50px",
                    px: 1.5,
                    py: 0.6,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
                    zIndex: 4,
                  }}
                >
                  <NorthEast
                    sx={{ fontSize: 13, color: colors.brand.primary }}
                  />
                  <Typography
                    sx={{
                      fontSize: "11px",
                      fontWeight: typography.fontWeights.semibold,
                      color: colors.text.primary,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Compare before you apply
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
