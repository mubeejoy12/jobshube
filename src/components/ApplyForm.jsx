import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const ApplyForm = () => {
  const [state, setState] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // samee your form logics 🤣
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Box sx={{ padding: { xs: 2, md: 4 } }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={5.5}>
              <Box
                sx={{
                  padding: 2,
                  boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                  borderTop: "5px solid #46b2e4",
                  borderBottom: "5px solid #46b2e4",
                }}
              >
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Middle Name"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      size="small"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      size="small"
                      type="tel"
                      inputProps={{
                        maxLength: 10,
                        pattern: "[0-9]{10}",
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Social Security Number (SSN)"
                      variant="outlined"
                      size="small"
                      type="password"
                      inputProps={{
                        maxLength: 9,
                        pattern: "[0-9]{9}",
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Confirm Social Security Number (SSN)"
                      variant="outlined"
                      size="small"
                      type="password"
                      inputProps={{
                        maxLength: 9,
                        pattern: "[0-9]{9}",
                      }}
                      required
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Right Side - Form */}
            <Grid item xs={12} md={6.5}>
              <Box
                sx={{
                  padding: { xs: 2, md: 4 },
                  boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                  borderTop: "5px solid #46b2e4",
                  borderBottom: "5px solid #46b2e4",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="state-select-label">State</InputLabel>
                      <Select
                        labelId="state-select-label"
                        value={state}
                        label="State"
                        onChange={handleStateChange}
                        required
                      >
                        <MenuItem value="CA">California</MenuItem>
                        <MenuItem value="NY">New York</MenuItem>
                        <MenuItem value="TX">Texas</MenuItem>
                       {/* na you sabi state you want put 😅 */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Zip Code"
                      variant="outlined"
                      size="small"
                      inputProps={{
                        maxLength: 5,
                        pattern: "[0-9]{5}",
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      variant="outlined"
                      size="small"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      Govt issued ID (front)
                    </Typography>
                    <TextField
                      variant="outlined"
                      type="file"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      Govt issued ID (back)
                    </Typography>
                    <TextField
                      variant="outlined"
                      type="file"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      Upload Profile Photo (Selfie of you)
                    </Typography>
                    <TextField
                      variant="outlined"
                      type="file"
                      fullWidth
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <Button
                      type="submit"
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
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity="success"
        >
          Application submitted successfully!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default ApplyForm;
