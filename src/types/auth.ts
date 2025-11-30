
export interface LoginResponse {
    token: string;
    role: 'paciente' | 'doctor' | 'administrador' | string;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }