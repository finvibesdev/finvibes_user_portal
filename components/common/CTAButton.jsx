"use client";

import Button from "@mui/material/Button";
import NextLink from "next/link";
import { colors, typography } from "@/constants";

export default function CTAButton({
  label,
  children,
  href,
  icon,
  startIcon,
  variant = "contained",
  borderRadius = "11px",
  sx = {},
  ...props
}) {
  const isOutlined = variant === "outlined";

  return (
    <Button
      component={href ? NextLink : "button"}
      href={href}
      variant={variant}
      startIcon={startIcon}
      endIcon={icon}
      sx={{
        borderRadius: borderRadius,
        textTransform: "none",
        fontFamily: typography.fontFamily,
        fontWeight: typography.fontWeights.semibold,
        fontSize: typography.fontSizes.base,
        px: 2.6,
        py: 0.85,
        whiteSpace: "nowrap",
        letterSpacing: "0.1px",
        transition: "all 0.2s ease-in-out",
        "& .MuiButton-endIcon": {
          marginLeft: "-1px",
          marginRight: "-3px",
        },
        ...(isOutlined
          ? {
              color: colors.brand.primary,
              borderColor: colors.brand.primary,
              "&:hover": {
                borderColor: colors.brand.primaryHover,
                backgroundColor: "rgba(11, 99, 229, 0.04)",
              },
            }
          : {
              backgroundColor: colors.brand.primary,
              color: colors.text.white,
              boxShadow: "0 2px 8px rgba(11, 99, 229, 0.32)",
              "&:hover": {
                backgroundColor: colors.brand.primaryHover,
                boxShadow: "0 4px 14px rgba(11, 99, 229, 0.45)",
              },
            }),
        ...sx,
      }}
      {...props}
    >
      {children ? children : label}
    </Button>
  );
}
