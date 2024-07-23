import "../styles/Head.css";
import logo from "../assets/Logo.png";
const Head = () => {
  return (
    <div className="head">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav">
            <a href="/">Accueil</a>
            <a href="/apropos">A Propos</a>
      </nav>
    </div>
  );
};

export default Head;
