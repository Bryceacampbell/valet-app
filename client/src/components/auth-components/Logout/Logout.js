import React, { Component } from "react";
import "./style.css";

class Logout extends Component {
  render() {
    return (
      <button className="btn logout-btn" onClick={this.props.auth.logout}>
        Logout
      </button>
    )
  }

};

export default Logout;