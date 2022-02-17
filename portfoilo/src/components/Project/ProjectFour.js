import React from "react";
import "./Project.css";

export default function ProjectFour() {
  return (
    <div id="projectFour">
      <div className="project-inner">
        <div className="project-title">
          <div className="project-title-inner">
            <h1>COLMAR ACADEMY</h1>
            <div className="project-title-text">
              <h4>Completion:2021-1 week</h4>
              <div>
                <a
                  href="https://andison624.github.io/Capstone-ColmarAssets/"
                  target="_blank"
                  rel="colmarAcademy"
                  className="project-title-btn"
                >
                  VIEW DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-head">
          <div className="project-head-inner">
            <div className="project-head-inner-1">
              <h3>CHALLENGE</h3>
              <p>
                This project provides both desktop and responsive versions of
                the image, which need to be done in one week according to the
                size and layout requirements provided.
              </p>
            </div>
            <div className="project-head-inner-2">
              <h3>OUTCOME</h3>
              <p>
                To complete this project within the target timeframe, I used
                bootstrap framework to complete this challenge.
              </p>
              <h5>
                <i>SKILLS</i>
              </h5>
              <span>HTML5</span>
              <span>CSS</span>
              <span>ResponsiveWeb</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
        <div className="project-body">
          <div className="project-body-inner">
            <div className="project-body-inner-1">
              <h3>WHAT DO USERS WANT?</h3>
              <div className="userWant">
                <div className="userWant-1">
                  <h5>01</h5>
                  <span>
                    They need the project to match the size and layout required
                    within the images they provide.
                  </span>
                </div>
                <div className="userWant-2">
                  <h5>02</h5>
                  <span>
                    They need both desktop and the responsive versions.
                  </span>
                </div>
              </div>
            </div>
            <div className="project-body-inner-2">
              <h3>REQUIREMENTS</h3>
              {/* <img src={}></img> */}
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              With the popularity of 3G, more and more people are using mobile
              phones to access the Internet. Mobile devices are overtaking
              desktop devices as the most common terminals to access the
              Internet.This project allowed me to be exposed to this concept,
              which I believe can be applied to future projects.
            </p>
            <h5>
              <i>Some key takeaways from this project are:</i>
            </h5>
            <li>
              As getting into bootstrap, I learned about the convenience of
              framework
            </li>
            <li>Search the responsive profile, know-how does its importanc</li>
          </div>
        </div>
      </div>
    </div>
  );
}
