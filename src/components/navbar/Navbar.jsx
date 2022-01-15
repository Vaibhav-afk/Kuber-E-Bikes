import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Reorder } from "@mui/icons-material";
import "./navbar.css";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">KUBER E-BIKES</span>
          </Link>
        </div>

        <div className="navbarRight">
          <div className="navbarIcon">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              HOME
            </Link>
          </div>

          <div className="navbarIcon">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              ABOUT
            </Link>
          </div>

          <div className="navbarIcon">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              MODELS
            </Link>
          </div>

          <div className="navbarIcon">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              BECOME A DEALER
            </Link>
          </div>

          <button
            className="toggleButton"
            style={{
              border: "1px solid #A0A0A0",
              opacity: "0.7",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Reorder className="toggleButton" style={{ color: "#555" }} />
          </button>
        </div>
      </div>
      <div className={isClicked ? "topbar" : "hide"}>
        <div id="links">
          <div className="topbarOption">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              HOME
            </Link>
          </div>

          <div className="topbarOption">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              ABOUT
            </Link>
          </div>

          <div className="topbarOption">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              MODELS
            </Link>
          </div>

          <div className="topbarOption">
            <Link to="/" style={{ textDecoration: "none", color: "#555555" }}>
              BECOME A DEALER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
