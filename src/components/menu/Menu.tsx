import React, { useState } from "react";
import { MenuContainer, MenuItem, UserMenu, Dropdown } from "./Menu.styles";
import { NavLink, useNavigate } from "react-router-dom";
import LoginUser from "../login/LoginUser";
import RegisterUser from "../register/RegisterUser";
import { useDispatch } from "react-redux";
import { setRole, logout } from "../../store/slices/user/userSlice";
import { setSidebarOpen, toggleSidebar } from "../../store/slices/sidebar_slice/sidebarSlice";

interface MenuProps {
  isLoggedIn: boolean;
}

const Menu: React.FC<MenuProps> = ({ isLoggedIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <MenuContainer>
      <h2>Clínica Digital</h2>

      <nav>

      {isLoggedIn && (
        <button
          onClick={() => dispatch(toggleSidebar())}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            color: "white", // o el color que use tu navbar
          }}
        >
          ☰
        </button>
      )}


        <MenuItem>
          <NavLink to="/home" end>Inicio</NavLink>
        </MenuItem>
        {/* <MenuItem>
          <NavLink to="/about">Nosotros</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/appointment">Agenda tu cita</NavLink>
        </MenuItem> */}

        {isLoggedIn ? (
          <UserMenu
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="user-icon">
            </div>

            {showDropdown && (
              <Dropdown>
                <li>
                  <NavLink to="/perfil">Completar información de paciente</NavLink>
                </li>
                <li
                  onClick={() => {
                    dispatch(logout());           // limpia sesión
                    dispatch(setSidebarOpen(false)); // 🔥 cierra el sidebar globalmente
                    navigate("/home");               // 🔥 redirige al inicio

                  }}
                >
                  Cerrar sesión
                </li>
              </Dropdown>
            )}
          </UserMenu>
        ) : (
          <MenuItem  onClick={() => setShowLogin(true)}>
            Iniciar sesión
          </MenuItem> 
        )}
      </nav>
      <LoginUser
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onOpenRegister={() => setShowRegister(true)}
        onLoginSuccess={(role) => {
          dispatch(setRole(role));   // 🔥 asignar rol seleccionado
        }}
      />

      <RegisterUser
        show={showRegister}
        onClose={() => setShowRegister(false)}
      />

    </MenuContainer>
  );
};

export default Menu;
