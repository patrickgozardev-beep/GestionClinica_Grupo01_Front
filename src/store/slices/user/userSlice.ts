import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  role: "paciente" | "doctor" | "admin" | null;
}

const initialState: UserState = {
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<"paciente" | "doctor" | "admin">) => {
      state.role = action.payload;
    },
    logout: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, logout } = userSlice.actions;
export default userSlice.reducer;
