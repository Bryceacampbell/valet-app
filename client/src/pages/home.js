import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../auth/authContext";
import NavBar from "../components/NavBar/Navbar";
import Hero from "../components/Hero/Hero"

const HomePage = () => (
  <AuthConsumer>
    {({ authenticated }) =>
      authenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <NavBar/>
          <Hero/>
          
        </div>
      )
    }
  </AuthConsumer>
);

export default HomePage;