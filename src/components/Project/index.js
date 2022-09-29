import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Project({ props }) {
  console.log(props);

  return (
    <>
      <Container maxWidth="md" className="content">
        <h1>Projects</h1>
        <Grid
          container
          justifyContent="space-evenly"
          alignContent="space-evenly"
        >
          {props.map((project) => (
            <Grid item xs="8" md="4" lg="6">
              <Card className="card" sx={{ maxWidth: 345 }}>
                <CardActionArea href={project.deployedLink}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.picture}
                    alt={project.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <br />
                    <Typography variant="body1">Technologies used:</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.techs.join(", ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    href={project.githubLink}
                  >
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

// export default Project;
