"use client";

import { Box, Typography } from "@mui/material";
import { colors, typography } from "@/constants";

export default function CalculatorInputCard({
  icon,
  title,
  subtitle,
  badge,
  children,
  sx = {},
}) {
  return (
    <Box
      sx={{
        backgroundColor: colors.surface.white,
        borderRadius: "16px",
        p: { xs: 2.5, sm: 3 },
        border: "1px solid #e2e8f0",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
        ...sx,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.5,
          mb: 2.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {icon && (
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                backgroundColor: "rgba(11, 99, 229, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.brand.primary,
              }}
            >
              {icon}
            </Box>
          )}
          <Box>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.bold,
                color: colors.text.primary,
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                sx={{
                  fontFamily: typography.fontFamily,
                  fontSize: typography.fontSizes.sm,
                  color: colors.text.secondary,
                  mt: 0.3,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Optional Right Badge (e.g. FOIR: 60%) */}
        {badge && (
          <Box
            sx={{
              backgroundColor: "#f1f5f9",
              color: colors.text.secondary,
              fontSize: "12px",
              fontWeight: 700,
              px: 1.6,
              py: 0.5,
              borderRadius: "50px",
              letterSpacing: "0.3px",
              whiteSpace: "nowrap",
            }}
          >
            {badge}
          </Box>
        )}
      </Box>

      {/* Card Content */}
      {children}
    </Box>
  );
}

