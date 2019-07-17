import React, { Component } from "react";
import "./style.css";
import ScheduleCalendar from "../ScheduleCalendar"
import API from "../../../utils/API"


class ScheduleForm extends Component {
  state = {
    assets: [],
    pickupCurrentlyRequested: false,
    pickupRequestedDate: "",
    dateToConfirm: "",
  };

  // Uses call-B func to retrieve selected date from date-picker component
  dateUpdate = (dateInfo) => {
    this.setState({ pickupRequestedDate: dateInfo });
  }

  componentDidMount(){
    this.loadAssets();
  };

  loadAssets = () => {
    API.getAssets()
      .then(res => {
        this.setState({ assets: res.data });
        console.log(this.state.assets);
      })
      .catch(err => console.log(err));
  }

  handleFormSubmit = (event) => {
    event.preventDefault();    
    // -->If "Confirmed", updates pickupCurrentlyRequested to True
    this.setState({
      pickupCurrentlyRequested: true,
      dateToConfirm: this.state.pickupRequestedDate
    });
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
        {this.state.assets.map(asset => (
          <div className="card-body" key={asset._id}>
            <div className="card">
              <div col-8>
                <p>Year:</p>
                <p>{asset.description.year}</p>
                <p>Make:</p>
                <p>{asset.description.make}</p>
                <p>Model:</p>
                <p>{asset.description.model}</p>
              </div>
            </div>
          </div>
        ))}</div>
      </div>
    );
  }
}

export default ScheduleForm;
