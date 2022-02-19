// import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProjectList from '../ProjectList/ProjectList.js';
import "./Home.css";

export default function Home() {
  useEffect(() => {
      // https://github.com/bartzalewski/rubber-band-effect
      const textEl = document.querySelector(".rubber-band");
      if (textEl) {
        const text = textEl.textContent;
        const swap = text.replace(/\s/g, " ");
        const letters = swap.split("");
        const makeSpan = (letter) =>
          `<span class="rubber-span">${letter}</span>`;
        let html = "";
        letters.forEach((letter) => (html += makeSpan(letter)));
        textEl.innerHTML = html;
      }
      const spans = document.querySelectorAll(".rubber-span");
      spans.forEach((span) => {
        span.addEventListener("mouseover", () =>
          span.classList.add("animated", "rubberBand")
        );
      });
      spans.forEach((span) =>
        span.addEventListener("mouseout", () =>
          setTimeout(() => {
            span.classList.remove("animated", "rubberBand");
          }, 1000)
        )
      );
  },[]);

  return (
    <div /* className="home" */>
      <div className="home">
      <h1 className="line-1">
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
        Hi, I'm{" "}
        <Link to="/about" className="myName homeLinkText">
          Andison
        </Link>
      </h1>
      <div className="line-2-text">
        <h1 className="line-2 rubber-band">I Learn, Code & Play!</h1>
      </div>
      <div>
        <p>
          I'm a junior front-end developer in Hong Kong. I'm reinforcing my
          front-end web development knowledge and trying to learn UI/UX. I'm
          passionate about creating interesting web & function, and learning
          different things. Currently, I'm looking for a job related to web
          development.
          <br />
          <Link to=".footer" className="homeLinkText2">
            Contact me
          </Link>
        </p>
      </div>
      </div>
      <ProjectList/>
    </div>
  );
}
