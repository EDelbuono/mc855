import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CustomChatBot from "./chatbot/ChatBotScreen";
import Home from "./chatbot/Home"
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import Queue from "./chatbot/Queue";

export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="localizahc/*" element={<CustomChatBot />} />
        <Route path="queue/*" element={<Queue />} />
        <Route path="admin/*" element={<AdminLogin />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}