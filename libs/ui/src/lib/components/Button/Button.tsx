import { type FC } from "react";

export type ButtonProps = {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button
    type="button"
    className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    onClick={onClick}
  >
    {children || "Button"}
  </button>
);
