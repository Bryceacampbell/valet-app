import React from "react";

import "./style.css";

const SideNav = props => {

    let sideNavClasses = "side-nav";
    if (props.show) {
        sideNavClasses = "side-nav open";
    }

    return (
        <nav className={sideNavClasses} >
            <ul>
                <li><a href="/dashboard/home">Home</a></li>
                <li><a href="/dashboard/schedule">Schedule A Service</a></li>
                <li><a href="/dashboard/requests">Current Requests</a></li>
                <li><a href="/dashboard/bills">View Bills</a></li>
            </ul>
        </nav>
    )

};

export default SideNav;