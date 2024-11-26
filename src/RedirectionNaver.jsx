import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RedirectionNaver() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code) {
      console.log("Received Naver code:", code, "and state:", state);

      axios.get('http://localhost:8080/api/auth/oauth/naver/callback', {
        params: { code, state }
      })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        navigate('/main');
      })
      .catch((error) => {
        console.error('Naver token request error:', error);
      });
    }
  }, [navigate]);

  return <div>네이버 로그인 중입니다...</div>;
}

export default RedirectionNaver;
