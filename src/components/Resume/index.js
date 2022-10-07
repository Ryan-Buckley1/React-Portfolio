import React from "react";

//link to my resume and displays my proficiencies
function Resume() {
  return (
    <>
      <section id="resume">
        <h1>Ryan's Proficiencies</h1>
        <h3>Front end</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>BootStrap</li>
          <li>Materialize</li>
          <li>Material UI</li>
        </ul>
        <h3>Back end</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Apollo</li>
        </ul>
        <a href="https://gitconnected.com/ryan-buckley1/resume">
          {" "}
          Link to downloadable Resume
        </a>
      </section>
    </>
  );
}

export default Resume;
