import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Manager</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>DashBoard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonIcon className="icon"/>
            <span>User</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon"/>
            <span>Product</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon"/>
            <span>Oders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <FavoriteIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
