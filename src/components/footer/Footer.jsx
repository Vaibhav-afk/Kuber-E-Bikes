import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerCopyright">
          <p>© Kuber E-Bikes 2021 All rights reserved.</p>
        </div>

        <div className="footerFbLogo">
          <a
            href="https://www.facebook.com/kuberebikes"
            style={{ textDecoration: "none" }}
            target="_blank"
          >
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              height="14px"
              width="14px"
            />
          </a>
        </div>

        <div className="footerOwnedBy">
          <p>
            Made with in
            <Link to="/" style={{ textDecoration: "none", color: "#608dfd" }}>
              <strong> Kuber E-Bikes</strong>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
