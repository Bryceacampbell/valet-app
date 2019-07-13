import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import NavBar from "../components/NavBar/Navbar";
import LeftMenu from "../components/admin/LeftMenu/LeftMenu";
import Container from "../components/Container/Container";
import NewUser from "../components/admin/Customers/newUser";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props}/>
        <LeftMenu />
        <Container>

        </Container>

        {/* <NewUser></NewUser> */}
      </div>
    )
  }
}

export default AdminPage;