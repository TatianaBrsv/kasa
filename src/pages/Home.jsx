
import React from 'react';
import "../styles/Home.css";
import Head from "../components/Head";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Head />
      <Banner />
      <Card />
      <Footer/>
    </div>
  );
};
export default Home;
