export interface Espacio {
    id: number;
    nombre: string;
    descripcion?: string;
    ubicacion?: string;
    especialidad: {
      id: number;
      nombre: string; // si tu modelo lo tiene
    };
    capacidad?: number;
    estado: "activo" | "inactivo";
    creadoPor?: { id: number; nombre?: string };
    creadoEn?: string;
    actualizadoEn?: string;
  }
  
  export interface EspacioCreate {
    nombre: string;
    descripcion?: string;
    ubicacion?: string;
    especialidad: {
      id: number;
    };
    capacidad?: number;
    estado: "activo" | "inactivo";
  }
  
  export interface EspacioUpdate {
    nombre: string;
    descripcion?: string;
    ubicacion?: string;
    especialidad: {
      id: number;
    };
    capacidad?: number;
    estado: "activo" | "inactivo";
  }
  