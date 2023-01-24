import React from "react";
// import "./header.css";
import { Typography, Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.cropped.png";

const Nav = () => {
  return (
    <Grid container sx={{ backgroundColor: "primary.main", pt: 1 }}>
      <Grid xs={12}>
        <Link to="/">
          <img src={logo} alt="Vinyl logo" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;
