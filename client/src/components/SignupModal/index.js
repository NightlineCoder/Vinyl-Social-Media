import React from "react";
// import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";

const SignupModal = () => {
  return (
    <Box elevation={2} sx={{ flexGrow: 1 }}>
      <Typography variant="h1" component="h1">
        Signup/Login
      </Typography>
      <Grid container>
        <SignupContainer />
        <LoginContainer />
      </Grid>
    </Box>
  );
};

export default SignupModal;
