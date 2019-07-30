import React, { Component } from "react";

import API from "../../../utils/API";

const moment = require("moment");

class ViewCurrentRequests extends Component {

    state = {
        requests: []
    };

    componentDidMount() {
        const acctNum = this.props.auth.getAcctNum();
        console.log(acctNum);
        this.loadRequests(acctNum);
    };

    loadRequests = (id) => {
        API.findClientAssets(id)
            .then(res => {
                this.setState({ requests: res.data });
                console.log(this.state.requests);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container card text-center">
                <div className="card-header">
                    <h3>Current Requests</h3>
                </div>

                <div className="card-body">
                    {this.state.requests.map(request => (
                        <div className="card request" key={request._id}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <p>Unit #:</p>
                                        <p>{request.storageInfo.location}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Date Requested:</p>
                                        <p>{moment(request.pickupDetails.request.pickupRequestedDate).format("YYYY-MM-DD")}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Time Requested:</p>
                                        <p>{request.pickupDetails.request.pickupRequestedTime}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Request Status:</p>
                                        { <p>{request.pickupDetails.request.pickupRequestStatus}</p> }
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        )
    }
};

export default ViewCurrentRequests;