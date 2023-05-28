import { MembershipType } from "@prisma/client";
import { act, render, screen } from "@testing-library/react";
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

const userMock = {
  id: 1,
  clerkId: "cku0q2q6h0000g1tq2q6h0g1t",
  email: "john.doe@test.com",
  firstName: "John",
  lastName: "Doe",
  middleName: "Middle",
  phone: "1234567890",
  birthday: new Date("1990-01-01T00:00:00.000Z"),
  separatedSubdivisionId: 1,
  phoneNumber: "1234567890",
  isMembershipActive: true,
  membershipType: MembershipType.FULL,
  fullName: "John Doe Middle",
  separatedSubdivision: {
    name: "Test Subdivision",
  },
  activityTypes: [
    {
      name: "Test Activity Type",
    },
  ],
};

const renderComponent = () => {
  render(<Index user={userMock} />);
};

describe("Home page", () => {
  it("should render successfully", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: "Кабінет" })
    ).toBeInTheDocument();
  });

  it("should render user email", () => {
    renderComponent();

    expect(screen.getByText("john.doe@test.com")).toBeInTheDocument();
  });

  it("should call signOut when button is clicked", () => {
    renderComponent();
    act(() => {
      screen.getByTestId("open-user-menu").click();
    });
    act(() => {
      screen.getByText("Вихід").click();
    });

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});
