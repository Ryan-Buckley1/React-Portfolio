import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <h1 className="about-title"> Meet Ryan Buckley</h1>
        {/* <img className="profile-picture">Filler</img> */}
        <p className="about-body">
          I am an inspiring web developer that is looking to change my career
          from being a driver. I have had many different jobs but never really
          had a passion for any of them. I feel the difference when I am coding
          and I truly enjoy doing it so I am taking the steps to make this a
          career!{" "}
        </p>
        <p className="about-family">
          I am a family man. I have two wonderful children and a fantastic wife
          who are my entire world. I do everything I can to provide for them and
          feel like making this career change is exactly what I need to do.
        </p>
        <p className="about-work">
          I am currently enrolled in a coding bootcamp and look to graduate
          soon. Some of my projects I have contributed to or completed myself
          are on the projects page!
        </p>
      </section>
    </>
  );
}

export default About;
