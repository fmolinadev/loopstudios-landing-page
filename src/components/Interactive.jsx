import React from "react";
import User from "../images/mobile/image-interactive.jpg";
import "../styles/Interactive.css";
const Interactive = () => {
  return (
    <>
      <section className="interactive">
        <div className="int-image">
          <img src={User} alt="interactive user" />
        </div>
        <div className="int-text-container">
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
};

export default Interactive;
