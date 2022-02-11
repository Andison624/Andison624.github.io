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
          <Link to="#" className="title">
            MyPlan
          </Link>
          <Link to="#" className="title">
            MyProject
          </Link>
          <Link to="#" className="title">
            About
          </Link>
        </span>
      </div>
    </nav>
  );
}
