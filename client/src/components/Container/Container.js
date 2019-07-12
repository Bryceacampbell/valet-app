import React from "react";
import "./style.css";

import Customers from "../admin/Customers/Customers";

function Container() {
    return (
        <div className="container card text-center">

            <div className="card-header">
                <h1>Container Header</h1>
            </div>

            <div className="card-body">
                <Customers />
            </div>
            
        </div>
    )
};

export default Container;