import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <Link className="nav-link" to="/">
          Coffee'd
        </Link>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/shops">
            Shops
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
