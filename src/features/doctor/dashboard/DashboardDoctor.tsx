import React from "react";
import {
  DashboardContainer,
  Header,
  StatsGrid,
  StatCard,
  ChartCard
} from "./DashboardDoctor.styles";

import {
  LineChart, Line,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer,
  BarChart, Bar
} from "recharts";

// ICONOS lucide-react
import {
  Users,
  CalendarCheck,
  AlertCircle,
  Star
} from "lucide-react";

const citasPorDia = [
  { day: "Lun", citas: 5 },
  { day: "Mar", citas: 8 },
  { day: "Mié", citas: 6 },
  { day: "Jue", citas: 10 },
  { day: "Vie", citas: 7 }
];

const tiposCitas = [
  { tipo: "Control", cantidad: 20 },
  { tipo: "Urgencias", cantidad: 5 },
  { tipo: "Evaluación", cantidad: 12 },
];

const DoctorDashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <h2>Panel del Doctor</h2>
        <p>Resumen general de tus citas y actividad médica</p>
      </Header>

      {/* Estadísticas rápidas */}
      <StatsGrid>
        <StatCard>
          <div className="icon"><Users size={32} /></div>
          <h3>Pacientes Hoy</h3>
          <span>12</span>
        </StatCard>

        <StatCard>
          <div className="icon"><CalendarCheck size={32} /></div>
          <h3>Citas Pendientes</h3>
          <span>7</span>
        </StatCard>

        <StatCard>
          <div className="icon"><AlertCircle size={32} /></div>
          <h3>Cancelaciones</h3>
          <span>2</span>
        </StatCard>

        <StatCard>
          <div className="icon"><Star size={32} /></div>
          <h3>Satisfacción</h3>
          <span>92%</span>
        </StatCard>
      </StatsGrid>

      {/* Gráfico de lineal */}
      <ChartCard>
        <h3>Citas Atendidas por Día</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={citasPorDia}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="citas" stroke="#00bfa5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Gráfico de barras */}
      <ChartCard>
        <h3>Tipos de Citas Atendidas</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={tiposCitas}>
            <XAxis dataKey="tipo" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cantidad" fill="#00897b" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </DashboardContainer>
  );
};

export default DoctorDashboard;
