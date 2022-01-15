import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
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
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#555555" }}
            >
              HOME
            </Link>
          </div>

          <div className="navbarIcon">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#555555" }}
            >
              ABOUT
            </Link>
          </div>

          <div className="navbarIcon">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#555555" }}
            >
              MODELS
            </Link>
          </div>

          <div className="navbarIcon">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#555555" }}
            >
              BECOME A DEALER
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
