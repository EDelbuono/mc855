import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { steps } from './ChatFlow';

const props = {
    background: '#F0FAFF',
    fontFamily: 'Roboto',
    headerBgColor: '#0093DD',
    headerFontColor: '#FFFFFF',
    headerFontSize: '20px',
    botBubbleColor: '#ADEBD3',
    botFontColor: '#222222',
    userBubbleColor: '#FFFFFF',
    userFontColor: '#222222',
};

const bubbleStyle = {
    maxWidth: '67%',
    fontSize: '15px',
};

const bubbleOptionStyle = {
    fontSize: '15px',
    fontFamily: 'Roboto',
    background: '#F0FAFF',
    color: '#0093DD',
    border: '1px solid #0093DD',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '12px 24px',
    gap: '10px',
}

const CustomChatBot = () => (
  <ThemeProvider theme={props}>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    </style>
    <ChatBot 
    hideUserAvatar
    hideBotAvatar
    steps={steps}
    headerTitle="LocalizaHC"
    bubbleOptionStyle={bubbleOptionStyle}
    bubbleStyle={bubbleStyle}
    />
  </ThemeProvider>
);

export default CustomChatBot;