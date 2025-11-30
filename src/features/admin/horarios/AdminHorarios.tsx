import React, { useEffect, useState } from "react";
import {
  SchedulesContainer,
  Header,
  SchedulesGrid,
  ScheduleCard,
  Button,
  ModalBackground,
  ModalContent,
  Input,
  Select,
  FiltersBar
} from "./AdminHorarios.styles";
import { Plus, Edit, Trash, Clock, Layers, Search } from "lucide-react";
import HorarioSlotService from "../../../services/HorarioSlotService";
import type { HorarioSlotDto } from "../../../types/horarioSlot";
import EspaciosService from "../../../services/EspaciosService";

interface Espacio {
  id: number;
  nombre: string;
}


export const AdminHorarios: React.FC = () => {
  const [schedules, setSchedules] = useState<HorarioSlotDto[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<HorarioSlotDto | null>(null);
  const [espacios, setEspacios] = useState<Espacio[]>([]);

  // Filtros
  const today = new Date().toISOString().split("T")[0];

  const [filterStart, setFilterStart] = useState(today);
  const [filterEnd, setFilterEnd] = useState(today);
  
  // Formulario
  const [form, setForm] = useState<
    Omit<HorarioSlotDto, "id" | "contadorActual" | "plantillaId">
  >({
    espacioId: 1,
    fecha: "",
    horaInicio: "",
    horaFin: "",
    capacidad: 0,
    estado: "disponible"
  });

  // =====================
  // Cargar horarios
  // =====================
  const loadSchedules = async () => {
    try {
      const data = await HorarioSlotService.findAll();
      setSchedules(data);
    } catch (error) {
      console.error("Error cargando horarios:", error);
    }
  };
  const loadEspacios = async () => {
    try {
      const res = await EspaciosService.getAll();
      setEspacios(res.data);
    } catch (error) {
      console.error("Error cargando espacios:", error);
    }
  };


  // =====================
  // FILTROS
  // =====================
  const applyFilters = async () => {
    try {
      if (filterStart && filterEnd) {
        const list = await HorarioSlotService.findByRange(filterStart, filterEnd);
        setSchedules(list);
        return;
      }
  
      loadSchedules();
    } catch (error) {
      console.error("Error filtrando horarios:", error);
    }
  };
  
  
  useEffect(() => {
    applyFilters();
    loadEspacios();
  }, []);
  
  // =====================
  // MODAL
  // =====================
  const openNew = () => {
    setEditingSchedule(null);
    setForm({
      espacioId: 1,
      fecha: "",
      horaInicio: "",
      horaFin: "",
      capacidad: 0,
      estado: "disponible"
    });
    setModalOpen(true);
  };

  const editSchedule = (schedule: HorarioSlotDto) => {
    setEditingSchedule(schedule);
    setForm({
      espacioId: schedule.espacioId,
      fecha: schedule.fecha,
      horaInicio: schedule.horaInicio,
      horaFin: schedule.horaFin,
      capacidad: schedule.capacidad,
      estado: schedule.estado
    });
    setModalOpen(true);
  };

  // =====================
  // GUARDAR (Create / Update)
  // =====================
  const save = async () => {
    try {
      if (editingSchedule) {
        await HorarioSlotService.update(editingSchedule.id!, form);
      } else {
        await HorarioSlotService.create(form);
      }

      loadSchedules();
      setModalOpen(false);
    } catch (error) {
      console.error("Error guardando:", error);
    }
  };

  // =====================
  // DELETE
  // =====================
  const deleteSchedule = async (id: number) => {
    try {
      await HorarioSlotService.delete(id);
      loadSchedules();
    } catch (error) {
      console.error("Error borrando horario:", error);
    }
  };

  return (
    <SchedulesContainer>
      <Header>
        <h2><Clock /> Gestión de Horarios</h2>
        <Button onClick={openNew}><Plus size={16} /> Nuevo Horario</Button>
      </Header>

      {/* ===================== */}
      {/* FILTROS */}
      {/* ===================== */}
      <FiltersBar>
        <Input
          type="date"
          value={filterStart}
          onChange={(e) => setFilterStart(e.target.value)}
        />

        <Input
          type="date"
          value={filterEnd}
          onChange={(e) => setFilterEnd(e.target.value)}
        />

        <Button onClick={applyFilters}>
          <Search size={16} /> Buscar
        </Button>

        <Button onClick={loadSchedules}>Reset</Button>
      </FiltersBar>


      {/* ===================== */}
      {/* LISTA */}
      {/* ===================== */}
      <SchedulesGrid>
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule.id}>
            <p>
              <Layers /> Espacio: {espacios.find(e => e.id === schedule.espacioId)?.nombre}
            </p>

            <p>Fecha: {schedule.fecha}</p>
            <p>Horario: {schedule.horaInicio} - {schedule.horaFin}</p>

            <p>
              Capacidad: {schedule.capacidad} | Ocupados: {schedule.contadorActual ?? 0}
            </p>

            <p style={{
              color:
                schedule.estado === "disponible"
                  ? "#16a34a"
                  : schedule.estado === "lleno"
                    ? "#f59e0b"
                    : "#ef4444",
              fontWeight: "bold"
            }}>
              {schedule.estado}
            </p>

            <div className="actions">
              <Button onClick={() => editSchedule(schedule)}>
                <Edit size={16} />
              </Button>

              <Button
                variant="destructive"
                onClick={() => deleteSchedule(schedule.id!)}
              >
                <Trash size={16} />
              </Button>
            </div>
          </ScheduleCard>
        ))}
      </SchedulesGrid>

      {/* ===================== */}
      {/* MODAL */}
      {/* ===================== */}
      <ModalBackground open={modalOpen}>
        <ModalContent>
          <h3>{editingSchedule ? "Editar Horario" : "Nuevo Horario"}</h3>

          <Select
            value={form.espacioId}
            onChange={(e) => setForm({ ...form, espacioId: Number(e.target.value) })}
          >
            {espacios.map(e => (
              <option key={e.id} value={e.id}>{e.nombre}</option>
            ))}
          </Select>

          <Input
            type="date"
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
          />

          <Input
            type="time"
            value={form.horaInicio}
            onChange={(e) => setForm({ ...form, horaInicio: e.target.value })}
          />

          <Input
            type="time"
            value={form.horaFin}
            onChange={(e) => setForm({ ...form, horaFin: e.target.value })}
          />

          <Input
            type="number"
            value={form.capacidad}
            onChange={(e) => setForm({ ...form, capacidad: Number(e.target.value) })}
            placeholder="Capacidad"
          />

          <Select
            value={form.estado}
            onChange={(e) => setForm({ ...form, estado: e.target.value as HorarioSlotDto["estado"] })}
          >
            <option value="disponible">Disponible</option>
            <option value="lleno">Lleno</option>
            <option value="cerrado">Cerrado</option>
          </Select>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
            <Button onClick={save}>Guardar</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>Cancelar</Button>
          </div>
        </ModalContent>
      </ModalBackground>
    </SchedulesContainer>
  );
};
