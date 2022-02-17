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
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=andison624@gmail.com"
            target="_blank"
            rel="email"
          >
            <h3>andison624@gmail.com</h3>
          </a>
          <p>Get in touch with me just click these. Let's connect.</p>
          <div className="footer-img">
            <a
              href="https://github.com/Andison624"
              target="_blank"
              rel="github"
              className="footer-img-inner"
            >
              <img src={github}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/andison624/"
              target="_blank"
              rel="linkedin"
              className="footer-img-inner"
            >
              <img src={linkedin}></img>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=andison624@gmail.com"
              target="_blank"
              rel="email"
              className="footer-img-inner"
            >
              <img src={mail}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
