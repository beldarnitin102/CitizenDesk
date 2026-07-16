import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,

  user: null,

  role: null,

  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;

      state.user = action.payload.user;

      state.role = action.payload.user?.role;

      state.isAuthenticated = true;
    },

    updateUser: (state, action) => {
      state.user = action.payload;

      state.role = action.payload.role;
    },

    logout: (state) => {
      state.token = null;

      state.user = null;

      state.role = null;

      state.isAuthenticated = false;

      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, updateUser, logout } = authSlice.actions;

export default authSlice.reducer;
