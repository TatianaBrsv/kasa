import '../styles/APropos.css'
import Head from "../components/Head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse"
import CollapsesData from '../data/CollapseData';
const APropos = () => {
    return (
      <div className="home-container">
        <Head />
        <Banner 
        type="about" 
        text="" 
        className="aPropos-banner"
      />
        {CollapsesData.map((collapse, index) => (
        <Collapse
          key={index}
          title={collapse.title}
          content={collapse.content}
        />
      ))}
        <Footer />
      </div>
    );
  };
  export default APropos;
  