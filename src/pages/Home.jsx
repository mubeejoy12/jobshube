import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import About from "../components/About";
import Services from "../components/Services";
import Action from "../components/Action";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{ height: "64px", background: "#36517e",  }}
      />{" "}
      {/* Spacer for Navbar */}
      <Hero />
      <Clients />
      <About />
      <Services />
      <Action/>
    </Box>
  );
};

export default Home;
