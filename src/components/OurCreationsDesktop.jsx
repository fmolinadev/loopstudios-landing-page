import React from "react";
import Card from "./Card";
import dataDesktop from "./common/desktop";
import "../styles/OurCreationsDesktop.css";

const OurCreationsDesktop = () => {
  const data = dataDesktop;

  return (
    <>
      <section className="creations-desktop">
        <header className="header-creations">
          <h2>Our Creations</h2>
          <div className="container-btn">
            <button className="btn">See All</button>
          </div>
        </header>
        <div>
          {data.map((oneCard) => {
            return (
              <Card
                key={oneCard.id}
                title={oneCard.title}
                cover={oneCard.cover}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurCreationsDesktop;
