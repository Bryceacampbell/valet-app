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
                <li><a href="/dashboard/home">Home</a></li>
                <li><a href="/dashboard/schedule">Schedule A Service</a></li>
                <li><a href="/dashboard/requests">Current Requests</a></li>
                <li><a href="/dashboard/bills">View Bills</a></li>
            </ul>
        </nav>
    )

};

export default SideNav;