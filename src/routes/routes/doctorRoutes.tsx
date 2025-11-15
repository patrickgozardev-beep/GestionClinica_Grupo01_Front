// src/router/doctorRoutes.ts

import DashboardLayout from "../../features/landing_page/DashboardLayout";

export const doctorRoutes = [
  {
    path: "/doctor",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <></> }, // Vista general del día
      { path: "mis-citas", element: <></> }, // Turnos asignados al doctor
      { path: "pacientes", element: <></> }, // Historial / info de pacientes
      { path: "reservas", element: <></> }, // Reservas de espacios si aplica
      { path: "notificaciones", element: <></> }, // Alertas internas
    ],
  },
];
