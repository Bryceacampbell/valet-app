import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-sm btn-default" onClick={this.props.auth.logout}>
          Logout
      </button>
      </div>
    )
  }

};

export default Logout;