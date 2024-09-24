import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Header from "./Header";
import Dividers from "./Dividers";

const Contacts = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box sx={{ width: { xs: "95%", md: "78%" }, margin: "0 auto" }}>
        <Header text={"Contact"} />
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

        {/* Contact Form */}
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
          <Grid container spacing={4}>
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  padding: 2,
                  boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                  borderTop: "3px solid #46b2e4",
                  borderBottom: "3px solid #46b2e4",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <IconButton
                    sx={{
                      width: { xs: "35px", md: "40px" },
                      height: { xs: "35px", md: "40px" },
                      border: "2px solid #47b2e4",
                      backgroundColor: "rgba(71, 178, 228, 0.1)",
                      transition: "all 0.3s ease",
                      color: "#47b2e4",
                      "&:hover": {
                        backgroundColor: "rgba(71, 178, 240)",
                        borderColor: "#47b2e4",
                        color: "white",
                      },
                    }}
                  >
                    <LocationOnIcon />
                  </IconButton>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: 1,
                    }}
                  >
                    <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                      Location:
                    </Typography>
                    <Typography variant="body2">
                      A108 Adam Street, New York, NY 535022
                    </Typography>
                  </Box>
                </Box>

                {/* second contact */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <IconButton
                    sx={{
                      width: { xs: "35px", md: "40px" },
                      height: { xs: "35px", md: "40px" },
                      border: "2px solid #47b2e4",
                      backgroundColor: "rgba(71, 178, 228, 0.1)",
                      transition: "all 0.3s ease",
                      color: "#47b2e4",
                      "&:hover": {
                        backgroundColor: "rgba(71, 178, 240)",
                        borderColor: "#47b2e4",
                        color: "white",
                      },
                    }}
                  >
                    <EmailIcon />
                  </IconButton>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: 1,
                    }}
                  >
                    <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                      Email:
                    </Typography>
                    <Typography variant="body2">info@jobshub.com</Typography>
                  </Box>
                </Box>

                {/* third contact */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <IconButton
                    sx={{
                      width: { xs: "35px", md: "40px" },
                      height: { xs: "35px", md: "40px" },
                      border: "2px solid #47b2e4",
                      backgroundColor: "rgba(71, 178, 228, 0.1)",
                      transition: "all 0.3s ease",
                      color: "#47b2e4",
                      "&:hover": {
                        backgroundColor: "rgba(71, 178, 240)",
                        borderColor: "#47b2e4",
                        color: "white",
                      },
                    }}
                  >
                    <PhoneIcon />
                  </IconButton>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingLeft: 1,
                    }}
                  >
                    <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                      Call:
                    </Typography>
                    <Typography variant="body2">+1 (558) 955 4885</Typography>
                  </Box>
                </Box>

                {/* Map Section */}
                <Box
                  sx={{ width: "100%", height: "300px", overflow: "hidden" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12098.267032594944!2d-74.00771192615845!3d40.70553834231073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a35d88147e3%3A0x1a417b2235d9bf92!2sbruk!5e0!3m2!1sen!2sng!4v1726789263415!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Contact Form */}
            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  padding: { xs: 2, md: 4 },
                  boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                  borderTop: "3px solid #46b2e4",
                  borderBottom: "3px solid #46b2e4",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      size="large"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      size="large"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      size="large"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={10}
                      size="large"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "200px",
                        },
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <Button
                      variant="contained"
                      size="medium"
                      sx={{
                        backgroundColor: "#47b2e4",
                        color: "#fff",
                        padding: "12px 25px",
                        fontSize: "0.8rem",
                        borderRadius: "20px",
                        "&:hover": {
                          backgroundColor: "#3598b5",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            {/* end */}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
