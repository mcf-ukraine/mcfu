import { type FC, type PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export const withToaster: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Toaster />
  </>
);
