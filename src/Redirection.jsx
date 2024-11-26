import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Redirection() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 code 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log("Received code:", code);
      
      // 백엔드에 GET 요청을 보내서 토큰을 가져옴
      axios.get('http://localhost:8080/api/auth/oauth/kakao/callback', {
        params: { code }  // 쿼리 파라미터로 code 전달
      })
        .then((response) => {
          // 응답에서 accessToken과 refreshToken을 로컬스토리지에 저장
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);

          // /main으로 이동
          navigate('/main');
        })
        .catch((error) => {
          console.error('토큰 요청 에러:', error);
        });
    }
  }, [navigate]);

  return <div>카카오 로그인 중입니다...</div>;
}

export default Redirection;