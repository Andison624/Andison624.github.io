import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import DemoOne from "../../images/frameMap.png";
import DemoTwo from "../../images/color.jpeg";
import Ex1 from "../../images/ex1.gif";
import Ex2 from "../../images/ex2.png";
import Ex3 from "../../images/ex3.png";
import Ex4 from "../../images/ex4.png";
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
            <h1>Portfolio</h1>
            <div className="project-title-text">
              <h4>Completion:2022/Feb 13 - Feb 22</h4>
              <div>
                <a
                  href="https://github.com/Andison624/Andison624.github.io"
                  target="_blank"
                  rel="portfolio"
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
                The first work, which is independently completed from scratch,
                needs to present the knowledge it has as much as possible, and
                at the same time meet the requirements of aesthetics and
                practicality
              </p>
            </div>
            <div className="project-head-inner-2">
              <h3>OUTCOME</h3>
              <p>
                While I successfully presented the knowledge I had, I learned a
                lot of new knowledge during the completion of the work and
                applied it to the work
              </p>
              <h5>
                <i>SKILLS</i>
              </h5>
              <div className="skill-list">
                <div className="skill">HTML5</div>
                <div className="skill">CSS</div>
                <div className="skill">Figma</div>
                <div className="skill">JavaScript</div>
                <div className="skill">React.js</div>
                <div className="skill">React-Hook</div>
                <div className="skill">React-Router</div>
                <div className="skill">React-Animation</div>
                <div className="skill">ResponsiveWeb</div>
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
                  <span>Viewers can easily find the data they want to see</span>
                </div>
                <div className="userWant-2">
                  <h5>02</h5>
                  <span>
                    Without compromising the viewer's experience, present the
                    knowledge I have as much as possible
                  </span>
                </div>
              </div>
            </div>
            <div className="project-body-inner-2">
              <h3>WIREFRAMES</h3>
              <img src={DemoOne}></img>
              <div className="project-body-inner-3">
                <h3>COLORTONE</h3>
                <img src={DemoTwo}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h1>PROCESS</h1>
            <p>
              Before starting coding, I collected a lot of articles on{" "}
              <a
                href="https://www.uiux.studio/ux-deliverables.html"
                target="_blank"
              >
                <i>UIUX</i>
              </a>
              ,
              <a
                href="https://careerfoundry.com/en/blog/ux-design/ux-portfolio-examples-inspiration/"
                target="_blank"
              >
                <i>portfolio creation</i>
              </a>
              , and{" "}
              <a
                href="https://www.shutterstock.com/zh-Hant/blog/complete-guide-color-in-design"
                target="_blank"
              >
                <i>color tone </i>
              </a>
              on the Internet, and based on this, I drew wireframes on Figma and
              started creating. Next, I will explain the difficulties
              encountered during this period
            </p>
            <h1>SOLUTION</h1>
            <h3 className="smallTitle">DYNAMIC CHARACTERS</h3>
            <p>
              In the original version, when the mouse hovered over any
              "animated" text that had a className, it would have all the text
              that owned the className enter the animation synchronously, and
              when the mouse left the text, it would immediately stop the
              animation without playing the entire animation until the end.
            </p>
            <a
              href="https://www.geeksforgeeks.org/rubber-band-text-animation-using-html-and-css/"
              target="_blank"
            >
              <img src={Ex1}></img>
            </a>
            <p>
              I first tried js adding an "animated" className when the mouse
              hovered over text, but I couldn't solve the problem. Then I tried
              to add setTimeout, hoping that the animation would still play
              until the end after the mouse left the text, but there was no
              effect. In the end, after searching a lot of information on the
              Internet, I found that I only needed to apply the method I tried
              earlier on useEffect and apply it to each text in the form of
              forEach, which could be solved and achieve the current effect.
            </p>
            <h3 className="smallTitle">CODE IS TOO REPETITIVE</h3>
            <p>
              When homePage scrolls down, you can see each project appear one by
              one, and for convenience, when I finish writing the first
              template, I copy the same code to complete it. When I finished
              this work, I only discovered this problem while looking for
              something that could be improved. To do this, I changed all the
              codes and completed them in the form of .map.
            </p>
            <img src={Ex2}></img>
            <h3 className="smallTitle">An error occurred with the jump page</h3>
            <p>
              When the user scroll goes down and clicks on any option to jump to
              another page, it will appear where the previous page scroll went.
              Although I couldn't find the place where the problem occurred, I
              also found a solution. I used useEffect, and whenever I go to
              another page, I refresh the window's scroll to the top.
            </p>
            <img src={Ex3}></img>
            <h3 className="smallTitle">RWD MISTAKES</h3>
            <p>
              When I designed RWB, I used my previous experience with a{" "}
              <a
                href="https://github.com/Andison624/Capstone-ColmarAssets"
                target="_blank"
              >
                <i>side project</i>
              </a>
              , media screen using min-width: 801px and max-width: 800px.
              However, after completing it, I found that there were many
              problems. First, on different devices, it can't show the entire
              content, or the size of the content is too large. Secondly, some
              functions will also cause position errors due to size, such as the
              next page icon at the bottom of each page.
            </p>
            <img src={Ex4}></img>
            <p>
              To solve these problems, I searched a lot of articles online and
              learned that RWD needs to meet the size requirements of different
              devices and resize the content according to these dimensions, such
              as the designs commonly used for images, such as the designs that
              are commonly used for images: auto and width: 100%.
            </p>
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              I enjoyed this independent work, such as the project list of
              scroll events, hover images become larger, etc., which made me
              very interesting. In completing this work, I searched a lot of
              different materials, which allowed me to gain more knowledge, such
              as some common mistakes of RWD, the concept of SEO, etc.
            </p>
            <a
              href="https://github.com/Andison624/Andison624.github.io"
              target="_blank"
              rel="portfolio"
              className="project-footer-btn-one"
            >
              VIEW CODE
            </a>
            <h5>
              <i>Some key takeaways from this project are:</i>
            </h5>
            <li>RWD common size: max-width (991px/767px/479px)</li>
            <li>
              SEO optimization: Title is the most important / only use an H1
              tag/Meta tag of Description/img to add alt / reduce the size of
              the image file, speed up website loading / register Google Search
              Console
            </li>
          </div>
          <Link to="/projectFour">
            <i className="fa-solid fa-angles-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
