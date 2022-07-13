import React from 'react';
import ReactDOM from 'react-dom';

import Home from './chatbot/Home';
import CustomChatBot from './chatbot/ChatBotScreen'
import Dashboard from './admin/Dashboard'
import AdminLogin from './admin/AdminLogin'
  
ReactDOM.render(
    <AdminLogin />, document.getElementById('root')
);