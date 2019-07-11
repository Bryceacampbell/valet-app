import React, { Component } from "react";
import "./style.css";
import Login from "../auth-components/Login/Login";
import Logout from "../auth-components/Logout/Logout";



class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="brand"><a href="/">202 Valet</a></li>
          <li></li>
          <li>
            {!this.props.auth.isAuthenticated() &&
              <Login {...this.props} />
            }
            {this.props.auth.isAuthenticated() &&
              <Logout {...this.props} />}
          </li>
        </ul>
      </nav>
    )
  };
}

export default NavBar;