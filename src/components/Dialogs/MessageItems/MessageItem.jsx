import React from 'react';
import classMesssage from './MessageItem.module.css';

const MessageItem = (props) => {
  return <div className={classMesssage.message}>{props.message}</div>
}

export default MessageItem; 