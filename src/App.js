import React from "react";
import { useSelector } from "react-redux";
import { selectShowToast, selectToast } from "./store/appSlice";
import Routes from "./Routes";
import { Toast } from "./components";

export function App() {
  const showToast = useSelector(selectShowToast);
  const toast = useSelector(selectToast);

  return (
    <>
      <Routes />
      {showToast && <Toast type={toast?.type} message={toast?.message} />}
    </>
  );
}
