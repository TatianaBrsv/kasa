import React, { useState } from "react";
import "../styles/Collapse.css";
import openIcon from "../assets/Icones/VectorOpen.png";
import closeIcon from "../assets/Icones/VectorClose.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };


  const handleIconClick = (event) => {
    event.stopPropagation(); 
    toggleCollapse();
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <span className="title">{title}</span>
        <span
          className="collapse-icon"
          onClick={handleIconClick}
          style={{ backgroundImage: `url(${isOpen ? closeIcon : openIcon})` }}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p className="content">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
