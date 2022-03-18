import React from "react";

import "./CenterArea.css";

import Sections from "./Sections";
import ScheduleArea from "./ScheduleArea";
import ContentArea from "./ContentArea";

const CenterArea = () => {
  return (
    <div className="centerArea">
      <div className="centerAreaWrapper">
        <Sections />
        <ScheduleArea />
        <ContentArea />
      </div>
    </div>
  );
};

export default CenterArea;
