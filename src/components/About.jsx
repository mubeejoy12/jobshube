import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Dividers from "./Dividers";
import Header from "./Header";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ my: { xs: "30px", md: "50px" } }}>
      <Header text={"ABOUT US"} />
      <Dividers />

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        alignContent={"center"}
        sx={{
          margin: { xs: "40px 20px", md: "60px 100px" },
          gap: { xs: "20px", md: "30px" },
        }}
      >
        <Stack
          display={"flex"}
          sx={{
            width: { xs: "100%", md: "50%" },
            gap: "20px",
            textAlign: "start",
          }}
        >
          <Typography
            variant={isMobile ? "body1" : "subtitle1"}
            color="initial"
          >
            At JOBSHUB, we believe in the power of meaningful connections.
            Founded with passion for bringing talent and opportunity, our
            mission is to transform the employment landscape. As a dedicated job
            company, we take pride in crafting the perfect match between skilled
            professionals and forward-thinking employers.
          </Typography>

          <Stack>
            {[
              "Jobshub offers a meaningful number of Connections to talents.",
              "We are passionate about changing the Workforce Landscape.",
              "Jobshub is positioned as a dedicated Job Company",
            ].map((text, index) => (
              <Stack
                key={index}
                display={"flex"}
                sx={{ flexDirection: "row", alignItems: "center", mb: 1 }}
              >
                <DoneAllIcon
                  sx={{
                    color: "#47b2e4",
                    mr: 1,
                    fontSize: isMobile ? "1rem" : "1.5rem",
                  }}
                />
                <Typography
                  variant={isMobile ? "body2" : "subtitle1"}
                  color="initial"
                >
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack
          display={"flex"}
          sx={{
            width: { xs: "100%", md: "50%" },
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant={isMobile ? "body2" : "subtitle2"}
            color="initial"
          >
            Explore the story behind JOBSHUB, where every page turns into a
            chapter of success and business growth. Join us on this journey, as
            we redefine the dynamics of employment, one connection at a time.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              fontSize: { xs: "10px", md: "12px" },
              letterSpacing: "1px",
              display: "inline-block",
              borderRadius: "4px",
              transition: "0.5s",
              padding: { xs: "8px 24px", md: "12px 32px" },
              marginTop: { xs: "16px", md: "24px" },
              fontWeight: "500",
              alignSelf: { xs: "center", md: "flex-start" },
            }}
          >
            Apply Now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
