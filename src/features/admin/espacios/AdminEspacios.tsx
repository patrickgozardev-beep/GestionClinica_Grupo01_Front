import React, { useEffect, useState } from "react";
import {
  SpacesContainer,
  Header,
  SpacesGrid,
  SpaceCard,
  Button,
  ModalBackground,
  ModalContent,
  Input,
  Select,
  ModalHeader,
  ModalFooter,
} from "./AdminEspacios.styles";
import { Layers, MapPin, Plus, Edit, Trash } from "lucide-react";
import EspaciosService from "../../../services/EspaciosService";
import EspecialidadesService from "../../../services/Especialidades";

interface Especialidad {
  id: number;
  nombre: string;
}

interface Espacio {
  id: number;
  nombre: string;
  ubicacion: string;
  capacidad: number;
  estado: "activo" | "inactivo";
  especialidad: {
    id: number;
    nombre?: string;
  };
}

interface FormData {
  nombre: string;
  ubicacion: string;
  capacidad: number;
  estado: "activo" | "inactivo";
  especialidadId: number;
}

export const AdminEspacios: React.FC = () => {
  const [spaces, setSpaces] = useState<Espacio[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Espacio | null>(null);
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);

  const [form, setForm] = useState<FormData>({
    nombre: "",
    ubicacion: "",
    capacidad: 0,
    estado: "activo",
    especialidadId: 1,
  });

  
  const fetchEspecialidades = async () => {
    try {
      const res = await EspecialidadesService.getAll();
      setEspecialidades(res.data);
    } catch (err) {
      console.error("Error al cargar especialidades:", err);
    }
  };
  
  // Cargar lista desde el backend
  const fetchSpaces = async () => {
    try {
      const res = await EspaciosService.getAll();
      setSpaces(res.data);
    } catch (err) {
      console.error("Error al cargar espacios:", err);
    }
  };

  useEffect(() => {
    fetchSpaces();
    fetchEspecialidades();

  }, []);

  // Abrir modal para nuevo espacio
  const openNew = () => {
    setEditing(null);
    setForm({
      nombre: "",
      ubicacion: "",
      capacidad: 0,
      estado: "activo",
      especialidadId: 1,
    });
    setModalOpen(true);
  };

  // Abrir modal para edición
  const openEdit = (space: Espacio) => {
    setEditing(space);
    setForm({
      nombre: space.nombre,
      ubicacion: space.ubicacion,
      capacidad: space.capacidad,
      estado: space.estado,
      especialidadId: space.especialidad.id,
    });
    setModalOpen(true);
  };

  const save = async () => {
    if (!form.nombre || form.capacidad <= 0) return;

    const payload = {
      nombre: form.nombre,
      ubicacion: form.ubicacion,
      capacidad: form.capacidad,
      estado: form.estado,
      especialidad: { id: form.especialidadId },
    };

    try {
      if (editing) {
        await EspaciosService.update(editing.id, payload);
      } else {
        await EspaciosService.create(payload);
      }

      setModalOpen(false);
      fetchSpaces();
    } catch (err) {
      console.error("Error al guardar espacio:", err);
    }
  };

  const deleteSpace = async (id: number) => {
    try {
      await EspaciosService.delete(id);
      fetchSpaces();
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  return (
    <SpacesContainer>
      <Header>
        <h2>
          <Layers /> Gestión de Espacios
        </h2>
        <Button onClick={openNew}>
          <Plus size={16} /> Nuevo Espacio
        </Button>
      </Header>

      <SpacesGrid>
        {spaces.map((space) => (
          <SpaceCard key={space.id}>
            <h3>{space.nombre}</h3>

            <p>
              <MapPin size={16} /> {space.ubicacion}
            </p>

            <p>
              Especialidad:{" "}
              {especialidades.find((e) => e.id === space.especialidad.id)?.nombre}
            </p>

            <p>Capacidad: {space.capacidad}</p>

            <p
              style={{
                color: space.estado === "activo" ? "#16a34a" : "#ef4444",
                fontWeight: "bold",
              }}
            >
              {space.estado === "activo" ? "Activo" : "Inactivo"}
            </p>

            <div className="actions">
              <Button onClick={() => openEdit(space)}>
                <Edit size={16} />
              </Button>

              <Button variant="destructive" onClick={() => deleteSpace(space.id)}>
                <Trash size={16} />
              </Button>
            </div>
          </SpaceCard>
        ))}
      </SpacesGrid>

      {/* MODAL */}
      <ModalBackground open={modalOpen}>
        <ModalContent>
          <ModalHeader>
            <h3>{editing ? "Editar Espacio" : "Nuevo Espacio"}</h3>
          </ModalHeader>

          <Input
            placeholder="Nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />

          <Input
            placeholder="Ubicación"
            value={form.ubicacion}
            onChange={(e) => setForm({ ...form, ubicacion: e.target.value })}
          />

          <Input
            type="number"
            placeholder="Capacidad"
            value={form.capacidad}
            onChange={(e) => setForm({ ...form, capacidad: Number(e.target.value) })}
          />

          <Select
            value={form.especialidadId}
            onChange={(e) =>
              setForm({ ...form, especialidadId: Number(e.target.value) })
            }
          >
            {especialidades.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </Select>

          <Select
            value={form.estado}
            onChange={(e) =>
              setForm({ ...form, estado: e.target.value as "activo" | "inactivo" })
            }
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </Select>

          <ModalFooter>
            <Button onClick={save}>Guardar</Button>
            <Button variant="destructive" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalBackground>
    </SpacesContainer>
  );
};
