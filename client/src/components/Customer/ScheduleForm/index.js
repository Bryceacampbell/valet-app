import React, { Component } from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ScheduleForm extends Component {
  state = {
    pickupCurrentlyRequested: false,
    pickupRequestedDate: Date,
    customerID: "",
    assetID: "",
  };

  handleChange = event => {
    const { name, selected} = event.target;
    this.setState({
      [name]: selected
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      pickupCurrentlyRequested: true,
      pickupRequestedDate: Date
    });
    console.log("Pickup Currently Requested?" + this.pickupCurrentlyRequested);
  };

  render() {
    return (
      <div>
        <form className="form border p-4">
          <DatePicker
            name="pickupRequestedDate"
            placeholderText="Click to Select Pickup Time and Date"
            isClearable={true}
            selected={this.state.date}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="Pp"
          />
          <br />
          <button className="btn-light btn-block">Cancel</button>
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
