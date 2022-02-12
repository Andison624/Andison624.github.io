import React from "react";
import { Link } from "react-router-dom";
import ColmarAcademy from "../../images/ColmarAcademy.png";
import FindYourHat from "../../images/FindYourHat.png";
import NumberGuesser from "../../images/NumberGuesser.png";
import Jammming from "../../images/Jammming.png";
import ToDoList from "../../images/ToDoList.png";
import "./ProjectList.css";

export default function Project() {
  return (
    <div className="projectList">
      <span>──────&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Side Project</span>
      <div className="sideProjectList">
        <div id="colmarAcademy" className="sideProject">
          <div className="sideProject-text">
            <h3>Colmar Academy</h3>
            <p>
              My first side project, a web template need to use HTML5, CSS, and
              Responsive Web Design as project requirements. Outside of the
              project requirements, I joined the bootstrap framework to complete
              this side project.
            </p>
            <Link to="#" className="readMore-btn">
              Read More
            </Link>
          </div>
          <div className="sideProject-img">
            <img src={ColmarAcademy} alt="Colmar Academy Side Project" />
          </div>
        </div>
        <div id="findYourHat" className="sideProject">
          <div className="sideProject-img">
            <img src={FindYourHat} alt="Find Your Hat Side Project" />
          </div>
          <div className="sideProject-text">
            <h3>Find Your Hat</h3>
            <p>
              This is my first side project after learning JavaScript, only
              using four patterns and JS language to create this mini-game that
              can run in a terminal. To add challenges, in addition to the
              project requirements, I added Hardmode to make this mini-game more
              interesting.
            </p>
            <Link to="#" className="readMore-btn">
              Read More
            </Link>
          </div>
        </div>
        <div id="numberGuesser" className="sideProject">
          <div className="sideProject-text">
            <h3>Number Guesser</h3>
            <p>
              A little game that mixed the HTML5, CSS, and JavaScript languages
              I learned, this game is the system randomly picks a number, then
              the player and the computer each pick a number, and the party
              closest to the system's random number wins.
            </p>
            <Link to="#" className="readMore-btn">
              Read More
            </Link>
          </div>
          <div className="sideProject-img">
            <img src={NumberGuesser} alt="Number Guesser Side Project" />
          </div>
        </div>
        <div id="jammming" className="sideProject">
          <div className="sideProject-img">
            <img src={Jammming} alt="Jammming Side Project" />
          </div>
          <div className="sideProject-text">
            <h3>Jammming</h3>
            <p>
              In this side project, I build a React web application called
              Jammming. I use React components, passing state,
              and requests with the Spotify API to build a website that allows
              users to search the Spotify library, create a custom playlist,
              then save it to their Spotify account. 
            </p>
            <Link to="#" className="readMore-btn">
              Read More
            </Link>
          </div>
        </div>
        <div id="toDoList" className="sideProject" style={{padding:'10px'}}>
          <div className="sideProject-text">
            <h3>To Do List</h3>
            <p>
              It's a one-month side project by three people, that uses all the
              knowledge I've learned, starting with design, exchanging ideas
              with team members, and sharing suggestions, a web app that can
              really be used by others.
            </p>
            <Link to="#" className="readMore-btn">
              Read More
            </Link>
          </div>
          <div className="sideProject-img">
            <img src={ToDoList} alt="To Do List Side Project" />
          </div>
        </div>
      </div>
    </div>
  );
}
