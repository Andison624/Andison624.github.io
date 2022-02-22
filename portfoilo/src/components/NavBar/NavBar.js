import { Link } from "react-router-dom";
import { useState } from "react";
import cv from "./AndisonSuen.pdf";
import "./NavBar.css";

export default function NavBar() {
  const [hamHeight, setHamHeight] = useState("0px");
  const handleOpen = () => {
    setHamHeight("100%");
  };
  const handleClose = () => {
    setHamHeight("0px");
  };
  return (
    <nav id="nav-menu" className="nav-menu">
      <div>
        <span>
          <Link to="/" className="title homepage">
            Andison
          </Link>
        </span>
      </div>
      <div className="desktop">
        <span>
          {/*           <Link to="#" className="title">
            Work
          </Link> */}
          <div className="dropdown">
            <span className="dropbtn title">
              SideProject&nbsp;<i className="fa-solid fa-caret-down"></i>
            </span>
            <div className="dropdown-content">
              <Link to="/projectOne">Case 1</Link>
              <Link to="/projectTwo">Case 2</Link>
              <Link to="/projectThree">Case 3</Link>
              <Link to="/projectFour">Case 4</Link>
              <Link to="/projectFive">Case 5</Link>
            </div>
          </div>
          <a href={cv} target="_blank" className="title">
            Resume
          </a>
          <Link to="/about" className="title">
            About
          </Link>
        </span>
      </div>
      <div className="mobile">
        <button className="openbtn" onClick={handleOpen}>
          ☰
        </button>
        <div
          id="mySidepanel"
          className="sidepanel"
          style={{ height: hamHeight }}
        >
          <span
            href="javascript:void(0)"
            className="closebtn"
            value="x"
            onClick={handleClose}
          >
            ×
          </span>
          <div className="hamList-top hamList">
            <a href={cv} target="_blank" className="title" onClick={handleClose}>
              Resume
            </a>
          </div>
          <div className=" hamList">
            <Link to="/about" className="title" onClick={handleClose}>
              About
            </Link>
          </div>
          <div className="hamDropdown  hamList">
            <span className="hamDropbtn">SideProject</span>
            <div className="case">
              <Link to="/projectOne" onClick={handleClose}>Case 1</Link>
            </div>
            <div className="case">
              <Link to="/projectTwo" onClick={handleClose}>Case 2</Link>
            </div>
            <div className="case">
              <Link to="/projectThree" onClick={handleClose}>Case 3</Link>
            </div>
            <div className="case">
              <Link to="/projectFour" onClick={handleClose}>Case 4</Link>
            </div>
            <div className="case">
              <Link to="/projectFive" onClick={handleClose}>Case 5</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
