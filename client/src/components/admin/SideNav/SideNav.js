import React from "react";

import "./style.css";

const SideNav = props => {

    let sideNavClasses = "side-nav";
    if (props.show) {
        sideNavClasses = "side-nav open";
    }
    
    return(
        <nav className={sideNavClasses} >
        <ul>
            <li><a href="/admin">Home</a></li>
            <li><a href="/admin/requests">View Requests</a></li>
            <li><a href="/admin/customers">Customers</a></li>
            <li><a href="/admin/calendar">Calendar</a></li>
            <li><a href="/admin/newUser">New Customer</a></li>
        </ul>
    </nav>
    )
};

export default SideNav;