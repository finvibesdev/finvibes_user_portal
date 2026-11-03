"use client";

import { Box, Grid, Typography, ButtonBase } from "@mui/material";
import { colors, typography } from "@/constants";

const GENDER_OPTIONS = [
  { id: "male", label: "Male" },
  { id: "female", label: "Female" },
];

export default function GenderSelector({
  label = "Gender",
  value = "male",
  onChange,
}) {
  return (
    <Box sx={{ width: "100%" }}>
      {label && (
        <Typography
          sx={{
            fontFamily: typography.fontFamily,
            fontSize: "13px",
            fontWeight: 600,
            color: colors.text.secondary,
            mb: 0.8,
          }}
        >
          {label}
        </Typography>
      )}

      <Grid container spacing={1.5}>
        {GENDER_OPTIONS.map((opt) => {
          const isSelected = value === opt.id;

          return (
            <Grid key={opt.id} size={{ xs: 6 }}>
              <ButtonBase
                onClick={() => onChange?.(opt.id)}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.2,
                  py: 1.3,
                  px: 2,
                  borderRadius: "10px",
                  backgroundColor: isSelected
                    ? "#f0f6ff"
                    : colors.surface.white,
                  border: "1.5px solid",
                  borderColor: isSelected
                    ? colors.brand.primary
                    : "#e2e8f0",
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    borderColor: isSelected
                      ? colors.brand.primary
                      : colors.brand.primaryLight,
                    backgroundColor: isSelected ? "#ebf3fe" : "#fafcff",
                  },
                }}
              >
                {/* Radio Circle Icon */}
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: isSelected
                      ? colors.brand.primary
                      : "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isSelected && (
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: colors.brand.primary,
                      }}
                    />
                  )}
                </Box>

                <Typography
                  sx={{
                    fontFamily: typography.fontFamily,
                    fontSize: "14.5px",
                    fontWeight: isSelected ? 700 : 600,
                    color: isSelected
                      ? colors.brand.primary
                      : colors.text.primary,
                  }}
                >
                  {opt.label}
                </Typography>
              </ButtonBase>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

