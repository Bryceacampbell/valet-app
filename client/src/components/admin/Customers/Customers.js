import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";
import CustomerModal from "../CustomersModal/CustomersModal.js";
import CustomerBackdrop from "./backdrop";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
class Customers extends Component {
    state = {
        customers: [],
        modalSwitch: false,
        targetCustomer: {}
    };
    componentDidMount() {
        this.loadCustomers();

        console.log(this.state.customers);
    };
    loadCustomers = () => {
        API.getAllCustomers()
            .then(res => {
                
                this.setState({ customers: res.data });

                console.log(this.state.customers);
                
                
            })
            .catch(err => console.log(err.response));
    };
    customerClicked = (customer, id, name) => {

        console.log(customer);
        console.log("customer clicked");
        console.log(customer._id);
        console.log(customer.information.firstName);
        
        
        
        // event.persist();
        this.setState({
            modalSwitch: true,
            targetCustomer: customer
        });


    }

    handleModalClose = () => {
        console.log("handleModalClose was called");
         this.setState({modalSwitch: false});
    }

    turnOff = () => {

        this.setState({modalSwitch: false});
    }

    // handleModalSubmit = () => {
    //     console.log("handleModalsubmit was called");

    //     API.updateCustomer(this.state.targetCustomer._id);
        
    //     //  this.setState({modalSwitch: false});
    // }


    render() {
        return (
            <div className="container-fluid card text-center">
                {this.state.modalSwitch && <CustomerBackdrop />}
                {this.state.modalSwitch && <CustomerModal

                    
                    id={this.state.targetCustomer._id}
                    firstName={this.state.targetCustomer.information.firstName}
                    onCancel={this.handleModalClose}
                    turnOff={this.turnOff}
                    load={this.loadCustomers}
                    customer={this.state.targetCustomer}

                />}




                <div className="card-header row">
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-10">
                        <h3>Customers</h3>
                    </div>
                    <div className="col-lg-1">
                        <a href="/admin/newuser"><FontAwesomeIcon icon={faPlusCircle} className="add-btn" /></a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12 search-bar">
                            <div className="form-group has-search">
                                <span className="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
                                <input type="text" className="form-control" placeholder="Search"></input>
                            </div>
                        </div>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr >
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone #</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map(customer => (
                                <tr onClick={() => this.customerClicked(customer, customer.information, customer._id, customer.information.firstName)} data-id={customer._id} key={customer._id}>
                                    <td>{customer.information.firstName}</td>
                                    <td>{customer.information.lastName}</td>
                                    <td>{customer.information.phoneNumber}</td>
                                    <td>{customer.information.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
export default Customers;