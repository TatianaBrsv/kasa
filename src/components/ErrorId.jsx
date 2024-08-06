import React from 'react';
import "../styles/Error.css"; // Импортируйте стили, если нужно
import Head from "./Head";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ErrorId = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <Head />
        <div className="error-content">
          <h4 className="error-title">Erreur</h4>
          <p className="error-message">
            L'ID que vous avez entré est invalide. Veuillez vérifier et réessayer.
          </p>
          <Link to="/" className="goback">Retourner à la page d'accueil</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorId;