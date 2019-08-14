import React, { Component } from "react";
import "./style.css";



class CustomerInformation extends Component {

   
    constructor(props) {
        super(props);
        this.state = {

            firstName: this.props.customer.information.firstName,
            lastName: this.props.customer.information.lastName,
            phone: this.props.customer.information.phoneNumber,
            email: this.props.customer.information.email,
            address: this.props.customer.information.address,
            username: this.props.customer.information.userName,
            
        };

        this.handleChange = this.handleChange.bind(this);

    };

    componentDidMount() {
        console.log(this.props.customer);

    }

    handleChange(event) {

    
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
        
        console.log(this.state);

    }




    render() {
        return (

            <form method="post" action={"/api/admin/customers/" + this.props.id}>

                <div class="form-group">
                    <label class="customerLabel">Customer First Name</label>
                    <input value={this.state.firstName} onChange={this.handleChange} name="firstName"  class="form-control" id="firstName"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel">Customer Last Name</label>
                    <input value={this.state.lastName} onChange={this.handleChange} name="lastName"  class="form-control" id="lastName"></input>
                </div>
                 <div class="form-group">
                    <label class="customerLabel">Phone Number</label>
                    <input value={this.state.phone} onChange={this.handleChange} name="phone"  class="form-control" id="phone"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel">Email</label>
                    <input value={this.state.email} onChange={this.handleChange} name="email"  class="form-control" id="email"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel">Address</label>
                    <input value={this.state.address} onChange={this.handleChange} name="address"  class="form-control" id="address"></input>
                </div>
                <div class="form-group">
                    <label class="customerLabel">Username</label>
                    <input value={this.state.username} onChange={this.handleChange} name="userName"  class="form-control" id="username"></input>
                </div>
               

                <button onClick={this.props.onCancel} className="btn customerButton">Cancel</button>
                <button value="submit" type="submit" className="btn btn-success customerButton">Submit</button>
            </form>

        );
    };
};
export default CustomerInformation;