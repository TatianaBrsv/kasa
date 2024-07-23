import Photo from '../assets/Image_accueil.png'
import '../styles/Banner.css'
const Banner = () => {
    return (
      <div className='banner'>
        <img src = {Photo} alt='Image_accueil'/>
        <div className="banner-text">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      </div>
    );
  };
  
  export default Banner;