import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { expect, afterEach, vi } from "vitest";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

vi.mock("next/router", () => require("next-router-mock"));

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
