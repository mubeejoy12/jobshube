import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <h1>404 Not Found</h1>
      <Link to={"/"}>Home from link</Link>
    </Box>
  );
};

export default NotFoundPage;
