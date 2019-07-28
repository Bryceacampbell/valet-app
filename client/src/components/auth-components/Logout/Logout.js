import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <button className="btn btn-default logout-btn" onClick={this.props.auth.logout}>
        Logout
      </button>
    )
  }

};

export default Logout;