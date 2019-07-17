import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Redirect } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
import Customers from "../../components/admin/Customers/Customers"
import Backdrop from "../../components/Backdrop/Backdrop";
import ToggleButton from "../../components/admin/SideNav/ToggleButton";
import SideNav from "../../components/admin/SideNav/SideNav";
import Requests from "../../components/admin/Requests/Requests";

class AdminPage extends Component {
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
    let backdrop;

    if (this.state.sideNavOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    console.log(this.props.auth.getProfile());

    return (
      <div style={{ height: "100%" }}>
        <NavBar {...this.props} navClickHandler={this.sideNavToggleClickHandler} />
        <ToggleButton />
        <SideNav show={this.state.sideNavOpen} />
        <Route exact path="/admin/requests" render={() => <Requests {...this.props} />} />
        <Route exact path="/admin/customers" render={() => <Customers {...this.props} />} />
        {backdrop}
      </div>
    )
  }

}

export default AdminPage;