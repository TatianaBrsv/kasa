import "../styles/Footer.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import logoFooter from "../assets/LogoFooter.png";
import textFooter from "../assets/TextFooter.png";
import textFooterMobile from "../assets/TextFooterMobile.png";

const Footer = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 375;
  return (
    <footer className="Footer">
      <img src={logoFooter} alt="logoFooter" className="logoFooter" />
      <img
        src={isMobile ? textFooterMobile : textFooter}
        alt="textFooter"
        className="textFooter"
      />
    </footer>
  );
};
export default Footer;
