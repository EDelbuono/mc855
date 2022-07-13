import React from 'react';
import ChatBot from 'react-simple-chatbot';
import CustomChatBot from './ChatBotScreen';

 
function AppRender(){
    return (
        <CustomChatBot>
            <ChatBot/>
        </CustomChatBot>
    )   
}
 
export default AppRender;