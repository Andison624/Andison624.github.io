import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-menu">
      <div>
        <span>
          <Link to='/' className="title homepage">
            Andison
          </Link>
        </span>
      </div>
      <div>
        <span>
{/*           <Link to="#" className="title">
            Work
          </Link> */}
          <Link to="/.projectList" className="title">
            SideProject
          </Link>
          <Link to="#" className="title">
            About
          </Link>
        </span>
      </div>
    </nav>
  );
}
