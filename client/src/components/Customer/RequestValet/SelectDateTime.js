import React, { Component } from "react";
import ScheduleCalendar from "../SchedulePickupContainer/ScheduleCalendar";

class SelectDateTime extends Component {

    state = {
        pickupRequestedDate: ""
    };

    dateUpdate = dateInfo => {
        this.setState({ pickupRequestedDate: dateInfo });
        this.handleChange({ name: "pickupRequestedDate", value: dateInfo });
    };

    handleChange = ({ name, value }) => {
        this.props.handleChange({ name, value });
    };

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div>
                <div className="text-center"><strong>Step 2:</strong> Select Date and Time</div>
                <hr></hr>
                <div className="text-center">
                    <ScheduleCalendar
                        dateFromCalendar={this.dateUpdate}
                    />
                </div>
            </div>
        )
    }
};

export default SelectDateTime;