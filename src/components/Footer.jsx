import "../styles/Footer.css";

import logoFooter from "../assets/LogoFooter.png";
import textFooter from "../assets/TextFooter.png";


const Footer = () => {
    return(
        <footer className="Footer">
            <img src={logoFooter} alt="logoFooter" className="logoFooter" />
            <img src={textFooter} alt="textFooter" className="textFooter" />
        </footer>
    )
}
export default Footer;
