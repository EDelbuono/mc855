import React from 'react';
import ChatBot from 'react-simple-chatbot';
import CustomChatBot from './ChatBotScreen'

class App extends React.Component {
  render() {
    return (
      <CustomChatBot>
      <ChatBot/>
      </CustomChatBot>
      )
    }
  }

export default App;