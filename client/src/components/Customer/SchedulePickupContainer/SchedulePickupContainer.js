import React, { Component } from "react";
import "./style.css";
import ScheduleForm from "./ScheduleForm";

class SchedulePickupContainer extends Component {
    state = {
        isRequested: false
    };

    handleScheduleRequest = () => {
        this.setState({isRequested: true}) 
    }

    render() {
    const isRequested = this.state.isRequested;
    return (
      <div>
        
        {isRequested ? <ScheduleForm {...this.props} /> : <div className="text-center align-content-center mt-5">
        
        </div>}
      </div>
    );
  }
}

export default SchedulePickupContainer;