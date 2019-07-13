import React, { Component } from "react";
import "./style.css";
import ScheduleForm from "../ScheduleForm";

class SchedulePickupContainer extends Component {
    
    render(){
        return(
            <div className="text-center align-content-center mt-5">
                <button className="btn-info btn-block my-2">Request Pickup</button>
                <ScheduleForm />
            </div>

        );
    }

}

export default SchedulePickupContainer;