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
          <li className="brand col-lg-5">
            <a href="/"><img src="http://www.dev202valet.com.php72-35.phx1-1.websitetestlink.com/assets/images/svg/202_valet_white.svg" alt="202 valet logo"></img></a>
          </li>
          <li className="col-lg-4 user-welcome">
            {this.props.auth.isAuthenticated() &&
              <h4>Welcome, {this.props.user.given_name}</h4>
            }
          </li>
          <li className="col-lg-1 auth-btn">
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