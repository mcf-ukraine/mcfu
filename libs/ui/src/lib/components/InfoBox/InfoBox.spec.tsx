import { render, screen } from "@testing-library/react";
import { InfoBox } from "./InfoBox";

describe("InfoBox", () => {
  it("should render successfully", () => {
    render(<InfoBox content="Test Content" />);

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
