
export interface LoginResponse {
    token: string;
    role: 'paciente' | 'doctor' | 'admin' | string;
  }
  

  export interface LoginCredentials {
    email: string;
    password: string;
  }