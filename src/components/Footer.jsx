import React from "react";
import { Box, Typography, Grid, Link, IconButton, Container } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container spacing={4} justifyContent="space-between">
            {/* Column 1: Company Info */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#36517e" }}>
                JOBSHUB
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "light" }}>
                A108 Adam Street<br />
                New York, NY 535022<br />
                United States
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, fontWeight: "light" }}>
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@jobshub.com
              </Typography>
            </Grid>

            {/* Column 2: Useful Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2, color: "#36517e" }}>
                Useful Links
              </Typography>
              {["Home", "About us", "Services", "Terms of services", "Privacy policy"].map((link) => (
                <Box key={link} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <KeyboardArrowRightIcon sx={{ color: "#46B2E4", mr: 1 }} />
                  <Link href="#" variant="body2" sx={{
                    textDecoration: "none",
                    color: "#888888",
                    "&:hover": { color: "#46B2E4" },
                  }}>
                    {link}
                  </Link>
                </Box>
              ))}
            </Grid>

            {/* Column 3: Services */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2, color: "#36517e" }}>
                Our Services
              </Typography>
              {["Tailored Job Placement", "Efficiency in Recruitment", "Talent Management", "Marketing"].map((service) => (
                <Box key={service} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <KeyboardArrowRightIcon sx={{ color: "#46B2E4", mr: 1 }} />
                  <Link href="#" variant="body2" sx={{
                    textDecoration: "none",
                    color: "#888888",
                    "&:hover": { color: "#46B2E4" },
                  }}>
                    {service}
                  </Link>
                </Box>
              ))}
            </Grid>

            {/* Column 4: Social Media */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2, color: "#36517e" }}>
                Our Social Networks
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "#888888" }}>
                For more information follow and contact us on our social media pages
              </Typography>
              <Box>
                {[
                  { icon: <XIcon />, color: "#00acee" },
                  { icon: <Facebook />, color: "#3b5998" },
                  { icon: <Instagram />, color: "#E1306C" },
                  { icon: <LinkedIn />, color: "#0072b1" },
                ].map((social, index) => (
                  <IconButton key={index} href="#" sx={{ color: social.color, mr: 1 }}>
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Bottom Copyright Section */}
      <Box sx={{
        backgroundColor: "#36517e",
        color: "white",
        py: 2,
        textAlign: "center",
      }}>
        <Container maxWidth="lg">
          <Typography variant="body2">
            &copy; Copyright <strong>Jobshub</strong> 2024 All Rights Reserved
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Designed by IOS Tech Hub
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

