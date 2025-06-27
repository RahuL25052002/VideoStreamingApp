import React from "react";

const Register = () => (
  <div>
    <h2>Register</h2>
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <select>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  </div>
);

export default Register;
