import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  TextareaAutosize,
  TextField,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { QUERY_USER_POSTS } from "../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const CreatePost = () => {
  const [addPost, { error }] = useMutation(ADD_POST);
  const [formData, setFormData] = useState({
    postText: "JavaScript",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    console.log("submit", formData);
    try {
      const { data } = await addPost({
        variables: { ...formData },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid constainer spacing={2} xs={12}>
      <Typography variant="h3" component="h3">
        Add Post
      </Typography>
      <TextField
        id="AddText"
        label="Text"
        variant="outlined"
        name="postText"
        multiline
        sx={{ m: 1, width: "50%" }}
        rows={4}
        onChange={handleInputChange}
      ></TextField>
      <Button color="secondary" onClick={handleSubmit}>
        Post
      </Button>
      {/* <TextareaAutosize></TextareaAutosize> */}
    </Grid>
  );
};
const PostFeed = () => {
  const { loading, error, data } = useQuery(QUERY_USER_POSTS);

  if (loading) {
    console.log("loading..", loading);
  }
  if (error) {
    console.log("error", error);
  }
  if (data) {
    console.log("data", data);
  }
  const postList = data?.userPosts || [];
  return (
    <Grid container>
      <Typography variant="h3" component="h3">
        User posts
      </Typography>
      <Grid container xs={12}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          postList.map((post) => {
            return (
              <Card key={post._id} sx={{ m: 1, p: 3, width: "50%" }}>
                <CardContent>
                  <Typography variant="h3" component="h3">
                    {post.postText}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container xs={12}>
                    <Box xs={6}>~{post.postAuthor}</Box>
                    {/* <Box xs={6}>{post.createdAt}</Box> */}
                  </Grid>
                </CardActions>
              </Card>
            );
          })
        )}
      </Grid>
    </Grid>
  );
};
const Dashboard = () => {
  return (
    <Box elevation={2}>
      <Typography variant="h1" component="h1">
        Dashboard
      </Typography>
      <Grid container xs={12}>
        <CreatePost />
        <PostFeed></PostFeed>
      </Grid>
    </Box>
  );
};

export default Dashboard;
