import React, { Component } from "react";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ScheduleCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <DatePicker
            placeholderText="Click to Select Pickup Time and Date"
            isClearable={true}
            selected={this.state.date}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="Pp"
        />
      </div>
    );
  }
}

export default ScheduleCalendar;
