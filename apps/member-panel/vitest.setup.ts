import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { expect, afterEach, vi } from "vitest";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

vi.mock("next/router", () => require("next-router-mock"));

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
