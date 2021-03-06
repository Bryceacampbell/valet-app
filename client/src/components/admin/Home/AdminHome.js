import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import PieChart from "react-minimal-pie-chart";

const moment = require("moment");

class AdminHome extends Component {
  state = {
    requests: [],
    upcomingPickups: [],
    adminName: "",
    requestsTotal: 0,
    totalUnitsUsed: 0,
  };

  componentDidMount() {
    const adminName = this.props.user.given_name;
    this.setState({ adminName: adminName });
    // console.log(this.state.requests);
    this.loadRequests();
    this.loadUpcomingPickups();
    this.loadTotalAssets();
  }


  // Loads all Requests to display on the dashboard
  loadRequests = () => {
    API.getRequests()
      .then(res => {
        this.setState({ requests: res.data, requestsTotal: res.data.length });
        console.log(this.state.requests);
      })
      .catch(err => console.log(err));
  };

  // Loads all upcoming pickups for Admin to See (& Confirm?)
  loadUpcomingPickups = () => {
    API.getUpcomingPickups()
      .then(res => {
        this.setState({ upcomingPickups: res.data });
        // console.log(
        //   "C'logged upcoming pickups data: " +
        //     this.state.upcomingPickups[0].pickupDetails.request
        //       .pickupRequestedDate
        // );
      })
      .catch(err => console.log(err));
  };

  // Loads Assets to list the number of current assets stored in the DB for chart info
  loadTotalAssets = () => {
    API.getAllAssets()
      .then(res => {
        this.setState({ totalUnitsUsed: res.data.length });
      })
      .catch(err => console.log(err));
  };

  render() {
    // currentUnits pulls from the total number of Assets listed in the DB to use variable in chart
    const currentUnits = this.state.totalUnitsUsed;

    return (
      <div className="container-fluid card text-center">
        <div className="card-header">
          <h3>Welcome, {this.state.adminName}</h3>
        </div>
        <div className="row my-5">
          <div className="col-lg-6">
            <a href="/admin/requests">
              <div className="btn btn-primary pending-btn">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="calendar-icon"
                />
                <h3>{this.state.requestsTotal} Pending Valet Requests</h3>
                <h4>require your attention</h4>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <div>
              <h4>Occupied Units</h4>
              {/* the initial-traditional pie chart */}
              {/* <PieChart
                data={[
                  {
                    title: "Occupied",
                    value: 3,
                    color: "#E38627",
                  },
                  {
                    title: "Vacant",
                    value: 97,
                    color: "#C13C37",
                  },
                ]}
                style={{ height: "300px" }}
                animate
              /> */}
            
              <PieChart
                data={[
                  {
                    value: currentUnits,
                    color: "#C13C37",
                  },
                ]}
                totalValue={100}
                lineWidth={20}
                label
                labelStyle={{
                  fontSize: "30px",
                  fontFamily: "sans-serif",
                }}
                labelPosition={0}
                style={{ height: "225px" }}
                animate
              />
            </div>
          </div>
        </div>
        <div className="m5-4 card announcements">
          <div className="card-header">
            <h3>Upcoming Pickups</h3>
          </div>
          <div className="card-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Last Name</th>
                  <th>Location</th>
                  <th>Scheduled Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.upcomingPickups.map(upcoming => (
                  <tr key={upcoming._id}>
                    <td>{upcoming.customerId.information.lastName}</td>
                    <td>{upcoming.storageInfo.location}</td>
                    <td>
                      {moment(
                        upcoming.pickupDetails.request.pickupRequestedDate
                      ).format("MMM Do, YYYY - h:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* ------Code for the Upcoming Pickups Hover-Card Below------------- */}
          {/* {this.state.upcomingPickups.map(upcoming => (
            <div className="card request" key={upcoming._id}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3">
                    <p>Mr. Customer Name</p>
                  </div>
                  <div className="col-lg-3">
                    <p>Location: {upcoming.storageInfo.location}</p>
                  </div>
                  <div className="col-lg-3">
                    <p>Scheduled Date:</p>
                    <p>
                      {moment(
                        upcoming.pickupDetails.request.pickupRequestedDate
                      ).format("MMM Do, YYYY - h:mm A")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          {/* ----------------- */}
        </div>
      </div>
    );
  }
}

export default AdminHome;
