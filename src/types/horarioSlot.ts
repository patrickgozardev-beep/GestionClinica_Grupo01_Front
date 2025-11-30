export interface HorarioSlotDto {
    id?: number;
    espacioId: number;
    plantillaId?: number | null;
    fecha: string;
    horaInicio: string;
    horaFin: string;
    capacidad: number;
    contadorActual?: number;
    estado: "disponible" | "lleno" | "cerrado";
  }
  