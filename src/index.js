import React from 'react';
import ReactDOM from 'react-dom'
import ChatBox from './ChatBox';
import {usernameList} from './data';

ReactDOM.render(<ChatBox user='larry' usernameList={usernameList}/>, document.getElementById('root'))