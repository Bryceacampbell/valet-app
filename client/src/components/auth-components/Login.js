import React from "react";

import { AuthConsumer } from "../../auth/authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <button className="btn btn-sm btn-primary" onClick={initiateLogin}>
        Login
      </button>
    )}
  </AuthConsumer>
);

export default Login;