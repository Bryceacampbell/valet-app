import React, { Component } from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {

    state = {
        currentRequests: []
    };

    render() {
        return (
            <div className="container-fluid card home">
                <div className="card-header text-center">
                    <h3>Welcome to 202 Valet</h3>
                </div>

                <div className="card-body">

                    <div className="row">
                        <div className="col-lg-6">
                            <a href="/dashboard/schedule">
                                <div className="btn btn-primary schedule-btn">
                                    <FontAwesomeIcon icon={faCalendarCheck} className="calendar-icon" />
                                    <h4>Request Valet Services</h4>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-6">
                            <a href="/dashboard/requests">
                                <div className="btn btn-primary schedule-btn">
                                    <FontAwesomeIcon icon={faCheckSquare} className="calendar-icon" />
                                    <h4>View Requests</h4>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card announcements">
                                <div className="card-header">
                                    <h4>Announcements</h4>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>New to 202 valet storage? First off, congratulations on being apart of this revolutionary
                                            storage valet service. Our goal is simply to make your life easier by allowing you to submit valet requests and 
                                            pick up your unit--stress free! To submit requests, please click on the "Request Valet Services" button above! 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <Carousel>
                                <Carousel.Item className="carousel">
                                    <img
                                        className=""
                                        src="https://rnl-ww-uploads.s3.amazonaws.com/rvvalet/f6929/slide-5ceed5e8b579d1.06041670--rv-self-storage-1.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=""
                                        src="https://rnl-ww-uploads.s3.amazonaws.com/rvvalet/f6929/slide-5ceed5f9347ff2.02784720--rv-self-storage-2.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className=""
                                        src="https://rnl-ww-uploads.s3.amazonaws.com/rvvalet/f6929/slide-5cf584e8b1bcc9.27523167--dji_0077-min.jpg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;