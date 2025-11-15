import React from "react";
import {
  DashboardContainer,
  Section,
  Card,
  CardGrid,
  ChartContainer,
} from "./DashboardPaciente.styles";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DashboardPaciente: React.FC = () => {
  const data = [
    { fecha: "Ene", citas: 1 },
    { fecha: "Feb", citas: 0 },
    { fecha: "Mar", citas: 2 },
    { fecha: "Abr", citas: 1 },
    { fecha: "May", citas: 3 },
  ];

  return (
    <DashboardContainer>
      <h1>Panel del Paciente</h1>
      <p>
        Bienvenido nuevamente. Aquí podrás ver un resumen de tu actividad médica,
        próximas citas y accesos rápidos.
      </p>

      <CardGrid>
        <Card>
          <h3>Reservar Cita</h3>
          <p>Agenda una consulta con el especialista de tu preferencia.</p>
        </Card>

        <Card>
          <h3>Datos Personales</h3>
          <p>Completa o actualiza tu información como paciente.</p>
        </Card>

        <Card>
          <h3>Historial Médico</h3>
          <p>Revisa tus consultas pasadas y diagnósticos.</p>
        </Card>
      </CardGrid>

      <Section>
        <h2>Actividad de Citas</h2>
        <p>Historial de citas registradas en los últimos meses.</p>

        <ChartContainer>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fecha" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line type="monotone" dataKey="citas" stroke="#008080" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Section>
    </DashboardContainer>
  );
};

export default DashboardPaciente;
