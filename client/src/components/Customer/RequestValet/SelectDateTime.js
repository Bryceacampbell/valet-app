import React, { Component } from "react";
import ScheduleCalendar from "../SchedulePickupContainer/ScheduleCalendar";

class SelectDateTime extends Component {

    state = {
        pickupRequestedDate: ""
    };

    // Uses call-B func to retrieve selected date from date-picker component
    dateUpdate = dateInfo => {
        this.setState({ pickupRequestedDate: dateInfo });
    };

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div>
                <div className="text-center">Select Date Time</div>
                <ScheduleCalendar dateFromCalendar={this.dateUpdate} />
            </div>
        )
    }
};

export default SelectDateTime;