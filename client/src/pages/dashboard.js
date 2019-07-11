import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import NavBar from "../components/NavBar/Navbar";
import LeftMenu from "../components/client/LeftMenu/LeftMenu";
import Container from "../components/Container/Container";
// import Profile from "../components/Profile";

class DashboardPage extends Component {

  render() {
    return (
      <div>
        
        <LeftMenu />
        <Container>

        </Container>
      </div>
    )
  }

};

export default DashboardPage;