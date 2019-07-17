import React, { Component } from "react";
import "./style.css";
import Login from "../../auth-components/Login/Login";
import Logout from "../../auth-components/Logout/Logout";
import ToggleButton from "../../Customer/SideNav/ToggleButton";

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <ul>
          {this.props.auth.isAuthenticated() &&
            <div className="col-lg-1">
              <ToggleButton click={this.props.navClickHandler} />
            </div>
          }
          <li className="brand col-lg-5"><a href="/">202 Valet</a></li>
          <li className="col-lg-3">
            {this.props.auth.isAuthenticated() &&
              <h3>Welcome, {this.props.user.given_name}</h3>
            }
          </li>
          <li className="col-lg-3 auth-btn">
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