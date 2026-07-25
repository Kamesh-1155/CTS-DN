import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders welcome message", () => {
    render(<Welcome />);

    const heading = screen.getByText(/Welcome to React Testing/i);

    expect(heading).toBeInTheDocument();
});