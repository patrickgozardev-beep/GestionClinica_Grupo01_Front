import api from "../axiosConfig";
import type { EspacioCreate, EspacioUpdate } from "../types/espacios";

const ENDPOINT = "/espacios";

const EspaciosService = {
    getAll: () => api.get(ENDPOINT),
  
    getById: (id: number) => api.get(`${ENDPOINT}/${id}`),
  
    create: (data: EspacioCreate) => api.post(ENDPOINT, data),
  
    update: (id: number, data: EspacioUpdate) => api.put(`${ENDPOINT}/${id}`, data),
  
    delete: (id: number) => api.delete(`${ENDPOINT}/${id}`),
  };
export default EspaciosService;
