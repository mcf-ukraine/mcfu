import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render successfully", () => {
    render(<Button />);

    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
