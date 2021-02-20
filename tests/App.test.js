import { render, screen } from "@testing-library/react";
import LogIn from "../src/pages/Login";

test("renders learn react link", () => {
  render(<LogIn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
