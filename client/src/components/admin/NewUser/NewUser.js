import React, { Component } from "react";
import "./style.css";


class NewUser extends Component {

    render() {
        return (
            <div className="container card">
                <div className="card-header text-center">
                    <h3>Add Customer</h3>
                </div>

                <div className="card-body">
                    <form class="" action="/api/admin/customers/add" method="post">
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
                            <input name="username" type="username" class="form-control" placeholder="Boats632"></input>
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
            </div>

        )

    }






};

export default NewUser; 