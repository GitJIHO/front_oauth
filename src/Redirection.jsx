import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Redirection() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 code와 state 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');  // state 파라미터 추출

    if (code) {
      console.log("Received code:", code);
      
      // 쿼리 파라미터에 state가 있으면 포함시키고, 없으면 code만 보냄
      const params = { code };
      if (state) {
        params.state = state;  // state가 있으면 추가
      }

      // state가 있으면 네이버 로그인으로, 없으면 구글 로그인으로 요청을 보냄
      const url = state ? 'http://localhost:8080/api/auth/oauth/naver/callback' : 'http://localhost:8080/api/auth/oauth/google/callback';
      
      // 백엔드에 GET 요청을 보내서 토큰을 가져옴
      axios.get(url, { params })
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

  return <div>로그인 중입니다...</div>;
}

export default Redirection;
