import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";

const moment = require("moment");

class RequestModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRequest: {}
        };
        this.loadRequest = this.loadRequest.bind(this);
    };

    componentDidMount() {
        this.loadRequest(this.props.id);
    };

    loadRequest = (id) => {
        API.getRequest(id)
            .then(res => {
                this.setState({ currentRequest: res.data });
                console.log(this.state.currentRequest);
            })
            .catch(err => console.log(err));
    };

    pickupConfirmed = (confirmed) => {
        if (confirmed) {
            return (<h4>Yes</h4>)
        } else {
            return (<h4>No</h4>)
        }
    };

    render() {
        return (

            <div className="req-modal">
                {this.state && this.state.currentRequest.customerId &&
                    <React.Fragment>
                        <header className="req-modal-header">
                            <h1>Request for {this.state.currentRequest.customerId.information.firstName} {this.state.currentRequest.customerId.information.lastName} on {moment(this.state.currentRequest.pickupDetails.request.pickupRequestedDate).format("YYYY-MM-DD")}</h1>
                        </header>
                        <section className="req-modal-content">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <p>Unit #:</p>
                                        <h4>{this.state.currentRequest.storageInfo.location}</h4>
                                    </div>
                                    {/* <div className="col-lg-3">
                                        <p>Customer Name: </p>
                                        {/* {console.log("request in map function")}
                                        {console.log(request)} */}
                                        {/* <p>{request.customerId.information.firstName + " " + request.customerId.information.lastName}</p>
                                    </div> */}
                                    <div className="col-lg-3">
                                        <p>Date Requested:</p>
                                        <h4>{moment(this.state.currentRequest.pickupDetails.request.pickupRequestedDate).format("YYYY-MM-DD")}</h4>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Time Requested:</p>
                                        <h4>{moment(this.state.currentRequest.pickupDetails.request.pickupRequestedTime).format("hh:mm A")}</h4>
                                    </div>
                                    <div className="col-lg-3">
                                        <p>Request Confirmed:</p>
                                        {this.pickupConfirmed(this.state.currentRequest.pickupDetails.request.pickupRequestConfirmed)}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="req-modal-actions">
                            <button className="btn">Cancel</button>
                            <button className="btn">Decline</button>
                            <button className="btn">Approve</button>
                        </section>
                    </React.Fragment>
                }
            </div>
        );
    };
};

export default RequestModal;