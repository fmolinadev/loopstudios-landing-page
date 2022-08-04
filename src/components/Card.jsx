import React from "react";
import "../styles/Card.css";
const Card = ({ cover, title }) => {
  return (
    <article className="card">
      <img src={cover} alt="cover card" />
      <h4>{title}</h4>
    </article>
  );
};
export default Card;
