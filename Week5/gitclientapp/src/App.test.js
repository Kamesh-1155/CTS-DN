import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders repositories heading", () => {
  render(<App />);
  const heading = screen.getByText(/Repositories/i);
  expect(heading).toBeInTheDocument();
});