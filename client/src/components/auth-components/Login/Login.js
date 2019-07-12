import React, { Component } from "react";
import "./style.css";

class Login extends Component {
  render() {
    return (
      <div>
        <button className="btn" onClick={this.props.auth.login}>
          Login
      </button>
      </div>
    )
  }
};

export default Login;