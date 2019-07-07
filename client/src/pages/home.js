import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

// import { AuthConsumer } from "../auth/authContext";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero"

class HomePage extends Component {

  render() {
    return (

      <div>
        <NavBar />
        <Hero />

      </div>
    )

  }
}

export default HomePage;