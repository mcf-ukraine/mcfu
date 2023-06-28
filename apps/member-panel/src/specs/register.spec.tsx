import { render, screen } from "@testing-library/react";
import { withTestTRPC } from "@mcfu/test-utils";
import Register from "../pages/register";

const renderComponent = () => {
  render(withTestTRPC(<Register />));
};

describe("Register", () => {
  it("should render successfully", () => {
    renderComponent();

    expect(screen.getByText("Кабінет ФАіСУ")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Виберіть активності, якими ви плануєте займатись в рамках членства у ФАіСУ"
      )
    ).toBeInTheDocument();
  });
});
