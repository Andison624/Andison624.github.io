import { Link } from "react-router-dom";
import cv from "./AndisonSuen.pdf";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav id="nav-menu" className="nav-menu">
      <div>
        <span>
          <Link to="/" className="title homepage">
            Andison
          </Link>
        </span>
      </div>
      <div>
        <span>
          {/*           <Link to="#" className="title">
            Work
          </Link> */}
          <div className="dropdown">
            <span className="dropbtn title">SideProject&nbsp;<i class="fa-solid fa-caret-down"></i></span>
            <div className="dropdown-content">
              <Link to="/projectOne">Case 1</Link>
              <Link to="/projectTwo">Case 2</Link>
              <Link to="/projectThree">Case 3</Link>
              <Link to="/projectFour">Case 4</Link>
              <Link to="/projectFive">Case 5</Link>
            </div>
          </div>
          <a href={cv}  target="_blank" className="title">
          Resume
          </a>
          <Link to="/about" className="title">
            About
          </Link>
        </span>
      </div>
    </nav>
  );
}
