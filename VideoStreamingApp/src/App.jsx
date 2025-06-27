import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadVideo from "./pages/admin/UploadVideo";
import VideoList from "./pages/user/VideoList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/upload" element={<UploadVideo />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/videos" element={<VideoList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;