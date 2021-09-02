import React, { useState } from "react";
import { FaCalendar, FontAwesome } from "react-icons/fa";
import "./Navbar.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TranslateIcon from "@material-ui/icons/Translate";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import { FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  const sidebarHandler = (e) => {
    e.preventDefault();
    setSidebar((prevSidebar) => !prevSidebar);
  };
  return (
    <>
      <div className="parentNav">
        <div className="logo">
          <MenuIcon onClick={sidebarHandler} />
        </div>
        <div className="main_NavbarIcon">
          <div className="NavbarIcon">
            <NotificationsIcon />
            <span className="span_badge">2</span>
          </div>
          <div className="NavbarIcon">
            <TranslateIcon />
          </div>
          <div className="NavbarIcon">
            <SettingsIcon />
          </div>
        </div>
      </div>
      <nav className={sidebar ? "nav_menu active" : "nav_menu"}>
        <ul>
          <li>
            <IconContext.Provider value={{ className: "icon_h" }}>
              <FaHome />
            </IconContext.Provider>
            <Link to="/">Home</Link>
          </li>
          <li>
            <IconContext.Provider value={{ className: "icon_h" }}>
              <FaUserPlus />
            </IconContext.Provider>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <IconContext.Provider value={{ className: "icon_h" }}>
              <FaUser />
            </IconContext.Provider>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <IconContext.Provider value={{ className: "icon_h" }}>
              <FaListAlt />
            </IconContext.Provider>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <IconContext.Provider value={{ className: "icon_h" }}>
              <FaCalendarAlt />
            </IconContext.Provider>
            <Link to="/card">Cards</Link>
          </li>
          <li>
            <IconContext.Provider value={{ className: "icon_h" }}>
              <FaChartBar />
            </IconContext.Provider>
            <Link to="/chart">Charts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
