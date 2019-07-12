import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import NavBar from "../components/NavBar/Navbar";
import LeftMenu from "../components/client/LeftMenu/LeftMenu";
import Container from "../components/Container/Container";

class DashboardPage extends Component {

  render() {
    console.log(this.props.auth.getProfile());
    return (
      <div>
        <NavBar {...this.props} />
        <LeftMenu />
        <Container>

        </Container>
      </div>
    )
  }

};

export default DashboardPage;