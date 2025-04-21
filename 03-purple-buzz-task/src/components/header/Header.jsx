import React, { useState } from "react";
import "./Header.scss";
import { BiBuildings } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline, IoIosSettings, IoMdMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((open)=>!open);
  };

  return (
    <nav>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <BiBuildings />
          <span>Purple</span>
          <span className="buzz">Buzz</span>
        </div>

        {/* Desktop Menu */}
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="icon">
          <IoIosNotificationsOutline className="icons" />
          <IoIosSettings className="icons" />
          <FaRegCircleUser className="icons" />
        </div>

        {/* Mobile Menu */}
        <div className="menuContainer">
          <IoMdMenu className="menu-toggle" onClick={toggleMenu} />
          <nav className={`menu ${menu ? "menu-open" : ""}`}>
            <ul>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
              <div className="icon-tab">
          <IoIosNotificationsOutline className="icons" />
          <IoIosSettings className="icons" />
          <FaRegCircleUser className="icons" />
        </div>
            </ul>
         
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
