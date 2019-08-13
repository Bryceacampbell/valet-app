import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";
import { TextArea, FormBtn } from "../../shared/Form";

const moment = require("moment");

class ConfirmModal extends Component {

    constructor(props) {
        super(props);
    };

    // componentDidMount() {
    //     this.loadRequest(this.props.id);
    // };

    render() {
        return (

            <div className="conf-modal">
                Request for {this.props.name} on {this.props.date} {this.props.action}.
                <FormBtn
                    className="btn btn-secondary close-button"
                    onClick={this.props.onClose}
                >
                    Close
                </FormBtn>

            </div >
        );
    };
};

export default ConfirmModal;