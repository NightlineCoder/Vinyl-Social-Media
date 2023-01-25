import React from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Paper,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

import carouselImg1 from "../../assets/vinyl.img.1.jpg";
import carouselImg2 from "../../assets/vinyl.img.2.jpg";
import carouselImg3 from "../../assets/vinyl.img.3.jpg";

const CarouselComp = (props) => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default CarouselComp;
