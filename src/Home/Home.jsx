import React from 'react';
import Banner from "../components/Banner.jsx";
import AnimatedFooter from "../components/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Freegames from '../components/Freegames.jsx';
import Navbar from '../components/Navbar.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freegames />
      <AnimatedFooter />
    </>
  );
}

export default Home;