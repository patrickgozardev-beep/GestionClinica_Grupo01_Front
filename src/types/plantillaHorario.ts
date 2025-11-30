export interface PlantillaHorarioDto {
    id?: number;
    espacioId: number;
    nombre: string;
    tipo: "recurrente" | "puntual";
    diasSemana: string | string[]; 
    horaInicio: string;
    horaFin: string;
    fechaInicio: string;
    fechaFin: string;
    intervaloMinutos: number;
    activo: boolean;
  }
  