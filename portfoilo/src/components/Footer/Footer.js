import React from "react";
import { Link } from "react-router-dom";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import mail from "../../images/email.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="contact">
          <Link to="#">
            <h3>andison624@gmail.com</h3>
          </Link>
          <p>Get in touch with me just click these. Let's connect.</p>
          <div className="footer-img">
            <Link to="#" className="footer-img-inner">
              <img src={github}></img>
            </Link>
            <Link to="#" className="footer-img-inner">
              <img src={linkedin}></img>
            </Link>
            <Link to="#" className="footer-img-inner">
              <img src={mail}></img>
            </Link>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
