import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav-menu">
      <div>
        <h4>
          <Link to="#" className="title homepage">
            Andison
          </Link>
        </h4>
      </div>
      <div>
        <h4>
          <Link to="#" className="title">
            MyPlan
          </Link>
          <Link to="#" className="title">
            MyProject
          </Link>
          <Link to="#" className="title">
            About
          </Link>
        </h4>
      </div>
    </nav>
  );
}
