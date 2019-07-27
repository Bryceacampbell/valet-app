import React, { Component } from "react";

import "./style.css";

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
                            <a href="/dashboard/schedule"><button className="btn schedule-btn">
                                <h4>Schedule Pick Up</h4>
                            </button></a>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <h4>Your Current Requests</h4>
                                <hr></hr>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;