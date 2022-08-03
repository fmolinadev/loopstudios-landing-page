import React from "react";
import logo from "../images/logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src={logo}
            alt="Loopstudios logo"
            aria-label="Logo de Logostudios"
          />
        </div>
        <nav className="navbar">
          <ul>
            <li>About</li>
            <li>Carrers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="menu-btn">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
