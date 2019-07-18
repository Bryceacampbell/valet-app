import React from "react";

import "./style.css";

const SideNav = props => {

    let sideNavClasses = "side-nav";
    if (props.show) {
        sideNavClasses = "side-nav open";
    }

    return (
        <nav className={sideNavClasses} >
            <img className="logo" src="http://www.dev202valet.com.php72-35.phx1-1.websitetestlink.com/assets/images/svg/202_valet_white.svg" alt="202 valet logo"></img>
            <ul>
                <li><a href="/admin">Home</a></li>
                <li><a href="/admin/requests">View Requests</a></li>
                <li><a href="/admin/customers">Customers</a></li>
                <li><a href="/admin/calendar">Calendar</a></li>
            </ul>
        </nav>
    )
};

export default SideNav;