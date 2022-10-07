import React from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

//gets props from main to fill out project component
export default function Project({ props }) {
  return (
    <>
      <Container maxWidth="md" className="content">
        <h1>Projects</h1>
        <Grid
          container
          spacing={2}
          justifyContent="space-evenly"
          alignContent="space-evenly"
        >
          {/* maps over each project in the projects array */}
          {props.map((project) => (
            <Grid item lg={4} md={6} key={project.name}>
              <Card className="card" sx={{ maxWidth: 345 }}>
                <CardActionArea key={project.name} href={project.deployedLink}>
                  <CardMedia
                    key={project.name}
                    component="img"
                    height="140"
                    image={project.picture}
                    alt={project.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      key={project.name}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      key={project.description}
                    >
                      {project.description}
                    </Typography>
                    <br />
                    <Typography variant="body1">Technologies used:</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      key={project.techs}
                    >
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
                    key={project.githubLink}
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
