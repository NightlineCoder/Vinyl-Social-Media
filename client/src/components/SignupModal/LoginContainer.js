import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Box, TextField, Button } from "@mui/material";

const LoginContainer = () => {
  const [login, { error }] = useMutation(LOGIN);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  let navigate = useNavigate();
  const handleLogin = async (event) => {
    console.log("submit", formData);
    try {
      const { data } = await login({
        variables: { ...formData },
      });
      console.log(data);
      if (data.login.token) {
        localStorage.setItem("id_token", data.login.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid container xs={6}>
      <TextField
        name="email"
        id="login-email"
        variant="outlined"
        label="email"
        sx={{ m: 1, width: "50%" }}
        onChange={handleInputChange}
      ></TextField>
      <TextField
        name="password"
        id="login-password"
        variant="outlined"
        label="password"
        sx={{ m: 1, width: "50%" }}
        onChange={handleInputChange}
      ></TextField>
      <Button color="secondary" onClick={handleLogin}>
        Login
      </Button>
    </Grid>
  );
};

export default LoginContainer;
