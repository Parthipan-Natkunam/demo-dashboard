import React from "react";
import ReactDOM from "react-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset } from "atomize";
import { Provider } from "react-redux";
import store from "./store";
import { App } from "./App";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <Provider store={store}>
        <App />
      </Provider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("app-root")
);
