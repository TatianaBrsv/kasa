import "../styles/Slider.css";
import React, { useState } from 'react';
import arrowLeft from '../assets/Icones/FlècheGauche.png'
import arrowRight from '../assets/Icones/FlècheDroite.png'

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiplePictures = pictures.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
       {hasMultiplePictures && (
      <button className="slider-button prev" onClick={goToPrevious}>
      <img src={arrowLeft} alt="Previous" className="arrow-icon" />
      </button>
       )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide-image"
      />
      {hasMultiplePictures && (
      <div className="slide-number">
        {currentIndex + 1}/{pictures.length}
      </div>
           )}
           {hasMultiplePictures && (
      <button className="slider-button next" onClick={goToNext}>
      <img src={arrowRight} alt="Next" className="arrow-icon" />
      </button>
           )}
    </div>
  );
};

export default Slider;