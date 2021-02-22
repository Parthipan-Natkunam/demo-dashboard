import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: window.localStorage.getItem("Token") ?? null,
  toast: null,
  isLoading: false,
};

const setTokenMethod = (state, action) =>
  (state = { ...state, token: action.payload });
const resetTokenMethod = (state) => (state = { ...state, token: null });
const setToastMethod = (state, action) =>
  (state = { ...state, toast: action.payload });
const resetToastMethod = (state) => (state = { ...state, toast: null });
const toggleLoadingMethod = (state, action) =>
  (state = { ...state, isLoading: action.payload });

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToken: setTokenMethod,
    resetToken: resetTokenMethod,
    setToast: setToastMethod,
    resetToast: resetToastMethod,
    toggleLoading: toggleLoadingMethod,
  },
});

export const {
  setToken,
  resetToken,
  setToast,
  resetToast,
  toggleLoading,
} = appSlice.actions;

export const selectToken = (state) => state?.app?.token;
export const selectisAuthed = (state) => !!state?.app?.token;
export const selectShowToast = (state) => !!state?.app?.toast;
export const selectToast = (state) => state?.app?.toast;
export const selectisLoading = (state) => state?.app?.isLoading;

export default appSlice.reducer;
