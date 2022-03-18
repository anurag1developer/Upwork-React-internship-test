import React from "react";

import "./Mainbar.css";

import Topbar from "./Topbar";
import CenterArea from "./CenterArea";

const Mainbar = () => {
  return (
    <div className="mainbar">
      <Topbar />
      <CenterArea />
    </div>
  );
};

export default Mainbar;
