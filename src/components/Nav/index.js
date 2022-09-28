import React from "react";
import Tooltip from "@mui/material/Tooltip";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";
import HikingIcon from "@mui/icons-material/Hiking";
import LaptopIcon from "@mui/icons-material/Laptop";
import { indigo } from "@mui/material/colors";
function Nav() {
  const primary = indigo[100];
  return (
    <>
      <div className="navBar">
        <Tooltip title="About" placement="bottom">
          <a href="#about">
            <HikingIcon color="info" fontSize="large" />
          </a>
        </Tooltip>

        <Tooltip title="Projects" placement="bottom">
          <a href="#project">
            <LaptopIcon color="info" fontSize="large" />
          </a>
        </Tooltip>

        <Tooltip title="Resume" placement="bottom">
          <a href="#resume">
            <AssignmentIcon color="info" fontSize="large" />
          </a>
        </Tooltip>

        <Tooltip title="Contact" placement="bottom">
          <a href="#contact">
            <CampaignIcon color="info" fontSize="large" />
          </a>
        </Tooltip>
      </div>
    </>
  );
}

export default Nav;
