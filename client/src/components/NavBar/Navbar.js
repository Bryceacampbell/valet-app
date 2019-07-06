import React from "react";
import "./style.css";
import Login from "../auth-components/Login";


const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand"><a href="/">202 Valet</a></li>
        <li></li>
        <li>
          <Login />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;