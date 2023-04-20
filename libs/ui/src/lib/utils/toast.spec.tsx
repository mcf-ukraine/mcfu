import { render } from "@testing-library/react";
import { withToaster } from "@mcfu/test-utils";
import { toast } from "./toast";

const ComponentWithSuccessToast = () => {
  toast.success({
    title: "Success",
    message: "This is a success toast",
  });

  return null;
};

const ComponentWithErrorToast = () => {
  toast.error({
    title: "Error",
    message: "This is an error toast",
  });

  return null;
};

describe("'toast' helper", () => {
  it("renders 'success' toast", () => {
    render(<ComponentWithSuccessToast />, { wrapper: withToaster });
  });

  it("renders 'error' toast", () => {
    render(<ComponentWithErrorToast />, { wrapper: withToaster });
  });
});
