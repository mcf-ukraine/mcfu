import { render } from "@testing-library/react";
import { ToggleColorModeButton } from "./ToggleColorModeButton";

describe("ToggleColorModeButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ToggleColorModeButton />);
    expect(baseElement).toBeTruthy();
  });
});
