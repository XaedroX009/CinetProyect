import React from "react";
import { Link } from "react-router-dom";

//arena y gravilla en base a grava
// Usando materia prima grava
//35 arena 75 gravilla

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper teal accent-2" style={{ color: "black" }}>
        <Link to="/" className="brand-logo left">
          Logo
        </Link>
        <ul id="nav-mobile" className="right navbar-bttns">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/myprofile">My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
