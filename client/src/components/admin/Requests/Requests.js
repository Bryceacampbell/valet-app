import React, { Component, useState } from "react";
import "./style.css";
import ModalButton from "./RequestModal";

class Requests extends Component {

    render() {
        return (
            <div className="container card text-center">
                <div className="card-header">
                    <h3>View Requests</h3>
                </div>
                <div className="card-body">
                    <div className="card request">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <p>Unit #:</p>
                                    <p>A66</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Customer Name: </p>
                                    <p>Bryce Campbell</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Date Requested:</p>
                                    <p>7/15/19</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Request Type:</p>
                                    <p>NEW</p>
                                    <ModalButton/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card request" >
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <p>Unit #:</p>
                                    <p>C11</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Customer Name: </p>
                                    <p>Chesley Calloway</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Date Requested:</p>
                                    <p>7/17/19</p>
                                </div>
                                <div className="col-lg-3">
                                    <p>Request Type:</p>
                                    <p>NEW</p>
                                    <ModalButton/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Requests;