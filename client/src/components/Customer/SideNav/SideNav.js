import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWrench, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

const SideNav = props => {

    let sideNavClasses = "side-nav";
    if (props.show) {
        sideNavClasses = "side-nav open";
    }

    return (
        <nav className={sideNavClasses} >
            <img className="logo" src="http://www.dev202valet.com.php72-35.phx1-1.websitetestlink.com/assets/images/svg/202_valet_white.svg" alt="202 valet logo"></img>
            <ul>
                <li className="row">
                    <FontAwesomeIcon icon={faHome} className="nav-icons" />
                    <a href="/dashboard">Home</a>
                </li>
                <li className="row">
                    <FontAwesomeIcon icon={faWrench} className="nav-icons" />
                    <a href="/dashboard/schedule">Request Valet</a>
                </li>
                <li className="row">
                    <FontAwesomeIcon icon={faCheckSquare} className="nav-icons" />
                    <a href="/dashboard/requests">View Requests</a>
                </li>
                {/* <li className="row">
                    <FontAwesomeIcon icon={faMoneyBillAlt} className="nav-icons" />
                    <a href="/dashboard/bills">View Bills</a>
                </li> */}
            </ul>
        </nav>
    )

};

export default SideNav;