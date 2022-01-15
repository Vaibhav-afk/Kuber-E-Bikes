import React from "react";
import "./feature.css";

export default function Feature(props) {
  return (
    <>
      <div className="featureContainer">
        <div className="featureLogo">
          <img
            alt="image"
            style={{ color: "#ff0" }}
            src={props.logo}
            className="featureIcon"
          />
        </div>
        <p className="featureName">{props.name}</p>
      </div>
    </>
  );
}
