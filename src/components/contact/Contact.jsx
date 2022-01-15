import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import India from "../../assets/india.jpg";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contactContainer">
          <div className="contactBlock">
            <h4 className="contactBlockTitle">Get in Touch</h4>
            <p className="contactDetail">Contact Us on +918950754626</p>
            <p className="contactDetail">Email Us on info@kuberebikes.com</p>
          </div>

          <div className="contactBlock">
            <h4 className="contactBlockTitle">Quick Links</h4>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="contactBlockItem">Home</p>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="contactBlockItem">About Us</p>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="contactBlockItem">Become a Dealer</p>
            </Link>
          </div>

          <div className="contactBlock">
            <h4 className="contactBlockTitle">Models</h4>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="contactBlockItem">Juniper</p>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="contactBlockItem">Festiva</p>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="contactBlockItem">Vamos</p>
            </Link>
          </div>
        </div>
        <div className="contactBlockImage">
          <img className="india" alt="image" src={India} />
        </div>
      </div>
    </>
  );
}
