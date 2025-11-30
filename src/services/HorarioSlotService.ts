import api from "../axiosConfig";
import type { HorarioSlotDto } from "../types/horarioSlot";

const BASE_URL = "/horarios-slots";

const HorarioSlotService = {
  // Obtener todos los slots
  async findAll(): Promise<HorarioSlotDto[]> {
    const res = await api.get(BASE_URL);
    return res.data;
  },

  // Buscar por ID
  async findById(id: number): Promise<HorarioSlotDto> {
    const res = await api.get(`${BASE_URL}/${id}`);
    return res.data;
  },

  // Crear slot
  async create(data: Omit<HorarioSlotDto, "id" | "current_count" | "created_at" | "updated_at">): Promise<HorarioSlotDto> {
    const res = await api.post(BASE_URL, data);
    return res.data;
  },

  // Actualizar slot
  async update(id: number, data: Partial<HorarioSlotDto>): Promise<HorarioSlotDto> {
    const res = await api.put(`${BASE_URL}/${id}`, data);
    return res.data;
  },

  // Eliminar slot
  async delete(id: number): Promise<void> {
    await api.delete(`${BASE_URL}/${id}`);
  },

    async findByDate(fecha: string): Promise<HorarioSlotDto[]> {
    const res = await api.get(`${BASE_URL}/fecha`, {
        params: { fecha }
    });
    return res.data;
    },

    async findByRange(inicio: string, fin: string): Promise<HorarioSlotDto[]> {
        const res = await api.get(`${BASE_URL}/rango`, {
          params: { fechaInicio: inicio, fechaFin: fin }
        });
        return res.data;
      }
      
  
};

export default HorarioSlotService;
