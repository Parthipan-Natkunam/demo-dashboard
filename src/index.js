import React from "react";
import ReactDOM from "react-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset } from "atomize";
import Routes from "./Routes";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <Routes />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("app-root")
);
