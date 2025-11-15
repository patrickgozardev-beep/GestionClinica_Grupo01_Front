import styled from "styled-components";

export const MenuContainer = styled.header`
  width: 100%;
  background-color: #004c4c;
  
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height : 60px;
  h2 {
    margin: 0;
    font-weight: 600;
  }

  nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const MenuItem = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &.active {
      border-bottom: 2px solid white;
    }

    &:hover {
      color: #a0f0f0;
    }
  }
`;

export const UserMenu = styled.div`
  position: relative;
  cursor: pointer;
  padding: 5px; /* aumenta el área para el hover */
  
  .user-icon {
    background: white;
    color: #004c4c;
    border-radius: 50%;
    padding: 8px; /* un poco más grande */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;
    height:50px;
    width:50px;
    &:hover {
      background: #a0f0f0;
    }
  }
`;


export const Dropdown = styled.ul`
  position: absolute;
  right: 0;
  top: 40px;
  background: white;
  color: #004c4c;
  list-style: none;
  margin: 0;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 220px;
  z-index: 100;

  li {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.95rem;

    a {
      color: #004c4c;
      text-decoration: none;
      width: 100%;
      display: block;
    }

    &:hover {
      background: #f0f0f0;
    }
  }
`;

