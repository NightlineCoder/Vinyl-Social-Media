import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { useParams } from "react-router-dom";
import auth from "../utils/auth.js";

const Home = () => {
	const { userId } = useParams();

	const { loading, data } = useQuery(QUERY_ME, {
		variables: { userId: userId },
	});

	const user = data?.me || data?.user || {};
	if (loading) {
		//basic loading bar
		return <div>Loading...</div>;
	}
	console.log(user);
	return (
		<Grid container>
			<Box elevation={2}>
				<Typography variant="h1" component="h1">
					blah
				</Typography>
			</Box>
		</Grid>
	);
};

export default Home;
