import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => (
  <div>
    <h2>Admin Dashboard</h2>
    <ul>
      <li><Link to="/admin/upload">Upload New Video</Link></li>
      <li>Manage Videos</li>
      <li>View Ratings & Comments</li>
    </ul>
  </div>
);

export default AdminDashboard;