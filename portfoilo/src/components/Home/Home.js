// import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const line2Data = [
    { str: "I" },
    { str: " " },
    { str: "L" },
    { str: "e" },
    { str: "a" },
    { str: "r" },
    { str: "n" },
    { str: "," },
    { str: " " },
    { str: "C" },
    { str: "o" },
    { str: "d" },
    { str: "e" },
    { str: " " },
    { str: "&" },
    { str: " " },
    { str: "P" },
    { str: "l" },
    { str: "a" },
    { str: "y" },
    { str: "!" },
  ];

  const [hovered, setHovered] = useState(false);
  const toggleClassName = () => {
    setHovered(true);
    setTimeout(() => setHovered(false), 2000);
  };

  return (
    <div className="home">
      <h1 className="line-1">
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
        Hi, I'm{" "}
        <Link to="#" className="myName homeLinkText">
          Andison
        </Link>
      </h1>
      <div className="line-2-text">
        {line2Data.map((line2) => {
          return (
            <h1
              className={`line-2 ${hovered? "hovered": ''}`}
              onMouseEnter={toggleClassName}
            >
              {line2.str}
            </h1>
          );
        })}
      </div>
      <div>
        <p>
          I'm a junior front-end developer in Hong Kong. I'm reinforcing my
          front-end web development knowledge and trying to learn UI/UX. I'm
          passionate about creating interesting web & function, and learning
          different things. Currently, I'm looking for a job related to web
          development.
          <br />
          <Link to="#" className="homeLinkText2">
            Contact me
          </Link>
        </p>
      </div>
    </div>
  );
}
