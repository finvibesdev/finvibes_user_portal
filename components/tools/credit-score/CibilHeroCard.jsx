"use client";

import { Box, Typography, Grid } from "@mui/material";
import {
  Check,
  LockOutlined,
  BoltOutlined,
  BarChartOutlined,
} from "@mui/icons-material";
import { colors, typography, CREDIT_HERO_DATA } from "@/constants";

const getPillIcon = (label = "") => {
  if (label.includes("Secure")) return <LockOutlined sx={{ fontSize: 13 }} />;
  if (label.includes("Instant")) return <BoltOutlined sx={{ fontSize: 13 }} />;
  if (label.includes("Offers")) return <BarChartOutlined sx={{ fontSize: 13 }} />;
  return <Check sx={{ fontSize: 13 }} />;
};

export default function CibilHeroCard() {
  return (
    <Box
      sx={{
        backgroundColor: colors.brand.primary,
        backgroundImage:
          "linear-gradient(135deg, #0947ba 0%, #0b63e5 60%, #1774f7 100%)",
        borderRadius: "20px",
        p: { xs: 3, sm: 3.5 },
        color: colors.text.white,
        boxShadow: "0 8px 30px rgba(11, 99, 229, 0.18)",
        mb: 2.5,
      }}
    >
      {/* Top Pill Badge */}
      <Box
        sx={{
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(6px)",
          color: colors.text.white,
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.8px",
          px: 1.5,
          py: 0.45,
          borderRadius: "50px",
          textTransform: "uppercase",
          mb: 1.8,
        }}
      >
        {CREDIT_HERO_DATA.badge}
      </Box>

      {/* Headline */}
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: { xs: "22px", sm: "26px" },
          fontWeight: 800,
          lineHeight: 1.25,
          color: colors.text.white,
          mb: 1,
        }}
      >
        {CREDIT_HERO_DATA.title}
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: typography.fontFamily,
          fontSize: "13.5px",
          color: "rgba(255, 255, 255, 0.85)",
          lineHeight: 1.5,
          mb: 2.2,
          maxWidth: 480,
        }}
      >
        {CREDIT_HERO_DATA.subtitle}
      </Typography>

      {/* Trust Pills */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
        }}
      >
        {CREDIT_HERO_DATA.trustPills.map((pill, idx) => {
          const label = typeof pill === "string" ? pill : pill.label;
          const icon = typeof pill === "object" && pill.icon ? pill.icon : getPillIcon(label);

          return (
            <Box
              key={idx}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                px: 1.4,
                py: 0.45,
                borderRadius: "50px",
                fontSize: "11.5px",
                fontWeight: 600,
                color: colors.text.white,
              }}
            >
              {icon}
              <Typography
                component="span"
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: "11.5px",
                  fontWeight: 600,
                  color: colors.text.white,
                }}
              >
                {label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Embedded White Card with Score & Factors */}
      <Box
        sx={{
          backgroundColor: colors.surface.white,
          borderRadius: "16px",
          p: { xs: 2.5, sm: 3 },
          color: colors.text.primary,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Card Header Row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 2,
            borderBottom: "1px solid #f1f5f9",
            mb: 2.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: "11.5px",
              fontWeight: 800,
              letterSpacing: "0.8px",
              color: colors.text.secondary,
              textTransform: "uppercase",
            }}
          >
            {CREDIT_HERO_DATA.cibilBoxTitle ? CREDIT_HERO_DATA.cibilBoxTitle : "CIBIL SCORE SUMMARY"}
          </Typography>

          <Box
            sx={{
              backgroundColor: "#ecfdf5",
              color: "#059669",
              fontSize: "11px",
              fontWeight: 700,
              px: 1.2,
              py: 0.35,
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            {CREDIT_HERO_DATA.updatedTag}
          </Box>
        </Box>

        {/* Center Display: 782 and Good/Prime Score */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 1,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: typography.fontFamily,
              fontSize: { xs: "48px", sm: "54px" },
              fontWeight: 900,
              color: colors.text.primary,
              letterSpacing: "-1px",
              lineHeight: 1,
              mb: 1,
            }}
          >
            {CREDIT_HERO_DATA.score}
          </Typography>

          <Box
            sx={{
              backgroundColor: "#e8f8f0",
              color: "#0e8a4a",
              fontSize: "12px",
              fontWeight: 700,
              px: 1.6,
              py: 0.4,
              borderRadius: "50px",
            }}
          >
            ★ {CREDIT_HERO_DATA.status}
          </Box>
        </Box>

        {/* 2x2 Factor Checkmarks */}
        <Box
          sx={{
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            p: 1.6,
            border: "1px solid #f1f5f9",
          }}
        >
          <Grid container spacing={1.2}>
            {CREDIT_HERO_DATA.factors.map((factor, idx) => (
              <Grid key={idx} size={{ xs: 6 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                  <Check sx={{ fontSize: 14, color: "#10b981", strokeWidth: 2 }} />
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: colors.text.primary,
                    }}
                  >
                    {factor}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
