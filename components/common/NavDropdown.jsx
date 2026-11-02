"use client";

import { useState, useRef } from "react";
import NextLink from "next/link";
import { Typography, Box, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function NavDropdown({ label, items = [], sx = {} }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);
  const open = Boolean(anchorEl);

  const handleOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (triggerRef.current) {
      setAnchorEl(triggerRef.current);
    }
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const handleImmediateClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(null);
  };

  return (
    <Box
      ref={triggerRef}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      sx={{ position: "relative", ...sx }}
    >
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          px: 1.5,
          "&:hover .nav-dropdown-text": {
            color: "primary.main",
          },
          "&:hover .nav-dropdown-icon": {
            color: "primary.main",
          },
        }}
      >
        <Typography
          className="nav-dropdown-text"
          sx={{
            fontFamily: "inherit",
            fontSize: typography.fontSizes.base,
            fontWeight: typography.fontWeights.bold,
            color: open ? "primary.main" : colors.text.primary,
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
            letterSpacing: "-0.1px",
          }}
        >
          {label}
        </Typography>
        <ArrowDropDown
          className="nav-dropdown-icon"
          sx={{
            fontSize: "20px",
            color: open ? "primary.main" : colors.text.primary,
            transition: "transform 0.2s ease, color 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleImmediateClose}
        disableScrollLock
        autoFocus={false}
        disableAutoFocusItem
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        slotProps={{
          paper: {
            onMouseEnter: () => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            },
            onMouseLeave: handleClose,
            sx: {
              mt: 0.8,
              minWidth: 190,
              borderRadius: "8px",
              boxShadow: "0 6px 24px rgba(24, 37, 59, 0.12)",
              border: `1px solid ${colors.border.light}`,
              py: 0.5,
              pointerEvents: "auto",
            },
          },
        }}
        sx={{
          pointerEvents: "none",
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.href}
            component={NextLink}
            href={item.href}
            onClick={handleImmediateClose}
            sx={{
              fontFamily: "inherit",
              fontSize: typography.fontSizes.sm,
              fontWeight: typography.fontWeights.medium,
              color: colors.text.primary,
              padding: "9px 10px",
              lineHeight: 1.5,
              "&:hover": {
                backgroundColor: "rgba(11, 99, 229, 0.08)",
                color: "primary.main",
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
