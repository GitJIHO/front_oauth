import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 토큰 확인
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // 로그아웃 처리 함수
  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    
    // 로그인 상태를 false로 설정
    setIsLoggedIn(false);

    // 루트 페이지로 리디렉션
    navigate('/');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>환영합니다! 메인 페이지입니다.</h1>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <h1>로그인이 필요합니다. 로컬스토리지에 토큰이 없습니다.</h1>
      )}
    </div>
  );
}

export default MainPage;
