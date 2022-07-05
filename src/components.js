import styled from 'styled-components'
import { Button, TextField } from '@mui/material';

export const ChatColumn = styled.div`
  min-width: 330px
`

export const MessageListColumn = styled.div`
  overflow: auto;
  padding-top: 3rem;
  background-color: #f0faff;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  height: 400px;
`

export const Message = styled.div`
  padding: 1rem;
  margin: 0.25rem;
  float: right;
  background: #ffffff;
  border-radius: 10px;
  border: 1px black;
`

export const Header = styled.div`
  padding: 1rem !important;
  background: #0093DD;
  border: 1px solid #dee2e6 !important;
`

export const HeaderTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 0;
  margin-top: 1.4rem;
  margin-bottom: 0.6rem;
  color: #ffffff;
`

export const MessageForm = styled.form`
  max-width: 100%;
  padding: 12px;
  margin: 0px;
  display: flex;
`

export const MessageInput = styled(TextField)`
  width: 90%;
  height: calc(1.5em + 0.75rem + 6px);
  padding: 0.375rem 0.75rem;
  border-radius: 15px;
  color: #495057;
  background-color: #ADEBD3;
`

export const ChatButton = styled(Button)`
`
