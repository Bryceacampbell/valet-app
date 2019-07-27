import React from "react";
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => (
      rest.auth.isAuthenticated()
        ? children
        : <Redirect to="/" />
    )} />
  )
};
