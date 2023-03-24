import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import { withTestTRPC } from "../testUtils/withTestTRPC";

describe("Index", () => {
  it("should render successfully", () => {
    render(<Index />, { wrapper: withTestTRPC });

    expect(screen.getByText("Hello friends,")).toBeInTheDocument();
  });
});
