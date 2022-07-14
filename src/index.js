import React from 'react';
import ReactDOM from 'react-dom';

import Home from './chatbot/Home';
import CustomChatBot from './chatbot/ChatBotScreen'
import Dashboard from './admin/Dashboard'
import AdminLogin from './admin/AdminLogin'
import Queue from './chatbot/Queue';
  
ReactDOM.render(
    <Queue />, document.getElementById('root')
);