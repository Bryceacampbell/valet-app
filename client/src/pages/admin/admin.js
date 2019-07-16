import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
// import Customers from "../components/admin/Customers/Customers";
import Backdrop from "../../components/Backdrop/Backdrop";
import ToggleButton from "../../components/admin/SideNav/ToggleButton";
import SideNav from "../../components/admin/SideNav/SideNav";

class AdminPage extends Component {
  state = {
    sideNavOpen: false
  }

  sideNavToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideNavOpen: !prevState.sideNavOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideNavOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    console.log(this.props.auth.getProfile());

    return (
      <div style={{height: "100%"}}>
        <NavBar {...this.props } navClickHandler={this.sideNavToggleClickHandler}/>
        <ToggleButton/>
        <SideNav show={this.state.sideNavOpen}/>
        {backdrop}       
      </div>
    )
  }

}

export default AdminPage;