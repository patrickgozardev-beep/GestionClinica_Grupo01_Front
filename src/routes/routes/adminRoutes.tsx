// src/router/adminRoutes.ts

import { DashboardAdmin } from "../../features/admin/dashboard/DashboardAdmin";
import { AdminEspacios } from "../../features/admin/espacios/AdminEspacios";
import { AdminHorarios } from "../../features/admin/horarios/AdminHorarios";
import { PlantillasHorarios } from "../../features/admin/plantilla-horario/PlantillasHorarios";
import UsuariosReservaciones from "../../features/admin/usuarios-reservaciones/UsuariosReservaciones";
import DashboardLayout from "../../features/landing_page/DashboardLayout";

// Luego tú reemplazas <></> con tus componentes reales.

export const adminRoutes = [
  // Dashboard principal (RF-22)
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DashboardAdmin/> },

      // ----- Usuarios (RF-04) -----
      { path: "usuarios", element: <UsuariosReservaciones/> },
      { path: "usuarios/nuevo", element: <></> },
      { path: "usuarios/:id", element: <></> },

      // ----- Espacios (RF-05, RF-06, RF-07) -----
      { path: "espacios", element: <AdminEspacios/> },
      { path: "espacios/nuevo", element: <></> },
      { path: "espacios/:id", element: <></> },

      // ----- Horarios (RF-08, RF-09, RF-10) -----
      { path: "horarios", element: <AdminHorarios/> },
      { path: "horarios/nuevo", element: <></> },
      { path: "horarios/:id", element: <></> },

      // Plantillas
      { path: "plantilla-horario", element: <PlantillasHorarios/> },

      // ----- Reservas (RF-11 a RF-15) -----
      { path: "reservas", element: <></> },
      { path: "reservas/:id", element: <></> },

      // ----- Control de aforo (RF-16, RF-17) -----
      { path: "aforo", element: <></> },

      // ----- Notificaciones y alertas (RF-19, RF-20, RF-21) -----
      { path: "notificaciones", element: <></> },
      { path: "notificaciones/config", element: <></> },

      // ----- Reportes (RF-24) -----
      { path: "reportes", element: <></> },
    ],
  },
];
