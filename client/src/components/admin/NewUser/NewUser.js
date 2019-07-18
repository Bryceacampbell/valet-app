import React, { Component } from "react";
import "./style.css";


class NewUser extends Component {

    render() {
        return (
            <div className="container">

                <form className="text-center" action="/api/admin/customers/add" method="post">
                    <div className="form-group">
                        <label >First Name</label>
                        <input type="firstName" className="form-control" placeholder="James"></input>
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input type="lastName" className="form-control" placeholder="Smith"></input>
                    </div>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="username" className="form-control" placeholder="Boats632"></input>
                    </div>
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input type="phoneNumber" className="form-control" placeholder="602-445-2647"></input>
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com"></input>
                    </div>
                    <div className="form-group">
                        <label >Customer Password</label>
                        <input type="pass" className="form-control" placeholder="password"></input>
                    </div>
                    <div className="form-group">
                        <label >Address</label>
                        <input type="address" className="form-control" placeholder="4442 N Street "></input>
                    </div>
                    <div className="form-group">
                        <label>Notes</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <button className="button" value="Submit" type="submit">Submit</button>



                </form>


            </div>
        )

    }






};

export default NewUser;