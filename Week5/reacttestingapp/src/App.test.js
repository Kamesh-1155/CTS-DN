import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Welcome component", () => {
  render(<App />);
  expect(screen.getByText(/Welcome to React Testing/i)).toBeInTheDocument();
});