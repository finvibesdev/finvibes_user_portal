"use client";

import { Typography, Link, Box } from "@mui/material";
import { typography } from "@/constants";

export default function InfoBarItem({ icon, text, href, sx = {} }) {
  const content = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        ...sx,
      }}
    >
      {icon && (
        <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
          {icon}
        </Box>
      )}
      <Typography
        variant="body2"
        sx={{
          fontFamily: "inherit",
          fontSize: typography.fontSizes.sm,
          color: "inherit",
          lineHeight: 1.4,
          fontWeight: typography.fontWeights.regular,
          letterSpacing: "0.2px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );

  if (href) {
    return (
      <Link
        href={href}
        underline="none"
        sx={{ color: "inherit", "&:hover": { opacity: 0.85 } }}
      >
        {content}
      </Link>
    );
  }

  return content;
}
