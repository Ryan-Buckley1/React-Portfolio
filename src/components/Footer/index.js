import React from "react";
import Mail from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//created a footer with icons that have tooltips to tell the user what the icons represent
function Footer() {
  return (
    <>
      <ul className="contact-links">
        <li>
          <Tooltip title="GitHub" placement="top">
            <a href="https://github.com/Ryan-Buckley1">
              <GitHubIcon color="info" fontSize="large" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Email" placement="top">
            <a href="mailto:Ryan42buck@gmail.com">
              <Mail color="info" fontSize="large" />
            </a>
          </Tooltip>
        </li>
        <li>
          <Tooltip title="LinkedIn" placement="top">
            <a href="https://www.linkedin.com/in/ryanbuckley42">
              <LinkedInIcon color="info" fontSize="large" />
            </a>
          </Tooltip>
        </li>
      </ul>
    </>
  );
}

export default Footer;
