import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";
import { Input, TextArea, FormBtn } from "../../shared/Form";

const moment = require("moment");

class RequestModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRequest: {},
            pickupRequestNote: "",
            pickupCompleteNote: ""
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const action = event.target.value;
        console.log(action);
        let updateObj = this.state.currentRequest;
        delete updateObj.customerId;

        switch (action) {
            case "approve":
                updateObj.pickupDetails.request.pickupRequestStatus = "Approved";
                updateObj.pickupDetails.confirmation.pickupConfirmDate = moment().format("YYYY-MM-DD");
                updateObj.pickupDetails.request.pickupRequestNote = this.state.pickupRequestNote;
                console.log(updateObj);
                break;
        };

        API.updateRequest(updateObj)
            .then(res => {
                alert("Your request has been updated. \n\r Click OK to return to Requests screen.");
                this.props.onCancel();
            })
            .catch(err => console.log(err));
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
                            <div className="row req-modal-subheader" >
                                <div className="col-lg-3">
                                    <p>Unit #:</p>
                                    <h4>{this.state.currentRequest.storageInfo.location}</h4>
                                </div>
                                <div className="col-lg-3">
                                    <p>Date Requested:</p>
                                    <h4>{moment(this.state.currentRequest.pickupDetails.request.pickupRequestedDate).format("YYYY-MM-DD")}</h4>
                                </div>
                                <div className="col-lg-3">
                                    <p>Time Requested:</p>
                                    <h4>{moment(this.state.currentRequest.pickupDetails.request.pickupRequestedTime).format("hh:mm A")}</h4>
                                </div>
                                <div className="col-lg-3">
                                    <p>Request Status:</p>
                                    <h4>{this.state.currentRequest.pickupDetails.request.pickupRequestStatus}</h4>
                                </div>
                            </div>
                            <div className="row m-6 modal-row">
                                <div className="col-1" />
                                <div className="col-5">
                                    <h2>Request Handling</h2>
                                    <form>
                                        <TextArea
                                            // className="col-12"
                                            value={this.state.pickupRequestNote}
                                            onChange={this.handleInputChange}
                                            name="pickupRequestNote"
                                            placeholder="Note (required if denying request)"
                                        />
                                        <FormBtn
                                            className="btn btn-success"
                                            onClick={this.handleFormSubmit}
                                            value="approve"
                                        >
                                            Approve
                                        </FormBtn>
                                        <FormBtn
                                            className="btn btn-cancel"
                                            disabled={!this.state.pickupRequestNote}
                                            value="decline"
                                            onClick={this.handleFormSubmit}
                                        >
                                            Decline
                                        </FormBtn>
                                    </form>
                                </div>
                                <div className="col-5">
                                    <h2>Pickup Handling</h2>
                                    <form>
                                        <TextArea
                                            // className="col-12"
                                            value={this.state.pickupCompleteNote}
                                            onChange={this.handleInputChange}
                                            name="pickupCompleteNote"
                                            placeholder="Note (required) ----- Request must be approved"
                                        />
                                        <FormBtn
                                            className="btn btn-success"
                                            disabled={!this.state.pickupCompleteNote}
                                            // || this.state.currentRequest.pickupDetails.request.pickupRequestStatus != "Approved"
                                            onClick={this.handleFormSubmit}
                                            value="complete"
                                        >
                                            Complete
                                        </FormBtn>
                                        <FormBtn
                                            className="btn btn-cancel"
                                            disabled={!this.state.pickupCompleteNote}
                                            value="cancel"
                                            onClick={this.handleFormSubmit}
                                        >
                                            Cancel Pickup
                                        </FormBtn>
                                    </form>
                                </div>
                                <div className="col-1" />
                            </div>
                        </section>
                        <FormBtn
                            className="btn btn-secondary close-button"
                            onClick={this.props.onCancel}
                        >
                            Close
                                        </FormBtn>
                    </React.Fragment>
                }
            </div>
        );
    };
};

export default RequestModal;