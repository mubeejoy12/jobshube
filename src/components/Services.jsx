import React from "react";
import Header from "./Header";
import Dividers from "./Dividers";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import SpeedIcon from "@mui/icons-material/Speed";

const cardData = [
  {
    icon: <SportsBasketballIcon sx={{ fontSize: "40px", color: "#47b2e4" }} />,
    title: "Personalized Matchmaking",
    description:
      "Tailoring job placements to match the unique needs of both employers and professionals.",
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: "40px", color: "#47b2e4" }} />,
    title: "Efficient Recruitment",
    description:
      "Streamlining the hiring process for quick, effective, and resource-efficient results.",
  },
  {
    icon: <LayersIcon sx={{ fontSize: "40px", color: "#47b2e4" }} />,
    title: "Diverse Talent Network",
    description:
      "Access a diverse pool of skilled candidates, contributing to a dynamic and inclusive workforce.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: "40px", color: "#47b2e4" }} />,
    title: "Ongoing Support",
    description:
      "Beyond placements, Jobshub is dedicated to providing continuous support for long-term success.",
  },
];

const Services = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Box
      sx={{
        background: "#f3f5fa",
        padding: { xs: "40px 0", md: "60px 0", lg: "80px 0" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: { xs: "0 20px", sm: "0 30px" },
        }}
      >
        <Header text={"SERVICES"} />
        <Dividers />
        <Typography
          variant={isXs ? "body1" : "subtitle1"}
          color="initial"
          sx={{
            mb: { xs: 4, md: 6 },
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto 40px",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1rem" },
          }}
        >
          Unlock your path to success with Jobshub where personalized job
          placements, efficient recruitment, a diverse talent network, and
          ongoing support redefine your journey in the world of employment.
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  height: { xs: "auto", sm: "350px", md: "370px" },
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 3, sm: 3, md: 4 },
                  borderRadius: { xs: "8px", sm: "10px", md: "12px" },
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    "& .title": {
                      color: "#47b2e4",
                    },
                  },
                }}
              >
                <Box sx={{ mb: { xs: 2, sm: 3 } }}>
                  {React.cloneElement(card.icon, {
                    sx: {
                      fontSize: { xs: "40px", sm: "50px", md: "60px" },
                      color: "#47b2e4",
                    },
                  })}
                </Box>
                <Typography
                  className="title"
                  variant={isXs ? "h6" : isSm ? "h5" : "h4"}
                  sx={{
                    color: "#36517e",
                    fontWeight: "bold",
                    mb: { xs: 2, sm: 3 },
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    flexGrow: 1,
                    fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
