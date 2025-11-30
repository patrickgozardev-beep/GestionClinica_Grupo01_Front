import type { PlantillaHorarioDto } from "../types/plantillaHorario";

export const toPlantillaHorarioDto = (form: PlantillaHorarioDto): PlantillaHorarioDto => {
    const dias = Array.isArray(form.diasSemana)
      ? form.diasSemana
      : form.diasSemana.split(",").map(d => d.trim()).filter(Boolean);
  
    return {
      ...form,
  
      diasSemana: dias.join(","),
  
      horaInicio: form.horaInicio.length === 5 ? form.horaInicio + ":00" : form.horaInicio,
      horaFin: form.horaFin.length === 5 ? form.horaFin + ":00" : form.horaFin,
  
      intervaloMinutos: Number(form.intervaloMinutos),
      activo: Boolean(form.activo)
    };
  };
  

