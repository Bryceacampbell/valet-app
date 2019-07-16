import React, { Component } from "react";

import NavBar from "../../components/NavBar/Navbar";

import SideNav from "../../components/Customer/SideNav/SideNav";
import Backdrop from "../../components/Backdrop/Backdrop";
import ToggleButton from "../../components/Customer/SideNav/ToggleButton";
import CustomerHome from "../../components/Customer/CustomerHome";

class DashboardPage extends Component {

  state = {
    sideNavOpen: false
  }

  sideNavToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideNavOpen: !prevState.sideNavOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideNavOpen: false })
  }

  render() {
    console.log(this.props.auth.getProfile());

    let backdrop;

    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }


    return (

      <div style={{ height: "100%" }}>
        <NavBar {...this.props} navClickHandler={this.sideNavToggleClickHandler} />
        <ToggleButton />
        <SideNav show={this.state.sideNavOpen}/>
        {backdrop}
        <CustomerHome />

      </div>
    )
  }

};

export default DashboardPage;