import React from "react";

import Contact from "../Contact";
import About from "../About";
import Resume from "../Resume";
import Project from "../Project";

function Nav() {
  return (
    <>
      <div className="navBar">
        <a href="#about">About</a>

        <a href="#project">Projects</a>

        <a href="#resume">Resume</a>

        <a href="#contact">Contact</a>
      </div>
    </>
  );
}

export default Nav;
