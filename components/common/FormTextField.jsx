"use client";

import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import { colors, typography } from "@/constants";

export default function FormTextField({
  label,
  required = false,
  placeholder = "",
  value = "",
  onChange,
  type = "text",
  uppercase = false,
  fullWidth = true,
  helperText,
  error = false,
  startAdornment,
  endAdornment,
  maxLength,
  sx = {},
  ...props
}) {
  const handleChange = (e) => {
    if (uppercase && e?.target?.value) {
      e.target.value = e.target.value.toUpperCase();
    }
    if (onChange) {
      onChange(e);
    }
  };

  const renderStartAdornment = startAdornment ? (
    <InputAdornment position="start">
      {typeof startAdornment === "string" ? (
        <Typography
          sx={{
            fontSize: "13.5px",
            fontWeight: 600,
            color: colors.text.secondary,
            mr: 0.5,
          }}
        >
          {startAdornment}
        </Typography>
      ) : (
        startAdornment
      )}
    </InputAdornment>
  ) : undefined;

  const renderEndAdornment = endAdornment ? (
    <InputAdornment position="end">
      {typeof endAdornment === "string" ? (
        <Typography
          sx={{
            fontSize: "13.5px",
            fontWeight: 600,
            color: colors.text.secondary,
          }}
        >
          {endAdornment}
        </Typography>
      ) : (
        endAdornment
      )}
    </InputAdornment>
  ) : undefined;

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
          {required && (
            <Box
              component="span"
              sx={{ color: "#ef4444", ml: 0.4, fontWeight: 700 }}
            >
              *
            </Box>
          )}
        </Typography>
      )}

      <TextField
        fullWidth={fullWidth}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        error={error}
        helperText={helperText}
        slotProps={{
          input: {
            startAdornment: renderStartAdornment,
            endAdornment: renderEndAdornment,
          },
          htmlInput: maxLength ? { maxLength } : undefined,
        }}
        sx={{
          mb: 0,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            fontSize: "14.5px",
            fontWeight: 600,
            backgroundColor: colors.surface.white,
            "& fieldset": { borderColor: "#e2e8f0" },
            "&:hover fieldset": { borderColor: colors.brand.primary },
            "&.Mui-focused fieldset": {
              borderColor: colors.brand.primary,
            },
            "&.Mui-error fieldset": {
              borderColor: "#ef4444",
            },
            "&.Mui-error:hover fieldset": {
              borderColor: "#ef4444",
            },
            "&.Mui-error.Mui-focused fieldset": {
              borderColor: "#ef4444",
            },
            "& .MuiFormHelperText-root.Mui-error": {
              color: "#ef4444",
              fontSize: "12px",
              fontWeight: 500,
              mt: 0.5,
              ml: 0.2,
            },
            "& input::placeholder": {
              color: "#94a3b8",
              opacity: 1,
              fontWeight: 500,
              fontSize: "14px",
            },
          },
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
}
