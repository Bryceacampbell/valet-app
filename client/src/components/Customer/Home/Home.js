import React, { Component } from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {

    state = {
        currentRequests: []
    };

    render() {
        return (
            <div className="container-fluid card text-center">
                <div className="card-header">
                    <h3>Dashboard</h3>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <a href="/dashboard/schedule">
                                <div className="btn btn-primary schedule-btn">
                                    <FontAwesomeIcon icon={faCalendarCheck} className="calendar-icon" />
                                    <h4>Schedule Pick Up</h4>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/dashboard/requests">
                                <div className="btn btn-primary schedule-btn">
                                    <FontAwesomeIcon icon={faCheckSquare} className="calendar-icon" />
                                    <h4>View Current Requests</h4>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;