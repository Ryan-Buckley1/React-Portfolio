import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// function Project() {
const projects = [
  {
    name: "Board Game Tracker",
    githubLink: "https://github.com/Ryan-Buckley1/Board-Game-Tracker",
    deployedLink: "https://board-g4me-tracker.herokuapp.com/",
    techs: [
      "mysql",
      "express",
      "node",
      "bootstrap",
      "sequelize",
      "cloudinary",
      "handlebars.js",
      "multer",
    ],
  },
  {
    name: "Dnd Character Creation",
    githubLink: "https://github.com/Rdoolz51/DDCharacterCreation",
    deployedLink: "https://rdoolz51.github.io/DDCharacterCreation/",
    techs: ["HTML", "CSS", "JavaScript", "Materialize", "jQuery"],
  },
];

export default function Project() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

// export default Project;
