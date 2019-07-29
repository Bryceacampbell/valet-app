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
        
        {isRequested ? <ScheduleForm /> : <div className="text-center align-content-center mt-5">
          <button 
            onClick={this.handleScheduleRequest} 
            className="btn-info btn-block my-2">Request Pickup</button>
        </div>}
      </div>
    );
  }
}

export default SchedulePickupContainer;