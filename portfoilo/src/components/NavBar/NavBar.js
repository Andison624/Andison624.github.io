import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-menu">
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
              <Link to="#">Case 1</Link>
              <Link to="#">Case 2</Link>
              <Link to="#">Case 3</Link>
              <Link to="#">Case 4</Link>
              <Link to="#">Case 5</Link>
            </div>
          </div>
          <Link to="#" className="title">
          Resume
          </Link>
          <Link to="/about" className="title">
            About
          </Link>
        </span>
      </div>
    </nav>
  );
}
