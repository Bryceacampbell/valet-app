import React from "react";
import { Link, Route } from "react-router-dom";

import "./style.css";

const SideNav = props => {

    let sideNavClasses = "side-nav";
    if (props.show) {
        sideNavClasses = "side-nav open";
    }

    return (
        <nav className={sideNavClasses} >
            <ul>
                <li><Link to="dashboard/home">Home</Link></li>
                <li><Link to="dashboard/schedule">Schedule A Service</Link></li>
                <li><Link to="dashboard/requests">Current Requests</Link></li>
                <li><Link to="dashboard/bills">View Bills</Link></li>
            </ul>
        </nav>
    )

};

export default SideNav;