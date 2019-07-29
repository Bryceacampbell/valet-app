import React, { Component } from "react";
import SchedulePickupContainer from "../SchedulePickupContainer/SchedulePickupContainer";
// import SideBar from "../LeftMenu";

class CustomerHome extends Component {

  render() {
    return (
      <div>
        {/* <SideBar /> */}
        <div className="container card text-center">
          <div className="card-header">
            <h1>Schedule A Pick Up</h1>
          </div>
          <div className="card-body">
            <div className="row my-2 align-content-center">
              <div className="col-6 my-2 mx-auto">
                <SchedulePickupContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default CustomerHome;