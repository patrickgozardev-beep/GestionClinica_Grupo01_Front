import React, { useState, useEffect } from "react";
import spacesData from "../../../data/spaces.json"; // <-- Importar JSON
import {
  SpacesContainer,
  Header,
  SpacesGrid,
  SpaceCard,
  Button,
  ModalBackground,
  ModalContent,
  Input,
  Select
} from "./AdminEspacios.styles";
import { Plus, Edit, Trash, Layers, MapPin } from "lucide-react";

interface Espacio {
  id: number;
  nombre: string;
  ubicacion: string;
  capacidad: number;
  especialidad_id: number;
  estado: boolean;
}

interface Especialidad {
  id: number;
  nombre: string;
}

const especialidades: Especialidad[] = [
  { id: 1, nombre: "Odontología" },
  { id: 2, nombre: "Cardiología" },
  { id: 3, nombre: "Dermatología" },
];

export const AdminEspacios: React.FC = () => {
  // Inicializamos con el JSON
  const [spaces, setSpaces] = useState<Espacio[]>([]);

  useEffect(() => {
    setSpaces(spacesData);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingSpace, setEditingSpace] = useState<Espacio | null>(null);
  const [form, setForm] = useState<Omit<Espacio, "id">>({
    nombre: "",
    ubicacion: "",
    capacidad: 0,
    especialidad_id: 1,
    estado: true
  });

  const openNew = () => {
    setEditingSpace(null);
    setForm({ nombre: "", ubicacion: "", capacidad: 0, especialidad_id: 1, estado: true });
    setModalOpen(true);
  };

  const editSpace = (space: Espacio) => {
    setEditingSpace(space);
    setForm(space);
    setModalOpen(true);
  };

  const save = () => {
    if (!form.nombre || !form.capacidad) return;

    if (editingSpace) {
      setSpaces(prev =>
        prev.map(s => (s.id === editingSpace.id ? { ...s, ...form } : s))
      );
    } else {
      setSpaces(prev => [
        ...prev,
        { id: prev.length + 1, ...form }
      ]);
    }
    setModalOpen(false);
  };

  const deleteSpace = (id: number) => {
    setSpaces(prev => prev.filter(s => s.id !== id));
  };

  return (
    <SpacesContainer>
      <Header>
        <h2><Layers /> Gestión de Espacios</h2>
        <Button onClick={openNew}><Plus size={16} /> Nuevo Espacio</Button>
      </Header>

      <SpacesGrid>
        {spaces.map(space => (
          <SpaceCard key={space.id}>
            <h3>{space.nombre}</h3>
            <p><MapPin size={16} /> {space.ubicacion}</p>
            <p>Especialidad: {especialidades.find(e => e.id === space.especialidad_id)?.nombre}</p>
            <p>Capacidad: {space.capacidad}</p>
            <p style={{ color: space.estado ? "#16a34a" : "#ef4444", fontWeight: "bold" }}>
              {space.estado ? "Activo" : "Inactivo"}
            </p>
            <div className="actions">
              <Button onClick={() => editSpace(space)}><Edit size={16} /></Button>
              <Button variant="destructive" onClick={() => deleteSpace(space.id)}><Trash size={16} /></Button>
            </div>
          </SpaceCard>
        ))}
      </SpacesGrid>

      <ModalBackground open={modalOpen}>
        <ModalContent>
          <h3>{editingSpace ? "Editar Espacio" : "Nuevo Espacio"}</h3>
          <Input
            placeholder="Nombre"
            value={form.nombre}
            onChange={e => setForm({...form, nombre: e.target.value})}
          />
          <Input
            placeholder="Ubicación"
            value={form.ubicacion}
            onChange={e => setForm({...form, ubicacion: e.target.value})}
          />
          <Input
            type="number"
            placeholder="Capacidad"
            value={form.capacidad}
            onChange={e => setForm({...form, capacidad: Number(e.target.value)})}
          />
          <Select
            value={form.especialidad_id}
            onChange={e => setForm({...form, especialidad_id: Number(e.target.value)})}
          >
            {especialidades.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
          </Select>
          <Select
            value={form.estado ? 1 : 0}
            onChange={e => setForm({...form, estado: e.target.value === "1"})}
          >
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </Select>

          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
            <Button onClick={save}>Guardar</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>Cancelar</Button>
          </div>
        </ModalContent>
      </ModalBackground>
    </SpacesContainer>
  );
};
