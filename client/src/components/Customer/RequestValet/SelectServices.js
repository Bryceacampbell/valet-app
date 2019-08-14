import React, { Component } from "react";
import checkboxes from "./checkboxes";

import { Form } from "react-bootstrap";

class SelectServices extends Component {

    state = {
        checkboxes: checkboxes
    };

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        console.log(this.state.checkboxes);
        return (
            <div>
                <div className="text-center"><strong>Step 3:</strong> Select Services</div>
                <hr></hr>
                <div className="text-center">
                    {checkboxes.map(checkbox => (
                        <Form.Check
                            inline
                            type="checkbox"
                            label={checkbox.label}
                            name={checkbox.name}
                            id={checkbox.id}
                            key={checkbox.key}
                        />
                    ))}
                </div>
                <button className="btn btn-success btn-block">Sign up</button>
            </div>
        )
    }
};

export default SelectServices;
