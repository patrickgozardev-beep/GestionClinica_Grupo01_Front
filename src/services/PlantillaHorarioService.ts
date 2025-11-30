import api from "../axiosConfig";
import type { PlantillaHorarioDto } from "../types/plantillaHorario";

const ENDPOINT = "/plantillas-horario";

const PlantillaHorarioService = {
  getAll: () => api.get<PlantillaHorarioDto[]>(ENDPOINT),

  getById: (id: number) => api.get<PlantillaHorarioDto>(`${ENDPOINT}/${id}`),

  create: (data: PlantillaHorarioDto) =>
    api.post<PlantillaHorarioDto>(ENDPOINT, data),

  update: (id: number, data: PlantillaHorarioDto) =>
    api.put<PlantillaHorarioDto>(`${ENDPOINT}/${id}`, data),

  delete: (id: number) => api.delete(`${ENDPOINT}/${id}`),
};

export default PlantillaHorarioService;
