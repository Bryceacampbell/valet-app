import React from "react";
import { Route, Redirect } from 'react-router-dom';

const roleMap = {
  admin: "/admin",
  client: "/dashboard"
};

export const PrivateRoute = ({ children, ...rest }) => {
  let userRole = rest.auth.getUserRole();

  const userPath = roleMap[userRole];
   console.log(rest.path, userPath)
  if (userPath !== rest.path) {
     return ( <Redirect to={userPath}/> )
  }
  return (
    <Route {...rest} render={() => (
      rest.auth.isAuthenticated()
        ? children
        : <Redirect to="/" />
    )} />
  )
};
