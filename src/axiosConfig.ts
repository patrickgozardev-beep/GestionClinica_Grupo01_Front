import axios from 'axios';
import { API_BASE_URL } from './utils/BaseUrl';


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