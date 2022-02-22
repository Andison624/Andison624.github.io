import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Jammming from "../../images/Jammming.png";
import jammmingSpotify from "../../images/jammmingSpotify.png";
import commentOne from "../../images/commentOne.png";
import commentTwo from "../../images/commentTwo.png";
import "./Project.css";

export default function ProjectFour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="projectFour">
      <div className="project-inner">
        <div className="project-title">
          <div className="project-title-inner">
            <h1>JAMMMING</h1>
            <div className="project-title-text">
              <h4>Completion:2022-3 week</h4>
              <div>
                <a
                  href="https://andison624.github.io/Jammming/"
                  target="_blank"
                  rel="jammming"
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
                In this project, I will build a React web application called
                Jammming. I will use my knowledge of React components, passing
                state, and requests with the Spotify API to build a website that
                allows users to search the Spotify library, create a custom
                playlist, then save it to their Spotify account.
              </p>
            </div>
            <div className="project-head-inner-2">
              <h3>OUTCOME</h3>
              <p>
                I used the HTML and CSS available online and wrote out the
                functionality that the entire web app needed with REACT.
                However, I had no contact with the API and could not fully
                understand it in a short period of time, so I referred to the
                practice of online videos and wrote a lot of comments for future
                research.
              </p>
              <h5>
                <i>SKILLS</i>
              </h5>
              <div className="skill-list">
                <div className="skill">HTML5</div>
                <div className="skill">CSS</div>
                <div className="skill">API</div>
                <div className="skill">JavaScript</div>
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
                    They need to use my knowledge of React components and
                    passing state.
                  </span>
                </div>
                <div className="userWant-2">
                  <h5>02</h5>
                  <span>
                    They need requests with the Spotify API to build a website
                    that allows users to search the Spotify library, create a
                    custom playlist, then save it to their Spotify account.
                  </span>
                </div>
              </div>
            </div>
            <div className="project-body-inner-2">
              <h3>REQUIREMENTS</h3>
              <img src={Jammming}></img>
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h1>PROCESS</h1>
            <p>
              The main goal of this project was to understand how apis worked,
              but I needed to complete the entire web app framework before
              writing the API. I used the HTML and CSS provided by the project
              and then used react to create different classes. Since I had
              completed some SIDE PROJECTs for REACT before starting this
              project, it wasn't difficult to create the react part.
            </p>
            <h1>SOLUTION</h1>
            <p>
              I understand the versatility and role of APIs, so I want to learn
              how to use APIs, like the most commonly used Google Map API. The
              difficulty of the API is more difficult than I expected, Spotify
              provides teaching, I follow the steps to write to make the API
              work, but I don't understand how the API works. Without teaching,
              I wouldn't be able to introduce APIs from scratch. To this end, I
              have added a lot of comments to the FUNCTION, leaving it for
              reference when you need to use the API later.
            </p>
            <img src={commentOne}></img>
            <img src={commentTwo}></img>
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              This web app can run successfully, but I still have a
              half-understanding of the operation of the API and need to learn
              more. In addition, to use this web app, you need to fill in Users
              and Access in the background of{" "}
              <a
                href="https://developer.spotify.com/my-applications/#!/applications"
                target="_blank"
              >
                <i>Spotify</i>
              </a>{" "}
              to use it, otherwise, a 403 error will be displayed.
            </p>
            <div>
              <img src={jammmingSpotify}></img>
            </div>
            <a
              href="https://github.com/Andison624/Jammming"
              target="_blank"
              rel="jammming"
              className="project-footer-btn-one"
            >
              VIEW CODE
            </a>
            <a
              href="https://andison624.github.io/Jammming/"
              target="_blank"
              rel="jammming"
              className="project-footer-btn-two"
            >
              VIEW DEMO
            </a>
            <h5>
              <i>Some key takeaways from this project are:</i>
            </h5>
            <li>How the API works</li>
          </div>
          <Link to="/projectThree">
            <i className="fa-solid fa-angles-left"></i>
          </Link>
          <Link to="/projectFive">
            <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
