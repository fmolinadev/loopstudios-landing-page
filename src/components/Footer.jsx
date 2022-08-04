import React from "react";
import logo from "../images/logo.svg";
import "../styles/Footer.css";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <img src={logo} alt="loopstudios logo" />
          <ul className="links">
            <li>About</li>
            <li>Carrers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <GrFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="copyright">
          &copy; Francisco Molina | Frontendmentor.io.
        </div>
      </footer>
    </>
  );
};

export default Footer;
