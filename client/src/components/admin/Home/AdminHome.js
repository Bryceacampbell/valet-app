import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";

const moment = require("moment");
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCalendarCheck,
//   faCheckSquare,
// } from "@fortawesome/free-solid-svg-icons";

class AdminHome extends Component {
  state = {
    requests: [],
    upcomingPickups: [],
    adminName: "",
    requestsTotal: 0,
    // assets: [],
    totalUnitsUsed: ""
  };

  componentDidMount() {
    const adminName = this.props.user.given_name;
    this.setState({ adminName: adminName });
    console.log(this.state.requests);
    this.loadRequests();
    this.loadUpcomingPickups();
    this.loadTotalAssets();
  }

  loadRequests = () => {
    API.getRequests()
      .then(res => {
        this.setState({ requests: res.data, requestsTotal: res.data.length });
        console.log(this.state.requests);
      })
      .catch(err => console.log(err));
  };

  loadUpcomingPickups = () => {
    API.getUpcomingPickups()
      .then(res => {
        this.setState({ upcomingPickups: res.data });
        console.log(
          "C'logged upcoming pickups data: " +
            this.state.upcomingPickups[0].pickupDetails.request
              .pickupRequestedDate
        );
      })
      .catch(err => console.log(err));
  };

  loadTotalAssets = () => {
      API.getAllAssets()
      .then(res => {
          this.setState({ totalUnitsUsed: res.data.length });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid card text-center">
        <div className="card-header">
          <h3>Welcome, {this.state.adminName}</h3>
        </div>
        <div className="row my-5">
          <div className="col-lg-6">
            {/* <a href="/admin/requests"> */}
            <div className="pending">
              <h4>{this.state.requestsTotal} Pending Valet Requests</h4>
              <p>require your attention</p>
            </div>
            {/* </a> */}
          </div>
          <div className="col-lg-6">
            <div>
                <h4>Occupied Units: {this.state.totalUnitsUsed} </h4>
              <p>Insert Dynamic/Fun Graph or Chart here!</p>
            </div>
          </div>
        </div>
        <div className="m5-4">
            <h3>Upcoming Pickups</h3>
            {this.state.upcomingPickups.map(upcoming => (
              <div className="card request" key={upcoming._id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3"><p>Mr. Customer Name</p></div>
                    <div className="col-lg-3">
                      <p>Location: {upcoming.storageInfo.location}</p>
                    </div>
                    <div className="col-lg-3">
                      <p>
                        Scheduled Date:</p>
                        <p>
                        {moment(
                          upcoming.pickupDetails.request.pickupRequestedDate
                        ).format("MMM Do, YYYY - h:mm A")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    );
  }
}

export default AdminHome;
