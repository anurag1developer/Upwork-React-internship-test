import React from "react";

import "./Sections.css";

import { IconButton } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";

import SectionList from "./SectionList";

const Sections = () => {
  return (
    <div className="sections">
      <IconButton>
        <ArrowBack />
      </IconButton>
      <div className="sections__categories">
        <SectionList />
      </div>
    </div>
  );
};

export default Sections;
