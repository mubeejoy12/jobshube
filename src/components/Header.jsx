import React from "react";
import Typography from "@mui/material/Typography";

const Header = ({ text }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontWeight: "bold",
        color: "#36517e",
        letterSpacing: "0.1em",
        fontSize: "32px",
        textAlign: "center",
        fontFamily: "'Jost', sans-serif",
        opticalSizing: "auto",
      }}
    >
      {text}
    
    </Typography>
  );
};

export default Header;
