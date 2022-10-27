import React, { useState } from "react";

import About from "../About";
import Title from "../Title";
import Nav from "../Nav";
import Contact from "../Contact";
import Project from "../Project";
import Resume from "../Resume";
import Footer from "../Footer";

import boardgametrackerpic from "../../assets/images/boardgametracker.png";
import dndPic from "../../assets/images/dndCC.png";
import isItHereYetPic from "../../assets/images/is-it-here-yet.png";

function Main() {
  //finds the state of which component to use
  const [currentComponent, setCurrentComponent] = useState("Title");
  //project information
  const [projects] = useState([
    {
      name: "Is It Here Yet",
      description:
        "A way for users to manage their tracking numbers from USPS, Fedex, and UPS. ",
      picture: isItHereYetPic,
      githubLink: "https://github.com/Ryan-Buckley1/is-it-here-yet",
      deployedLink: "https://is-it-here-yet.herokuapp.com/",
      techs: [
        "React",
        "CSS",
        "JavaScript",
        "Material UI",
        "Puppeteer",
        "Graphql",
        "Apollo",
        "Express",
        "JSON Web Token",
      ],
    },
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
  //renders the current state set component
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
      <Footer />
    </>
  );
}

export default Main;
