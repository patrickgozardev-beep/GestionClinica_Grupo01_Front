import styled from "styled-components";

interface LayoutProps {
  sidebarOpen: boolean;
}

export const LayoutContainer = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main {
    display: flex;
    flex: 1;
    margin-top: 60px;
  }

  .content {
    flex: 1;
    padding: 20px;
    margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "250px" : "0")};
    transition: margin-left 0.3s ease-in-out; /* animación suave */
  }
`;
