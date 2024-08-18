import React from "react";
import "../styles/Home.css";
import Head from "../components/Head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import CardList from "../components/CardListe";

const Home = () => {
  return (
    <div className="home-container">
      <Head />
      <Banner
        type="home"
        text="Chez vous, partout et ailleurs"
        className="banner"
      />
      <CardList/>
      <Footer />
    </div>
  );
};

export default Home;
