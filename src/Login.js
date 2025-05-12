import React, { useState } from 'react';
import './Login.css';
import api from './api';

function Login({ onClickSignUp }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { username, password });
        // 실제 로그인 처리 (예: API 호출)는 여기 추가
      };

    //   const handleKakaoLogin = async () => {
    //     try {
    //         const res = await api.get('auth/kakao/callback'); // 서버에서 카카오 인증 URL 받아오기
    //         window.location.href = res.data.url; // 카카오 로그인 페이지로 이동
    //     } catch (err) {
    //         console.error('카카오 로그인 요청 실패:', err);
    //         alert('카카오 로그인에 실패했습니다.');
    //     }
    // };

  const handleKakaoLogin = () => {
      // 브라우저를 FastAPI 서버의 /auth/kakao/callback 으로 이동
      window.location.href = "http://localhost:8000/api/auth/kakao/callback";
  };


      return (
        <div className="login-main">
        <div className="login-group">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>DAJUTALK</h2>
            <div className="form-group">
                <label htmlFor="username"></label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                    className="login-input-id"
                    required
                />
            </div>
            <div className="form-group"> 
                <label htmlFor="password"></label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    className="login-input-password"
                    required
                />
            </div>
            <button type="submit" className="login-button">로그인</button>
          </form>
          <div className="sign-up-start" onClick={onClickSignUp} style={{ cursor: "pointer" }}><span>회원가입</span></div>
          <button className="kakao-login" onClick={handleKakaoLogin}>카카오톡으로 로그인</button>
        </div>
        </div>
      );
}

export default Login;