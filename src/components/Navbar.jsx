import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/">
          {" "}
          <span className="logo">Tours</span>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={30} style={{ color: "#fff" }} /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">
              <FaHome /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <FaInfoCircle /> About
            </a>
          </li>
          <li className="nav-item">
            <a href="/">
              <FaPlane />
              Tour
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
