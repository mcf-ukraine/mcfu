import { Toaster as RHTToaster } from "react-hot-toast";

export const Toaster = () => (
  <RHTToaster
    position="bottom-right"
    reverseOrder={false}
    toastOptions={{ custom: { duration: 6000 } }}
  />
);
