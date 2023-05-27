import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { withTestTRPC } from "@mcfu/test-utils";
import Index from "../pages/index";

const mockSignOut = vi.fn();
vi.mock("@clerk/nextjs", () => ({
  useUser: () => ({
    user: {
      emailAddresses: [{ emailAddress: "test@test.com" }],
    },
    isLoading: false,
  }),
  useClerk: () => ({
    signOut: mockSignOut,
  }),
}));

const renderComponent = () => {
  render(withTestTRPC({ children: <Index /> }));
};

describe("Home page", () => {
  it("should render successfully", () => {
    renderComponent();

    expect(screen.getByText("Кабінет члена ФАіСУ")).toBeInTheDocument();
  });

  it("should render user email", () => {
    renderComponent();

    expect(screen.getByText("test@test.com")).toBeInTheDocument();
  });

  it("should call signOut when button is clicked", () => {
    renderComponent();
    screen.getByText("Вихід").click();

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});
