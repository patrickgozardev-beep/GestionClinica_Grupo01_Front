import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside<{ open?: boolean }>`
  width: 250px;
  height: calc(100vh - 60px);
  background: #004c4c;
  color: white;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 0 10px rgba(0,0,0,0.2);
  position: fixed;
  left: ${({ open }) => (open ? "0" : "-260px")};
  transition: left 0.3s ease-in-out;
  top: 60px;

  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* --- IMPORTANTÍSIMO: ESTILO DEL NAVLINK --- */
  .sidebar-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: white;
    transition: 0.25s ease-in-out;
  }

  .sidebar-link:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
  }

  /* Active (ruta actual) */
  .sidebar-link.active {
    background: rgba(255,255,255,0.25);
    font-weight: 600;
  }

  .icon {
    display: flex;
    align-items: center;
  }
`;
