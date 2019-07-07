import React, { Component } from "react";
import "./style.css";
import Login from "../auth-components/Login";


class NavBar extends Component {

  render() {
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
    )
  };
}

export default NavBar;