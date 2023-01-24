import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Home = () => {
  return (
    <Grid container>
      <Box elevation={2}>
        <Typography variant="h1" component="h1">
          Content
        </Typography>
      </Box>
    </Grid>
  );
};

export default Home;
