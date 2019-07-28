import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";

import HomePage from './pages/home';
import DashboardPage from './pages/client/dashboard';
import CallbackPage from "./pages/callback";
import AdminPage from "./pages/admin/admin";
import NoMatch from "./pages/nomatch";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage {...this.props} />} />
          <PrivateRoute path="/dashboard" {...this.props}>
            <DashboardPage {...this.props} />
          </PrivateRoute>
          <PrivateRoute path="/admin" {...this.props}>
            <AdminPage {...this.props} />
          </PrivateRoute>
          <Route exact path="/callback" render={() => <CallbackPage {...this.props} />} />
          <Route render={() => <NoMatch {...this.props}/>} />
        </Switch>
      </Router>
    );
  }
};
export default App;