import "../styles/Card.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Card;