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
            <li><a href="/">Home</a></li>
            <li><a href="/">View Requests</a></li>
            <li><a href="/">Customers</a></li>
            <li><a href="/">Calendar</a></li>
        </ul>
    </nav>
    )
};

export default SideNav;