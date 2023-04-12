import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
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

describe("Home page", () => {
  it("should render successfully", () => {
    render(<Index />);

    expect(screen.getByText("Кабінет члена ФАіСУ")).toBeInTheDocument();
  });

  it("should render user email", () => {
    render(<Index />);
    expect(screen.getByText("test@test.com")).toBeInTheDocument();
  });

  it("should call signOut when button is clicked", () => {
    render(<Index />);
    screen.getByText("Вихід").click();

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});
