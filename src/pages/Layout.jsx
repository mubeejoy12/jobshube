import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Hero from "../components/Hero";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
