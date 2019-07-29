import React, { Component } from "react";

import API from "../../../utils/API";

class ViewCurrentRequests extends Component {

    state = {
        requests: []
    };

    componentDidMount() {
        this.loadRequests();
    };

    loadRequests = () => {
        API.getRequests()
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

                        <div className="card request">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <p>Unit #:</p>
                                        <p>{request.storageInfo.location}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Customer Name: </p>
                                        <p>{request.customerId.information.firstName + " " + request.customerId.information.lastName}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Date Requested:</p>
                                        <p>{request.pickupDetails.request.pickupRequestedDate}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Request Status:</p>
                                        {request.pickupDetails.request.pickupRequestStatus}
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