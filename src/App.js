import Main from "./Main";
import Center from "./Center";
import LeftBar from "./leftBar";
import TopBar from "./topBar";
import Login from "./Login";
import Search from "./Search";
import SignUp from "./SignUp";
import StockMain from "./stockMain";
import React, { useState } from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCenter, setShowCenter] = useState(true);
  const [showStockMain, setShowStockMain] = useState(false);

  const handleAccountClick = () => {
    setShowLogin(true);
    setShowSignUp(false); // Login 표시 시 SignUp 닫기
    setShowCenter(false); // Center 숨기기
    setShowStockMain(false);
  };
  const handleMenuClick = () => {
    setShowSearch(!showSearch); // showSearch 상태를 토글
  };
  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false); // SignUp 표시 시 Login 닫기
    setShowStockMain(false);
  };
  const handleHomeClick = () => {
    setShowLogin(false);
    setShowSearch(false);
    setShowSignUp(false);
    setShowStockMain(false);
    setShowCenter(true); // Center 다시 보이게
  };

  const handleStockClick = () => {
    setShowCenter(false);
    setShowLogin(false);
    setShowSearch(false);
    setShowSignUp(false);
    setShowStockMain(true);
  }
  
  return (
    <div className="main-screen">
      <Main />
      <Center onClickStock={handleStockClick} isVisible={showCenter}/>
      {showStockMain && <StockMain />}
      {showSignUp && <SignUp />}
      {showLogin && <Login onClickSignUp={handleSignUpClick}/>}
      <TopBar onClickHome={handleHomeClick}/>
      <Search isVisible={showSearch} />
      <LeftBar onClickAccount={handleAccountClick} onClickMenu={handleMenuClick}/>
    </div>
  );
}

export default App;