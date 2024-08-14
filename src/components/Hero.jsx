import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import jobhubImg from "../assets/jobhub-image.png";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        background: "#36517e",
        minHeight: '85vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "40px 20px", sm: "60px 30px", md: "80px 40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1320px",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <Stack
          sx={{
            flex: 1,
            order: { xs: 2, md: 1 },
            alignItems: { xs: "center", md: "flex-start" },
            spacing: { xs: 3, md: 4 },
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "40px", lg: "48px" },
              fontWeight: "700",
              lineHeight: { xs: 1.3, md: 1.2 },
              color: "#fff",
              width: "100%",
            }}
          >
            Welcome to Jobshub where we link talents with exceptional jobs
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
              color: "rgba(255, 255, 255, 0.8)",
              width: "100%",
              lineHeight: 1.5,
            }}
          >
            Elevate your workforce with our seamless remote job placement opportunities
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              letterSpacing: "1px",
              borderRadius: "50px",
              transition: "all 0.3s ease",
              padding: { xs: "10px 24px", md: "12px 32px" },
              background: "#47b2e4",
              marginTop: { xs: "16px", md: "24px" },
              "&:hover": {
                background: "#2196f3",
                transform: "translateY(-3px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            Apply Now
          </Button>
        </Stack>
        <Box
          sx={{
            flex: 1,
            order: { xs: 1, md: 2 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: { xs: "90%", sm: "80%", md: "100%" },
          }}
        >
          <Box
            component="img"
            src={jobhubImg}
            alt="Jobshub Image"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: { xs: "100%", md: "95%" },
              animation: "upDown 2s ease-in-out infinite alternate-reverse both",
              "@keyframes upDown": {
                "0%": { transform: "translateY(0)" },
                "100%": { transform: "translateY(-20px)" },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
