import { render, screen } from "@testing-library/react";
import Login from "../pages/login";

jest.mock("@clerk/nextjs", () => ({
  useSignIn: () => ({
    signIn: jest.fn(),
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
