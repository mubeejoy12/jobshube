import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#36517e",
        boxShadow: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "0.5rem 1rem", md: "0.5rem 2rem", lg: "0.5rem 10rem" },
        }}
      >
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          JOBSHUB
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navItems.map((item) => (
              <Typography
                key={item.title}
                component={Link}
                to={item.path}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#47b2e4",
                  },
                }}
              >
                {item.title}
              </Typography>
            ))}
            <Button
              component={Link}
              // to="/apply"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "#47b2e4",
                borderRadius: "100px",
                padding: "0.5rem 1.5rem",
                fontSize: "0.9rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#47b2e4",
                  borderColor: "#47b2e4",
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        ) : (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            {Boolean(anchorEl) ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "300px",
              backgroundColor: "white",
              boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
              mt: 5,
            },
          }}
        >
          {navItems.map((item) => (
            <MenuItem key={item.title} onClick={handleClose}>
              <Typography
                component={Link}
                to={item.path}
                sx={{
                  color: "#36517e",
                  textDecoration: "none",
                  width: "100%",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem>
            <Button
              component={Link}
              to="/apply"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#47b2e4",
                color: "white",
                borderRadius: "100px",
                padding: "0.5rem",
                fontSize: "0.9rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#3e9ac6",
                },
              }}
              onClick={handleClose}
            >
              Apply Now
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
