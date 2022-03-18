import React from "react";

import "./SectionList.css";

const SectionList = () => {
  return (
    <ul className="sections__categoriesList">
      <li className="sections__categoriesListItem__active">Test</li>
      <li className="sections__categoriesListItem">Lecture</li>
      <li className="sections__categoriesListItem">Study material</li>
      <li className="sections__categoriesListItem">
        List of student and teacher
      </li>
    </ul>
  );
};

export default SectionList;
