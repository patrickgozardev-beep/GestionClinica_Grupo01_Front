import axios from 'axios';
import api from '../axiosConfig';
import type { LoginCredentials, LoginResponse } from '../types/auth'; // Importamos el nuevo tipo

const API_URL = '/auth';

class AuthService {
  
  /**
   * Intenta iniciar sesión y almacena el token si es exitoso.
   * @returns {Promise<LoginResponse>} El objeto de respuesta que contiene el token y el rol.
   */
  async login({ email, password }: LoginCredentials): Promise<LoginResponse> {
    try {

      // Cambiamos el tipo genérico de la respuesta a LoginResponse
      const response = await api.post<LoginResponse>(API_URL + '/login', {
        email,
        password,
      });

      const authData: LoginResponse = response.data; 
        
      if (authData.token) {
        localStorage.setItem('userToken', authData.token);
      }
      
      return authData; // Devolvemos el objeto completo (incluyendo el rol)
      
    } catch (error) {
      // Manejar errores de forma segura con tipificación de AxiosError
      if (axios.isAxiosError(error) && error.response) {
        // En un entorno de desarrollo, es útil ver la data de la respuesta de error
        console.error('Error durante el login:', error.response.data);
        
        // Lanzamos un error más amigable para la UI
        const errorMessage = error.response.data?.message || 'Credenciales inválidas. Por favor, verifica tu correo y contraseña.';
        throw new Error(errorMessage);
      }
      throw new Error('Error de conexión o inesperado al intentar iniciar sesión.');
    }
  }

  logout(): void {
    localStorage.removeItem('userToken');
  }

  getToken(): string | null {
    return localStorage.getItem('userToken');
  }
}

export default new AuthService();