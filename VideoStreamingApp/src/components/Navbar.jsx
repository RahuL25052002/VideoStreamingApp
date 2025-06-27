import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/admin/dashboard">Admin</Link>
    <Link to="/user/dashboard">User</Link>
  </nav>
);

export default Navbar;