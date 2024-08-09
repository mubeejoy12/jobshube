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
