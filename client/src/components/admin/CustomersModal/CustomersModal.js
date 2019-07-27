import React, { Component } from "react";
import API from "../../../utils/API";
import "./style.css";




class CustomerModal extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentRequest: {}
    //     };
    //     this.loadRequest = this.loadRequest.bind(this);
    // };

    // componentDidMount() {
    //     this.loadRequest(this.props.id);
    // };

    // loadRequest = (id) => {
    //     API.getRequest(id)
    //         .then(res => {
    //             this.setState({ currentRequest: res.data });
    //             console.log(this.state.currentRequest);
    //         })
    //         .catch(err => console.log(err));
    // };

    // pickupConfirmed = (confirmed) => {
    //     if (confirmed) {
    //         return (<p>Yes</p>)
    //     } else {
    //         return (<p>No</p>)
    //     }
    // };

    render() {
        return (

            <div className="customer-modal">
                <header className="customer-modal-header">
                    <h1>Add an Asset</h1>
                </header>
                <section className="customer-modal-content">
                    <div className="card-body">
                        <form class="POST" action="/api/admin/updateCustomer">
                            <div class="form-group">
                                <label for="firstName">First Name</label>
                                <input name="firstName" type="firstName" class="form-control" id="firstName" placeholder="Jim"></input>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name</label>
                                <input name="lastName" type="lastName" class="form-control" id="lastName" placeholder="Smith"></input>
                            </div>
                            <div class="form-group">
                                <label >Username</label>
                                <input name="userName" type="userName" class="form-control" placeholder="Boats632"></input>
                            </div>
                            <div class="form-group">
                                <label >Phone Number</label>
                                <input name="phoneNumber" type="phoneNumber" class="form-control" placeholder="602-445-2647"></input>
                            </div>
                            <div class="form-group">
                                <label >Email address</label>
                                <input name="email" type="email" class="form-control" placeholder="name@example.com"></input>
                            </div>
                            <div class="form-group">
                                <label >Password</label>
                                <input name="pass" type="pass" class="form-control" placeholder="password"></input>
                            </div>
                            <div class="form-group">
                                <label >Address</label>
                                <input name="address" type="address" class="form-control" placeholder="4442 N Street "></input>
                            </div>
                            <div class="form-group">
                                <label>Notes</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                            <button class="button" value="submit" type="submit">Submit</button>

                        </form>
                    </div>

                </section>
                <section className="customer-modal-actions">
                    <button className="btn">Cancel</button>
                    <button className="btn">Decline</button>
                    <button className="btn">Approve</button>
                </section>

            </div >
        );
    };
};

export default CustomerModal;