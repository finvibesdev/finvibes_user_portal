"use client";

import { useState, useRef } from "react";
import NextLink from "next/link";
import { Typography, Box, Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { colors, typography } from "@/constants";

export default function NavDropdown({
  label,
  items = [],
  sx = {},
  triggerSx = {},
  paperSx = {},
  fullWidth = false,
  triggerType = "hover",
  disableHover = false,
  onSelect,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);
  const open = Boolean(anchorEl);

  const handleOpen = () => {
    if (triggerType === "click") return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (triggerRef.current) {
      setAnchorEl(triggerRef.current);
    }
  };

  const handleClose = () => {
    if (triggerType === "click") return;
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const handleImmediateClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    if (open) {
      handleImmediateClose();
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setAnchorEl(e.currentTarget);
    }
  };

  const activeColor = disableHover
    ? colors.text.primary
    : (open ? "primary.main" : colors.text.primary);

  return (
    <Box
      ref={triggerRef}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      sx={{
        position: "relative",
        width: fullWidth ? "100%" : "auto",
        ...sx,
      }}
    >
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: fullWidth ? "space-between" : "flex-start",
          cursor: "pointer",
          px: 1.5,
          "&:hover .nav-dropdown-text": disableHover
            ? {}
            : { color: "primary.main" },
          "&:hover .nav-dropdown-icon": disableHover
            ? {}
            : { color: "primary.main" },
          ...triggerSx,
        }}
      >
        <Typography
          className="nav-dropdown-text"
          sx={{
            fontFamily: "inherit",
            fontSize: typography.fontSizes.base,
            fontWeight: typography.fontWeights.bold,
            color: activeColor,
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
            color: activeColor,
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
              if (triggerType === "click") return;
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            },
            onMouseLeave: handleClose,
            sx: {
              mt: 0.8,
              minWidth: fullWidth && anchorEl ? anchorEl.offsetWidth : 190,
              borderRadius: "8px",
              boxShadow: "0 6px 24px rgba(24, 37, 59, 0.12)",
              border: `1px solid ${colors.border.light}`,
              py: 0.5,
              pointerEvents: "auto",
              ...paperSx,
            },
          },
        }}
        sx={{
          pointerEvents: "none",
        }}
      >
        {items.map((item, index) => {
          const itemKey = item.href ? item.href : (item.value !== undefined ? item.value : index);
          if (item.href) {
            return (
              <MenuItem
                key={itemKey}
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
                  "&:hover": disableHover
                    ? {}
                    : {
                        backgroundColor: "rgba(11, 99, 229, 0.08)",
                        color: "primary.main",
                      },
                }}
              >
                {item.label}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={itemKey}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else if (onSelect) {
                  onSelect(item.value);
                }
                handleImmediateClose();
              }}
              selected={Boolean(item.selected)}
              sx={{
                fontFamily: "inherit",
                fontSize: typography.fontSizes.sm,
                fontWeight: item.selected ? 700 : typography.fontWeights.medium,
                color: item.selected ? colors.brand.primary : colors.text.primary,
                backgroundColor: item.selected ? "#f0f6ff" : "transparent",
                padding: "9px 16px",
                lineHeight: 1.5,
                "&:hover": disableHover
                  ? {
                      backgroundColor: item.selected ? "#f0f6ff" : "transparent",
                      color: item.selected ? colors.brand.primary : colors.text.primary,
                    }
                  : {
                      backgroundColor: "rgba(11, 99, 229, 0.08)",
                      color: "primary.main",
                    },
              }}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
