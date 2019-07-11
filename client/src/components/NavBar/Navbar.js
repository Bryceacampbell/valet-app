import React, { Component } from "react";
import "./style.css";
import Login from "../auth-components/Login/Login";
// import Logout from "../auth-components/Logout";



class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="brand"><a href="/">202 Valet</a></li>
          <li></li>
          <li>
            <Login {...this.props}/>
          </li>
        </ul>
      </nav>
    )
  };
}

export default NavBar;