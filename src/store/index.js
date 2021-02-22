import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import dashboardReducer from "./dashboardSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    dash: dashboardReducer,
  },
});
