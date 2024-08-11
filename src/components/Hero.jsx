import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";
import jobhubImg from "../assets/jobhub-image.png";

const Hero = () => {
  return (
    // container
    <Box
      sx={{
        background: "#36517e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          height: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1320px",
          width: "100%",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Stack
          sx={{
            flex: 1,
            order: { xs: 2, md: 1 },
            alignItems: "flex-start",
            spacing: 2,
            textAlign: { xs: "center", md: "left" },
            maxWidth: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "45px" },
              fontWeight: "700",
              lineHeight: { xs: "40px", md: "56px" },
              color: "#fff",
              width: "100%",
            }}
          >
            Welcome to Jobshub where we link talents with exceptional jobs
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "20px", md: "24px" },
              color: "rgba(255, 255, 255, 0.6)",
              width: "100%",
              paddingBottom: "40px",
            }}
          >
            Elevate your workforce with our seamless remote job placement
            opportunities
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "16px",
              letterSpacing: "1px",
              display: "inline-block",
              borderRadius: "50px",
              transition: "0.5s",
              padding: "10px 24px 11px 24px",
              background: "#47b2e4",
              marginTop: { xs: "16px", md: "24px" }, 
            }}
          >
            Apply Now
          </Button>
        </Stack>
        <Box
          sx={{
            flex: 1,
            order: { xs: 1, md: 2 },
            alignItems: "center",
            width: "100%",
            maxWidth: { xs: "80%", sm: "70%", md: "100%" },
            margin: "0 auto",
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
              animation:
                "upDown 2s ease-in-out infinite alternate-reverse both",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
