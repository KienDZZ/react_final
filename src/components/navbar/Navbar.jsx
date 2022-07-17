import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/279858049_3141144086106951_2848659687268026519_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8Pyyh_hndccAX_LzXtQ&_nc_oc=AQkBAVJbLGYr5YDCLB3OpR-SPttsV9tj5PUANnnqD8D68KcfhVDTwshJNPJuBu0IlMk&_nc_ht=scontent.fhan2-4.fna&oh=00_AT_rYaLs7jkZBWtHquXhOQN1zEFN-751269-afM7Hv4f1Q&oe=62DA0FB1"
              alt=""
              className="avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
