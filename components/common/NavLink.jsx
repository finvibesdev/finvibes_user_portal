"use client";

import NextLink from "next/link";
import { Typography, Box } from "@mui/material";
import { colors, typography } from "@/constants";

export default function NavLink({ href, label, isActive = false, sx = {} }) {
  return (
    <Box
      component={NextLink}
      href={href}
      sx={{
        position: "relative",
        textDecoration: "none",
        px: 1.5,
        py: 1,
        display: "flex",
        alignItems: "center",
        "&:hover .nav-link-text": {
          color: "primary.main",
        },
        "&:hover::after": {
          transform: "scaleX(1)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "60%",
          height: "2px",
          backgroundColor: "primary.main",
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 0.25s ease",
          translate: "-50%",
        },
        ...sx,
      }}
    >
      <Typography
        className="nav-link-text"
        sx={{
          fontFamily: "inherit",
          fontSize: typography.fontSizes.base,
          fontWeight: typography.fontWeights.bold,
          color: isActive ? "primary.main" : colors.text.primary,
          transition: "color 0.2s ease",
          whiteSpace: "nowrap",
          letterSpacing: "-0.1px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
