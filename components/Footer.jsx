"use client";

import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import logoImg from "@/assets/finvibes-logo.jpg";
import {
  colors,
  typography,
  FOOTER_PRODUCT_LINKS as PRODUCT_LINKS,
  TOOLS_LINKS,
  SOCIAL_LINKS,
  LEGAL_LINKS,
  CONTACT_INFO,
  DISCLAIMER_TEXT,
  COMPANY_NAME,
} from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.navy.dark,
        color: colors.text.white,
        pt: { xs: 4, md: 5 },
        pb: { xs: 2.5, md: 3 },
        fontFamily: "inherit",
      }}
    >
      <Container maxWidth="lg">
        {/* Main 4-Column Grid */}
        <Grid container spacing={{ xs: 3, md: 3.5 }}>
          {/* Column 1: Brand Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            {/* Logo on white container for contrast */}
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "inline-block",
                backgroundColor: colors.surface.white,
                px: 1.8,
                py: 0.6,
                borderRadius: "6px",
                mb: 1.5,
                textDecoration: "none",
              }}
            >
              <Image
                src={logoImg}
                alt="Finvibes - Money matters"
                height={34}
                width={Math.round(34 * (1374 / 317))}
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "32px",
                  display: "block",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                lineHeight: 1.5,
                color: colors.text.whiteMuted,
                mb: 0.8,
              }}
            >
              More Possibilities. More Financial Freedom.
            </Typography>

            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                lineHeight: 1.5,
                color: colors.text.whiteSubtle,
                mb: 1.2,
              }}
            >
              Thoughtful guidance for loans and financial services.
            </Typography>

            <Typography
              sx={{
                fontSize: typography.fontSizes.sm,
                fontWeight: typography.fontWeights.bold,
                color: colors.text.white,
                mb: 1.8,
              }}
            >
              Money Matters.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {SOCIAL_LINKS.map((s) => (
                <IconButton
                  key={s.name}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  size="small"
                  sx={{
                    color: colors.text.white,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    p: 0.7,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      borderColor: "primary.main",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Column 2: Products */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.bold,
                color: colors.text.white,
                mb: 1.8,
                letterSpacing: "-0.2px",
              }}
            >
              Products
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
              {PRODUCT_LINKS.map((item) => (
                <Link
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  underline="none"
                  sx={{
                    fontSize: "13px",
                    color: colors.text.whiteMuted,
                    transition: "all 0.2s ease",
                    width: "fit-content",
                    "&:hover": {
                      color: colors.text.white,
                      transform: "translateX(3px)",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Smart Tools & More */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.bold,
                color: colors.text.white,
                mb: 1.8,
                letterSpacing: "-0.2px",
              }}
            >
              Smart Tools & More
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
              {TOOLS_LINKS.map((item) => (
                <Link
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  underline="none"
                  sx={{
                    fontSize: "13px",
                    color: colors.text.whiteMuted,
                    transition: "all 0.2s ease",
                    width: "fit-content",
                    "&:hover": {
                      color: colors.text.white,
                      transform: "translateX(3px)",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact & Office */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                fontSize: typography.fontSizes.base,
                fontWeight: typography.fontWeights.bold,
                color: colors.text.white,
                mb: 1.8,
                letterSpacing: "-0.2px",
              }}
            >
              Contact
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon
                  sx={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.7)",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: colors.text.whiteMuted,
                  }}
                >
                  {CONTACT_INFO.email}
                </Typography>
              </Box>

              {/* Phone Numbers */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <PhoneIcon
                  sx={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.7)",
                    flexShrink: 0,
                    mt: 0.3,
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
                  {CONTACT_INFO.phones.map((phone) => (
                    <Typography
                      key={phone.raw}
                      sx={{
                        fontSize: "13px",
                        color: colors.text.whiteMuted,
                      }}
                    >
                      {phone.display}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Office Address */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                  pt: 0.8,
                  borderTop: `1px solid ${colors.border.dark}`,
                }}
              >
                <LocationIcon
                  sx={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.7)",
                    flexShrink: 0,
                    mt: 0.3,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "10.5px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontWeight: typography.fontWeights.bold,
                      color: colors.text.whiteSubtle,
                      mb: 0.3,
                    }}
                  >
                    Registered Office
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      lineHeight: 1.5,
                      color: colors.text.whiteMuted,
                    }}
                  >
                    {CONTACT_INFO.address}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Regulatory Disclaimer */}
        <Box
          sx={{
            mt: 3.5,
          }}
        >
          <Typography
            sx={{
              fontSize: typography.fontSizes.xs,
              lineHeight: 1.55,
              color: colors.text.whiteSubtle,
            }}
          >
            {DISCLAIMER_TEXT}
          </Typography>
        </Box>

        <Divider sx={{ my: 2, borderColor: colors.border.dark }} />

        {/* Bottom Bar: Copyright & Legal Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            gap: 1.5,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: typography.fontSizes.xs,
              color: colors.text.whiteMuted,
            }}
          >
            © {currentYear} {COMPANY_NAME}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {LEGAL_LINKS.map((link, idx) => (
              <Box
                key={link.href}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                {idx > 0 && (
                  <Box
                    component="span"
                    sx={{
                      color: "rgba(255, 255, 255, 0.3)",
                      fontSize: "11px",
                    }}
                  >
                    ·
                  </Box>
                )}
                <Link
                  component={NextLink}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: typography.fontSizes.xs,
                    color: colors.text.whiteMuted,
                    "&:hover": { color: colors.text.white },
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
