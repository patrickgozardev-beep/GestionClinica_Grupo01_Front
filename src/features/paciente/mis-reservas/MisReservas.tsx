import React from "react";
import {
  ReservasContainer,
  Title,
  Table,
  EstadoBadge,
  ActionButton,
} from "./MisReservas.styles";

const reservas = [
  {
    id: 500,
    fecha: "2025-11-18",
    hora_inicio: "09:00",
    hora_fin: "09:30",
    doctor: "Dr. Ricardo Pérez",
    espacio: "Consultorio 101",
    especialidad: "Odontología",
    estado: "pendiente",
  },
  {
    id: 501,
    fecha: "2025-11-20",
    hora_inicio: "10:00",
    hora_fin: "10:30",
    doctor: "Dra. Ana Torres",
    espacio: "Consultorio 202",
    especialidad: "Cardiología",
    estado: "confirmado",
  },
];

const MisReservas: React.FC = () => {
  const handleCancel = (id: number) => {
    alert(`Cancelar reserva: ${id}`);
  };

  return (
    <ReservasContainer>
      <Title>Mis Reservas</Title>

      <Table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Doctor</th>
            <th>Especialidad</th>
            <th>Espacio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {reservas.map((res) => (
            <tr key={res.id}>
              <td>{res.fecha}</td>
              <td>{res.hora_inicio} - {res.hora_fin}</td>
              <td>{res.doctor}</td>
              <td>{res.especialidad}</td>
              <td>{res.espacio}</td>

              <td>
                <EstadoBadge estado={res.estado}>
                  {res.estado}
                </EstadoBadge>
              </td>

              <td className="actions">
                {res.estado !== "cancelado" && (
                  <ActionButton
                    className="cancel"
                    onClick={() => handleCancel(res.id)}
                  >
                    Cancelar
                  </ActionButton>
                )}

                <ActionButton className="view">Ver</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ReservasContainer>
  );
};

export default MisReservas;
