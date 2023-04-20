import { render } from "@testing-library/react";
import { type Toast as ToastType } from "react-hot-toast";
import { Toast } from "./Toast";

const t: ToastType = {
  id: "1",
  visible: true,
  type: "success",
  message: "message",
  pauseDuration: 0,
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
  createdAt: 0,
};

describe("Toast", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Toast t={t} />);

    expect(baseElement).toBeTruthy();
  });
});
