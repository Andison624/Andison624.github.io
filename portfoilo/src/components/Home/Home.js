// import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
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
      <h1 className="line-2">
        I{" "}
        <Link to="#" className="homeLinkText">
          learn
        </Link>
        ,{" "}
        <Link to="#" className="homeLinkText">
          code
        </Link>{" "}
        &{" "}
        <Link to="#" className="homeLinkText">
          play
        </Link>
        <strong>!</strong>
      </h1>
      <div>
        <p>
          I'm a junior front-end developer in Hong Kong. I'm reinforcing my front-end
          web development knowledge and trying to learn UI/UX. I'm passionate
          about creating interesting web & function, and learning different
          things. Currently, I'm looking for a job related to web development.
          <br />
          <Link to="#" className="homeLinkText2">
            Contact me
          </Link>
        </p>
      </div>
    </div>
  );
}
