import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn : false ,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    clearToken: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export default authSlice.reducer;
