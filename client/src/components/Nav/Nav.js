import React from "react";
// import "./header.css";
import { Typography, Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const Nav = () => {
  return (
    <Grid container sx={{ backgroundColor: "primary.main", mt: 1 }}>
      <Grid xs={12}>
        <Typography variant="h3" component="h1" color="#F2F7F2">
          "Logo will be here"
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Nav;
