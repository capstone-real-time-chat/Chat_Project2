import React, { useState } from 'react';
import './stockMain.css';
import Chat from "./Chat/chatMain";
import Stock from "./Stcok";
import chatImg from './img/chat.png';

function StockMain() {
  const [showChat, setShowChat] = useState(false); // 처음엔 안 보임

  const handleChatClick = () => {
    setShowChat(true); // 한 번 누르면 true로 고정
  };

  const handleChatClose = () => {
    setShowChat(false); // 닫기 버튼 누르면 false
  };

  return (
    <div className="stock-main">
      {!showChat && (
        <img src={chatImg} alt="chat" className="chat-img" onClick={handleChatClick} style={{ cursor: "pointer" }}/>
      )}
      {showChat && <Chat onClose={handleChatClose}/>}
    </div>
  );
}

export default StockMain;