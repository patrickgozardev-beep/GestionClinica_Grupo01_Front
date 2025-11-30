// src/router/doctorRoutes.ts

import CitasDoctor from "../../features/doctor/citas/CitasDoctor";
import DoctorDashboard from "../../features/doctor/dashboard/DashboardDoctor";
import HorarioDoctor from "../../features/doctor/horario/HorarioDoctor";
import DashboardLayout from "../../features/landing_page/DashboardLayout";

export const doctorRoutes = [
  {
    path: "/doctor",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DoctorDashboard/> }, 
      { path: "mis-citas", element: <CitasDoctor/> }, 
      { path: "pacientes", element: <></> }, 
      { path: "horario", element: <HorarioDoctor/> }, 
      { path: "reservas", element: <></> }, 
      { path: "notificaciones", element: <></> },
    ],
  },
];
