import React from "react";

import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="contentWrapper">
        <h3 className="content__heading">Typography test</h3>
        <p className="content__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          voluptatem tempora quaerat placeat culpa nisi? Inventore distinctio
          facilis perspiciatis harum quisquam nam rerum molestiae, minima
          maiores soluta sit! Cumque, sapiente?
        </p>
        <p className="content__duration">
          End date
          <span className="content__date">5th march 2022</span>
          End time
          <span className="content__time">02:45pm</span>
        </p>
      </div>
    </div>
  );
};

export default Content;
