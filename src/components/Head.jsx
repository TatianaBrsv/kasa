import "../styles/Head.css";
import logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';
const Head = () => {
  return (
    <div className="head">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
      <Link to="/">Accueil</Link> 
      <Link to="/APropos">A Propos</Link>
      </nav>
    </div>
  );
};

export default Head;
