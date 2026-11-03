"use client";

import { Box, Typography } from "@mui/material";
import { colors, typography, CREDIT_INFO_CARDS } from "@/constants";

export default function CreditInfoCards() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
      {CREDIT_INFO_CARDS.map((item) => (
        <Box
          key={item.id}
          sx={{
            backgroundColor: colors.surface.white,
            borderRadius: "14px",
            p: { xs: 2, sm: 2.2 },
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
            display: "flex",
            alignItems: "center",
            gap: 2,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              borderColor: colors.brand.primaryLight,
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(11, 99, 229, 0.06)",
            },
          }}
        >
          {/* Icon Badge */}
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: "10px",
              backgroundColor: item.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {item.icon}
          </Box>

          {/* Texts */}
          <Box>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "14.5px",
                fontWeight: 700,
                color: colors.text.primary,
                mb: 0.3,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: typography.fontFamily,
                fontSize: "12.5px",
                color: colors.text.secondary,
                lineHeight: 1.4,
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
