import React, { Component } from "react";
import API from "../../../utils/API"

import "./style.css";

class Requests extends Component {

    state = {
        requests: [],
    };

    componentDidMount() {
        this.loadRequests();
    }

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
                    <h3>View Requests</h3>
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
                                        <p>Customer Name: </p>
                                        <p>{request.firstName + " " + request.lastName}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Date Requested:</p>
                                        <p>7/15/19</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Request Type:</p>
                                        <p>NEW</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                    {/* <div className="card request">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <p>Unit #:</p>
                                    <p>A66</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Customer Name: </p>
                                    <p>Bryce Campbell</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Date Requested:</p>
                                    <p>7/15/19</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Request Type:</p>
                                    <p>NEW</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card request">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <p>Unit #:</p>
                                    <p>C11</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Customer Name: </p>
                                    <p>Chesley Calloway</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Date Requested:</p>
                                    <p>7/17/19</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Request Type:</p>
                                    <p>NEW</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
};

export default Requests;