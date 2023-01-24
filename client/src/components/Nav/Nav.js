import React from "react";
// import "./header.css";
import { Typography, Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import logo from "../../assets/logo.cropped.png";

const Nav = () => {
  return (
    <Grid container sx={{ backgroundColor: "primary.main", mt: 1 }}>
      <Grid xs={12}>
        <Typography variant="h3" component="h1" color="#F2F7F2">
          {logo}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Nav;
