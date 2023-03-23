import { render, screen } from "@testing-library/react";
import { Ui } from "./ui";

describe("Ui", () => {
  it("should render successfully", () => {
    render(<Ui />);

    expect(screen.getByText("Welcome to Ui!")).toBeInTheDocument();
  });
});
