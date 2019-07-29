import React, { Component } from "react";
import "./style.css";
import ScheduleCalendar from "./ScheduleCalendar";
import API from "../../../utils/API"


class ScheduleForm extends Component {
  state = {
    assets: [],
    currentClient: "",
    currentAsset: "",
    pickupCurrentlyRequested: false,
    pickupRequestedDate: "",
  };

  // Uses call-B func to retrieve selected date from date-picker component
  dateUpdate = (dateInfo) => {
    this.setState({ pickupRequestedDate: dateInfo });
  }

  componentDidMount() {
    const acctNum = this.props.auth.getAcctNum()
    console.log(acctNum);
    this.loadAssets(acctNum);
  };

  loadAssets = (id) => {
    API.findClientAssets(id)
      .then(res => {
        this.setState({ assets: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  }

  handleFormSubmit = (_id) => {
    // event.preventDefault();    
    API.makeRequest()
    .then(res => {
      this.setState({
        pickupCurrentlyRequested: true,
        pickupRequestedDate: this.state.pickupRequestedDate
      });
    }).catch(err => console.log(err));
    console.log(this.state)
  };
  
  render() {
    return (
      <div>
        <form className="align-content-center">
          <ScheduleCalendar
            dateFromCalendar={this.dateUpdate} 
          />
          <br />
          <button 
            className="btn-light btn-block"
          >
            Cancel
          </button>
          <button
            className="btn success btn-block"
            onClick={this.handleFormSubmit}
          >
            Confirm
          </button>
        </form>
        <div className="container">
          <h1>Assets:</h1>
          {this.state.assets.map(asset => (
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
              </div>
            </div>
         ))}
        </div>
      </div>
    );
  }
}

export default ScheduleForm;
