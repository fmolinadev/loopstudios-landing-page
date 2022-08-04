import React from "react";
import Card from "./Card";
import dataMobile from "./common/mobile";
import "../styles/OurCreations.css";

const OurCreations = () => {
  const data = dataMobile;

  return (
    <>
      <section className="creations-mobile">
        <h2>Our Creations</h2>
        <div>
          {data.map((oneCard) => {
            // console.log(oneCard);
            return (
              <Card
                key={oneCard.id}
                title={oneCard.title}
                cover={oneCard.cover}
              />
            );
          })}
        </div>
        <div className="container-btn">
          <button className="btn">See All</button>
        </div>
      </section>
    </>
  );
};

export default OurCreations;
