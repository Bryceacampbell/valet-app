import React, { Component } from "react";

import { Route } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";

import SideNav from "../../components/Customer/SideNav/SideNav";
import Backdrop from "../../components/Backdrop/Backdrop";
import ToggleButton from "../../components/Customer/SideNav/ToggleButton";
import CustomerHome from "../../components/Customer/CustomerHome";

import Schedule from "../../pages/client/schedule";

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
        <SideNav show={this.state.sideNavOpen} {...this.props} />
        {backdrop}
        <CustomerHome />

        <Route
          path="dashboard/home"
          render={() => <DashboardPage {...this.props} />}
        />

        <Route
          path="/dashboard/schedule"
          render={() => <Schedule {...this.props} />}
        />

      </div>
    )
  }

};

export default DashboardPage;