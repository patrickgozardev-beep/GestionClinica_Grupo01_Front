import React from "react";
import { MenuContainer, MenuItem } from "./Menu.styles";
import { NavLink } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <h2>Clinica Digital</h2>
      <nav>
        <MenuItem>
          <NavLink to="/" end>Inicio</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about">Nosotros</NavLink>
        </MenuItem>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
