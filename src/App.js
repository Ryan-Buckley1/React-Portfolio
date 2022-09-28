import React from "react";
import About from "./components/About";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Project from "./components/Project";
import boardgametrackerpic from "./assets/images/boardgametracker.png";
import dndPic from "./assets/images/dndCC.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const boardGame = {
  name: "Board Game Tracker",
  description: "A way to orgainize all of your board games!",
  picture: boardgametrackerpic,
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
};
const dnd = {
  name: "Dnd Character Creation",
  description: "A way to create a DnD character",
  picture: dndPic,
  githubLink: "https://github.com/Rdoolz51/DDCharacterCreation",
  deployedLink: "https://rdoolz51.github.io/DDCharacterCreation/",
  techs: ["HTML", "CSS", "JavaScript", "Materialize", "jQuery"],
};

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <br />
        <div>
          <Title />
        </div>
        <br />
        <Container maxWidth="lg" columnSpacing={2} className="content">
          <h1>Projects</h1>
          <Grid container spacing={3} columns={16}>
            <Grid item xs="8">
              <Project {...boardGame} />
            </Grid>
            <Grid item xs="8">
              <Project {...dnd} />
            </Grid>
          </Grid>
          <div>
            <About />
          </div>
          <div>
            <Contact />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
