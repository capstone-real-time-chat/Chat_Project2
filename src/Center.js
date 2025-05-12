import React from 'react';
import './Center.css';

function Center({ isVisible, onClickStock }) {
  if (!isVisible) return null; // 화면에 아예 렌더링하지 않음
    
  return (
    <div className="center-screen">
        <div className="stocks" onClick={onClickStock}>
            <div className="stocks-1"></div>
            <div className="stocks-2"></div>
            <div className="stocks-3"></div>
            <div className="stocks-4"></div>
            <div className="stocks-5"></div>
            <div className="stocks-6"></div>
        </div>
    </div>
  );
}

export default Center;