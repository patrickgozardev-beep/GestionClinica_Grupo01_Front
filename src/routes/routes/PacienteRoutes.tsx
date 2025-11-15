// src/router/pacienteRoutes.ts

import DashboardLayout from "../../features/landing_page/DashboardLayout";
import CrearCita from "../../features/paciente/crear-cita/CrearCita";
import DashboardPaciente from "../../features/paciente/dashboard/DashboardPaciente";
import DatosPersonalesPaciente from "../../features/paciente/datos-personales/DatosPersonalesPaciente";
import MisReservas from "../../features/paciente/mis-reservas/MisReservas";

export const pacienteRoutes = [
  {
    path: "/paciente",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DashboardPaciente/> }, // Vista general: próximas citas
      { path: "reservar", element: <CrearCita/> }, // RF-11 / RF-12 crear reserva
      { path: "mis-reservas", element: <MisReservas/> }, // RF-14 cancelar reserva
      { path: "espacios", element: <></> }, // Ver aforo de espacios
      { path: "notificaciones", element: <></> }, // RF-19 recordatorios
      { path: "perfil", element: <DatosPersonalesPaciente/> }, // RF-03 actualizar datos
    ],
  },
];
