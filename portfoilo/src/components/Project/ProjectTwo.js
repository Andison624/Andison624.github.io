import React from "react";
import { useEffect } from "react";
import findYourHatGif from "../../images/find-your-hat-demo.gif";
import "./Project.css";

export default function ProjectTwo() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="projectTwo">
      <div className="project-inner">
        <div className="project-title">
          <div className="project-title-inner">
            <h1>Find Your Hat</h1>
            <div className="project-title-text">
              <h4>Completion:2021-3 week</h4>
              <div>
                <a
                  href="https://github.com/Andison624/Find-Your-Hat"
                  target="_blank"
                  rel="findYourHat"
                  className="project-title-btn"
                >
                  VIEW CODE
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
                In this project, I need to build an interactive terminal game.
                The scenario is that the player has lost their hat in a field
                full of holes, and they must navigate back to it without falling
                down one of the holes or stepping outside of the field.
              </p>
            </div>
            <div className="project-head-inner-2">
              <h3>OUTCOME</h3>
              <p>
                In this project, I built an interactive terminal game with
                JavaScript classes. I build this mini-game by looking at a
                dynamic gif image and to add to the fun, I added other
                difficulty options to the basic requirements.
              </p>
              <h5>
                <i>SKILLS</i>
              </h5>
              <span>JavaScript</span>
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
                    When users fall down one of the holes or step outside the
                    map, show they are defeated.
                  </span>
                </div>
                <div className="userWant-2">
                  <h5>02</h5>
                  <span>When users find the hat, show they are won.</span>
                </div>
              </div>
            </div>
            <div className="project-body-inner-2">
              <h3>REQUIREMENTS</h3>
              <img src={findYourHatGif}></img>
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              This project got me to practice a lot of JavaScript basics such as
              If than else, class, and loop. Since React is the world of
              classes, it is easier for me to learn to react by relying on what
              I learned in this project.
            </p>
            <h5>
              <i>Some key takeaways from this project are:</i>
            </h5>
            <li>Intensifier If than else, class, and loop.</li>
            <li>Learn more about what a class is and make it easy to learn react</li>
          </div>
        </div>
      </div>
    </div>
  );
}
