import { render, screen } from "@testing-library/react";
import Register from "../pages/register";

describe("Register", () => {
  it("should render successfully", () => {
    render(<Register />);

    expect(screen.getByText("Реєстрація")).toBeInTheDocument();
  });
});
