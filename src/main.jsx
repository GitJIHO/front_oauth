import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// StrictMode를 제거하여 두 번 렌더링 문제 해결
createRoot(document.getElementById('root')).render(
  <App />
);
