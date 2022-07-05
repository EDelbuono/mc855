import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import {
    ChatColumn,
    Header,
    HeaderTitle,
    MessageListColumn,
    Message,
    MessageInput,
    MessageForm,
    ChatButton,
}
from './components'

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
            <HeaderTitle>
              LocalizaHC
              </HeaderTitle>
          </Header>
          <MessageListColumn>
            <div> {
                messageList.map( message => {
                  return <div
                  key={message+Date.now()}
                  style={{overflow: 'hidden'}}>
                    <Message> { message }
                    </Message>
                  </div>
                })
              }
            </div>
          </MessageListColumn>
          <div
          style={{backgroundColor: '#0093DD'}}>
            <MessageForm
            onSubmit={this.submitForm}>
              <div>
                <MessageInput
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={message}
                onChange={
                  event => this.setState(
                    {message: event.target.value}
                    )
                  }
                placeholder='Mensagem'/>
              </div>
              <div>
                <ChatButton
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}>
                </ChatButton>
              </div>
            </MessageForm>
          </div>
        </ChatColumn>
    );
  }
}

export default ChatBox;