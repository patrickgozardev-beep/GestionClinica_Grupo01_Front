import React, { useEffect, useState } from "react";
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

import type { PlantillaHorarioDto } from "../../../types/plantillaHorario";
import PlantillaHorarioService from "../../../services/PlantillaHorarioService";
import { toPlantillaHorarioDto } from "../../../utils/plantillaMapper";
import EspaciosService from "../../../services/EspaciosService";

interface Espacio {
  id: number;
  nombre: string;
}


export const PlantillasHorarios: React.FC = () => {
  const [templates, setTemplates] = useState<PlantillaHorarioDto[]>([]);
  const [espacios, setEspacios] = useState<Espacio[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<PlantillaHorarioDto | null>(null);

  const [form, setForm] = useState<PlantillaHorarioDto>({
    espacioId: 1,
    nombre: "",
    tipo: "recurrente",
    diasSemana: "",
    horaInicio: "09:00",
    horaFin: "18:00",
    fechaInicio: "2025-03-01",
    fechaFin: "2025-03-30",
    intervaloMinutos: 60,
    activo: true
  });

  const diasSemanaList = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO"];


  const loadTemplates = async () => {
    try {
      const resp = await PlantillaHorarioService.getAll();
      setTemplates(resp.data);
    } catch (error) {
      console.error("Error cargando plantillas", error);
    }
  };

  const loadEspacios = async () => {
    try {
      const resp = await EspaciosService.getAll();
      setEspacios(resp.data); // Asumiendo que tu backend devuelve la lista directamente
    } catch (error) {
      console.error("Error cargando espacios", error);
      alert("No se pudieron cargar los espacios");
    }
  };

  useEffect(() => {
    loadTemplates()
    loadEspacios();
  }, []);

  const toggleDia = (dia: string) => {
    const dias = Array.isArray(form.diasSemana)
      ? form.diasSemana
      : form.diasSemana.split(",").map(d => d.trim()).filter(Boolean);
  
    const updated = dias.includes(dia)
      ? dias.filter(d => d !== dia)
      : [...dias, dia];
  
    setForm({ ...form, diasSemana: updated });
  };
  

  const openNew = () => {
    setEditingTemplate(null);
  
    const hoy = new Date();
    const enUnMes = new Date();
    enUnMes.setMonth(hoy.getMonth() + 1);
  
    const format = (d: Date) => d.toISOString().split("T")[0]; // yyyy-mm-dd
  
    setForm({
      espacioId: 1,
      nombre: "",
      tipo: "recurrente",
      diasSemana: "", 
      horaInicio: "09:00",
      horaFin: "18:00",
      fechaInicio: format(hoy),   
      fechaFin: format(enUnMes),  
      intervaloMinutos: 60,
      activo: true,
    });
  
    setModalOpen(true);
  };
  

  const editTemplate = (tpl: PlantillaHorarioDto) => {
    setEditingTemplate(tpl);
    setForm(toPlantillaHorarioDto(tpl));
    setModalOpen(true);
  };

  const save = async () => {
    const dto = toPlantillaHorarioDto(form);

    try {
      if (editingTemplate) {
        await PlantillaHorarioService.update(editingTemplate.id!, dto);

        setTemplates(prev =>
          prev.map(t => (t.id === editingTemplate.id ? form : t))
        );
      } else {
        const resp = await PlantillaHorarioService.create(dto);

        setTemplates(prev => [
          ...prev,
          { ...form, id: resp.data.id }
        ]);
      }

      alert("Plantilla guardada correctamente.");
      setModalOpen(false);

    } catch (err) {
      console.error("❌ Error guardando plantilla:", err);
      alert("Error al guardar la plantilla");
    }
  };

  const deleteTemplate = async (id: number) => {
    try {
      await PlantillaHorarioService.delete(id);

      setTemplates(prev => prev.filter(t => t.id !== id));

    } catch (err) {
      alert("No se pudo eliminar");
    }
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
            <p><Clock size={16} /> {tpl.horaInicio} - {tpl.horaFin}</p>
            <p>Días: {tpl.diasSemana}</p>
            <p>Espacio: {espacios.find(e => e.id === tpl.espacioId)?.nombre}</p>

            <div className="actions">
              <Button onClick={() => editTemplate(tpl)}><Edit size={16} /></Button>
              <Button variant="destructive" onClick={() => deleteTemplate(tpl.id!)}><Trash size={16} /></Button>
            </div>
          </TemplateCard>
        ))}
      </TemplatesGrid>

      {/* MODAL */}
      <ModalBackground open={modalOpen}>
        <ModalContent>
          <h3>{editingTemplate ? "Editar Plantilla" : "Nueva Plantilla"}</h3>

          {/* Espacio */}
          <label>Espacio</label>
          <Select
            value={form.espacioId}
            onChange={e => setForm({ ...form, espacioId: Number(e.target.value) })}
          >
          {espacios.map(e => (
            <option key={e.id} value={e.id}>{e.nombre}</option>
          ))}
          </Select>

          {/* Nombre */}
          <label>Nombre</label>
          <Input
            value={form.nombre}
            onChange={e => setForm({ ...form, nombre: e.target.value })}
          />

          {/* Tipo */}
          <label>Tipo de plantilla</label>
          <Select
            value={form.tipo}
            onChange={e => setForm({ ...form, tipo: e.target.value as "recurrente" | "puntual" })}
          >
            <option value="recurrente">Recurrente</option>
            <option value="puntual">Puntual</option>
          </Select>

          {/* Días semana (solo si es recurrente) */}
          {form.tipo === "recurrente" && (
            <>
              <label>Días de la semana</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {diasSemanaList.map(d => {
                  const diasSeleccionados = Array.isArray(form.diasSemana)
                    ? form.diasSemana
                    : (form.diasSemana || "").split(",");

                  return (
                    <label key={d}>
                      <input
                        type="checkbox"
                        checked={diasSeleccionados.includes(d)}
                        onChange={() => toggleDia(d)}
                      />
                      {d}
                    </label>
                  );
                })}
              </div>
            </>
          )}

          {/* Fecha inicio y fin */}
          <label>Fecha de inicio</label>
          <Input
            type="date"
            value={form.fechaInicio}
            onChange={e => setForm({ ...form, fechaInicio: e.target.value })}
          />

          <label>Fecha de fin</label>
          <Input
            type="date"
            value={form.fechaFin}
            onChange={e => setForm({ ...form, fechaFin: e.target.value })}
          />

          {/* Horas */}
          <label>Hora inicio</label>
          <Input
            type="time"
            value={form.horaInicio}
            onChange={e => setForm({ ...form, horaInicio: e.target.value })}
          />

          <label>Hora fin</label>
          <Input
            type="time"
            value={form.horaFin}
            onChange={e => setForm({ ...form, horaFin: e.target.value })}
          />

          {/* Intervalo */}
          <label>Intervalo de minutos</label>
          <Input
            type="number"
            min={1}
            value={form.intervaloMinutos}
            onChange={e => setForm({ ...form, intervaloMinutos: Number(e.target.value) })}
          />

          {/* Activo */}
          <label style={{ marginTop: "0.5rem" }}>
            <input
              type="checkbox"
              checked={form.activo}
              onChange={e => setForm({ ...form, activo: e.target.checked })}
            />
            Activo
          </label>

          {/* Botones */}
          <div style={{
            marginTop: "1rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end"
          }}>
            <Button onClick={save}>Guardar</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>Cancelar</Button>
          </div>

        </ModalContent>
      </ModalBackground>

    </Container>
  );
};
