import React from 'react';

function Home() {
  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/oauth/kakao';
  };

  const handleNaverLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/oauth/naver';
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/api/auth/oauth/google';
  };

  return (
    <div>
      <h1>홈페이지</h1>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
      <button onClick={handleNaverLogin}>네이버 로그인</button>
      <button onClick={handleGoogleLogin}>구글 로그인</button>
    </div>
  );
}

export default Home;
