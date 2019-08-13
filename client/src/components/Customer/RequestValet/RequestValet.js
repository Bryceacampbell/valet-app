import React, { Component } from "react";
// import ScheduleForm from "../SchedulePickupContainer/ScheduleForm";
import { ProgressBar } from "react-bootstrap";

import SelectAsset from "./SelectAsset";
import SelectDateTime from "./SelectDateTime";
import SelectServices from "./SelectServices";

class RequestValet extends Component {

  state = {
    isRequested: false,
    currentStep: 1,
    datetime: "",
    services: [],
    request: []
  };

  handleChange = event => {
    const { name, value } = event;
    this.setState({
      [name]: value
    });
    console.log(this.state);
    };

  handleSubmit = event => {
    event.preventDefault()
    const { asset, datetime, services } = this.state
    alert(`Your request detail: \n 
           Email: ${asset} \n 
           Username: ${datetime} \n
           Password: ${services}`) //ajax call to submit request
  };

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  };

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
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

  handleScheduleRequest = () => {
    this.setState({ isRequested: true })
  };

  render() {
    const now = 25;

    return (
      <div>
        <div className="container-fluid card">
          <div className="card-header text-center">
            <h3>Schedule A Pick Up</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <ProgressBar now={now} label={`${now}%`} srOnly />
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
                      datetime={this.state.datetime}
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