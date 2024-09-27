import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Hero from "./Hero";
import Header from "./Header";
import Dividers from "./Dividers";
import ApplyForm from "./ApplyForm";

const ApplyNow = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Hero/>
      <Box sx={{ marginTop: "50px" }}>
        <Box sx={{ width: { xs: "95%", md: "78%" }, margin: "0 auto" }}>
          <Header text={"Application Form"} />
          <Dividers />

          <Typography
            variant={isXs ? "body2" : "subtitle1"}
            color="initial"
            paragraph
            sx={{
              marginTop: "30px",
              textAlign: "center",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>

          <ApplyForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplyNow;
