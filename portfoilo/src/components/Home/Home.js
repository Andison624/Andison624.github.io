// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1 className="line-1">
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
        Hi, I'm{" "}
        <Link to="#" className="myName homeA">
          Andison
        </Link>
      </h1>
      <h1 className="line-2">
        I <Link to="#" className="homeA">learn</Link>, <Link to="#" className="homeA">code</Link> &{" "}
        <Link to="#" className="homeA">play</Link>
        <strong>!</strong>
      </h1>

      <p>
        I'm a front-end developer in Hong Kong. I'll equip myself with the
        knowledge of learning UI/UX and backend. I'm passionate about creating
        interesting works, and learning different things.
      </p>
    </div>
  );
}
