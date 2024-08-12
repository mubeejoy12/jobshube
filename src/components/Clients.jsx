import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import client6 from "../assets/client-6.png";

const Clients = () => {
  return (
    <Stack sx={{ background: "#f3f5fa", alignItems: "center" }}>
      <Grid
        container
        justifyContent="center"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
         <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={client1} className="image-style"></Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={client2} className="image-style"></Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={client3} className="image-style"></Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={client4} className="image-style"></Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={client5} className="image-style"></Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2} sx={{ display: "flex", justifyContent: "center" }}>
          <Box component={"img"} src={client6} className="image-style"></Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Clients;
