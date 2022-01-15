import React from "react";
import Features from "../../components/features/Features";
import About from "../about/About";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";
import "./home.css";

import Poster from "../../assets/poster.jpg";

export default function Home() {
  return (
    <>
      <div className="posterContainer">
        <img alt="image" src={Poster} className="poster" />
      </div>

      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
