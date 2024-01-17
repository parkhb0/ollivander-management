import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  error: "",
};

const farmSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default farmSlice;
