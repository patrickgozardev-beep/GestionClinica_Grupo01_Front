import api from "../axiosConfig";

const ENDPOINT = "/especialidades";

const EspecialidadesService = {
  getAll: () => api.get(ENDPOINT),

  getById: (id: number) => api.get(`${ENDPOINT}/${id}`),

  create: (data: any) => api.post(ENDPOINT, data),

  update: (id: number, data: any) => api.put(`${ENDPOINT}/${id}`, data),

  delete: (id: number) => api.delete(`${ENDPOINT}/${id}`),
};

export default EspecialidadesService;
