import { Link } from "react-router-dom";
import  './NavBar.css';

export default function NavBar() {
  return (
    <div className="nav-menu">
        <div>
        <Link to="#" className="title homepage">Andison</Link>
        </div>
        <div>
        <Link to="#" className="title">MyPlan</Link>
        <Link to="#" className="title">MyProject</Link>
        <Link to="#" className="title">About</Link>
        </div>
    </div>
  );
}
