import React, { useRef } from 'react';
import './chatInput.css';

function ChatInput() {

  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // 높이 초기화
    textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞게 높이 조절
  };

  return (
    <div className="chat-input">
      <textarea 
        placeholder="메시지를 입력하세요" 
        className="chat-textbox"
        rows="1"
        ref={textareaRef}
        onInput={handleInput}
      />
    </div>
  );
}

export default ChatInput;