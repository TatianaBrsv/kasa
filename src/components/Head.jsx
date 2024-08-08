import "../styles/Head.css";
import logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
const Head = () => {
  const location = useLocation();
  return (
    <div className="head">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Accueil
        </Link>
        <Link
          to="/APropos"
          className={location.pathname === "/APropos" ? "active" : ""}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
};

export default Head;
