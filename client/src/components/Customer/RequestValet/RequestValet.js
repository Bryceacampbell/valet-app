import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";
import API from "../../../utils/API";
import SelectAsset from "./SelectAsset";
import SelectDateTime from "./SelectDateTime";
import SelectServices from "./SelectServices";

var now = 33;

class RequestValet extends Component {

  state = {
    isRequested: false,
    currentStep: 1,
  };

  handleChange = event => {
    const { name, value } = event;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault()

    const { assetId, pickupRequestedDate, selectedServices } = this.state

    const pickupObj = {
      currentAsset: assetId,
      pickupCurrentlyRequested: true,
      pickupRequestedDate: pickupRequestedDate,
      pickupRequestStatus: "Pending",
      selectedServices: selectedServices,
      pickupRequestedTime: null,
      pickupRequestedNote: "",
      pickupConfirmDate: null,
      pickupConfirmedBy: null,
      pickupComplete: false,
      pickupCompleteDate: null,
      pickupCompleteNote: null
    };

    API.makeRequest(pickupObj)
    .then()
      .catch(err => console.log(err));
  };

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
    this.checkStep(currentStep);
  };

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
    this.checkStep(currentStep);
  };

  checkStep = (currentStep) => {
    if (currentStep === 2) {
      now = 66;
    }
    else if (currentStep === 3) {
      now = 100;
    }
    else {
      now = 33;
    }
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  };

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  };

  render() {

    return (
      <div>
        <div className="container-fluid card">
          <div className="card-header text-center">
            <h3>Schedule A Pick Up</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <ProgressBar now={now} srOnly />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={this.handleSubmit}>
                    <SelectAsset
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                      {...this.props}
                    />
                    <SelectDateTime
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                    />
                    <SelectServices
                      currentStep={this.state.currentStep}
                      handleChange={this.handleChange}
                      services={this.state.services}
                    />
                    {this.previousButton()}
                    {this.nextButton()}
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default RequestValet;