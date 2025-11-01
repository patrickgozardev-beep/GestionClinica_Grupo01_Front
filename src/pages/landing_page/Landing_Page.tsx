// src/layouts/MainLayout/MainLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/menu/Menu";
import { LayoutContainer } from "./Landing_Page.styles";

const MainLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Menu />
      <div className="content">
        <Outlet />
      </div>
    </LayoutContainer>
  );
};

export default MainLayout;
