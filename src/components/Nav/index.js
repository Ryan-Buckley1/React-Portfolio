import React from "react";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";
import HikingIcon from "@mui/icons-material/Hiking";
import LaptopIcon from "@mui/icons-material/Laptop";
import CottageIcon from "@mui/icons-material/Cottage";

// TODO: ADD HOME ICON AND PUT IT IN FIRST NAVBAR OPTION

function Nav({ currentComponent, handleComponentChange }) {
  return (
    <>
      <div className="navBar">
        <Tooltip title="Home" placement="bottom">
          <a
            href="#contact"
            className="icon"
            onClick={() => handleComponentChange("Title")}
          >
            <CottageIcon
              color={currentComponent === "Title" ? "error" : "info"}
              fontSize="large"
            />
          </a>
        </Tooltip>
        <Tooltip title="About" placement="bottom">
          <a href="#about" onClick={() => handleComponentChange("About")}>
            <HikingIcon
              color={currentComponent === "About" ? "error" : "info"}
              fontSize="large"
            />
          </a>
        </Tooltip>

        <Tooltip title="Projects" placement="bottom">
          <a href="#project" onClick={() => handleComponentChange("Project")}>
            <LaptopIcon
              color={currentComponent === "Project" ? "error" : "info"}
              fontSize="large"
            />
          </a>
        </Tooltip>

        <Tooltip title="Resume" placement="bottom">
          <a href="#resume" onClick={() => handleComponentChange("Resume")}>
            <AssignmentIcon
              color={currentComponent === "Resume" ? "error" : "info"}
              fontSize="large"
            />
          </a>
        </Tooltip>

        <Tooltip title="Contact" placement="bottom">
          <a href="#contact" onClick={() => handleComponentChange("Contact")}>
            <CampaignIcon
              color={currentComponent === "Contact" ? "error" : "info"}
              fontSize="large"
            />
          </a>
        </Tooltip>
      </div>
    </>
  );
}

export default Nav;
