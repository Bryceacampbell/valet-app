import React, { Component } from "react";
import { BrowserRouter as Route} from 'react-router-dom';
// import { Redirect } from "react-router-dom";

import NavBar from "../components/NavBar/Navbar";
import LeftMenu from "../components/admin/LeftMenu/LeftMenu";
// import Customers from "../components/admin/Customers/Customers";
import Requests from "../components/admin/Requests/Requests";

class AdminPage extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props}/>
        <LeftMenu />
        <Route exact path="/admin/requests" render={() => <Requests {...this.props} />} />
        {/* <Requests/> */}
      </div>
    )
  }
}

export default AdminPage;