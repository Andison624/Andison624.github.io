import React from "react";
import { useEffect } from "react";

import wireframes from "../../images/wireframes.png";
import DemoOne from "../../images/1stDemo.png";
import DemoTwo from "../../images/2ndDemo.png";
import "./Project.css";

export default function ProjectFive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="projectFive">
      <div className="project-inner">
        <div className="project-title">
          <div className="project-title-inner">
            <h1>TO DO LIST</h1>
            <div className="project-title-text">
              <h4>Completion:2021-1 month</h4>
              <div>
                <a
                  href="https://andison624.github.io/ToDoList/"
                  target="_blank"
                  rel="toDoList"
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
                This project is working in a group of 3 people. There are ten
                requirements in total: Design The App Wireframes/ Implement The
                Wireframes using Bootstrap/ Create a Task Card layout and a Task
                List component/ Display The Tasks/ Task Form Inputs Validation/
                Update A Task/ Persisting Tasks to LocalStorage/ Deleting Tasks/
                Test TaskManager.
              </p>
            </div>
            <div className="project-head-inner-2">
              <h3>OUTCOME</h3>
              <p>
                I handle Design The App Wireframes/ Implement The Wireframes
                using Bootstrap/ Create a Task Card layout and a Task List
                component/ Display The Tasks/ Update A Task/ Deleting Tasks. As
                well as some additional challenges such as dark mode, search
                function, and sidebar.
              </p>
              <h5>
                <i>SKILLS</i>
              </h5>
              <div>
                <div className="skills">
                  <span>HTML5</span>
                  <span>CSS</span>
                  <span>ResponsiveWeb</span>
                </div>
                <div className="skills">
                  <span>Bootstrap</span>
                  <span>React-bootstrap</span>
                </div>
                <div className="skills">
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>jQuery</span>
                </div>
                <div className="skills">
                  <span>Figma</span>
                  <span>Jest</span>
                  <span>API</span>
                </div>
              </div>
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
                    They need to create a Task Planner web app from scratch.
                  </span>
                </div>
                <div className="userWant-2">
                  <h5>02</h5>
                  <span>
                    they need to demonstrate the technical and non-technical
                    skills developed during the Junior Web Developer program.
                  </span>
                </div>
              </div>
            </div>
            <div className="project-body-inner-2">
              <h3>REQUIREMENTS</h3>
              <img src={wireframes}></img>
              <div className="project-body-inner-3">
                <h3>Wireframes</h3>
                <img src={DemoOne}></img>
                <img src={DemoTwo}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              The project was conducted in small groups, which gave me an idea
              of how a project can be created from scratch. After understanding
              the ten project requirements, we expressed our opinions to choose
              the part of our handle and added some additional features to make
              the entire Web app more complete and beautiful.
            </p>
            <h5>
              <i>Some key takeaways from this project are:</i>
            </h5>
            <li>
              I learned to react.Hook, which is more convenient than
              React.Component
            </li>
            <li>
              I learned to use Figma to paint sitemaps before creating a web app
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
