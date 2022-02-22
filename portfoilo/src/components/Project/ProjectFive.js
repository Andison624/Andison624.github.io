import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
              <div className="skill-list">
                <div className="skill">HTML5</div>
                <div className="skill">CSS</div>
                <div className="skill">Figma</div>
                <div className="skill">JavaScript</div>
                <div className="skill">React.js</div>
                <div className="skill">Bootstrap</div>
                <div className="skill">React-bootstrap</div>
                <div className="skill">jQuery</div>
                <div className="skill">API</div>
                <div className="skill">Jest</div>
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
                <h3>WIREFRAMES</h3>
                <h4>BEFORE</h4>
                <img src={DemoOne}></img>
                <h4>AFTER</h4>
                <img src={DemoTwo}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="project-footer">
          <div className="project-footer-inner">
            <h1>PROCESS</h1>
            <p>
              Before the coding starts, we'll discuss the necessary features of
              the to-do list, as well as the extra features we want to add.
              After drawing the wireframe of the to-do list, we built the
              framework using HTML, CSS, and bootstrap. For added convenience,
              we used React .js to make the project instead, and React.Hook
              replaced React.Component and React-bootstrap instead of bootstrap.
              Next, work is assigned to work on the project.
            </p>
            <h1>SOLUTION</h1>
            <h3 className="smallTitle">ADD TASK FUNCTION</h3>
            <p>
              After I co-organized the general framework with the team members,
              I began the functional part that I was responsible for. I pick
              some of the more special parts that I am responsible for to
              illustrate. The first is the add task function, I used useState to
              place the Task data, facilitate the team member in charge of the
              data to change, and use .map to loop out each new task.
            </p>
            <h3 className="smallTitle">UPDATE TASK FUNCTION</h3>
            <p>
              The second is the update task function, at the beginning, I was
              going to use the bootstrap top up the screen to present this
              function, just considering that my add task function is not using
              the top up screen to display. Finally, I used the pen img in the
              task to directly update the information in the task.
            </p>
            <h3 className="smallTitle">
              TICK TASK TO DONE & DELETE TASK FUNCTION
            </h3>
            <p>
              The next feature I'm going to say is to display the task as done
              after tapping and to delete the done task. Clicking on the task
              shows as a don, is the most important feature of the entire to do
              list, so I chose a tick button and changed the task's title to a
              light color as well as added a delete symbol to present this
              function. I used className to add done to accomplish this. As for
              the deletion function, it is to determine whether the task has a
              done className, and if it is displayed as true, it will be
              deleted.
            </p>
            <h3 className="smallTitle">SEARCH TASK FUNCTION</h3>
            <p>
              After the team member responsible for writing the data completed
              the local data, I started to write the search function. I wrote it
              using the search function I learned from the last jammming
              project. Since it is not an API, I need to write the actual search
              function myself, I use it to determine whether the length of the
              search input is 0 to perform this function. When there is nothing
              in the input bar, all tasks are displayed. When there is input,
              the task title is searched, and only tasks with the same text are
              displayed.
            </p>
            <h3 className="smallTitle">ADD TASK FUNCTION</h3>
            <p>
              Finally, there are some interesting features that I decided to
              add, which are sidebar and dark mode. Sidebar is very commonly
              used, so I took the opportunity to add them. Dark mode has also
              been a very popular feature lately, so I tried it out as well.
              Interestingly, after using jQuery to complete the dark mode, I
              found a more convenient way to write it, which is CSS custom
              properties. I should try this feature next time I need to use
              similar CSS.
            </p>
            <h3>RESULTS AND TAKEAWAYS</h3>
            <p>
              The project was conducted in small groups, which gave me an idea
              of how a project can be created from scratch. After understanding
              the ten project requirements, we expressed our opinions to choose
              the part of our handle and added some additional features to make
              the entire Web app more complete and beautiful. In fact, I have
              not participated in the two parts of data and test, and do not
              understand how it actually works. Therefore, in the future, I need
              to check related articles to increase my knowledge.
            </p>
            <a
              href="https://github.com/Andison624/ToDoList"
              target="_blank"
              rel="toDoList"
              className="project-footer-btn-one"
            >
              VIEW CODE
            </a>
            <a
              href="https://andison624.github.io/ToDoList/"
              target="_blank"
              rel="toDoList"
              className="project-footer-btn-two"
            >
              VIEW DEMO
            </a>
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
          <Link to="/projectFour">
            <i className="fa-solid fa-angles-left"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
