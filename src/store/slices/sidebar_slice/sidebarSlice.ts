import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  open: boolean;
}

const initialState: SidebarState = {
  open: false, // cerrado por defecto
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.open = action.payload;
    },
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { setSidebarOpen, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
