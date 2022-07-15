import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CustomChatBot from "./chatbot/ChatBotScreen";
import Home from "./chatbot/Home"
import AdminLogin from "./admin/AdminLogin";
import Queue from "./chatbot/Queue";
import DashboardFilaEspera from "./admin/DashboardFilaEspera";
import DashboardFilaSemSenha from "./admin/DashboardFilaSemSenha";
import DashboardFaixaAmarela from "./admin/DashboardFaixaAmarela";
import DashboardSala23 from "./admin/DashboardSala23";


export default function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="localizahc/*" element={<CustomChatBot />} />
        <Route path="queue/*" element={<Queue />} />
        <Route path="admin/*" element={<AdminLogin />} />
        <Route path="dashboard-fila-espera/*" element={<DashboardFilaEspera />} />
        <Route path="dashboard-fila-sem-senha/*" element={<DashboardFilaSemSenha />} />
        <Route path="dashboard-faixa-amarela/*" element={<DashboardFaixaAmarela />} />
        <Route path="dashboard-sala-23/*" element={<DashboardSala23 />} />
      </Routes>
    </Router>
  );
}