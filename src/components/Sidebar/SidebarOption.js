import React from "react";

import "./SidebarOption.css";

const SidebarOption = ({ Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
    </div>
  );
};

export default SidebarOption;
