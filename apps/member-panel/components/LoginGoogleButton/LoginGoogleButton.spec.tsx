import { render, screen } from "@testing-library/react";
import { LoginGoogleButton } from "./LoginGoogleButton";

describe("LoginGoogleButton", () => {
  it("should render successfully", () => {
    render(<LoginGoogleButton />);

    expect(screen.getByText("Увійти з Google")).toBeInTheDocument();
  });
});
