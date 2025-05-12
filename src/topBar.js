import React from 'react';
import './topBar.css';

function TopBar({ onClickHome }) {
  return (
    <div className="top-bar">
        <div className="home" onClick={onClickHome} style={{ cursor: 'pointer' }}>DAJUTALK</div>
    </div>
  );
}

export default TopBar;