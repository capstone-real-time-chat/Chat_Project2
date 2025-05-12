import React from 'react';
import './leftBar.css';
import accountImg from './img/account.png';
import menuImg from './img/menu.png';

function LeftBar({ onClickAccount, onClickMenu }) {
  return (
    <div className="left-bar">
        <img src={menuImg} alt="menu" className="menu-img" onClick={onClickMenu} style={{ cursor: "pointer" }}/>
        <img src={accountImg} alt="account" className="account-img" onClick={onClickAccount} style={{ cursor: "pointer" }}/>
    </div>
  );
}

export default LeftBar;
