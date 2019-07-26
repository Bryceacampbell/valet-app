import React from "react";
import { BrowserRouter as Route, Redirect } from 'react-router-dom';
import Auth from "../components/auth-components/Auth";

export const PrivateRoute = ({ component: Component, path}) => (
    <Route path={path} render={(props) => (
      Auth.isAuthenticated() === true
      ? <Component/>
      : <Redirect to="/" />
    )}/>
  );
