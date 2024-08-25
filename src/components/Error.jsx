import "../styles/Error.css";
import Head from "./Head";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <Head />
        <div className="error-content">
          <h4 className="error-title">404</h4>
          <p className="error-message">
            Oups! La page que
            <span className="mobile-break"><br /></span> 
            <span className="desktop-space"> </span>
            vous demandez n'existe pas.
          </p>
          <Link to="/" className="goback">
            Retourner à la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;