import React, { Component } from "react";

import NavBar from "../components/NavBar/Navbar";
import CustomerHome from "../components/Customer/CustomerHome";

class HomePage extends Component {

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <CustomerHome />
      </div>
    )

  }
}

export default HomePage;