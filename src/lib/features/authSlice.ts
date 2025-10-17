import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string | null;
  email: string | null;
}

const initialState: IAuthState = {
  token: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, email } = action.payload;
      state.token = token;
      state.email = email;
    },
    logout: (state) => {
      state.token = null;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
