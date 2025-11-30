import React from "react";
import {
  DashboardContainer,
  Header,
  StatsGrid,
  StatCard,
  ChartsGrid,
  ChartCard
} from "./DashboardAdmin.styles";

import {
  LineChart, Line,
  XAxis, YAxis, Tooltip,
  ResponsiveContainer,
  BarChart, Bar,
  PieChart, Pie, Cell, Legend
} from "recharts";

const usuariosPorRol = [
  { rol: "Administrador", cantidad: 2 },
  { rol: "Doctor", cantidad: 5 },
  { rol: "Paciente", cantidad: 50 },
];

const reservasPorDia = [
  { dia: "Lun", reservas: 10 },
  { dia: "Mar", reservas: 12 },
  { dia: "Mié", reservas: 8 },
  { dia: "Jue", reservas: 15 },
  { dia: "Vie", reservas: 20 },
];

const ocupacionEspacios = [
  { espacio: "Consultorio 1", porcentaje: 70 },
  { espacio: "Consultorio 2", porcentaje: 50 },
  { espacio: "Gimnasio Principal", porcentaje: 80 },
];

const COLORS = ["#00897b", "#00bfa5", "#16a34a", "#facc15", "#ef4444"];

export const DashboardAdmin: React.FC = () => {
  return (
    <DashboardContainer>
      <Header>
        <h2>Panel Administrativo</h2>
        <p>Resumen general de usuarios, reservas y espacios</p>
      </Header>

      {/* Estadísticas rápidas */}
      <StatsGrid>
        <StatCard>
          <h3>👥 Total de Usuarios</h3>
          <span>57</span>
        </StatCard>

        <StatCard>
          <h3>🏢 Espacios Activos</h3>
          <span>3</span>
        </StatCard>

        <StatCard>
          <h3>📅 Reservas Hoy</h3>
          <span>18</span>
        </StatCard>

        <StatCard>
          <h3>⚠️ Aforo Crítico</h3>
          <span>1</span>
        </StatCard>
      </StatsGrid>

      {/* Gráficos */}
      <ChartsGrid>
        <ChartCard>
          <h3>Reservas por Día</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={reservasPorDia}>
              <XAxis dataKey="dia" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="reservas" stroke="#00897b" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h3>Ocupación de Espacios</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={ocupacionEspacios}>
              <XAxis dataKey="espacio" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="porcentaje" fill="#00bfa5" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <h3>Usuarios por Rol</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={usuariosPorRol}
                dataKey="cantidad"
                nameKey="rol"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {usuariosPorRol.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsGrid>
    </DashboardContainer>
  );
};
