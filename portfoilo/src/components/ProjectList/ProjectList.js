import React from "react";
import { Link } from "react-router-dom";

import ColmarAcademy from "../../images/ColmarAcademy.png";
import FindYourHat from "../../images/FindYourHat.png";
import NumberGuesser from "../../images/NumberGuesser.png";
import Jammming from "../../images/Jammming.png";
import ToDoList from "../../images/ToDoList.png";

import "./ProjectList.css";

export default function Project() {

  const pjData = [
    {
      id: "colmarAcademy",
      pjTitle: "Colmar Academy",
      pjDetail:
        "My first side project, a web template need to use HTML5, CSS, and Responsive Web Design as project requirements. Outside of the project requirements, I joined the bootstrap framework to complete this side project.",
      src: ColmarAcademy,
      alt: "Colmar Academy Side Project",
      style:{opacity: 1}
    },
    {
      id: "findYourHat",
      pjTitle: "Find Your Hat",
      pjDetail:
      "This is my first side project after learning JavaScript, only using four patterns and JS language to create this mini-game that can run in a terminal. To add challenges, in addition to the project requirements, I added Hardmode to make this mini-game more  interesting.",
      src: FindYourHat,
      alt: "Find Your Hat Side Project",
      style:{opacity: 2}
    },
    {
      id: "numberGuesser",
      pjTitle: "Number Guesser",
      pjDetail:
      "A little game that mixed the HTML5, CSS, and JavaScript languages. I learned, this game is the system randomly picks a number, then the player and the computer each pick a number, and the party closest to the system's random number wins.",
      src: NumberGuesser,
      alt: "Number Guesser Side Project",
      style:{opacity: 3}
    },
    {
      id: "jammming",
      pjTitle: "Jammming",
      pjDetail:
      "In this side project, I build a React web application called. Jammming. I use React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.",
      src: Jammming,
      alt: "Jammming Side Project",
      style:{opacity: 4}
    },
    {
      id: "toDoList",
      pjTitle: "To Do List",
      pjDetail:
      "It's a one-month side project by three people, that uses all the knowledge I've learned, starting with design, exchanging ideas with team members, and sharing suggestions, a web app that can really be used by others.",
      src: ToDoList,
      alt: "To Do List Side Project",
      style:{opacity: 5}
    },
  ];

  // (https://alvarotrigo.com/blog/css-animations-scroll/)
  const reveal =() => {
    var reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
    <div className="projectList">
      <span className="reveal">──────&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Side Project</span>
      <div className="sideProjectList">
        {pjData.map((pj, col) => {
          return col % 2 == 0 ? (
            <div
              id={pj.id}
              className="sideProject reveal"
              style={pj.style}
            >
              <div className="sideProject-text">
                <h3>{pj.pjTitle}</h3>
                <p>{pj.pjDetail}</p>
                <Link to="#" className="readMore-btn">
                  Read More
                </Link>
              </div>
              <div className="sideProject-img">
                <img src={pj.src} alt={pj.alt} />
              </div>
            </div>
          ) : (
            <div
              id={pj.id}
              className="sideProject reveal"
            >
              <div className="sideProject-img">
                <img src={pj.src} alt={pj.alt} />
              </div>
              <div className="sideProject-text">
                <h3>{pj.pjTitle}</h3>
                <p>{pj.pjDetail}</p>
                <Link to="#" className="readMore-btn">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
