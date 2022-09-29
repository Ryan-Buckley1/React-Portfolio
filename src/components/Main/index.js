import React, { useState } from "react";

import About from "../About";
import Title from "../Title";
import Nav from "../Nav";
import Contact from "../Contact";
import Project from "../Project";
import Resume from "../Resume";

import boardgametrackerpic from "../../assets/images/boardgametracker.png";
import dndPic from "../../assets/images/dndCC.png";

function Main() {
  const [currentComponent, setCurrentComponent] = useState("Title");
  const [projects] = useState([
    {
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
    },
    {
      name: "Dnd Character Creation",
      description: "A way to create a DnD character",
      picture: dndPic,
      githubLink: "https://github.com/Rdoolz51/DDCharacterCreation",
      deployedLink: "https://rdoolz51.github.io/DDCharacterCreation/",
      techs: ["HTML", "CSS", "JavaScript", "Materialize", "jQuery"],
    },
  ]);

  const renderComponent = () => {
    if (currentComponent === "Title") {
      return <Title />;
    }

    if (currentComponent === "About") {
      return <About />;
    }

    if (currentComponent === "Project") {
      return <Project props={projects} />;
    }

    if (currentComponent === "Resume") {
      return <Resume />;
    }
    if (currentComponent === "Contact") {
      return <Contact />;
    }
  };
  return (
    <>
      <Nav
        currentComponent={currentComponent}
        handleComponentChange={(component) => setCurrentComponent(component)}
      />
      {renderComponent()}
      {/* <Footer /> */}
    </>
  );
}

export default Main;
