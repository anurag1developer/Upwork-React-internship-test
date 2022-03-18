import React from "react";

import "./Sections.css";

import { ArrowBack } from "@mui/icons-material";

import SectionList from "./SectionList";

const Sections = () => {
  return (
    <div className="sections">
      <ArrowBack />
      <div className="sections__categories">
        <SectionList />
      </div>
    </div>
  );
};

export default Sections;
