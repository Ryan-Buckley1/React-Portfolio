import React from "react";
import About from "./components/About";
// import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Project from "./components/Project";
import boardgametrackerpic from "./assets/images/boardgametracker.png";
import dndPic from "./assets/images/dndCC.png";

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
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div>
        <Title />
      </div>
      <div>
        <Project {...boardGame} />
        <Project {...dnd} />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
