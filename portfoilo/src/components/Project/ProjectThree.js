import React from "react";
import { useEffect } from "react";
import NumberGuesser from "../../images/numberGuesserSpec.png";
import "./Project.css";

export default function ProjectThree() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="projectThree">
      <div className="project-inner">
        <div className="project-title">
          <div className="project-title-inner">
            <h1>Number Guesser</h1>
            <div className="project-title-text">
              <h4>Completion:2021-3 week</h4>
              <div>
                <a
                  href="https://andison624.github.io/Number-Guesser/"
                  target="_blank"
                  rel="numberGuesser"
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
                In this project, I write JavaScript functions to power a small
                guessing game. This time, my code will run in the browser
                instead of just the terminal. Instead of just seeing text output
                from my program, my JavaScript functions are incorporated into a
                website that also uses HTML/CSS.
              </p>
            </div>
            <div className="project-head-inner-2">
              <h3>OUTCOME</h3>
              <p>
                In addition to the project requirements, I have added some
                interactive features to make this project more interesting and
                more comfortable for users. It's as if a sign will appear when
                winning and losing. Provides a next round button to reset the
                game without having to rearrange the page.
              </p>
              <h5>
                <i>SKILLS</i>
              </h5>
              <span>HTML5</span>
              <span>CSS</span>
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
                    They need NPC to provide a random set of numbers as targets.
                  </span>
                </div>
                <div className="userWant-2">
                  <h5>02</h5>
                  <span>
                    They need after the computer player and the user provides a
                    number, which side's number is closer to the NPC's random
                    number to determine which side wins.
                  </span>
                </div>
              </div>
            </div>
            <div className="project-body-inner-2">
              <h3>REQUIREMENTS</h3>
              <img src={NumberGuesser}></img>
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              
            </p>
            <h5>
              <i>Some key takeaways from this project are:</i>
            </h5>
            <li>
              
            </li>
            <li></li>
          </div>
        </div>
      </div>
    </div>
  );
}
