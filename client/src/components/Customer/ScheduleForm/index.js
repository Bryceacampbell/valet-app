import React, { Component } from "react";
import "./style.css";
import ScheduleCalendar from "../ScheduleCalendar"


class ScheduleForm extends Component {
  state = {
    // assets: "",
    pickupCurrentlyRequested: false,
    pickupRequestedDate: "",
    dateToConfirm: "",
  };

  // Uses call-B func to retrieve selected date from date-picker component
  dateUpdate = (dateInfo) => {
    this.setState({ pickupRequestedDate: dateInfo });
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
      </div>
    );
  }
}

export default ScheduleForm;
