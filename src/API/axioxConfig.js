// axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test.hunardvi.com/api',
  // baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('auth_token'); // Assuming you store the token after login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;

