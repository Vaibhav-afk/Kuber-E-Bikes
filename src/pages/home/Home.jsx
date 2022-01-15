import React from "react";
import Features from "../../components/features/Features";
import "./home.css";

import Poster from "../../assets/poster.jpg";

export default function Home() {
  return (
    <>
      <div className="posterContainer">
        <img alt="image" src={Poster} className="poster" />
      </div>
      <div className="featuresContainer">
        <div className="featuresHeading">
          <strong>
            <h1>FEATURES</h1>
          </strong>

          <hr className="line" />
          <Features />
        </div>
      </div>
    </>
  );
}
