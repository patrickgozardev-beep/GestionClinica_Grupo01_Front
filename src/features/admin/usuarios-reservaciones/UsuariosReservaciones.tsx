import React from "react";
import { Users, CalendarCheck, Trash2 } from "lucide-react";
import {
  Container,
  Header,
  Table,
  ActionButton
} from "./UsuariosReservaciones.styles";

// Datos de ejemplo; luego reemplazar con consulta API/BD
const usuariosConReservas = [
  {
    id: 1,
    nombre: "Juan Perez",
    email: "juan@example.com",
    rol: "Paciente",
    reservas: 3,
    proximo_turno: "2025-11-18 09:00",
  },
  {
    id: 2,
    nombre: "Maria Lopez",
    email: "maria@example.com",
    rol: "Paciente",
    reservas: 1,
    proximo_turno: "2025-11-17 14:00",
  },
  {
    id: 3,
    nombre: "Carlos Diaz",
    email: "carlos@example.com",
    rol: "Doctor",
    reservas: 0,
    proximo_turno: "-",
  },
];

const UsuariosReservaciones: React.FC = () => {
  return (
    <Container>
      <Header>
        <Users size={24} />
        <h2>Usuarios y Reservas</h2>
      </Header>

      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Reservas</th>
            <th>Próximo Turno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosConReservas.map((u) => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.rol}</td>
              <td>
                <CalendarCheck size={16} /> {u.reservas}
              </td>
              <td>{u.proximo_turno}</td>
              <td>
                <ActionButton title="Eliminar usuario">
                  <Trash2 size={16} />
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsuariosReservaciones;
