import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./DashboardLayout.styles";
import Menu from "../../components/menu/Menu";
import Sidebar from "../../components/sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setSidebarOpen, toggleSidebar } from "../../store/slices/sidebar_slice/sidebarSlice";

const DashboardLayout: React.FC = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.user.role);
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.open);

  return (
    <LayoutContainer sidebarOpen={sidebarOpen}>
      <Menu
        isLoggedIn={!!role}
      />
      <div className="main">
      {role && <Sidebar role={role} />}
      <div className="content">
          <Outlet />
        </div>
      </div>
    </LayoutContainer>

  );
};

export default DashboardLayout;
