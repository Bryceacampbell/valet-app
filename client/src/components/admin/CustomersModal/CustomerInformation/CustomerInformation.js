import React, { Component } from "react";
import "./style.css";
import API from "../../../../utils/API";



class CustomerInformation extends Component {

   
    constructor(props) {
        super(props);
        this.state = {

            firstName: this.props.customer.information.firstName,
            lastName: this.props.customer.information.lastName,
            phone: this.props.customer.information.phoneNumber,
            email: this.props.customer.information.email,
            address: this.props.customer.information.address
            
            
        };

        this.handleChange = this.handleChange.bind(this);

    };

    componentDidMount() {
        

    }

    handleChange(event) {

    
        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        });
        
       

    }

    handleModalSubmit = (event) => {

        event.preventDefault();
        
        API.updateCustomer(this.props.id, this.state);

        this.props.turnOff();

        this.props.load();
        
       
    }




    render() {
        return (

            <form>

                <div className="form-group">
                    <label className="customerLabel">Customer First Name</label>
                    <input value={this.state.firstName} onChange={this.handleChange} name="firstName"  className="form-control" ></input>
                </div>
                <div className="form-group">
                    <label className="customerLabel">Customer Last Name</label>
                    <input value={this.state.lastName} onChange={this.handleChange} name="lastName"  className="form-control"></input>
                </div>
                 <div className="form-group">
                    <label className="customerLabel">Phone Number</label>
                    <input value={this.state.phone} onChange={this.handleChange} name="phone"  className="form-control"></input>
                </div>
                <div className="form-group">
                    <label className="customerLabel">Email</label>
                    <input value={this.state.email} onChange={this.handleChange} name="email"  className="form-control"></input>
                </div>
                <div className="form-group">
                    <label className="customerLabel">Address</label>
                    <input value={this.state.address} onChange={this.handleChange} name="address"  className="form-control"></input>
                </div>
               
               

                <button onClick={this.props.onCancel} className="btn customerButton">Cancel</button>
                <button onClick={this.handleModalSubmit}  className="btn btn-success customerButton">Submit</button>
            </form>

        );
    };
};
export default CustomerInformation;