import { Box, Divider } from "@mui/material";
import React from "react";

const Dividers = () => {
  return (
    <Box>
      <Divider
        sx={{
          width: "110px",
          margin: "15px auto",
          height: "2px",
          backgroundColor: "#ccc",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "0",
            transform: "translateX(-50%)",
            width: "50px",
            height: "4px",
            backgroundColor: "#47b2e4",
          }}
        />
      </Divider>
    </Box>
  );
};

export default Dividers;
