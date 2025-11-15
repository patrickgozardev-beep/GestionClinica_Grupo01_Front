// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user/userSlice";
import sidebarReducer from "./slices/sidebar_slice/sidebarSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
