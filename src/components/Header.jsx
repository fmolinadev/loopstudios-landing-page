import React from "react";
import logo from "../images/logo.svg";
import "../styles/Header.css";

const Header = () => {
  const viewMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
      navbar.classList.toggle("open");
      menuBtn.classList.toggle("rotate");
    });
  };

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
        <nav>
          <div className="nav-logo">
            <img
              src={logo}
              alt="Loopstudios logo"
              aria-label="Logo de Logostudios"
            />
          </div>
          <ul>
            <li>About</li>
            <li>Carrers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="menu-btn" onClick={() => viewMenu()}>
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
