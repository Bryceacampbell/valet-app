import React, { Component } from "react";
import { Route } from 'react-router-dom';

import NavBar from "../../components/shared/NavBar/Navbar";
import Customers from "../../components/admin/Customers/Customers"
import Backdrop from "../../components/shared/Backdrop/Backdrop";
import SideNav from "../../components/admin/SideNav/SideNav";
import Requests from "../../components/admin/Requests/Requests";
import NewUser from "../../components/admin/NewUser/NewUser";
import Calendar from "../../components/admin/Calendar/Calendar";

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
        <SideNav show={this.state.sideNavOpen} />
        <Route exact path="/admin/requests" render={() => <Requests {...this.props} />} />
        <Route exact path="/admin/customers" render={() => <Customers {...this.props} />} />
        <Route exact path="/admin/newUser" render={() => <NewUser {...this.props} />} />
        <Route exact path="/admin/calendar" render={() => <Calendar {...this.props} />} />

        {backdrop}
      </div>
    )
  }

}

export default AdminPage;