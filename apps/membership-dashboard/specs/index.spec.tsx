import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
  it("should render successfully", () => {
    render(<Index />);

    expect(screen.getByText("Hello there,")).toBeInTheDocument();
  });
});
