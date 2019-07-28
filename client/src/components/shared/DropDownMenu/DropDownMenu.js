import React, { Component } from "react";
import "./style.css";
import Logout from "../../auth-components/Logout/Logout";
import { Dropdown, DropdownButton } from "react-bootstrap";

class DropDownMenu extends Component {

    render() {
        return (
            <DropdownButton title={this.props.user.nickname} className="dropdown-btn" variant="transparent">
                <Dropdown.Item as="button"><Logout {...this.props} /></Dropdown.Item>
            </DropdownButton>
        )
    }
};

export default DropDownMenu;