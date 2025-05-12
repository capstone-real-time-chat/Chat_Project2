import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // FastAPI 서버 주소
  withCredentials: true, // 필요한 경우 (세션/쿠키)
});

export default api;
