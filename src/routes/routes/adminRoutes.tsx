// src/router/adminRoutes.ts

import DashboardLayout from "../../features/landing_page/DashboardLayout";

// Luego tú reemplazas <></> con tus componentes reales.

export const adminRoutes = [
  // Dashboard principal (RF-22)
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <></> },

      // ----- Usuarios (RF-04) -----
      { path: "usuarios", element: <></> },
      { path: "usuarios/nuevo", element: <></> },
      { path: "usuarios/:id", element: <></> },

      // ----- Espacios (RF-05, RF-06, RF-07) -----
      { path: "espacios", element: <></> },
      { path: "espacios/nuevo", element: <></> },
      { path: "espacios/:id", element: <></> },

      // ----- Horarios (RF-08, RF-09, RF-10) -----
      { path: "horarios", element: <></> },
      { path: "horarios/nuevo", element: <></> },
      { path: "horarios/:id", element: <></> },

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
