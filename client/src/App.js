import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from "./pages/callback";
import AdminPage from "./pages/admin";

class App extends Component {
  render() {
    return (
          <div className="">
            <Router>
              <Switch>
                <Route exact path="/" render={() => <HomePage {...this.props}/>}/>
                <Route exact path="/dashboard" render={() => <DashboardPage {...this.props}/>} />
                <Route exact path="/admin" render={() => <AdminPage {...this.props}/>}/>
                <Route exact path="/callback" component={CallbackPage} />
              </Switch>
            </Router>
          </div>
      
    );
  }
};

export default App;