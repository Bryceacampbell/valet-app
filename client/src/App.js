import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from "./pages/callback";
import AdminPage from "./pages/admin";
import Auth from "./components/auth-components/Auth";

function App() {
  return (
    <div className="">
      <Auth>
        <div className="">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/dashboard" component={DashboardPage}/>
              <Route exact path="/admin" component={AdminPage}/>
              <Route exact path="/callback" component={CallbackPage}/>
            </Switch>
          </Router>
        </div>
      </Auth>
    </div>
  );
};

export default App;