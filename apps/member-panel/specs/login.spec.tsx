import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Login from "../pages/login";

vi.mock("@clerk/nextjs", () => ({
  useSignIn: () => ({
    signIn: vi.fn(),
  }),
}));

describe("Login", () => {
  it("should render successfully", () => {
    render(<Login />);

    expect(screen.getByText("Кабінет члена ФАіСУ")).toBeInTheDocument();
    expect(screen.getByText("Увійти з Google")).toBeInTheDocument();
    expect(screen.getByText("Увійти з Facebook")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Вхід через акаунти соціальних мереж - швидкий та безпечний спосіб входу в систему."
      )
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByText("Увійти")).toBeInTheDocument();
  });
});
