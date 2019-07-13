import React, { Component } from "react";
import "./style.css";
import ScheduledContainer from "../CustomerScheduled";

class CustomerScheduled extends Component {
  render() {
    return( 
      <div className="row my-2 align-content-center">
        <div className="col-6 my-2 mx-auto">
          <ScheduledContainer />
        </div>
      </div>
    );
  }
}

export default CustomerScheduled;