import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import DashboardPage from './pages/client/dashboard';
import CallbackPage from "./pages/callback";
import AdminPage from "./pages/admin/admin";
import Container from "./components/Container/Container";
import Schedule from "./pages/client/schedule";

class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <HomePage {...this.props} />} />
            {this.props.auth.isAuthenticated() &&
              <Route
                exact path="/dashboard"
                render={() => <DashboardPage {...this.props} />}
              />
            }

            {this.props.auth.isAuthenticated() &&
              <Route
                exact path="/admin"
                render={() => <AdminPage {...this.props} />}
              />
            }
            <Route exact path="/callback" component={CallbackPage} />
          </Switch>
        </Router>
      </div>
    );
  }
};
export default App;