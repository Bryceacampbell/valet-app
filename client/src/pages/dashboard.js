import React from "react";
import { Redirect } from "react-router-dom";
import { AuthConsumer } from "../auth/authContext";

import Can from "../components/auth-components/Can";
import NavBar from "../components/NavBar/Navbar";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import Container from "../components/Container/Container";
// import Profile from "../components/Profile";

const DashboardPage = () => (
  <AuthConsumer>
    {({ user }) => (
      <Can
        role={user.role}
        perform="dashboard-page:visit"
        yes={() => (
          <div>
            <NavBar/>
            <LeftMenu/>
            <Container>
              
            </Container>
          </div>
        )}
        no={() => <Redirect to="/" />}
      />
    )}
  </AuthConsumer>
);

export default DashboardPage;