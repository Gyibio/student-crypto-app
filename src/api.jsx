import axios from 'axios';

const API = axios.create({ 
  baseURL: 'https://student-crypto-backend.onrender.com/api' 
});

// This automatically attaches your JWT token to every request
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = token;
    }
    return req;
});

export default API;  