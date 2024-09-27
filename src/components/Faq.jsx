import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "./Header";
import Dividers from "./Dividers";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Faq = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#f4f5fa", paddingBottom: "70px" }}>
      <Box
        sx={{
          width: isXs || isSm ? "95%" : isMd ? "85%" : "70%",

          margin: "0 auto",
          padding: 2,
        }}
      >
        <Header text={"Frequently Asked Questions"} />
        <Dividers />

        <Typography
          variant={isXs ? "body2" : "subtitle1"}
          color="initial"
          paragraph
          sx={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1rem" },
          }}
        >
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>

        {/* Accordion */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Accordion
              key={index}
              sx={{
                width: "90%",
                boxShadow: "none",
                border: "none",
                "& .MuiAccordionSummary-root:hover": {
                  color: "#47b2e4", // Change text color on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item}-content`}
                id={`panel${item}-header`}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    height: "40px",
                  },
                }}
              >
                <HelpOutlineIcon sx={{ color: "#47b2e4" }} />
                <Typography>{`Accordion ${item}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
