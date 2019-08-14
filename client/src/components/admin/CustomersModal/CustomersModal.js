import React, { Component } from "react";
import AssetForm from "./AssetForm/AssetForm.js";
import CustomerInformation from "./CustomerInformation/CustomerInformation.js";
import { faEdit, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class CustomerModal extends Component {
    state = {
        assetSwitch: false,
        customerSwitch: true
    };
    constructor(props) {
        super(props);

    };


    handleAssetClick = () => {

        console.log(this.props.customer);



        this.setState({

            customerSwitch: false,
            assetSwitch: true,

        });


    }

    handleCustomerClick = () => {



        this.setState({

            customerSwitch: true,
            assetSwitch: false,

        });


    }


   


    render() {
        return (
            <div className="customer-modal">
                <header className="customer-modal-header row">

                <div className="col-lg-6"> <a onClick={() => this.handleAssetClick()}>  <FontAwesomeIcon icon={faPlusCircle} className="add-btn" /> </a> Add Asset for {this.props.customer.information.firstName}  </div>
                    {/* <div className="col-lg-6"></div> */}
                    <div className="col-lg-6"> <a  onClick={() => this.handleCustomerClick()}> <FontAwesomeIcon icon={faEdit} className="add-btn" /></a> {this.props.firstName}'s information </div>
                </header>
                <section className="customer-modal-content">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">

                                {this.state.assetSwitch &&
                                    <AssetForm

                                        {...this.props}>

                                    </AssetForm>}

                                {this.state.customerSwitch &&
                                    <CustomerInformation

                                        {...this.props}>

                                    </CustomerInformation>}


                            </div>

                        </div>



                    </div>
                </section>




            </div>
        );
    };
};
export default CustomerModal;