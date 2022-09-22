import React from "react";
import Mail from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";
function Contact() {
  return (
    <>
      <section id="contact">
        <h1>Get ahold of me!</h1>
        <p>
          If you would like to contact me, my GitHub and email are provided!
        </p>
        <ul>
          <li>
            <a href="https://github.com/Ryan-Buckley1">GitHub</a>
          </li>
          <li>
            <Tooltip title="email">
              <a href="mailto:Ryan42buck@gmail.com">
                <Mail color="disabled" fontSize="large" />
              </a>
            </Tooltip>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Contact;
