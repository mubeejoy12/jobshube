import React from "react";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import ActionImg from "../assets/cta-bg.jpg";

const Action = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: "center",
        justifyContent: { xs: 'center', md: 'space-between' },
        minHeight: { xs: '400px', sm: '350px', md: '300px' },
        backgroundImage: `linear-gradient( rgba(40, 58, 90, 0.9), rgba(40, 58, 90, 0.9)), url(${ActionImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        color: "#fff",
        padding: { xs: '40px 20px', sm: '60px 40px', md: '80px 60px', lg: '100px 80px' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
        <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: "bold", mb: 2 }}>
          Call To Action
        </Typography>
        <Typography variant="body1" sx={{ 
          maxWidth: "900px",
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          lineHeight: 1.6,
        }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          borderColor: "#fff",
          borderRadius: "30px",
          padding: { xs: '8px 30px', sm: '10px 40px', md: '12px 50px' },
          fontSize: { xs: '14px', sm: '16px' },
          textTransform: "none",
          alignSelf: "center",
          marginTop: { xs: '30px', md: '0' },
          transition: 'all 0.3s ease',
          "&:hover": {
            borderColor: "#47b2e4",
            backgroundColor: "#47b2e4",
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        }}
      >
        Call To Action
      </Button>
    </Box>
  );
};

export default Action;




