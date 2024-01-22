import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffff",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="a"
            href="#app-bar-with-responsive-menu"
            variant="h6"
            noWrap
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
           
          </Box>
          <Box>
          <Link to="/signin">
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
          LogIn
        </button>
              </Link>
          
          
          <Link to="/signup">
          <button class="btn btn-outline-primary my-2 my-sm-0 mx-1" type="submit">
          SignUp
        </button>
        </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
