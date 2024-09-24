import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const NewsletterSubscription = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F8FC",
        padding: "40px 20px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Join Our Newsletter
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#6b6b6b" }}>
        Subscribe to our newsletter for exclusive career tips & industry
        insights
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          borderRadius: "50px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
          p: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your email"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "50px",

            "& fieldset": { border: "none" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#00AEEF",
            color: "#fff",
            borderRadius: "50px",
            textTransform: "none",
            px: 4,

            "&:hover": {
              backgroundColor: "#008CDB",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSubscription;
