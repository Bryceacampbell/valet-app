import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";
import Modal from "../RequestModal/RequestModal";
import Backdrop from "./backdrop";

const moment = require("moment");

class Requests extends Component {

    state = {
        requests: [],
        requestFocus: false,
        currentRequest: {}
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

    pickupConfirmed = (confirmed) => {
        if (confirmed) {
            return (<p>Yes</p>)
        } else {
            return (<p>No</p>)
        }
    };

    requestClicked = (id) => {
        // event.persist();
        this.setState({
            requestFocus: true,
            currentRequest: id
        });

        console.log(id)

        console.log("state from clicking request");
        console.log(this.state);

    }

    render() {
        return (
            <div className="container-fluid card text-center">

                {this.state.requestFocus && <Backdrop />}
                {this.state.requestFocus && <Modal title="Individual Request" id={this.state.currentRequest}>
                    <p>Modal Content</p>
                </Modal>}

                <div className="card-header">
                    <h3>View Requests</h3>
                </div>

                <div className="card-body">

                    {this.state.requests.map(request => (

                        <div className="card request" onClick={() => this.requestClicked(request._id)} data-id={request._id} key={request._id}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <p>Unit #:</p>
                                        <p>{request.storageInfo.location}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Customer Name: </p>
                                        {/* {console.log("request in map function")}
                                        {console.log(request)} */}
                                        <p>{request.customerId.information.firstName + " " + request.customerId.information.lastName}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Date Requested:</p>
                                        <p>{moment(request.pickupDetails.request.pickupRequestedDate).format("YYYY-MM-DD")}</p>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Request Confirmed:</p>
                                        {this.pickupConfirmed(request.pickupDetails.request.pickupRequestConfirmed)}
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