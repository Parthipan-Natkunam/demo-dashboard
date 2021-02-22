import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: 0,
  showLoader: false,
};

const currentTabSetter = (state, action) =>
  (state = { ...state, currentTab: action.payload });
const toggleShowLoaderMethod = (state, action) =>
  (state = { ...state, showLoader: action.payload });

export const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setCurrentTab: currentTabSetter,
    toggleShowLoader: toggleShowLoaderMethod,
  },
});

export const { setCurrentTab, toggleShowLoader } = dashSlice.actions;

export const selectCurrentTab = (state) => state?.dash?.currentTab;
export const selectShowLoader = (state) => state?.dash?.showLoader;

export default dashSlice.reducer;
