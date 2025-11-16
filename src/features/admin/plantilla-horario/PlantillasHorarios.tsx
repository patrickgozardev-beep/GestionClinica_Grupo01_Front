import React, { useState } from "react";
import {
  Container,
  Header,
  TemplatesGrid,
  TemplateCard,
  Button,
  ModalBackground,
  ModalContent,
  Input,
  Select
} from "./PlantillasHorarios.styles";
import { Plus, Edit, Trash, CalendarDays, Clock } from "lucide-react";

interface Plantilla {
  id: number;
  espacio_id: number;
  dias: string[]; // ["Lunes", "Martes", ...]
  hora_inicio: string;
  hora_fin: string;
}

interface Espacio {
  id: number;
  nombre: string;
}

// Mock de espacios (luego lo traes de tu JSON o BD)
const espaciosMock: Espacio[] = [
  { id: 1, nombre: "Consultorio 1" },
  { id: 2, nombre: "Consultorio 2" },
];

// Generar plantillas predeterminadas: lunes a viernes, de 7:00 a 19:00, intervalos de 1 hora
const horas = [
  { inicio: "07:00", fin: "08:00" },
  { inicio: "08:00", fin: "09:00" },
  { inicio: "09:00", fin: "10:00" },
  { inicio: "10:00", fin: "11:00" },
  { inicio: "11:00", fin: "12:00" },
  { inicio: "12:00", fin: "13:00" },
  { inicio: "13:00", fin: "14:00" },
  { inicio: "14:00", fin: "15:00" },
  { inicio: "15:00", fin: "16:00" },
  { inicio: "16:00", fin: "17:00" },
  { inicio: "17:00", fin: "18:00" },
  { inicio: "18:00", fin: "19:00" },
];

const diasSemanaLaboral = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const defaultTemplates: Plantilla[] = [];
let idCounter = 1;
for (const h of horas) {
  defaultTemplates.push({
    id: idCounter++,
    espacio_id: 1,
    dias: diasSemanaLaboral,
    hora_inicio: h.inicio,
    hora_fin: h.fin,
  });
}

export const PlantillasHorarios: React.FC = () => {
  const [templates, setTemplates] = useState<Plantilla[]>(defaultTemplates);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<Plantilla | null>(null);

  const [form, setForm] = useState<Omit<Plantilla, "id">>({
    espacio_id: 1,
    dias: ["Lunes"],
    hora_inicio: "09:00",
    hora_fin: "18:00",
  });

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  const openNew = () => {
    setEditingTemplate(null);
    setForm({ espacio_id: 1, dias: ["Lunes"], hora_inicio: "09:00", hora_fin: "18:00" });
    setModalOpen(true);
  };

  const editTemplate = (tpl: Plantilla) => {
    setEditingTemplate(tpl);
    setForm(tpl);
    setModalOpen(true);
  };

  const save = () => {
    if (!form.hora_inicio || !form.hora_fin) return;

    if (editingTemplate) {
      setTemplates(prev =>
        prev.map(t => (t.id === editingTemplate.id ? { ...t, ...form } : t))
      );
    } else {
      setTemplates(prev => [
        ...prev,
        { id: prev.length + 1, ...form }
      ]);
    }
    setModalOpen(false);
  };

  const deleteTemplate = (id: number) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
  };

  const generateHorarios = (tpl: Plantilla) => {
    console.log("Generando horarios para plantilla:", tpl);
    // Aquí harías la lógica para crear Slots en la tabla Horario
  };

  return (
    <Container>
      <Header>
        <h2><CalendarDays /> Plantillas de Horario</h2>
        <Button onClick={openNew}><Plus size={16} /> Nueva Plantilla</Button>
      </Header>

      <TemplatesGrid>
        {templates.map(tpl => (
          <TemplateCard key={tpl.id}>
            <p><Clock size={16} /> {tpl.hora_inicio} - {tpl.hora_fin}</p>
            <p>Días: {tpl.dias.join(", ")}</p>
            <p>Espacio: {espaciosMock.find(e => e.id === tpl.espacio_id)?.nombre}</p>
            <div className="actions">
              <Button onClick={() => editTemplate(tpl)}><Edit size={16} /></Button>
              <Button variant="destructive" onClick={() => deleteTemplate(tpl.id)}><Trash size={16} /></Button>
              <Button variant="secondary" onClick={() => generateHorarios(tpl)}>Generar Horarios</Button>
            </div>
          </TemplateCard>
        ))}
      </TemplatesGrid>

      <ModalBackground open={modalOpen}>
        <ModalContent>
          <h3>{editingTemplate ? "Editar Plantilla" : "Nueva Plantilla"}</h3>

          <Select
            value={form.espacio_id}
            onChange={e => setForm({...form, espacio_id: Number(e.target.value)})}
          >
            {espaciosMock.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
          </Select>

          <div style={{ margin: "0.5rem 0" }}>
            <label>Días de la semana:</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {diasSemana.map(d => (
                <label key={d}>
                  <input
                    type="checkbox"
                    value={d}
                    checked={form.dias.includes(d)}
                    onChange={e => {
                      const checked = e.target.checked;
                      setForm(prev => ({
                        ...prev,
                        dias: checked
                          ? [...prev.dias, d]
                          : prev.dias.filter(day => day !== d)
                      }));
                    }}
                  /> {d}
                </label>
              ))}
            </div>
          </div>

          <Input
            type="time"
            value={form.hora_inicio}
            onChange={e => setForm({...form, hora_inicio: e.target.value})}
          />
          <Input
            type="time"
            value={form.hora_fin}
            onChange={e => setForm({...form, hora_fin: e.target.value})}
          />

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
            <Button onClick={save}>Guardar</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>Cancelar</Button>
          </div>
        </ModalContent>
      </ModalBackground>
    </Container>
  );
};
