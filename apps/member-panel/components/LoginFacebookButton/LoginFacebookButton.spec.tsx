import { render, screen } from "@testing-library/react";
import { LoginFacebookButton } from "./LoginFacebookButton";

describe("LoginFacebookButton", () => {
  it("should render successfully", () => {
    render(<LoginFacebookButton />);

    expect(screen.getByText("Увійти з Facebook")).toBeInTheDocument();
  });
});
