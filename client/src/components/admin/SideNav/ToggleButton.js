import React from "react";

import "./style.css";

const ToggleButton = props => (

    <button className="toggle_button" onClick={props.click}>
        <div className="toggle_line"/>
        <div className="toggle_line"/>
        <div className="toggle_line"/>
    </button>
);

export default ToggleButton;