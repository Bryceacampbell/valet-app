import React, { Component } from "react";
import ScheduleForm from "../SchedulePickupContainer/ScheduleForm";
import { ProgressBar } from "react-bootstrap";

class CustomerHome extends Component {

  state = {
    isRequested: false
  };

  handleScheduleRequest = () => {
    this.setState({ isRequested: true })
  }

  render() {
    const isRequested = this.state.isRequested;
    const now = 25;
    return (
      <div>
        <div className="container-fluid card text-center">
          <div className="card-header">
            <h3>Schedule A Pick Up</h3>
          </div>
          <div className="card-body">

          <ProgressBar now={now} label={`${now}%`} srOnly />

            <div className="row my-2 align-content-center">
              <div className="col-6 my-2 mx-auto">

                <div>
                  {isRequested ? <ScheduleForm {...this.props} /> : 
                  <div className="text-center align-content-center mt-5">
                    <button
                      onClick={this.handleScheduleRequest}
                      className="btn-info btn-block my-2">Request Pickup</button>
                  </div>
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default CustomerHome;