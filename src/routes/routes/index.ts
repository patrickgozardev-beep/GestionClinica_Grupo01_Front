import { publicRoutes } from "./PublicRoutes";
import { pacienteRoutes } from "./PacienteRoutes";
import { adminRoutes } from "./AdminRoutes";
import { doctorRoutes } from "./DoctorRoutes";

export const allRoutes = [
  ...publicRoutes,
  ...adminRoutes,
  ...doctorRoutes,
  ...pacienteRoutes,
];
