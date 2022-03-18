import React from "react";

import "./Sidebar.css";

import {
  DashboardOutlined,
  PeopleOutline,
  SchoolOutlined,
  MessageOutlined,
  PaymentsOutlined,
  EventAvailableOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="assets/logo.jpg" alt="logo is here" />
      <SidebarOption Icon={DashboardOutlined} />
      <SidebarOption Icon={SchoolOutlined} />
      <SidebarOption Icon={MessageOutlined} />
      <SidebarOption active Icon={PeopleOutline} />
      <SidebarOption Icon={PaymentsOutlined} />
      <SidebarOption Icon={EventAvailableOutlined} />
      <SidebarOption Icon={SettingsOutlined} />
    </div>
  );
};

export default Sidebar;
