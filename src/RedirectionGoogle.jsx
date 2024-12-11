import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RedirectionGoogle() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log("Received Google code:", code);

      axios.get('http://ott.knu-soft.site/api/auth/oauth/google/callback', {
        params: { code }
      })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        navigate('/main');
      })
      .catch((error) => {
        console.error('Google token request error:', error);
      });
    }
  }, [navigate]);

  return <div>구글 로그인 중입니다...</div>;
}

export default RedirectionGoogle;
