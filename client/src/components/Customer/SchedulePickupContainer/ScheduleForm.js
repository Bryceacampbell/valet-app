import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import "./style.css";
import ScheduleCalendar from "./ScheduleCalendar";
import API from "../../../utils/API";

class ScheduleForm extends Component {
  state = {
    assets: [],
    currentClient: "",
    currentAsset: "",
    pickupCurrentlyRequested: false,
    pickupRequestedDate: "",
  };

  // Uses call-B func to retrieve selected date from date-picker component
  dateUpdate = dateInfo => {
    this.setState({ pickupRequestedDate: dateInfo });
  };

  componentDidMount() {
    const acctNum = this.props.auth.getAcctNum();
    console.log(acctNum);
    this.loadAssets(acctNum);
  }

  loadAssets = id => {
    API.findClientAssets(id)
      .then(res => {
        this.setState({ assets: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  };

  handleFormSubmit = event => {
    console.log(event.target);
    const assetId = event.target.id;
    console.log(assetId);
    // event.preventDefault();
    // const action = event.target.value;
    // let pickupObj = this.state.assets;

    // switch (action) {
    //   case "approve":
    //     pickupObj.pickupDetails.request.pickupCurrentlyRequested = true;
    //     pickupObj.pickupDetails.request.pickupRequestedDate = this.assets.pickupRequestedDate;
    //     console.log(pickupObj);
    //     break;
    // };
  
    // API.makeRequest({pickupObj})
    // .then(res => {
    //   alert("Your pickup request is complete! \n Please note: it may take up to 24 hours for a response. \n Than you for your patience!")
    // }).catch(err => console.log(err));
    // console.log(this.state);


    const pickupObj = {
      currentAsset: assetId,
      pickupCurrentlyRequested: true,
      pickupRequestedDate: this.state.pickupRequestedDate
    }
    console.log(pickupObj);
    API.makeRequest(pickupObj)
    .then(
      alert("Your pickup request is complete! \n Please note: it may take up to 24 hours for a response. \n Than you for your patience!")
    ).catch(err => console.log(err));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1>Assets:</h1>
          {this.state.assets.map(asset => (
            <div className="form-group">
            <div className="card" key={asset._id}>
              <div className="card-body">
                <div className="col-8">
                  <p>Year:</p>
                  <p>{asset.description.year}</p>
                  <p>Make:</p>
                  <p>{asset.description.make}</p>
                  <p>Model:</p>
                  <p>{asset.description.model}</p>
                </div>
                <ScheduleCalendar dateFromCalendar={this.dateUpdate} />
                <br />
                <button className="btn-light btn-block">Cancel</button>
                <button
                  className="btn success btn-block"
                  value="confirm"
                  id={asset._id}
                  onClick={this.handleFormSubmit}
                  // requestedDate={this.state.pickupRequestedDate}
                >
                  Confirm
                </button>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ScheduleForm;
