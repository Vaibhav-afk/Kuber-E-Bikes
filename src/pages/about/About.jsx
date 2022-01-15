import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutHeading">
          <strong>
            <h1>ABOUT US</h1>
          </strong>
          <hr className="aboutUnderline" />
        </div>

        <p className="aboutUsStatement">
          Kuber E-bikes is one of India’s leading electric two-wheeler
          manufacturer. Our goal is to build a better, cleaner and greener
          future for the generations to come.
        </p>

        <p className="why">Why Choose Us?</p>
        <ul type="square">
          <li className="perks">Best Products</li>
          <li className="perks">Quality Service</li>
          <li className="perks">Trusted Dealers</li>
          <li className="perks">Excellent Support</li>
        </ul>
      </div>
    </>
  );
}
