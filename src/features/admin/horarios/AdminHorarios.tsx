import React, { useState } from "react";
import {
  SchedulesContainer,
  Header,
  SchedulesGrid,
  ScheduleCard,
  Button,
  ModalBackground,
  ModalContent,
  Input,
  Select
} from "./AdminHorarios.styles";
import { Plus, Edit, Trash, Clock, Layers } from "lucide-react";
import scheduleSlots from "../../../data/schedule_slots.json"; // <-- Importar JSON

interface Horario {
  id: number;
  espacio_id: number;
  template_id: number | null;
  slot_date: string;
  start_time: string;
  end_time: string;
  capacity: number;
  current_count: number;
  estado: "disponible" | "lleno" | "cerrado";
  created_at?: string;
  updated_at?: string;
}

interface Espacio {
  id: number;
  nombre: string;
}

// Mock de espacios (puede venir de JSON o API)
const espaciosMock: Espacio[] = [
  { id: 1, nombre: "Gimnasio Principal" },
  { id: 2, nombre: "Sala Odontologia" },
  { id: 3, nombre: "Sala Pediatria" }
];



export const AdminHorarios: React.FC = () => {
  const [schedules, setSchedules] = useState<Horario[]>(scheduleSlots);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<Horario | null>(null);
  const [form, setForm] = useState<Omit<Horario, "id" | "current_count" | "template_id" | "created_at" | "updated_at">>({
    espacio_id: 1,
    slot_date: "",
    start_time: "",
    end_time: "",
    capacity: 0,
    estado: "disponible"
  });

  const openNew = () => {
    setEditingSchedule(null);
    setForm({ espacio_id: 1, slot_date: "", start_time: "", end_time: "", capacity: 0, estado: "disponible" });
    setModalOpen(true);
  };

  const editSchedule = (schedule: Horario) => {
    setEditingSchedule(schedule);
    setForm({
      espacio_id: schedule.espacio_id,
      slot_date: schedule.slot_date,
      start_time: schedule.start_time,
      end_time: schedule.end_time,
      capacity: schedule.capacity,
      estado: schedule.estado
    });
    setModalOpen(true);
  };

  const save = () => {
    if (!form.slot_date || !form.start_time || !form.end_time || !form.capacity) return;

    if (editingSchedule) {
      setSchedules(prev =>
        prev.map(s =>
          s.id === editingSchedule.id ? { ...s, ...form } : s
        )
      );
    } else {
      const newId = Math.max(...schedules.map(s => s.id)) + 1;
      setSchedules(prev => [
        ...prev,
        { id: newId, template_id: null, current_count: 0, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), ...form }
      ]);
    }
    setModalOpen(false);
  };

  const deleteSchedule = (id: number) => {
    setSchedules(prev => prev.filter(s => s.id !== id));
  };

  return (
    <SchedulesContainer>
      <Header>
        <h2><Clock /> Gestión de Horarios</h2>
        <Button onClick={openNew}><Plus size={16} /> Nuevo Horario</Button>
      </Header>

      <SchedulesGrid>
        {schedules.map(schedule => (
          <ScheduleCard key={schedule.id}>
            <p><Layers /> Espacio: {espaciosMock.find(e => e.id === schedule.espacio_id)?.nombre}</p>
            <p>Fecha: {schedule.slot_date}</p>
            <p>Horario: {schedule.start_time} - {schedule.end_time}</p>
            <p>Capacidad: {schedule.capacity} | Ocupados: {schedule.current_count}</p>
            <p style={{ color: schedule.estado === "disponible" ? "#16a34a" : schedule.estado === "lleno" ? "#f59e0b" : "#ef4444", fontWeight: "bold" }}>
              {schedule.estado.charAt(0).toUpperCase() + schedule.estado.slice(1)}
            </p>
            <div className="actions">
              <Button onClick={() => editSchedule(schedule)}><Edit size={16} /></Button>
              <Button variant="destructive" onClick={() => deleteSchedule(schedule.id)}><Trash size={16} /></Button>
            </div>
          </ScheduleCard>
        ))}
      </SchedulesGrid>

      <ModalBackground open={modalOpen}>
        <ModalContent>
          <h3>{editingSchedule ? "Editar Horario" : "Nuevo Horario"}</h3>

          <Select
            value={form.espacio_id}
            onChange={e => setForm({...form, espacio_id: Number(e.target.value)})}
          >
            {espaciosMock.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
          </Select>

          <Input
            type="date"
            value={form.slot_date}
            onChange={e => setForm({...form, slot_date: e.target.value})}
          />
          <Input
            type="time"
            value={form.start_time}
            onChange={e => setForm({...form, start_time: e.target.value})}
          />
          <Input
            type="time"
            value={form.end_time}
            onChange={e => setForm({...form, end_time: e.target.value})}
          />
          <Input
            type="number"
            placeholder="Capacidad"
            value={form.capacity}
            onChange={e => setForm({...form, capacity: Number(e.target.value)})}
          />
          <Select
            value={form.estado}
            onChange={e => setForm({...form, estado: e.target.value as Horario["estado"]})}
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
