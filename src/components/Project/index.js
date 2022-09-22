import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// function Project() {

export default function Project(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={props.deployedLink}>
        <CardMedia
          component="img"
          height="140"
          image={props.picture}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <br />
          <Typography variant="body1">Technologies used:</Typography>
          <Typography variant="body2" color="text.secondary">
            {props.techs.join(", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          href={props.githubLink}
        >
          Github
        </Button>
      </CardActions>
    </Card>
  );
}

// export default Project;
