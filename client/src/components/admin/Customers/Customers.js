import React, { Component } from "react";
import API from "../../../utils/API";

import "./style.css";

class Customers extends Component {

    state = {
        customers: [],
    };

    componentDidMount() {
        this.loadCustomers();
    };

    loadCustomers = () => {
        API.getAllCustomers()
            .then(res => {
                this.setState({ customers: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div className="container card text-center">
                <div className="card-header">
                    <h3>Customers</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search"></input>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {this.state.customers.map(customer => (
                                    <div key={customer._id}>
                                        <li>{customer.information.firstName}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Customers;