import React from "react";
import cv from '../NavBar/AndisonSuen.pdf';
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div className="about-inner">
        <h1>About</h1>
        <p>
          Recent, graduate of Hong Kong Jockey Club's Generation Front-End Web
          Developer Program, I am seeking an entry-level position in the areas
          of user experience and front-end design for web and mobile
          applications using HTML5, React, and other JS-based Content Management
          Systems.{" "}
        </p>
        <p>
          Previous experience in high-pressure, client service delivery roles
          prepared me to handle the challenging demands in an Agile IT
          development environment.
        </p>
        <a href={cv} target="_blank" className="resume-btn">Resume</a>
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
  );
}
