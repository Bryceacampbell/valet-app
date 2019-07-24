import React from "react";
import "./style.css";

const modal = props => (
    <div className="req-modal">
        <header className="req-modal-header"><h1>Request for {props.customer} on {props.requestedDate}</h1></header>
        <section className="req-modal-content"></section>
        <section className="req-modal-actions">
            <button className="btn">Cancel</button>
            <button className="btn">Save</button>
        </section>
    </div>
);

export default modal;