import React from "react";

import "./Topbar.css";

import {
  NotificationsNoneOutlined,
  MailOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <h2 className="topbar__title">Dashboard</h2>
        <div className="topbar__options">
          <NotificationsNoneOutlined className="topbar__notification" />
          <MailOutlineOutlined className="topbar__mail" />
          <SettingsOutlined className="topbar__settings" />
          <img
            className="topbar__profile"
            src="assets/profile.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
