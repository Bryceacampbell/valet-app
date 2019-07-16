import React, { Component } from "react";
import "./style.css";
import SchedulePickupContainer from "../SchedulePickupContainer";
// import SideBar from "../LeftMenu";

class CustomerHome extends Component {
  render() {
    return(
      <div>
        {/* <SideBar /> */}
        <div className="row my-2 align-content-center">
          <div className="col-6 my-2 mx-auto">
            <SchedulePickupContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerHome;