import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  active: false,
  loading: false,
  error: "",
  AccessToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.active = true;
    },
    logout: (state) => {
      state.active = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
