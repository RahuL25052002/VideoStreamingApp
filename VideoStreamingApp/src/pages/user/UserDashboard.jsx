import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => (
  <div>
    <h2>User Dashboard</h2>
    <ul>
      <li><Link to="/user/videos">Browse Videos</Link></li>
      <li>Create Playlists</li>
      <li>Rate & Comment</li>
    </ul>
  </div>
);

export default UserDashboard;