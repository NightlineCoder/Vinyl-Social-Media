import React from "react";
import "./header.css";
import { Typography, Box, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const Nav = () => {
	return (
		<Grid container sx={{ backgroundColor: "primary.main", mt: 1 }}>
			<Grid xs={10}>
				<Typography variant="h3" component="h1" color="#F2F7F2">
					VINYL
				</Typography>
			</Grid>
			<Grid xs={2}>
				<TextField id="navSearch" label="Search" variant="outlined" color="background" />
			</Grid>
		</Grid>

		// <header className="bg-info p-3 d-flex justify-content-around">
		// 	<h2>VINYL</h2>
		// 	<nav className="navbar bg-body-tertiary">
		// 		<div className="container-fluid">
		// 			<form className="d-flex" role="search">
		// 				<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
		// 				<button className="btn btn-outline-success" type="submit">
		// 					Search
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</nav>
		// </header>
	);
};

export default Nav;
