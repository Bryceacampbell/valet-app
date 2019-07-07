import React from "react";
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../auth/authContext";

const Callback = props => (
  <AuthConsumer>
    {({ handleAuthentication, user }) => {
      if (/access_token|id_token|error/.test(props.location.hash)) {
        handleAuthentication();
      }
      console.log(user)
      if (user.role === "admin") {
        return <Redirect to="/admin" />
      }
      else if (user.role === "writer") {
        return <Redirect to="/dashboard" />;
      }
    }}
  </AuthConsumer>
);

export default Callback;