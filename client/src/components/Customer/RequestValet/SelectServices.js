import React, { Component } from "react";
import checkboxes from "./checkboxes";

import { Form } from "react-bootstrap";

class SelectServices extends Component {

    state = {
        checkboxes: checkboxes,
        selectedServices: []
    };

    handleSelect = (event) => {
        var servicesArr = [...this.state.selectedServices];
        const value = event.target.value
        const index = servicesArr.findIndex(service => service === value);
        if (index > -1) {
            servicesArr = [...servicesArr.slice(0, index), ...servicesArr.slice(index + 1)]
        } else {
            servicesArr.push(value);
        }
        this.setState({ selectedServices: servicesArr });
        this.handleChange({
            name: "selectedServices",
            value: this.state.selectedServices
        })
    };

    handleChange = ({name, value}) => {
        this.props.handleChange({name, value})
    };

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }

        return (
            <div>
                <div className="text-center"><strong>Step 3:</strong> Select Services</div>
                <hr></hr>
                <div className="text-center">
                    {checkboxes.map(checkbox => (
                        <Form.Check
                            inline
                            selected
                            type="checkbox"
                            label={checkbox.label}
                            name={checkbox.name}
                            value={checkbox.name}
                            id={checkbox.id}
                            key={checkbox.key}
                            onChange={this.handleSelect}
                        />
                    ))}
                </div>
                <button className="btn btn-success float-right">Submit Valet</button>
            </div>
        )
    }
};

export default SelectServices;
