import React from "react";
import { SidebarContainer } from "./sidebar.styles";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  User,
  ClipboardList,
  Clock,
  Home
} from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface SidebarProps {
  role: "paciente" | "doctor" | "administrador";
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const open = useSelector((state: RootState) => state.sidebar.open);

  // MENÚ PACIENTE
  const patientMenu = [
    { label: "Dashboard", icon: <Home size={18} />, to: "/paciente/dashboard" },
    { label: "Reservar Cita", icon: <Calendar size={18} />, to: "/paciente/reservar" },
    { label: "Mis Reservas", icon: <ClipboardList size={18} />, to: "/paciente/mis-reservas" },
    { label: "Datos Personales", icon: <User size={18} />, to: "/paciente/perfil" },
  ];

  // MENÚ DOCTOR
  const doctorMenu = [
    { label: "Dashboard", icon: <Home size={18} />, to: "/doctor/dashboard" },
    { label: "Mis Citas", icon: <Calendar size={18} />, to: "/doctor/mis-citas" },
    { label: "Pacientes", icon: <User size={18} />, to: "/doctor/pacientes" },
    { label: "Horario", icon: <Clock size={18} />, to: "/doctor/horario" },
  ];

  // MENÚ ADMIN
  const adminMenu = [
    { label: "Dashboard", icon: <Home size={18} />, to: "/admin/dashboard" },
    { label: "Usuarios", icon: <User size={18} />, to: "/admin/usuarios" },
    { label: "Espacios", icon: <ClipboardList size={18} />, to: "/admin/espacios" },
    { label: "Horarios", icon: <Clock size={18} />, to: "/admin/horarios" },
    { label: "Plantilla de horarios", icon: <Clock size={18} />, to: "/admin/plantilla-horario" },
    { label: "Reservas", icon: <Calendar size={18} />, to: "/admin/reservas" },
    { label: "Aforo", icon: <ClipboardList size={18} />, to: "/admin/aforo" },
    { label: "Notificaciones", icon: <Clock size={18} />, to: "/admin/notificaciones" },
    { label: "Reportes", icon: <ClipboardList size={18} />, to: "/admin/reportes" },
  ];

  const menu =
    role === "paciente" ? patientMenu :
    role === "doctor" ? doctorMenu :
    adminMenu;

  return (
    <SidebarContainer open={open}>
      <ul>
        {menu.map((item) => (
          <li key={item.label}>
          <NavLink
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {item.label}
          </NavLink>

          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;
