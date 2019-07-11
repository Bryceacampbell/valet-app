import React, {Component} from "react";

import Auth from "../components/auth-components/Auth";

class CallBack extends Component {

  componentDidMount() {
      const auth = new Auth();
      auth.handleAuthentication();
  }
  render() {
      return(
          <div>Loading...</div>
      )
  }
}

export default CallBack;