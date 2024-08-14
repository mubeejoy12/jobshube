import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Team", path: "/team" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#36517e",
          padding: { lg: "0px 10rem", md: "0px 0px" },
          boxShadow: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { md: "30px", sm: "23px" } }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              JOBSHUB
            </Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { lg: "40px", md: "30px", sm: "20px", xs: "30px" },
            }}
          >
            {/*  typography top bar  */}
            <Box
              sx={{
                display: { lg: "flex", md: "none", sm: "none", xs: "none" },
              }}
              gap={"15px"}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "17px" } }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "17px" } }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  About
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "17px" } }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Services
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "17px" } }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Team
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "10px", md: "17px" } }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Contact
                </Link>
              </Typography>
            </Box>

            {/*  */}

            {/* button */}
            <Button
              component={Link}
              to="/"
              variant="body1"
              color="primary"
              sx={{
                display: { lg: "flex", md: "none", sm: "none", xs: "none" },
                borderRadius: "100px",
                width: { lg: "100px", sm: "80px", xs: "50px" },
                // padding: {lg: "7px 20px",md: "4px 14px", sm: "2px 10px" },
                fontSize: { lg: "10px", sm: "7px", xs: "4px" },
                border: "2px solid #47b2e4",
                textAlign: "center",
              }}
            >
              Apply Now
            </Button>
            {/* Menu section at smaller screen display */}
            <Stack
              sx={{
                display: { lg: "none", md: "flex" },
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={open ? handleClose : handleClick}
              >
                {open ? (
                  <CloseIcon sx={{ fontSize: { md: 35, sm: 30 } }} />
                ) : (
                  <MenuIcon sx={{ fontSize: { md: 35, sm: 30 } }} />
                )}
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                  display: {
                    lg: "none",
                    md: "block",
                    sm: "block",
                    xs: "block",
                  },
                  mt: 2,
                  "& .MuiMenu-paper": {
                    width: "97%",
                    maxWidth: "none",
                    backgroundColor: "white",
                    boxShadow: "none",
                    padding: "1rem",
                    borderRadius: "1rem",
                    height: "100%",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#36517e",
                      width: "100%",
                    }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/about"
                    style={{
                      textDecoration: "none",
                      color: "#36517e",
                      width: "100%",
                    }}
                  >
                    About
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/services"
                    style={{
                      textDecoration: "none",
                      color: "#36517e",
                      width: "100%",
                    }}
                  >
                    Services
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/team"
                    style={{
                      textDecoration: "none",
                      color: "#36517e",
                      width: "100%",
                    }}
                  >
                    Team
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: "none",
                      color: "#36517e",
                      width: "100%",
                    }}
                  >
                    Contact
                  </Link>
                </MenuItem>
                <Divider />
                {/* Apply Now Button Inside the Dropdown */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem 0",
                  }}
                >
                  <Button
                    component={Link}
                    to="/apply"
                    variant="outlined"
                    sx={{
                      color: "black",
                      borderRadius: "100px",
                      padding: "0.5rem 2rem",
                      fontSize: "12px",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "flex-start",
                      "&:hover": {
                        backgroundColor: "#3e9ac6",
                        color: "whitesmoke",
                      },
                    }}
                    onClick={handleClose}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Menu>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
