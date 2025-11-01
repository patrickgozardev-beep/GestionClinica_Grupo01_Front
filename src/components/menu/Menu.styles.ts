import styled from "styled-components";

export const MenuContainer = styled.header`
  width: 100%;
  background-color: #004c4c;
  color: white;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-weight: 600;
  }

  nav {
    display: flex;
    gap: 1.5rem;
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
