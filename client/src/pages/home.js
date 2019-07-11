import React, { Component } from "react";

import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero"

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