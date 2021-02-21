import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  toast: null,
};

const setTokenMethod = (state, action) =>
  (state = { ...state, token: action.payload });
const resetTokenMethod = (state) => (state = { ...state, token: null });
const setToastMethod = (state, action) =>
  (state = { ...state, toast: action.payload });
const resetToastMethod = (state) => (state = { ...state, toast: null });

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: setTokenMethod,
    resetToken: resetTokenMethod,
    setToast: setToastMethod,
    resetToast: resetToastMethod,
  },
});

export const { setToken, resetToken, setToast, resetToast } = appSlice.actions;

export const selectToken = (state) => state?.app?.token;
export const selectisAuthed = (state) => !!state?.app?.token;
export const selectShowToast = (state) => !!state?.app?.toast;
export const selectToast = (state) => state?.app?.toast;

export default appSlice.reducer;