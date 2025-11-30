import axios from 'axios';
import api from '../axiosConfig'; 
import type { RegisterData, UserRegisteredResponse } from '../types/user';
import { API_BASE_URL } from '../utils/BaseUrl';


class UserService {
  


  /**
   * Registra un nuevo usuario llamando al endpoint /api/usuarios/register.
   */
  async register(data: RegisterData): Promise<UserRegisteredResponse> {
    try {
        const response = await api.post<UserRegisteredResponse>('/usuarios/register', data);

        return response.data; 

    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error('Error durante el registro (Respuesta API):', error.response.data);
            
            // Extraer el mensaje de error de tu excepción de Spring Boot (ResponseStatusException)
            const backendError = error.response.data?.message || 'Error al registrar el usuario. El correo puede estar ya en uso.';
            throw new Error(backendError);
        }
        
        console.error('ERROR CRÍTICO DE CONEXIÓN o INESPERADO durante el registro:', error);
        throw new Error('Error de conexión al intentar registrarse.');
    }
  }

  logout(): void {
    localStorage.removeItem('userToken');
  }

  getToken(): string | null {
    return localStorage.getItem('userToken');
  }
}

export default new UserService();