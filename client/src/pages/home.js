import React, { Component } from "react";

import NavBar from "../components/shared/NavBar/Navbar";
import Hero from "../components/shared/Hero/Hero";


class HomePage extends Component {

  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <Hero />
      </div>
    )

  }
}

export default HomePage;
