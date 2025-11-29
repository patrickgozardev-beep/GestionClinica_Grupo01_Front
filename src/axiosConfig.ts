import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adjuntar el token JWT automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken'); 

    if (token) {
      // Asegurar que el encabezado de autorización existe
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;