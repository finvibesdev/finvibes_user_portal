"use client";

import NextLink from "next/link";
import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import { East } from "@mui/icons-material";
import { colors, typography, LOAN_ELIGIBILITY_TYPES } from "@/constants";

export default function LoanTypeTabs({ activeTabId, onSelectTab }) {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Top Header Row: Label on left, Compare Rates on right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.8px",
            color: colors.text.secondary,
            textTransform: "uppercase",
          }}
        >
          CHOOSE LOAN TYPE
        </Typography>

        <Box
          component={NextLink}
          href="/compare-loans"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            fontSize: "13px",
            fontWeight: 700,
            color: colors.brand.primary,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              color: colors.brand.primaryHover,
            },
          }}
        >
          Compare Rates <East sx={{ fontSize: 14 }} />
        </Box>
      </Box>

      {/* 4 Category Tabs */}
      <Grid container spacing={{ xs: 1.5, sm: 2.5 }}>
        {LOAN_ELIGIBILITY_TYPES.map((type) => {
          const isActive = activeTabId === type.id;

          return (
            <Grid key={type.id} size={{ xs: 6, sm: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <ButtonBase
                  onClick={() => onSelectTab(type.id)}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: { xs: 2.2, sm: 2.6 },
                    px: 1.5,
                    borderRadius: "16px",
                    backgroundColor: isActive
                      ? "#f0f6ff"
                      : colors.surface.white,
                    border: "1.5px solid",
                    borderColor: isActive ? colors.brand.primary : "#e2e8f0",
                    boxShadow: isActive
                      ? "0 4px 14px rgba(11, 99, 229, 0.12)"
                      : "0 2px 6px rgba(0, 0, 0, 0.02)",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      borderColor: isActive
                        ? colors.brand.primary
                        : colors.brand.primaryLight,
                      backgroundColor: isActive ? "#ebf3fe" : "#fafcff",
                    },
                  }}
                >
                  {/* Icon Badge from constants.js */}
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: type.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1.2,
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {type.icon}
                  </Box>

                  {/* Label from constants.js */}
                  <Typography
                    sx={{
                      fontFamily: typography.fontFamily,
                      fontSize: "14px",
                      fontWeight: isActive ? 700 : 600,
                      color: isActive
                        ? colors.brand.primary
                        : colors.text.primary,
                      textAlign: "center",
                    }}
                  >
                    {type.label}
                  </Typography>
                </ButtonBase>

                {/* Active Indicator Dot */}
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: isActive
                      ? colors.brand.primary
                      : "transparent",
                    mt: 0.8,
                    transition: "background-color 0.2s ease",
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
