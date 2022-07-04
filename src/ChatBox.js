import React from 'react';
import styled from 'styled-components'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatColumn = styled.div`
  max-width: {
    xs: 95%;
    sm: 90%;
    md: 60%;
    }
`

const MessageListColumn = styled.div`
  overflow: auto;
  padding-top: 3rem;
  background-color: #f0faff;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  height: 400px;
`

const Message = styled.div`
  padding: 1rem;
  margin: 0.25rem;
  float: right;
  background: #ffffff;
  border-radius: 10px;
  border: 1px black;
`

const Header = styled.div`
  padding: 1rem !important;
  background: #0093DD;
  border: 1px solid #dee2e6 !important;
`

const MessageListTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 0;
  margin-top: 1.4rem;
  margin-bottom: 0.6rem;
  color: #ffffff;
`
const MessageForm = styled.form`
  max-width: 100%;
  padding:20px;
  margin:0;
  display:flex;
`

const MessageInput = styled.input`
  display: block;
  width: 80%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
`

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messageList:[]
    };
  }

  submitForm = event => {
    event.preventDefault();
    const { message, messageList } = this.state
    const newMessageList = [...messageList, message]
    this.setState({
      messageList: newMessageList,
      message: ''
    })
  }

  render() {
    const { message, messageList } = this.state
    return (
        <ChatColumn>
          <Header>
            <MessageListTitle>LocalizaHC</MessageListTitle>
          </Header>
          <MessageListColumn>
            <div>
              {
                messageList.map( message => {
                  return <div key={message+Date.now()} style={{overflow: 'hidden'}}><Message>{ message }</Message></div>
                })
              }
            </div>
          </MessageListColumn>
          <div style={{backgroundColor: '#0093DD'}}>
            <MessageForm onSubmit={this.submitForm}>
              <div>
                <MessageInput type="text" value={message} onChange={event => this.setState( {message: event.target.value} )} placeholder='Type a message...' />
              </div>
              <div>
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                </Button>
              </div>
            </MessageForm>
          </div>
        </ChatColumn>
    );
  }
}

export default ChatBox;