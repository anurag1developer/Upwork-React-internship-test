import React from "react";

import "./Topbar.css";

import { IconButton } from "@mui/material";

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
          <IconButton>
            <NotificationsNoneOutlined className="topbar__notification" />
          </IconButton>
          <IconButton>
            <MailOutlineOutlined className="topbar__mail" />
          </IconButton>
          <IconButton>
            <SettingsOutlined className="topbar__settings" />
          </IconButton>
          <IconButton>
            <img
              className="topbar__profile"
              src="assets/profile.png"
              alt="profile"
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
