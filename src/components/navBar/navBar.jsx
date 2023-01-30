import { NavLink } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <NavLink to={"/"}>Garage</NavLink>
          <NavLink to={"/winners"}>Winners</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
