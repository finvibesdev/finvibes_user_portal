"use client";

import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import {
  NorthEast,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import NavLink from "@/components/common/NavLink";
import NavDropdown from "@/components/common/NavDropdown";
import CTAButton from "@/components/common/CTAButton";
import logoImg from "@/assets/finvibes-logo.jpg";
import {
  colors,
  typography,
  NAV_LINKS,
  PRODUCT_ITEMS,
  SMART_TOOLS_ITEMS,
  CONTACT_INFO,
} from "@/constants";

export default function MainNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsCollapse, setProductsCollapse] = useState(false);
  const [toolsCollapse, setToolsCollapse] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleProductsToggle = () => {
    setProductsCollapse((prev) => !prev);
  };

  const handleToolsToggle = () => {
    setToolsCollapse((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
    setProductsCollapse(false);
    setToolsCollapse(false);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: colors.surface.white,
        color: colors.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: { xs: 60, md: 84 },
            py: { xs: 1, md: 2.2 },
          }}
        >
          {/* Left — Logo */}
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
              py: 0.5,
            }}
          >
            <Image
              src={logoImg}
              alt="Finvibes - Money matters"
              height={44}
              width={Math.round(44 * (1374 / 317))}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "auto",
                maxHeight: "44px",
                display: "block",
              }}
              priority
            />
          </Box>

          {/* Center — Desktop Navigation Links (hidden on mobile/tablet) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: { md: 1, lg: 2 },
              flexGrow: 1,
              px: { md: 1, lg: 3 },
            }}
          >
            {NAV_LINKS.slice(0, 1).map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}

            <NavDropdown label="Products" items={PRODUCT_ITEMS} />

            <NavDropdown label="Smart Tools" items={SMART_TOOLS_ITEMS} />

            {NAV_LINKS.slice(1).map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </Box>

          {/* Right — Desktop CTA Button */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              flexShrink: 0,
            }}
          >
            <CTAButton
              label="Get Started"
              href="/demo"
              icon={<NorthEast sx={{ fontSize: "16px" }} />}
            />
          </Box>

          {/* Mobile — Hamburger Menu Icon */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "primary.main",
              p: 1,
              ml: 1,
            }}
            aria-label="Toggle navigation menu"
          >
            <MenuIcon sx={{ fontSize: "28px" }} />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "82%", sm: 340 },
            maxWidth: 380,
            p: 2.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          {/* Drawer Top Header: Logo + Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box
              component={NextLink}
              href="/"
              onClick={handleDrawerClose}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src={logoImg}
                alt="Finvibes"
                height={36}
                width={Math.round(36 * (1374 / 317))}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  maxHeight: "36px",
                  display: "block",
                }}
              />
            </Box>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ color: colors.text.primary }}
              aria-label="Close menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2, borderColor: colors.border.light }} />

          {/* Drawer Links List */}
          <List disablePadding>
            {/* Home */}
            <ListItem disablePadding>
              <ListItemButton
                component={NextLink}
                href="/"
                onClick={handleDrawerClose}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    fontWeight: typography.fontWeights.semibold,
                    fontSize: typography.fontSizes.base,
                    color: colors.text.primary,
                  }}
                />
              </ListItemButton>
            </ListItem>

            {/* Products Accordion */}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleProductsToggle}
                sx={{
                  borderRadius: "8px",
                  py: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText
                  primary="Products"
                  primaryTypographyProps={{
                    fontWeight: typography.fontWeights.semibold,
                    fontSize: typography.fontSizes.base,
                    color: colors.text.primary,
                  }}
                />
                {productsCollapse ? (
                  <ExpandLess sx={{ color: "primary.main" }} />
                ) : (
                  <ExpandMore sx={{ color: colors.text.secondary }} />
                )}
              </ListItemButton>

              <Collapse in={productsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 1 }}>
                  {PRODUCT_ITEMS.map((item) => (
                    <ListItemButton
                      key={item.href}
                      component={NextLink}
                      href={item.href}
                      onClick={handleDrawerClose}
                      sx={{
                        borderRadius: "6px",
                        padding: "9px 10px",
                        "&:hover": {
                          backgroundColor: colors.surface.hoverLight,
                          color: "primary.main",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: "inherit",
                          fontSize: typography.fontSizes.sm,
                          fontWeight: typography.fontWeights.medium,
                          color: colors.text.primary,
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </ListItem>

            {/* Smart Tools Accordion */}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={handleToolsToggle}
                sx={{
                  borderRadius: "8px",
                  py: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText
                  primary="Smart Tools"
                  primaryTypographyProps={{
                    fontWeight: typography.fontWeights.semibold,
                    fontSize: typography.fontSizes.base,
                    color: colors.text.primary,
                  }}
                />
                {toolsCollapse ? (
                  <ExpandLess sx={{ color: "primary.main" }} />
                ) : (
                  <ExpandMore sx={{ color: colors.text.secondary }} />
                )}
              </ListItemButton>

              <Collapse in={toolsCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 1 }}>
                  {SMART_TOOLS_ITEMS.map((item) => (
                    <ListItemButton
                      key={item.href}
                      component={NextLink}
                      href={item.href}
                      onClick={handleDrawerClose}
                      sx={{
                        borderRadius: "6px",
                        padding: "9px 10px",
                        "&:hover": {
                          backgroundColor: colors.surface.hoverLight,
                          color: "primary.main",
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: "inherit",
                          fontSize: typography.fontSizes.sm,
                          fontWeight: typography.fontWeights.medium,
                          color: colors.text.primary,
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </ListItem>

            {/* Remaining Links */}
            {NAV_LINKS.slice(1).map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={NextLink}
                  href={link.href}
                  onClick={handleDrawerClose}
                  sx={{ borderRadius: "8px", py: 1 }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: typography.fontWeights.semibold,
                      fontSize: typography.fontSizes.base,
                      color: colors.text.primary,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Drawer Bottom Section */}
        <Box sx={{ mt: 3 }}>
          <Divider sx={{ mb: 2.5, borderColor: colors.border.light }} />

          {/* Full-width CTA Button inside Drawer */}
          <CTAButton
            label="Get Started"
            href="/demo"
            icon={<NorthEast sx={{ fontSize: "16px" }} />}
            sx={{ width: "100%", justifyContent: "center", py: 1.2 }}
          />

          {/* Contact Details in Drawer */}
          <Box sx={{ mt: 2.5, textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                color: colors.text.secondary,
                mb: 0.5,
              }}
            >
              {CONTACT_INFO.email}
            </Typography>
            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                color: colors.text.secondary,
              }}
            >
              {CONTACT_INFO.workingHours}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
