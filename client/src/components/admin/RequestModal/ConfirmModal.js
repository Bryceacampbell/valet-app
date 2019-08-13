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
                <React.Fragment>
                    <header className="req-modal-header">
                    </header>
                    <section className="row m-auto req-modal-content align-middle">
                            <h3>Request for {this.props.name} on {moment(this.props.date).format("YYYY-MM-DD")} was {this.props.action}.</h3>
                    </section>
                    <FormBtn
                        className="btn btn-secondary close-button"
                        onClick={this.props.closeConfirmMod}
                    >
                        Close
                </FormBtn>


                </React.Fragment>
            </div>
        );
    };
};

export default ConfirmModal;