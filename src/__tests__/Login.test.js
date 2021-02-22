import { render as rtlRender, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset } from "atomize";
import { Provider } from "react-redux";
import LogIn from "../pages/Login";
import store from "../store";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

const engine = new Styletron();

const render = (ui) => {
  return rtlRender(
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <StyleReset />
      <Provider store={store}>{ui}</Provider>
    </StyletronProvider>
  );
};

describe("Login Page", () => {
  test("renders brand title", () => {
    render(<LogIn />);
    const titleElement = screen.getByText(/demo board/i);
    expect(titleElement).toBeInTheDocument();
  });
  test("renders the login form", () => {
    const page = render(<LogIn />);
    expect(page.queryByTestId("login-form")).toBeTruthy();
  });
});
