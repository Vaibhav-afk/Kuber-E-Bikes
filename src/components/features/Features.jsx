import Feature from "../feature/Feature";
import React from "react";
import "./features.css";

//local Svg icons imports
import Tools from "../../assets/tools.svg";
import Book from "../../assets/book.svg";
import Leaf from "../../assets/leaf.svg";
import Id from "../../assets/id.svg";

export default function Features() {
  return (
    <div className="features">
      <div className="featuresWrapper">
        <Feature logo={Leaf} name="Eco Friendly" />
        <Feature logo={Tools} name="Low Maintainance" />
        <Feature logo={Id} name="No License" />
        <Feature logo={Book} name="No Registration" />
      </div>
    </div>
  );
}
