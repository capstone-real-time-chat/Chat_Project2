import React from 'react';
import './chatMain.css';
import ChatInput from './chatInput';

function ChatMain({ onClose }) {
  return (
    <div className="chat-main">
      <button className="chat-close" onClick={onClose}>×</button>
      <ChatInput />
    </div>
  );
}

export default ChatMain;