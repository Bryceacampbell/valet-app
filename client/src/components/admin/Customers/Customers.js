import React, { Component } from "react";

import "./style.css";

class Customers extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customers;