import React, { Component } from "react";
import "style.css";

const modal = props => (
    <div className="modal">
        <header>Request for {props.customer} on {props.requestedDate}</header>
        <section className="modal-content"></section>
        <section className="modal-actions">
            <button className="btn">Cancel</button>
            <button className="btn">Save</button>
        </section>
    </div>
);

export default modal;