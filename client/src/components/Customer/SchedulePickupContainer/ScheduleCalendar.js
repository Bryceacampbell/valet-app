import React, { Component } from "react";
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
    const dateInfo = date;
    this.setState({
      startDate: date
    });
    this.props.dateFromCalendar(dateInfo);
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        name="pickupRequestedDate"
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
    );
  }
}

export default ScheduleCalendar;
