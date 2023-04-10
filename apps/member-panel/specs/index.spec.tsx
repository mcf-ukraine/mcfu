import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../pages/index";
import { withTestTRPC } from "../testUtils/withTestTRPC";

describe("Index", () => {
  it.skip("should render successfully", () => {
    render(<Index />, { wrapper: withTestTRPC });

    expect(screen.getByText("Hello,")).toBeInTheDocument();
  });
});
