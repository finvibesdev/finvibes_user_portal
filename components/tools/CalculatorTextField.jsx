"use client";

import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import { colors, typography } from "@/constants";

export default function CalculatorTextField({
  label,
  placeholder,
  value,
  onChange,
  startAdornment,
  endAdornment,
  fullWidth = true,
  sx = {},
  inputProps,
  ...props
}) {
  return (
    <Box sx={{ width: fullWidth ? "100%" : "auto" }}>
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

      <TextField
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
        slotProps={{
          input: {
            startAdornment: startAdornment ? (
              <InputAdornment position="start">
                {typeof startAdornment === "string" ? (
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: colors.text.primary,
                    }}
                  >
                    {startAdornment}
                  </Typography>
                ) : (
                  startAdornment
                )}
              </InputAdornment>
            ) : undefined,
            endAdornment: endAdornment ? (
              <InputAdornment position="end">
                {typeof endAdornment === "string" ? (
                  <Typography
                    sx={{
                      fontSize: endAdornment === "%" ? "15px" : "11px",
                      fontWeight: 700,
                      color: colors.text.secondary,
                      letterSpacing:
                        endAdornment === "%" ? "normal" : "0.5px",
                    }}
                  >
                    {endAdornment}
                  </Typography>
                ) : (
                  endAdornment
                )}
              </InputAdornment>
            ) : undefined,
          },
          htmlInput: {
            step: "any",
            ...(inputProps ? inputProps : {}),
          },
        }}
        sx={{
          mb: 0,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            fontSize: "15.5px",
            fontWeight: 700,
            backgroundColor: "#f8fafc",
            "& fieldset": { borderColor: "#e2e8f0" },
            "&:hover fieldset": { borderColor: colors.brand.primary },
            "&.Mui-focused fieldset": {
              borderColor: colors.brand.primary,
            },
            "& input::placeholder": {
              color: "#94a3b8",
              opacity: 1,
              fontWeight: 500,
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
              WebkitAppearance: "none",
              margin: 0,
            },
          },
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
}

