import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Redirection from './Redirection';
import RedirectionNaver from './RedirectionNaver';  // 네이버 리다이렉션 컴포넌트
import RedirectionGoogle from './RedirectionGoogle'; // 구글 리다이렉션 컴포넌트
import Main from './MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirection" element={<Redirection />} />
        <Route path="/redirection-naver" element={<RedirectionNaver />} />   {/* 네이버 리다이렉션 */}
        <Route path="/redirection-google" element={<RedirectionGoogle />} /> {/* 구글 리다이렉션 */}
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
