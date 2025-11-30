export interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }

  export interface UserRegisteredResponse {
    id: number;
    email: string;
    nombre: string;
    apellido: string;
    rol: any;
}