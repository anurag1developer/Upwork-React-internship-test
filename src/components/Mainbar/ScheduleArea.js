import React from "react";

import "./ScheduleArea.css";

const ScheduleArea = () => {
  return (
    <div className="schedule">
      <div className="schedule__left">
        <p className="schedule__text">Select</p>
        <div className="schedule__dash"></div>
        <div className="schedule__styling">
          <select className="schedule__dropdown" name="test" id="test">
            <option value="Past Test">Past Test</option>
          </select>
          <label htmlFor="test" className="extra"></label>
        </div>
      </div>
      <button className="schedule__test">Schedule new Test</button>
    </div>
  );
};

export default ScheduleArea;
