import "../styles/Banner.css";

import MainImage from "../assets/Image_accueil.png";
import AboutImage from "../assets/Image_apropos.png";

const Banner = ({ type, text, className }) => {
  const image = type === "home" ? MainImage : AboutImage;

  return (
    <div className={`banner ${className}`}>
      <img src={image} alt="Banner" />
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
