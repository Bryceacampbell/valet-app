import React from "react";

import {AuthConsumer} from "../auth/authContext";

const Profile = () => (
  <AuthConsumer>
    {({user}) => (
      <div className="container">
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    )}
  </AuthConsumer>
);

export default Profile;