import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ height: '64px', background: "#36517e" }} /> {/* Spacer for Navbar */}
      <Hero/>
    </Box>
  );
};

export default Home;
